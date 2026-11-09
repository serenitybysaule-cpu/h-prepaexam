/* ZERTIFIKAT B1 — Modellsatz 3 · textes originaux H Conseil & Formation */
window.POOLS = window.POOLS || {};
window.POOLS.B1 = window.POOLS.B1 || { sets: [] };
window.POOLS.B1.sets.push({
  id: "b1m3", titre: "Modellsatz 3",
  theme: "Mifindra any ambanivohitra · Bücherschrank · Fiara an-tanàna",

  lesen: { temps: 65, teile: [
    { id: "L1", nom: "Teil 1", temps: 10, type: "rf",
      consigne: "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen Richtig oder Falsch?",
      texte: `<div class="blog"><div class="blog-head"><b>E-Mail</b><span>Von: tina.m@mail.de · An: anja.k@mail.de · Betreff: Grüße vom Land!</span></div>
<p>Liebe Anja,</p>
<p>entschuldige, dass ich mich so lange nicht gemeldet habe! Seit unserem Umzug vor zwei Monaten war hier einfach zu viel los. Du weißt ja, dass wir eigentlich nie aus München wegziehen wollten. Aber als Markus seine neue Stelle in Landshut bekommen hat, haben wir uns doch für ein kleines Haus in einem Dorf in der Nähe entschieden. Die Mieten in der Stadt waren einfach zu hoch.</p>
<p>Am Anfang war es für mich schwer. Es gibt nur einen Bäcker und einen kleinen Laden, und der Bus fährt nur alle zwei Stunden. Zum Glück kann ich zwei Tage pro Woche von zu Hause arbeiten, an den anderen Tagen fahre ich mit dem Zug nach München. Das dauert etwa eine Stunde, aber im Zug kann ich lesen oder schon E-Mails beantworten.</p>
<p>Die Kinder sind total glücklich. Jonas hat sofort Freunde im Fußballverein gefunden, und Lea hilft jeden Nachmittag bei unserer Nachbarin, die Pferde hat. Und stell dir vor: Ich habe angefangen, Gemüse im Garten anzubauen! Die ersten Tomaten waren zwar ziemlich klein, aber sehr lecker.</p>
<p>Hast du nicht Lust, uns in den Herbstferien zu besuchen? Platz haben wir jetzt genug – wir haben sogar ein Gästezimmer!</p>
<p>Ganz liebe Grüße<br>deine Tina</p></div>`,
      exemple: { q: "Tina wohnt jetzt nicht mehr in München.", a: "Richtig" },
      items: [
        { n: 1, q: "Tina wollte schon immer auf dem Land wohnen.", a: "f", exp: { mg: "« wir wollten eigentlich nie aus München wegziehen » = tsy te-hiala tany Munich mihitsy izy ireo.", fr: "Ils ne voulaient jamais quitter Munich → Falsch." } },
        { n: 2, q: "Die Familie ist auch wegen der Kosten umgezogen.", a: "r", exp: { mg: "« Die Mieten … waren zu hoch » = lafo loatra ny hofan-trano.", fr: "Loyers trop chers → Richtig." } },
        { n: 3, q: "Im Dorf gibt es viele Einkaufsmöglichkeiten.", a: "f", exp: { mg: "« nur einen Bäcker und einen kleinen Laden » = vitsy dia vitsy.", fr: "Seulement une boulangerie et un petit magasin → Falsch." } },
        { n: 4, q: "Tina fährt jeden Tag nach München.", a: "f", exp: { mg: "Miasa ao an-trano izy <b>andro 2</b> isan-kerinandro.", fr: "Deux jours de télétravail → pas tous les jours → Falsch." } },
        { n: 5, q: "Tinas Tochter kümmert sich in ihrer Freizeit um Tiere.", a: "r", exp: { mg: "Manampy ny mpifanolo-bodirindrina manana <b>soavaly</b> i Lea.", fr: "Lea aide la voisine qui a des chevaux → Richtig." } },
        { n: 6, q: "Tina lädt Anja ein, bei ihr zu übernachten.", a: "r", exp: { mg: "« Lust, uns … zu besuchen? … ein Gästezimmer » = manasa sy manana efitrano ho an'ny vahiny.", fr: "Invitation + chambre d'amis → Richtig." } }
      ] },
    { id: "L2", nom: "Teil 2", temps: 20, type: "mc",
      consigne: "Lesen Sie die Texte aus der Presse und die Aufgaben 7 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      texte: `<div class="press"><h3>Bücher zum Mitnehmen</h3><p class="lead">Offene Bücherschränke werden in deutschen Städten immer beliebter.</p>
<p>Ein alter Holzschrank an der Bushaltestelle, voll mit Romanen, Kochbüchern und Kinderbüchern – und jeder darf sich bedienen. In Bonn gibt es inzwischen über 30 solcher „offenen Bücherschränke“. Das Prinzip ist einfach: Man nimmt ein Buch mit und stellt, wenn man möchte, ein anderes hinein. Eine Anmeldung oder einen Ausweis braucht man nicht.</p>
<p>Die Idee stammt von Bürgerinnen und Bürgern, nicht von der Stadtverwaltung. „Wir wollten, dass Bücher nicht im Keller verstauben, sondern weitergelesen werden“, sagt Günter Schmidt, der die Schränke in seinem Stadtteil betreut. Einmal pro Woche schaut er nach, ob alles in Ordnung ist, und sortiert kaputte Bücher aus. Probleme gibt es selten. Nur einmal hat jemand alle Bücher mitgenommen, um sie auf dem Flohmarkt zu verkaufen. „Ein paar Tage später war der Schrank aber wieder voll“, lacht Schmidt.</p>
<p class="src">aus einer deutschen Zeitung</p></div>
<div class="press"><h3>Das Büro im Kaffeehaus</h3><p class="lead">In Wien arbeiten immer mehr Menschen mit dem Laptop im Café.</p>
<p>Das Wiener Kaffeehaus war schon immer ein Ort für Schriftsteller und Künstler. Heute sitzen dort vor allem junge Menschen mit Laptops. Sie arbeiten selbstständig oder im Homeoffice und suchen eine angenehme Umgebung. Nicht alle Kaffeehausbesitzer sind darüber glücklich: „Manche Gäste bestellen einen Kaffee und bleiben dann fünf Stunden“, erzählt Wirtin Elisabeth Gruber.</p>
<p>Einige Cafés haben deshalb neue Regeln eingeführt. Im Café Gruber dürfen Laptops nur noch vormittags benutzt werden. Andere bieten spezielle Tische mit Steckdosen an, für die man pro Stunde einen kleinen Betrag bezahlt. Die meisten Gäste akzeptieren das. „Hier ist es lebendiger als in meiner Wohnung“, sagt der Grafiker Lukas Bauer. „Und der Kaffee ist besser als in jedem Büro.“</p>
<p class="src">aus einer österreichischen Zeitung</p></div>`,
      exemple: { q: "In Bonn gibt es …", opts: ["nur einen offenen Bücherschrank.", "mehr als 30 offene Bücherschränke.", "keine Bibliothek mehr."], a: "b" },
      items: [
        { n: 7, q: "In dem ersten Text geht es um …", opts: ["Schränke, aus denen man kostenlos Bücher nehmen kann.", "eine neue Stadtbibliothek.", "einen Flohmarkt für Bücher."], a: "a", exp: { mg: "Lohahevitra: vata misy boky azo alaina maimaim-poana.", fr: "Thème : armoires à livres gratuites → a." } },
        { n: 8, q: "Die Bücherschränke …", opts: ["hat die Stadt aufgestellt.", "sind eine Idee von Bürgern.", "darf man nur mit Ausweis benutzen."], a: "b", exp: { mg: "« von Bürgerinnen und Bürgern, nicht von der Stadtverwaltung ».", fr: "Idée des habitants, pas de la mairie → b." } },
        { n: 9, q: "Günter Schmidt …", opts: ["kontrolliert die Schränke regelmäßig.", "verkauft Bücher auf dem Flohmarkt.", "hat Probleme mit Dieben."], a: "a", exp: { mg: "« Einmal pro Woche schaut er nach » = mijery isan-kerinandro.", fr: "Il vérifie une fois par semaine → a." } },
        { n: 10, q: "In dem zweiten Text geht es darum, dass …", opts: ["Wiener Cafés immer leerer werden.", "viele Menschen im Café arbeiten.", "Künstler keine Cafés mehr besuchen."], a: "b", exp: { mg: "Olona maro no miasa amin'ny laptop ao amin'ny kafe.", fr: "Beaucoup travaillent au café → b." } },
        { n: 11, q: "Im Café Gruber …", opts: ["sind Laptops ganz verboten.", "darf man den Laptop nur am Vormittag benutzen.", "muss man für jeden Tisch bezahlen."], a: "b", exp: { mg: "« nur noch vormittags » = maraina ihany.", fr: "Seulement le matin → b. Les tables payantes, ce sont d'autres cafés." } },
        { n: 12, q: "Lukas Bauer arbeitet im Café, weil …", opts: ["es dort billiger ist als zu Hause.", "es dort mehr Leben gibt als zu Hause.", "er kein Büro hat."], a: "b", exp: { mg: "« lebendiger als in meiner Wohnung » = misy fiainana kokoa noho ny ao an-tranony.", fr: "Plus vivant que chez lui → b." } }
      ] },
    { id: "L3", nom: "Teil 3", temps: 10, type: "match",
      consigne: "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall wählen Sie 0.",
      contexte: "Einige Ihrer Bekannten möchten sich beruflich weiterbilden oder suchen eine neue Stelle.",
      annonces: {
        a: "<b>Pflegeschule Sonnenberg</b><br>Ausbildung zur Pflegefachkraft – 3 Jahre, mit Vergütung ab dem ersten Monat. Deutschkenntnisse B1 erforderlich.",
        b: "<b>Bewerbungstraining</b><br>Wir prüfen Ihren Lebenslauf und üben mit Ihnen das Vorstellungsgespräch. Einzeltermine, auch samstags.",
        c: "<b>Computerkurs für Einsteiger</b><br>E-Mail, Word, Excel – Schritt für Schritt. Montag und Mittwoch, 18–20 Uhr.",
        d: "<b>Gabelstaplerschein in 3 Tagen</b><br>Mit Zertifikat. Ideal für Lager und Logistik. Nächster Termin: 3.–5. März.",
        e: "<b>Restaurant Lindenhof</b> sucht Köchin/Koch in Vollzeit. Erfahrung erwünscht. Moderne Küche, faire Bezahlung.",
        f: "<b>Kinderbetreuung gesucht</b><br>Familie sucht liebevolle Person für zwei Kinder (3 und 6 J.), Mo–Fr nachmittags.",
        g: "<b>Deutsch für den Beruf (B2)</b><br>Kurs für Berufstätige: Telefonieren, E-Mails, Besprechungen. Online, abends.",
        h: "<b>Buchhaltung kompakt</b><br>Wochenendkurs für kleine Betriebe und Selbstständige. Mit Abschlussprüfung.",
        i: "<b>Fahrschule Blitz</b><br>Führerschein Klasse B – Theorie auch auf Englisch und Französisch!",
        j: "<b>Gründerberatung der Handelskammer</b><br>Sie wollen ein eigenes Geschäft eröffnen? Kostenlose Erstberatung."
      },
      exemple: { q: "Fanja möchte lernen, wie man mit dem Computer Briefe schreibt.", a: "c" },
      items: [
        { n: 13, q: "Ahmed möchte im Lager arbeiten und braucht dafür noch einen Schein.", a: "d", exp: { mg: "Lager + Schein → Gabelstaplerschein (d).", fr: "Entrepôt + permis cariste → d." } },
        { n: 14, q: "Lina möchte ein kleines Café eröffnen und braucht Informationen.", a: "j", exp: { mg: "« eigenes Geschäft eröffnen … Beratung » → j.", fr: "Ouvrir son commerce → j." } },
        { n: 15, q: "Rado möchte in Deutschland Krankenpfleger werden.", a: "a", exp: { mg: "Ausbildung Pflege → a.", fr: "Formation d'infirmier → a." } },
        { n: 16, q: "Sofia will üben, wie man sich bei einer Firma vorstellt.", a: "b", exp: { mg: "« Vorstellungsgespräch üben » → b.", fr: "S'entraîner à l'entretien → b." } },
        { n: 17, q: "Pierre möchte einen Autoführerschein machen, versteht aber noch wenig Deutsch.", a: "i", exp: { mg: "Theorie amin'ny teny frantsay → i.", fr: "Théorie en français → i." } },
        { n: 18, q: "Ana spricht schon gut Deutsch und will es für ihre Arbeit verbessern.", a: "g", exp: { mg: "Deutsch für den Beruf, B2 → g.", fr: "Allemand professionnel B2 → g." } },
        { n: 19, q: "Kevin sucht einen Teilzeitjob als Koch am Wochenende.", a: "0", exp: { mg: "Ny e dia <b>Vollzeit</b> (andro feno). Tsy misy asa faran'ny herinandro → 0.", fr: "L'annonce e est à plein temps → 0." } }
      ] },
    { id: "L4", nom: "Teil 4", temps: 15, type: "jn",
      consigne: "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für ein Verbot?",
      contexte: "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über ein Autoverbot in der Innenstadt.",
      exemple: { nom: "Ursula, 61, Freiburg", texte: "Ich wohne direkt an einer Hauptstraße. Lärm und Abgase den ganzen Tag! Eine Innenstadt ohne Autos wäre für uns Anwohner ein Traum.", a: "Ja" },
      items: [
        { n: 20, nom: "Holger, 47, Essen", q: "Ich habe ein kleines Geschäft in der Innenstadt. Wenn die Kunden nicht mehr mit dem Auto kommen dürfen, kaufen sie im Einkaufszentrum am Stadtrand. Das wäre das Ende für viele Läden.", a: "n", exp: { mg: "Matahotra ny hikatonan'ny fivarotana izy → manohitra (Nein).", fr: "Il craint pour les commerces → Nein." } },
        { n: 21, nom: "Leonie, 22, Münster", q: "Ich fahre überall mit dem Fahrrad, und in der Innenstadt ist das wegen der vielen Autos gefährlich. Die Autos sollten draußen bleiben, dann hätten wir endlich Platz.", a: "j", exp: { mg: "« Die Autos sollten draußen bleiben » → Ja.", fr: "Les voitures doivent rester dehors → Ja." } },
        { n: 22, nom: "Karl, 78, Innsbruck", q: "Ich kann nicht mehr gut laufen und bin auf mein Auto angewiesen. Busse fahren bei uns selten. Wer denkt eigentlich an ältere Menschen, wenn er solche Verbote fordert?", a: "n", exp: { mg: "Mila ny fiarany izy satria tsy afaka mandeha tsara → Nein.", fr: "Il dépend de sa voiture → Nein." } },
        { n: 23, nom: "Tanja, 35, Utrecht/Köln", q: "In den Niederlanden habe ich erlebt, wie schön autofreie Zentren sein können: Cafés, Spielplätze, Bäume. Ich verstehe nicht, warum Deutschland so lange wartet.", a: "j", exp: { mg: "Mankasitraka foibe tsy misy fiara izy ary manontany hoe nahoana no miandry → Ja.", fr: "Elle trouve ça beau et regrette l'attente → Ja." } },
        { n: 24, nom: "Matthias, 52, Graz", q: "Grundsätzlich ist weniger Verkehr eine gute Sache. Aber ein komplettes Verbot geht zu weit. Man könnte zum Beispiel Parkplätze teurer machen und Busse billiger.", a: "n", exp: { mg: "Fandrika: « Grundsätzlich gut … Aber … geht zu weit » → Nein.", fr: "« Aber … geht zu weit » → Nein." } },
        { n: 25, nom: "Fatou, 29, Hamburg", q: "Meine Kinder haben Asthma, und die Luft in der Stadt ist schlecht. Ein Verbot wäre vielleicht unbequem für einige, aber unsere Gesundheit ist wichtiger.", a: "j", exp: { mg: "« Gesundheit ist wichtiger » → manohana ny fandrarana (Ja).", fr: "La santé d'abord → Ja." } },
        { n: 26, nom: "Felix, 31, Stuttgart", q: "Ich war früher dafür. Aber jetzt arbeite ich nachts im Krankenhaus, und um drei Uhr fährt kein Bus. Seitdem sehe ich das anders.", a: "n", exp: { mg: "Nanohana <b>taloha</b>, fa ankehitriny « sehe ich das anders » → Nein.", fr: "Pour avant, contre maintenant → Nein." } }
      ] },
    { id: "L5", nom: "Teil 5", temps: 10, type: "mc",
      consigne: "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      contexte: "Sie haben sich für einen Deutschkurs an der Volkshochschule angemeldet und lesen die Teilnahmebedingungen.",
      texte: `<div class="rules"><h3>TEILNAHMEBEDINGUNGEN</h3>
<p><b>Anmeldung:</b> Die Anmeldung ist online, telefonisch oder persönlich im Kundenbüro möglich. Sie ist verbindlich, sobald Sie eine schriftliche Bestätigung erhalten haben.</p>
<p><b>Bezahlung:</b> Die Kursgebühr ist vor Kursbeginn zu überweisen. Eine Zahlung in Raten ist bei Kursen ab 300 Euro auf Antrag möglich. Schüler, Studierende und Arbeitslose erhalten gegen Nachweis 30 % Ermäßigung.</p>
<p><b>Rücktritt:</b> Bis 10 Tage vor Kursbeginn können Sie kostenlos zurücktreten. Danach wird eine Bearbeitungsgebühr von 20 Euro fällig. Nach Kursbeginn ist keine Rückerstattung mehr möglich.</p>
<p><b>Kursausfall:</b> Bei zu wenigen Anmeldungen kann der Kurs abgesagt werden. Bereits bezahlte Gebühren werden in diesem Fall vollständig zurückerstattet.</p>
<p><b>Unterricht:</b> Fällt eine Stunde wegen Krankheit der Kursleitung aus, wird sie nachgeholt. Feiertage gelten nicht als Ausfall. Lehrbücher sind nicht in der Kursgebühr enthalten.</p>
<p><b>Bescheinigung:</b> Wer an mindestens 80 % der Unterrichtsstunden teilgenommen hat, erhält auf Wunsch eine Teilnahmebestätigung.</p></div>`,
      items: [
        { n: 27, q: "Die Kursgebühr …", opts: ["bezahlt man am ersten Kurstag bar.", "kann man bei teuren Kursen in Teilen zahlen.", "ist für alle Studierenden kostenlos."], a: "b", exp: { mg: "« Zahlung in Raten … ab 300 Euro » = azo aloa tsikelikely raha lafo ny fianarana.", fr: "Paiement échelonné dès 300 € → b." } },
        { n: 28, q: "Wenn man eine Woche vor Kursbeginn absagt, …", opts: ["bekommt man das ganze Geld zurück.", "muss man 20 Euro bezahlen.", "bekommt man nichts zurück."], a: "b", exp: { mg: "Herinandro iray = latsaky ny 10 andro → sarany 20 €.", fr: "Moins de 10 jours avant → 20 € de frais → b." } },
        { n: 29, q: "Wenn die Lehrerin krank ist, …", opts: ["fällt die Stunde ersatzlos aus.", "gibt es später eine Ersatzstunde.", "bekommt man Geld zurück."], a: "b", exp: { mg: "« wird sie nachgeholt » = averina atao any aoriana.", fr: "Le cours est rattrapé → b." } },
        { n: 30, q: "Eine Teilnahmebestätigung …", opts: ["bekommen alle Teilnehmenden automatisch.", "bekommt man nur, wenn man oft genug da war.", "kostet extra."], a: "b", exp: { mg: "« mindestens 80 % » + « auf Wunsch » = raha nanatrika 80 % farafahakeliny.", fr: "Au moins 80 % de présence → b." } }
      ] }
  ] },

  hoeren: { temps: 40, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 2, type: "mixed",
      consigne: "Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
      clips: [
        { id: "b1m3-h1-t1", titre: "Text 1", script: [{ s: "f", n: "Werkstatt", t: "Guten Tag, Herr Randria, hier ist die Autowerkstatt Meyer. Ihr Auto ist fertig. Wir haben die Bremsen repariert und das Öl gewechselt. Leider war auch eine Lampe kaputt, die haben wir gleich ausgetauscht. Die Rechnung beträgt zweihundertvierzig Euro. Sie können das Auto heute bis achtzehn Uhr abholen oder morgen ab acht Uhr. Bitte vergessen Sie den Fahrzeugschein nicht. Danke!" }],
          items: [
            { n: 1, type: "rf", q: "Die Werkstatt hat mehr repariert als geplant.", a: "r", exp: { mg: "« Leider war auch eine Lampe kaputt » = nisy jiro koa naova.", fr: "Une lampe en plus → Richtig." } },
            { n: 2, type: "mc", q: "Herr Randria kann sein Auto …", opts: ["nur heute abholen.", "heute oder morgen abholen.", "erst übermorgen abholen."], a: "b", exp: { mg: "« heute bis 18 Uhr oder morgen ab 8 Uhr ».", fr: "Aujourd'hui ou demain → b." } }
          ] },
        { id: "b1m3-h1-t2", titre: "Text 2", script: [{ s: "m", n: "Durchsage", t: "Achtung, eine Durchsage für die Passagiere des Fluges LH vierhundertsieben nach Paris. Ihr Flug hat leider etwa fünfundvierzig Minuten Verspätung. Das Boarding beginnt nicht wie geplant an Gate B zwölf, sondern an Gate C drei. Passagiere mit Kindern dürfen zuerst einsteigen. Wir bitten um Entschuldigung." }],
          items: [
            { n: 3, type: "rf", q: "Der Flug nach Paris fällt aus.", a: "f", exp: { mg: "« Verspätung » = tara fotsiny, tsy foana.", fr: "Seulement en retard → Falsch." } },
            { n: 4, type: "mc", q: "Die Passagiere sollen …", opts: ["zu einem anderen Gate gehen.", "am Gate B12 warten.", "ihr Gepäck abholen."], a: "a", exp: { mg: "Tsy B12 fa <b>C3</b> → vavahady hafa.", fr: "Gate C3 au lieu de B12 → a." } }
          ] },
        { id: "b1m3-h1-t3", titre: "Text 3", script: [{ s: "f", n: "Radio", t: "Sie hören Radio Süd mit den Tipps für Ihre Gesundheit. Heute geht es um den Schlaf. Viele Menschen schlafen schlecht, weil sie abends zu lange auf das Handy schauen. Experten empfehlen deshalb: Legen Sie das Handy eine Stunde vor dem Schlafen weg. Auch ein warmes Getränk kann helfen, zum Beispiel ein Tee mit Honig. Kaffee sollten Sie dagegen nach vierzehn Uhr nicht mehr trinken." }],
          items: [
            { n: 5, type: "rf", q: "Die Sendung gibt Tipps für besseren Schlaf.", a: "r", exp: { mg: "« Heute geht es um den Schlaf » + torohevitra.", fr: "Thème : le sommeil → Richtig." } },
            { n: 6, type: "mc", q: "Was sollte man am Abend nicht tun?", opts: ["Tee trinken", "lange auf das Handy schauen", "Honig essen"], a: "b", exp: { mg: "Apetraho ny finday 1 ora alohan'ny hatory.", fr: "Le portable avant de dormir → b." } }
          ] },
        { id: "b1m3-h1-t4", titre: "Text 4", script: [{ s: "m", n: "Felix", t: "Hey Lisa, hier ist Felix. Ich stehe gerade vor dem Restaurant, aber es ist geschlossen! Auf einem Schild steht: Betriebsferien bis Montag. So ein Pech. Ich schlage vor, wir gehen stattdessen in die Pizzeria am Bahnhof, die ist nur fünf Minuten von hier. Ich warte dort auf dich. Ich habe schon einen Tisch für zwei Personen reserviert. Bis gleich!" }],
          items: [
            { n: 7, type: "rf", q: "Felix und Lisa essen in dem geplanten Restaurant.", a: "f", exp: { mg: "Mihidy ilay trano fisakafoanana → pizzeria hafa no aleha.", fr: "Restaurant fermé → Falsch." } },
            { n: 8, type: "mc", q: "Was hat Felix schon gemacht?", opts: ["einen Tisch reserviert", "Pizza bestellt", "ein Taxi gerufen"], a: "a", exp: { mg: "« einen Tisch … reserviert » = efa namandrika latabatra.", fr: "Il a réservé une table → a." } }
          ] },
        { id: "b1m3-h1-t5", titre: "Text 5", script: [{ s: "m", n: "Verkehr", t: "Und nun die Verkehrslage. Wegen des Stadtmarathons sind heute zwischen neun und fünfzehn Uhr mehrere Straßen im Zentrum gesperrt. Autofahrer sollten die Innenstadt weiträumig umfahren. Die Straßenbahnen fahren normal, aber die Buslinien zwei und sieben haben Umleitungen. Am Nachmittag erwarten wir außerdem viel Verkehr auf der Autobahn Richtung Süden." }],
          items: [
            { n: 9, type: "rf", q: "Am Vormittag kann man mit dem Auto durch das Zentrum fahren.", a: "f", exp: { mg: "Mihidy ny lalana 9–15 ora → tsy afaka.", fr: "Rues fermées 9h–15h → Falsch." } },
            { n: 10, type: "mc", q: "Wie kann man ohne Probleme ins Zentrum fahren?", opts: ["mit dem Bus Linie 2", "mit der Straßenbahn", "über die Autobahn"], a: "b", exp: { mg: "« Die Straßenbahnen fahren normal ».", fr: "Le tram fonctionne normalement → b." } }
          ] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 1, type: "mc", lecture: 60,
      consigne: "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
      contexte: "Sie besuchen am ersten Tag einen Intensivkurs an einer Sprachschule und hören die Informationen der Schulleiterin.",
      clips: [{ id: "b1m3-h2", titre: "Informationen", script: [
        { s: "f", n: "Schulleiterin", t: "Guten Morgen, liebe Kursteilnehmerinnen und Kursteilnehmer! Ich bin Frau Hartmann, die Leiterin der Sprachschule Lingua. Schön, dass Sie da sind. Bevor der Unterricht beginnt, ein paar wichtige Informationen." },
        { s: "f", n: "Schulleiterin", t: "Der Unterricht findet von Montag bis Freitag von neun bis dreizehn Uhr statt. Um elf gibt es eine Pause von zwanzig Minuten. Getränke bekommen Sie kostenlos in der Küche im Erdgeschoss, für Snacks gibt es einen Automaten." },
        { s: "f", n: "Schulleiterin", t: "Ihre Lehrbücher bekommen Sie heute von Ihrer Kursleiterin. Bitte schreiben Sie Ihren Namen hinein, denn am Ende des Kurses dürfen Sie die Bücher behalten." },
        { s: "f", n: "Schulleiterin", t: "Am Nachmittag haben wir ein freiwilliges Programm. Am Dienstag gibt es eine Stadtführung, am Donnerstag einen Filmabend. Für die Stadtführung müssen Sie sich bis morgen im Sekretariat anmelden, für den Film nicht." },
        { s: "f", n: "Schulleiterin", t: "Und noch etwas Wichtiges: Wenn Sie krank sind, rufen Sie bitte bis acht Uhr dreißig im Sekretariat an. Am Ende des Kurses gibt es eine Prüfung. Wer bestanden hat, bekommt ein Zertifikat. So, und jetzt wünsche ich Ihnen viel Spaß!" }],
        items: [
          { n: 11, type: "mc", q: "In der Pause …", opts: ["kann man kostenlos etwas trinken.", "bekommt man ein kostenloses Frühstück.", "muss man das Gebäude verlassen."], a: "a", exp: { mg: "« Getränke … kostenlos in der Küche ».", fr: "Boissons gratuites → a." } },
          { n: 12, type: "mc", q: "Die Lehrbücher …", opts: ["muss man am Ende zurückgeben.", "darf man nach dem Kurs behalten.", "muss man selbst kaufen."], a: "b", exp: { mg: "« dürfen Sie die Bücher behalten » = azonao tazonina.", fr: "On peut les garder → b." } },
          { n: 13, type: "mc", q: "Für welche Aktivität muss man sich anmelden?", opts: ["für den Filmabend", "für die Stadtführung", "für beide"], a: "b", exp: { mg: "Stadtführung ihany; « für den Film nicht ».", fr: "Seulement la visite → b." } },
          { n: 14, type: "mc", q: "Wenn man krank ist, soll man …", opts: ["eine E-Mail an die Lehrerin schreiben.", "früh am Morgen anrufen.", "ein Attest bringen."], a: "b", exp: { mg: "« bis acht Uhr dreißig … anrufen ».", fr: "Appeler avant 8h30 → b." } },
          { n: 15, type: "mc", q: "Ein Zertifikat bekommt man, …", opts: ["wenn man die Prüfung besteht.", "wenn man immer da war.", "am ersten Kurstag."], a: "a", exp: { mg: "« Wer bestanden hat, bekommt ein Zertifikat ».", fr: "Si on réussit l'examen → a." } }
        ] }] },
    { id: "H3", nom: "Teil 3", ecoutes: 1, type: "rf", lecture: 60,
      consigne: "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen Richtig oder Falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
      contexte: "Sie sitzen in einem Café und hören, wie zwei Geschwister über ein Geschenk für ihre Mutter sprechen.",
      clips: [{ id: "b1m3-h3", titre: "Gespräch", script: [
        { s: "f", n: "Laura", t: "Du, Ben, Mamas sechzigster Geburtstag ist in zwei Wochen. Wir müssen endlich über das Geschenk sprechen." },
        { s: "m", n: "Ben", t: "Stimmt. Ich hatte an einen Gutschein für ein Restaurant gedacht. Sie geht doch so gern essen." },
        { s: "f", n: "Laura", t: "Hm, das haben wir ihr schon letztes Jahr geschenkt. Ich möchte etwas Besonderes. Was hältst du von einer Reise? Sie wollte doch immer nach Wien." },
        { s: "m", n: "Ben", t: "Eine Reise? Das ist aber teuer." },
        { s: "f", n: "Laura", t: "Wenn wir es zu dritt bezahlen, mit Tante Maria, geht es. Ich habe schon ein Hotel gefunden, direkt im Zentrum, drei Nächte." },
        { s: "m", n: "Ben", t: "Und mit wem soll sie fahren? Papa hat doch keinen Urlaub mehr." },
        { s: "f", n: "Laura", t: "Mit Tante Maria! Die beiden verstehen sich super. Und Tante Maria war noch nie in Wien." },
        { s: "m", n: "Ben", t: "Okay, das ist eine schöne Idee. Aber dann sollten wir ihr auch noch etwas Kleines zum Auspacken geben. Nur ein Brief mit einer Hotelbuchung ist ein bisschen langweilig." },
        { s: "f", n: "Laura", t: "Genau. Vielleicht einen Reiseführer über Wien? Den kannst du kaufen, du kommst doch an der Buchhandlung vorbei." },
        { s: "m", n: "Ben", t: "Mach ich. Und wer bucht das Hotel?" },
        { s: "f", n: "Laura", t: "Das mache ich heute Abend. Ich rufe vorher noch Tante Maria an, ob sie im Mai Zeit hat." }],
        items: [
          { n: 16, q: "Die Mutter wird bald sechzig Jahre alt.", a: "r", exp: { mg: "« Mamas sechzigster Geburtstag ».", fr: "60ᵉ anniversaire → Richtig." } },
          { n: 17, q: "Ein Restaurant-Gutschein ist für Laura eine gute Idee.", a: "f", exp: { mg: "« das haben wir ihr schon letztes Jahr geschenkt » → tsy tiany.", fr: "Déjà offert l'an dernier → Falsch." } },
          { n: 18, q: "Die Geschwister bezahlen die Reise allein.", a: "f", exp: { mg: "« zu dritt, mit Tante Maria » = olona telo.", fr: "À trois avec tante Maria → Falsch." } },
          { n: 19, q: "Die Mutter fährt mit ihrem Mann nach Wien.", a: "f", exp: { mg: "Tsy manana fialan-tsasatra ny dadany → i <b>Tante Maria</b> no miaraka aminy.", fr: "Avec tante Maria, pas avec le père → Falsch." } },
          { n: 20, q: "Tante Maria kennt Wien noch nicht.", a: "r", exp: { mg: "« war noch nie in Wien ».", fr: "Jamais allée à Vienne → Richtig." } },
          { n: 21, q: "Ben kauft ein Buch über Wien.", a: "r", exp: { mg: "« einen Reiseführer … – Mach ich » = i Ben no hividy.", fr: "Ben achète le guide → Richtig." } },
          { n: 22, q: "Laura hat das Hotel schon gebucht.", a: "f", exp: { mg: "« Das mache ich heute Abend » = mbola tsy vita.", fr: "Elle le fera ce soir → Falsch." } }
        ] }] },
    { id: "H4", nom: "Teil 4", ecoutes: 2, type: "who", lecture: 60,
      consigne: "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
      contexte: "Der Moderator der Radiosendung „Arbeitswelt“ diskutiert mit der IT-Managerin Claudia Neumann und dem Handwerker Peter Lorenz zum Thema „Ist Homeoffice die Zukunft?“.",
      personnes: { a: "Moderator", b: "Claudia Neumann", c: "Peter Lorenz" },
      exemple: { q: "Seit einigen Jahren arbeiten viel mehr Menschen von zu Hause.", a: "a" },
      clips: [{ id: "b1m3-h4", titre: "Diskussion", script: [
        { s: "m", n: "Moderator", t: "Willkommen bei „Arbeitswelt“. Seit einigen Jahren arbeiten viel mehr Menschen von zu Hause aus. Ist das die Zukunft? Darüber spreche ich mit Claudia Neumann, sie leitet ein IT-Team, und mit Peter Lorenz, er ist Elektriker. Frau Neumann, wie ist das in Ihrer Firma?" },
        { s: "f", n: "Claudia Neumann", t: "Mein Team arbeitet drei Tage pro Woche zu Hause. Und ich muss sagen: Die Leute sind zufriedener und arbeiten konzentrierter. Im Großraumbüro wird man ja ständig gestört." },
        { s: "m", n: "Moderator", t: "Herr Lorenz, für Sie ist Homeoffice wohl kein Thema?" },
        { s: "m2", n: "Peter Lorenz", t: "Nein, natürlich nicht. Eine Steckdose kann ich nicht vom Sofa aus reparieren. Und ehrlich gesagt ärgert es mich manchmal, dass immer nur über Büroberufe gesprochen wird. Viele Menschen haben diese Möglichkeit gar nicht." },
        { s: "m", n: "Moderator", t: "Studien zeigen allerdings auch, dass viele im Homeoffice mehr Stunden arbeiten als im Büro." },
        { s: "f", n: "Claudia Neumann", t: "Das stimmt leider. Man muss lernen, eine klare Grenze zu ziehen. Ich sage meinen Mitarbeitern immer: Wenn der Laptop zu ist, ist Feierabend." },
        { s: "m2", n: "Peter Lorenz", t: "Was mir auch auffällt: Junge Leute lernen viel von älteren Kollegen, wenn sie zusammen arbeiten. Bei uns schaut der Lehrling dem Meister über die Schulter. Das geht nicht per Video." },
        { s: "f", n: "Claudia Neumann", t: "Da haben Sie recht. Deshalb kommen bei uns neue Mitarbeiter in den ersten Monaten jeden Tag ins Büro." },
        { s: "m", n: "Moderator", t: "Und für die Umwelt ist Homeoffice ja auch gut, weil weniger Menschen pendeln." },
        { s: "m2", n: "Peter Lorenz", t: "Das ist richtig. Aber ich finde, dann sollte man lieber Busse und Bahnen besser machen. Davon hätten alle etwas, auch Handwerker wie ich." },
        { s: "m", n: "Moderator", t: "Vielen Dank Ihnen beiden für das interessante Gespräch." }],
        items: [
          { n: 23, q: "Zu Hause kann man sich besser konzentrieren.", a: "b", exp: { mg: "Neumann: « arbeiten konzentrierter ».", fr: "Neumann → b." } },
          { n: 24, q: "Nicht alle Berufe kann man zu Hause ausüben.", a: "c", exp: { mg: "Lorenz: « Viele Menschen haben diese Möglichkeit gar nicht ».", fr: "Lorenz → c." } },
          { n: 25, q: "Im Homeoffice arbeiten viele Menschen länger.", a: "a", exp: { mg: "Ny Moderator: « Studien zeigen … mehr Stunden ».", fr: "Le modérateur → a." } },
          { n: 26, q: "Man muss Arbeit und Freizeit klar trennen.", a: "b", exp: { mg: "Neumann: « eine klare Grenze ziehen … Feierabend ».", fr: "Neumann → b." } },
          { n: 27, q: "Junge Leute lernen am besten neben erfahrenen Kollegen.", a: "c", exp: { mg: "Lorenz: « Lehrling … Meister über die Schulter ».", fr: "Lorenz → c." } },
          { n: 28, q: "Neue Mitarbeiter sollen am Anfang im Büro arbeiten.", a: "b", exp: { mg: "Neumann: « in den ersten Monaten jeden Tag ins Büro ».", fr: "Neumann → b." } },
          { n: 29, q: "Homeoffice ist gut für die Umwelt.", a: "a", exp: { mg: "Ny Moderator: « für die Umwelt … gut ».", fr: "Le modérateur → a." } },
          { n: 30, q: "Der öffentliche Verkehr sollte verbessert werden.", a: "c", exp: { mg: "Lorenz: « Busse und Bahnen besser machen ».", fr: "Lorenz → c." } }
        ] }] }
  ] },

  schreiben: { temps: 60, aufgaben: [
    { id: "S1", nom: "Aufgabe 1", temps: 20, mots: 80, type: "E-Mail (informell)",
      consigne: `<p>Sie haben letztes Wochenende mit Freunden einen Ausflug gemacht. Ein Freund / Eine Freundin von Ihnen konnte nicht mitkommen, weil er/sie arbeiten musste.</p>
<ul><li><b>Beschreiben Sie:</b> Wie war der Ausflug?</li><li><b>Begründen Sie:</b> Was war für Sie das Schönste und warum?</li><li><b>Machen Sie einen Vorschlag</b> für einen gemeinsamen Ausflug.</li></ul>
<p class="small">Schreiben Sie eine E-Mail (circa 80 Wörter). Schreiben Sie etwas zu allen drei Punkten. Achten Sie auf den Textaufbau (Anrede, Einleitung, Reihenfolge der Inhaltspunkte, Schluss).</p>`,
      checklist: ["Liebe … / Lieber …,", "Fampidirana", "Hevitra 1 : nanao ahoana ny dia", "Hevitra 2 : ny tsara indrindra + ANTONY", "Hevitra 3 : soso-kevitra", "Famaranana + Gruß", "Eo amin'ny 80 teny"],
      redemittel: ["Schade, dass du nicht mitkommen konntest!", "Wir sind mit dem Zug nach … gefahren.", "Das Schönste war …, weil …", "Wollen wir im nächsten Monat zusammen …?", "Liebe Grüße"],
      modele: `Liebe Nadine,

schade, dass du am Wochenende arbeiten musstest! Wir sind mit dem Zug an den Chiemsee gefahren. Das Wetter war super, und wir sind mit dem Schiff auf eine Insel gefahren.

Das Schönste war das Picknick am See, weil wir so viel gelacht haben. Außerdem hat Paul seine Gitarre mitgebracht und gespielt.

Wollen wir im Juni zusammen einen Ausflug machen? Wir könnten in die Berge fahren und wandern. Sag mir, wann du Zeit hast!

Liebe Grüße
Hanta` },
    { id: "S2", nom: "Aufgabe 2", temps: 25, mots: 80, type: "Diskussionsbeitrag (Meinung)",
      consigne: `<p>Sie haben im Fernsehen eine Diskussionssendung zum Thema „Tiere im Zoo“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung:</p>
<div class="guest"><div class="guest-h">www.tv-meinung.de · Gästebuch</div><div class="guest-b"><b>Martin</b> · 21.08. 19:30 Uhr<br>Zoos sind wichtig, weil Kinder dort Tiere sehen können, die sie sonst nur aus dem Fernsehen kennen. Außerdem schützen Zoos viele Tierarten, die es in der Natur bald nicht mehr gibt.</div></div>
<p class="small">Schreiben Sie nun Ihre Meinung zum Thema (circa 80 Wörter).</p>`,
      checklist: ["Valio i Martin", "Hevitrao mazava", "Antony 2 + ohatra", "Famaranana", "TSY MISY Anrede na Gruß", "Eo amin'ny 80 teny"],
      redemittel: ["Ich stimme Martin teilweise zu.", "Es stimmt, dass …", "Andererseits …", "In Madagaskar gibt es zum Beispiel …", "Für mich ist am wichtigsten, dass …"],
      modele: `Ich stimme Martin teilweise zu. Es stimmt, dass Kinder im Zoo viel über Tiere lernen können. Ich habe als Kind im Zoo in Tsimbazaza zum ersten Mal Lemuren gesehen und war total begeistert.

Andererseits haben viele Tiere im Zoo zu wenig Platz. Große Tiere wie Elefanten oder Löwen brauchen viel Bewegung. Deshalb finde ich, dass Zoos nur Tiere halten sollten, für die sie genug Platz haben. Am wichtigsten ist für mich, dass es den Tieren gut geht.` },
    { id: "S3", nom: "Aufgabe 3", temps: 15, mots: 40, type: "E-Mail (formell)",
      consigne: `<p>Ihre Chefin, Frau Lange, hat das ganze Team am Freitagabend zu einem Teamessen eingeladen. Sie können aber nicht kommen.</p>
<p>Schreiben Sie an Frau Lange. Entschuldigen Sie sich höflich und berichten Sie, warum Sie nicht kommen können.</p>
<p class="small">Schreiben Sie eine E-Mail (circa 40 Wörter). Vergessen Sie nicht die Anrede und den Gruß am Schluss.</p>`,
      checklist: ["Liebe Frau Lange, / Sehr geehrte Frau Lange,", "Misaotra noho ny fanasana", "Miala tsiny", "Antony", "« Sie / Ihnen »", "Mit freundlichen Grüßen", "Eo amin'ny 40 teny"],
      redemittel: ["Vielen Dank für die Einladung zum Teamessen.", "Leider kann ich am Freitag nicht kommen, weil …", "Ich wünsche Ihnen und dem Team einen schönen Abend.", "Mit freundlichen Grüßen"],
      modele: `Liebe Frau Lange,

vielen Dank für die Einladung zum Teamessen. Leider kann ich am Freitagabend nicht kommen, weil meine Eltern aus Madagaskar zu Besuch kommen und ich sie vom Flughafen abholen muss. Das tut mir sehr leid. Ich wünsche Ihnen und dem Team einen schönen Abend!

Mit freundlichen Grüßen
Tahina Ravelo` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voavaly ve ny hevitra rehetra? · Tous les points traités ?" },
    { nom: "Kohärenz", desc: "Voalamina tsara, misy teny mampifandray · Structure" },
    { nom: "Wortschatz", desc: "Voambolana maro · Vocabulaire varié" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" }
  ] },

  sprechen: { preparation: 15, teile: [
    { id: "P1", nom: "Teil 1 – Gemeinsam etwas planen", duree: 3,
      consigne: `<p>Ihre Gruppe aus dem Deutschkurs möchte einen Flohmarkt organisieren. Das Geld soll an eine Schule in Madagaskar gehen. Planen Sie den Flohmarkt zusammen.</p>
<div class="plan"><b>Flohmarkt organisieren</b><ul><li>Wann und wo?</li><li>Was verkaufen?</li><li>Wie Werbung machen?</li><li>Wer macht was?</li><li>…</li></ul></div>`,
      partenaire: [
        { id: "b1m3-p1-1", t: "Hallo! Also, wegen dem Flohmarkt: Wann sollen wir ihn machen? Ich dachte an einen Samstag im Mai. Was meinst du?" },
        { id: "b1m3-p1-2", t: "Gut. Und wo? Vielleicht im Hof von der Sprachschule? Oder hast du eine bessere Idee?" },
        { id: "b1m3-p1-3", t: "Okay. Was sollen wir denn verkaufen? Ich habe viele alte Bücher und Kleidung." },
        { id: "b1m3-p1-4", t: "Und wie machen wir Werbung? Ich könnte Plakate malen. Was kannst du übernehmen?" },
        { id: "b1m3-p1-5", t: "Super. Dann fassen wir mal zusammen: Was haben wir jetzt alles geplant?" }
      ],
      redemittel: [
        ["Manolotra · Proposer", ["Ich schlage vor, dass …", "Wie wäre es, wenn wir …?", "Wir könnten auch …"]],
        ["Manaiky · Accepter", ["Das ist eine tolle Idee!", "Einverstanden.", "Gut, so machen wir es."]],
        ["Mandà · Refuser", ["Ich bin nicht sicher, ob …", "Das ist vielleicht schwierig, weil …"]],
        ["Mamarana · Conclure", ["Also: Wir machen den Flohmarkt am … im …", "Du kümmerst dich um …, ich um …"]]
      ],
      modele: `A: Wann machen wir den Flohmarkt? Ein Samstag im Mai?
B: Gute Idee, im Mai ist es schon warm. Am besten am 18. Mai, von 10 bis 16 Uhr.
A: Wo? Im Hof der Sprachschule?
B: Ja, aber wir müssen die Schulleitung fragen. Das mache ich.
A: Was verkaufen wir? Ich habe Bücher und Kleidung.
B: Ich bringe Geschirr und Spielzeug mit. Wir könnten auch Kuchen verkaufen!
A: Super. Für die Werbung male ich Plakate.
B: Und ich schreibe einen Post in den sozialen Medien.
A: Also: 18. Mai, im Hof, Bücher, Kleidung, Spielzeug und Kuchen.` },
    { id: "P2", nom: "Teil 2 – Ein Thema präsentieren", duree: 3,
      consigne: `<p>Wählen Sie ein Thema (Thema 1 oder Thema 2) aus. Sie sollen Ihren Zuhörern ein aktuelles Thema präsentieren. Dazu finden Sie hier fünf Folien.</p>`,
      themes: [ { titre: "Fernsehen für Kinder – gut oder schlecht?" }, { titre: "Wohnen in der Stadt oder auf dem Land?" } ],
      redemittel: [
        ["Folie 1 – Fampidirana", ["Mein Thema heute ist …", "Ich spreche zuerst über …, dann …"]],
        ["Folie 2 – Ny traikefako", ["Als Kind habe ich …", "Ich persönlich …"]],
        ["Folie 3 – Ny fireneko", ["In Madagaskar ist es so, dass …", "Im Vergleich zu Deutschland …"]],
        ["Folie 4 – Tombony / fatiantoka", ["Dafür spricht, dass …", "Dagegen spricht, dass …", "Ich finde …"]],
        ["Folie 5 – Famaranana", ["Zum Schluss möchte ich sagen, …", "Danke für eure Aufmerksamkeit!"]]
      ] },
    { id: "P3", nom: "Teil 3 – Über das Thema sprechen", duree: 2,
      consigne: `<p>Geben Sie Ihrem Partner / Ihrer Partnerin eine Rückmeldung zur Präsentation und stellen Sie eine Frage. Beantworten Sie auch die Frage zu Ihrer Präsentation.</p>`,
      partenaire_presentation: { id: "b1m3-p3-partner", t: "Mein Thema heute ist „Musik lernen“. Ich habe als Kind Klavier gelernt, aber mit vierzehn habe ich aufgehört, weil ich keine Lust mehr hatte. Heute bereue ich das ein bisschen. In meinem Heimatland Vietnam lernen viele Kinder ein Instrument, aber die Musikschulen sind teuer. Ein Vorteil ist, dass Musik gut für das Gedächtnis ist. Ein Nachteil ist, dass man jeden Tag üben muss. Ich finde, jedes Kind sollte die Chance haben, ein Instrument zu lernen. Vielen Dank." },
      question_pour_toi: { id: "b1m3-p3-frage", t: "Danke für deine Präsentation. Mich würde interessieren: Glaubst du, dass sich die Situation in deinem Land in Zukunft ändern wird?" },
      redemittel: [
        ["Valin-kafatra · Feedback", ["Deine Präsentation war sehr klar.", "Neu war für mich, dass …"]],
        ["Fanontaniana · Question", ["Darf ich etwas fragen? …", "Warum hast du …?"]],
        ["Mamaly · Répondre", ["Gute Frage!", "Ich glaube schon / eher nicht, weil …"]]
      ] }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voaresaka avokoa ny hevitra · tous les points" },
    { nom: "Interaktion", desc: "Mamaly ny namanao · tu réagis" },
    { nom: "Wortschatz", desc: "Voambolana · vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · grammaire" },
    { nom: "Aussprache", desc: "Fanononana · prononciation" }
  ] },

  vocab: [
    { de: "sich melden", fr: "donner des nouvelles", mg: "manome vaovao", ex: "Entschuldige, dass ich mich nicht gemeldet habe." },
    { de: "umziehen", fr: "déménager", mg: "mifindra trano", ex: "Wir sind aufs Land umgezogen." },
    { de: "sich entscheiden für", fr: "se décider pour", mg: "manapa-kevitra", ex: "Wir haben uns für ein Haus entschieden." },
    { de: "anbauen", fr: "cultiver", mg: "mamboly", ex: "Ich baue Gemüse im Garten an." },
    { de: "das Gästezimmer", fr: "la chambre d'amis", mg: "efitranon'ny vahiny", ex: "Wir haben ein Gästezimmer." },
    { de: "sich bedienen", fr: "se servir", mg: "maka ho azy", ex: "Jeder darf sich bedienen." },
    { de: "betreuen", fr: "s'occuper de", mg: "mikarakara", ex: "Er betreut die Bücherschränke." },
    { de: "der Flohmarkt", fr: "la brocante", mg: "tsena entana efa niasa", ex: "Sie verkaufen Bücher auf dem Flohmarkt." },
    { de: "selbstständig", fr: "indépendant", mg: "miasa ho azy", ex: "Er arbeitet selbstständig." },
    { de: "die Steckdose", fr: "la prise électrique", mg: "fandraisana herinaratra", ex: "Am Tisch gibt es eine Steckdose." },
    { de: "die Vergütung", fr: "la rémunération", mg: "karama", ex: "Die Ausbildung hat eine Vergütung." },
    { de: "der Lebenslauf", fr: "le CV", mg: "tantaran'ny fiainana (CV)", ex: "Wir prüfen Ihren Lebenslauf." },
    { de: "der Führerschein", fr: "le permis de conduire", mg: "fahazoan-dalana mitondra fiara", ex: "Ich mache den Führerschein." },
    { de: "die Abgase", fr: "les gaz d'échappement", mg: "setroky ny fiara", ex: "Lärm und Abgase den ganzen Tag!" },
    { de: "angewiesen sein auf", fr: "dépendre de", mg: "miankina amin'ny", ex: "Ich bin auf mein Auto angewiesen." },
    { de: "verbindlich", fr: "ferme / qui engage", mg: "tsy azo ovaina intsony", ex: "Die Anmeldung ist verbindlich." },
    { de: "in Raten zahlen", fr: "payer en plusieurs fois", mg: "mandoa tsikelikely", ex: "Man kann in Raten zahlen." },
    { de: "die Ermäßigung", fr: "la réduction", mg: "fihenam-bidy", ex: "Studierende erhalten eine Ermäßigung." },
    { de: "zurücktreten", fr: "se désister / annuler", mg: "miala (amin'ny fisoratana)", ex: "Sie können kostenlos zurücktreten." },
    { de: "nachholen", fr: "rattraper", mg: "manonitra", ex: "Die Stunde wird nachgeholt." },
    { de: "die Rechnung", fr: "la facture", mg: "faktiora", ex: "Die Rechnung beträgt 240 Euro." },
    { de: "abholen", fr: "aller chercher", mg: "maka", ex: "Sie können das Auto heute abholen." },
    { de: "der Gutschein", fr: "le bon cadeau", mg: "tapakila fanomezana", ex: "Ich schenke ihr einen Gutschein." },
    { de: "pendeln", fr: "faire la navette", mg: "mivezivezy (trano–asa)", ex: "Viele Menschen pendeln jeden Tag." },
    { de: "der Feierabend", fr: "la fin de journée de travail", mg: "fiafaran'ny asa", ex: "Wenn der Laptop zu ist, ist Feierabend." },
    { de: "stören", fr: "déranger", mg: "manelingelina", ex: "Im Großraumbüro wird man gestört." }
  ]
});
