/* ÖSD Zertifikat A2 — Modellsatz 4 — textes originaux H Conseil & Formation */
(function(){
window.POOLS.OA2.sets.push({
  id: "oa2m4", titre: "Modellsatz 4", theme: "Fiantsenana, sakafo, fianakaviana",
  lesen: { temps: 30, teile: [
    { id: "L1", nom: "Aufgabe 1", type: "match", points: 15, zero: false, layout: "choixFirst",
      consigne: "Lesen Sie die 10 Überschriften und die 5 Texte. Suchen Sie dann zu jedem Text (1 – 5) die passende Überschrift (A – J). Pro Text gibt es nur eine richtige Lösung.",
      choixTitre: "Überschriften",
      choix: { A: "Supermärkte verkaufen weniger Plastiksackerl", B: "Wochenmarkt jetzt auch am Abend", C: "Lebensmittel retten statt wegwerfen", D: "Neues Einkaufszentrum am Stadtrand", E: "Brot wird teurer", F: "Kochen lernen für Männer", G: "Großeltern helfen bei der Kinderbetreuung", H: "Mehr Familien mit drei Kindern", I: "Kostenloses Mittagessen in Schulen", J: "Kinder essen zu viel Zucker" },
      texte: `<div class="ads">
<div class="ad"><span class="l">1</span>In Graz gibt es jetzt eine App: Bäckereien und Restaurants bieten am Abend Essen an, das sie nicht verkauft haben – zu einem kleinen Preis. So landet weniger im Müll.</div>
<div class="ad"><span class="l">2</span>Ab September bekommen alle Volksschulkinder in Wien jeden Tag ein warmes Essen in der Schule. Die Eltern müssen dafür nichts bezahlen.</div>
<div class="ad"><span class="l">3</span>Eine neue Studie zeigt: Viele Kinder trinken jeden Tag süße Getränke und essen Schokolade. Ärzte warnen vor Problemen mit den Zähnen und dem Gewicht.</div>
<div class="ad"><span class="l">4</span>Jeden Donnerstag von 16 bis 20 Uhr kann man am Karmelitermarkt jetzt frisches Gemüse, Käse und Fleisch kaufen. Viele Berufstätige freuen sich.</div>
<div class="ad"><span class="l">5</span>Weil Mehl und Energie mehr kosten, erhöhen viele Bäcker im Jänner ihre Preise. Eine Semmel kostet dann bis zu 60 Cent.</div></div>`,
      items: [
        { n: 1, q: "Text 1", a: "C", exp: { mg: "Sakafo tsy lafo → tsy ariana.", fr: "Sauver la nourriture → C." } },
        { n: 2, q: "Text 2", a: "I", exp: { mg: "Sakafo maimaim-poana any an-tsekoly.", fr: "Repas gratuit → I." } },
        { n: 3, q: "Text 3", a: "J", exp: { mg: "Zava-pisotro mamy, sôkôla → siramamy be loatra.", fr: "Trop de sucre → J." } },
        { n: 4, q: "Text 4", a: "B", exp: { mg: "Tsena alakamisy 16–20 ora.", fr: "Marché le soir → B." } },
        { n: 5, q: "Text 5", a: "E", exp: { mg: "Mitombo ny vidin'ny mofo.", fr: "Le pain plus cher → E." } }
      ] },
    { id: "L2", nom: "Aufgabe 2", type: "mc", points: 10,
      consigne: "Lesen Sie zuerst den Text und lösen Sie dann die 5 Aufgaben. Markieren Sie die richtige Antwort. Für jede Aufgabe gibt es nur eine richtige Lösung.",
      texte: `<div class="press"><h3>Ein Restaurant für alle</h3><p class="lead">Fanja Rasoamanana (38) kocht in Wien Gerichte aus Madagaskar.</p>
<p>Vor sechs Jahren ist Fanja mit ihrem Mann nach Wien gekommen. Zuerst hat sie in einem Hotel in der Küche gearbeitet. „Die Kollegen haben immer gefragt, was ich zu Hause koche. Ich habe dann einmal Romazava mitgebracht – alle wollten das Rezept!“</p>
<p>Vor zwei Jahren hat sie ihr eigenes kleines Restaurant eröffnet, im siebten Bezirk. Es hat nur zwölf Plätze. Mittags gibt es ein Tagesmenü für 9,50 Euro, am Wochenende ist das Restaurant geschlossen. „Am Wochenende gehört die Zeit meiner Familie“, sagt Fanja.</p>
<p>Die meisten Gäste sind Österreicher, die neue Gerichte probieren möchten. Am beliebtesten ist das Zebu-Fleisch mit Reis. Für Vegetarier gibt es Gemüse mit Kokosmilch. Im Sommer möchte Fanja einen Kochkurs anbieten.</p></div>`,
      items: [
        { n: 6, q: "In Wien hat Fanja zuerst …", tr: ["À Vienne, Fanja a d'abord…", "Tany Vienne i Fanja dia…"], opts: ["ein Restaurant eröffnet.", "in einem Hotel gearbeitet.", "einen Kochkurs gemacht."], otr: [["ouvert un restaurant", "nanokatra trano fisakafoanana"], ["travaillé dans un hôtel", "niasa tao amin'ny hotely"], ["suivi un cours de cuisine", "nanaraka fampianarana fandrahoana"]], a: "b", exp: { mg: "« Zuerst hat sie in einem Hotel … gearbeitet ».", fr: "D'abord dans un hôtel." } },
        { n: 7, q: "Die Kollegen …", tr: ["Les collègues…", "Ny mpiara-miasa…"], opts: ["wollten ihr Rezept haben.", "haben nicht gern madagassisch gegessen.", "haben ihr Kochen beigebracht."], otr: [["voulaient sa recette", "naniry ny fomba fandrahoana"], ["n'aimaient pas la cuisine malgache", "tsy tia sakafo malagasy"], ["lui ont appris à cuisiner", "nampianatra azy"]], a: "a", exp: { mg: "« alle wollten das Rezept ».", fr: "Ils voulaient la recette." } },
        { n: 8, q: "Das Restaurant …", tr: ["Le restaurant…", "Ny trano fisakafoanana…"], opts: ["ist sehr groß.", "ist am Wochenende zu.", "ist nur abends offen."], otr: [["est très grand", "lehibe be"], ["est fermé le week-end", "mihidy faran'ny herinandro"], ["n'ouvre que le soir", "hariva ihany"]], a: "b", exp: { mg: "« am Wochenende … geschlossen ».", fr: "Fermé le week-end." } },
        { n: 9, q: "Die meisten Gäste …", tr: ["La plupart des clients…", "Ny ankamaroan'ny mpanjifa…"], opts: ["kommen aus Madagaskar.", "sind Österreicher.", "sind Vegetarier."], otr: [["viennent de Madagascar", "avy any Madagasikara"], ["sont autrichiens", "Aotrisiana"], ["sont végétariens", "tsy mihinana hena"]], a: "b", exp: { mg: "« Die meisten Gäste sind Österreicher ».", fr: "Des Autrichiens." } },
        { n: 10, q: "Im Sommer möchte Fanja …", tr: ["En été, Fanja veut…", "Amin'ny fahavaratra i Fanja dia te…"], opts: ["nach Madagaskar fahren.", "einen Kochkurs anbieten.", "ein zweites Restaurant öffnen."], otr: [["aller à Madagascar", "hankany Madagasikara"], ["proposer un cours de cuisine", "hanolotra fampianarana fandrahoana"], ["ouvrir un 2e restaurant", "hanokatra trano fisakafoanana faharoa"]], a: "b", exp: { mg: "« einen Kochkurs anbieten ».", fr: "Un cours de cuisine." } }
      ] }
  ] },

  hoeren: { temps: 15, teile: [
    { id: "H1", nom: "Aufgabe 1", ecoutes: 1, type: "multi", points: 10, lecture: 30,
      consigne: "Sie hören zwei verschiedene Texte mit dem gleichen Inhalt. Hören Sie gut zu und markieren Sie die Antworten. Es gibt vier richtige Antworten. Sie hören die Texte ein Mal.",
      clips: [{ id: "oa2m4-h1", titre: "Angebot im Supermarkt", script: [
        { s: "f", n: "Durchsage", t: "Liebe Kundinnen und Kunden! Diese Woche im Angebot: Äpfel aus der Steiermark, ein Kilo nur neunundneunzig Cent. Außerdem Kaffee zum halben Preis. Das Angebot gilt bis Samstag. Am Sonntag haben wir geschlossen." },
        { s: "m", n: "Mann", t: "Hast du gehört? Äpfel sind diese Woche billig." },
        { s: "f2", n: "Frau", t: "Ja, neunundneunzig Cent das Kilo. Und Kaffee kostet nur die Hälfte!" },
        { s: "m", n: "Mann", t: "Bis wann?" },
        { s: "f2", n: "Frau", t: "Bis Samstag. Milch ist leider nicht im Angebot." }],
        items: [{ n: 1, q: "Das Angebot:", tr: ["L'offre :", "Ny tolotra:"], hint: "Mariho valiny 4 · Coche 4 réponses", opts: ["Äpfel", "Milch", "99 Cent pro Kilo", "1,99 € pro Kilo", "Kaffee halber Preis", "Tee halber Preis", "bis Samstag", "bis Sonntag"], a: ["a", "c", "e", "g"], exp: { mg: "Paoma, 99 sentima, kafe antsasany, hatramin'ny asabotsy.", fr: "Pommes, 99 cents, café à moitié prix, jusqu'à samedi." } }] }] },
    { id: "H2", nom: "Aufgabe 2", ecoutes: 2, type: "fill", points: 10, lecture: 30,
      consigne: "Sie hören folgende Nachricht. Hören Sie gut zu und schreiben Sie die wichtigsten Informationen auf das Notizblatt. Sie hören den Text zwei Mal.",
      contexte: "Notizen · Familienfest",
      xtr: ["Notes · Fête de famille", "Naoty · Fety ara-pianakaviana"],
      clips: [{ id: "oa2m4-h2", titre: "Nachricht", script: [{ s: "f", n: "Tante Maria", t: "Hallo, hier ist Tante Maria! Wir feiern den siebzigsten Geburtstag von Opa. Das Fest ist am Sonntag, den neunten Juni, im Gasthaus Lindenhof in Mödling. Wir beginnen um zwölf Uhr mit dem Mittagessen. Bitte bring einen Kuchen mit, am liebsten Schokolade. Und sag mir bis Mittwoch, wie viele Personen ihr seid. Meine Nummer ist null sechs neun neun, eins acht sieben sechs fünf drei. Bussi!" }],
        items: [
          { n: 2, label: "Opa wird … Jahre alt", ph: "Alter", a: ["70", "siebzig"], exp: { mg: "« siebzigsten Geburtstag ».", fr: "70 ans." } },
          { n: 3, label: "Datum:", ph: "Tag", a: ["9. Juni", "9 Juni", "9.6.", "09.06.", "Sonntag, 9. Juni", "neunter Juni"], exp: { mg: "« den neunten Juni ».", fr: "Le 9 juin." } },
          { n: 4, label: "Ort: Gasthaus", ph: "Name", a: ["Lindenhof", "Gasthaus Lindenhof"], exp: { mg: "« Gasthaus Lindenhof ».", fr: "Lindenhof." } },
          { n: 5, label: "Mitbringen:", ph: "Was?", a: ["Kuchen", "Schokoladenkuchen", "einen Kuchen", "Schokoladekuchen"], exp: { mg: "Mofo mamy (sôkôla).", fr: "Un gâteau (au chocolat)." } },
          { n: 6, label: "Antwort bis:", ph: "Tag", a: ["Mittwoch", "Mi"], exp: { mg: "« bis Mittwoch ».", fr: "Mercredi." } }
        ] }] },
    { id: "H3", nom: "Aufgabe 3", ecoutes: 1, type: "multi", points: 10, lecture: 30,
      consigne: "Sie hören ein Interview, bei dem fünf Personen befragt werden. Kreuzen Sie in der Liste die richtigen Antworten an. Pro Person sind mehrere Antworten möglich. Sie hören die Texte ein Mal.",
      contexte: "Frage: Wer hilft in Ihrer Familie im Haushalt?",
      xtr: ["Question : qui aide aux tâches ménagères dans votre famille ?", "Fanontaniana: iza no manampy amin'ny asa an-trano ao amin'ny fianakavianao?"],
      clips: [{ id: "oa2m4-h3", titre: "Interview", script: [
        { s: "f", n: "1. Sprecherin", t: "Bei uns kocht mein Mann, und ich putze. Die Kinder helfen leider nicht." },
        { s: "m", n: "2. Sprecher", t: "Ich wohne allein, also mache ich alles selbst." },
        { s: "f2", n: "3. Sprecherin", t: "Meine Mutter wohnt bei uns. Sie kocht jeden Tag, und mein Sohn bringt den Müll raus." },
        { s: "m2", n: "4. Sprecher", t: "Meine Frau und ich teilen alles. Und unsere Tochter räumt ihr Zimmer selbst auf." },
        { s: "f", n: "5. Sprecherin", t: "Wir haben eine Putzfrau, die einmal pro Woche kommt. Kochen tun wir beide." }],
        items: [
          { n: 7, q: "1. Sprecherin", opts: ["Partner/in", "Kinder", "Großeltern", "ich allein", "Putzhilfe"], a: ["a"], exp: { mg: "Ny vadiny no mahandro; tsy manampy ny ankizy.", fr: "Le mari ; pas les enfants." } },
          { n: 8, q: "2. Sprecher", opts: ["Partner/in", "Kinder", "Großeltern", "ich allein", "Putzhilfe"], a: ["d"], exp: { mg: "« Ich wohne allein ».", fr: "Seul." } },
          { n: 9, q: "3. Sprecherin", opts: ["Partner/in", "Kinder", "Großeltern", "ich allein", "Putzhilfe"], a: ["b", "c"], exp: { mg: "Reniny (bebe) + zanany lahy.", fr: "La mère (grand-mère) + le fils." } },
          { n: 10, q: "4. Sprecher", opts: ["Partner/in", "Kinder", "Großeltern", "ich allein", "Putzhilfe"], a: ["a", "b"], exp: { mg: "Vadiny + zanany vavy.", fr: "Femme + fille." } },
          { n: 11, q: "5. Sprecherin", opts: ["Partner/in", "Kinder", "Großeltern", "ich allein", "Putzhilfe"], a: ["a", "e"], exp: { mg: "Mpanadio + izy roa mahandro.", fr: "Femme de ménage + partenaire." } }
        ] }] }
  ] },

  schreiben: { temps: 30, aufgaben: [
    { id: "S1", nom: "Schreibaufgabe", temps: 30, mots: 50, points: 15, type: "E-Mail (informell)",
      consigne: `<p>Sie bekommen von Ihrer Freundin Katrin folgendes E-Mail:</p><div class="guest"><div class="guest-h">Von: katrin.h@aon.at · Betreff: Rezept?</div><div class="guest-b">Hallo!<br>Das Essen bei dir war so lecker! Was war das für ein Gericht? Was braucht man dafür? Ist es schwer zu kochen? Und wo kann man die Zutaten in Wien kaufen?<br>Liebe Grüße, Katrin</div></div><p>Schreiben Sie Katrin eine Antwort. Beantworten Sie alle Fragen. Schreiben Sie ca. 50 Wörter.</p>`,
      ctr: ["Répondez à Katrin (~50 mots) : le nom du plat, les ingrédients, si c'est difficile, où acheter les ingrédients.", "Valio i Katrin (~50 teny): anaran'ny sakafo, akora, sarotra ve, aiza no ividianana."],
      checklist: ["Liebe Katrin,", "Anaran'ny sakafo", "Akora (Zutaten)", "Sarotra sa mora?", "Aiza no ividianana?", "Gruß + anarana", "~50 teny"],
      redemittel: ["Liebe Katrin,", "schön, dass es dir geschmeckt hat!", "Das Gericht heißt … Es kommt aus …", "Man braucht …", "Es ist gar nicht schwer: …", "Die Zutaten bekommst du im … / am …", "Liebe Grüße"],
      modele: `Liebe Katrin,

schön, dass es dir geschmeckt hat! Das Gericht heißt Romazava, es ist typisch für Madagaskar. Man braucht Rindfleisch, grünes Gemüse, Tomaten, Zwiebeln und Ingwer. Es ist gar nicht schwer, man kocht alles zusammen in einem Topf. Die Zutaten bekommst du am Naschmarkt oder im Asia-Shop.

Liebe Grüße
Lalao` }
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
        { de: "Erzählen Sie von Ihrer Familie.", mg: "Lazao ny fianakavianao.", fr: "Parlez de votre famille." },
        { de: "Wer kocht bei Ihnen zu Hause?", mg: "Iza no mahandro ao an-trano?", fr: "Qui cuisine chez vous ?" },
        { de: "Was ist ein typisches Essen in Ihrem Land?", mg: "Inona no sakafo mahazatra any amin'ny taninao?", fr: "Plat typique ?" },
        { de: "Wo kaufen Sie ein?", mg: "Aiza no iantsenanao?", fr: "Où faites-vous vos courses ?" },
        { de: "Wie feiern Sie Feste in Ihrer Familie?", mg: "Ahoana no ankalazanareo fety?", fr: "Comment fêtez-vous en famille ?" } ],
        modele: `Meine Familie ist groß: Ich habe zwei Brüder und eine Schwester. Meine Eltern wohnen noch in Mahajanga.
Bei uns zu Hause kocht meistens meine Mutter, aber am Sonntag kocht mein Vater – er macht das beste Hühnchen mit Ingwer.
Ein typisches Essen in Madagaskar ist Reis mit Romazava. Wir essen Reis dreimal am Tag!
Ich kaufe meistens auf dem Markt ein, weil das Gemüse dort frisch und billiger ist.
Feste feiern wir immer mit der ganzen Familie. Zu Neujahr kommen alle Verwandten und wir essen zusammen.` }],
      redemittel: [["Mampahafantatra · Se présenter", ["Meine Familie ist …", "Bei uns kocht meistens …", "Ein typisches Essen ist …", "Ich kaufe meistens … ein, weil …", "Feste feiern wir …"]]] },
    { id: "P2", nom: "Aufgabe 2 – Gemeinsam eine Aufgabe lösen", mg: "Mikasa zavatra miaraka", duree: 4, mode: "dialog", em: "🤝",
      consigne: `<p>Sie und Ihre Gesprächspartnerin / Ihr Gesprächspartner möchten für Freunde ein Abendessen kochen. Besprechen Sie die Fragen.</p><div class="plan"><b>Abendessen für Freunde</b><ul><li>Wie viele Gäste?</li><li>Was kochen? (Vorspeise, Hauptspeise, Nachspeise)</li><li>Wer kauft was ein?</li><li>Wann und wo?</li></ul></div>`,
      ctr: ["Organisez un dîner pour des amis : combien d'invités, menu, qui achète quoi, quand et où.", "Mandamina sakafo hariva ho an'ny namana: vahiny firy, sakafo inona, iza no mividy inona, rahoviana ary aiza."],
      partenaire: [
        { id: "oa2m4-p2-1", s: "f", t: "Also, wir wollen für unsere Freunde kochen. Wie viele Leute laden wir ein?", aide: ["Vielleicht sechs Personen?", "Nicht zu viele, meine Küche ist klein."] },
        { id: "oa2m4-p2-2", s: "f", t: "Sechs ist gut. Was kochen wir? Ich könnte eine Suppe als Vorspeise machen.", aide: ["Super! Und als Hauptspeise koche ich etwas aus Madagaskar.", "Wie wäre es mit Hühnchen und Reis?"] },
        { id: "oa2m4-p2-3", s: "f", t: "Toll. Aber Anna isst kein Fleisch. Was machen wir für sie?", aide: ["Ich mache auch Gemüse mit Kokosmilch.", "Für sie gibt es einen großen Salat."] },
        { id: "oa2m4-p2-4", s: "f", t: "Gute Idee. Und Nachspeise? Wer kauft ein?", aide: ["Ich kaufe Obst und mache einen Obstsalat.", "Du kaufst die Getränke, ich das Gemüse."] },
        { id: "oa2m4-p2-5", s: "f", t: "Gut. Wann und wo machen wir das? Fassen wir zusammen?", aide: ["Am Samstag um 19 Uhr bei mir.", "Also: Suppe, Hühnchen mit Reis, Gemüse für Anna, Obstsalat."] }
      ],
      redemittel: [["Manolotra · Proposer", ["Ich könnte … machen.", "Wie wäre es mit …?", "Als Vorspeise / Hauptspeise / Nachspeise …"]], ["Mamaly · Réagir", ["Toll!", "Aber … isst kein …", "Gute Idee."]], ["Mamarana · Conclure", ["Also: Wir kochen …", "Du kaufst …, ich kaufe …"]]],
      modele: `A: Wie viele Leute laden wir ein?
B: Sechs Personen, meine Küche ist nicht so groß.
A: Ich mache eine Suppe als Vorspeise.
B: Super! Als Hauptspeise koche ich Hühnchen mit Reis.
A: Aber Anna isst kein Fleisch.
B: Für sie mache ich Gemüse mit Kokosmilch.
A: Und als Nachspeise?
B: Ich mache einen Obstsalat. Du kaufst die Getränke?
A: Ja. Wann und wo?
B: Samstag um 19 Uhr bei mir.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Tontosa ny asa · Tâche réalisée" },
    { nom: "Interaktion", desc: "Mamaly · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "das Sackerl", fr: "le sac (AT)", mg: "kitapo (Aotrisy)", ex: "Brauchen Sie ein Sackerl?" },
    { de: "retten", fr: "sauver", mg: "mamonjy", ex: "Lebensmittel retten statt wegwerfen." },
    { de: "wegwerfen", fr: "jeter", mg: "manary", ex: "Wir werfen zu viel Essen weg." },
    { de: "die Volksschule", fr: "l'école primaire (AT)", mg: "sekoly ambaratonga voalohany", ex: "Mein Sohn geht in die Volksschule." },
    { de: "das Gewicht", fr: "le poids", mg: "lanja", ex: "Zucker ist schlecht für das Gewicht." },
    { de: "berufstätig", fr: "qui travaille", mg: "miasa", ex: "Viele Berufstätige kaufen abends ein." },
    { de: "das Mehl", fr: "la farine", mg: "lafarinina", ex: "Mehl wird teurer." },
    { de: "der Bezirk", fr: "l'arrondissement", mg: "boriborintany", ex: "Das Restaurant ist im siebten Bezirk." },
    { de: "das Tagesmenü", fr: "le menu du jour", mg: "sakafon'ny andro", ex: "Das Tagesmenü kostet 9,50 Euro." },
    { de: "das Rezept", fr: "la recette", mg: "fomba fandrahoana", ex: "Alle wollten das Rezept." },
    { de: "die Kokosmilch", fr: "le lait de coco", mg: "ronono voanio", ex: "Gemüse mit Kokosmilch." },
    { de: "das Angebot", fr: "l'offre, la promotion", mg: "tolotra", ex: "Äpfel sind im Angebot." },
    { de: "der Haushalt", fr: "le ménage", mg: "asa an-trano", ex: "Wer hilft im Haushalt?" },
    { de: "aufräumen", fr: "ranger", mg: "mandamina", ex: "Sie räumt ihr Zimmer auf." },
    { de: "die Putzfrau", fr: "la femme de ménage", mg: "mpanadio", ex: "Die Putzfrau kommt einmal pro Woche." },
    { de: "die Zutaten", fr: "les ingrédients", mg: "akora", ex: "Wo kaufe ich die Zutaten?" },
    { de: "der Ingwer", fr: "le gingembre", mg: "sakamalao", ex: "Hühnchen mit Ingwer." },
    { de: "die Verwandten", fr: "les proches, la famille", mg: "havana", ex: "Alle Verwandten kommen." },
    { de: "die Vorspeise", fr: "l'entrée", mg: "sakafo fanombohana", ex: "Als Vorspeise gibt es Suppe." },
    { de: "die Nachspeise", fr: "le dessert", mg: "tsindrin-tsakafo", ex: "Als Nachspeise mache ich Obstsalat." }
  ]
});
})();
