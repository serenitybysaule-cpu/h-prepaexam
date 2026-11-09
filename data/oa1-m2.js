/* ÖSD Zertifikat A1 — Modellsatz 2 — textes originaux H Conseil & Formation */
(function(){
const pics = (o) => Object.fromEntries(Object.entries(o).map(([k,[e,t]]) => [k, `<span style="font-size:26px">${e}</span><br>${t}`]));
window.POOLS.OA1.sets.push({
  id: "oa1m2", titre: "Modellsatz 2", theme: "Asa, fianarana, fivarotana",
  lesen: { temps: 25, teile: [
    { id: "L1", nom: "Aufgabe 1", type: "match", points: 10, zero: false, layout: "choixAfter",
      consigne: "Sie suchen verschiedene Dinge in der Zeitung. Finden Sie zu jeder Situation (A – E) die passende Anzeige (Nr. 1 – 6). Achtung: Eine Anzeige ist zu viel.",
      choix: {
        "1": "<b>Friseursalon Bella</b><br>Haarschnitt für Damen und Herren – ohne Termin! Mo–Sa 9–18 Uhr.",
        "2": "<b>Wohnung zu vermieten</b><br>2 Zimmer, Balkon, Graz-Zentrum, 650 € warm. Tel. 0316 / 44 55 66",
        "3": "<b>Nachhilfe Mathematik</b><br>Student hilft Schülern, 15 € pro Stunde.",
        "4": "<b>Gebrauchte Handys</b><br>Ankauf und Verkauf – Handy-Shop am Hauptplatz.",
        "5": "<b>Babysitterin gesucht</b><br>Familie in Linz sucht Hilfe für 2 Kinder, Mo–Mi nachmittags.",
        "6": "<b>Yoga im Park</b><br>Jeden Sonntag 9 Uhr, kostenlos, für alle!"
      },
      items: [
        { n: 1, q: "A · Ihr Sohn hat schlechte Noten in Mathe.", tr: ["Votre fils a de mauvaises notes en maths.", "Ratsy ny naotin'ny zanakao lahy amin'ny matematika."], a: "3", exp: { mg: "Nachhilfe = fampianarana fanampiny.", fr: "Cours de soutien → 3." } },
        { n: 2, q: "B · Sie suchen am Nachmittag eine Arbeit mit Kindern.", tr: ["Vous cherchez un travail l'après-midi avec des enfants.", "Mitady asa miaraka amin'ny ankizy amin'ny tolakandro ianao."], a: "5", exp: { mg: "Babysitterin, « nachmittags ».", fr: "Baby-sitting l'après-midi → 5." } },
        { n: 3, q: "C · Sie möchten sich spontan die Haare schneiden lassen.", tr: ["Vous voulez vous faire couper les cheveux sans rendez-vous.", "Te hanapaka volo tsy nanao fotoana ianao."], a: "1", exp: { mg: "« ohne Termin » = tsy mila fotoana.", fr: "Sans rendez-vous → 1." } },
        { n: 4, q: "D · Sie möchten Ihr altes Handy verkaufen.", tr: ["Vous voulez vendre votre vieux portable.", "Te hivarotra ny findainao taloha ianao."], a: "4", exp: { mg: "« Ankauf » = mividy (ny magazay) → afaka mivarotra ianao.", fr: "Rachat de portables → 4." } },
        { n: 5, q: "E · Sie möchten am Wochenende Sport machen, aber nichts bezahlen.", tr: ["Vous voulez faire du sport le week-end sans payer.", "Te hanao fanatanjahantena amin'ny faran'ny herinandro tsy mandoa."], a: "6", exp: { mg: "Alahady + kostenlos → Yoga. Ny 2 (trano) no tafahoatra.", fr: "Dimanche, gratuit → 6. L'annonce 2 est en trop." } }
      ] },
    { id: "L2", nom: "Aufgabe 2", type: "jn", points: 10,
      consigne: "Sie lesen drei Anzeigen. Dazu gibt es je 2 Fragen. Antworten Sie mit JA oder NEIN.",
      texte: `<div class="ads">
<div class="ad"><span class="l">A</span><b>Sprachcafé Wien</b><br>Jeden Donnerstag 18–20 Uhr: Deutsch sprechen mit Österreichern.<br>Getränke selbst bezahlen. Keine Anmeldung nötig.</div>
<div class="ad"><span class="l">B</span><b>Supermarkt Billa – Aushilfe gesucht</b><br>Für Samstag, 8–14 Uhr. 12 € pro Stunde.<br>Deutschkenntnisse A2 nötig.</div>
<div class="ad"><span class="l">C</span><b>Flohmarkt in der Schule</b><br>Sonntag, 21. April, 10–15 Uhr. Kleidung, Spielsachen, Bücher.<br>Bei Regen in der Turnhalle!</div></div>`,
      items: [
        { n: 6, q: "A · Muss man sich für das Sprachcafé anmelden?", tr: ["Faut-il s'inscrire au café des langues ?", "Mila misoratra anarana ve?"], a: "n", exp: { mg: "« Keine Anmeldung nötig ».", fr: "Pas d'inscription → NEIN." } },
        { n: 7, q: "A · Sind die Getränke gratis?", tr: ["Les boissons sont-elles gratuites ?", "Maimaim-poana ve ny zava-pisotro?"], a: "n", exp: { mg: "« selbst bezahlen » = aloavy ihany.", fr: "On paie soi-même → NEIN." } },
        { n: 8, q: "B · Arbeitet man am Samstagvormittag?", tr: ["Travaille-t-on le samedi matin ?", "Miasa amin'ny asabotsy maraina ve?"], a: "j", exp: { mg: "8–14 ora = maraina.", fr: "8–14 h → JA." } },
        { n: 9, q: "B · Kann man ohne Deutschkenntnisse arbeiten?", tr: ["Peut-on travailler sans connaître l'allemand ?", "Azo atao ve ny miasa tsy mahay alemana?"], a: "n", exp: { mg: "« A2 nötig ».", fr: "A2 requis → NEIN." } },
        { n: 10, q: "C · Kann man dort Bücher kaufen?", tr: ["Peut-on y acheter des livres ?", "Afaka mividy boky ve any?"], a: "j", exp: { mg: "« Kleidung, Spielsachen, Bücher ».", fr: "Oui, des livres → JA." } },
        { n: 11, q: "C · Fällt der Flohmarkt bei Regen aus?", tr: ["Le marché est-il annulé s'il pleut ?", "Foanana ve raha avy ny orana?"], a: "n", exp: { mg: "« Bei Regen in der Turnhalle » → mitohy ao anaty efitrano.", fr: "Il a lieu au gymnase → NEIN." } }
      ] },
    { id: "L3", nom: "Aufgabe 3", type: "match", points: 10, zero: false, layout: "textFirst",
      consigne: "Sie lesen 5 kurze Texte (Text A – E). Welches Bild (1 – 6) passt zu welchem Text? Achtung: Ein Bild ist zu viel.",
      choixTitre: "Bilder",
      choix: pics({ "1": ["🚭", "Ein Schild: Zigarette durchgestrichen."], "2": ["📵", "Ein Schild: Handy durchgestrichen."], "3": ["🛗", "Ein Aufzug mit offener Tür."], "4": ["🅿️", "Ein voller Parkplatz."], "5": ["🧺", "Ein Waschraum mit Waschmaschinen."], "6": ["🐶", "Ein Hund vor einer Bäckerei."] }),
      texte: `<div class="ads">
<div class="ad"><span class="l">A</span>Der Lift ist wieder in Ordnung. Sie müssen nicht mehr die Stiege nehmen.</div>
<div class="ad"><span class="l">B</span>Liebe Gäste, bitte schalten Sie während des Konzerts Ihr Mobiltelefon aus.</div>
<div class="ad"><span class="l">C</span>Hunde müssen leider draußen warten.</div>
<div class="ad"><span class="l">D</span>Rauchen ist im ganzen Gebäude verboten.</div>
<div class="ad"><span class="l">E</span>Waschmaschinen: Bitte nach dem Waschen sauber machen!</div></div>`,
      items: [
        { n: 12, q: "Text A", a: "3", exp: { mg: "« Lift » = Aufzug (teny aotrisiana). « Stiege » = tohatra.", fr: "Lift = ascenseur ; Stiege = escalier (AT)." } },
        { n: 13, q: "Text B", a: "2", exp: { mg: "« Mobiltelefon ausschalten » → finday voarara.", fr: "Éteindre son portable." } },
        { n: 14, q: "Text C", a: "6", exp: { mg: "Alika miandry any ivelany.", fr: "Le chien attend dehors." } },
        { n: 15, q: "Text D", a: "1", exp: { mg: "« Rauchen … verboten » = voarara ny mifoka.", fr: "Interdit de fumer." } },
        { n: 16, q: "Text E", a: "5", exp: { mg: "Waschmaschinen → efitrano fanasan-damba. Sary 4 no tafahoatra.", fr: "Buanderie. L'image 4 est en trop." } }
      ] }
  ] },

  hoeren: { temps: 10, teile: [
    { id: "H1", nom: "Aufgabe 1", ecoutes: 1, type: "match", points: 10, zero: false, lecture: 30,
      consigne: "Sie hören fünf verschiedene Texte zu den Fotos. Sie hören jeden Text ein Mal. Welcher Text passt zu welchem Foto? Achtung: Ein Foto ist zu viel.",
      choixTitre: "Fotos",
      choix: pics({ "A": ["💇", "Beim Friseur"], "B": ["✈️", "Am Flughafen"], "C": ["🏫", "In der Schule"], "D": ["🍕", "In der Pizzeria"], "E": ["🏥", "Beim Arzt"], "F": ["🚕", "Im Taxi"] }),
      clips: [
        { id: "oa1m2-h1-1", titre: "Text 1", script: [{ s: "m", n: "Durchsage", t: "Die Passagiere nach Rom werden gebeten, zum Gate fünfzehn zu kommen." }], items: [{ n: 1, q: "Text 1 → Foto?", a: "B", exp: { mg: "Passagiere, Gate → seranam-piaramanidina.", fr: "Passagers, porte → aéroport." } }] },
        { id: "oa1m2-h1-2", titre: "Text 2", script: [{ s: "f", n: "Friseurin", t: "Wie kurz möchten Sie die Haare? Nur die Spitzen?" }], items: [{ n: 2, q: "Text 2 → Foto?", a: "A", exp: { mg: "Haare → mpanety volo.", fr: "Cheveux → coiffeur." } }] },
        { id: "oa1m2-h1-3", titre: "Text 3", script: [{ s: "m", n: "Fahrer", t: "Zum Westbahnhof? Das kostet ungefähr zwanzig Euro. Steigen Sie ein!" }], items: [{ n: 3, q: "Text 3 → Foto?", a: "F", exp: { mg: "« Steigen Sie ein » + vidiny → taxi.", fr: "Montez → taxi." } }] },
        { id: "oa1m2-h1-4", titre: "Text 4", script: [{ s: "f", n: "Lehrerin", t: "Kinder, öffnet bitte eure Bücher auf Seite zwanzig." }], items: [{ n: 4, q: "Text 4 → Foto?", a: "C", exp: { mg: "« Kinder … Bücher … Seite » → sekoly.", fr: "École." } }] },
        { id: "oa1m2-h1-5", titre: "Text 5", script: [{ s: "m", n: "Kellner", t: "Eine Pizza Margherita und ein Mineralwasser. Kommt sofort!" }], items: [{ n: 5, q: "Text 5 → Foto?", a: "D", exp: { mg: "Pizza → pizzeria. Sary E (dokotera) no tafahoatra.", fr: "Pizzeria. La photo E est en trop." } }] }
      ] },
    { id: "H2", nom: "Aufgabe 2", ecoutes: 2, type: "fill", points: 10, lecture: 30,
      consigne: "Sie hören folgende Nachricht. Hören Sie gut zu und schreiben Sie die wichtigsten Informationen auf das Notizblatt. Sie hören den Text zwei Mal.",
      contexte: "Notizen · Vorstellungsgespräch",
      xtr: ["Notes · Entretien d'embauche", "Naoty · Resadresaka fandraisana mpiasa"],
      clips: [{ id: "oa1m2-h2", titre: "Nachricht", script: [{ s: "f", n: "Frau Gruber", t: "Grüß Gott, hier spricht Gruber von der Firma Alpenblick. Vielen Dank für Ihre Bewerbung. Wir möchten Sie gern kennenlernen. Kommen Sie bitte am Mittwoch um zehn Uhr zu uns. Unsere Adresse ist Mozartgasse neun, im dritten Stock. Bitte bringen Sie Ihren Lebenslauf mit. Meine Telefonnummer ist null sechs sechs vier, fünf fünf acht zwei drei eins. Auf Wiederhören!" }],
        items: [
          { n: 6, label: "Termin am:", ph: "Tag", a: ["Mittwoch", "am Mittwoch", "Mi"], exp: { mg: "« am Mittwoch ».", fr: "Mercredi." } },
          { n: 7, label: "Uhrzeit:", ph: "… Uhr", a: ["10", "10 Uhr", "10.00", "10:00", "zehn Uhr", "10.00 Uhr"], exp: { mg: "« um zehn Uhr ».", fr: "10 h." } },
          { n: 8, label: "Adresse: Mozartgasse", ph: "Nr.", a: ["9", "neun"], exp: { mg: "« Mozartgasse neun ».", fr: "Numéro 9." } },
          { n: 9, label: "Mitbringen:", ph: "Was?", a: ["Lebenslauf", "den Lebenslauf", "CV"], exp: { mg: "« Lebenslauf » = CV.", fr: "Le CV." } },
          { n: 10, label: "Telefon: 0664 /", ph: "Nummer", a: ["558231", "55 82 31", "558 231"], exp: { mg: "5-5-8-2-3-1.", fr: "5-5-8-2-3-1." } }
        ] }] },
    { id: "H3", nom: "Aufgabe 3", ecoutes: 1, type: "mc", points: 10, lecture: 10,
      consigne: "Sie hören jetzt 5 Personen, die befragt werden. Kreuzen Sie die richtigen Antworten an. Pro Person gibt es nur eine Antwort. Sie hören die Texte ein Mal.",
      contexte: "Frage: Wie kommen Sie zur Arbeit?",
      xtr: ["Question : comment allez-vous au travail ?", "Fanontaniana: ahoana no andehananao any am-piasana?"],
      clips: [{ id: "oa1m2-h3", titre: "Umfrage", script: [
        { s: "m", n: "Person 1", t: "Ich wohne nur fünf Minuten von meinem Büro entfernt. Ich gehe immer zu Fuß." },
        { s: "f", n: "Person 2", t: "Ich nehme jeden Tag die U-Bahn. Mit dem Auto gibt es zu viel Stau." },
        { s: "m2", n: "Person 3", t: "Bei schönem Wetter fahre ich Rad. Aber meistens fahre ich mit dem Auto, weil ich auf dem Land wohne." },
        { s: "f2", n: "Person 4", t: "Ich habe kein Auto und kein Fahrrad. Die U-Bahn fährt bei uns nicht, also nehme ich den Bus." },
        { s: "f", n: "Person 5", t: "Ich fahre immer mit dem Fahrrad, auch im Winter. Das ist gesund!" }],
        items: [
          { n: 11, q: "Person 1", opts: ["zu Fuß", "U-Bahn", "Auto", "Fahrrad"], a: "a", exp: { mg: "« zu Fuß » = an-tongotra.", fr: "À pied." } },
          { n: 12, q: "Person 2", opts: ["zu Fuß", "U-Bahn", "Auto", "Fahrrad"], a: "b", exp: { mg: "« die U-Bahn ».", fr: "Métro." } },
          { n: 13, q: "Person 3", opts: ["zu Fuß", "U-Bahn", "Auto", "Fahrrad"], a: "c", exp: { mg: "« meistens … mit dem Auto ».", fr: "Surtout en voiture." } },
          { n: 14, q: "Person 4", opts: ["Fahrrad", "U-Bahn", "Bus", "Auto"], a: "c", exp: { mg: "« also nehme ich den Bus ».", fr: "Le bus." } },
          { n: 15, q: "Person 5", opts: ["zu Fuß", "U-Bahn", "Auto", "Fahrrad"], a: "d", exp: { mg: "« immer mit dem Fahrrad ».", fr: "Toujours à vélo." } }
        ] }] }
  ] },

  schreiben: { temps: 20, aufgaben: [
    { id: "S1", nom: "Aufgabe 1", temps: 8, points: 5, type: "Formular",
      consigne: `<p>Ihr Freund Tsiory Randriamanana (geboren am 14. Februar 1990) möchte in Wien einen Deutschkurs machen. Er möchte einen Abendkurs, Niveau A2, ab September. Er wohnt in der Praterstraße 12, 1020 Wien. Er bezahlt mit Überweisung. Er hat von dem Kurs im Internet gelesen.</p><p>Helfen Sie Ihrem Freund und füllen Sie das Formular aus.</p>`,
      ctr: ["Aidez votre ami à remplir l'inscription au cours d'allemand.", "Ampio ny namanao hameno ny fisoratana anarana amin'ny fampianarana alemana."],
      form: { titre: "Anmeldung – Sprachinstitut Wien", champs: [
        { label: "Familienname", v: "Randriamanana" },
        { n: 1, label: "Vorname", a: ["Tsiory"] },
        { n: 2, label: "Geburtsdatum", a: ["14.02.1990", "14.2.1990", "14. Februar 1990", "14.02.90", "14/02/1990"] },
        { n: 3, label: "Adresse", a: ["Praterstraße 12, 1020 Wien", "Praterstraße 12", "Praterstrasse 12, 1020 Wien", "Praterstraße 12 1020 Wien"] },
        { n: 4, label: "Niveau", choix: ["A1", "A2", "B1"], a: ["A2"] },
        { n: 5, label: "Kurszeit", choix: ["Vormittag", "Nachmittag", "Abend"], a: ["Abend"] },
        { n: 6, label: "Kursbeginn", a: ["September", "im September", "Sept."] },
        { n: 7, label: "Bezahlung", choix: ["bar", "Überweisung"], a: ["Überweisung"] },
        { n: 8, label: "Wie haben Sie von uns gehört?", choix: ["Zeitung", "Internet", "Freunde"], a: ["Internet"] }
      ] },
      exp: { mg: "Ao amin'ny tantara avokoa ny valiny. Tandremo ny tsipelina amin'ny adiresy.", fr: "Tout est dans la situation ; attention à l'orthographe de l'adresse." } },
    { id: "S2", nom: "Aufgabe 2", temps: 12, mots: 30, points: 10, type: "E-Mail",
      consigne: `<p>Ihr Kollege Markus hat Ihnen geschrieben:</p><div class="guest"><div class="guest-h">Von: markus.b@firma.at · Betreff: Mittagessen</div><div class="guest-b">Hallo! Gehen wir morgen zusammen Mittag essen? Wann hast du Zeit? Welches Restaurant magst du? Isst du Fleisch?<br>Lg Markus</div></div><p>Antworten Sie Markus. Schreiben Sie zu jeder Frage ein bis zwei Sätze (circa 30 Wörter).</p>`,
      ctr: ["Répondez à Markus : quand vous êtes libre, quel restaurant, si vous mangez de la viande. ~30 mots.", "Valio i Markus: amin'ny firy, trano fisakafoanana inona, mihinana hena ve ianao. ~30 teny."],
      checklist: ["Lieber Markus,", "Ora malalaka", "Trano fisakafoanana tianao", "Hena: eny / tsia", "Gruß + anarana", "~30 teny"],
      redemittel: ["Lieber Markus,", "gern! Ich habe um … Uhr Zeit.", "Ich mag das Restaurant … / Ich esse gern …", "Ich esse (kein) Fleisch.", "Bis morgen!", "Liebe Grüße"],
      modele: `Lieber Markus,

gern! Ich habe morgen um 12.30 Uhr Zeit. Ich mag das indische Restaurant neben dem Büro. Ich esse kein Fleisch, aber dort gibt es viele Gerichte mit Gemüse.

Bis morgen!
Liebe Grüße
Tiana` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voavaly avokoa ny fanontaniana? · Toutes les questions ?" },
    { nom: "Wortschatz", desc: "Teny mety · Vocabulaire adapté" },
    { nom: "Strukturen", desc: "Fehezanteny marina · Phrases correctes" }
  ] },

  sprechen: { preparation: 0, teile: [
    { id: "P1", nom: "Aufgabe 1 – Sich vorstellen", mg: "Mampahafantatra ny tena", duree: 2, mode: "present", em: "🙋",
      consigne: `<p>Ihre Gesprächspartnerin / Ihr Gesprächspartner möchte Sie gerne kennenlernen. Wählen Sie 4 Themen aus und sprechen Sie zu jedem Thema ein paar Sätze.</p><div class="plan"><b>Wohnort? · Arbeit? · Freunde? · Wochenende? · Lieblingsfarbe? · Deutsch lernen?</b></div>`,
      ctr: ["Choisissez 4 thèmes (lieu, travail, amis, week-end, couleur préférée, apprendre l'allemand) et dites quelques phrases.", "Misafidiana lohahevitra 4 ary lazao fehezanteny vitsivitsy isaky ny iray."],
      themes: [{ titre: "Sich vorstellen", points: [
        { de: "Wohnort?", mg: "Toerana honenana?", fr: "Lieu d'habitation ?" }, { de: "Arbeit?", mg: "Asa?", fr: "Travail ?" },
        { de: "Wochenende?", mg: "Faran'ny herinandro?", fr: "Week-end ?" }, { de: "Deutsch lernen?", mg: "Mianatra alemana?", fr: "Apprendre l'allemand ?" } ],
        modele: `Ich wohne in Antsirabe. Die Stadt ist nicht so groß, aber sehr schön, und es ist oft kühl.
Ich arbeite in einem Hotel an der Rezeption. Ich spreche jeden Tag mit Touristen.
Am Wochenende besuche ich meine Familie oder ich gehe mit Freunden spazieren.
Ich lerne Deutsch, weil viele Gäste aus Deutschland und Österreich kommen. Deutsch ist schwer, aber es macht Spaß.` }],
      redemittel: [["Lohahevitra · Thèmes", ["Ich wohne in … Die Stadt ist …", "Ich arbeite in / bei …", "Am Wochenende …", "Ich lerne Deutsch, weil …"]]] },
    { id: "P2", nom: "Aufgabe 2 – Situationen beschreiben", mg: "Mamaritra sary", duree: 2, mode: "present", em: "🖼️",
      consigne: `<p>Sie bekommen drei Bilder. Wählen Sie ein Bild aus. Sprechen Sie über das Bild:</p><ul><li>Was sehen Sie?</li><li>Wie viele Personen sehen Sie?</li><li>Wo sind diese Personen?</li><li>Was machen diese Personen?</li></ul>`,
      themes: [
        { titre: "Bild 1 · Am Bahnhof", bild: { e: "🚉", de: "Ein Mann mit einem großen Koffer steht am Bahnsteig. Eine Frau zeigt ihm die Anzeigetafel.", tr: ["Un homme avec une grosse valise sur le quai ; une femme lui montre le panneau.", "Lehilahy mitondra valizy lehibe eo amin'ny gara; vehivavy manondro ny takelaka."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Auf dem Bild sehe ich einen Bahnhof. Ich sehe zwei Personen: einen Mann und eine Frau. Sie sind am Bahnsteig. Der Mann hat einen großen Koffer. Vielleicht fährt er in den Urlaub. Die Frau zeigt ihm die Anzeigetafel. Sie hilft ihm.` },
        { titre: "Bild 2 · Im Büro", bild: { e: "🧑‍💼", de: "Drei Kollegen sitzen an einem Tisch mit Laptops. Eine Frau steht und erklärt etwas an einer Tafel.", tr: ["Trois collègues avec des ordinateurs ; une femme explique au tableau.", "Mpiara-miasa telo misy solosaina; vehivavy manazava eo amin'ny solaitrabe."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Ich sehe ein Büro. Auf dem Bild sind vier Personen. Drei Kollegen sitzen am Tisch und haben Laptops. Eine Frau steht vorne an der Tafel. Sie erklärt etwas, vielleicht ein Projekt. Die Kollegen hören zu. Das ist eine Besprechung.` },
        { titre: "Bild 3 · Auf dem Markt", bild: { e: "🍅", de: "Eine alte Frau kauft Tomaten an einem Marktstand. Der Verkäufer gibt ihr eine Tüte.", tr: ["Une vieille dame achète des tomates au marché ; le vendeur lui donne un sac.", "Renibe mividy voatabia eny an-tsena; ny mpivarotra manome kitapo."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Auf dem Bild sehe ich einen Markt. Ich sehe zwei Personen: eine alte Frau und einen Verkäufer. Sie sind an einem Marktstand. Die Frau kauft Tomaten. Der Verkäufer gibt ihr eine Tüte. Sie lachen. Das Gemüse ist sehr frisch.` } ],
      redemittel: [["Mamaritra · Décrire", ["Auf dem Bild sehe ich …", "Ich sehe … Personen.", "Sie sind am / im / auf dem …", "Der Mann / Die Frau …", "Vielleicht …"]]] },
    { id: "P3", nom: "Aufgabe 3 – Miteinander sprechen", mg: "Lalao an-tsehatra", duree: 3, mode: "dialog", em: "🎭",
      consigne: `<p>Sie sind nun in der Situation des gewählten Bildes. Spielen Sie diese Situation mit Ihrer Gesprächspartnerin / Ihrem Gesprächspartner.</p><div class="plan"><b>Beispiel: Bild 1 – Am Bahnhof.</b> Sie möchten eine Fahrkarte kaufen. Ihr Partner arbeitet am Schalter.</div>`,
      ctr: ["Jouez la situation : à la gare, vous achetez un billet ; le partenaire est au guichet.", "Ataovy ny toe-javatra: ao amin'ny gara, mividy tapakila ianao; ny namanao no eo amin'ny varavarankely."],
      partnerLabel: "Schalter · Mpivarotra tapakila", av: "🧑‍💼",
      partenaire: [
        { id: "oa1m2-p3-1", s: "f", t: "Grüß Gott! Wohin möchten Sie fahren?", aide: ["Nach Salzburg, bitte.", "Ich möchte nach Innsbruck fahren."] },
        { id: "oa1m2-p3-2", s: "f", t: "Gern. Einfach oder hin und zurück?", aide: ["Hin und zurück, bitte.", "Nur einfach."] },
        { id: "oa1m2-p3-3", s: "f", t: "Wann möchten Sie fahren? Heute noch?", aide: ["Ja, heute Nachmittag.", "Nein, morgen früh."] },
        { id: "oa1m2-p3-4", s: "f", t: "Der Zug fährt um vierzehn Uhr zehn. Das macht dann sechzig Euro.", aide: ["Kann ich mit Karte bezahlen?", "Von welchem Bahnsteig fährt der Zug?"] },
        { id: "oa1m2-p3-5", s: "f", t: "Natürlich. Der Zug fährt von Bahnsteig drei. Gute Reise!", aide: ["Danke schön! Auf Wiedersehen!", "Vielen Dank!"] }
      ],
      redemittel: [["Ao amin'ny gara · À la gare", ["Eine Fahrkarte nach …, bitte.", "Hin und zurück / einfach.", "Wann fährt der Zug?", "Von welchem Bahnsteig?", "Kann ich mit Karte bezahlen?"]]],
      modele: `Schalter: Grüß Gott! Wohin möchten Sie fahren?
Kunde: Nach Salzburg, bitte.
Schalter: Einfach oder hin und zurück?
Kunde: Hin und zurück, bitte.
Schalter: Wann möchten Sie fahren?
Kunde: Heute Nachmittag.
Schalter: Der Zug fährt um 14.10 Uhr. Das macht 60 Euro.
Kunde: Kann ich mit Karte bezahlen?
Schalter: Natürlich. Bahnsteig drei. Gute Reise!
Kunde: Danke schön! Auf Wiedersehen!` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voaresaka ve ny hevitra? · Tâche réalisée ?" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "der Haarschnitt", fr: "la coupe de cheveux", mg: "fanapahana volo", ex: "Ein Haarschnitt ohne Termin." },
    { de: "vermieten", fr: "louer (donner en location)", mg: "manofa (ho an'ny hafa)", ex: "Wohnung zu vermieten." },
    { de: "die Nachhilfe", fr: "les cours de soutien", mg: "fampianarana fanampiny", ex: "Mein Sohn braucht Nachhilfe." },
    { de: "der Ankauf", fr: "le rachat", mg: "fividianana", ex: "Ankauf und Verkauf von Handys." },
    { de: "die Anmeldung", fr: "l'inscription", mg: "fisoratana anarana", ex: "Keine Anmeldung nötig." },
    { de: "die Aushilfe", fr: "l'extra, l'aide temporaire", mg: "mpiasa vonjimaika", ex: "Aushilfe für Samstag gesucht." },
    { de: "die Turnhalle", fr: "le gymnase", mg: "efitrano fanaovana fanatanjahantena", ex: "Bei Regen in der Turnhalle." },
    { de: "der Lift", fr: "l'ascenseur (AT)", mg: "ascenseur", ex: "Der Lift ist wieder in Ordnung." },
    { de: "die Stiege", fr: "l'escalier (AT)", mg: "tohatra", ex: "Nehmen Sie die Stiege." },
    { de: "ausschalten", fr: "éteindre", mg: "mamono (jiro, finday)", ex: "Schalten Sie Ihr Handy aus." },
    { de: "verboten", fr: "interdit", mg: "voarara", ex: "Rauchen ist verboten." },
    { de: "die Bewerbung", fr: "la candidature", mg: "fangatahana asa", ex: "Danke für Ihre Bewerbung." },
    { de: "der Lebenslauf", fr: "le CV", mg: "CV", ex: "Bringen Sie Ihren Lebenslauf mit." },
    { de: "die Gasse", fr: "la ruelle (AT)", mg: "arabe kely", ex: "Mozartgasse 9." },
    { de: "die Überweisung", fr: "le virement", mg: "famindram-bola", ex: "Ich bezahle mit Überweisung." },
    { de: "Grüß Gott!", fr: "Bonjour ! (Autriche, sud de l'Allemagne)", mg: "Manao ahoana! (Aotrisy)", ex: "Grüß Gott, Frau Gruber!" },
    { de: "Lg (liebe Grüße)", fr: "bises, amitiés", mg: "veloma (am-pitiavana)", ex: "Lg Markus" },
    { de: "der Bahnsteig", fr: "le quai", mg: "sehatra fiandrasana lamasinina", ex: "Der Zug fährt von Bahnsteig drei." },
    { de: "einfach", fr: "aller simple", mg: "mandeha fotsiny", ex: "Einfach oder hin und zurück?" },
    { de: "die Anzeigetafel", fr: "le panneau d'affichage", mg: "takelaka fanehoana", ex: "Schau auf die Anzeigetafel!" }
  ]
});
})();
