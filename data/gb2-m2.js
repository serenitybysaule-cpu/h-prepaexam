/* Goethe-Zertifikat B2 — Modellsatz 2 — textes originaux H Conseil & Formation */
(function(){
window.POOLS.GB2.sets.push({
  id: "gb2m2", titre: "Modellsatz 2", theme: "Asa an-tsitrapo · Lavanila · Fitadidiana · Ankizy sy finday",
  lesen: { temps: 65, teile: [
    { id: "L1", nom: "Teil 1", type: "who", temps: 18,
      consigne: "Sie lesen in einem Forum, wie Menschen über ehrenamtliche Arbeit neben dem Beruf denken. Auf welche der vier Personen treffen die einzelnen Aussagen zu? Die Personen können mehrmals gewählt werden.",
      ctr: ["Forum sur le bénévolat à côté du travail : à quelle personne (a–d) correspond chaque affirmation ? Plusieurs fois possible.", "Forum momba ny asa an-tsitrapo ankoatra ny asa: iza amin'ireo olona 4 no mifanaraka? Azo averina."],
      personnes: { a: "Katharina", b: "Jonas", c: "Haingo", d: "Uwe" },
      texte: `<div class="ads">
<div class="ad"><span class="l">a</span><b>Katharina:</b> Seit drei Jahren lese ich jeden Mittwochabend Kindern in der Stadtbibliothek vor. Viele kommen aus Familien, in denen zu Hause kein Deutsch gesprochen wird. Für mich ist das der schönste Abend der Woche, auch wenn ich nach meinem Bürojob oft müde bin. Ich finde allerdings, dass Arbeitgeber solches Engagement stärker unterstützen sollten – etwa mit einem freien Tag im Jahr.</div>
<div class="ad"><span class="l">b</span><b>Jonas:</b> Ich habe es versucht: Freiwillige Feuerwehr, zwei Abende pro Woche plus Einsätze in der Nacht. Nach einem Jahr musste ich aufhören, weil ich bei der Arbeit nicht mehr konzentriert war. Ich bewundere Leute, die das schaffen. Heute spende ich lieber Geld – das passt besser zu meinem Leben.</div>
<div class="ad"><span class="l">c</span><b>Haingo:</b> Als ich nach Deutschland kam, hat mir eine Ehrenamtliche bei allen Behördengängen geholfen. Ohne sie hätte ich viele Formulare nicht verstanden. Heute mache ich das Gleiche für Neuankömmlinge aus Madagaskar und anderen französischsprachigen Ländern. Für mich ist das ein Weg, etwas zurückzugeben.</div>
<div class="ad"><span class="l">d</span><b>Uwe:</b> Ehrenamt ist schön und gut, aber ich sehe auch die Gefahr: Der Staat spart, wo Freiwillige die Arbeit machen. In unserem Altenheim fehlen bezahlte Pflegekräfte, und die Ehrenamtlichen sollen die Lücke füllen. Ich trainiere trotzdem jeden Samstag eine Jugendmannschaft im Fußball – das macht mir einfach Spaß.</div></div>`,
      exemple: { q: "Wer engagiert sich für Kinder, die zu Hause eine andere Sprache sprechen?", a: "a" },
      items: [
        { n: 1, q: "Wer hat sein Ehrenamt aufgegeben?", tr: ["Qui a abandonné son bénévolat ?", "Iza no nijanona tamin'ny asa an-tsitrapo?"], a: "b", exp: { mg: "Jonas: « Nach einem Jahr musste ich aufhören ».", fr: "Jonas a arrêté après un an." } },
        { n: 2, q: "Wer hat selbst Hilfe von Ehrenamtlichen bekommen?", tr: ["Qui a lui-même reçu l'aide de bénévoles ?", "Iza no efa nahazo fanampiana avy amin'ny mpanao asa an-tsitrapo?"], a: "c", exp: { mg: "Haingo: nisy nanampy azy tamin'ny Behördengänge.", fr: "Haingo a été aidée à son arrivée." } },
        { n: 3, q: "Wer wünscht sich mehr Unterstützung von Firmen?", tr: ["Qui souhaite plus de soutien des entreprises ?", "Iza no maniry fanohanana bebe kokoa avy amin'ny orinasa?"], a: "a", exp: { mg: "Katharina: « Arbeitgeber … stärker unterstützen ».", fr: "Katharina : un jour libre offert par l'employeur." } },
        { n: 4, q: "Wer kritisiert, dass Freiwillige bezahlte Arbeit ersetzen?", tr: ["Qui critique que les bénévoles remplacent un travail payé ?", "Iza no manakiana fa ny mpanao an-tsitrapo no misolo ny asa tokony haloa?"], a: "d", exp: { mg: "Uwe: « Der Staat spart … die Lücke füllen ».", fr: "Uwe : l'État fait des économies." } },
        { n: 5, q: "Für wen hat das Ehrenamt mit Sport zu tun?", tr: ["Pour qui le bénévolat est-il lié au sport ?", "Ho an'iza no mifandray amin'ny fanatanjahantena ny asa an-tsitrapo?"], a: "d", exp: { mg: "Uwe: mpanazatra baolina kitra.", fr: "Uwe entraîne une équipe de foot." } },
        { n: 6, q: "Wer unterstützt heute auf andere Weise?", tr: ["Qui aide aujourd'hui d'une autre manière ?", "Iza no manampy amin'ny fomba hafa ankehitriny?"], a: "b", exp: { mg: "Jonas: « spende ich lieber Geld ».", fr: "Jonas donne de l'argent." } },
        { n: 7, q: "Wer sieht das Ehrenamt als Dank für frühere Hilfe?", tr: ["Qui voit le bénévolat comme un remerciement ?", "Iza no mihevitra ny asa an-tsitrapo ho fisaorana?"], a: "c", exp: { mg: "Haingo: « etwas zurückzugeben ».", fr: "Haingo : rendre ce qu'on a reçu." } },
        { n: 8, q: "Wer erlebt das Ehrenamt trotz Müdigkeit als Höhepunkt?", tr: ["Pour qui c'est un moment fort malgré la fatigue ?", "Iza no mahita azy ho fotoana tsara indrindra na dia vizana aza?"], a: "a", exp: { mg: "Katharina: « der schönste Abend der Woche, auch wenn ich … müde bin ».", fr: "Katharina." } },
        { n: 9, q: "Wer musste auch nachts aktiv sein?", tr: ["Qui devait aussi intervenir la nuit ?", "Iza no tsy maintsy niasa tamin'ny alina koa?"], a: "b", exp: { mg: "Jonas: « Einsätze in der Nacht » (mpamono afo).", fr: "Jonas, pompier volontaire." } }
      ] },
    { id: "L2", nom: "Teil 2", type: "match", temps: 12, zero: false, gap: true,
      consigne: "Sie lesen in einer Zeitschrift einen Artikel über Vanille. Welche Sätze passen in die Lücken? Zwei Sätze passen nicht.",
      ctr: ["Article sur la vanille : quelle phrase (a–h) va dans chaque trou ? Deux phrases sont en trop.", "Lahatsoratra momba ny lavanila: iza no fehezanteny mifanaraka amin'ny banga? Roa no tafahoatra."],
      texte: `<h3>Das schwarze Gold Madagaskars</h3>
<p>Ob in Eis, Kuchen oder Parfüm – Vanille gehört zu den beliebtesten Aromen der Welt. <span class="gap">[0]</span> Echte Vanille ist dagegen selten und teuer.</p>
<p>Ursprünglich stammt die Pflanze aus Mexiko. Dort wurde ihre Blüte von einer bestimmten Bienenart bestäubt, die es sonst nirgends gab. <span class="gap">[10]</span> Erst 1841 entdeckte ein zwölfjähriger Sklave auf der Insel Réunion, wie man die Blüten mit der Hand bestäuben kann.</p>
<p>Heute kommen rund 80 Prozent der Weltproduktion aus Madagaskar, vor allem aus der Region SAVA im Nordosten. <span class="gap">[11]</span> Jede Blüte öffnet sich nur für wenige Stunden, und die Bäuerinnen und Bauern müssen genau in diesem Moment bereit sein.</p>
<p>Nach der Ernte beginnt eine monatelange Verarbeitung. <span class="gap">[12]</span> Erst dann entwickeln sie ihr typisches Aroma und ihre dunkle Farbe.</p>
<p>Der Preis für Vanille schwankt extrem. <span class="gap">[13]</span> In solchen Jahren werden manche Bauern plötzlich reich, in anderen verdienen sie kaum genug zum Leben.</p>
<p>Hohe Preise haben allerdings auch Schattenseiten. <span class="gap">[14]</span> Viele Familien schlafen deshalb in der Erntezeit direkt bei ihren Pflanzen.</p>
<p>Inzwischen versuchen Kooperativen, die Lage zu verbessern. <span class="gap">[15]</span> So können die Familien besser planen und in die Schulbildung ihrer Kinder investieren.</p>`,
      choixTitre: "Sätze",
      choix: {
        a: "Doch das meiste, was wir als Vanille essen, wird künstlich im Labor hergestellt.",
        b: "Deshalb trug die Pflanze in anderen Ländern lange keine Früchte.",
        c: "Dort wird jede einzelne Blüte bis heute von Hand bestäubt.",
        d: "Die grünen Schoten werden dabei erhitzt, in der Sonne getrocknet und wochenlang gelagert.",
        e: "Nach einem Wirbelsturm im Jahr 2017 stieg er zum Beispiel auf über 600 Dollar pro Kilo.",
        f: "Vanilleeis wurde übrigens erst im 18. Jahrhundert in Frankreich erfunden.",
        g: "Diebe stehlen immer wieder unreife Schoten direkt von den Feldern.",
        h: "Sie garantieren ihren Mitgliedern einen festen Mindestpreis über mehrere Jahre."
      },
      exemple: { q: "Lücke 0", a: "a" },
      items: [
        { n: 10, q: "Lücke 10", a: "b", exp: { mg: "Ny tantely manokana tany Mexique ihany → tany amin'ny firenena hafa tsy namoa voa.", fr: "Abeille seulement au Mexique → pas de fruits ailleurs." } },
        { n: 11, q: "Lücke 11", a: "c", exp: { mg: "« Dort » = SAVA; avy eo « Jede Blüte öffnet sich nur …».", fr: "« Dort » renvoie à la SAVA ; suite logique sur les fleurs." } },
        { n: 12, q: "Lücke 12", a: "d", exp: { mg: "« Verarbeitung » → fanafanana, fanamainana; « Erst dann … ».", fr: "Préparation des gousses, puis l'arôme apparaît." } },
        { n: 13, q: "Lücke 13", a: "e", exp: { mg: "« schwankt » → ohatra 2017; « In solchen Jahren ».", fr: "Exemple de l'envolée des prix." } },
        { n: 14, q: "Lücke 14", a: "g", exp: { mg: "« Schattenseiten » → mpangalatra; « deshalb schlafen … bei ihren Pflanzen ».", fr: "Les vols → dormir près des plants." } },
        { n: 15, q: "Lücke 15", a: "h", exp: { mg: "Kooperativen → « Mindestpreis » → « besser planen ». Ny f no tafahoatra.", fr: "Prix minimum → planifier. f est en trop." } }
      ] },
    { id: "L3", nom: "Teil 3", type: "mc", temps: 12,
      consigne: "Sie lesen in einer Zeitung einen Artikel über das Lernen im Alter. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
      ctr: ["Article sur l'apprentissage à l'âge adulte. Choisissez la bonne réponse.", "Lahatsoratra momba ny fianarana rehefa lehibe. Safidio ny valiny marina."],
      texte: `<div class="press"><h3>Nie zu alt zum Lernen</h3>
<p>Lange galt es als sicher: Wer eine Sprache perfekt lernen will, muss als Kind damit beginnen. Neuere Studien zeichnen ein differenzierteres Bild. Zwar lernen Kinder die Aussprache leichter, Erwachsene sind aber beim Wortschatz und bei der Grammatik oft schneller – weil sie Regeln bewusst verstehen und auf Erfahrungen mit anderen Sprachen zurückgreifen können.</p>
<p>Der Neurowissenschaftler Prof. Lars Brenner erklärt, dass unser Gehirn bis ins hohe Alter neue Verbindungen bildet. „Entscheidend ist nicht das Alter, sondern wie regelmäßig man übt.“ Wer täglich eine Viertelstunde lernt, erreicht mehr als jemand, der einmal pro Woche drei Stunden investiert.</p>
<p>Wichtig seien außerdem Pausen. Im Schlaf sortiert das Gehirn, was es tagsüber aufgenommen hat. Brenner rät deshalb, kurz vor dem Schlafengehen noch einmal die neuen Wörter zu wiederholen – aber ohne Bildschirm.</p>
<p>Ein großes Hindernis für Erwachsene sei die Angst vor Fehlern. „Kinder sprechen einfach drauflos. Erwachsene schweigen lieber, als sich zu blamieren.“ Brenner empfiehlt deshalb Tandems: Zwei Menschen bringen sich gegenseitig ihre Muttersprache bei. So entstehe eine Situation, in der beide abwechselnd Lehrer und Lernende sind.</p></div>`,
      items: [
        { n: 16, q: "Neuere Studien zeigen, dass Erwachsene …", tr: ["Des études récentes montrent que les adultes…", "Asehon'ny fanadihadiana vaovao fa ny olon-dehibe…"], opts: ["in manchen Bereichen schneller lernen als Kinder.", "keine Sprache mehr perfekt lernen können.", "die Aussprache leichter lernen."], otr: [["apprennent plus vite dans certains domaines", "haingana kokoa amin'ny sehatra sasany"], ["ne peuvent plus apprendre parfaitement", "tsy afaka mianatra tsara intsony"], ["apprennent plus facilement la prononciation", "mora kokoa ny fanononana"]], a: "a", exp: { mg: "« beim Wortschatz und bei der Grammatik oft schneller ».", fr: "Plus rapides en vocabulaire et grammaire." } },
        { n: 17, q: "Nach Prof. Brenner ist beim Lernen am wichtigsten, …", tr: ["Selon le Pr Brenner, le plus important est…", "Araka ny Prof. Brenner, ny tena zava-dehibe dia…"], opts: ["wie alt man ist.", "dass man regelmäßig übt.", "wie lange man auf einmal lernt."], otr: [["l'âge", "ny taona"], ["s'exercer régulièrement", "manazatra tsy tapaka"], ["la durée d'une séance", "ny faharetan'ny fianarana indray mandeha"]], a: "b", exp: { mg: "« wie regelmäßig man übt ».", fr: "La régularité." } },
        { n: 18, q: "Was passiert laut dem Text im Schlaf?", tr: ["Que se passe-t-il pendant le sommeil ?", "Inona no mitranga mandritra ny torimaso?"], opts: ["Das Gehirn vergisst unwichtige Wörter.", "Das Gehirn ordnet neue Informationen.", "Man lernt neue Wörter ohne Mühe."], otr: [["le cerveau oublie les mots inutiles", "manadino teny tsy ilaina"], ["le cerveau classe les informations", "mandamina ny vaovao ny ati-doha"], ["on apprend sans effort", "mianatra tsy misy ezaka"]], a: "b", exp: { mg: "« sortiert das Gehirn ».", fr: "Le cerveau trie." } },
        { n: 19, q: "Vor dem Schlafengehen soll man …", tr: ["Avant de dormir, on doit…", "Alohan'ny hatoriana dia tokony…"], opts: ["Vokabeln auf dem Handy üben.", "neue Wörter ohne Bildschirm wiederholen.", "gar nicht mehr lernen."], otr: [["réviser sur le portable", "mianatra amin'ny finday"], ["répéter les mots sans écran", "mamerina teny tsy misy efijery"], ["ne plus étudier", "tsy hianatra intsony"]], a: "b", exp: { mg: "« wiederholen – aber ohne Bildschirm ».", fr: "Sans écran." } },
        { n: 20, q: "Ein Problem vieler Erwachsener ist, dass sie …", tr: ["Un problème de beaucoup d'adultes est qu'ils…", "Olana iray amin'ny olon-dehibe maro dia…"], opts: ["zu viel sprechen.", "Angst haben, Fehler zu machen.", "keine Zeit zum Lernen haben."], otr: [["parlent trop", "miteny be loatra"], ["ont peur de faire des fautes", "matahotra hanao hadisoana"], ["n'ont pas le temps", "tsy manana fotoana"]], a: "b", exp: { mg: "« die Angst vor Fehlern ».", fr: "La peur des fautes." } },
        { n: 21, q: "Bei einem Tandem …", tr: ["Dans un tandem…", "Amin'ny tandem…"], opts: ["unterrichtet ein Lehrer zwei Schüler.", "lernen beide voneinander.", "lernen zwei Personen dieselbe Sprache."], otr: [["un prof enseigne à deux élèves", "mpampianatra iray, mpianatra roa"], ["les deux apprennent l'un de l'autre", "mifampianatra izy roa"], ["deux personnes apprennent la même langue", "fiteny iray ihany"]], a: "b", exp: { mg: "« bringen sich gegenseitig … bei ».", fr: "Ils s'enseignent mutuellement." } }
      ] },
    { id: "L4", nom: "Teil 4", type: "match", temps: 12, zero: false, layout: "choixFirst",
      consigne: "Sie lesen in einer Zeitschrift Meinungsäußerungen zum Thema „Ab wann ein eigenes Smartphone?“. Welche Äußerung passt zu welcher Überschrift? Eine Äußerung passt nicht. Die Äußerung a ist das Beispiel und kann nicht noch einmal verwendet werden.",
      ctr: ["Opinions : à partir de quel âge un smartphone ? Quelle opinion (b–h) pour chaque titre ? Une en trop ; a = exemple.", "Hevitra: manomboka amin'ny firy taona ny finday? Iza no mifanaraka amin'ny lohateny? Iray tafahoatra; a no ohatra."],
      choixTitre: "Äußerungen",
      choix: {
        a: "<b>Petra, Bremen:</b> Meine Tochter fährt allein mit dem Bus zur Schule. Mit dem Handy weiß ich, dass sie gut angekommen ist. Das beruhigt mich.",
        b: "<b>Ali, Frankfurt:</b> In der Klasse meines Sohnes haben alle ein Smartphone außer ihm. Er wird ausgeschlossen, weil die Gruppe alles über WhatsApp organisiert.",
        c: "<b>Sandra, Dresden:</b> Bevor mein Kind ein Handy bekommt, machen wir einen Vertrag: wie lange pro Tag, welche Apps, keine Handys beim Essen.",
        d: "<b>Mirana, Köln:</b> Ich sehe es als Lehrerin jeden Tag: Kinder, die schon mit acht ein Smartphone haben, können sich schlechter konzentrieren.",
        e: "<b>Tobias, Kiel:</b> Warum nicht ein einfaches Handy ohne Internet? Damit kann mein Sohn anrufen, aber nicht stundenlang Videos schauen.",
        f: "<b>Gabi, Ulm:</b> Wir Eltern sind doch die größten Vorbilder – wer selbst ständig aufs Display schaut, kann es den Kindern kaum verbieten.",
        g: "<b>Lars, Hannover:</b> Schulen sollten Medienkompetenz unterrichten, statt Smartphones einfach zu verbieten. Die Kinder müssen lernen, damit umzugehen.",
        h: "<b>Jutta, Passau:</b> Ich habe meinem Sohn ein Smartphone zum 14. Geburtstag geschenkt. Ehrlich gesagt bereue ich es nicht."
      },
      exemple: { q: "Mehr Sicherheit auf dem Schulweg", a: "a" },
      items: [
        { n: 22, q: "Klare Regeln vereinbaren", tr: ["Convenir de règles claires", "Mifanaraka amin'ny fitsipika mazava"], a: "c", exp: { mg: "Sandra: « Vertrag » = fifanarahana.", fr: "Sandra : un contrat." } },
        { n: 23, q: "Ohne Handy gehört man nicht dazu", tr: ["Sans portable, on est exclu", "Raha tsy misy finday dia voahilika"], a: "b", exp: { mg: "Ali: « ausgeschlossen ».", fr: "Ali : son fils est exclu." } },
        { n: 24, q: "Eine Alternative ohne Internet", tr: ["Une alternative sans Internet", "Safidy hafa tsy misy Internet"], a: "e", exp: { mg: "Tobias: « einfaches Handy ohne Internet ».", fr: "Tobias : portable simple." } },
        { n: 25, q: "Erwachsene müssen mit gutem Beispiel vorangehen", tr: ["Les adultes doivent montrer l'exemple", "Tokony hanome ohatra tsara ny olon-dehibe"], a: "f", exp: { mg: "Gabi: « die größten Vorbilder ».", fr: "Gabi : modèles." } },
        { n: 26, q: "Folgen für die Aufmerksamkeit", tr: ["Conséquences sur l'attention", "Vokany amin'ny fifantohana"], a: "d", exp: { mg: "Mirana: « schlechter konzentrieren ».", fr: "Mirana : concentration." } },
        { n: 27, q: "Bildung statt Verbote", tr: ["L'éducation plutôt que l'interdiction", "Fanabeazana fa tsy fandrarana"], a: "g", exp: { mg: "Lars: « Medienkompetenz unterrichten ». Ny h no tafahoatra.", fr: "Lars. h est en trop." } }
      ] },
    { id: "L5", nom: "Teil 5", type: "match", temps: 6, zero: false, layout: "choixFirst",
      consigne: "Sie ziehen in ein Studentenwohnheim und lesen die Hausordnung. Welche Überschriften passen zu den Paragrafen? Vier Überschriften werden nicht gebraucht.",
      ctr: ["Règlement d'une résidence étudiante : quel titre (a–h) pour chaque paragraphe ? Quatre titres en trop.", "Fitsipiky ny trano fonenan'ny mpianatra: iza no lohateny mifanaraka? Lohateny 4 tafahoatra."],
      choixTitre: "Inhaltsverzeichnis",
      choix: { a: "Mietvertrag und Kaution", b: "Gemeinschaftsküche", c: "Gäste und Übernachtungen", d: "Internetzugang", e: "Haustiere", f: "Fahrräder", g: "Brandschutz", h: "Waschmaschinen" },
      texte: `<div class="rules">
<p><b>§ 0</b> Der Vertrag wird für mindestens zwei Semester geschlossen. Bei Einzug ist eine Sicherheitsleistung von zwei Monatsmieten zu zahlen, die beim Auszug zurückerstattet wird.</p>
<p><b>§ 28</b> Besuch ist jederzeit willkommen. Übernachtet ein Gast länger als drei Nächte, muss dies der Hausverwaltung schriftlich mitgeteilt werden.</p>
<p><b>§ 29</b> Kerzen und elektrische Heizgeräte sind in den Zimmern nicht erlaubt. Die Rauchmelder dürfen nicht abgedeckt oder entfernt werden.</p>
<p><b>§ 30</b> Jede Etage teilt sich einen Kochbereich. Benutztes Geschirr ist sofort abzuwaschen; Lebensmittel sind im persönlichen Kühlschrankfach aufzubewahren.</p></div>`,
      exemple: { q: "§ 0", a: "a" },
      items: [
        { n: 28, q: "§ 28", a: "c", exp: { mg: "Vahiny mihoatra ny 3 alina.", fr: "Visiteurs et nuitées." } },
        { n: 29, q: "§ 29", a: "g", exp: { mg: "Labozia, Rauchmelder → fiarovana amin'ny afo.", fr: "Bougies, détecteurs → protection incendie." } },
        { n: 30, q: "§ 30", a: "b", exp: { mg: "Kochbereich → lakozia iombonana.", fr: "Cuisine commune." } }
      ] }
  ] },

  hoeren: { temps: 40, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 1, type: "mixed",
      consigne: "Sie hören fünf Gespräche und Äußerungen. Sie hören jeden Text einmal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
      clips: [
        { id: "gb2m2-h1-1", titre: "Text 1", script: [{ s: "m", n: "Mann", t: "Ich habe mir letztes Jahr ein E-Bike gekauft, eigentlich nur für den Weg zur Arbeit. Inzwischen fahre ich auch am Wochenende lange Touren, sogar in die Berge. Das Auto steht fast nur noch in der Garage. Teuer war das Rad schon, aber ich spare jetzt jeden Monat viel Benzin." }],
          items: [
            { n: 1, type: "rf", q: "Der Mann spricht über ein neues Verkehrsmittel.", tr: ["L'homme parle d'un nouveau moyen de transport.", "Miresaka momba ny fitaterana vaovao ilay lehilahy."], a: "r", exp: { mg: "E-Bike = bisikileta elektrika.", fr: "Le vélo électrique." } },
            { n: 2, type: "mc", q: "Was sagt er über das Auto?", tr: ["Que dit-il de la voiture ?", "Inona no lazainy momba ny fiara?"], opts: ["Er benutzt es kaum noch.", "Er hat es verkauft.", "Er fährt damit in die Berge."], otr: [["il ne l'utilise presque plus", "saika tsy ampiasainy intsony"], ["il l'a vendue", "nivarotra azy"], ["il va en montagne avec", "mitondra azy any an-tendrombohitra"]], a: "a", exp: { mg: "« steht fast nur noch in der Garage ».", fr: "Elle reste au garage." } }
          ] },
        { id: "gb2m2-h1-2", titre: "Text 2", script: [{ s: "f", n: "Radio", t: "Eine neue Umfrage zeigt: Fast die Hälfte der Deutschen liest keine gedruckte Zeitung mehr. Die meisten informieren sich über Apps und soziale Netzwerke. Medienforscher warnen allerdings, dass dort oft nicht klar ist, woher eine Nachricht stammt." }],
          items: [
            { n: 3, type: "rf", q: "Laut Umfrage lesen die meisten Deutschen täglich Zeitung.", tr: ["Selon le sondage, la plupart des Allemands lisent le journal tous les jours.", "Araka ny fanadihadiana, mamaky gazety isan'andro ny ankamaroan'ny Alemana."], a: "f", exp: { mg: "Saika antsasany no tsy mamaky gazety intsony.", fr: "Presque la moitié ne lit plus de journal." } },
            { n: 4, type: "mc", q: "Wovor warnen Medienforscher?", tr: ["Contre quoi les chercheurs mettent-ils en garde ?", "Inona no ampitandreman'ny mpikaroka?"], opts: ["Vor unklaren Quellen.", "Vor zu teuren Apps.", "Vor dem Ende des Fernsehens."], otr: [["les sources peu claires", "loharano tsy mazava"], ["les applis trop chères", "app lafo loatra"], ["la fin de la télévision", "fiafaran'ny fahitalavitra"]], a: "a", exp: { mg: "« nicht klar ist, woher eine Nachricht stammt ».", fr: "Origine des infos peu claire." } }
          ] },
        { id: "gb2m2-h1-3", titre: "Text 3", script: [{ s: "f", n: "Frau", t: "Hast du dich jetzt für die Stelle in Hamburg beworben?" }, { s: "m", n: "Mann", t: "Ja, aber ehrlich gesagt bin ich unsicher. Das Gehalt ist besser, aber meine Frau hat gerade hier eine neue Arbeit angefangen. Wir müssten eine Wochenendbeziehung führen." }, { s: "f", n: "Frau", t: "Und wenn du fragst, ob du teilweise im Homeoffice arbeiten kannst?" }],
          items: [
            { n: 5, type: "rf", q: "Der Mann hat sich noch nicht beworben.", tr: ["L'homme n'a pas encore postulé.", "Mbola tsy nangataka asa ilay lehilahy."], a: "f", exp: { mg: "« Ja » → efa nangataka.", fr: "Il a postulé." } },
            { n: 6, type: "mc", q: "Was schlägt die Frau vor?", tr: ["Que propose la femme ?", "Inona no atoron'ilay vehivavy?"], opts: ["Zum Teil von zu Hause zu arbeiten.", "Die Stelle abzulehnen.", "Mit der Familie nach Hamburg zu ziehen."], otr: [["travailler en partie à domicile", "miasa an-trano indraindray"], ["refuser le poste", "mandà ny asa"], ["déménager en famille", "mifindra miaraka amin'ny fianakaviana"]], a: "a", exp: { mg: "« teilweise im Homeoffice ».", fr: "Télétravail partiel." } }
          ] },
        { id: "gb2m2-h1-4", titre: "Text 4", script: [{ s: "m", n: "Mann", t: "Viele unterschätzen, wie viel Wasser in unseren Lebensmitteln steckt. Für ein Kilo Rindfleisch braucht man über fünfzehntausend Liter. Ich esse deshalb nicht komplett vegetarisch, aber nur noch einmal pro Woche Fleisch – und dann von einem Bauern aus der Region." }],
          items: [
            { n: 7, type: "rf", q: "Der Mann isst kein Fleisch mehr.", tr: ["L'homme ne mange plus de viande.", "Tsy mihinana hena intsony ilay lehilahy."], a: "f", exp: { mg: "« einmal pro Woche Fleisch ».", fr: "Une fois par semaine." } },
            { n: 8, type: "mc", q: "Worauf achtet er beim Kauf?", tr: ["À quoi fait-il attention ?", "Inona no jereny rehefa mividy?"], opts: ["Auf regionale Herkunft.", "Auf einen günstigen Preis.", "Auf Bio-Siegel."], otr: [["l'origine régionale", "avy eo an-toerana"], ["le prix bas", "vidiny mora"], ["le label bio", "marika bio"]], a: "a", exp: { mg: "« von einem Bauern aus der Region ».", fr: "Viande régionale." } }
          ] },
        { id: "gb2m2-h1-5", titre: "Text 5", script: [{ s: "f", n: "Studentin", t: "Ich jobbe neben dem Studium in einem Callcenter. Die Arbeit ist anstrengend, aber flexibel: Ich kann meine Schichten selbst wählen. Was mich stört, ist, dass man jede Pause genau planen muss. Nächstes Semester suche ich mir trotzdem etwas, das mit meinem Fach zu tun hat." }],
          items: [
            { n: 9, type: "rf", q: "Die Studentin kann ihre Arbeitszeiten selbst bestimmen.", tr: ["L'étudiante peut choisir ses horaires.", "Afaka misafidy ny ora fiasany ilay mpianatra."], a: "r", exp: { mg: "« Ich kann meine Schichten selbst wählen ».", fr: "Oui." } },
            { n: 10, type: "mc", q: "Was plant sie für das nächste Semester?", tr: ["Que prévoit-elle pour le semestre prochain ?", "Inona no kasainy ho an'ny semestra manaraka?"], opts: ["Einen Job, der zu ihrem Studium passt.", "Mehr Schichten im Callcenter.", "Eine Pause vom Studium."], otr: [["un job lié à ses études", "asa mifandraika amin'ny fianarany"], ["plus d'heures au call center", "ora maro kokoa"], ["une pause dans ses études", "fiatoana amin'ny fianarana"]], a: "a", exp: { mg: "« etwas, das mit meinem Fach zu tun hat ».", fr: "Un job lié à sa matière." } }
          ] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 2, type: "mc", lecture: 90,
      consigne: "Sie hören im Radio ein Interview mit einer Unternehmerin. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie jetzt die Aufgaben 11 bis 16. Dazu haben Sie 90 Sekunden Zeit.",
      ctr: ["Interview radio avec une entrepreneuse, deux écoutes. Questions 11 à 16.", "Resadresaka amin'ny mpandraharaha vehivavy, henoina indroa."],
      clips: [{ id: "gb2m2-h2", titre: "Interview", script: [
        { s: "m", n: "Moderator", t: "Frau Ranaivo, Sie haben in Leipzig ein Unternehmen gegründet, das Schulhefte aus recyceltem Papier herstellt. Wie kam es dazu?" },
        { s: "f", n: "Frau Ranaivo", t: "Ich habe in Leipzig Wirtschaft studiert und nebenbei in einer Druckerei gejobbt. Dort habe ich gesehen, wie viel Papier jeden Tag weggeworfen wird. Fehldrucke, Reste – alles im Container. Das hat mich nicht mehr losgelassen." },
        { s: "m", n: "Moderator", t: "Und dann haben Sie sofort gegründet?" },
        { s: "f", n: "Frau Ranaivo", t: "Nein, zuerst habe ich nach dem Studium drei Jahre bei einer Bank gearbeitet. Ich wollte Erfahrung sammeln und etwas Geld sparen. Die Banken wollten mir am Anfang nämlich keinen Kredit geben." },
        { s: "m", n: "Moderator", t: "Wie haben Sie das Problem gelöst?" },
        { s: "f", n: "Frau Ranaivo", t: "Über Crowdfunding. Über tausend Menschen haben im Internet kleine Beträge gegeben. Das war nicht nur Geld, sondern auch ein Beweis, dass es eine Nachfrage gibt." },
        { s: "m", n: "Moderator", t: "Was ist heute die größte Herausforderung?" },
        { s: "f", n: "Frau Ranaivo", t: "Ganz klar der Preis. Unsere Hefte sind etwas teurer als die aus dem Supermarkt. Viele Eltern finden die Idee gut, kaufen am Ende aber doch das Billigste. Deshalb arbeiten wir jetzt direkt mit Schulen zusammen, die größere Mengen bestellen." },
        { s: "m", n: "Moderator", t: "Und Ihre Pläne?" },
        { s: "f", n: "Frau Ranaivo", t: "Ich möchte ein Projekt in Madagaskar starten, wo viele Kinder kein Material für die Schule haben. Für jedes verkaufte Paket spenden wir ein Heft an eine Schule in Antsirabe." }],
        items: [
          { n: 11, q: "Die Idee zu ihrem Unternehmen hatte Frau Ranaivo …", tr: ["L'idée de son entreprise lui est venue…", "Nipoitra… ny hevitry ny orinasany"], opts: ["bei einem Job neben dem Studium.", "während eines Praktikums in einer Bank.", "in einem Kurs an der Universität."], otr: [["lors d'un job étudiant", "nandritra ny asa nataony nianatra"], ["pendant un stage en banque", "nandritra ny stage tany amin'ny banky"], ["dans un cours à l'université", "tao amin'ny fampianarana"]], a: "a", exp: { mg: "« nebenbei in einer Druckerei gejobbt ».", fr: "Job dans une imprimerie." } },
          { n: 12, q: "Nach dem Studium …", tr: ["Après ses études…", "Taorian'ny fianarany…"], opts: ["hat sie direkt ihre Firma gegründet.", "hat sie zuerst bei einer Bank gearbeitet.", "hat sie in der Druckerei weitergearbeitet."], otr: [["elle a créé directement son entreprise", "nanorina orinasa avy hatrany"], ["elle a d'abord travaillé en banque", "niasa tany amin'ny banky aloha"], ["elle est restée à l'imprimerie", "nijanona tany amin'ny fanontam-pirinty"]], a: "b", exp: { mg: "« drei Jahre bei einer Bank ».", fr: "Trois ans en banque." } },
          { n: 13, q: "Das Crowdfunding war für sie wichtig, weil …", tr: ["Le crowdfunding était important car…", "Zava-dehibe ny crowdfunding satria…"], opts: ["es zeigte, dass Menschen das Produkt wollen.", "die Bank es verlangt hat.", "sie damit Werbung machen konnte."], otr: [["il montrait qu'il y avait une demande", "nampiseho fa misy mila azy"], ["la banque l'exigeait", "notakian'ny banky"], ["elle pouvait faire de la pub", "afaka nanao dokam-barotra"]], a: "a", exp: { mg: "« ein Beweis, dass es eine Nachfrage gibt ».", fr: "Preuve de la demande." } },
          { n: 14, q: "Das größte Problem heute ist, dass …", tr: ["Le plus grand problème aujourd'hui est que…", "Ny olana lehibe indrindra ankehitriny dia…"], opts: ["es zu wenig Altpapier gibt.", "die Hefte teurer als andere sind.", "Schulen keine Hefte bestellen."], otr: [["il y a trop peu de vieux papier", "tsy ampy taratasy taloha"], ["les cahiers sont plus chers", "lafo kokoa ny kahie"], ["les écoles ne commandent pas", "tsy manafatra ny sekoly"]], a: "b", exp: { mg: "« Ganz klar der Preis … etwas teurer ».", fr: "Le prix." } },
          { n: 15, q: "Viele Eltern …", tr: ["Beaucoup de parents…", "Ray aman-dreny maro…"], opts: ["kaufen trotz guter Meinung billigere Hefte.", "bestellen große Mengen.", "kennen das Produkt nicht."], otr: [["achètent quand même moins cher", "mividy ny mora ihany"], ["commandent en grande quantité", "manafatra betsaka"], ["ne connaissent pas le produit", "tsy mahafantatra ny vokatra"]], a: "a", exp: { mg: "« finden die Idee gut, kaufen … das Billigste ».", fr: "Ils achètent le moins cher." } },
          { n: 16, q: "Mit dem Projekt in Madagaskar …", tr: ["Avec le projet à Madagascar…", "Amin'ny tetikasa any Madagasikara…"], opts: ["will sie dort eine Fabrik eröffnen.", "bekommen Schulen Hefte geschenkt.", "verkauft sie Hefte billiger."], otr: [["elle veut ouvrir une usine", "hanokatra orinasa"], ["des écoles reçoivent des cahiers", "omena kahie ny sekoly"], ["elle vend moins cher", "mivarotra mora kokoa"]], a: "b", exp: { mg: "« spenden wir ein Heft an eine Schule ».", fr: "Dons de cahiers." } }
        ] }] },
    { id: "H3", nom: "Teil 3", ecoutes: 1, type: "who", lecture: 60,
      consigne: "Sie hören im Radio ein Gespräch mit mehreren Personen. Die Personen sprechen über Massentourismus in Städten. Sie hören den Text einmal. Wählen Sie bei jeder Aufgabe: Wer sagt das?",
      ctr: ["Discussion radio sur le tourisme de masse dans les villes, une écoute : qui dit quoi ?", "Adihevitra momba ny fizahan-tany be loatra any an-tanàna, henoina indray mandeha: iza no niteny?"],
      personnes: { a: "Moderatorin", b: "Herr Vogt, Hotelier", c: "Frau Lenz, Anwohnerin" },
      exemple: { q: "Einige Städte zählen inzwischen mehr Touristen als Einwohner.", a: "a" },
      clips: [{ id: "gb2m2-h3", titre: "Gespräch", script: [
        { s: "f", n: "Moderatorin", t: "Einige Städte zählen inzwischen mehr Touristen als Einwohner. Darüber spreche ich mit Herrn Vogt, der ein Hotel in der Altstadt von Heidelberg führt, und mit Frau Lenz, die seit dreißig Jahren dort wohnt. Frau Lenz, wie erleben Sie die Situation?" },
        { s: "f2", n: "Frau Lenz", t: "Im Sommer kann ich kaum noch durch meine Straße gehen. Und die Bäckerei, in der ich jahrelang eingekauft habe, verkauft jetzt nur noch Souvenirs." },
        { s: "m", n: "Herr Vogt", t: "Ich verstehe das. Aber man darf nicht vergessen, wie viele Arbeitsplätze am Tourismus hängen. In meinem Hotel allein sind es fünfundzwanzig." },
        { s: "f", n: "Moderatorin", t: "Viele Städte überlegen, eine Gebühr für Tagesbesucher einzuführen." },
        { s: "m", n: "Herr Vogt", t: "Davon halte ich wenig. Die Tagesgäste lassen kaum Geld da, das stimmt. Aber eine Gebühr schreckt am Ende auch die Hotelgäste ab." },
        { s: "f2", n: "Frau Lenz", t: "Ich finde, das Problem sind vor allem die Ferienwohnungen. Wohnungen, in denen früher Familien gelebt haben, werden heute an Touristen vermietet." },
        { s: "f", n: "Moderatorin", t: "Was wäre denn eine Lösung?" },
        { s: "m", n: "Herr Vogt", t: "Man müsste die Besucher besser verteilen – auch auf die Stadtteile außerhalb der Altstadt. Da gibt es viel Schönes zu sehen." },
        { s: "f2", n: "Frau Lenz", t: "Und die Anwohner müssten endlich mitentscheiden dürfen. Bisher fragt uns niemand." }],
        items: [
          { n: 17, q: "Geschäfte für den täglichen Bedarf verschwinden.", tr: ["Les commerces du quotidien disparaissent.", "Manjavona ny fivarotana ilaina isan'andro."], a: "c", exp: { mg: "Lenz: ny mpanao mofo lasa mivarotra souvenirs.", fr: "Frau Lenz." } },
          { n: 18, q: "Der Tourismus schafft viele Jobs.", tr: ["Le tourisme crée beaucoup d'emplois.", "Mamorona asa maro ny fizahan-tany."], a: "b", exp: { mg: "Vogt: « Arbeitsplätze … fünfundzwanzig ».", fr: "Herr Vogt." } },
          { n: 19, q: "Eine Abgabe für Tagestouristen ist im Gespräch.", tr: ["Une taxe pour les visiteurs d'un jour est discutée.", "Resahina ny sarany ho an'ny mpitsidika iray andro."], a: "a", exp: { mg: "Ny mpanentana no niresaka momba ny « Gebühr ».", fr: "La modératrice." } },
          { n: 20, q: "Eine Gebühr hätte negative Folgen für Übernachtungsgäste.", tr: ["Une taxe aurait des effets négatifs sur les clients des hôtels.", "Mety hisy fiantraikany ratsy amin'ny vahiny matory ny sarany."], a: "b", exp: { mg: "Vogt: « schreckt … auch die Hotelgäste ab ».", fr: "Herr Vogt." } },
          { n: 21, q: "Wohnraum geht durch Ferienvermietung verloren.", tr: ["Des logements disparaissent à cause de la location touristique.", "Very ny trano fonenana noho ny fanofana ho an'ny mpizahatany."], a: "c", exp: { mg: "Lenz: « Ferienwohnungen ».", fr: "Frau Lenz." } },
          { n: 22, q: "Die Bewohner sollten an Entscheidungen beteiligt werden.", tr: ["Les habitants devraient participer aux décisions.", "Tokony handray anjara amin'ny fanapahan-kevitra ny mponina."], a: "c", exp: { mg: "Lenz: « mitentscheiden dürfen ».", fr: "Frau Lenz." } }
        ] }] },
    { id: "H4", nom: "Teil 4", ecoutes: 2, type: "mc", lecture: 90,
      consigne: "Sie hören einen kurzen Vortrag. Die Rednerin spricht über das Thema „Bienen und Landwirtschaft“. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie jetzt die Aufgaben 23 bis 30. Dazu haben Sie 90 Sekunden Zeit.",
      ctr: ["Court exposé sur les abeilles et l'agriculture, deux écoutes. Questions 23 à 30.", "Kabary fohy momba ny tantely sy ny fambolena, henoina indroa."],
      clips: [{ id: "gb2m2-h4", titre: "Vortrag", script: [
        { s: "f", n: "Rednerin", t: "Guten Tag. Ich möchte heute über ein kleines Tier mit großer Bedeutung sprechen: die Biene. Etwa ein Drittel unserer Lebensmittel hängt davon ab, dass Insekten die Blüten bestäuben – Äpfel, Kirschen, Mandeln, Kaffee." },
        { s: "f", n: "Rednerin", t: "Wenn wir von Bienen sprechen, denken die meisten an die Honigbiene. Dabei gibt es allein in Deutschland über fünfhundert Wildbienenarten. Und gerade diese sind besonders gefährdet, weil sie sehr spezielle Pflanzen brauchen." },
        { s: "f", n: "Rednerin", t: "Die Gründe für das Bienensterben sind vielfältig. Pflanzenschutzmittel spielen eine Rolle, aber genauso wichtig ist der Verlust von Lebensräumen. Wo früher bunte Wiesen waren, wachsen heute riesige Maisfelder." },
        { s: "f", n: "Rednerin", t: "Interessant ist ein Beispiel aus China. In manchen Regionen gibt es so wenige Insekten, dass Menschen die Obstbäume mit Pinseln bestäuben müssen. Das ist teuer und viel langsamer." },
        { s: "f", n: "Rednerin", t: "Was kann jeder Einzelne tun? Schon ein Balkon mit heimischen Blumen hilft. Wichtig ist, Pflanzen zu wählen, die zu verschiedenen Zeiten blühen, damit die Bienen vom Frühling bis zum Herbst Nahrung finden." },
        { s: "f", n: "Rednerin", t: "Auch die Landwirtschaft verändert sich. Immer mehr Bauern lassen Blühstreifen am Rand ihrer Felder stehen. Der Staat unterstützt das mit Geld – allerdings noch zu wenig, wie viele Experten kritisieren." },
        { s: "f", n: "Rednerin", t: "Zum Schluss eine gute Nachricht: In Städten geht es Bienen oft besser als auf dem Land, weil dort in Parks und Gärten viele verschiedene Pflanzen wachsen. Vielen Dank." }],
        items: [
          { n: 23, q: "Ein Drittel unserer Lebensmittel …", tr: ["Un tiers de nos aliments…", "Ny ampahatelon'ny sakafontsika…"], opts: ["wird von Bienen produziert.", "hängt von der Bestäubung durch Insekten ab.", "kommt aus Gärten."], otr: [["est produit par les abeilles", "vokarin'ny tantely"], ["dépend de la pollinisation par les insectes", "miankina amin'ny bibikely"], ["vient des jardins", "avy amin'ny zaridaina"]], a: "b", exp: { mg: "« hängt davon ab, dass Insekten … bestäuben ».", fr: "Dépend de la pollinisation." } },
          { n: 24, q: "Besonders gefährdet sind …", tr: ["Particulièrement menacées sont…", "Tena atahorana indrindra…"], opts: ["Honigbienen.", "Wildbienen.", "Bienen in Städten."], otr: [["les abeilles à miel", "tantely mpanao tantely"], ["les abeilles sauvages", "tantely dia"], ["les abeilles en ville", "tantely an-tanàna"]], a: "b", exp: { mg: "« gerade diese (Wildbienen) sind besonders gefährdet ».", fr: "Les abeilles sauvages." } },
          { n: 25, q: "Ein wichtiger Grund für das Bienensterben ist …", tr: ["Une cause importante de la disparition des abeilles est…", "Antony lehibe iray amin'ny fahafatesan'ny tantely…"], opts: ["das Klima.", "der Verlust von Lebensräumen.", "zu viel Honigproduktion."], otr: [["le climat", "ny toetr'andro"], ["la perte d'habitats", "fahaverezan'ny toeram-ponenana"], ["trop de production de miel", "tantely be loatra"]], a: "b", exp: { mg: "« genauso wichtig ist der Verlust von Lebensräumen ».", fr: "Perte d'habitats." } },
          { n: 26, q: "Das Beispiel aus China zeigt, dass …", tr: ["L'exemple chinois montre que…", "Asehon'ny ohatra avy any Chine fa…"], opts: ["Bestäubung von Hand teuer ist.", "Chinesen mehr Obst essen.", "es dort keine Bäume mehr gibt."], otr: [["la pollinisation manuelle coûte cher", "lafo ny fanaovana amin'ny tanana"], ["les Chinois mangent plus de fruits", "mihinana voankazo bebe kokoa"], ["il n'y a plus d'arbres", "tsy misy hazo intsony"]], a: "a", exp: { mg: "« Das ist teuer und viel langsamer ».", fr: "C'est cher et lent." } },
          { n: 27, q: "Auf dem Balkon sollte man Pflanzen wählen, die …", tr: ["Sur le balcon, il faut choisir des plantes qui…", "Eo amin'ny lavarangana dia tokony hisafidy zavamaniry…"], opts: ["nur im Sommer blühen.", "zu unterschiedlichen Zeiten blühen.", "aus dem Ausland kommen."], otr: [["fleurissent en été seulement", "mamelana amin'ny fahavaratra ihany"], ["fleurissent à des moments différents", "mamelana amin'ny fotoana samihafa"], ["viennent de l'étranger", "avy any ivelany"]], a: "b", exp: { mg: "« zu verschiedenen Zeiten blühen ».", fr: "Floraisons échelonnées." } },
          { n: 28, q: "Blühstreifen an Feldern …", tr: ["Les bandes fleuries au bord des champs…", "Ny tsipika voninkazo amorontsisin'ny saha…"], opts: ["sind verboten.", "werden vom Staat unterstützt.", "gibt es nur in Städten."], otr: [["sont interdites", "voarara"], ["sont soutenues par l'État", "tohanan'ny fanjakana"], ["n'existent qu'en ville", "an-tanàna ihany"]], a: "b", exp: { mg: "« Der Staat unterstützt das mit Geld ».", fr: "Soutien de l'État." } },
          { n: 29, q: "Experten kritisieren, dass …", tr: ["Les experts critiquent que…", "Manakiana ny manam-pahaizana fa…"], opts: ["die Förderung nicht ausreicht.", "Bauern zu viel Geld bekommen.", "die Blühstreifen zu groß sind."], otr: [["l'aide est insuffisante", "tsy ampy ny fanampiana"], ["les agriculteurs reçoivent trop", "be loatra ny vola azon'ny tantsaha"], ["les bandes sont trop grandes", "lehibe loatra"]], a: "a", exp: { mg: "« allerdings noch zu wenig ».", fr: "Trop peu d'aide." } },
          { n: 30, q: "In Städten geht es Bienen oft besser, weil …", tr: ["En ville, les abeilles vont souvent mieux parce que…", "Tsara kokoa matetika ny tantely an-tanàna satria…"], opts: ["es dort wärmer ist.", "es dort viele verschiedene Pflanzen gibt.", "es dort keine Insekten gibt."], otr: [["il y fait plus chaud", "mafana kokoa"], ["il y a beaucoup de plantes variées", "maro karazana ny zavamaniry"], ["il n'y a pas d'insectes", "tsy misy bibikely"]], a: "b", exp: { mg: "« viele verschiedene Pflanzen ».", fr: "Grande variété de plantes." } }
        ] }] }
  ] },

  schreiben: { temps: 75, aufgaben: [
    { id: "S1", nom: "Teil 1", temps: 50, mots: 150, points: 50, type: "Forumsbeitrag",
      consigne: `<p>Sie schreiben einen Forumsbeitrag zum Thema „Leben auf dem Land oder in der Stadt?“.</p><ul><li>Äußern Sie Ihre Meinung dazu, wo man besser lebt.</li><li>Nennen Sie Gründe, warum viele junge Menschen in die Städte ziehen.</li><li>Nennen Sie Nachteile des Stadtlebens.</li><li>Nennen Sie Möglichkeiten, das Leben auf dem Land attraktiver zu machen.</li></ul><p class="small">Denken Sie an eine Einleitung und einen Schluss. Schreiben Sie mindestens 150 Wörter.</p>`,
      ctr: ["Contribution de forum : ville ou campagne ? Votre avis, pourquoi les jeunes partent en ville, inconvénients de la ville, comment rendre la campagne attractive. Intro + conclusion, au moins 150 mots.", "Hevitra amin'ny forum: tanàna sa ambanivohitra? Hevitrao, antony, fatiantoka, vahaolana. Fampidirana + famaranana, 150 teny farafahakeliny."],
      checklist: ["Einleitung", "Teboka 1: hevitrao", "Teboka 2: antony andehanan'ny tanora any an-tanàna", "Teboka 3: fatiantoka amin'ny tanàna", "Teboka 4: vahaolana ho an'ny ambanivohitra", "Schluss", "Connecteurs: einerseits … andererseits, zudem, folglich", "≥150 teny"],
      redemittel: ["Die Frage, ob …, wird oft diskutiert.", "Ich persönlich bin der Meinung, dass …", "Ein wesentlicher Grund dafür ist …", "Andererseits darf man nicht übersehen, dass …", "Um … attraktiver zu machen, könnte man …", "Abschließend möchte ich betonen, dass …"],
      modele: `Die Frage, ob man besser auf dem Land oder in der Stadt lebt, wird in meinem Freundeskreis oft diskutiert. Hier ist meine Meinung.

Ich persönlich lebe lieber in der Stadt, zumindest in meinem Alter. Dort habe ich mehr Möglichkeiten, Menschen kennenzulernen und mich weiterzubilden.

Ein wesentlicher Grund, warum junge Menschen in die Städte ziehen, sind die Arbeitsplätze und Universitäten. Zudem gibt es dort ein größeres Angebot an Kultur und Freizeit. In Madagaskar ziehen deshalb viele junge Leute nach Antananarivo.

Andererseits hat das Stadtleben deutliche Nachteile: Die Mieten sind hoch, es gibt viel Verkehr und Lärm, und man kennt oft nicht einmal seine Nachbarn.

Um das Leben auf dem Land attraktiver zu machen, müsste man vor allem schnelles Internet ausbauen. Dann könnten viele von zu Hause arbeiten. Außerdem bräuchte man bessere Busverbindungen und Ärzte vor Ort.

Abschließend möchte ich betonen, dass beide Lebensformen Vorteile haben – entscheidend ist, dass auch auf dem Land eine gute Infrastruktur vorhanden ist.` },
    { id: "S2", nom: "Teil 2", temps: 25, mots: 100, points: 25, type: "Nachricht (formell)",
      consigne: `<p>Sie arbeiten in einem Unternehmen und möchten an einer Fortbildung teilnehmen, die drei Tage dauert und 600 Euro kostet. Schreiben Sie eine Nachricht an Ihren Vorgesetzten, Herrn Krause.</p><ul><li>Beschreiben Sie die Fortbildung kurz.</li><li>Erklären Sie, warum sie für Ihre Arbeit nützlich ist.</li><li>Bitten Sie um Übernahme der Kosten.</li><li>Machen Sie einen Vorschlag, wie Ihre Arbeit in dieser Zeit erledigt wird.</li></ul><p class="small">Überlegen Sie sich eine passende Reihenfolge. Vergessen Sie nicht Anrede und Gruß. Schreiben Sie mindestens 100 Wörter.</p>`,
      ctr: ["Message à votre supérieur : décrivez la formation, son utilité, demandez la prise en charge des frais, proposez une organisation pendant votre absence. ≥100 mots.", "Hafatra ho an'ny lehibenao: lazao ny fiofanana, ny maha-ilaina azy, angataho handoa ny sarany, manolora fandaminana. ≥100 teny."],
      checklist: ["Sehr geehrter Herr Krause,", "Famaritana ny fiofanana", "Ny maha-ilaina azy", "Fangatahana handoa ny sarany", "Soso-kevitra: iza no hanao ny asanao?", "Mit freundlichen Grüßen", "Konjunktiv II", "≥100 teny"],
      redemittel: ["ich möchte Sie um Ihre Unterstützung bitten.", "Vom … bis … findet in … eine Fortbildung zum Thema … statt.", "Diese Weiterbildung wäre für meine Tätigkeit sehr hilfreich, da …", "Wäre es möglich, dass die Firma die Kosten übernimmt?", "Während meiner Abwesenheit würde Frau … meine Aufgaben übernehmen.", "Für ein kurzes Gespräch stehe ich gern zur Verfügung."],
      modele: `Sehr geehrter Herr Krause,

ich möchte Sie heute um Ihre Unterstützung bitten. Vom 14. bis 16. Mai findet in Köln eine Fortbildung zum Thema „Online-Marketing für kleine Unternehmen“ statt.

Diese Weiterbildung wäre für meine Tätigkeit sehr hilfreich, da ich seit Kurzem für unsere Social-Media-Kanäle zuständig bin. Ich könnte das Gelernte direkt in unserer Kampagne im Sommer anwenden.

Die Teilnahme kostet 600 Euro. Wäre es möglich, dass die Firma diese Kosten übernimmt?

Während meiner Abwesenheit würde meine Kollegin Frau Schmidt dringende Anfragen bearbeiten. Wir haben das bereits besprochen. Alle anderen Aufgaben erledige ich vorher.

Für ein kurzes Gespräch stehe ich Ihnen gern zur Verfügung.

Mit freundlichen Grüßen
Tahina Rasolofo` }
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
        { titre: "Thema 1 · Fast Food", points: [
          { de: "Einleitung: Thema vorstellen und Aufbau nennen", mg: "Fampidirana: lohahevitra sy drafitra", fr: "Introduction : thème et plan" },
          { de: "Beschreiben Sie verschiedene Formen von Fast Food.", mg: "Lazao ny karazana fast food.", fr: "Décrivez différentes formes de fast-food." },
          { de: "Beschreiben Sie eine Form genauer.", mg: "Hazavao ny iray.", fr: "Décrivez-en une plus précisément." },
          { de: "Nennen Sie Vor- und Nachteile und bewerten Sie diese.", mg: "Tombony sy fatiantoka + tombana.", fr: "Avantages, inconvénients, évaluation." },
          { de: "Schluss: Zusammenfassung und eigene Meinung", mg: "Famaranana: famintinana sy hevitrao", fr: "Conclusion" } ],
          modele: `In meinem Vortrag geht es um Fast Food. Zuerst stelle ich verschiedene Formen vor, dann gehe ich auf eine genauer ein, und am Ende bewerte ich Vor- und Nachteile.

Unter Fast Food versteht man Essen, das schnell zubereitet und oft im Gehen gegessen wird: Hamburger und Pommes in großen Ketten, Döner und Pizza zum Mitnehmen, aber auch Fertiggerichte aus dem Supermarkt.

Genauer möchte ich auf das Straßenessen eingehen. In Madagaskar kauft man zum Beispiel Mofo Gasy oder Sambos an kleinen Ständen. Das ist auch schnelles Essen, aber frisch zubereitet und meistens günstig.

Der Vorteil von Fast Food liegt auf der Hand: Es spart Zeit und ist für Berufstätige praktisch. Allerdings enthält es oft viel Fett, Salz und Zucker. Wer regelmäßig in Ketten isst, riskiert Übergewicht. Außerdem entsteht viel Verpackungsmüll.

Zusammenfassend bin ich der Meinung, dass Fast Food ab und zu in Ordnung ist. Frisches Straßenessen ist eine gute Alternative zu den großen Ketten. Vielen Dank für Ihre Aufmerksamkeit.` },
        { titre: "Thema 2 · Sport im Verein", points: [
          { de: "Einleitung: Thema vorstellen und Aufbau nennen", mg: "Fampidirana", fr: "Introduction" },
          { de: "Beschreiben Sie verschiedene Möglichkeiten, Sport zu treiben.", mg: "Fomba samihafa hanaovana fanatanjahantena.", fr: "Différentes façons de faire du sport." },
          { de: "Beschreiben Sie eine Möglichkeit genauer.", mg: "Hazavao ny iray.", fr: "Décrivez-en une." },
          { de: "Nennen Sie Vor- und Nachteile und bewerten Sie diese.", mg: "Tombony, fatiantoka, tombana.", fr: "Avantages, inconvénients." },
          { de: "Schluss: Zusammenfassung und eigene Meinung", mg: "Famaranana", fr: "Conclusion" } ],
          modele: `Mein Vortrag behandelt das Thema „Sport im Verein“. Ich nenne zuerst einige Möglichkeiten, Sport zu treiben, beschreibe dann den Vereinssport genauer und bewerte zum Schluss Vor- und Nachteile.

Man kann allein Sport machen, zum Beispiel joggen oder mit Apps zu Hause trainieren. Viele gehen ins Fitnessstudio. Andere spielen in einem Verein, etwa Fußball, Basketball oder Volleyball.

Genauer möchte ich auf den Vereinssport eingehen. In Deutschland gibt es rund 90 000 Sportvereine. Man trainiert regelmäßig mit einem Trainer, spielt in einer Mannschaft und nimmt an Wettkämpfen teil.

Ein großer Vorteil ist die Gemeinschaft: Man lernt Menschen kennen, und gerade für Zugewanderte ist das ein guter Weg, Deutsch zu sprechen. Außerdem ist der Beitrag meist günstiger als im Fitnessstudio. Ein Nachteil sind die festen Trainingszeiten, die nicht zu jedem Arbeitsplan passen.

Insgesamt halte ich den Verein für die beste Lösung, wenn man Sport und soziale Kontakte verbinden möchte. Vielen Dank.` } ],
      redemittel: [
        ["Einleitung · Fampidirana", ["In meinem Vortrag geht es um …", "Zuerst …, dann …, zum Schluss …"]],
        ["Hauptteil · Ampahany lehibe", ["Unter … versteht man …", "Genauer möchte ich auf … eingehen.", "Ein typisches Beispiel ist …"]],
        ["Bewertung · Tombana", ["Der Vorteil liegt auf der Hand: …", "Allerdings …", "Ein Nachteil ist …"]],
        ["Schluss · Famaranana", ["Zusammenfassend bin ich der Meinung, dass …", "Vielen Dank für Ihre Aufmerksamkeit."]]
      ] },
    { id: "P2", nom: "Teil 2 – Diskussion führen", mg: "Adihevitra", duree: 5, mode: "dialog", em: "⚖️",
      consigne: `<p>Sie sind Teilnehmende eines Debattierclubs und diskutieren über die Frage:</p><div class="plan"><b>Sollten Einwegverpackungen aus Plastik verboten werden?</b><ul><li>Tauschen Sie Ihren Standpunkt und Ihre Argumente aus.</li><li>Reagieren Sie auf die Argumente Ihres Gesprächspartners.</li><li>Fassen Sie am Ende zusammen: Sind Sie dafür oder dagegen?</li></ul>Stichpunkte: Umwelt? · Hygiene? · Kosten? · Alternativen? · …</div>`,
      ctr: ["Débat : faut-il interdire les emballages plastique jetables ? Position, réaction, résumé.", "Adihevitra: tokony horarana ve ny fonosana plastika indray ampiasaina? Hevitra, valiny, famintinana."],
      partenaire: [
        { id: "gb2m2-p2-1", t: "Ich bin klar für ein Verbot. Plastik landet im Meer und in unserem Essen. Was meinst du?", aide: ["Grundsätzlich stimme ich dir zu, aber …", "Ein komplettes Verbot halte ich für schwierig, weil …"] },
        { id: "gb2m2-p2-2", t: "Aber es gibt doch Alternativen: Glas, Papier, Mehrwegboxen.", aide: ["Das stimmt, allerdings ist Glas schwer und braucht viel Energie beim Transport.", "Papier ist auch nicht immer umweltfreundlich."] },
        { id: "gb2m2-p2-3", t: "Und was ist mit den Kosten? Mehrweg ist für Geschäfte teurer, das gebe ich zu.", aide: ["Genau, kleine Läden könnten das kaum bezahlen.", "Man könnte aber Firmen finanziell unterstützen."] },
        { id: "gb2m2-p2-4", t: "Gut, die Zeit ist fast um. Wie lautet dein Fazit?", aide: ["Zusammenfassend bin ich für ein schrittweises Verbot.", "Wir sind uns einig, dass weniger Plastik nötig ist, aber …"] }
      ],
      redemittel: [
        ["Standpunkt · Hevitra", ["Ich bin der Ansicht, dass …", "Meiner Meinung nach …"]],
        ["Widersprechen · Manohitra", ["Das sehe ich anders.", "Das mag stimmen, aber …", "Da muss ich widersprechen."]],
        ["Zustimmen · Manaiky", ["Da gebe ich dir recht.", "Das ist ein gutes Argument."]],
        ["Zusammenfassen · Mamintina", ["Zusammenfassend …", "Wir sind uns einig, dass …, aber …"]]
      ],
      modele: `A: Ich bin für ein Verbot. Plastik landet im Meer und in unserem Essen.
B: Grundsätzlich stimme ich dir zu. Ein sofortiges Verbot halte ich aber für schwierig, weil Plastik bei Lebensmitteln auch die Hygiene sichert.
A: Es gibt doch Alternativen: Glas, Papier, Mehrwegboxen.
B: Das stimmt, allerdings ist Glas schwer und braucht viel Energie beim Transport.
A: Und die Kosten sind für kleine Geschäfte höher, das gebe ich zu.
B: Genau. Man könnte sie aber in einer Übergangszeit finanziell unterstützen.
A: Mein Fazit: Ich bleibe für ein Verbot, aber mit Übergangsfristen.
B: Ich bin für ein schrittweises Verbot. Da sind wir uns eigentlich ziemlich einig.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Teboka rehetra · Tous les points" },
    { nom: "Kohärenz", desc: "Drafitra mazava · Structure claire" },
    { nom: "Interaktion", desc: "Mamaly ny namanao (Teil 2) · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana B2" },
    { nom: "Strukturen", desc: "Grammaire B2" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "das Ehrenamt", fr: "le bénévolat", mg: "asa an-tsitrapo", ex: "Sie engagiert sich im Ehrenamt." },
    { de: "der Einsatz", fr: "l'intervention", mg: "fidirana an-tsehatra", ex: "Einsätze in der Nacht." },
    { de: "bewundern", fr: "admirer", mg: "mankasitraka", ex: "Ich bewundere diese Menschen." },
    { de: "der Behördengang", fr: "la démarche administrative", mg: "fandehanana any amin'ny birao", ex: "Sie hilft bei Behördengängen." },
    { de: "bestäuben", fr: "polliniser", mg: "manaparitaka vovobony", ex: "Die Blüten werden von Hand bestäubt." },
    { de: "die Schote", fr: "la gousse", mg: "voan-davanila", ex: "Die Schoten werden getrocknet." },
    { de: "schwanken", fr: "fluctuer", mg: "miovaova", ex: "Der Preis schwankt extrem." },
    { de: "der Wirbelsturm", fr: "le cyclone", mg: "rivo-doza", ex: "Nach einem Wirbelsturm stieg der Preis." },
    { de: "die Schattenseite", fr: "le revers", mg: "lafiny ratsy", ex: "Hohe Preise haben Schattenseiten." },
    { de: "zurückgreifen auf", fr: "recourir à", mg: "mampiasa (traikefa)", ex: "Erwachsene greifen auf Erfahrungen zurück." },
    { de: "sich blamieren", fr: "se ridiculiser", mg: "menatra", ex: "Erwachsene haben Angst, sich zu blamieren." },
    { de: "das Vorbild", fr: "le modèle", mg: "modely / ohatra", ex: "Eltern sind Vorbilder." },
    { de: "die Medienkompetenz", fr: "l'éducation aux médias", mg: "fahaizana mampiasa media", ex: "Schulen sollten Medienkompetenz unterrichten." },
    { de: "die Kaution", fr: "la caution", mg: "antoka", ex: "Die Kaution wird zurückerstattet." },
    { de: "die Nachfrage", fr: "la demande", mg: "fangatahana (eny an-tsena)", ex: "Es gibt eine Nachfrage." },
    { de: "gründen", fr: "fonder", mg: "manorina", ex: "Sie hat ein Unternehmen gegründet." },
    { de: "die Herausforderung", fr: "le défi", mg: "fanamby", ex: "Die größte Herausforderung ist der Preis." },
    { de: "der Anwohner", fr: "le riverain", mg: "mponina", ex: "Die Anwohner wollen mitentscheiden." },
    { de: "abschrecken", fr: "dissuader", mg: "mampitahotra / manakana", ex: "Eine Gebühr schreckt Gäste ab." },
    { de: "der Lebensraum", fr: "l'habitat", mg: "toeram-ponenana voajanahary", ex: "Der Verlust von Lebensräumen." },
    { de: "gefährdet", fr: "menacé", mg: "atahorana", ex: "Wildbienen sind gefährdet." },
    { de: "die Übergangsfrist", fr: "la période de transition", mg: "fe-potoana tetezamita", ex: "Ein Verbot mit Übergangsfristen." }
  ]
});
})();
