/* =========================================================
   CATALOGUE — Instituts × niveaux
   pool  = banque de sujets utilisée (le B1 est commun Goethe/ÖSD)
   variant "at" = adaptation automatique à l'allemand d'Autriche
   ========================================================= */
window.CATALOG = {
  goethe: {
    nom: "Goethe-Institut", court: "Goethe", couleur: "#2e7d4f", fond: "#e4f2ea",
    desc_mg: "Fanadinana alemana avy any Alemaina — eken'ny maro eran-tany.",
    desc_fr: "Examens du Goethe-Institut (Allemagne).",
    niveaux: {
      A1: { titre: "Goethe-Zertifikat A1: Start Deutsch 1", pool: "GA1" },
      A2: { titre: "Goethe-Zertifikat A2", pool: "GA2" },
      B1: { titre: "Goethe-Zertifikat B1", pool: "B1" },
      B2: { titre: "Goethe-Zertifikat B2", pool: "GB2" }
    }
  },
  osd: {
    nom: "ÖSD", court: "ÖSD", couleur: "#c62f2f", fond: "#fbe6e4",
    desc_mg: "Österreichisches Sprachdiplom — fanadinana alemana avy any Aotrisy.",
    desc_fr: "Österreichisches Sprachdiplom (Autriche).",
    niveaux: {
      A1: { titre: "ÖSD Zertifikat A1 (ZA1)", pool: "OA1" },
      A2: { titre: "ÖSD Zertifikat A2 (ZA2)", pool: "OA2" },
      B1: { titre: "ÖSD Zertifikat B1 (ZB1)", pool: "B1", variant: "at" },
      B2: { titre: "ÖSD Zertifikat B2 (ZB2)", pool: "OB2" }
    }
  }
};

/* Mots remplacés automatiquement dans la version ÖSD (textes écrits uniquement, pas l'audio) */
window.VARIANT_AT = [
  ["an der Kasse", "an der Kassa"], ["die Kasse", "die Kassa"], ["Januar", "Jänner"],
  ["Kartoffeln", "Erdäpfel"], ["Tomaten", "Paradeiser"], ["Abitur", "Matura"],
  ["Bankkarte", "Bankomatkarte"], ["Treppenhaus", "Stiegenhaus"], ["Sahne", "Schlagobers"],
  ["Brötchen", "Semmeln"], ["Tüte", "Sackerl"]
];

