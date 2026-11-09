/* ZERTIFIKAT B1 — Modellsatz 2 · textes originaux H Conseil & Formation */
window.POOLS = window.POOLS || {};
window.POOLS.B1 = window.POOLS.B1 || { sets: [] };
window.POOLS.B1.sets.push({
  id: "b1m2", titre: "Modellsatz 2",
  theme: "Ausbildung any Alemaina · Zaridaina an-tanàna · Fast Food",

  lesen: { temps: 65, teile: [
    { id: "L1", nom: "Teil 1", temps: 10, type: "rf",
      consigne: "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen Richtig oder Falsch?",
      texte: `<div class="blog"><div class="blog-head"><b>HerysNeuesLeben.de</b><span>Ein Madagasse in Deutschland – mein Weg zur Ausbildung</span></div>
<p class="blog-date">Sonntag, den 6. Oktober</p>
<p>Liebe Leserinnen und Leser, meine erste Woche als Auszubildender ist vorbei, und ich muss euch einfach davon erzählen! Wie ihr wisst, mache ich eine Ausbildung zum Koch in einem Hotel in Freiburg. Eigentlich sollte ich am Montag um sechs Uhr anfangen. Ich war so nervös, dass ich schon um halb fünf aufgestanden bin – und dann war ich natürlich viel zu früh da. Der Hausmeister hat mich reingelassen und mir einen Kaffee gemacht. So hatte ich wenigstens einen netten ersten Kontakt.</p>
<p>Mein Chef, Herr Albrecht, ist streng, aber fair. Am ersten Tag durfte ich noch nicht kochen, sondern habe nur Gemüse geschnitten – stundenlang! Am Mittwoch hat er mir dann gezeigt, wie man eine richtige Brühe macht. Das Rezept hat er von seiner Großmutter, und er verrät es nicht jedem. Ich war ein bisschen stolz.</p>
<p>Schwierig ist für mich noch die Sprache in der Küche. Alle sprechen sehr schnell, und viele Wörter habe ich im Deutschkurs nie gelernt. Zum Glück hilft mir meine Kollegin Sabine. Sie schreibt mir jeden Abend eine Liste mit neuen Wörtern auf, die ich zu Hause lerne. Am Freitag gab es dann eine Überraschung: Das ganze Team hat mich nach der Arbeit zum Essen eingeladen – in ein afrikanisches Restaurant! Dort gab es sogar ein Gericht, das fast wie Romazava schmeckte.</p>
<p>Nächste Woche beginnt auch die Berufsschule. Ich bin gespannt!</p><p>Bis bald<br>euer Hery</p></div>`,
      exemple: { q: "Hery macht eine Ausbildung in einem Hotel.", a: "Richtig" },
      items: [
        { n: 1, q: "Hery kam am ersten Tag zu spät zur Arbeit.", a: "f",
          exp: { mg: "« viel zu früh da » = tonga aloha loatra izy, tsy tara.", fr: "« viel zu früh » : il est arrivé beaucoup trop tôt → Falsch." } },
        { n: 2, q: "Am ersten Tag hat Hery nur Gemüse vorbereitet.", a: "r",
          exp: { mg: "« habe nur Gemüse geschnitten » = nanapaka legioma fotsiny izy.", fr: "« nur Gemüse geschnitten » = préparer des légumes → Richtig." } },
        { n: 3, q: "Herr Albrecht gibt sein Brühe-Rezept gern an alle weiter.", a: "f",
          exp: { mg: "« er verrät es nicht jedem » = tsy omeny ny olona rehetra ilay fomba fanamboarana.", fr: "« verrät es nicht jedem » : il ne le donne pas à tout le monde → Falsch." } },
        { n: 4, q: "Hery versteht in der Küche noch nicht alles.", a: "r",
          exp: { mg: "« Schwierig ist … die Sprache » sy teny maro tsy fantany → mbola tsy azony avokoa.", fr: "La langue est encore difficile, beaucoup de mots inconnus → Richtig." } },
        { n: 5, q: "Sabine lernt mit Hery jeden Abend zu Hause.", a: "f",
          exp: { mg: "Manoratra lisitry ny teny ho azy i Sabine; i <b>Hery irery</b> no mianatra ao an-trano.", fr: "Sabine écrit une liste ; c'est Hery qui apprend seul à la maison → Falsch." } },
        { n: 6, q: "Hery hat mit seinen Kollegen ein Gericht aus seiner Heimat gekocht.", a: "f",
          exp: { mg: "Nasain'ny ekipa nisakafo tany amin'ny <b>trano fisakafoanana</b> izy; tsy nahandro izy. Sakafo « fast wie Romazava » fotsiny.", fr: "Ils sont allés au restaurant, il n'a pas cuisiné → Falsch." } }
      ] },
    { id: "L2", nom: "Teil 2", temps: 20, type: "mc",
      consigne: "Lesen Sie die Texte aus der Presse und die Aufgaben 7 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      texte: `<div class="press"><h3>Tomaten vom Parkhausdach</h3><p class="lead">In Köln gärtnern Nachbarn dort, wo früher Autos standen.</p>
<p>Wer im Sommer auf das Dach des alten Parkhauses in der Kölner Südstadt steigt, glaubt kaum, was er sieht: Zwischen Beton wachsen Tomaten, Salat, Kräuter und sogar Sonnenblumen. Seit zwei Jahren nutzt der Verein „Grünes Dach“ die Fläche, nachdem das Parkhaus für Autos geschlossen wurde. Rund 80 Mitglieder kümmern sich um die Beete, die in alten Kisten und Säcken angelegt sind. „Viele unserer Mitglieder haben keinen eigenen Balkon“, erklärt die Vorsitzende Petra Lindner. „Hier können sie zum ersten Mal ihr eigenes Gemüse ernten.“</p>
<p>Die Stadt stellt das Dach kostenlos zur Verfügung, das Wasser bezahlt der Verein selbst. Jeden Samstag gibt es einen offenen Gartentag, an dem auch Nicht-Mitglieder mithelfen dürfen. Besonders beliebt ist das Projekt bei Familien: Kinder lernen hier, dass Karotten nicht im Supermarkt wachsen. Ein Problem gibt es allerdings: Im Hochsommer wird es auf dem Dach sehr heiß. Deshalb sammelt der Verein jetzt Geld für Sonnensegel.</p>
<p class="src">aus einer deutschen Zeitung</p></div>
<div class="press"><h3>Wischen lernen mit 75</h3><p class="lead">In Zürich bringen Jugendliche älteren Menschen das Smartphone bei.</p>
<p>Ein Foto an die Enkelin schicken, eine Zugverbindung suchen, mit der Familie im Ausland telefonieren: Für viele ältere Menschen ist das Smartphone ein Rätsel. Im Projekt „Generationen-Brücke“ helfen deshalb Schülerinnen und Schüler einer Zürcher Sekundarschule einmal pro Woche Seniorinnen und Senioren aus dem Quartier. Die Treffen finden im Gemeinschaftszentrum statt und sind für die Teilnehmenden gratis.</p>
<p>„Am Anfang hatte ich Angst, etwas kaputtzumachen“, erzählt die 75-jährige Margrit Huber. „Aber die jungen Leute sind sehr geduldig.“ Auch die Jugendlichen profitieren: Sie lernen, etwas verständlich zu erklären, und erhalten für ihre Mitarbeit eine Bestätigung, die sie ihren Bewerbungen beilegen können. Weil die Nachfrage so groß ist, gibt es inzwischen eine Warteliste. Die Schule sucht nun weitere Klassen, die mitmachen möchten.</p>
<p class="src">aus einer Schweizer Zeitung</p></div>`,
      exemple: { q: "Der Verein „Grünes Dach“ …", opts: ["hat das Parkhaus gekauft.", "nutzt das Dach eines Parkhauses.", "repariert alte Autos."], a: "b" },
      items: [
        { n: 7, q: "In dem ersten Text geht es um …", opts: ["einen Garten auf einem Dach in der Stadt.", "einen neuen Parkplatz in Köln.", "einen Supermarkt mit Bio-Gemüse."], a: "a",
          exp: { mg: "Lohahevitra ankapobeny: zaridaina eo ambonin'ny tafon'ny trano fiantsonan'ny fiara.", fr: "Thème général : un jardin sur un toit en ville." } },
        { n: 8, q: "Für das Projekt …", opts: ["bezahlt der Verein Miete an die Stadt.", "zahlt der Verein das Wasser.", "bekommt der Verein Geld vom Supermarkt."], a: "b",
          exp: { mg: "« das Wasser bezahlt der Verein selbst ». Maimaim-poana kosa ny tafo.", fr: "« das Wasser bezahlt der Verein selbst » → b. Le toit est gratuit." } },
        { n: 9, q: "Der Verein möchte …", opts: ["neue Mitglieder suchen.", "Schutz vor der Sonne kaufen.", "nur noch für Familien öffnen."], a: "b",
          exp: { mg: "Mafana loatra ny tafo, ka « sammelt Geld für Sonnensegel » = manangona vola hividianana fiarovana amin'ny masoandro.", fr: "Il collecte de l'argent pour des voiles d'ombrage → b." } },
        { n: 10, q: "In dem zweiten Text geht es darum, dass …", opts: ["ältere Menschen Jugendlichen etwas beibringen.", "Jugendliche Senioren beim Smartphone helfen.", "eine Schule neue Smartphones kauft."], a: "b",
          exp: { mg: "Ny <b>tanora</b> no mampianatra ny <b>zokiolona</b>, fa tsy ny mifamadika.", fr: "Les jeunes aident les seniors, pas l'inverse → b." } },
        { n: 11, q: "Die Kurse …", opts: ["kosten für die Senioren nichts.", "finden in der Schule statt.", "sind nur für Schülerinnen."], a: "a",
          exp: { mg: "« für die Teilnehmenden gratis » = maimaim-poana. Ao amin'ny <i>Gemeinschaftszentrum</i> fa tsy any an-tsekoly.", fr: "« gratis » → a. Lieu : centre communautaire, pas l'école." } },
        { n: 12, q: "Die Jugendlichen …", opts: ["bekommen Geld für ihre Hilfe.", "erhalten ein Dokument für Bewerbungen.", "müssen eine Warteliste führen."], a: "b",
          exp: { mg: "« eine Bestätigung … für Bewerbungen » = taratasy fanamarinana azo ampiarahina amin'ny fangatahana asa.", fr: "Une attestation pour leurs candidatures → b." } }
      ] },
    { id: "L3", nom: "Teil 3", temps: 10, type: "match",
      consigne: "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall wählen Sie 0.",
      contexte: "Ihre Kolleginnen und Kollegen planen ihren Urlaub und suchen passende Angebote.",
      annonces: {
        a: "<b>Jugendherberge Bodensee</b><br>Mehrbettzimmer ab 28 € pro Nacht inkl. Frühstück. Ideal für junge Leute mit kleinem Budget.",
        b: "<b>Wanderwoche in den Alpen</b><br>7 Tage mit Bergführer, Hütten-Übernachtung, für geübte Wanderer. Kinder ab 14 Jahren.",
        c: "<b>Ferienhof Sonnenwiese</b><br>Urlaub auf dem Bauernhof: Tiere füttern, Ponyreiten, großer Spielplatz – das Paradies für Familien mit kleinen Kindern!",
        d: "<b>Städtereisen mit dem Bus</b><br>Wien, Prag, Budapest – 4 Tage inkl. Hotel und Stadtführung. Abfahrt jeden Freitag.",
        e: "<b>Sprachferien in Malta</b><br>Englischkurs am Vormittag, Strand am Nachmittag. 2 Wochen inkl. Gastfamilie.",
        f: "<b>Hotel Seeblick</b><br>Unser Haus ist komplett barrierefrei: breite Türen, Aufzug, Bäder für Rollstuhlfahrer.",
        g: "<b>Kochurlaub in der Toskana</b><br>Italienisch kochen lernen mit einer echten Mamma! Kleine Gruppen, eine Woche.",
        h: "<b>Radweg-Pakete</b><br>Entlang der Donau von Passau nach Wien – wir transportieren Ihr Gepäck von Hotel zu Hotel.",
        i: "<b>Last-Minute-Flüge</b><br>Spanien und Griechenland ab 49 €! Nur online buchbar: www.flug-schnell.de",
        j: "<b>Wellnesshotel Waldruhe</b><br>Sauna, Massage, Yoga. Erwachsenenhotel – Kinder sind leider nicht erlaubt."
      },
      exemple: { q: "Paula möchte mehrere Hauptstädte in kurzer Zeit sehen.", a: "d" },
      items: [
        { n: 13, q: "Familie Kraus reist mit zwei kleinen Kindern und sucht Urlaub mit Tieren.", a: "c", exp: { mg: "Ankizy kely + biby → toeram-pambolena (c).", fr: "Enfants + animaux → ferme (c)." } },
        { n: 14, q: "Tom möchte Rad fahren, aber sein Gepäck nicht selbst tragen.", a: "h", exp: { mg: "« wir transportieren Ihr Gepäck » = izy ireo no mitondra ny entanao → h.", fr: "Bagages transportés → h." } },
        { n: 15, q: "Frau Öztürk sitzt im Rollstuhl und sucht ein passendes Hotel.", a: "f", exp: { mg: "« barrierefrei … Rollstuhlfahrer » → f.", fr: "Hôtel accessible en fauteuil → f." } },
        { n: 16, q: "Lukas ist Student und hat wenig Geld für die Übernachtung.", a: "a", exp: { mg: "« kleinem Budget », 28 € → a.", fr: "Petit budget → auberge (a)." } },
        { n: 17, q: "Ana möchte im Urlaub ihr Englisch verbessern.", a: "e", exp: { mg: "Englischkurs → e.", fr: "Cours d'anglais → e." } },
        { n: 18, q: "Herr Vogel möchte sich mit seinem achtjährigen Sohn im Wellnesshotel erholen.", a: "0", exp: { mg: "Ny j dia <b>tsy mandray ankizy</b>. Tsy misy filazana hafa mety → 0.", fr: "Le wellness j n'accepte pas d'enfants → 0." } },
        { n: 19, q: "Mia möchte im Urlaub neue Rezepte lernen.", a: "g", exp: { mg: "« kochen lernen » → g.", fr: "Apprendre à cuisiner → g." } }
      ] },
    { id: "L4", nom: "Teil 4", temps: 15, type: "jn",
      consigne: "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für ein Verbot?",
      contexte: "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über ein Verbot von Fast Food in Schulkantinen.",
      exemple: { nom: "Birgit, 39, Hannover", texte: "Als Mutter sehe ich jeden Tag, was meine Kinder in der Schule essen: Pommes, Burger, Pizza. Die Schule sollte gesunde Ernährung fördern – also weg mit dem Fast Food!", a: "Ja" },
      items: [
        { n: 20, nom: "Jan, 16, Kassel", q: "Ich esse gern mal einen Burger, aber nicht jeden Tag. Jeder soll selbst entscheiden können, was er isst. Verbote finde ich in diesem Fall übertrieben.", a: "n",
          exp: { mg: "« Verbote … übertrieben » = mihoatra ny fandrarana → Nein.", fr: "Les interdictions sont exagérées → Nein." } },
        { n: 21, nom: "Dr. Elke Sommer, 55, Linz", q: "Als Kinderärztin behandle ich immer mehr Kinder mit Übergewicht. Die Schule ist ein Ort, an dem man lernt – auch, wie man sich gesund ernährt. Fast Food hat dort nichts zu suchen.", a: "j",
          exp: { mg: "« hat dort nichts zu suchen » = tsy tokony ho eo mihitsy → Ja.", fr: "« hat dort nichts zu suchen » → pour l'interdiction (Ja)." } },
        { n: 22, nom: "Murat, 42, Duisburg", q: "Ich verstehe die Sorgen der Eltern. Trotzdem: Wenn es in der Kantine keine Pommes gibt, kaufen die Schüler sie eben am Kiosk gegenüber. Besser wäre ein gesundes Angebot, das auch gut schmeckt.", a: "n",
          exp: { mg: "Fandrika: mahatakatra izy, fa « Trotzdem » … hividy any ivelany ihany ny mpianatra → tsy mahomby ny fandrarana → Nein.", fr: "Après « Trotzdem » : inutile, ils achèteront ailleurs → Nein." } },
        { n: 23, nom: "Clara, 17, Bremen", q: "Früher fand ich das Fast-Food-Verbot an unserer Schule blöd. Aber seit es weg ist, fühle ich mich nachmittags viel fitter. Ich würde es jeder Schule empfehlen.", a: "j",
          exp: { mg: "Nanova hevitra izy: « Ich würde es jeder Schule empfehlen » → Ja.", fr: "Elle a changé d'avis et le recommande → Ja." } },
        { n: 24, nom: "Werner, 63, Salzburg", q: "Wir haben als Kinder Brot von zu Hause mitgebracht, und das war gut so. Heute ist alles so bequem geworden. Ich bin klar dafür, dass die Schulen diese ungesunden Sachen nicht mehr verkaufen.", a: "j",
          exp: { mg: "« Ich bin klar dafür » = manohana mazava izy → Ja.", fr: "« klar dafür » → Ja." } },
        { n: 25, nom: "Nina, 28, Leipzig", q: "Ein Verbot ist zu einfach. Man müsste mit den Kindern kochen, ihnen erklären, was gesund ist. Wissen ist wichtiger als Verbote.", a: "n",
          exp: { mg: "« Wissen ist wichtiger als Verbote » = ny fahalalana no manan-danja kokoa noho ny fandrarana → Nein.", fr: "Le savoir compte plus que les interdits → Nein." } },
        { n: 26, nom: "Paolo, 45, Bozen", q: "Mein Sohn ist Sportler und braucht viel Energie. Ab und zu ein Stück Pizza schadet doch niemandem. Man kann es auch übertreiben mit den Regeln.", a: "n",
          exp: { mg: "« schadet doch niemandem » + « übertreiben mit den Regeln » → manohitra → Nein.", fr: "Ça ne fait de mal à personne → Nein." } }
      ] },
    { id: "L5", nom: "Teil 5", temps: 10, type: "mc",
      consigne: "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      contexte: "Sie ziehen in ein Studentenwohnheim und lesen die Hausordnung.",
      texte: `<div class="rules"><h3>HAUSORDNUNG – WOHNHEIM AM PARK</h3>
<p><b>Ruhezeiten:</b> Von 22:00 bis 7:00 Uhr sowie an Sonn- und Feiertagen ganztägig ist Rücksicht auf die Mitbewohner zu nehmen. Partys in den Gemeinschaftsräumen sind beim Hausmeister mindestens eine Woche vorher anzumelden und müssen um 23:00 Uhr enden.</p>
<p><b>Küche:</b> Jede Etage teilt sich eine Gemeinschaftsküche. Geschirr ist nach der Benutzung sofort zu spülen. Lebensmittel im Kühlschrank müssen mit Namen und Datum beschriftet werden. Nicht beschriftete Lebensmittel werden freitags entsorgt.</p>
<p><b>Müll:</b> Der Müll ist getrennt in den Containern im Hof zu entsorgen. Glas darf nur werktags zwischen 8:00 und 20:00 Uhr eingeworfen werden.</p>
<p><b>Gäste:</b> Besuch ist jederzeit willkommen. Gäste dürfen maximal drei Nächte hintereinander im Wohnheim übernachten. Längere Aufenthalte sind beim Hausmeister zu beantragen.</p>
<p><b>Fahrräder:</b> Fahrräder sind im Fahrradraum im Keller abzustellen. Das Abstellen im Treppenhaus oder in den Fluren ist aus Sicherheitsgründen verboten.</p>
<p><b>Waschraum:</b> Die Waschmaschinen im Erdgeschoss können täglich von 7:00 bis 22:00 Uhr benutzt werden. Waschmarken erhalten Sie im Büro der Verwaltung.</p></div>`,
      items: [
        { n: 27, q: "Wer eine Party feiern möchte, …", opts: ["muss sie vorher beim Hausmeister anmelden.", "darf bis Mitternacht feiern.", "muss am Sonntag feiern."], a: "a",
          exp: { mg: "« beim Hausmeister … anzumelden » = tsy maintsy ampahafantarina mialoha ny mpiandraikitra.", fr: "Il faut l'annoncer au concierge une semaine avant → a." } },
        { n: 28, q: "Lebensmittel ohne Namen im Kühlschrank …", opts: ["darf jeder essen.", "werden am Freitag weggeworfen.", "bringt der Hausmeister ins Büro."], a: "b",
          exp: { mg: "« werden freitags entsorgt » = ariana isaky ny zoma.", fr: "« freitags entsorgt » = jetés le vendredi → b." } },
        { n: 29, q: "Besucher …", opts: ["dürfen nicht im Wohnheim schlafen.", "können bis zu drei Nächte bleiben.", "müssen sich im Büro anmelden."], a: "b",
          exp: { mg: "« maximal drei Nächte » = alina 3 farafahabetsany.", fr: "Trois nuits maximum → b." } },
        { n: 30, q: "Sein Fahrrad …", opts: ["kann man im Flur abstellen.", "muss man in den Keller bringen.", "darf man nicht ins Wohnheim mitbringen."], a: "b",
          exp: { mg: "« im Fahrradraum im Keller » = ao amin'ny efitrano ambanin'ny tany. Voarara ao amin'ny lalantsara.", fr: "Dans le local à vélos au sous-sol → b." } }
      ] }
  ] },

  hoeren: { temps: 40, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 2, type: "mixed",
      consigne: "Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
      clips: [
        { id: "b1m2-h1-t1", titre: "Text 1", script: [{ s: "m", n: "Herr Krämer", t: "Hallo Frau Rasoa, hier ist Thomas Krämer von der Firma Elektro-Nord. Ich rufe wegen Ihrer Bewerbung als Bürokauffrau an. Wir würden Sie gern zu einem Vorstellungsgespräch einladen, und zwar am Dienstag, den zwölften, um zehn Uhr. Bitte bringen Sie Ihre Zeugnisse im Original mit. Wenn der Termin nicht passt, schreiben Sie mir einfach eine kurze E-Mail. Ich freue mich, Sie kennenzulernen. Auf Wiederhören." }],
          items: [
            { n: 1, type: "rf", q: "Frau Rasoa wird zu einem Gespräch eingeladen.", a: "r", exp: { mg: "« zu einem Vorstellungsgespräch einladen » = asaina hanao resadresaka momba ny asa.", fr: "Invitée à un entretien → Richtig." } },
            { n: 2, type: "mc", q: "Wenn Frau Rasoa keine Zeit hat, soll sie …", opts: ["anrufen.", "eine E-Mail schreiben.", "persönlich vorbeikommen."], a: "b", exp: { mg: "« schreiben Sie mir … eine kurze E-Mail ».", fr: "« schreiben Sie mir eine E-Mail » → b." } }
          ] },
        { id: "b1m2-h1-t2", titre: "Text 2", script: [{ s: "f", n: "Durchsage", t: "Sehr geehrte Fahrgäste, wegen einer Signalstörung fährt die S-Bahn-Linie drei heute nur bis zum Hauptbahnhof. Zwischen Hauptbahnhof und Flughafen fahren Ersatzbusse. Bitte rechnen Sie mit etwa zwanzig Minuten mehr Fahrzeit. Die Ersatzbusse fahren vor dem Haupteingang ab. Wir bitten um Ihr Verständnis." }],
          items: [
            { n: 3, type: "rf", q: "Die S-Bahn fährt heute nicht bis zum Flughafen.", a: "r", exp: { mg: "« nur bis zum Hauptbahnhof » → tsy tonga any amin'ny seranam-piaramanidina.", fr: "Seulement jusqu'à la gare centrale → Richtig." } },
            { n: 4, type: "mc", q: "Die Fahrgäste zum Flughafen sollen …", opts: ["ein Taxi nehmen.", "mit dem Bus fahren.", "auf die nächste S-Bahn warten."], a: "b", exp: { mg: "« Ersatzbusse » = bus misolo toerana.", fr: "Bus de remplacement → b." } }
          ] },
        { id: "b1m2-h1-t3", titre: "Text 3", script: [{ s: "f", n: "Radio", t: "Und hier noch ein Tipp für das Wochenende: Am Samstag und Sonntag findet im Stadtpark das große Herbstfest statt. Es gibt Musik, Spiele für Kinder und viele Stände mit Essen aus aller Welt. Der Eintritt ist frei. Wichtig: Parkplätze gibt es keine, kommen Sie also bitte mit dem Fahrrad oder mit dem Bus. Das Fest beginnt an beiden Tagen um elf Uhr." }],
          items: [
            { n: 5, type: "rf", q: "Man muss für das Fest Eintritt bezahlen.", a: "f", exp: { mg: "« Der Eintritt ist frei » = maimaim-poana ny fidirana.", fr: "Entrée gratuite → Falsch." } },
            { n: 6, type: "mc", q: "Die Besucher sollen …", opts: ["mit dem Auto kommen.", "nicht mit dem Auto kommen.", "Essen mitbringen."], a: "b", exp: { mg: "« Parkplätze gibt es keine » → aza mitondra fiara.", fr: "Pas de parking → ne pas venir en voiture → b." } }
          ] },
        { id: "b1m2-h1-t4", titre: "Text 4", script: [{ s: "f", n: "Maria", t: "Hi Paul, hier ist Maria. Du, ich habe gerade gesehen, dass mein Deutschkurs morgen nicht im Raum zwölf ist, sondern im Raum fünfundzwanzig, im zweiten Stock. Ich wollte dir das nur sagen, weil du doch auch kommst. Ach ja, und kannst du mir bitte mein Wörterbuch mitbringen? Ich habe es letzte Woche bei dir vergessen. Danke dir! Bis morgen!" }],
          items: [
            { n: 7, type: "rf", q: "Der Kurs findet morgen in einem anderen Raum statt.", a: "r", exp: { mg: "Efitrano 25 fa tsy 12 intsony.", fr: "Salle 25 au lieu de 12 → Richtig." } },
            { n: 8, type: "mc", q: "Was soll Paul mitbringen?", opts: ["ein Buch für den Kurs", "Marias Wörterbuch", "seine Hausaufgaben"], a: "b", exp: { mg: "« mein Wörterbuch mitbringen » = ny rakibolanan'i Maria.", fr: "Le dictionnaire de Maria → b." } }
          ] },
        { id: "b1m2-h1-t5", titre: "Text 5", script: [{ s: "m", n: "Wetter", t: "Das Wetter für morgen, Mittwoch: Am Vormittag ist es in ganz Österreich noch sonnig und trocken. Am Nachmittag kommen von Westen Wolken, und in Vorarlberg und Tirol beginnt es zu regnen. Im Osten bleibt es bis zum Abend schön. Die Temperaturen erreichen achtzehn bis dreiundzwanzig Grad. In den Bergen weht ein starker Wind." }],
          items: [
            { n: 9, type: "rf", q: "Morgen regnet es den ganzen Tag in ganz Österreich.", a: "f", exp: { mg: "Maraina: masoandro. Tolakandro: orana any andrefana ihany.", fr: "Soleil le matin, pluie seulement l'après-midi à l'ouest → Falsch." } },
            { n: 10, type: "mc", q: "Im Osten …", opts: ["gibt es starken Wind.", "ist das Wetter bis zum Abend gut.", "regnet es am Nachmittag."], a: "b", exp: { mg: "« Im Osten bleibt es bis zum Abend schön ».", fr: "Beau jusqu'au soir à l'est → b." } }
          ] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 1, type: "mc", lecture: 60,
      consigne: "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
      contexte: "Sie sind an Ihrem ersten Arbeitstag in einer Firma und hören die Begrüßung der neuen Mitarbeiter.",
      clips: [{ id: "b1m2-h2", titre: "Begrüßung", script: [
        { s: "f", n: "Frau Berg", t: "Guten Morgen und herzlich willkommen bei Sonnfeld Logistik! Mein Name ist Katrin Berg, ich arbeite in der Personalabteilung. Heute ist Ihr erster Tag, und ich möchte Ihnen kurz erklären, wie der Tag abläuft." },
        { s: "f", n: "Frau Berg", t: "Zuerst bekommen Sie gleich hier im Raum Ihren Mitarbeiterausweis. Damit können Sie das Gebäude betreten und in der Kantine bezahlen. Bitte verlieren Sie ihn nicht, ein neuer Ausweis kostet fünfzehn Euro." },
        { s: "f", n: "Frau Berg", t: "Um zehn Uhr machen wir einen Rundgang durch das Lager. Dafür brauchen Sie Sicherheitsschuhe. Die Schuhe haben wir für Sie vorbereitet, Sie finden sie im Raum neben der Treppe. Ohne diese Schuhe dürfen Sie das Lager nicht betreten." },
        { s: "f", n: "Frau Berg", t: "Mittagspause ist um zwölf Uhr. Heute lädt die Firma Sie in der Kantine zum Essen ein. Am Nachmittag lernen Sie dann Ihre Teams kennen. Ihre Arbeitszeiten besprechen Sie direkt mit Ihren Teamleitern." },
        { s: "f", n: "Frau Berg", t: "Ach ja, noch etwas: Am Freitag gibt es ein Sommerfest für alle Mitarbeiter. Familie und Partner sind auch herzlich eingeladen. Haben Sie noch Fragen? Nein? Dann fangen wir an!" }],
        items: [
          { n: 11, type: "mc", q: "Mit dem Mitarbeiterausweis kann man …", opts: ["kostenlos essen.", "in das Gebäude kommen.", "Arbeitszeiten eintragen."], a: "b", exp: { mg: "« Damit können Sie das Gebäude betreten » = afaka miditra ao amin'ny trano.", fr: "Entrer dans le bâtiment → b." } },
          { n: 12, type: "mc", q: "Die Sicherheitsschuhe …", opts: ["muss man selbst kaufen.", "liegen in einem Raum bereit.", "braucht man nur im Büro."], a: "b", exp: { mg: "« Sie finden sie im Raum neben der Treppe » = efa voaomana ao amin'ny efitrano iray.", fr: "Prêtes dans la salle à côté de l'escalier → b." } },
          { n: 13, type: "mc", q: "Das Mittagessen heute …", opts: ["bezahlt die Firma.", "muss man mitbringen.", "gibt es erst um eins."], a: "a", exp: { mg: "« lädt die Firma Sie … ein » = ny orinasa no mandoa.", fr: "L'entreprise invite → a." } },
          { n: 14, type: "mc", q: "Über die Arbeitszeiten spricht man …", opts: ["mit Frau Berg.", "mit dem Teamleiter.", "am Freitag."], a: "b", exp: { mg: "« direkt mit Ihren Teamleitern ».", fr: "Avec le chef d'équipe → b." } },
          { n: 15, type: "mc", q: "Zum Sommerfest …", opts: ["dürfen nur Mitarbeiter kommen.", "kann man auch die Familie mitbringen.", "muss man sich anmelden."], a: "b", exp: { mg: "« Familie und Partner sind auch … eingeladen ».", fr: "La famille est aussi invitée → b." } }
        ] }] },
    { id: "H3", nom: "Teil 3", ecoutes: 1, type: "rf", lecture: 60,
      consigne: "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen Richtig oder Falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
      contexte: "Sie sind im Supermarkt und hören, wie sich zwei Bekannte über eine neue Wohnung unterhalten.",
      clips: [{ id: "b1m2-h3", titre: "Gespräch", script: [
        { s: "f", n: "Sandra", t: "Hallo Dennis! Das ist ja ein Zufall. Ich habe gehört, du bist umgezogen?" },
        { s: "m", n: "Dennis", t: "Hallo Sandra! Ja, seit drei Wochen wohne ich in der Gartenstraße. Endlich habe ich eine größere Wohnung gefunden." },
        { s: "f", n: "Sandra", t: "Toll! Wie viele Zimmer hast du jetzt?" },
        { s: "m", n: "Dennis", t: "Drei Zimmer, Küche und Bad. Und einen Balkon nach Süden. Die Miete ist zwar ein bisschen höher als vorher, aber dafür muss ich nicht mehr mit dem Auto zur Arbeit fahren. Ich kann jetzt zu Fuß gehen." },
        { s: "f", n: "Sandra", t: "Das ist ja praktisch. Und wie sind die Nachbarn?" },
        { s: "m", n: "Dennis", t: "Die meisten kenne ich noch nicht. Aber die Frau unter mir ist sehr nett. Sie hat mir am ersten Tag einen Kuchen gebracht. Nur der Mann neben mir hört abends oft laute Musik." },
        { s: "f", n: "Sandra", t: "Oh nein. Hast du schon mit ihm gesprochen?" },
        { s: "m", n: "Dennis", t: "Noch nicht. Ich will erst mal abwarten. Vielleicht war es nur am Wochenende so." },
        { s: "f", n: "Sandra", t: "Und machst du eine Einweihungsparty?" },
        { s: "m", n: "Dennis", t: "Ja, eigentlich wollte ich nächsten Samstag feiern. Aber da muss meine Schwester ins Krankenhaus, eine kleine Operation. Deshalb mache ich die Party erst Ende des Monats. Du bekommst natürlich eine Einladung!" },
        { s: "f", n: "Sandra", t: "Super, ich komme gern. Soll ich etwas mitbringen?" },
        { s: "m", n: "Dennis", t: "Vielleicht einen Salat? Um die Getränke kümmere ich mich." }],
        items: [
          { n: 16, q: "Dennis wohnt seit drei Monaten in der neuen Wohnung.", a: "f", exp: { mg: "« seit drei <b>Wochen</b> » = herinandro 3, tsy volana 3.", fr: "Trois semaines, pas trois mois → Falsch." } },
          { n: 17, q: "Die neue Wohnung ist teurer als die alte.", a: "r", exp: { mg: "« Die Miete ist … höher als vorher » = lafo kokoa ny hofany.", fr: "Loyer plus élevé → Richtig." } },
          { n: 18, q: "Dennis fährt jetzt mit dem Auto zur Arbeit.", a: "f", exp: { mg: "« zu Fuß gehen » = mandeha an-tongotra izy ankehitriny.", fr: "Il va à pied → Falsch." } },
          { n: 19, q: "Eine Nachbarin hat Dennis etwas gebracht.", a: "r", exp: { mg: "« einen Kuchen gebracht » = nitondra mofo mamy.", fr: "Un gâteau → Richtig." } },
          { n: 20, q: "Dennis hat sich schon über die laute Musik beschwert.", a: "f", exp: { mg: "« Noch nicht » = mbola tsy niresaka taminy izy.", fr: "« Noch nicht » → Falsch." } },
          { n: 21, q: "Die Party findet nächsten Samstag statt.", a: "f", exp: { mg: "« eigentlich … aber » → nafindra amin'ny faran'ny volana.", fr: "Reportée à la fin du mois → Falsch." } },
          { n: 22, q: "Sandra soll etwas zu essen mitbringen.", a: "r", exp: { mg: "« Vielleicht einen Salat? » = salady → sakafo.", fr: "Une salade → Richtig." } }
        ] }] },
    { id: "H4", nom: "Teil 4", ecoutes: 2, type: "who", lecture: 60,
      consigne: "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
      contexte: "Die Moderatorin der Radiosendung „Familie heute“ diskutiert mit dem Vater Stefan Roth und der Lehrerin Monika Weiß zum Thema „Sollen Kinder Taschengeld bekommen?“.",
      personnes: { a: "Moderatorin", b: "Stefan Roth", c: "Monika Weiß" },
      exemple: { q: "Fast alle Kinder in Deutschland bekommen Taschengeld.", a: "a" },
      clips: [{ id: "b1m2-h4", titre: "Diskussion", script: [
        { s: "f", n: "Moderatorin", t: "Herzlich willkommen zu „Familie heute“. Fast alle Kinder in Deutschland bekommen Taschengeld, aber wie viel, ab wann und wofür, darüber streiten viele Eltern. Bei mir sind heute Stefan Roth, Vater von drei Kindern, und Monika Weiß, Grundschullehrerin. Herr Roth, ab wann bekommen Ihre Kinder Geld?" },
        { s: "m", n: "Stefan Roth", t: "Ab der Einschulung, also mit sechs Jahren. Am Anfang einen Euro pro Woche. Ich finde, Kinder sollten früh lernen, mit Geld umzugehen. Wer als Kind lernt zu sparen, macht als Erwachsener weniger Schulden." },
        { s: "f", n: "Moderatorin", t: "Frau Weiß, sehen Sie das auch so?" },
        { s: "f2", n: "Monika Weiß", t: "Grundsätzlich ja. Aber ich erlebe in der Schule, dass manche Kinder sehr viel Geld haben und andere fast nichts. Das führt manchmal zu Neid in der Klasse. Deshalb wäre es gut, wenn Eltern sich an Empfehlungen halten würden." },
        { s: "f", n: "Moderatorin", t: "Solche Empfehlungen gibt es ja, zum Beispiel vom Jugendamt. Herr Roth, dürfen Ihre Kinder mit dem Geld machen, was sie wollen?" },
        { s: "m", n: "Stefan Roth", t: "Ja, das ist mir wichtig. Wenn mein Sohn alles für Süßigkeiten ausgibt, dann ist das sein Fehler, und er lernt daraus. Taschengeld sollte man auch nicht als Strafe streichen, das finde ich falsch." },
        { s: "f2", n: "Monika Weiß", t: "Da stimme ich zu. Ich möchte aber noch etwas ergänzen: Kinder sollten auch verstehen, dass Geld nicht einfach so kommt. Man kann zum Beispiel mit ihnen über die Arbeit der Eltern sprechen." },
        { s: "f", n: "Moderatorin", t: "Viele Eltern bezahlen ihre Kinder ja auch für Hilfe im Haushalt. Was halten Sie davon?" },
        { s: "f2", n: "Monika Weiß", t: "Nichts. Im Haushalt helfen alle in der Familie mit, das ist selbstverständlich. Dafür sollte es kein Geld geben." },
        { s: "m", n: "Stefan Roth", t: "Bei uns gibt es eine Ausnahme: Wenn die Kinder größere Arbeiten machen, wie das Auto waschen, verdienen sie ein bisschen extra. So merken sie, dass sich Arbeit lohnt." },
        { s: "f", n: "Moderatorin", t: "Interessant, wie unterschiedlich das in Familien gelöst wird. Vielen Dank Ihnen beiden." }],
        items: [
          { n: 23, q: "Wer früh mit Geld umgehen lernt, hat später weniger Schulden.", a: "b", exp: { mg: "Roth: « weniger Schulden » → b.", fr: "Roth → b." } },
          { n: 24, q: "Unterschiedlich viel Taschengeld kann Probleme in der Klasse machen.", a: "c", exp: { mg: "Weiß: « führt … zu Neid in der Klasse » → c.", fr: "Weiß (jalousie en classe) → c." } },
          { n: 25, q: "Es gibt offizielle Empfehlungen zur Höhe des Taschengeldes.", a: "a", exp: { mg: "Ny Moderatorin: « Solche Empfehlungen gibt es ja … vom Jugendamt » → a.", fr: "La modératrice → a." } },
          { n: 26, q: "Kinder sollen selbst entscheiden, wofür sie ihr Geld ausgeben.", a: "b", exp: { mg: "Roth: « dürfen … machen, was sie wollen? – Ja ».", fr: "Roth → b." } },
          { n: 27, q: "Kinder sollten wissen, woher das Geld der Familie kommt.", a: "c", exp: { mg: "Weiß: « dass Geld nicht einfach so kommt … Arbeit der Eltern ».", fr: "Weiß → c." } },
          { n: 28, q: "Viele Eltern geben ihren Kindern Geld für Hausarbeit.", a: "a", exp: { mg: "Ny Moderatorin no nanontany izany → a.", fr: "La modératrice → a." } },
          { n: 29, q: "Für Hilfe im Haushalt sollte man nicht bezahlen.", a: "c", exp: { mg: "Weiß: « Dafür sollte es kein Geld geben ».", fr: "Weiß → c." } },
          { n: 30, q: "Für besondere Aufgaben können Kinder etwas verdienen.", a: "b", exp: { mg: "Roth: « Auto waschen … ein bisschen extra ».", fr: "Roth → b." } }
        ] }] }
  ] },

  schreiben: { temps: 60, aufgaben: [
    { id: "S1", nom: "Aufgabe 1", temps: 20, mots: 80, type: "E-Mail (informell)",
      consigne: `<p>Sie haben vor zwei Wochen eine neue Arbeitsstelle angefangen. Ihr Freund / Ihre Freundin möchte wissen, wie es Ihnen geht.</p>
<ul><li><b>Beschreiben Sie:</b> Wie ist Ihre neue Arbeit?</li><li><b>Begründen Sie:</b> Was gefällt Ihnen an der Arbeit besonders gut und warum?</li><li><b>Machen Sie einen Vorschlag</b> für ein Treffen.</li></ul>
<p class="small">Schreiben Sie eine E-Mail (circa 80 Wörter). Schreiben Sie etwas zu allen drei Punkten. Achten Sie auf den Textaufbau (Anrede, Einleitung, Reihenfolge der Inhaltspunkte, Schluss).</p>`,
      checklist: ["Anrede : Liebe … / Lieber …,", "Fampidirana (Wie geht's?)", "Hevitra 1 : asanao vaovao", "Hevitra 2 : ny tianao + ANTONY (weil / denn)", "Hevitra 3 : soso-kevitra hihaona", "Famaranana + Viele Grüße + anaranao", "Eo amin'ny 80 teny"],
      redemittel: ["Danke für deine Nachricht!", "Seit zwei Wochen arbeite ich als … bei …", "Meine Kollegen sind sehr nett und …", "Besonders gut gefällt mir, dass …, weil …", "Hast du am Wochenende Zeit? Wir könnten …", "Ich freue mich auf dich!"],
      modele: `Lieber Tom,

danke für deine Nachricht! Mir geht es sehr gut. Seit zwei Wochen arbeite ich als Verkäuferin in einer Buchhandlung im Zentrum. Das Geschäft ist klein, aber sehr schön, und meine Kollegen sind alle nett.

Besonders gut gefällt mir, dass ich viel mit Kunden spreche, weil ich so jeden Tag mein Deutsch verbessern kann. Außerdem darf ich die neuen Bücher zuerst lesen!

Hast du am Samstag Zeit? Wir könnten zusammen in das Café neben der Buchhandlung gehen.

Viele Grüße
Mialy` },
    { id: "S2", nom: "Aufgabe 2", temps: 25, mots: 80, type: "Diskussionsbeitrag (Meinung)",
      consigne: `<p>Sie haben im Fernsehen eine Diskussionssendung zum Thema „Arbeiten im Homeoffice“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung:</p>
<div class="guest"><div class="guest-h">www.tv-forum-aktuell.de · Gästebuch</div><div class="guest-b"><b>Sabine</b> · 03.05. 20:15 Uhr<br>Ich arbeite seit einem Jahr nur noch zu Hause. Ich spare viel Zeit und Geld für die Fahrt. Aber ehrlich gesagt fehlen mir meine Kollegen. Manchmal fühle ich mich ziemlich allein.</div></div>
<p class="small">Schreiben Sie nun Ihre Meinung zum Thema (circa 80 Wörter).</p>`,
      checklist: ["Valio i Sabine (Ich kann Sabine gut verstehen …)", "Hevitrao mazava (Meiner Meinung nach …)", "Antony 2 farafahakeliny (weil, denn, deshalb)", "Ohatra iray avy amin'ny fiainanao", "Famaranana", "TSY MISY Anrede na Gruß", "Eo amin'ny 80 teny"],
      redemittel: ["Ich kann Sabine gut verstehen.", "Ein Vorteil vom Homeoffice ist, dass …", "Ein Nachteil ist aber, dass …", "Meiner Meinung nach ist eine Mischung am besten.", "Bei mir ist das so: …", "Deshalb finde ich, dass …"],
      modele: `Ich kann Sabine gut verstehen. Homeoffice hat viele Vorteile: Man spart Zeit, weil man nicht im Stau steht, und man kann sich die Arbeit freier einteilen.

Aber der Kontakt mit den Kollegen ist auch sehr wichtig. Im Büro kann man schnell eine Frage stellen, und in der Pause redet man auch über private Dinge. Bei mir ist das so: Wenn ich zu lange allein arbeite, bin ich weniger motiviert.

Deshalb finde ich, dass zwei oder drei Tage Homeoffice pro Woche die beste Lösung sind.` },
    { id: "S3", nom: "Aufgabe 3", temps: 15, mots: 40, type: "E-Mail (formell)",
      consigne: `<p>Ihre Vermieterin, Frau Klein, hat Ihnen geschrieben, dass am Donnerstag um 9 Uhr ein Handwerker in Ihre Wohnung kommt. Sie sind an diesem Tag aber nicht zu Hause.</p>
<p>Schreiben Sie an Frau Klein. Entschuldigen Sie sich höflich und schlagen Sie einen anderen Termin vor.</p>
<p class="small">Schreiben Sie eine E-Mail (circa 40 Wörter). Vergessen Sie nicht die Anrede und den Gruß am Schluss.</p>`,
      checklist: ["Sehr geehrte Frau Klein, / Liebe Frau Klein,", "Misaotra noho ny hafatra", "Miala tsiny (Leider … / Es tut mir leid)", "Antony + fotoana hafa", "« Sie / Ihnen » foana", "Mit freundlichen Grüßen", "Eo amin'ny 40 teny"],
      redemittel: ["Vielen Dank für Ihre Nachricht.", "Leider bin ich am Donnerstag nicht zu Hause, weil …", "Es tut mir sehr leid.", "Würde Ihnen Freitagnachmittag passen?", "Mit freundlichen Grüßen"],
      modele: `Sehr geehrte Frau Klein,

vielen Dank für Ihre Nachricht. Leider bin ich am Donnerstag nicht zu Hause, weil ich einen Arzttermin in einer anderen Stadt habe. Das tut mir sehr leid. Könnte der Handwerker vielleicht am Freitag nach 14 Uhr kommen?

Mit freundlichen Grüßen
Andry Rakoto` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voavaly ve ny hevitra rehetra? Karazana lahatsoratra mety? Halavany mety? · Tous les points traités ?" },
    { nom: "Kohärenz", desc: "Voalamina tsara, misy teny mampifandray (weil, deshalb, außerdem…) · Structure et connecteurs" },
    { nom: "Wortschatz", desc: "Voambolana maro sy mifanaraka · Vocabulaire varié" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana: verbe toerana faha-2, verbe farany aorian'ny weil/dass · Grammaire" }
  ] },

  sprechen: { preparation: 15, teile: [
    { id: "P1", nom: "Teil 1 – Gemeinsam etwas planen", duree: 3,
      consigne: `<p>Ihr Deutschkurs möchte am Ende des Kurses einen gemeinsamen Ausflug machen. Sie sollen den Ausflug zusammen mit Ihrem Partner / Ihrer Partnerin planen.</p>
<div class="plan"><b>Kursausflug planen</b><ul><li>Wohin fahren?</li><li>Wann? (Tag, Uhrzeit?)</li><li>Wie hinkommen?</li><li>Was mitnehmen?</li><li>…</li></ul></div>`,
      partenaire: [
        { id: "b1m2-p1-1", t: "Hallo! Also, wir sollen den Kursausflug planen. Wohin könnten wir denn fahren? Ich finde einen See schön, da kann man baden." },
        { id: "b1m2-p1-2", t: "Okay, das klingt gut. Und wann sollen wir fahren? Am Samstag oder lieber am Sonntag?" },
        { id: "b1m2-p1-3", t: "Gut. Wie kommen wir dorthin? Mit dem Zug oder sollen wir Autos organisieren?" },
        { id: "b1m2-p1-4", t: "Einverstanden. Und was nehmen wir mit? Ich könnte Getränke kaufen. Was bringst du mit?" },
        { id: "b1m2-p1-5", t: "Perfekt! Dann haben wir alles. Kannst du noch einmal kurz sagen, was wir beschlossen haben?" }
      ],
      redemittel: [
        ["Manolotra · Proposer", ["Ich schlage vor, dass wir …", "Wie wäre es mit …?", "Wir könnten doch …"]],
        ["Manaiky · Accepter", ["Gute Idee!", "Einverstanden.", "Ja, so machen wir das."]],
        ["Mandà am-pahalalam-pomba · Refuser", ["Das finde ich nicht so gut, weil …", "Vielleicht lieber …?", "Am Samstag kann ich leider nicht."]],
        ["Mamarana · Conclure", ["Also, wir fahren am … mit dem … nach …", "Dann machen wir es so!"]]
      ],
      modele: `A: Wohin fahren wir? Ich finde einen See schön.
B: Gute Idee, aber vielleicht ist es zu kalt zum Baden. Wie wäre es mit einer Stadt, zum Beispiel Heidelberg?
A: Hm, ja, Heidelberg ist auch schön. Einverstanden.
B: Wann? Ich schlage Samstag vor.
A: Samstag passt. Um 9 Uhr am Bahnhof?
B: Ja. Mit dem Zug ist es billiger, es gibt ein Gruppenticket.
A: Super. Ich kaufe Getränke. Bringst du Obst und Brötchen mit?
B: Ja, gern. Also: Samstag, 9 Uhr, mit dem Zug nach Heidelberg.` },
    { id: "P2", nom: "Teil 2 – Ein Thema präsentieren", duree: 3,
      consigne: `<p>Wählen Sie ein Thema (Thema 1 oder Thema 2) aus. Sie sollen Ihren Zuhörern ein aktuelles Thema präsentieren. Dazu finden Sie hier fünf Folien.</p>`,
      themes: [
        { titre: "Mit dem Fahrrad zur Arbeit?" },
        { titre: "Selbst kochen oder Essen bestellen?" }
      ],
      redemittel: [
        ["Folie 1 – Fampidirana", ["Ich möchte euch heute das Thema „…“ vorstellen.", "Zuerst …, dann …, am Ende …"]],
        ["Folie 2 – Ny traikefako", ["Ich persönlich …", "Letztes Jahr habe ich …"]],
        ["Folie 3 – Ny fireneko", ["In Madagaskar …", "Bei uns ist es üblich, dass …"]],
        ["Folie 4 – Tombony / fatiantoka", ["Ein Vorteil ist …", "Ein Nachteil ist …", "Meiner Meinung nach …"]],
        ["Folie 5 – Famaranana", ["Damit bin ich am Ende.", "Vielen Dank fürs Zuhören!"]]
      ] },
    { id: "P3", nom: "Teil 3 – Über das Thema sprechen", duree: 2,
      consigne: `<p>Geben Sie Ihrem Partner / Ihrer Partnerin eine Rückmeldung zur Präsentation und stellen Sie eine Frage. Beantworten Sie auch die Frage zu Ihrer Präsentation.</p>`,
      partenaire_presentation: { id: "b1m2-p3-partner", t: "Ich möchte euch heute das Thema „Haustiere in der Wohnung“ vorstellen. Ich selbst habe eine Katze. Sie heißt Mimi und wohnt mit mir in einer kleinen Wohnung. In meinem Heimatland Brasilien haben viele Familien einen Hund, aber meistens leben die Tiere draußen im Garten. Ein Vorteil von Haustieren ist, dass man nie allein ist. Ein Nachteil ist, dass man im Urlaub jemanden braucht, der sich um das Tier kümmert. Ich finde, ein Haustier macht glücklich, aber man muss Zeit haben. Danke fürs Zuhören." },
      question_pour_toi: { id: "b1m2-p3-frage", t: "Danke, deine Präsentation war sehr interessant. Ich habe eine Frage: Was war für dich persönlich die wichtigste Erfahrung mit diesem Thema?" },
      redemittel: [
        ["Valin-kafatra · Feedback", ["Danke für deine Präsentation, sie hat mir gut gefallen.", "Besonders interessant fand ich …"]],
        ["Fanontaniana · Question", ["Ich habe eine Frage: …", "Wie ist das bei dir, wenn …?"]],
        ["Mamaly · Répondre", ["Danke für die Frage.", "Ich denke, …, weil …"]]
      ] }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voaresaka avokoa ny hevitra · tous les points" },
    { nom: "Interaktion", desc: "Mamaly ny namanao · tu réagis au partenaire" },
    { nom: "Wortschatz", desc: "Voambolana · vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · grammaire" },
    { nom: "Aussprache", desc: "Fanononana mazava · prononciation" }
  ] },

  vocab: [
    { de: "die Ausbildung", fr: "la formation professionnelle", mg: "fiofanana ara-asa", ex: "Ich mache eine Ausbildung zum Koch." },
    { de: "der/die Auszubildende", fr: "l'apprenti(e)", mg: "mpianatra asa", ex: "Er ist Auszubildender im Hotel." },
    { de: "streng", fr: "sévère", mg: "henjana", ex: "Mein Chef ist streng, aber fair." },
    { de: "verraten", fr: "révéler", mg: "manambara (tsiambaratelo)", ex: "Er verrät das Rezept nicht." },
    { de: "die Berufsschule", fr: "l'école professionnelle", mg: "sekoly ara-teknika", ex: "Nächste Woche beginnt die Berufsschule." },
    { de: "das Beet", fr: "le parterre / la plate-bande", mg: "tanimboly kely", ex: "Die Mitglieder kümmern sich um die Beete." },
    { de: "zur Verfügung stellen", fr: "mettre à disposition", mg: "manome hampiasaina", ex: "Die Stadt stellt das Dach zur Verfügung." },
    { de: "geduldig", fr: "patient", mg: "mahari-po", ex: "Die jungen Leute sind sehr geduldig." },
    { de: "die Warteliste", fr: "la liste d'attente", mg: "lisitry ny miandry", ex: "Es gibt eine Warteliste." },
    { de: "barrierefrei", fr: "accessible (handicap)", mg: "azon'ny sembana idirana", ex: "Das Hotel ist barrierefrei." },
    { de: "das Gepäck", fr: "les bagages", mg: "entana", ex: "Wir transportieren Ihr Gepäck." },
    { de: "das Übergewicht", fr: "le surpoids", mg: "habibiana loatra", ex: "Viele Kinder haben Übergewicht." },
    { de: "übertrieben", fr: "exagéré", mg: "tafahoatra", ex: "Das Verbot finde ich übertrieben." },
    { de: "die Ruhezeit", fr: "les heures de calme", mg: "fotoana tokony hanginana", ex: "Die Ruhezeit beginnt um 22 Uhr." },
    { de: "entsorgen", fr: "jeter / éliminer", mg: "manary (fako)", ex: "Lebensmittel werden freitags entsorgt." },
    { de: "das Vorstellungsgespräch", fr: "l'entretien d'embauche", mg: "resadresaka fandraisana mpiasa", ex: "Ich habe morgen ein Vorstellungsgespräch." },
    { de: "das Zeugnis", fr: "le certificat / bulletin", mg: "taratasy fanamarinana", ex: "Bringen Sie Ihre Zeugnisse mit." },
    { de: "die Störung", fr: "la panne / perturbation", mg: "fahasimbana / fikorontanana", ex: "Wegen einer Störung fährt die Bahn nicht." },
    { de: "der Ersatzbus", fr: "le bus de remplacement", mg: "bus misolo", ex: "Zwischen den Stationen fahren Ersatzbusse." },
    { de: "der Mitarbeiterausweis", fr: "le badge d'employé", mg: "karatry ny mpiasa", ex: "Verlieren Sie Ihren Ausweis nicht." },
    { de: "das Lager", fr: "l'entrepôt", mg: "trano fitehirizana entana", ex: "Wir machen einen Rundgang durch das Lager." },
    { de: "die Miete", fr: "le loyer", mg: "hofan-trano", ex: "Die Miete ist höher als vorher." },
    { de: "sich beschweren", fr: "se plaindre", mg: "mitaraina", ex: "Er hat sich noch nicht beschwert." },
    { de: "das Taschengeld", fr: "l'argent de poche", mg: "vola am-paosy", ex: "Kinder bekommen Taschengeld." },
    { de: "die Schulden", fr: "les dettes", mg: "trosa", ex: "Er hat keine Schulden." },
    { de: "der Neid", fr: "la jalousie", mg: "fialonana", ex: "Das führt zu Neid in der Klasse." },
    { de: "selbstverständlich", fr: "évident / naturel", mg: "tsy maintsy, mazava ho azy", ex: "Im Haushalt helfen ist selbstverständlich." },
    { de: "sich lohnen", fr: "valoir la peine", mg: "mendrika ny ezaka", ex: "Arbeit lohnt sich." }
  ]
});
