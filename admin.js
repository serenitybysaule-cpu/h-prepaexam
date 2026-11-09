/* =========================================================
   Prüfungstrainer — comptes serveur, synchronisation et ESPACE ADMIN
   - Sur Netlify (ADMIN_PASSWORD configuré) : tout passe par /api (Netlify Blobs).
   - Ailleurs (aperçu, fichier local) : mode démo, données dans ce navigateur.
   Chargé AVANT app.js (utilise DB, S, render… au moment de l'appel).
   ========================================================= */

const SRV = { mode: null };               // "server" | "local"
const LEVELS = ["A1", "A2", "B1", "B2"], INSTS = [["goethe", "Goethe"], ["osd", "ÖSD"]];
const isAdmin = () => !!(DB.user && DB.user.role === "admin");

/* ---------- détection du serveur ---------- */
async function detectServer() {
  if (SRV.mode) return SRV.mode;
  try {
    if (location.protocol === "file:") throw 0;
    const r = await fetch("/api/ping", { cache: "no-store" });
    const j = await r.json();
    SRV.mode = (r.ok && j.ok && j.configured) ? "server" : "local";
  } catch (e) { SRV.mode = "local"; }
  return SRV.mode;
}

/* ---------- appel API (serveur réel ou démo locale) ---------- */
async function apiCall(method, path, body) {
  if ((await detectServer()) === "local") return localApi(method, path, body);
  try {
    const r = await fetch("/api/" + path, { method, headers: { "Content-Type": "application/json", ...(DB.token ? { authorization: "Bearer " + DB.token } : {}) }, body: body ? JSON.stringify(body) : undefined });
    const j = await r.json().catch(() => ({ error: "bad_json" }));
    return { status: r.status, ...j };
  } catch (e) { return { status: 0, error: "offline" }; }
}

/* ---------- démo locale (aperçu sans serveur) ---------- */
const DEMO_KEY = "hcf_admin_demo_v1";
const demoDB = () => { try { return JSON.parse(localStorage.getItem(DEMO_KEY)) || { users: {}, progress: {} }; } catch (e) { return { users: {}, progress: {} }; } };
const demoSave = d => { try { localStorage.setItem(DEMO_KEY, JSON.stringify(d)); } catch (e) {} };
function genPwLocal() { const w = "abcdefghjkmnpqrstuvwxyz", d = "23456789"; let s = ""; for (let i = 0; i < 4; i++) s += w[Math.floor(Math.random() * w.length)]; for (let i = 0; i < 4; i++) s += d[Math.floor(Math.random() * d.length)]; return s; }
const isExpired = fin => fin && new Date(fin + "T23:59:59") < new Date();
function summaryOf(results) { let n = 0, sum = 0, ok = 0, last = ""; for (const k in results || {}) for (const m in results[k] || {}) { const x = results[k][m]; if (!x || typeof x.score !== "number") continue; n++; sum += x.score; if (x.score >= 60) ok++; if ((x.date || "") > last) last = x.date || ""; } return { modules: n, moyenne: n ? Math.round(sum / n) : null, reussis: ok, dernier: last }; }
function mergeRes(a, b) { const out = JSON.parse(JSON.stringify(a || {})); for (const k in b || {}) { out[k] = out[k] || {}; for (const m in b[k]) { const x = out[k][m], y = b[k][m]; if (!x || (y.date || "") >= (x.date || "")) out[k][m] = y; } } return out; }
const pubU = u => ({ id: u.id, nom: u.nom || "", tel: u.tel || "", acces: u.acces || [], fin: u.fin || "", actif: u.actif !== false, note: u.note || "", created: u.created || "", lastLogin: u.lastLogin || "", logins: u.logins || 0, role: u.role || "student", source: u.source || "" });

