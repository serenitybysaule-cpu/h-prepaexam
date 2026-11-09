/* Goethe-Zertifikat A2 — Modellsatz 5 — textes originaux H Conseil & Formation */
(function(){
window.POOLS.GA2.sets.push({
  id: "ga2m5", titre: "Modellsatz 5", theme: "Haino aman-jery, fividianana, tanàna",
  lesen: { temps: 30, teile: [
    { id: "L1", nom: "Teil 1", type: "mc", temps: 8,
      consigne: "Sie lesen in einer Zeitung diesen Text. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      texte: `<div class="press"><h3>Eine Woche ohne Handy</h3>
<p>Die Klasse 9b einer Schule in Mainz hat ein Experiment gemacht: eine Woche ohne Smartphone. Die Idee kam von der Klassenlehrerin, Frau Petersen. „Viele Schüler waren in der Pause nur am Handy. Niemand hat mehr miteinander gesprochen“, sagt sie.</p>
<p>Am Anfang waren die Jugendlichen nicht begeistert. „Ich dachte, ich verpasse alles“, sagt der 15-jährige Luca. Aber schon nach drei Tagen hat er gemerkt: Er schläft besser und hat mehr Zeit. „Ich habe wieder Fußball gespielt und sogar ein Buch gelesen.“</p>
<p>Nicht alle haben durchgehalten. Fünf von 24 Schülern haben vor dem Ende wieder ihr Handy benutzt. Am schwierigsten war es am Wochenende. Für die Eltern war das Experiment übrigens auch interessant: Viele haben gemerkt, dass sie selbst zu oft auf ihr Handy schauen.</p></div>`,
      items: [
        { n: 1, q: "Wer hatte die Idee für das Experiment?", tr: ["Qui a eu l'idée de l'expérience ?", "Iza no nanana ny hevitra?"], opts: ["Die Schüler.", "Die Lehrerin.", "Die Eltern."], otr: [["les élèves", "ny mpianatra"], ["la professeure", "ny mpampianatra"], ["les parents", "ny ray aman-dreny"]], a: "b", exp: { mg: "« Die Idee kam von der Klassenlehrerin ».", fr: "La professeure principale." } },
        { n: 2, q: "Warum wollte Frau Petersen das Experiment?", tr: ["Pourquoi Mme Petersen voulait-elle l'expérience ?", "Nahoana no nanao izany i Rtoa Petersen?"], opts: ["Die Schüler haben in der Pause nicht miteinander gesprochen.", "Die Noten waren schlecht.", "Die Handys waren zu teuer."], otr: [["les élèves ne se parlaient plus", "tsy nifampiresaka intsony ny mpianatra"], ["les notes étaient mauvaises", "ratsy ny naoty"], ["les portables étaient trop chers", "lafo loatra ny finday"]], a: "a", exp: { mg: "« Niemand hat mehr miteinander gesprochen ».", fr: "Ils ne se parlaient plus." } },
        { n: 3, q: "Was hat Luca bemerkt?", tr: ["Qu'a remarqué Luca ?", "Inona no tsikaritr'i Luca?"], opts: ["Er hat alles verpasst.", "Er schläft besser.", "Er hat weniger Zeit."], otr: [["il a tout raté", "tsy nahalala na inona na inona"], ["il dort mieux", "matory tsara kokoa"], ["il a moins de temps", "kely kokoa ny fotoana"]], a: "b", exp: { mg: "« Er schläft besser und hat mehr Zeit ».", fr: "Il dort mieux." } },
        { n: 4, q: "Wie viele Schüler haben das Experiment nicht bis zum Ende gemacht?", tr: ["Combien d'élèves n'ont pas tenu jusqu'au bout ?", "Mpianatra firy no tsy nahavita hatramin'ny farany?"], opts: ["5", "19", "24"], otr: [["5", "5"], ["19", "19"], ["24", "24"]], a: "a", exp: { mg: "« Fünf von 24 ».", fr: "Cinq sur 24." } },
        { n: 5, q: "Die Eltern haben gemerkt, dass …", tr: ["Les parents ont remarqué que…", "Tsikaritry ny ray aman-dreny fa…"], opts: ["ihre Kinder mehr lernen.", "sie selbst oft am Handy sind.", "das Experiment zu lang war."], otr: [["leurs enfants apprennent plus", "mianatra kokoa ny zanany"], ["eux-mêmes sont souvent sur leur portable", "izy ireo koa matetika no mijery finday"], ["l'expérience était trop longue", "lava loatra"]], a: "b", exp: { mg: "« dass sie selbst zu oft auf ihr Handy schauen ».", fr: "Eux-mêmes regardent trop leur portable." } }
      ] },
    { id: "L2", nom: "Teil 2", type: "mc", temps: 7, layout: "textAfter", noShuffle: true,
      consigne: "Sie lesen die Informationstafel im Rathaus. Lesen Sie die Aufgaben 6 bis 10 und den Text. In welchen Stock gehen Sie? Wählen Sie die richtige Lösung a, b oder c.",
      ctr: ["Panneau de la mairie : à quel étage allez-vous ? a, b ou c.", "Tabilao ao amin'ny lapan'ny tanàna: amin'ny rihana firy ianao no mandeha?"],
      texte: `<div class="rules"><h3>RATHAUS – BÜRGERSERVICE</h3>
<p><b>3. Stock:</b> Standesamt (Hochzeit, Geburt) · Bürgermeister</p>
<p><b>2. Stock:</b> Ausländerbehörde · Integrationskurse · Sozialamt</p>
<p><b>1. Stock:</b> Kfz-Zulassung (Auto anmelden) · Führerscheinstelle</p>
<p><b>Erdgeschoss:</b> Bürgerbüro (Wohnung anmelden, Pass, Personalausweis) · Information · Kasse</p>
<p><b>Untergeschoss:</b> Fundbüro · Stadtarchiv</p></div>`,
      exemple: { q: "Sie möchten heiraten.", opts: ["2. Stock", "3. Stock", "anderer Stock"], a: "b" },
      items: [
        { n: 6, q: "Sie haben eine neue Wohnung und müssen sich anmelden.", tr: ["Vous devez déclarer votre nouveau logement.", "Tsy maintsy manambara ny trano vaovao ianao."], opts: ["Erdgeschoss", "1. Stock", "anderer Stock"], a: "a", exp: { mg: "« Wohnung anmelden » → Bürgerbüro, rihana ambany.", fr: "Bureau des citoyens → rez-de-chaussée." } },
        { n: 7, q: "Sie haben ein Auto gekauft und möchten es anmelden.", tr: ["Vous voulez immatriculer votre voiture.", "Te hanoratra ny fiara novidinao ianao."], opts: ["1. Stock", "2. Stock", "anderer Stock"], a: "a", exp: { mg: "« Kfz-Zulassung » → rihana 1.", fr: "Immatriculation → 1er." } },
        { n: 8, q: "Sie suchen Informationen über einen Integrationskurs.", tr: ["Vous cherchez des infos sur un cours d'intégration.", "Mitady vaovao momba ny fampianarana fampidirana ianao."], opts: ["Erdgeschoss", "2. Stock", "anderer Stock"], a: "b", exp: { mg: "« Integrationskurse » → rihana 2.", fr: "Cours d'intégration → 2e." } },
        { n: 9, q: "Ihr Baby ist geboren und Sie brauchen eine Geburtsurkunde.", tr: ["Votre bébé est né, vous avez besoin d'un acte de naissance.", "Teraka ny zanakao ary mila taratasy fahaterahana ianao."], opts: ["1. Stock", "Erdgeschoss", "anderer Stock"], a: "c", exp: { mg: "« Standesamt (Geburt) » ao amin'ny rihana 3 → « anderer Stock ».", fr: "État civil au 3e → autre étage." } },
        { n: 10, q: "Sie haben im Bus Ihren Schirm vergessen.", tr: ["Vous avez oublié votre parapluie dans le bus.", "Hadinonao tao anaty bus ny elonao."], opts: ["Untergeschoss", "Erdgeschoss", "anderer Stock"], a: "a", exp: { mg: "« Fundbüro » → Untergeschoss.", fr: "Objets trouvés → sous-sol." } }
      ] },
    { id: "L3", nom: "Teil 3", type: "mc", temps: 8,
      consigne: "Sie lesen eine E-Mail. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      texte: `<div class="blog"><p><b>Von:</b> kundenservice@technoshop.de · <b>Betreff:</b> Ihre Reklamation</p><p>Sehr geehrter Herr Rakotondrabe,</p>
<p>vielen Dank für Ihre E-Mail vom 3. Oktober. Es tut uns leid, dass Ihr neuer Laptop nicht richtig funktioniert.</p>
<p>Natürlich bekommen Sie einen neuen Laptop. Leider haben wir das gleiche Modell im Moment nicht. Sie können zwischen zwei Möglichkeiten wählen: Sie warten zwei Wochen auf das gleiche Modell, oder Sie nehmen sofort ein anderes Modell. Das andere Modell kostet 50 Euro mehr, aber für Sie ist es zum gleichen Preis.</p>
<p>Bitte bringen Sie den kaputten Laptop und die Rechnung in unser Geschäft in der Königstraße. Die Verpackung brauchen Sie nicht.</p>
<p>Mit freundlichen Grüßen<br>Ihr Technoshop-Team</p></div>`,
      items: [
        { n: 11, q: "Herr Rakotondrabe hat …", tr: ["M. Rakotondrabe a…", "Atoa Rakotondrabe dia…"], opts: ["einen Laptop bestellt.", "sich über einen Laptop beschwert.", "einen Laptop verkauft."], otr: [["commandé un ordinateur", "nanafatra solosaina"], ["fait une réclamation", "nitaraina momba ny solosaina"], ["vendu un ordinateur", "nivarotra solosaina"]], a: "b", exp: { mg: "« Reklamation … nicht richtig funktioniert ».", fr: "Réclamation." } },
        { n: 12, q: "Was passiert mit dem Laptop?", tr: ["Que se passe-t-il avec l'ordinateur ?", "Inona no hiseho amin'ny solosaina?"], opts: ["Er wird repariert.", "Er bekommt einen neuen.", "Er bekommt sein Geld zurück."], otr: [["il est réparé", "amboarina"], ["il en reçoit un nouveau", "omena vaovao"], ["il est remboursé", "averina ny vola"]], a: "b", exp: { mg: "« bekommen Sie einen neuen Laptop ».", fr: "Un nouvel ordinateur." } },
        { n: 13, q: "Wenn er das gleiche Modell möchte, …", tr: ["S'il veut le même modèle…", "Raha te hahazo modely mitovy izy…"], opts: ["muss er zwei Wochen warten.", "muss er 50 Euro mehr bezahlen.", "bekommt er es sofort."], otr: [["il doit attendre deux semaines", "miandry herinandro roa"], ["il paie 50 € de plus", "mandoa 50 € fanampiny"], ["il l'a tout de suite", "azony avy hatrany"]], a: "a", exp: { mg: "« Sie warten zwei Wochen auf das gleiche Modell ».", fr: "Deux semaines d'attente." } },
        { n: 14, q: "Das andere Modell …", tr: ["L'autre modèle…", "Ny modely hafa…"], opts: ["ist billiger.", "kostet für ihn nicht mehr.", "ist erst in zwei Wochen da."], otr: [["est moins cher", "mora kokoa"], ["ne lui coûte pas plus", "tsy lafo kokoa ho azy"], ["arrive dans deux semaines", "ho tonga afaka herinandro roa"]], a: "b", exp: { mg: "« für Sie ist es zum gleichen Preis ».", fr: "Même prix pour lui." } },
        { n: 15, q: "Was muss er ins Geschäft bringen?", tr: ["Que doit-il apporter au magasin ?", "Inona no tokony ho entiny?"], opts: ["Laptop und Verpackung.", "Laptop und Rechnung.", "Nur die Rechnung."], otr: [["ordinateur et emballage", "solosaina sy fonosana"], ["ordinateur et facture", "solosaina sy faktiora"], ["seulement la facture", "faktiora ihany"]], a: "b", exp: { mg: "« den kaputten Laptop und die Rechnung ». Tsy ilaina ny fonosana.", fr: "Ordinateur et facture ; pas l'emballage." } }
      ] },
    { id: "L4", nom: "Teil 4", type: "match", temps: 7, zero: true,
      consigne: "Sechs Personen suchen im Internet nach Geschäften. Lesen Sie die Aufgaben 16 bis 20 und die Anzeigen a bis f. Welche Anzeige passt zu welcher Person? Für eine Aufgabe gibt es keine Lösung. Markieren Sie so: X. Die Anzeige aus dem Beispiel können Sie nicht mehr wählen.",
      ctr: ["Six personnes cherchent un magasin. Quelle annonce (a–f) pour chaque personne ? Une n'a pas de solution : X.", "Olona 6 mitady magazay. Iza no filazana mifanaraka? Misy iray tsy misy: X."],
      choix: {
        a: "<b>Handy-Doktor</b><br>Display kaputt? Reparatur in 1 Stunde!",
        b: "<b>Second-Hand-Laden „Zweite Chance“</b><br>Kleidung, Möbel, Bücher – fast geschenkt.",
        c: "<b>Afro-Asia-Markt</b><br>Lebensmittel aus Afrika und Asien: Maniok, Reis, Gewürze.",
        d: "<b>Fahrradladen Speiche</b><br>Neue und gebrauchte Räder, Reparatur auch samstags.",
        e: "<b>Copyshop Max</b><br>Fotos drucken, Bewerbungsmappen, Visitenkarten.",
        f: "<b>Optiker Klarsicht</b><br>Brillen und Kontaktlinsen – Sehtest kostenlos."
      },
      exemple: { q: "Ali ist sein Handy heruntergefallen.", a: "a" },
      items: [
        { n: 16, q: "Fara möchte Zutaten für ein madagassisches Gericht kaufen.", tr: ["Fara veut acheter des ingrédients pour un plat malgache.", "Te hividy akora ho an'ny sakafo malagasy i Fara."], a: "c", exp: { mg: "Maniok, vary, zava-manitra → Afro-Asia-Markt.", fr: "Manioc, riz, épices → c." } },
        { n: 17, q: "Herr Weber sieht nicht mehr gut beim Lesen.", tr: ["M. Weber ne voit plus bien pour lire.", "Tsy mahita tsara intsony rehefa mamaky Atoa Weber."], a: "f", exp: { mg: "Optiker = mpanao solomaso.", fr: "Opticien → f." } },
        { n: 18, q: "Eine Studentin braucht billige Möbel für ihr Zimmer.", tr: ["Une étudiante a besoin de meubles pas chers.", "Mila fanaka mora ny mpianatra iray."], a: "b", exp: { mg: "« Möbel … fast geschenkt ».", fr: "Second-hand → b." } },
        { n: 19, q: "Tina braucht schnell einen neuen Laptop.", tr: ["Tina a besoin d'un nouvel ordinateur rapidement.", "Mila solosaina vaovao haingana i Tina."], a: "0", exp: { mg: "Tsy misy mivarotra solosaina → X.", fr: "Aucun magasin d'ordinateurs → X." } },
        { n: 20, q: "Jonas möchte für seine Bewerbung Fotos drucken.", tr: ["Jonas veut imprimer des photos pour sa candidature.", "Te hanonta sary ho an'ny fangatahana asa i Jonas."], a: "e", exp: { mg: "« Fotos drucken, Bewerbungsmappen ».", fr: "Copyshop → e." } }
      ] }
  ] },

  hoeren: { temps: 30, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 2, type: "mc",
      consigne: "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      clips: [
        { id: "ga2m5-h1-1", titre: "Text 1", script: [{ s: "m", n: "Durchsage", t: "Liebe Kunden, heute im Elektromarkt: Alle Kopfhörer zum halben Preis. Das Angebot gilt nur heute bis zwanzig Uhr." }],
          items: [{ n: 1, q: "Was ist heute billiger?", tr: ["Qu'est-ce qui est moins cher aujourd'hui ?", "Inona no mora kokoa anio?"], opts: ["Handys.", "Kopfhörer.", "Fernseher."], otr: [["portables", "finday"], ["casques", "écouteurs"], ["téléviseurs", "fahitalavitra"]], a: "b", exp: { mg: "« Alle Kopfhörer zum halben Preis ».", fr: "Les casques." } }] },
        { id: "ga2m5-h1-2", titre: "Text 2", script: [{ s: "f", n: "Bibliothek", t: "Hallo, hier ist die Stadtbibliothek. Die Bücher, die Sie bestellt haben, sind da. Sie können sie bis Freitag abholen. Danach gehen sie zurück ins Regal." }],
          items: [{ n: 2, q: "Bis wann kann man die Bücher abholen?", tr: ["Jusqu'à quand peut-on retirer les livres ?", "Mandra-pahoviana no azo alaina ny boky?"], opts: ["Bis heute.", "Bis Freitag.", "Bis nächste Woche."], otr: [["aujourd'hui", "anio"], ["vendredi", "zoma"], ["la semaine prochaine", "herinandro ho avy"]], a: "b", exp: { mg: "« bis Freitag abholen ».", fr: "Vendredi." } }] },
        { id: "ga2m5-h1-3", titre: "Text 3", script: [{ s: "m", n: "Radio", t: "Achtung, Autofahrer: Auf der A3 zwischen Köln und Bonn gibt es zehn Kilometer Stau. Fahren Sie besser über die Landstraße." }],
          items: [{ n: 3, q: "Was ist das Problem auf der A3?", tr: ["Quel est le problème sur l'A3 ?", "Inona no olana amin'ny A3?"], opts: ["Ein Unfall.", "Ein Stau.", "Eine Baustelle."], otr: [["un accident", "lozam-pifamoivoizana"], ["un embouteillage", "fitohanana"], ["un chantier", "fanamboarana"]], a: "b", exp: { mg: "« zehn Kilometer Stau ».", fr: "Embouteillage de 10 km." } }] },
        { id: "ga2m5-h1-4", titre: "Text 4", script: [{ s: "f", n: "Nina", t: "Hallo Papa, ich bin's, Nina. Mein Handy-Akku ist fast leer. Ich rufe dich vom Telefon meiner Freundin an. Ich bin um zehn zu Hause, nicht um neun." }],
          items: [{ n: 4, q: "Wann kommt Nina nach Hause?", tr: ["Quand Nina rentre-t-elle ?", "Amin'ny firy no hody i Nina?"], opts: ["Um 9 Uhr.", "Um 10 Uhr.", "Um 11 Uhr."], otr: [["21 h", "9 ora"], ["22 h", "10 ora"], ["23 h", "11 ora"]], a: "b", exp: { mg: "« um zehn …, nicht um neun ».", fr: "À 10 h." } }] },
        { id: "ga2m5-h1-5", titre: "Text 5", script: [{ s: "m", n: "Radio", t: "In unserer Sendung heute Abend sprechen wir über das Thema „Einkaufen im Internet“. Rufen Sie uns an und erzählen Sie von Ihren Erfahrungen!" }],
          items: [{ n: 5, q: "Worum geht es in der Sendung?", tr: ["De quoi parle l'émission ?", "Inona no resahin'ny fandaharana?"], opts: ["Um Online-Shopping.", "Um Fernsehen.", "Um Telefonieren."], otr: [["achats en ligne", "fividianana an-tserasera"], ["la télévision", "fahitalavitra"], ["le téléphone", "telefaona"]], a: "a", exp: { mg: "« Einkaufen im Internet ».", fr: "Achats en ligne." } }] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 1, type: "match", zero: false, lecture: 30,
      consigne: "Sie hören ein Gespräch. Sie hören den Text einmal. Wählen Sie für die Aufgaben 6 bis 10 ein passendes Bild aus a bis i. Wählen Sie jeden Buchstaben nur einmal.",
      contexte: "Welches Geschenk kauft Hery für wen?",
      xtr: ["Quel cadeau Hery achète-t-il pour qui ?", "Inona no fanomezana vidian'i Hery ho an'iza?"],
      choixTitre: "Bilder",
      choix: { a: "📚 Buch", b: "🧣 Schal", c: "🎧 Kopfhörer", d: "⌚ Uhr", e: "🌸 Parfüm", f: "🎮 Videospiel", g: "☕ Tasse", h: "🧸 Teddybär", i: "🕶️ Sonnenbrille" },
      clips: [{ id: "ga2m5-h2", titre: "Gespräch", script: [
        { s: "f", n: "Verkäuferin", t: "Kann ich Ihnen helfen?" },
        { s: "m", n: "Hery", t: "Ja, bitte. Ich fahre nach Madagaskar und brauche Geschenke für meine Familie. Für meine Mutter vielleicht ein Parfüm?" },
        { s: "f", n: "Verkäuferin", t: "Sehr gern. Und für Ihren Vater?" },
        { s: "m", n: "Hery", t: "Er hat schon eine Uhr. Ich nehme für ihn diesen warmen Schal – im Juli ist es in Antananarivo kalt." },
        { s: "f", n: "Verkäuferin", t: "Gute Idee. Haben Sie Geschwister?" },
        { s: "m", n: "Hery", t: "Ja, meine Schwester ist sechzehn. Sie hört immer Musik – also Kopfhörer." },
        { s: "f", n: "Verkäuferin", t: "Und Ihr kleiner Bruder?" },
        { s: "m", n: "Hery", t: "Er ist zehn. Er möchte ein Videospiel, aber er hat keine Konsole. Ich kaufe ihm lieber ein Buch über Fußball." },
        { s: "f", n: "Verkäuferin", t: "Und für Ihre Großmutter?" },
        { s: "m", n: "Hery", t: "Für Oma eine schöne Tasse mit einem Foto von Berlin." }],
        items: [
          { n: 6, q: "Mutter", tr: ["mère", "reny"], a: "e", exp: { mg: "« ein Parfüm ».", fr: "Parfum." } },
          { n: 7, q: "Vater", tr: ["père", "ray"], a: "b", exp: { mg: "Efa manana famantaranandro → « Schal ».", fr: "Il a déjà une montre → écharpe." } },
          { n: 8, q: "Schwester", tr: ["sœur", "anabavy"], a: "c", exp: { mg: "« Kopfhörer ».", fr: "Casque." } },
          { n: 9, q: "Bruder", tr: ["frère", "rahalahy"], a: "a", exp: { mg: "Tsy lalao video fa « Buch über Fußball ».", fr: "Pas de jeu vidéo, un livre." } },
          { n: 10, q: "Großmutter", tr: ["grand-mère", "renibe"], a: "g", exp: { mg: "« eine schöne Tasse ».", fr: "Une tasse." } }
        ] }] },
    { id: "H3", nom: "Teil 3", ecoutes: 1, type: "mc",
      consigne: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      clips: [
        { id: "ga2m5-h3-11", titre: "Gespräch 1", script: [{ s: "f", n: "Frau", t: "Was kostet der Fernseher?" }, { s: "m", n: "Verkäufer", t: "Vierhundertneunundneunzig Euro. Mit Lieferung kommen noch zwanzig Euro dazu." }, { s: "f", n: "Frau", t: "Ich nehme ihn selbst mit." }],
          items: [{ n: 11, q: "Wie viel bezahlt die Frau?", tr: ["Combien paie la femme ?", "Ohatrinona no aloan'ilay vehivavy?"], opts: ["479 Euro.", "499 Euro.", "519 Euro."], otr: [["479 €", "479 €"], ["499 €", "499 €"], ["519 €", "519 €"]], a: "b", exp: { mg: "Entiny ihany → tsy misy lieferung → 499 €.", fr: "Elle l'emporte → 499 €." } }] },
        { id: "ga2m5-h3-12", titre: "Gespräch 2", script: [{ s: "m", n: "Mann", t: "Liest du noch Zeitung?" }, { s: "f", n: "Frau", t: "Auf Papier nicht mehr. Ich lese die Nachrichten morgens im Internet und abends sehe ich die Tagesschau." }],
          items: [{ n: 12, q: "Wie informiert sich die Frau am Morgen?", tr: ["Comment la femme s'informe-t-elle le matin ?", "Ahoana no ahafantaran'ilay vehivavy vaovao maraina?"], opts: ["Mit der Zeitung.", "Im Internet.", "Im Fernsehen."], otr: [["journal papier", "gazety"], ["sur Internet", "Internet"], ["à la télé", "fahitalavitra"]], a: "b", exp: { mg: "« morgens im Internet ». Ny fahitalavitra hariva.", fr: "Internet le matin, télé le soir." } }] },
        { id: "ga2m5-h3-13", titre: "Gespräch 3", script: [{ s: "f", n: "Kundin", t: "Ich möchte diese Schuhe zurückgeben. Sie sind zu klein." }, { s: "m", n: "Verkäufer", t: "Möchten Sie eine Nummer größer oder das Geld zurück?" }, { s: "f", n: "Kundin", t: "Eine Nummer größer, bitte." }],
          items: [{ n: 13, q: "Was möchte die Frau?", tr: ["Que veut la femme ?", "Inona no tian'ilay vehivavy?"], opts: ["Ihr Geld zurück.", "Größere Schuhe.", "Andere Farbe."], otr: [["être remboursée", "averina ny vola"], ["des chaussures plus grandes", "kiraro lehibe kokoa"], ["une autre couleur", "loko hafa"]], a: "b", exp: { mg: "« Eine Nummer größer ».", fr: "Une pointure au-dessus." } }] },
        { id: "ga2m5-h3-14", titre: "Gespräch 4", script: [{ s: "m", n: "Mann", t: "Entschuldigung, gibt es hier in der Nähe eine Apotheke?" }, { s: "f", n: "Frau", t: "Die Apotheke am Markt ist heute zu. Aber am Bahnhof ist eine, die hat bis Mitternacht auf." }],
          items: [{ n: 14, q: "Wo ist heute eine Apotheke offen?", tr: ["Où une pharmacie est-elle ouverte aujourd'hui ?", "Aiza no misy fivarotam-panafody misokatra anio?"], opts: ["Am Markt.", "Am Bahnhof.", "Im Krankenhaus."], otr: [["au marché", "eny an-tsena"], ["à la gare", "eny amin'ny gara"], ["à l'hôpital", "hopitaly"]], a: "b", exp: { mg: "Mihidy ny eny an-tsena → gara.", fr: "La gare (le marché est fermé)." } }] },
        { id: "ga2m5-h3-15", titre: "Gespräch 5", script: [{ s: "f", n: "Frau", t: "Schauen wir heute Abend einen Film?" }, { s: "m", n: "Mann", t: "Lieber nicht. Im Fernsehen kommt das Fußballspiel, das will ich sehen." }, { s: "f", n: "Frau", t: "Dann lese ich mein Buch weiter." }],
          items: [{ n: 15, q: "Was macht der Mann heute Abend?", tr: ["Que fait l'homme ce soir ?", "Inona no ataon'ilay lehilahy anio hariva?"], opts: ["Er sieht einen Film.", "Er liest.", "Er sieht Fußball."], otr: [["il regarde un film", "mijery sarimihetsika"], ["il lit", "mamaky boky"], ["il regarde le foot", "mijery baolina"]], a: "c", exp: { mg: "« das Fußballspiel, das will ich sehen ».", fr: "Le match de foot." } }] }
      ] },
    { id: "H4", nom: "Teil 4", ecoutes: 2, type: "jn", lecture: 30,
      consigne: "Sie hören ein Interview. Sie hören den Text zweimal. Wählen Sie für die Aufgaben 16 bis 20 Ja oder Nein.",
      contexte: "Die Moderatorin spricht mit Herrn Bauer über seinen kleinen Laden.",
      xtr: ["La présentatrice parle avec M. Bauer de sa petite boutique.", "Miresaka amin'Atoa Bauer momba ny fivarotany kely ny mpanentana."],
      clips: [{ id: "ga2m5-h4", titre: "Interview", script: [
        { s: "f", n: "Moderatorin", t: "Herr Bauer, Sie haben einen kleinen Laden für Spielsachen. Seit wann?" },
        { s: "m", n: "Herr Bauer", t: "Seit dreißig Jahren. Früher hat der Laden meinem Vater gehört." },
        { s: "f", n: "Moderatorin", t: "Viele Leute kaufen heute im Internet. Ist das ein Problem für Sie?" },
        { s: "m", n: "Herr Bauer", t: "Ja, natürlich. Aber meine Kunden kommen, weil sie die Spielsachen anfassen und ausprobieren möchten. Und ich berate sie persönlich." },
        { s: "f", n: "Moderatorin", t: "Verkaufen Sie auch online?" },
        { s: "m", n: "Herr Bauer", t: "Seit zwei Jahren, ja. Meine Tochter hat einen Online-Shop gemacht. Das funktioniert gut, besonders vor Weihnachten." },
        { s: "f", n: "Moderatorin", t: "Was ist im Moment am beliebtesten?" },
        { s: "m", n: "Herr Bauer", t: "Ganz klar: Spiele aus Holz. Viele Eltern möchten weniger Plastik für ihre Kinder." }],
        items: [
          { n: 16, q: "Herr Bauer hat den Laden selbst gegründet.", tr: ["M. Bauer a fondé la boutique lui-même.", "Izy no nanorina ny fivarotana."], a: "n", exp: { mg: "An'ny rainy taloha ny fivarotana.", fr: "Elle appartenait à son père → Nein." } },
          { n: 17, q: "Die Kunden möchten die Spielsachen ausprobieren.", tr: ["Les clients veulent essayer les jouets.", "Te hanandrana ny kilalao ny mpanjifa."], a: "j", exp: { mg: "« anfassen und ausprobieren ».", fr: "Ja." } },
          { n: 18, q: "Herr Bauer verkauft nicht im Internet.", tr: ["M. Bauer ne vend pas sur Internet.", "Tsy mivarotra an-tserasera Atoa Bauer."], a: "n", exp: { mg: "« Seit zwei Jahren » misy Online-Shop.", fr: "Boutique en ligne depuis 2 ans → Nein." } },
          { n: 19, q: "Den Online-Shop hat seine Tochter gemacht.", tr: ["Sa fille a créé la boutique en ligne.", "Ny zanany vavy no nanao ny fivarotana an-tserasera."], a: "j", exp: { mg: "« Meine Tochter hat einen Online-Shop gemacht ».", fr: "Ja." } },
          { n: 20, q: "Am beliebtesten sind Spielsachen aus Plastik.", tr: ["Les jouets en plastique sont les plus populaires.", "Ny kilalao plastika no tena tiana."], a: "n", exp: { mg: "« Spiele aus Holz » (hazo).", fr: "En bois → Nein." } }
        ] }] }
  ] },

  schreiben: { temps: 30, aufgaben: [
    { id: "S1", nom: "Teil 1", temps: 10, mots: 25, points: 10, type: "SMS (informell)",
      consigne: `<p>Sie sind im Supermarkt und Ihre Mitbewohnerin Sophie hat Ihnen eine Einkaufsliste gegeben. Einige Sachen gibt es nicht. Schreiben Sie Sophie eine SMS:</p><ul><li>Was gibt es nicht?</li><li>Was kaufen Sie stattdessen?</li><li>Fragen Sie, ob sie noch etwas braucht.</li></ul><p class="small">Schreiben Sie 20–30 Wörter.</p>`,
      ctr: ["SMS à votre colocataire : ce qui manque, ce que vous achetez à la place, demandez si elle a besoin d'autre chose. 20–30 mots.", "SMS ho an'ny mpiara-mipetraka: inona no tsy misy, inona no vidinao solony, manontania raha mbola mila zavatra. 20–30 teny."],
      checklist: ["Hallo Sophie,", "Inona no tsy misy", "Inona no vidinao solony (stattdessen)", "Fanontaniana: mbola mila ve?", "Gruß", "20–30 teny"],
      redemittel: ["Hallo Sophie,", "es gibt leider keine … mehr.", "Ich kaufe stattdessen …", "Brauchst du noch etwas?", "Bis gleich!"],
      modele: `Hallo Sophie,
es gibt leider keine Tomaten und keinen Joghurt mehr. Ich kaufe stattdessen Paprika und Quark. Brauchst du noch etwas? Ich bin noch zehn Minuten hier.
Bis gleich!
Ony` },
    { id: "S2", nom: "Teil 2", temps: 20, mots: 35, points: 15, type: "E-Mail (halbformell)",
      consigne: `<p>Sie haben in einem Online-Shop eine Kaffeemaschine bestellt. Sie ist kaputt angekommen. Schreiben Sie an den Kundenservice:</p><ul><li>Beschreiben Sie das Problem.</li><li>Sagen Sie, was Sie möchten.</li><li>Fragen Sie, wie Sie die Maschine zurückschicken.</li></ul><p class="small">Schreiben Sie 30–40 Wörter. Schreiben Sie eine Anrede und einen Gruß.</p>`,
      ctr: ["E-mail au service client : décrivez le problème, dites ce que vous voulez, demandez comment renvoyer la machine. 30–40 mots.", "Mailaka ho an'ny sampan-draharaha mpanjifa: lazao ny olana, ny tianao, ary ahoana no hamerenana ny milina. 30–40 teny."],
      checklist: ["Sehr geehrte Damen und Herren,", "Olana (kaputt angekommen …)", "Ny tianao (neue Maschine / Geld zurück)", "Fanontaniana: ahoana no hamerenana?", "Mit freundlichen Grüßen", "« Sie »", "30–40 teny"],
      redemittel: ["Sehr geehrte Damen und Herren,", "am … habe ich bei Ihnen eine Kaffeemaschine bestellt.", "Leider ist sie kaputt angekommen: …", "Bitte schicken Sie mir eine neue Maschine.", "Wie kann ich die kaputte Maschine zurückschicken?", "Mit freundlichen Grüßen"],
      modele: `Sehr geehrte Damen und Herren,

letzte Woche habe ich bei Ihnen eine Kaffeemaschine bestellt. Leider ist sie kaputt angekommen: Das Glas ist zerbrochen. Bitte schicken Sie mir eine neue Maschine. Wie kann ich die kaputte Maschine zurückschicken?

Mit freundlichen Grüßen
Hasina Rajaonarison` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Teboka 3 voavaly? · Les 3 points ?" },
    { nom: "Kohärenz", desc: "Fehezanteny mifandray · Enchaînement" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" }
  ] },

  sprechen: { preparation: 0, teile: [
    { id: "P1", nom: "Teil 1 – Fragen zur Person", mg: "Fanontaniana amin'ny karatra", duree: 3, mode: "dialog", em: "🃏",
      consigne: `<p>Sie bekommen vier Karten und stellen mit diesen Karten vier Fragen. Ihr Partner / Ihre Partnerin antwortet. Dann stellt Ihr Partner / Ihre Partnerin vier Fragen und Sie antworten.</p><div class="plan">Ihre Karten: <b>Handy? · Fernsehen? · Einkaufen? · Zeitung?</b></div>`,
      partenaire: [
        { id: "ga2m5-p1-1", t: "Wie oft benutzt du dein Handy?", cue: "Valio. · Réponds.", aide: ["Sehr oft, eigentlich den ganzen Tag.", "Nicht so oft, nur für WhatsApp."] },
        { id: "ga2m5-p1-2", t: "Ich auch, leider! Deine Karte: „Fernsehen“.", cue: "Manontania. · Pose ta question.", aide: ["Was siehst du gern im Fernsehen?", "Wie viele Stunden siehst du fern?"] },
        { id: "ga2m5-p1-3", t: "Krimis und Dokumentationen über Tiere. Meine Frage: Wo kaufst du am liebsten ein?", cue: "Valio. · Réponds.", aide: ["Am liebsten auf dem Markt.", "Meistens online, das ist bequem."] },
        { id: "ga2m5-p1-4", t: "Okay. Deine letzte Karte: „Zeitung“.", cue: "Manontania. · Question.", aide: ["Liest du Zeitung?", "Welche Nachrichten liest du?"] },
        { id: "ga2m5-p1-5", t: "Nur online, die Sportnachrichten. Letzte Frage: Hast du einen Computer zu Hause?", cue: "Valio. · Réponds.", aide: ["Ja, einen Laptop.", "Nein, ich mache alles mit dem Handy."] }
      ],
      redemittel: [["Manontany · Demander", ["Wie oft benutzt du …?", "Was siehst du gern …?", "Wo kaufst du …?", "Liest du …?"]], ["Mamaly · Répondre", ["Sehr oft / nicht so oft.", "Am liebsten …", "Meistens …", "Nur …"]]],
      modele: `A: Wie oft benutzt du dein Handy?
B: Sehr oft, eigentlich den ganzen Tag.
B: Was siehst du gern im Fernsehen?
A: Krimis und Tierdokumentationen.
A: Wo kaufst du am liebsten ein?
B: Auf dem Markt, da ist alles frisch.
B: Liest du Zeitung?
A: Nur online, die Sportnachrichten.` },
    { id: "P2", nom: "Teil 2 – Über sich sprechen", mg: "Mitantara ny fiainanao", duree: 3, mode: "present", em: "🗣️",
      consigne: `<p>Sie bekommen eine Karte und erzählen etwas über Ihr Leben.</p>`,
      themes: [{ titre: "Medien in Ihrem Alltag", points: [
        { de: "Handy?", mg: "Finday?", fr: "Portable ?" }, { de: "Fernsehen / Radio?", mg: "Fahitalavitra / Radio?", fr: "Télé / radio ?" },
        { de: "Internet?", mg: "Internet?", fr: "Internet ?" }, { de: "Bücher / Zeitung?", mg: "Boky / Gazety?", fr: "Livres / journal ?" } ],
        modele: `Mein Handy benutze ich jeden Tag, vor allem für WhatsApp mit meiner Familie in Madagaskar.
Fernsehen sehe ich nicht so viel. Aber im Auto höre ich immer Radio, besonders Musik.
Im Internet suche ich Informationen und schaue Videos, um Deutsch zu lernen.
Ich lese gern Bücher, am liebsten Romane auf Französisch. Zeitung lese ich nur online.` }],
      redemittel: [["Mitantara · Raconter", ["Ich benutze … jeden Tag, vor allem für …", "… sehe / höre ich nicht so oft.", "Im Internet …", "Am liebsten lese ich …"]]] },
    { id: "P3", nom: "Teil 3 – Etwas gemeinsam planen", mg: "Mitady fotoana iombonana", duree: 3, mode: "dialog", em: "📅",
      consigne: `<p>Ihr Freund Daniel hat einen neuen Job. Sie möchten zusammen mit Ihrem Partner / Ihrer Partnerin ein Geschenk für ihn kaufen. Finden Sie einen Termin.</p><div class="plan"><b>Ihr Kalender – Mittwoch, 8. Oktober</b><br>7.30–15 Uhr: Arbeit · 15.30 Uhr: Zahnarzt · 17 Uhr: frei · 19 Uhr: Deutschkurs</div>`,
      ctr: ["Achetez ensemble un cadeau pour Daniel. Trouvez un moment selon votre agenda.", "Mividy fanomezana ho an'i Daniel miaraka. Mitadiava fotoana."],
      partenaire: [
        { id: "ga2m5-p3-1", t: "Hallo! Gehen wir am Mittwoch in der Mittagspause ein Geschenk kaufen?", cue: "7.30–15 = asa. · Travail.", aide: ["Mittags kann ich nicht, ich arbeite bis drei.", "Das geht leider nicht."] },
        { id: "ga2m5-p3-2", t: "Schade. Und um halb vier?", cue: "15.30 = dokotera nify. · Dentiste.", aide: ["Da muss ich zum Zahnarzt.", "Wie wäre es um fünf?"] },
        { id: "ga2m5-p3-3", t: "Um fünf geht! Was kaufen wir? Vielleicht eine schöne Tasche für die Arbeit?", cue: "Manaiky na manolora hafa. · Accepte ou propose autre chose.", aide: ["Gute Idee! Oder einen Kalender?", "Er hat schon eine Tasche. Wie wäre es mit einem Gutschein?"] },
        { id: "ga2m5-p3-4", t: "Okay. Wo treffen wir uns?", cue: "Manolora toerana. · Propose un lieu.", aide: ["Vor dem Kaufhaus am Marktplatz?", "An der U-Bahn-Station?"] }
      ],
      redemittel: [["Manolotra · Proposer", ["Wie wäre es um …?", "Wir könnten …", "Treffen wir uns …?"]], ["Mandà · Refuser", ["Da muss ich …", "Das geht leider nicht."]], ["Manaiky · Accepter", ["Gute Idee!", "Einverstanden.", "Das passt!"]]],
      modele: `A: Gehen wir am Mittwoch mittags ein Geschenk kaufen?
B: Mittags kann ich nicht, ich arbeite bis drei.
A: Und um halb vier?
B: Da muss ich zum Zahnarzt. Wie wäre es um fünf?
A: Um fünf geht! Eine Tasche für die Arbeit?
B: Er hat schon eine. Wie wäre es mit einem Gutschein?
A: Gute Idee. Wo treffen wir uns?
B: Vor dem Kaufhaus am Marktplatz.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Tontosa ny asa · Tâche réalisée" },
    { nom: "Interaktion", desc: "Mamaly ny namanao · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "das Experiment", fr: "l'expérience", mg: "andrana", ex: "Die Klasse macht ein Experiment." },
    { de: "begeistert", fr: "enthousiaste", mg: "faly be", ex: "Sie waren nicht begeistert." },
    { de: "verpassen", fr: "rater, manquer", mg: "tsy tratra", ex: "Ich verpasse alles." },
    { de: "durchhalten", fr: "tenir bon", mg: "maharitra", ex: "Nicht alle haben durchgehalten." },
    { de: "das Standesamt", fr: "l'état civil", mg: "biraon'ny sora-piankohonana", ex: "Hochzeit im Standesamt." },
    { de: "sich anmelden", fr: "s'inscrire, se déclarer", mg: "manoratra anarana", ex: "Ich muss mich im Bürgerbüro anmelden." },
    { de: "die Geburtsurkunde", fr: "l'acte de naissance", mg: "kopia nahaterahana", ex: "Ich brauche eine Geburtsurkunde." },
    { de: "die Reklamation", fr: "la réclamation", mg: "fitarainana", ex: "Danke für Ihre Reklamation." },
    { de: "die Rechnung", fr: "la facture", mg: "faktiora", ex: "Bringen Sie die Rechnung mit." },
    { de: "die Verpackung", fr: "l'emballage", mg: "fonosana", ex: "Die Verpackung brauchen Sie nicht." },
    { de: "das Display", fr: "l'écran", mg: "efijery", ex: "Das Display ist kaputt." },
    { de: "der Optiker", fr: "l'opticien", mg: "mpanao solomaso", ex: "Ich gehe zum Optiker." },
    { de: "die Kopfhörer", fr: "le casque audio", mg: "écouteurs", ex: "Kopfhörer zum halben Preis." },
    { de: "der Akku", fr: "la batterie", mg: "batterie", ex: "Mein Akku ist leer." },
    { de: "die Sendung", fr: "l'émission", mg: "fandaharana", ex: "In unserer Sendung heute …" },
    { de: "die Nachrichten", fr: "les informations", mg: "vaovao", ex: "Ich lese die Nachrichten im Internet." },
    { de: "zurückgeben", fr: "rendre", mg: "mamerina", ex: "Ich möchte die Schuhe zurückgeben." },
    { de: "auf haben", fr: "être ouvert (fam.)", mg: "misokatra", ex: "Die Apotheke hat bis Mitternacht auf." },
    { de: "anfassen", fr: "toucher", mg: "mikasika", ex: "Kunden möchten die Spielsachen anfassen." },
    { de: "beraten", fr: "conseiller", mg: "manoro hevitra", ex: "Ich berate meine Kunden persönlich." },
    { de: "stattdessen", fr: "à la place", mg: "ho solony", ex: "Ich kaufe stattdessen Paprika." }
  ]
});
})();
