// =========================================================
// Fonction Netlify : comptes élèves, connexion, progression, espace admin
// Stockage : Netlify Blobs (intégré à Netlify, rien à installer à part le package).
// Variables d'environnement Netlify :
//   ADMIN_PASSWORD  (obligatoire) mot de passe du compte ADMIN
//   SESSION_SECRET  (conseillé)   longue phrase secrète pour signer les sessions
// =========================================================
import crypto from "node:crypto";

const STORE_NAME = "pruefung";
const SESSION_DAYS = 30;
const MAX_FAILS = 8, LOCK_MIN = 15;

/* ---------- stockage ---------- */
let _store = null;
async function store() {
  if (globalThis.__PT_STORE__) return globalThis.__PT_STORE__;   // tests
  if (!_store) { const { getStore } = await import("@netlify/blobs"); _store = getStore({ name: STORE_NAME, consistency: "strong" }); }
  return _store;
}
const getJ = async k => (await store()).get(k, { type: "json" });
const setJ = async (k, v) => (await store()).setJSON(k, v);
const del = async k => (await store()).delete(k);
async function listKeys(prefix) { const r = await (await store()).list({ prefix }); return (r.blobs || []).map(b => b.key); }

/* ---------- utilitaires ---------- */
const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
const today = () => new Date().toISOString().slice(0, 10);
const nowIso = () => new Date().toISOString();
const cleanId = s => String(s || "").trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "").slice(0, 32);
const cut = (s, n) => String(s ?? "").slice(0, n);
const VALID_ACCES = /^(\*|A1|A2|B1|B2|(goethe|osd)-(A1|A2|B1|B2))$/;
const cleanAcces = a => (Array.isArray(a) ? a : []).map(x => String(x)).filter(x => VALID_ACCES.test(x)).slice(0, 12);
const cleanDate = d => /^\d{4}-\d{2}-\d{2}$/.test(String(d || "")) ? String(d) : "";

function secret() {
  const s = process.env.SESSION_SECRET || ("pt::" + (process.env.ADMIN_PASSWORD || ""));
  return crypto.createHash("sha256").update(s).digest();
}
const b64u = b => Buffer.from(b).toString("base64url");
function sign(payload) { const p = b64u(JSON.stringify(payload)); const h = crypto.createHmac("sha256", secret()).update(p).digest("base64url"); return p + "." + h; }
function verify(tok) {
  if (!tok || typeof tok !== "string" || !tok.includes(".")) return null;
  const [p, h] = tok.split(".");
  const exp = crypto.createHmac("sha256", secret()).update(p).digest("base64url");
  if (h.length !== exp.length || !crypto.timingSafeEqual(Buffer.from(h), Buffer.from(exp))) return null;
  try { const o = JSON.parse(Buffer.from(p, "base64url").toString()); return o.exp > Date.now() ? o : null; } catch { return null; }
}
function hashPw(pw, salt = crypto.randomBytes(16).toString("hex")) { return { salt, hash: crypto.scryptSync(String(pw), salt, 32).toString("hex") }; }
function checkPw(pw, u) { if (!u || !u.salt) return false; const h = crypto.scryptSync(String(pw), u.salt, 32); const e = Buffer.from(u.hash, "hex"); return h.length === e.length && crypto.timingSafeEqual(h, e); }
function eqConst(a, b) { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && crypto.timingSafeEqual(x, y); }
function genPw() { const w = "abcdefghjkmnpqrstuvwxyz", d = "23456789"; let s = ""; for (let i = 0; i < 4; i++) s += w[crypto.randomInt(w.length)]; for (let i = 0; i < 4; i++) s += d[crypto.randomInt(d.length)]; return s; }
const publicUser = u => ({ id: u.id, nom: u.nom || "", tel: u.tel || "", acces: u.acces || [], fin: u.fin || "", actif: u.actif !== false, role: u.role || "student", note: u.note || "", created: u.created || "", lastLogin: u.lastLogin || "", logins: u.logins || 0 });
const expired = u => u.fin && new Date(u.fin + "T23:59:59") < new Date();

