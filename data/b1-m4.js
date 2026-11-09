/* ZERTIFIKAT B1 — Modellsatz 4 · textes originaux H Conseil & Formation */
window.POOLS = window.POOLS || {};
window.POOLS.B1 = window.POOLS.B1 || { sets: [] };
window.POOLS.B1.sets.push({
  id: "b1m4", titre: "Modellsatz 4",
  theme: "Marathon voalohany · Andro 4 isan-kerinandro · Asa an-trano",

  lesen: { temps: 65, teile: [
    { id: "L1", nom: "Teil 1", temps: 10, type: "rf",
      consigne: "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen Richtig oder Falsch?",
      texte: `<div class="blog"><div class="blog-head"><b>LaufenMitLiva.blog</b><span>Vom Sofa zum Marathon</span></div>
<p class="blog-date">Montag, den 15. April</p>
<p>Ich hab's geschafft! Gestern bin ich meinen ersten Marathon gelaufen – 42 Kilometer durch Hamburg. Vor einem Jahr hätte ich das selbst nicht geglaubt. Damals bin ich nicht einmal zur Bushaltestelle gerannt. Angefangen hat alles mit einer Wette: Mein Kollege Tim hat gesagt, dass ich es nie schaffe, fünf Kilometer ohne Pause zu laufen. Das wollte ich ihm zeigen!</p>
<p>Also habe ich mir einen Trainingsplan aus dem Internet geholt und bin dreimal pro Woche gelaufen, immer morgens vor der Arbeit. Im Winter war das wirklich hart, es war dunkel und kalt. Im Januar hatte ich dann auch noch eine Knieverletzung und musste vier Wochen pausieren. Ich dachte schon, dass ich aufgeben muss. Aber meine Physiotherapeutin hat mir gezeigt, wie ich richtig laufe, und danach ging es viel besser.</p>
<p>Der Marathon selbst war unglaublich. Die ersten 30 Kilometer gingen gut, dann wurden meine Beine schwer wie Stein. Aber überall standen Menschen am Straßenrand und haben uns angefeuert. Am Ziel hat Tim auf mich gewartet – mit einem großen Schild: „Ich habe die Wette verloren!“ Meine Zeit? Fünf Stunden und zwölf Minuten. Nicht schnell, aber das ist mir egal.</p>
<p>Eure Liva</p></div>`,
      exemple: { q: "Liva ist in Hamburg einen Marathon gelaufen.", a: "Richtig" },
      items: [
        { n: 1, q: "Liva war schon immer sehr sportlich.", a: "f", exp: { mg: "« nicht einmal zur Bushaltestelle gerannt » = tsy nihazakazaka mihitsy taloha.", fr: "Elle ne courait même pas jusqu'à l'arrêt de bus → Falsch." } },
        { n: 2, q: "Ein Kollege hat Liva zum Laufen motiviert.", a: "r", exp: { mg: "Ny filokana tamin'i Tim (mpiara-miasa) no nanomboka ny zavatra rehetra.", fr: "Le pari avec son collègue Tim → Richtig." } },
        { n: 3, q: "Liva hat abends nach der Arbeit trainiert.", a: "f", exp: { mg: "« immer morgens vor der Arbeit » = maraina foana.", fr: "Le matin avant le travail → Falsch." } },
        { n: 4, q: "Wegen einer Verletzung konnte Liva eine Zeit lang nicht trainieren.", a: "r", exp: { mg: "« Knieverletzung … vier Wochen pausieren » = naratra ny lohalika, nijanona 4 herinandro.", fr: "Blessure au genou, 4 semaines de pause → Richtig." } },
        { n: 5, q: "Am Ende des Marathons war Liva sehr müde.", a: "r", exp: { mg: "« meine Beine schwer wie Stein » = navesatra toy ny vato ny tongony.", fr: "Jambes lourdes comme de la pierre → Richtig." } },
        { n: 6, q: "Liva ärgert sich über ihre Zeit.", a: "f", exp: { mg: "« das ist mir egal » = tsy maninona aminy.", fr: "« das ist mir egal » → Falsch." } }
      ] },
    { id: "L2", nom: "Teil 2", temps: 20, type: "mc",
      consigne: "Lesen Sie die Texte aus der Presse und die Aufgaben 7 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      texte: `<div class="press"><h3>Freitags frei</h3><p class="lead">Eine Firma in Bielefeld testet die Vier-Tage-Woche – mit überraschendem Ergebnis.</p>
<p>Seit einem Jahr arbeiten die 45 Mitarbeiter der Softwarefirma „Datenwerk“ nur noch von Montag bis Donnerstag. Der Lohn ist gleich geblieben. „Viele haben uns für verrückt erklärt“, erzählt Geschäftsführerin Anke Brehm. Doch die Zahlen geben ihr recht: Die Firma hat im letzten Jahr nicht weniger, sondern sogar etwas mehr Aufträge bearbeitet.</p>
<p>Das Geheimnis: weniger Besprechungen. Statt stundenlanger Meetings gibt es jetzt nur noch eine kurze Runde am Montagmorgen. Außerdem sind die Mitarbeiter seltener krank. Nicht alle Probleme sind aber gelöst. Kunden möchten auch freitags jemanden erreichen. Deshalb gibt es einen Telefondienst, den die Mitarbeiter abwechselnd übernehmen. Für Brehm ist klar: „Zurück zur Fünf-Tage-Woche wollen wir nicht.“</p>
<p class="src">aus einer deutschen Zeitung</p></div>
<div class="press"><h3>Kleine Ingenieure</h3><p class="lead">In Bern bauen Kinder in den Ferien ihre eigenen Roboter.</p>
<p>Schrauben, Kabel, kleine Motoren: In der Ferienwerkstatt „Robo-Kids“ der Universität Bern bauen Kinder zwischen 9 und 13 Jahren eine Woche lang ihren eigenen Roboter. Vorkenntnisse sind nicht nötig. Studierende der Informatik leiten die Kurse und erklären, wie man den Roboter am Computer programmiert.</p>
<p>„Uns ist wichtig, dass auch Mädchen Spaß an Technik bekommen“, sagt Projektleiterin Sandra Meier. Deshalb gibt es jedes Jahr eine Woche nur für Mädchen. Am Ende der Woche zeigen die Kinder ihre Roboter den Eltern. Die Roboter dürfen sie danach mit nach Hause nehmen. Der Kurs kostet 150 Franken, für Familien mit wenig Geld gibt es Unterstützung.</p>
<p class="src">aus einer Schweizer Zeitung</p></div>`,
      exemple: { q: "Die Mitarbeiter von „Datenwerk“ …", opts: ["arbeiten am Freitag nicht.", "verdienen jetzt weniger.", "arbeiten nur halbtags."], a: "a" },
      items: [
        { n: 7, q: "In dem ersten Text geht es um …", opts: ["eine Firma, die nur vier Tage pro Woche arbeitet.", "eine Firma mit Problemen.", "neue Gesetze für Arbeitszeiten."], a: "a", exp: { mg: "Lohahevitra: orinasa miasa andro 4 isan-kerinandro.", fr: "Thème : la semaine de 4 jours → a." } },
        { n: 8, q: "Seit der Vier-Tage-Woche …", opts: ["hat die Firma weniger Aufträge.", "hat die Firma mehr geschafft.", "verdienen die Mitarbeiter mehr."], a: "b", exp: { mg: "« sogar etwas mehr Aufträge » = nahavita asa betsaka kokoa.", fr: "Un peu plus de commandes → b." } },
        { n: 9, q: "Am Freitag …", opts: ["ist die Firma komplett geschlossen.", "kann man die Firma telefonisch erreichen.", "arbeitet die Chefin allein."], a: "b", exp: { mg: "« Telefondienst » = misy mpiasa mandray antso an-telefaonina.", fr: "Permanence téléphonique → b." } },
        { n: 10, q: "In dem zweiten Text geht es um …", opts: ["einen Ferienkurs für Kinder.", "ein neues Studium an der Universität.", "einen Roboter, der Kinder unterrichtet."], a: "a", exp: { mg: "« Ferienwerkstatt » = fampianarana mandritra ny fialan-tsasatra ho an'ny ankizy.", fr: "Atelier de vacances pour enfants → a." } },
        { n: 11, q: "Für den Kurs …", opts: ["muss man schon programmieren können.", "braucht man keine Erfahrung.", "muss man an der Universität studieren."], a: "b", exp: { mg: "« Vorkenntnisse sind nicht nötig » = tsy mila fahalalana mialoha.", fr: "Aucune connaissance requise → b." } },
        { n: 12, q: "Die Roboter …", opts: ["bleiben an der Universität.", "können die Kinder behalten.", "werden verkauft."], a: "b", exp: { mg: "« dürfen sie … mit nach Hause nehmen ».", fr: "Ils les emportent à la maison → b." } }
      ] },
    { id: "L3", nom: "Teil 3", temps: 10, type: "match",
      consigne: "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall wählen Sie 0.",
      contexte: "Ihre Nachbarn und Bekannten suchen verschiedene Dienstleistungen in der Stadt.",
      annonces: {
        a: "<b>Umzugsservice Flink</b><br>Wir packen, tragen und fahren – auch kurzfristig! Kostenloser Kostenvoranschlag.",
        b: "<b>Tierpension Pfötchen</b><br>Wir betreuen Ihren Hund oder Ihre Katze, während Sie im Urlaub sind.",
        c: "<b>Nachhilfe Mathematik</b><br>Studentin gibt Nachhilfe für Schüler der Klassen 5–10. 15 € pro Stunde.",
        d: "<b>Fahrradwerkstatt Speiche</b><br>Reparaturen am selben Tag. Auch gebrauchte Räder im Verkauf.",
        e: "<b>Schneiderei Ayşe</b><br>Hosen kürzen, Reißverschlüsse ersetzen, Kleider ändern – schnell und günstig.",
        f: "<b>Putzhilfe gesucht?</b><br>Zuverlässige Reinigung für Wohnungen und Büros. Wöchentlich oder einmalig.",
        g: "<b>Computer-Doktor</b><br>Ihr Laptop ist langsam oder hat einen Virus? Wir kommen zu Ihnen nach Hause!",
        h: "<b>Babysitter-Börse</b><br>Geprüfte Babysitter für Abende und Wochenenden. Online buchen.",
        i: "<b>Gartenpflege Grün</b><br>Rasen mähen, Hecken schneiden, Laub entfernen.",
        j: "<b>Übersetzungsbüro Polyglott</b><br>Beglaubigte Übersetzungen von Zeugnissen und Urkunden in über 30 Sprachen."
      },
      exemple: { q: "Herr Koch braucht Hilfe beim Umzug in seine neue Wohnung.", a: "a" },
      items: [
        { n: 13, q: "Nirina braucht für ihre Bewerbung eine offizielle Übersetzung ihres Diploms.", a: "j", exp: { mg: "« beglaubigte Übersetzungen … Zeugnissen » → j.", fr: "Traduction certifiée → j." } },
        { n: 14, q: "Familie Weber fährt in Urlaub und weiß nicht, wohin mit der Katze.", a: "b", exp: { mg: "Mikarakara biby mandritra ny fialan-tsasatra → b.", fr: "Garde d'animaux → b." } },
        { n: 15, q: "Paul hat einen Platten am Fahrrad und braucht es morgen wieder.", a: "d", exp: { mg: "« Reparaturen am selben Tag » → d.", fr: "Réparation le jour même → d." } },
        { n: 16, q: "Frau Schulz möchte am Samstagabend ins Theater gehen, hat aber zwei kleine Kinder.", a: "h", exp: { mg: "Mpikarakara ankizy hariva → h.", fr: "Babysitter le soir → h." } },
        { n: 17, q: "Tom hat eine neue Hose gekauft, aber sie ist zu lang.", a: "e", exp: { mg: "« Hosen kürzen » = manafohy pataloha → e.", fr: "Raccourcir le pantalon → e." } },
        { n: 18, q: "Der Sohn von Herrn Ali hat Probleme in Mathe.", a: "c", exp: { mg: "Nachhilfe Mathematik → c.", fr: "Soutien en maths → c." } },
        { n: 19, q: "Frau Berger sucht jemanden, der ihr Auto repariert.", a: "0", exp: { mg: "Tsy misy garazy fanamboarana fiara → 0. (d = bisikileta, g = ordinatera)", fr: "Aucun garage auto → 0." } }
      ] },
    { id: "L4", nom: "Teil 4", temps: 15, type: "jn",
      consigne: "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für ein Verbot?",
      contexte: "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über ein Verbot von Hausaufgaben in Grundschulen.",
      exemple: { nom: "Sven, 40, Kiel", texte: "Meine Tochter sitzt jeden Abend zwei Stunden an den Hausaufgaben und weint. Kinder brauchen nach der Schule Zeit zum Spielen. Hausaufgaben sollten verboten werden!", a: "Ja" },
      items: [
        { n: 20, nom: "Gabriele, 58, Lehrerin, Wien", q: "Ohne Übung zu Hause vergessen die Kinder vieles, was sie in der Schule gelernt haben. Zehn Minuten Lesen am Abend schaden niemandem. Ein Verbot halte ich für falsch.", a: "n", exp: { mg: "« Ein Verbot halte ich für falsch » → Nein.", fr: "Elle trouve l'interdiction fausse → Nein." } },
        { n: 21, nom: "Andrea, 36, Dortmund", q: "Hausaufgaben sind ungerecht: Manche Kinder haben Eltern, die helfen können, andere nicht. In der Schule hat jeder die gleiche Chance. Deshalb sollte alles Lernen in der Schule passieren.", a: "j", exp: { mg: "Tsy ara-drariny ny devoara, ka « alles Lernen in der Schule » → Ja.", fr: "Tout l'apprentissage à l'école → Ja." } },
        { n: 22, nom: "Moritz, 12, Ulm", q: "Ehrlich gesagt mache ich gern Hausaufgaben, weil ich dann vor dem Test weiß, ob ich alles verstanden habe. Ich wäre traurig, wenn es keine mehr gäbe.", a: "n", exp: { mg: "Tia devoara izy ary « traurig, wenn es keine mehr gäbe » → Nein.", fr: "Il aime les devoirs → Nein." } },
        { n: 23, nom: "Hanna, 44, Bern", q: "Bei uns gibt es seit zwei Jahren eine Lernzeit in der Schule statt Hausaufgaben. Das Familienleben ist viel entspannter geworden. Ich kann das nur empfehlen.", a: "j", exp: { mg: "Tsara ny traikefany tsy misy devoara → « kann das nur empfehlen » → Ja.", fr: "Expérience positive sans devoirs → Ja." } },
        { n: 24, nom: "Rolf, 67, Augsburg", q: "Natürlich sollten die Kinder nicht stundenlang am Schreibtisch sitzen. Aber ganz ohne Hausaufgaben lernen sie nicht, selbstständig zu arbeiten. Weniger ja, verbieten nein.", a: "n", exp: { mg: "« Weniger ja, verbieten nein » → Nein.", fr: "Moins oui, interdire non → Nein." } },
        { n: 25, nom: "Dilara, 29, Köln", q: "Ich arbeite als Krankenschwester im Schichtdienst und komme oft spät nach Hause. Dann noch Hausaufgaben zu kontrollieren, schaffe ich einfach nicht. Ein Verbot wäre für Familien wie unsere eine große Hilfe.", a: "j", exp: { mg: "« Ein Verbot wäre … eine große Hilfe » → Ja.", fr: "Une interdiction l'aiderait → Ja." } },
        { n: 26, nom: "Jonas, 33, Leipzig", q: "Ich verstehe die Eltern, die sich ein Verbot wünschen. Trotzdem glaube ich, dass es besser wäre, die Hausaufgaben besser zu planen, zum Beispiel nur am Wochenende.", a: "n", exp: { mg: "Fandrika: « Trotzdem … besser planen » → tsy fandrarana → Nein.", fr: "Après « Trotzdem » : mieux planifier → Nein." } }
      ] },
    { id: "L5", nom: "Teil 5", temps: 10, type: "mc",
      consigne: "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
      contexte: "Sie sind in ein Mehrfamilienhaus gezogen und lesen die Hausordnung.",
      texte: `<div class="rules"><h3>HAUSORDNUNG</h3>
<p><b>Ruhe:</b> Mittagsruhe ist von 13:00 bis 15:00 Uhr, Nachtruhe von 22:00 bis 6:00 Uhr. Laute Arbeiten wie Bohren sind nur werktags außerhalb der Ruhezeiten erlaubt.</p>
<p><b>Treppenhaus:</b> Die Mieter reinigen das Treppenhaus abwechselnd. Der Plan hängt neben der Haustür. Kinderwagen dürfen im Erdgeschoss abgestellt werden, andere Gegenstände nicht.</p>
<p><b>Müll:</b> Die Mülltonnen stehen hinter dem Haus. Sperrmüll (z. B. alte Möbel) muss bei der Stadt angemeldet werden und darf erst am Abend vor der Abholung an die Straße gestellt werden.</p>
<p><b>Grillen:</b> Grillen auf dem Balkon ist nur mit Elektrogrill erlaubt. Im Garten darf an Wochenenden auch mit Holzkohle gegrillt werden.</p>
<p><b>Haustiere:</b> Kleine Haustiere wie Fische oder Hamster sind erlaubt. Für Hunde und Katzen braucht man die Erlaubnis des Vermieters.</p>
<p><b>Schäden:</b> Schäden in der Wohnung oder im Haus sind sofort der Hausverwaltung zu melden. In Notfällen (z. B. Wasserschaden) erreichen Sie den Hausmeister rund um die Uhr unter 0170 / 22 33 44.</p></div>`,
      items: [
        { n: 27, q: "Ein Regal an die Wand bohren darf man …", opts: ["am Sonntagnachmittag.", "am Dienstag um 10 Uhr.", "jeden Tag um 14 Uhr."], a: "b", exp: { mg: "Andro fiasana + ivelan'ny fotoana fanginana → Talata 10 ora.", fr: "Jour ouvrable hors heures de calme → b." } },
        { n: 28, q: "Ein altes Sofa …", opts: ["kann man jederzeit an die Straße stellen.", "muss man vorher bei der Stadt anmelden.", "darf man in die Mülltonne werfen."], a: "b", exp: { mg: "« Sperrmüll muss … angemeldet werden » = tsy maintsy ampahafantarina ny tanàna.", fr: "Il faut déclarer les encombrants → b." } },
        { n: 29, q: "Auf dem Balkon …", opts: ["darf man gar nicht grillen.", "darf man nur elektrisch grillen.", "darf man am Wochenende mit Holzkohle grillen."], a: "b", exp: { mg: "« nur mit Elektrogrill » = herinaratra ihany.", fr: "Seulement électrique → b. Le charbon, c'est le jardin." } },
        { n: 30, q: "Wer eine Katze haben möchte, …", opts: ["muss den Vermieter fragen.", "darf sie ohne Erlaubnis halten.", "muss den Hausmeister anrufen."], a: "a", exp: { mg: "« braucht man die Erlaubnis des Vermieters » = mila alalana amin'ny tompon-trano.", fr: "Autorisation du propriétaire → a." } }
      ] }
  ] },

  hoeren: { temps: 40, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 2, type: "mixed",
      consigne: "Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
      clips: [
        { id: "b1m4-h1-t1", titre: "Text 1", script: [{ s: "f", n: "Bürgeramt", t: "Guten Tag, hier spricht das Bürgeramt Mitte, Frau Engel. Sie hatten einen Termin für Ihren neuen Reisepass beantragt. Leider fehlt in Ihren Unterlagen noch ein aktuelles Passfoto. Bitte bringen Sie das Foto zu Ihrem Termin am Mittwoch mit. Der Termin selbst bleibt wie geplant um vierzehn Uhr. Die Gebühr von siebzig Euro können Sie bar oder mit Karte bezahlen." }],
          items: [
            { n: 1, type: "rf", q: "Der Termin beim Bürgeramt wird verschoben.", a: "f", exp: { mg: "« Der Termin … bleibt wie geplant » = tsy miova.", fr: "Le rendez-vous reste prévu → Falsch." } },
            { n: 2, type: "mc", q: "Was soll die Person mitbringen?", opts: ["ein Foto", "siebzig Euro in bar", "den alten Ausweis"], a: "a", exp: { mg: "« fehlt … ein aktuelles Passfoto » → sary.", fr: "Une photo → a. On peut payer aussi par carte." } }
          ] },
        { id: "b1m4-h1-t2", titre: "Text 2", script: [{ s: "m", n: "Durchsage", t: "Liebe Besucherinnen und Besucher des Tierparks! Um fünfzehn Uhr findet heute die Fütterung der Pinguine statt. Bitte beachten Sie, dass die Vorführung wegen Bauarbeiten nicht am Pinguinbecken, sondern am großen Teich neben dem Restaurant stattfindet. Kinder dürfen nach der Vorführung mithelfen. Der Tierpark schließt heute um neunzehn Uhr." }],
          items: [
            { n: 3, type: "rf", q: "Die Pinguin-Fütterung findet an einem anderen Ort statt.", a: "r", exp: { mg: "Tsy eo amin'ny dobo fa « am großen Teich » noho ny asa fanamboarana.", fr: "Au grand étang à cause des travaux → Richtig." } },
            { n: 4, type: "mc", q: "Kinder können …", opts: ["die Pinguine streicheln.", "nach der Vorführung helfen.", "kostenlos ins Restaurant."], a: "b", exp: { mg: "« Kinder dürfen … mithelfen ».", fr: "Ils peuvent aider → b." } }
          ] },
        { id: "b1m4-h1-t3", titre: "Text 3", script: [{ s: "f", n: "Oma Inge", t: "Hallo Schatz, hier ist Oma. Ich wollte dir nur sagen, dass ich am Sonntag doch nicht mit dem Zug komme. Onkel Werner fährt mich mit dem Auto, er muss sowieso in deine Stadt. Wir sind dann gegen Mittag da, nicht erst am Abend. Du brauchst mich also nicht vom Bahnhof abholen. Ich bringe auch einen Kuchen mit. Bis Sonntag, mein Liebes!" }],
          items: [
            { n: 5, type: "rf", q: "Die Großmutter kommt mit dem Zug.", a: "f", exp: { mg: "« doch nicht mit dem Zug … mit dem Auto » = fiara no hitondrana azy.", fr: "En voiture avec l'oncle → Falsch." } },
            { n: 6, type: "mc", q: "Wann kommt die Großmutter an?", opts: ["am Morgen", "gegen Mittag", "am Abend"], a: "b", exp: { mg: "« gegen Mittag, nicht erst am Abend ».", fr: "Vers midi → b." } }
          ] },
        { id: "b1m4-h1-t4", titre: "Text 4", script: [{ s: "m", n: "Radio", t: "Hier ist Radio Alpen mit dem Veranstaltungstipp: Am Freitag beginnt in Innsbruck das internationale Filmfestival. Eine Woche lang zeigen drei Kinos Filme aus über vierzig Ländern, dieses Jahr mit einem Schwerpunkt auf Afrika. Die meisten Filme laufen in der Originalsprache mit deutschen Untertiteln. Karten gibt es online oder direkt an den Kinokassen. Für Studierende kostet der Eintritt nur fünf Euro." }],
          items: [
            { n: 7, type: "rf", q: "Das Festival zeigt dieses Jahr besonders viele Filme aus Afrika.", a: "r", exp: { mg: "« Schwerpunkt auf Afrika » = Afrika no tena asongadina.", fr: "Focus sur l'Afrique → Richtig." } },
            { n: 8, type: "mc", q: "Die Filme …", opts: ["sind alle auf Deutsch.", "haben deutsche Untertitel.", "sind nur für Studierende."], a: "b", exp: { mg: "« Originalsprache mit deutschen Untertiteln ».", fr: "Version originale sous-titrée → b." } }
          ] },
        { id: "b1m4-h1-t5", titre: "Text 5", script: [{ s: "f", n: "Praxis", t: "Sie sind verbunden mit der Praxis Doktor Huber. Unsere Praxis ist vom zweiten bis zum sechzehnten August wegen Urlaub geschlossen. In dringenden Fällen wenden Sie sich bitte an unsere Vertretung, die Praxis Doktor Lehmann in der Bahnhofstraße zwölf. Rezepte können Sie bis zum ersten August bei uns abholen. Ab dem neunzehnten August sind wir wieder für Sie da." }],
          items: [
            { n: 9, type: "rf", q: "Die Praxis ist im August zwei Wochen geschlossen.", a: "r", exp: { mg: "2 hatramin'ny 16 Aogositra = herinandro 2.", fr: "Du 2 au 16 août → Richtig." } },
            { n: 10, type: "mc", q: "In einem Notfall soll man …", opts: ["ins Krankenhaus fahren.", "zu einer anderen Praxis gehen.", "am 19. August anrufen."], a: "b", exp: { mg: "« Vertretung, die Praxis Doktor Lehmann » = dokotera hafa.", fr: "Le cabinet remplaçant → b." } }
          ] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 1, type: "mc", lecture: 60,
      consigne: "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
      contexte: "Sie hören im Radio Informationen zum Stadtfest am Wochenende.",
      clips: [{ id: "b1m4-h2", titre: "Stadtfest", script: [
        { s: "m", n: "Moderator", t: "Und jetzt, liebe Hörerinnen und Hörer, alle Infos zum großen Stadtfest an diesem Wochenende. Das Fest beginnt am Freitag um achtzehn Uhr mit einem Konzert auf dem Marktplatz. Wer gute Plätze möchte, sollte früh kommen, denn letztes Jahr war der Platz schon um siebzehn Uhr voll." },
        { s: "m", n: "Moderator", t: "Am Samstag ist der Tag der Vereine. Über fünfzig Vereine stellen sich in der Fußgängerzone vor, vom Schachclub bis zum Tanzverein. Dort können Sie vieles kostenlos ausprobieren." },
        { s: "m", n: "Moderator", t: "Für die Kleinen gibt es am Sonntag ein Kinderfest im Stadtpark mit Zauberer und Kinderschminken. Achtung: Wegen des schlechten Wetters im letzten Jahr findet das Kinderfest bei Regen in der Stadthalle statt." },
        { s: "m", n: "Moderator", t: "Und ganz wichtig: Während des Festes ist die Innenstadt für Autos gesperrt. Die Stadtwerke bieten deshalb kostenlose Busse von den großen Parkplätzen am Stadtrand an. Der Höhepunkt ist wie immer das Feuerwerk am Sonntag um zweiundzwanzig Uhr, am besten zu sehen von der Brücke am Fluss. Viel Spaß!" }],
        items: [
          { n: 11, type: "mc", q: "Für das Konzert am Freitag sollte man …", opts: ["Karten kaufen.", "früh da sein.", "einen Platz reservieren."], a: "b", exp: { mg: "« sollte früh kommen » = tongava aloha.", fr: "Venir tôt → b." } },
          { n: 12, type: "mc", q: "Am Samstag kann man …", opts: ["Vereine kennenlernen.", "an einem Schachturnier teilnehmen.", "Tanzkurse buchen."], a: "a", exp: { mg: "« Tag der Vereine … stellen sich vor » = mahafantatra fikambanana.", fr: "Découvrir des associations → a." } },
          { n: 13, type: "mc", q: "Wenn es am Sonntag regnet, …", opts: ["fällt das Kinderfest aus.", "findet das Kinderfest drinnen statt.", "wird das Fest verschoben."], a: "b", exp: { mg: "« bei Regen in der Stadthalle » = ao anaty trano.", fr: "À l'intérieur, dans la salle → b." } },
          { n: 14, type: "mc", q: "Wer mit dem Auto kommt, …", opts: ["kann in der Innenstadt parken.", "sollte am Stadtrand parken und den Bus nehmen.", "muss für den Bus bezahlen."], a: "b", exp: { mg: "Mihidy ny afovoan-tanàna; bus maimaim-poana avy amin'ny parking.", fr: "Se garer en périphérie + bus gratuit → b." } },
          { n: 15, type: "mc", q: "Das Feuerwerk sieht man am besten …", opts: ["vom Marktplatz.", "von der Brücke.", "aus dem Stadtpark."], a: "b", exp: { mg: "« von der Brücke am Fluss ».", fr: "Depuis le pont → b." } }
        ] }] },
    { id: "H3", nom: "Teil 3", ecoutes: 1, type: "rf", lecture: 60,
      consigne: "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen Richtig oder Falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
      contexte: "Sie sind in der Mensa und hören, wie zwei Kursteilnehmer über die B1-Prüfung sprechen.",
      clips: [{ id: "b1m4-h3", titre: "Gespräch", script: [
        { s: "m", n: "Kevin", t: "Hey Amélie, du hast doch letzte Woche die B1-Prüfung gemacht, oder? Wie war's?" },
        { s: "f", n: "Amélie", t: "Hallo Kevin! Ja, am Freitag. Ehrlich gesagt war ich total nervös, aber am Ende war es nicht so schlimm. Die Ergebnisse bekomme ich erst in vier Wochen." },
        { s: "m", n: "Kevin", t: "Was war am schwierigsten?" },
        { s: "f", n: "Amélie", t: "Für mich das Hören. Im Teil vier haben die Leute so schnell diskutiert. Lesen fand ich dagegen ganz okay, da hatte ich am Ende sogar noch zehn Minuten Zeit." },
        { s: "m", n: "Kevin", t: "Und Sprechen? Davor habe ich am meisten Angst." },
        { s: "f", n: "Amélie", t: "Das war eigentlich der beste Teil! Meine Partnerin war sehr nett, wir haben uns vorher im Wartezimmer schon ein bisschen unterhalten. Das hat geholfen." },
        { s: "m", n: "Kevin", t: "Wie hast du dich vorbereitet? Hast du einen Kurs gemacht?" },
        { s: "f", n: "Amélie", t: "Nein, kein extra Kurs. Ich habe zu Hause mit Modelltests geübt, jeden Abend eine Stunde. Und am Wochenende habe ich deutsche Serien ohne Untertitel geschaut." },
        { s: "m", n: "Kevin", t: "Gute Idee. Meine Prüfung ist im März. Kannst du mir deine Modelltests leihen?" },
        { s: "f", n: "Amélie", t: "Klar! Ich bringe sie dir morgen mit. Aber schreib nicht in die Bücher, okay? Meine Schwester will sie danach auch noch benutzen." }],
        items: [
          { n: 16, q: "Amélie kennt ihr Prüfungsergebnis schon.", a: "f", exp: { mg: "« erst in vier Wochen » = mbola tsy fantany.", fr: "Résultats dans 4 semaines → Falsch." } },
          { n: 17, q: "Das Hören war für Amélie am schwierigsten.", a: "r", exp: { mg: "« Für mich das Hören ».", fr: "Richtig." } },
          { n: 18, q: "Beim Lesen hatte Amélie zu wenig Zeit.", a: "f", exp: { mg: "« noch zehn Minuten Zeit » = mbola nanana fotoana be izy.", fr: "Il lui restait 10 minutes → Falsch." } },
          { n: 19, q: "Amélie hat vor der Prüfung mit ihrer Partnerin gesprochen.", a: "r", exp: { mg: "« im Wartezimmer schon … unterhalten ».", fr: "Dans la salle d'attente → Richtig." } },
          { n: 20, q: "Amélie hat einen Vorbereitungskurs besucht.", a: "f", exp: { mg: "« Nein, kein extra Kurs ».", fr: "Pas de cours → Falsch." } },
          { n: 21, q: "Amélie hat deutsche Serien geschaut.", a: "r", exp: { mg: "« deutsche Serien ohne Untertitel ».", fr: "Richtig." } },
          { n: 22, q: "Kevin darf in die Bücher schreiben.", a: "f", exp: { mg: "« schreib nicht in die Bücher ».", fr: "Falsch." } }
        ] }] },
    { id: "H4", nom: "Teil 4", ecoutes: 2, type: "who", lecture: 60,
      consigne: "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
      contexte: "Die Moderatorin der Sendung „Jugend im Gespräch“ diskutiert mit der Schülerin Mira Kaya und dem Psychologen Dr. Frank Wolf zum Thema „Soziale Medien – gut für Jugendliche?“.",
      personnes: { a: "Moderatorin", b: "Mira Kaya", c: "Dr. Frank Wolf" },
      exemple: { q: "Jugendliche verbringen täglich mehrere Stunden in sozialen Medien.", a: "a" },
      clips: [{ id: "b1m4-h4", titre: "Diskussion", script: [
        { s: "f", n: "Moderatorin", t: "Hallo und willkommen bei „Jugend im Gespräch“. Jugendliche verbringen heute täglich mehrere Stunden in sozialen Medien. Ist das gefährlich oder eine Chance? Bei mir sind Mira Kaya, sie ist siebzehn und Schülerin, und der Psychologe Doktor Frank Wolf. Mira, was machst du in sozialen Medien?" },
        { s: "f2", n: "Mira Kaya", t: "Vor allem halte ich Kontakt mit meinen Freunden. Meine beste Freundin ist letztes Jahr nach Kanada gezogen, und ohne Social Media hätten wir uns wahrscheinlich aus den Augen verloren." },
        { s: "f", n: "Moderatorin", t: "Herr Wolf, das klingt doch positiv." },
        { s: "m", n: "Dr. Wolf", t: "Ja, das ist es auch. Problematisch wird es, wenn Jugendliche sich ständig mit anderen vergleichen. Auf Instagram sieht man nur perfekte Körper und perfekte Urlaube. Das macht viele junge Menschen unzufrieden mit sich selbst." },
        { s: "f2", n: "Mira Kaya", t: "Das stimmt schon. Aber man lernt mit der Zeit, dass vieles nicht echt ist. Ich folge zum Beispiel inzwischen nur noch Leuten, die mich inspirieren, etwa beim Sport oder beim Kochen." },
        { s: "f", n: "Moderatorin", t: "In einigen Ländern gibt es ja schon ein Mindestalter für soziale Medien." },
        { s: "m", n: "Dr. Wolf", t: "Das halte ich für sinnvoll. Kinder unter vierzehn sind oft noch nicht in der Lage, mit diesen Inhalten umzugehen. Wichtiger als Verbote ist aber, dass die Eltern mit ihren Kindern darüber sprechen." },
        { s: "f2", n: "Mira Kaya", t: "Ich finde, das Thema sollte auch in der Schule vorkommen. Bei uns hat nie ein Lehrer erklärt, wie man gefälschte Nachrichten erkennt." },
        { s: "f", n: "Moderatorin", t: "Und wie viel Zeit ist zu viel?" },
        { s: "m", n: "Dr. Wolf", t: "Eine feste Zahl gibt es nicht. Wenn jemand aber schlecht schläft oder keine Freunde mehr trifft, sollte man aufmerksam werden." },
        { s: "f", n: "Moderatorin", t: "Vielen Dank an Sie beide!" }],
        items: [
          { n: 23, q: "Dank sozialer Medien bleibt man mit Freunden im Ausland in Kontakt.", a: "b", exp: { mg: "Mira: namany any Canada.", fr: "Mira → b." } },
          { n: 24, q: "Viele Jugendliche vergleichen sich mit anderen und sind dann unzufrieden.", a: "c", exp: { mg: "Wolf: « ständig … vergleichen … unzufrieden ».", fr: "Wolf → c." } },
          { n: 25, q: "Man merkt irgendwann, dass vieles im Internet nicht der Wirklichkeit entspricht.", a: "b", exp: { mg: "Mira: « dass vieles nicht echt ist ».", fr: "Mira → b." } },
          { n: 26, q: "Manche Länder haben eine Altersgrenze für soziale Medien.", a: "a", exp: { mg: "Ny Moderatorin: « Mindestalter ».", fr: "La modératrice → a." } },
          { n: 27, q: "Gespräche in der Familie sind wichtiger als Verbote.", a: "c", exp: { mg: "Wolf: « Wichtiger als Verbote … Eltern … sprechen ».", fr: "Wolf → c." } },
          { n: 28, q: "Die Schule sollte zeigen, wie man falsche Informationen erkennt.", a: "b", exp: { mg: "Mira: « gefälschte Nachrichten erkennt ».", fr: "Mira → b." } },
          { n: 29, q: "Man kann nicht genau sagen, wie viele Stunden zu viel sind.", a: "c", exp: { mg: "Wolf: « Eine feste Zahl gibt es nicht ».", fr: "Wolf → c." } },
          { n: 30, q: "Schlechter Schlaf kann ein Zeichen für zu viel Zeit online sein.", a: "c", exp: { mg: "Wolf: « Wenn jemand … schlecht schläft … aufmerksam werden ».", fr: "Wolf → c." } }
        ] }] }
  ] },

  schreiben: { temps: 60, aufgaben: [
    { id: "S1", nom: "Aufgabe 1", temps: 20, mots: 80, type: "E-Mail (informell)",
      consigne: `<p>Sie haben seit einem Monat einen Hund / eine Katze. Ihr Freund / Ihre Freundin weiß das noch nicht.</p>
<ul><li><b>Beschreiben Sie:</b> Wie ist Ihr neues Haustier?</li><li><b>Begründen Sie:</b> Warum haben Sie sich ein Haustier angeschafft?</li><li><b>Machen Sie einen Vorschlag</b> für ein Treffen mit Ihrem Freund / Ihrer Freundin und dem Tier.</li></ul>
<p class="small">Schreiben Sie eine E-Mail (circa 80 Wörter). Schreiben Sie etwas zu allen drei Punkten. Achten Sie auf den Textaufbau.</p>`,
      checklist: ["Liebe … / Lieber …,", "Fampidirana", "Hevitra 1 : ilay biby", "Hevitra 2 : ANTONY (weil / denn)", "Hevitra 3 : soso-kevitra", "Famaranana + Gruß", "Eo amin'ny 80 teny"],
      redemittel: ["Ich habe eine Überraschung für dich:", "Er/Sie heißt … und ist … alt.", "Ich wollte schon lange ein Haustier, weil …", "Hast du Lust, mit uns im Park spazieren zu gehen?", "Bis bald!"],
      modele: `Liebe Sophie,

ich habe eine Überraschung für dich: Seit einem Monat habe ich einen Hund! Er heißt Bobby, ist zwei Jahre alt und kommt aus dem Tierheim. Er ist klein, braun und sehr verspielt.

Ich wollte schon lange einen Hund, weil ich oft allein zu Hause bin. Jetzt gehe ich jeden Tag spazieren und bewege mich viel mehr.

Hast du am Sonntag Lust, mit uns in den Park zu gehen? Danach können wir bei mir Kaffee trinken.

Bis bald
Fara` },
    { id: "S2", nom: "Aufgabe 2", temps: 25, mots: 80, type: "Diskussionsbeitrag (Meinung)",
      consigne: `<p>Sie haben im Fernsehen eine Diskussionssendung zum Thema „Im Urlaub erreichbar sein?“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung:</p>
<div class="guest"><div class="guest-h">www.diskussion-am-abend.de · Gästebuch</div><div class="guest-b"><b>Robert</b> · 14.07. 21:05 Uhr<br>Ich lese auch im Urlaub jeden Tag meine beruflichen E-Mails. So gibt es nach dem Urlaub keine bösen Überraschungen, und ich bin ruhiger.</div></div>
<p class="small">Schreiben Sie nun Ihre Meinung zum Thema (circa 80 Wörter).</p>`,
      checklist: ["Valio i Robert", "Hevitrao mazava", "Antony 2 + ohatra", "Famaranana", "TSY MISY Anrede na Gruß", "Eo amin'ny 80 teny"],
      redemittel: ["Ich verstehe Roberts Meinung, aber …", "Meiner Meinung nach braucht man im Urlaub …", "Wenn man immer erreichbar ist, …", "Bei mir ist das so: …", "Deshalb bin ich der Meinung, dass …"],
      modele: `Ich verstehe Roberts Meinung, aber ich sehe das anders. Der Urlaub ist da, um sich zu erholen. Wenn man jeden Tag E-Mails liest, denkt man immer an die Arbeit und kann nicht richtig abschalten.

Bei mir ist das so: Vor dem Urlaub sage ich meinen Kollegen alles Wichtige, und eine Kollegin vertritt mich. So kann ich die Zeit mit meiner Familie genießen.

Deshalb bin ich der Meinung, dass man im Urlaub nicht erreichbar sein muss – nur in echten Notfällen.` },
    { id: "S3", nom: "Aufgabe 3", temps: 15, mots: 40, type: "E-Mail (formell)",
      consigne: `<p>Sie haben morgen um 10 Uhr einen Termin bei Ihrem Zahnarzt, Herrn Dr. Petersen. Sie müssen aber kurzfristig für Ihre Firma auf eine Dienstreise.</p>
<p>Schreiben Sie an Herrn Dr. Petersen. Entschuldigen Sie sich höflich und bitten Sie um einen neuen Termin.</p>
<p class="small">Schreiben Sie eine E-Mail (circa 40 Wörter). Vergessen Sie nicht die Anrede und den Gruß am Schluss.</p>`,
      checklist: ["Sehr geehrter Herr Dr. Petersen,", "Miala tsiny", "Antony", "Mangataka fotoana vaovao", "« Sie / Ihnen »", "Mit freundlichen Grüßen", "Eo amin'ny 40 teny"],
      redemittel: ["Leider kann ich morgen nicht zu meinem Termin kommen.", "Ich muss kurzfristig …", "Es tut mir leid, dass ich so spät absage.", "Könnten Sie mir bitte einen neuen Termin geben?", "Mit freundlichen Grüßen"],
      modele: `Sehr geehrter Herr Dr. Petersen,

leider kann ich morgen um 10 Uhr nicht zu meinem Termin kommen, weil ich kurzfristig für meine Firma nach Berlin fahren muss. Es tut mir leid, dass ich so spät absage. Könnten Sie mir bitte einen neuen Termin nächste Woche geben?

Mit freundlichen Grüßen
Haja Andriamanana` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voavaly ve ny hevitra rehetra? · Tous les points traités ?" },
    { nom: "Kohärenz", desc: "Voalamina tsara · Structure et connecteurs" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" }
  ] },

  sprechen: { preparation: 15, teile: [
    { id: "P1", nom: "Teil 1 – Gemeinsam etwas planen", duree: 3,
      consigne: `<p>Eine Kollegin aus Ihrem Deutschkurs hat ein Baby bekommen. Sie möchten sie zusammen besuchen und ein Geschenk von der Gruppe mitbringen.</p>
<div class="plan"><b>Besuch bei der Kollegin planen</b><ul><li>Wann besuchen?</li><li>Wie hinkommen?</li><li>Welches Geschenk?</li><li>Wie lange bleiben?</li><li>…</li></ul></div>`,
      partenaire: [
        { id: "b1m4-p1-1", t: "Hallo! Hast du schon gehört? Sarah hat ihr Baby bekommen! Wollen wir sie besuchen? Wann hättest du Zeit?" },
        { id: "b1m4-p1-2", t: "Gut. Und wie fahren wir hin? Sie wohnt ja ziemlich weit weg, am anderen Ende der Stadt." },
        { id: "b1m4-p1-3", t: "Okay. Was schenken wir ihr? Ich dachte an Kleidung für das Baby." },
        { id: "b1m4-p1-4", t: "Und wie lange sollen wir bleiben? Ich möchte nicht stören, sie ist bestimmt sehr müde." },
        { id: "b1m4-p1-5", t: "Gut, dann ist alles klar. Kannst du bitte noch mal zusammenfassen?" }
      ],
      redemittel: [
        ["Manolotra · Proposer", ["Wie wäre es mit …?", "Ich schlage vor, …", "Wir könnten …"]],
        ["Manaiky · Accepter", ["Das ist eine schöne Idee!", "Da hast du recht.", "Einverstanden."]],
        ["Mandà · Refuser", ["Ich weiß nicht, ob das passt, weil …", "Vielleicht lieber …"]],
        ["Mamarana · Conclure", ["Also, wir besuchen sie am … und bringen … mit.", "Dann machen wir es so."]]
      ],
      modele: `A: Wann besuchen wir Sarah? Ich hätte am Samstag Zeit.
B: Samstag ist gut. Vielleicht am Nachmittag, so um 15 Uhr? Vormittags schläft das Baby bestimmt.
A: Einverstanden. Wie fahren wir hin?
B: Mit der U-Bahn, Linie 3. Das dauert nur 25 Minuten.
A: Okay. Als Geschenk dachte ich an Kleidung.
B: Gute Idee, aber vielleicht hat sie schon viel. Wie wäre es mit einem Gutschein für ein Babygeschäft?
A: Stimmt, das ist praktischer. Und wir bleiben nicht zu lange, eine Stunde.
B: Ja. Also: Samstag, 15 Uhr, mit der U-Bahn, ein Gutschein, eine Stunde.` },
    { id: "P2", nom: "Teil 2 – Ein Thema präsentieren", duree: 3,
      consigne: `<p>Wählen Sie ein Thema (Thema 1 oder Thema 2) aus. Sie sollen Ihren Zuhörern ein aktuelles Thema präsentieren. Dazu finden Sie hier fünf Folien.</p>`,
      themes: [ { titre: "Online einkaufen oder im Geschäft?" }, { titre: "Sport im Verein oder allein?" } ],
      redemittel: [
        ["Folie 1 – Fampidirana", ["Ich spreche heute über …", "Meine Präsentation hat drei Teile: …"]],
        ["Folie 2 – Ny traikefako", ["Ich habe die Erfahrung gemacht, dass …", "Letzten Monat …"]],
        ["Folie 3 – Ny fireneko", ["In Madagaskar …", "Viele Leute bei uns …"]],
        ["Folie 4 – Tombony / fatiantoka", ["Ein großer Vorteil ist …", "Ein Problem ist …", "Ich persönlich finde …"]],
        ["Folie 5 – Famaranana", ["Das war meine Präsentation.", "Vielen Dank!"]]
      ] },
    { id: "P3", nom: "Teil 3 – Über das Thema sprechen", duree: 2,
      consigne: `<p>Geben Sie Ihrem Partner / Ihrer Partnerin eine Rückmeldung zur Präsentation und stellen Sie eine Frage. Beantworten Sie auch die Frage zu Ihrer Präsentation.</p>`,
      partenaire_presentation: { id: "b1m4-p3-partner", t: "Ich spreche heute über das Thema „Reisen mit wenig Geld“. Ich selbst reise sehr gern, aber ich bin Studentin und habe nicht viel Geld. Deshalb schlafe ich oft in Jugendherbergen oder bei Freunden. In meinem Heimatland Marokko reisen viele junge Leute mit dem Bus, weil das billig ist. Ein Vorteil ist, dass man so mehr Kontakt mit Einheimischen hat. Ein Nachteil ist, dass es manchmal unbequem ist. Ich finde, man muss nicht reich sein, um die Welt zu sehen. Vielen Dank." },
      question_pour_toi: { id: "b1m4-p3-frage", t: "Vielen Dank für deine Präsentation. Ich habe eine Frage: Was würdest du in Zukunft anders machen?" },
      redemittel: [
        ["Valin-kafatra · Feedback", ["Deine Präsentation hat mir sehr gefallen.", "Ich fand den Teil über … besonders spannend."]],
        ["Fanontaniana · Question", ["Mich würde interessieren, …", "Hast du schon einmal …?"]],
        ["Mamaly · Répondre", ["Danke! Ich würde …", "Vielleicht würde ich …, weil …"]]
      ] }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voaresaka avokoa ny hevitra · tous les points" },
    { nom: "Interaktion", desc: "Mamaly ny namanao · tu réagis" },
    { nom: "Wortschatz", desc: "Voambolana · vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · grammaire" },
    { nom: "Aussprache", desc: "Fanononana · prononciation" }
  ] },

  vocab: [
    { de: "schaffen", fr: "réussir / y arriver", mg: "mahavita", ex: "Ich hab's geschafft!" },
    { de: "die Wette", fr: "le pari", mg: "filokana", ex: "Alles begann mit einer Wette." },
    { de: "die Verletzung", fr: "la blessure", mg: "ratra", ex: "Ich hatte eine Knieverletzung." },
    { de: "aufgeben", fr: "abandonner", mg: "mamoy fo", ex: "Ich dachte, ich muss aufgeben." },
    { de: "anfeuern", fr: "encourager (supporter)", mg: "mampahery", ex: "Die Zuschauer haben uns angefeuert." },
    { de: "der Auftrag", fr: "la commande / mission", mg: "baiko / asa", ex: "Die Firma hat mehr Aufträge." },
    { de: "die Besprechung", fr: "la réunion", mg: "fivoriana", ex: "Es gibt weniger Besprechungen." },
    { de: "abwechselnd", fr: "à tour de rôle", mg: "mifandimby", ex: "Die Mitarbeiter übernehmen den Dienst abwechselnd." },
    { de: "die Vorkenntnisse", fr: "les connaissances préalables", mg: "fahalalana mialoha", ex: "Vorkenntnisse sind nicht nötig." },
    { de: "die Unterstützung", fr: "le soutien", mg: "fanohanana", ex: "Für Familien gibt es Unterstützung." },
    { de: "beglaubigt", fr: "certifié conforme", mg: "voamarina ara-dalàna", ex: "Ich brauche eine beglaubigte Übersetzung." },
    { de: "kürzen", fr: "raccourcir", mg: "manafohy", ex: "Kann man die Hose kürzen?" },
    { de: "die Nachhilfe", fr: "le soutien scolaire", mg: "fampianarana fanampiny", ex: "Sie gibt Nachhilfe in Mathe." },
    { de: "ungerecht", fr: "injuste", mg: "tsy ara-drariny", ex: "Hausaufgaben sind ungerecht." },
    { de: "der Schichtdienst", fr: "le travail en équipes", mg: "asa mifandimby ora", ex: "Sie arbeitet im Schichtdienst." },
    { de: "bohren", fr: "percer", mg: "manobaka", ex: "Bohren ist nur werktags erlaubt." },
    { de: "der Sperrmüll", fr: "les encombrants", mg: "fako lehibe (fanaka)", ex: "Sperrmüll muss angemeldet werden." },
    { de: "die Erlaubnis", fr: "l'autorisation", mg: "alalana", ex: "Man braucht die Erlaubnis des Vermieters." },
    { de: "der Reisepass", fr: "le passeport", mg: "pasipaoro", ex: "Ich brauche einen neuen Reisepass." },
    { de: "die Gebühr", fr: "les frais", mg: "sarany", ex: "Die Gebühr beträgt 70 Euro." },
    { de: "die Fütterung", fr: "le nourrissage", mg: "famahanana", ex: "Die Fütterung ist um 15 Uhr." },
    { de: "die Untertitel", fr: "les sous-titres", mg: "dikanteny an-tsoratra", ex: "Die Filme haben deutsche Untertitel." },
    { de: "die Vertretung", fr: "le remplaçant", mg: "solon'olona", ex: "Gehen Sie zu unserer Vertretung." },
    { de: "der Verein", fr: "l'association / le club", mg: "fikambanana", ex: "Über 50 Vereine stellen sich vor." },
    { de: "das Feuerwerk", fr: "le feu d'artifice", mg: "afomanga", ex: "Das Feuerwerk beginnt um 22 Uhr." },
    { de: "sich vergleichen", fr: "se comparer", mg: "mampitaha ny tena", ex: "Jugendliche vergleichen sich oft." },
    { de: "erkennen", fr: "reconnaître", mg: "mamantatra", ex: "Wie erkennt man falsche Nachrichten?" },
    { de: "erreichbar", fr: "joignable", mg: "azo antsoina", ex: "Im Urlaub bin ich nicht erreichbar." }
  ]
});
