/* Goethe-Zertifikat B2 — Modellsatz 3 — textes originaux H Conseil & Formation */
(function(){
window.POOLS.GB2.sets.push({
  id: "gb2m3", titre: "Modellsatz 3", theme: "Akanjo efa niasa · Bisikileta · Tabataba · Fanamiana",
  lesen: { temps: 65, teile: [
    { id: "L1", nom: "Teil 1", type: "who", temps: 18,
      consigne: "Sie lesen in einem Forum, wie Menschen über gebrauchte Kleidung denken. Auf welche der vier Personen treffen die einzelnen Aussagen zu? Die Personen können mehrmals gewählt werden.",
      ctr: ["Forum sur les vêtements d'occasion : à quelle personne (a–d) correspond chaque affirmation ? Plusieurs fois possible.", "Forum momba ny akanjo efa niasa: iza amin'ireo olona 4 no mifanaraka? Azo averina."],
      personnes: { a: "Lea", b: "Markus", c: "Voahangy", d: "Birgit" },
      texte: `<div class="ads">
<div class="ad"><span class="l">a</span><b>Lea:</b> Ich kaufe seit zwei Jahren fast nur noch Second-Hand, meistens über Apps. Angefangen hat es, weil ich als Studentin wenig Geld hatte. Inzwischen macht es mir richtig Spaß, besondere Stücke zu finden, die sonst niemand hat. Neue Kleidung kaufe ich nur noch bei Unterwäsche und Schuhen.</div>
<div class="ad"><span class="l">b</span><b>Markus:</b> Ehrlich gesagt mag ich keine Kleidung, die schon jemand anders getragen hat. Ich kaufe lieber wenige, aber hochwertige Sachen, die zehn Jahre halten. Meine alten Hemden bringe ich dann zum Altkleidercontainer – ich hoffe, sie werden noch genutzt.</div>
<div class="ad"><span class="l">c</span><b>Voahangy:</b> In Madagaskar heißen gebrauchte Kleider „Frippe“, und ganze Märkte leben davon. Viele Sachen kommen aus Europa. Für die Menschen ist das günstig, aber die lokalen Schneider haben dadurch weniger Aufträge. Ich sehe das also mit gemischten Gefühlen.</div>
<div class="ad"><span class="l">d</span><b>Birgit:</b> Bei uns im Viertel organisieren wir alle drei Monate eine Kleidertauschparty. Jeder bringt Sachen mit, die er nicht mehr trägt, und nimmt andere mit nach Hause. Das kostet nichts, und man lernt die Nachbarn kennen. Was übrig bleibt, spenden wir einem Frauenhaus.</div></div>`,
      exemple: { q: "Wer kauft gebrauchte Kleidung meistens online?", a: "a" },
      items: [
        { n: 1, q: "Wer trägt nicht gern Kleidung von anderen?", tr: ["Qui n'aime pas porter les vêtements des autres ?", "Iza no tsy tia manao akanjo efa nanaovan'ny hafa?"], a: "b", exp: { mg: "Markus: « mag ich keine Kleidung, die schon jemand … getragen hat ».", fr: "Markus." } },
        { n: 2, q: "Wer sieht auch negative Folgen des Second-Hand-Handels?", tr: ["Qui voit aussi des effets négatifs du commerce d'occasion ?", "Iza no mahita lafiny ratsy koa?"], a: "c", exp: { mg: "Voahangy: tsy manana asa intsony ny mpanjaitra.", fr: "Voahangy : moins de travail pour les couturiers." } },
        { n: 3, q: "Für wen war Geld der ursprüngliche Grund?", tr: ["Pour qui l'argent était-il la raison de départ ?", "Ho an'iza no vola no antony voalohany?"], a: "a", exp: { mg: "Lea: « weil ich als Studentin wenig Geld hatte ».", fr: "Lea." } },
        { n: 4, q: "Wer verbindet das Thema mit Nachbarschaft?", tr: ["Qui associe le thème au voisinage ?", "Iza no mampifandray azy amin'ny mpifanolo-bodirindrina?"], a: "d", exp: { mg: "Birgit: « man lernt die Nachbarn kennen ».", fr: "Birgit." } },
        { n: 5, q: "Wer setzt auf Qualität statt Menge?", tr: ["Qui mise sur la qualité plutôt que la quantité ?", "Iza no mitady kalitao fa tsy habetsahana?"], a: "b", exp: { mg: "Markus: « wenige, aber hochwertige Sachen ».", fr: "Markus." } },
        { n: 6, q: "Wer bezahlt für die Kleidung gar nichts?", tr: ["Qui ne paie rien pour les vêtements ?", "Iza no tsy mandoa na inona na inona?"], a: "d", exp: { mg: "Birgit: « Das kostet nichts » (fifanakalozana).", fr: "Birgit : échange gratuit." } },
        { n: 7, q: "Wer genießt die Suche nach einzigartigen Stücken?", tr: ["Qui aime chercher des pièces uniques ?", "Iza no tia mitady akanjo tsy manam-paharoa?"], a: "a", exp: { mg: "Lea: « besondere Stücke … die sonst niemand hat ».", fr: "Lea." } },
        { n: 8, q: "Wer weiß nicht genau, was mit den abgegebenen Sachen passiert?", tr: ["Qui ne sait pas ce que deviennent les vêtements donnés ?", "Iza no tsy mahalala izay hiafaran'ny akanjo nomeny?"], a: "b", exp: { mg: "Markus: « ich hoffe, sie werden noch genutzt ».", fr: "Markus." } },
        { n: 9, q: "Wer erwähnt, woher viele Kleider stammen?", tr: ["Qui mentionne l'origine des vêtements ?", "Iza no miresaka ny niavian'ny akanjo?"], a: "c", exp: { mg: "Voahangy: « Viele Sachen kommen aus Europa ».", fr: "Voahangy." } }
      ] },
    { id: "L2", nom: "Teil 2", type: "match", temps: 12, zero: false, gap: true,
      consigne: "Sie lesen in einer Zeitschrift einen Artikel über die Geschichte des Fahrrads. Welche Sätze passen in die Lücken? Zwei Sätze passen nicht.",
      ctr: ["Article sur l'histoire du vélo : quelle phrase (a–h) va dans chaque trou ? Deux phrases en trop.", "Lahatsoratra momba ny tantaran'ny bisikileta: iza no fehezanteny mifanaraka? Roa tafahoatra."],
      texte: `<h3>Zwei Räder, die die Welt veränderten</h3>
<p>Es ist leise, gesund und braucht keinen Treibstoff. <span class="gap">[0]</span> Dabei begann seine Geschichte vor gut 200 Jahren eher bescheiden.</p>
<p>1817 stellte der Karlsruher Karl Drais eine „Laufmaschine“ vor: zwei Holzräder, ein Sitz, aber keine Pedale. <span class="gap">[10]</span> Die Idee entstand übrigens in einer Krise – nach Missernten waren viele Pferde verhungert.</p>
<p>Ab 1860 bekamen die Räder Pedale, die direkt am Vorderrad befestigt waren. <span class="gap">[11]</span> Die berühmten Hochräder waren zwar schnell, aber gefährlich: Wer stürzte, fiel aus fast zwei Metern Höhe.</p>
<p>Erst das „Sicherheitsrad“ mit Kette und zwei gleich großen Rädern machte das Fahrrad zum Massenprodukt. <span class="gap">[12]</span> Für viele Frauen bedeutete es ein neues Stück Freiheit.</p>
<p>Im 20. Jahrhundert verdrängte das Auto das Rad in vielen Ländern. <span class="gap">[13]</span> In China und Indien blieb es dagegen lange das wichtigste Verkehrsmittel.</p>
<p>Heute erlebt das Fahrrad ein Comeback. <span class="gap">[14]</span> Städte wie Kopenhagen und Amsterdam gelten dabei als Vorbilder.</p>
<p>Und auch technisch geht die Entwicklung weiter. <span class="gap">[15]</span> Damit können auch ältere Menschen oder Pendler mit langen Wegen bequem Rad fahren.</p>`,
      choixTitre: "Sätze",
      choix: {
        a: "Kein Wunder, dass das Fahrrad heute weltweit über eine Milliarde Mal genutzt wird.",
        b: "Man bewegte sich fort, indem man sich mit den Füßen vom Boden abstieß.",
        c: "Je größer dieses Rad war, desto weiter kam man mit einer Umdrehung.",
        d: "Es war plötzlich auch für Arbeiter bezahlbar.",
        e: "Radwege wurden abgebaut, um Platz für Straßen und Parkplätze zu schaffen.",
        f: "Karl Drais wurde für seine Erfindung damals reich und berühmt.",
        g: "Vor allem in Städten steigen immer mehr Menschen vom Auto aufs Rad um.",
        h: "Besonders beliebt sind inzwischen Räder mit Elektromotor."
      },
      exemple: { q: "Lücke 0", a: "a" },
      items: [
        { n: 10, q: "Lücke 10", a: "b", exp: { mg: "Tsy misy pedale → nampiasa tongotra teny amin'ny tany.", fr: "Sans pédales → on poussait avec les pieds." } },
        { n: 11, q: "Lücke 11", a: "c", exp: { mg: "Pedale amin'ny kodiarana aloha → « Je größer … » → Hochrad.", fr: "Roue avant plus grande → grand-bi." } },
        { n: 12, q: "Lücke 12", a: "d", exp: { mg: "« Massenprodukt » → mora vidy ho an'ny mpiasa.", fr: "Produit de masse → abordable." } },
        { n: 13, q: "Lücke 13", a: "e", exp: { mg: "Fiara nisolo → nesorina ny lalan'ny bisikileta.", fr: "Pistes cyclables supprimées." } },
        { n: 14, q: "Lücke 14", a: "g", exp: { mg: "« Comeback » → olona maro miala amin'ny fiara.", fr: "Retour du vélo en ville." } },
        { n: 15, q: "Lücke 15", a: "h", exp: { mg: "« technisch » → maotera elektrika; « Damit … bequem ». Ny f no tafahoatra.", fr: "Vélos électriques. f est en trop." } }
      ] },
    { id: "L3", nom: "Teil 3", type: "mc", temps: 12,
      consigne: "Sie lesen in einer Zeitung einen Artikel über Lärm in Städten. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
      ctr: ["Article sur le bruit dans les villes. Choisissez la bonne réponse.", "Lahatsoratra momba ny tabataba an-tanàna. Safidio ny valiny marina."],
      texte: `<div class="press"><h3>Die unterschätzte Gefahr</h3>
<p>Verkehr, Baustellen, laute Nachbarn: Für viele Stadtbewohner gehört Lärm einfach dazu. Doch die Weltgesundheitsorganisation warnt seit Jahren, dass dauerhafter Lärm krank machen kann. Nach Luftverschmutzung gilt er in Europa als zweitgrößtes Umweltrisiko für die Gesundheit.</p>
<p>Das Tückische: Der Körper gewöhnt sich nicht an Lärm, auch wenn wir das glauben. Selbst im Schlaf reagiert er auf Geräusche, etwa mit einem höheren Puls. Wer jahrelang an einer lauten Straße wohnt, hat laut Studien ein höheres Risiko für Herzkrankheiten.</p>
<p>Betroffen sind vor allem Menschen mit wenig Geld. „Die günstigen Wohnungen liegen oft an Hauptstraßen oder in der Nähe von Flughäfen“, sagt die Stadtplanerin Miriam Koch. Lärm sei deshalb auch eine Frage der sozialen Gerechtigkeit.</p>
<p>Lösungen gibt es durchaus: Tempo 30 in Wohngebieten senkt den Lärm deutlich, ebenso leisere Reifen und Straßenbeläge. Paris hat sogar Lärm-Radare getestet, die zu laute Motorräder fotografieren. Koch hält jedoch eine andere Maßnahme für noch wirksamer: mehr Grünflächen und Bäume. „Sie schlucken nicht nur Schall – Menschen empfinden eine Umgebung mit Grün auch subjektiv als leiser.“</p></div>`,
      items: [
        { n: 16, q: "Laut WHO ist Lärm …", tr: ["Selon l'OMS, le bruit est…", "Araka ny OMS, ny tabataba dia…"], opts: ["das größte Umweltrisiko in Europa.", "ein ernstes Gesundheitsrisiko.", "nur in Großstädten ein Problem."], otr: [["le plus grand risque environnemental en Europe", "loza lehibe indrindra"], ["un risque sérieux pour la santé", "loza goavana ho an'ny fahasalamana"], ["un problème des grandes villes seulement", "an-tanàna lehibe ihany"]], a: "b", exp: { mg: "« zweitgrößtes Umweltrisiko » — tsy ny lehibe indrindra.", fr: "Deuxième risque (pas le premier)." } },
        { n: 17, q: "Was passiert im Schlaf?", tr: ["Que se passe-t-il pendant le sommeil ?", "Inona no mitranga mandritra ny torimaso?"], opts: ["Der Körper hört Lärm nicht.", "Der Körper reagiert trotzdem auf Lärm.", "Man gewöhnt sich schnell an Geräusche."], otr: [["le corps n'entend pas le bruit", "tsy maheno"], ["le corps réagit quand même", "mbola mihetsika ihany ny vatana"], ["on s'habitue vite", "mahazatra haingana"]], a: "b", exp: { mg: "« Selbst im Schlaf reagiert er … höheren Puls ».", fr: "Le pouls augmente." } },
        { n: 18, q: "Warum ist Lärm eine soziale Frage?", tr: ["Pourquoi le bruit est-il une question sociale ?", "Nahoana ny tabataba no olana ara-tsosialy?"], opts: ["Weil arme Menschen häufiger an lauten Orten wohnen.", "Weil reiche Menschen mehr Lärm machen.", "Weil Lärmschutz teuer ist."], otr: [["les pauvres vivent plus souvent dans des lieux bruyants", "ny mahantra no mipetraka amin'ny toerana be tabataba"], ["les riches font plus de bruit", "ny manankarena no mitabataba"], ["la protection coûte cher", "lafo ny fiarovana"]], a: "a", exp: { mg: "« Die günstigen Wohnungen liegen oft an Hauptstraßen ».", fr: "Logements bon marché près des grands axes." } },
        { n: 19, q: "Tempo 30 …", tr: ["La limitation à 30 km/h…", "Ny hafainganam-pandeha 30…"], opts: ["hat kaum Wirkung.", "reduziert den Lärm deutlich.", "gilt bereits überall."], otr: [["a peu d'effet", "kely ny vokany"], ["réduit nettement le bruit", "mampihena be ny tabataba"], ["est déjà partout", "efa misy na aiza na aiza"]], a: "b", exp: { mg: "« senkt den Lärm deutlich ».", fr: "Réduit nettement." } },
        { n: 20, q: "Die Lärm-Radare in Paris …", tr: ["Les radars anti-bruit à Paris…", "Ny radara tabataba any Paris…"], opts: ["messen die Geschwindigkeit.", "fotografieren laute Fahrzeuge.", "wurden wieder abgeschafft."], otr: [["mesurent la vitesse", "mandrefy hafainganana"], ["photographient les véhicules bruyants", "maka sary fiara mitabataba"], ["ont été supprimés", "nofoanana"]], a: "b", exp: { mg: "« zu laute Motorräder fotografieren ».", fr: "Photos des motos trop bruyantes." } },
        { n: 21, q: "Frau Koch hält für besonders wirksam, …", tr: ["Mme Koch considère comme particulièrement efficace…", "Heverin-dRtoa Koch fa tena mahomby…"], opts: ["neue Straßenbeläge.", "mehr Pflanzen und Bäume.", "höhere Strafen."], otr: [["de nouveaux revêtements", "lalana vaovao"], ["plus de plantes et d'arbres", "zavamaniry sy hazo bebe kokoa"], ["des amendes plus élevées", "sazy ambony kokoa"]], a: "b", exp: { mg: "« mehr Grünflächen und Bäume ».", fr: "Plus d'espaces verts." } }
      ] },
    { id: "L4", nom: "Teil 4", type: "match", temps: 12, zero: false, layout: "choixFirst",
      consigne: "Sie lesen in einer Zeitschrift Meinungsäußerungen zum Thema „Schuluniformen in Deutschland?“. Welche Äußerung passt zu welcher Überschrift? Eine Äußerung passt nicht. Die Äußerung a ist das Beispiel und kann nicht noch einmal verwendet werden.",
      ctr: ["Opinions sur l'uniforme scolaire : quelle opinion (b–h) pour chaque titre ? Une en trop ; a = exemple.", "Hevitra momba ny fanamiana an-tsekoly: iza no mifanaraka amin'ny lohateny? Iray tafahoatra; a no ohatra."],
      choixTitre: "Äußerungen",
      choix: {
        a: "<b>Fara, Mainz:</b> In Madagaskar habe ich jeden Tag eine Uniform getragen. Niemand hat gesehen, wer arm oder reich ist. Das fand ich gerecht.",
        b: "<b>Stefan, Leipzig:</b> Mit 15 will man zeigen, wer man ist. Kleidung gehört dazu. Eine Uniform nimmt den Jugendlichen ein Stück Persönlichkeit.",
        c: "<b>Ingrid, Bonn:</b> Die Diskussion ist mir zu oberflächlich. Wir sollten lieber über kleinere Klassen und mehr Lehrer sprechen.",
        d: "<b>Mehmet, Essen:</b> Jeden Morgen der gleiche Streit: Was ziehe ich an? Mit einer Uniform wäre der Morgen viel entspannter.",
        e: "<b>Claudia, Freiburg:</b> Eine gute Uniform kostet schnell 200 Euro. Für Familien mit drei Kindern ist das eine große Belastung.",
        f: "<b>Paul, Rostock:</b> An unserer Schule haben die Schüler selbst ein T-Shirt mit Logo entworfen. Sie tragen es freiwillig und sind stolz darauf.",
        g: "<b>Rina, Hamburg:</b> Ich habe gelesen, dass Uniformen das Lernen verbessern. Aber ehrlich: Bewiesen ist das nicht.",
        h: "<b>Jens, Kassel:</b> Ich war Lehrer in England. Schüler in Uniform haben sich nicht besser benommen als in Deutschland."
      },
      exemple: { q: "Mehr Gleichheit zwischen Schülern", a: "a" },
      items: [
        { n: 22, q: "Wichtigere Probleme im Bildungssystem", tr: ["Des problèmes plus importants dans l'éducation", "Olana lehibe kokoa amin'ny fanabeazana"], a: "c", exp: { mg: "Ingrid: kilasy kely kokoa, mpampianatra bebe kokoa.", fr: "Ingrid." } },
        { n: 23, q: "Weniger Stress am Morgen", tr: ["Moins de stress le matin", "Tsy dia misy adin-tsaina maraina"], a: "d", exp: { mg: "Mehmet: « der Morgen viel entspannter ».", fr: "Mehmet." } },
        { n: 24, q: "Eine finanzielle Belastung", tr: ["Une charge financière", "Enta-mavesatra ara-bola"], a: "e", exp: { mg: "Claudia: 200 € isaky ny ankizy.", fr: "Claudia." } },
        { n: 25, q: "Kleidung als Ausdruck der Identität", tr: ["Les vêtements comme expression de l'identité", "Akanjo ho fanehoana ny maha-izy azy"], a: "b", exp: { mg: "Stefan: « zeigen, wer man ist ».", fr: "Stefan." } },
        { n: 26, q: "Eine freiwillige Lösung", tr: ["Une solution volontaire", "Vahaolana an-tsitrapo"], a: "f", exp: { mg: "Paul: T-shirt « freiwillig ».", fr: "Paul." } },
        { n: 27, q: "Keine Wirkung auf das Verhalten", tr: ["Aucun effet sur le comportement", "Tsy misy fiantraikany amin'ny fitondran-tena"], a: "h", exp: { mg: "Jens: « nicht besser benommen ». Ny g no tafahoatra.", fr: "Jens. g est en trop." } }
      ] },
    { id: "L5", nom: "Teil 5", type: "match", temps: 6, zero: false, layout: "choixFirst",
      consigne: "Sie möchten die digitale Bibliothek Ihrer Stadt nutzen und lesen die Nutzungsbedingungen. Welche Überschriften passen zu den Paragrafen? Vier Überschriften werden nicht gebraucht.",
      ctr: ["Conditions d'utilisation d'une bibliothèque numérique : quel titre (a–h) pour chaque paragraphe ? Quatre en trop.", "Fepetra fampiasana tranomboky nomerika: iza no lohateny mifanaraka? Efatra tafahoatra."],
      choixTitre: "Inhaltsverzeichnis",
      choix: { a: "Registrierung", b: "Ausleihfrist", c: "Gebühren", d: "Weitergabe an Dritte", e: "Technische Voraussetzungen", f: "Veranstaltungen", g: "Schadenersatz", h: "Kündigung des Kontos" },
      texte: `<div class="rules">
<p><b>§ 0</b> Für die Nutzung benötigen Sie einen gültigen Bibliotheksausweis. Melden Sie sich mit der Ausweisnummer und Ihrem Geburtsdatum online an.</p>
<p><b>§ 28</b> E-Books und Hörbücher stehen Ihnen 14 Tage zur Verfügung. Danach werden die Dateien automatisch gesperrt. Eine Verlängerung ist nicht möglich.</p>
<p><b>§ 29</b> Die Medien sind ausschließlich für den persönlichen Gebrauch bestimmt. Es ist nicht erlaubt, Dateien zu kopieren oder anderen Personen zur Verfügung zu stellen.</p>
<p><b>§ 30</b> Zum Lesen benötigen Sie einen Computer, ein Tablet oder einen E-Reader mit Internetverbindung sowie die kostenlose App „StadtLesen“.</p></div>`,
      exemple: { q: "§ 0", a: "a" },
      items: [
        { n: 28, q: "§ 28", a: "b", exp: { mg: "Andro 14 → fe-potoana fampindramana.", fr: "Durée de prêt." } },
        { n: 29, q: "§ 29", a: "d", exp: { mg: "Tsy azo omena olon-kafa.", fr: "Pas de partage avec des tiers." } },
        { n: 30, q: "§ 30", a: "e", exp: { mg: "Fitaovana sy app ilaina.", fr: "Conditions techniques." } }
      ] }
  ] },

  hoeren: { temps: 40, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 1, type: "mixed",
      consigne: "Sie hören fünf Gespräche und Äußerungen. Sie hören jeden Text einmal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
      clips: [
        { id: "gb2m3-h1-1", titre: "Text 1", script: [{ s: "f", n: "Frau", t: "Wir haben unseren Fernseher vor einem Jahr abgeschafft. Am Anfang haben die Kinder protestiert, aber jetzt spielen wir abends öfter Brettspiele oder lesen zusammen. Filme schauen wir manchmal am Laptop, aber nur am Wochenende." }],
          items: [
            { n: 1, type: "rf", q: "Die Frau spricht über die Freizeitgestaltung in ihrer Familie.", tr: ["La femme parle des loisirs dans sa famille.", "Miresaka momba ny fialam-boly ao amin'ny fianakaviany izy."], a: "r", exp: { mg: "Fahitalavitra, lalao, famakiana.", fr: "Oui." } },
            { n: 2, type: "mc", q: "Was sagt sie über Filme?", tr: ["Que dit-elle des films ?", "Inona no lazainy momba ny sarimihetsika?"], opts: ["Sie sehen nur am Wochenende Filme.", "Sie sehen gar keine Filme mehr.", "Die Kinder sehen jeden Abend Filme."], otr: [["seulement le week-end", "faran'ny herinandro ihany"], ["plus aucun film", "tsy mijery intsony"], ["les enfants tous les soirs", "isan-kariva"]], a: "a", exp: { mg: "« nur am Wochenende ».", fr: "Seulement le week-end." } }
          ] },
        { id: "gb2m3-h1-2", titre: "Text 2", script: [{ s: "m", n: "Radio", t: "Die Stadt Münster testet ab nächstem Monat kostenlose Busse an Samstagen. Ziel ist es, die Innenstadt vom Autoverkehr zu entlasten. Der Einzelhandel unterstützt den Versuch, die Kosten trägt allerdings vollständig die Stadt." }],
          items: [
            { n: 3, type: "rf", q: "Die Busse sind in Münster ab sofort immer kostenlos.", tr: ["Les bus sont toujours gratuits à Münster dès maintenant.", "Maimaim-poana foana ny bus any Münster manomboka izao."], a: "f", exp: { mg: "Asabotsy ihany ary manomboka amin'ny volana ho avy.", fr: "Seulement le samedi, à partir du mois prochain." } },
            { n: 4, type: "mc", q: "Wer bezahlt den Versuch?", tr: ["Qui paie l'essai ?", "Iza no mandoa ny andrana?"], opts: ["Die Stadt.", "Die Geschäfte.", "Die Fahrgäste."], otr: [["la ville", "ny tanàna"], ["les magasins", "ny fivarotana"], ["les passagers", "ny mpandeha"]], a: "a", exp: { mg: "« die Kosten trägt … vollständig die Stadt ».", fr: "La ville." } }
          ] },
        { id: "gb2m3-h1-3", titre: "Text 3", script: [{ s: "m", n: "Mann", t: "Hast du schon gehört? Die Firma will die Kantine schließen." }, { s: "f", n: "Frau", t: "Ja, und stattdessen soll es Gutscheine für Restaurants in der Nähe geben. Ich finde das gar nicht schlecht, da hätten wir mehr Auswahl." }, { s: "m", n: "Mann", t: "Aber die Restaurants hier sind viel teurer. Der Gutschein reicht nie im Leben." }],
          items: [
            { n: 5, type: "rf", q: "Die Frau findet die Idee mit den Gutscheinen positiv.", tr: ["La femme trouve l'idée des bons positive.", "Tsara amin'ilay vehivavy ny hevitra momba ny tapakila."], a: "r", exp: { mg: "« gar nicht schlecht … mehr Auswahl ».", fr: "Oui." } },
            { n: 6, type: "mc", q: "Was kritisiert der Mann?", tr: ["Que critique l'homme ?", "Inona no tsikerain'ilay lehilahy?"], opts: ["Die hohen Preise in den Restaurants.", "Das schlechte Essen in der Kantine.", "Die weiten Wege."], otr: [["les prix élevés des restaurants", "lafo ny trano fisakafoanana"], ["la mauvaise cantine", "ratsy ny kantina"], ["les longs trajets", "lavitra"]], a: "a", exp: { mg: "« viel teurer … reicht nie ».", fr: "Les restaurants sont trop chers." } }
          ] },
        { id: "gb2m3-h1-4", titre: "Text 4", script: [{ s: "f", n: "Frau", t: "Ich arbeite seit Kurzem nur noch vier Tage pro Woche, mit etwas weniger Gehalt. Am Mittwoch habe ich frei. Mir war gar nicht klar, wie viel Energie mir das gibt. Ich bin an den anderen Tagen konzentrierter – das sagt sogar meine Chefin." }],
          items: [
            { n: 7, type: "rf", q: "Die Frau verdient genauso viel wie vorher.", tr: ["La femme gagne autant qu'avant.", "Mitovy amin'ny teo aloha ny karaman'ilay vehivavy."], a: "f", exp: { mg: "« mit etwas weniger Gehalt ».", fr: "Un peu moins." } },
            { n: 8, type: "mc", q: "Was hat die Chefin bemerkt?", tr: ["Qu'a remarqué la cheffe ?", "Inona no tsikaritry ny lehibeny?"], opts: ["Dass sie konzentrierter arbeitet.", "Dass sie öfter krank ist.", "Dass sie am Mittwoch fehlt."], otr: [["qu'elle est plus concentrée", "mifantoka kokoa"], ["qu'elle est plus souvent malade", "marary matetika"], ["qu'elle manque le mercredi", "tsy eo alarobia"]], a: "a", exp: { mg: "« konzentrierter – das sagt sogar meine Chefin ».", fr: "Plus concentrée." } }
          ] },
        { id: "gb2m3-h1-5", titre: "Text 5", script: [{ s: "m", n: "Mann", t: "Mein Tipp für alle, die eine Wohnung suchen: Nicht nur Online-Portale nutzen! Ich habe meine Wohnung über einen Aushang im Supermarkt gefunden. Die Vermieterin wollte bewusst nicht ins Internet, weil sie dort hunderte Anfragen bekommt." }],
          items: [
            { n: 9, type: "rf", q: "Der Mann hat seine Wohnung online gefunden.", tr: ["L'homme a trouvé son logement en ligne.", "Nahita ny tranony an-tserasera ilay lehilahy."], a: "f", exp: { mg: "« über einen Aushang im Supermarkt ».", fr: "Par une annonce au supermarché." } },
            { n: 10, type: "mc", q: "Warum hat die Vermieterin nicht im Internet inseriert?", tr: ["Pourquoi la propriétaire n'a-t-elle pas publié en ligne ?", "Nahoana no tsy nametraka an-tserasera ny tompon-trano?"], opts: ["Sie wollte nicht zu viele Anfragen.", "Sie kennt sich mit Computern nicht aus.", "Online-Anzeigen sind teuer."], otr: [["elle ne voulait pas trop de demandes", "tsy nila fangatahana be loatra"], ["elle ne connaît pas l'informatique", "tsy mahay ordinatera"], ["c'est cher", "lafo"]], a: "a", exp: { mg: "« hunderte Anfragen ».", fr: "Trop de demandes." } }
          ] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 2, type: "mc", lecture: 90,
      consigne: "Sie hören im Radio ein Interview mit einem Koch. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie jetzt die Aufgaben 11 bis 16. Dazu haben Sie 90 Sekunden Zeit.",
      ctr: ["Interview radio avec un cuisinier, deux écoutes. Questions 11 à 16.", "Resadresaka amin'ny mpahandro, henoina indroa."],
      clips: [{ id: "gb2m3-h2", titre: "Interview", script: [
        { s: "f", n: "Moderatorin", t: "Herr Andriamaro, Sie betreiben in Berlin einen Foodtruck mit madagassischer Küche. Wie kam es dazu?" },
        { s: "m", n: "Herr Andriamaro", t: "Ich habe zehn Jahre in Hotelküchen gearbeitet, zuletzt als Souschef. Aber ich wollte endlich das kochen, was ich von meiner Großmutter gelernt habe. Ein Restaurant war mir zu riskant – die Mieten in Berlin sind enorm. Ein Foodtruck ist flexibler." },
        { s: "f", n: "Moderatorin", t: "Wie haben die Berliner reagiert?" },
        { s: "m", n: "Herr Andriamaro", t: "Am Anfang waren viele skeptisch. Madagaskar kennen sie aus dem Zeichentrickfilm, aber nicht vom Essen. Deshalb habe ich kleine Probierportionen kostenlos verteilt. Das hat funktioniert." },
        { s: "f", n: "Moderatorin", t: "Was ist Ihr beliebtestes Gericht?" },
        { s: "m", n: "Herr Andriamaro", t: "Ganz klar das Hühnchen mit Ingwer und Knoblauch. Romazava lieben eher die Gäste, die schon in Madagaskar waren. Und die vegane Variante mit Erdnusssoße wird immer beliebter." },
        { s: "f", n: "Moderatorin", t: "Woher bekommen Sie die Zutaten?" },
        { s: "m", n: "Herr Andriamaro", t: "Das Gemüse kaufe ich bei Bauern in Brandenburg. Nur Gewürze wie Pfeffer und Vanille importiere ich aus Madagaskar, direkt von einer Kooperative." },
        { s: "f", n: "Moderatorin", t: "Was ist das Schwierigste an Ihrem Job?" },
        { s: "m", n: "Herr Andriamaro", t: "Das Wetter. Im Winter kommen kaum Leute. Deshalb mache ich in den kalten Monaten Catering für Firmenfeiern – das rettet mir die Saison." }],
        items: [
          { n: 11, q: "Vor dem Foodtruck hat Herr Andriamaro …", tr: ["Avant le food truck, M. Andriamaro…", "Talohan'ny foodtruck Atoa Andriamaro dia…"], opts: ["ein Restaurant geführt.", "in Hotels gekocht.", "bei seiner Großmutter gearbeitet."], otr: [["tenait un restaurant", "nitantana trano fisakafoanana"], ["cuisinait dans des hôtels", "nahandro tany amin'ny hotely"], ["travaillait chez sa grand-mère", "niasa tany amin'ny renibeny"]], a: "b", exp: { mg: "« zehn Jahre in Hotelküchen ».", fr: "Dans des cuisines d'hôtel." } },
          { n: 12, q: "Er hat kein Restaurant eröffnet, weil …", tr: ["Il n'a pas ouvert de restaurant parce que…", "Tsy nanokatra trano fisakafoanana izy satria…"], opts: ["die Mieten zu hoch sind.", "er nicht genug Erfahrung hatte.", "er lieber reist."], otr: [["les loyers sont trop élevés", "lafo loatra ny hofan-trano"], ["il manquait d'expérience", "tsy ampy traikefa"], ["il préfère voyager", "tia mivezivezy"]], a: "a", exp: { mg: "« die Mieten in Berlin sind enorm ».", fr: "Loyers énormes." } },
          { n: 13, q: "Um Kunden zu gewinnen, hat er …", tr: ["Pour gagner des clients, il a…", "Mba hahazoana mpanjifa izy dia…"], opts: ["Werbung im Radio gemacht.", "Gratis-Kostproben verteilt.", "die Preise gesenkt."], otr: [["fait de la pub à la radio", "dokam-barotra amin'ny radio"], ["distribué des dégustations gratuites", "nizara santionany maimaim-poana"], ["baissé les prix", "nampidina ny vidiny"]], a: "b", exp: { mg: "« Probierportionen kostenlos verteilt ».", fr: "Dégustations gratuites." } },
          { n: 14, q: "Romazava …", tr: ["Le romazava…", "Ny romazava…"], opts: ["ist sein meistverkauftes Gericht.", "mögen vor allem Gäste, die Madagaskar kennen.", "gibt es nur vegan."], otr: [["est son plat le plus vendu", "sakafo be mpividy indrindra"], ["plaît surtout à ceux qui connaissent Madagascar", "tian'ireo efa nahafantatra an'i Madagasikara"], ["n'existe qu'en vegan", "vegan ihany"]], a: "b", exp: { mg: "« lieben eher die Gäste, die schon in Madagaskar waren ».", fr: "Les connaisseurs de Madagascar." } },
          { n: 15, q: "Aus Madagaskar importiert er …", tr: ["De Madagascar, il importe…", "Avy any Madagasikara dia manafatra…"], opts: ["Gemüse.", "Gewürze.", "Fleisch."], otr: [["des légumes", "legioma"], ["des épices", "zava-manitra"], ["de la viande", "hena"]], a: "b", exp: { mg: "« Gewürze wie Pfeffer und Vanille ».", fr: "Les épices." } },
          { n: 16, q: "Im Winter …", tr: ["En hiver…", "Amin'ny ririnina…"], opts: ["schließt er den Foodtruck.", "macht er Catering für Firmen.", "fährt er nach Madagaskar."], otr: [["il ferme le food truck", "manidy"], ["il fait du traiteur pour des entreprises", "manao catering ho an'ny orinasa"], ["il va à Madagascar", "mankany Madagasikara"]], a: "b", exp: { mg: "« Catering für Firmenfeiern ».", fr: "Traiteur pour entreprises." } }
        ] }] },
    { id: "H3", nom: "Teil 3", ecoutes: 1, type: "who", lecture: 60,
      consigne: "Sie hören im Radio ein Gespräch mit mehreren Personen. Die Personen sprechen über mehrsprachige Erziehung. Sie hören den Text einmal. Wählen Sie bei jeder Aufgabe: Wer sagt das?",
      ctr: ["Discussion radio sur l'éducation multilingue, une écoute : qui dit quoi ?", "Adihevitra momba ny fitaizana amin'ny fiteny maro, henoina indray mandeha: iza no niteny?"],
      personnes: { a: "Moderator", b: "Frau Rabe, Mutter", c: "Herr Dr. Kessel, Sprachwissenschaftler" },
      exemple: { q: "Immer mehr Kinder wachsen mit mehreren Sprachen auf.", a: "a" },
      clips: [{ id: "gb2m3-h3", titre: "Gespräch", script: [
        { s: "m", n: "Moderator", t: "Immer mehr Kinder wachsen mit mehreren Sprachen auf. Bei mir sind Frau Rabe, deren Kinder Malagasy, Französisch und Deutsch sprechen, und der Sprachwissenschaftler Dr. Kessel. Frau Rabe, wie organisieren Sie das?" },
        { s: "f", n: "Frau Rabe", t: "Ich spreche mit den Kindern nur Malagasy, mein Mann nur Französisch. Deutsch lernen sie im Kindergarten. Am Anfang hatte ich Angst, dass sie alles durcheinanderbringen." },
        { s: "m2", n: "Dr. Kessel", t: "Diese Sorge haben viele Eltern. Aber das Mischen von Sprachen ist ganz normal und kein Zeichen von Verwirrung. Kinder wissen sehr genau, mit wem sie welche Sprache sprechen." },
        { s: "m", n: "Moderator", t: "Gibt es auch Nachteile?" },
        { s: "m2", n: "Dr. Kessel", t: "Mehrsprachige Kinder beginnen manchmal etwas später zu sprechen. Bis zum Schulalter holen sie das aber fast immer auf." },
        { s: "f", n: "Frau Rabe", t: "Schwierig wird es, wenn die Kinder keine Lust mehr haben. Mein Sohn antwortet mir neuerdings auf Deutsch, obwohl ich Malagasy spreche." },
        { s: "m", n: "Moderator", t: "Was raten Sie in so einer Situation?" },
        { s: "m2", n: "Dr. Kessel", t: "Auf keinen Fall Druck machen. Besser ist es, die Sprache mit positiven Erlebnissen zu verbinden – Lieder, Spiele, Besuche bei den Großeltern." },
        { s: "f", n: "Frau Rabe", t: "Genau das versuchen wir. Im Sommer fliegen wir nach Madagaskar, da muss er Malagasy sprechen, wenn er mit seinen Cousins spielen will." }],
        items: [
          { n: 17, q: "Jeder Elternteil spricht eine eigene Sprache mit den Kindern.", tr: ["Chaque parent parle sa propre langue avec les enfants.", "Samy manana ny fiteniny ny ray sy ny reny."], a: "b", exp: { mg: "Rabe: izy Malagasy, ny vadiny Frantsay.", fr: "Frau Rabe." } },
          { n: 18, q: "Sprachen zu mischen ist normal.", tr: ["Mélanger les langues est normal.", "Ara-dalàna ny mampifangaro fiteny."], a: "c", exp: { mg: "Kessel: « ganz normal ».", fr: "Dr. Kessel." } },
          { n: 19, q: "Kinder können später zu sprechen beginnen.", tr: ["Les enfants peuvent commencer à parler plus tard.", "Mety ho tara kokoa vao miteny ny ankizy."], a: "c", exp: { mg: "Kessel: « etwas später ».", fr: "Dr. Kessel." } },
          { n: 20, q: "Ein Kind verweigert inzwischen eine Sprache.", tr: ["Un enfant refuse désormais une langue.", "Misy zaza mandà fiteny iray."], a: "b", exp: { mg: "Rabe: mamaly amin'ny alemana ny zanany.", fr: "Frau Rabe." } },
          { n: 21, q: "Man sollte Kinder nicht zwingen.", tr: ["Il ne faut pas forcer les enfants.", "Tsy tokony hotereina ny ankizy."], a: "c", exp: { mg: "Kessel: « keinen Druck machen ».", fr: "Dr. Kessel." } },
          { n: 22, q: "Eine Reise soll die Motivation steigern.", tr: ["Un voyage doit augmenter la motivation.", "Hampitombo ny fahavononana ny dia."], a: "b", exp: { mg: "Rabe: handeha any Madagasikara.", fr: "Frau Rabe." } }
        ] }] },
    { id: "H4", nom: "Teil 4", ecoutes: 2, type: "mc", lecture: 90,
      consigne: "Sie hören einen kurzen Vortrag. Der Redner spricht über das Thema „Pünktlichkeit in verschiedenen Kulturen“. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie jetzt die Aufgaben 23 bis 30. Dazu haben Sie 90 Sekunden Zeit.",
      ctr: ["Court exposé sur la ponctualité dans différentes cultures, deux écoutes. Questions 23 à 30.", "Kabary fohy momba ny fahatongavana ara-potoana amin'ny kolontsaina samihafa, henoina indroa."],
      clips: [{ id: "gb2m3-h4", titre: "Vortrag", script: [
        { s: "m", n: "Redner", t: "Meine Damen und Herren, „Fünf Minuten vor der Zeit ist des Deutschen Pünktlichkeit“ – so lautet ein bekanntes Sprichwort. Heute möchte ich zeigen, dass Pünktlichkeit nichts Universelles ist, sondern stark von der Kultur abhängt." },
        { s: "m", n: "Redner", t: "Der Anthropologe Edward Hall unterschied zwei Zeitkulturen. In sogenannten monochronen Kulturen, etwa in Deutschland oder der Schweiz, macht man eine Sache nach der anderen. Termine sind fest, und wer zu spät kommt, gilt schnell als respektlos." },
        { s: "m", n: "Redner", t: "In polychronen Kulturen dagegen, zum Beispiel in vielen Ländern Afrikas und Lateinamerikas, erledigt man mehrere Dinge gleichzeitig. Beziehungen sind wichtiger als der Kalender. Wenn man unterwegs einen Freund trifft, unterhält man sich – auch wenn man dadurch später kommt." },
        { s: "m", n: "Redner", t: "Wichtig ist: Keine dieser Kulturen ist besser. Problematisch wird es nur, wenn Menschen aus verschiedenen Kulturen zusammenarbeiten und die Regeln der anderen nicht kennen." },
        { s: "m", n: "Redner", t: "Interessant ist auch, dass selbst innerhalb eines Landes Unterschiede bestehen. In Deutschland ist man bei einem Geschäftstermin pünktlich, bei einer privaten Party aber kommt man besser zehn Minuten später – sonst ist der Gastgeber vielleicht noch nicht fertig." },
        { s: "m", n: "Redner", t: "Mein Rat für internationale Teams lautet deshalb: Sprechen Sie die Erwartungen offen an. Klären Sie zu Beginn, ob ein Meeting um neun Uhr wirklich um neun beginnt." },
        { s: "m", n: "Redner", t: "Und noch ein letzter Gedanke: Die Digitalisierung verändert unser Zeitgefühl. Weil wir per Handy jederzeit Bescheid sagen können, sind kurze Verspätungen heute überall akzeptierter als noch vor zwanzig Jahren. Vielen Dank." }],
        items: [
          { n: 23, q: "Der Redner möchte zeigen, dass Pünktlichkeit …", tr: ["L'orateur veut montrer que la ponctualité…", "Te haneho ilay mpandahateny fa ny fahatongavana ara-potoana…"], opts: ["überall gleich verstanden wird.", "von der Kultur abhängt.", "in Deutschland abnimmt."], otr: [["est comprise partout pareil", "mitovy na aiza na aiza"], ["dépend de la culture", "miankina amin'ny kolontsaina"], ["diminue en Allemagne", "mihena any Alemaina"]], a: "b", exp: { mg: "« stark von der Kultur abhängt ».", fr: "Elle dépend de la culture." } },
          { n: 24, q: "In monochronen Kulturen …", tr: ["Dans les cultures monochrones…", "Amin'ny kolontsaina « monochrones »…"], opts: ["macht man vieles gleichzeitig.", "erledigt man eins nach dem anderen.", "gibt es keine Termine."], otr: [["on fait beaucoup de choses à la fois", "zavatra maro miaraka"], ["on fait une chose après l'autre", "tsirairay arakaraka"], ["il n'y a pas de rendez-vous", "tsy misy fotoana"]], a: "b", exp: { mg: "« eine Sache nach der anderen ».", fr: "Une chose après l'autre." } },
          { n: 25, q: "In polychronen Kulturen sind … besonders wichtig.", tr: ["Dans les cultures polychrones, … sont particulièrement importantes.", "Amin'ny kolontsaina « polychrones » dia tena zava-dehibe ny…"], opts: ["Kalender", "Beziehungen", "Regeln"], otr: [["les agendas", "kalandrie"], ["les relations", "fifandraisana"], ["les règles", "fitsipika"]], a: "b", exp: { mg: "« Beziehungen sind wichtiger als der Kalender ».", fr: "Les relations." } },
          { n: 26, q: "Laut dem Redner ist …", tr: ["Selon l'orateur…", "Araka ilay mpandahateny…"], opts: ["die deutsche Zeitkultur die beste.", "keine Zeitkultur besser als die andere.", "die polychrone Kultur moderner."], otr: [["la culture allemande est la meilleure", "ny alemana no tsara indrindra"], ["aucune n'est meilleure", "tsy misy tsara noho ny iray"], ["la polychrone est plus moderne", "maoderina kokoa"]], a: "b", exp: { mg: "« Keine dieser Kulturen ist besser ».", fr: "Aucune n'est meilleure." } },
          { n: 27, q: "Probleme entstehen vor allem, wenn …", tr: ["Les problèmes naissent surtout quand…", "Mipoitra indrindra ny olana rehefa…"], opts: ["Menschen die Regeln der anderen Kultur nicht kennen.", "jemand immer pünktlich ist.", "Termine zu früh sind."], otr: [["on ne connaît pas les règles de l'autre culture", "tsy fantatra ny fitsipiky ny hafa"], ["quelqu'un est toujours ponctuel", "misy ara-potoana foana"], ["les rendez-vous sont trop tôt", "maraina loatra"]], a: "a", exp: { mg: "« die Regeln der anderen nicht kennen ».", fr: "Méconnaissance des règles." } },
          { n: 28, q: "Zu einer privaten Party in Deutschland kommt man am besten …", tr: ["À une fête privée en Allemagne, il vaut mieux arriver…", "Amin'ny fety tsy ofisialy any Alemaina dia tsara kokoa ny tonga…"], opts: ["genau pünktlich.", "etwas später.", "eine Stunde früher."], otr: [["pile à l'heure", "ara-potoana tsara"], ["un peu plus tard", "tara kely"], ["une heure plus tôt", "adiny iray mialoha"]], a: "b", exp: { mg: "« zehn Minuten später ».", fr: "Dix minutes plus tard." } },
          { n: 29, q: "Internationalen Teams rät er, …", tr: ["Aux équipes internationales, il conseille…", "Ho an'ny ekipa iraisam-pirenena dia atorony…"], opts: ["Erwartungen offen zu besprechen.", "nur online zu arbeiten.", "Meetings abzuschaffen."], otr: [["de parler ouvertement des attentes", "hiresaka mazava ny andrasana"], ["de travailler seulement en ligne", "an-tserasera ihany"], ["de supprimer les réunions", "hanafoana ny fivoriana"]], a: "a", exp: { mg: "« Sprechen Sie die Erwartungen offen an ».", fr: "Clarifier les attentes." } },
          { n: 30, q: "Durch Handys sind kurze Verspätungen heute …", tr: ["Grâce aux portables, les petits retards sont aujourd'hui…", "Noho ny finday, ny fahatarana kely ankehitriny dia…"], opts: ["seltener.", "eher akzeptiert.", "verboten."], otr: [["plus rares", "tsy dia fahita"], ["plutôt acceptés", "ekena kokoa"], ["interdits", "voarara"]], a: "b", exp: { mg: "« überall akzeptierter ».", fr: "Mieux acceptés." } }
        ] }] }
  ] },

  schreiben: { temps: 75, aufgaben: [
    { id: "S1", nom: "Teil 1", temps: 50, mots: 150, points: 50, type: "Forumsbeitrag",
      consigne: `<p>Sie schreiben einen Forumsbeitrag zum Thema „Ein Jahr Pause nach der Schule?“.</p><ul><li>Äußern Sie Ihre Meinung zu einem Jahr Pause zwischen Schule und Studium.</li><li>Nennen Sie Gründe, warum junge Menschen eine Pause machen.</li><li>Nennen Sie mögliche Nachteile.</li><li>Nennen Sie Beispiele, wie man dieses Jahr sinnvoll nutzen kann.</li></ul><p class="small">Denken Sie an eine Einleitung und einen Schluss. Schreiben Sie mindestens 150 Wörter.</p>`,
      ctr: ["Forum : une année de pause après le lycée ? Votre avis, les raisons, les inconvénients, des exemples utiles. Intro + conclusion, ≥150 mots.", "Forum: taona iray fiatoana aorian'ny lise? Hevitrao, antony, fatiantoka, ohatra. Fampidirana + famaranana, ≥150 teny."],
      checklist: ["Einleitung", "Teboka 1: hevitrao", "Teboka 2: antony", "Teboka 3: fatiantoka", "Teboka 4: ohatra (FSJ, au-pair, stage…)", "Schluss", "Connecteurs: zunächst, darüber hinaus, dennoch", "≥150 teny"],
      redemittel: ["Immer mehr Schulabgänger entscheiden sich für …", "Meiner Auffassung nach …", "Viele möchten zunächst herausfinden, …", "Ein Nachteil könnte sein, dass …", "Sinnvoll wäre es beispielsweise, …", "Alles in allem …"],
      modele: `Immer mehr Schulabgänger entscheiden sich nach dem Abitur für ein Jahr Pause. Ich möchte hier meine Meinung dazu äußern.

Meiner Auffassung nach kann so ein Jahr sehr wertvoll sein, wenn man es gut plant.

Viele junge Menschen wissen nach der Schule noch nicht, was sie studieren wollen. Sie möchten zunächst herausfinden, was zu ihnen passt. Andere sind nach zwölf Jahren Schule einfach müde und brauchen eine Veränderung.

Ein Nachteil könnte sein, dass man den Rhythmus des Lernens verliert. Außerdem beginnt man ein Jahr später zu arbeiten und Geld zu verdienen. Wer das Jahr nur zu Hause verbringt, verschwendet Zeit.

Sinnvoll wäre es beispielsweise, ein Freiwilliges Soziales Jahr zu machen, als Au-pair ins Ausland zu gehen oder Praktika in verschiedenen Berufen zu absolvieren. Ich selbst habe nach dem Baccalauréat ein Jahr in einer Schule in Antsirabe geholfen und dabei gemerkt, dass ich Lehrerin werden möchte.

Alles in allem halte ich eine Pause für eine gute Chance – vorausgesetzt, man nutzt sie aktiv.` },
    { id: "S2", nom: "Teil 2", temps: 25, mots: 100, points: 25, type: "Nachricht (formell)",
      consigne: `<p>Sie arbeiten seit zwei Jahren Vollzeit in einer Firma. Sie möchten Ihre Arbeitszeit für ein Jahr auf 30 Stunden reduzieren, um eine Weiterbildung zu machen. Schreiben Sie eine Nachricht an Ihre Vorgesetzte, Frau Dr. Busch.</p><ul><li>Erklären Sie Ihren Wunsch.</li><li>Nennen Sie den Grund.</li><li>Schlagen Sie vor, wie Sie Ihre Arbeitszeit aufteilen könnten.</li><li>Betonen Sie, dass Ihnen die Firma wichtig ist.</li></ul><p class="small">Überlegen Sie sich eine passende Reihenfolge. Vergessen Sie nicht Anrede und Gruß. Schreiben Sie mindestens 100 Wörter.</p>`,
      ctr: ["Message à votre supérieure : vous voulez réduire votre temps de travail pour une formation ; raison, proposition d'horaires, attachement à l'entreprise. ≥100 mots.", "Hafatra ho an'ny lehibenao: te hampihena ora fiasana ianao noho ny fiofanana; antony, soso-kevitra, fifamatorana amin'ny orinasa. ≥100 teny."],
      checklist: ["Sehr geehrte Frau Dr. Busch,", "Ny fangatahanao", "Antony (fiofanana)", "Soso-kevitra: fizarana ora", "Fifamatorana amin'ny orinasa", "Mit freundlichen Grüßen", "Konjunktiv II", "≥100 teny"],
      redemittel: ["ich würde gern ein Anliegen mit Ihnen besprechen.", "Ab … möchte ich meine Arbeitszeit auf … Stunden reduzieren.", "Der Grund dafür ist, dass …", "Ich könnte zum Beispiel montags bis donnerstags arbeiten.", "Die Arbeit in unserem Team ist mir sehr wichtig.", "Ich würde mich über ein Gespräch freuen."],
      modele: `Sehr geehrte Frau Dr. Busch,

ich würde gern ein Anliegen mit Ihnen besprechen. Ab September möchte ich meine Arbeitszeit für ein Jahr von 40 auf 30 Stunden pro Woche reduzieren.

Der Grund dafür ist, dass ich eine berufsbegleitende Weiterbildung zur Projektmanagerin beginnen möchte. Der Unterricht findet jeden Freitag statt.

Ich könnte deshalb von Montag bis Donnerstag jeweils siebeneinhalb Stunden arbeiten. So wären alle wichtigen Teamsitzungen weiterhin abgedeckt, und dringende Anfragen am Freitag könnte ich per E-Mail beantworten.

Die Arbeit in unserem Team ist mir sehr wichtig, und ich bin überzeugt, dass die Firma von meinen neuen Kenntnissen profitieren wird.

Ich würde mich über ein persönliches Gespräch freuen.

Mit freundlichen Grüßen
Hanitra Rakotobe` }
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
        { titre: "Thema 1 · Haustiere in der Stadt", points: [
          { de: "Einleitung: Thema vorstellen und Aufbau nennen", mg: "Fampidirana", fr: "Introduction" },
          { de: "Beschreiben Sie, welche Haustiere Menschen in Städten halten.", mg: "Biby fiompy inona no ao an-tanàna?", fr: "Quels animaux en ville ?" },
          { de: "Beschreiben Sie eine Form genauer.", mg: "Hazavao ny iray.", fr: "Décrivez-en un." },
          { de: "Nennen Sie Vor- und Nachteile und bewerten Sie diese.", mg: "Tombony, fatiantoka, tombana.", fr: "Avantages, inconvénients." },
          { de: "Schluss: Zusammenfassung und eigene Meinung", mg: "Famaranana", fr: "Conclusion" } ],
          modele: `Ich spreche heute über Haustiere in der Stadt. Zunächst nenne ich, welche Tiere Stadtbewohner halten, dann gehe ich auf Hunde genauer ein, und zum Schluss bewerte ich Vor- und Nachteile.

In Städten leben vor allem Katzen, Hunde, kleine Tiere wie Kaninchen oder Hamster, aber auch Fische und Vögel. Katzen sind besonders beliebt, weil sie wenig Platz brauchen.

Genauer möchte ich auf Hunde eingehen. Ein Hund muss mehrmals am Tag nach draußen, auch bei Regen. In vielen Wohnungen sind Hunde nur mit Erlaubnis des Vermieters erlaubt. Außerdem zahlt man in Deutschland eine Hundesteuer.

Ein großer Vorteil ist, dass Haustiere gegen Einsamkeit helfen und Menschen in Bewegung bringen. Hundebesitzer kommen im Park leicht mit anderen ins Gespräch. Andererseits ist es für das Tier oft schwierig, wenn es den ganzen Tag allein in einer kleinen Wohnung ist.

Zusammenfassend finde ich Haustiere in der Stadt gut, aber nur, wenn man genug Zeit und Platz hat. Vielen Dank für Ihre Aufmerksamkeit.` },
        { titre: "Thema 2 · Mehrsprachigkeit in der Familie", points: [
          { de: "Einleitung: Thema vorstellen und Aufbau nennen", mg: "Fampidirana", fr: "Introduction" },
          { de: "Beschreiben Sie, wie Familien mehrere Sprachen nutzen.", mg: "Ahoana no ampiasan'ny fianakaviana fiteny maro?", fr: "Comment les familles utilisent plusieurs langues." },
          { de: "Beschreiben Sie eine Möglichkeit genauer.", mg: "Hazavao ny iray.", fr: "Décrivez-en une." },
          { de: "Nennen Sie Vor- und Nachteile und bewerten Sie diese.", mg: "Tombony, fatiantoka.", fr: "Avantages, inconvénients." },
          { de: "Schluss: Zusammenfassung und eigene Meinung", mg: "Famaranana", fr: "Conclusion" } ],
          modele: `In meinem Vortrag geht es um Mehrsprachigkeit in der Familie. Ich stelle zuerst verschiedene Modelle vor, beschreibe dann ein Modell genauer und bewerte am Ende Vor- und Nachteile.

Manche Familien sprechen zu Hause eine Sprache und draußen eine andere. In anderen spricht jeder Elternteil seine Muttersprache mit den Kindern. Und manchmal kommt noch eine dritte Sprache über die Schule dazu.

Genauer möchte ich das Prinzip „eine Person – eine Sprache“ beschreiben. In meiner Familie spricht meine Mutter Malagasy mit uns und mein Vater Französisch. So haben wir beide Sprachen von Anfang an gelernt, ohne Unterricht.

Der Vorteil liegt auf der Hand: Die Kinder lernen mehrere Sprachen fast ohne Mühe und können später mit der ganzen Familie kommunizieren. Ein Nachteil kann sein, dass die Kinder etwas später sprechen oder eine Sprache irgendwann ablehnen.

Insgesamt bin ich überzeugt, dass Mehrsprachigkeit ein großes Geschenk ist – Eltern brauchen dafür aber Geduld. Vielen Dank.` } ],
      redemittel: [
        ["Einleitung · Fampidirana", ["Ich spreche heute über …", "Zunächst …, dann …, zum Schluss …"]],
        ["Hauptteil · Ampahany lehibe", ["Besonders beliebt ist …", "Genauer möchte ich auf … eingehen.", "In meiner Familie …"]],
        ["Bewertung · Tombana", ["Ein großer Vorteil ist, dass …", "Andererseits …", "Ein Nachteil kann sein, dass …"]],
        ["Schluss · Famaranana", ["Zusammenfassend finde ich …", "Insgesamt bin ich überzeugt, dass …"]]
      ] },
    { id: "P2", nom: "Teil 2 – Diskussion führen", mg: "Adihevitra", duree: 5, mode: "dialog", em: "⚖️",
      consigne: `<p>Sie sind Teilnehmende eines Debattierclubs und diskutieren über die Frage:</p><div class="plan"><b>Sollten Autos aus den Innenstädten verbannt werden?</b><ul><li>Tauschen Sie Ihren Standpunkt und Ihre Argumente aus.</li><li>Reagieren Sie auf die Argumente Ihres Gesprächspartners.</li><li>Fassen Sie am Ende zusammen: Sind Sie dafür oder dagegen?</li></ul>Stichpunkte: Luft und Lärm? · Geschäfte? · Menschen mit Behinderung? · öffentlicher Verkehr? · …</div>`,
      ctr: ["Débat : faut-il interdire les voitures dans les centres-villes ? Position, réaction, résumé.", "Adihevitra: tokony horarana ve ny fiara afovoan-tanàna? Hevitra, valiny, famintinana."],
      partenaire: [
        { id: "gb2m3-p2-1", t: "Ich finde, Innenstädte sollten autofrei sein. Die Luft wäre besser und es wäre viel ruhiger. Bist du einverstanden?", aide: ["Im Prinzip ja, allerdings …", "Da bin ich anderer Meinung, denn …"] },
        { id: "gb2m3-p2-2", t: "Aber die Geschäfte würden doch profitieren – Fußgänger kaufen mehr ein.", aide: ["Das ist nicht bewiesen. Viele Kunden kommen mit dem Auto.", "In manchen Städten hat das tatsächlich funktioniert."] },
        { id: "gb2m3-p2-3", t: "Okay, für ältere Menschen und Menschen mit Behinderung muss es Ausnahmen geben, das sehe ich ein.", aide: ["Genau. Und der Lieferverkehr braucht auch Lösungen.", "Außerdem müssten Busse und Bahnen viel besser werden."] },
        { id: "gb2m3-p2-4", t: "Wir müssen langsam zum Ende kommen. Was ist dein Fazit?", aide: ["Ich bin für autofreie Zonen, aber mit Ausnahmen.", "Wir sind uns einig, dass … Uneinig sind wir bei …"] }
      ],
      redemittel: [
        ["Standpunkt · Hevitra", ["Ich vertrete die Meinung, dass …", "Für mich ist entscheidend, dass …"]],
        ["Widersprechen · Manohitra", ["Das ist nicht bewiesen.", "Da bin ich anderer Meinung."]],
        ["Einräumen · Manaiky ampahany", ["Das sehe ich ein, aber …", "Im Prinzip ja, allerdings …"]],
        ["Zusammenfassen · Mamintina", ["Mein Fazit: …", "Uneinig sind wir bei …"]]
      ],
      modele: `A: Innenstädte sollten autofrei sein: bessere Luft, weniger Lärm.
B: Im Prinzip ja, allerdings brauchen viele Menschen das Auto, zum Beispiel Handwerker.
A: Aber die Geschäfte würden profitieren – Fußgänger kaufen mehr ein.
B: Das ist nicht bewiesen. Viele Kunden kommen mit dem Auto aus dem Umland.
A: Für ältere Menschen und Menschen mit Behinderung muss es Ausnahmen geben, das sehe ich ein.
B: Und Busse und Bahnen müssten viel besser und billiger werden.
A: Mein Fazit: Ich bin für autofreie Zonen mit Ausnahmen.
B: Ich bin eher für weniger Autos statt für ein Verbot. Einig sind wir uns beim Ausbau des Nahverkehrs.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Teboka rehetra · Tous les points" },
    { nom: "Kohärenz", desc: "Drafitra mazava · Structure claire" },
    { nom: "Interaktion", desc: "Mamaly ny namanao (Teil 2) · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana B2" },
    { nom: "Strukturen", desc: "Grammaire B2" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "hochwertig", fr: "de qualité", mg: "tsara kalitao", ex: "Ich kaufe wenige, aber hochwertige Sachen." },
    { de: "der Altkleidercontainer", fr: "le conteneur à vêtements", mg: "fitoeran'akanjo efa niasa", ex: "Ich bringe Hemden zum Altkleidercontainer." },
    { de: "gemischte Gefühle", fr: "des sentiments mitigés", mg: "fihetseham-po mifangaro", ex: "Ich sehe das mit gemischten Gefühlen." },
    { de: "der Treibstoff", fr: "le carburant", mg: "solika", ex: "Das Fahrrad braucht keinen Treibstoff." },
    { de: "verdrängen", fr: "supplanter", mg: "manosika hiala", ex: "Das Auto verdrängte das Rad." },
    { de: "der Pendler", fr: "le navetteur", mg: "mpivezivezy isan'andro", ex: "Pendler mit langen Wegen." },
    { de: "tückisch", fr: "insidieux", mg: "mamitaka", ex: "Das Tückische am Lärm …" },
    { de: "die Gerechtigkeit", fr: "la justice", mg: "rariny", ex: "Eine Frage der sozialen Gerechtigkeit." },
    { de: "die Grünfläche", fr: "l'espace vert", mg: "faritra maitso", ex: "Mehr Grünflächen in der Stadt." },
    { de: "oberflächlich", fr: "superficiel", mg: "ivelany fotsiny", ex: "Die Diskussion ist oberflächlich." },
    { de: "die Belastung", fr: "la charge", mg: "enta-mavesatra", ex: "Eine große finanzielle Belastung." },
    { de: "entlasten", fr: "soulager, désengorger", mg: "manamaivana", ex: "Die Innenstadt vom Verkehr entlasten." },
    { de: "der Aushang", fr: "l'affiche, l'annonce", mg: "filazana apetaka", ex: "Ich habe einen Aushang gesehen." },
    { de: "skeptisch", fr: "sceptique", mg: "misalasala", ex: "Viele waren skeptisch." },
    { de: "die Kostprobe", fr: "la dégustation", mg: "santionany", ex: "Kostproben gratis!" },
    { de: "aufholen", fr: "rattraper", mg: "manenjika", ex: "Bis zur Schule holen sie das auf." },
    { de: "durcheinanderbringen", fr: "mélanger, confondre", mg: "manafangaro", ex: "Sie bringen die Sprachen durcheinander." },
    { de: "der Gastgeber", fr: "l'hôte", mg: "mpampiantrano", ex: "Der Gastgeber ist noch nicht fertig." },
    { de: "der Schulabgänger", fr: "le jeune diplômé du lycée", mg: "vao nivoaka sekoly", ex: "Viele Schulabgänger machen eine Pause." },
    { de: "berufsbegleitend", fr: "en cours d'emploi", mg: "miaraka amin'ny asa", ex: "Eine berufsbegleitende Weiterbildung." },
    { de: "das Anliegen", fr: "la requête", mg: "fangatahana", ex: "Ich habe ein Anliegen." },
    { de: "verbannen", fr: "bannir", mg: "manesotra", ex: "Autos aus der Innenstadt verbannen." }
  ]
});
})();