/* ---------- Infos et guide du B1 (bilingue malagasy / français) ---------- */
window.POOLS = window.POOLS || {};
window.POOLS.B1 = window.POOLS.B1 || { sets: [] };
["GA1","OA1","GA2","OA2","GB2","OB2"].forEach(k => { window.POOLS[k] = window.POOLS[k] || { sets: [] }; });
window.POOLS.B1.info = {
  modules: [
    { m: "Lesen", mg: "Famakiana", t: "65 min", parts: "5 fizarana · 30 fanontaniana" },
    { m: "Hören", mg: "Fihainoana", t: "40 min", parts: "4 fizarana · 30 fanontaniana" },
    { m: "Schreiben", mg: "Fanoratana", t: "60 min", parts: "3 asa soratra" },
    { m: "Sprechen", mg: "Fitenenana", t: "15 min (2 olona)", parts: "3 fizarana + 15 min fanomanana" }
  ],
  reussite: {
    mg: "Isaky ny module dia <b>100 isa</b>. Mila <b>60 isa (60 %)</b> vao afaka. Azo atao tsirairay na miaraka ny module.",
    fr: "Chaque module est noté sur 100. Il faut 60 points pour réussir. Les modules peuvent se passer séparément."
  },
  institut: {
    goethe: { mg: "Ny B1 Goethe sy ny B1 ÖSD dia <b>fanadinana iray ihany</b> (natao niaraka). Ny Goethe dia mampiasa alemana avy any Alemaina.",
              fr: "Le B1 Goethe et le B1 ÖSD sont le même examen. Version Goethe : allemand d'Allemagne." },
    osd: { mg: "Ny B1 ÖSD dia mitovy amin'ny B1 Goethe, fa mety hahita <b>teny aotrisiana</b> ianao: Kassa (Kasse), Jänner (Januar), Erdäpfel (Kartoffeln), Paradeiser (Tomaten), Matura (Abitur), Bankomat (Geldautomat).",
           fr: "Même examen que le B1 Goethe, mais avec des mots autrichiens : Kassa, Jänner, Erdäpfel, Paradeiser, Matura, Bankomat." }
  },
  strategie: [
    { mg: "Vakio aloha <b>ny fanontaniana</b> vao vakio ny lahatsoratra (na henoy ny feo).", fr: "Lis toujours les questions avant le texte ou l'écoute." },
    { mg: "Saika <b>voaova teny</b> foana ny valiny: tadiavo ny hevitra fa tsy ny teny mitovy.", fr: "Les réponses sont reformulées : cherche le sens, pas les mêmes mots." },
    { mg: "<b>Aza avela ho foana</b> ny valiny: tsy mampihena isa ny valiny diso.", fr: "Ne laisse jamais de case vide : une erreur ne retire pas de points." },
    { mg: "Ataovy aloha ny <b>Fanazaran-tena</b>, avy eo <b>Fanadinana andrana</b> iray isan-kerinandro.", fr: "D'abord l'entraînement, puis un examen blanc par semaine." }
  ],
  guides: {
    lesen: [
      { t: "Teil 1 · Blog / E-Mail · Richtig/Falsch (10 min)", tips: [
        { mg: "Vakio aloha ireo fehezanteny 6: <b>araka ny filaharan'ny lahatsoratra</b> ny valiny.", fr: "Les réponses suivent l'ordre du texte." },
        { mg: "Tandremo ny teny mitovy hevitra: tsy averina mitovy ny teny ao amin'ny fanontaniana.", fr: "Attention aux synonymes." },
        { mg: "Fandrika: « ausfallen » (foana) ≠ « Verspätung » (fahatarana).", fr: "Piège : ausfallen (annulé) ≠ Verspätung (retard)." } ] },
      { t: "Teil 2 · Lahatsoratra gazety · a/b/c (20 min)", tips: [
        { mg: "Ny fanontaniana voalohany dia momba ny <b>lohahevitra ankapobeny</b>: vakio ny lohateny.", fr: "La 1ʳᵉ question porte sur le thème général." },
        { mg: "Ny valiny diso dia matetika mampiasa teny ao amin'ny lahatsoratra, fa hevitra hafa.", fr: "Les mauvaises réponses reprennent des mots du texte." },
        { mg: "Io no fizarana lava indrindra: omeo 20 minitra.", fr: "Garde-lui 20 minutes." } ] },
      { t: "Teil 3 · Filazana (Anzeigen) · Zuordnung (10 min)", tips: [
        { mg: "Tsipiho ny teny lehibe amin'ny toe-javatra tsirairay (hariva, maimaim-poana, efa niasa…).", fr: "Souligne le mot-clé de chaque situation." },
        { mg: "Misy <b>toe-javatra iray tsy misy filazana → 0</b> foana.", fr: "Une situation n'a pas d'annonce → 0." } ] },
      { t: "Teil 4 · Hevitry ny olona · Ja/Nein (15 min)", tips: [
        { mg: "Ny fanontaniana: manohana ve ilay olona (Ja) sa tsia (Nein)?", fr: "La personne est-elle pour (Ja) ou contre (Nein) ?" },
        { mg: "Matetika <b>aorian'ny « aber »</b> no misy ny tena heviny.", fr: "L'opinion vient souvent après « aber »." },
        { mg: "Tandremo ny olona miova hevitra (« am Anfang … inzwischen »).", fr: "Méfie-toi des changements d'avis." } ] },
      { t: "Teil 5 · Fitsipika · a/b/c (10 min)", tips: [
        { mg: "Tadiavo ny <b>andalana</b> mifanaraka amin'ny fanontaniana (ny lohateny matevina manampy).", fr: "Cherche le paragraphe correspondant." },
        { mg: "Teny manan-danja: erlaubt (azo atao), verboten (voarara), kostenlos (maimaim-poana), nur (ihany).", fr: "Mots-clés : erlaubt, verboten, kostenlos, nur." } ] }
    ],
    hoeren: [
      { t: "Teil 1 · Lahatsoratra fohy 5 · henoina indroa", tips: [
        { mg: "Vakio ny fanontaniana 2 <b>alohan'ny</b> hihainoana.", fr: "Lis les 2 questions avant l'écoute." },
        { mg: "Fihainoana 1: ny hevitra ankapobeny (R/F). Fihainoana 2: ny antsipiriany (a/b/c).", fr: "1ʳᵉ écoute : idée générale ; 2ᵉ : détail." },
        { mg: "Henoy ny fanitsiana: « ach nein, warte … », « eigentlich … aber ».", fr: "Écoute les corrections." } ] },
      { t: "Teil 2 · Fitsidihana / kabary · indray mandeha", tips: [
        { mg: "60 segondra no hamakianao: ampiasao avokoa!", fr: "Utilise les 60 secondes de lecture." },
        { mg: "« normalerweise … aber heute »: matetika <b>ny anio</b> no valiny.", fr: "La réponse concerne souvent aujourd'hui." } ] },
      { t: "Teil 3 · Resaka · indray mandeha", tips: [
        { mg: "Fantaro hoe iza no lehilahy, iza no vehivavy hatrany am-boalohany.", fr: "Note qui est qui dès le début." },
        { mg: "Fandrika maro: « Nein, … » sy drafitra miova.", fr: "Beaucoup de « Nein » et de plans qui changent." } ] },
      { t: "Teil 4 · Adihevitra amin'ny radio · indroa", tips: [
        { mg: "Olona 3: <b>a = Moderator</b>, b sy c = vahiny.", fr: "a = modérateur, b et c = invités." },
        { mg: "Ny Moderator koa manana fehezanteny 1 na 2.", fr: "Le modérateur a aussi 1–2 phrases." } ] }
    ],
    schreiben: [
      { t: "Aufgabe 1 · E-mail ho an'ny namana (~80 teny, 20 min)", tips: [
        { mg: "Valio <b>ireo hevitra 3</b> araka ny filaharany, fehezanteny 2–3 isaky ny hevitra.", fr: "Traite les 3 points dans l'ordre." },
        { mg: "Liebe/Lieber … , + fampidirana + hevitra 3 + famaranana + Viele Grüße.", fr: "Anrede + intro + 3 points + fin + Gruß." },
        { mg: "Ampiasao « du / dich / dir ».", fr: "Utilise « du »." } ] },
      { t: "Aufgabe 2 · Hevitrao amin'ny forum (~80 teny, 25 min)", tips: [
        { mg: "<b>Tsy misy</b> Liebe … na Viele Grüße: hevitra amin'ny forum io.", fr: "Pas d'Anrede ni de Gruß." },
        { mg: "Valio ilay hevitra, omeo ny hevitrao miaraka amin'ny antony 2 sy ohatra.", fr: "Réagis, donne ton avis, 2 arguments, 1 exemple." },
        { mg: "Io no mahazo isa betsaka indrindra: omeo fotoana.", fr: "C'est la tâche qui rapporte le plus." } ] },
      { t: "Aufgabe 3 · E-mail ofisialy (~40 teny, 15 min)", tips: [
        { mg: "« Sie / Ihnen / Ihr » foana, <b>tsy</b> « du » mihitsy.", fr: "Toujours « Sie »." },
        { mg: "Misaotra → miala tsiny → antony → famaranana.", fr: "Remercier → s'excuser → raison → formule." } ] }
    ],
    sprechen: [
      { t: "Fanomanana (15 min)", tips: [
        { mg: "Manomàna irery ny fizarana 3. Soraty ny teny lehibe fotsiny, fa tsy fehezanteny feno.", fr: "Note des mots-clés, pas des phrases." },
        { mg: "Amin'ny fanadinana dia tsy maintsy miteny malalaka: tsy azo vakiana.", fr: "On n'a pas le droit de lire." } ] },
      { t: "Teil 1 · Mikasa zavatra miaraka (~3 min)", tips: [
        { mg: "Tsy kabary io: <b>MANOLOTRA, MAMALY, MANAPA-KEVITRA</b>.", fr: "Propose, réagis, décide." },
        { mg: "Lavio indray mandeha amin'ny fomba mahalala fomba (ary manolora hevitra hafa).", fr: "Refuse poliment une fois." },
        { mg: "Faranana amin'ny famintinana: « Also, wir machen … ».", fr: "Termine par un résumé." } ] },
      { t: "Teil 2 · Manolotra lohahevitra (~3 min)", tips: [
        { mg: "Folie 5 = fizarana 5: fampidirana, ny traikefako, ny fireneko, tombony/fatiantoka + hevitro, famaranana.", fr: "5 Folien = 5 parties." },
        { mg: "Folie 3: resaho i <b>Madagasikara</b> — mora sy manokana.", fr: "Parle de Madagascar." },
        { mg: "Eo amin'ny 35 segondra isaky ny Folie.", fr: "~35 s par Folie." } ] },
      { t: "Teil 3 · Valin-kafatra sy fanontaniana (~2 min)", tips: [
        { mg: "Aorian'ny kabarin'ny namanao: valin-kafatra tsara 1 + fanontaniana 1.", fr: "1 feedback + 1 question." },
        { mg: "Rehefa anontaniana ianao: valio amin'ny fehezanteny 2–3 misy antony.", fr: "Réponds en 2–3 phrases justifiées." } ] }
    ]
  }
};
