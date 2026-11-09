/* Goethe-Zertifikat A2 — Modellsatz 3 — textes originaux H Conseil & Formation */
(function(){
window.POOLS.GA2.sets.push({
  id: "ga2m3", titre: "Modellsatz 3", theme: "Trano, fifindrana, mpifanolo-bodirindrina",
  lesen: { temps: 30, teile: [
    { id: "L1", nom: "Teil 1", type: "mc", temps: 8,
      consigne: "Sie lesen in einer Zeitung diesen Text. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      texte: `<div class="press"><h3>Jung und Alt unter einem Dach</h3>
<p>Die Studentin Laura (21) hat ein Problem, das viele Studenten in München kennen: Die Zimmer sind sehr teuer. Herr Huber (78) hat ein anderes Problem: Seit seine Frau gestorben ist, ist seine Wohnung zu groß und er ist oft allein.</p>
<p>Seit einem Jahr wohnen die beiden zusammen – über das Projekt „Wohnen für Hilfe“. Laura bezahlt keine Miete, nur die Kosten für Strom und Wasser. Dafür hilft sie Herrn Huber: Sie kauft für ihn ein, bringt den Müll raus und geht einmal pro Woche mit ihm zum Arzt. Kochen kann Herr Huber selbst – und er macht es gern.</p>
<p>„Am Anfang war es nicht leicht“, sagt Laura. „Herr Huber geht um neun Uhr schlafen, ich lerne oft bis Mitternacht.“ Jetzt haben sie Regeln: Nach zehn Uhr ist Ruhe in der Küche. Am Sonntag spielen sie oft zusammen Karten. „Er gewinnt fast immer“, lacht Laura.</p></div>`,
      items: [
        { n: 1, q: "Herr Huber wohnt …", tr: ["M. Huber habite…", "Atoa Huber dia mipetraka…"], opts: ["mit seiner Frau.", "in einer großen Wohnung.", "in einem Studentenheim."], otr: [["avec sa femme", "miaraka amin'ny vadiny"], ["dans un grand appartement", "trano lehibe"], ["dans une résidence étudiante", "trano fonenan'ny mpianatra"]], a: "b", exp: { mg: "« seine Wohnung zu groß ». Efa maty ny vadiny.", fr: "Appartement trop grand ; sa femme est décédée." } },
        { n: 2, q: "Laura bezahlt …", tr: ["Laura paie…", "I Laura dia mandoa…"], opts: ["die volle Miete.", "nur Strom und Wasser.", "nichts."], otr: [["tout le loyer", "hofan-trano manontolo"], ["seulement l'électricité et l'eau", "jiro sy rano ihany"], ["rien", "tsy mandoa na inona na inona"]], a: "b", exp: { mg: "« keine Miete, nur die Kosten für Strom und Wasser ».", fr: "Seulement eau et électricité." } },
        { n: 3, q: "Was macht Laura nicht für Herrn Huber?", tr: ["Que ne fait PAS Laura pour M. Huber ?", "Inona no TSY ataon'i Laura?"], opts: ["Einkaufen.", "Kochen.", "Zum Arzt gehen."], otr: [["les courses", "miantsena"], ["cuisiner", "mahandro"], ["aller chez le médecin", "mankany amin'ny dokotera"]], a: "b", exp: { mg: "« Kochen kann Herr Huber selbst ».", fr: "Il cuisine lui-même." } },
        { n: 4, q: "Am Anfang war das Problem, dass …", tr: ["Au début, le problème était que…", "Tamin'ny voalohany, ny olana dia…"], opts: ["sie zu verschiedenen Zeiten schlafen.", "Laura zu viel Besuch hatte.", "Herr Huber laut war."], otr: [["ils dorment à des heures différentes", "tsy mitovy ny fotoana hatoriany"], ["Laura avait trop de visites", "be mpitsidika i Laura"], ["M. Huber faisait du bruit", "nitabataba Atoa Huber"]], a: "a", exp: { mg: "9 ora sy misasakalina: tsy mitovy.", fr: "21 h contre minuit." } },
        { n: 5, q: "Am Sonntag …", tr: ["Le dimanche…", "Amin'ny alahady…"], opts: ["kocht Laura.", "spielen sie Karten.", "lernt Laura."], otr: [["Laura cuisine", "mahandro i Laura"], ["ils jouent aux cartes", "milalao karatra izy ireo"], ["Laura étudie", "mianatra i Laura"]], a: "b", exp: { mg: "« spielen sie oft zusammen Karten ».", fr: "Ils jouent aux cartes." } }
      ] },
    { id: "L2", nom: "Teil 2", type: "mc", temps: 7, layout: "textAfter", noShuffle: true,
      consigne: "Sie lesen die Informationstafel in einem Baumarkt. Lesen Sie die Aufgaben 6 bis 10 und den Text. In welchen Stock gehen Sie? Wählen Sie die richtige Lösung a, b oder c.",
      ctr: ["Panneau d'un magasin de bricolage : à quel étage allez-vous ? a, b ou c.", "Tabilao ao amin'ny magazay fitaovana: amin'ny rihana firy ianao no mandeha?"],
      texte: `<div class="rules"><h3>BAUMARKT HAMMER – WEGWEISER</h3>
<p><b>2. Stock:</b> Küchen · Badmöbel · Lampen · Teppiche</p>
<p><b>1. Stock:</b> Farben · Tapeten · Werkzeug · Schrauben</p>
<p><b>Erdgeschoss:</b> Gartenmöbel · Pflanzen · Grill · Information · Kasse</p>
<p><b>Untergeschoss:</b> Holz · Türen · Fenster · Fliesen · Abholung großer Waren</p></div>`,
      exemple: { q: "Sie brauchen weiße Farbe für Ihr Wohnzimmer.", opts: ["Erdgeschoss", "1. Stock", "anderer Stock"], a: "b" },
      items: [
        { n: 6, q: "Sie suchen eine neue Lampe für den Flur.", tr: ["Vous cherchez une lampe pour le couloir.", "Mitady jiro vaovao ho an'ny lalantsara ianao."], opts: ["1. Stock", "2. Stock", "anderer Stock"], a: "b", exp: { mg: "« Lampen » → rihana 2.", fr: "Lampes → 2e." } },
        { n: 7, q: "Sie möchten Blumen für den Balkon kaufen.", tr: ["Vous voulez des fleurs pour le balcon.", "Te hividy voninkazo ho an'ny lavarangana ianao."], opts: ["Erdgeschoss", "Untergeschoss", "anderer Stock"], a: "a", exp: { mg: "« Pflanzen » → rihana ambany.", fr: "Plantes → rez-de-chaussée." } },
        { n: 8, q: "Sie brauchen einen Hammer.", tr: ["Vous avez besoin d'un marteau.", "Mila tantanana ianao."], opts: ["Erdgeschoss", "2. Stock", "anderer Stock"], a: "c", exp: { mg: "« Werkzeug » ao amin'ny rihana 1 → « anderer Stock ».", fr: "Outils au 1er → autre étage." } },
        { n: 9, q: "Sie haben online einen großen Schrank bestellt und möchten ihn abholen.", tr: ["Vous voulez retirer une grande armoire commandée en ligne.", "Te haka lalimoara lehibe nofaranao ianao."], opts: ["Erdgeschoss", "Untergeschoss", "anderer Stock"], a: "b", exp: { mg: "« Abholung großer Waren » → Untergeschoss.", fr: "Retrait grands articles → sous-sol." } },
        { n: 10, q: "Sie möchten ein neues Waschbecken für das Bad.", tr: ["Vous voulez un nouveau lavabo.", "Te hividy lavabo vaovao ianao."], opts: ["1. Stock", "2. Stock", "anderer Stock"], a: "b", exp: { mg: "« Badmöbel » → rihana 2.", fr: "Salle de bain → 2e." } }
      ] },
    { id: "L3", nom: "Teil 3", type: "mc", temps: 8,
      consigne: "Sie lesen eine E-Mail. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      texte: `<div class="blog"><p><b>Von:</b> m.koch@web.de · <b>Betreff:</b> Hilfe beim Umzug?</p><p>Hallo Rado,</p>
<p>wie geht es dir? Ich habe eine große Bitte: Ich ziehe am Samstag, den 22. März, in meine neue Wohnung in der Goethestraße. Kannst du mir helfen? Die anderen Freunde kommen auch, aber wir brauchen noch starke Arme!</p>
<p>Wir fangen um acht Uhr morgens an. Ich habe einen kleinen Lastwagen gemietet. Die alte Wohnung ist im vierten Stock ohne Aufzug – das wird anstrengend! Die neue Wohnung hat zum Glück einen Aufzug.</p>
<p>Mittags bestelle ich Pizza für alle, und am Abend gibt es eine kleine Party in der neuen Wohnung. Wenn du am Samstag nicht kannst: Am Sonntag muss ich noch die Küche aufbauen. Da brauche ich auch Hilfe.</p>
<p>Schreib mir bitte bald!<br>Max</p></div>`,
      items: [
        { n: 11, q: "Max schreibt Rado, weil er …", tr: ["Max écrit à Rado parce qu'il…", "Manoratra amin'i Rado i Max satria…"], opts: ["ihn zu einer Party einlädt.", "Hilfe beim Umzug braucht.", "eine Wohnung sucht."], otr: [["l'invite à une fête", "manasa azy amin'ny fety"], ["a besoin d'aide pour déménager", "mila fanampiana amin'ny fifindrana"], ["cherche un appartement", "mitady trano"]], a: "b", exp: { mg: "« Kannst du mir helfen? » — fifindrana.", fr: "Aide pour le déménagement." } },
        { n: 12, q: "Wann beginnt die Arbeit am Samstag?", tr: ["Quand commence le travail samedi ?", "Amin'ny firy no manomboka ny asa?"], opts: ["Um 8 Uhr.", "Um 12 Uhr.", "Am Abend."], otr: [["à 8 h", "8 ora"], ["à midi", "12 ora"], ["le soir", "hariva"]], a: "a", exp: { mg: "« um acht Uhr morgens ».", fr: "8 h." } },
        { n: 13, q: "Die alte Wohnung …", tr: ["L'ancien appartement…", "Ny trano taloha…"], opts: ["hat einen Aufzug.", "ist im Erdgeschoss.", "hat keinen Aufzug."], otr: [["a un ascenseur", "misy ascenseur"], ["est au rez-de-chaussée", "eo ambany"], ["n'a pas d'ascenseur", "tsy misy ascenseur"]], a: "c", exp: { mg: "« vierten Stock ohne Aufzug ». Ny vaovao no misy.", fr: "Pas d'ascenseur (le nouveau en a un)." } },
        { n: 14, q: "Zu Mittag …", tr: ["À midi…", "Antoandro…"], opts: ["kocht Max.", "gibt es Pizza.", "gehen alle ins Restaurant."], otr: [["Max cuisine", "mahandro i Max"], ["il y a de la pizza", "misy pizza"], ["tous vont au restaurant", "mankany amin'ny trano fisakafoanana"]], a: "b", exp: { mg: "« bestelle ich Pizza ».", fr: "Pizza commandée." } },
        { n: 15, q: "Am Sonntag …", tr: ["Dimanche…", "Amin'ny alahady…"], opts: ["macht Max eine Party.", "baut Max die Küche auf.", "fährt Max den Lastwagen zurück."], otr: [["Max fait la fête", "manao fety"], ["Max monte la cuisine", "mametraka ny lakozia"], ["Max rend le camion", "mamerina ny kamiao"]], a: "b", exp: { mg: "« Am Sonntag … Küche aufbauen ». Asabotsy hariva ny fety.", fr: "Monter la cuisine ; la fête est samedi soir." } }
      ] },
    { id: "L4", nom: "Teil 4", type: "match", temps: 7, zero: true,
      consigne: "Sechs Personen suchen eine Wohnung. Lesen Sie die Aufgaben 16 bis 20 und die Anzeigen a bis f. Welche Anzeige passt zu welcher Person? Für eine Aufgabe gibt es keine Lösung. Markieren Sie so: X. Die Anzeige aus dem Beispiel können Sie nicht mehr wählen.",
      ctr: ["Six personnes cherchent un logement. Quelle annonce (a–f) pour chaque personne ? Une n'a pas de solution : X.", "Olona 6 mitady trano. Iza no filazana mifanaraka? Misy iray tsy misy: X."],
      choix: {
        a: "<b>WG-Zimmer</b> in Studenten-WG, 14 m², 390 € warm, nahe Uni.",
        b: "<b>4-Zimmer-Haus</b> mit Garten, ruhige Lage am Stadtrand, Haustiere erlaubt.",
        c: "<b>1-Zimmer-Apartment</b>, möbliert, ab sofort, nur für 6 Monate.",
        d: "<b>2-Zimmer-Wohnung</b>, Erdgeschoss, barrierefrei, Bus vor der Tür.",
        e: "<b>3-Zimmer-Wohnung</b>, Zentrum, 5. Stock, Dachterrasse, keine Haustiere.",
        f: "<b>Großes Büro</b> in der Innenstadt, 80 m², ab Mai."
      },
      exemple: { q: "Nina studiert und hat wenig Geld.", a: "a" },
      items: [
        { n: 16, q: "Familie Bauer hat drei Kinder und einen Hund.", tr: ["La famille Bauer a trois enfants et un chien.", "Manan-janaka 3 sy alika ny fianakaviana Bauer."], a: "b", exp: { mg: "Trano 4 efitrano, zaridaina, « Haustiere erlaubt ».", fr: "Maison avec jardin, animaux acceptés → b." } },
        { n: 17, q: "Herr Lind sitzt im Rollstuhl.", tr: ["M. Lind est en fauteuil roulant.", "Mipetraka amin'ny seza misy kodiarana Atoa Lind."], a: "d", exp: { mg: "« Erdgeschoss, barrierefrei ».", fr: "Rez-de-chaussée accessible → d." } },
        { n: 18, q: "Eine Ingenieurin arbeitet ein halbes Jahr in der Stadt und hat keine Möbel.", tr: ["Une ingénieure travaille six mois en ville, sans meubles.", "Injeniera miasa enim-bolana, tsy manana fanaka."], a: "c", exp: { mg: "« möbliert … nur für 6 Monate ».", fr: "Meublé, 6 mois → c." } },
        { n: 19, q: "Ein Paar mit einer Katze möchte im Zentrum wohnen.", tr: ["Un couple avec un chat veut habiter au centre.", "Mpivady manana saka te hipetraka afovoan-tanàna."], a: "0", exp: { mg: "Ny e ao afovoany fa « keine Haustiere » → X.", fr: "e interdit les animaux → X." } },
        { n: 20, q: "Herr Wolf sucht Räume für seine kleine Firma.", tr: ["M. Wolf cherche des locaux pour sa petite entreprise.", "Mitady efitrano ho an'ny orinasany kely Atoa Wolf."], a: "f", exp: { mg: "« Großes Büro ».", fr: "Bureau → f." } }
      ] }
  ] },

  hoeren: { temps: 30, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 2, type: "mc",
      consigne: "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      clips: [
        { id: "ga2m3-h1-1", titre: "Text 1", script: [{ s: "m", n: "Hausmeister", t: "Hallo, hier ist Herr Lenz, der Hausmeister. Morgen von acht bis zwölf Uhr gibt es kein Wasser im Haus. Bitte füllen Sie heute Abend ein paar Flaschen." }],
          items: [{ n: 1, q: "Was sollen die Mieter heute tun?", tr: ["Que doivent faire les locataires aujourd'hui ?", "Inona no tokony hataon'ny mpanofa anio?"], opts: ["Den Hausmeister anrufen.", "Wasser in Flaschen füllen.", "Um acht Uhr zu Hause sein."], otr: [["appeler le concierge", "miantso ny mpiambina"], ["remplir des bouteilles d'eau", "mameno tavoahangy rano"], ["être chez soi à 8 h", "ao an-trano 8 ora"]], a: "b", exp: { mg: "« füllen Sie heute Abend ein paar Flaschen ».", fr: "Remplir des bouteilles." } }] },
        { id: "ga2m3-h1-2", titre: "Text 2", script: [{ s: "f", n: "Radio", t: "Sie suchen eine Wohnung? Am Samstag ist in der Stadthalle die große Wohnungsmesse. Der Eintritt ist frei, Beginn ist um zehn Uhr." }],
          items: [{ n: 2, q: "Was kostet der Eintritt?", tr: ["Combien coûte l'entrée ?", "Ohatrinona ny fidirana?"], opts: ["Nichts.", "Zehn Euro.", "Fünf Euro."], otr: [["rien", "maimaim-poana"], ["10 €", "10 €"], ["5 €", "5 €"]], a: "a", exp: { mg: "« Der Eintritt ist frei ». Ny 10 dia ora.", fr: "Gratuit ; 10 = l'heure." } }] },
        { id: "ga2m3-h1-3", titre: "Text 3", script: [{ s: "f", n: "Frau Klein", t: "Hallo, hier ist Frau Klein aus dem zweiten Stock. Ich habe ein Paket für Sie angenommen. Sie können es heute ab achtzehn Uhr bei mir abholen." }],
          items: [{ n: 3, q: "Wo ist das Paket?", tr: ["Où est le colis ?", "Aiza ny entana?"], opts: ["Bei der Post.", "Bei der Nachbarin.", "Vor der Tür."], otr: [["à la poste", "paositra"], ["chez la voisine", "any amin'ny mpifanolo-bodirindrina"], ["devant la porte", "eo anoloan'ny varavarana"]], a: "b", exp: { mg: "« Ich habe ein Paket … angenommen » → any aminy.", fr: "Chez la voisine." } }] },
        { id: "ga2m3-h1-4", titre: "Text 4", script: [{ s: "m", n: "Durchsage", t: "Liebe Kunden, heute im Möbelhaus Wohnglück: Alle Sofas dreißig Prozent billiger. Das Angebot gilt nur bis Samstag." }],
          items: [{ n: 4, q: "Was ist im Angebot?", tr: ["Qu'est-ce qui est en promotion ?", "Inona no mihena vidiny?"], opts: ["Betten.", "Sofas.", "Tische."], otr: [["lits", "fandriana"], ["canapés", "seza lava"], ["tables", "latabatra"]], a: "b", exp: { mg: "« Alle Sofas dreißig Prozent billiger ».", fr: "Les canapés." } }] },
        { id: "ga2m3-h1-5", titre: "Text 5", script: [{ s: "m", n: "Tom", t: "Hi Sophie, hier ist Tom. Die Wohnungsbesichtigung ist nicht um drei, sondern schon um zwei Uhr. Wir treffen uns direkt vor dem Haus." }],
          items: [{ n: 5, q: "Wann ist die Besichtigung?", tr: ["Quand a lieu la visite ?", "Amin'ny firy ny fitsidihana?"], opts: ["Um 2 Uhr.", "Um 3 Uhr.", "Um 4 Uhr."], otr: [["14 h", "2 ora"], ["15 h", "3 ora"], ["16 h", "4 ora"]], a: "a", exp: { mg: "« nicht um drei, sondern schon um zwei ».", fr: "À 2 h." } }] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 1, type: "match", zero: false, lecture: 30,
      consigne: "Sie hören ein Gespräch. Sie hören den Text einmal. Wählen Sie für die Aufgaben 6 bis 10 ein passendes Bild aus a bis i. Wählen Sie jeden Buchstaben nur einmal.",
      contexte: "Wo stellen sie die Möbel in der neuen Wohnung hin?",
      xtr: ["Où mettent-ils les meubles dans le nouvel appartement ?", "Aiza no hametrahan'izy ireo ny fanaka ao amin'ny trano vaovao?"],
      choixTitre: "Bilder",
      choix: { a: "🛋️ Wohnzimmer", b: "🍳 Küche", c: "🛏️ Schlafzimmer", d: "🛁 Bad", e: "🚪 Flur", f: "🌿 Balkon", g: "🧸 Kinderzimmer", h: "📦 Keller", i: "💻 Arbeitszimmer" },
      clips: [{ id: "ga2m3-h2", titre: "Gespräch", script: [
        { s: "m", n: "Mann", t: "So, wohin kommt der große Spiegel?" },
        { s: "f", n: "Frau", t: "Der Spiegel kommt in den Flur, dann sieht man sich, bevor man rausgeht." },
        { s: "m", n: "Mann", t: "Gut. Und der kleine Tisch?" },
        { s: "f", n: "Frau", t: "Den stellen wir auf den Balkon. Im Sommer frühstücken wir dort." },
        { s: "m", n: "Mann", t: "Der Schreibtisch?" },
        { s: "f", n: "Frau", t: "Ins Arbeitszimmer natürlich. Nein, warte – ins Kinderzimmer. Lea braucht ihn für die Hausaufgaben." },
        { s: "m", n: "Mann", t: "Okay. Und die alten Bücherkisten?" },
        { s: "f", n: "Frau", t: "Die bringen wir in den Keller." },
        { s: "m", n: "Mann", t: "Und das Regal mit den Pflanzen?" },
        { s: "f", n: "Frau", t: "Das kommt ins Bad. Dort ist es hell und warm." }],
        items: [
          { n: 6, q: "Spiegel", tr: ["miroir", "fitaratra"], a: "e", exp: { mg: "« in den Flur ».", fr: "Couloir." } },
          { n: 7, q: "kleiner Tisch", tr: ["petite table", "latabatra kely"], a: "f", exp: { mg: "« auf den Balkon ».", fr: "Balcon." } },
          { n: 8, q: "Schreibtisch", tr: ["bureau", "latabatra fanoratana"], a: "g", exp: { mg: "Niova hevitra: tsy Arbeitszimmer fa Kinderzimmer.", fr: "Piège : chambre d'enfant, pas bureau." } },
          { n: 9, q: "Bücherkisten", tr: ["cartons de livres", "boatin'ny boky"], a: "h", exp: { mg: "« in den Keller ».", fr: "Cave." } },
          { n: 10, q: "Regal mit Pflanzen", tr: ["étagère à plantes", "talantalana misy zavamaniry"], a: "d", exp: { mg: "« ins Bad ».", fr: "Salle de bain." } }
        ] }] },
    { id: "H3", nom: "Teil 3", ecoutes: 1, type: "mc",
      consigne: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      clips: [
        { id: "ga2m3-h3-11", titre: "Gespräch 1", script: [{ s: "f", n: "Frau", t: "Wie hoch ist die Miete?" }, { s: "m", n: "Vermieter", t: "Siebenhundert Euro warm. Dazu kommen noch fünfzig Euro für den Parkplatz, wenn Sie einen brauchen." }, { s: "f", n: "Frau", t: "Ich habe kein Auto." }],
          items: [{ n: 11, q: "Wie viel bezahlt die Frau im Monat?", tr: ["Combien la femme paie-t-elle par mois ?", "Ohatrinona no aloan'ilay vehivavy isam-bolana?"], opts: ["650 Euro.", "700 Euro.", "750 Euro."], otr: [["650 €", "650 €"], ["700 €", "700 €"], ["750 €", "750 €"]], a: "b", exp: { mg: "Tsy manana fiara → tsy mila parking → 700 €.", fr: "Pas de voiture → 700 €." } }] },
        { id: "ga2m3-h3-12", titre: "Gespräch 2", script: [{ s: "m", n: "Nachbar", t: "Entschuldigung, Ihre Musik ist ziemlich laut. Ich muss morgen früh arbeiten." }, { s: "f", n: "Nachbarin", t: "Oh, das tut mir leid! Ich mache sie sofort leiser." }],
          items: [{ n: 12, q: "Was macht die Frau?", tr: ["Que fait la femme ?", "Inona no ataon'ilay vehivavy?"], opts: ["Sie macht die Musik leiser.", "Sie macht eine Party.", "Sie geht schlafen."], otr: [["elle baisse la musique", "mampihena ny feon'ny mozika"], ["elle fait une fête", "manao fety"], ["elle va dormir", "matory"]], a: "a", exp: { mg: "« Ich mache sie sofort leiser ».", fr: "Elle baisse le son." } }] },
        { id: "ga2m3-h3-13", titre: "Gespräch 3", script: [{ s: "f", n: "Frau", t: "Wann kommt der Techniker für die Waschmaschine?" }, { s: "m", n: "Mann", t: "Er wollte heute kommen, aber er hat angerufen. Jetzt kommt er erst übermorgen." }],
          items: [{ n: 13, q: "Wann kommt der Techniker?", tr: ["Quand vient le technicien ?", "Rahoviana no ho avy ny teknisianina?"], opts: ["Heute.", "Morgen.", "Übermorgen."], otr: [["aujourd'hui", "anio"], ["demain", "rahampitso"], ["après-demain", "rahafakampitso"]], a: "c", exp: { mg: "« erst übermorgen » = rahafakampitso.", fr: "Après-demain." } }] },
        { id: "ga2m3-h3-14", titre: "Gespräch 4", script: [{ s: "m", n: "Mann", t: "Hilfst du mir am Wochenende, das Kinderzimmer zu streichen?" }, { s: "f", n: "Frau", t: "Samstag kann ich nicht, da arbeite ich. Aber Sonntag gern!" }],
          items: [{ n: 14, q: "Wann hilft die Frau?", tr: ["Quand la femme aide-t-elle ?", "Rahoviana no manampy ilay vehivavy?"], opts: ["Am Samstag.", "Am Sonntag.", "Gar nicht."], otr: [["samedi", "asabotsy"], ["dimanche", "alahady"], ["pas du tout", "tsy manampy mihitsy"]], a: "b", exp: { mg: "« Sonntag gern ».", fr: "Dimanche." } }] },
        { id: "ga2m3-h3-15", titre: "Gespräch 5", script: [{ s: "f", n: "Kundin", t: "Ich möchte den Schrank liefern lassen. Geht das am Montag?" }, { s: "m", n: "Verkäufer", t: "Montag und Dienstag sind schon voll. Mittwoch hätte ich noch einen Termin." }, { s: "f", n: "Kundin", t: "Gut, dann Mittwoch." }],
          items: [{ n: 15, q: "Wann wird der Schrank geliefert?", tr: ["Quand l'armoire est-elle livrée ?", "Rahoviana no aterina ny lalimoara?"], opts: ["Am Montag.", "Am Dienstag.", "Am Mittwoch."], otr: [["lundi", "alatsinainy"], ["mardi", "talata"], ["mercredi", "alarobia"]], a: "c", exp: { mg: "Feno ny alatsinainy sy talata → alarobia.", fr: "Mercredi." } }] }
      ] },
    { id: "H4", nom: "Teil 4", ecoutes: 2, type: "jn", lecture: 30,
      consigne: "Sie hören ein Interview. Sie hören den Text zweimal. Wählen Sie für die Aufgaben 16 bis 20 Ja oder Nein.",
      contexte: "Die Moderatorin spricht mit Herrn Krüger über sein Leben in einem Tiny House.",
      xtr: ["La présentatrice parle avec M. Krüger de sa vie dans une mini-maison.", "Miresaka amin'Atoa Krüger momba ny fiainany ao anaty trano kely ny mpanentana."],
      clips: [{ id: "ga2m3-h4", titre: "Interview", script: [
        { s: "f", n: "Moderatorin", t: "Herr Krüger, Sie wohnen in einem Haus mit nur zwanzig Quadratmetern. Warum?" },
        { s: "m", n: "Herr Krüger", t: "Früher hatte ich eine Wohnung mit hundert Quadratmetern in der Stadt. Ich habe viel gearbeitet, nur um die Miete zu bezahlen. Jetzt brauche ich viel weniger Geld." },
        { s: "f", n: "Moderatorin", t: "Haben Sie das Haus selbst gebaut?" },
        { s: "m", n: "Herr Krüger", t: "Nein, ich habe es gekauft. Aber die Möbel habe ich alle selbst gemacht – ich bin Schreiner." },
        { s: "f", n: "Moderatorin", t: "Fehlt Ihnen nicht der Platz?" },
        { s: "m", n: "Herr Krüger", t: "Manchmal im Winter, wenn ich viel drinnen bin. Im Sommer lebe ich fast nur im Garten." },
        { s: "f", n: "Moderatorin", t: "Und Besuch?" },
        { s: "m", n: "Herr Krüger", t: "Meine Kinder besuchen mich gern, aber übernachten können sie hier nicht. Dafür gibt es ein Gasthaus im Dorf." }],
        items: [
          { n: 16, q: "Herr Krüger hat früher in der Stadt gewohnt.", tr: ["M. Krüger habitait en ville avant.", "Nipetraka tao an-tanàna Atoa Krüger taloha."], a: "j", exp: { mg: "« Wohnung … in der Stadt ».", fr: "Ja." } },
          { n: 17, q: "Er hat das Haus selbst gebaut.", tr: ["Il a construit la maison lui-même.", "Izy no nanorina ny trano."], a: "n", exp: { mg: "« ich habe es gekauft ». Ny fanaka ihany no nataony.", fr: "Achetée ; il a fait les meubles → Nein." } },
          { n: 18, q: "Er ist Schreiner von Beruf.", tr: ["Il est menuisier.", "Mpandrafitra izy."], a: "j", exp: { mg: "« ich bin Schreiner ».", fr: "Ja." } },
          { n: 19, q: "Im Winter ist der Platz manchmal zu klein.", tr: ["En hiver, l'espace est parfois trop petit.", "Kely loatra indraindray ny toerana amin'ny ririnina."], a: "j", exp: { mg: "« Manchmal im Winter ».", fr: "Ja." } },
          { n: 20, q: "Seine Kinder schlafen bei ihm im Haus.", tr: ["Ses enfants dorment chez lui.", "Matory ao aminy ny zanany."], a: "n", exp: { mg: "« übernachten können sie hier nicht ».", fr: "Ils dorment à l'auberge → Nein." } }
        ] }] }
  ] },

  schreiben: { temps: 30, aufgaben: [
    { id: "S1", nom: "Teil 1", temps: 10, mots: 25, points: 10, type: "SMS (informell)",
      consigne: `<p>Sie sind in eine neue Wohnung gezogen. Schreiben Sie eine SMS an Ihren Freund Leon:</p><ul><li>Erzählen Sie, wie die Wohnung ist.</li><li>Laden Sie ihn ein.</li><li>Nennen Sie Tag und Uhrzeit.</li></ul><p class="small">Schreiben Sie 20–30 Wörter.</p>`,
      ctr: ["SMS à Leon : décrivez le nouvel appartement, invitez-le, donnez le jour et l'heure. 20–30 mots.", "SMS ho an'i Leon: lazao ny trano vaovao, asao izy, lazao ny andro sy ora. 20–30 teny."],
      checklist: ["Hallo Leon,", "Ahoana ny trano (groß, hell …)", "Fanasana", "Andro + ora", "Gruß", "20–30 teny"],
      redemittel: ["Hallo Leon,", "ich wohne jetzt in meiner neuen Wohnung!", "Sie ist hell und hat einen Balkon.", "Komm doch am … um … Uhr vorbei!", "Bis bald!"],
      modele: `Hallo Leon,
ich wohne jetzt in meiner neuen Wohnung! Sie ist klein, aber hell und hat einen Balkon. Komm doch am Freitag um 19 Uhr vorbei. Ich koche für uns!
Bis bald
Sitraka` },
    { id: "S2", nom: "Teil 2", temps: 20, mots: 35, points: 15, type: "E-Mail (halbformell)",
      consigne: `<p>In Ihrer Wohnung funktioniert seit einer Woche die Heizung nicht. Schreiben Sie an Ihre Vermieterin, Frau Böhm:</p><ul><li>Beschreiben Sie das Problem.</li><li>Bitten Sie um schnelle Reparatur.</li><li>Sagen Sie, wann Sie zu Hause sind.</li></ul><p class="small">Schreiben Sie 30–40 Wörter. Schreiben Sie eine Anrede und einen Gruß.</p>`,
      ctr: ["E-mail à la propriétaire : décrivez le problème de chauffage, demandez une réparation rapide, dites quand vous êtes chez vous. 30–40 mots.", "Mailaka ho an'ny tompon-trano: lazao ny olana, angataho fanamboarana haingana, lazao ny fotoana ao an-trano. 30–40 teny."],
      checklist: ["Sehr geehrte Frau Böhm,", "Olana (seit einer Woche …)", "Fangatahana fanamboarana haingana", "Fotoana ao an-trano", "Mit freundlichen Grüßen", "« Sie »", "30–40 teny"],
      redemittel: ["Sehr geehrte Frau Böhm,", "leider funktioniert die Heizung in meiner Wohnung seit einer Woche nicht.", "Es ist sehr kalt.", "Können Sie bitte bald einen Techniker schicken?", "Ich bin jeden Tag ab … Uhr zu Hause.", "Mit freundlichen Grüßen"],
      modele: `Sehr geehrte Frau Böhm,

leider funktioniert die Heizung in meiner Wohnung seit einer Woche nicht. Es ist sehr kalt, besonders am Abend. Können Sie bitte schnell einen Techniker schicken? Ich bin jeden Tag ab 16 Uhr zu Hause.

Mit freundlichen Grüßen
Tahina Randria` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Teboka 3 voavaly? · Les 3 points ?" },
    { nom: "Kohärenz", desc: "Fehezanteny mifandray · Enchaînement" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" }
  ] },

  sprechen: { preparation: 0, teile: [
    { id: "P1", nom: "Teil 1 – Fragen zur Person", mg: "Fanontaniana amin'ny karatra", duree: 3, mode: "dialog", em: "🃏",
      consigne: `<p>Sie bekommen vier Karten und stellen mit diesen Karten vier Fragen. Ihr Partner / Ihre Partnerin antwortet. Dann stellt Ihr Partner / Ihre Partnerin vier Fragen und Sie antworten.</p><div class="plan">Ihre Karten: <b>Wohnung? · Nachbarn? · Haustier? · Garten?</b></div>`,
      partenaire: [
        { id: "ga2m3-p1-1", t: "Wie ist deine Wohnung?", cue: "Valio. · Réponds.", aide: ["Meine Wohnung ist klein, aber gemütlich.", "Ich wohne in einem Haus mit drei Zimmern."] },
        { id: "ga2m3-p1-2", t: "Schön. Deine Karte: „Nachbarn“.", cue: "Manontania. · Pose ta question.", aide: ["Wie sind deine Nachbarn?", "Kennst du deine Nachbarn?"] },
        { id: "ga2m3-p1-3", t: "Sehr nett, wir grillen manchmal zusammen. Meine Frage: Hast du ein Haustier?", cue: "Valio. · Réponds.", aide: ["Ja, ich habe eine Katze.", "Nein, aber ich hätte gern einen Hund."] },
        { id: "ga2m3-p1-4", t: "Ah, schön. Deine letzte Karte: „Garten“.", cue: "Manontania. · Question.", aide: ["Hast du einen Garten?", "Arbeitest du gern im Garten?"] },
        { id: "ga2m3-p1-5", t: "Nein, leider nur einen kleinen Balkon. Letzte Frage: Wohnst du gern in deiner Stadt?", cue: "Valio. · Réponds.", aide: ["Ja, sehr gern, weil …", "Es geht. Die Stadt ist zu laut."] }
      ],
      redemittel: [["Manontany · Demander", ["Wie ist deine Wohnung?", "Wie sind deine Nachbarn?", "Hast du ein Haustier?", "Hast du einen Garten?"]], ["Mamaly · Répondre", ["Meine Wohnung ist …", "Meine Nachbarn sind …", "Ja, ich habe … / Nein, …", "Leider nur …"]]],
      modele: `A: Wie ist deine Wohnung?
B: Klein, aber gemütlich. Sie hat zwei Zimmer.
B: Wie sind deine Nachbarn?
A: Sehr nett, wir grillen manchmal zusammen.
A: Hast du ein Haustier?
B: Ja, eine Katze. Sie heißt Minou.
B: Hast du einen Garten?
A: Nein, leider nur einen kleinen Balkon.` },
    { id: "P2", nom: "Teil 2 – Über sich sprechen", mg: "Mitantara ny fiainanao", duree: 3, mode: "present", em: "🗣️",
      consigne: `<p>Sie bekommen eine Karte und erzählen etwas über Ihr Leben.</p>`,
      themes: [{ titre: "Wie wohnen Sie?", points: [
        { de: "Wo?", mg: "Aiza?", fr: "Où ?" }, { de: "Mit wem?", mg: "Miaraka amin'iza?", fr: "Avec qui ?" },
        { de: "Zimmer?", mg: "Efitrano?", fr: "Pièces ?" }, { de: "Was gefällt Ihnen (nicht)?", mg: "Inona no tianao / tsy tianao?", fr: "Ce qui vous plaît (ou pas) ?" } ],
        modele: `Ich wohne in Antananarivo, im Stadtteil Ankadifotsy. Das ist ziemlich zentral.
Ich wohne mit meiner Frau und unseren zwei Kindern zusammen.
Unsere Wohnung hat drei Zimmer, eine Küche und ein kleines Bad.
Mir gefällt, dass wir einen schönen Blick über die Stadt haben. Nicht so gut finde ich, dass es oft laut ist, weil die Straße sehr nah ist.` }],
      redemittel: [["Mitantara · Raconter", ["Ich wohne in …, im Stadtteil …", "Ich wohne mit … zusammen.", "Die Wohnung hat … Zimmer.", "Mir gefällt, dass …", "Nicht so gut finde ich, dass …"]]] },
    { id: "P3", nom: "Teil 3 – Etwas gemeinsam planen", mg: "Mitady fotoana iombonana", duree: 3, mode: "dialog", em: "📅",
      consigne: `<p>Ihre Freundin Mia zieht um. Sie möchten ihr zusammen mit Ihrem Partner / Ihrer Partnerin helfen. Finden Sie einen Termin.</p><div class="plan"><b>Ihr Kalender – Samstag, 12. April</b><br>9–11 Uhr: Einkaufen · 11.30 Uhr: Friseur · 13–15 Uhr: frei · 15.30 Uhr: Kaffee bei Tante Rosa · ab 18 Uhr: frei</div>`,
      ctr: ["Vous voulez aider Mia à déménager. Trouvez un moment selon votre agenda.", "Te hanampy an'i Mia hifindra ianareo. Mitadiava fotoana."],
      partenaire: [
        { id: "ga2m3-p3-1", t: "Hallo! Wollen wir Mia am Samstagmorgen helfen? So um neun?", cue: "9–11 = fiantsenana. · Courses.", aide: ["Um neun gehe ich leider einkaufen.", "Das geht nicht, da habe ich keine Zeit."] },
        { id: "ga2m3-p3-2", t: "Hm. Und um halb zwölf?", cue: "11.30 = mpanety volo. · Coiffeur.", aide: ["Da bin ich beim Friseur.", "Wie wäre es um eins?"] },
        { id: "ga2m3-p3-3", t: "Um eins passt mir gut! Aber nur bis drei, oder?", cue: "15.30 = Tante Rosa. · Café chez tante Rosa.", aide: ["Ja, um halb vier muss ich zu meiner Tante.", "Am Abend habe ich auch noch Zeit."] },
        { id: "ga2m3-p3-4", t: "Okay. Was bringen wir mit? Mia hat bestimmt nichts zu essen.", cue: "Manolora. · Propose.", aide: ["Ich bringe Brötchen und Getränke mit.", "Wir können Pizza bestellen."] }
      ],
      redemittel: [["Manolotra · Proposer", ["Wie wäre es um …?", "Hast du um … Zeit?", "Ich bringe … mit."]], ["Mandà · Refuser", ["Um … kann ich leider nicht.", "Da bin ich beim …"]], ["Manaiky · Accepter", ["Das passt mir gut!", "Einverstanden.", "Gute Idee!"]]],
      modele: `A: Wollen wir Mia am Samstag um neun helfen?
B: Um neun gehe ich leider einkaufen.
A: Und um halb zwölf?
B: Da bin ich beim Friseur. Wie wäre es um eins?
A: Um eins passt mir gut.
B: Aber ich kann nur bis drei, dann muss ich zu meiner Tante.
A: Kein Problem. Was bringen wir mit?
B: Ich bringe Brötchen und Getränke mit.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Tontosa ny asa · Tâche réalisée" },
    { nom: "Interaktion", desc: "Mamaly ny namanao · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "die Miete", fr: "le loyer", mg: "hofan-trano", ex: "Die Miete ist sehr teuer." },
    { de: "warm (Miete)", fr: "charges comprises", mg: "tafiditra ny sarany", ex: "700 Euro warm." },
    { de: "der Strom", fr: "l'électricité", mg: "herinaratra", ex: "Sie bezahlt Strom und Wasser." },
    { de: "den Müll rausbringen", fr: "sortir les poubelles", mg: "mamoaka ny fako", ex: "Laura bringt den Müll raus." },
    { de: "die Regel", fr: "la règle", mg: "fitsipika", ex: "Wir haben Regeln." },
    { de: "der Baumarkt", fr: "le magasin de bricolage", mg: "magazay fitaovana", ex: "Im Baumarkt kaufe ich Farbe." },
    { de: "das Werkzeug", fr: "les outils", mg: "fitaovana", ex: "Werkzeug ist im 1. Stock." },
    { de: "der Umzug", fr: "le déménagement", mg: "fifindrana", ex: "Hilfst du mir beim Umzug?" },
    { de: "der Lastwagen", fr: "le camion", mg: "kamiao", ex: "Ich habe einen Lastwagen gemietet." },
    { de: "anstrengend", fr: "fatigant", mg: "mandreraka", ex: "Das wird anstrengend!" },
    { de: "barrierefrei", fr: "accessible (handicap)", mg: "azon'ny sembana idirana", ex: "Die Wohnung ist barrierefrei." },
    { de: "möbliert", fr: "meublé", mg: "misy fanaka", ex: "Ein möbliertes Apartment." },
    { de: "die Besichtigung", fr: "la visite", mg: "fitsidihana", ex: "Die Besichtigung ist um zwei." },
    { de: "der Spiegel", fr: "le miroir", mg: "fitaratra", ex: "Der Spiegel kommt in den Flur." },
    { de: "der Flur", fr: "le couloir", mg: "lalantsara", ex: "Im Flur ist es dunkel." },
    { de: "leiser machen", fr: "baisser (le son)", mg: "mampihena feo", ex: "Ich mache die Musik leiser." },
    { de: "übermorgen", fr: "après-demain", mg: "rahafakampitso", ex: "Er kommt übermorgen." },
    { de: "streichen", fr: "peindre (un mur)", mg: "mandoko", ex: "Wir streichen das Kinderzimmer." },
    { de: "der Schreiner", fr: "le menuisier", mg: "mpandrafitra", ex: "Er ist Schreiner." },
    { de: "übernachten", fr: "passer la nuit", mg: "mandry (alina)", ex: "Sie können hier nicht übernachten." },
    { de: "der Vermieter", fr: "le propriétaire (bailleur)", mg: "tompon-trano", ex: "Ich schreibe dem Vermieter." }
  ]
});
})();
