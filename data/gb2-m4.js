/* Goethe-Zertifikat B2 — Modellsatz 4 — textes originaux H Conseil & Formation */
(function(){
window.POOLS.GB2.sets.push({
  id: "gb2m4", titre: "Modellsatz 4", theme: "Fanaovana sakafo · Lemuriana · Fahasalamana nomerika · Asa amin'ny alina",
  lesen: { temps: 65, teile: [
    { id: "L1", nom: "Teil 1", type: "who", temps: 18,
      consigne: "Sie lesen in einem Forum, wie Menschen über das Kochen im Alltag denken. Auf welche der vier Personen treffen die einzelnen Aussagen zu? Die Personen können mehrmals gewählt werden.",
      ctr: ["Forum sur la cuisine au quotidien : à quelle personne (a–d) correspond chaque affirmation ? Plusieurs fois possible.", "Forum momba ny fandrahoan-tsakafo andavanandro: iza amin'ireo olona 4 no mifanaraka? Azo averina."],
      personnes: { a: "Tom", b: "Ravaka", c: "Elke", d: "Benedikt" },
      texte: `<div class="ads">
<div class="ad"><span class="l">a</span><b>Tom:</b> Unter der Woche koche ich eigentlich nie. Ich arbeite bis 19 Uhr und bin dann zu müde. Meistens bestelle ich etwas über eine App. Mir ist klar, dass das nicht gesund ist und auf Dauer viel Geld kostet. Am Sonntag versuche ich deshalb, für drei Tage vorzukochen – meistens klappt es aber nur zweimal im Monat.</div>
<div class="ad"><span class="l">b</span><b>Ravaka:</b> Kochen ist für mich Entspannung. In meiner Familie in Madagaskar haben wir immer zusammen gekocht, und das vermisse ich hier in Deutschland. Deshalb lade ich jeden Freitag Freunde ein, und jeder bringt ein Gericht aus seiner Heimat mit.</div>
<div class="ad"><span class="l">c</span><b>Elke:</b> Ich koche täglich für vier Personen, und ehrlich gesagt ist das oft Stress. Jeder will etwas anderes essen. Mein Mann hilft kaum, obwohl er genauso viel arbeitet wie ich. Seit Kurzem plane ich den Wochenplan zusammen mit den Kindern – so gibt es weniger Diskussionen.</div>
<div class="ad"><span class="l">d</span><b>Benedikt:</b> Ich habe mit 40 einen Kochkurs gemacht, weil ich bis dahin nur Nudeln konnte. Das hat mein Leben verändert! Ich esse gesünder und habe fünf Kilo abgenommen. Fertiggerichte kommen mir nicht mehr ins Haus.</div></div>`,
      exemple: { q: "Wer lässt sich unter der Woche oft Essen liefern?", a: "a" },
      items: [
        { n: 1, q: "Wer verbindet Kochen mit Erinnerungen an die Familie?", tr: ["Qui associe la cuisine à des souvenirs familiaux ?", "Iza no mampifandray ny fandrahoana amin'ny fahatsiarovana fianakaviana?"], a: "b", exp: { mg: "Ravaka: niara-nahandro tany Madagasikara.", fr: "Ravaka." } },
        { n: 2, q: "Wer kritisiert die Rollenverteilung in der Familie?", tr: ["Qui critique la répartition des rôles ?", "Iza no manakiana ny fizarana andraikitra?"], a: "c", exp: { mg: "Elke: tsy manampy ny vadiny.", fr: "Elke : le mari n'aide pas." } },
        { n: 3, q: "Wer hat das Kochen erst spät richtig gelernt?", tr: ["Qui a appris à cuisiner tard ?", "Iza no tara vao nianatra nahandro?"], a: "d", exp: { mg: "Benedikt: « mit 40 einen Kochkurs ».", fr: "Benedikt." } },
        { n: 4, q: "Wer weiß, dass seine Gewohnheiten teuer sind?", tr: ["Qui sait que ses habitudes coûtent cher ?", "Iza no mahafantatra fa lafo ny fahazarany?"], a: "a", exp: { mg: "Tom: « viel Geld kostet ».", fr: "Tom." } },
        { n: 5, q: "Wer bezieht die Kinder in die Planung ein?", tr: ["Qui implique les enfants dans la planification ?", "Iza no mampandray anjara ny ankizy?"], a: "c", exp: { mg: "Elke: « zusammen mit den Kindern ».", fr: "Elke." } },
        { n: 6, q: "Für wen hat Kochen eine entspannende Wirkung?", tr: ["Pour qui cuisiner est relaxant ?", "Ho an'iza no mampitony ny mahandro?"], a: "b", exp: { mg: "Ravaka: « Entspannung ».", fr: "Ravaka." } },
        { n: 7, q: "Wer kauft keine fertigen Gerichte mehr?", tr: ["Qui n'achète plus de plats préparés ?", "Iza no tsy mividy sakafo vonona intsony?"], a: "d", exp: { mg: "Benedikt: « Fertiggerichte kommen mir nicht mehr ins Haus ».", fr: "Benedikt." } },
        { n: 8, q: "Wer schafft seinen eigenen Plan nicht immer?", tr: ["Qui n'arrive pas toujours à suivre son plan ?", "Iza no tsy mahavita foana ny drafiny?"], a: "a", exp: { mg: "Tom: « klappt es aber nur zweimal im Monat ».", fr: "Tom." } },
        { n: 9, q: "Wer kocht regelmäßig mit Gästen aus anderen Ländern?", tr: ["Qui cuisine régulièrement avec des invités d'autres pays ?", "Iza no mahandro matetika miaraka amin'ny vahiny avy amin'ny firenena hafa?"], a: "b", exp: { mg: "Ravaka: isaky ny zoma, namana avy amin'ny firenena samihafa.", fr: "Ravaka." } }
      ] },
    { id: "L2", nom: "Teil 2", type: "match", temps: 12, zero: false, gap: true,
      consigne: "Sie lesen in einer Zeitschrift einen Artikel über Lemuren. Welche Sätze passen in die Lücken? Zwei Sätze passen nicht.",
      ctr: ["Article sur les lémuriens : quelle phrase (a–h) va dans chaque trou ? Deux en trop.", "Lahatsoratra momba ny varika: iza no fehezanteny mifanaraka? Roa tafahoatra."],
      texte: `<h3>Die Geister des Waldes</h3>
<p>Mit ihren großen Augen und den langen Schwänzen gehören sie zu den bekanntesten Tieren der Welt. <span class="gap">[0]</span> Und doch weiß man über viele Arten erstaunlich wenig.</p>
<p>Lemuren leben ausschließlich auf Madagaskar und einigen kleinen Nachbarinseln. <span class="gap">[10]</span> Dort entwickelten sie sich über Millionen Jahre ohne Konkurrenz durch Affen.</p>
<p>Heute kennt man über hundert Arten. <span class="gap">[11]</span> Der größte, der Indri, kann dagegen fast zehn Kilo wiegen und ist für seinen lauten Gesang bekannt.</p>
<p>Leider stehen fast alle Arten auf der Roten Liste. <span class="gap">[12]</span> Vor allem die Abholzung der Wälder für Landwirtschaft und Holzkohle zerstört ihren Lebensraum.</p>
<p>Doch es gibt auch Hoffnung. <span class="gap">[13]</span> Dort zeigen Guides aus den Dörfern Touristen die Tiere und verdienen so ihr Einkommen.</p>
<p>Dieser Ökotourismus schafft einen Anreiz, den Wald zu schützen. <span class="gap">[14]</span> Seitdem melden die Bewohner selbst illegale Abholzungen.</p>
<p>Auch die Forschung profitiert davon. <span class="gap">[15]</span> So entdecken Wissenschaftler noch heute regelmäßig neue Arten.</p>`,
      choixTitre: "Sätze",
      choix: {
        a: "Kein Wunder, dass sie in Zeichentrickfilmen und Werbung so beliebt sind.",
        b: "Ihre Vorfahren kamen vermutlich vor rund 50 Millionen Jahren auf Treibholz über das Meer.",
        c: "Der kleinste, der Mausmaki, wiegt nur rund 30 Gramm.",
        d: "Sie gehören damit zu den am stärksten bedrohten Säugetieren der Erde.",
        e: "In mehreren Nationalparks arbeiten Naturschutz und Bevölkerung eng zusammen.",
        f: "Lemuren sind übrigens nachts aktiver als am Tag.",
        g: "In einem Dorf bei Andasibe hat sich das Einkommen dadurch fast verdoppelt.",
        h: "Viele Forschende arbeiten heute mit den lokalen Guides zusammen, die die Wälder genau kennen."
      },
      exemple: { q: "Lücke 0", a: "a" },
      items: [
        { n: 10, q: "Lücke 10", a: "b", exp: { mg: "« Dort entwickelten sie sich » → tonga tany amin'ny nosy.", fr: "Arrivée sur l'île → évolution." } },
        { n: 11, q: "Lücke 11", a: "c", exp: { mg: "« Der größte … dagegen » → mifanohitra amin'ny kely indrindra.", fr: "Opposition plus petit / plus grand." } },
        { n: 12, q: "Lücke 12", a: "d", exp: { mg: "« Rote Liste » → atahorana indrindra.", fr: "Liste rouge → très menacés." } },
        { n: 13, q: "Lücke 13", a: "e", exp: { mg: "« Dort zeigen Guides » → Nationalparks.", fr: "Parcs nationaux → guides." } },
        { n: 14, q: "Lücke 14", a: "g", exp: { mg: "« Seitdem » → tanàna akaikin'Andasibe.", fr: "Exemple d'Andasibe." } },
        { n: 15, q: "Lücke 15", a: "h", exp: { mg: "Fikarohana + Guides → karazana vaovao. Ny f no tafahoatra.", fr: "Chercheurs + guides. f est en trop." } }
      ] },
    { id: "L3", nom: "Teil 3", type: "mc", temps: 12,
      consigne: "Sie lesen in einer Zeitung einen Artikel über Gesundheits-Apps. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
      ctr: ["Article sur les applications de santé. Choisissez la bonne réponse.", "Lahatsoratra momba ny app fahasalamana. Safidio ny valiny marina."],
      texte: `<div class="press"><h3>Der Arzt in der Hosentasche?</h3>
<p>Schritte zählen, Schlaf messen, Kalorien notieren: Millionen Menschen nutzen inzwischen Gesundheits-Apps. Seit einigen Jahren können Ärzte in Deutschland bestimmte Apps sogar verschreiben – die Krankenkasse bezahlt sie dann wie ein Medikament.</p>
<p>Voraussetzung ist, dass eine Behörde die App geprüft hat. Sie muss nachweisen, dass sie die Gesundheit tatsächlich verbessert, etwa bei Rückenschmerzen oder Schlafstörungen. Bisher hat jedoch nur ein kleiner Teil der Apps diese Prüfung bestanden.</p>
<p>Die Ärztin Dr. Sabine Wolf sieht die Entwicklung positiv, aber nicht ohne Kritik. „Für Patienten, die auf dem Land wohnen und lange auf einen Termin warten, kann eine App eine echte Hilfe sein.“ Sie ersetze aber nie das persönliche Gespräch. Problematisch findet sie vor allem, dass viele Nutzer eine App nach wenigen Wochen nicht mehr öffnen.</p>
<p>Datenschützer warnen außerdem: Gesundheitsdaten gehören zu den sensibelsten Informationen überhaupt. Nicht jede kostenlose App sei so harmlos, wie sie aussieht. Manche verkaufen die Daten an Werbefirmen. Wolf rät deshalb, vor der Installation genau zu prüfen, wer hinter einer App steht.</p></div>`,
      items: [
        { n: 16, q: "In Deutschland können manche Apps …", tr: ["En Allemagne, certaines applis peuvent…", "Any Alemaina, ny app sasany dia…"], opts: ["von Ärzten verschrieben werden.", "Medikamente ersetzen.", "nur in Apotheken gekauft werden."], otr: [["être prescrites par des médecins", "omen'ny dokotera ho fanafody"], ["remplacer des médicaments", "misolo fanafody"], ["être achetées en pharmacie", "vidiana any amin'ny fivarotam-panafody"]], a: "a", exp: { mg: "« Ärzte … Apps sogar verschreiben ».", fr: "Prescription possible." } },
        { n: 17, q: "Damit die Krankenkasse eine App bezahlt, muss …", tr: ["Pour que l'assurance paie une appli, il faut…", "Mba handoavan'ny fiantohana ny app dia tsy maintsy…"], opts: ["sie kostenlos sein.", "ihre Wirkung bewiesen sein.", "der Patient sie selbst auswählen."], otr: [["qu'elle soit gratuite", "maimaim-poana"], ["que son effet soit prouvé", "voaporofo ny vokany"], ["que le patient la choisisse", "ny marary no misafidy"]], a: "b", exp: { mg: "« nachweisen, dass sie die Gesundheit tatsächlich verbessert ».", fr: "Effet prouvé." } },
        { n: 18, q: "Bisher …", tr: ["Jusqu'à présent…", "Hatramin'izao…"], opts: ["sind die meisten Apps geprüft.", "haben nur wenige Apps die Prüfung bestanden.", "gibt es keine geprüften Apps."], otr: [["la plupart sont vérifiées", "voamarina ny ankamaroany"], ["peu ont réussi le contrôle", "vitsy no afaka"], ["aucune n'est vérifiée", "tsy misy"]], a: "b", exp: { mg: "« nur ein kleiner Teil ».", fr: "Seulement une petite partie." } },
        { n: 19, q: "Laut Dr. Wolf helfen Apps besonders …", tr: ["Selon le Dr Wolf, les applis aident surtout…", "Araka ny Dr. Wolf, manampy indrindra ny app…"], opts: ["Menschen auf dem Land.", "jungen Menschen.", "Ärzten in Krankenhäusern."], otr: [["les gens à la campagne", "olona any ambanivohitra"], ["les jeunes", "tanora"], ["les médecins à l'hôpital", "dokotera any amin'ny hopitaly"]], a: "a", exp: { mg: "« Patienten, die auf dem Land wohnen ».", fr: "Patients à la campagne." } },
        { n: 20, q: "Ein Problem ist, dass viele Nutzer …", tr: ["Un problème est que beaucoup d'utilisateurs…", "Olana iray ny mpampiasa maro dia…"], opts: ["die App bald nicht mehr nutzen.", "zu viele Apps installieren.", "die Apps nicht verstehen."], otr: [["n'utilisent bientôt plus l'appli", "tsy mampiasa intsony"], ["installent trop d'applis", "app be loatra"], ["ne comprennent pas les applis", "tsy mahazo"]], a: "a", exp: { mg: "« nach wenigen Wochen nicht mehr öffnen ».", fr: "Abandon après quelques semaines." } },
        { n: 21, q: "Datenschützer warnen, dass …", tr: ["Les défenseurs des données avertissent que…", "Mampitandrina ny mpiaro angona fa…"], opts: ["alle Apps Daten verkaufen.", "manche kostenlosen Apps Daten weitergeben.", "Gesundheitsdaten unwichtig sind."], otr: [["toutes vendent des données", "mivarotra avokoa"], ["certaines applis gratuites revendent des données", "misy app maimaim-poana mivarotra angona"], ["les données de santé ne sont pas importantes", "tsy zava-dehibe"]], a: "b", exp: { mg: "« Manche verkaufen die Daten an Werbefirmen ».", fr: "Certaines revendent les données." } }
      ] },
    { id: "L4", nom: "Teil 4", type: "match", temps: 12, zero: false, layout: "choixFirst",
      consigne: "Sie lesen in einer Zeitschrift Meinungsäußerungen zum Thema „Sollen Geschäfte rund um die Uhr öffnen dürfen?“. Welche Äußerung passt zu welcher Überschrift? Eine Äußerung passt nicht. Die Äußerung a ist das Beispiel und kann nicht noch einmal verwendet werden.",
      ctr: ["Opinions : les magasins doivent-ils pouvoir ouvrir 24 h/24 ? Quelle opinion (b–h) pour chaque titre ? Une en trop ; a = exemple.", "Hevitra: tokony hisokatra 24/24 ve ny fivarotana? Iza no mifanaraka? Iray tafahoatra; a no ohatra."],
      choixTitre: "Äußerungen",
      choix: {
        a: "<b>Nadia, Berlin:</b> Ich arbeite im Schichtdienst im Krankenhaus. Wenn ich um 22 Uhr nach Hause komme, haben alle Läden zu. Längere Öffnungszeiten wären für mich eine Erleichterung.",
        b: "<b>Klaus, München:</b> Als Verkäufer kann ich nur sagen: Wer abends arbeitet, verpasst das Familienleben. Unsere Kinder sehen wir sowieso schon zu selten.",
        c: "<b>Mihaja, Köln:</b> In Antananarivo haben kleine Läden oft bis spät offen, und das Viertel ist dadurch lebendiger und sicherer. Das vermisse ich hier.",
        d: "<b>Anke, Rostock:</b> Große Supermärkte könnten sich die Nachtöffnung leisten, kleine Läden nicht. Am Ende verlieren die Kleinen.",
        e: "<b>Peter, Mainz:</b> Wozu? Ich kann doch alles online bestellen, rund um die Uhr. Die Geschäfte müssen sich etwas anderes einfallen lassen.",
        f: "<b>Gül, Duisburg:</b> Mehr Öffnungszeiten heißt nicht mehr Umsatz. Die Leute geben ja nicht mehr Geld aus, nur weil sie nachts einkaufen können.",
        g: "<b>Robert, Stuttgart:</b> Der Sonntag muss geschützt bleiben. Ein gemeinsamer freier Tag ist wichtig für die ganze Gesellschaft.",
        h: "<b>Lina, Hamburg:</b> Ich finde, jedes Geschäft sollte selbst entscheiden, wann es öffnet. Der Staat muss das nicht regeln."
      },
      exemple: { q: "Hilfe für Menschen mit ungewöhnlichen Arbeitszeiten", a: "a" },
      items: [
        { n: 22, q: "Nachteile für Familien der Angestellten", tr: ["Inconvénients pour les familles des employés", "Fatiantoka ho an'ny fianakavian'ny mpiasa"], a: "b", exp: { mg: "Klaus: tsy mahita ny ankizy.", fr: "Klaus." } },
        { n: 23, q: "Kleine Geschäfte haben keine Chance", tr: ["Les petits commerces n'ont aucune chance", "Tsy manana vintana ny fivarotana kely"], a: "d", exp: { mg: "Anke: « verlieren die Kleinen ».", fr: "Anke." } },
        { n: 24, q: "Das Internet macht die Diskussion überflüssig", tr: ["Internet rend le débat inutile", "Mahatonga ny adihevitra ho tsy ilaina ny Internet"], a: "e", exp: { mg: "Peter: « alles online bestellen ».", fr: "Peter." } },
        { n: 25, q: "Belebte Straßen bis in die Nacht", tr: ["Des rues animées jusque tard", "Lalana feno olona hatramin'ny alina"], a: "c", exp: { mg: "Mihaja: « lebendiger und sicherer ».", fr: "Mihaja." } },
        { n: 26, q: "Kein wirtschaftlicher Gewinn", tr: ["Aucun gain économique", "Tsy misy tombony ara-toekarena"], a: "f", exp: { mg: "Gül: « nicht mehr Umsatz ».", fr: "Gül." } },
        { n: 27, q: "Freiheit für die Händler", tr: ["Liberté pour les commerçants", "Fahalalahana ho an'ny mpivarotra"], a: "h", exp: { mg: "Lina: « selbst entscheiden ». Ny g no tafahoatra.", fr: "Lina. g est en trop." } }
      ] },
    { id: "L5", nom: "Teil 5", type: "match", temps: 6, zero: false, layout: "choixFirst",
      consigne: "Sie möchten ein Carsharing-Angebot nutzen und lesen die Nutzungsbedingungen. Welche Überschriften passen zu den Paragrafen? Vier Überschriften werden nicht gebraucht.",
      ctr: ["Conditions d'un service d'autopartage : quel titre (a–h) pour chaque paragraphe ? Quatre en trop.", "Fepetran'ny fampiasana fiara iombonana: iza no lohateny mifanaraka? Efatra tafahoatra."],
      choixTitre: "Inhaltsverzeichnis",
      choix: { a: "Voraussetzungen für die Anmeldung", b: "Tanken und Laden", c: "Schäden und Unfälle", d: "Rauchen und Haustiere", e: "Preise und Abrechnung", f: "Fahrten ins Ausland", g: "Reservierung", h: "Kündigung" },
      texte: `<div class="rules">
<p><b>§ 0</b> Kunden müssen mindestens 21 Jahre alt sein und seit mindestens zwei Jahren einen gültigen Führerschein besitzen.</p>
<p><b>§ 28</b> Stellt der Kunde vor Fahrtbeginn einen Schaden fest, muss er diesen über die App mit Foto melden. Bei einem Unfall ist sofort die Polizei zu informieren.</p>
<p><b>§ 29</b> In allen Fahrzeugen gilt Rauchverbot. Tiere dürfen nur in einer geschlossenen Transportbox mitgenommen werden.</p>
<p><b>§ 30</b> Abgerechnet wird pro Minute. Die Kosten werden am Monatsende automatisch vom angegebenen Konto abgebucht.</p></div>`,
      exemple: { q: "§ 0", a: "a" },
      items: [
        { n: 28, q: "§ 28", a: "c", exp: { mg: "Simba sy lozam-pifamoivoizana.", fr: "Dommages et accidents." } },
        { n: 29, q: "§ 29", a: "d", exp: { mg: "Tsy mifoka, biby anaty boaty.", fr: "Fumer et animaux." } },
        { n: 30, q: "§ 30", a: "e", exp: { mg: "Isaky ny minitra, aloa isam-bolana.", fr: "Prix et facturation." } }
      ] }
  ] },

  hoeren: { temps: 40, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 1, type: "mixed",
      consigne: "Sie hören fünf Gespräche und Äußerungen. Sie hören jeden Text einmal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
      clips: [
        { id: "gb2m4-h1-1", titre: "Text 1", script: [{ s: "m", n: "Mann", t: "Ich habe mir vorgenommen, dieses Jahr keine neuen Elektrogeräte zu kaufen. Mein Handy ist vier Jahre alt, aber mit einem neuen Akku läuft es noch super. Die Reparatur hat nur vierzig Euro gekostet. Schwierig wird es eher bei meinem Laptop – da gibt es keine Ersatzteile mehr." }],
          items: [
            { n: 1, type: "rf", q: "Der Mann möchte weniger Geräte neu kaufen.", tr: ["L'homme veut acheter moins d'appareils neufs.", "Te hividy fitaovana vaovao vitsy kokoa ilay lehilahy."], a: "r", exp: { mg: "« keine neuen Elektrogeräte zu kaufen ».", fr: "Oui." } },
            { n: 2, type: "mc", q: "Was ist das Problem mit dem Laptop?", tr: ["Quel est le problème avec l'ordinateur ?", "Inona no olana amin'ny solosaina?"], opts: ["Es gibt keine Ersatzteile.", "Die Reparatur ist zu teuer.", "Der Akku ist kaputt."], otr: [["il n'y a pas de pièces", "tsy misy pièce"], ["la réparation est trop chère", "lafo loatra ny fanamboarana"], ["la batterie est cassée", "simba ny batterie"]], a: "a", exp: { mg: "« keine Ersatzteile mehr ».", fr: "Pas de pièces de rechange." } }
          ] },
        { id: "gb2m4-h1-2", titre: "Text 2", script: [{ s: "f", n: "Radio", t: "Immer mehr Unternehmen bieten ihren Mitarbeitern ein sogenanntes Jobrad an: Die Firma least ein Fahrrad, der Mitarbeiter bezahlt eine kleine Rate vom Gehalt. Nach drei Jahren kann man das Rad günstig kaufen. Besonders beliebt sind E-Bikes." }],
          items: [
            { n: 3, type: "rf", q: "Beim Jobrad bekommen Mitarbeiter ein Fahrrad geschenkt.", tr: ["Avec le Jobrad, les employés reçoivent un vélo en cadeau.", "Omena maimaim-poana bisikileta ny mpiasa."], a: "f", exp: { mg: "Mandoa « kleine Rate » izy.", fr: "Ils paient une petite mensualité." } },
            { n: 4, type: "mc", q: "Was passiert nach drei Jahren?", tr: ["Que se passe-t-il après trois ans ?", "Inona no mitranga aorian'ny telo taona?"], opts: ["Man kann das Rad billig kaufen.", "Man muss das Rad zurückgeben.", "Man bekommt ein neues Rad."], otr: [["on peut l'acheter pas cher", "azo vidiana mora"], ["on doit le rendre", "averina"], ["on en reçoit un nouveau", "omena vaovao"]], a: "a", exp: { mg: "« das Rad günstig kaufen ».", fr: "Achat à bas prix." } }
          ] },
        { id: "gb2m4-h1-3", titre: "Text 3", script: [{ s: "f", n: "Frau", t: "Hast du dich schon für einen Sprachkurs entschieden?" }, { s: "m", n: "Mann", t: "Ich schwanke noch. Der Intensivkurs ist schneller, aber er ist jeden Vormittag, und das passt nicht zu meiner Arbeit." }, { s: "f", n: "Frau", t: "Dann nimm doch den Abendkurs. Der dauert zwar länger, aber du musst nicht kündigen." }],
          items: [
            { n: 5, type: "rf", q: "Der Mann hat sich schon für einen Kurs angemeldet.", tr: ["L'homme s'est déjà inscrit à un cours.", "Efa nisoratra anarana ilay lehilahy."], a: "f", exp: { mg: "« Ich schwanke noch ».", fr: "Il hésite encore." } },
            { n: 6, type: "mc", q: "Warum rät die Frau zum Abendkurs?", tr: ["Pourquoi la femme conseille-t-elle le cours du soir ?", "Nahoana no atoron'ilay vehivavy ny fampianarana hariva?"], opts: ["Weil er neben der Arbeit möglich ist.", "Weil er schneller ist.", "Weil er billiger ist."], otr: [["compatible avec le travail", "mety miaraka amin'ny asa"], ["plus rapide", "haingana kokoa"], ["moins cher", "mora kokoa"]], a: "a", exp: { mg: "« du musst nicht kündigen ».", fr: "Il peut garder son travail." } }
          ] },
        { id: "gb2m4-h1-4", titre: "Text 4", script: [{ s: "m", n: "Mann", t: "Seit ich im Garten Gemüse anbaue, kaufe ich im Sommer fast nichts mehr im Supermarkt. Tomaten, Zucchini, Bohnen – alles von uns. Das Schönste ist, dass meine Kinder jetzt Gemüse essen, weil sie es selbst geerntet haben." }],
          items: [
            { n: 7, type: "rf", q: "Der Mann kauft das ganze Jahr kein Gemüse.", tr: ["L'homme n'achète pas de légumes de toute l'année.", "Tsy mividy legioma mandritra ny taona ilay lehilahy."], a: "f", exp: { mg: "« im Sommer » ihany.", fr: "Seulement en été." } },
            { n: 8, type: "mc", q: "Was freut ihn am meisten?", tr: ["Qu'est-ce qui lui fait le plus plaisir ?", "Inona no tena mahafaly azy?"], opts: ["Dass seine Kinder Gemüse essen.", "Dass er Geld spart.", "Dass die Tomaten groß sind."], otr: [["que ses enfants mangent des légumes", "mihinana legioma ny ankizy"], ["qu'il économise", "mitsitsy vola"], ["que les tomates sont grosses", "lehibe ny voatabia"]], a: "a", exp: { mg: "« Das Schönste … Kinder jetzt Gemüse essen ».", fr: "Ses enfants mangent des légumes." } }
          ] },
        { id: "gb2m4-h1-5", titre: "Text 5", script: [{ s: "f", n: "Radio", t: "Und nun ein Hinweis für alle Studierenden: Die Universitätsbibliothek ist ab Montag wegen Renovierung nur noch bis achtzehn Uhr geöffnet. Lernplätze gibt es in dieser Zeit zusätzlich im Gebäude der Mensa." }],
          items: [
            { n: 9, type: "rf", q: "Die Bibliothek schließt wegen Bauarbeiten früher.", tr: ["La bibliothèque ferme plus tôt à cause de travaux.", "Mikatona aloha ny tranomboky noho ny asa fanamboarana."], a: "r", exp: { mg: "« wegen Renovierung nur noch bis achtzehn Uhr ».", fr: "Oui." } },
            { n: 10, type: "mc", q: "Wo kann man zusätzlich lernen?", tr: ["Où peut-on étudier en plus ?", "Aiza no afaka mianatra koa?"], opts: ["Im Mensagebäude.", "In der Stadtbibliothek.", "Zu Hause."], otr: [["au bâtiment du restaurant universitaire", "ao amin'ny trano fisakafoanana"], ["à la bibliothèque municipale", "tranombokin'ny tanàna"], ["à la maison", "an-trano"]], a: "a", exp: { mg: "« im Gebäude der Mensa ».", fr: "Bâtiment de la cantine." } }
          ] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 2, type: "mc", lecture: 90,
      consigne: "Sie hören im Radio ein Interview mit einer Nachtkrankenschwester. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie jetzt die Aufgaben 11 bis 16. Dazu haben Sie 90 Sekunden Zeit.",
      ctr: ["Interview radio avec une infirmière de nuit, deux écoutes. Questions 11 à 16.", "Resadresaka amin'ny mpitsabo mpanampy miasa amin'ny alina, henoina indroa."],
      clips: [{ id: "gb2m4-h2", titre: "Interview", script: [
        { s: "m", n: "Moderator", t: "Frau Razafy, Sie arbeiten seit acht Jahren fast nur nachts auf einer Intensivstation in Hamburg. Warum ausgerechnet nachts?" },
        { s: "f", n: "Frau Razafy", t: "Am Anfang war es eine praktische Entscheidung: Mein Mann arbeitet tagsüber, und so konnte immer einer von uns bei den Kindern sein. Inzwischen mag ich die Nacht aber wirklich. Es ist ruhiger, man hat mehr Zeit für die Patienten." },
        { s: "m", n: "Moderator", t: "Wie schlafen Sie?" },
        { s: "f", n: "Frau Razafy", t: "Das war das größte Problem. Ich habe lange schlecht geschlafen. Dann habe ich mir dunkle Vorhänge gekauft und schalte das Handy komplett aus. Seitdem geht es viel besser." },
        { s: "m", n: "Moderator", t: "Was ist für Sie die schwierigste Situation?" },
        { s: "f", n: "Frau Razafy", t: "Wenn nachts ein Notfall kommt und nur zwei Pflegekräfte auf der Station sind. Dann muss man sehr schnell entscheiden. Das ist eine große Verantwortung." },
        { s: "m", n: "Moderator", t: "Hat sich in den letzten Jahren etwas verändert?" },
        { s: "f", n: "Frau Razafy", t: "Leider ist das Personal knapper geworden. Viele Kolleginnen haben den Beruf verlassen. Auf der anderen Seite kommen jetzt mehr Pflegekräfte aus dem Ausland, auch aus Madagaskar. Ich helfe ihnen gern beim Einstieg." },
        { s: "m", n: "Moderator", t: "Würden Sie den Beruf wieder wählen?" },
        { s: "f", n: "Frau Razafy", t: "Ja, ohne zu zögern. Aber ich wünsche mir, dass die Politik endlich mehr für die Pflege tut – vor allem bessere Arbeitsbedingungen, nicht nur Applaus." }],
        items: [
          { n: 11, q: "Frau Razafy hat Nachtdienste zuerst gewählt, weil …", tr: ["Mme Razafy a d'abord choisi les nuits parce que…", "Nisafidy ny asa alina i Rtoa Razafy tamin'ny voalohany satria…"], opts: ["sie besser bezahlt werden.", "so immer jemand bei den Kindern war.", "sie nachts besser schlafen kann."], otr: [["c'est mieux payé", "tsara karama kokoa"], ["ainsi quelqu'un était toujours avec les enfants", "nisy foana niaraka tamin'ny ankizy"], ["elle dort mieux la nuit", "matory tsara kokoa amin'ny alina"]], a: "b", exp: { mg: "« immer einer von uns bei den Kindern ».", fr: "Garde des enfants." } },
          { n: 12, q: "Heute mag sie die Nacht, weil …", tr: ["Aujourd'hui elle aime la nuit parce que…", "Ankehitriny tiany ny alina satria…"], opts: ["sie mehr Zeit für Patienten hat.", "es weniger Patienten gibt.", "die Kollegen netter sind."], otr: [["elle a plus de temps pour les patients", "manana fotoana bebe kokoa ho an'ny marary"], ["il y a moins de patients", "vitsy kokoa ny marary"], ["les collègues sont plus gentils", "tsara fanahy kokoa ny mpiara-miasa"]], a: "a", exp: { mg: "« mehr Zeit für die Patienten ».", fr: "Plus de temps." } },
          { n: 13, q: "Gegen Schlafprobleme hilft ihr …", tr: ["Contre les problèmes de sommeil, ce qui l'aide…", "Manampy azy amin'ny olana torimaso…"], opts: ["ein Medikament.", "ein dunkles Zimmer ohne Handy.", "Sport am Morgen."], otr: [["un médicament", "fanafody"], ["une chambre sombre sans portable", "efitrano maizina tsy misy finday"], ["le sport le matin", "fanatanjahantena maraina"]], a: "b", exp: { mg: "« dunkle Vorhänge … Handy komplett aus ».", fr: "Rideaux sombres, portable éteint." } },
          { n: 14, q: "Besonders schwierig ist es, wenn …", tr: ["C'est particulièrement difficile quand…", "Tena sarotra rehefa…"], opts: ["ein Notfall mit wenig Personal kommt.", "Angehörige nachts anrufen.", "die Ärzte nicht da sind."], otr: [["une urgence arrive avec peu de personnel", "vonjy taitra nefa vitsy ny mpiasa"], ["les proches appellent la nuit", "miantso ny havana"], ["les médecins sont absents", "tsy eo ny dokotera"]], a: "a", exp: { mg: "« Notfall … nur zwei Pflegekräfte ».", fr: "Urgence avec deux soignants." } },
          { n: 15, q: "In den letzten Jahren …", tr: ["Ces dernières années…", "Tato anatin'ny taona vitsivitsy…"], opts: ["gibt es mehr Personal.", "ist das Personal knapper geworden.", "arbeiten weniger Ausländer in der Pflege."], otr: [["il y a plus de personnel", "betsaka kokoa ny mpiasa"], ["le personnel s'est raréfié", "nihena ny mpiasa"], ["moins d'étrangers", "vitsy kokoa ny vahiny"]], a: "b", exp: { mg: "« das Personal knapper geworden ».", fr: "Moins de personnel." } },
          { n: 16, q: "Von der Politik wünscht sie sich …", tr: ["De la politique, elle souhaite…", "Avy amin'ny mpanao politika dia maniry…"], opts: ["mehr Anerkennung durch Applaus.", "bessere Arbeitsbedingungen.", "mehr Pflegekräfte aus dem Ausland."], otr: [["plus d'applaudissements", "tehaka bebe kokoa"], ["de meilleures conditions de travail", "toe-piasana tsara kokoa"], ["plus de soignants étrangers", "mpitsabo vahiny bebe kokoa"]], a: "b", exp: { mg: "« bessere Arbeitsbedingungen, nicht nur Applaus ».", fr: "De meilleures conditions." } }
        ] }] },
    { id: "H3", nom: "Teil 3", ecoutes: 1, type: "who", lecture: 60,
      consigne: "Sie hören im Radio ein Gespräch mit mehreren Personen. Die Personen sprechen über Werbung für Kinder. Sie hören den Text einmal. Wählen Sie bei jeder Aufgabe: Wer sagt das?",
      ctr: ["Discussion radio sur la publicité destinée aux enfants, une écoute : qui dit quoi ?", "Adihevitra momba ny dokam-barotra ho an'ny ankizy, henoina indray mandeha: iza no niteny?"],
      personnes: { a: "Moderatorin", b: "Herr Brandt, Werbefachmann", c: "Frau Ott, Kinderärztin" },
      exemple: { q: "Kinder sehen jeden Tag zahlreiche Werbespots.", a: "a" },
      clips: [{ id: "gb2m4-h3", titre: "Gespräch", script: [
        { s: "f", n: "Moderatorin", t: "Kinder sehen jeden Tag zahlreiche Werbespots – im Fernsehen, im Internet, auf Plakaten. Die Regierung diskutiert, Werbung für süße Lebensmittel an Kinder zu verbieten. Bei mir sind der Werbefachmann Herr Brandt und die Kinderärztin Frau Ott." },
        { s: "f2", n: "Frau Ott", t: "Ich sehe in meiner Praxis jede Woche Kinder mit Übergewicht. Werbung ist nicht die einzige Ursache, aber sie trägt dazu bei. Kinder können Werbung bis zu einem gewissen Alter nicht von Information unterscheiden." },
        { s: "m", n: "Herr Brandt", t: "Ein Verbot klingt einfach, löst aber das Problem nicht. Die Verantwortung liegt bei den Eltern. Sie entscheiden, was im Einkaufswagen landet." },
        { s: "f", n: "Moderatorin", t: "Andere Länder haben solche Verbote schon eingeführt." },
        { s: "f2", n: "Frau Ott", t: "Ja, und in Großbritannien hat man gesehen, dass Kinder danach weniger Zucker gegessen haben." },
        { s: "m", n: "Herr Brandt", t: "Die Zahlen dazu sind umstritten. Außerdem verlagert sich die Werbung einfach zu Influencern im Internet – und das ist viel schwerer zu kontrollieren." },
        { s: "f", n: "Moderatorin", t: "Gibt es einen Kompromiss?" },
        { s: "m", n: "Herr Brandt", t: "Die Branche könnte sich freiwillig verpflichten, keine Werbung in Kindersendungen zu zeigen." },
        { s: "f2", n: "Frau Ott", t: "Freiwillige Regeln haben in der Vergangenheit leider wenig gebracht. Ich bin für ein klares Gesetz – und für mehr Ernährungsbildung in den Schulen." }],
        items: [
          { n: 17, q: "Kleine Kinder erkennen Werbung oft nicht als solche.", tr: ["Les jeunes enfants ne reconnaissent souvent pas la publicité.", "Matetika tsy fantatry ny ankizy kely fa dokam-barotra izany."], a: "c", exp: { mg: "Ott: « nicht von Information unterscheiden ».", fr: "Frau Ott." } },
          { n: 18, q: "Die Eltern sind verantwortlich.", tr: ["Les parents sont responsables.", "Ny ray aman-dreny no tompon'andraikitra."], a: "b", exp: { mg: "Brandt: « Die Verantwortung liegt bei den Eltern ».", fr: "Herr Brandt." } },
          { n: 19, q: "Im Ausland gibt es bereits Verbote.", tr: ["Des interdictions existent déjà à l'étranger.", "Efa misy fandrarana any ivelany."], a: "a", exp: { mg: "Ny mpanentana.", fr: "La modératrice." } },
          { n: 20, q: "Die Wirkung von Verboten ist nicht sicher belegt.", tr: ["L'effet des interdictions n'est pas prouvé.", "Tsy voaporofo tsara ny vokatry ny fandrarana."], a: "b", exp: { mg: "Brandt: « Die Zahlen … sind umstritten ».", fr: "Herr Brandt." } },
          { n: 21, q: "Werbung könnte sich auf soziale Medien verschieben.", tr: ["La publicité pourrait se déplacer vers les réseaux sociaux.", "Mety hifindra any amin'ny tambajotra sosialy ny dokam-barotra."], a: "b", exp: { mg: "Brandt: « zu Influencern im Internet ».", fr: "Herr Brandt." } },
          { n: 22, q: "Schulen sollten mehr über gesunde Ernährung unterrichten.", tr: ["Les écoles devraient enseigner davantage la nutrition.", "Tokony hampianatra bebe kokoa momba ny sakafo mahasalama ny sekoly."], a: "c", exp: { mg: "Ott: « Ernährungsbildung in den Schulen ».", fr: "Frau Ott." } }
        ] }] },
    { id: "H4", nom: "Teil 4", ecoutes: 2, type: "mc", lecture: 90,
      consigne: "Sie hören einen kurzen Vortrag. Die Rednerin spricht über das Thema „Langeweile“. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie jetzt die Aufgaben 23 bis 30. Dazu haben Sie 90 Sekunden Zeit.",
      ctr: ["Court exposé sur l'ennui, deux écoutes. Questions 23 à 30.", "Kabary fohy momba ny fahaleovana, henoina indroa."],
      clips: [{ id: "gb2m4-h4", titre: "Vortrag", script: [
        { s: "f", n: "Rednerin", t: "Liebe Zuhörerinnen und Zuhörer, wann haben Sie sich das letzte Mal richtig gelangweilt? Wahrscheinlich können Sie sich kaum erinnern. Denn sobald wir zwei Minuten warten müssen, greifen wir zum Handy." },
        { s: "f", n: "Rednerin", t: "Langeweile hat einen schlechten Ruf. Wir verbinden sie mit verlorener Zeit. Psychologen sehen das inzwischen anders: Langeweile ist ein Signal unseres Gehirns, dass wir etwas verändern sollten." },
        { s: "f", n: "Rednerin", t: "In einer bekannten Studie mussten Teilnehmende zuerst eine sehr langweilige Aufgabe erledigen: Telefonnummern abschreiben. Danach sollten sie möglichst viele Verwendungen für einen Plastikbecher finden. Die Gruppe, die sich vorher gelangweilt hatte, war deutlich kreativer." },
        { s: "f", n: "Rednerin", t: "Der Grund: Wenn das Gehirn keine Reize von außen bekommt, beginnt es zu wandern. Es verbindet Gedanken, die sonst nichts miteinander zu tun haben. Viele Künstler berichten, dass ihnen die besten Ideen unter der Dusche oder beim Spazierengehen kommen." },
        { s: "f", n: "Rednerin", t: "Allerdings ist nicht jede Langeweile positiv. Wer dauerhaft unterfordert ist, etwa im Beruf, kann darunter leiden. Man spricht dann von einem „Boreout“ – dem Gegenteil des Burnouts." },
        { s: "f", n: "Rednerin", t: "Was bedeutet das für Kinder? Viele Eltern planen jede freie Minute: Musikschule, Sport, Nachhilfe. Doch Kinder brauchen auch Zeit, in der nichts geplant ist. Nur so lernen sie, sich selbst zu beschäftigen." },
        { s: "f", n: "Rednerin", t: "Mein Vorschlag zum Schluss: Lassen Sie das Handy beim nächsten Warten in der Tasche. Vielleicht kommt Ihnen dabei Ihre nächste gute Idee. Vielen Dank." }],
        items: [
          { n: 23, q: "Laut der Rednerin langweilen wir uns heute selten, weil …", tr: ["Selon l'oratrice, on s'ennuie rarement aujourd'hui parce que…", "Araka ilay mpandahateny, tsy dia mankaleo isika satria…"], opts: ["wir mehr arbeiten.", "wir sofort zum Handy greifen.", "es mehr Freizeitangebote gibt."], otr: [["on travaille plus", "miasa bebe kokoa"], ["on prend tout de suite le portable", "maka ny finday avy hatrany"], ["il y a plus de loisirs", "betsaka kokoa ny fialam-boly"]], a: "b", exp: { mg: "« greifen wir zum Handy ».", fr: "Le portable." } },
          { n: 24, q: "Psychologen sehen Langeweile als …", tr: ["Les psychologues voient l'ennui comme…", "Heverin'ny psikology ho… ny fahaleovana"], opts: ["verlorene Zeit.", "ein Signal für Veränderung.", "eine Krankheit."], otr: [["du temps perdu", "fotoana very"], ["un signal de changement", "famantarana hanovana"], ["une maladie", "aretina"]], a: "b", exp: { mg: "« ein Signal … dass wir etwas verändern sollten ».", fr: "Signal de changement." } },
          { n: 25, q: "In der Studie war die gelangweilte Gruppe …", tr: ["Dans l'étude, le groupe qui s'ennuyait était…", "Tao amin'ny fanadihadiana, ny vondrona leo dia…"], opts: ["kreativer.", "schneller.", "müder."], otr: [["plus créatif", "mamorona kokoa"], ["plus rapide", "haingana kokoa"], ["plus fatigué", "vizana kokoa"]], a: "a", exp: { mg: "« deutlich kreativer ».", fr: "Plus créatif." } },
          { n: 26, q: "Ohne äußere Reize beginnt das Gehirn, …", tr: ["Sans stimulation extérieure, le cerveau commence à…", "Raha tsy misy fanentanana avy any ivelany dia manomboka… ny ati-doha"], opts: ["sich auszuruhen.", "Gedanken frei zu verbinden.", "sich zu konzentrieren."], otr: [["se reposer", "miala sasatra"], ["relier librement des pensées", "mampifandray hevitra malalaka"], ["se concentrer", "mifantoka"]], a: "b", exp: { mg: "« verbindet Gedanken ».", fr: "Il relie des pensées." } },
          { n: 27, q: "Viele Künstler haben gute Ideen …", tr: ["Beaucoup d'artistes ont de bonnes idées…", "Mpanakanto maro no mahazo hevitra tsara…"], opts: ["bei der Arbeit.", "beim Duschen oder Spazierengehen.", "beim Fernsehen."], otr: [["au travail", "any am-piasana"], ["sous la douche ou en marchant", "mandro na mitsangatsangana"], ["devant la télé", "mijery fahitalavitra"]], a: "b", exp: { mg: "« unter der Dusche oder beim Spazierengehen ».", fr: "Douche, promenade." } },
          { n: 28, q: "Ein „Boreout“ entsteht, wenn jemand …", tr: ["Un « boreout » survient quand quelqu'un…", "Misy « boreout » rehefa misy olona…"], opts: ["zu viel arbeitet.", "dauerhaft unterfordert ist.", "zu wenig schläft."], otr: [["travaille trop", "miasa be loatra"], ["est durablement sous-stimulé", "tsy ampy asa maharitra"], ["dort trop peu", "matory kely loatra"]], a: "b", exp: { mg: "« dauerhaft unterfordert ».", fr: "Sous-stimulation durable." } },
          { n: 29, q: "Kinder brauchen laut Rednerin …", tr: ["Selon l'oratrice, les enfants ont besoin de…", "Araka ilay mpandahateny, mila… ny ankizy"], opts: ["mehr Freizeitkurse.", "auch ungeplante Zeit.", "mehr Nachhilfe."], otr: [["plus d'activités", "asa fialam-boly bebe kokoa"], ["aussi du temps non planifié", "fotoana tsy voalamina koa"], ["plus de soutien scolaire", "fampianarana fanampiny"]], a: "b", exp: { mg: "« Zeit, in der nichts geplant ist ».", fr: "Du temps libre non planifié." } },
          { n: 30, q: "Zum Schluss empfiehlt sie, …", tr: ["Pour finir, elle recommande…", "Amin'ny farany dia atorony…"], opts: ["beim Warten nicht aufs Handy zu schauen.", "jeden Tag zu meditieren.", "weniger zu arbeiten."], otr: [["de ne pas regarder le portable en attendant", "tsy hijery finday rehefa miandry"], ["de méditer chaque jour", "misaintsaina isan'andro"], ["de travailler moins", "miasa kely kokoa"]], a: "a", exp: { mg: "« das Handy … in der Tasche ».", fr: "Laisser le portable dans la poche." } }
        ] }] }
  ] },

  schreiben: { temps: 75, aufgaben: [
    { id: "S1", nom: "Teil 1", temps: 50, mots: 150, points: 50, type: "Forumsbeitrag",
      consigne: `<p>Sie schreiben einen Forumsbeitrag zum Thema „Lebensmittel im Müll“.</p><ul><li>Äußern Sie Ihre Meinung zur Verschwendung von Lebensmitteln.</li><li>Nennen Sie Gründe, warum so viel Essen weggeworfen wird.</li><li>Nennen Sie Möglichkeiten, weniger wegzuwerfen.</li><li>Beschreiben Sie, wie man in Ihrem Heimatland mit Essensresten umgeht.</li></ul><p class="small">Denken Sie an eine Einleitung und einen Schluss. Schreiben Sie mindestens 150 Wörter.</p>`,
      ctr: ["Forum : le gaspillage alimentaire. Votre avis, les causes, les solutions, comment on fait dans votre pays. Intro + conclusion, ≥150 mots.", "Forum: sakafo ariana. Hevitrao, antony, vahaolana, ahoana no fanaovana any amin'ny tanindrazanao. ≥150 teny."],
      checklist: ["Einleitung", "Teboka 1: hevitrao", "Teboka 2: antony", "Teboka 3: vahaolana", "Teboka 4: any amin'ny tanindrazanao", "Schluss", "Connecteurs", "≥150 teny"],
      redemittel: ["In Deutschland landen jedes Jahr Millionen Tonnen Lebensmittel im Müll.", "Ich halte das für …", "Ein Grund dafür ist, dass …", "Man könnte zum Beispiel …", "In meinem Heimatland ist es üblich, dass …", "Abschließend lässt sich sagen, dass …"],
      modele: `In Deutschland landen jedes Jahr Millionen Tonnen Lebensmittel im Müll. Ich möchte im Folgenden meine Meinung dazu äußern.

Ich halte diese Verschwendung für einen großen Skandal, denn gleichzeitig hungern auf der Welt Millionen Menschen.

Ein Grund dafür ist, dass viele Menschen zu viel auf einmal einkaufen, vor allem bei Sonderangeboten. Außerdem werfen sie Produkte weg, sobald das Mindesthaltbarkeitsdatum erreicht ist, obwohl sie oft noch gut sind.

Man könnte zum Beispiel mit einer Einkaufsliste einkaufen und Reste am nächsten Tag weiterverwenden. Auch Apps, über die Restaurants übrig gebliebenes Essen günstig verkaufen, sind eine gute Idee.

In Madagaskar wird kaum etwas weggeworfen. Reste vom Reis werden am nächsten Morgen mit Wasser zu „Vary sosoa“ gekocht, und was übrig bleibt, bekommen die Tiere. Das liegt natürlich auch daran, dass Lebensmittel im Verhältnis zum Einkommen teuer sind.

Abschließend lässt sich sagen, dass jeder Einzelne mit kleinen Veränderungen viel bewirken kann.` },
    { id: "S2", nom: "Teil 2", temps: 25, mots: 100, points: 25, type: "Nachricht (formell)",
      consigne: `<p>In Ihrer Abteilung soll ein neues Computerprogramm eingeführt werden. Ihre Vorgesetzte, Frau Lehmann, hat alle gebeten, ihre Meinung mitzuteilen. Schreiben Sie ihr eine Nachricht.</p><ul><li>Bedanken Sie sich für die Möglichkeit, Ihre Meinung zu sagen.</li><li>Nennen Sie Vorteile des neuen Programms.</li><li>Beschreiben Sie Ihre Bedenken.</li><li>Machen Sie einen Vorschlag für die Einführung.</li></ul><p class="small">Überlegen Sie sich eine passende Reihenfolge. Vergessen Sie nicht Anrede und Gruß. Schreiben Sie mindestens 100 Wörter.</p>`,
      ctr: ["Message à votre supérieure sur un nouveau logiciel : remerciez, avantages, inquiétudes, proposition pour l'introduction. ≥100 mots.", "Hafatra ho an'ny lehibenao momba ny rindrankajy vaovao: misaotra, tombony, ahiahy, soso-kevitra. ≥100 teny."],
      checklist: ["Sehr geehrte Frau Lehmann,", "Fisaorana", "Tombony", "Ahiahy (Bedenken)", "Soso-kevitra (Schulung, Testphase…)", "Mit freundlichen Grüßen", "≥100 teny"],
      redemittel: ["vielen Dank, dass wir unsere Meinung äußern dürfen.", "Ich sehe in dem neuen Programm einige Vorteile: …", "Allerdings habe ich auch Bedenken, was … betrifft.", "Ich würde vorschlagen, zunächst eine Testphase …", "Eine Schulung für alle Mitarbeitenden wäre sinnvoll.", "Mit freundlichen Grüßen"],
      modele: `Sehr geehrte Frau Lehmann,

vielen Dank, dass wir unsere Meinung zum neuen Programm äußern dürfen.

Ich sehe darin einige Vorteile: Wir könnten alle Kundendaten an einem Ort speichern und müssten nicht mehr mit drei verschiedenen Tabellen arbeiten. Das würde viele Fehler vermeiden.

Allerdings habe ich auch Bedenken, was den Zeitpunkt betrifft. Im November haben wir besonders viele Aufträge, und eine Umstellung in dieser Phase könnte zu Verzögerungen führen. Außerdem haben einige Kolleginnen und Kollegen wenig Erfahrung mit neuer Software.

Ich würde deshalb vorschlagen, das Programm erst im Januar einzuführen und zunächst in einem kleinen Team zu testen. Eine kurze Schulung für alle wäre ebenfalls sinnvoll.

Mit freundlichen Grüßen
Mamy Andrianarisoa` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Teboka rehetra voavaly sy voazava · Tous les points développés" },
    { nom: "Kohärenz", desc: "Drafitra sy connecteurs · Structure et connecteurs" },
    { nom: "Wortschatz", desc: "Voambolana B2, maro samihafa · Vocabulaire varié niveau B2" },
    { nom: "Strukturen", desc: "Grammaire complexe : subordonnées, Konjunktiv II, passif" }
  ] },

  sprechen: { preparation: 15, teile: [
    { id: "P1", nom: "Teil 1 – Vortrag halten", mg: "Kabary fohy", duree: 4, mode: "present", em: "🎤",
      consigne: `<p>Sie nehmen an einem Seminar teil und sollen dort einen kurzen Vortrag halten. Wählen Sie ein Thema (Thema 1 oder 2) aus. Ihre Gesprächspartner hören zu und stellen Ihnen anschließend Fragen. Strukturieren Sie Ihren Vortrag mit einer Einleitung, einem Hauptteil und einem Schluss. Sprechen Sie circa 4 Minuten.</p>`,
      ptLabel: "PUNKT",
      themes: [
        { titre: "Thema 1 · Nebenjobs für Schüler", points: [
          { de: "Einleitung: Thema vorstellen und Aufbau nennen", mg: "Fampidirana", fr: "Introduction" },
          { de: "Beschreiben Sie verschiedene Nebenjobs für Jugendliche.", mg: "Asa fanampiny ho an'ny tanora.", fr: "Différents petits boulots." },
          { de: "Beschreiben Sie einen Job genauer.", mg: "Hazavao ny iray.", fr: "Décrivez-en un." },
          { de: "Nennen Sie Vor- und Nachteile und bewerten Sie diese.", mg: "Tombony, fatiantoka.", fr: "Avantages, inconvénients." },
          { de: "Schluss: Zusammenfassung und eigene Meinung", mg: "Famaranana", fr: "Conclusion" } ],
          modele: `Mein Vortrag behandelt das Thema „Nebenjobs für Schüler“. Ich nenne zuerst einige typische Jobs, beschreibe dann einen genauer und bewerte am Ende Vor- und Nachteile.

Viele Jugendliche in Deutschland tragen Zeitungen aus, arbeiten an der Kasse im Supermarkt, geben Nachhilfe oder passen auf Kinder auf. In den Ferien arbeiten manche auch in Fabriken oder Restaurants.

Genauer möchte ich auf die Nachhilfe eingehen. Ältere Schüler helfen jüngeren in Fächern wie Mathematik oder Englisch. Man verdient meist zwischen zehn und fünfzehn Euro pro Stunde, und die Zeiten sind flexibel.

Der Vorteil eines Nebenjobs liegt auf der Hand: Jugendliche verdienen eigenes Geld und lernen, Verantwortung zu übernehmen. Allerdings besteht die Gefahr, dass die Schule darunter leidet, wenn man zu viele Stunden arbeitet.

Zusammenfassend halte ich Nebenjobs für sinnvoll, solange sie nicht mehr als zehn Stunden pro Woche dauern. Vielen Dank für Ihre Aufmerksamkeit.` },
        { titre: "Thema 2 · Leben ohne Bargeld", points: [
          { de: "Einleitung: Thema vorstellen und Aufbau nennen", mg: "Fampidirana", fr: "Introduction" },
          { de: "Beschreiben Sie verschiedene Möglichkeiten zu bezahlen.", mg: "Fomba fandoavana samihafa.", fr: "Différents moyens de paiement." },
          { de: "Beschreiben Sie eine Möglichkeit genauer.", mg: "Hazavao ny iray.", fr: "Décrivez-en un." },
          { de: "Nennen Sie Vor- und Nachteile und bewerten Sie diese.", mg: "Tombony, fatiantoka.", fr: "Avantages, inconvénients." },
          { de: "Schluss: Zusammenfassung und eigene Meinung", mg: "Famaranana", fr: "Conclusion" } ],
          modele: `In meinem Vortrag geht es um ein Leben ohne Bargeld. Zunächst stelle ich verschiedene Zahlungsmöglichkeiten vor, dann beschreibe ich eine genauer, und schließlich bewerte ich Vor- und Nachteile.

Heute kann man bar bezahlen, mit der Bankkarte, mit der Kreditkarte, mit dem Handy oder mit Online-Diensten wie PayPal.

Besonders interessant finde ich das Bezahlen mit dem Handy. In Madagaskar nutzen viele Menschen „Mobile Money“, auch wenn sie kein Bankkonto haben. Man schickt Geld per SMS an die Familie auf dem Land – das ist schnell und sicher.

Ein großer Vorteil ist die Bequemlichkeit: Man muss kein Geld mitnehmen und kann nichts verlieren. Allerdings verliert man leichter den Überblick über seine Ausgaben. Außerdem haben ältere Menschen manchmal Schwierigkeiten mit der Technik, und bei einem Stromausfall funktioniert nichts mehr.

Insgesamt denke ich, dass digitales Bezahlen die Zukunft ist – Bargeld sollte aber als Möglichkeit bleiben. Vielen Dank.` } ],
      redemittel: [
        ["Einleitung · Fampidirana", ["Mein Vortrag behandelt das Thema …", "Zunächst …, dann …, schließlich …"]],
        ["Hauptteil · Ampahany lehibe", ["Viele … / Typisch ist …", "Besonders interessant finde ich …", "In Madagaskar …"]],
        ["Bewertung · Tombana", ["Der Vorteil liegt auf der Hand: …", "Allerdings besteht die Gefahr, dass …"]],
        ["Schluss · Famaranana", ["Zusammenfassend halte ich … für …", "Insgesamt denke ich, dass …"]]
      ] },
    { id: "P2", nom: "Teil 2 – Diskussion führen", mg: "Adihevitra", duree: 5, mode: "dialog", em: "⚖️",
      consigne: `<p>Sie sind Teilnehmende eines Debattierclubs und diskutieren über die Frage:</p><div class="plan"><b>Sollte ein soziales Pflichtjahr für alle jungen Menschen eingeführt werden?</b><ul><li>Tauschen Sie Ihren Standpunkt und Ihre Argumente aus.</li><li>Reagieren Sie auf die Argumente Ihres Gesprächspartners.</li><li>Fassen Sie am Ende zusammen: Sind Sie dafür oder dagegen?</li></ul>Stichpunkte: Gemeinschaft? · Freiheit? · Pflege und Kitas? · Kosten? · …</div>`,
      ctr: ["Débat : faut-il instaurer une année de service social obligatoire pour les jeunes ? Position, réaction, résumé.", "Adihevitra: tokony hampiharina ve ny taona iray asa sosialy tsy maintsy atao ho an'ny tanora?"],
      partenaire: [
        { id: "gb2m4-p2-1", t: "Ich finde ein soziales Pflichtjahr sinnvoll. Junge Leute lernen, Verantwortung zu übernehmen. Was meinst du?", aide: ["Da muss ich widersprechen: Eine Pflicht passt nicht zu einer freien Gesellschaft.", "Ich sehe das ähnlich, aber …"] },
        { id: "gb2m4-p2-2", t: "Aber denk an die Altenheime und Kitas! Dort fehlt überall Personal.", aide: ["Genau das ist das Problem: Junge Leute ohne Ausbildung sollen Fachkräfte ersetzen?", "Das stimmt, sie könnten dort wirklich helfen."] },
        { id: "gb2m4-p2-3", t: "Gut, aber das Jahr würde Menschen aus verschiedenen Schichten zusammenbringen.", aide: ["Das ist ein gutes Argument, das gebe ich zu.", "Das geht auch freiwillig, zum Beispiel mit mehr Geld für das FSJ."] },
        { id: "gb2m4-p2-4", t: "Wir müssen zum Schluss kommen. Wie lautet dein Fazit?", aide: ["Ich bin für ein attraktiveres freiwilliges Jahr, nicht für eine Pflicht.", "Wir sind uns einig, dass soziales Engagement wichtig ist."] }
      ],
      redemittel: [
        ["Standpunkt · Hevitra", ["Ich halte … für sinnvoll / problematisch.", "Aus meiner Sicht …"]],
        ["Widersprechen · Manohitra", ["Da muss ich widersprechen.", "Genau das ist das Problem: …"]],
        ["Einräumen · Manaiky ampahany", ["Das ist ein gutes Argument, das gebe ich zu.", "Da hast du nicht unrecht, aber …"]],
        ["Zusammenfassen · Mamintina", ["Mein Fazit: …", "Wir sind uns einig, dass …"]]
      ],
      modele: `A: Ein soziales Pflichtjahr wäre sinnvoll. Junge Leute lernen Verantwortung.
B: Da muss ich widersprechen. Eine Pflicht passt nicht zu einer freien Gesellschaft. Jeder sollte selbst entscheiden.
A: Aber in Altenheimen und Kitas fehlt überall Personal.
B: Genau das ist das Problem: Junge Leute ohne Ausbildung sollen Fachkräfte ersetzen? Das löst den Mangel nicht.
A: Das Jahr würde aber Menschen aus verschiedenen Schichten zusammenbringen.
B: Das ist ein gutes Argument, das gebe ich zu. Aber das geht auch freiwillig, wenn das FSJ besser bezahlt wird.
A: Mein Fazit: Ich bleibe für ein Pflichtjahr, eventuell mit Wahlmöglichkeiten.
B: Und ich bin für ein attraktiveres freiwilliges Jahr. Einig sind wir uns, dass soziales Engagement gefördert werden muss.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Teboka rehetra · Tous les points" },
    { nom: "Kohärenz", desc: "Drafitra mazava · Structure claire" },
    { nom: "Interaktion", desc: "Mamaly ny namanao (Teil 2) · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana B2" },
    { nom: "Strukturen", desc: "Grammaire B2" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "vorkochen", fr: "cuisiner à l'avance", mg: "mahandro mialoha", ex: "Am Sonntag koche ich vor." },
    { de: "die Rollenverteilung", fr: "la répartition des rôles", mg: "fizarana andraikitra", ex: "Die Rollenverteilung ist ungerecht." },
    { de: "abnehmen", fr: "maigrir", mg: "mihena lanja", ex: "Er hat fünf Kilo abgenommen." },
    { de: "die Abholzung", fr: "la déforestation", mg: "fandripahana ala", ex: "Die Abholzung zerstört den Lebensraum." },
    { de: "der Anreiz", fr: "l'incitation", mg: "fanentanana", ex: "Ökotourismus schafft einen Anreiz." },
    { de: "das Säugetier", fr: "le mammifère", mg: "biby mampinono", ex: "Lemuren sind Säugetiere." },
    { de: "verschreiben", fr: "prescrire", mg: "manome fanafody (dokotera)", ex: "Ärzte können Apps verschreiben." },
    { de: "die Krankenkasse", fr: "la caisse d'assurance maladie", mg: "fiantohana fahasalamana", ex: "Die Krankenkasse bezahlt die App." },
    { de: "sensibel", fr: "sensible", mg: "saro-pady", ex: "Gesundheitsdaten sind sensibel." },
    { de: "der Umsatz", fr: "le chiffre d'affaires", mg: "vola miditra", ex: "Mehr Öffnungszeiten heißt nicht mehr Umsatz." },
    { de: "abbuchen", fr: "prélever", mg: "maka mivantana (vola)", ex: "Die Kosten werden abgebucht." },
    { de: "leasen", fr: "louer en leasing", mg: "manofa (leasing)", ex: "Die Firma least ein Fahrrad." },
    { de: "schwanken", fr: "hésiter", mg: "misalasala", ex: "Ich schwanke noch." },
    { de: "ernten", fr: "récolter", mg: "mijinja", ex: "Die Kinder haben das Gemüse geerntet." },
    { de: "die Intensivstation", fr: "les soins intensifs", mg: "efitrano fitsaboana manokana", ex: "Sie arbeitet auf der Intensivstation." },
    { de: "knapp", fr: "rare, juste", mg: "tsy ampy", ex: "Das Personal ist knapp." },
    { de: "umstritten", fr: "controversé", mg: "iadian-kevitra", ex: "Die Zahlen sind umstritten." },
    { de: "sich verlagern", fr: "se déplacer", mg: "mifindra", ex: "Die Werbung verlagert sich ins Internet." },
    { de: "unterfordert", fr: "sous-stimulé", mg: "tsy ampy asa", ex: "Wer unterfordert ist, leidet." },
    { de: "die Verschwendung", fr: "le gaspillage", mg: "fandaniana tsy misy antony", ex: "Die Verschwendung von Lebensmitteln." },
    { de: "das Mindesthaltbarkeitsdatum", fr: "la date de durabilité minimale", mg: "daty farany tsara hohanina", ex: "Das Mindesthaltbarkeitsdatum ist erreicht." },
    { de: "die Bedenken", fr: "les réserves, les inquiétudes", mg: "ahiahy", ex: "Ich habe Bedenken." }
  ]
});
})();