function localApi(method, path, body) {
  const d = demoDB(), parts = path.split("/"), tokId = (DB.token || "").replace(/^local:/, "");
  const cfgUsers = (CFG.comptes || []).filter(c => c.id.toUpperCase() !== "ADMIN").map(c => ({ ...c, id: c.id.toUpperCase(), source: "config.js" }));
  const findUser = id => d.users[id] || cfgUsers.find(c => c.id === id);
  if (path === "login") {
    const id = String(body.id || "").trim().toUpperCase(), pw = String(body.pw || "").trim();
    const adm = (CFG.comptes || []).find(c => c.id.toUpperCase() === "ADMIN");
    if (id === "ADMIN" && adm && adm.pass === pw) return { status: 200, ok: true, token: "local:ADMIN", user: { id: "ADMIN", nom: "Admin", acces: ["*"], role: "admin" } };
    const u = findUser(id);
    if (!u || (u.pw || u.pass) !== pw) return { status: 401, error: "bad_login" };
    if (u.actif === false) return { status: 403, error: "blocked" };
    if (isExpired(u.fin)) return { status: 403, error: "expired", fin: u.fin };
    if (d.users[id]) { d.users[id].lastLogin = new Date().toISOString(); d.users[id].logins = (d.users[id].logins || 0) + 1; }
    d.progress[id] = d.progress[id] || { results: {} }; demoSave(d);
    return { status: 200, ok: true, token: "local:" + id, user: pubU(u), results: d.progress[id].results };
  }
  if (path === "me") { const u = tokId === "ADMIN" ? { id: "ADMIN", role: "admin", acces: ["*"] } : findUser(tokId); return u && u.actif !== false && !isExpired(u.fin) ? { status: 200, ok: true, user: pubU(u) } : { status: 401, error: "auth" }; }
  if (path === "progress") {
    if (!tokId || tokId === "ADMIN") return { status: 200, ok: true, results: {} };
    const cur = d.progress[tokId] || { results: {} };
    if (method === "POST") { cur.results = mergeRes(cur.results, body.results); cur.vocabAcquis = body.vocabAcquis || 0; cur.updated = new Date().toISOString(); d.progress[tokId] = cur; demoSave(d); }
    return { status: 200, ok: true, results: cur.results };
  }
  if (parts[0] === "admin") {
    if (tokId !== "ADMIN") return { status: 401, error: "auth" };
    if (parts[1] === "students" && method === "GET" && !parts[2]) {
      const all = { ...Object.fromEntries(cfgUsers.map(u => [u.id, u])), ...d.users };
      return { status: 200, ok: true, students: Object.values(all).map(u => { const p = d.progress[u.id] || {}; return { ...pubU(u), progres: summaryOf(p.results), vocabAcquis: p.vocabAcquis || 0, updated: p.updated || "" }; }).sort((a, b) => a.id.localeCompare(b.id)) };
    }
    if (parts[1] === "students" && method === "GET") { const id = parts[2]; const u = findUser(id); if (!u) return { status: 404, error: "not_found" }; const p = d.progress[id] || {}; return { status: 200, ok: true, student: pubU(u), results: p.results || {}, vocabAcquis: p.vocabAcquis || 0, updated: p.updated || "" }; }
    if (parts[1] === "students" && method === "POST") {
      const id = String(body.id || "").trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "").slice(0, 32);
      if (!id || id === "ADMIN" || id === "ESSAI") return { status: 400, error: "bad_id" };
      let old = d.users[id]; const cfg = cfgUsers.find(c => c.id === id);
      if (body.create && (old || cfg)) return { status: 409, error: "exists" };
      if (!old && cfg) old = { ...cfg, pw: cfg.pass, source: "" }; // une modification copie le compte config.js dans la démo
      const u = old || { id, created: new Date().toISOString(), role: "student" };
      ["nom", "tel", "note", "fin"].forEach(f => { if (body[f] !== undefined) u[f] = String(body[f]); });
      if (body.acces !== undefined) u.acces = body.acces; if (body.actif !== undefined) u.actif = !!body.actif;
      let pw = null; if (body.pw || !old) { pw = body.pw || genPwLocal(); u.pw = pw; }
      delete u.pass; d.users[id] = u; demoSave(d); return { status: 200, ok: true, student: pubU(u), ...(pw ? { pw } : {}) };
    }
    if (parts[1] === "students" && method === "DELETE") { delete d.users[parts[2]]; delete d.progress[parts[2]]; demoSave(d); return { status: 200, ok: true }; }
    if (parts[1] === "resetprogress") { delete d.progress[body.id]; demoSave(d); return { status: 200, ok: true }; }
  }
  return { status: 404, error: "route" };
}