async function auth(req) {
  const h = req.headers.get("authorization") || "";
  const tok = h.startsWith("Bearer ") ? h.slice(7) : "";
  const s = verify(tok); if (!s) return null;
  if (s.role === "admin") return { id: "ADMIN", role: "admin" };
  const u = await getJ("users/" + s.id);
  if (!u || u.actif === false || expired(u)) return null;
  if ((u.pwv || 0) !== (s.pwv || 0)) return null; // mot de passe changé → sessions invalides
  return u;
}

/* ---------- résumé de progression ---------- */
function summary(results) {
  const r = results || {}; let n = 0, sum = 0, last = "", ok = 0;
  for (const k of Object.keys(r)) for (const m of Object.keys(r[k] || {})) {
    const x = r[k][m]; if (!x || typeof x.score !== "number") continue;
    n++; sum += x.score; if (x.score >= 60) ok++; if ((x.date || "") > last) last = x.date || "";
  }
  return { modules: n, moyenne: n ? Math.round(sum / n) : null, reussis: ok, dernier: last };
}
function cleanResults(r) {
  const out = {}; if (!r || typeof r !== "object") return out;
  for (const k of Object.keys(r).slice(0, 300)) {
    if (!/^[a-z]+-[AB][12]\|[a-z0-9]+$/.test(k)) continue;
    const mods = r[k] || {}; out[k] = {};
    for (const m of ["lesen", "hoeren", "schreiben", "sprechen"]) {
      const x = mods[m]; if (!x || typeof x.score !== "number") continue;
      out[k][m] = { score: Math.max(0, Math.min(100, Math.round(x.score))), date: cleanDate(x.date) || today(), ...(x.self ? { self: true } : {}), ...(x.exam ? { exam: true } : {}) };
    }
  }
  return out;
}
function mergeResults(a, b) { // garde la plus récente
  const out = JSON.parse(JSON.stringify(a || {}));
  for (const k of Object.keys(b || {})) { out[k] = out[k] || {}; for (const m of Object.keys(b[k])) { const x = out[k][m], y = b[k][m]; if (!x || (y.date || "") >= (x.date || "")) out[k][m] = y; } }
  return out;
}

