/* ÖSD Zertifikat A1 — Modellsatz 4 — textes originaux H Conseil & Formation */
(function(){
const pics = (o) => Object.fromEntries(Object.entries(o).map(([k,[e,t]]) => [k, `<span style="font-size:26px">${e}</span><br>${t}`]));
window.POOLS.OA1.sets.push({
  id: "oa1m4", titre: "Modellsatz 4", theme: "Fialam-boly, toetr'andro, fety",
  lesen: { temps: 25, teile: [
    { id: "L1", nom: "Aufgabe 1", type: "match", points: 10, zero: false, layout: "choixAfter",
      consigne: "Sie suchen verschiedene Dinge in der Zeitung. Finden Sie zu jeder Situation (A – E) die passende Anzeige (Nr. 1 – 6). Achtung: Eine Anzeige ist zu viel.",
      choix: {
        "1": "<b>Skischule Schneeweiß</b><br>Skikurse für Anfänger und Kinder – Dezember bis März.",
        "2": "<b>Chor „Stimmen der Welt“</b><br>Wir suchen neue Sängerinnen und Sänger! Probe: Dienstag 19 Uhr.",
        "3": "<b>Fotokurs am Wochenende</b><br>Schöne Fotos mit dem Handy machen – Samstag 10–16 Uhr.",
        "4": "<b>Partyservice Lecker</b><br>Essen für Ihr Fest – ab 10 Personen.",
        "5": "<b>Wanderclub Alpenrose</b><br>Gemeinsam wandern – jeden zweiten Sonntag.",
        "6": "<b>Schwimmbad Hallenbad Ost</b><br>Neu: Sauna und Kinderbecken!"
      },
      items: [
        { n: 1, q: "A · Sie singen gern und möchten in einer Gruppe singen.", tr: ["Vous aimez chanter en groupe.", "Tia mihira ianao ary te hihira anaty vondrona."], a: "2", exp: { mg: "Chor = antoko mpihira.", fr: "Chorale → 2." } },
        { n: 2, q: "B · Ihre Kinder möchten im Winter Ski fahren lernen.", tr: ["Vos enfants veulent apprendre le ski en hiver.", "Te hianatra ski ny zanakao amin'ny ririnina."], a: "1", exp: { mg: "Skischule + Kinder.", fr: "École de ski → 1." } },
        { n: 3, q: "C · Sie feiern Geburtstag mit 30 Gästen und brauchen Essen.", tr: ["Vous fêtez un anniversaire avec 30 invités.", "Mankalaza tsingerintaona miaraka amin'ny vahiny 30 ianao."], a: "4", exp: { mg: "Partyservice = sakafo ho an'ny fety.", fr: "Traiteur → 4." } },
        { n: 4, q: "D · Sie möchten in der Natur Leute kennenlernen.", tr: ["Vous voulez rencontrer des gens dans la nature.", "Te hahafantatra olona any anaty natiora ianao."], a: "5", exp: { mg: "Wandern = mandeha an-tongotra any an-tendrombohitra.", fr: "Randonnée → 5." } },
        { n: 5, q: "E · Sie möchten bessere Fotos machen.", tr: ["Vous voulez faire de meilleures photos.", "Te haka sary tsara kokoa ianao."], a: "3", exp: { mg: "Fotokurs. Ny 6 (dobo) no tafahoatra.", fr: "Cours photo → 3. L'annonce 6 est en trop." } }
      ] },
    { id: "L2", nom: "Aufgabe 2", type: "jn", points: 10,
      consigne: "Sie lesen drei Anzeigen. Dazu gibt es je 2 Fragen. Antworten Sie mit JA oder NEIN.",
      texte: `<div class="ads">
<div class="ad"><span class="l">A</span><b>Sommerfest im Volksgarten</b><br>Samstag ab 14 Uhr, Live-Musik und Grillen.<br>Eintritt: 5 €, Kinder bis 12 gratis.</div>
<div class="ad"><span class="l">B</span><b>Kino unter Sternen</b><br>Filme im Freien – Juli und August, 21 Uhr.<br>Bei Regen im Kinosaal. Decke mitbringen!</div>
<div class="ad"><span class="l">C</span><b>Seilbahn Hochalm</b><br>Mai bis Oktober täglich 8.30–17 Uhr.<br>Hunde erlaubt. Fahrrad-Transport: 5 € extra.</div></div>`,
      items: [
        { n: 6, q: "A · Muss ein Kind mit 10 Jahren Eintritt bezahlen?", tr: ["Un enfant de 10 ans doit-il payer l'entrée ?", "Mandoa ve ny zaza 10 taona?"], a: "n", exp: { mg: "« Kinder bis 12 gratis ».", fr: "Gratuit jusqu'à 12 ans → NEIN." } },
        { n: 7, q: "A · Gibt es auf dem Fest Musik?", tr: ["Y a-t-il de la musique ?", "Misy mozika ve?"], a: "j", exp: { mg: "« Live-Musik ».", fr: "Musique live → JA." } },
        { n: 8, q: "B · Sieht man die Filme draußen?", tr: ["Voit-on les films dehors ?", "Jerena any ivelany ve ny sarimihetsika?"], a: "j", exp: { mg: "« im Freien » = any ivelany.", fr: "En plein air → JA." } },
        { n: 9, q: "B · Fällt das Kino bei Regen aus?", tr: ["Le cinéma est-il annulé s'il pleut ?", "Foanana ve raha avy ny orana?"], a: "n", exp: { mg: "« Bei Regen im Kinosaal ».", fr: "En salle s'il pleut → NEIN." } },
        { n: 10, q: "C · Fährt die Seilbahn im Jänner?", tr: ["Le téléphérique fonctionne-t-il en janvier ?", "Mandeha ve ny téléphérique amin'ny janoary?"], a: "n", exp: { mg: "« Mai bis Oktober » ihany. Jänner = janoary (Aotrisy).", fr: "Mai à octobre ; Jänner = janvier." } },
        { n: 11, q: "C · Kostet ein Fahrrad mehr?", tr: ["Un vélo coûte-t-il plus ?", "Mandoa fanampiny ve ny bisikileta?"], a: "j", exp: { mg: "« 5 € extra ».", fr: "5 € de plus → JA." } }
      ] },
    { id: "L3", nom: "Aufgabe 3", type: "match", points: 10, zero: false, layout: "textFirst",
      consigne: "Sie lesen 5 kurze Texte (Text A – E). Welches Bild (1 – 6) passt zu welchem Text? Achtung: Ein Bild ist zu viel.",
      choixTitre: "Bilder",
      choix: pics({ "1": ["⛷️", "Ein Skifahrer auf einer Piste."], "2": ["🎄", "Ein Weihnachtsmarkt mit Lichtern."], "3": ["☀️", "Menschen liegen am See in der Sonne."], "4": ["⛈️", "Dunkle Wolken und Blitze."], "5": ["🎭", "Eine Theaterbühne."], "6": ["🏃", "Läufer bei einem Stadtlauf."] }),
      texte: `<div class="ads">
<div class="ad"><span class="l">A</span>Heute Abend Gewitter! Bitte bleiben Sie nicht im Freien.</div>
<div class="ad"><span class="l">B</span>Punsch und Lebkuchen – jeden Tag im Dezember auf dem Rathausplatz.</div>
<div class="ad"><span class="l">C</span>Badewetter! 30 Grad am Wörthersee.</div>
<div class="ad"><span class="l">D</span>Die Vorstellung beginnt um 19.30 Uhr. Bitte pünktlich sein!</div>
<div class="ad"><span class="l">E</span>Achtung, Straße gesperrt: Heute laufen 5000 Menschen durch die Stadt.</div></div>`,
      items: [
        { n: 12, q: "Text A", a: "4", exp: { mg: "Gewitter = oram-baratra.", fr: "Orage." } },
        { n: 13, q: "Text B", a: "2", exp: { mg: "Dezember, Punsch → tsenan'ny Krismasy.", fr: "Marché de Noël." } },
        { n: 14, q: "Text C", a: "3", exp: { mg: "« Badewetter » = andro mety hilomanoana.", fr: "Temps de baignade." } },
        { n: 15, q: "Text D", a: "5", exp: { mg: "Vorstellung = fampisehoana → teatra.", fr: "Représentation → théâtre." } },
        { n: 16, q: "Text E", a: "6", exp: { mg: "Olona 5000 mihazakazaka. Sary 1 (ski) no tafahoatra.", fr: "Course en ville. L'image 1 est en trop." } }
      ] }
  ] },

  hoeren: { temps: 10, teile: [
    { id: "H1", nom: "Aufgabe 1", ecoutes: 1, type: "match", points: 10, zero: false, lecture: 30,
      consigne: "Sie hören fünf verschiedene Texte zu den Fotos. Sie hören jeden Text ein Mal. Welcher Text passt zu welchem Foto? Achtung: Ein Foto ist zu viel.",
      choixTitre: "Fotos",
      choix: pics({ "A": ["🎸", "Ein Konzert"], "B": ["🚴", "Eine Radtour"], "C": ["❄️", "Schnee auf der Straße"], "D": ["📚", "Eine Buchhandlung"], "E": ["🎂", "Eine Torte"], "F": ["⛺", "Ein Zelt am See"] }),
      clips: [
        { id: "oa1m4-h1-1", titre: "Text 1", script: [{ s: "m", n: "Radio", t: "Achtung, Autofahrer! Heute Nacht hat es stark geschneit. Fahren Sie bitte langsam." }], items: [{ n: 1, q: "Text 1 → Foto?", a: "C", exp: { mg: "« geschneit » = nilatsaka ny oram-panala.", fr: "Neige." } }] },
        { id: "oa1m4-h1-2", titre: "Text 2", script: [{ s: "f", n: "Frau", t: "Hier am See ist es so ruhig. Heute schlafen wir im Zelt!" }], items: [{ n: 2, q: "Text 2 → Foto?", a: "F", exp: { mg: "« im Zelt » = anaty lay.", fr: "Tente au lac." } }] },
        { id: "oa1m4-h1-3", titre: "Text 3", script: [{ s: "m", n: "Mann", t: "Noch zehn Kilometer, dann machen wir mit den Rädern eine Pause." }], items: [{ n: 3, q: "Text 3 → Foto?", a: "B", exp: { mg: "« mit den Rädern » = bisikileta.", fr: "Balade à vélo." } }] },
        { id: "oa1m4-h1-4", titre: "Text 4", script: [{ s: "f2", n: "Verkäuferin", t: "Dieser Roman ist ganz neu. Möchten Sie ihn als Geschenk verpacken?" }], items: [{ n: 4, q: "Text 4 → Foto?", a: "D", exp: { mg: "Roman → fivarotam-boky.", fr: "Librairie." } }] },
        { id: "oa1m4-h1-5", titre: "Text 5", script: [{ s: "m", n: "Moderator", t: "Und jetzt, liebes Publikum: die Band „Donauwellen“! Viel Spaß!" }], items: [{ n: 5, q: "Text 5 → Foto?", a: "A", exp: { mg: "Band, Publikum → konseraty. Sary E no tafahoatra.", fr: "Concert. La photo E est en trop." } }] }
      ] },
    { id: "H2", nom: "Aufgabe 2", ecoutes: 2, type: "fill", points: 10, lecture: 30,
      consigne: "Sie hören folgende Nachricht. Hören Sie gut zu und schreiben Sie die wichtigsten Informationen auf das Notizblatt. Sie hören den Text zwei Mal.",
      contexte: "Notizen · Geburtstagsfeier",
      xtr: ["Notes · Fête d'anniversaire", "Naoty · Fety tsingerintaona"],
      clips: [{ id: "oa1m4-h2", titre: "Nachricht", script: [{ s: "f", n: "Lisa", t: "Hallo, hier ist Lisa! Ich werde dreißig und mache am Samstag eine Feier. Wir treffen uns um acht Uhr am Abend im Gasthaus Krone, in der Kirchengasse fünf. Bitte bring einen Salat mit, Getränke haben wir genug. Und sag mir bis Donnerstag, ob du kommst. Meine Nummer: null sechs fünf null, sieben sieben eins zwei drei. Bis bald!" }],
        items: [
          { n: 6, label: "Lisa wird … Jahre alt", ph: "Alter", a: ["30", "dreißig", "dreissig"], exp: { mg: "« Ich werde dreißig ».", fr: "30 ans." } },
          { n: 7, label: "Uhrzeit:", ph: "… Uhr", a: ["20", "20 Uhr", "20.00", "20:00", "8 Uhr", "acht Uhr", "8 Uhr abends"], exp: { mg: "« acht Uhr am Abend » = 20 ora.", fr: "20 h." } },
          { n: 8, label: "Ort: Gasthaus", ph: "Name", a: ["Krone", "Gasthaus Krone"], exp: { mg: "« Gasthaus Krone ».", fr: "Krone." } },
          { n: 9, label: "Mitbringen:", ph: "Was?", a: ["Salat", "einen Salat"], exp: { mg: "Salady; efa ampy ny zava-pisotro.", fr: "Une salade." } },
          { n: 10, label: "Antwort bis:", ph: "Tag", a: ["Donnerstag", "Do"], exp: { mg: "« bis Donnerstag ».", fr: "Jeudi." } }
        ] }] },
    { id: "H3", nom: "Aufgabe 3", ecoutes: 1, type: "mc", points: 10, lecture: 10,
      consigne: "Sie hören jetzt 5 Personen, die befragt werden. Kreuzen Sie die richtigen Antworten an. Pro Person gibt es nur eine Antwort. Sie hören die Texte ein Mal.",
      contexte: "Frage: Welche Jahreszeit mögen Sie am liebsten?",
      xtr: ["Question : quelle saison préférez-vous ?", "Fanontaniana: inona no vanim-potoana tianao indrindra?"],
      clips: [{ id: "oa1m4-h3", titre: "Umfrage", script: [
        { s: "f", n: "Person 1", t: "Ich liebe den Winter! Ich fahre jedes Wochenende Ski." },
        { s: "m", n: "Person 2", t: "Im Sommer ist es mir zu heiß. Am liebsten mag ich den Herbst mit den bunten Blättern." },
        { s: "f2", n: "Person 3", t: "Der Frühling ist am schönsten. Alles ist grün und die Blumen kommen." },
        { s: "m2", n: "Person 4", t: "Sonne, See und Eis – für mich ist der Sommer die beste Zeit." },
        { s: "f", n: "Person 5", t: "Ich mag es kalt, aber nicht zu kalt. Darum mag ich den Herbst, nicht den Winter." }],
        items: [
          { n: 11, q: "Person 1", opts: ["Frühling", "Sommer", "Herbst", "Winter"], a: "d", exp: { mg: "« Ich liebe den Winter ».", fr: "L'hiver." } },
          { n: 12, q: "Person 2", opts: ["Frühling", "Sommer", "Herbst", "Winter"], a: "c", exp: { mg: "Herbst = fararano.", fr: "L'automne." } },
          { n: 13, q: "Person 3", opts: ["Frühling", "Sommer", "Herbst", "Winter"], a: "a", exp: { mg: "Frühling = lohataona.", fr: "Le printemps." } },
          { n: 14, q: "Person 4", opts: ["Frühling", "Sommer", "Herbst", "Winter"], a: "b", exp: { mg: "« der Sommer die beste Zeit ».", fr: "L'été." } },
          { n: 15, q: "Person 5", opts: ["Frühling", "Sommer", "Herbst", "Winter"], a: "c", exp: { mg: "« Darum mag ich den Herbst ».", fr: "L'automne." } }
        ] }] }
  ] },

  schreiben: { temps: 20, aufgaben: [
    { id: "S1", nom: "Aufgabe 1", temps: 8, points: 5, type: "Formular",
      consigne: `<p>Ihr Freund Fenitra Rabearivelo (geboren am 9. November 1993) möchte Mitglied im Fußballverein „SV Donau“ werden. Er möchte am Dienstag und Freitag trainieren. Er spielt schon fünf Jahre Fußball. Er wohnt in der Lindengasse 7, 1070 Wien. Er bezahlt einmal im Jahr.</p><p>Helfen Sie Ihrem Freund und füllen Sie das Formular aus.</p>`,
      ctr: ["Aidez votre ami à s'inscrire au club de football.", "Ampio ny namanao hiditra ao amin'ny klioban'ny baolina kitra."],
      form: { titre: "Mitgliedsantrag – SV Donau", champs: [
        { label: "Name", v: "Rabearivelo" },
        { n: 1, label: "Vorname", a: ["Fenitra"] },
        { n: 2, label: "Geburtsdatum", a: ["09.11.1993", "9.11.1993", "9. November 1993", "09.11.93", "9/11/1993"] },
        { n: 3, label: "Straße, Hausnummer", a: ["Lindengasse 7"] },
        { n: 4, label: "PLZ, Ort", a: ["1070 Wien"] },
        { n: 5, label: "Trainingstage", a: ["Dienstag und Freitag", "Di und Fr", "Dienstag, Freitag", "Di, Fr"] },
        { n: 6, label: "Erfahrung (Jahre)", a: ["5", "fünf", "5 Jahre", "fünf Jahre"] },
        { n: 7, label: "Zahlung", choix: ["monatlich", "jährlich"], a: ["jährlich"] }
      ] },
      exp: { mg: "« einmal im Jahr » = jährlich (isan-taona).", fr: "Une fois par an = jährlich." } },
    { id: "S2", nom: "Aufgabe 2", temps: 12, mots: 30, points: 10, type: "E-Mail",
      consigne: `<p>Ihre Freundin Anna hat Ihnen geschrieben:</p><div class="guest"><div class="guest-h">Von: anna.w@gmx.at · Betreff: Ausflug</div><div class="guest-b">Hallo! Am Sonntag mache ich einen Ausflug in die Berge. Kommst du mit? Wir fahren mit dem Zug um 8 Uhr. Was möchtest du essen? Hast du Wanderschuhe?<br>Bussi, Anna</div></div><p>Antworten Sie Anna. Schreiben Sie zu jeder Frage ein bis zwei Sätze (circa 30 Wörter).</p>`,
      ctr: ["Répondez à Anna : vous venez ?, que voulez-vous manger ?, avez-vous des chaussures de randonnée ? ~30 mots.", "Valio i Anna: hanaraka ve ianao, inona no tianao hohanina, manana kiraro fandehanana ve? ~30 teny."],
      checklist: ["Liebe Anna,", "Eny / tsia + antony", "Sakafo", "Kiraro fandehanana", "Gruß + anarana", "~30 teny"],
      redemittel: ["Liebe Anna,", "danke für die Einladung! Ich komme gern mit.", "Ich bringe … mit.", "Leider habe ich keine Wanderschuhe. Kann ich …?", "Bis Sonntag!", "Liebe Grüße"],
      modele: `Liebe Anna,

danke für die Einladung! Ich komme gern mit. Ich mache Sandwiches mit Käse und bringe Obst mit. Leider habe ich keine Wanderschuhe. Kann ich meine Sportschuhe nehmen?

Bis Sonntag!
Liebe Grüße
Haja` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voavaly avokoa ny fanontaniana? · Toutes les questions ?" },
    { nom: "Wortschatz", desc: "Teny mety · Vocabulaire adapté" },
    { nom: "Strukturen", desc: "Fehezanteny marina · Phrases correctes" }
  ] },

  sprechen: { preparation: 0, teile: [
    { id: "P1", nom: "Aufgabe 1 – Sich vorstellen", mg: "Mampahafantatra ny tena", duree: 2, mode: "present", em: "🙋",
      consigne: `<p>Ihre Gesprächspartnerin / Ihr Gesprächspartner möchte Sie gerne kennenlernen. Wählen Sie 4 Themen aus und sprechen Sie zu jedem Thema ein paar Sätze.</p><div class="plan"><b>Freizeit? · Urlaub? · Wetter? · Lieblingsjahreszeit? · Feste? · Fernsehen?</b></div>`,
      ctr: ["Choisissez 4 thèmes (loisirs, vacances, météo, saison préférée, fêtes, télé) et parlez-en.", "Misafidiana lohahevitra 4 ary lazao fehezanteny vitsivitsy."],
      themes: [{ titre: "Sich vorstellen", points: [
        { de: "Freizeit?", mg: "Fotoana malalaka?", fr: "Loisirs ?" }, { de: "Urlaub?", mg: "Fialan-tsasatra?", fr: "Vacances ?" },
        { de: "Wetter? / Jahreszeit?", mg: "Toetr'andro? Vanim-potoana?", fr: "Météo ? Saison ?" }, { de: "Feste?", mg: "Fety?", fr: "Fêtes ?" } ],
        modele: `In meiner Freizeit spiele ich Basketball und treffe Freunde.
Im Urlaub fahre ich gern ans Meer, zum Beispiel nach Toliara.
In Madagaskar ist es meistens warm. Ich mag den Sommer, aber nicht den Regen im Februar.
Mein Lieblingsfest ist Neujahr. Dann kommt die ganze Familie zusammen und wir essen viel.` }],
      redemittel: [["Lohahevitra · Thèmes", ["In meiner Freizeit …", "Im Urlaub fahre ich …", "Bei uns ist es oft …", "Mein Lieblingsfest ist …"]]] },
    { id: "P2", nom: "Aufgabe 2 – Situationen beschreiben", mg: "Mamaritra sary", duree: 2, mode: "present", em: "🖼️",
      consigne: `<p>Sie bekommen drei Bilder. Wählen Sie ein Bild aus. Sprechen Sie über das Bild:</p><ul><li>Was sehen Sie?</li><li>Wie viele Personen sehen Sie?</li><li>Wo sind diese Personen?</li><li>Was machen diese Personen?</li></ul>`,
      themes: [
        { titre: "Bild 1 · Im Kino", bild: { e: "🎬", de: "Ein junges Paar kauft an der Kinokasse zwei Karten und Popcorn.", tr: ["Un jeune couple achète deux billets et du pop-corn au cinéma.", "Mpivady tanora mividy tapakila roa sy popcorn ao amin'ny sinema."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Auf dem Bild sehe ich ein Kino. Ich sehe drei Personen: ein junges Paar und eine Verkäuferin. Sie sind an der Kinokasse. Das Paar kauft zwei Karten und Popcorn. Vielleicht sehen sie einen Liebesfilm.` },
        { titre: "Bild 2 · Im Schnee", bild: { e: "⛄", de: "Zwei Kinder bauen einen Schneemann. Eine Frau macht ein Foto.", tr: ["Deux enfants font un bonhomme de neige ; une femme prend une photo.", "Ankizy roa manao olona vita amin'ny oram-panala; vehivavy maka sary."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Ich sehe viel Schnee. Auf dem Bild sind drei Personen: zwei Kinder und eine Frau. Sie sind draußen, vielleicht im Garten. Die Kinder bauen einen Schneemann. Die Frau macht ein Foto. Es ist Winter und sehr kalt.` },
        { titre: "Bild 3 · Grillfest", bild: { e: "🍖", de: "Eine Gruppe Freunde grillt im Garten. Ein Mann steht am Grill, die anderen sitzen am Tisch.", tr: ["Des amis font un barbecue ; un homme est au grill, les autres à table.", "Namana manao barbecue; lehilahy eo amin'ny fandrahoana, ny hafa mipetraka."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Auf dem Bild sehe ich ein Fest im Garten. Ich sehe fünf Personen. Ein Mann steht am Grill und macht Fleisch und Würstel. Die anderen sitzen am Tisch, trinken und lachen. Das Wetter ist schön. Vielleicht ist es Samstag.` } ],
      redemittel: [["Mamaritra · Décrire", ["Auf dem Bild sehe ich …", "Ich sehe … Personen.", "Sie sind im / im Garten / draußen.", "Sie bauen / kaufen / grillen …", "Vielleicht …"]]] },
    { id: "P3", nom: "Aufgabe 3 – Miteinander sprechen", mg: "Lalao an-tsehatra", duree: 3, mode: "dialog", em: "🎭",
      consigne: `<p>Sie sind nun in der Situation des gewählten Bildes. Spielen Sie diese Situation mit Ihrer Gesprächspartnerin / Ihrem Gesprächspartner.</p><div class="plan"><b>Beispiel: Bild 1 – Im Kino.</b> Sie möchten Kinokarten kaufen. Ihr Partner arbeitet an der Kasse.</div>`,
      ctr: ["Jouez la situation : vous achetez des billets de cinéma ; le partenaire est à la caisse.", "Ataovy ny toe-javatra: mividy tapakila sinema ianao; ny namanao no eo amin'ny kesy."],
      partnerLabel: "Kinokasse · Kesy sinema", av: "🎟️",
      partenaire: [
        { id: "oa1m4-p3-1", s: "f", t: "Guten Abend! Für welchen Film möchten Sie Karten?", aide: ["Für „Die Insel“, bitte.", "Was läuft heute Abend?"] },
        { id: "oa1m4-p3-2", s: "f", t: "Wie viele Karten brauchen Sie?", aide: ["Zwei Karten, bitte.", "Eine Karte für mich."] },
        { id: "oa1m4-p3-3", s: "f", t: "Um 18 Uhr oder um 20.30 Uhr?", aide: ["Um 20.30 Uhr, bitte.", "Die Vorstellung um 18 Uhr."] },
        { id: "oa1m4-p3-4", s: "f", t: "Möchten Sie in der Mitte oder hinten sitzen?", aide: ["In der Mitte, bitte.", "Hinten ist gut."] },
        { id: "oa1m4-p3-5", s: "f", t: "Das macht zweiundzwanzig Euro. Möchten Sie auch Popcorn?", aide: ["Ja, ein großes Popcorn, bitte.", "Nein, danke. Hier sind 22 Euro."] }
      ],
      redemittel: [["Ao amin'ny sinema · Au cinéma", ["Zwei Karten für …, bitte.", "Um wie viel Uhr beginnt der Film?", "In der Mitte / hinten, bitte.", "Was kostet das?"]]],
      modele: `Kasse: Guten Abend! Für welchen Film?
Kunde: Für „Die Insel“, bitte.
Kasse: Wie viele Karten?
Kunde: Zwei Karten.
Kasse: Um 18 Uhr oder um 20.30 Uhr?
Kunde: Um 20.30 Uhr.
Kasse: In der Mitte oder hinten?
Kunde: In der Mitte, bitte.
Kasse: 22 Euro. Möchten Sie Popcorn?
Kunde: Nein, danke. Hier, bitte.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voaresaka ve ny hevitra? · Tâche réalisée ?" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "der Chor", fr: "la chorale", mg: "antoko mpihira", ex: "Ich singe im Chor." },
    { de: "die Probe", fr: "la répétition", mg: "famerenana (fampiharana)", ex: "Die Probe ist am Dienstag." },
    { de: "wandern", fr: "faire de la randonnée", mg: "mitsangatsangana an-tongotra", ex: "Wir wandern jeden Sonntag." },
    { de: "im Freien", fr: "en plein air", mg: "any ivelany", ex: "Kino im Freien." },
    { de: "die Decke", fr: "la couverture", mg: "bodofotsy", ex: "Decke mitbringen!" },
    { de: "die Seilbahn", fr: "le téléphérique", mg: "téléphérique", ex: "Die Seilbahn fährt bis 17 Uhr." },
    { de: "der Jänner", fr: "janvier (AT)", mg: "janoary (Aotrisy)", ex: "Im Jänner ist es kalt." },
    { de: "das Gewitter", fr: "l'orage", mg: "oram-baratra", ex: "Heute Abend gibt es ein Gewitter." },
    { de: "der Punsch", fr: "le punch chaud", mg: "zava-pisotro mafana (Krismasy)", ex: "Punsch auf dem Weihnachtsmarkt." },
    { de: "die Vorstellung", fr: "la représentation, la séance", mg: "fampisehoana", ex: "Die Vorstellung beginnt um 19.30 Uhr." },
    { de: "schneien", fr: "neiger", mg: "milatsaka ny oram-panala", ex: "Heute hat es geschneit." },
    { de: "das Zelt", fr: "la tente", mg: "lay", ex: "Wir schlafen im Zelt." },
    { de: "das Gasthaus", fr: "l'auberge, le restaurant", mg: "trano fisakafoanana", ex: "Wir treffen uns im Gasthaus." },
    { de: "der Frühling", fr: "le printemps", mg: "lohataona", ex: "Im Frühling ist alles grün." },
    { de: "der Herbst", fr: "l'automne", mg: "fararano", ex: "Ich mag den Herbst." },
    { de: "jährlich", fr: "annuel(lement)", mg: "isan-taona", ex: "Er bezahlt jährlich." },
    { de: "der Ausflug", fr: "l'excursion", mg: "fitsangatsanganana", ex: "Wir machen einen Ausflug." },
    { de: "Bussi", fr: "bisous (AT)", mg: "oroka (Aotrisy)", ex: "Bussi, Anna" },
    { de: "der Schneemann", fr: "le bonhomme de neige", mg: "olona vita amin'ny oram-panala", ex: "Die Kinder bauen einen Schneemann." },
    { de: "grillen", fr: "faire un barbecue", mg: "manendy (barbecue)", ex: "Am Samstag grillen wir." }
  ]
});
})();