/* ---------- connexion / déconnexion ---------- */
const STASH = id => KEY + "::" + id;
function stashUserData() { if (!DB.user || DB.user.trial) return; try { localStorage.setItem(STASH(DB.user.id), JSON.stringify({ results: DB.results, vocab: DB.vocab, drafts: DB.drafts, notes: DB.notes, ai: DB.ai })); } catch (e) {} }
function restoreUserData(id) { let o = {}; try { o = JSON.parse(localStorage.getItem(STASH(id))) || {}; } catch (e) {} DB.results = o.results || {}; DB.vocab = o.vocab || {}; DB.drafts = o.drafts || {}; DB.notes = o.notes || {}; DB.ai = o.ai || {}; }
const ERR = {
  bad_login: "Diso ny ID na ny teny miafina. · Identifiant ou mot de passe incorrect.",
  blocked: "Voasakana ny kaontinao. Antsoy ny H Conseil. · Compte bloqué, contactez H Conseil.",
  expired: "Tapitra ny fidiranao. · Accès expiré.",
  locked: "Diso imbetsaka: andraso 15 minitra. · Trop d'essais, réessayez dans 15 min.",
  offline: "Tsy misy Internet. · Pas de connexion.",
  not_configured: "Mbola tsy vonona ny serveur. · Serveur pas encore configuré."
};
async function doLogin() {
  const id = $("#lid").value.trim().toUpperCase(), pw = $("#lpw").value.trim(), btn = $("#lbtn");
  if (btn) { btn.disabled = true; btn.innerHTML = '<span class="spin"></span>'; }
  const r = await apiCall("POST", "login", { id, pw });
  if (btn) { btn.disabled = false; btn.textContent = "Hiditra · Connexion"; }
  if (!r.ok) { $("#lerr").textContent = (ERR[r.error] || ERR.bad_login) + (r.fin ? " (" + r.fin + ")" : ""); return; }
  DB.token = r.token; DB.user = { ...r.user, role: r.user.role || "student" };
  restoreUserData(DB.user.id);
  DB.results = mergeRes(DB.results, r.results || {});
  const f = (DB.user.acces || [])[0] || ""; if (f.startsWith("osd")) S.inst = DB.inst = "osd"; else if (f.startsWith("goethe")) S.inst = DB.inst = "goethe";
  AD.list = null; save(); go(isAdmin() ? "admin" : "home"); syncNow();
}
function logout() { stashUserData(); AD.list = null; AD.detail = null; Object.assign(DB, { user: null, token: null, results: {}, vocab: {}, drafts: {}, notes: {}, ai: {} }); save(); go("login"); }

/* ---------- synchronisation des résultats ---------- */
let _syncT = null;
function syncSoon() { clearTimeout(_syncT); _syncT = setTimeout(syncNow, 1500); }
async function syncNow() {
  if (!DB.user || DB.user.trial || isAdmin() || !DB.token) return;
  const vocabAcquis = Object.values(DB.vocab || {}).filter(v => v === 2).length;
  const r = await apiCall("POST", "progress", { results: DB.results, vocabAcquis });
  if (r.ok && r.results) { DB.results = mergeRes(DB.results, r.results); save(); }
  if (r.status === 401) sessionLost();
}
function sessionLost() { toast("Tapitra ny session · Reconnectez-vous"); logout(); }
async function boot() {
  render();
  await detectServer();
  if (DB.user && !DB.user.trial && DB.token) {
    const r = await apiCall("GET", "me");
    if (r.status === 401 || r.status === 403) return sessionLost();
    if (r.ok && r.user) { DB.user = { ...DB.user, ...r.user }; save(); render(); syncNow(); }
  } else if (DB.user && !DB.user.trial && !DB.token) { logout(); }   // ancienne session v3 (sans serveur)
  if (S.view === "login") render();
}

/* =========================================================
   ESPACE ADMIN
   ========================================================= */
const AD = { list: null, q: "", filter: "all", loading: false, detail: null };
async function adminLoad() {
  AD.loading = true; render();
  const r = await apiCall("GET", "admin/students");
  AD.loading = false;
  if (r.status === 401) return sessionLost();
  AD.list = r.ok ? r.students : []; AD.err = r.ok ? "" : (r.error || "erreur"); render();
}
const accesLabel = a => (a || []).map(x => x === "*" ? "Tout" : x.replace("goethe-", "Goethe ").replace("osd-", "ÖSD ")).join(", ") || "—";
const daysLeft = fin => fin ? Math.ceil((new Date(fin + "T23:59:59") - new Date()) / 864e5) : null;
function statusPill(s) {
  if (!s.actif) return `<span class="pill r">⏸ Voasakana · Bloqué</span>`;
  const d = daysLeft(s.fin);
  if (d !== null && d < 0) return `<span class="pill r">⌛ Tapitra · Expiré</span>`;
  if (d !== null && d <= 14) return `<span class="pill o">⚠️ ${d} j</span>`;
  return `<span class="pill g">✓ Mavitrika · Actif</span>`;
}
const fmtDate = iso => iso ? iso.slice(0, 10).split("-").reverse().join("/") : "—";
function since(iso) { if (!iso) return "jamais"; const d = Math.floor((Date.now() - new Date(iso)) / 864e5); return d <= 0 ? "aujourd'hui" : d === 1 ? "hier" : "il y a " + d + " j"; }

