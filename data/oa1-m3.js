/* ÖSD Zertifikat A1 — Modellsatz 3 — textes originaux H Conseil & Formation */
(function(){
const pics = (o) => Object.fromEntries(Object.entries(o).map(([k,[e,t]]) => [k, `<span style="font-size:26px">${e}</span><br>${t}`]));
window.POOLS.OA1.sets.push({
  id: "oa1m3", titre: "Modellsatz 3", theme: "Trano, mpifanolo-bodirindrina, fahasalamana",
  lesen: { temps: 25, teile: [
    { id: "L1", nom: "Aufgabe 1", type: "match", points: 10, zero: false, layout: "choixAfter",
      consigne: "Sie suchen verschiedene Dinge in der Zeitung. Finden Sie zu jeder Situation (A – E) die passende Anzeige (Nr. 1 – 6). Achtung: Eine Anzeige ist zu viel.",
      choix: {
        "1": "<b>Umzüge Schnell</b><br>Wir helfen beim Umzug – in ganz Österreich. Tel. 0660 / 11 22 33",
        "2": "<b>Tierarzt Dr. Wallner</b><br>Hunde, Katzen, Vögel. Auch am Samstag geöffnet.",
        "3": "<b>Kochkurs „Österreichische Küche“</b><br>Schnitzel, Knödel und Strudel selbst machen! Jeden Freitag.",
        "4": "<b>Putzfrau gesucht</b><br>Für Büro in Innsbruck, 2x pro Woche abends.",
        "5": "<b>Schlüsseldienst 24 Stunden</b><br>Tür zu? Schlüssel weg? Wir kommen sofort!",
        "6": "<b>Möbel gratis abzugeben</b><br>Tisch und 4 Stühle – selbst abholen, Linz-Urfahr."
      },
      items: [
        { n: 1, q: "A · Sie ziehen in eine neue Wohnung und brauchen Hilfe.", tr: ["Vous déménagez et avez besoin d'aide.", "Mifindra trano ianao ary mila fanampiana."], a: "1", exp: { mg: "Umzug = fifindrana trano.", fr: "Déménagement → 1." } },
        { n: 2, q: "B · Ihre Katze ist krank.", tr: ["Votre chat est malade.", "Marary ny saka."], a: "2", exp: { mg: "Tierarzt = dokotera biby.", fr: "Vétérinaire → 2." } },
        { n: 3, q: "C · Sie haben Ihren Wohnungsschlüssel verloren.", tr: ["Vous avez perdu la clé de votre appartement.", "Very ny fanalahidin'ny tranonao."], a: "5", exp: { mg: "« Schlüssel weg » → Schlüsseldienst.", fr: "Serrurier → 5." } },
        { n: 4, q: "D · Sie möchten typische Gerichte aus Österreich kochen lernen.", tr: ["Vous voulez apprendre à cuisiner autrichien.", "Te hianatra mahandro sakafo aotrisiana ianao."], a: "3", exp: { mg: "Kochkurs → 3.", fr: "Cours de cuisine → 3." } },
        { n: 5, q: "E · Sie brauchen billig einen Esstisch.", tr: ["Vous avez besoin d'une table pas chère.", "Mila latabatra fisakafoana mora ianao."], a: "6", exp: { mg: "« gratis » = maimaim-poana. Ny 4 (asa) no tafahoatra.", fr: "Gratuit → 6. L'annonce 4 est en trop." } }
      ] },
    { id: "L2", nom: "Aufgabe 2", type: "jn", points: 10,
      consigne: "Sie lesen drei Anzeigen. Dazu gibt es je 2 Fragen. Antworten Sie mit JA oder NEIN.",
      texte: `<div class="ads">
<div class="ad"><span class="l">A</span><b>Hausordnung – Wohnanlage Sonnenhof</b><br>Ruhezeit: 22–6 Uhr und am Sonntag.<br>Müll bitte trennen: Papier, Plastik, Glas.</div>
<div class="ad"><span class="l">B</span><b>Apotheke zum Engel</b><br>Mo–Fr 8–18 Uhr, Sa 8–12 Uhr.<br>Heute Blutdruck messen – gratis!</div>
<div class="ad"><span class="l">C</span><b>Fahrradkeller</b><br>Schlüssel beim Hausmeister, Tür 1.<br>Bitte keine Kinderwagen abstellen.</div></div>`,
      items: [
        { n: 6, q: "A · Darf man am Sonntag laut Musik hören?", tr: ["Peut-on écouter de la musique fort le dimanche ?", "Azo atao ve ny mihaino mozika mafy amin'ny alahady?"], a: "n", exp: { mg: "Alahady = Ruhezeit (fotoana fanginana).", fr: "Dimanche = temps de repos → NEIN." } },
        { n: 7, q: "A · Soll man den Müll trennen?", tr: ["Faut-il trier les déchets ?", "Tokony hosarahina ve ny fako?"], a: "j", exp: { mg: "« Müll bitte trennen ».", fr: "Oui → JA." } },
        { n: 8, q: "B · Ist die Apotheke am Samstagnachmittag offen?", tr: ["La pharmacie est-elle ouverte le samedi après-midi ?", "Misokatra ve ny fivarotam-panafody amin'ny asabotsy tolakandro?"], a: "n", exp: { mg: "Asabotsy 8–12 ihany.", fr: "Samedi jusqu'à 12 h → NEIN." } },
        { n: 9, q: "B · Kostet das Blutdruckmessen heute etwas?", tr: ["Mesurer la tension coûte-t-il quelque chose aujourd'hui ?", "Mandoa ve ny fandrefesana tosidra anio?"], a: "n", exp: { mg: "« gratis » = maimaim-poana.", fr: "Gratuit → NEIN." } },
        { n: 10, q: "C · Bekommt man den Schlüssel beim Hausmeister?", tr: ["Obtient-on la clé chez le concierge ?", "Azo amin'ny mpiambina trano ve ny fanalahidy?"], a: "j", exp: { mg: "« Schlüssel beim Hausmeister ».", fr: "Oui → JA." } },
        { n: 11, q: "C · Darf man Kinderwagen in den Keller stellen?", tr: ["Peut-on mettre une poussette à la cave ?", "Azo apetraka ao amin'ny lakaly ve ny poussette?"], a: "n", exp: { mg: "« keine Kinderwagen ».", fr: "Pas de poussettes → NEIN." } }
      ] },
    { id: "L3", nom: "Aufgabe 3", type: "match", points: 10, zero: false, layout: "textFirst",
      consigne: "Sie lesen 5 kurze Texte (Text A – E). Welches Bild (1 – 6) passt zu welchem Text? Achtung: Ein Bild ist zu viel.",
      choixTitre: "Bilder",
      choix: pics({ "1": ["🗑️", "Drei Mülltonnen in verschiedenen Farben."], "2": ["💊", "Eine Packung Tabletten."], "3": ["🔑", "Ein Schlüssel unter einer Fußmatte."], "4": ["📦", "Ein Paket vor einer Wohnungstür."], "5": ["🌱", "Blumen auf einem Balkon."], "6": ["🚿", "Eine Dusche."] }),
      texte: `<div class="ads">
<div class="ad"><span class="l">A</span>Liebe Frau Mayer, ich bin im Urlaub. Können Sie bitte meine Pflanzen gießen? Danke!</div>
<div class="ad"><span class="l">B</span>Ihr Paket haben wir vor Ihre Tür gestellt.</div>
<div class="ad"><span class="l">C</span>Bitte nur eine Tablette pro Tag, vor dem Frühstück.</div>
<div class="ad"><span class="l">D</span>Gelb für Plastik, blau für Papier, grün für Glas.</div>
<div class="ad"><span class="l">E</span>Ab 8 Uhr kein warmes Wasser – Reparatur bis 12 Uhr.</div></div>`,
      items: [
        { n: 12, q: "Text A", a: "5", exp: { mg: "« Pflanzen gießen » = manondraka zavamaniry.", fr: "Arroser les plantes." } },
        { n: 13, q: "Text B", a: "4", exp: { mg: "Paket eo anoloan'ny varavarana.", fr: "Colis devant la porte." } },
        { n: 14, q: "Text C", a: "2", exp: { mg: "Tablette → fanafody.", fr: "Comprimés." } },
        { n: 15, q: "Text D", a: "1", exp: { mg: "Loko samihafa ho an'ny fako.", fr: "Poubelles de tri." } },
        { n: 16, q: "Text E", a: "6", exp: { mg: "Rano mafana → dusche. Sary 3 no tafahoatra.", fr: "Eau chaude → douche. L'image 3 est en trop." } }
      ] }
  ] },

  hoeren: { temps: 10, teile: [
    { id: "H1", nom: "Aufgabe 1", ecoutes: 1, type: "match", points: 10, zero: false, lecture: 30,
      consigne: "Sie hören fünf verschiedene Texte zu den Fotos. Sie hören jeden Text ein Mal. Welcher Text passt zu welchem Foto? Achtung: Ein Foto ist zu viel.",
      choixTitre: "Fotos",
      choix: pics({ "A": ["🏠", "Eine Wohnungsbesichtigung"], "B": ["🦷", "Beim Zahnarzt"], "C": ["🧹", "Eine Frau putzt die Küche"], "D": ["🎉", "Eine Party mit Nachbarn"], "E": ["🛠️", "Ein Handwerker repariert eine Lampe"], "F": ["📮", "Am Postschalter"] }),
      clips: [
        { id: "oa1m3-h1-1", titre: "Text 1", script: [{ s: "f", n: "Maklerin", t: "Und hier ist das Schlafzimmer. Die Wohnung ist ab Juni frei." }], items: [{ n: 1, q: "Text 1 → Foto?", a: "A", exp: { mg: "Mijery trano hofaina.", fr: "Visite d'appartement." } }] },
        { id: "oa1m3-h1-2", titre: "Text 2", script: [{ s: "m", n: "Zahnarzt", t: "Machen Sie bitte den Mund weit auf. Tut das hier weh?" }], items: [{ n: 2, q: "Text 2 → Foto?", a: "B", exp: { mg: "« den Mund auf » → dokotera nify.", fr: "Dentiste." } }] },
        { id: "oa1m3-h1-3", titre: "Text 3", script: [{ s: "m", n: "Elektriker", t: "So, die Lampe funktioniert wieder. Es war nur ein Kabel." }], items: [{ n: 3, q: "Text 3 → Foto?", a: "E", exp: { mg: "Jiro voaamboatra.", fr: "Réparation de lampe." } }] },
        { id: "oa1m3-h1-4", titre: "Text 4", script: [{ s: "f", n: "Postbeamtin", t: "Ein Paket nach Madagaskar? Das kostet achtunddreißig Euro." }], items: [{ n: 4, q: "Text 4 → Foto?", a: "F", exp: { mg: "Paket + vidiny → paositra.", fr: "Poste." } }] },
        { id: "oa1m3-h1-5", titre: "Text 5", script: [{ s: "f2", n: "Nachbarin", t: "Prost! Schön, dass so viele Nachbarn gekommen sind!" }], items: [{ n: 5, q: "Text 5 → Foto?", a: "D", exp: { mg: "« Prost … Nachbarn » → fety. Sary C no tafahoatra.", fr: "Fête de voisins. La photo C est en trop." } }] }
      ] },
    { id: "H2", nom: "Aufgabe 2", ecoutes: 2, type: "fill", points: 10, lecture: 30,
      consigne: "Sie hören folgende Nachricht. Hören Sie gut zu und schreiben Sie die wichtigsten Informationen auf das Notizblatt. Sie hören den Text zwei Mal.",
      contexte: "Notizen · Arzttermin",
      xtr: ["Notes · Rendez-vous chez le médecin", "Naoty · Fotoana amin'ny dokotera"],
      clips: [{ id: "oa1m3-h2", titre: "Nachricht", script: [{ s: "f", n: "Ordination", t: "Grüß Gott, hier ist die Ordination Doktor Pichler. Sie haben einen neuen Termin: am Donnerstag, den fünfzehnten, um acht Uhr dreißig. Bitte kommen Sie nüchtern, also ohne Frühstück. Bringen Sie Ihre E-Card mit. Wir sind jetzt im zweiten Stock, nicht mehr im ersten. Bei Fragen: null fünf zwölf, drei vier vier sieben null. Danke!" }],
        items: [
          { n: 6, label: "Termin: Donnerstag, den", ph: "Datum", a: ["15.", "15", "fünfzehnten", "15ten"], exp: { mg: "« den fünfzehnten » = faha-15.", fr: "Le 15." } },
          { n: 7, label: "Uhrzeit:", ph: "… Uhr", a: ["8.30", "8:30", "8.30 Uhr", "8:30 Uhr", "halb neun"], exp: { mg: "8 ora sy sasany.", fr: "8 h 30." } },
          { n: 8, label: "Vorher nicht:", ph: "Was?", a: ["Frühstück", "frühstücken", "essen", "kein Frühstück"], exp: { mg: "« nüchtern, ohne Frühstück » = tsy misakafo maraina.", fr: "À jeun, sans petit-déjeuner." } },
          { n: 9, label: "Mitbringen:", ph: "Was?", a: ["E-Card", "die E-Card", "Ecard"], exp: { mg: "E-Card = karatra fiantohana (Aotrisy).", fr: "Carte d'assurance autrichienne." } },
          { n: 10, label: "Stock:", ph: "Nr.", a: ["2.", "2", "zweiten", "zweiter", "2. Stock"], exp: { mg: "« im zweiten Stock » (tsy voalohany intsony).", fr: "2e étage." } }
        ] }] },
    { id: "H3", nom: "Aufgabe 3", ecoutes: 1, type: "mc", points: 10, lecture: 10,
      consigne: "Sie hören jetzt 5 Personen, die befragt werden. Kreuzen Sie die richtigen Antworten an. Pro Person gibt es nur eine Antwort. Sie hören die Texte ein Mal.",
      contexte: "Frage: Welches Zimmer in Ihrer Wohnung mögen Sie am liebsten?",
      xtr: ["Question : quelle pièce de votre logement préférez-vous ?", "Fanontaniana: iza amin'ny efitrano ao an-tranonao no tianao indrindra?"],
      clips: [{ id: "oa1m3-h3", titre: "Umfrage", script: [
        { s: "f", n: "Person 1", t: "Ich koche sehr gern. Darum bin ich am liebsten in der Küche." },
        { s: "m", n: "Person 2", t: "Mein Schlafzimmer ist klein, aber am liebsten sitze ich im Wohnzimmer und sehe fern." },
        { s: "f2", n: "Person 3", t: "Ich habe einen kleinen Balkon mit vielen Blumen. Im Sommer frühstücke ich immer dort." },
        { s: "m2", n: "Person 4", t: "Schlafen ist mein Hobby! Mein Lieblingszimmer ist natürlich das Schlafzimmer." },
        { s: "f", n: "Person 5", t: "Nach der Arbeit nehme ich ein langes Bad. Das Badezimmer ist mein Lieblingsort." }],
        items: [
          { n: 11, q: "Person 1", opts: ["Küche", "Wohnzimmer", "Schlafzimmer", "Balkon"], a: "a", exp: { mg: "« in der Küche ».", fr: "La cuisine." } },
          { n: 12, q: "Person 2", opts: ["Küche", "Wohnzimmer", "Schlafzimmer", "Balkon"], a: "b", exp: { mg: "Efitrano fandraisam-bahiny, tsy efitrano fatoriana.", fr: "Le salon (pas la chambre)." } },
          { n: 13, q: "Person 3", opts: ["Küche", "Wohnzimmer", "Schlafzimmer", "Balkon"], a: "d", exp: { mg: "« Balkon mit vielen Blumen ».", fr: "Le balcon." } },
          { n: 14, q: "Person 4", opts: ["Küche", "Wohnzimmer", "Schlafzimmer", "Balkon"], a: "c", exp: { mg: "« das Schlafzimmer ».", fr: "La chambre." } },
          { n: 15, q: "Person 5", opts: ["Küche", "Badezimmer", "Schlafzimmer", "Balkon"], a: "b", exp: { mg: "« Badezimmer » = efitra fandroana.", fr: "La salle de bain." } }
        ] }] }
  ] },

  schreiben: { temps: 20, aufgaben: [
    { id: "S1", nom: "Aufgabe 1", temps: 8, points: 5, type: "Formular",
      consigne: `<p>Ihre Nachbarin Ravaka Rasolofo (geboren am 30. März 1987) ist neu in Graz. Sie meldet sich beim Arzt an. Sie ist bei der ÖGK versichert. Sie hat keine Allergien. Sie ist Verkäuferin. Ihre Telefonnummer ist 0676 / 334 21 19. Sie möchte Termine per SMS bekommen.</p><p>Helfen Sie Ihrer Nachbarin und füllen Sie das Formular aus.</p>`,
      ctr: ["Aidez votre voisine à remplir la fiche d'inscription chez le médecin.", "Ampio ny mpifanolo-bodirindrina aminao hameno ny taratasy any amin'ny dokotera."],
      form: { titre: "Patientenblatt – Ordination Dr. Pichler", champs: [
        { label: "Name", v: "Rasolofo" },
        { n: 1, label: "Vorname", a: ["Ravaka"] },
        { n: 2, label: "Geburtsdatum", a: ["30.03.1987", "30.3.1987", "30. März 1987", "30.03.87", "30/03/1987"] },
        { n: 3, label: "Versicherung", a: ["ÖGK", "OEGK", "ÖGK versichert"] },
        { n: 4, label: "Allergien", choix: ["ja", "nein"], a: ["nein"] },
        { n: 5, label: "Beruf", a: ["Verkäuferin", "Verkaeuferin"] },
        { n: 6, label: "Telefon", a: ["0676 / 334 21 19", "0676 334 21 19", "0676/3342119", "06763342119", "0676 3342119"] },
        { n: 7, label: "Termin-Erinnerung per", choix: ["SMS", "E-Mail", "Brief"], a: ["SMS"] }
      ] },
      exp: { mg: "ÖGK = fiantohana fahasalamana aotrisiana. Tsy misy allergie → nein.", fr: "ÖGK = caisse d'assurance autrichienne." } },
    { id: "S2", nom: "Aufgabe 2", temps: 12, mots: 30, points: 10, type: "E-Mail",
      consigne: `<p>Ihre Nachbarin Frau Hofer hat Ihnen geschrieben:</p><div class="guest"><div class="guest-h">Von: e.hofer@aon.at · Betreff: Hilfe</div><div class="guest-b">Liebe Nachbarin, lieber Nachbar! Ich fahre nächste Woche zu meiner Tochter. Können Sie meine Blumen gießen? Wann haben Sie Zeit? Ich gebe Ihnen den Schlüssel. Soll ich ihn in den Briefkasten werfen?<br>Herzliche Grüße, Elfriede Hofer</div></div><p>Antworten Sie Frau Hofer. Schreiben Sie zu jeder Frage ein bis zwei Sätze (circa 30 Wörter).</p>`,
      ctr: ["Répondez à Mme Hofer : pouvez-vous arroser ses fleurs, quand êtes-vous libre, comment récupérer la clé. ~30 mots.", "Valio i Rtoa Hofer: afaka manondraka ve ianao, rahoviana, ahoana ny fanalahidy. ~30 teny."],
      checklist: ["Liebe Frau Hofer,", "Eny / tsia: manondraka voninkazo", "Fotoana malalaka", "Fanalahidy: Briefkasten sa omena mivantana?", "Gruß + anarana", "~30 teny"],
      redemittel: ["Liebe Frau Hofer,", "natürlich gieße ich Ihre Blumen gern.", "Ich habe jeden Abend ab … Uhr Zeit.", "Bitte geben Sie mir den Schlüssel persönlich / Werfen Sie ihn in den Briefkasten.", "Gute Reise!", "Herzliche Grüße"],
      modele: `Liebe Frau Hofer,

natürlich gieße ich Ihre Blumen gern! Ich bin jeden Abend ab 18 Uhr zu Hause. Bitte werfen Sie den Schlüssel nicht in den Briefkasten. Kommen Sie lieber am Sonntag kurz zu mir.

Gute Reise!
Herzliche Grüße
Fitia` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voavaly avokoa ny fanontaniana? · Toutes les questions ?" },
    { nom: "Wortschatz", desc: "Teny mety · Vocabulaire adapté" },
    { nom: "Strukturen", desc: "Fehezanteny marina · Phrases correctes" }
  ] },

  sprechen: { preparation: 0, teile: [
    { id: "P1", nom: "Aufgabe 1 – Sich vorstellen", mg: "Mampahafantatra ny tena", duree: 2, mode: "present", em: "🙋",
      consigne: `<p>Ihre Gesprächspartnerin / Ihr Gesprächspartner möchte Sie gerne kennenlernen. Wählen Sie 4 Themen aus und sprechen Sie zu jedem Thema ein paar Sätze.</p><div class="plan"><b>Wohnung? · Familie? · Essen? · Haustiere? · Musik? · Heimatland?</b></div>`,
      ctr: ["Choisissez 4 thèmes (logement, famille, nourriture, animaux, musique, pays d'origine) et parlez-en.", "Misafidiana lohahevitra 4 ary lazao fehezanteny vitsivitsy."],
      themes: [{ titre: "Sich vorstellen", points: [
        { de: "Wohnung?", mg: "Trano?", fr: "Logement ?" }, { de: "Familie?", mg: "Fianakaviana?", fr: "Famille ?" },
        { de: "Haustiere?", mg: "Biby fiompy?", fr: "Animaux ?" }, { de: "Heimatland?", mg: "Tanindrazana?", fr: "Pays d'origine ?" } ],
        modele: `Ich wohne in einer kleinen Wohnung mit zwei Zimmern. Sie ist im dritten Stock und hat einen Balkon.
Ich lebe mit meinem Mann und unserer Tochter. Sie ist fünf Jahre alt.
Wir haben eine Katze. Sie heißt Mimi und schläft den ganzen Tag.
Mein Heimatland ist Madagaskar. Das ist eine große Insel im Indischen Ozean. Dort gibt es viele Tiere, zum Beispiel Lemuren.` }],
      redemittel: [["Lohahevitra · Thèmes", ["Ich wohne in einer Wohnung mit … Zimmern.", "Ich lebe mit …", "Wir haben einen Hund / eine Katze.", "Mein Heimatland ist … Dort gibt es …"]]] },
    { id: "P2", nom: "Aufgabe 2 – Situationen beschreiben", mg: "Mamaritra sary", duree: 2, mode: "present", em: "🖼️",
      consigne: `<p>Sie bekommen drei Bilder. Wählen Sie ein Bild aus. Sprechen Sie über das Bild:</p><ul><li>Was sehen Sie?</li><li>Wie viele Personen sehen Sie?</li><li>Wo sind diese Personen?</li><li>Was machen diese Personen?</li></ul>`,
      themes: [
        { titre: "Bild 1 · In der Apotheke", bild: { e: "💊", de: "Ein Mann steht an der Theke einer Apotheke. Die Apothekerin gibt ihm eine kleine Packung.", tr: ["Un homme au comptoir d'une pharmacie ; la pharmacienne lui donne une boîte.", "Lehilahy eo amin'ny fivarotam-panafody; manome boaty kely azy ilay mpivarotra."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Auf dem Bild sehe ich eine Apotheke. Ich sehe zwei Personen: einen Mann und eine Apothekerin. Sie sind an der Theke. Der Mann ist vielleicht krank. Die Apothekerin gibt ihm Tabletten und erklärt etwas.` },
        { titre: "Bild 2 · Umzug", bild: { e: "📦", de: "Zwei junge Männer tragen ein Sofa ins Haus. Eine Frau hält eine Kiste.", tr: ["Deux jeunes hommes portent un canapé ; une femme tient un carton.", "Tovolahy roa mitondra seza lava; vehivavy mitazona boaty."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Ich sehe ein Haus und einen Umzug. Auf dem Bild sind drei Personen. Zwei junge Männer tragen ein Sofa ins Haus. Eine Frau hält eine Kiste. Vielleicht ziehen sie in eine neue Wohnung. Es ist viel Arbeit.` },
        { titre: "Bild 3 · Im Park", bild: { e: "🐕", de: "Ein Mädchen spielt mit einem Hund auf der Wiese. Ihr Vater sitzt auf einer Bank.", tr: ["Une fillette joue avec un chien sur la pelouse ; son père est assis sur un banc.", "Zazavavy milalao amin'alika; mipetraka eo amin'ny dabilio ny rainy."] },
          points: ["Was sehen Sie?", "Wie viele Personen sehen Sie?", "Wo sind diese Personen?", "Was machen diese Personen?"],
          modele: `Auf dem Bild sehe ich einen Park. Ich sehe zwei Personen und einen Hund. Sie sind auf einer Wiese. Ein Mädchen spielt mit dem Hund. Ihr Vater sitzt auf einer Bank und liest. Das Wetter ist schön.` } ],
      redemittel: [["Mamaritra · Décrire", ["Auf dem Bild sehe ich …", "Ich sehe … Personen.", "Sie sind in der / im …", "Er / Sie trägt / hält / spielt …", "Vielleicht …"]]] },
    { id: "P3", nom: "Aufgabe 3 – Miteinander sprechen", mg: "Lalao an-tsehatra", duree: 3, mode: "dialog", em: "🎭",
      consigne: `<p>Sie sind nun in der Situation des gewählten Bildes. Spielen Sie diese Situation mit Ihrer Gesprächspartnerin / Ihrem Gesprächspartner.</p><div class="plan"><b>Beispiel: Bild 1 – In der Apotheke.</b> Sie sind krank und brauchen ein Medikament. Ihr Partner ist Apotheker/in.</div>`,
      ctr: ["Jouez la situation : à la pharmacie, vous êtes malade ; le partenaire est pharmacien.", "Ataovy ny toe-javatra: ao amin'ny fivarotam-panafody, marary ianao; ny namanao no mpivarotra fanafody."],
      partnerLabel: "Apotheker · Mpivarotra fanafody", av: "🧑‍⚕️",
      partenaire: [
        { id: "oa1m3-p3-1", s: "m", t: "Grüß Gott! Was kann ich für Sie tun?", aide: ["Ich habe Halsschmerzen.", "Ich brauche etwas gegen Husten."] },
        { id: "oa1m3-p3-2", s: "m", t: "Seit wann haben Sie das?", aide: ["Seit zwei Tagen.", "Seit gestern."] },
        { id: "oa1m3-p3-3", s: "m", t: "Haben Sie auch Fieber?", aide: ["Nein, kein Fieber.", "Ja, ein bisschen."] },
        { id: "oa1m3-p3-4", s: "m", t: "Dann nehmen Sie diese Tabletten. Dreimal am Tag, nach dem Essen.", aide: ["Was kosten die Tabletten?", "Dreimal am Tag – gut, danke."] },
        { id: "oa1m3-p3-5", s: "m", t: "Acht Euro neunzig. Gute Besserung!", aide: ["Hier, bitte. Danke schön!", "Danke! Auf Wiedersehen!"] }
      ],
      redemittel: [["Ao amin'ny fivarotam-panafody · À la pharmacie", ["Ich habe …schmerzen.", "Ich brauche etwas gegen …", "Seit … Tagen.", "Wie oft soll ich die Tabletten nehmen?", "Was kostet das?"]]],
      modele: `Apotheker: Grüß Gott! Was kann ich für Sie tun?
Kundin: Ich habe Halsschmerzen.
Apotheker: Seit wann?
Kundin: Seit zwei Tagen.
Apotheker: Haben Sie Fieber?
Kundin: Nein, kein Fieber.
Apotheker: Nehmen Sie diese Tabletten, dreimal am Tag.
Kundin: Was kosten sie?
Apotheker: 8,90 Euro. Gute Besserung!
Kundin: Danke schön! Auf Wiedersehen!` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voaresaka ve ny hevitra? · Tâche réalisée ?" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "der Umzug", fr: "le déménagement", mg: "fifindrana trano", ex: "Wir helfen beim Umzug." },
    { de: "der Tierarzt", fr: "le vétérinaire", mg: "dokotera biby", ex: "Die Katze muss zum Tierarzt." },
    { de: "der Schlüsseldienst", fr: "le serrurier", mg: "mpanamboatra hidy", ex: "Ruf den Schlüsseldienst!" },
    { de: "gratis", fr: "gratuit", mg: "maimaim-poana", ex: "Möbel gratis abzugeben." },
    { de: "die Ruhezeit", fr: "les heures de calme", mg: "fotoana fanginana", ex: "Ruhezeit ab 22 Uhr." },
    { de: "den Müll trennen", fr: "trier les déchets", mg: "manasaraka ny fako", ex: "Bitte den Müll trennen." },
    { de: "der Blutdruck", fr: "la tension artérielle", mg: "tosidra", ex: "Heute Blutdruck messen." },
    { de: "der Kinderwagen", fr: "la poussette", mg: "sarety zaza", ex: "Keine Kinderwagen im Keller." },
    { de: "gießen", fr: "arroser", mg: "manondraka", ex: "Kannst du meine Blumen gießen?" },
    { de: "die Ordination", fr: "le cabinet médical (AT)", mg: "toeram-pitsaboana (Aotrisy)", ex: "Die Ordination ist im 2. Stock." },
    { de: "nüchtern", fr: "à jeun", mg: "tsy mbola nisakafo", ex: "Bitte kommen Sie nüchtern." },
    { de: "die E-Card", fr: "la carte d'assurance (AT)", mg: "karatra fiantohana (Aotrisy)", ex: "Bringen Sie Ihre E-Card mit." },
    { de: "das Wohnzimmer", fr: "le salon", mg: "efitrano fandraisam-bahiny", ex: "Ich sitze gern im Wohnzimmer." },
    { de: "das Schlafzimmer", fr: "la chambre", mg: "efitrano fatoriana", ex: "Das Schlafzimmer ist klein." },
    { de: "das Badezimmer", fr: "la salle de bain", mg: "efitra fandroana", ex: "Das Badezimmer ist neu." },
    { de: "versichert", fr: "assuré", mg: "voaantoka", ex: "Ich bin bei der ÖGK versichert." },
    { de: "der Briefkasten", fr: "la boîte aux lettres", mg: "boaty taratasy", ex: "Wirf den Schlüssel in den Briefkasten." },
    { de: "die Halsschmerzen", fr: "le mal de gorge", mg: "aretin-tenda", ex: "Ich habe Halsschmerzen." },
    { de: "der Husten", fr: "la toux", mg: "kohaka", ex: "Ich brauche etwas gegen Husten." },
    { de: "Gute Besserung!", fr: "Bon rétablissement !", mg: "Sitrana haingana!", ex: "Gute Besserung!" }
  ]
});
})();
