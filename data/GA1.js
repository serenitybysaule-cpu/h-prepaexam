/* GOETHE-ZERTIFIKAT A1: START DEUTSCH 1 — textes originaux H Conseil & Formation */
(function(){
const P = window.POOLS.GA1;
P.info = {
  modules: [
    { m: "Hören", mg: "Fihainoana", t: "~20 min", parts: "3 Teile · 15 fanontaniana" },
    { m: "Lesen", mg: "Famakiana", t: "~25 min", parts: "3 Teile · 15 fanontaniana" },
    { m: "Schreiben", mg: "Fanoratana", t: "~20 min", parts: "Formulaire + message court (~30 teny)" },
    { m: "Sprechen", mg: "Fitenenana", t: "~15 min (en groupe)", parts: "3 Teile" }
  ],
  reussite: { mg: "Isa 60 ny totaliny (Hören 15 · Lesen 15 · Schreiben 15 · Sprechen 15). Mila <b>36 isa (60 %)</b> vao afaka.", fr: "60 points au total, il faut 36 points (60 %). Dans l'app, chaque module est noté en %." },
  institut: { goethe: { mg: "Ny Start Deutsch 1 no fanadinana A1 an'ny Goethe-Institut. Fanontaniana fohy sy tsotra, momba ny fiainana andavanandro.", fr: "Examen A1 du Goethe-Institut : tâches courtes sur la vie quotidienne." } },
  guides: {
    hoeren: [
      { t: "Teil 1 · Resaka fohy 6 · a/b/c · henoina indroa", tips: [ { mg: "Vakio aloha ny fanontaniana: inona no tadiavina? (ora, vidiny, toerana…)", fr: "Lis la question : on cherche une heure, un prix, un lieu ?" }, { mg: "Tandremo ny isa sy ny ora: matetika misy isa 2 na 3 ao amin'ny resaka.", fr: "Attention aux chiffres : souvent plusieurs sont cités." } ] },
      { t: "Teil 2 · Fanambarana 4 · Richtig/Falsch · indray mandeha", tips: [ { mg: "Fanambarana any amin'ny gara, seranana, magazay. Henoy ny teny lehibe.", fr: "Annonces (gare, aéroport, magasin) : écoute les mots-clés." } ] },
      { t: "Teil 3 · Hafatra an-telefaona 5 · a/b/c · indroa", tips: [ { mg: "Henoy ny fanitsiana: « nicht …, sondern … ».", fr: "Écoute les corrections : « nicht …, sondern … »." } ] }
    ],
    lesen: [
      { t: "Teil 1 · Mailaka / SMS · Richtig/Falsch", tips: [ { mg: "Tadiavo ao amin'ny lahatsoratra ny fehezanteny mifanaraka amin'ny fanontaniana.", fr: "Retrouve la phrase du texte qui correspond." } ] },
      { t: "Teil 2 · Site Internet 2 · a na b", tips: [ { mg: "Inona no ilainao marina? (andro, ora, taona…). Ampitahao ny a sy ny b.", fr: "Compare a et b : jour, heure, âge, prix." } ] },
      { t: "Teil 3 · Takelaka sy filazana · Richtig/Falsch", tips: [ { mg: "Teny manan-danja: geschlossen (mihidy), geöffnet (misokatra), nur (ihany), nicht (tsy).", fr: "Mots-clés : geschlossen, geöffnet, nur, nicht." } ] }
    ],
    schreiben: [
      { t: "Teil 1 · Formulaire (5 informations)", tips: [ { mg: "Vakio tsara ny tantara: ao avokoa ny valiny. Soraty tsara ny tsipelina.", fr: "Toutes les réponses sont dans la situation. Attention à l'orthographe." } ] },
      { t: "Teil 2 · Message (~30 teny)", tips: [ { mg: "Fehezanteny 1–2 isaky ny teboka. Aza adino ny Anrede sy ny Gruß.", fr: "1–2 phrases par point. N'oublie pas Anrede et Gruß." } ] }
    ],
    sprechen: [
      { t: "Teil 1 · Sich vorstellen", tips: [ { mg: "Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby — fehezanteny tsotra.", fr: "Phrases simples sur chaque mot-clé." }, { mg: "Mety hangatahina ianao hanonona ny anaranao litera tsirairay (buchstabieren) sy isa iray.", fr: "On peut te demander d'épeler ton nom et de dire un nombre." } ] },
      { t: "Teil 2 · Fanontaniana sy valiny (karatra teny)", tips: [ { mg: "Mametraha fanontaniana amin'ny karatra (W-Frage na Ja/Nein) ary valio ny an'ny namanao.", fr: "Pose une question avec la carte et réponds à celle du partenaire." } ] },
      { t: "Teil 3 · Fangatahana (karatra sary)", tips: [ { mg: "« Kannst du / Können Sie … bitte …? » — ary valio: « Ja, gern! » na « Tut mir leid, …».", fr: "Formule une demande polie et réagis." } ] }
    ]
  }
};
P.vocabOfficiel = [
  { de: "der Bahnhof", fr: "la gare", mg: "gara" }, { de: "die Auskunft", fr: "le guichet d'informations", mg: "toerana fanontaniana" },
  { de: "das Zimmer", fr: "la chambre", mg: "efitrano" }, { de: "das Doppelzimmer", fr: "la chambre double", mg: "efitrano ho an'olona roa" },
  { de: "der Stock", fr: "l'étage", mg: "rihana" }, { de: "der Aufzug", fr: "l'ascenseur", mg: "ascenseur" },
  { de: "die Rolltreppe", fr: "l'escalator", mg: "tohatra mihetsika" }, { de: "der Schalter", fr: "le guichet", mg: "varavarankely fandraisana" },
  { de: "das Formular", fr: "le formulaire", mg: "taratasy fenoina" }, { de: "der Vorname", fr: "le prénom", mg: "fanampin'anarana" },
  { de: "der Familienname", fr: "le nom de famille", mg: "anarana" }, { de: "die Hausnummer", fr: "le numéro de rue", mg: "laharan'ny trano" },
  { de: "die Unterschrift", fr: "la signature", mg: "sonia" }, { de: "die Anmeldung", fr: "l'inscription", mg: "fisoratana anarana" },
  { de: "die Kreditkarte", fr: "la carte de crédit", mg: "karatra fandoavam-bola" }, { de: "bar bezahlen", fr: "payer en espèces", mg: "mandoa vola tanana" },
  { de: "das Reisebüro", fr: "l'agence de voyage", mg: "biraon'ny dia" }, { de: "der Urlaub", fr: "les vacances", mg: "fialan-tsasatra" },
  { de: "das Wochenende", fr: "le week-end", mg: "faran'ny herinandro" }, { de: "umsteigen", fr: "changer (de train)", mg: "miova fiara/lamasinina" },
  { de: "die Ankunftshalle", fr: "le hall d'arrivée", mg: "efitrano fahatongavana" }, { de: "die Fahrgäste", fr: "les passagers", mg: "mpandeha" },
  { de: "der Kellner", fr: "le serveur", mg: "mpandroso sakafo" }, { de: "die Verkäuferin", fr: "la vendeuse", mg: "mpivarotra (vavy)" },
  { de: "der Kunde", fr: "le client", mg: "mpanjifa" }, { de: "das Angebot", fr: "l'offre", mg: "tolotra" },
  { de: "das Fleisch", fr: "la viande", mg: "hena" }, { de: "der Fisch", fr: "le poisson", mg: "trondro" },
  { de: "der Pullover", fr: "le pull", mg: "akanjo mafana" }, { de: "das Wetter", fr: "le temps (météo)", mg: "toetr'andro" },
  { de: "das Schiff", fr: "le bateau", mg: "sambo" }, { de: "die Sprachschule", fr: "l'école de langues", mg: "sekoly fiteny" },
  { de: "der Geburtstag", fr: "l'anniversaire", mg: "tsingerintaona nahaterahana" }, { de: "Entschuldigung!", fr: "Excusez-moi !", mg: "Azafady!" },
  { de: "Auf Wiedersehen!", fr: "Au revoir !", mg: "Veloma!" }
];

P.sets.push({
  id: "ga1m1", titre: "Modellsatz 1", theme: "Hotely, gara, fety, fianarana",
  hoeren: { temps: 20, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 2, type: "mc",
      consigne: "Was ist richtig? Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.",
      ctr: ["Qu'est-ce qui est juste ? Cochez a, b ou c. Vous entendez chaque texte deux fois.", "Inona no marina? Safidio a, b na c. Henoina indroa ny lahatsoratra tsirairay."],
      clips: [
        { id: "ga1m1-h1-1", titre: "Nummer 1", script: [{ s: "f", n: "Frau", t: "Guten Tag. Ich möchte ein Einzelzimmer für zwei Nächte." }, { s: "m", n: "Mann", t: "Gern. Ein Einzelzimmer kostet fünfundsechzig Euro pro Nacht, mit Frühstück." }, { s: "f", n: "Frau", t: "Gut, ich nehme das Zimmer." }],
          items: [{ n: 1, q: "Wie viel kostet das Zimmer pro Nacht?", tr: ["Combien coûte la chambre par nuit ?", "Ohatrinona ny efitrano isan'alina?"], opts: ["56 Euro.", "65 Euro.", "75 Euro."], a: "b", exp: { mg: "« fünfundsechzig » = 65. Ao amin'ny alemana, ny isa kely no lazaina aloha (fünf-und-sechzig).", fr: "« fünfundsechzig » = 65 : en allemand, on dit l'unité avant la dizaine." } }] },
        { id: "ga1m1-h1-2", titre: "Nummer 2", script: [{ s: "m", n: "Mann", t: "Entschuldigung, wann beginnt der Deutschkurs?" }, { s: "f", n: "Frau", t: "Normalerweise um halb neun. Aber heute beginnt er später, um neun Uhr." }],
          items: [{ n: 2, q: "Wann beginnt der Kurs heute?", tr: ["Quand commence le cours aujourd'hui ?", "Amin'ny firy no manomboka ny fampianarana anio?"], opts: ["Um 8.30 Uhr.", "Um 9.00 Uhr.", "Um 9.30 Uhr."], a: "b", exp: { mg: "« normalerweise » (matetika) 8.30, fa « heute … um neun Uhr ». Ny anio no anontaniana.", fr: "D'habitude 8h30, mais aujourd'hui 9h. La question porte sur aujourd'hui." } }] },
        { id: "ga1m1-h1-3", titre: "Nummer 3", script: [{ s: "m", n: "Mann", t: "Entschuldigung, wo sind hier die Toiletten?" }, { s: "f", n: "Verkäuferin", t: "Im ersten Stock, neben dem Café. Nehmen Sie die Rolltreppe dort." }],
          items: [{ n: 3, q: "Wo sind die Toiletten?", tr: ["Où sont les toilettes ?", "Aiza ny trano fidiovana?"], opts: ["Im Erdgeschoss.", "Im ersten Stock.", "Im zweiten Stock."], a: "b", exp: { mg: "« Im ersten Stock » = rihana voalohany.", fr: "« Im ersten Stock » = au 1er étage." } }] },
        { id: "ga1m1-h1-4", titre: "Nummer 4", script: [{ s: "f", n: "Kundin", t: "Ich hätte gern vier Brötchen und ein Brot." }, { s: "m", n: "Verkäufer", t: "Brötchen haben wir leider keine mehr. Nur noch Brot." }, { s: "f", n: "Kundin", t: "Dann nur ein Brot, bitte." }],
          items: [{ n: 4, q: "Was kauft die Frau?", tr: ["Qu'achète la femme ?", "Inona no vidian'ilay vehivavy?"], opts: ["Brötchen.", "Ein Brot.", "Brötchen und Brot."], a: "b", exp: { mg: "Tsy misy Brötchen intsony → « nur ein Brot » ihany.", fr: "Plus de petits pains → seulement un pain." } }] },
        { id: "ga1m1-h1-5", titre: "Nummer 5", script: [{ s: "f", n: "Frau", t: "Herr Baum, wie ist Ihre Telefonnummer?" }, { s: "m", n: "Herr Baum", t: "Null vier sechs drei, zwei sieben eins neun." }, { s: "f", n: "Frau", t: "Also null vier sechs drei, zwei sieben eins neun. Danke!" }],
          items: [{ n: 5, q: "Wie ist die Telefonnummer von Herrn Baum?", tr: ["Quel est le numéro de M. Baum ?", "Inona ny laharan-telefaonin'Atoa Baum?"], opts: ["0463 2719", "0463 2791", "0436 2719"], a: "a", exp: { mg: "Henoy isa tsirairay: 0-4-6-3, 2-7-1-9.", fr: "Écoute chiffre par chiffre : 0-4-6-3, 2-7-1-9." } }] },
        { id: "ga1m1-h1-6", titre: "Nummer 6", script: [{ s: "f", n: "Frau", t: "Fährst du heute mit dem Auto zur Arbeit?" }, { s: "m", n: "Mann", t: "Nein, das Auto ist kaputt. Und der Bus ist mir zu voll. Ich fahre mit dem Fahrrad." }],
          items: [{ n: 6, q: "Wie fährt der Mann zur Arbeit?", tr: ["Comment l'homme va-t-il au travail ?", "Inona no hitondran'ilay lehilahy mankany am-piasana?"], opts: ["Mit dem Auto.", "Mit dem Bus.", "Mit dem Fahrrad."], a: "c", exp: { mg: "Simba ny fiara, feno loatra ny bus → « mit dem Fahrrad » (bisikileta).", fr: "Voiture en panne, bus trop plein → vélo." } }] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 1, type: "rf",
      consigne: "Kreuzen Sie an: Richtig oder Falsch. Sie hören jeden Text einmal.",
      ctr: ["Cochez : vrai ou faux. Vous entendez chaque texte une seule fois.", "Marina sa diso? Henoina indray mandeha ihany."],
      clips: [
        { id: "ga1m1-h2-7", titre: "Nummer 7", script: [{ s: "f", n: "Durchsage", t: "Herr Rasoa, gebucht auf den Flug nach Paris, bitte kommen Sie zum Schalter zwölf." }],
          items: [{ n: 7, q: "Herr Rasoa soll zum Schalter 12 kommen.", tr: ["M. Rasoa doit venir au guichet 12.", "Tokony hankany amin'ny varavarankely 12 Atoa Rasoa."], a: "r", exp: { mg: "« bitte kommen Sie zum Schalter zwölf ».", fr: "Il doit venir au guichet 12." } }] },
        { id: "ga1m1-h2-8", titre: "Nummer 8", script: [{ s: "m", n: "Durchsage", t: "Achtung am Gleis drei: Der Zug nach München hat heute zwanzig Minuten Verspätung." }],
          items: [{ n: 8, q: "Der Zug nach München kommt pünktlich.", tr: ["Le train pour Munich arrive à l'heure.", "Tonga ara-potoana ny lamasinina ho any Munich."], a: "f", exp: { mg: "« zwanzig Minuten Verspätung » = tara 20 minitra.", fr: "20 minutes de retard." } }] },
        { id: "ga1m1-h2-9", titre: "Nummer 9", script: [{ s: "f", n: "Durchsage", t: "Liebe Kunden, heute im Angebot: Äpfel aus der Region, ein Kilo nur ein Euro fünfzig." }],
          items: [{ n: 9, q: "Die Äpfel kosten heute 1,50 Euro pro Kilo.", tr: ["Les pommes coûtent 1,50 € le kilo aujourd'hui.", "1,50 € ny kilaon'ny paoma anio."], a: "r", exp: { mg: "« ein Kilo nur ein Euro fünfzig ».", fr: "Un kilo : 1,50 €." } }] },
        { id: "ga1m1-h2-10", titre: "Nummer 10", script: [{ s: "m", n: "Durchsage", t: "Liebe Besucher, bitte beachten Sie: Das Museum schließt heute schon um sechzehn Uhr." }],
          items: [{ n: 10, q: "Das Museum ist heute bis 18 Uhr geöffnet.", tr: ["Le musée est ouvert jusqu'à 18 h aujourd'hui.", "Misokatra hatramin'ny 18 ora ny tranombakoka anio."], a: "f", exp: { mg: "« schon um sechzehn Uhr » = mihidy amin'ny 16 ora.", fr: "Il ferme déjà à 16 h." } }] }
      ] },
    { id: "H3", nom: "Teil 3", ecoutes: 2, type: "mc",
      consigne: "Was ist richtig? Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.",
      ctr: ["Qu'est-ce qui est juste ? Cochez a, b ou c. Deux écoutes.", "Inona no marina? a, b na c. Henoina indroa."],
      clips: [
        { id: "ga1m1-h3-11", titre: "Nummer 11", script: [{ s: "f", n: "Lisa", t: "Hallo Mama, hier ist Lisa. Ich komme heute später nach Hause, nicht um sechs, sondern um sieben Uhr. Tschüss!" }],
          items: [{ n: 11, q: "Wann kommt Lisa nach Hause?", tr: ["Quand Lisa rentre-t-elle ?", "Amin'ny firy no hody i Lisa?"], opts: ["Um 6 Uhr.", "Um 7 Uhr.", "Um 8 Uhr."], a: "b", exp: { mg: "« nicht um sechs, sondern um sieben » → 7 ora.", fr: "Pas à 6 h mais à 7 h." } }] },
        { id: "ga1m1-h3-12", titre: "Nummer 12", script: [{ s: "m", n: "Max", t: "Hallo Tom, hier ist Max. Wir treffen uns heute nicht im Café, sondern direkt vor dem Kino. Bis später!" }],
          items: [{ n: 12, q: "Wo treffen sich Tom und Max?", tr: ["Où se retrouvent Tom et Max ?", "Aiza no hihaonan'i Tom sy Max?"], opts: ["Im Café.", "Vor dem Kino.", "Am Bahnhof."], a: "b", exp: { mg: "« nicht im Café, sondern vor dem Kino ».", fr: "Pas au café, devant le cinéma." } }] },
        { id: "ga1m1-h3-13", titre: "Nummer 13", script: [{ s: "f", n: "Praxis", t: "Guten Tag, hier ist die Praxis Doktor Lang. Ihr Termin ist nicht am Montag, sondern am Dienstag um zehn Uhr. Auf Wiederhören." }],
          items: [{ n: 13, q: "Wann ist der Termin?", tr: ["Quand est le rendez-vous ?", "Rahoviana ny fotoana?"], opts: ["Am Montag.", "Am Dienstag.", "Am Mittwoch."], a: "b", exp: { mg: "« nicht am Montag, sondern am Dienstag ».", fr: "Mardi, pas lundi." } }] },
        { id: "ga1m1-h3-14", titre: "Nummer 14", script: [{ s: "f", n: "Anna", t: "Hallo Paul, hier ist Anna. Für die Party heute Abend: Bring bitte Getränke mit. Kuchen und Salat haben wir schon. Danke!" }],
          items: [{ n: 14, q: "Was soll Paul mitbringen?", tr: ["Que doit apporter Paul ?", "Inona no ho entin'i Paul?"], opts: ["Kuchen.", "Getränke.", "Salat."], a: "b", exp: { mg: "« Bring bitte Getränke mit ». Efa misy ny mofo mamy sy ny salady.", fr: "Des boissons ; gâteau et salade sont déjà là." } }] },
        { id: "ga1m1-h3-15", titre: "Nummer 15", script: [{ s: "m", n: "Herr Klein", t: "Guten Tag, hier spricht Klein von der Firma Weber. Bitte rufen Sie mich zurück. Meine Nummer ist null eins sieben eins, drei vier fünf sechs eins zwei." }],
          items: [{ n: 15, q: "Wie ist die Nummer von Herrn Klein?", tr: ["Quel est le numéro de M. Klein ?", "Inona ny laharan'Atoa Klein?"], opts: ["0171 345612", "0171 345621", "0171 354612"], a: "a", exp: { mg: "3-4-5-6-1-2: henoy tsara ny filaharana.", fr: "3-4-5-6-1-2 : attention à l'ordre." } }] }
      ] }
  ] },

  lesen: { temps: 25, teile: [
    { id: "L1", nom: "Teil 1", type: "rf", temps: 8,
      consigne: "Lesen Sie die beiden Texte und die Aufgaben 1 bis 5. Kreuzen Sie an: Richtig oder Falsch.",
      ctr: ["Lisez les deux textes et les questions 1 à 5. Vrai ou faux ?", "Vakio ny lahatsoratra roa sy ny fanontaniana 1–5. Marina sa diso?"],
      texte: `<div class="blog"><p><b>Text 1</b></p><p>Liebe Hanta,<br>am Samstag mache ich eine Party. Sie beginnt um 19 Uhr. Kannst du bitte einen Salat mitbringen? Meine Adresse ist Gartenstraße 8. Nimm den Bus Nummer 5 bis zur Haltestelle „Rathaus“.<br>Viele Grüße<br>Jana</p><hr><p><b>Text 2</b></p><p>Hallo Kevin,<br>ich bin heute nicht im Büro. Mein Sohn ist krank, ich arbeite von zu Hause. Du kannst mich am Handy anrufen.<br>Gruß<br>Petra</p></div>`,
      exemple: { q: "Jana macht eine Party.", a: "Richtig" },
      items: [
        { n: 1, q: "Die Party ist am Samstag.", tr: ["La fête est samedi.", "Amin'ny asabotsy ny fety."], a: "r", exp: { mg: "« am Samstag mache ich eine Party ».", fr: "Samedi." } },
        { n: 2, q: "Hanta soll Getränke mitbringen.", tr: ["Hanta doit apporter des boissons.", "Tokony hitondra zava-pisotro i Hanta."], a: "f", exp: { mg: "Salady (Salat) no angatahina, fa tsy zava-pisotro.", fr: "Une salade, pas des boissons." } },
        { n: 3, q: "Hanta kann mit dem Bus fahren.", tr: ["Hanta peut prendre le bus.", "Afaka mandeha bus i Hanta."], a: "r", exp: { mg: "« Nimm den Bus Nummer 5 ».", fr: "Bus numéro 5." } },
        { n: 4, q: "Petra ist heute krank.", tr: ["Petra est malade aujourd'hui.", "Marary i Petra anio."], a: "f", exp: { mg: "Ny <b>zanany</b> no marary, fa tsy izy.", fr: "C'est son fils qui est malade." } },
        { n: 5, q: "Kevin kann Petra anrufen.", tr: ["Kevin peut appeler Petra.", "Afaka miantso an'i Petra i Kevin."], a: "r", exp: { mg: "« Du kannst mich am Handy anrufen ».", fr: "Il peut l'appeler sur son portable." } }
      ] },
    { id: "L2", nom: "Teil 2", type: "mc", temps: 9,
      consigne: "Lesen Sie die Texte und die Aufgaben 6 bis 10. Wo finden Sie Informationen? Kreuzen Sie an: a oder b.",
      ctr: ["Lisez les textes et les questions 6 à 10. Où trouvez-vous l'information ? a ou b.", "Vakio ny lahatsoratra sy ny fanontaniana 6–10. Aiza no misy ny vaovao? a na b."],
      exemple: { q: "Sie möchten einen Deutschkurs am Abend machen.", opts: ["www.vhs-mitte.de — Deutschkurse Mo–Do, 18–20 Uhr", "www.sprachschule-sonne.de — Kurse am Vormittag, 9–12 Uhr"], a: "a" },
      items: [
        { n: 6, q: "Sie möchten am Sonntag schwimmen gehen.", tr: ["Vous voulez nager dimanche.", "Te hilomano amin'ny alahady ianao."], opts: ["Hallenbad Nord — Öffnungszeiten: Montag bis Freitag, 7–21 Uhr", "Freizeitbad Wellenspaß — täglich 9–20 Uhr, auch am Wochenende"], otr: [["Piscine : lundi–vendredi", "Alatsinainy–Zoma"], ["Tous les jours, aussi le week-end", "Isan'andro, faran'ny herinandro koa"]], a: "b", exp: { mg: "Alahady = Wochenende → « auch am Wochenende ».", fr: "Dimanche = week-end → b." } },
        { n: 7, q: "Sie suchen eine Wohnung mit zwei Zimmern.", tr: ["Vous cherchez un appartement de deux pièces.", "Mitady trano misy efitrano roa ianao."], opts: ["2-Zimmer-Wohnung, Küche, Bad, 55 m², 600 €", "WG-Zimmer, 15 m², 350 €"], otr: [["Appartement 2 pièces", "Trano efitrano 2"], ["Chambre en colocation", "Efitrano anaty trano iombonana"]], a: "a", exp: { mg: "« 2-Zimmer-Wohnung » = trano misy efitrano 2.", fr: "Appartement 2 pièces → a." } },
        { n: 8, q: "Sie möchten mit dem Zug nach Berlin fahren.", tr: ["Vous voulez aller à Berlin en train.", "Te handeha lamasinina ho any Berlin ianao."], opts: ["www.bahn.de — Fahrkarten online kaufen", "www.flug-billig.de — Flüge nach Berlin ab 39 €"], otr: [["Billets de train en ligne", "Tapakila lamasinina an-tserasera"], ["Vols pour Berlin", "Sidina ho any Berlin"]], a: "a", exp: { mg: "Zug = lamasinina → Bahn (fa tsy Flug = fiaramanidina).", fr: "Train → Bahn, pas avion." } },
        { n: 9, q: "Ihr Kind (6 Jahre) möchte malen lernen.", tr: ["Votre enfant (6 ans) veut apprendre à peindre.", "Te hianatra hanao sary ny zanakao 6 taona."], opts: ["Malkurs für Kinder ab 5 Jahren — samstags 10 Uhr", "Malkurs für Erwachsene — dienstags 19 Uhr"], otr: [["Cours pour enfants dès 5 ans", "Ho an'ny ankizy 5 taona no ho miakatra"], ["Cours pour adultes", "Ho an'ny olon-dehibe"]], a: "a", exp: { mg: "6 taona → « für Kinder ab 5 Jahren ».", fr: "Enfant de 6 ans → cours enfants." } },
        { n: 10, q: "Sie brauchen am Abend einen Arzt.", tr: ["Vous avez besoin d'un médecin le soir.", "Mila dokotera hariva ianao."], opts: ["Dr. Weber — Sprechzeiten: Mo–Fr, 8–12 Uhr", "Ärztlicher Notdienst — abends und am Wochenende, Tel. 116 117"], otr: [["Consultations le matin", "Maraina ihany"], ["Service médical de garde le soir", "Dokotera miambina hariva"]], a: "b", exp: { mg: "Hariva → « abends » → Notdienst.", fr: "Le soir → service de garde." } }
      ] },
    { id: "L3", nom: "Teil 3", type: "rf", temps: 8,
      consigne: "Lesen Sie die Texte und die Aufgaben 11 bis 15. Kreuzen Sie an: Richtig oder Falsch.",
      ctr: ["Lisez les panneaux et les questions 11 à 15. Vrai ou faux ?", "Vakio ny takelaka sy ny fanontaniana 11–15. Marina sa diso?"],
      texte: `<div class="ads">
<div class="ad"><span class="l">0</span><b>An der Tür der Bibliothek</b><br>Heute geschlossen! Morgen wieder ab 9 Uhr geöffnet.</div>
<div class="ad"><span class="l">11</span><b>Im Supermarkt, an der Kasse 3</b><br>Hier bitte nur Bargeld! Kartenzahlung an Kasse 1 und 2.</div>
<div class="ad"><span class="l">12</span><b>An der Bushaltestelle</b><br>Fahrkarten auch im Bus beim Fahrer.</div>
<div class="ad"><span class="l">13</span><b>In der Sprachschule</b><br>Kurs A1 heute in Raum 4 – nicht in Raum 2!</div>
<div class="ad"><span class="l">14</span><b>An der Arztpraxis</b><br>Urlaub vom 1. bis 14. August. Vertretung: Dr. Klein, Marktplatz 3.</div>
<div class="ad"><span class="l">15</span><b>Im Park</b><br>Hunde bitte an die Leine!</div></div>`,
      exemple: { q: "Die Bibliothek ist heute offen.", a: "Falsch" },
      items: [
        { n: 11, q: "An Kasse 3 können Sie mit Karte bezahlen.", tr: ["À la caisse 3, on peut payer par carte.", "Afaka mandoa amin'ny karatra ianao eo amin'ny kesy 3."], a: "f", exp: { mg: "« nur Bargeld » = vola tanana ihany eo amin'ny kesy 3.", fr: "Caisse 3 : espèces seulement." } },
        { n: 12, q: "Sie können im Bus eine Fahrkarte kaufen.", tr: ["On peut acheter un billet dans le bus.", "Afaka mividy tapakila ao anaty bus."], a: "r", exp: { mg: "« Fahrkarten auch im Bus beim Fahrer ».", fr: "Billets auprès du chauffeur." } },
        { n: 13, q: "Der Kurs A1 ist heute in Raum 2.", tr: ["Le cours A1 est en salle 2 aujourd'hui.", "Ao amin'ny efitrano 2 ny fampianarana A1 anio."], a: "f", exp: { mg: "« in Raum 4 – nicht in Raum 2 ».", fr: "Salle 4, pas 2." } },
        { n: 14, q: "Im August können Sie zu Dr. Klein gehen.", tr: ["En août, vous pouvez aller chez le Dr Klein.", "Amin'ny Aogositra dia afaka mankany amin'i Dr. Klein ianao."], a: "r", exp: { mg: "« Vertretung » = solon'ilay dokotera → Dr. Klein.", fr: "Le remplaçant est le Dr Klein." } },
        { n: 15, q: "Hunde dürfen im Park frei laufen.", tr: ["Les chiens peuvent courir librement dans le parc.", "Afaka mihazakazaka malalaka ny alika."], a: "f", exp: { mg: "« an die Leine » = tsy maintsy misy tady.", fr: "En laisse obligatoire." } }
      ] }
  ] },

  schreiben: { temps: 20, aufgaben: [
    { id: "S1", nom: "Teil 1", temps: 8, points: 5, type: "Formular",
      consigne: `<p>Ihr Freund, Tahiry Rakotomalala, möchte einen Deutschkurs am Abend besuchen. Er ist am 12. März 1998 geboren und wohnt in der Bahnhofstraße 15 in 80335 München. Er bezahlt den Kurs bar.</p><p>Im Formular fehlen fünf Informationen. Helfen Sie Ihrem Freund und schreiben Sie die fünf fehlenden Informationen in das Formular.</p>`,
      ctr: ["Aidez votre ami à remplir le formulaire : 5 informations manquent.", "Ampio ny namanao hameno ny taratasy: vaovao 5 no tsy ao."],
      form: { titre: "Anmeldung – Sprachschule Lingua", champs: [
        { label: "Familienname", v: "Rakotomalala" },
        { n: 1, label: "Vorname", a: ["Tahiry"] },
        { n: 2, label: "Geburtsdatum", a: ["12.03.1998", "12.3.1998", "12. März 1998", "12.03.98", "12/03/1998"] },
        { label: "Straße, Hausnummer", v: "Bahnhofstraße 15" },
        { n: 3, label: "PLZ, Wohnort", a: ["80335 München", "80335 Muenchen"] },
        { n: 4, label: "Kurszeit", choix: ["Vormittag", "Abend"], a: ["Abend"] },
        { n: 5, label: "Zahlungsweise", choix: ["bar", "Überweisung"], a: ["bar"] }
      ] },
      exp: { mg: "Ao amin'ny tantara avokoa ny valiny. Tandremo ny tsipelina sy ny datin'ny teraka (andro.volana.taona).", fr: "Tout est dans la situation. Attention à l'orthographe et au format de la date." } },
    { id: "S2", nom: "Teil 2", temps: 12, mots: 30, points: 10, type: "Kurze Mitteilung",
      consigne: `<p>Sie möchten im Juli einen Deutschkurs in Wien machen. Schreiben Sie an die Sprachschule:</p><ul><li>Warum schreiben Sie?</li><li>Fragen Sie: Was kostet der Kurs?</li><li>Bitten Sie: Informationen über Zimmer.</li></ul><p class="small">Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter). Schreiben Sie auch eine Anrede und einen Gruß.</p>`,
      ctr: ["Écrivez à l'école : pourquoi vous écrivez, demandez le prix, demandez des infos sur les chambres. ~30 mots.", "Manorata amin'ny sekoly: antony, vidiny, vaovao momba ny efitrano. ~30 teny."],
      checklist: ["Anrede : Sehr geehrte Damen und Herren,", "Teboka 1 : antony (Ich möchte …)", "Teboka 2 : fanontaniana momba ny vidiny", "Teboka 3 : fangatahana vaovao momba ny efitrano", "Gruß : Mit freundlichen Grüßen + anarana", "Eo amin'ny 30 teny"],
      redemittel: ["Sehr geehrte Damen und Herren,", "ich möchte im Juli einen Deutschkurs in Wien machen.", "Was kostet der Kurs?", "Können Sie mir bitte Informationen über Zimmer schicken?", "Vielen Dank!", "Mit freundlichen Grüßen"],
      modele: `Sehr geehrte Damen und Herren,

ich möchte im Juli einen Deutschkurs in Wien machen. Was kostet der Kurs? Können Sie mir bitte auch Informationen über Zimmer schicken?

Vielen Dank!
Mit freundlichen Grüßen
Tahiry Rakotomalala` }
  ], criteres: [
    { nom: "Aufgabenerfüllung", desc: "Teboka 3 voavaly avokoa? · Les 3 points sont traités ?" },
    { nom: "Kommunikative Gestaltung", desc: "Anrede sy Gruß mety · Formules d'appel et de salutation" }
  ] },

  sprechen: { preparation: 0, teile: [
    { id: "P1", nom: "Teil 1 – Sich vorstellen", mg: "Mampahafantatra ny tena", duree: 1, mode: "present", em: "🙋",
      consigne: `<p>Stellen Sie sich vor. Sprechen Sie zu den Stichwörtern.</p><div class="plan"><b>Name? · Alter? · Land? · Wohnort? · Sprachen? · Beruf? · Hobby?</b></div><p class="small">Danach: Buchstabieren Sie Ihren Namen und nennen Sie eine Telefonnummer.</p>`,
      ctr: ["Présentez-vous avec les mots-clés, puis épelez votre nom et dites un numéro.", "Ampahafantaro ny tenanao amin'ireo teny ireo, avy eo tononina tsirairay ny litera amin'ny anaranao."],
      themes: [{ titre: "Sich vorstellen", points: [
        { de: "Name? Alter?", mg: "Anarana? Taona?", fr: "Nom ? Âge ?" }, { de: "Land? Wohnort?", mg: "Firenena? Toerana honenana?", fr: "Pays ? Lieu d'habitation ?" },
        { de: "Sprachen?", mg: "Fiteny?", fr: "Langues ?" }, { de: "Beruf? Hobby?", mg: "Asa? Fialam-boly?", fr: "Métier ? Loisirs ?" },
        { de: "Buchstabieren + Telefonnummer", mg: "Tononina litera tsirairay ny anarana + laharan-telefaona", fr: "Épeler son nom + numéro" } ],
        modele: `Ich heiße Mialy Razafy. Ich bin 24 Jahre alt.
Ich komme aus Madagaskar und wohne in Antananarivo.
Ich spreche Malagasy, Französisch und ein bisschen Deutsch.
Ich bin Krankenpflegerin von Beruf. Mein Hobby ist Tanzen.

Mein Name: M – I – A – L – Y. Meine Telefonnummer ist 034 12 345 67.` }],
      redemittel: [["Mampahafantatra · Se présenter", ["Ich heiße … / Mein Name ist …", "Ich bin … Jahre alt.", "Ich komme aus Madagaskar.", "Ich wohne in …", "Ich spreche …", "Ich bin … von Beruf. / Ich arbeite als …", "Mein Hobby ist … / Ich … gern."]]] },
    { id: "P2", nom: "Teil 2 – Um Informationen bitten", mg: "Manontany sy mamaly", duree: 3, mode: "dialog", em: "🃏",
      consigne: `<p><b>Thema: Essen und Trinken.</b> Sie bekommen Karten mit Wörtern. Fragen Sie Ihren Partner / Ihre Partnerin und antworten Sie auf seine / ihre Fragen.</p><div class="plan">Karten: <b>Frühstück · Kaffee · Obst · Wochenende · Restaurant · Lieblingsessen</b></div>`,
      ctr: ["Thème : manger et boire. Posez des questions avec les cartes et répondez au partenaire.", "Lohahevitra: sakafo sy zava-pisotro. Manontania amin'ny karatra ary mamalia."],
      partenaire: [
        { id: "ga1m1-p2-1", t: "Was isst du gern zum Frühstück?", cue: "Valio ny fanontaniana. · Réponds.", aide: ["Zum Frühstück esse ich …", "Ich trinke …", "Ich esse gern Brot mit …"] },
        { id: "ga1m1-p2-2", t: "Danke. Jetzt bist du dran. Deine Karte ist „Kaffee“. Frag mich bitte!", cue: "Mametraha fanontaniana amin'ny teny « Kaffee ». · Pose une question avec « Kaffee ».", aide: ["Trinkst du gern Kaffee?", "Wie viel Kaffee trinkst du am Tag?"] },
        { id: "ga1m1-p2-3", t: "Ja, ich trinke jeden Morgen zwei Tassen Kaffee. Jetzt meine Frage: Was isst du am Wochenende?", cue: "Valio. · Réponds.", aide: ["Am Wochenende koche ich …", "Am Sonntag esse ich mit meiner Familie …"] },
        { id: "ga1m1-p2-4", t: "Interessant! Deine nächste Karte ist „Restaurant“.", cue: "Manontania momba ny « Restaurant ». · Question sur « Restaurant ».", aide: ["Gehst du oft ins Restaurant?", "Welches Restaurant magst du?"] },
        { id: "ga1m1-p2-5", t: "Nicht so oft, vielleicht einmal im Monat. Meine letzte Frage: Was ist dein Lieblingsessen?", cue: "Valio. · Réponds.", aide: ["Mein Lieblingsessen ist …", "Ich esse sehr gern Romazava."] }
      ],
      redemittel: [["Manontany · Demander", ["Was isst du gern …?", "Trinkst du gern …?", "Wann / Wo / Wie oft …?", "Magst du …?"]], ["Mamaly · Répondre", ["Ja, ich … gern.", "Nein, ich … nicht gern.", "Am liebsten esse ich …", "Einmal pro Woche."]]],
      modele: `A: Was isst du gern zum Frühstück?
B: Zum Frühstück esse ich Brot mit Butter und trinke Tee.
B: Trinkst du gern Kaffee?
A: Ja, ich trinke jeden Morgen zwei Tassen Kaffee.
A: Was isst du am Wochenende?
B: Am Sonntag koche ich Reis mit Hühnchen für meine Familie.
B: Gehst du oft ins Restaurant?
A: Nein, nur einmal im Monat.
A: Was ist dein Lieblingsessen?
B: Mein Lieblingsessen ist Romazava.` },
    { id: "P3", nom: "Teil 3 – Bitten formulieren", mg: "Mangataka zavatra", duree: 3, mode: "dialog", em: "🙏",
      consigne: `<p>Sie bekommen Karten mit Bildern. Formulieren Sie eine Bitte und reagieren Sie auf die Bitte von Ihrem Partner / Ihrer Partnerin.</p>`,
      ctr: ["Avec les cartes-images, formulez une demande polie et réagissez à celle du partenaire.", "Amin'ny karatra misy sary, mangataha am-pahalalam-pomba ary mamalia ny fangatahan'ny namanao."],
      partenaire: [
        { id: "ga1m1-p3-1", t: "Kannst du mir bitte dein Wörterbuch geben?", cue: "Valio ny fangatahana. · Réagis.", aide: ["Ja, gern. Hier, bitte!", "Tut mir leid, ich habe kein Wörterbuch."] },
        { id: "ga1m1-p3-2", t: "Danke! Jetzt du: Deine Karte zeigt ein Fenster.", cue: "Mangataha: manokatra varavarankely. · Demande d'ouvrir la fenêtre.", aide: ["Kannst du bitte das Fenster aufmachen?", "Mach bitte das Fenster auf!"] },
        { id: "ga1m1-p3-3", t: "Ja, natürlich. Es ist wirklich warm hier. Meine Karte: ein Kugelschreiber. Hast du einen Kugelschreiber für mich?", cue: "Valio. · Réagis.", aide: ["Ja, hier bitte.", "Nein, leider nicht."] },
        { id: "ga1m1-p3-4", t: "Super, danke! Deine nächste Karte zeigt eine Uhr.", cue: "Anontanio ny ora. · Demande l'heure.", aide: ["Wie spät ist es, bitte?", "Kannst du mir bitte sagen, wie spät es ist?"] }
      ],
      redemittel: [["Mangataka · Demander", ["Kannst du / Können Sie bitte …?", "Gib mir bitte …", "Hast du … für mich?"]], ["Mamaly · Réagir", ["Ja, gern!", "Natürlich, hier bitte.", "Tut mir leid, …", "Kein Problem."]]],
      modele: `A: Kannst du mir bitte dein Wörterbuch geben?
B: Ja, gern. Hier, bitte.
B: Kannst du bitte das Fenster aufmachen?
A: Ja, natürlich.
A: Hast du einen Kugelschreiber für mich?
B: Ja, hier bitte.
B: Wie spät ist es, bitte?
A: Es ist halb elf.` }
  ], criteres: [
    { nom: "Aufgabenerfüllung", desc: "Nanao ny asa nangatahina ve? · Tâche réalisée ?" },
    { nom: "Sprachliche Realisierung", desc: "Fehezanteny azo henoina · Phrases compréhensibles" }
  ] },

  vocab: [
    { de: "das Einzelzimmer", fr: "la chambre simple", mg: "efitrano ho an'olona iray", ex: "Ich möchte ein Einzelzimmer." },
    { de: "pro Nacht", fr: "par nuit", mg: "isan'alina", ex: "Das Zimmer kostet 65 Euro pro Nacht." },
    { de: "das Frühstück", fr: "le petit-déjeuner", mg: "sakafo maraina", ex: "Mit Frühstück, bitte." },
    { de: "beginnen", fr: "commencer", mg: "manomboka", ex: "Der Kurs beginnt um neun Uhr." },
    { de: "die Toilette", fr: "les toilettes", mg: "trano fidiovana", ex: "Wo sind die Toiletten?" },
    { de: "das Brötchen", fr: "le petit pain", mg: "mofo kely", ex: "Ich hätte gern vier Brötchen." },
    { de: "kaputt", fr: "cassé / en panne", mg: "simba", ex: "Das Auto ist kaputt." },
    { de: "das Fahrrad", fr: "le vélo", mg: "bisikileta", ex: "Ich fahre mit dem Fahrrad." },
    { de: "der Flug", fr: "le vol", mg: "sidina", ex: "Der Flug nach Paris." },
    { de: "das Gleis", fr: "le quai / la voie", mg: "lalamby", ex: "Der Zug fährt von Gleis drei." },
    { de: "die Verspätung", fr: "le retard", mg: "fahatarana", ex: "Der Zug hat Verspätung." },
    { de: "schließen", fr: "fermer", mg: "manidy", ex: "Das Museum schließt um 16 Uhr." },
    { de: "zurückrufen", fr: "rappeler", mg: "miantso indray", ex: "Bitte rufen Sie mich zurück." },
    { de: "die Getränke", fr: "les boissons", mg: "zava-pisotro", ex: "Bring bitte Getränke mit." },
    { de: "die Haltestelle", fr: "l'arrêt", mg: "fijanonan'ny bus", ex: "Steig an der Haltestelle „Rathaus“ aus." },
    { de: "das Bargeld", fr: "les espèces", mg: "vola tanana", ex: "Hier nur Bargeld!" },
    { de: "die Kasse", fr: "la caisse", mg: "kesy", ex: "Bezahlen Sie an Kasse 1." },
    { de: "die Leine", fr: "la laisse", mg: "tadin'alika", ex: "Hunde bitte an die Leine!" },
    { de: "das Wörterbuch", fr: "le dictionnaire", mg: "rakibolana", ex: "Kannst du mir dein Wörterbuch geben?" },
    { de: "das Lieblingsessen", fr: "le plat préféré", mg: "sakafo tiana indrindra", ex: "Mein Lieblingsessen ist Romazava." }
  ]
});
})();
