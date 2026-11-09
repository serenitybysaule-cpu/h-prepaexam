/* Goethe-Zertifikat A2 — Modellsatz 4 — textes originaux H Conseil & Formation */
(function(){
window.POOLS.GA2.sets.push({
  id: "ga2m4", titre: "Modellsatz 4", theme: "Dia, fety, fialam-boly",
  lesen: { temps: 30, teile: [
    { id: "L1", nom: "Teil 1", type: "mc", temps: 8,
      consigne: "Sie lesen in einer Zeitung diesen Text. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      texte: `<div class="press"><h3>Mit dem Fahrrad von Hamburg nach Rom</h3>
<p>2 000 Kilometer in sechs Wochen: Diese Reise haben die Geschwister Jana (19) und Ben (22) Schneider letzten Sommer gemacht – mit dem Fahrrad. Die Idee hatte Ben. „Ich hatte gerade mein Studium beendet und wollte etwas Besonderes machen“, erzählt er.</p>
<p>Jeden Tag sind sie etwa 60 Kilometer gefahren. Geschlafen haben sie meistens im Zelt, manchmal auch bei Familien, die sie unterwegs kennengelernt haben. „In Österreich hat uns eine Bäuerin zum Abendessen eingeladen. Das war der schönste Abend der Reise“, sagt Jana.</p>
<p>Natürlich gab es auch Probleme. In den Alpen hat es drei Tage lang geregnet, und Bens Fahrrad war zweimal kaputt. Aber aufgeben wollten sie nie. Jetzt schreiben die beiden ein Buch über ihre Reise. Es soll im Frühling erscheinen.</p></div>`,
      items: [
        { n: 1, q: "Die Idee für die Reise hatte …", tr: ["L'idée du voyage vient de…", "Iza no nanana ny hevitra?"], opts: ["Jana.", "Ben.", "die Eltern."], otr: [["Jana", "Jana"], ["Ben", "Ben"], ["les parents", "ny ray aman-dreny"]], a: "b", exp: { mg: "« Die Idee hatte Ben ».", fr: "C'est Ben." } },
        { n: 2, q: "Wie viele Kilometer sind sie pro Tag gefahren?", tr: ["Combien de km par jour ?", "Kilaometatra firy isan'andro?"], opts: ["Ungefähr 60.", "Ungefähr 200.", "Ungefähr 2000."], otr: [["environ 60", "eo amin'ny 60"], ["environ 200", "eo amin'ny 200"], ["environ 2000", "eo amin'ny 2000"]], a: "a", exp: { mg: "« etwa 60 Kilometer » isan'andro. 2000 = totaliny.", fr: "60 km/jour ; 2000 = le total." } },
        { n: 3, q: "Die beiden haben meistens …", tr: ["Ils ont surtout dormi…", "Matetika izy ireo dia natory…"], opts: ["im Hotel geschlafen.", "im Zelt geschlafen.", "bei Familien geschlafen."], otr: [["à l'hôtel", "tany amin'ny hotely"], ["sous la tente", "anaty lay"], ["chez des familles", "tany amin'ny fianakaviana"]], a: "b", exp: { mg: "« meistens im Zelt ». Indraindray ihany tany amin'ny fianakaviana.", fr: "Surtout sous la tente." } },
        { n: 4, q: "Was war für Jana besonders schön?", tr: ["Qu'est-ce qui a été particulièrement beau pour Jana ?", "Inona no tena nahafinaritra an'i Jana?"], opts: ["Ein Abendessen bei einer Bäuerin.", "Die Fahrt durch die Alpen.", "Die Ankunft in Rom."], otr: [["un dîner chez une fermière", "sakafo hariva tany amin'ny vehivavy mpamboly"], ["la traversée des Alpes", "ny Alpes"], ["l'arrivée à Rome", "fahatongavana tany Roma"]], a: "a", exp: { mg: "« Das war der schönste Abend der Reise ».", fr: "Le dîner chez la fermière." } },
        { n: 5, q: "Was machen die Geschwister jetzt?", tr: ["Que font-ils maintenant ?", "Inona no ataon'izy mirahalahy izao?"], opts: ["Sie planen eine neue Reise.", "Sie schreiben ein Buch.", "Sie reparieren Fahrräder."], otr: [["ils planifient un nouveau voyage", "manomana dia vaovao"], ["ils écrivent un livre", "manoratra boky"], ["ils réparent des vélos", "manamboatra bisikileta"]], a: "b", exp: { mg: "« Jetzt schreiben die beiden ein Buch ».", fr: "Ils écrivent un livre." } }
      ] },
    { id: "L2", nom: "Teil 2", type: "mc", temps: 7, layout: "textAfter", noShuffle: true,
      consigne: "Sie lesen die Informationstafel in einem Freizeitzentrum. Lesen Sie die Aufgaben 6 bis 10 und den Text. In welchen Stock gehen Sie? Wählen Sie die richtige Lösung a, b oder c.",
      ctr: ["Panneau d'un centre de loisirs : à quel étage allez-vous ? a, b ou c.", "Tabilao ao amin'ny foibe fialam-boly: amin'ny rihana firy ianao no mandeha?"],
      texte: `<div class="rules"><h3>FREIZEITZENTRUM AKTIV – ÜBERSICHT</h3>
<p><b>3. Stock:</b> Tanzsaal · Yoga · Musikschule</p>
<p><b>2. Stock:</b> Fitnessstudio · Kletterwand · Umkleiden</p>
<p><b>1. Stock:</b> Kino · Bowling · Spielhalle</p>
<p><b>Erdgeschoss:</b> Café · Kasse · Information · Fundsachen</p>
<p><b>Untergeschoss:</b> Schwimmbad · Sauna · Parkplätze</p></div>`,
      exemple: { q: "Sie möchten einen Film sehen.", opts: ["Erdgeschoss", "1. Stock", "anderer Stock"], a: "b" },
      items: [
        { n: 6, q: "Sie möchten Salsa tanzen lernen.", tr: ["Vous voulez apprendre la salsa.", "Te hianatra dihy salsa ianao."], opts: ["2. Stock", "3. Stock", "anderer Stock"], a: "b", exp: { mg: "« Tanzsaal » → rihana 3.", fr: "Salle de danse → 3e." } },
        { n: 7, q: "Sie haben Ihre Jacke vergessen.", tr: ["Vous avez oublié votre veste.", "Hadinonao ny palitao."], opts: ["Erdgeschoss", "Untergeschoss", "anderer Stock"], a: "a", exp: { mg: "« Fundsachen » → rihana ambany.", fr: "Objets trouvés → rez-de-chaussée." } },
        { n: 8, q: "Sie möchten mit Freunden bowlen.", tr: ["Vous voulez faire du bowling.", "Te hilalao bowling ianao."], opts: ["Erdgeschoss", "2. Stock", "anderer Stock"], a: "c", exp: { mg: "Bowling ao amin'ny rihana 1 → « anderer Stock ».", fr: "Bowling au 1er → autre étage." } },
        { n: 9, q: "Sie möchten schwimmen gehen.", tr: ["Vous voulez nager.", "Te hilomano ianao."], opts: ["Untergeschoss", "1. Stock", "anderer Stock"], a: "a", exp: { mg: "« Schwimmbad » → Untergeschoss.", fr: "Piscine → sous-sol." } },
        { n: 10, q: "Sie möchten an einer Wand klettern.", tr: ["Vous voulez faire de l'escalade.", "Te hanihy rindrina ianao."], opts: ["2. Stock", "3. Stock", "anderer Stock"], a: "a", exp: { mg: "« Kletterwand » → rihana 2.", fr: "Mur d'escalade → 2e." } }
      ] },
    { id: "L3", nom: "Teil 3", type: "mc", temps: 8,
      consigne: "Sie lesen eine E-Mail. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      texte: `<div class="blog"><p><b>Von:</b> lalao.r@gmail.com · <b>Betreff:</b> Grüße aus Berlin!</p><p>Liebe Christine,</p>
<p>ich bin jetzt seit einer Woche in Berlin – und es ist toll! Meine Gastfamilie ist sehr nett. Sie wohnt in Kreuzberg, nicht weit vom Kanal. Ich habe ein eigenes Zimmer, aber das Bad teile ich mit den zwei Kindern.</p>
<p>Am Vormittag gehe ich in die Sprachschule. Wir sind zwölf Leute aus neun Ländern! Nachmittags mache ich Ausflüge. Gestern war ich auf dem Fernsehturm. Leider war es neblig und ich habe fast nichts gesehen.</p>
<p>Nächstes Wochenende fahre ich mit zwei Freundinnen aus dem Kurs nach Dresden. Wir nehmen den Bus, weil der Zug zu teuer ist.</p>
<p>Wann besuchst du mich? Ich bin noch bis Ende August hier.</p>
<p>Viele liebe Grüße<br>Lalao</p></div>`,
      items: [
        { n: 11, q: "Lalao wohnt in Berlin …", tr: ["À Berlin, Lalao habite…", "Any Berlin i Lalao dia mipetraka…"], opts: ["in einem Hotel.", "bei einer Familie.", "in einer WG."], otr: [["à l'hôtel", "hotely"], ["dans une famille", "ao amin'ny fianakaviana"], ["en colocation", "trano iombonana"]], a: "b", exp: { mg: "« Meine Gastfamilie ».", fr: "Dans une famille d'accueil." } },
        { n: 12, q: "Das Bad …", tr: ["La salle de bain…", "Ny efitra fandroana…"], opts: ["hat Lalao für sich allein.", "teilt sie mit den Kindern.", "ist im Keller."], otr: [["est pour elle seule", "ho azy irery"], ["elle la partage avec les enfants", "iombonany amin'ny ankizy"], ["est à la cave", "ao amin'ny lakaly"]], a: "b", exp: { mg: "« das Bad teile ich mit den zwei Kindern ».", fr: "Partagée avec les enfants." } },
        { n: 13, q: "Im Kurs …", tr: ["Dans le cours…", "Ao amin'ny fampianarana…"], opts: ["sind 9 Personen.", "sind 12 Personen.", "sind nur Frauen."], otr: [["9 personnes", "olona 9"], ["12 personnes", "olona 12"], ["que des femmes", "vehivavy ihany"]], a: "b", exp: { mg: "Olona 12 avy amin'ny firenena 9.", fr: "12 personnes de 9 pays." } },
        { n: 14, q: "Auf dem Fernsehturm …", tr: ["Sur la tour de télévision…", "Teo amin'ny tilikambo…"], opts: ["war die Aussicht toll.", "hat sie wenig gesehen.", "war es sehr voll."], otr: [["la vue était superbe", "tsara ny fijery"], ["elle a peu vu", "kely no hitany"], ["il y avait beaucoup de monde", "be olona"]], a: "b", exp: { mg: "« neblig … fast nichts gesehen ».", fr: "Brouillard : presque rien vu." } },
        { n: 15, q: "Nach Dresden fährt Lalao …", tr: ["Lalao va à Dresde…", "Mankany Dresden i Lalao…"], opts: ["mit dem Zug.", "mit dem Bus.", "allein."], otr: [["en train", "lamasinina"], ["en bus", "bus"], ["seule", "irery"]], a: "b", exp: { mg: "« Wir nehmen den Bus, weil der Zug zu teuer ist ».", fr: "En bus (le train est trop cher)." } }
      ] },
    { id: "L4", nom: "Teil 4", type: "match", temps: 7, zero: true,
      consigne: "Sechs Personen suchen Freizeitangebote. Lesen Sie die Aufgaben 16 bis 20 und die Anzeigen a bis f. Welche Anzeige passt zu welcher Person? Für eine Aufgabe gibt es keine Lösung. Markieren Sie so: X. Die Anzeige aus dem Beispiel können Sie nicht mehr wählen.",
      ctr: ["Six personnes cherchent des loisirs. Quelle annonce (a–f) pour chaque personne ? Une n'a pas de solution : X.", "Olona 6 mitady fialam-boly. Iza no filazana mifanaraka? Misy iray tsy misy: X."],
      choix: {
        a: "<b>Stadtführung für Kinder</b><br>Geschichte zum Anfassen – für 6- bis 12-Jährige, samstags 14 Uhr.",
        b: "<b>Theater am Fluss</b><br>Komödien und Klassiker, Studenten 50 % billiger.",
        c: "<b>Weinfest in der Altstadt</b><br>3 Tage Musik, Essen und Wein – Eintritt frei.",
        d: "<b>Bootsverleih am See</b><br>Ruderboote ab 12 € pro Stunde, April bis Oktober.",
        e: "<b>Kochkurs „Afrikanische Küche“</b><br>Gerichte aus Senegal, Kenia und Madagaskar.",
        f: "<b>Kletterhalle Gipfel</b><br>Kurse für Anfänger, Ausrüstung kann man leihen."
      },
      exemple: { q: "Frau Kohl möchte ihrem Sohn (8) die Stadt zeigen.", a: "a" },
      items: [
        { n: 16, q: "Paul studiert und geht gern ins Theater, hat aber wenig Geld.", tr: ["Paul est étudiant, aime le théâtre, a peu d'argent.", "Mpianatra i Paul, tia teatra fa vitsy vola."], a: "b", exp: { mg: "« Studenten 50 % billiger ».", fr: "Réduction étudiants → b." } },
        { n: 17, q: "Rindra möchte für ihre deutschen Freunde typisch madagassisch kochen lernen.", tr: ["Rindra veut apprendre à cuisiner malgache.", "Te hianatra mahandro sakafo malagasy i Rindra."], a: "e", exp: { mg: "« Madagaskar » ao amin'ny Kochkurs.", fr: "Cours de cuisine africaine → e." } },
        { n: 18, q: "Tim möchte im Winter Sport im Freien machen.", tr: ["Tim veut faire du sport en plein air en hiver.", "Te hanao fanatanjahantena any ivelany amin'ny ririnina i Tim."], a: "0", exp: { mg: "Ny sambo: avrily–oktobra ihany; ny Kletterhalle: ao anatiny → X.", fr: "Bateau seulement avril–octobre ; escalade en salle → X." } },
        { n: 19, q: "Anna möchte klettern lernen, hat aber keine Ausrüstung.", tr: ["Anna veut apprendre l'escalade sans équipement.", "Te hianatra mananika i Anna fa tsy manana fitaovana."], a: "f", exp: { mg: "« Ausrüstung kann man leihen ».", fr: "Matériel en location → f." } },
        { n: 20, q: "Familie Roth sucht ein kostenloses Fest mit Musik.", tr: ["La famille Roth cherche une fête gratuite avec musique.", "Mitady fety maimaim-poana misy mozika ny fianakaviana Roth."], a: "c", exp: { mg: "« Musik … Eintritt frei ».", fr: "Entrée libre → c." } }
      ] }
  ] },

  hoeren: { temps: 30, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 2, type: "mc",
      consigne: "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      clips: [
        { id: "ga2m4-h1-1", titre: "Text 1", script: [{ s: "f", n: "Durchsage", t: "Sehr geehrte Fluggäste, der Flug nach Paris startet heute nicht von Gate A zwölf, sondern von Gate B sieben. Das Boarding beginnt in zwanzig Minuten." }],
          items: [{ n: 1, q: "Wo startet der Flug?", tr: ["D'où part le vol ?", "Avy aiza ny sidina?"], opts: ["Gate A12.", "Gate B7.", "Gate B20."], otr: [["porte A12", "A12"], ["porte B7", "B7"], ["porte B20", "B20"]], a: "b", exp: { mg: "« nicht von A zwölf, sondern von B sieben ».", fr: "Porte B7." } }] },
        { id: "ga2m4-h1-2", titre: "Text 2", script: [{ s: "m", n: "Radio", t: "Am Samstag ist das große Stadtfest. Wegen des Festes fahren die Busse in der Innenstadt nicht. Nehmen Sie bitte die U-Bahn." }],
          items: [{ n: 2, q: "Wie soll man am Samstag in die Innenstadt fahren?", tr: ["Comment aller au centre samedi ?", "Ahoana no handehanana any afovoan-tanàna asabotsy?"], opts: ["Mit dem Bus.", "Mit der U-Bahn.", "Mit dem Auto."], otr: [["en bus", "bus"], ["en métro", "metro"], ["en voiture", "fiara"]], a: "b", exp: { mg: "« Nehmen Sie bitte die U-Bahn ».", fr: "Le métro." } }] },
        { id: "ga2m4-h1-3", titre: "Text 3", script: [{ s: "f", n: "Reisebüro", t: "Hallo Herr Ralai, hier ist das Reisebüro Sonnenschein. Das Hotel am Strand ist leider voll. Wir haben aber ein Zimmer in einem Hotel in der Stadt für Sie. Es ist sogar billiger." }],
          items: [{ n: 3, q: "Wo kann Herr Ralai wohnen?", tr: ["Où M. Ralai peut-il loger ?", "Aiza no afaka hipetrahan'Atoa Ralai?"], opts: ["Im Hotel am Strand.", "Im Hotel in der Stadt.", "Bei Freunden."], otr: [["à l'hôtel sur la plage", "amoron-dranomasina"], ["à l'hôtel en ville", "ao an-tanàna"], ["chez des amis", "any amin'ny namana"]], a: "b", exp: { mg: "Feno ny an'ny tora-pasika → « in der Stadt ».", fr: "En ville (la plage est complète)." } }] },
        { id: "ga2m4-h1-4", titre: "Text 4", script: [{ s: "m", n: "Felix", t: "Hi Maria, hier ist Felix. Für meine Geburtstagsparty brauche ich noch Stühle. Kannst du vier mitbringen? Kuchen hab ich genug!" }],
          items: [{ n: 4, q: "Was soll Maria mitbringen?", tr: ["Que doit apporter Maria ?", "Inona no tokony ho entin'i Maria?"], opts: ["Kuchen.", "Stühle.", "Getränke."], otr: [["un gâteau", "mofo mamy"], ["des chaises", "seza"], ["des boissons", "zava-pisotro"]], a: "b", exp: { mg: "« Kannst du vier (Stühle) mitbringen? ».", fr: "Des chaises." } }] },
        { id: "ga2m4-h1-5", titre: "Text 5", script: [{ s: "f", n: "Radio", t: "Das Open-Air-Konzert heute Abend im Park fällt wegen des Gewitters aus. Die Karten gelten auch für den nächsten Samstag." }],
          items: [{ n: 5, q: "Was passiert mit dem Konzert?", tr: ["Que se passe-t-il avec le concert ?", "Inona no mitranga amin'ny konseraty?"], opts: ["Es ist heute im Saal.", "Es ist nächsten Samstag.", "Man bekommt das Geld zurück."], otr: [["il est en salle ce soir", "ao anaty efitrano anio"], ["il a lieu samedi prochain", "asabotsy ho avy"], ["on est remboursé", "averina ny vola"]], a: "b", exp: { mg: "« Die Karten gelten auch für den nächsten Samstag ».", fr: "Reporté à samedi prochain." } }] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 1, type: "match", zero: false, lecture: 30,
      consigne: "Sie hören ein Gespräch. Sie hören den Text einmal. Wählen Sie für die Aufgaben 6 bis 10 ein passendes Bild aus a bis i. Wählen Sie jeden Buchstaben nur einmal.",
      contexte: "Was hat Jonas im Urlaub jeden Tag gemacht?",
      xtr: ["Qu'a fait Jonas chaque jour pendant ses vacances ?", "Inona no nataon'i Jonas isan'andro nandritra ny fialan-tsasatra?"],
      choixTitre: "Bilder",
      choix: { a: "🏖️ Strand", b: "🚤 Bootsfahrt", c: "🏛️ Museum", d: "🥾 Wandern", e: "🛍️ Einkaufen", f: "🚴 Radtour", g: "🤿 Tauchen", h: "🍽️ Restaurant", i: "🛌 Ausruhen" },
      clips: [{ id: "ga2m4-h2", titre: "Gespräch", script: [
        { s: "f", n: "Frau", t: "Na Jonas, wie war der Urlaub auf Kreta?" },
        { s: "m", n: "Jonas", t: "Super! Am Montag sind wir angekommen und waren gleich am Strand." },
        { s: "f", n: "Frau", t: "Und am Dienstag?" },
        { s: "m", n: "Jonas", t: "Am Dienstag wollten wir wandern, aber es war zu heiß. Wir haben dann eine Bootsfahrt gemacht." },
        { s: "f", n: "Frau", t: "Toll! Und Mittwoch?" },
        { s: "m", n: "Jonas", t: "Mittwoch war ein Museumstag – das alte Knossos. Sehr interessant." },
        { s: "f", n: "Frau", t: "Und Donnerstag?" },
        { s: "m", n: "Jonas", t: "Donnerstag bin ich das erste Mal getaucht! Ich habe Schildkröten gesehen." },
        { s: "f", n: "Frau", t: "Wow. Und am letzten Tag, Freitag?" },
        { s: "m", n: "Jonas", t: "Da war ich müde. Ich habe den ganzen Tag im Hotel gelegen und gelesen. Abends waren wir noch einkaufen." },
        { s: "f", n: "Frau", t: "Und Samstag ging es nach Hause?" },
        { s: "m", n: "Jonas", t: "Genau." }],
        items: [
          { n: 6, q: "Montag", tr: ["lundi", "alatsinainy"], a: "a", exp: { mg: "« gleich am Strand ».", fr: "Plage." } },
          { n: 7, q: "Dienstag", tr: ["mardi", "talata"], a: "b", exp: { mg: "Fandrika: te handeha an-tongotra fa « Bootsfahrt » no natao.", fr: "Piège : pas de randonnée, balade en bateau." } },
          { n: 8, q: "Mittwoch", tr: ["mercredi", "alarobia"], a: "c", exp: { mg: "« Museumstag ».", fr: "Musée." } },
          { n: 9, q: "Donnerstag", tr: ["jeudi", "alakamisy"], a: "g", exp: { mg: "« getaucht » = nitsitsoka anaty rano.", fr: "Plongée." } },
          { n: 10, q: "Freitag", tr: ["vendredi", "zoma"], a: "i", exp: { mg: "Niala sasatra « den ganzen Tag »; ny fiantsenana hariva fotsiny.", fr: "Repos toute la journée (shopping seulement le soir)." } }
        ] }] },
    { id: "H3", nom: "Teil 3", ecoutes: 1, type: "mc",
      consigne: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      clips: [
        { id: "ga2m4-h3-11", titre: "Gespräch 1", script: [{ s: "m", n: "Mann", t: "Eine Fahrkarte nach Leipzig, bitte. Hin und zurück." }, { s: "f", n: "Verkäuferin", t: "Das macht sechsundfünfzig Euro. Mit BahnCard nur zweiundvierzig." }, { s: "m", n: "Mann", t: "Eine BahnCard habe ich leider nicht." }],
          items: [{ n: 11, q: "Wie viel bezahlt der Mann?", tr: ["Combien paie l'homme ?", "Ohatrinona no aloany?"], opts: ["42 Euro.", "56 Euro.", "65 Euro."], otr: [["42 €", "42 €"], ["56 €", "56 €"], ["65 €", "65 €"]], a: "b", exp: { mg: "Tsy manana BahnCard → 56 €.", fr: "Sans BahnCard → 56 €." } }] },
        { id: "ga2m4-h3-12", titre: "Gespräch 2", script: [{ s: "f", n: "Frau", t: "Was schenken wir Opa zum Achtzigsten?" }, { s: "m", n: "Mann", t: "Er liest doch so gern. Aber Bücher hat er genug. Wie wäre es mit einer Reise an die Ostsee?" }, { s: "f", n: "Frau", t: "Super Idee!" }],
          items: [{ n: 12, q: "Was schenken sie Opa?", tr: ["Qu'offrent-ils à grand-père ?", "Inona no omen'izy ireo dadabe?"], opts: ["Ein Buch.", "Eine Reise.", "Einen Gutschein."], otr: [["un livre", "boky"], ["un voyage", "dia"], ["un bon", "tapakila fanomezana"]], a: "b", exp: { mg: "« eine Reise an die Ostsee ».", fr: "Un voyage." } }] },
        { id: "ga2m4-h3-13", titre: "Gespräch 3", script: [{ s: "m", n: "Mann", t: "Hast du Lust, heute Abend ins Kino zu gehen?" }, { s: "f", n: "Frau", t: "Heute bin ich zu müde. Aber morgen gern! Oder wollen wir lieber am Samstag ins Theater?" }, { s: "m", n: "Mann", t: "Nein, Kino morgen ist gut." }],
          items: [{ n: 13, q: "Wann gehen sie ins Kino?", tr: ["Quand vont-ils au cinéma ?", "Rahoviana izy ireo no handeha amin'ny sinema?"], opts: ["Heute.", "Morgen.", "Am Samstag."], otr: [["aujourd'hui", "anio"], ["demain", "rahampitso"], ["samedi", "asabotsy"]], a: "b", exp: { mg: "« Kino morgen ist gut ».", fr: "Demain." } }] },
        { id: "ga2m4-h3-14", titre: "Gespräch 4", script: [{ s: "f", n: "Rezeption", t: "Das Frühstück gibt es von sieben bis zehn Uhr im Restaurant. Am Sonntag bis elf." }, { s: "m", n: "Gast", t: "Und heute ist Sonntag, oder?" }, { s: "f", n: "Rezeption", t: "Nein, heute ist Samstag." }],
          items: [{ n: 14, q: "Bis wann gibt es heute Frühstück?", tr: ["Jusqu'à quand y a-t-il le petit-déjeuner aujourd'hui ?", "Mandra-pahoviana ny sakafo maraina anio?"], opts: ["Bis 7 Uhr.", "Bis 10 Uhr.", "Bis 11 Uhr."], otr: [["7 h", "7 ora"], ["10 h", "10 ora"], ["11 h", "11 ora"]], a: "b", exp: { mg: "Asabotsy anio → hatramin'ny 10 ora.", fr: "Aujourd'hui samedi → 10 h." } }] },
        { id: "ga2m4-h3-15", titre: "Gespräch 5", script: [{ s: "m", n: "Mann", t: "Wie war die Hochzeit von deiner Schwester?" }, { s: "f", n: "Frau", t: "Wunderschön! Das Essen war super und wir haben bis drei Uhr morgens getanzt. Nur das Wetter war leider schlecht." }],
          items: [{ n: 15, q: "Was war nicht so gut?", tr: ["Qu'est-ce qui n'était pas bien ?", "Inona no tsy tsara?"], opts: ["Das Essen.", "Die Musik.", "Das Wetter."], otr: [["le repas", "sakafo"], ["la musique", "mozika"], ["la météo", "toetr'andro"]], a: "c", exp: { mg: "« Nur das Wetter war leider schlecht ».", fr: "La météo." } }] }
      ] },
    { id: "H4", nom: "Teil 4", ecoutes: 2, type: "jn", lecture: 30,
      consigne: "Sie hören ein Interview. Sie hören den Text zweimal. Wählen Sie für die Aufgaben 16 bis 20 Ja oder Nein.",
      contexte: "Der Moderator spricht mit Frau Andrianina über ihre Arbeit als Reiseleiterin.",
      xtr: ["Le présentateur parle avec Mme Andrianina de son métier de guide.", "Miresaka amin-dRtoa Andrianina momba ny asany mpitarika mpizahatany ny mpanentana."],
      clips: [{ id: "ga2m4-h4", titre: "Interview", script: [
        { s: "m", n: "Moderator", t: "Frau Andrianina, Sie sind Reiseleiterin. Mit wem arbeiten Sie?" },
        { s: "f", n: "Frau Andrianina", t: "Ich begleite Gruppen aus Deutschland und Österreich durch Madagaskar. Meistens sind es zwölf bis fünfzehn Personen." },
        { s: "m", n: "Moderator", t: "Wo haben Sie Deutsch gelernt?" },
        { s: "f", n: "Frau Andrianina", t: "Zuerst am Goethe-Zentrum in Antananarivo. Dann war ich ein Jahr als Au-pair in Graz. Dort habe ich am meisten gelernt." },
        { s: "m", n: "Moderator", t: "Was zeigen Sie den Touristen am liebsten?" },
        { s: "f", n: "Frau Andrianina", t: "Die Baobab-Allee bei Morondava, besonders am Abend. Und natürlich die Lemuren." },
        { s: "m", n: "Moderator", t: "Ist die Arbeit manchmal schwer?" },
        { s: "f", n: "Frau Andrianina", t: "Die Straßen sind oft schlecht, und die Fahrten dauern lange. Aber die Gäste sind meistens sehr geduldig. Nur im Februar machen wir keine Touren, weil es zu viel regnet." }],
        items: [
          { n: 16, q: "Frau Andrianina arbeitet mit großen Gruppen von über 30 Personen.", tr: ["Elle travaille avec des groupes de plus de 30 personnes.", "Miasa amin'ny vondrona maherin'ny 30 izy."], a: "n", exp: { mg: "Olona 12 hatramin'ny 15 ihany.", fr: "12 à 15 personnes → Nein." } },
          { n: 17, q: "Sie war ein Jahr in Österreich.", tr: ["Elle a passé un an en Autriche.", "Nijanona herintaona tany Aotrisy izy."], a: "j", exp: { mg: "« ein Jahr als Au-pair in Graz ».", fr: "Graz → Ja." } },
          { n: 18, q: "In Graz hat sie am meisten Deutsch gelernt.", tr: ["C'est à Graz qu'elle a le plus appris.", "Tany Graz izy no nianatra betsaka indrindra."], a: "j", exp: { mg: "« Dort habe ich am meisten gelernt ».", fr: "Ja." } },
          { n: 19, q: "Die Gäste sind oft ungeduldig.", tr: ["Les clients sont souvent impatients.", "Tsy manam-paharetana matetika ny vahiny."], a: "n", exp: { mg: "« meistens sehr geduldig ».", fr: "Ils sont patients → Nein." } },
          { n: 20, q: "Im Februar gibt es keine Touren.", tr: ["En février, il n'y a pas de circuits.", "Tsy misy fitsangatsanganana amin'ny febroary."], a: "j", exp: { mg: "« im Februar machen wir keine Touren ».", fr: "Ja." } }
        ] }] }
  ] },

  schreiben: { temps: 30, aufgaben: [
    { id: "S1", nom: "Teil 1", temps: 10, mots: 25, points: 10, type: "SMS (informell)",
      consigne: `<p>Sie sind im Urlaub und Ihre Nachbarin Clara gießt Ihre Blumen. Schreiben Sie eine SMS an Clara:</p><ul><li>Bedanken Sie sich.</li><li>Erzählen Sie kurz vom Urlaub.</li><li>Sagen Sie, wann Sie zurückkommen.</li></ul><p class="small">Schreiben Sie 20–30 Wörter.</p>`,
      ctr: ["SMS à votre voisine : remerciez-la, parlez de vos vacances, dites quand vous rentrez. 20–30 mots.", "SMS ho an'ny mpifanolo-bodirindrina: misaora, lazao ny fialan-tsasatra, lazao rahoviana no hiverina. 20–30 teny."],
      checklist: ["Liebe Clara,", "Fisaorana", "Fialan-tsasatra (toetr'andro, zavatra natao)", "Rahoviana no hiverina", "Gruß", "20–30 teny"],
      redemittel: ["Liebe Clara,", "vielen Dank, dass du meine Blumen gießt!", "Hier ist es super: …", "Ich komme am … zurück.", "Liebe Grüße"],
      modele: `Liebe Clara,
vielen Dank, dass du meine Blumen gießt! Hier am Meer ist es wunderschön und jeden Tag sonnig. Ich komme am Sonntagabend zurück und bringe dir etwas mit.
Liebe Grüße
Voahirana` },
    { id: "S2", nom: "Teil 2", temps: 20, mots: 35, points: 15, type: "E-Mail (halbformell)",
      consigne: `<p>Ihre Kursleiterin, Frau Weiß, organisiert ein Sommerfest für den Deutschkurs. Sie hat alle eingeladen. Schreiben Sie Frau Weiß:</p><ul><li>Bedanken Sie sich für die Einladung.</li><li>Sagen Sie, dass Sie leider später kommen. Warum?</li><li>Bieten Sie an, etwas mitzubringen.</li></ul><p class="small">Schreiben Sie 30–40 Wörter. Schreiben Sie eine Anrede und einen Gruß.</p>`,
      ctr: ["E-mail à la professeure : remerciez, dites que vous arriverez plus tard (pourquoi), proposez d'apporter quelque chose. 30–40 mots.", "Mailaka ho an'ny mpampianatra: misaora, lazao fa ho tara ianao (antony), manolora hitondra zavatra. 30–40 teny."],
      checklist: ["Liebe Frau Weiß,", "Fisaorana", "Ho tara + antony", "Manolotra hitondra zavatra", "Viele Grüße", "« Sie »", "30–40 teny"],
      redemittel: ["vielen Dank für die Einladung zum Sommerfest!", "Leider kann ich erst um … Uhr kommen, weil …", "Soll ich etwas mitbringen? Ich kann gern … machen.", "Viele Grüße"],
      modele: `Liebe Frau Weiß,

vielen Dank für die Einladung zum Sommerfest! Ich komme sehr gern, aber leider erst um 18 Uhr, weil ich bis 17 Uhr arbeiten muss. Soll ich etwas mitbringen? Ich kann gern einen madagassischen Kuchen backen.

Viele Grüße
Mahery` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Teboka 3 voavaly? · Les 3 points ?" },
    { nom: "Kohärenz", desc: "Fehezanteny mifandray · Enchaînement" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" }
  ] },

  sprechen: { preparation: 0, teile: [
    { id: "P1", nom: "Teil 1 – Fragen zur Person", mg: "Fanontaniana amin'ny karatra", duree: 3, mode: "dialog", em: "🃏",
      consigne: `<p>Sie bekommen vier Karten und stellen mit diesen Karten vier Fragen. Ihr Partner / Ihre Partnerin antwortet. Dann stellt Ihr Partner / Ihre Partnerin vier Fragen und Sie antworten.</p><div class="plan">Ihre Karten: <b>Reisen? · Feste? · Musik? · Geburtstag?</b></div>`,
      partenaire: [
        { id: "ga2m4-p1-1", t: "Reist du gern?", cue: "Valio. · Réponds.", aide: ["Ja, sehr gern. Letztes Jahr war ich in …", "Nicht so oft, das ist zu teuer."] },
        { id: "ga2m4-p1-2", t: "Ich auch! Deine Karte: „Feste“.", cue: "Manontania. · Pose ta question.", aide: ["Welches Fest feierst du am liebsten?", "Wie feierst du Weihnachten?"] },
        { id: "ga2m4-p1-3", t: "Silvester, mit Freunden und Feuerwerk! Meine Frage: Welche Musik hörst du?", cue: "Valio. · Réponds.", aide: ["Ich höre gern Hip-Hop und Salegy.", "Meistens klassische Musik."] },
        { id: "ga2m4-p1-4", t: "Cool. Deine Karte: „Geburtstag“.", cue: "Manontania. · Question.", aide: ["Wann hast du Geburtstag?", "Wie feierst du deinen Geburtstag?"] },
        { id: "ga2m4-p1-5", t: "Im Oktober, mit einem großen Essen. Letzte Frage: Was machst du am Wochenende?", cue: "Valio. · Réponds.", aide: ["Am Wochenende treffe ich meine Freunde.", "Ich schlafe lange und gehe spazieren."] }
      ],
      redemittel: [["Manontany · Demander", ["Reist du gern?", "Welches Fest feierst du am liebsten?", "Welche Musik hörst du?", "Wann hast du Geburtstag?"]], ["Mamaly · Répondre", ["Ja, letztes Jahr war ich in …", "Am liebsten feiere ich …", "Ich höre gern …", "Im … / am …"]]],
      modele: `A: Reist du gern?
B: Ja, sehr gern. Letztes Jahr war ich auf Nosy Be.
B: Welches Fest feierst du am liebsten?
A: Silvester, mit Freunden und Feuerwerk.
A: Welche Musik hörst du?
B: Ich höre gern Salegy und Hip-Hop.
B: Wann hast du Geburtstag?
A: Im Oktober. Ich mache immer ein großes Essen.` },
    { id: "P2", nom: "Teil 2 – Über sich sprechen", mg: "Mitantara ny fiainanao", duree: 3, mode: "present", em: "🗣️",
      consigne: `<p>Sie bekommen eine Karte und erzählen etwas über Ihr Leben.</p>`,
      themes: [{ titre: "Ihr letzter Urlaub", points: [
        { de: "Wohin?", mg: "Taiza?", fr: "Où ?" }, { de: "Mit wem?", mg: "Niaraka tamin'iza?", fr: "Avec qui ?" },
        { de: "Was gemacht?", mg: "Inona no natao?", fr: "Ce que vous avez fait ?" }, { de: "Wie war es?", mg: "Nanao ahoana?", fr: "C'était comment ?" } ],
        modele: `Mein letzter Urlaub war im August. Ich bin nach Fort-Dauphin im Süden von Madagaskar gefahren.
Ich war mit meiner besten Freundin und ihrem Bruder dort.
Wir haben viel am Strand gelegen, sind gewandert und haben Lemuren im Nationalpark gesehen. Einmal haben wir auch Wale beobachtet.
Es war wunderschön, nur die Fahrt mit dem Bus war sehr lang – fast zwei Tage!` }],
      redemittel: [["Mitantara · Raconter (Perfekt)", ["Ich bin nach … gefahren / geflogen.", "Ich war mit … dort.", "Wir haben … gemacht / gesehen.", "Es war …, nur …"]]] },
    { id: "P3", nom: "Teil 3 – Etwas gemeinsam planen", mg: "Mitady fotoana iombonana", duree: 3, mode: "dialog", em: "📅",
      consigne: `<p>Ihr Deutschkurs endet. Sie möchten mit Ihrem Partner / Ihrer Partnerin eine Abschlussparty für den Kurs vorbereiten und zusammen einkaufen. Finden Sie einen Termin.</p><div class="plan"><b>Ihr Kalender – Donnerstag, 19. Juni</b><br>8–13 Uhr: Arbeit · 13.30 Uhr: Mittagessen · 14–16 Uhr: frei · 16.30 Uhr: Kinder abholen · 18 Uhr: Volleyball</div>`,
      ctr: ["Préparez ensemble la fête de fin de cours et trouvez un moment pour faire les courses.", "Manomana ny fety famaranana fampianarana ary mitadiava fotoana hiantsenana miaraka."],
      partenaire: [
        { id: "ga2m4-p3-1", t: "Hallo! Wann können wir am Donnerstag einkaufen? Am Vormittag?", cue: "8–13 = asa. · Travail.", aide: ["Am Vormittag muss ich leider arbeiten.", "Bis eins habe ich keine Zeit."] },
        { id: "ga2m4-p3-2", t: "Okay. Und am späten Nachmittag, um fünf?", cue: "16.30 = maka ankizy. · Enfants à 16 h 30.", aide: ["Um fünf hole ich meine Kinder ab.", "Geht es um zwei?"] },
        { id: "ga2m4-p3-3", t: "Um zwei passt! Was kaufen wir? Getränke, Chips …?", cue: "Manolora. · Propose.", aide: ["Und Obst! Und vielleicht Pappteller.", "Ich backe auch einen Kuchen."] },
        { id: "ga2m4-p3-4", t: "Super Idee. Mit wem fahren wir? Ich habe kein Auto.", cue: "Manolora vahaolana. · Propose une solution.", aide: ["Ich nehme das Auto von meinem Mann.", "Wir können mit dem Bus fahren und die Sachen liefern lassen."] }
      ],
      redemittel: [["Manolotra · Proposer", ["Wie wäre es um …?", "Wir könnten …", "Ich kann … mitbringen."]], ["Mandà · Refuser", ["Um … muss ich leider …", "Da habe ich keine Zeit."]], ["Manaiky · Accepter", ["Das passt mir!", "Super Idee!", "Einverstanden."]]],
      modele: `A: Wann können wir am Donnerstag einkaufen? Am Vormittag?
B: Am Vormittag muss ich leider arbeiten.
A: Und um fünf?
B: Um fünf hole ich meine Kinder ab. Geht es um zwei?
A: Um zwei passt! Was kaufen wir?
B: Getränke, Chips und Obst. Ich backe auch einen Kuchen.
A: Ich habe aber kein Auto.
B: Kein Problem, ich nehme das Auto von meinem Mann.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Tontosa ny asa · Tâche réalisée" },
    { nom: "Interaktion", desc: "Mamaly ny namanao · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "die Geschwister", fr: "frère(s) et sœur(s)", mg: "mpiray tampo", ex: "Die Geschwister fahren nach Rom." },
    { de: "beenden", fr: "terminer", mg: "mamita", ex: "Er hat sein Studium beendet." },
    { de: "unterwegs", fr: "en route", mg: "an-dalana", ex: "Unterwegs haben sie Familien kennengelernt." },
    { de: "aufgeben", fr: "abandonner", mg: "mamoy", ex: "Sie wollten nie aufgeben." },
    { de: "erscheinen", fr: "paraître (livre)", mg: "mivoaka (boky)", ex: "Das Buch erscheint im Frühling." },
    { de: "die Fundsachen", fr: "les objets trouvés", mg: "entana hita", ex: "Fundsachen sind an der Information." },
    { de: "klettern", fr: "grimper", mg: "mananika", ex: "Ich klettere gern." },
    { de: "die Gastfamilie", fr: "la famille d'accueil", mg: "fianakaviana mpandray", ex: "Meine Gastfamilie ist nett." },
    { de: "teilen", fr: "partager", mg: "mizara", ex: "Ich teile das Bad." },
    { de: "neblig", fr: "brumeux", mg: "manjavozavo", ex: "Es war neblig." },
    { de: "die Ausrüstung", fr: "l'équipement", mg: "fitaovana", ex: "Die Ausrüstung kann man leihen." },
    { de: "das Gate", fr: "la porte d'embarquement", mg: "vavahady (seranam-piaramanidina)", ex: "Der Flug startet von Gate B7." },
    { de: "gelten", fr: "être valable", mg: "manan-kery", ex: "Die Karten gelten auch am Samstag." },
    { de: "die Bootsfahrt", fr: "la balade en bateau", mg: "fitsangatsanganana an-tsambo", ex: "Wir haben eine Bootsfahrt gemacht." },
    { de: "tauchen", fr: "plonger", mg: "milentika anaty rano", ex: "Ich bin getaucht." },
    { de: "die Schildkröte", fr: "la tortue", mg: "sokatra", ex: "Ich habe Schildkröten gesehen." },
    { de: "die Hochzeit", fr: "le mariage", mg: "fanambadiana", ex: "Die Hochzeit war wunderschön." },
    { de: "der Reiseleiter / die Reiseleiterin", fr: "le / la guide", mg: "mpitarika mpizahatany", ex: "Sie ist Reiseleiterin." },
    { de: "begleiten", fr: "accompagner", mg: "manatrika / miaraka", ex: "Ich begleite Gruppen." },
    { de: "geduldig", fr: "patient", mg: "manam-paharetana", ex: "Die Gäste sind geduldig." },
    { de: "die Abschlussparty", fr: "la fête de fin", mg: "fety famaranana", ex: "Wir machen eine Abschlussparty." }
  ]
});
})();
