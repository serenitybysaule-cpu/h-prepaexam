/* ÖSD Zertifikat A2 — Modellsatz 5 — textes originaux H Conseil & Formation */
(function(){
window.POOLS.OA2.sets.push({
  id: "oa2m5", titre: "Modellsatz 5", theme: "Fitaterana, teknolojia, tanàna",
  lesen: { temps: 30, teile: [
    { id: "L1", nom: "Aufgabe 1", type: "match", points: 15, zero: false, layout: "choixFirst",
      consigne: "Lesen Sie die 10 Überschriften und die 5 Texte. Suchen Sie dann zu jedem Text (1 – 5) die passende Überschrift (A – J). Pro Text gibt es nur eine richtige Lösung.",
      choixTitre: "Überschriften",
      choix: { A: "Gratis-Internet in allen Straßenbahnen", B: "U-Bahn fährt am Wochenende die ganze Nacht", C: "Neue Fahrradwege in der Innenstadt", D: "Handy-Kurs für Senioren", E: "Parken wird teurer", F: "Zugstrecke wegen Bauarbeiten gesperrt", G: "Elektroautos: mehr Ladestationen", H: "Taxis nur noch mit App", I: "Stadt pflanzt 500 neue Bäume", J: "Mehr Unfälle mit E-Scootern" },
      texte: `<div class="ads">
<div class="ad"><span class="l">1</span>Vom 3. bis 17. August fahren zwischen Salzburg und Bischofshofen keine Züge. Die ÖBB bieten Busse als Ersatz an. Die Fahrt dauert etwa 30 Minuten länger.</div>
<div class="ad"><span class="l">2</span>Ab Jänner kostet eine Stunde Parken im Zentrum 3 Euro statt 2,20 Euro. Die Stadt möchte, dass mehr Menschen mit Bus und Bahn fahren.</div>
<div class="ad"><span class="l">3</span>Im Pensionistenklub lernen ältere Menschen, wie man Fotos verschickt und Videotelefonate mit den Enkelkindern macht. Der Kurs ist kostenlos.</div>
<div class="ad"><span class="l">4</span>Die Krankenhäuser melden: Im Sommer hatten sie doppelt so viele Patienten nach Stürzen mit den elektrischen Rollern wie im letzten Jahr.</div>
<div class="ad"><span class="l">5</span>In der Nacht von Freitag auf Samstag und von Samstag auf Sonntag fahren alle Linien der Wiener U-Bahn jetzt alle 15 Minuten – auch um drei Uhr früh.</div></div>`,
      items: [
        { n: 1, q: "Text 1", a: "F", exp: { mg: "Tsy misy lamasinina noho ny asa → F.", fr: "Ligne de train fermée → F." } },
        { n: 2, q: "Text 2", a: "E", exp: { mg: "3 € fa tsy 2,20 € → lafo kokoa.", fr: "Stationnement plus cher → E." } },
        { n: 3, q: "Text 3", a: "D", exp: { mg: "Zokiolona mianatra finday.", fr: "Seniors et téléphone → D." } },
        { n: 4, q: "Text 4", a: "J", exp: { mg: "« elektrische Roller » = E-Scooter, lozam-pifamoivoizana.", fr: "Accidents de trottinettes → J." } },
        { n: 5, q: "Text 5", a: "B", exp: { mg: "U-Bahn mandritra ny alina amin'ny faran'ny herinandro.", fr: "Métro la nuit → B." } }
      ] },
    { id: "L2", nom: "Aufgabe 2", type: "mc", points: 10,
      consigne: "Lesen Sie zuerst den Text und lösen Sie dann die 5 Aufgaben. Markieren Sie die richtige Antwort. Für jede Aufgabe gibt es nur eine richtige Lösung.",
      texte: `<div class="press"><h3>Oma lernt WhatsApp</h3><p class="lead">Herta Mayer (81) aus Innsbruck schickt jetzt jeden Tag Nachrichten an ihre Enkel.</p>
<p>Lange wollte Herta Mayer kein Smartphone. „Ich habe ein Telefon zu Hause, das reicht“, hat sie immer gesagt. Aber dann ist ihr Enkel Lukas für ein Jahr nach Australien gegangen. „Ich wollte wissen, wie es ihm geht – und Briefe brauchen so lange.“</p>
<p>Ihre Tochter hat ihr ein Handy geschenkt, und Herta hat einen Kurs im Pensionistenklub besucht. „Am Anfang war alles so klein auf dem Bildschirm! Die Kursleiterin hat mir gezeigt, wie man die Schrift größer macht.“</p>
<p>Heute schreibt Herta jeden Tag Nachrichten. Am liebsten schickt sie Fotos von ihrem Garten. Einmal pro Woche telefoniert sie mit Lukas per Video. „Das Beste: Ich sehe sein Gesicht. Nur die Zeit ist ein Problem – wenn ich frühstücke, geht er schlafen.“</p></div>`,
      items: [
        { n: 6, q: "Früher wollte Herta kein Smartphone, weil …", tr: ["Avant, Herta ne voulait pas de smartphone parce que…", "Taloha i Herta tsy naniry finday satria…"], opts: ["es zu teuer war.", "ihr Telefon zu Hause genug war.", "sie nicht gut sieht."], otr: [["c'était trop cher", "lafo loatra"], ["son téléphone fixe suffisait", "ampy ny telefaona tao an-trano"], ["elle voit mal", "tsy mahita tsara"]], a: "b", exp: { mg: "« Ich habe ein Telefon zu Hause, das reicht ».", fr: "Son fixe suffisait." } },
        { n: 7, q: "Sie hat dann ein Smartphone bekommen, weil …", tr: ["Elle a eu un smartphone parce que…", "Nahazo finday izy satria…"], opts: ["ihr Enkel im Ausland ist.", "ihre Freundinnen auch eins haben.", "ihr altes Telefon kaputt war."], otr: [["son petit-fils est à l'étranger", "any ivelany ny zafiny"], ["ses amies en ont un", "manana ny namany"], ["son vieux téléphone était cassé", "simba ny telefaona taloha"]], a: "a", exp: { mg: "Lukas any Aostralia.", fr: "Lukas est en Australie." } },
        { n: 8, q: "Das Handy hat sie von …", tr: ["Le portable vient de…", "Avy amin'iza ny finday?"], opts: ["ihrem Enkel.", "ihrer Tochter.", "der Kursleiterin."], otr: [["son petit-fils", "zafiny"], ["sa fille", "zanany vavy"], ["la formatrice", "mpampianatra"]], a: "b", exp: { mg: "« Ihre Tochter hat ihr ein Handy geschenkt ».", fr: "De sa fille." } },
        { n: 9, q: "Am Anfang war das Problem, dass …", tr: ["Au début, le problème était que…", "Tamin'ny voalohany, ny olana dia…"], opts: ["die Schrift zu klein war.", "das Handy zu schwer war.", "sie kein Internet hatte."], otr: [["l'écriture était trop petite", "kely loatra ny soratra"], ["le portable était lourd", "mavesatra"], ["elle n'avait pas Internet", "tsy nisy Internet"]], a: "a", exp: { mg: "« alles so klein auf dem Bildschirm ».", fr: "Tout était trop petit." } },
        { n: 10, q: "Was ist beim Telefonieren mit Lukas schwierig?", tr: ["Qu'est-ce qui est difficile quand elle appelle Lukas ?", "Inona no sarotra rehefa miresaka amin'i Lukas?"], opts: ["Die Verbindung.", "Der Zeitunterschied.", "Die Sprache."], otr: [["la connexion", "fifandraisana"], ["le décalage horaire", "fahasamihafan'ny ora"], ["la langue", "fiteny"]], a: "b", exp: { mg: "« wenn ich frühstücke, geht er schlafen ».", fr: "Le décalage horaire." } }
      ] }
  ] },

  hoeren: { temps: 15, teile: [
    { id: "H1", nom: "Aufgabe 1", ecoutes: 1, type: "multi", points: 10, lecture: 30,
      consigne: "Sie hören zwei verschiedene Texte mit dem gleichen Inhalt. Hören Sie gut zu und markieren Sie die Antworten. Es gibt vier richtige Antworten. Sie hören die Texte ein Mal.",
      clips: [{ id: "oa2m5-h1", titre: "Verkehrsinformation", script: [
        { s: "m", n: "Radio", t: "Achtung Autofahrer: Auf der Westautobahn bei Linz gibt es nach einem Unfall zwölf Kilometer Stau. Fahren Sie bitte über die Bundesstraße. Die Polizei rechnet mit Problemen bis etwa achtzehn Uhr." },
        { s: "f", n: "Frau", t: "Hast du die Verkehrsnachrichten gehört?" },
        { s: "m2", n: "Mann", t: "Ja, Stau auf der Westautobahn, zwölf Kilometer. Es gab einen Unfall." },
        { s: "f", n: "Frau", t: "Und was sollen wir machen?" },
        { s: "m2", n: "Mann", t: "Über die Bundesstraße fahren. Bis achtzehn Uhr wird es schwierig bleiben." }],
        items: [{ n: 1, q: "Die Verkehrsinformation:", tr: ["L'info trafic :", "Ny vaovao momba ny fifamoivoizana:"], hint: "Mariho valiny 4 · Coche 4 réponses", opts: ["Unfall", "Baustelle", "12 Kilometer Stau", "20 Kilometer Stau", "Bundesstraße nehmen", "Zug nehmen", "bis 18 Uhr", "bis 20 Uhr"], a: ["a", "c", "e", "g"], exp: { mg: "Lozam-pifamoivoizana, 12 km, Bundesstraße, hatramin'ny 18 ora.", fr: "Accident, 12 km, route nationale, jusqu'à 18 h." } }] }] },
    { id: "H2", nom: "Aufgabe 2", ecoutes: 2, type: "fill", points: 10, lecture: 30,
      consigne: "Sie hören folgende Nachricht. Hören Sie gut zu und schreiben Sie die wichtigsten Informationen auf das Notizblatt. Sie hören den Text zwei Mal.",
      contexte: "Notizen · Handy-Reparatur",
      xtr: ["Notes · Réparation de portable", "Naoty · Fanamboarana finday"],
      clips: [{ id: "oa2m5-h2", titre: "Nachricht", script: [{ s: "m", n: "Handyshop", t: "Grüß Gott, hier ist der Handyshop Mobilfix in der Mariahilfer Straße. Ihr Handy ist fertig. Wir haben das Display und den Akku getauscht. Das kostet zusammen hundertzwanzig Euro. Sie können das Handy ab morgen, zehn Uhr, abholen. Bitte bringen Sie den Abholschein mit. Wir haben bis neunzehn Uhr geöffnet, am Samstag nur bis vierzehn Uhr." }],
        items: [
          { n: 2, label: "Repariert: Display und", ph: "Was?", a: ["Akku", "den Akku", "Batterie"], exp: { mg: "« das Display und den Akku ».", fr: "La batterie." } },
          { n: 3, label: "Preis:", ph: "€", a: ["120", "120 €", "120 Euro", "hundertzwanzig"], exp: { mg: "« hundertzwanzig Euro ».", fr: "120 €." } },
          { n: 4, label: "Abholen ab:", ph: "Wann?", a: ["morgen 10 Uhr", "morgen", "morgen, 10 Uhr", "morgen um 10", "ab morgen 10 Uhr"], exp: { mg: "« ab morgen, zehn Uhr ».", fr: "Demain 10 h." } },
          { n: 5, label: "Mitbringen:", ph: "Was?", a: ["Abholschein", "den Abholschein"], exp: { mg: "« den Abholschein » = tapakila fakana.", fr: "Le bon de retrait." } },
          { n: 6, label: "Samstag offen bis:", ph: "… Uhr", a: ["14", "14 Uhr", "14.00", "14:00", "vierzehn Uhr", "2 Uhr"], exp: { mg: "« am Samstag nur bis vierzehn Uhr ».", fr: "Samedi jusqu'à 14 h." } }
        ] }] },
    { id: "H3", nom: "Aufgabe 3", ecoutes: 1, type: "multi", points: 10, lecture: 30,
      consigne: "Sie hören ein Interview, bei dem fünf Personen befragt werden. Kreuzen Sie in der Liste die richtigen Antworten an. Pro Person sind mehrere Antworten möglich. Sie hören die Texte ein Mal.",
      contexte: "Frage: Wie bewegen Sie sich in der Stadt?",
      xtr: ["Question : comment vous déplacez-vous en ville ?", "Fanontaniana: ahoana no ifamoivoizanao ao an-tanàna?"],
      clips: [{ id: "oa2m5-h3", titre: "Interview", script: [
        { s: "m", n: "1. Sprecher", t: "Ich fahre fast immer mit der U-Bahn. Nur am Sonntag gehe ich zu Fuß in den Park." },
        { s: "f", n: "2. Sprecherin", t: "Mit dem Fahrrad! Das ist schnell und ich brauche keinen Parkplatz." },
        { s: "m2", n: "3. Sprecher", t: "Ich brauche das Auto für die Arbeit, aber am Wochenende nehme ich die Straßenbahn." },
        { s: "f2", n: "4. Sprecherin", t: "Ich gehe zu Fuß, die Stadt ist ja klein. Manchmal nehme ich einen E-Scooter." },
        { s: "m", n: "5. Sprecher", t: "Bus oder Straßenbahn, ich habe eine Jahreskarte." }],
        items: [
          { n: 7, q: "1. Sprecher", opts: ["öffentliche Verkehrsmittel", "Auto", "Fahrrad", "zu Fuß", "E-Scooter"], a: ["a", "d"], exp: { mg: "U-Bahn + an-tongotra alahady.", fr: "Métro + à pied." } },
          { n: 8, q: "2. Sprecherin", opts: ["öffentliche Verkehrsmittel", "Auto", "Fahrrad", "zu Fuß", "E-Scooter"], a: ["c"], exp: { mg: "Bisikileta.", fr: "Vélo." } },
          { n: 9, q: "3. Sprecher", opts: ["öffentliche Verkehrsmittel", "Auto", "Fahrrad", "zu Fuß", "E-Scooter"], a: ["a", "b"], exp: { mg: "Fiara + tram.", fr: "Voiture + tram." } },
          { n: 10, q: "4. Sprecherin", opts: ["öffentliche Verkehrsmittel", "Auto", "Fahrrad", "zu Fuß", "E-Scooter"], a: ["d", "e"], exp: { mg: "An-tongotra + E-Scooter.", fr: "À pied + trottinette." } },
          { n: 11, q: "5. Sprecher", opts: ["öffentliche Verkehrsmittel", "Auto", "Fahrrad", "zu Fuß", "E-Scooter"], a: ["a"], exp: { mg: "Bus na tram.", fr: "Transports publics." } }
        ] }] }
  ] },

  schreiben: { temps: 30, aufgaben: [
    { id: "S1", nom: "Schreibaufgabe", temps: 30, mots: 50, points: 15, type: "E-Mail (informell)",
      consigne: `<p>Sie bekommen von Ihrem Freund Jakob folgendes E-Mail:</p><div class="guest"><div class="guest-h">Von: jakob.s@gmx.at · Betreff: Besuch in Wien</div><div class="guest-b">Hallo!<br>Ich komme nächsten Monat nach Wien. Wie komme ich vom Flughafen zu dir? Was kostet das? Was kann man in Wien am Abend machen? Und brauche ich ein Auto?<br>Bis bald, Jakob</div></div><p>Schreiben Sie Jakob eine Antwort. Beantworten Sie alle Fragen. Schreiben Sie ca. 50 Wörter.</p>`,
      ctr: ["Répondez à Jakob (~50 mots) : comment venir de l'aéroport, le prix, que faire le soir, besoin d'une voiture ?", "Valio i Jakob (~50 teny): ahoana no avy amin'ny seranam-piaramanidina, ohatrinona, inona no atao hariva, mila fiara ve?"],
      checklist: ["Lieber Jakob,", "Avy amin'ny seranana: inona no fitaterana?", "Ohatrinona?", "Hariva: inona no atao?", "Mila fiara ve?", "Gruß + anarana", "~50 teny"],
      redemittel: ["Lieber Jakob,", "schön, dass du kommst!", "Vom Flughafen nimmst du am besten …", "Das kostet ungefähr …", "Am Abend können wir …", "Ein Auto brauchst du nicht, weil …", "Bis bald"],
      modele: `Lieber Jakob,

schön, dass du kommst! Vom Flughafen nimmst du am besten die S-Bahn bis Wien Mitte, dann die U4 bis Pilgramgasse. Das kostet ungefähr fünf Euro. Am Abend können wir in ein Heuriger gehen oder ins Theater. Ein Auto brauchst du nicht, die U-Bahn fährt überall hin.

Bis bald
Tsiry` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voavaly avokoa ny fanontaniana? · Toutes les questions ?" },
    { nom: "Kohärenz", desc: "Fehezanteny mifandray · Enchaînement" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" }
  ] },

  sprechen: { preparation: 10, teile: [
    { id: "P1", nom: "Aufgabe 1 – Sich vorstellen", mg: "Mampahafantatra ny tena", duree: 3, mode: "present", em: "🙋",
      consigne: `<p>Ihre Gesprächspartnerin / Ihr Gesprächspartner möchte Sie gerne kennenlernen. Sie erhalten ein Blatt mit 6 Fragen. Wählen Sie 5 Themen aus und sprechen Sie darüber (zu jedem Thema ein paar Sätze).</p>`,
      themes: [{ titre: "Sich vorstellen", points: [
        { de: "Wo wohnen Sie? Wie ist die Stadt?", mg: "Aiza no mipetraka? Ahoana ny tanàna?", fr: "Où habitez-vous ? La ville ?" },
        { de: "Wie kommen Sie zur Arbeit / zum Kurs?", mg: "Ahoana no andehananao any am-piasana / an-tsekoly?", fr: "Comment allez-vous au travail ?" },
        { de: "Wofür benutzen Sie Ihr Handy?", mg: "Inona no ampiasanao ny findainao?", fr: "À quoi sert votre portable ?" },
        { de: "Was machen Sie am Abend?", mg: "Inona no ataonao hariva?", fr: "Le soir ?" },
        { de: "Was möchten Sie in Zukunft machen?", mg: "Inona no tianao hatao amin'ny ho avy?", fr: "Vos projets ?" } ],
        modele: `Ich wohne in Antananarivo. Die Stadt ist groß und lebendig, aber es gibt sehr viel Verkehr.
Zur Arbeit fahre ich mit dem Taxi-Be, das ist ein Minibus. Die Fahrt dauert oft eine Stunde, weil es Stau gibt.
Mein Handy benutze ich für alles: WhatsApp, Musik, Mobile Money und um Deutsch zu lernen.
Am Abend koche ich mit meiner Familie, und danach lerne ich noch eine Stunde Deutsch.
In Zukunft möchte ich in Österreich eine Ausbildung als Elektriker machen.` }],
      redemittel: [["Mampahafantatra · Se présenter", ["Ich wohne in … Die Stadt ist …", "Zur Arbeit fahre ich mit …", "Mein Handy benutze ich für …", "Am Abend …", "In Zukunft möchte ich …"]]] },
    { id: "P2", nom: "Aufgabe 2 – Gemeinsam eine Aufgabe lösen", mg: "Mikasa zavatra miaraka", duree: 4, mode: "dialog", em: "🤝",
      consigne: `<p>Ein Freund von Ihnen kommt zum ersten Mal in Ihre Stadt. Sie und Ihre Gesprächspartnerin / Ihr Gesprächspartner planen einen Tag mit ihm. Besprechen Sie die Fragen.</p><div class="plan"><b>Ein Tag in der Stadt</b><ul><li>Was ansehen?</li><li>Wie fahren? (zu Fuß, Rad, U-Bahn …)</li><li>Wo essen?</li><li>Was am Abend?</li></ul></div>`,
      ctr: ["Un ami vient pour la première fois : planifiez une journée en ville (visites, transports, repas, soirée).", "Namana iray tonga voalohany: mikasà andro iray ao an-tanàna (fitsidihana, fitaterana, sakafo, hariva)."],
      partenaire: [
        { id: "oa2m5-p2-1", s: "m", t: "Also, Pierre kommt am Samstag. Was zeigen wir ihm zuerst?", aide: ["Zuerst den Stephansdom, der ist im Zentrum.", "Wie wäre es mit Schloss Schönbrunn?"] },
        { id: "oa2m5-p2-2", s: "m", t: "Gute Idee. Wie fahren wir? Mit der U-Bahn oder mit dem Rad?", aide: ["Mit dem Rad – das Wetter soll schön sein.", "Mit der U-Bahn, das ist schneller."] },
        { id: "oa2m5-p2-3", s: "m", t: "Okay. Und wo essen wir zu Mittag? Pierre möchte bestimmt etwas Typisches.", aide: ["Wir gehen in ein Gasthaus und essen Schnitzel.", "Am Naschmarkt gibt es viele Restaurants."] },
        { id: "oa2m5-p2-4", s: "m", t: "Und am Abend? Er ist bestimmt müde.", aide: ["Wir können zum Heurigen gehen, das ist gemütlich.", "Wir kochen bei mir und schauen einen Film."] },
        { id: "oa2m5-p2-5", s: "m", t: "Perfekt. Kannst du alles kurz zusammenfassen?", aide: ["Also: Zuerst …, dann …, am Abend …", "Wir treffen uns um … am …"] }
      ],
      redemittel: [["Manolotra · Proposer", ["Zuerst …, dann …", "Wie wäre es mit …?", "Wir können …"]], ["Mamaly · Réagir", ["Gute Idee!", "Das ist zu weit / teuer.", "Okay, einverstanden."]], ["Mamarana · Conclure", ["Also: …", "Wir treffen uns um … am …"]]],
      modele: `A: Was zeigen wir Pierre zuerst?
B: Den Stephansdom, der ist im Zentrum.
A: Wie fahren wir? U-Bahn oder Rad?
B: Mit dem Rad, das Wetter soll schön sein.
A: Wo essen wir zu Mittag?
B: In einem Gasthaus, Pierre soll Schnitzel probieren.
A: Und am Abend?
B: Wir gehen zum Heurigen, das ist gemütlich.
A: Also: Stephansdom, Mittagessen im Gasthaus, abends Heuriger.
B: Genau! Wir treffen uns um zehn am Stephansplatz.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Tontosa ny asa · Tâche réalisée" },
    { nom: "Interaktion", desc: "Mamaly · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "der Ersatz", fr: "le remplacement", mg: "solony", ex: "Busse als Ersatz." },
    { de: "der Pensionistenklub", fr: "le club de retraités (AT)", mg: "klioban'ny efa misotro ronono", ex: "Der Kurs ist im Pensionistenklub." },
    { de: "verschicken", fr: "envoyer", mg: "mandefa", ex: "Wie verschickt man Fotos?" },
    { de: "der Sturz", fr: "la chute", mg: "fianjerana", ex: "Viele Stürze mit E-Scootern." },
    { de: "der Roller", fr: "la trottinette", mg: "trottinette", ex: "Elektrische Roller sind gefährlich." },
    { de: "reichen", fr: "suffire", mg: "ampy", ex: "Das Telefon zu Hause reicht." },
    { de: "der Bildschirm", fr: "l'écran", mg: "efijery", ex: "Alles war klein auf dem Bildschirm." },
    { de: "die Schrift", fr: "l'écriture, la police", mg: "soratra", ex: "Man kann die Schrift größer machen." },
    { de: "der Enkel", fr: "le petit-fils", mg: "zafy", ex: "Mein Enkel lebt in Australien." },
    { de: "die Autobahn", fr: "l'autoroute", mg: "lalambe haingana", ex: "Stau auf der Autobahn." },
    { de: "rechnen mit", fr: "s'attendre à", mg: "manantena", ex: "Die Polizei rechnet mit Problemen." },
    { de: "tauschen", fr: "échanger, remplacer", mg: "manova", ex: "Wir haben den Akku getauscht." },
    { de: "der Abholschein", fr: "le bon de retrait", mg: "tapakila fakana", ex: "Bringen Sie den Abholschein mit." },
    { de: "öffentliche Verkehrsmittel", fr: "les transports en commun", mg: "fitaterana iombonana", ex: "Ich nutze öffentliche Verkehrsmittel." },
    { de: "die Jahreskarte", fr: "l'abonnement annuel", mg: "abonnement isan-taona", ex: "Ich habe eine Jahreskarte." },
    { de: "der Heurige", fr: "taverne viticole (AT)", mg: "trano fisotroana divay (Aotrisy)", ex: "Am Abend gehen wir zum Heurigen." },
    { de: "lebendig", fr: "animé", mg: "velona / mavitrika", ex: "Die Stadt ist lebendig." },
    { de: "zuerst", fr: "d'abord", mg: "aloha", ex: "Zuerst gehen wir zum Dom." },
    { de: "gemütlich", fr: "agréable, cosy", mg: "mahafinaritra", ex: "Der Heurige ist gemütlich." },
    { de: "die Zukunft", fr: "l'avenir", mg: "ho avy", ex: "In Zukunft möchte ich in Österreich arbeiten." }
  ]
});
})();
