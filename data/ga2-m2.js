/* Goethe-Zertifikat A2 — Modellsatz 2 — textes originaux H Conseil & Formation */
(function(){
window.POOLS.GA2.sets.push({
  id: "ga2m2", titre: "Modellsatz 2", theme: "Asa, fiofanana, fahasalamana",
  lesen: { temps: 30, teile: [
    { id: "L1", nom: "Teil 1", type: "mc", temps: 8,
      consigne: "Sie lesen in einer Zeitung diesen Text. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      texte: `<div class="press"><h3>Mit 52 Jahren zurück in die Schule</h3>
<p>Monika Brandt war 25 Jahre lang Verkäuferin in einem Schuhgeschäft in Kassel. Als das Geschäft vor zwei Jahren schließen musste, hatte sie zuerst Angst. „Ich dachte, mit über fünfzig findet man keine neue Arbeit“, sagt sie.</p>
<p>Eine Beraterin vom Arbeitsamt hatte dann eine Idee: eine Ausbildung zur Altenpflegerin. Monika hat lange überlegt. „Ich habe meine Mutter viele Jahre gepflegt. Ich wusste also, wie schwer diese Arbeit ist – aber auch, wie schön.“ Heute ist sie im zweiten Ausbildungsjahr. Drei Tage pro Woche arbeitet sie in einem Seniorenheim, zwei Tage geht sie zur Berufsschule.</p>
<p>Am schwierigsten findet sie die Prüfungen. „In der Schule sitzen fast nur Zwanzigjährige. Die lernen viel schneller als ich.“ Aber die alten Menschen im Heim mögen sie sehr. „Sie sagen, ich habe viel Geduld.“ Nach der Ausbildung möchte Monika im selben Heim bleiben. Ihr Chef hat ihr schon eine feste Stelle angeboten.</p></div>`,
      items: [
        { n: 1, q: "Monika hat früher …", tr: ["Avant, Monika…", "Taloha i Monika dia…"], opts: ["in einem Seniorenheim gearbeitet.", "Schuhe verkauft.", "beim Arbeitsamt gearbeitet."], otr: [["travaillait en maison de retraite", "niasa tao amin'ny trano zokiolona"], ["vendait des chaussures", "nivarotra kiraro"], ["travaillait à l'agence pour l'emploi", "niasa tao amin'ny biraon'ny asa"]], a: "b", exp: { mg: "« Verkäuferin in einem Schuhgeschäft ».", fr: "Vendeuse de chaussures." } },
        { n: 2, q: "Die Idee für die Ausbildung hatte …", tr: ["L'idée de la formation vient…", "Avy amin'iza ny hevitra momba ny fiofanana?"], opts: ["Monikas Mutter.", "eine Beraterin.", "Monikas Chef."], otr: [["de sa mère", "reniny"], ["d'une conseillère", "mpanolotsaina iray"], ["de son chef", "lehibeny"]], a: "b", exp: { mg: "« Eine Beraterin vom Arbeitsamt hatte … eine Idee ».", fr: "Une conseillère de l'agence pour l'emploi." } },
        { n: 3, q: "Monika kannte die Arbeit schon, weil sie …", tr: ["Monika connaissait déjà ce travail parce qu'elle…", "Efa nahafantatra ny asa i Monika satria…"], opts: ["ihre Mutter gepflegt hat.", "ein Praktikum gemacht hat.", "im Heim gewohnt hat."], otr: [["a soigné sa mère", "nikarakara ny reniny"], ["a fait un stage", "nanao stage"], ["a habité dans le foyer", "nipetraka tao amin'ny trano"]], a: "a", exp: { mg: "« Ich habe meine Mutter viele Jahre gepflegt ».", fr: "Elle a soigné sa mère." } },
        { n: 4, q: "Was ist für Monika schwer?", tr: ["Qu'est-ce qui est difficile pour Monika ?", "Inona no sarotra ho an'i Monika?"], opts: ["Die Arbeit mit alten Menschen.", "Die Prüfungen.", "Der Weg zur Schule."], otr: [["le travail avec les personnes âgées", "ny asa amin'ny zokiolona"], ["les examens", "ny fanadinana"], ["le trajet vers l'école", "ny lalana mankany an-tsekoly"]], a: "b", exp: { mg: "« Am schwierigsten findet sie die Prüfungen ».", fr: "Les examens." } },
        { n: 5, q: "Nach der Ausbildung …", tr: ["Après la formation…", "Aorian'ny fiofanana…"], opts: ["kann sie im Heim weiterarbeiten.", "möchte sie studieren.", "geht sie in Rente."], otr: [["elle peut continuer au foyer", "afaka manohy miasa ao"], ["elle veut faire des études", "te hianatra ambony"], ["elle prend sa retraite", "hisotro ronono"]], a: "a", exp: { mg: "« eine feste Stelle angeboten ».", fr: "On lui a proposé un poste fixe." } }
      ] },
    { id: "L2", nom: "Teil 2", type: "mc", temps: 7, layout: "textAfter", noShuffle: true,
      consigne: "Sie lesen die Informationstafel in einem Krankenhaus. Lesen Sie die Aufgaben 6 bis 10 und den Text. In welchen Stock gehen Sie? Wählen Sie die richtige Lösung a, b oder c.",
      ctr: ["Panneau d'un hôpital : à quel étage allez-vous ? a, b ou c.", "Tabilao ao amin'ny hopitaly: amin'ny rihana firy ianao no mandeha? a, b na c."],
      texte: `<div class="rules"><h3>KLINIKUM ST. MARIEN – WEGWEISER</h3>
<p><b>4. Stock:</b> Kinderklinik · Spielzimmer · Elternzimmer</p>
<p><b>3. Stock:</b> Augenklinik · Hals-Nasen-Ohren · Zahnklinik</p>
<p><b>2. Stock:</b> Chirurgie · Röntgen · Physiotherapie</p>
<p><b>1. Stock:</b> Geburtsstation · Frauenklinik · Babyschwimmen</p>
<p><b>Erdgeschoss:</b> Notaufnahme · Anmeldung · Cafeteria · Blumenladen</p>
<p><b>Untergeschoss:</b> Labor · Parkhaus · Kapelle</p></div>`,
      exemple: { q: "Ihr Kind (5) ist krank und muss im Krankenhaus bleiben.", opts: ["Erdgeschoss", "4. Stock", "anderer Stock"], a: "b" },
      items: [
        { n: 6, q: "Sie möchten Ihrer Freundin Blumen mitbringen.", tr: ["Vous voulez apporter des fleurs à votre amie.", "Te hitondra voninkazo ho an'ny namanao ianao."], opts: ["Erdgeschoss", "1. Stock", "anderer Stock"], a: "a", exp: { mg: "« Blumenladen » → rihana ambany.", fr: "Fleuriste → rez-de-chaussée." } },
        { n: 7, q: "Sie haben Probleme mit den Augen.", tr: ["Vous avez des problèmes aux yeux.", "Misy olana ny masonao."], opts: ["2. Stock", "3. Stock", "anderer Stock"], a: "b", exp: { mg: "« Augenklinik » → rihana 3.", fr: "Ophtalmologie → 3e." } },
        { n: 8, q: "Ihre Schwester bekommt ein Baby.", tr: ["Votre sœur accouche.", "Hiteraka ny anabavinao."], opts: ["1. Stock", "4. Stock", "anderer Stock"], a: "a", exp: { mg: "« Geburtsstation » = fiterahana → rihana 1.", fr: "Maternité → 1er." } },
        { n: 9, q: "Der Arzt möchte ein Röntgenbild von Ihrem Bein.", tr: ["Le médecin veut une radio de votre jambe.", "Mila sary taratra ny tongotrao ny dokotera."], opts: ["Untergeschoss", "Erdgeschoss", "anderer Stock"], a: "c", exp: { mg: "« Röntgen » dia ao amin'ny rihana 2 → « anderer Stock ».", fr: "Radio au 2e → autre étage." } },
        { n: 10, q: "Sie haben Ihr Auto unter dem Krankenhaus geparkt.", tr: ["Vous avez garé votre voiture sous l'hôpital.", "Napetrakao tao ambanin'ny hopitaly ny fiaranao."], opts: ["Untergeschoss", "Erdgeschoss", "anderer Stock"], a: "a", exp: { mg: "« Parkhaus » → Untergeschoss.", fr: "Parking → sous-sol." } }
      ] },
    { id: "L3", nom: "Teil 3", type: "mc", temps: 8,
      consigne: "Sie lesen eine E-Mail. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      texte: `<div class="blog"><p><b>Von:</b> andry.r@mail.de · <b>Betreff:</b> Mein Praktikum</p><p>Liebe Frau Schuster,</p>
<p>vielen Dank noch einmal, dass ich in Ihrer Werkstatt ein Praktikum machen darf! Ich freue mich schon sehr. Sie haben gefragt, wann ich anfangen kann: Mein Deutschkurs ist am 28. Februar zu Ende, ich kann also am 3. März beginnen.</p>
<p>Ich habe noch ein paar Fragen. Muss ich Arbeitskleidung mitbringen, oder bekomme ich sie bei Ihnen? Und wann beginnt die Arbeit am Morgen? Ich fahre mit dem Bus, und der erste Bus ist um 6.40 Uhr bei Ihnen.</p>
<p>Leider habe ich am 10. März einen Termin beim Ausländeramt. Kann ich an diesem Tag später kommen? Ich arbeite den Tag gern am Samstag nach.</p>
<p>Viele Grüße<br>Andry Rakotobe</p></div>`,
      items: [
        { n: 11, q: "Andry schreibt, weil er …", tr: ["Andry écrit parce qu'il…", "Manoratra i Andry satria…"], opts: ["ein Praktikum sucht.", "Informationen zum Praktikum braucht.", "das Praktikum absagen möchte."], otr: [["cherche un stage", "mitady stage"], ["a besoin d'infos sur le stage", "mila fanazavana momba ny stage"], ["veut annuler le stage", "te hanafoana ny stage"]], a: "b", exp: { mg: "Efa azony ny stage; manontany izy.", fr: "Il a le stage et pose des questions." } },
        { n: 12, q: "Wann beginnt Andry mit dem Praktikum?", tr: ["Quand Andry commence-t-il ?", "Rahoviana no manomboka i Andry?"], opts: ["Am 28. Februar.", "Am 3. März.", "Am 10. März."], otr: [["le 28 février", "28 febroary"], ["le 3 mars", "3 martsa"], ["le 10 mars", "10 martsa"]], a: "b", exp: { mg: "« am 3. März beginnen ».", fr: "Le 3 mars." } },
        { n: 13, q: "Was möchte Andry wissen?", tr: ["Que veut savoir Andry ?", "Inona no tian'i Andry ho fantatra?"], opts: ["Wie viel er verdient.", "Ob er Arbeitskleidung braucht.", "Wo er wohnen kann."], otr: [["combien il gagne", "ohatrinona ny karama"], ["s'il a besoin de vêtements de travail", "raha mila akanjo fiasana"], ["où il peut habiter", "aiza no hipetrahany"]], a: "b", exp: { mg: "« Muss ich Arbeitskleidung mitbringen …? ».", fr: "Les vêtements de travail." } },
        { n: 14, q: "Andry fährt zur Werkstatt …", tr: ["Andry va à l'atelier…", "Mankany amin'ny toeram-piasana i Andry…"], opts: ["mit dem Bus.", "mit dem Fahrrad.", "mit dem Auto."], otr: [["en bus", "amin'ny bus"], ["à vélo", "amin'ny bisikileta"], ["en voiture", "amin'ny fiara"]], a: "a", exp: { mg: "« Ich fahre mit dem Bus ».", fr: "En bus." } },
        { n: 15, q: "Am 10. März möchte Andry …", tr: ["Le 10 mars, Andry veut…", "Amin'ny 10 martsa, i Andry dia te…"], opts: ["frei haben.", "später kommen.", "am Samstag kommen."], otr: [["avoir congé", "tsy hiasa"], ["arriver plus tard", "ho tara kokoa"], ["venir samedi", "ho avy asabotsy"]], a: "b", exp: { mg: "« Kann ich an diesem Tag später kommen? ». Ny asabotsy dia hanonerana fotsiny.", fr: "Venir plus tard ; il rattrape samedi." } }
      ] },
    { id: "L4", nom: "Teil 4", type: "match", temps: 7, zero: true,
      consigne: "Sechs Personen suchen im Internet nach Kursen. Lesen Sie die Aufgaben 16 bis 20 und die Anzeigen a bis f. Welche Anzeige passt zu welcher Person? Für eine Aufgabe gibt es keine Lösung. Markieren Sie so: X. Die Anzeige aus dem Beispiel können Sie nicht mehr wählen.",
      ctr: ["Six personnes cherchent un cours. Quelle annonce (a–f) pour chaque personne ? Une personne n'a pas de solution : X.", "Olona 6 mitady fampianarana. Iza no filazana mifanaraka? Misy iray tsy misy: X."],
      choix: {
        a: "<b>Computerkurs 50+</b><br>E-Mails schreiben, im Internet suchen – langsam und mit viel Zeit für Fragen.",
        b: "<b>Erste Hilfe</b><br>Pflichtkurs für den Führerschein – jeden Samstag, 8–16 Uhr.",
        c: "<b>Gitarre für Anfänger</b><br>Einzelunterricht, auch abends. Gitarren können geliehen werden.",
        d: "<b>Bewerbungstraining</b><br>Lebenslauf und Vorstellungsgespräch üben – kostenlos für Arbeitssuchende.",
        e: "<b>Schwimmkurs für Erwachsene</b><br>Keine Angst vor Wasser! Kleine Gruppen, Mittwochabend.",
        f: "<b>Italienisch für den Urlaub</b><br>In 6 Wochen die wichtigsten Sätze – Montag, 18 Uhr."
      },
      exemple: { q: "Herr Lange (63) möchte seinen Enkeln E-Mails schreiben.", a: "a" },
      items: [
        { n: 16, q: "Sara braucht für den Führerschein einen Kurs in Erster Hilfe.", tr: ["Sara a besoin d'un cours de secourisme pour le permis.", "Mila fampianarana vonjy voina ho an'ny fahazoan-dalana i Sara."], a: "b", exp: { mg: "« Pflichtkurs für den Führerschein ».", fr: "Cours obligatoire pour le permis → b." } },
        { n: 17, q: "Jonas hat keine Arbeit und möchte sich besser bewerben.", tr: ["Jonas est sans emploi et veut mieux postuler.", "Tsy manana asa i Jonas ary te hangataka asa tsara kokoa."], a: "d", exp: { mg: "« Bewerbungstraining … für Arbeitssuchende ».", fr: "Atelier candidature → d." } },
        { n: 18, q: "Lea kann nicht schwimmen und möchte es lernen.", tr: ["Lea ne sait pas nager et veut apprendre.", "Tsy mahay milomano i Lea ary te hianatra."], a: "e", exp: { mg: "« Schwimmkurs für Erwachsene ».", fr: "Cours de natation adultes → e." } },
        { n: 19, q: "Herr Polat fährt im Sommer nach Spanien und möchte etwas Spanisch lernen.", tr: ["M. Polat va en Espagne et veut apprendre l'espagnol.", "Handeha any Espaina Atoa Polat ary te hianatra espaniola."], a: "0", exp: { mg: "Italianina ihany no misy, tsy espaniola → X.", fr: "Seulement de l'italien → X." } },
        { n: 20, q: "Mira möchte ein Instrument lernen, hat aber keins.", tr: ["Mira veut apprendre un instrument mais n'en a pas.", "Te hianatra zavamaneno i Mira fa tsy manana."], a: "c", exp: { mg: "« Gitarren können geliehen werden ».", fr: "Guitare prêtée → c." } }
      ] }
  ] },

  hoeren: { temps: 30, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 2, type: "mc",
      consigne: "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      clips: [
        { id: "ga2m2-h1-1", titre: "Text 1", script: [{ s: "f", n: "Praxis", t: "Guten Tag, hier ist die Praxis Doktor Kaya. Ihr Termin morgen um neun Uhr muss leider ausfallen, die Ärztin ist krank. Wir haben einen neuen Termin für Sie: am Freitag um elf Uhr." }],
          items: [{ n: 1, q: "Wann ist der neue Termin?", tr: ["Quand est le nouveau rendez-vous ?", "Rahoviana ny fotoana vaovao?"], opts: ["Morgen um 9 Uhr.", "Freitag um 11 Uhr.", "Freitag um 9 Uhr."], otr: [["demain 9 h", "rahampitso 9 ora"], ["vendredi 11 h", "zoma 11 ora"], ["vendredi 9 h", "zoma 9 ora"]], a: "b", exp: { mg: "Foana ny rahampitso; vaovao: zoma 11 ora.", fr: "Nouveau : vendredi 11 h." } }] },
        { id: "ga2m2-h1-2", titre: "Text 2", script: [{ s: "m", n: "Radio", t: "Und jetzt der Tipp der Woche: Ab Montag gibt es im Stadtpark jeden Morgen um sieben kostenloses Yoga. Bringen Sie einfach eine Matte mit." }],
          items: [{ n: 2, q: "Was muss man mitbringen?", tr: ["Que faut-il apporter ?", "Inona no tokony ho entina?"], opts: ["Geld.", "Eine Matte.", "Sportschuhe."], otr: [["de l'argent", "vola"], ["un tapis", "tsihy"], ["des baskets", "kiraro fanatanjahantena"]], a: "b", exp: { mg: "« Bringen Sie … eine Matte mit ». Maimaim-poana.", fr: "Un tapis ; c'est gratuit." } }] },
        { id: "ga2m2-h1-3", titre: "Text 3", script: [{ s: "f", n: "Durchsage", t: "Liebe Kunden, unsere Filiale in der Bahnhofstraße ist wegen Renovierung bis Ende Juni geschlossen. Besuchen Sie uns in der Filiale am Marktplatz." }],
          items: [{ n: 3, q: "Was sollen die Kunden machen?", tr: ["Que doivent faire les clients ?", "Inona no tokony hataon'ny mpanjifa?"], opts: ["Bis Juni warten.", "In eine andere Filiale gehen.", "Im Internet bestellen."], otr: [["attendre juin", "miandry jona"], ["aller dans une autre agence", "mankany amin'ny sampana hafa"], ["commander en ligne", "manafatra an-tserasera"]], a: "b", exp: { mg: "« Besuchen Sie uns in der Filiale am Marktplatz ».", fr: "Une autre agence." } }] },
        { id: "ga2m2-h1-4", titre: "Text 4", script: [{ s: "m", n: "Herr Braun", t: "Hallo Frau Ravelo, hier ist Braun aus der Personalabteilung. Für Ihren Arbeitsvertrag brauche ich noch eine Kopie von Ihrem Zeugnis. Den Pass habe ich schon. Bitte bringen Sie die Kopie bis Donnerstag." }],
          items: [{ n: 4, q: "Was braucht Herr Braun noch?", tr: ["De quoi M. Braun a-t-il encore besoin ?", "Inona no mbola ilain'Atoa Braun?"], opts: ["Den Pass.", "Eine Kopie vom Zeugnis.", "Den Arbeitsvertrag."], otr: [["le passeport", "pasipaoro"], ["une copie du diplôme", "kopian'ny diplaoma"], ["le contrat", "fifanarahana"]], a: "b", exp: { mg: "Efa azony ny pasipaoro; mila kopian'ny Zeugnis.", fr: "La copie du certificat." } }] },
        { id: "ga2m2-h1-5", titre: "Text 5", script: [{ s: "f", n: "Radio", t: "Das Wetter morgen: Am Vormittag ist es noch kühl und neblig. Ab Mittag wird es sonnig und warm, bis zu vierundzwanzig Grad." }],
          items: [{ n: 5, q: "Wie ist das Wetter morgen Nachmittag?", tr: ["Quel temps demain après-midi ?", "Ahoana ny toetr'andro rahampitso tolakandro?"], opts: ["Neblig.", "Sonnig.", "Kühl."], otr: [["brumeux", "zavona"], ["ensoleillé", "masoandro"], ["frais", "mangatsiatsiaka"]], a: "b", exp: { mg: "« Ab Mittag … sonnig ».", fr: "Ensoleillé à partir de midi." } }] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 1, type: "match", zero: false, lecture: 30,
      consigne: "Sie hören ein Gespräch. Sie hören den Text einmal. Wählen Sie für die Aufgaben 6 bis 10 ein passendes Bild aus a bis i. Wählen Sie jeden Buchstaben nur einmal.",
      contexte: "Wer bringt was zum Picknick mit?",
      xtr: ["Qui apporte quoi au pique-nique ?", "Iza no mitondra inona amin'ny pique-nique?"],
      choixTitre: "Bilder",
      choix: { a: "🥗 Salat", b: "🍰 Kuchen", c: "🍉 Melone", d: "🥤 Getränke", e: "🍗 Hähnchen", f: "🧀 Käse", g: "🥖 Brot", h: "🍪 Kekse", i: "🍇 Trauben" },
      clips: [{ id: "ga2m2-h2", titre: "Gespräch", script: [
        { s: "f", n: "Hanta", t: "Also, für das Picknick am Sonntag: Wer bringt was mit? Ich mache einen großen Salat." },
        { s: "m", n: "Felix", t: "Gut. Was bringt Anna mit?" },
        { s: "f", n: "Hanta", t: "Anna wollte zuerst Kuchen backen, aber sie hat keine Zeit. Sie kauft Brot beim Bäcker." },
        { s: "m", n: "Felix", t: "Und Tim?" },
        { s: "f", n: "Hanta", t: "Tim bringt Getränke mit, er hat ja ein Auto. Wasser und Saft." },
        { s: "m", n: "Felix", t: "Dann mache ich Hähnchen. Und Lisa?" },
        { s: "f", n: "Hanta", t: "Lisa bringt Obst. Sie hat gesagt: eine große Melone. Trauben mag ja keiner." },
        { s: "m", n: "Felix", t: "Und Paul? Der isst doch so gern Käse." },
        { s: "f", n: "Hanta", t: "Ja, aber er bringt Kekse mit, die macht seine Oma." }],
        items: [
          { n: 6, q: "Anna", a: "g", exp: { mg: "Tsy mofo mamy fa « Brot beim Bäcker ».", fr: "Pas de gâteau, du pain." } },
          { n: 7, q: "Tim", a: "d", exp: { mg: "« Getränke … Wasser und Saft ».", fr: "Les boissons." } },
          { n: 8, q: "Felix", a: "e", exp: { mg: "« Dann mache ich Hähnchen ».", fr: "Le poulet." } },
          { n: 9, q: "Lisa", a: "c", exp: { mg: "« eine große Melone ». Tsy voaloboka.", fr: "Un melon, pas de raisin." } },
          { n: 10, q: "Paul", a: "h", exp: { mg: "Fandrika: tia fromazy izy fa « Kekse » no entiny.", fr: "Piège : il aime le fromage mais apporte des biscuits." } }
        ] }] },
    { id: "H3", nom: "Teil 3", ecoutes: 1, type: "mc",
      consigne: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      clips: [
        { id: "ga2m2-h3-11", titre: "Gespräch 1", script: [{ s: "m", n: "Patient", t: "Wie oft soll ich die Tropfen nehmen?" }, { s: "f", n: "Apothekerin", t: "Morgens und abends zehn Tropfen. Nicht mehr, bitte." }],
          items: [{ n: 11, q: "Wie oft soll der Mann die Tropfen nehmen?", tr: ["Combien de fois l'homme doit-il prendre les gouttes ?", "Impiry no tokony handraisany ny fanafody mitete?"], opts: ["Einmal am Tag.", "Zweimal am Tag.", "Zehnmal am Tag."], otr: [["une fois par jour", "indray mandeha"], ["deux fois par jour", "indroa"], ["dix fois par jour", "im-polo"]], a: "b", exp: { mg: "Maraina sy hariva = indroa. Ny 10 dia isan'ny tete.", fr: "Matin et soir ; 10 = nombre de gouttes." } }] },
        { id: "ga2m2-h3-12", titre: "Gespräch 2", script: [{ s: "f", n: "Kollegin", t: "Kommst du heute mit in die Kantine?" }, { s: "m", n: "Kollege", t: "Heute nicht. Ich habe mein Essen von zu Hause mitgebracht. Ich esse am Schreibtisch." }],
          items: [{ n: 12, q: "Wo isst der Mann heute?", tr: ["Où l'homme mange-t-il aujourd'hui ?", "Aiza no hisakafoan'ilay lehilahy anio?"], opts: ["In der Kantine.", "Am Schreibtisch.", "Zu Hause."], otr: [["à la cantine", "kantina"], ["à son bureau", "eo amin'ny latabany"], ["à la maison", "an-trano"]], a: "b", exp: { mg: "« Ich esse am Schreibtisch ».", fr: "À son bureau." } }] },
        { id: "ga2m2-h3-13", titre: "Gespräch 3", script: [{ s: "m", n: "Mann", t: "Wie lange dauert die Ausbildung?" }, { s: "f", n: "Beraterin", t: "Normalerweise drei Jahre. Mit Abitur können Sie aber auf zweieinhalb Jahre verkürzen." }, { s: "m", n: "Mann", t: "Ich habe leider kein Abitur." }],
          items: [{ n: 13, q: "Wie lange dauert die Ausbildung für den Mann?", tr: ["Combien de temps dure la formation pour l'homme ?", "Haharitra hafiriana ny fiofanana ho an'ilay lehilahy?"], opts: ["2 Jahre.", "2,5 Jahre.", "3 Jahre."], otr: [["2 ans", "taona 2"], ["2 ans et demi", "taona 2 sy tapany"], ["3 ans", "taona 3"]], a: "c", exp: { mg: "Tsy manana bakalorea izy → 3 taona.", fr: "Pas de bac → 3 ans." } }] },
        { id: "ga2m2-h3-14", titre: "Gespräch 4", script: [{ s: "f", n: "Frau", t: "Hast du schon ein Geschenk für Mama?" }, { s: "m", n: "Mann", t: "Ich wollte ein Buch kaufen, aber sie hat schon so viele. Ich schenke ihr einen Gutschein für eine Massage." }],
          items: [{ n: 14, q: "Was schenkt der Mann seiner Mutter?", tr: ["Qu'offre l'homme à sa mère ?", "Inona no omen'ilay lehilahy ny reniny?"], opts: ["Ein Buch.", "Einen Gutschein.", "Blumen."], otr: [["un livre", "boky"], ["un bon cadeau", "tapakila fanomezana"], ["des fleurs", "voninkazo"]], a: "b", exp: { mg: "« einen Gutschein für eine Massage ».", fr: "Un bon pour un massage." } }] },
        { id: "ga2m2-h3-15", titre: "Gespräch 5", script: [{ s: "m", n: "Kunde", t: "Ich möchte ein Konto eröffnen. Was brauche ich?" }, { s: "f", n: "Bankangestellte", t: "Ihren Pass und eine Meldebescheinigung. Einen Arbeitsvertrag brauchen Sie nicht." }],
          items: [{ n: 15, q: "Was braucht der Mann nicht?", tr: ["De quoi l'homme n'a-t-il pas besoin ?", "Inona no TSY ilain'ilay lehilahy?"], opts: ["Den Pass.", "Eine Meldebescheinigung.", "Einen Arbeitsvertrag."], otr: [["le passeport", "pasipaoro"], ["une attestation de domicile", "taratasy fonenana"], ["un contrat de travail", "fifanarahana asa"]], a: "c", exp: { mg: "« Einen Arbeitsvertrag brauchen Sie nicht ». Tandremo ny « nicht »!", fr: "Pas de contrat de travail. Attention au « nicht »." } }] }
      ] },
    { id: "H4", nom: "Teil 4", ecoutes: 2, type: "jn", lecture: 30,
      consigne: "Sie hören ein Interview. Sie hören den Text zweimal. Wählen Sie für die Aufgaben 16 bis 20 Ja oder Nein.",
      contexte: "Der Moderator spricht mit Frau Rasoanaivo über ihre Arbeit als Krankenschwester.",
      xtr: ["Le présentateur parle avec Mme Rasoanaivo de son travail d'infirmière.", "Miresaka amin-dRtoa Rasoanaivo momba ny asany mpitsabo mpanampy ny mpanentana."],
      clips: [{ id: "ga2m2-h4", titre: "Interview", script: [
        { s: "m", n: "Moderator", t: "Frau Rasoanaivo, Sie sind Krankenschwester in Stuttgart. Seit wann arbeiten Sie in Deutschland?" },
        { s: "f", n: "Frau Rasoanaivo", t: "Seit drei Jahren. In Madagaskar habe ich schon acht Jahre als Krankenschwester gearbeitet. Hier musste ich zuerst eine Prüfung machen, damit man meine Ausbildung anerkennt." },
        { s: "m", n: "Moderator", t: "Wie gefällt Ihnen die Arbeit hier?" },
        { s: "f", n: "Frau Rasoanaivo", t: "Sehr gut. Die Kollegen sind nett. Aber wir haben wenig Zeit für die Patienten. Das finde ich schade." },
        { s: "m", n: "Moderator", t: "Und die Arbeitszeiten?" },
        { s: "f", n: "Frau Rasoanaivo", t: "Ich arbeite im Schichtdienst, auch nachts und am Wochenende. Am Anfang war das schwer, jetzt habe ich mich daran gewöhnt." },
        { s: "m", n: "Moderator", t: "Was machen Sie in Ihrer Freizeit?" },
        { s: "f", n: "Frau Rasoanaivo", t: "Ich singe in einem Chor. Und ich gebe anderen Pflegekräften aus Madagaskar Tipps für das Leben in Deutschland." }],
        items: [
          { n: 16, q: "Frau Rasoanaivo hat schon in Madagaskar als Krankenschwester gearbeitet.", tr: ["Elle a déjà travaillé comme infirmière à Madagascar.", "Efa niasa ho mpitsabo mpanampy tany Madagasikara izy."], a: "j", exp: { mg: "« acht Jahre als Krankenschwester ».", fr: "Huit ans → Ja." } },
          { n: 17, q: "Sie musste in Deutschland keine Prüfung machen.", tr: ["Elle n'a pas dû passer d'examen en Allemagne.", "Tsy nanao fanadinana tany Alemaina izy."], a: "n", exp: { mg: "« musste ich zuerst eine Prüfung machen ».", fr: "Elle a dû passer un examen → Nein." } },
          { n: 18, q: "Sie hat genug Zeit für die Patienten.", tr: ["Elle a assez de temps pour les patients.", "Manana fotoana ampy ho an'ny marary izy."], a: "n", exp: { mg: "« wenig Zeit für die Patienten ».", fr: "Peu de temps → Nein." } },
          { n: 19, q: "Sie arbeitet auch in der Nacht.", tr: ["Elle travaille aussi la nuit.", "Miasa amin'ny alina koa izy."], a: "j", exp: { mg: "« auch nachts ».", fr: "Ja." } },
          { n: 20, q: "Sie hilft anderen Pflegekräften aus Madagaskar.", tr: ["Elle aide d'autres soignants malgaches.", "Manampy mpitsabo malagasy hafa izy."], a: "j", exp: { mg: "« gebe … Tipps ».", fr: "Elle donne des conseils → Ja." } }
        ] }] }
  ] },

  schreiben: { temps: 30, aufgaben: [
    { id: "S1", nom: "Teil 1", temps: 10, mots: 25, points: 10, type: "SMS (informell)",
      consigne: `<p>Sie sind krank und können heute Abend nicht zum Fußballtraining kommen. Schreiben Sie eine SMS an Ihren Trainer Kai:</p><ul><li>Sagen Sie, dass Sie nicht kommen können.</li><li>Schreiben Sie, warum.</li><li>Fragen Sie, wann das nächste Spiel ist.</li></ul><p class="small">Schreiben Sie 20–30 Wörter.</p>`,
      ctr: ["SMS à votre entraîneur : vous ne venez pas, pourquoi, demandez la date du prochain match. 20–30 mots.", "SMS ho an'ny mpanazatra: tsy ho tonga ianao, antony, anontanio ny lalao manaraka. 20–30 teny."],
      checklist: ["Hallo Kai,", "Tsy ho tonga (Ich kann heute nicht kommen)", "Antony (weil / denn)", "Fanontaniana: lalao manaraka", "Gruß", "20–30 teny"],
      redemittel: ["Hallo Kai,", "leider kann ich heute nicht zum Training kommen.", "Ich habe Fieber / Ich bin erkältet.", "Wann ist das nächste Spiel?", "Viele Grüße"],
      modele: `Hallo Kai,
leider kann ich heute nicht zum Training kommen. Ich bin erkältet und habe Fieber. Wann ist das nächste Spiel? Ich hoffe, ich bin bis dann wieder gesund.
Viele Grüße
Tojo` },
    { id: "S2", nom: "Teil 2", temps: 20, mots: 35, points: 15, type: "E-Mail (halbformell)",
      consigne: `<p>Sie haben einen Deutschkurs bei der Sprachschule „Lingua“ gemacht. Jetzt möchten Sie einen Kurs für das nächste Niveau besuchen. Schreiben Sie an Ihre Lehrerin, Frau Hartmann:</p><ul><li>Bedanken Sie sich für den Kurs.</li><li>Fragen Sie, wann der nächste Kurs beginnt.</li><li>Fragen Sie, ob es auch einen Kurs am Abend gibt.</li></ul><p class="small">Schreiben Sie 30–40 Wörter. Schreiben Sie eine Anrede und einen Gruß.</p>`,
      ctr: ["E-mail à votre professeure : remerciez pour le cours, demandez la date du prochain cours et s'il existe un cours du soir. 30–40 mots.", "Mailaka ho an'ny mpampianatra: misaora, anontanio ny fanombohan'ny fampianarana manaraka sy raha misy amin'ny hariva. 30–40 teny."],
      checklist: ["Liebe Frau Hartmann,", "Fisaorana", "Rahoviana ny fampianarana manaraka?", "Misy amin'ny hariva ve?", "Viele Grüße + anarana", "« Sie » foana", "30–40 teny"],
      redemittel: ["vielen Dank für den schönen Kurs!", "Ich habe viel gelernt.", "Wann beginnt der nächste Kurs (B1)?", "Gibt es auch einen Kurs am Abend? Ich arbeite tagsüber.", "Viele Grüße"],
      modele: `Liebe Frau Hartmann,

vielen Dank für den schönen Kurs! Ich habe viel gelernt und hatte viel Spaß. Ich möchte gern den nächsten Kurs besuchen. Wann beginnt er? Gibt es auch einen Kurs am Abend? Ich arbeite nämlich tagsüber.

Viele Grüße
Fanja Randrianarisoa` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Teboka 3 voavaly? · Les 3 points ?" },
    { nom: "Kohärenz", desc: "Fehezanteny mifandray · Enchaînement" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" }
  ] },

  sprechen: { preparation: 0, teile: [
    { id: "P1", nom: "Teil 1 – Fragen zur Person", mg: "Fanontaniana amin'ny karatra", duree: 3, mode: "dialog", em: "🃏",
      consigne: `<p>Sie bekommen vier Karten und stellen mit diesen Karten vier Fragen. Ihr Partner / Ihre Partnerin antwortet. Dann stellt Ihr Partner / Ihre Partnerin vier Fragen und Sie antworten.</p><div class="plan">Ihre Karten: <b>Beruf? · Sprachen? · Sport? · Urlaub?</b></div>`,
      partenaire: [
        { id: "ga2m2-p1-1", t: "Was bist du von Beruf?", cue: "Valio. · Réponds.", aide: ["Ich bin … von Beruf.", "Ich mache gerade eine Ausbildung als …"] },
        { id: "ga2m2-p1-2", t: "Interessant! Ich bin Koch. Deine Karte: „Sprachen“.", cue: "Manontania. · Pose ta question.", aide: ["Welche Sprachen sprichst du?", "Sprichst du auch Englisch?"] },
        { id: "ga2m2-p1-3", t: "Deutsch, Türkisch und ein bisschen Englisch. Meine Frage: Machst du gern Sport?", cue: "Valio. · Réponds.", aide: ["Ja, ich spiele zweimal pro Woche Basketball.", "Nicht so gern, aber ich gehe viel spazieren."] },
        { id: "ga2m2-p1-4", t: "Super. Deine letzte Karte: „Urlaub“.", cue: "Manontania. · Question.", aide: ["Wo machst du am liebsten Urlaub?", "Was hast du im letzten Urlaub gemacht?"] },
        { id: "ga2m2-p1-5", t: "Am liebsten am Meer, letztes Jahr war ich in Griechenland. Und du: Wie lange lernst du schon Deutsch?", cue: "Valio. · Réponds.", aide: ["Seit einem Jahr.", "Ich lerne seit acht Monaten Deutsch."] }
      ],
      redemittel: [["Manontany · Demander", ["Was bist du von Beruf?", "Welche Sprachen sprichst du?", "Machst du gern Sport?", "Wo machst du am liebsten Urlaub?"]], ["Mamaly · Répondre", ["Ich bin … / Ich arbeite als …", "Ich spreche …", "Ich spiele / gehe …", "Am liebsten …"]]],
      modele: `A: Was bist du von Beruf?
B: Ich bin Elektriker. Und du?
A: Ich bin Koch.
B: Welche Sprachen sprichst du?
A: Deutsch, Türkisch und ein bisschen Englisch.
A: Machst du gern Sport?
B: Ja, ich spiele zweimal pro Woche Basketball.
B: Wo machst du am liebsten Urlaub?
A: Am Meer. Letztes Jahr war ich in Griechenland.` },
    { id: "P2", nom: "Teil 2 – Über sich sprechen", mg: "Mitantara ny fiainanao", duree: 3, mode: "present", em: "🗣️",
      consigne: `<p>Sie bekommen eine Karte und erzählen etwas über Ihr Leben.</p>`,
      themes: [{ titre: "Was machen Sie für Ihre Gesundheit?", points: [
        { de: "Essen?", mg: "Sakafo?", fr: "Alimentation ?" }, { de: "Sport?", mg: "Fanatanjahantena?", fr: "Sport ?" },
        { de: "Schlafen?", mg: "Torimaso?", fr: "Sommeil ?" }, { de: "Arzt?", mg: "Dokotera?", fr: "Médecin ?" } ],
        modele: `Für meine Gesundheit esse ich viel Obst und Gemüse. Ich koche meistens selbst, weil ich Fast Food nicht so gern mag.
Zweimal pro Woche gehe ich joggen, und am Wochenende fahre ich Fahrrad.
Ich versuche, jede Nacht sieben Stunden zu schlafen, aber das ist nicht immer leicht.
Zum Arzt gehe ich nur, wenn ich krank bin. Einmal im Jahr gehe ich aber zum Zahnarzt.` }],
      redemittel: [["Mitantara · Raconter", ["Für meine Gesundheit …", "Ich esse viel / wenig …", "… pro Woche gehe ich …", "Ich versuche, … zu …", "Zum Arzt gehe ich, wenn …"]]] },
    { id: "P3", nom: "Teil 3 – Etwas gemeinsam planen", mg: "Mitady fotoana iombonana", duree: 3, mode: "dialog", em: "📅",
      consigne: `<p>Ihre Kollegin Eva hat eine neue Stelle in einer anderen Stadt. Sie möchten zusammen ein Abschiedsessen für sie organisieren. Finden Sie einen Termin.</p><div class="plan"><b>Ihr Kalender – Freitag, 6. Juni</b><br>8–12 Uhr: Arbeit · 12.30 Uhr: Mittagspause mit Team · 14–16 Uhr: Arbeit · 17 Uhr: Fitnessstudio · ab 19 Uhr: frei</div>`,
      ctr: ["Organisez avec votre collègue un repas d'adieu pour Eva. Trouvez un moment selon votre agenda.", "Mandamina sakafo fanaovam-beloma ho an'i Eva miaraka amin'ny mpiara-miasa. Mitadiava fotoana."],
      partenaire: [
        { id: "ga2m2-p3-1", t: "Hallo! Wollen wir am Freitag mit Eva Mittag essen? So um halb eins?", cue: "Jereo: 12.30 = sakafo atoandro miaraka amin'ny ekipa. · 12 h 30 : déjà pris.", aide: ["Um halb eins esse ich schon mit dem Team.", "Das geht leider nicht."] },
        { id: "ga2m2-p3-2", t: "Ach so. Und um fünf, nach der Arbeit?", cue: "17 ora = fitness. · 17 h : salle de sport.", aide: ["Um fünf gehe ich ins Fitnessstudio.", "Wie wäre es am Abend, um sieben?"] },
        { id: "ga2m2-p3-3", t: "Um sieben ist gut! Wohin gehen wir? Eva mag italienisches Essen.", cue: "Manolora trano fisakafoanana. · Propose un restaurant.", aide: ["Wie wäre es mit der Pizzeria am Marktplatz?", "Ich kenne ein gutes italienisches Restaurant."] },
        { id: "ga2m2-p3-4", t: "Prima! Sollen wir ihr auch ein Geschenk kaufen?", cue: "Manolora fanomezana. · Propose un cadeau.", aide: ["Ja, vielleicht einen Gutschein?", "Wir können eine Karte schreiben und alle Kollegen unterschreiben."] }
      ],
      redemittel: [["Manolotra · Proposer", ["Wie wäre es um …?", "Hast du um … Zeit?", "Wir könnten …"]], ["Mandà · Refuser", ["Um … kann ich leider nicht, da …", "Das passt mir nicht."]], ["Manaiky · Accepter", ["Das ist eine gute Idee!", "Einverstanden.", "Prima!"]]],
      modele: `A: Wollen wir am Freitag um halb eins mit Eva essen?
B: Um halb eins esse ich schon mit dem Team.
A: Und um fünf?
B: Da gehe ich ins Fitnessstudio. Wie wäre es um sieben?
A: Um sieben ist gut. Eva mag italienisches Essen.
B: Wie wäre es mit der Pizzeria am Marktplatz?
A: Prima! Kaufen wir auch ein Geschenk?
B: Ja, einen Gutschein. Und alle Kollegen schreiben auf eine Karte.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Tontosa ny asa · Tâche réalisée" },
    { nom: "Interaktion", desc: "Mamaly ny namanao · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "das Arbeitsamt", fr: "l'agence pour l'emploi", mg: "biraon'ny asa", ex: "Die Beraterin vom Arbeitsamt hilft mir." },
    { de: "die Ausbildung", fr: "la formation professionnelle", mg: "fiofanana ara-asa", ex: "Sie macht eine Ausbildung." },
    { de: "pflegen", fr: "soigner", mg: "mikarakara (marary)", ex: "Sie hat ihre Mutter gepflegt." },
    { de: "die Geduld", fr: "la patience", mg: "faharetana", ex: "Sie hat viel Geduld." },
    { de: "die feste Stelle", fr: "le poste fixe", mg: "asa raikitra", ex: "Der Chef bietet ihr eine feste Stelle an." },
    { de: "die Notaufnahme", fr: "les urgences", mg: "vonjy taitra", ex: "Die Notaufnahme ist im Erdgeschoss." },
    { de: "das Röntgen", fr: "la radiographie", mg: "sary taratra", ex: "Der Arzt macht ein Röntgenbild." },
    { de: "das Praktikum", fr: "le stage", mg: "stage", ex: "Ich mache ein Praktikum in einer Werkstatt." },
    { de: "die Arbeitskleidung", fr: "les vêtements de travail", mg: "akanjo fiasana", ex: "Bekomme ich Arbeitskleidung?" },
    { de: "nacharbeiten", fr: "rattraper (des heures)", mg: "manonitra asa", ex: "Ich arbeite den Tag am Samstag nach." },
    { de: "die Erste Hilfe", fr: "les premiers secours", mg: "vonjy voina voalohany", ex: "Ein Kurs in Erster Hilfe." },
    { de: "sich bewerben", fr: "postuler", mg: "mangataka asa", ex: "Ich möchte mich besser bewerben." },
    { de: "ausfallen", fr: "être annulé", mg: "foanana", ex: "Der Termin fällt aus." },
    { de: "die Filiale", fr: "l'agence, la succursale", mg: "sampana", ex: "Die Filiale ist geschlossen." },
    { de: "das Zeugnis", fr: "le certificat, le bulletin", mg: "taratasy fanamarinana", ex: "Ich brauche eine Kopie vom Zeugnis." },
    { de: "die Tropfen", fr: "les gouttes", mg: "fanafody mitete", ex: "Nehmen Sie zehn Tropfen." },
    { de: "der Gutschein", fr: "le bon d'achat", mg: "tapakila fanomezana", ex: "Ich schenke ihr einen Gutschein." },
    { de: "anerkennen", fr: "reconnaître (un diplôme)", mg: "manaiky ho manan-kery", ex: "Man muss die Ausbildung anerkennen." },
    { de: "der Schichtdienst", fr: "le travail posté", mg: "asa mifandimby", ex: "Ich arbeite im Schichtdienst." },
    { de: "sich gewöhnen an", fr: "s'habituer à", mg: "mahazatra", ex: "Ich habe mich daran gewöhnt." },
    { de: "das Abschiedsessen", fr: "le repas d'adieu", mg: "sakafo fanaovam-beloma", ex: "Wir organisieren ein Abschiedsessen." }
  ]
});
})();