function vAdmin() {
  if (!isAdmin()) return vHome();
  if (AD.list === null && !AD.loading) setTimeout(adminLoad, 0);
  const L = AD.list || [], q = AD.q.toLowerCase();
  const act = L.filter(s => s.actif && !isExpired(s.fin)).length, exp = L.filter(s => isExpired(s.fin)).length;
  const week = L.filter(s => s.lastLogin && Date.now() - new Date(s.lastLogin) < 7 * 864e5).length;
  const soon = L.filter(s => { const d = daysLeft(s.fin); return s.actif && d !== null && d >= 0 && d <= 14; }).length;
  const shown = L.filter(s => (!q || (s.id + " " + s.nom + " " + s.tel).toLowerCase().includes(q))
    && (AD.filter === "all" || (AD.filter === "actif" && s.actif && !isExpired(s.fin)) || (AD.filter === "expire" && (isExpired(s.fin) || !s.actif)) || (AD.filter === "bientot" && s.actif && daysLeft(s.fin) !== null && daysLeft(s.fin) >= 0 && daysLeft(s.fin) <= 14)));
  const demo = SRV.mode === "local" ? `<div class="card" style="background:#fff7e6;border-color:#f5c26b;margin-top:12px"><b>🧪 Mode démo (aperçu)</b><p class="small" style="margin:4px 0 0">Tsy misy serveur eto: ireo kaonty noforoninao dia ao amin'ity navigateur ity ihany. Rehefa ao amin'ny Netlify (miaraka amin'ny ADMIN_PASSWORD) dia voatahiry ao amin'ny serveur avokoa.<br><span class="fr">Pas de serveur ici : les comptes créés restent dans ce navigateur. Sur Netlify avec ADMIN_PASSWORD, tout est enregistré sur le serveur.</span></p></div>` : "";
  const cards = shown.map(s => {
    const p = s.progres || {};
    return `<div class="card adm" style="margin-top:10px">
      <div class="row" style="justify-content:space-between;align-items:flex-start"><div><b style="font-size:16px">${esc(s.id)}</b> ${s.source ? `<span class="pill">config.js</span>` : ""}<div class="muted small">${esc(s.nom || "—")}${s.tel ? " · " + esc(s.tel) : ""}</div></div>${statusPill(s)}</div>
      <div class="small" style="margin-top:8px;display:grid;grid-template-columns:1fr 1fr;gap:4px 12px">
        <span>🎓 ${esc(accesLabel(s.acces))}</span><span>📅 → ${fmtDate(s.fin)}</span>
        <span>🔑 ${since(s.lastLogin)} (${s.logins || 0}×)</span><span>📊 ${p.modules || 0} modules${p.moyenne != null ? ` · moy. <b>${p.moyenne}</b>` : ""}</span>
      </div>
      <div class="row" style="margin-top:10px;gap:6px;flex-wrap:wrap">
        <button class="btn sm" onclick="adminOpen('${esc(s.id)}')">📊 Résultats</button>
        <button class="btn ghost sm" onclick="adminEdit('${esc(s.id)}')">✏️ Modifier</button>
        <button class="btn ghost sm" onclick="adminExtend('${esc(s.id)}')">➕ Prolonger</button>
        <button class="btn ghost sm" onclick="adminNewPw('${esc(s.id)}')">🔑 Mot de passe</button>
        <button class="btn ghost sm" onclick="adminToggle('${esc(s.id)}',${!s.actif})">${s.actif ? "⏸ Bloquer" : "▶ Débloquer"}</button>
      </div></div>`;
  }).join("");
  return topbar(`<button class="btn ghost sm" onclick="go('home')">📚 Examens</button><button class="btn ghost sm" onclick="logout()">Hivoaka</button>`) + `<div class="wrap">
    <div class="hero"><h1>🛠️ Espace admin</h1><p>Mitantana ny mpianatra · Gérer les élèves, leurs accès et leurs résultats.</p></div>${demo}
    <div class="row" style="gap:8px;margin-top:12px;flex-wrap:wrap">
      ${[["👥", L.length, "élèves"], ["✓", act, "actifs"], ["🔑", week, "connectés 7 j"], ["⚠️", soon, "expirent ≤14 j"], ["⌛", exp, "expirés"]].map(([i, n, t]) => `<div class="card" style="padding:10px 4px;text-align:center;margin:0"><div style="font-size:22px;font-weight:700">${i} ${n}</div><div class="small muted">${t}</div></div>`).join("")}
    </div>
    <div class="row" style="margin-top:12px;gap:8px;flex-wrap:wrap">
      <button class="btn" onclick="adminEdit(null)">➕ Mpianatra vaovao · Nouvel élève</button>
      <button class="btn ghost sm" onclick="adminLoad()">↻ Actualiser</button>
      <button class="btn ghost sm" onclick="adminCsv()">⬇️ Export CSV</button>
      ${SRV.mode === "server" && (CFG.comptes || []).some(c => c.id.toUpperCase() !== "ADMIN") ? `<button class="btn ghost sm" onclick="adminImport()">⇪ Importer config.js</button>` : ""}
    </div>
    <div class="card" style="margin-top:12px;padding:10px">
      <input id="adq" placeholder="🔍 Hitady · Rechercher (ID, nom, téléphone)" value="${esc(AD.q)}" oninput="AD.q=this.value;clearTimeout(AD._t);AD._t=setTimeout(()=>{render();const e=$('#adq');e.focus();e.setSelectionRange(e.value.length,e.value.length)},250)" style="width:100%;padding:10px;border:1px solid var(--line,#ddd);border-radius:10px;font:inherit">
      <div class="row" style="gap:6px;margin-top:8px;flex-wrap:wrap">${[["all", "Rehetra · Tous"], ["actif", "Actifs"], ["bientot", "Expirent bientôt"], ["expire", "Expirés / bloqués"]].map(([k, t]) => `<button class="tab ${AD.filter === k ? "on" : ""}" onclick="AD.filter='${k}';render()">${t}</button>`).join("")}</div>
    </div>
    ${AD.loading ? `<p class="center muted" style="margin-top:20px"><span class="spin"></span> Chargement…</p>` : AD.err ? `<p class="err">${esc(AD.err)}</p>` : shown.length ? cards : `<p class="center muted" style="margin-top:20px">Tsy misy mpianatra · Aucun élève${q ? " pour cette recherche" : ""}.</p>`}
  </div>`;
}

