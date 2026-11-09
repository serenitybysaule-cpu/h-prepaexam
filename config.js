/* =========================================================
   H Conseil & Formation — Prüfungstrainer
   CONFIGURATION
   ---------------------------------------------------------
   ⚠️ DEPUIS LA v3.3 : les vrais comptes élèves se gèrent dans
   l'ESPACE ADMIN (connexion ADMIN + mot de passe ADMIN_PASSWORD
   défini dans Netlify). Ils sont stockés sur le serveur, avec
   mots de passe chiffrés.

   La liste « comptes » ci-dessous ne sert plus qu'à :
     • l'aperçu sans serveur (mode démo) ;
     • le bouton « Importer config.js » de l'espace admin.
   Une fois l'import fait, vide-la (garde DEMO si tu veux).
   ---------------------------------------------------------
   Pour ajouter un élève : copie une ligne, change id, pass,
   nom, acces et fin (date de fin d'accès AAAA-MM-JJ).

   acces = liste des examens ouverts :
     "goethe-B1"  → Goethe-Zertifikat B1 seulement
     "osd-B1"     → ÖSD Zertifikat B1 seulement
     "B1"         → B1 Goethe ET ÖSD
     "*"          → tout
   (même principe pour A1, A2, B2 : "goethe-A1", "osd-A2"…)
   ========================================================= */

window.APP_CONFIG = {
  brand: "H Conseil & Formation",
  whatsapp: "4915777533215",

  // Gemini : true = boutons IA visibles (fonctionne une fois le site sur Netlify avec la clé GEMINI_API_KEY)
  gemini: true,

  comptes: [
    { id: "DEMO",     pass: "demo2026", nom: "Kaonty demo",   acces: ["*"],                    fin: "2026-12-31" },
    { id: "HG-A1-01", pass: "tana21",   nom: "Mpianatra A1",  acces: ["goethe-A1"],            fin: "2027-02-28" },
    { id: "HO-A2-01", pass: "tana22",   nom: "Mpianatra A2",  acces: ["osd-A2"],               fin: "2027-02-28" },
    { id: "HG-B1-01", pass: "tana24",   nom: "Mpianatra B1",  acces: ["goethe-B1"],            fin: "2027-02-28" },
    { id: "HO-B1-01", pass: "tana25",   nom: "Mpianatra ÖSD", acces: ["osd-B1"],               fin: "2027-02-28" },
    { id: "H-B2-01",  pass: "tana26",   nom: "Mpianatra B2",  acces: ["B2"],                   fin: "2027-02-28" },
    { id: "ADMIN",    pass: "admin26",   /* démo seulement : en ligne, c'est ADMIN_PASSWORD */  nom: "Admin",         acces: ["*"],                    fin: "2027-12-31" }
  ],

  // Andramana maimaim-poana (essai) : ce qui est ouvert sans compte
  essai: { acces: ["goethe-B1", "osd-B1"], set: "b1m1", lesen: ["L1"], hoeren: ["H1"], vocab: 12 }
};
