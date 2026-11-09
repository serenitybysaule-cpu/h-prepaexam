/* ÖSD Zertifikat A2 — Modellsatz 2 — textes originaux H Conseil & Formation */
(function(){
window.POOLS.OA2.sets.push({
  id: "oa2m2", titre: "Modellsatz 2", theme: "Asa, fianarana, fahasalamana",
  lesen: { temps: 30, teile: [
    { id: "L1", nom: "Aufgabe 1", type: "match", points: 15, zero: false, layout: "choixFirst",
      consigne: "Lesen Sie die 10 Überschriften und die 5 Texte. Suchen Sie dann zu jedem Text (1 – 5) die passende Überschrift (A – J). Pro Text gibt es nur eine richtige Lösung.",
      choixTitre: "Überschriften",
      choix: { A: "Mehr Lehrstellen in der Gastronomie", B: "Krankenhaus sucht Pflegepersonal aus dem Ausland", C: "Gratis-Grippeimpfung für Senioren", D: "Neue Abendschule für Erwachsene", E: "Weniger Arbeitslose als im Vorjahr", F: "Fahrradwerkstatt für Jugendliche", G: "Apotheke bietet Nachtdienst an", H: "Firmen suchen Lehrlinge – aber niemand kommt", I: "Sprachkurse direkt am Arbeitsplatz", J: "Rauchen in Lokalen bald verboten" },
      texte: `<div class="ads">
<div class="ad"><span class="l">1</span>Das Landeskrankenhaus Salzburg möchte 40 neue Pflegerinnen und Pfleger aus Ländern wie den Philippinen, Indien und Madagaskar einstellen. Sie bekommen vorher einen Deutschkurs.</div>
<div class="ad"><span class="l">2</span>Ab Oktober bietet die Volkshochschule Kurse am Abend an: Wer keine Matura hat, kann sie hier in zwei Jahren nachholen – neben der Arbeit.</div>
<div class="ad"><span class="l">3</span>Viele Betriebe in Tirol finden keine jungen Leute für eine Ausbildung. Besonders Bäckereien und Metzgereien haben große Probleme.</div>
<div class="ad"><span class="l">4</span>In einer Fabrik in Linz lernen die Mitarbeiter jetzt zweimal pro Woche Deutsch – während der Arbeitszeit und im Firmengebäude.</div>
<div class="ad"><span class="l">5</span>Menschen über 65 können sich ab November in allen Arztpraxen kostenlos gegen Grippe impfen lassen.</div></div>`,
      items: [
        { n: 1, q: "Text 1", a: "B", exp: { mg: "Mpitsabo avy any ivelany → B.", fr: "Soignants de l'étranger → B." } },
        { n: 2, q: "Text 2", a: "D", exp: { mg: "« Kurse am Abend … Matura nachholen » → sekoly hariva.", fr: "École du soir → D." } },
        { n: 3, q: "Text 3", a: "H", exp: { mg: "Tsy misy tanora → H. Fandrika A: « mehr Lehrstellen » tsy marina.", fr: "Personne ne vient → H (pas A)." } },
        { n: 4, q: "Text 4", a: "I", exp: { mg: "Fianarana alemana ao am-piasana.", fr: "Cours au travail → I." } },
        { n: 5, q: "Text 5", a: "C", exp: { mg: "« über 65 … kostenlos … impfen » → vaksiny maimaim-poana.", fr: "Vaccin gratuit seniors → C." } }
      ] },
    { id: "L2", nom: "Aufgabe 2", type: "mc", points: 10,
      consigne: "Lesen Sie zuerst den Text und lösen Sie dann die 5 Aufgaben. Markieren Sie die richtige Antwort. Für jede Aufgabe gibt es nur eine richtige Lösung.",
      texte: `<div class="press"><h3>Vom Hobby zum Beruf</h3><p class="lead">Martin Gruber (34) hat seine Arbeit im Büro aufgegeben und ist jetzt Bäcker.</p>
<p>Zehn Jahre lang hat Martin Gruber in einer Versicherung in Graz gearbeitet. „Das Geld war gut, aber ich war nicht glücklich. Ich saß den ganzen Tag vor dem Computer“, erzählt er. Am Wochenende hat er immer für Freunde Brot gebacken – das war sein Hobby.</p>
<p>Mit 31 hat er dann eine Lehre als Bäcker begonnen. „Die anderen Lehrlinge waren sechzehn! Am Anfang war das komisch.“ Weil er schon Erfahrung hatte, war die Lehre für ihn nur zwei statt drei Jahre lang.</p>
<p>Heute hat Martin eine kleine Bäckerei in der Altstadt. Er steht jeden Tag um drei Uhr auf. „Das ist das Schwierigste. Aber um zwölf Uhr bin ich fertig und habe den ganzen Nachmittag für meine Kinder.“ Sein Bestseller ist ein Brot mit Kürbiskernen.</p></div>`,
      items: [
        { n: 6, q: "Früher hat Martin …", tr: ["Avant, Martin…", "Taloha i Martin dia…"], opts: ["in einer Bäckerei gearbeitet.", "in einem Büro gearbeitet.", "als Lehrer gearbeitet."], otr: [["travaillait dans une boulangerie", "niasa tao amin'ny fanaovam-mofo"], ["travaillait dans un bureau", "niasa tao amin'ny birao"], ["était professeur", "mpampianatra"]], a: "b", exp: { mg: "« in einer Versicherung … vor dem Computer ».", fr: "Dans une assurance, au bureau." } },
        { n: 7, q: "Er hat seinen Beruf gewechselt, weil …", tr: ["Il a changé de métier parce que…", "Niova asa izy satria…"], opts: ["er zu wenig verdient hat.", "er nicht glücklich war.", "die Firma geschlossen hat."], otr: [["il gagnait trop peu", "kely loatra ny karama"], ["il n'était pas heureux", "tsy faly izy"], ["l'entreprise a fermé", "nikatona ny orinasa"]], a: "b", exp: { mg: "« Das Geld war gut, aber ich war nicht glücklich ».", fr: "Il n'était pas heureux." } },
        { n: 8, q: "Die Lehre war für Martin kürzer, weil …", tr: ["L'apprentissage était plus court parce que…", "Fohy kokoa ny fiofanana satria…"], opts: ["er schon Erfahrung hatte.", "er schon 31 war.", "er sehr viel gelernt hat."], otr: [["il avait déjà de l'expérience", "efa nanana traikefa"], ["il avait déjà 31 ans", "31 taona izy"], ["il a beaucoup étudié", "nianatra be"]], a: "a", exp: { mg: "« Weil er schon Erfahrung hatte ».", fr: "Grâce à son expérience." } },
        { n: 9, q: "Was findet Martin am schwierigsten?", tr: ["Qu'est-ce que Martin trouve le plus difficile ?", "Inona no tena sarotra ho an'i Martin?"], opts: ["Früh aufstehen.", "Mit Jugendlichen lernen.", "Brot verkaufen."], otr: [["se lever tôt", "mifoha maraina be"], ["apprendre avec des jeunes", "mianatra amin'ny tanora"], ["vendre du pain", "mivarotra mofo"]], a: "a", exp: { mg: "« um drei Uhr auf. Das ist das Schwierigste ».", fr: "Se lever à 3 h." } },
        { n: 10, q: "Am Nachmittag …", tr: ["L'après-midi…", "Amin'ny tolakandro…"], opts: ["arbeitet er im Geschäft.", "hat er Zeit für die Familie.", "backt er neues Brot."], otr: [["il travaille au magasin", "miasa any amin'ny fivarotana"], ["il a du temps pour sa famille", "manana fotoana ho an'ny fianakaviana"], ["il fait du pain", "manao mofo"]], a: "b", exp: { mg: "« den ganzen Nachmittag für meine Kinder ».", fr: "Pour ses enfants." } }
      ] }
  ] },

  hoeren: { temps: 15, teile: [
    { id: "H1", nom: "Aufgabe 1", ecoutes: 1, type: "multi", points: 10, lecture: 30,
      consigne: "Sie hören zwei verschiedene Texte mit dem gleichen Inhalt. Hören Sie gut zu und markieren Sie die Antworten. Es gibt vier richtige Antworten. Sie hören die Texte ein Mal.",
      clips: [{ id: "oa2m2-h1", titre: "Neuer Kurs in der VHS", script: [
        { s: "f", n: "Radio", t: "Die Volkshochschule bietet ab März einen neuen Kochkurs an: „Gesund essen mit wenig Geld“. Der Kurs ist am Dienstagabend, kostet fünfzig Euro und dauert sechs Wochen. Anmeldung im Internet." },
        { s: "m", n: "Peter", t: "Hast du von dem neuen Kochkurs gehört?" },
        { s: "f2", n: "Sandra", t: "Ja, „Gesund essen mit wenig Geld“. Ab März, immer dienstags am Abend." },
        { s: "m", n: "Peter", t: "Was kostet er?" },
        { s: "f2", n: "Sandra", t: "Fünfzig Euro für sechs Wochen. Anmelden muss man sich online, nicht am Telefon." }],
        items: [{ n: 1, q: "Der neue Kurs:", tr: ["Le nouveau cours :", "Ny fampianarana vaovao:"], hint: "Mariho valiny 4 · Coche 4 réponses", opts: ["Kochkurs", "Sprachkurs", "Dienstagabend", "Samstagvormittag", "50 Euro", "15 Euro", "Anmeldung am Telefon", "Anmeldung im Internet"], a: ["a", "c", "e", "h"], exp: { mg: "Kochkurs, talata hariva, 50 €, an-tserasera.", fr: "Cours de cuisine, mardi soir, 50 €, inscription en ligne." } }] }] },
    { id: "H2", nom: "Aufgabe 2", ecoutes: 2, type: "fill", points: 10, lecture: 30,
      consigne: "Sie hören folgende Nachricht. Hören Sie gut zu und schreiben Sie die wichtigsten Informationen auf das Notizblatt. Sie hören den Text zwei Mal.",
      contexte: "Notizen · Arbeitsbeginn",
      xtr: ["Notes · Début du travail", "Naoty · Fanombohan'ny asa"],
      clips: [{ id: "oa2m2-h2", titre: "Nachricht", script: [{ s: "m", n: "Herr Pichler", t: "Grüß Gott, hier spricht Pichler vom Hotel Alpenhof. Ich freue mich, dass Sie bei uns anfangen. Ihr erster Arbeitstag ist Montag, der dritte Juni. Bitte kommen Sie um sechs Uhr dreißig zum Personaleingang hinter dem Hotel. Ihre Arbeitskleidung bekommen Sie von Frau Wieser. Bitte bringen Sie schwarze Schuhe mit. Bei Fragen rufen Sie mich an: null sechs sieben sechs, acht zwei vier eins fünf neun. Bis Montag!" }],
        items: [
          { n: 2, label: "Erster Arbeitstag:", ph: "Datum", a: ["3. Juni", "3 Juni", "3.6.", "03.06.", "Montag, 3. Juni", "dritter Juni"], exp: { mg: "« Montag, der dritte Juni ».", fr: "Le 3 juin." } },
          { n: 3, label: "Uhrzeit:", ph: "… Uhr", a: ["6.30", "6:30", "6.30 Uhr", "6:30 Uhr", "halb sieben"], exp: { mg: "6 ora sy sasany.", fr: "6 h 30." } },
          { n: 4, label: "Eingang:", ph: "Wo?", a: ["Personaleingang", "hinter dem Hotel", "Personaleingang hinter dem Hotel"], exp: { mg: "« zum Personaleingang hinter dem Hotel ».", fr: "Entrée du personnel." } },
          { n: 5, label: "Mitbringen:", ph: "Was?", a: ["schwarze Schuhe", "Schuhe"], exp: { mg: "Kiraro mainty.", fr: "Des chaussures noires." } },
          { n: 6, label: "Telefon: 0676 /", ph: "Nummer", a: ["824159", "82 41 59", "824 159"], exp: { mg: "8-2-4-1-5-9.", fr: "8-2-4-1-5-9." } }
        ] }] },
    { id: "H3", nom: "Aufgabe 3", ecoutes: 1, type: "multi", points: 10, lecture: 30,
      consigne: "Sie hören ein Interview, bei dem fünf Personen befragt werden. Kreuzen Sie in der Liste die richtigen Antworten an. Pro Person sind mehrere Antworten möglich. Sie hören die Texte ein Mal.",
      contexte: "Frage: Was machen Sie für Ihre Gesundheit?",
      xtr: ["Question : que faites-vous pour votre santé ?", "Fanontaniana: inona no ataonao ho an'ny fahasalamanao?"],
      clips: [{ id: "oa2m2-h3", titre: "Interview", script: [
        { s: "m", n: "1. Sprecher", t: "Ich gehe jeden Morgen laufen, eine halbe Stunde. Und ich trinke viel Wasser." },
        { s: "f", n: "2. Sprecherin", t: "Ich esse kein Fleisch mehr, nur Gemüse und Obst. Sport mache ich leider kaum." },
        { s: "m2", n: "3. Sprecher", t: "Ich schlafe genug, mindestens acht Stunden. Das ist das Wichtigste für mich." },
        { s: "f2", n: "4. Sprecherin", t: "Ich fahre mit dem Rad zur Arbeit, und am Wochenende gehe ich in die Berge wandern. Außerdem esse ich viel Salat." },
        { s: "m", n: "5. Sprecher", t: "Ehrlich gesagt mache ich gar nichts. Ich arbeite zu viel." }],
        items: [
          { n: 7, q: "1. Sprecher", opts: ["Sport", "gesundes Essen", "viel schlafen", "viel trinken", "nichts"], a: ["a", "d"], exp: { mg: "Mihazakazaka + rano be.", fr: "Course + beaucoup d'eau." } },
          { n: 8, q: "2. Sprecherin", opts: ["Sport", "gesundes Essen", "viel schlafen", "viel trinken", "nichts"], a: ["b"], exp: { mg: "Legioma sy voankazo ihany.", fr: "Alimentation saine." } },
          { n: 9, q: "3. Sprecher", opts: ["Sport", "gesundes Essen", "viel schlafen", "viel trinken", "nichts"], a: ["c"], exp: { mg: "Ora 8 matory.", fr: "Dormir 8 h." } },
          { n: 10, q: "4. Sprecherin", opts: ["Sport", "gesundes Essen", "viel schlafen", "viel trinken", "nichts"], a: ["a", "b"], exp: { mg: "Bisikileta, mandeha an-tendrombohitra, salady.", fr: "Vélo, randonnée, salade." } },
          { n: 11, q: "5. Sprecher", opts: ["Sport", "gesundes Essen", "viel schlafen", "viel trinken", "nichts"], a: ["e"], exp: { mg: "« gar nichts ».", fr: "Rien." } }
        ] }] }
  ] },

  schreiben: { temps: 30, aufgaben: [
    { id: "S1", nom: "Schreibaufgabe", temps: 30, mots: 50, points: 15, type: "E-Mail (informell)",
      consigne: `<p>Sie bekommen von Ihrer Freundin Lisa folgendes E-Mail:</p><div class="guest"><div class="guest-h">Von: lisa.k@gmx.at · Betreff: Dein neuer Job</div><div class="guest-b">Hallo!<br>Deine Mutter hat mir erzählt, dass du eine neue Arbeit hast! Wo arbeitest du jetzt? Was machst du genau? Wie sind deine Kollegen? Und hast du am Wochenende frei? Dann können wir uns treffen!<br>Bussi, Lisa</div></div><p>Schreiben Sie Lisa eine Antwort. Beantworten Sie alle Fragen. Schreiben Sie ca. 50 Wörter.</p>`,
      ctr: ["Répondez à Lisa (~50 mots) : où vous travaillez, ce que vous faites, les collègues, si vous êtes libre le week-end.", "Valio i Lisa (~50 teny): aiza ny asanao, inona no ataonao, ny mpiara-miasa, malalaka ve amin'ny faran'ny herinandro."],
      checklist: ["Liebe Lisa,", "Aiza no miasa", "Inona no ataonao", "Ny mpiara-miasa", "Faran'ny herinandro + fihaonana", "Gruß + anarana", "~50 teny"],
      redemittel: ["Liebe Lisa,", "danke für dein E-Mail!", "Seit … arbeite ich bei / in …", "Ich bin für … zuständig / Ich mache …", "Meine Kollegen sind …", "Am Samstag habe ich frei. Treffen wir uns …?", "Liebe Grüße"],
      modele: `Liebe Lisa,

danke für dein E-Mail! Ja, seit April arbeite ich in einem großen Hotel in Salzburg. Ich arbeite an der Rezeption und begrüße die Gäste. Meine Kollegen sind sehr nett und helfen mir viel. Am Sonntag habe ich frei. Treffen wir uns um 15 Uhr im Café am Mozartplatz?

Liebe Grüße
Tiana` }
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
        { de: "Wo und mit wem wohnen Sie?", mg: "Aiza ary miaraka amin'iza no mipetraka?", fr: "Où et avec qui habitez-vous ?" },
        { de: "Was haben Sie gelernt / studiert?", mg: "Inona no nianaranao?", fr: "Qu'avez-vous appris / étudié ?" },
        { de: "Was ist Ihr Traumberuf?", mg: "Inona no asa nofinofinao?", fr: "Métier de rêve ?" },
        { de: "Was essen Sie gern?", mg: "Inona no sakafo tianao?", fr: "Qu'aimez-vous manger ?" },
        { de: "Was haben Sie letztes Wochenende gemacht?", mg: "Inona no nataonao tamin'ny faran'ny herinandro lasa?", fr: "Le week-end dernier ?" } ],
        modele: `Ich wohne mit meinen Eltern und meinem kleinen Bruder in Toamasina, in einem Haus nicht weit vom Meer.
Ich habe Betriebswirtschaft an der Universität studiert und habe vor einem Jahr meinen Abschluss gemacht.
Mein Traumberuf ist Hotelmanagerin. Ich möchte gern in Österreich in einem Hotel arbeiten.
Ich esse sehr gern Fisch mit Kokosmilch und Reis – das ist typisch für meine Region.
Letztes Wochenende habe ich mit Freunden einen Ausflug an den Strand gemacht. Abends haben wir gegrillt.` }],
      redemittel: [["Mampahafantatra · Se présenter", ["Ich wohne mit … in …", "Ich habe … studiert / gelernt.", "Mein Traumberuf ist …", "Ich esse sehr gern …", "Letztes Wochenende habe ich … gemacht."]]] },
    { id: "P2", nom: "Aufgabe 2 – Gemeinsam eine Aufgabe lösen", mg: "Mikasa zavatra miaraka", duree: 4, mode: "dialog", em: "🤝",
      consigne: `<p>Eine Kollegin aus Ihrer Firma hat ein Baby bekommen. Sie und Ihre Gesprächspartnerin / Ihr Gesprächspartner möchten für sie ein Geschenk organisieren. Besprechen Sie die Fragen.</p><div class="plan"><b>Geschenk für die Kollegin</b><ul><li>Was schenken? (Kleidung? Spielzeug? Gutschein?)</li><li>Wie viel Geld?</li><li>Wer sammelt das Geld?</li><li>Wann und wie übergeben?</li></ul></div>`,
      ctr: ["Organisez un cadeau pour la naissance du bébé d'une collègue : quoi, combien, qui collecte, quand le remettre.", "Mandamina fanomezana ho an'ny zazakely vao teraka: inona, ohatrinona, iza no manangona vola, rahoviana."],
      partenaire: [
        { id: "oa2m2-p2-1", s: "f", t: "Hast du gehört? Sabine hat ihr Baby bekommen, einen Sohn! Wir sollten ihr etwas schenken. Was meinst du?", aide: ["Ja, gute Idee! Vielleicht Babykleidung?", "Wie wäre es mit einem Gutschein?"] },
        { id: "oa2m2-p2-2", s: "f", t: "Kleidung ist schwierig, wir wissen die Größe nicht. Was hältst du von einem Gutschein für ein Babygeschäft?", aide: ["Das finde ich gut.", "Ja, dann kann sie selbst aussuchen."] },
        { id: "oa2m2-p2-3", s: "f", t: "Und wie viel soll jeder geben? Zehn Euro?", aide: ["Zehn Euro ist gut. Wir sind zwanzig Kollegen.", "Lieber fünf Euro, nicht alle haben viel Geld."] },
        { id: "oa2m2-p2-4", s: "f", t: "Wer sammelt das Geld? Ich habe nächste Woche Urlaub.", aide: ["Kein Problem, ich mache das.", "Ich sammle das Geld bis Freitag."] },
        { id: "oa2m2-p2-5", s: "f", t: "Super. Und wann bringen wir ihr das Geschenk? Fassen wir zusammen?", aide: ["Wir besuchen sie am Sonntag zu Hause.", "Also: Wir kaufen einen Gutschein, jeder gibt …"] }
      ],
      redemittel: [["Manolotra · Proposer", ["Wie wäre es mit …?", "Was hältst du von …?", "Ich schlage vor, …"]], ["Mamaly · Réagir", ["Das finde ich gut.", "Das ist schwierig, weil …", "Einverstanden."]], ["Mamarana · Conclure", ["Also: …", "Du kümmerst dich um …, ich um …"]]],
      modele: `A: Sabine hat ihr Baby bekommen! Wir sollten ihr etwas schenken.
B: Gute Idee. Vielleicht Babykleidung?
A: Kleidung ist schwierig, wir wissen die Größe nicht. Was hältst du von einem Gutschein?
B: Das finde ich gut, dann kann sie selbst aussuchen.
A: Wie viel soll jeder geben? Zehn Euro?
B: Lieber fünf, nicht alle haben viel Geld. Wir sind zwanzig, also hundert Euro.
A: Wer sammelt? Ich habe Urlaub.
B: Kein Problem, ich sammle bis Freitag.
A: Und wann bringen wir es ihr?
B: Wir besuchen sie am Sonntag. Also: Gutschein, fünf Euro pro Person, Besuch am Sonntag.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Tontosa ny asa · Tâche réalisée" },
    { nom: "Interaktion", desc: "Mamaly · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "die Lehrstelle", fr: "la place d'apprentissage", mg: "toerana fiofanana", ex: "Es gibt viele Lehrstellen." },
    { de: "der Lehrling", fr: "l'apprenti", mg: "mpianatra asa", ex: "Die Firma sucht Lehrlinge." },
    { de: "einstellen", fr: "embaucher", mg: "mandray mpiasa", ex: "Das Krankenhaus stellt 40 Pfleger ein." },
    { de: "nachholen", fr: "rattraper", mg: "manonitra", ex: "Man kann die Matura nachholen." },
    { de: "sich impfen lassen", fr: "se faire vacciner", mg: "manao vaksiny", ex: "Senioren können sich impfen lassen." },
    { de: "die Versicherung", fr: "l'assurance", mg: "fiantohana", ex: "Er hat in einer Versicherung gearbeitet." },
    { de: "die Lehre", fr: "l'apprentissage", mg: "fiofanana ara-asa", ex: "Er hat eine Lehre als Bäcker gemacht." },
    { de: "die Erfahrung", fr: "l'expérience", mg: "traikefa", ex: "Er hatte schon Erfahrung." },
    { de: "der Kürbiskern", fr: "la graine de courge", mg: "voan-tsatsaka", ex: "Brot mit Kürbiskernen." },
    { de: "die Anmeldung", fr: "l'inscription", mg: "fisoratana anarana", ex: "Anmeldung im Internet." },
    { de: "der Personaleingang", fr: "l'entrée du personnel", mg: "fidiran'ny mpiasa", ex: "Kommen Sie zum Personaleingang." },
    { de: "die Arbeitskleidung", fr: "la tenue de travail", mg: "akanjo fiasana", ex: "Die Arbeitskleidung bekommen Sie hier." },
    { de: "kaum", fr: "à peine, presque pas", mg: "saika tsy", ex: "Sport mache ich kaum." },
    { de: "zuständig für", fr: "responsable de", mg: "tompon'andraikitra amin'ny", ex: "Ich bin für die Gäste zuständig." },
    { de: "der Traumberuf", fr: "le métier de rêve", mg: "asa nofinofy", ex: "Mein Traumberuf ist Ärztin." },
    { de: "der Abschluss", fr: "le diplôme", mg: "diplaoma famaranana", ex: "Ich habe meinen Abschluss gemacht." },
    { de: "sammeln", fr: "collecter", mg: "manangona", ex: "Ich sammle das Geld." },
    { de: "aussuchen", fr: "choisir", mg: "misafidy", ex: "Sie kann selbst aussuchen." },
    { de: "übergeben", fr: "remettre", mg: "manolotra", ex: "Wann übergeben wir das Geschenk?" },
    { de: "die Volkshochschule (VHS)", fr: "l'université populaire", mg: "sekoly ho an'ny olon-dehibe", ex: "Die VHS bietet Kurse an." }
  ]
});
})();
