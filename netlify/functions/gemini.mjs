// =========================================================
// Fonction Netlify : pont sécurisé vers Gemini
// La clé reste sur le serveur (variable GEMINI_API_KEY dans Netlify).
// Deux tâches seulement : "schreiben" (correction) et "explain" (explication).
// =========================================================

import crypto from "node:crypto";
// Si les comptes serveur sont activés (ADMIN_PASSWORD), seuls les élèves connectés peuvent utiliser Gemini.
function sessionOk(req) {
  if (!process.env.ADMIN_PASSWORD) return true;
  const h = req.headers.get("authorization") || "", tok = h.startsWith("Bearer ") ? h.slice(7) : "";
  if (!tok.includes(".")) return false;
  const [p, sig] = tok.split(".");
  const key = crypto.createHash("sha256").update(process.env.SESSION_SECRET || ("pt::" + process.env.ADMIN_PASSWORD)).digest();
  const exp = crypto.createHmac("sha256", key).update(p).digest("base64url");
  if (sig.length !== exp.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(exp))) return false;
  try { return JSON.parse(Buffer.from(p, "base64url").toString()).exp > Date.now(); } catch { return false; }
}

const MODEL = process.env.GEMINI_MODEL || "gemini-flash-latest";
const cut = (s, n) => String(s || "").slice(0, n);

function promptSchreiben(d) {
  const niv = cut(d.niveau || "B1", 4);
  const crit = (Array.isArray(d.criteres) && d.criteres.length ? d.criteres : ["Erfüllung","Kohärenz","Wortschatz","Strukturen"]).slice(0,5).map(c => cut(c,30));
  return `Tu es examinateur certifié pour le ${cut(d.examen, 60)} (niveau ${niv}).
Tu corriges la tâche d'écriture d'un élève malgache, selon les critères officiels du niveau ${niv} : ${crit.join(", ")}.
Évalue avec les exigences du niveau ${niv} (pas plus, pas moins).
Pour chaque critère, donne une note A (très bien), B, C, D ou E (insuffisant / hors sujet).
Sois juste comme un vrai examinateur : ni trop gentil, ni trop sévère. Si le texte est vide, hors sujet ou très trop court, mets E au premier critère.

TÂCHE (${cut(d.nom, 30)}, environ ${Number(d.mots) || 80} mots, type : ${cut(d.type, 60)}) :
${cut(d.consigne, 2500)}

TEXTE DE L'ÉLÈVE :
"""${cut(d.texte, 3500)}"""

Réponds UNIQUEMENT en JSON valide, avec exactement cette structure :
{
 "criteres": {
${crit.map(c => `  "${c}": {"note":"A-E", "mg":"1 phrase en malagasy simple (termes techniques en français)", "fr":"1 phrase en français"}`).join(",\n")}
 },
 "fautes": [ {"faux":"extrait exact de l'élève", "correct":"version corrigée", "mg":"explication courte en malagasy simple", "fr":"explication courte en français"} ],
 "points_forts": {"mg":"…", "fr":"…"},
 "conseil": {"mg":"1 conseil concret en malagasy simple", "fr":"le même en français"},
 "version_corrigee": "le texte de l'élève corrigé en allemand, en gardant ses idées"
}
Maximum 8 fautes, les plus importantes d'abord. Le malagasy doit être simple et clair.`;
}

function promptExplain(d) {
  return `Tu es un professeur d'allemand patient pour des élèves malgaches qui préparent le ${cut(d.examen, 60)} (niveau ${cut(d.niveau||"",4)}).
Explique pourquoi la bonne réponse est correcte, et pourquoi la réponse de l'élève est fausse s'il s'est trompé.
Cite le passage allemand exact qui donne la réponse. Donne une astuce pour reconnaître ce type de piège.

Module : ${cut(d.module, 20)} · ${cut(d.teil, 20)}
Consigne : ${cut(d.consigne, 600)}
${d.texte ? "Texte / transcription :\n" + cut(d.texte, 5000) : ""}
Question : ${cut(d.question, 600)}
Options : ${cut(JSON.stringify(d.options || []), 600)}
Bonne réponse : ${cut(d.correct, 200)}
Réponse de l'élève : ${cut(d.eleve || "(pas de réponse)", 200)}

Réponds UNIQUEMENT en JSON valide : {"mg":"explication en malagasy simple, 3 à 5 phrases (garde les termes techniques de grammaire en français)", "fr":"la même explication en français, 3 à 5 phrases"}`;
}

export default async (req) => {
  const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json" } });
  if (req.method !== "POST") return json({ error: "method" }, 405);
  if (!sessionOk(req)) return json({ error: "auth" }, 401);
  const key = process.env.GEMINI_API_KEY;
  if (!key) return json({ error: "no_key" }, 500);

  let body;
  try { body = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
  const { task, data } = body || {};
  let prompt;
  if (task === "schreiben") prompt = promptSchreiben(data || {});
  else if (task === "explain") prompt = promptExplain(data || {});
  else return json({ error: "task" }, 400);

  try {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.3, responseMimeType: "application/json" }
      })
    });
    const j = await r.json();
    if (!r.ok) return json({ error: "gemini", detail: j.error && j.error.message }, 502);
    const text = (j.candidates?.[0]?.content?.parts || []).map(p => p.text || "").join("");
    let result;
    try { result = JSON.parse(text); } catch { result = { mg: text, fr: "" }; }
    return json({ ok: true, result });
  } catch (e) {
    return json({ error: "network" }, 502);
  }
};

export const config = { path: "/api/gemini" };
