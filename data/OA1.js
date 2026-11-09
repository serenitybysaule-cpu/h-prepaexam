/* ÖSD ZERTIFIKAT A1 (ZA1) — textes originaux H Conseil & Formation */
(function(){
const P = window.POOLS.OA1;
P.info = {
  modules: [
    { m: "Lesen", mg: "Famakiana", t: "25 min", parts: "3 Aufgaben · 30 points" },
    { m: "Hören", mg: "Fihainoana", t: "~10 min", parts: "3 Aufgaben · 30 points" },
    { m: "Schreiben", mg: "Fanoratana", t: "20 min", parts: "Formulaire (5 p.) + e-mail ~30 teny (10 p.)" },
    { m: "Sprechen", mg: "Fitenenana", t: "~10 min (à deux)", parts: "3 Aufgaben · 25 points" }
  ],
  reussite: { mg: "Isa 100 ny totaliny (Lesen 30 · Hören 30 · Schreiben 15 · Sprechen 25). Mila <b>60 isa</b> vao afaka, ary isa kely indrindra isaky ny ampahany.", fr: "100 points au total ; il faut 60 points, avec un minimum dans chaque partie." },
  institut: { osd: { mg: "Ny ZA1 an'ny ÖSD dia mampiasa alemana avy any Aotrisy sy Soisa koa (Jänner, Paradeiser, Franken…). Ny endriny dia tsy mitovy amin'ny Goethe A1.", fr: "Le ZA1 de l'ÖSD utilise aussi l'allemand d'Autriche et de Suisse. Son format est différent du Goethe A1." } },
  guides: {
    lesen: [
      { t: "Aufgabe 1 · Situations A–E ↔ annonces 1–6", tips: [ { mg: "Misy filazana iray tafahoatra. Tsipiho ny teny lehibe amin'ny toe-javatra tsirairay.", fr: "Une annonce est en trop. Souligne le mot-clé de chaque situation." } ] },
      { t: "Aufgabe 2 · Filazana 3 · JA / NEIN", tips: [ { mg: "Tadiavo ny antsipiriany: vidiny, ora, voarara (nur, nicht, kein).", fr: "Cherche le détail : prix, heure, interdiction (nur, nicht, kein)." } ] },
      { t: "Aufgabe 3 · Textes A–E ↔ images 1–6", tips: [ { mg: "Inona no tian'ny takelaka holazaina? Sary iray no tafahoatra.", fr: "Que veut dire le panneau ? Une image est en trop." } ] }
    ],
    hoeren: [
      { t: "Aufgabe 1 · Textes ↔ photos (1 seule écoute)", tips: [ { mg: "Jereo tsara ny sary mandritra ny 30 segondra. Henoy ny feo ambadika sy ny teny lehibe.", fr: "Observe les photos pendant 30 s. Écoute les bruits et mots-clés." } ] },
      { t: "Aufgabe 2 · Notes à compléter (2 écoutes)", tips: [ { mg: "Soraty ny isa sy ny anarana. Tandremo ny « nicht …, sondern … ».", fr: "Note chiffres et noms. Attention à « nicht …, sondern … »." } ] },
      { t: "Aufgabe 3 · Personnes ↔ réponse (1 écoute)", tips: [ { mg: "Valiny iray isaky ny olona. Matetika miresaka zavatra maro izy fa iray ihany no « am liebsten ».", fr: "Une réponse par personne : cherche le « am liebsten »." } ] }
    ],
    schreiben: [
      { t: "Aufgabe 1 · Formulaire", tips: [ { mg: "Ao amin'ny tantara avokoa ny valiny. Tsipelina marina!", fr: "Tout est dans la situation. Orthographe correcte !" } ] },
      { t: "Aufgabe 2 · E-mail ~30 teny", tips: [ { mg: "Valio ny fanontaniana REHETRA, ary soraty ny Gruß any am-parany.", fr: "Réponds à TOUTES les questions et termine par un Gruß." } ] }
    ],
    sprechen: [
      { t: "Aufgabe 1 · Sich vorstellen (4 thèmes)", tips: [ { mg: "Misafidiana lohahevitra 4 ary lazao fehezanteny 2–3 isaky ny iray.", fr: "Choisis 4 thèmes, 2–3 phrases chacun." } ] },
      { t: "Aufgabe 2 · Décrire une image", tips: [ { mg: "Was? Wie viele Personen? Wo? Was machen sie? — valio ireo 4.", fr: "Réponds aux 4 questions." } ] },
      { t: "Aufgabe 3 · Jeu de rôle", tips: [ { mg: "Ataovy toy ny tena izy ilay toe-javatra amin'ny sary nofidianao.", fr: "Joue la situation de l'image choisie." } ] }
    ]
  }
};
P.vocabOfficiel = [
  { de: "die Anzeige", fr: "l'annonce", mg: "filazana" }, { de: "die Wohnung", fr: "l'appartement", mg: "trano" },
  { de: "die Gesamtmiete", fr: "le loyer total", mg: "hofan-trano rehetra" }, { de: "die Wohnungsbesichtigung", fr: "la visite d'appartement", mg: "fitsidihana trano" },
  { de: "zu vermieten", fr: "à louer", mg: "hofaina" }, { de: "das Ticket", fr: "le billet", mg: "tapakila" },
  { de: "gültig", fr: "valable", mg: "manan-kery" }, { de: "das Reisezentrum", fr: "le centre de voyage (gare)", mg: "biraon'ny dia" },
  { de: "die Sekretärin", fr: "la secrétaire", mg: "sekretera" }, { de: "die Berufserfahrung", fr: "l'expérience professionnelle", mg: "traikefa amin'ny asa" },
  { de: "die Vollzeit", fr: "le temps plein", mg: "andro feno" }, { de: "die Bewerbung", fr: "la candidature", mg: "fangatahana asa" },
  { de: "das Fitnesscenter", fr: "la salle de sport", mg: "toerana fanatanjahantena" }, { de: "die Buchhandlung", fr: "la librairie", mg: "fivarotam-boky" },
  { de: "die Wäsche", fr: "le linge", mg: "lamba hosasana" }, { de: "die Gartenarbeit", fr: "le jardinage", mg: "asa an-jaridaina" },
  { de: "die Hausarbeit", fr: "les tâches ménagères", mg: "asa an-trano" }, { de: "das Brötchen", fr: "le petit pain", mg: "mofo kely" },
  { de: "der Schinken", fr: "le jambon", mg: "hena kisoa" }, { de: "der Käse", fr: "le fromage", mg: "fromazy" },
  { de: "das Formular", fr: "le formulaire", mg: "taratasy fenoina" }, { de: "das Geburtsdatum", fr: "la date de naissance", mg: "daty nahaterahana" },
  { de: "das Urlaubsland", fr: "le pays de vacances", mg: "firenena hialan-tsasatra" }, { de: "die Anreise", fr: "le voyage aller", mg: "dia mankany" },
  { de: "die Bezahlung", fr: "le paiement", mg: "fandoavana" }, { de: "das Doppelzimmer", fr: "la chambre double", mg: "efitrano ho an'olona roa" },
  { de: "wandern", fr: "faire de la randonnée", mg: "mandeha an-tongotra lavitra" }, { de: "Rad fahren", fr: "faire du vélo", mg: "mitaingina bisikileta" },
  { de: "der Flughafen", fr: "l'aéroport", mg: "seranam-piaramanidina" }, { de: "das Krankenhaus", fr: "l'hôpital", mg: "hopitaly" },
  { de: "ausschalten", fr: "éteindre", mg: "mamono (fitaovana)" }, { de: "verboten", fr: "interdit", mg: "voarara" },
  { de: "der Ruhetag", fr: "le jour de fermeture", mg: "andro fialan-tsasatra (mihidy)" }, { de: "die Leine", fr: "la laisse", mg: "tadin'alika" },
  { de: "der Jänner (AT)", fr: "janvier (Autriche)", mg: "Janoary (Aotrisy)" }, { de: "die Paradeiser (AT)", fr: "les tomates (Autriche)", mg: "voatabia (Aotrisy)" }
];

const pics = (o) => Object.fromEntries(Object.entries(o).map(([k,[e,t]]) => [k, `<span style="font-size:26px">${e}</span><br>${t}`]));

P.sets.push({
  id: "oa1m1", titre: "Modellsatz 1", theme: "Filazana, takelaka, fiaraha-monina",
  lesen: { temps: 25, teile: [
    { id: "L1", nom: "Aufgabe 1", type: "match", points: 10, zero: false, layout: "choixAfter",
      consigne: "Sie suchen verschiedene Dinge in der Zeitung. Finden Sie zu jeder Situation (A – E) die passende Anzeige (Nr. 1 – 6). Achtung: Eine Anzeige ist zu viel.",
      ctr: ["Trouvez pour chaque situation (A–E) l'annonce qui convient (1–6). Une annonce est en trop.", "Tadiavo ny filazana mifanaraka amin'ny toe-javatra tsirairay (A–E). Misy filazana iray tafahoatra."],
      choix: {
        "1": "<b>Restaurant Donaublick</b><br>Wir suchen Kellner/in für den Abendservice (18–23 Uhr). Tel. 0664 / 123 45 67",
        "2": "<b>Möbel Huber</b><br>Küchen zum Sonderpreis! Linzer Straße 20, Wien",
        "3": "<b>Kindertheater Kasperl</b><br>Jeden Samstag und Sonntag um 15 Uhr. Für Kinder ab 3 Jahren.",
        "4": "<b>Reisebüro Sonnenschein</b><br>Flüge nach Spanien ab 99 €!",
        "5": "<b>PC-Hilfe Mayer</b><br>Wir reparieren Ihren Computer – schnell und günstig. Auch Hausbesuche!",
        "6": "<b>Sprachschule Lingua Graz</b><br>Deutschkurse für Anfänger – Beginn jeden Montag."
      },
      items: [
        { n: 1, q: "A · Sie möchten am Wochenende mit Ihren Kindern etwas unternehmen.", tr: ["Vous voulez faire une sortie avec vos enfants le week-end.", "Te hanao zavatra miaraka amin'ny zanakao amin'ny faran'ny herinandro."], a: "3", exp: { mg: "Ankizy + Samstag/Sonntag → teatra ho an'ny ankizy (3).", fr: "Enfants + week-end → théâtre pour enfants." } },
        { n: 2, q: "B · Ihr Computer funktioniert nicht mehr.", tr: ["Votre ordinateur ne fonctionne plus.", "Tsy mandeha intsony ny ordinateranao."], a: "5", exp: { mg: "« Wir reparieren Ihren Computer ».", fr: "Réparation d'ordinateur → 5." } },
        { n: 3, q: "C · Sie suchen eine Arbeit am Abend.", tr: ["Vous cherchez un travail le soir.", "Mitady asa hariva ianao."], a: "1", exp: { mg: "« Abendservice (18–23 Uhr) » = asa hariva.", fr: "Service du soir → 1." } },
        { n: 4, q: "D · Sie möchten Deutsch lernen.", tr: ["Vous voulez apprendre l'allemand.", "Te hianatra alemana ianao."], a: "6", exp: { mg: "« Deutschkurse für Anfänger ».", fr: "Cours d'allemand → 6." } },
        { n: 5, q: "E · Sie brauchen neue Möbel für die Küche.", tr: ["Vous avez besoin de nouveaux meubles de cuisine.", "Mila fanaka vaovao ho an'ny lakozia ianao."], a: "2", exp: { mg: "« Küchen zum Sonderpreis » → 2. Ny 4 (fiaramanidina) no tafahoatra.", fr: "Cuisines → 2. L'annonce 4 est en trop." } }
      ] },
    { id: "L2", nom: "Aufgabe 2", type: "jn", points: 10,
      consigne: "Sie lesen drei Anzeigen. Dazu gibt es je 2 Fragen. Antworten Sie mit JA oder NEIN.",
      ctr: ["Vous lisez trois annonces, 2 questions chacune. Répondez JA (oui) ou NEIN (non).", "Filazana 3, fanontaniana 2 isaky ny iray. Valio JA (eny) na NEIN (tsia)."],
      texte: `<div class="ads">
<div class="ad"><span class="l">A</span><b>Stadtfest Linz</b><br>Samstag, 10–22 Uhr · Eintritt frei!<br>Kinderprogramm am Nachmittag. Parkplätze beim Bahnhof.</div>
<div class="ad"><span class="l">B</span><b>Fahrradverleih Salzburg</b><br>1 Tag: 15 € · Studierende: 10 €<br>Nur mit Ausweis! Täglich 8–18 Uhr.</div>
<div class="ad"><span class="l">C</span><b>Zimmer frei!</b><br>Möbliertes WG-Zimmer, 18 m², 380 € inkl. Strom, ab 1. März. Nur für Nichtraucher.<br>Anrufe bitte ab 17 Uhr: 0650 / 987 65 43</div></div>`,
      items: [
        { n: 6, q: "A · Muss man für das Fest bezahlen?", tr: ["Faut-il payer pour la fête ?", "Mila mandoa ve ho an'ny fety?"], a: "n", exp: { mg: "« Eintritt frei » = maimaim-poana.", fr: "Entrée gratuite → NEIN." } },
        { n: 7, q: "A · Gibt es auch etwas für Kinder?", tr: ["Y a-t-il aussi quelque chose pour les enfants ?", "Misy zavatra ho an'ny ankizy koa ve?"], a: "j", exp: { mg: "« Kinderprogramm am Nachmittag ».", fr: "Programme enfants → JA." } },
        { n: 8, q: "B · Kostet das Fahrrad für Studierende weniger?", tr: ["Le vélo coûte-t-il moins cher pour les étudiants ?", "Mora kokoa ve ho an'ny mpianatra?"], a: "j", exp: { mg: "10 € fa tsy 15 €.", fr: "10 € au lieu de 15 € → JA." } },
        { n: 9, q: "B · Kann man um 19 Uhr ein Fahrrad holen?", tr: ["Peut-on prendre un vélo à 19 h ?", "Afaka maka bisikileta amin'ny 19 ora ve?"], a: "n", exp: { mg: "Misokatra 8–18 ora ihany.", fr: "Ouvert jusqu'à 18 h → NEIN." } },
        { n: 10, q: "C · Darf man im Zimmer rauchen?", tr: ["Peut-on fumer dans la chambre ?", "Azo atao ve ny mifoka ao?"], a: "n", exp: { mg: "« Nur für Nichtraucher » = tsy mpifoka ihany.", fr: "Non-fumeurs uniquement → NEIN." } },
        { n: 11, q: "C · Kann man am Abend anrufen?", tr: ["Peut-on appeler le soir ?", "Afaka miantso hariva ve?"], a: "j", exp: { mg: "« Anrufe bitte ab 17 Uhr » → hariva dia mety.", fr: "Appels à partir de 17 h → JA." } }
      ] },
    { id: "L3", nom: "Aufgabe 3", type: "match", points: 10, zero: false, layout: "textFirst",
      consigne: "Sie lesen 5 kurze Texte (Text A – E). Welches Bild (1 – 6) passt zu welchem Text? Achtung: Ein Bild ist zu viel.",
      ctr: ["5 textes courts (A–E) : quelle image (1–6) correspond ? Une image est en trop.", "Lahatsoratra fohy 5 (A–E): iza no sary mifanaraka (1–6)? Sary iray tafahoatra."],
      choixTitre: "Bilder",
      choix: pics({ "1": ["🚲", "Eine Frau schiebt ihr Fahrrad durch eine Fußgängerzone."], "2": ["🥖", "Ein Bäcker holt Brot aus dem Ofen."], "3": ["📚", "Menschen lesen still in einer Bibliothek."], "4": ["🦒", "Kinder stehen vor einem Tiergehege im Zoo."], "5": ["🏊", "Ein Mann springt ins Schwimmbecken."], "6": ["🪑", "Eine Parkbank mit frischer grüner Farbe."] }),
      texte: `<div class="ads">
<div class="ad"><span class="l">A</span>Bitte nicht füttern! Unsere Tiere bekommen spezielles Futter.</div>
<div class="ad"><span class="l">B</span>Heute frisches Brot und Gebäck – direkt aus dem Ofen!</div>
<div class="ad"><span class="l">C</span>Achtung! Frisch gestrichen – bitte nicht berühren.</div>
<div class="ad"><span class="l">D</span>Ab hier bitte absteigen und das Fahrrad schieben.</div>
<div class="ad"><span class="l">E</span>Liebe Besucher, in der Bibliothek bitte leise sein!</div></div>`,
      items: [
        { n: 12, q: "Text A", a: "4", exp: { mg: "« nicht füttern » (aza omena sakafo) → biby any amin'ny zoo.", fr: "Ne pas nourrir → zoo." } },
        { n: 13, q: "Text B", a: "2", exp: { mg: "Mofo avy amin'ny lafaoro → mpanao mofo.", fr: "Pain sortant du four → boulangerie." } },
        { n: 14, q: "Text C", a: "6", exp: { mg: "« Frisch gestrichen » = vao nolokoina.", fr: "Peinture fraîche → banc." } },
        { n: 15, q: "Text D", a: "1", exp: { mg: "« absteigen und das Fahrrad schieben » = midina ary atosika ny bisikileta.", fr: "Descendre et pousser son vélo." } },
        { n: 16, q: "Text E", a: "3", exp: { mg: "« leise sein » ao amin'ny tranomboky. Sary 5 no tafahoatra.", fr: "Silence à la bibliothèque. L'image 5 est en trop." } }
      ] }
  ] },

  hoeren: { temps: 10, teile: [
    { id: "H1", nom: "Aufgabe 1", ecoutes: 1, type: "match", points: 10, zero: false, lecture: 30,
      consigne: "Sie hören fünf verschiedene Texte zu den Fotos. Sie hören jeden Text ein Mal. Welcher Text passt zu welchem Foto? Achtung: Ein Foto ist zu viel.",
      ctr: ["5 textes, 6 photos : quelle photo va avec chaque texte ? Une écoute. Une photo est en trop.", "Lahatsoratra 5, sary 6: iza no mifanaraka? Henoina indray mandeha. Sary iray tafahoatra."],
      choixTitre: "Fotos",
      choix: pics({ "A": ["☕", "Zwei Freundinnen im Café"], "B": ["🚆", "Ein Zug am Bahnsteig"], "C": ["🛒", "Eine Kasse im Supermarkt"], "D": ["⚽", "Kinder spielen Fußball"], "E": ["🌧️", "Regen – Menschen mit Schirmen"], "F": ["🎂", "Eine Geburtstagsparty"] }),
      clips: [
        { id: "oa1m1-h1-1", titre: "Text 1", script: [{ s: "m", n: "Durchsage", t: "Achtung, bitte! Der Regionalzug nach Graz fährt heute von Bahnsteig vier." }], items: [{ n: 1, q: "Text 1 → Foto?", a: "B", exp: { mg: "« Regionalzug … Bahnsteig » → gara.", fr: "Train, quai → B." } }] },
        { id: "oa1m1-h1-2", titre: "Text 2", script: [{ s: "f", n: "Radio", t: "Und das Wetter: Heute regnet es den ganzen Tag. Vergessen Sie Ihren Schirm nicht!" }], items: [{ n: 2, q: "Text 2 → Foto?", a: "E", exp: { mg: "« regnet … Schirm » → orana.", fr: "Pluie, parapluie → E." } }] },
        { id: "oa1m1-h1-3", titre: "Text 3", script: [{ s: "f", n: "Frau", t: "Zwei Cappuccino, bitte." }, { s: "m", n: "Kellner", t: "Gern. Möchten Sie auch ein Stück Kuchen?" }], items: [{ n: 3, q: "Text 3 → Foto?", a: "A", exp: { mg: "Cappuccino, Kuchen → kafe.", fr: "Café → A." } }] },
        { id: "oa1m1-h1-4", titre: "Text 4", script: [{ s: "f2", n: "Gäste", t: "Alles Gute zum Geburtstag, Lena! Und jetzt die Kerzen ausblasen!" }], items: [{ n: 4, q: "Text 4 → Foto?", a: "F", exp: { mg: "« Alles Gute zum Geburtstag ».", fr: "Anniversaire → F." } }] },
        { id: "oa1m1-h1-5", titre: "Text 5", script: [{ s: "f", n: "Kassiererin", t: "Das macht zwölf Euro vierzig. Zahlen Sie bar oder mit Karte?" }], items: [{ n: 5, q: "Text 5 → Foto?", a: "C", exp: { mg: "« Zahlen Sie bar oder mit Karte? » → kesy. Sary D no tafahoatra.", fr: "Payer → caisse. La photo D est en trop." } }] }
      ] },
    { id: "H2", nom: "Aufgabe 2", ecoutes: 2, type: "fill", points: 10, lecture: 30,
      consigne: "Sie hören folgende Nachricht. Hören Sie gut zu und schreiben Sie die wichtigsten Informationen auf das Notizblatt. Sie hören den Text zwei Mal.",
      ctr: ["Écoutez le message et notez les informations importantes. Deux écoutes.", "Henoy ny hafatra ary soraty ny vaovao manan-danja. Henoina indroa."],
      contexte: "Notizen · Tennistraining",
      clips: [{ id: "oa1m1-h2", titre: "Nachricht", script: [{ s: "f", n: "Sandra", t: "Hallo, hier ist Sandra vom Tennisclub. Das Training am Donnerstag fällt leider aus. Wir treffen uns stattdessen am Freitag um siebzehn Uhr dreißig. Treffpunkt ist nicht die Halle, sondern der Platz in der Parkstraße. Bitte bringt genug Wasser mit. Meine Nummer ist null sechs neun neun, vier drei zwei eins acht sieben. Bis Freitag!" }],
        items: [
          { n: 6, label: "Training neu am:", ph: "Tag", a: ["Freitag", "am Freitag", "Fr"], exp: { mg: "« stattdessen am Freitag » (fa tsy alakamisy).", fr: "Vendredi (pas jeudi)." } },
          { n: 7, label: "Uhrzeit:", ph: "… Uhr", a: ["17.30", "17:30", "17.30 Uhr", "17:30 Uhr", "siebzehn Uhr dreißig", "halb sechs"], exp: { mg: "17 ora sy sasany = 17.30.", fr: "17 h 30." } },
          { n: 8, label: "Ort:", ph: "…straße", a: ["Parkstraße", "Parkstrasse", "Platz in der Parkstraße", "in der Parkstraße"], exp: { mg: "« nicht die Halle, sondern der Platz in der Parkstraße ».", fr: "Le terrain de la Parkstraße." } },
          { n: 9, label: "Mitbringen:", ph: "Was?", a: ["Wasser", "genug Wasser"], exp: { mg: "« bringt genug Wasser mit ».", fr: "De l'eau." } },
          { n: 10, label: "Telefon: 0699 /", ph: "Nummer", a: ["432187", "43 21 87", "4321 87", "432 187"], exp: { mg: "4-3-2-1-8-7: tsy maintsy marina avokoa ny isa.", fr: "Tous les chiffres doivent être justes." } }
        ] }] },
    { id: "H3", nom: "Aufgabe 3", ecoutes: 1, type: "mc", points: 10, lecture: 10,
      consigne: "Sie hören jetzt 5 Personen, die befragt werden. Kreuzen Sie die richtigen Antworten an. Pro Person gibt es nur eine Antwort. Sie hören die Texte ein Mal.",
      ctr: ["5 personnes interrogées : une seule réponse par personne. Une écoute.", "Olona 5 anontaniana: valiny iray isaky ny olona. Henoina indray mandeha."],
      contexte: "Frage: Was essen Sie am liebsten zum Frühstück?",
      xtr: ["Question : que mangez-vous le plus volontiers au petit-déjeuner ?", "Fanontaniana: inona no tianao indrindra hohanina maraina?"],
      clips: [{ id: "oa1m1-h3", titre: "Umfrage", script: [
        { s: "f", n: "Person 1", t: "Ich esse am liebsten Müsli mit Joghurt. Brot esse ich nur am Wochenende." },
        { s: "m", n: "Person 2", t: "Für mich ist Obst am besten, vor allem Bananen und Äpfel." },
        { s: "f2", n: "Person 3", t: "Ein Brot mit Käse – das muss jeden Morgen sein!" },
        { s: "m2", n: "Person 4", t: "Am liebsten esse ich Eier, ein Spiegelei mit Speck. Müsli mag ich gar nicht." },
        { s: "f", n: "Person 5", t: "Ich trinke morgens meistens nur Kaffee. Aber wenn ich Hunger habe, esse ich eine Semmel mit Marmelade." }],
        items: [
          { n: 11, q: "Person 1", opts: ["Brot", "Müsli", "Eier", "Obst"], a: "b", exp: { mg: "« am liebsten Müsli ». Brot amin'ny faran'ny herinandro ihany.", fr: "Müsli ; le pain seulement le week-end." } },
          { n: 12, q: "Person 2", opts: ["Brot", "Müsli", "Eier", "Obst"], a: "d", exp: { mg: "« Obst … Bananen und Äpfel ».", fr: "Fruits." } },
          { n: 13, q: "Person 3", opts: ["Brot", "Müsli", "Eier", "Obst"], a: "a", exp: { mg: "« Ein Brot mit Käse ».", fr: "Pain au fromage." } },
          { n: 14, q: "Person 4", opts: ["Brot", "Müsli", "Eier", "Obst"], a: "c", exp: { mg: "« am liebsten … Eier ».", fr: "Œufs." } },
          { n: 15, q: "Person 5", opts: ["Brot", "Müsli", "Eier", "Obst"], a: "a", exp: { mg: "« Semmel » = Brötchen (teny aotrisiana) → mofo.", fr: "« Semmel » = petit pain (Autriche) → pain." } }
        ] }] }
  ] },

  schreiben: { temps: 20, aufgaben: [
    { id: "S1", nom: "Aufgabe 1", temps: 8, points: 5, type: "Formular",
      consigne: `<p>Ihre Freundin Lalao Andrianina (geboren am 5. Juni 1995) möchte im August mit ihrem Mann Urlaub in Österreich machen. Sie fahren mit dem Bus und brauchen ein Doppelzimmer ohne Frühstück. Sie möchten Rad fahren. Lalao bezahlt bar.</p><p>Helfen Sie Ihrer Freundin und füllen Sie das Formular aus.</p>`,
      ctr: ["Aidez votre amie à remplir le formulaire de l'agence de voyage.", "Ampio ny namanao hameno ny taratasin'ny biraon'ny dia."],
      form: { titre: "Reiseangebote – www.unterwegs-reisen.at", champs: [
        { label: "Nachname", v: "Andrianina" },
        { n: 1, label: "Vorname", a: ["Lalao"] },
        { n: 2, label: "Geburtsdatum", a: ["05.06.1995", "5.6.1995", "5. Juni 1995", "05.06.95", "5/6/1995"] },
        { n: 3, label: "Urlaubsland", a: ["Österreich", "Oesterreich"] },
        { n: 4, label: "Monat", a: ["August"] },
        { n: 5, label: "Zimmer", choix: ["Einzelzimmer", "Doppelzimmer"], a: ["Doppelzimmer"] },
        { n: 6, label: "Frühstück", choix: ["Ja", "Nein"], a: ["Nein"] },
        { n: 7, label: "Anreise mit", a: ["Bus", "dem Bus", "Autobus"] },
        { n: 8, label: "Sport", choix: ["Wandern", "Rad fahren", "Schwimmen"], a: ["Rad fahren"] },
        { n: 9, label: "Bezahlung", choix: ["bar", "Kreditkarte"], a: ["bar"] }
      ] },
      exp: { mg: "Ao amin'ny tantara avokoa: Österreich, August, Bus, Doppelzimmer, tsy misy Frühstück, Rad fahren, bar.", fr: "Tout est dans la situation." } },
    { id: "S2", nom: "Aufgabe 2", temps: 12, mots: 30, points: 10, type: "E-Mail",
      consigne: `<p>Ihre Freundin Sophie wohnt in Graz und hat Sie eingeladen. Sie bekommen folgendes E-Mail:</p><div class="guest"><div class="guest-h">Von: sophie.k@mail.at · Betreff: Dein Besuch</div><div class="guest-b">Hallo! Ich freue mich so, dass du mich besuchen willst! Schreib mir bitte: Wann kommst du? Wie lange bleibst du? Was möchtest du in Graz machen?<br>Liebe Grüße, Sophie</div></div><p class="small">Antworten Sie Sophie. Schreiben Sie circa 30 Wörter. Beantworten Sie alle Fragen. Schreiben Sie am Ende einen Gruß.</p>`,
      ctr: ["Répondez à Sophie : quand vous venez, combien de temps, ce que vous voulez faire. ~30 mots + salutation.", "Valio i Sophie: rahoviana, mandritra ny firy andro, inona no tianao atao. ~30 teny + Gruß."],
      checklist: ["Liebe Sophie,", "Rahoviana? (Tag + Uhrzeit)", "Mandritra ny firy andro?", "Inona no tianao atao any Graz?", "Gruß + anaranao", "Eo amin'ny 30 teny"],
      redemittel: ["Liebe Sophie,", "danke für deine E-Mail!", "Ich komme am … um … Uhr.", "Ich bleibe … Tage.", "In Graz möchte ich gern …", "Liebe Grüße"],
      modele: `Liebe Sophie,

danke für deine E-Mail! Ich komme am Freitag, den 12. Mai, um 15 Uhr mit dem Zug. Ich bleibe drei Tage, bis Montag. In Graz möchte ich gern die Altstadt sehen und mit dir in ein Café gehen.

Liebe Grüße
Fanja` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voavaly avokoa ny fanontaniana? · Toutes les questions ?" },
    { nom: "Wortschatz", desc: "Teny mety · Vocabulaire adapté" },
    { nom: "Strukturen", desc: "Fehezanteny marina · Phrases correctes" }
  ] },

  sprechen: { preparation: 0, teile: [
    { id: "P1", nom: "Aufgabe 1 – Sich vorstellen", mg: "Mampahafantatra ny tena", duree: 2, mode: "present", em: "🙋",
      consigne: `<p>Ihre Gesprächspartnerin / Ihr Gesprächspartner möchte Sie gerne kennenlernen. Wählen Sie 4 Themen aus und sprechen Sie zu jedem Thema ein paar Sätze.</p><div class="plan"><b>Beruf? · Sport? · Sprachen? · Hobbys? · Lieblingsessen? · Familie?</b></div>`,
      ctr: ["Choisissez 4 thèmes et dites quelques phrases sur chacun.", "Misafidiana lohahevitra 4 ary lazao fehezanteny vitsivitsy isaky ny iray."],
      themes: [{ titre: "Sich vorstellen", points: [
        { de: "Beruf?", mg: "Asa?", fr: "Métier ?" }, { de: "Sprachen?", mg: "Fiteny?", fr: "Langues ?" },
        { de: "Hobbys? / Sport?", mg: "Fialam-boly? Fanatanjahantena?", fr: "Loisirs ? Sport ?" }, { de: "Familie? / Lieblingsessen?", mg: "Fianakaviana? Sakafo tiana?", fr: "Famille ? Plat préféré ?" } ],
        modele: `Ich arbeite als Verkäuferin in einem Supermarkt. Die Arbeit ist manchmal anstrengend, aber die Kollegen sind nett.
Ich spreche Malagasy und Französisch. Jetzt lerne ich Deutsch, weil ich in Österreich arbeiten möchte.
In meiner Freizeit tanze ich gern und ich höre Musik.
Ich habe eine große Familie: zwei Brüder und eine Schwester. Mein Lieblingsessen ist Ravitoto mit Reis.` }],
      redemittel: [["Lohahevitra · Thèmes", ["Ich arbeite als … / Ich bin … von Beruf.", "Ich spreche … Jetzt lerne ich Deutsch.", "In meiner Freizeit … ich gern.", "Ich habe … Geschwister.", "Mein Lieblingsessen ist …"]]] },
    { id: "P2", nom: "Aufgabe 2 – Situationen beschreiben", mg: "Mamaritra sary", duree: 2, mode: "present", em: "🖼️",
      consigne: `<p>Sie bekommen drei Bilder. Wählen Sie ein Bild aus. Sprechen Sie über das Bild:</p><ul><li>Was sehen Sie?</li><li>Wie viele Personen sehen Sie?</li><li>Wo sind diese Personen?</li><li>Was machen diese Personen?</li></ul>`,
      ctr: ["Choisissez une image et décrivez-la : quoi, combien de personnes, où, que font-elles.", "Misafidiana sary iray ary lazao: inona, olona firy, aiza, inona no ataon'izy ireo."],
      themes: [
        { titre: "Bild 1 · Im Supermarkt", bild: { e: "🛒", de: "Eine Frau und ein kleines Mädchen kaufen im Supermarkt Obst. Die Frau hält einen Korb.", tr: ["Une femme et une petite fille achètent des fruits au supermarché.", "Vehivavy sy zazavavy kely mividy voankazo ao amin'ny supermarché."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Auf dem Bild sehe ich einen Supermarkt. Ich sehe zwei Personen: eine Frau und ein kleines Mädchen. Vielleicht sind sie Mutter und Tochter. Sie sind in der Obstabteilung. Die Frau hält einen Korb, und das Mädchen nimmt einen Apfel. Sie kaufen Obst.` },
        { titre: "Bild 2 · Beim Arzt", bild: { e: "🏥", de: "Ein Mann sitzt im Wartezimmer einer Arztpraxis und liest eine Zeitung. Eine Frau steht an der Rezeption.", tr: ["Un homme lit un journal dans une salle d'attente ; une femme est à l'accueil.", "Lehilahy mamaky gazety ao amin'ny efitrano fiandrasana; vehivavy eo amin'ny fandraisana."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Ich sehe eine Arztpraxis. Auf dem Bild sind zwei Personen: ein Mann und eine Frau. Sie sind beim Arzt. Der Mann sitzt im Wartezimmer und liest eine Zeitung. Die Frau steht an der Rezeption und spricht mit der Sprechstundenhilfe. Vielleicht ist sie krank.` },
        { titre: "Bild 3 · Im Restaurant", bild: { e: "🍽️", de: "Eine Familie mit zwei Kindern sitzt im Restaurant. Ein Kellner bringt die Speisekarte.", tr: ["Une famille avec deux enfants au restaurant ; un serveur apporte le menu.", "Fianakaviana misy ankizy roa ao amin'ny trano fisakafoanana; mitondra ny menu ny mpandroso sakafo."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Auf dem Bild sehe ich ein Restaurant. Ich sehe fünf Personen: eine Familie mit zwei Kindern und einen Kellner. Sie sind in einem Restaurant. Die Familie sitzt an einem Tisch. Der Kellner bringt die Speisekarte. Die Kinder lachen. Sie möchten bestellen.` } ],
      redemittel: [["Mamaritra · Décrire", ["Auf dem Bild sehe ich …", "Ich sehe … Personen.", "Sie sind im / in der …", "Der Mann / Die Frau …", "Vielleicht …"]]] },
    { id: "P3", nom: "Aufgabe 3 – Miteinander sprechen", mg: "Lalao an-tsehatra", duree: 3, mode: "dialog", em: "🎭",
      consigne: `<p>Sie sind nun in der Situation des gewählten Bildes. Spielen Sie diese Situation mit Ihrer Gesprächspartnerin / Ihrem Gesprächspartner.</p><div class="plan"><b>Beispiel: Bild 3 – Im Restaurant.</b> Sie sind Gast, Ihr Partner ist Kellner/in.</div>`,
      ctr: ["Jouez la situation de l'image choisie (ici : au restaurant, vous êtes le client).", "Ataovy ny toe-javatra amin'ny sary nofidianao (eto: ao amin'ny trano fisakafoanana, ianao no mpanjifa)."],
      partnerLabel: "Kellnerin · Mpandroso sakafo", av: "🧑‍🍳",
      partenaire: [
        { id: "oa1m1-p3-1", t: "Guten Abend! Hier ist die Speisekarte. Was möchten Sie trinken?", aide: ["Ich hätte gern ein Wasser, bitte.", "Einen Apfelsaft, bitte."] },
        { id: "oa1m1-p3-2", t: "Gern. Und was möchten Sie essen?", aide: ["Ich nehme das Schnitzel mit Salat.", "Was können Sie empfehlen?"] },
        { id: "oa1m1-p3-3", t: "Das Schnitzel ist heute leider aus. Wir haben aber einen guten Fisch mit Erdäpfeln.", aide: ["Gut, dann nehme ich den Fisch.", "Haben Sie auch etwas ohne Fleisch?"] },
        { id: "oa1m1-p3-4", t: "Hat es Ihnen geschmeckt? Möchten Sie noch ein Dessert?", aide: ["Nein danke. Ich möchte bitte zahlen.", "Ja, ein Eis, bitte."] },
        { id: "oa1m1-p3-5", t: "Das macht dann achtzehn Euro fünfzig.", aide: ["Hier sind zwanzig Euro. Stimmt so.", "Kann ich mit Karte zahlen?"] }
      ],
      redemittel: [["Ao amin'ny trano fisakafoanana · Au restaurant", ["Ich hätte gern …", "Ich nehme …", "Was können Sie empfehlen?", "Die Rechnung, bitte! / Ich möchte zahlen.", "Stimmt so."]]],
      modele: `Kellnerin: Guten Abend! Was möchten Sie trinken?
Gast: Ich hätte gern ein Wasser, bitte.
Kellnerin: Und was möchten Sie essen?
Gast: Ich nehme das Schnitzel mit Salat.
Kellnerin: Das Schnitzel ist leider aus. Wir haben Fisch mit Erdäpfeln.
Gast: Gut, dann nehme ich den Fisch.
Kellnerin: Möchten Sie noch ein Dessert?
Gast: Nein danke. Ich möchte bitte zahlen.
Kellnerin: Das macht 18,50 Euro.
Gast: Hier sind 20 Euro. Stimmt so!` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voaresaka ve ny hevitra? · Tâche réalisée ?" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "unternehmen", fr: "entreprendre (une sortie)", mg: "manao zavatra (fitsangatsanganana)", ex: "Was unternehmen wir am Wochenende?" },
    { de: "der Kellner", fr: "le serveur", mg: "mpandroso sakafo", ex: "Wir suchen einen Kellner." },
    { de: "der Sonderpreis", fr: "le prix spécial", mg: "vidiny manokana", ex: "Küchen zum Sonderpreis!" },
    { de: "der Anfänger", fr: "le débutant", mg: "vao manomboka", ex: "Deutschkurse für Anfänger." },
    { de: "der Eintritt", fr: "l'entrée", mg: "fidirana", ex: "Eintritt frei!" },
    { de: "der Ausweis", fr: "la pièce d'identité", mg: "karapanondro", ex: "Nur mit Ausweis!" },
    { de: "möbliert", fr: "meublé", mg: "misy fanaka", ex: "Ein möbliertes Zimmer." },
    { de: "der Nichtraucher", fr: "le non-fumeur", mg: "tsy mpifoka", ex: "Nur für Nichtraucher." },
    { de: "füttern", fr: "nourrir (un animal)", mg: "mamahana", ex: "Bitte nicht füttern!" },
    { de: "frisch gestrichen", fr: "peinture fraîche", mg: "vao nolokoina", ex: "Achtung! Frisch gestrichen." },
    { de: "absteigen", fr: "descendre (du vélo)", mg: "midina", ex: "Bitte absteigen!" },
    { de: "leise", fr: "silencieux / doucement", mg: "mangina", ex: "Bitte leise sein!" },
    { de: "der Bahnsteig", fr: "le quai", mg: "sehatra fiandrasana lamasinina", ex: "Der Zug fährt von Bahnsteig vier." },
    { de: "der Schirm", fr: "le parapluie", mg: "elo", ex: "Vergessen Sie Ihren Schirm nicht!" },
    { de: "die Kerze", fr: "la bougie", mg: "labozia", ex: "Jetzt die Kerzen ausblasen!" },
    { de: "ausfallen", fr: "être annulé", mg: "foanana", ex: "Das Training fällt aus." },
    { de: "stattdessen", fr: "à la place", mg: "ho solony", ex: "Wir treffen uns stattdessen am Freitag." },
    { de: "die Semmel (AT)", fr: "le petit pain (Autriche)", mg: "mofo kely (Aotrisy)", ex: "Eine Semmel mit Marmelade." },
    { de: "die Erdäpfel (AT)", fr: "les pommes de terre (Autriche)", mg: "ovy (Aotrisy)", ex: "Fisch mit Erdäpfeln." },
    { de: "Stimmt so!", fr: "Gardez la monnaie !", mg: "Tazony ny ambiny!", ex: "Hier sind 20 Euro. Stimmt so!" }
  ]
});
})();
