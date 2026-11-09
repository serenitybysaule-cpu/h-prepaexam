/* GOETHE-ZERTIFIKAT A2 — textes originaux H Conseil & Formation */
(function(){
const P = window.POOLS.GA2;
P.info = {
  modules: [
    { m: "Lesen", mg: "Famakiana", t: "30 min", parts: "4 Teile · 20 items" },
    { m: "Hören", mg: "Fihainoana", t: "30 min", parts: "4 Teile · 20 items" },
    { m: "Schreiben", mg: "Fanoratana", t: "30 min", parts: "SMS (20–30 teny) + e-mail (30–40 teny)" },
    { m: "Sprechen", mg: "Fitenenana", t: "~15 min (à deux)", parts: "3 Teile" }
  ],
  reussite: { mg: "Isaky ny module dia 25 isa (100 isa totaliny). Mila <b>60 isa (60 %)</b> vao afaka. Azo atao tsirairay ny module.", fr: "Chaque module vaut 25 points (100 au total). Il faut 60 % pour réussir ; examen modulaire." },
  institut: { goethe: { mg: "Goethe-Zertifikat A2: lohahevitra andavanandro (asa, fiainana, fialam-boly). Fizarana 4 ho an'ny Lesen sy Hören.", fr: "Thèmes de la vie quotidienne. 4 parties en Lesen et en Hören." } },
  guides: {
    lesen: [
      { t: "Teil 1 · Lahatsoratra gazety · a/b/c", tips: [ { mg: "Mifanaraka amin'ny filaharan'ny lahatsoratra ny fanontaniana.", fr: "Les questions suivent l'ordre du texte." } ] },
      { t: "Teil 2 · Tabilao fampahalalana (rihana)", tips: [ { mg: "Tadiavo ilay teny ao amin'ny tabilao: matetika teny mitovy hevitra no ampiasaina.", fr: "Cherche le mot dans le panneau ; souvent un synonyme." }, { mg: "Raha tsy hita: safidio ny « anderer Stock ».", fr: "Si introuvable : « anderer Stock »." } ] },
      { t: "Teil 3 · Mailaka · a/b/c", tips: [ { mg: "Tandremo ny ora, ny andro sy ny antony.", fr: "Attention aux heures, jours, raisons." } ] },
      { t: "Teil 4 · Filazana ↔ olona", tips: [ { mg: "Olona iray tsy misy filazana → X.", fr: "Une personne n'a pas d'annonce → X." } ] }
    ],
    hoeren: [
      { t: "Teil 1 · Radio, répondeur · 2 écoutes", tips: [ { mg: "Vakio aloha ny fanontaniana: inona no tadiavina?", fr: "Lis d'abord la question." } ] },
      { t: "Teil 2 · Resaka · images a–i · 1 écoute", tips: [ { mg: "Litera iray indray mandeha ihany. Soraty haingana mandritra ny resaka.", fr: "Chaque lettre une seule fois. Note pendant l'écoute." } ] },
      { t: "Teil 3 · Resaka fohy 5 · 1 écoute", tips: [ { mg: "Henoy ny fanitsiana: « Nein, nicht …, sondern … ».", fr: "Écoute les corrections." } ] },
      { t: "Teil 4 · Interview · Ja/Nein · 2 écoutes", tips: [ { mg: "Vakio tsara ireo fehezanteny 5 alohan'ny hihainoana.", fr: "Lis bien les 5 phrases avant." } ] }
    ],
    schreiben: [
      { t: "Teil 1 · SMS ho an'ny namana (20–30 teny)", tips: [ { mg: "Teboka 3 = fehezanteny 1–2 isaky ny iray. « du » no ampiasaina.", fr: "3 points, 1–2 phrases chacun, tutoiement." } ] },
      { t: "Teil 2 · E-mail semi-formel (30–40 teny)", tips: [ { mg: "« Sie » ho an'ny lehibe na olona tsy fantatra. Anrede + Gruß.", fr: "Vouvoiement, formule d'appel et de fin." } ] }
    ],
    sprechen: [
      { t: "Teil 1 · Fanontaniana amin'ny karatra 4", tips: [ { mg: "Fanontaniana feno amin'ny teny ao amin'ny karatra (W-Frage).", fr: "Pose une vraie question avec le mot de la carte." } ] },
      { t: "Teil 2 · Mitantara ny fiainanao", tips: [ { mg: "Valio ireo teboka 4 ao amin'ny karatra, ary resaho ny tenanao.", fr: "Réponds aux 4 points de la carte en parlant de toi." } ] },
      { t: "Teil 3 · Mitady fotoana iombonana", tips: [ { mg: "Manolora ora, lavio raha tsy afaka, manolora hafa. Faranao amin'ny fotoana nifanarahana.", fr: "Propose, refuse si besoin, propose autre chose, conclus." } ] }
    ]
  }
};
P.vocabOfficiel = [
  { de: "der Stock", fr: "l'étage", mg: "rihana" }, { de: "das Erdgeschoss", fr: "le rez-de-chaussée", mg: "rihana ambany" },
  { de: "die Informationstafel", fr: "le panneau d'information", mg: "tabilao fampahalalana" }, { de: "das Lokal", fr: "le restaurant / bistrot", mg: "trano fisakafoanana" },
  { de: "die Gerichte", fr: "les plats", mg: "sakafo" }, { de: "die Gäste", fr: "les invités / clients", mg: "vahiny" },
  { de: "der Tisch reservieren", fr: "réserver une table", mg: "mamandrika latabatra" }, { de: "die Einladung", fr: "l'invitation", mg: "fanasana" },
  { de: "die Hochzeit", fr: "le mariage", mg: "fanambadiana" }, { de: "das Geschenk", fr: "le cadeau", mg: "fanomezana" },
  { de: "der Termin", fr: "le rendez-vous", mg: "fotoana voatondro" }, { de: "die Berufsausbildung", fr: "la formation professionnelle", mg: "fiofanana ara-asa" },
  { de: "der Sänger", fr: "le chanteur", mg: "mpihira" }, { de: "die Sendung", fr: "l'émission", mg: "fandaharana" },
  { de: "der Anrufbeantworter", fr: "le répondeur", mg: "milina mandray hafatra" }, { de: "die Durchsage", fr: "l'annonce", mg: "fanambarana" },
  { de: "das Interview", fr: "l'interview", mg: "resadresaka" }, { de: "die Umgebung", fr: "les environs", mg: "manodidina" },
  { de: "der Norden / Süden", fr: "le nord / le sud", mg: "avaratra / atsimo" }, { de: "das Wetter", fr: "la météo", mg: "toetr'andro" },
  { de: "die Miete", fr: "le loyer", mg: "hofan-trano" }, { de: "die Lebensmittel", fr: "les aliments", mg: "sakafo (entana)" },
  { de: "die Kleidung", fr: "les vêtements", mg: "fitafiana" }, { de: "die Wohnung", fr: "l'appartement", mg: "trano" },
  { de: "sich entschuldigen", fr: "s'excuser", mg: "miala tsiny" }, { de: "zu spät kommen", fr: "arriver en retard", mg: "tara" },
  { de: "nach dem Weg fragen", fr: "demander le chemin", mg: "manontany lalana" }, { de: "jemanden mitbringen", fr: "amener quelqu'un", mg: "mitondra olona" },
  { de: "sich bedanken", fr: "remercier", mg: "misaotra" }, { de: "die Feier", fr: "la fête", mg: "fety" },
  { de: "das Wochenende", fr: "le week-end", mg: "faran'ny herinandro" }, { de: "das Frühstück", fr: "le petit-déjeuner", mg: "sakafo maraina" },
  { de: "die Küche", fr: "la cuisine", mg: "lakozia" }, { de: "die Schule", fr: "l'école", mg: "sekoly" },
  { de: "die Freizeit", fr: "le temps libre", mg: "fotoana malalaka" }
];

P.sets.push({
  id: "ga2m1", titre: "Modellsatz 1", theme: "Mpahandro TV, magazay, fanasana, trano fisakafoanana",
  lesen: { temps: 30, teile: [
    { id: "L1", nom: "Teil 1", type: "mc", temps: 8,
      consigne: "Sie lesen in einer Zeitung diesen Text. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      ctr: ["Vous lisez cet article de journal. Questions 1 à 5 : choisissez a, b ou c.", "Mamaky lahatsoratra gazety ianao. Fanontaniana 1–5: a, b na c."],
      texte: `<div class="press"><h3>Vom Taxifahrer zum Bäcker des Jahres</h3>
<p>Jeden Morgen um drei Uhr steht Ali Demir in seiner kleinen Bäckerei in Bremen. Vor zehn Jahren war er noch Taxifahrer. „Ich habe nachts gearbeitet und morgens immer frisches Brot gekauft. Irgendwann wollte ich es selbst machen“, erzählt er. Mit 35 Jahren hat er eine Ausbildung zum Bäcker gemacht – als ältester Schüler in seiner Klasse.</p>
<p>Heute verkauft er über 20 Brotsorten, zum Beispiel ein Brot mit Oliven nach dem Rezept seiner Mutter. Dieses Brot ist sein Bestseller. Am Wochenende stehen die Kunden oft bis auf die Straße. Letzten Monat hat ihn eine Zeitschrift zum „Bäcker des Jahres“ gewählt.</p>
<p>Sein nächster Plan: Er möchte einen Backkurs für Kinder anbieten. „Kinder sollen wissen, wie viel Arbeit in einem Brot steckt.“ Der Kurs soll im Herbst beginnen.</p></div>`,
      items: [
        { n: 1, q: "Ali Demir war früher …", tr: ["Ali Demir était avant…", "Taloha i Ali Demir dia…"], opts: ["Bäcker.", "Taxifahrer.", "Lehrer."], otr: [["boulanger", "mpanao mofo"], ["chauffeur de taxi", "mpamily taxi"], ["professeur", "mpampianatra"]], a: "b", exp: { mg: "« Vor zehn Jahren war er noch Taxifahrer ».", fr: "Il y a dix ans, il était chauffeur de taxi." } },
        { n: 2, q: "In seiner Ausbildung war Ali …", tr: ["Pendant sa formation, Ali était…", "Nandritra ny fiofanany i Ali dia…"], opts: ["der jüngste Schüler.", "der älteste Schüler.", "der beste Schüler."], otr: [["le plus jeune", "ny zandriny indrindra"], ["le plus âgé", "ny zokiny indrindra"], ["le meilleur", "ny tsara indrindra"]], a: "b", exp: { mg: "« als ältester Schüler in seiner Klasse ».", fr: "Le plus âgé de la classe." } },
        { n: 3, q: "Das Olivenbrot …", tr: ["Le pain aux olives…", "Ny mofo misy oliva…"], opts: ["verkauft er am besten.", "gibt es nur am Wochenende.", "ist ein Rezept von seinem Vater."], otr: [["se vend le mieux", "no lafo indrindra (be mpividy)"], ["seulement le week-end", "faran'ny herinandro ihany"], ["recette de son père", "fomba avy amin'ny dadany"]], a: "a", exp: { mg: "« Dieses Brot ist sein Bestseller » = io no be mpividy indrindra. Avy amin'ny reniny ny fomba.", fr: "C'est son best-seller ; recette de sa mère." } },
        { n: 4, q: "Letzten Monat …", tr: ["Le mois dernier…", "Ny volana lasa…"], opts: ["hat Ali eine zweite Bäckerei eröffnet.", "hat Ali einen Preis bekommen.", "war Ali im Urlaub."], otr: [["il a ouvert une 2e boulangerie", "nanokatra fivarotana faharoa"], ["il a reçu un prix", "nahazo loka"], ["il était en vacances", "nialy sasatra"]], a: "b", exp: { mg: "« zum Bäcker des Jahres gewählt » = nahazo loka.", fr: "Élu « boulanger de l'année »." } },
        { n: 5, q: "Im Herbst möchte Ali …", tr: ["En automne, Ali veut…", "Amin'ny fararano, te… i Ali"], opts: ["Kurse für Kinder geben.", "ein Kochbuch schreiben.", "wieder Taxi fahren."], otr: [["donner des cours aux enfants", "hampianatra ankizy"], ["écrire un livre de cuisine", "hanoratra boky fahandro"], ["refaire le taxi", "hamily taxi indray"]], a: "a", exp: { mg: "« Backkurs für Kinder … im Herbst ».", fr: "Un cours de pâtisserie pour enfants." } }
      ] },
    { id: "L2", nom: "Teil 2", type: "mc", temps: 7, layout: "textAfter", noShuffle: true,
      consigne: "Sie lesen die Informationstafel in einem Kaufhaus. Lesen Sie die Aufgaben 6 bis 10 und den Text. In welchen Stock gehen Sie? Wählen Sie die richtige Lösung a, b oder c.",
      ctr: ["Panneau d'un grand magasin : à quel étage allez-vous ? a, b ou c.", "Tabilao ao amin'ny magazay: amin'ny rihana firy ianao no mandeha? a, b na c."],
      texte: `<div class="rules"><h3>KAUFHAUS ZENTRUM – WEGWEISER</h3>
<p><b>4. Stock:</b> Restaurant mit Terrasse · Kundentoilette · Reisebüro</p>
<p><b>3. Stock:</b> Elektro: Computer, Handys, Fernseher · Bücher · Spielwaren</p>
<p><b>2. Stock:</b> Damenmode · Kindermode · Schuhe</p>
<p><b>1. Stock:</b> Herrenmode · Sportbekleidung · Taschen und Koffer</p>
<p><b>Erdgeschoss:</b> Parfüm · Schmuck · Zeitschriften · Information</p>
<p><b>Untergeschoss:</b> Lebensmittel · Getränke · Haushaltswaren · Fundbüro</p></div>`,
      exemple: { q: "Sie möchten ein Kinderbuch kaufen.", opts: ["Erdgeschoss", "3. Stock", "anderer Stock"], a: "b" },
      items: [
        { n: 6, q: "Sie brauchen einen Koffer für Ihre Reise.", tr: ["Vous avez besoin d'une valise.", "Mila valizy ianao."], opts: ["1. Stock", "4. Stock", "anderer Stock"], a: "a", exp: { mg: "« Taschen und Koffer » → rihana 1.", fr: "Sacs et valises → 1er." } },
        { n: 7, q: "Sie haben Ihre Handschuhe verloren.", tr: ["Vous avez perdu vos gants.", "Very ny fonon-tananao."], opts: ["Erdgeschoss", "2. Stock", "anderer Stock"], a: "c", exp: { mg: "Zavatra very → « Fundbüro » ao amin'ny Untergeschoss → anderer Stock.", fr: "Objets trouvés au sous-sol → autre étage." } },
        { n: 8, q: "Sie möchten etwas essen und dabei draußen sitzen.", tr: ["Vous voulez manger dehors.", "Te hisakafo eny ivelany ianao."], opts: ["Untergeschoss", "4. Stock", "anderer Stock"], a: "b", exp: { mg: "« Restaurant mit Terrasse » → rihana 4.", fr: "Restaurant avec terrasse → 4e." } },
        { n: 9, q: "Ihr Sohn braucht neue Sportschuhe.", tr: ["Votre fils a besoin de chaussures de sport.", "Mila kiraro fanatanjahantena ny zanakao."], opts: ["1. Stock", "2. Stock", "3. Stock"], a: "b", exp: { mg: "« Schuhe » dia ao amin'ny rihana 2. Ny 1 dia akanjo fanatanjahantena fotsiny.", fr: "Chaussures → 2e (le 1er : vêtements de sport)." } },
        { n: 10, q: "Sie suchen ein Geschenk für Ihre Mutter: eine Halskette.", tr: ["Vous cherchez un collier pour votre mère.", "Mitady rojo ho an'ny reninao ianao."], opts: ["Erdgeschoss", "2. Stock", "anderer Stock"], a: "a", exp: { mg: "Halskette = firavaka (Schmuck) → Erdgeschoss.", fr: "Collier = bijou → rez-de-chaussée." } }
      ] },
    { id: "L3", nom: "Teil 3", type: "mc", temps: 8,
      consigne: "Sie lesen eine E-Mail. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      ctr: ["Vous lisez un e-mail. Questions 11 à 15 : a, b ou c.", "Mamaky mailaka ianao. Fanontaniana 11–15: a, b na c."],
      texte: `<div class="blog"><p><b>Von:</b> nadia.r@mail.de · <b>Betreff:</b> Unsere Einweihungsfeier</p><p>Liebe Kolleginnen und Kollegen,</p>
<p>wie ihr wisst, sind mein Mann und ich vor drei Wochen umgezogen. Jetzt ist die Wohnung endlich fertig, und wir möchten feiern! Die Party ist am Samstag, den 14. Juni, ab 18 Uhr. Wir grillen im Garten – bei Regen feiern wir in der Garage.</p>
<p>Getränke und Fleisch haben wir genug. Wer möchte, kann einen Salat oder einen Nachtisch mitbringen. Bitte bringt keine Geschenke mit! Wenn ihr wollt, schreibt etwas in unser Gästebuch.</p>
<p>Unsere neue Adresse: Lindenweg 7. Mit der S-Bahn fahrt ihr bis „Waldstraße“, dann sind es noch fünf Minuten zu Fuß. Parkplätze gibt es leider nur wenige.</p>
<p>Bitte sagt mir bis Mittwoch Bescheid, ob ihr kommt.</p><p>Liebe Grüße<br>Nadia</p></div>`,
      items: [
        { n: 11, q: "Nadia und ihr Mann …", tr: ["Nadia et son mari…", "Nadia sy ny vadiny…"], opts: ["haben eine neue Wohnung.", "haben geheiratet.", "haben einen Garten gekauft."], otr: [["ont un nouvel appartement", "manana trano vaovao"], ["se sont mariés", "nanambady"], ["ont acheté un jardin", "nividy zaridaina"]], a: "a", exp: { mg: "« umgezogen … die Wohnung endlich fertig ».", fr: "Ils ont déménagé : nouvel appartement." } },
        { n: 12, q: "Wenn es regnet, …", tr: ["S'il pleut…", "Raha avy ny orana…"], opts: ["fällt die Party aus.", "feiern sie in der Garage.", "feiern sie am Sonntag."], otr: [["la fête est annulée", "foana ny fety"], ["fête au garage", "ao amin'ny garazy"], ["fête dimanche", "amin'ny alahady"]], a: "b", exp: { mg: "« bei Regen feiern wir in der Garage ».", fr: "Au garage." } },
        { n: 13, q: "Die Gäste sollen …", tr: ["Les invités doivent…", "Ny vahiny tokony…"], opts: ["Getränke mitbringen.", "kein Geschenk mitbringen.", "Fleisch mitbringen."], otr: [["apporter des boissons", "hitondra zava-pisotro"], ["ne pas apporter de cadeau", "tsy hitondra fanomezana"], ["apporter de la viande", "hitondra hena"]], a: "b", exp: { mg: "« Bitte bringt keine Geschenke mit! ».", fr: "Pas de cadeaux." } },
        { n: 14, q: "Zu Nadia kommt man am besten …", tr: ["Pour aller chez Nadia, le mieux…", "Ny tsara indrindra hahatongavana any amin'i Nadia…"], opts: ["mit dem Auto.", "mit der S-Bahn.", "mit dem Taxi."], otr: [["en voiture", "amin'ny fiara"], ["en S-Bahn", "amin'ny S-Bahn"], ["en taxi", "amin'ny taxi"]], a: "b", exp: { mg: "Vitsy ny parking → S-Bahn no tsara.", fr: "Peu de parking → S-Bahn." } },
        { n: 15, q: "Nadia möchte bis Mittwoch wissen, …", tr: ["Nadia veut savoir d'ici mercredi…", "Te hahafantatra hatramin'ny alarobia i Nadia…"], opts: ["wer kommt.", "wer einen Salat mitbringt.", "wer ein Auto hat."], otr: [["qui vient", "iza no ho tonga"], ["qui apporte une salade", "iza no hitondra salady"], ["qui a une voiture", "iza no manana fiara"]], a: "a", exp: { mg: "« ob ihr kommt » = raha ho tonga ianareo.", fr: "Si vous venez." } }
      ] },
    { id: "L4", nom: "Teil 4", type: "match", temps: 7, zero: true,
      consigne: "Sechs Personen suchen im Internet nach Lokalen. Lesen Sie die Aufgaben 16 bis 20 und die Anzeigen a bis f. Welche Anzeige passt zu welcher Person? Für eine Aufgabe gibt es keine Lösung. Markieren Sie so: X. Die Anzeige aus dem Beispiel können Sie nicht mehr wählen.",
      ctr: ["Six personnes cherchent un restaurant. Quelle annonce (a–f) pour chaque personne ? Une personne n'a pas de solution : X.", "Olona 6 mitady trano fisakafoanana. Iza no filazana mifanaraka? Misy iray tsy misy: X."],
      choix: {
        a: "<b>Pizzeria Bella</b><br>Pizza und Pasta – auch zum Mitnehmen! Täglich 11–23 Uhr.",
        b: "<b>Café Sonnenschein</b><br>Frühstück bis 14 Uhr, großer Spielplatz für Kinder im Garten.",
        c: "<b>Restaurant Grünkern</b><br>Vegetarische und vegane Küche. Mittagsmenü 8,90 €.",
        d: "<b>Zum Hafen</b><br>Frischer Fisch direkt vom Boot. Blick aufs Meer.",
        e: "<b>Saal Lindenhof</b><br>Räume für Feiern bis 80 Personen – Hochzeit, Geburtstag, Firmenfeier.",
        f: "<b>Steakhaus Texas</b><br>Fleisch vom Grill. Montag Ruhetag."
      },
      exemple: { q: "Paula möchte am Sonntagmorgen mit ihren kleinen Kindern frühstücken.", a: "b" },
      items: [
        { n: 16, q: "Max isst kein Fleisch und keinen Fisch.", tr: ["Max ne mange ni viande ni poisson.", "Tsy mihinana hena na trondro i Max."], a: "c", exp: { mg: "« Vegetarische und vegane Küche ».", fr: "Cuisine végétarienne → c." } },
        { n: 17, q: "Herr Weber sucht einen Raum für die Hochzeit seiner Tochter (60 Gäste).", tr: ["M. Weber cherche une salle pour le mariage de sa fille (60 invités).", "Mitady efitrano ho an'ny fanambadian'ny zanany Atoa Weber."], a: "e", exp: { mg: "« Räume für Feiern bis 80 Personen ».", fr: "Salle pour fêtes → e." } },
        { n: 18, q: "Lisa möchte nach der Arbeit schnell Essen holen und zu Hause essen.", tr: ["Lisa veut prendre un repas à emporter.", "Te haka sakafo hohanina ao an-trano i Lisa."], a: "a", exp: { mg: "« zum Mitnehmen » = azo entina.", fr: "À emporter → a." } },
        { n: 19, q: "Tom möchte am Montagabend ein Steak essen.", tr: ["Tom veut manger un steak lundi soir.", "Te hihinana steak ny alatsinainy hariva i Tom."], a: "0", exp: { mg: "Mihidy ny alatsinainy ny Steakhaus (Ruhetag) → tsy misy → X.", fr: "Le steakhouse ferme le lundi → X." } },
        { n: 20, q: "Familie Kahn macht Urlaub an der Nordsee und isst gern Fisch.", tr: ["La famille Kahn, en vacances à la mer du Nord, aime le poisson.", "Tia trondro ny fianakaviana Kahn."], a: "d", exp: { mg: "« Frischer Fisch … Blick aufs Meer ».", fr: "Poisson frais → d." } }
      ] }
  ] },

  hoeren: { temps: 30, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 2, type: "mc",
      consigne: "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      ctr: ["Cinq textes courts, deux écoutes. Questions 1 à 5 : a, b ou c.", "Lahatsoratra fohy 5, henoina indroa. Fanontaniana 1–5."],
      clips: [
        { id: "ga2m1-h1-1", titre: "Text 1", script: [{ s: "f", n: "Radio", t: "Und hier die Verkehrsmeldungen: Wegen eines Unfalls ist die Brücke am Hauptbahnhof bis zum Nachmittag gesperrt. Bitte fahren Sie über die Ringstraße." }],
          items: [{ n: 1, q: "Was sollen die Autofahrer tun?", tr: ["Que doivent faire les automobilistes ?", "Inona no tokony hataon'ny mpamily?"], opts: ["Am Hauptbahnhof parken.", "Über die Ringstraße fahren.", "Bis zum Nachmittag warten."], otr: [["se garer à la gare", "mijanona eo amin'ny gara"], ["passer par la Ringstraße", "mandalo amin'ny Ringstraße"], ["attendre l'après-midi", "miandry ny tolakandro"]], a: "b", exp: { mg: "« Bitte fahren Sie über die Ringstraße ».", fr: "Passer par la Ringstraße." } }] },
        { id: "ga2m1-h1-2", titre: "Text 2", script: [{ s: "m", n: "Herr Fischer", t: "Hallo Frau Kurz, hier ist Fischer von der Autowerkstatt. Ihr Wagen ist leider noch nicht fertig. Wir brauchen noch ein Teil. Sie können ihn morgen ab zehn Uhr abholen." }],
          items: [{ n: 2, q: "Wann kann Frau Kurz ihr Auto abholen?", tr: ["Quand Mme Kurz peut-elle récupérer sa voiture ?", "Rahoviana no afaka maka ny fiarany Rtoa Kurz?"], opts: ["Heute Nachmittag.", "Morgen ab zehn Uhr.", "Übermorgen."], otr: [["cet après-midi", "anio tolakandro"], ["demain dès 10 h", "rahampitso manomboka 10 ora"], ["après-demain", "rahafakampitso"]], a: "b", exp: { mg: "« morgen ab zehn Uhr ».", fr: "Demain dès 10 h." } }] },
        { id: "ga2m1-h1-3", titre: "Text 3", script: [{ s: "f", n: "Durchsage", t: "Liebe Fahrgäste, wegen Bauarbeiten hält die U-Bahn heute nicht am Marktplatz. Steigen Sie bitte schon am Rathaus aus." }],
          items: [{ n: 3, q: "Wo sollen die Fahrgäste aussteigen?", tr: ["Où les passagers doivent-ils descendre ?", "Aiza no tokony hidinan'ny mpandeha?"], opts: ["Am Marktplatz.", "Am Rathaus.", "An der Endstation."], otr: [["place du marché", "tsena"], ["mairie", "biraon'ny tanàna"], ["terminus", "fiafarana"]], a: "b", exp: { mg: "« Steigen Sie bitte schon am Rathaus aus ».", fr: "Descendre à la mairie." } }] },
        { id: "ga2m1-h1-4", titre: "Text 4", script: [{ s: "m", n: "Radio", t: "Das Wetter für das Wochenende: Am Samstag scheint im Süden die Sonne, im Norden gibt es Wolken. Am Sonntag regnet es dann im ganzen Land." }],
          items: [{ n: 4, q: "Wie wird das Wetter am Sonntag?", tr: ["Quel temps fera-t-il dimanche ?", "Ahoana ny toetr'andro alahady?"], opts: ["Sonnig.", "Bewölkt.", "Regnerisch."], otr: [["ensoleillé", "masoandro"], ["nuageux", "rahona"], ["pluvieux", "orana"]], a: "c", exp: { mg: "« Am Sonntag regnet es … im ganzen Land ».", fr: "Pluie partout dimanche." } }] },
        { id: "ga2m1-h1-5", titre: "Text 5", script: [{ s: "f", n: "Sabine", t: "Hi Jonas, hier ist Sabine. Wir wollten doch heute Abend ins Kino. Ich bin aber total müde. Können wir stattdessen am Freitag gehen? Ruf mich an!" }],
          items: [{ n: 5, q: "Was möchte Sabine?", tr: ["Que veut Sabine ?", "Inona no tian'i Sabine?"], opts: ["Heute ins Kino gehen.", "Den Kinobesuch verschieben.", "Mit Jonas essen gehen."], otr: [["aller au cinéma ce soir", "hankany amin'ny sinema anio"], ["reporter le cinéma", "hanemotra ny sinema"], ["aller dîner avec Jonas", "hisakafo miaraka amin'i Jonas"]], a: "b", exp: { mg: "« stattdessen am Freitag » = ahemotra amin'ny zoma.", fr: "Elle veut reporter à vendredi." } }] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 1, type: "match", zero: false, lecture: 30,
      consigne: "Sie hören ein Gespräch. Sie hören den Text einmal. Wählen Sie für die Aufgaben 6 bis 10 ein passendes Bild aus a bis i. Wählen Sie jeden Buchstaben nur einmal.",
      ctr: ["Une conversation, une seule écoute. Pour chaque jour (6–10), choisissez l'image (a–i). Chaque lettre une fois.", "Resaka iray, henoina indray mandeha. Isaky ny andro (6–10), safidio ny sary (a–i)."],
      contexte: "Was macht Lina in der nächsten Woche?",
      xtr: ["Que fait Lina la semaine prochaine ?", "Inona no ataon'i Lina amin'ny herinandro ho avy?"],
      choixTitre: "Bilder",
      choix: { a: "🏊 Schwimmbad", b: "🦷 Zahnarzt", c: "🎂 Geburtstag", d: "🚗 Fahrstunde", e: "🎬 Kino", f: "🧺 Wäsche waschen", g: "📚 Bibliothek", h: "🍳 Kochkurs", i: "⚽ Fußballspiel" },
      clips: [{ id: "ga2m1-h2", titre: "Gespräch", script: [
        { s: "m", n: "Paul", t: "Hallo Lina! Hast du nächste Woche mal Zeit für einen Kaffee?" },
        { s: "f", n: "Lina", t: "Oh, das wird schwierig. Am Montag habe ich meine erste Fahrstunde. Ich mache endlich den Führerschein!" },
        { s: "m", n: "Paul", t: "Super! Und am Dienstag?" },
        { s: "f", n: "Lina", t: "Am Dienstag muss ich zum Zahnarzt. Ich habe ein bisschen Angst. Am Mittwoch gehe ich dann mit meiner Schwester schwimmen, das machen wir jede Woche." },
        { s: "m", n: "Paul", t: "Und Donnerstag? Da läuft doch der neue Film im Kino." },
        { s: "f", n: "Lina", t: "Ins Kino gehe ich am Wochenende. Am Donnerstag habe ich einen Kochkurs, wir lernen thailändisch kochen." },
        { s: "m", n: "Paul", t: "Lecker! Und Freitag?" },
        { s: "f", n: "Lina", t: "Am Freitag hat meine Mutter Geburtstag. Da fahre ich zu meinen Eltern. Aber nächste Woche Samstag hätte ich Zeit für einen Kaffee!" },
        { s: "m", n: "Paul", t: "Okay, dann Samstag!" }],
        items: [
          { n: 6, q: "Montag", tr: ["lundi", "alatsinainy"], a: "d", exp: { mg: "« erste Fahrstunde » = fianarana mitondra fiara.", fr: "Leçon de conduite." } },
          { n: 7, q: "Dienstag", tr: ["mardi", "talata"], a: "b", exp: { mg: "« zum Zahnarzt » = mpitsabo nify.", fr: "Dentiste." } },
          { n: 8, q: "Mittwoch", tr: ["mercredi", "alarobia"], a: "a", exp: { mg: "« schwimmen » = milomano.", fr: "Piscine." } },
          { n: 9, q: "Donnerstag", tr: ["jeudi", "alakamisy"], a: "h", exp: { mg: "Fandrika: ny sinema dia amin'ny faran'ny herinandro; « Kochkurs » no alakamisy.", fr: "Piège : le cinéma, c'est le week-end ; jeudi = cours de cuisine." } },
          { n: 10, q: "Freitag", tr: ["vendredi", "zoma"], a: "c", exp: { mg: "« meine Mutter Geburtstag ».", fr: "Anniversaire de sa mère." } }
        ] }] },
    { id: "H3", nom: "Teil 3", ecoutes: 1, type: "mc",
      consigne: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      ctr: ["Cinq conversations courtes, une écoute chacune. Questions 11 à 15 : a, b ou c.", "Resaka fohy 5, henoina indray mandeha avy. a, b na c."],
      clips: [
        { id: "ga2m1-h3-11", titre: "Gespräch 1", script: [{ s: "f", n: "Kundin", t: "Was kostet dieser Pullover?" }, { s: "m", n: "Verkäufer", t: "Normalerweise vierzig Euro, aber heute haben wir zwanzig Prozent Rabatt. Also zweiunddreißig Euro." }],
          items: [{ n: 11, q: "Wie viel kostet der Pullover heute?", tr: ["Combien coûte le pull aujourd'hui ?", "Ohatrinona anio ny akanjo mafana?"], opts: ["20 Euro.", "32 Euro.", "40 Euro."], a: "b", exp: { mg: "40 € – 20 % = 32 €.", fr: "40 € moins 20 % = 32 €." } }] },
        { id: "ga2m1-h3-12", titre: "Gespräch 2", script: [{ s: "m", n: "Mann", t: "Entschuldigung, wie komme ich zur Post?" }, { s: "f", n: "Frau", t: "Gehen Sie hier geradeaus bis zur Ampel, dann links. Die Post ist neben der Apotheke." }],
          items: [{ n: 12, q: "Wo ist die Post?", tr: ["Où est la poste ?", "Aiza ny paositra?"], opts: ["Neben der Apotheke.", "An der Ampel.", "Gegenüber vom Bahnhof."], otr: [["à côté de la pharmacie", "akaikin'ny fivarotam-panafody"], ["au feu", "eo amin'ny jiro mena"], ["en face de la gare", "manoloana ny gara"]], a: "a", exp: { mg: "« neben der Apotheke ».", fr: "À côté de la pharmacie." } }] },
        { id: "ga2m1-h3-13", titre: "Gespräch 3", script: [{ s: "f", n: "Frau", t: "Wollen wir heute Abend Pizza bestellen?" }, { s: "m", n: "Mann", t: "Pizza hatten wir doch gestern. Ich koche lieber Spaghetti mit Gemüse." }, { s: "f", n: "Frau", t: "Gut, dann mache ich einen Salat dazu." }],
          items: [{ n: 13, q: "Was gibt es heute zum Abendessen?", tr: ["Qu'y a-t-il ce soir au dîner ?", "Inona no sakafo hariva anio?"], opts: ["Pizza.", "Spaghetti und Salat.", "Nur Salat."], otr: [["pizza", "pizza"], ["spaghetti et salade", "spaghetti sy salady"], ["seulement salade", "salady ihany"]], a: "b", exp: { mg: "Omaly ny pizza; anio Spaghetti + salady.", fr: "La pizza, c'était hier." } }] },
        { id: "ga2m1-h3-14", titre: "Gespräch 4", script: [{ s: "m", n: "Kollege", t: "Kommst du morgen mit dem Fahrrad zur Arbeit?" }, { s: "f", n: "Kollegin", t: "Nein, es soll regnen. Ich nehme den Bus. Das Auto braucht mein Mann." }],
          items: [{ n: 14, q: "Wie kommt die Frau morgen zur Arbeit?", tr: ["Comment la femme viendra-t-elle au travail demain ?", "Inona no hitondran'ilay vehivavy mankany am-piasana?"], opts: ["Mit dem Fahrrad.", "Mit dem Bus.", "Mit dem Auto."], a: "b", exp: { mg: "« Ich nehme den Bus ».", fr: "En bus." } }] },
        { id: "ga2m1-h3-15", titre: "Gespräch 5", script: [{ s: "f", n: "Rezeption", t: "Hotel Sonne, guten Tag." }, { s: "m", n: "Gast", t: "Guten Tag, ich habe ein Zimmer vom zehnten bis zwölften Mai. Kann ich bis zum vierzehnten bleiben?" }, { s: "f", n: "Rezeption", t: "Ja, das ist kein Problem." }],
          items: [{ n: 15, q: "Bis wann bleibt der Gast jetzt?", tr: ["Jusqu'à quand reste le client maintenant ?", "Mandra-pahoviana no hijanonan'ilay vahiny?"], opts: ["Bis zum 10. Mai.", "Bis zum 12. Mai.", "Bis zum 14. Mai."], a: "c", exp: { mg: "Nangataka hatramin'ny faha-14 izy ary neken'ny hotely.", fr: "Jusqu'au 14, accepté." } }] }
      ] },
    { id: "H4", nom: "Teil 4", ecoutes: 2, type: "jn", lecture: 30,
      consigne: "Sie hören ein Interview. Sie hören den Text zweimal. Wählen Sie für die Aufgaben 16 bis 20 Ja oder Nein.",
      ctr: ["Une interview, deux écoutes. Questions 16 à 20 : Ja ou Nein.", "Resadresaka, henoina indroa. Ja (eny) na Nein (tsia)."],
      contexte: "Die Moderatorin spricht mit Herrn Rakoto über sein Leben in Deutschland.",
      xtr: ["La présentatrice parle avec M. Rakoto de sa vie en Allemagne.", "Miresaka amin'Atoa Rakoto momba ny fiainany any Alemaina ny mpanentana."],
      clips: [{ id: "ga2m1-h4", titre: "Interview", script: [
        { s: "f", n: "Moderatorin", t: "Herr Rakoto, Sie leben seit fünf Jahren in Leipzig. Wie sind Sie hierhergekommen?" },
        { s: "m", n: "Herr Rakoto", t: "Ich habe in Madagaskar Deutsch gelernt und dann hier eine Ausbildung als Elektriker gemacht. Jetzt arbeite ich in einer kleinen Firma." },
        { s: "f", n: "Moderatorin", t: "Was war am Anfang am schwierigsten?" },
        { s: "m", n: "Herr Rakoto", t: "Das Wetter! Der erste Winter war sehr kalt. Die Sprache war gar nicht so schwer, weil ich vorher viel gelernt hatte." },
        { s: "f", n: "Moderatorin", t: "Und was machen Sie in Ihrer Freizeit?" },
        { s: "m", n: "Herr Rakoto", t: "Ich spiele am Wochenende Fußball in einem Verein. Dort habe ich auch meine besten Freunde kennengelernt." },
        { s: "f", n: "Moderatorin", t: "Vermissen Sie Madagaskar?" },
        { s: "m", n: "Herr Rakoto", t: "Ja, vor allem meine Familie und das Essen. Aber jeden Sonntag koche ich madagassisch, und einmal im Jahr fliege ich nach Hause." }],
        items: [
          { n: 16, q: "Herr Rakoto hat in Deutschland eine Ausbildung gemacht.", tr: ["M. Rakoto a fait une formation en Allemagne.", "Nanao fiofanana any Alemaina Atoa Rakoto."], a: "j", exp: { mg: "« hier eine Ausbildung als Elektriker ».", fr: "Formation d'électricien ici → Ja." } },
          { n: 17, q: "Am Anfang war die Sprache sein größtes Problem.", tr: ["Au début, la langue était son plus gros problème.", "Ny fiteny no olana lehibe indrindra tamin'ny voalohany."], a: "n", exp: { mg: "Ny toetr'andro (« Das Wetter! ») no sarotra indrindra; tsy dia sarotra ny fiteny.", fr: "C'était la météo, pas la langue → Nein." } },
          { n: 18, q: "Er spielt in einem Verein Fußball.", tr: ["Il joue au foot dans un club.", "Milalao baolina kitra ao amin'ny klioba izy."], a: "j", exp: { mg: "« Fußball in einem Verein ».", fr: "Ja." } },
          { n: 19, q: "Er kocht nie madagassisches Essen.", tr: ["Il ne cuisine jamais malgache.", "Tsy mahandro sakafo malagasy mihitsy izy."], a: "n", exp: { mg: "« jeden Sonntag koche ich madagassisch ».", fr: "Chaque dimanche → Nein." } },
          { n: 20, q: "Er fliegt jedes Jahr nach Madagaskar.", tr: ["Il va chaque année à Madagascar.", "Mankany Madagasikara isan-taona izy."], a: "j", exp: { mg: "« einmal im Jahr fliege ich nach Hause ».", fr: "Une fois par an → Ja." } }
        ] }] }
  ] },

  schreiben: { temps: 30, aufgaben: [
    { id: "S1", nom: "Teil 1", temps: 10, mots: 25, points: 10, type: "SMS (informell)",
      consigne: `<p>Sie sind mit Ihrer Freundin Julia im Café verabredet, aber Sie kommen zu spät. Schreiben Sie eine SMS an Julia:</p><ul><li>Entschuldigen Sie sich, dass Sie zu spät kommen.</li><li>Schreiben Sie, warum.</li><li>Nennen Sie einen neuen Ort und eine neue Uhrzeit für das Treffen.</li></ul><p class="small">Schreiben Sie 20–30 Wörter. Schreiben Sie zu allen drei Punkten.</p>`,
      ctr: ["SMS à Julia : excusez-vous du retard, dites pourquoi, proposez un nouveau lieu et une nouvelle heure. 20–30 mots.", "SMS ho an'i Julia: miala tsiny, lazao ny antony, manolora toerana sy ora vaovao. 20–30 teny."],
      checklist: ["Liebe Julia, / Hallo Julia,", "Miala tsiny (Tut mir leid / Entschuldige)", "Antony (weil / denn)", "Toerana + ora vaovao", "Gruß", "20–30 teny"],
      redemittel: ["Hallo Julia,", "es tut mir leid, ich komme zu spät.", "Mein Bus hat Verspätung.", "Treffen wir uns um … Uhr im / vor dem …?", "Bis gleich!"],
      modele: `Hallo Julia,
es tut mir sehr leid, ich komme zu spät. Mein Bus hatte eine Panne. Können wir uns um 16 Uhr vor dem Kino treffen? Das ist näher für mich.
Bis gleich!
Mamy` },
    { id: "S2", nom: "Teil 2", temps: 20, mots: 35, points: 15, type: "E-Mail (halbformell)",
      consigne: `<p>Ihr Chef, Herr Lehner, feiert bald seinen 50. Geburtstag. Er hat Ihnen eine Einladung zu seiner Feier geschickt. Schreiben Sie Herrn Lehner eine E-Mail:</p><ul><li>Bedanken Sie sich und sagen Sie, dass Sie kommen.</li><li>Informieren Sie, dass Sie jemanden mitbringen.</li><li>Fragen Sie nach dem Weg.</li></ul><p class="small">Schreiben Sie 30–40 Wörter. Schreiben Sie zu allen drei Punkten.</p>`,
      ctr: ["E-mail à votre chef : remerciez et confirmez, dites que vous venez accompagné, demandez le chemin. 30–40 mots.", "Mailaka ho an'ny lehibenao: misaora sy manamafy, lazao fa hitondra olona, manontania lalana. 30–40 teny."],
      checklist: ["Lieber Herr Lehner, / Sehr geehrter Herr Lehner,", "Misaotra + ho tonga aho", "Hitondra olona (iza?)", "Manontany lalana", "Viele Grüße / Mit freundlichen Grüßen", "« Sie » foana", "30–40 teny"],
      redemittel: ["vielen Dank für Ihre Einladung.", "Ich komme sehr gern.", "Darf ich meinen Mann / meine Freundin mitbringen?", "Können Sie mir bitte sagen, wie ich zu Ihnen komme?", "Viele Grüße"],
      modele: `Lieber Herr Lehner,

vielen Dank für Ihre Einladung zum Geburtstag. Ich komme sehr gern! Ich möchte meinen Mann mitbringen, wenn das in Ordnung ist. Können Sie mir bitte sagen, wie wir mit dem Bus zu Ihnen kommen?

Viele Grüße
Hanitra Rabe` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Teboka 3 voavaly? · Les 3 points ?" },
    { nom: "Kohärenz", desc: "Fehezanteny mifandray · Enchaînement" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" }
  ] },

  sprechen: { preparation: 0, teile: [
    { id: "P1", nom: "Teil 1 – Fragen zur Person", mg: "Fanontaniana amin'ny karatra", duree: 3, mode: "dialog", em: "🃏",
      consigne: `<p>Sie bekommen vier Karten und stellen mit diesen Karten vier Fragen. Ihr Partner / Ihre Partnerin antwortet. Dann stellt Ihr Partner / Ihre Partnerin vier Fragen und Sie antworten.</p><div class="plan">Ihre Karten: <b>Wohnort? · Arbeit? · Wochenende? · Lieblingsessen?</b></div>`,
      ctr: ["Posez 4 questions avec vos cartes, puis répondez aux 4 questions du partenaire.", "Mametraha fanontaniana 4 amin'ny karatrao, avy eo valio ny fanontanian'ny namanao."],
      partenaire: [
        { id: "ga2m1-p1-1", t: "Wo wohnst du?", cue: "Valio. · Réponds.", aide: ["Ich wohne in … / Ich wohne seit … in …", "Ich wohne mit meiner Familie in einem Haus."] },
        { id: "ga2m1-p1-2", t: "Ich wohne in Hamburg, ganz in der Nähe vom Hafen. Jetzt bist du dran: Karte „Arbeit“.", cue: "Manontania. · Pose ta question.", aide: ["Was bist du von Beruf?", "Wo arbeitest du?"] },
        { id: "ga2m1-p1-3", t: "Ich bin Krankenpfleger in einem Krankenhaus. Meine Frage: Was machst du am Wochenende?", cue: "Valio. · Réponds.", aide: ["Am Wochenende treffe ich Freunde.", "Am Samstag gehe ich oft …"] },
        { id: "ga2m1-p1-4", t: "Schön! Deine nächste Karte: „Lieblingsessen“.", cue: "Manontania. · Question.", aide: ["Was ist dein Lieblingsessen?", "Was isst du am liebsten?"] },
        { id: "ga2m1-p1-5", t: "Am liebsten esse ich Pasta mit Tomatensoße. Und letzte Frage: Hast du Geschwister?", cue: "Valio. · Réponds.", aide: ["Ja, ich habe … Brüder / Schwestern.", "Nein, ich bin Einzelkind."] }
      ],
      redemittel: [["Manontany · Demander", ["Wo wohnst du?", "Was bist du von Beruf?", "Was machst du am Wochenende?", "Was ist dein Lieblingsessen?"]], ["Mamaly · Répondre", ["Ich wohne in …", "Ich arbeite als …", "Am Wochenende …", "Am liebsten esse ich …"]]],
      modele: `A: Wo wohnst du?
B: Ich wohne in Antananarivo, in einer Wohnung mit meiner Schwester.
B: Was bist du von Beruf?
A: Ich bin Krankenpfleger in einem Krankenhaus.
A: Was machst du am Wochenende?
B: Am Samstag gehe ich auf den Markt und am Sonntag besuche ich meine Eltern.
B: Was ist dein Lieblingsessen?
A: Am liebsten esse ich Pasta mit Tomatensoße.` },
    { id: "P2", nom: "Teil 2 – Über sich sprechen", mg: "Mitantara ny fiainanao", duree: 3, mode: "present", em: "🗣️",
      consigne: `<p>Sie bekommen eine Karte und erzählen etwas über Ihr Leben.</p>`,
      ctr: ["Avec la carte, parlez de votre vie (4 points).", "Amin'ny karatra, mitantara ny fiainanao (teboka 4)."],
      themes: [{ titre: "Wofür geben Sie Geld aus?", points: [
        { de: "Kleidung?", mg: "Fitafiana?", fr: "Vêtements ?" }, { de: "Lebensmittel, Miete?", mg: "Sakafo, hofan-trano?", fr: "Nourriture, loyer ?" },
        { de: "Hobbys?", mg: "Fialam-boly?", fr: "Loisirs ?" }, { de: "Sparen?", mg: "Mitahiry vola?", fr: "Épargne ?" } ],
        modele: `Ich gebe am meisten Geld für die Miete aus. Meine Wohnung kostet 450 Euro im Monat.
Lebensmittel kaufe ich meistens auf dem Markt, das ist billiger als im Supermarkt.
Für Kleidung gebe ich nicht so viel aus. Ich kaufe nur, wenn ich wirklich etwas brauche.
Mein Hobby ist Fotografieren. Letztes Jahr habe ich eine neue Kamera gekauft.
Jeden Monat spare ich ein bisschen Geld, weil ich im Sommer meine Familie in Madagaskar besuchen möchte.` }],
      redemittel: [["Mitantara · Raconter", ["Ich gebe am meisten Geld für … aus.", "… kostet … im Monat.", "Ich kaufe meistens …", "Ich spare Geld, weil …"]]] },
    { id: "P3", nom: "Teil 3 – Etwas gemeinsam planen", mg: "Mitady fotoana iombonana", duree: 3, mode: "dialog", em: "📅",
      consigne: `<p>Ihr Freund Patrick hat Geburtstag. Sie möchten zusammen ein Geschenk für ihn kaufen. Finden Sie einen Termin.</p><div class="plan"><b>Ihr Kalender – Samstag, 17. Mai</b><br>7–9 Uhr: joggen · 10 Uhr: Deutschkurs (bis 12) · 13 Uhr: Mittagessen mit Oma · 15–16 Uhr: frei · 17 Uhr: Fußball · ab 19 Uhr: frei</div>`,
      ctr: ["Trouvez un moment pour acheter ensemble un cadeau. Regardez votre agenda.", "Mitadiava fotoana hividianana fanomezana miaraka. Jereo ny fandaharam-potoananao."],
      partenaire: [
        { id: "ga2m1-p3-1", t: "Hallo! Wann hast du am Samstag Zeit? Wollen wir am Vormittag einkaufen gehen, so um zehn?", cue: "Jereo ny kalandrie: 10 ora = Deutschkurs. · Agenda : cours à 10 h.", aide: ["Um zehn kann ich leider nicht, da habe ich Deutschkurs.", "Wie wäre es nachmittags?"] },
        { id: "ga2m1-p3-2", t: "Schade. Und um eins? Dann können wir zusammen essen.", cue: "13 ora = Oma. · 13 h : grand-mère.", aide: ["Um eins esse ich mit meiner Oma.", "Geht es um drei?"] },
        { id: "ga2m1-p3-3", t: "Um drei passt mir gut! Was schenken wir Patrick? Ich dachte an ein Buch.", cue: "Manaiky ary manolora hevitra. · Accepte et propose.", aide: ["Gute Idee! Er liest gern Krimis.", "Oder vielleicht ein T-Shirt von seinem Fußballverein?"] },
        { id: "ga2m1-p3-4", t: "Gute Idee! Wo treffen wir uns?", cue: "Manolora toerana. · Propose un lieu.", aide: ["Treffen wir uns vor der Buchhandlung am Marktplatz?", "An der Bushaltestelle?"] }
      ],
      redemittel: [["Manolotra · Proposer", ["Wie wäre es um …?", "Hast du um … Zeit?", "Geht es um …?"]], ["Mandà · Refuser", ["Um … kann ich leider nicht, da …", "Da habe ich keine Zeit."]], ["Manaiky · Accepter", ["Das passt mir gut!", "Einverstanden.", "Super, dann treffen wir uns um …"]]],
      modele: `A: Wann hast du am Samstag Zeit? Um zehn?
B: Um zehn kann ich leider nicht, da habe ich Deutschkurs. Wie wäre es nachmittags?
A: Um eins?
B: Um eins esse ich mit meiner Oma. Geht es um drei?
A: Ja, um drei passt mir gut. Was schenken wir Patrick? Ein Buch?
B: Gute Idee! Er liest gern Krimis.
A: Wo treffen wir uns?
B: Vor der Buchhandlung am Marktplatz, um drei Uhr.
A: Super, bis Samstag!` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Tontosa ny asa · Tâche réalisée" },
    { nom: "Interaktion", desc: "Mamaly ny namanao · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "die Ausbildung", fr: "la formation professionnelle", mg: "fiofanana ara-asa", ex: "Er hat eine Ausbildung zum Bäcker gemacht." },
    { de: "der Bestseller", fr: "le best-seller", mg: "ny be mpividy indrindra", ex: "Das Olivenbrot ist sein Bestseller." },
    { de: "wählen", fr: "élire / choisir", mg: "mifidy", ex: "Man hat ihn zum Bäcker des Jahres gewählt." },
    { de: "anbieten", fr: "proposer", mg: "manolotra", ex: "Er möchte einen Kurs anbieten." },
    { de: "der Koffer", fr: "la valise", mg: "valizy", ex: "Ich brauche einen Koffer." },
    { de: "das Fundbüro", fr: "le bureau des objets trouvés", mg: "birao fitehirizana zavatra very", ex: "Das Fundbüro ist im Untergeschoss." },
    { de: "der Schmuck", fr: "les bijoux", mg: "firavaka", ex: "Schmuck gibt es im Erdgeschoss." },
    { de: "umziehen", fr: "déménager", mg: "mifindra trano", ex: "Wir sind vor drei Wochen umgezogen." },
    { de: "grillen", fr: "faire un barbecue", mg: "manendy", ex: "Wir grillen im Garten." },
    { de: "Bescheid sagen", fr: "prévenir", mg: "mampahafantatra", ex: "Sagt mir bis Mittwoch Bescheid." },
    { de: "zum Mitnehmen", fr: "à emporter", mg: "azo entina", ex: "Pizza auch zum Mitnehmen." },
    { de: "der Ruhetag", fr: "le jour de fermeture", mg: "andro mihidy", ex: "Montag Ruhetag." },
    { de: "gesperrt", fr: "fermé (route)", mg: "voasakana", ex: "Die Brücke ist gesperrt." },
    { de: "abholen", fr: "récupérer", mg: "maka", ex: "Sie können das Auto morgen abholen." },
    { de: "verschieben", fr: "reporter", mg: "manemotra", ex: "Können wir das Kino verschieben?" },
    { de: "die Fahrstunde", fr: "la leçon de conduite", mg: "fianarana mitondra fiara", ex: "Am Montag habe ich meine erste Fahrstunde." },
    { de: "der Rabatt", fr: "la réduction", mg: "fihenam-bidy", ex: "Heute 20 Prozent Rabatt." },
    { de: "die Ampel", fr: "le feu rouge", mg: "jiro fifamoivoizana", ex: "Gehen Sie bis zur Ampel." },
    { de: "vermissen", fr: "regretter / manquer", mg: "malahelo (olona tsy eo)", ex: "Ich vermisse meine Familie." },
    { de: "der Verein", fr: "le club / l'association", mg: "klioba / fikambanana", ex: "Ich spiele in einem Verein Fußball." }
  ]
});
})();