/* ---------- routes ---------- */
async function login(req) {
  let b; try { b = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
  const id = cleanId(b.id), pw = String(b.pw || "");
  if (!id || !pw) return json({ error: "bad_login" }, 401);
  if (!process.env.ADMIN_PASSWORD) return json({ error: "not_configured" }, 503);

  // anti force brute
  const fk = "fails/" + id, f = (await getJ(fk)) || { n: 0, t: 0 };
  if (f.n >= MAX_FAILS && Date.now() - f.t < LOCK_MIN * 60000) return json({ error: "locked", minutes: LOCK_MIN }, 429);
  const fail = async () => { await setJ(fk, { n: (f.n >= MAX_FAILS ? 0 : f.n) + 1, t: Date.now() }); return json({ error: "bad_login" }, 401); };

  if (id === "ADMIN") {
    if (!eqConst(pw, process.env.ADMIN_PASSWORD)) return fail();
    await del(fk).catch(() => {});
    return json({ ok: true, token: sign({ id: "ADMIN", role: "admin", exp: Date.now() + 7 * 864e5 }), user: { id: "ADMIN", nom: "Admin", acces: ["*"], fin: "", role: "admin" } });
  }
  const u = await getJ("users/" + id);
  if (!u || !checkPw(pw, u)) return fail();
  await del(fk).catch(() => {});
  if (u.actif === false) return json({ error: "blocked" }, 403);
  if (expired(u)) return json({ error: "expired", fin: u.fin }, 403);
  u.lastLogin = nowIso(); u.logins = (u.logins || 0) + 1; await setJ("users/" + id, u);
  const p = (await getJ("progress/" + id)) || {};
  return json({ ok: true, token: sign({ id, role: "student", pwv: u.pwv || 0, exp: Date.now() + SESSION_DAYS * 864e5 }), user: publicUser(u), results: p.results || {} });
}

async function me(req) {
  const u = await auth(req); if (!u) return json({ error: "auth" }, 401);
  if (u.role === "admin") return json({ ok: true, user: { id: "ADMIN", nom: "Admin", acces: ["*"], role: "admin" } });
  return json({ ok: true, user: publicUser(u) });
}

async function progress(req) {
  const u = await auth(req); if (!u) return json({ error: "auth" }, 401);
  if (u.role === "admin") return json({ ok: true, results: {} });
  const k = "progress/" + u.id, cur = (await getJ(k)) || { results: {} };
  if (req.method === "GET") return json({ ok: true, results: cur.results || {} });
  let b; try { b = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
  const results = mergeResults(cur.results, cleanResults(b.results));
  const vocab = Math.max(0, Math.min(5000, Number(b.vocabAcquis) || cur.vocabAcquis || 0));
  await setJ(k, { results, vocabAcquis: vocab, updated: nowIso() });
  return json({ ok: true, results });
}

async function admin(req, parts) {
  const u = await auth(req); if (!u || u.role !== "admin") return json({ error: "auth" }, 401);
  const what = parts[0];

  if (what === "students" && req.method === "GET" && !parts[1]) {
    const keys = await listKeys("users/");
    const list = [];
    for (const k of keys) {
      const s = await getJ(k); if (!s) continue;
      const p = (await getJ("progress/" + s.id)) || {};
      list.push({ ...publicUser(s), progres: summary(p.results), vocabAcquis: p.vocabAcquis || 0, updated: p.updated || "" });
    }
    list.sort((a, b) => a.id.localeCompare(b.id));
    return json({ ok: true, students: list });
  }

  if (what === "students" && req.method === "GET" && parts[1]) {
    const id = cleanId(parts[1]); const s = await getJ("users/" + id); if (!s) return json({ error: "not_found" }, 404);
    const p = (await getJ("progress/" + id)) || {};
    return json({ ok: true, student: publicUser(s), results: p.results || {}, vocabAcquis: p.vocabAcquis || 0, updated: p.updated || "" });
  }

  if (what === "students" && req.method === "POST") {
    let b; try { b = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
    const id = cleanId(b.id); if (!id || id === "ADMIN" || id === "ESSAI") return json({ error: "bad_id" }, 400);
    const k = "users/" + id, old = await getJ(k);
    if (b.create && old) return json({ error: "exists" }, 409);
    const s = old || { id, created: nowIso(), role: "student", pwv: 0 };
    if (b.nom !== undefined) s.nom = cut(b.nom, 60);
    if (b.tel !== undefined) s.tel = cut(b.tel, 30);
    if (b.note !== undefined) s.note = cut(b.note, 300);
    if (b.acces !== undefined) s.acces = cleanAcces(b.acces);
    if (b.fin !== undefined) s.fin = cleanDate(b.fin);
    if (b.actif !== undefined) s.actif = !!b.actif;
    let newPw = null;
    if (b.pw || !old) { newPw = b.pw ? cut(b.pw, 64) : genPw(); if (newPw.length < 4) return json({ error: "pw_short" }, 400); Object.assign(s, hashPw(newPw)); s.pwv = (s.pwv || 0) + (old ? 1 : 0); }
    await setJ(k, s);
    if (newPw) await del("fails/" + id).catch(() => {});
    return json({ ok: true, student: publicUser(s), ...(newPw ? { pw: newPw } : {}) });
  }

  if (what === "students" && req.method === "DELETE" && parts[1]) {
    const id = cleanId(parts[1]); await del("users/" + id); await del("progress/" + id).catch(() => {}); await del("fails/" + id).catch(() => {});
    return json({ ok: true });
  }

  if (what === "resetprogress" && req.method === "POST") {
    let b; try { b = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
    await del("progress/" + cleanId(b.id)).catch(() => {}); return json({ ok: true });
  }
  return json({ error: "route" }, 404);
}

export default async (req) => {
  const url = new URL(req.url);
  const parts = url.pathname.replace(/^\/api\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
  try {
    if (parts[0] === "ping") return json({ ok: true, configured: !!process.env.ADMIN_PASSWORD });
    if (parts[0] === "login" && req.method === "POST") return await login(req);
    if (parts[0] === "me") return await me(req);
    if (parts[0] === "progress") return await progress(req);
    if (parts[0] === "admin") return await admin(req, parts.slice(1));
    return json({ error: "route" }, 404);
  } catch (e) {
    return json({ error: "server", detail: String(e && e.message || e).slice(0, 200) }, 500);
  }
};

export const config = { path: ["/api/ping", "/api/login", "/api/me", "/api/progress", "/api/admin/*"] };
