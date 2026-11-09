/* ÖSD Zertifikat A1 — Modellsatz 5 — textes originaux H Conseil & Formation */
(function(){
const pics = (o) => Object.fromEntries(Object.entries(o).map(([k,[e,t]]) => [k, `<span style="font-size:26px">${e}</span><br>${t}`]));
window.POOLS.OA1.sets.push({
  id: "oa1m5", titre: "Modellsatz 5", theme: "Fiantsenana, tanàna, sampan-draharaha",
  lesen: { temps: 25, teile: [
    { id: "L1", nom: "Aufgabe 1", type: "match", points: 10, zero: false, layout: "choixAfter",
      consigne: "Sie suchen verschiedene Dinge in der Zeitung. Finden Sie zu jeder Situation (A – E) die passende Anzeige (Nr. 1 – 6). Achtung: Eine Anzeige ist zu viel.",
      choix: {
        "1": "<b>Schneiderei Ali</b><br>Hosen kürzer machen, Reißverschluss reparieren – schnell und billig.",
        "2": "<b>Bio-Laden Grünkorb</b><br>Obst und Gemüse vom Bauern. Lieferung nach Hause!",
        "3": "<b>Fahrschule Tempo</b><br>Führerschein in 6 Wochen. Kurse auch auf Englisch.",
        "4": "<b>Copyshop Blitz</b><br>Kopieren, Drucken, Scannen – ab 5 Cent.",
        "5": "<b>Handwerker-Hilfe</b><br>Wir streichen Ihre Wohnung – günstig!",
        "6": "<b>Afrikanisches Restaurant Baobab</b><br>Spezialitäten aus Afrika und Madagaskar. Di–So."
      },
      items: [
        { n: 1, q: "A · Sie möchten Auto fahren lernen.", tr: ["Vous voulez apprendre à conduire.", "Te hianatra mitondra fiara ianao."], a: "3", exp: { mg: "Fahrschule = sekoly fitondrana fiara.", fr: "Auto-école → 3." } },
        { n: 2, q: "B · Ihre neue Hose ist zu lang.", tr: ["Votre nouveau pantalon est trop long.", "Lava loatra ny pataloha vaovao."], a: "1", exp: { mg: "« Hosen kürzer machen » → mpanjaitra.", fr: "Retouches → 1." } },
        { n: 3, q: "C · Sie möchten Essen aus Ihrer Heimat essen.", tr: ["Vous voulez manger un plat de votre pays.", "Te hihinana sakafo avy amin'ny tanindrazana ianao."], a: "6", exp: { mg: "« Madagaskar » → 6.", fr: "Restaurant malgache → 6." } },
        { n: 4, q: "D · Sie müssen Dokumente für ein Amt kopieren.", tr: ["Vous devez copier des documents pour une administration.", "Tsy maintsy maka kopia antontan-taratasy ianao."], a: "4", exp: { mg: "Kopieren → Copyshop.", fr: "Copies → 4." } },
        { n: 5, q: "E · Sie haben keine Zeit zum Einkaufen und möchten Gemüse nach Hause bekommen.", tr: ["Vous n'avez pas le temps de faire les courses et voulez être livré.", "Tsy manana fotoana hiantsenana ianao ary te hahazo legioma ao an-trano."], a: "2", exp: { mg: "« Lieferung nach Hause ». Ny 5 no tafahoatra.", fr: "Livraison → 2. L'annonce 5 est en trop." } }
      ] },
    { id: "L2", nom: "Aufgabe 2", type: "jn", points: 10,
      consigne: "Sie lesen drei Anzeigen. Dazu gibt es je 2 Fragen. Antworten Sie mit JA oder NEIN.",
      texte: `<div class="ads">
<div class="ad"><span class="l">A</span><b>Bürgerservice Rathaus</b><br>Neue Adresse melden: Mo–Fr 8–13 Uhr, Do bis 18 Uhr.<br>Bitte Pass und Mietvertrag mitbringen.</div>
<div class="ad"><span class="l">B</span><b>Bäckerei Ströck – Frühstücksangebot</b><br>Kaffee + Semmel + Ei: 4,50 €.<br>Nur bis 10 Uhr!</div>
<div class="ad"><span class="l">C</span><b>Stadtbücherei</b><br>Bücher ausleihen: kostenlos für Kinder.<br>Erwachsene: 20 € pro Jahr. Neu: Filme und Spiele.</div></div>`,
      items: [
        { n: 6, q: "A · Kann man am Donnerstag um 17 Uhr ins Rathaus gehen?", tr: ["Peut-on aller à la mairie jeudi à 17 h ?", "Afaka mankany amin'ny lapan'ny tanàna ve amin'ny alakamisy 17 ora?"], a: "j", exp: { mg: "« Do bis 18 Uhr ».", fr: "Jeudi jusqu'à 18 h → JA." } },
        { n: 7, q: "A · Braucht man nur den Pass?", tr: ["Faut-il seulement le passeport ?", "Pasipaoro ihany ve no ilaina?"], a: "n", exp: { mg: "Pass + Mietvertrag (fifanarahana fanofana).", fr: "Passeport et bail → NEIN." } },
        { n: 8, q: "B · Gibt es das Frühstück auch zu Mittag?", tr: ["Le petit-déjeuner est-il aussi servi à midi ?", "Misy ve ny sakafo maraina amin'ny antoandro?"], a: "n", exp: { mg: "« Nur bis 10 Uhr ».", fr: "Seulement jusqu'à 10 h → NEIN." } },
        { n: 9, q: "B · Ist ein Ei im Angebot?", tr: ["Y a-t-il un œuf dans l'offre ?", "Misy atody ve ao amin'ny tolotra?"], a: "j", exp: { mg: "« Kaffee + Semmel + Ei ».", fr: "Oui → JA." } },
        { n: 10, q: "C · Müssen Kinder für Bücher bezahlen?", tr: ["Les enfants doivent-ils payer ?", "Mandoa ve ny ankizy?"], a: "n", exp: { mg: "« kostenlos für Kinder ».", fr: "Gratuit → NEIN." } },
        { n: 11, q: "C · Kann man dort auch Filme ausleihen?", tr: ["Peut-on aussi emprunter des films ?", "Afaka mindrana sarimihetsika koa ve?"], a: "j", exp: { mg: "« Neu: Filme und Spiele ».", fr: "Oui → JA." } }
      ] },
    { id: "L3", nom: "Aufgabe 3", type: "match", points: 10, zero: false, layout: "textFirst",
      consigne: "Sie lesen 5 kurze Texte (Text A – E). Welches Bild (1 – 6) passt zu welchem Text? Achtung: Ein Bild ist zu viel.",
      choixTitre: "Bilder",
      choix: pics({ "1": ["🛍️", "Ein Schaufenster mit Schild „Ausverkauf“."], "2": ["🚧", "Eine Straße mit Bauarbeitern."], "3": ["🏧", "Ein Bankomat."], "4": ["🚌", "Ein Bus an einer Haltestelle."], "5": ["👕", "Eine Umkleidekabine im Geschäft."], "6": ["🧾", "Ein Kassenbon."] }),
      texte: `<div class="ads">
<div class="ad"><span class="l">A</span>Bitte nur 3 Kleidungsstücke in die Kabine mitnehmen.</div>
<div class="ad"><span class="l">B</span>Alles muss raus! Minus 50 % auf alle Schuhe.</div>
<div class="ad"><span class="l">C</span>Umtausch nur mit Kassenbon innerhalb von 14 Tagen.</div>
<div class="ad"><span class="l">D</span>Geld abheben rund um die Uhr.</div>
<div class="ad"><span class="l">E</span>Linie 13A fährt wegen Bauarbeiten nur bis Station Rathaus.</div></div>`,
      items: [
        { n: 12, q: "Text A", a: "5", exp: { mg: "« Kabine » = efitra fanandramana akanjo.", fr: "Cabine d'essayage." } },
        { n: 13, q: "Text B", a: "1", exp: { mg: "« Alles muss raus » = varotra fanafoanana entana.", fr: "Liquidation." } },
        { n: 14, q: "Text C", a: "6", exp: { mg: "Kassenbon = tapakila fandoavana.", fr: "Ticket de caisse." } },
        { n: 15, q: "Text D", a: "3", exp: { mg: "Geld abheben → Bankomat (teny aotrisiana).", fr: "Distributeur (Bankomat en Autriche)." } },
        { n: 16, q: "Text E", a: "4", exp: { mg: "Linie 13A → bus. Sary 2 no tafahoatra.", fr: "Ligne de bus. L'image 2 est en trop." } }
      ] }
  ] },

  hoeren: { temps: 10, teile: [
    { id: "H1", nom: "Aufgabe 1", ecoutes: 1, type: "match", points: 10, zero: false, lecture: 30,
      consigne: "Sie hören fünf verschiedene Texte zu den Fotos. Sie hören jeden Text ein Mal. Welcher Text passt zu welchem Foto? Achtung: Ein Foto ist zu viel.",
      choixTitre: "Fotos",
      choix: pics({ "A": ["🧀", "An der Käsetheke"], "B": ["👟", "Im Schuhgeschäft"], "C": ["🏦", "In der Bank"], "D": ["🌷", "Im Blumengeschäft"], "E": ["🚗", "In der Autowerkstatt"], "F": ["📱", "Im Handygeschäft"] }),
      clips: [
        { id: "oa1m5-h1-1", titre: "Text 1", script: [{ s: "f", n: "Verkäuferin", t: "Welche Größe haben Sie? Vierzig? Probieren Sie diese hier." }], items: [{ n: 1, q: "Text 1 → Foto?", a: "B", exp: { mg: "« Größe … vierzig » → kiraro.", fr: "Pointure → chaussures." } }] },
        { id: "oa1m5-h1-2", titre: "Text 2", script: [{ s: "m", n: "Verkäufer", t: "Zwanzig Deka Bergkäse? Gern. Darf es noch etwas sein?" }], items: [{ n: 2, q: "Text 2 → Foto?", a: "A", exp: { mg: "« Deka » = 10 grama (Aotrisy). Fromazy.", fr: "Deka = 10 g (Autriche) → fromage." } }] },
        { id: "oa1m5-h1-3", titre: "Text 3", script: [{ s: "f", n: "Kundin", t: "Ich hätte gern einen Strauß rote Rosen für meine Mutter." }], items: [{ n: 3, q: "Text 3 → Foto?", a: "D", exp: { mg: "Rosen → mpivarotra voninkazo.", fr: "Fleuriste." } }] },
        { id: "oa1m5-h1-4", titre: "Text 4", script: [{ s: "m", n: "Mechaniker", t: "Die Bremsen sind kaputt. Das Auto ist erst morgen fertig." }], items: [{ n: 4, q: "Text 4 → Foto?", a: "E", exp: { mg: "Bremsen, Auto → garazy.", fr: "Garage." } }] },
        { id: "oa1m5-h1-5", titre: "Text 5", script: [{ s: "f2", n: "Bankangestellte", t: "Für ein Konto brauchen wir Ihren Pass und Ihre Meldebestätigung." }], items: [{ n: 5, q: "Text 5 → Foto?", a: "C", exp: { mg: "Konto → banky. Sary F no tafahoatra.", fr: "Compte → banque. La photo F est en trop." } }] }
      ] },
    { id: "H2", nom: "Aufgabe 2", ecoutes: 2, type: "fill", points: 10, lecture: 30,
      consigne: "Sie hören folgende Nachricht. Hören Sie gut zu und schreiben Sie die wichtigsten Informationen auf das Notizblatt. Sie hören den Text zwei Mal.",
      contexte: "Notizen · Lieferung",
      xtr: ["Notes · Livraison", "Naoty · Fanaterana entana"],
      clips: [{ id: "oa1m5-h2", titre: "Nachricht", script: [{ s: "m", n: "Herr Fuchs", t: "Guten Tag, hier ist Fuchs vom Möbelhaus Wohnwelt. Ihr neues Bett ist da. Wir liefern es am Montag, zwischen vierzehn und sechzehn Uhr. Die Lieferung kostet neunundzwanzig Euro. Sie bezahlen bar beim Fahrer. Bitte sagen Sie uns noch: In welchem Stock wohnen Sie? Rufen Sie an unter null eins, sechs null zwei, vier vier vier. Danke!" }],
        items: [
          { n: 6, label: "Was wird geliefert?", ph: "Möbel", a: ["Bett", "ein Bett", "das Bett"], exp: { mg: "« Ihr neues Bett ».", fr: "Un lit." } },
          { n: 7, label: "Liefertag:", ph: "Tag", a: ["Montag", "am Montag", "Mo"], exp: { mg: "« am Montag ».", fr: "Lundi." } },
          { n: 8, label: "Zeit: zwischen 14 und", ph: "… Uhr", a: ["16", "16 Uhr", "sechzehn", "16.00"], exp: { mg: "14–16 ora.", fr: "Jusqu'à 16 h." } },
          { n: 9, label: "Lieferung kostet:", ph: "€", a: ["29", "29 €", "29 Euro", "neunundzwanzig"], exp: { mg: "« neunundzwanzig » = 29.", fr: "29 €." } },
          { n: 10, label: "Bezahlen:", ph: "wie?", a: ["bar", "bar beim Fahrer", "in bar"], exp: { mg: "« bar beim Fahrer ».", fr: "En espèces au chauffeur." } }
        ] }] },
    { id: "H3", nom: "Aufgabe 3", ecoutes: 1, type: "mc", points: 10, lecture: 10,
      consigne: "Sie hören jetzt 5 Personen, die befragt werden. Kreuzen Sie die richtigen Antworten an. Pro Person gibt es nur eine Antwort. Sie hören die Texte ein Mal.",
      contexte: "Frage: Wo kaufen Sie am liebsten ein?",
      xtr: ["Question : où préférez-vous faire vos achats ?", "Fanontaniana: aiza no tianao indrindra hiantsenana?"],
      clips: [{ id: "oa1m5-h3", titre: "Umfrage", script: [
        { s: "m", n: "Person 1", t: "Ich kaufe fast alles im Internet. Das ist bequem und ich habe wenig Zeit." },
        { s: "f", n: "Person 2", t: "Am Samstag gehe ich auf den Markt. Dort ist das Gemüse frisch und ich kenne die Verkäufer." },
        { s: "m2", n: "Person 3", t: "Im Supermarkt finde ich alles an einem Ort. Darum gehe ich meistens dorthin." },
        { s: "f2", n: "Person 4", t: "Ich mag kleine Geschäfte in meiner Straße, zum Beispiel die Bäckerei und den Greißler." },
        { s: "f", n: "Person 5", t: "Ehrlich gesagt bestelle ich online. Nur Brot kaufe ich noch beim Bäcker." }],
        items: [
          { n: 11, q: "Person 1", opts: ["Internet", "Markt", "Supermarkt", "kleine Geschäfte"], a: "a", exp: { mg: "« im Internet ».", fr: "Internet." } },
          { n: 12, q: "Person 2", opts: ["Internet", "Markt", "Supermarkt", "kleine Geschäfte"], a: "b", exp: { mg: "« auf den Markt ».", fr: "Marché." } },
          { n: 13, q: "Person 3", opts: ["Internet", "Markt", "Supermarkt", "kleine Geschäfte"], a: "c", exp: { mg: "« im Supermarkt ».", fr: "Supermarché." } },
          { n: 14, q: "Person 4", opts: ["Internet", "Markt", "Supermarkt", "kleine Geschäfte"], a: "d", exp: { mg: "Greißler = fivarotana kely (Aotrisy).", fr: "Petits commerces ; Greißler = épicier (AT)." } },
          { n: 15, q: "Person 5", opts: ["Internet", "Markt", "Supermarkt", "kleine Geschäfte"], a: "a", exp: { mg: "« bestelle ich online » — mofo ihany no any amin'ny mpanao mofo.", fr: "En ligne (sauf le pain)." } }
        ] }] }
  ] },

  schreiben: { temps: 20, aufgaben: [
    { id: "S1", nom: "Aufgabe 1", temps: 8, points: 5, type: "Formular",
      consigne: `<p>Ihre Freundin Nathalie Raharison (geboren am 17. Juli 1996) ist von der Steiermark nach Wien gezogen. Ihre neue Adresse ist Favoritenstraße 88/4, 1100 Wien. Sie ist ledig und kommt aus Madagaskar. Sie ist seit dem 1. Oktober in der neuen Wohnung.</p><p>Helfen Sie Ihrer Freundin und füllen Sie das Formular aus.</p>`,
      ctr: ["Aidez votre amie à remplir la déclaration de domicile.", "Ampio ny namanao hameno ny taratasy fanambarana toeram-ponenana."],
      form: { titre: "Meldezettel – Hauptwohnsitz", champs: [
        { label: "Familienname", v: "Raharison" },
        { n: 1, label: "Vorname", a: ["Nathalie"] },
        { n: 2, label: "Geburtsdatum", a: ["17.07.1996", "17.7.1996", "17. Juli 1996", "17.07.96", "17/07/1996"] },
        { n: 3, label: "Staatsangehörigkeit", a: ["Madagaskar", "madagassisch"] },
        { n: 4, label: "Familienstand", choix: ["ledig", "verheiratet", "geschieden"], a: ["ledig"] },
        { n: 5, label: "Neue Adresse", a: ["Favoritenstraße 88/4, 1100 Wien", "Favoritenstraße 88/4", "Favoritenstrasse 88/4, 1100 Wien", "Favoritenstraße 88/4 1100 Wien"] },
        { n: 6, label: "Eingezogen am", a: ["1. Oktober", "01.10.", "1.10.", "01.10", "1.10"] }
      ] },
      exp: { mg: "Meldezettel = taratasy fanambarana toeram-ponenana any Aotrisy. « ledig » = tsy manambady.", fr: "Meldezettel = déclaration de domicile en Autriche ; ledig = célibataire." } },
    { id: "S2", nom: "Aufgabe 2", temps: 12, mots: 30, points: 10, type: "E-Mail",
      consigne: `<p>Sie haben im Internet eine Jacke bestellt. Sie bekommen dieses E-Mail:</p><div class="guest"><div class="guest-h">Von: service@modehaus.at · Betreff: Ihre Bestellung</div><div class="guest-b">Sehr geehrte Kundin, sehr geehrter Kunde! Leider haben wir die Jacke in Blau nicht mehr. Möchten Sie eine andere Farbe? Welche Größe brauchen Sie? Oder möchten Sie Ihr Geld zurück?<br>Freundliche Grüße, Ihr Modehaus-Team</div></div><p>Antworten Sie dem Modehaus. Schreiben Sie zu jeder Frage ein bis zwei Sätze (circa 30 Wörter).</p>`,
      ctr: ["Répondez au magasin : autre couleur ?, quelle taille ?, ou remboursement ? ~30 mots.", "Valio ny magazay: loko hafa?, habe?, sa averina ny vola? ~30 teny."],
      checklist: ["Sehr geehrte Damen und Herren,", "Loko hafa: eny / tsia", "Habe (Größe)", "Vola: averina sa tsia", "Mit freundlichen Grüßen + anarana", "~30 teny"],
      redemittel: ["Sehr geehrte Damen und Herren,", "danke für Ihre Nachricht.", "Ich nehme die Jacke gern in Schwarz.", "Ich brauche Größe M.", "Ich möchte mein Geld nicht zurück.", "Mit freundlichen Grüßen"],
      modele: `Sehr geehrte Damen und Herren,

danke für Ihre Nachricht. Ich nehme die Jacke gern in Schwarz. Ich brauche Größe M. Mein Geld möchte ich nicht zurück. Wann bekomme ich die Jacke?

Mit freundlichen Grüßen
Lalaina Rakoto` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voavaly avokoa ny fanontaniana? · Toutes les questions ?" },
    { nom: "Wortschatz", desc: "Teny mety · Vocabulaire adapté" },
    { nom: "Strukturen", desc: "Fehezanteny marina · Phrases correctes" }
  ] },

  sprechen: { preparation: 0, teile: [
    { id: "P1", nom: "Aufgabe 1 – Sich vorstellen", mg: "Mampahafantatra ny tena", duree: 2, mode: "present", em: "🙋",
      consigne: `<p>Ihre Gesprächspartnerin / Ihr Gesprächspartner möchte Sie gerne kennenlernen. Wählen Sie 4 Themen aus und sprechen Sie zu jedem Thema ein paar Sätze.</p><div class="plan"><b>Name? · Herkunft? · Einkaufen? · Lieblingsgeschäft? · Kleidung? · Zukunftspläne?</b></div>`,
      ctr: ["Choisissez 4 thèmes (nom, origine, courses, magasin préféré, vêtements, projets) et parlez-en.", "Misafidiana lohahevitra 4 ary lazao fehezanteny vitsivitsy."],
      themes: [{ titre: "Sich vorstellen", points: [
        { de: "Name? Herkunft?", mg: "Anarana? Fiaviana?", fr: "Nom ? Origine ?" }, { de: "Einkaufen?", mg: "Fiantsenana?", fr: "Courses ?" },
        { de: "Kleidung?", mg: "Akanjo?", fr: "Vêtements ?" }, { de: "Zukunftspläne?", mg: "Tetikasa ho avy?", fr: "Projets ?" } ],
        modele: `Ich heiße Miora und komme aus Madagaskar, aus Antsiranana im Norden.
Ich kaufe meistens im Supermarkt ein, aber Obst kaufe ich auf dem Markt.
Ich trage gern bequeme Kleidung, Jeans und T-Shirts. Meine Lieblingsfarbe ist Grün.
In der Zukunft möchte ich in Österreich als Krankenschwester arbeiten. Darum lerne ich Deutsch.` }],
      redemittel: [["Lohahevitra · Thèmes", ["Ich heiße … und komme aus …", "Ich kaufe meistens … ein.", "Ich trage gern …", "In der Zukunft möchte ich …"]]] },
    { id: "P2", nom: "Aufgabe 2 – Situationen beschreiben", mg: "Mamaritra sary", duree: 2, mode: "present", em: "🖼️",
      consigne: `<p>Sie bekommen drei Bilder. Wählen Sie ein Bild aus. Sprechen Sie über das Bild:</p><ul><li>Was sehen Sie?</li><li>Wie viele Personen sehen Sie?</li><li>Wo sind diese Personen?</li><li>Was machen diese Personen?</li></ul>`,
      themes: [
        { titre: "Bild 1 · Im Kleidergeschäft", bild: { e: "👗", de: "Eine Frau probiert ein Kleid vor dem Spiegel. Ihre Freundin sitzt daneben und lacht.", tr: ["Une femme essaie une robe devant le miroir ; son amie rit à côté.", "Vehivavy manandrana akanjo eo anoloan'ny fitaratra; mihomehy ny namany."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Auf dem Bild sehe ich ein Kleidergeschäft. Ich sehe zwei Frauen. Sie sind in der Umkleidekabine. Eine Frau probiert ein rotes Kleid vor dem Spiegel. Ihre Freundin sitzt daneben und lacht. Vielleicht ist das Kleid zu groß.` },
        { titre: "Bild 2 · Am Bankomat", bild: { e: "🏧", de: "Ein Mann hebt Geld ab. Hinter ihm warten zwei Personen.", tr: ["Un homme retire de l'argent ; deux personnes attendent derrière.", "Lehilahy maka vola; olona roa miandry ao aoriany."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Ich sehe einen Bankomaten auf der Straße. Auf dem Bild sind drei Personen. Ein Mann hebt Geld ab. Hinter ihm warten eine Frau und ein junger Mann. Sie sind ein bisschen ungeduldig.` },
        { titre: "Bild 3 · Im Café", bild: { e: "☕", de: "Zwei Kollegen trinken Kaffee am Fenster. Ein Kellner bringt Kuchen.", tr: ["Deux collègues boivent un café près de la fenêtre ; un serveur apporte un gâteau.", "Mpiara-miasa roa misotro kafe; mitondra mofo mamy ny mpandroso sakafo."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Auf dem Bild sehe ich ein Café. Ich sehe drei Personen: zwei Kollegen und einen Kellner. Die Kollegen sitzen am Fenster und trinken Kaffee. Der Kellner bringt Kuchen. Vielleicht machen sie Mittagspause.` } ],
      redemittel: [["Mamaritra · Décrire", ["Auf dem Bild sehe ich …", "Ich sehe … Personen.", "Sie sind im / in der / am …", "Er / Sie probiert / hebt … ab / bringt …", "Vielleicht …"]]] },
    { id: "P3", nom: "Aufgabe 3 – Miteinander sprechen", mg: "Lalao an-tsehatra", duree: 3, mode: "dialog", em: "🎭",
      consigne: `<p>Sie sind nun in der Situation des gewählten Bildes. Spielen Sie diese Situation mit Ihrer Gesprächspartnerin / Ihrem Gesprächspartner.</p><div class="plan"><b>Beispiel: Bild 1 – Im Kleidergeschäft.</b> Sie suchen eine Hose. Ihr Partner ist Verkäufer/in.</div>`,
      ctr: ["Jouez la situation : vous cherchez un pantalon ; le partenaire est vendeur.", "Ataovy ny toe-javatra: mitady pataloha ianao; ny namanao no mpivarotra."],
      partnerLabel: "Verkäuferin · Mpivarotra", av: "🛍️",
      partenaire: [
        { id: "oa1m5-p3-1", s: "f", t: "Grüß Gott! Kann ich Ihnen helfen?", aide: ["Ja, ich suche eine Hose.", "Ich brauche eine Jeans."] },
        { id: "oa1m5-p3-2", s: "f", t: "Welche Größe haben Sie?", aide: ["Größe 38.", "Ich weiß es nicht genau, vielleicht M."] },
        { id: "oa1m5-p3-3", s: "f", t: "Und welche Farbe möchten Sie?", aide: ["Schwarz oder Blau.", "Haben Sie die Hose auch in Grau?"] },
        { id: "oa1m5-p3-4", s: "f", t: "Hier, bitte. Die Kabine ist dort hinten. … Passt die Hose?", aide: ["Nein, sie ist zu lang.", "Ja, sie passt gut. Was kostet sie?"] },
        { id: "oa1m5-p3-5", s: "f", t: "Sie kostet neununddreißig Euro. Möchten Sie sie nehmen?", aide: ["Ja, ich nehme sie.", "Nein, danke. Das ist mir zu teuer."] }
      ],
      redemittel: [["Ao amin'ny magazay · Au magasin", ["Ich suche …", "Größe …", "Haben Sie das auch in …?", "Die Hose ist zu lang / kurz / groß.", "Ich nehme sie / ihn / es."]]],
      modele: `Verkäuferin: Grüß Gott! Kann ich Ihnen helfen?
Kunde: Ja, ich suche eine Hose.
Verkäuferin: Welche Größe?
Kunde: Größe 38.
Verkäuferin: Welche Farbe?
Kunde: Schwarz, bitte.
Verkäuferin: Die Kabine ist dort. … Passt die Hose?
Kunde: Ja, sie passt gut. Was kostet sie?
Verkäuferin: 39 Euro.
Kunde: Gut, ich nehme sie.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voaresaka ve ny hevitra? · Tâche réalisée ?" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "die Schneiderei", fr: "la retoucherie", mg: "toeram-panjairana", ex: "Die Schneiderei macht die Hose kürzer." },
    { de: "der Führerschein", fr: "le permis de conduire", mg: "fahazoan-dalana mitondra fiara", ex: "Ich mache den Führerschein." },
    { de: "die Lieferung", fr: "la livraison", mg: "fanaterana", ex: "Die Lieferung kostet 29 Euro." },
    { de: "das Amt", fr: "l'administration", mg: "biraom-panjakana", ex: "Ich muss zum Amt." },
    { de: "der Mietvertrag", fr: "le bail", mg: "fifanarahana fanofana", ex: "Bringen Sie den Mietvertrag mit." },
    { de: "die Semmel", fr: "le petit pain (AT)", mg: "mofo kely (Aotrisy)", ex: "Kaffee und eine Semmel." },
    { de: "ausleihen", fr: "emprunter", mg: "mindrana", ex: "Ich leihe Bücher aus." },
    { de: "die Umkleidekabine", fr: "la cabine d'essayage", mg: "efitra fanandramana akanjo", ex: "Die Kabine ist dort hinten." },
    { de: "der Kassenbon", fr: "le ticket de caisse", mg: "tapakila fandoavana", ex: "Umtausch nur mit Kassenbon." },
    { de: "der Bankomat", fr: "le distributeur (AT)", mg: "milina fakana vola", ex: "Ich hebe am Bankomat Geld ab." },
    { de: "Geld abheben", fr: "retirer de l'argent", mg: "maka vola", ex: "Kann ich hier Geld abheben?" },
    { de: "das Deka", fr: "10 grammes (AT)", mg: "grama 10 (Aotrisy)", ex: "Zwanzig Deka Käse, bitte." },
    { de: "die Bremse", fr: "le frein", mg: "frein", ex: "Die Bremsen sind kaputt." },
    { de: "das Konto", fr: "le compte", mg: "kaonty", ex: "Ich möchte ein Konto eröffnen." },
    { de: "der Greißler", fr: "l'épicier du coin (AT)", mg: "mpivarotra kely (Aotrisy)", ex: "Ich kaufe beim Greißler." },
    { de: "bequem", fr: "confortable, pratique", mg: "mora / mahafinaritra", ex: "Online kaufen ist bequem." },
    { de: "der Meldezettel", fr: "la déclaration de domicile (AT)", mg: "taratasy fanambarana fonenana", ex: "Ich brauche einen Meldezettel." },
    { de: "ledig", fr: "célibataire", mg: "tsy manambady", ex: "Ich bin ledig." },
    { de: "die Größe", fr: "la taille", mg: "habe", ex: "Welche Größe haben Sie?" },
    { de: "passen", fr: "aller (vêtement)", mg: "mety (akanjo)", ex: "Die Hose passt gut." }
  ]
});
})();
