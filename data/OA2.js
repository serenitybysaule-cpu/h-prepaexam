/* ÖSD ZERTIFIKAT A2 (ZA2) — textes originaux H Conseil & Formation */
(function(){
const P = window.POOLS.OA2;
P.info = {
  modules: [
    { m: "Lesen", mg: "Famakiana", t: "30 min", parts: "2 Aufgaben · 25 points" },
    { m: "Hören", mg: "Fihainoana", t: "~15 min", parts: "3 Aufgaben · 30 points" },
    { m: "Schreiben", mg: "Fanoratana", t: "30 min", parts: "E-mail ~50 teny · 15 points" },
    { m: "Sprechen", mg: "Fitenenana", t: "~10 min (à deux)", parts: "2 Aufgaben · 20 points" }
  ],
  reussite: { mg: "Mila <b>60 %</b> farafahakeliny ny totalin'ny isa vao afaka, ary isa kely indrindra isaky ny ampahany.", fr: "Il faut 60 % du total, avec un minimum dans chaque partie." },
  institut: { osd: { mg: "ZA2 an'ny ÖSD: endrika manokana (lohateny ↔ lahatsoratra, valiny maromaro amin'ny Hören, naoty fenoina). Alemana aotrisiana sy soisa koa.", fr: "Format propre à l'ÖSD (titres ↔ textes, choix multiples, notes à compléter)." } },
  guides: {
    lesen: [
      { t: "Aufgabe 1 · Titres A–J ↔ textes 1–5", tips: [ { mg: "Lohateny 10, lahatsoratra 5: lohateny 5 no tsy ilaina. Tadiavo ny hevi-dehibe, fa tsy teny iray.", fr: "10 titres pour 5 textes : cherche l'idée principale, pas un seul mot." }, { mg: "Fandrika: lohateny manana teny mitovy nefa hevitra hafa (abgesagt ≠ verschoben).", fr: "Piège : mêmes mots, autre sens (annulé ≠ reporté)." } ] },
      { t: "Aufgabe 2 · Texte + 5 questions a/b/c", tips: [ { mg: "Araka ny filaharan'ny lahatsoratra ny fanontaniana.", fr: "Les questions suivent l'ordre du texte." } ] }
    ],
    hoeren: [
      { t: "Aufgabe 1 · 2 textes, 4 bonnes réponses sur 8", tips: [ { mg: "Mariho ny 4 ihany! Ny valiny diso dia manala isa.", fr: "Coche seulement 4 : les erreurs enlèvent des points." } ] },
      { t: "Aufgabe 2 · Notes (2 écoutes)", tips: [ { mg: "Isa, ora, anarana: tsy maintsy marina tanteraka.", fr: "Chiffres, heures, noms : exacts." } ] },
      { t: "Aufgabe 3 · Grille, plusieurs réponses possibles", tips: [ { mg: "Olona iray dia mety manana valiny maromaro. Henoy ny « und », « auch ».", fr: "Plusieurs réponses par personne : écoute « und », « auch »." } ] }
    ],
    schreiben: [ { t: "E-mail ~50 teny", tips: [ { mg: "Valio ny fanontaniana rehetra ao amin'ny mailaka, amin'ny filaharany. Gruß any am-parany.", fr: "Réponds à toutes les questions, dans l'ordre. Salutation à la fin." } ] } ],
    sprechen: [
      { t: "Aufgabe 1 · Sich vorstellen (5 sur 6 questions)", tips: [ { mg: "Fehezanteny 2–3 isaky ny lohahevitra.", fr: "2–3 phrases par thème." } ] },
      { t: "Aufgabe 2 · Planifier ensemble", tips: [ { mg: "Resaho avokoa ny fanontaniana ao amin'ny taratasy, manolora, mamalia, manapaha hevitra.", fr: "Traitez toutes les questions de la fiche et décidez." } ] }
    ]
  }
};
P.vocabOfficiel = [
  { de: "die Überschrift", fr: "le titre", mg: "lohateny" }, { de: "die Tageszeitung", fr: "le quotidien", mg: "gazety isan'andro" },
  { de: "das Rathaus", fr: "la mairie", mg: "lapan'ny tanàna" }, { de: "das Sonderangebot", fr: "l'offre spéciale", mg: "tolotra manokana" },
  { de: "der Tierpark", fr: "le parc animalier", mg: "valan-javaboary" }, { de: "die Ausstellung", fr: "l'exposition", mg: "fampirantiana" },
  { de: "die Führung", fr: "la visite guidée", mg: "fitsidihana misy mpitarika" }, { de: "die Tierfütterung", fr: "le repas des animaux", mg: "famahanana biby" },
  { de: "der Spielplatz", fr: "l'aire de jeux", mg: "toeram-pilalaovana" }, { de: "der Radweg", fr: "la piste cyclable", mg: "lalana bisikileta" },
  { de: "die Route", fr: "l'itinéraire", mg: "lalana arahina" }, { de: "die Natur", fr: "la nature", mg: "natiora" },
  { de: "der Strauch", fr: "l'arbuste", mg: "kirihitra" }, { de: "der Einkaufsgutschein", fr: "le bon d'achat", mg: "tapakila fividianana" },
  { de: "das Ehepaar", fr: "le couple marié", mg: "mpivady" }, { de: "die Ehefrau", fr: "l'épouse", mg: "vady (vavy)" },
  { de: "der Spaziergang", fr: "la promenade", mg: "fitsangatsanganana an-tongotra" }, { de: "das Stadtzentrum", fr: "le centre-ville", mg: "afovoan-tanàna" },
  { de: "der Nebel", fr: "le brouillard", mg: "zavona" }, { de: "das Gewitter", fr: "l'orage", mg: "oram-baratra" },
  { de: "die Wolken", fr: "les nuages", mg: "rahona" }, { de: "die Abschlussfeier", fr: "la fête de fin", mg: "fety famaranana" },
  { de: "der Kurstag", fr: "le jour de cours", mg: "andro fianarana" }, { de: "das Notizblatt", fr: "la feuille de notes", mg: "taratasy fanoratana" },
  { de: "die Nachricht", fr: "le message", mg: "hafatra" }, { de: "betreiben (Sport)", fr: "pratiquer (un sport)", mg: "manao (fanatanjahantena)" },
  { de: "das Laufen", fr: "la course à pied", mg: "fihazakazahana" }, { de: "das Radfahren", fr: "le vélo", mg: "fitaingenana bisikileta" },
  { de: "der Ausflug", fr: "l'excursion", mg: "dia fitsangatsanganana" }, { de: "aufs Land", fr: "à la campagne", mg: "any ambanivohitra" },
  { de: "der Matrose", fr: "le marin", mg: "tantsambo" }, { de: "das Gemeindeamt (AT)", fr: "la mairie (Autriche)", mg: "biraon'ny kaominina (Aotrisy)" }
];

P.sets.push({
  id: "oa2m1", titre: "Modellsatz 1", theme: "Vaovao an-tanàna, mpamily bus, toetr'andro, media",
  lesen: { temps: 30, teile: [
    { id: "L1", nom: "Aufgabe 1", type: "match", points: 15, zero: false, layout: "choixFirst",
      consigne: "Lesen Sie die 10 Überschriften und die 5 Texte. Suchen Sie dann zu jedem Text (1 – 5) die passende Überschrift (A – J). Pro Text gibt es nur eine richtige Lösung.",
      ctr: ["10 titres, 5 textes : trouvez le titre qui va avec chaque texte. Une seule solution par texte.", "Lohateny 10, lahatsoratra 5: tadiavo ny lohateny mifanaraka. Valiny iray isaky ny lahatsoratra."],
      choixTitre: "Überschriften",
      choix: { A: "Neuer Spielplatz im Stadtpark eröffnet", B: "Bibliothek ab Juli auch am Sonntag offen", C: "Tipps für heiße Sommertage", D: "Gratis-Deutschkurs für Eltern", E: "Flohmarkt am Rathausplatz abgesagt", F: "Konzert im Park: Eintritt frei", G: "Neue Buslinie zum Krankenhaus", H: "Kinder lernen schwimmen", I: "Stadtfest wird verschoben", J: "Radwege werden repariert" },
      texte: `<div class="ads">
<div class="ad"><span class="l">1</span>Ab dem 1. Juli können Leserinnen und Leser auch am Sonntag von 10 bis 16 Uhr Bücher ausleihen. Die Stadt reagiert damit auf viele Wünsche aus der Bevölkerung.</div>
<div class="ad"><span class="l">2</span>Viel trinken, mittags nicht in die Sonne gehen und die Fenster am Tag geschlossen halten: Dr. Huber erklärt, wie man gut durch die Hitze kommt.</div>
<div class="ad"><span class="l">3</span>Schaukeln, Rutschen und ein großer Sandkasten: Seit Montag können Kinder im Stadtpark auf einem modernen Spielplatz spielen.</div>
<div class="ad"><span class="l">4</span>Mütter und Väter mit kleinen Kindern können ab September kostenlos Deutsch lernen. Während des Unterrichts gibt es eine Kinderbetreuung.</div>
<div class="ad"><span class="l">5</span>Wegen Bauarbeiten am Rathausplatz findet der Flohmarkt am Samstag nicht statt. Der nächste Flohmarkt ist erst im Oktober.</div></div>`,
      items: [
        { n: 1, q: "Text 1", a: "B", exp: { mg: "« auch am Sonntag … Bücher ausleihen » → tranomboky.", fr: "Bibliothèque ouverte le dimanche." } },
        { n: 2, q: "Text 2", a: "C", exp: { mg: "« durch die Hitze » = andro mafana.", fr: "Conseils contre la chaleur." } },
        { n: 3, q: "Text 3", a: "A", exp: { mg: "« Spielplatz im Stadtpark ».", fr: "Nouvelle aire de jeux." } },
        { n: 4, q: "Text 4", a: "D", exp: { mg: "« Mütter und Väter … kostenlos Deutsch » → D. Fandrika H (ankizy) — fa ny ray aman-dreny no mianatra.", fr: "Les parents apprennent gratuitement → D (pas H)." } },
        { n: 5, q: "Text 5", a: "E", exp: { mg: "Fandrika: « Stadtfest wird verschoben » (I) dia momba ny fety. Ny Flohmarkt dia « findet nicht statt » = abgesagt.", fr: "Piège : I parle de la fête de la ville ; ici la brocante est annulée → E." } }
      ] },
    { id: "L2", nom: "Aufgabe 2", type: "mc", points: 10,
      consigne: "Lesen Sie zuerst den Text und lösen Sie dann die 5 Aufgaben. Markieren Sie die richtige Antwort. Für jede Aufgabe gibt es nur eine richtige Lösung.",
      ctr: ["Lisez le texte puis répondez aux 5 questions (une seule bonne réponse).", "Vakio ny lahatsoratra ary valio ny fanontaniana 5."],
      texte: `<div class="press"><h3>Mit dem Bus durch Wien</h3><p class="lead">Hanna Steiner (42) ist seit fünfzehn Jahren Busfahrerin.</p>
<p>Eigentlich wollte Hanna Steiner Lehrerin werden. Aber nach der Matura hatte ihre Familie kein Geld für ein Studium. „Mein Vater war Busfahrer. Er hat mir oft erzählt, wie schön dieser Beruf ist. Also habe ich es probiert“, sagt sie und lacht.</p>
<p>Am liebsten fährt sie die Linie 13A durch die Innenstadt, weil sie dort viele Touristen trifft. Manchmal fragen sie nach dem Weg, und Hanna erklärt ihn gern – auf Deutsch oder auf Englisch. Schwierig findet sie nur den Verkehr am Nachmittag: „Dann sind alle Straßen voll und die Fahrgäste sind gestresst.“</p>
<p>Hanna arbeitet in Schichten. Wenn sie Frühdienst hat, beginnt sie schon um fünf Uhr. Dafür hat sie am Nachmittag Zeit für ihre Tochter. In ihrer Freizeit geht Hanna gern im Wienerwald spazieren – „ganz ohne Verkehr!“</p></div>`,
      items: [
        { n: 6, q: "Hanna wollte zuerst …", tr: ["Au départ, Hanna voulait…", "Tamin'ny voalohany i Hanna dia te…"], opts: ["Busfahrerin werden.", "Lehrerin werden.", "in England studieren."], otr: [["devenir conductrice de bus", "ho mpamily bus"], ["devenir enseignante", "ho mpampianatra"], ["étudier en Angleterre", "hianatra any Angletera"]], a: "b", exp: { mg: "« Eigentlich wollte Hanna Steiner Lehrerin werden ».", fr: "Elle voulait devenir enseignante." } },
        { n: 7, q: "Busfahrerin ist Hanna geworden, weil …", tr: ["Hanna est devenue conductrice parce que…", "Lasa mpamily bus i Hanna satria…"], opts: ["ihr Vater ihr viel von dem Beruf erzählt hat.", "sie gern Touristen trifft.", "sie gut Englisch spricht."], otr: [["son père lui a parlé du métier", "nitantara momba ilay asa ny dadany"], ["elle aime rencontrer des touristes", "tia mihaona amin'ny mpizahatany"], ["elle parle bien anglais", "mahay anglisy tsara"]], a: "a", exp: { mg: "Ny dadany no nitantara ny hatsaran'ilay asa.", fr: "À cause de son père." } },
        { n: 8, q: "Die Linie 13A fährt Hanna gern, weil …", tr: ["Hanna aime la ligne 13A parce que…", "Tian'i Hanna ny laharana 13A satria…"], opts: ["sie sehr kurz ist.", "sie dort viele Touristen trifft.", "es dort wenig Verkehr gibt."], otr: [["elle est courte", "fohy"], ["elle y rencontre des touristes", "mihaona mpizahatany maro"], ["peu de circulation", "tsy dia be fiara"]], a: "b", exp: { mg: "« weil sie dort viele Touristen trifft ».", fr: "Beaucoup de touristes." } },
        { n: 9, q: "Am Nachmittag …", tr: ["L'après-midi…", "Amin'ny tolakandro…"], opts: ["sind die Straßen leer.", "ist der Verkehr schwierig.", "beginnt ihr Dienst."], otr: [["les rues sont vides", "foana ny lalana"], ["la circulation est difficile", "sarotra ny fifamoivoizana"], ["son service commence", "manomboka ny asany"]], a: "b", exp: { mg: "« alle Straßen voll » amin'ny tolakandro.", fr: "Circulation difficile l'après-midi." } },
        { n: 10, q: "Wenn Hanna Frühdienst hat, …", tr: ["Quand Hanna travaille tôt…", "Rehefa miasa maraina be i Hanna…"], opts: ["beginnt sie um 15 Uhr.", "hat sie am Nachmittag Zeit für ihre Tochter.", "arbeitet ihre Tochter auch."], otr: [["elle commence à 15 h", "manomboka amin'ny 15 ora"], ["elle a du temps pour sa fille l'après-midi", "manana fotoana ho an'ny zanany"], ["sa fille travaille aussi", "miasa koa ny zanany"]], a: "b", exp: { mg: "« Dafür hat sie am Nachmittag Zeit für ihre Tochter ».", fr: "Du temps pour sa fille." } }
      ] }
  ] },

  hoeren: { temps: 15, teile: [
    { id: "H1", nom: "Aufgabe 1", ecoutes: 1, type: "multi", points: 10, lecture: 30,
      consigne: "Sie hören zwei verschiedene Texte mit dem gleichen Inhalt. Hören Sie gut zu und markieren Sie die Antworten. Es gibt vier richtige Antworten. Sie hören die Texte ein Mal.",
      ctr: ["Deux textes avec le même contenu. Cochez 4 bonnes réponses. Une écoute.", "Lahatsoratra roa mitovy votoaty. Mariho valiny marina 4. Henoina indray mandeha."],
      clips: [{ id: "oa2m1-h1", titre: "Das Wetter am Samstag", script: [
        { s: "m", n: "Radio", t: "Und hier das Wetter für Samstag: Der Tag beginnt mit Nebel, aber ab Mittag scheint im ganzen Land die Sonne. Es wird warm, die Temperaturen steigen auf fünfundzwanzig Grad. Am Abend kann es Gewitter geben." },
        { s: "f", n: "Julia", t: "Hast du den Wetterbericht für Samstag gehört?" },
        { s: "m2", n: "Tom", t: "Ja. Am Morgen Nebel, dann Sonne. Und richtig warm, fünfundzwanzig Grad!" },
        { s: "f", n: "Julia", t: "Super! Und regnet es?" },
        { s: "m2", n: "Tom", t: "Nein, Regen nicht. Aber am Abend vielleicht ein Gewitter. Wind gibt es kaum." }],
        items: [{ n: 1, q: "Das Wetter am Samstag:", tr: ["Le temps samedi :", "Ny toetr'andro amin'ny asabotsy:"], hint: "Mariho valiny 4 · Coche 4 réponses", opts: ["Sonne", "Gewitter", "18 Grad", "Regen", "Nebel", "Wind", "25 Grad", "Wolken"], a: ["a", "b", "e", "g"], exp: { mg: "Nebel (maraina), Sonne, 25 Grad, Gewitter (hariva). Tsy misy Regen, tsy dia misy Wind.", fr: "Brouillard, soleil, 25 °C, orage. Pas de pluie, presque pas de vent." } }] }] },
    { id: "H2", nom: "Aufgabe 2", ecoutes: 2, type: "fill", points: 10, lecture: 30,
      consigne: "Sie hören folgende Nachricht. Hören Sie gut zu und schreiben Sie die wichtigsten Informationen auf das Notizblatt. Sie hören den Text zwei Mal.",
      ctr: ["Écoutez le message et complétez les notes. Deux écoutes.", "Henoy ny hafatra ary fenoy ny naoty. Henoina indroa."],
      contexte: "Notizen · Ausflug Deutschkurs",
      clips: [{ id: "oa2m1-h2", titre: "Nachricht", script: [{ s: "f", n: "Frau Gruber", t: "Hallo, hier ist Frau Gruber, eure Deutschlehrerin. Unser Ausflug nach Hallstatt ist am Samstag, den zwölften Mai. Wir treffen uns um sieben Uhr fünfundvierzig am Hauptbahnhof, beim Ticketschalter. Die Fahrkarte kostet für alle achtzehn Euro. Nehmt bitte ein Lunchpaket mit. Wenn ihr Fragen habt, ruft mich an: null sechs sechs vier, sieben fünf drei neun zwei eins. Bis Samstag!" }],
        items: [
          { n: 2, label: "Datum:", ph: "Tag / Monat", a: ["12. Mai", "12 Mai", "12.5.", "12.05.", "12.5", "Samstag, 12. Mai", "zwölfter Mai"], exp: { mg: "« am Samstag, den zwölften Mai ».", fr: "Le 12 mai." } },
          { n: 3, label: "Treffpunkt:", ph: "Wo?", a: ["Hauptbahnhof", "am Hauptbahnhof", "Ticketschalter", "Hauptbahnhof Ticketschalter", "Hauptbahnhof, Ticketschalter", "beim Ticketschalter"], exp: { mg: "« am Hauptbahnhof, beim Ticketschalter ».", fr: "Gare centrale, guichet." } },
          { n: 4, label: "Uhrzeit:", ph: "… Uhr", a: ["7.45", "7:45", "7.45 Uhr", "7:45 Uhr", "viertel vor acht"], exp: { mg: "7 ora sy 45 = 7.45.", fr: "7 h 45." } },
          { n: 5, label: "Fahrkarte:", ph: "… Euro", a: ["18", "18 Euro", "18 €", "18€", "achtzehn"], exp: { mg: "« achtzehn Euro ».", fr: "18 euros." } },
          { n: 6, label: "Telefon: 0664 /", ph: "Nummer", a: ["753921", "75 39 21", "753 921"], exp: { mg: "7-5-3-9-2-1.", fr: "7-5-3-9-2-1." } }
        ] }] },
    { id: "H3", nom: "Aufgabe 3", ecoutes: 1, type: "multi", points: 10, lecture: 30,
      consigne: "Sie hören ein Interview, bei dem fünf Personen befragt werden. Kreuzen Sie in der Liste die richtigen Antworten an. Pro Person sind mehrere Antworten möglich. Sie hören die Texte ein Mal.",
      ctr: ["Cinq personnes interrogées : cochez les bonnes réponses, plusieurs possibles par personne. Une écoute.", "Olona 5 anontaniana: mariho ny valiny marina, mety maromaro isaky ny olona."],
      contexte: "Frage: Welche Medien nutzen Sie am Abend?",
      xtr: ["Question : quels médias utilisez-vous le soir ?", "Fanontaniana: inona no media ampiasainao hariva?"],
      clips: [{ id: "oa2m1-h3", titre: "Interview", script: [
        { s: "f", n: "1. Sprecherin", t: "Abends lese ich meistens ein Buch. Fernsehen mag ich nicht so." },
        { s: "m", n: "2. Sprecher", t: "Ich schaue fern und surfe gleichzeitig im Internet. Das machen doch alle, oder?" },
        { s: "f2", n: "3. Sprecherin", t: "Beim Kochen höre ich Radio, und danach lese ich die Zeitung, die ich morgens nicht geschafft habe." },
        { s: "m2", n: "4. Sprecher", t: "Nur Internet. Filme, Nachrichten, Musik – alles auf dem Handy." },
        { s: "f", n: "5. Sprecherin", t: "Ich lese die Zeitung, dann schaue ich die Nachrichten im Fernsehen. Und vor dem Schlafen lese ich noch ein paar Seiten in meinem Buch." }],
        items: [
          { n: 7, q: "1. Sprecherin", opts: ["Fernsehen", "Radio", "Zeitung", "Internet", "Bücher"], a: ["e"], exp: { mg: "Boky ihany; « Fernsehen mag ich nicht ».", fr: "Seulement des livres." } },
          { n: 8, q: "2. Sprecher", opts: ["Fernsehen", "Radio", "Zeitung", "Internet", "Bücher"], a: ["a", "d"], exp: { mg: "« fern und … Internet ».", fr: "Télé + Internet." } },
          { n: 9, q: "3. Sprecherin", opts: ["Fernsehen", "Radio", "Zeitung", "Internet", "Bücher"], a: ["b", "c"], exp: { mg: "« Radio » + « Zeitung ».", fr: "Radio + journal." } },
          { n: 10, q: "4. Sprecher", opts: ["Fernsehen", "Radio", "Zeitung", "Internet", "Bücher"], a: ["d"], exp: { mg: "« Nur Internet ».", fr: "Seulement Internet." } },
          { n: 11, q: "5. Sprecherin", opts: ["Fernsehen", "Radio", "Zeitung", "Internet", "Bücher"], a: ["a", "c", "e"], exp: { mg: "Zeitung + Fernsehen + Buch.", fr: "Journal, télé, livre." } }
        ] }] }
  ] },

  schreiben: { temps: 30, aufgaben: [
    { id: "S1", nom: "Schreibaufgabe", temps: 30, mots: 50, points: 15, type: "E-Mail (informell)",
      consigne: `<p>Sie bekommen von Ihrem Freund Stefan folgendes E-Mail:</p><div class="guest"><div class="guest-h">Von: stefan.m@mail.at · Betreff: Deine neue Wohnung</div><div class="guest-b">Hallo!<br>Ich habe gehört, du hast eine neue Wohnung! Erzähl mal: Wie ist sie? Wie viele Zimmer hat sie? Wie sind deine Nachbarn? Und wann kann ich dich besuchen?<br>Liebe Grüße, Stefan</div></div><p class="small">Schreiben Sie ein E-Mail an Stefan. Schreiben Sie circa 50 Wörter. Beantworten Sie alle Fragen. Schreiben Sie einen Gruß am Ende.</p>`,
      ctr: ["Répondez à Stefan (~50 mots) : comment est l'appartement, combien de pièces, les voisins, quand il peut venir.", "Valio i Stefan (~50 teny): ny trano, efitrano firy, ny mpifanolo-bodirindrina, rahoviana izy afaka tonga."],
      checklist: ["Lieber Stefan,", "Ahoana ny trano?", "Efitrano firy?", "Ny mpifanolo-bodirindrina?", "Rahoviana izy afaka tonga?", "Gruß + anarana", "~50 teny"],
      redemittel: ["Lieber Stefan,", "danke für dein E-Mail!", "Meine neue Wohnung ist hell und …", "Sie hat … Zimmer: …", "Meine Nachbarn sind …", "Komm doch am … vorbei!", "Liebe Grüße"],
      modele: `Lieber Stefan,

danke für dein E-Mail! Ja, seit zwei Wochen wohne ich in meiner neuen Wohnung. Sie ist hell und ruhig und hat einen kleinen Balkon. Sie hat zwei Zimmer, eine Küche und ein Bad. Meine Nachbarn sind sehr nett, die Frau neben mir hat mir sogar Kuchen gebracht. Komm doch am Samstag, den 20., zum Abendessen!

Liebe Grüße
Andry` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voavaly avokoa ny fanontaniana? · Toutes les questions ?" },
    { nom: "Kohärenz", desc: "Fehezanteny mifandray · Enchaînement" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" }
  ] },

  sprechen: { preparation: 10, teile: [
    { id: "P1", nom: "Aufgabe 1 – Sich vorstellen", mg: "Mampahafantatra ny tena", duree: 3, mode: "present", em: "🙋",
      consigne: `<p>Ihre Gesprächspartnerin / Ihr Gesprächspartner möchte Sie gerne kennenlernen. Sie erhalten ein Blatt mit 6 Fragen. Wählen Sie 5 Themen aus und sprechen Sie darüber (zu jedem Thema ein paar Sätze).</p>`,
      ctr: ["Choisissez 5 des 6 questions et répondez avec quelques phrases.", "Misafidiana fanontaniana 5 amin'ny 6 ary valio."],
      themes: [{ titre: "Sich vorstellen", points: [
        { de: "Woher kommen Sie? Wo wohnen Sie?", mg: "Avy aiza? Mipetraka aiza?", fr: "D'où venez-vous ? Où habitez-vous ?" },
        { de: "Was sind Sie von Beruf? / Was lernen Sie?", mg: "Inona ny asanao / fianaranao?", fr: "Métier / études ?" },
        { de: "Welche Sprachen sprechen Sie?", mg: "Fiteny inona no ampiasainao?", fr: "Quelles langues ?" },
        { de: "Was machen Sie in Ihrer Freizeit?", mg: "Inona no ataonao amin'ny fotoana malalaka?", fr: "Loisirs ?" },
        { de: "Wie sieht Ihr Alltag aus?", mg: "Ahoana ny fiainanao andavanandro?", fr: "Votre quotidien ?" } ],
        modele: `Ich komme aus Madagaskar, aus Fianarantsoa. Jetzt wohne ich in Antananarivo, in einer kleinen Wohnung mit meiner Cousine.
Ich arbeite als Verkäuferin in einem Handyladen. Die Arbeit macht Spaß, weil ich mit vielen Menschen spreche.
Ich spreche Malagasy, Französisch und ein bisschen Englisch. Seit einem Jahr lerne ich Deutsch.
In meiner Freizeit gehe ich gern mit Freundinnen spazieren oder ich koche.
Mein Alltag: Ich stehe um sechs Uhr auf, arbeite von acht bis fünf, und am Abend lerne ich Deutsch.` }],
      redemittel: [["Mampahafantatra · Se présenter", ["Ich komme aus … und wohne seit … in …", "Ich arbeite als … / Ich mache eine Ausbildung als …", "Ich spreche … Seit … lerne ich Deutsch.", "In meiner Freizeit …", "Normalerweise stehe ich um … auf."]]] },
    { id: "P2", nom: "Aufgabe 2 – Gemeinsam eine Aufgabe lösen", mg: "Mikasa zavatra miaraka", duree: 4, mode: "dialog", em: "🤝",
      consigne: `<p>Sie und Ihre Gesprächspartnerin / Ihr Gesprächspartner planen für Ihren Deutschkurs ein Abschlussfest. Besprechen Sie die Fragen.</p><div class="plan"><b>Abschlussfest Deutschkurs</b><ul><li>Wo? (im Kursraum? im Park? im Restaurant?)</li><li>Wann? (Tag, Uhrzeit)</li><li>Essen und Getränke?</li><li>Musik / Programm?</li><li>noch etwas?</li></ul></div>`,
      ctr: ["Planifiez ensemble la fête de fin du cours : lieu, date, repas, programme.", "Kaonty miaraka ny fety famaranana: toerana, daty, sakafo, fandaharana."],
      partenaire: [
        { id: "oa2m1-p2-1", t: "Also, wir müssen das Abschlussfest planen. Wo wollen wir feiern? Im Kursraum ist es ein bisschen langweilig, oder?", aide: ["Wie wäre es im Park?", "Ich schlage ein Restaurant vor."] },
        { id: "oa2m1-p2-2", t: "Hm, im Park ist schön, aber was machen wir, wenn es regnet?", aide: ["Dann gehen wir in den Kursraum.", "Wir können im Gasthaus im Park feiern."] },
        { id: "oa2m1-p2-3", t: "Gute Idee. Und wann? Am Freitagabend nach dem Kurs?", aide: ["Freitag passt gut, um 18 Uhr.", "Lieber Samstagnachmittag, da haben alle Zeit."] },
        { id: "oa2m1-p2-4", t: "Okay. Was ist mit Essen und Getränken? Soll jeder etwas mitbringen?", aide: ["Ja, jeder bringt etwas aus seinem Land mit.", "Ich mache Sambos aus Madagaskar!"] },
        { id: "oa2m1-p2-5", t: "Super! Und Musik? Wer kümmert sich darum? Fassen wir dann zusammen?", aide: ["Ich bringe meine Lautsprecher mit.", "Also: Wir feiern am … im …"] }
      ],
      redemittel: [["Manolotra · Proposer", ["Wie wäre es …?", "Ich schlage vor, dass …", "Wir könnten …"]], ["Mamaly · Réagir", ["Gute Idee!", "Das finde ich nicht so gut, weil …", "Einverstanden."]], ["Mamarana · Conclure", ["Also, wir feiern am … um … im …", "Du kümmerst dich um …, ich um …"]]],
      modele: `A: Wo wollen wir feiern? Im Kursraum ist es langweilig.
B: Wie wäre es im Park? Im Juni ist das Wetter schön.
A: Und wenn es regnet?
B: Dann gehen wir in das Gasthaus im Park.
A: Gute Idee. Wann? Freitagabend?
B: Lieber Samstag um 15 Uhr, da haben alle Zeit.
A: Okay. Jeder bringt etwas zu essen aus seinem Land mit.
B: Ich mache Sambos! Und ich bringe Getränke.
A: Ich kümmere mich um die Musik.
B: Also: Samstag, 15 Uhr, im Park – bei Regen im Gasthaus.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Tontosa ny asa · Tâche réalisée" },
    { nom: "Interaktion", desc: "Mamaly · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "ausleihen", fr: "emprunter", mg: "mindrana", ex: "Man kann am Sonntag Bücher ausleihen." },
    { de: "die Hitze", fr: "la chaleur", mg: "hafanana", ex: "Wie kommt man gut durch die Hitze?" },
    { de: "die Schaukel", fr: "la balançoire", mg: "kitroka", ex: "Der Spielplatz hat Schaukeln." },
    { de: "kostenlos", fr: "gratuit", mg: "maimaim-poana", ex: "Eltern können kostenlos Deutsch lernen." },
    { de: "die Kinderbetreuung", fr: "la garde d'enfants", mg: "fikarakarana ankizy", ex: "Es gibt eine Kinderbetreuung." },
    { de: "abgesagt", fr: "annulé", mg: "nofoanana", ex: "Der Flohmarkt ist abgesagt." },
    { de: "verschoben", fr: "reporté", mg: "naemotra", ex: "Das Stadtfest wird verschoben." },
    { de: "die Matura (AT)", fr: "le bac (Autriche)", mg: "bakalorea (Aotrisy)", ex: "Nach der Matura hatte sie kein Geld." },
    { de: "die Schicht", fr: "le poste (horaire)", mg: "fifandimbiasana ora", ex: "Hanna arbeitet in Schichten." },
    { de: "der Frühdienst", fr: "le service du matin", mg: "asa maraina be", ex: "Im Frühdienst beginnt sie um fünf." },
    { de: "der Wetterbericht", fr: "le bulletin météo", mg: "tatitra toetr'andro", ex: "Hast du den Wetterbericht gehört?" },
    { de: "steigen", fr: "monter", mg: "miakatra", ex: "Die Temperaturen steigen auf 25 Grad." },
    { de: "der Treffpunkt", fr: "le point de rendez-vous", mg: "toerana fihaonana", ex: "Treffpunkt ist der Hauptbahnhof." },
    { de: "das Lunchpaket", fr: "le panier-repas", mg: "sakafo entina", ex: "Nehmt ein Lunchpaket mit." },
    { de: "gleichzeitig", fr: "en même temps", mg: "miaraka", ex: "Ich schaue fern und surfe gleichzeitig." },
    { de: "die Nachrichten", fr: "les informations (journal)", mg: "vaovao", ex: "Ich schaue die Nachrichten." },
    { de: "der Nachbar", fr: "le voisin", mg: "mpifanolo-bodirindrina", ex: "Meine Nachbarn sind nett." },
    { de: "vorbeikommen", fr: "passer (chez qqn)", mg: "mandalo", ex: "Komm doch am Samstag vorbei!" },
    { de: "das Gasthaus", fr: "l'auberge / restaurant", mg: "trano fisakafoanana", ex: "Wir feiern im Gasthaus." },
    { de: "sich kümmern um", fr: "s'occuper de", mg: "mikarakara", ex: "Ich kümmere mich um die Musik." }
  ]
});
})();