/* ---------- formulaire élève ---------- */
function accesGrid(sel) {
  const has = x => sel.includes(x);
  return `<div class="small" style="margin:6px 0 4px"><b>Accès</b> · fidirana</div>
    <label class="check"><input type="checkbox" class="acc" value="*" ${has("*") ? "checked" : ""} onchange="document.querySelectorAll('.acc:not([value=\\'*\\'])').forEach(c=>c.disabled=this.checked)"><span><b>Tout</b> (tous les examens)</span></label>
    <table class="t" style="margin-top:6px"><tr><th></th>${LEVELS.map(l => `<th>${l}</th>`).join("")}</tr>
    ${INSTS.map(([k, n]) => `<tr><td><b>${n}</b></td>${LEVELS.map(l => `<td style="text-align:center"><input type="checkbox" class="acc" value="${k}-${l}" ${has(k + "-" + l) || has(l) ? "checked" : ""} ${has("*") ? "disabled" : ""}></td>`).join("")}</tr>`).join("")}</table>`;
}
function addMonths(m, from) { const d = from && !isExpired(from) ? new Date(from + "T12:00:00") : new Date(); d.setMonth(d.getMonth() + m); return d.toISOString().slice(0, 10); }
function suggestId() { const n = (AD.list || []).length + 1; return "HCF-" + String(n).padStart(3, "0"); }
function adminEdit(id) {
  const s = id ? (AD.list || []).find(x => x.id === id) : null;
  const fin = s ? s.fin : addMonths(3);
  modal(`<h3>${s ? "✏️ " + esc(s.id) : "➕ Mpianatra vaovao · Nouvel élève"}</h3>
    ${s ? "" : `<label class="field"><span>ID (hiditra) · Identifiant</span><input id="fid" value="${suggestId()}" autocapitalize="characters"></label>`}
    <label class="field"><span>Anarana · Nom</span><input id="fnom" value="${esc(s ? s.nom : "")}" placeholder="Rakoto Andry"></label>
    <label class="field"><span>WhatsApp / téléphone</span><input id="ftel" value="${esc(s ? s.tel : "")}" placeholder="+261 34 …"></label>
    ${accesGrid(s ? s.acces : [])}
    <label class="field" style="margin-top:10px"><span>Hatramin'ny · Accès jusqu'au</span><input id="ffin" type="date" value="${esc(fin)}"></label>
    <div class="row" style="gap:6px;margin-top:-4px">${[1, 3, 6, 12].map(m => `<button type="button" class="btn ghost sm" onclick="$('#ffin').value=addMonths(${m},${s ? `'${s.fin}'` : "''"})">+${m} mois</button>`).join("")}</div>
    ${s ? "" : `<label class="field" style="margin-top:10px"><span>Teny miafina · Mot de passe (vide = automatique)</span><input id="fpw" placeholder="automatique"></label>`}
    <label class="field" style="margin-top:10px"><span>Fanamarihana · Note interne</span><input id="fnote" value="${esc(s ? s.note : "")}" placeholder="groupe du samedi, payé…"></label>
    <div class="err" id="ferr"></div>
    <div class="row" style="margin-top:10px">${s ? `<button class="btn ghost sm" style="color:var(--red)" onclick="adminDelete('${esc(s.id)}')">🗑 Supprimer</button>` : ""}<div class="sp" style="flex:1"></div><button class="btn ghost" onclick="closeModal()">Annuler</button><button class="btn" id="fsave" onclick="adminSave(${s ? `'${esc(s.id)}'` : "null"})">Tehirizina · Enregistrer</button></div>`);
}
async function adminSave(id) {
  const all = [...document.querySelectorAll(".acc:checked")].map(c => c.value);
  const acces = all.includes("*") ? ["*"] : all;
  const body = { id: id || ($("#fid").value || "").trim(), nom: $("#fnom").value.trim(), tel: $("#ftel").value.trim(), acces, fin: $("#ffin").value, note: $("#fnote").value.trim() };
  if (!id) { body.create = true; const pw = ($("#fpw").value || "").trim(); if (pw) body.pw = pw; }
  if (!acces.length) { $("#ferr").textContent = "Misafidiana fidirana iray farafahakeliny · Choisis au moins un accès."; return; }
  $("#fsave").disabled = true;
  const r = await apiCall("POST", "admin/students", body);
  if (!r.ok) { $("#fsave").disabled = false; $("#ferr").textContent = { exists: "Efa misy io ID io · Cet identifiant existe déjà.", bad_id: "ID tsy mety · Identifiant invalide.", pw_short: "Fohy loatra ny teny miafina (4 farafahakeliny)." }[r.error] || ("Erreur : " + (r.error || r.status)); return; }
  closeModal(); await adminLoad();
  if (r.pw) showCredentials(r.student, r.pw); else toast("✓ Voatahiry · Enregistré");
}
function credText(s, pw) {
  return `Salama ${s.nom || ""} 👋\nIreto ny fidiranao amin'ny Prüfungstrainer (H Conseil & Formation):\n\n🌐 ${location.origin}\n👤 ID : ${s.id}\n🔑 Teny miafina : ${pw}\n🎓 Fanadinana : ${accesLabel(s.acces)}\n📅 Hatramin'ny : ${fmtDate(s.fin)}\n\nMahereza! 💪`;
}
function showCredentials(s, pw) {
  const t = credText(s, pw), tel = String(s.tel || "").replace(/[^\d]/g, "");
  modal(`<h3>🔑 Fidirana · Identifiants</h3><p class="small muted">Alefaso amin'ny mpianatra. Ity teny miafina ity dia tsy hiseho intsony. · Envoie-les à l'élève : ce mot de passe ne sera plus affiché.</p>
    <pre style="white-space:pre-wrap;background:#f6f4ef;padding:12px;border-radius:10px;font-size:14px">${esc(t)}</pre>
    <div class="row" style="gap:6px;flex-wrap:wrap"><a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/${tel}?text=${encodeURIComponent(t)}">📲 WhatsApp</a><button class="btn ghost" onclick="navigator.clipboard&&navigator.clipboard.writeText(${esc(JSON.stringify(t))});toast('✓ Copié')">📋 Copier</button><button class="btn ghost" onclick="closeModal()">OK</button></div>`);
}
async function adminNewPw(id) {
  const s = AD.list.find(x => x.id === id);
  modal(`<h3>🔑 Teny miafina vaovao · Nouveau mot de passe</h3><p class="small">${esc(id)} — ${esc(s.nom || "")}<br><span class="muted">L'ancien mot de passe ne marchera plus et l'élève sera déconnecté.</span></p>
    <label class="field"><span>Nouveau mot de passe (vide = automatique)</span><input id="npw" placeholder="automatique"></label><div class="err" id="nerr"></div>
    <div class="row"><div class="sp" style="flex:1"></div><button class="btn ghost" onclick="closeModal()">Annuler</button><button class="btn" onclick="adminDoPw('${esc(id)}')">Valider</button></div>`);
}
async function adminDoPw(id) {
  const pw = ($("#npw").value || "").trim() || genPwLocal();
  const r = await apiCall("POST", "admin/students", { id, pw });
  if (!r.ok) { $("#nerr").textContent = r.error === "pw_short" ? "4 caractères minimum." : "Erreur : " + (r.error || r.status); return; }
  closeModal(); await adminLoad(); showCredentials(r.student, r.pw);
}
function adminExtend(id) {
  const s = AD.list.find(x => x.id === id);
  modal(`<h3>➕ Hanitatra · Prolonger</h3><p class="small">${esc(id)} — ${esc(s.nom || "")} · jusqu'au <b>${fmtDate(s.fin)}</b></p>
    <div class="row" style="gap:6px;flex-wrap:wrap">${[1, 2, 3, 6, 12].map(m => `<button class="btn ${m === 3 ? "" : "ghost"}" onclick="adminDoExtend('${esc(id)}',${m})">+${m} mois</button>`).join("")}</div>
    <p class="small muted" style="margin-top:8px">Raha efa tapitra dia manomboka anio · Si l'accès est expiré, on compte à partir d'aujourd'hui.</p><div class="row"><div class="sp" style="flex:1"></div><button class="btn ghost" onclick="closeModal()">Annuler</button></div>`);
}
async function adminDoExtend(id, m) {
  const s = AD.list.find(x => x.id === id), fin = addMonths(m, s.fin);
  const r = await apiCall("POST", "admin/students", { id, fin, actif: true });
  closeModal(); await adminLoad(); toast(r.ok ? "✓ Hatramin'ny " + fmtDate(fin) : "Erreur");
}
async function adminToggle(id, actif) {
  const r = await apiCall("POST", "admin/students", { id, actif });
  await adminLoad(); toast(r.ok ? (actif ? "▶ Débloqué" : "⏸ Bloqué") : "Erreur");
}
function adminDelete(id) {
  modal(`<h3>🗑 Hamafa · Supprimer ${esc(id)} ?</h3><p class="small">Ho voafafa ny kaonty sy ny vokatra rehetra. Tsy azo averina. · Le compte et tous ses résultats seront supprimés définitivement.</p>
    <div class="row"><div class="sp" style="flex:1"></div><button class="btn ghost" onclick="closeModal()">Annuler</button><button class="btn" style="background:var(--red,#c0392b)" onclick="adminDoDelete('${esc(id)}')">Supprimer</button></div>`);
}
async function adminDoDelete(id) { await apiCall("DELETE", "admin/students/" + encodeURIComponent(id)); closeModal(); if (S.view === "astudent") go("admin"); await adminLoad(); toast("🗑 Supprimé"); }

/* ---------- résultats d'un élève ---------- */
async function adminOpen(id) { AD.detail = { id, loading: true }; go("astudent"); const r = await apiCall("GET", "admin/students/" + encodeURIComponent(id)); AD.detail = r.ok ? { id, ...r } : { id, err: r.error || "erreur" }; render(); }
function vAdminStudent() {
  if (!isAdmin()) return vHome();
  const D = AD.detail || {};
  const head = topbar(`<button class="btn ghost sm" onclick="logout()">Hivoaka</button>`) + `<div class="wrap">${backBtn("Hiverina · Élèves", "go('admin')")}`;
  if (D.loading) return head + `<p class="center muted"><span class="spin"></span></p></div>`;
  if (D.err) return head + `<p class="err">${esc(D.err)}</p></div>`;
  const s = D.student, R = D.results || {}, sm = summaryOf(R);
  const blocks = [];
  for (const [inst, iname] of INSTS) for (const lv of LEVELS) {
    const lvl = CAT[inst] && CAT[inst].niveaux[lv]; if (!lvl) continue;
    const P = POOLS[lvl.pool]; if (!P) continue;
    const sets = P.sets.filter(st => R[inst + "-" + lv + "|" + st.id]);
    if (!sets.length) continue;
    const mods = ["lesen", "hoeren", "schreiben", "sprechen"];
    blocks.push(`<div class="card" style="margin-top:12px;overflow-x:auto"><h3 style="font-size:16px;margin:0 0 8px">${iname} ${lv} · ${esc(lvl.titre || "")}</h3><table class="t"><tr><th>Modellsatz</th>${mods.map(m => `<th>${MODS[m].de}</th>`).join("")}</tr>
      ${sets.map(st => { const r = R[inst + "-" + lv + "|" + st.id]; return `<tr><td><b>${esc(st.titre)}</b></td>${mods.map(m => r[m] ? `<td><span class="pill ${r[m].score >= 60 ? "g" : "r"}">${r[m].score}</span><div class="small muted">${fmtDate(r[m].date)}${r[m].self ? " · auto" : ""}</div></td>` : `<td class="muted small">—</td>`).join("")}</tr>`; }).join("")}</table></div>`);
  }
  return head + `<div class="hero"><h1>${esc(s.id)} ${statusPill(s)}</h1><p>${esc(s.nom || "")}${s.tel ? " · " + esc(s.tel) : ""}<br>🎓 ${esc(accesLabel(s.acces))} · 📅 jusqu'au ${fmtDate(s.fin)}${s.note ? "<br>📝 " + esc(s.note) : ""}</p></div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(74px,1fr));gap:8px;margin-top:12px">${[["📊", sm.modules, "modules faits"], ["⭐", sm.moyenne ?? "—", "moyenne"], ["✓", sm.reussis, "≥ 60 %"], ["🃏", D.vocabAcquis || 0, "mots acquis"], ["🔑", s.logins || 0, "connexions"]].map(([i, n, t]) => `<div class="card" style="padding:10px 4px;text-align:center;margin:0"><div style="font-size:20px;font-weight:700">${i} ${n}</div><div class="small muted">${t}</div></div>`).join("")}</div>
    <p class="small muted" style="margin-top:8px">Dernière connexion : ${s.lastLogin ? fmtDate(s.lastLogin) + " (" + since(s.lastLogin) + ")" : "jamais"} · Dernier exercice : ${fmtDate(sm.dernier)} · Créé le ${fmtDate(s.created)}</p>
    ${blocks.length ? blocks.join("") : `<div class="card" style="margin-top:12px"><p class="muted center">Mbola tsy nanao fanazaran-tena · Aucun exercice terminé pour l'instant.</p></div>`}
    <div class="row" style="gap:6px;margin-top:14px;flex-wrap:wrap">
      <button class="btn ghost sm" onclick="AD.list=AD.list||[];adminEdit('${esc(s.id)}')">✏️ Modifier</button>
      <a class="btn wa sm" target="_blank" rel="noopener" href="https://wa.me/${String(s.tel || "").replace(/[^\d]/g, "")}?text=${encodeURIComponent("Salama " + (s.nom || "") + "! ")}">📲 WhatsApp</a>
      <button class="btn ghost sm" onclick="adminResetProgress('${esc(s.id)}')">↺ Effacer les résultats</button>
    </div></div>`;
}
function adminResetProgress(id) {
  modal(`<h3>↺ Hamafa ny vokatra · Effacer les résultats de ${esc(id)} ?</h3><p class="small">Le compte reste actif, seuls les scores enregistrés sur le serveur sont effacés.</p><div class="row"><div class="sp" style="flex:1"></div><button class="btn ghost" onclick="closeModal()">Annuler</button><button class="btn" onclick="apiCall('POST','admin/resetprogress',{id:'${esc(id)}'}).then(()=>{closeModal();adminOpen('${esc(id)}')})">Effacer</button></div>`);
}

/* ---------- export / import ---------- */
function adminCsv() {
  const rows = [["ID", "Nom", "Téléphone", "Accès", "Fin", "Statut", "Dernière connexion", "Connexions", "Modules faits", "Moyenne", "Réussis (≥60)", "Note"]];
  (AD.list || []).forEach(s => rows.push([s.id, s.nom, s.tel, accesLabel(s.acces), s.fin, !s.actif ? "bloqué" : isExpired(s.fin) ? "expiré" : "actif", s.lastLogin ? s.lastLogin.slice(0, 10) : "", s.logins || 0, (s.progres || {}).modules || 0, (s.progres || {}).moyenne ?? "", (s.progres || {}).reussis || 0, s.note]));
  const csv = "﻿" + rows.map(r => r.map(v => '"' + String(v ?? "").replace(/"/g, '""') + '"').join(";")).join("\n");
  const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" })); a.download = "eleves-pruefungstrainer-" + new Date().toISOString().slice(0, 10) + ".csv"; a.click();
}
async function adminImport() {
  const list = (CFG.comptes || []).filter(c => c.id.toUpperCase() !== "ADMIN");
  let ok = 0, skip = 0;
  for (const c of list) { const r = await apiCall("POST", "admin/students", { create: true, id: c.id, nom: c.nom, acces: c.acces, fin: c.fin, pw: c.pass }); if (r.ok) ok++; else skip++; }
  await adminLoad();
  modal(`<h3>⇪ Import config.js</h3><p>${ok} compte(s) importé(s), ${skip} déjà présent(s).</p><p class="small muted">Les élèves gardent leur mot de passe actuel. Tu peux maintenant vider la liste <code>comptes</code> dans config.js (garde seulement DEMO si tu veux).</p><div class="row"><div class="sp" style="flex:1"></div><button class="btn" onclick="closeModal()">OK</button></div>`);
}
