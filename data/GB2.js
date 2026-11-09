/* GOETHE-ZERTIFIKAT B2 — textes originaux H Conseil & Formation */
(function(){
const P = window.POOLS.GB2;
P.info = {
  modules: [
    { m: "Lesen", mg: "Famakiana", t: "65 min", parts: "5 Teile · 30 items" },
    { m: "Hören", mg: "Fihainoana", t: "~40 min", parts: "4 Teile · 30 items" },
    { m: "Schreiben", mg: "Fanoratana", t: "75 min", parts: "Forumsbeitrag (≥150 teny) + message (≥100 teny)" },
    { m: "Sprechen", mg: "Fitenenana", t: "~15 min + 15 min préparation", parts: "Vortrag + Diskussion" }
  ],
  reussite: { mg: "Isaky ny module dia 100 isa. Mila <b>60 isa</b> vao afaka. Azo atao tsirairay ny module.", fr: "Chaque module sur 100 ; 60 pour réussir ; examen modulaire." },
  institut: { goethe: { mg: "Goethe B2: lahatsoratra lava kokoa, hevitra sy fifandirana. Ny hafainganana no tena zava-dehibe: arahina ny fotoana isaky ny Teil.", fr: "Textes plus longs, opinions et argumentation. Gère bien ton temps par partie." } },
  strategie: [
    { mg: "Ampiasao ny <b>fotoana atolotra</b> isaky ny Teil (18 / 12 / 12 / 12 / 6 min).", fr: "Respecte le temps conseillé par partie." },
    { mg: "Ny fanontaniana B2 dia mitady <b>hevitra</b> sy <b>fihetsika</b>: tadiavo ny teny toy ny « allerdings », « dennoch », « zwar … aber ».", fr: "Repère les connecteurs d'opinion : allerdings, dennoch, zwar … aber." },
    { mg: "Aza mijanona ela amin'ny teny tsy fantatra: ny hevitra ankapobeny no ilaina.", fr: "Ne bloque pas sur un mot inconnu." }
  ],
  guides: {
    lesen: [
      { t: "Teil 1 · Forum · 4 olona · Wer …? (18 min)", tips: [ { mg: "Mety voafidy imbetsaka ny olona iray. Tsipiho ny hevitry ny tsirairay.", fr: "Une personne peut être choisie plusieurs fois." } ] },
      { t: "Teil 2 · Texte à trous · 6 phrases sur 8 (12 min)", tips: [ { mg: "Jereo ny teny mampifandray (Dabei, Deshalb, Doch) sy ny mpisolo anarana (er, diese).", fr: "Regarde connecteurs et pronoms avant/après le trou." } ] },
      { t: "Teil 3 · Article · a/b/c (12 min)", tips: [ { mg: "Araka ny filaharan'ny lahatsoratra. Tandremo ny fanovana hevitra.", fr: "Dans l'ordre du texte ; attention aux reformulations." } ] },
      { t: "Teil 4 · Opinions ↔ titres (12 min)", tips: [ { mg: "Hevitra iray tsy ampiasaina. Ny lohateny no mamintina ny hevitra.", fr: "Une opinion n'est pas utilisée." } ] },
      { t: "Teil 5 · Règlement ↔ titres (6 min)", tips: [ { mg: "Vakio haingana ny paragrafy tsirairay ary tadiavo ny lohahevitra.", fr: "Lecture rapide : quel est le sujet du paragraphe ?" } ] }
    ],
    hoeren: [
      { t: "Teil 1 · 5 textes · 1 écoute", tips: [ { mg: "Indray mandeha ihany! Vakio aloha ny fanontaniana roa.", fr: "Une seule écoute : lis les 2 questions avant." } ] },
      { t: "Teil 2 · Interview · 2 écoutes", tips: [ { mg: "90 segondra hamakiana: tsipiho ny teny lehibe.", fr: "90 s de lecture : souligne les mots-clés." } ] },
      { t: "Teil 3 · Discussion · Wer sagt das? · 1 écoute", tips: [ { mg: "Fantaro ny feon'ny olona tsirairay hatrany am-boalohany.", fr: "Identifie les voix dès le début." } ] },
      { t: "Teil 4 · Exposé · 2 écoutes", tips: [ { mg: "Mifanaraka amin'ny drafitry ny kabary ny fanontaniana.", fr: "Les questions suivent le plan de l'exposé." } ] }
    ],
    schreiben: [
      { t: "Teil 1 · Forumsbeitrag ≥150 teny (50 min)", tips: [ { mg: "Teboka 4 avokoa, miaraka amin'ny fampidirana sy famaranana. Mampiasà connecteurs (außerdem, jedoch, deshalb).", fr: "Les 4 points + intro + conclusion ; utilise des connecteurs." } ] },
      { t: "Teil 2 · Message formel ≥100 teny (25 min)", tips: [ { mg: "Fahalalam-pomba: « Sehr geehrter Herr … », Konjunktiv II (Könnten Sie …?).", fr: "Registre poli : Konjunktiv II." } ] }
    ],
    sprechen: [
      { t: "Teil 1 · Vortrag (~4 min)", tips: [ { mg: "Einleitung → teboka 3 → Schluss. Lazao ny drafitra any am-piandohana.", fr: "Introduction → 3 points → conclusion. Annonce le plan." } ] },
      { t: "Teil 2 · Diskussion (~5 min)", tips: [ { mg: "Lazao ny hevitrao + antony, valio ny hevitry ny namanao, famintinana any am-parany.", fr: "Opinion + arguments, réaction, résumé final." } ] }
    ]
  }
};
P.vocabOfficiel = [
  { de: "der Minimalismus", fr: "le minimalisme", mg: "fiainana tsotra" }, { de: "der Gebrauchsgegenstand", fr: "l'objet utilitaire", mg: "fitaovana ampiasaina" },
  { de: "der Besitz", fr: "la possession", mg: "fananana" }, { de: "verzichten auf", fr: "renoncer à", mg: "mamoy / tsy mampiasa" },
  { de: "der Naturschutz", fr: "la protection de la nature", mg: "fiarovana ny natiora" }, { de: "überflüssig", fr: "superflu", mg: "tsy ilaina" },
  { de: "der Wirtschaftszweig", fr: "le secteur économique", mg: "sehatra ara-toekarena" }, { de: "sich leisten können", fr: "pouvoir se permettre", mg: "afaka mividy / manao" },
  { de: "die Kutsche", fr: "la calèche", mg: "kalesy" }, { de: "das Portal", fr: "le portail (web)", mg: "vavahadin-tserasera" },
  { de: "die Diagnose", fr: "le diagnostic", mg: "famantarana aretina" }, { de: "der digitale Nomade", fr: "le nomade numérique", mg: "mpiasa mivezivezy amin'ny Internet" },
  { de: "vereinbaren", fr: "concilier / convenir", mg: "mampifanaraka" }, { de: "der Vorgesetzte", fr: "le supérieur", mg: "lehibe ara-asa" },
  { de: "die Studienordnung", fr: "le règlement des études", mg: "fitsipika momba ny fianarana" }, { de: "der Nachweis", fr: "le justificatif", mg: "porofo" },
  { de: "die Wohngemeinschaft", fr: "la colocation", mg: "trano iombonana" }, { de: "die Arbeitstechnik", fr: "la méthode de travail", mg: "fomba fiasana" },
  { de: "die Ruhepause", fr: "la pause", mg: "fiatoana" }, { de: "das Gedächtnis", fr: "la mémoire", mg: "fitadidiana" },
  { de: "die Landwirtschaft", fr: "l'agriculture", mg: "fambolena" }, { de: "die Plastikverpackung", fr: "l'emballage plastique", mg: "fonosana plastika" },
  { de: "verbreitet", fr: "répandu", mg: "miely be" }, { de: "die Finanzierung", fr: "le financement", mg: "famatsiam-bola" },
  { de: "das Teilzeitstudium", fr: "les études à temps partiel", mg: "fianarana tapa-potoana" }, { de: "beurteilen", fr: "évaluer", mg: "manombana" },
  { de: "der Standpunkt", fr: "le point de vue", mg: "fomba fijery" }, { de: "das Argument", fr: "l'argument", mg: "porofo / antony" },
  { de: "die Alternative", fr: "l'alternative", mg: "safidy hafa" }, { de: "der Vortrag", fr: "l'exposé", mg: "kabary" },
  { de: "die Einleitung", fr: "l'introduction", mg: "fampidirana" }, { de: "zusammenfassen", fr: "résumer", mg: "mamintina" },
  { de: "die Insekten", fr: "les insectes", mg: "bibikely" }, { de: "die Ernährung", fr: "l'alimentation", mg: "fomba fisakafoanana" },
  { de: "das Praktikum", fr: "le stage", mg: "fampiharana (stage)" }
];

P.sets.push({
  id: "gb2m1", titre: "Modellsatz 1", theme: "Tsy misy fiara · Kafe · Torimaso · Homeoffice",
  lesen: { temps: 65, teile: [
    { id: "L1", nom: "Teil 1", type: "who", temps: 18,
      consigne: "Sie lesen in einem Forum, wie Menschen über ein Leben ohne eigenes Auto denken. Auf welche der vier Personen treffen die einzelnen Aussagen zu? Die Personen können mehrmals gewählt werden.",
      ctr: ["Forum sur la vie sans voiture : à quelle personne (a–d) correspond chaque affirmation ? Plusieurs fois possible.", "Forum momba ny fiainana tsy misy fiara: iza amin'ireo olona 4 no mifanaraka? Azo averina."],
      personnes: { a: "Jana", b: "Robert", c: "Mirela", d: "Thomas" },
      texte: `<div class="ads">
<div class="ad"><span class="l">a</span><b>Jana:</b> Vor drei Jahren habe ich mein Auto verkauft, als ich in die Stadt gezogen bin. Ehrlich gesagt war das keine ökologische Entscheidung, sondern eine finanzielle: Versicherung, Parkplatz, Reparaturen – das war mir einfach zu teuer. Heute fahre ich mit dem Rad zur Arbeit und bin fitter als je zuvor. Für den Wocheneinkauf nutze ich einen Lieferdienst. Nur wenn ich meine Eltern auf dem Land besuche, wird es kompliziert, weil der letzte Bus um 19 Uhr fährt.</div>
<div class="ad"><span class="l">b</span><b>Robert:</b> Ich habe nie ein Auto besessen, und ich vermisse auch nichts. Für mich ist ein Auto nur ein Mittel, um von A nach B zu kommen – kein Statussymbol. Wenn ich wirklich eins brauche, nehme ich Carsharing. Das kostet zwar pro Fahrt etwas, aber unterm Strich spare ich viel Geld. Was mich ärgert: Die Politik investiert immer noch mehr in Straßen als in Busse und Bahnen.</div>
<div class="ad"><span class="l">c</span><b>Mirela:</b> Mit drei Kindern ohne Auto? Viele Freunde haben mich für verrückt erklärt. Aber wir haben bewusst eine Wohnung gesucht, von der aus Schule, Kindergarten und Supermarkt zu Fuß erreichbar sind. Die Kinder lernen so früh, sich selbstständig in der Stadt zu bewegen. Mir ist wichtig, dass sie später eine gesunde Umwelt vorfinden – deshalb überlegen wir bei jeder Entscheidung, was das für die Natur bedeutet.</div>
<div class="ad"><span class="l">d</span><b>Thomas:</b> Ich lebe auf dem Land und brauche mein Auto jeden Tag, das gebe ich zu. Trotzdem fahre ich seit einem Jahr elektrisch und nehme regelmäßig Nachbarn mit, die zum Bahnhof müssen. Ein komplettes Leben ohne Auto halte ich außerhalb der Städte für unrealistisch. Wer so etwas fordert, hat meistens keine Ahnung, wie schlecht die Busverbindungen bei uns sind.</div></div>`,
      exemple: { q: "Wer hat sich aus Kostengründen gegen ein Auto entschieden?", a: "a" },
      items: [
        { n: 1, q: "Wer sieht das Auto nur als praktisches Transportmittel?", tr: ["Qui voit la voiture comme un simple moyen de transport ?", "Iza no mihevitra ny fiara ho fitaterana fotsiny?"], a: "b", exp: { mg: "Robert: « nur ein Mittel, um von A nach B zu kommen – kein Statussymbol ».", fr: "Robert : simple moyen d'aller de A à B." } },
        { n: 2, q: "Wer hat bei der Wohnungssuche auf kurze Wege geachtet?", tr: ["Qui a choisi un logement avec des trajets courts ?", "Iza no nitady trano akaiky ny zavatra rehetra?"], a: "c", exp: { mg: "Mirela: « zu Fuß erreichbar » (azo tongavana an-tongotra).", fr: "Mirela : tout accessible à pied." } },
        { n: 3, q: "Wer hat Schwierigkeiten bei Besuchen auf dem Land?", tr: ["Qui a des difficultés pour les visites à la campagne ?", "Iza no sahirana rehefa mitsidika any ambanivohitra?"], a: "a", exp: { mg: "Jana: « der letzte Bus um 19 Uhr ».", fr: "Jana : dernier bus à 19 h." } },
        { n: 4, q: "Wer kritisiert die Verkehrspolitik?", tr: ["Qui critique la politique des transports ?", "Iza no manakiana ny politika momba ny fitaterana?"], a: "b", exp: { mg: "Robert: « Die Politik investiert … mehr in Straßen ».", fr: "Robert critique les investissements dans les routes." } },
        { n: 5, q: "Für wen spielt der Umweltschutz eine zentrale Rolle?", tr: ["Pour qui la protection de l'environnement est centrale ?", "Ho an'iza no zava-dehibe ny fiarovana ny tontolo iainana?"], a: "c", exp: { mg: "Mirela: « gesunde Umwelt … was das für die Natur bedeutet ». Jana kosa: tsy ekolojika ny fanapahan-keviny.", fr: "Mirela ; Jana dit que ce n'était pas écologique." } },
        { n: 6, q: "Wer bietet anderen Mitfahrgelegenheiten an?", tr: ["Qui propose du covoiturage ?", "Iza no mitondra olon-kafa?"], a: "d", exp: { mg: "Thomas: « nehme regelmäßig Nachbarn mit ».", fr: "Thomas emmène ses voisins." } },
        { n: 7, q: "Wer ist durch den Verzicht aufs Auto sportlicher geworden?", tr: ["Qui est devenu plus sportif sans voiture ?", "Iza no lasa matanjaka kokoa?"], a: "a", exp: { mg: "Jana: « fitter als je zuvor ».", fr: "Jana : plus en forme que jamais." } },
        { n: 8, q: "Wer hält ein Leben ohne Auto nicht überall für möglich?", tr: ["Qui pense que vivre sans voiture n'est pas possible partout ?", "Iza no mihevitra fa tsy azo atao na aiza na aiza?"], a: "d", exp: { mg: "Thomas: « außerhalb der Städte … unrealistisch ».", fr: "Thomas : irréaliste hors des villes." } },
        { n: 9, q: "Wer musste sich gegen die Meinung anderer durchsetzen?", tr: ["Qui a dû s'imposer contre l'avis des autres ?", "Iza no tsy maintsy niatrika ny hevitry ny hafa?"], a: "c", exp: { mg: "Mirela: « Viele Freunde haben mich für verrückt erklärt ».", fr: "Ses amis la croyaient folle." } }
      ] },
    { id: "L2", nom: "Teil 2", type: "match", temps: 12, zero: false, gap: true,
      consigne: "Sie lesen in einer Zeitschrift einen Artikel über die Geschichte des Kaffees. Welche Sätze passen in die Lücken? Zwei Sätze passen nicht.",
      ctr: ["Article sur l'histoire du café : quelle phrase (a–h) va dans chaque trou ? Deux phrases sont en trop.", "Lahatsoratra momba ny tantaran'ny kafe: iza no fehezanteny mifanaraka amin'ny banga? Roa no tafahoatra."],
      texte: `<h3>Eine Bohne erobert die Welt</h3>
<p>Ob im Büro, im Café oder unterwegs – für viele Menschen beginnt der Tag erst mit der ersten Tasse Kaffee. <span class="gap">[0]</span> Doch woher kommt eigentlich dieses Getränk?</p>
<p>Einer Legende nach entdeckte ein Hirte in Äthiopien die Wirkung der Kaffeebohne. Seine Ziegen fraßen rote Früchte von einem Strauch und tanzten danach die ganze Nacht. <span class="gap">[10]</span> Ob die Geschichte wahr ist, weiß niemand.</p>
<p>Sicher ist dagegen, dass Kaffee im 15. Jahrhundert im Jemen getrunken wurde. Von dort verbreitete er sich in die gesamte arabische Welt. <span class="gap">[11]</span> Dort traf man sich, diskutierte über Politik und spielte Schach.</p>
<p>Nach Europa kam der Kaffee im 17. Jahrhundert über Venedig. Zunächst war er ein Luxusgetränk für reiche Leute. <span class="gap">[12]</span> Erst als die Preise sanken, wurde Kaffee auch für einfache Familien bezahlbar.</p>
<p>Die europäischen Kolonialmächte begannen bald, Kaffee in ihren Kolonien anzubauen – in Lateinamerika, in Asien und auch auf Inseln im Indischen Ozean. <span class="gap">[13]</span> Für die Menschen, die dort auf den Plantagen arbeiteten, waren die Bedingungen allerdings oft hart.</p>
<p>Heute gehört Kaffee zu den wichtigsten Handelswaren der Welt. <span class="gap">[14]</span> Gleichzeitig wächst die Kritik an den niedrigen Preisen, die viele Kleinbauern für ihre Ernte bekommen.</p>
<p>Eine Antwort darauf ist der faire Handel. <span class="gap">[15]</span> Immer mehr Verbraucher sind bereit, dafür etwas mehr zu bezahlen.</p>`,
      choixTitre: "Sätze",
      choix: {
        a: "In Deutschland trinkt jeder Mensch im Durchschnitt mehr als 160 Liter pro Jahr.",
        b: "Neugierig probierte der Hirte die Früchte selbst – und fühlte sich plötzlich hellwach.",
        c: "Bald entstanden in Städten wie Kairo und Istanbul die ersten Kaffeehäuser.",
        d: "Ärzte warnen deshalb heute davor, mehr als zwei Tassen am Tag zu trinken.",
        e: "So wurde die Pflanze unter anderem auch auf Madagaskar und La Réunion heimisch.",
        f: "Manche Kirchenvertreter hielten das fremde Getränk sogar für gefährlich.",
        g: "Millionen Familien weltweit leben vom Anbau der Bohnen.",
        h: "Dabei garantieren Organisationen den Produzenten einen Mindestpreis."
      },
      exemple: { q: "Lücke 0", a: "a" },
      items: [
        { n: 10, q: "Lücke 10", a: "b", exp: { mg: "Tohin'ny tantaran'ny mpiandry osy: nandihy ny osy → nanandrana izy ary « hellwach ».", fr: "Suite logique de la légende du berger." } },
        { n: 11, q: "Lücke 11", a: "c", exp: { mg: "« Dort traf man sich » → toerana: « Kaffeehäuser » ao Kairo sy Istanbul.", fr: "« Dort » renvoie aux cafés de Caire/Istanbul." } },
        { n: 12, q: "Lücke 12", a: "f", exp: { mg: "Fotoana voalohany tany Eoropa: nisy nanohitra azy (« gefährlich »), talohan'ny nidinan'ny vidiny.", fr: "Les débuts en Europe : méfiance de l'Église." } },
        { n: 13, q: "Lücke 13", a: "e", exp: { mg: "Mitohy ny « Inseln im Indischen Ozean » → Madagasikara sy La Réunion.", fr: "Les îles de l'océan Indien → Madagascar, La Réunion." } },
        { n: 14, q: "Lücke 14", a: "g", exp: { mg: "« Handelswaren » → fianakaviana an-tapitrisany no velona amin'izany; avy eo « Kleinbauern ».", fr: "Lien entre commerce mondial et petits producteurs." } },
        { n: 15, q: "Lücke 15", a: "h", exp: { mg: "« fairer Handel » → « Mindestpreis » ho an'ny mpamokatra. Ny d sy ny a (ohatra) tsy ampiasaina.", fr: "Commerce équitable → prix minimum. d est en trop." } }
      ] },
    { id: "L3", nom: "Teil 3", type: "mc", temps: 12,
      consigne: "Sie lesen in einer Zeitung einen Artikel über Schlaf und Smartphones. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
      ctr: ["Article sur le sommeil et les smartphones. Choisissez la bonne réponse.", "Lahatsoratra momba ny torimaso sy ny finday. Safidio ny valiny marina."],
      texte: `<div class="press"><h3>Wach im Licht des Bildschirms</h3>
<p>Fast jeder dritte Erwachsene in Deutschland klagt über Schlafprobleme. Schlafforscherin Dr. Katrin Moll sieht einen wichtigen Grund dafür in unserer Hand – oder genauer: auf dem Nachttisch. „Das blaue Licht des Smartphones signalisiert dem Gehirn, dass es Tag ist“, erklärt sie. „Der Körper produziert dann weniger Melatonin, das Hormon, das uns müde macht.“</p>
<p>Doch das Licht allein ist nicht das Problem. Noch stärker wirke, so Moll, was wir auf dem Bildschirm sehen. Eine aufregende Serie oder eine ärgerliche Nachricht kurz vor dem Einschlafen halte den Kopf aktiv. Die viel gepriesenen Nachtmodi, die das Display gelblich färben, helfen deshalb nur begrenzt.</p>
<p>Moll empfiehlt eine „digitale Abendroutine“: mindestens eine Stunde vor dem Schlafen das Handy aus dem Schlafzimmer verbannen und stattdessen lesen, Musik hören oder sich unterhalten. Viele ihrer Patienten hätten zunächst Angst, etwas zu verpassen. „Nach zwei Wochen berichten die meisten aber, dass sie schneller einschlafen und morgens ausgeruhter sind.“</p>
<p>Die Forscherin warnt allerdings davor, Smartphones grundsätzlich zu verteufeln. Entspannungs-Apps oder Hörbücher könnten durchaus beim Einschlafen helfen – vorausgesetzt, man schaut dabei nicht ständig auf den Bildschirm. Entscheidend sei ein bewusster Umgang. Ein klassischer Wecker statt des Handy-Alarms sei dafür ein einfacher erster Schritt.</p></div>`,
      items: [
        { n: 16, q: "Laut Dr. Moll führt das Licht des Smartphones dazu, dass …", tr: ["Selon le Dr Moll, la lumière du smartphone fait que…", "Araka ny Dr. Moll, ny hazavan'ny finday dia mahatonga…"], opts: ["man weniger von einem Schlafhormon bildet.", "man nachts häufiger aufwacht.", "die Augen schneller müde werden."], otr: [["on produit moins d'hormone du sommeil", "mihena ny hormonina mampatory"], ["on se réveille plus souvent", "matetika mifoha amin'ny alina"], ["les yeux se fatiguent vite", "vizana haingana ny maso"]], a: "a", exp: { mg: "« weniger Melatonin, das Hormon, das uns müde macht ».", fr: "Moins de mélatonine." } },
        { n: 17, q: "Noch problematischer als das Licht ist nach Ansicht von Dr. Moll …", tr: ["Plus problématique que la lumière, selon elle…", "Mbola olana kokoa noho ny hazavana…"], opts: ["die Lautstärke von Videos.", "der Inhalt, den man konsumiert.", "die Dauer der Nutzung am Tag."], otr: [["le volume des vidéos", "ny haben'ny feo"], ["le contenu consommé", "ny votoaty jerena"], ["la durée d'utilisation", "ny faharetan'ny fampiasana"]], a: "b", exp: { mg: "« Noch stärker wirke … was wir auf dem Bildschirm sehen ».", fr: "Ce qu'on voit à l'écran." } },
        { n: 18, q: "Der Nachtmodus von Smartphones …", tr: ["Le mode nuit des smartphones…", "Ny « mode nuit » amin'ny finday…"], opts: ["löst das Problem vollständig.", "hat nur eine eingeschränkte Wirkung.", "wird von Dr. Moll empfohlen."], otr: [["règle complètement le problème", "mamaha tanteraka ny olana"], ["a un effet limité", "voafetra ny vokany"], ["est recommandé par le Dr Moll", "atoron'ny Dr. Moll"]], a: "b", exp: { mg: "« helfen deshalb nur begrenzt » = voafetra.", fr: "Aide seulement de façon limitée." } },
        { n: 19, q: "Viele Patienten fürchten am Anfang der Abendroutine, …", tr: ["Au début de la routine du soir, beaucoup de patients craignent…", "Matahotra… ny marary maro tamin'ny voalohany"], opts: ["nicht einschlafen zu können.", "Informationen zu verpassen.", "sich zu langweilen."], otr: [["de ne pas s'endormir", "tsy hahita torimaso"], ["de rater des informations", "tsy hahafantatra vaovao"], ["de s'ennuyer", "ho kivy / leo"]], a: "b", exp: { mg: "« Angst, etwas zu verpassen » = matahotra tsy hahalala zavatra.", fr: "Peur de rater quelque chose." } },
        { n: 20, q: "Nach Meinung der Forscherin können Smartphones …", tr: ["Selon la chercheuse, les smartphones peuvent…", "Araka ilay mpikaroka, ny finday dia mety…"], opts: ["unter Umständen beim Einschlafen helfen.", "auf keinen Fall im Schlafzimmer bleiben.", "die Schlafqualität messen."], otr: [["aider à s'endormir dans certains cas", "manampy hatory amin'ny toe-javatra sasany"], ["jamais rester dans la chambre", "tsy tokony ho ao amin'ny efitrano mihitsy"], ["mesurer la qualité du sommeil", "mandrefy ny torimaso"]], a: "a", exp: { mg: "« Entspannungs-Apps oder Hörbücher könnten … helfen – vorausgesetzt … ».", fr: "Apps de relaxation, sous condition." } },
        { n: 21, q: "Als ersten Schritt schlägt Dr. Moll vor, …", tr: ["Comme premier pas, le Dr Moll propose…", "Dingana voalohany atoron'ny Dr. Moll…"], opts: ["einen normalen Wecker zu benutzen.", "das Handy nachts auszuschalten.", "weniger Serien zu schauen."], otr: [["utiliser un réveil normal", "mampiasa famantaranandro fanairana"], ["éteindre le portable la nuit", "mamono ny finday amin'ny alina"], ["regarder moins de séries", "mijery tantara an-tsary vitsy kokoa"]], a: "a", exp: { mg: "« Ein klassischer Wecker … einfacher erster Schritt ».", fr: "Un réveil classique." } }
      ] },
    { id: "L4", nom: "Teil 4", type: "match", temps: 12, zero: false, layout: "choixFirst",
      consigne: "Sie lesen in einer Zeitschrift Meinungsäußerungen zum Thema „Homeoffice für alle?“. Welche Äußerung passt zu welcher Überschrift? Eine Äußerung passt nicht. Die Äußerung a ist das Beispiel und kann nicht noch einmal verwendet werden.",
      ctr: ["Opinions sur le télétravail : quelle opinion (b–h) correspond à chaque titre ? Une opinion est en trop ; a est l'exemple.", "Hevitra momba ny homeoffice: iza no mifanaraka amin'ny lohateny tsirairay? Iray tafahoatra; a no ohatra."],
      choixTitre: "Äußerungen",
      choix: {
        a: "<b>Sabine, Hamburg:</b> Seit ich zweimal pro Woche zu Hause arbeite, kann ich meine Tochter von der Kita abholen. Endlich passen Familie und Job zusammen.",
        b: "<b>Ahmed, Köln:</b> Mein Küchentisch ist mein Schreibtisch, mein Rücken leidet. Wer Homeoffice will, sollte vom Arbeitgeber auch einen ordentlichen Arbeitsplatz finanziert bekommen.",
        c: "<b>Petra, Leipzig:</b> Im Büro wurde ich alle zehn Minuten unterbrochen. Zu Hause schaffe ich in vier Stunden, wofür ich früher einen ganzen Tag brauchte.",
        d: "<b>Lukas, Wien:</b> Mir fehlt der Kaffeeplausch. Viele gute Ideen sind bei uns früher zufällig in der Küche entstanden, nicht in Videokonferenzen.",
        e: "<b>Fara, München:</b> Ich spare jeden Tag zwei Stunden Pendelzeit. Diese Zeit nutze ich jetzt für Sport und einen Deutschkurs.",
        f: "<b>Dieter, Stuttgart:</b> Als Chef merke ich, dass neue Mitarbeiter ohne direkten Kontakt viel länger brauchen, bis sie sich eingearbeitet haben.",
        g: "<b>Nina, Berlin:</b> Das Problem ist, dass ich nie richtig Feierabend habe. Der Laptop steht im Wohnzimmer und erinnert mich ständig an die Arbeit.",
        h: "<b>Claudia, Bern:</b> In meinem Beruf als Pflegerin ist Homeoffice gar nicht möglich. Die Debatte zeigt, wie sehr man Büroberufe in den Mittelpunkt stellt."
      },
      exemple: { q: "Familie und Beruf lassen sich besser verbinden.", a: "a" },
      items: [
        { n: 22, q: "Zu Hause arbeitet man konzentrierter.", tr: ["À la maison, on travaille plus concentré.", "Mifantoka kokoa rehefa miasa an-trano."], a: "c", exp: { mg: "Petra: tsy misy manelingelina → vita haingana kokoa.", fr: "Petra : plus d'interruptions." } },
        { n: 23, q: "Die Trennung von Arbeit und Freizeit fällt schwer.", tr: ["Séparer travail et loisirs est difficile.", "Sarotra ny manasaraka asa sy fotoana malalaka."], a: "g", exp: { mg: "Nina: « nie richtig Feierabend ».", fr: "Nina n'a jamais vraiment fini sa journée." } },
        { n: 24, q: "Die Firmen sollten die Ausstattung bezahlen.", tr: ["Les entreprises devraient payer l'équipement.", "Tokony handoa ny fitaovana ny orinasa."], a: "b", exp: { mg: "Ahmed: « vom Arbeitgeber … finanziert ».", fr: "Ahmed : financé par l'employeur." } },
        { n: 25, q: "Nicht alle Berufe können von zu Hause ausgeübt werden.", tr: ["Tous les métiers ne peuvent pas se faire à la maison.", "Tsy ny asa rehetra no azo atao an-trano."], a: "h", exp: { mg: "Claudia: mpitsabo mpanampy → tsy afaka.", fr: "Claudia, soignante." } },
        { n: 26, q: "Informelle Gespräche fördern Kreativität.", tr: ["Les discussions informelles favorisent la créativité.", "Ny resaka tsotra no miteraka hevitra vaovao."], a: "d", exp: { mg: "Lukas: hevitra tsara teraka tao an-dakozia.", fr: "Lukas : idées nées autour du café." } },
        { n: 27, q: "Gewonnene Zeit wird sinnvoll genutzt.", tr: ["Le temps gagné est bien utilisé.", "Ampiasaina tsara ny fotoana azo."], a: "e", exp: { mg: "Fara: ora 2 isan'andro → fanatanjahantena sy fianarana. Ny f no tsy ampiasaina.", fr: "Fara : sport et cours. L'opinion f est en trop." } }
      ] },
    { id: "L5", nom: "Teil 5", type: "match", temps: 6, zero: false, layout: "choixFirst",
      consigne: "Sie möchten in einem Sprachenzentrum einen Kurs belegen und lesen die Benutzerordnung. Welche Überschriften passen zu den Paragrafen? Vier Überschriften werden nicht gebraucht.",
      ctr: ["Règlement d'un centre de langues : quel titre (a–h) pour chaque paragraphe ? Quatre titres en trop.", "Fitsipiky ny foibe fiteny: iza no lohateny mifanaraka amin'ny paragrafy tsirairay? Lohateny 4 tafahoatra."],
      choixTitre: "Inhaltsverzeichnis",
      choix: { a: "Anmeldung und Einstufung", b: "Kursgebühren und Ermäßigungen", c: "Nutzung des Selbstlernzentrums", d: "Prüfungen und Zertifikate", e: "Rücktritt und Kündigung", f: "Datenschutz", g: "Anwesenheit", h: "Haftung bei Verlust" },
      texte: `<div class="rules">
<p><b>§ 0</b> Vor Kursbeginn absolvieren alle neuen Teilnehmenden einen schriftlichen und mündlichen Test, damit sie dem passenden Niveau zugeordnet werden können. Die Anmeldung erfolgt online.</p>
<p><b>§ 28</b> Der Computerraum im 2. Stock steht allen eingeschriebenen Teilnehmenden montags bis freitags von 8 bis 20 Uhr offen. Lernsoftware, Wörterbücher und Hörtexte dürfen dort kostenfrei genutzt werden. Essen und Trinken sind nicht gestattet.</p>
<p><b>§ 29</b> Eine Teilnahmebestätigung erhält nur, wer an mindestens 80 % der Unterrichtseinheiten teilgenommen hat. Fehlzeiten sind der Kursleitung rechtzeitig mitzuteilen.</p>
<p><b>§ 30</b> Wer seinen Kurs nach Kursbeginn abbrechen möchte, muss dies schriftlich mitteilen. Eine Rückerstattung der Gebühren ist nur bei Krankheit mit ärztlichem Attest möglich.</p></div>`,
      exemple: { q: "§ 0", a: "a" },
      items: [
        { n: 28, q: "§ 28", a: "c", exp: { mg: "Efitrano informatika sy fitaovana hianarana irery → Selbstlernzentrum.", fr: "Salle informatique en libre accès." } },
        { n: 29, q: "§ 29", a: "g", exp: { mg: "80 % ny fanatrehana → Anwesenheit.", fr: "Présence minimale → Anwesenheit." } },
        { n: 30, q: "§ 30", a: "e", exp: { mg: "Miala amin'ny fianarana → Rücktritt und Kündigung.", fr: "Abandon du cours → résiliation." } }
      ] }
  ] },

  hoeren: { temps: 40, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 1, type: "mixed",
      consigne: "Sie hören fünf Gespräche und Äußerungen. Sie hören jeden Text einmal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
      ctr: ["Cinq conversations ou déclarations, une seule écoute. Deux questions par texte.", "Resaka 5, henoina indray mandeha. Fanontaniana 2 isaky ny lahatsoratra."],
      clips: [
        { id: "gb2m1-h1-1", titre: "Text 1", script: [{ s: "f", n: "Studentin", t: "Ich lese wahnsinnig gern Krimis, aber nicht mehr auf Papier. Seit ich pendle, höre ich Hörbücher im Zug. Anfangs dachte ich, das sei nur ein Ersatz. Inzwischen merke ich, dass ich mir die Geschichten sogar besser merke, weil die Stimme der Sprecher Bilder im Kopf erzeugt. Nur bei komplizierten Sachbüchern brauche ich weiterhin den Text vor mir." }],
          items: [
            { n: 1, type: "rf", q: "Die Frau spricht über ihre Lesegewohnheiten.", tr: ["La femme parle de ses habitudes de lecture.", "Miresaka momba ny fahazarany mamaky boky ilay vehivavy."], a: "r", exp: { mg: "Miresaka momba ny boky sy ny Hörbücher izy.", fr: "Oui, livres et livres audio." } },
            { n: 2, type: "mc", q: "Was sagt sie über Hörbücher?", tr: ["Que dit-elle des livres audio ?", "Inona no lazainy momba ny Hörbücher?"], opts: ["Sie kann sich die Inhalte gut merken.", "Sie sind nur ein schlechter Ersatz.", "Sie eignen sich auch für Sachbücher."], otr: [["elle retient bien le contenu", "tadidiny tsara ny votoaty"], ["mauvais substitut", "solony ratsy"], ["bien aussi pour les ouvrages techniques", "mety amin'ny boky siantifika"]], a: "a", exp: { mg: "« dass ich mir die Geschichten sogar besser merke ».", fr: "Elle retient mieux." } }
          ] },
        { id: "gb2m1-h1-2", titre: "Text 2", script: [{ s: "m", n: "Radio", t: "Immer mehr Supermärkte in Deutschland bieten Selbstbedienungskassen an. Nach einer aktuellen Umfrage nutzt bereits jeder zweite Kunde diese Kassen zumindest gelegentlich. Vor allem jüngere Menschen schätzen, dass es schneller geht. Ältere Kundinnen und Kunden dagegen vermissen oft den persönlichen Kontakt. Gewerkschaften befürchten, dass langfristig Arbeitsplätze verloren gehen." }],
          items: [
            { n: 3, type: "rf", q: "In dem Bericht geht es um eine Umfrage zum Einkaufsverhalten.", tr: ["Le reportage parle d'un sondage sur les habitudes d'achat.", "Momba ny fanadihadiana momba ny fividianana ny tatitra."], a: "r", exp: { mg: "« Nach einer aktuellen Umfrage … Kunde ».", fr: "Oui, sondage sur les caisses automatiques." } },
            { n: 4, type: "mc", q: "Wer sieht die neuen Kassen kritisch?", tr: ["Qui voit les nouvelles caisses de façon critique ?", "Iza no manakiana ireo kesy vaovao?"], opts: ["Die jüngeren Kunden.", "Die Gewerkschaften.", "Die Supermarktketten."], otr: [["les jeunes clients", "ny tanora"], ["les syndicats", "ny sendika"], ["les chaînes de supermarchés", "ny supermarché"]], a: "b", exp: { mg: "« Gewerkschaften befürchten … Arbeitsplätze verloren » (matahotra ny fahaverezan'ny asa).", fr: "Les syndicats craignent des pertes d'emplois." } }
          ] },
        { id: "gb2m1-h1-3", titre: "Text 3", script: [{ s: "f", n: "Frau", t: "Du, ich habe mich jetzt doch für den Abendkurs in Buchhaltung angemeldet." }, { s: "m", n: "Mann", t: "Echt? Du wolltest doch eigentlich das Fernstudium machen." }, { s: "f", n: "Frau", t: "Ja, aber ich habe gemerkt, dass ich allein zu Hause nicht diszipliniert genug bin. Im Kurs gibt es feste Termine, und die Firma übernimmt sogar die Hälfte der Kosten." }],
          items: [
            { n: 5, type: "rf", q: "Die Frau macht ein Fernstudium.", tr: ["La femme fait des études à distance.", "Manao fianarana lavitra ilay vehivavy."], a: "f", exp: { mg: "Tsy nanao Fernstudium izy fa « Abendkurs ».", fr: "Non, un cours du soir." } },
            { n: 6, type: "mc", q: "Warum hat sie sich so entschieden?", tr: ["Pourquoi a-t-elle choisi ainsi ?", "Nahoana izy no nanapa-kevitra toy izany?"], opts: ["Weil sie feste Strukturen braucht.", "Weil der Kurs kostenlos ist.", "Weil ihr Mann es wollte."], otr: [["elle a besoin d'un cadre fixe", "mila fandaharana mafy orina"], ["le cours est gratuit", "maimaim-poana"], ["son mari le voulait", "tian'ny vadiny"]], a: "a", exp: { mg: "« nicht diszipliniert genug … feste Termine ». Ny antsasany ihany no aloan'ny orinasa.", fr: "Cadre fixe ; l'entreprise paie seulement la moitié." } }
          ] },
        { id: "gb2m1-h1-4", titre: "Text 4", script: [{ s: "m", n: "Mann", t: "Viele unterschätzen, wie wichtig Pausen bei der Arbeit sind. Ich habe lange durchgearbeitet und gedacht, so schaffe ich mehr. Seit ich alle neunzig Minuten kurz rausgehe, bin ich am Nachmittag deutlich produktiver. Mein Tipp: Die Pause nicht am Handy verbringen, sondern wirklich abschalten." }],
          items: [
            { n: 7, type: "rf", q: "Der Mann hat früher regelmäßig Pausen gemacht.", tr: ["L'homme faisait des pauses régulières avant.", "Niala sasatra tsy tapaka ilay lehilahy taloha."], a: "f", exp: { mg: "« lange durchgearbeitet » = niasa tsy niato.", fr: "Il travaillait sans pause." } },
            { n: 8, type: "mc", q: "Was empfiehlt er?", tr: ["Que recommande-t-il ?", "Inona no atorony?"], opts: ["In der Pause nicht aufs Handy zu schauen.", "Nur eine lange Mittagspause zu machen.", "Am Nachmittag weniger zu arbeiten."], otr: [["ne pas regarder son portable", "tsy mijery finday"], ["une seule longue pause", "fiatoana lava iray"], ["travailler moins l'après-midi", "miasa kely amin'ny tolakandro"]], a: "a", exp: { mg: "« nicht am Handy verbringen ».", fr: "Pas de portable pendant la pause." } }
          ] },
        { id: "gb2m1-h1-5", titre: "Text 5", script: [{ s: "f", n: "Journalistin", t: "In vielen Ländern wird immer weniger bar bezahlt. In Schweden zum Beispiel akzeptieren manche Geschäfte überhaupt kein Bargeld mehr. In Deutschland hängen viele Menschen dagegen noch sehr an Münzen und Scheinen. Experten erwarten aber, dass sich das in den nächsten zehn Jahren deutlich ändert." }],
          items: [
            { n: 9, type: "rf", q: "Die Journalistin berichtet über das Bezahlen in verschiedenen Ländern.", tr: ["La journaliste parle des modes de paiement dans différents pays.", "Momba ny fandoavam-bola any amin'ny firenena samihafa."], a: "r", exp: { mg: "Suède sy Alemaina no resahina.", fr: "Suède et Allemagne." } },
            { n: 10, type: "mc", q: "Was gilt für Deutschland?", tr: ["Qu'en est-il de l'Allemagne ?", "Ahoana any Alemaina?"], opts: ["Bargeld ist noch sehr beliebt.", "Viele Geschäfte nehmen kein Bargeld.", "Kartenzahlung ist verboten."], otr: [["les espèces restent appréciées", "mbola tiana ny vola tanana"], ["beaucoup de magasins refusent les espèces", "maro ny tsy mandray vola tanana"], ["le paiement par carte est interdit", "voarara ny karatra"]], a: "a", exp: { mg: "« hängen … noch sehr an Münzen und Scheinen ».", fr: "Les Allemands tiennent encore au liquide." } }
          ] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 2, type: "mc", lecture: 90,
      consigne: "Sie hören im Radio ein Interview mit einer Meeresbiologin. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie jetzt die Aufgaben 11 bis 16. Dazu haben Sie 90 Sekunden Zeit.",
      ctr: ["Interview radio avec une biologiste marine, deux écoutes. Questions 11 à 16.", "Resadresaka amin'ny mpahay biolojia an-dranomasina, henoina indroa."],
      clips: [{ id: "gb2m1-h2", titre: "Interview", script: [
        { s: "m", n: "Moderator", t: "Frau Dr. Rahelison, Sie erforschen Korallenriffe vor der Küste Madagaskars. Wie sind Sie zu diesem Beruf gekommen?" },
        { s: "f", n: "Dr. Rahelison", t: "Eigentlich wollte ich Ärztin werden. Aber mit sechzehn habe ich bei einem Schulausflug zum ersten Mal geschnorchelt, in der Bucht von Nosy Be. Diese Farben haben mich nicht mehr losgelassen. Nach dem Abitur habe ich dann in Toliara Biologie studiert und später in Hamburg promoviert." },
        { s: "m", n: "Moderator", t: "Wie geht es den Riffen heute?" },
        { s: "f", n: "Dr. Rahelison", t: "Ehrlich gesagt: nicht gut. Durch die steigenden Wassertemperaturen verlieren die Korallen ihre Farbe, wir nennen das Korallenbleiche. Aber es gibt Hoffnung. Einige Riffe erholen sich erstaunlich schnell, wenn sie nicht zusätzlich durch Überfischung belastet sind." },
        { s: "m", n: "Moderator", t: "Was kann man konkret tun?" },
        { s: "f", n: "Dr. Rahelison", t: "Wir arbeiten eng mit den Fischerdörfern zusammen. Die Fischer haben selbst beschlossen, bestimmte Zonen für einige Monate zu schließen. Am Anfang waren viele skeptisch, weil sie Einkommen verlieren. Heute sehen sie, dass danach mehr Fische da sind. Das überzeugt mehr als jede wissenschaftliche Studie." },
        { s: "m", n: "Moderator", t: "Und welche Rolle spielt der Tourismus?" },
        { s: "f", n: "Dr. Rahelison", t: "Eine doppelte. Tauchtouristen bringen Geld, mit dem Schutzprojekte finanziert werden. Gleichzeitig beschädigen unvorsichtige Taucher die Korallen. Deshalb bilden wir junge Leute aus den Dörfern zu Tauchguides aus. Sie kennen das Meer und erklären den Gästen, wie man sich richtig verhält." },
        { s: "m", n: "Moderator", t: "Was wünschen Sie sich für die Zukunft?" },
        { s: "f", n: "Dr. Rahelison", t: "Dass mehr Forschung direkt vor Ort passiert, von Menschen aus der Region. Viele Daten über unsere Riffe liegen in Europa. Das möchte ich ändern." }],
        items: [
          { n: 11, q: "Dr. Rahelison wollte ursprünglich …", tr: ["Au départ, la Dr Rahelison voulait…", "Tamin'ny voalohany dia te… i Dr. Rahelison"], opts: ["Medizin studieren.", "Lehrerin werden.", "in Hamburg leben."], otr: [["étudier la médecine", "hianatra fitsaboana"], ["devenir enseignante", "ho mpampianatra"], ["vivre à Hambourg", "hipetraka any Hamburg"]], a: "a", exp: { mg: "« Eigentlich wollte ich Ärztin werden ».", fr: "Elle voulait devenir médecin." } },
          { n: 12, q: "Ihr Interesse für Korallen entstand …", tr: ["Son intérêt pour les coraux est né…", "Nipoitra… ny fitiavany ny haran-dranomasina"], opts: ["während des Studiums.", "bei einem Ausflug mit der Schule.", "durch einen Film."], otr: [["pendant ses études", "nandritra ny fianarany"], ["lors d'une sortie scolaire", "nandritra ny dia niaraka tamin'ny sekoly"], ["grâce à un film", "noho ny sarimihetsika"]], a: "b", exp: { mg: "« bei einem Schulausflug … geschnorchelt ».", fr: "Sortie scolaire à Nosy Be." } },
          { n: 13, q: "Riffe können sich besser erholen, wenn …", tr: ["Les récifs récupèrent mieux si…", "Sitrana kokoa ny haran-dranomasina raha…"], opts: ["das Wasser kälter wird.", "dort nicht zu viel gefischt wird.", "mehr Touristen kommen."], otr: [["l'eau se refroidit", "mangatsiaka kokoa ny rano"], ["on n'y pêche pas trop", "tsy be loatra ny jono"], ["plus de touristes viennent", "maro kokoa ny mpizahatany"]], a: "b", exp: { mg: "« wenn sie nicht zusätzlich durch Überfischung belastet sind ».", fr: "Sans surpêche." } },
          { n: 14, q: "Die Fischer haben die Schutzzonen akzeptiert, weil …", tr: ["Les pêcheurs ont accepté les zones protégées parce que…", "Nanaiky ny faritra voaaro ny mpanjono satria…"], opts: ["sie dafür bezahlt werden.", "sie positive Ergebnisse sehen.", "Wissenschaftler sie überzeugt haben."], otr: [["ils sont payés", "andoavana vola izy ireo"], ["ils voient des résultats positifs", "mahita vokatra tsara"], ["les scientifiques les ont convaincus", "nandresy lahatra azy ny mpahay siansa"]], a: "b", exp: { mg: "« Heute sehen sie, dass danach mehr Fische da sind ». Fandrika: tsy ny fanadihadiana siantifika no nandresy lahatra (« mehr als jede wissenschaftliche Studie »).", fr: "Ils voient plus de poissons ; piège : pas grâce aux études." } },
          { n: 15, q: "Über den Tourismus sagt sie, dass er …", tr: ["Sur le tourisme, elle dit qu'il…", "Momba ny fizahan-tany dia lazainy fa…"], opts: ["den Riffen nur schadet.", "Vor- und Nachteile hat.", "verboten werden sollte."], otr: [["ne fait que nuire aux récifs", "manimba fotsiny"], ["a des avantages et des inconvénients", "misy tombony sy fatiantoka"], ["devrait être interdit", "tokony horarana"]], a: "b", exp: { mg: "« Eine doppelte » rôle: vola + fahasimbana.", fr: "Un double rôle." } },
          { n: 16, q: "Für die Zukunft wünscht sie sich, dass …", tr: ["Pour l'avenir, elle souhaite que…", "Ho amin'ny ho avy dia maniry izy fa…"], opts: ["mehr Europäer in Madagaskar forschen.", "Menschen aus der Region selbst forschen.", "die Daten in Europa gespeichert werden."], otr: [["plus d'Européens fassent des recherches", "Eoropeanina maro kokoa no hikaroka"], ["des gens de la région fassent la recherche", "olona avy eo an-toerana no hikaroka"], ["les données soient stockées en Europe", "hotehirizina any Eoropa ny angona"]], a: "b", exp: { mg: "« von Menschen aus der Region ».", fr: "Recherche par les gens de la région." } }
        ] }] },
    { id: "H3", nom: "Teil 3", ecoutes: 1, type: "who", lecture: 60,
      consigne: "Sie hören im Radio ein Gespräch mit mehreren Personen. Die Personen sprechen über das Wohnen in Mehrgenerationenhäusern. Sie hören den Text einmal. Wählen Sie bei jeder Aufgabe: Wer sagt das?",
      ctr: ["Discussion radio sur les maisons multigénérationnelles, une écoute : qui dit quoi ?", "Adihevitra momba ny trano iarahan'ny taranaka maro, henoina indray mandeha: iza no niteny?"],
      personnes: { a: "Moderator", b: "Frau Kessler, Bewohnerin", c: "Herr Brandt, Stadtplaner" },
      exemple: { q: "Immer mehr Menschen suchen nach neuen Wohnformen.", a: "a" },
      clips: [{ id: "gb2m1-h3", titre: "Gespräch", script: [
        { s: "m", n: "Moderator", t: "Immer mehr Menschen suchen nach neuen Wohnformen. Eine davon ist das Mehrgenerationenhaus. Bei mir sind Frau Kessler, die seit vier Jahren in einem solchen Haus lebt, und der Stadtplaner Herr Brandt. Frau Kessler, warum sind Sie dort eingezogen?" },
        { s: "f", n: "Frau Kessler", t: "Nach dem Tod meines Mannes war ich viel allein. Jetzt wohne ich mit jungen Familien und Studierenden unter einem Dach. Ich lese den Kindern vor, und wenn ich Hilfe beim Einkaufen brauche, ist immer jemand da." },
        { s: "m2", n: "Herr Brandt", t: "Genau das ist der Gedanke. Aus städtebaulicher Sicht haben solche Projekte aber noch einen Vorteil: Sie brauchen weniger Fläche, weil Räume wie Küche oder Werkstatt gemeinsam genutzt werden." },
        { s: "m", n: "Moderator", t: "Klingt ideal. Gibt es auch Konflikte?" },
        { s: "f", n: "Frau Kessler", t: "Natürlich! Am Anfang hat mich der Lärm der Kinder ziemlich gestört. Wir haben dann Ruhezeiten vereinbart. Man muss bereit sein, Kompromisse zu machen, sonst funktioniert es nicht." },
        { s: "m2", n: "Herr Brandt", t: "Und genau dafür braucht es klare Regeln von Anfang an. Viele Projekte scheitern nicht an der Idee, sondern daran, dass niemand die Organisation übernimmt." },
        { s: "m", n: "Moderator", t: "Die Mieten in solchen Häusern sind allerdings oft nicht niedriger als anderswo." },
        { s: "m2", n: "Herr Brandt", t: "Das stimmt leider. Hier sind die Städte gefragt. Sie sollten Grundstücke günstiger an solche Gemeinschaften vergeben." },
        { s: "f", n: "Frau Kessler", t: "Für mich ist das Geld auch nicht das Wichtigste. Ich bezahle lieber etwas mehr und fühle mich dafür nicht mehr einsam." }],
        items: [
          { n: 17, q: "Im Haus findet man immer Unterstützung im Alltag.", tr: ["Dans la maison, on trouve toujours de l'aide au quotidien.", "Misy fanampiana foana ao an-trano."], a: "b", exp: { mg: "Kessler: « ist immer jemand da ».", fr: "Frau Kessler." } },
          { n: 18, q: "Gemeinsam genutzte Räume sparen Platz.", tr: ["Les espaces partagés économisent de la place.", "Mitsitsy toerana ny efitrano iombonana."], a: "c", exp: { mg: "Brandt: « weniger Fläche … gemeinsam genutzt ».", fr: "Herr Brandt." } },
          { n: 19, q: "Ohne Kompromissbereitschaft geht es nicht.", tr: ["Sans compromis, ça ne marche pas.", "Tsy mandeha raha tsy misy fifanarahana."], a: "b", exp: { mg: "Kessler: « bereit sein, Kompromisse zu machen ».", fr: "Frau Kessler." } },
          { n: 20, q: "Projekte scheitern oft an fehlender Organisation.", tr: ["Les projets échouent souvent par manque d'organisation.", "Matetika tsy mahomby noho ny tsy fisian'ny fandaminana."], a: "c", exp: { mg: "Brandt: « dass niemand die Organisation übernimmt ».", fr: "Herr Brandt." } },
          { n: 21, q: "Das Wohnen dort ist nicht unbedingt billiger.", tr: ["Y vivre n'est pas forcément moins cher.", "Tsy voatery ho mora kokoa ny mipetraka ao."], a: "a", exp: { mg: "Ny Moderator: « Die Mieten … oft nicht niedriger ».", fr: "Le modérateur." } },
          { n: 22, q: "Die Kommunen sollten solche Projekte unterstützen.", tr: ["Les communes devraient soutenir ces projets.", "Tokony hanohana ireo tetikasa ireo ny tanàna."], a: "c", exp: { mg: "Brandt: « Hier sind die Städte gefragt … Grundstücke günstiger ».", fr: "Herr Brandt." } }
        ] }] },
    { id: "H4", nom: "Teil 4", ecoutes: 2, type: "mc", lecture: 90,
      consigne: "Sie hören einen kurzen Vortrag. Der Redner spricht über das Thema „Mehrsprachigkeit im Beruf“. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie jetzt die Aufgaben 23 bis 30. Dazu haben Sie 90 Sekunden Zeit.",
      ctr: ["Court exposé sur le plurilinguisme au travail, deux écoutes. Questions 23 à 30.", "Kabary fohy momba ny fahaizana fiteny maro amin'ny asa, henoina indroa."],
      clips: [{ id: "gb2m1-h4", titre: "Vortrag", script: [
        { s: "m", n: "Redner", t: "Meine Damen und Herren, ich spreche heute über Mehrsprachigkeit im Beruf. Laut einer Studie der Industrie- und Handelskammer verlangen inzwischen sieben von zehn Unternehmen in Deutschland Fremdsprachenkenntnisse – und zwar nicht nur Englisch." },
        { s: "m", n: "Redner", t: "Viele denken, dass vor allem große internationale Konzerne Mitarbeiter mit Sprachkenntnissen suchen. Das Gegenteil ist der Fall: Gerade kleine und mittlere Betriebe, die exportieren, haben oft keine eigene Übersetzungsabteilung und sind deshalb auf mehrsprachige Angestellte angewiesen." },
        { s: "m", n: "Redner", t: "Interessant ist auch, welche Sprachen gefragt sind. Nach Englisch folgt Französisch, nicht zuletzt wegen der wachsenden Wirtschaftsbeziehungen zu Afrika. Danach kommen Spanisch und Chinesisch." },
        { s: "m", n: "Redner", t: "Nun zu einem Missverständnis: Man muss eine Sprache nicht perfekt beherrschen, um beruflich davon zu profitieren. Oft reicht es, Kunden in ihrer Muttersprache zu begrüßen oder einfache Gespräche zu führen. Das schafft Vertrauen." },
        { s: "m", n: "Redner", t: "Leider werden die Sprachkenntnisse von Zugewanderten häufig übersehen. Wer zu Hause Arabisch, Türkisch oder Malagasy spricht, erwähnt das oft nicht einmal im Lebenslauf, weil er es für selbstverständlich hält. Mein Rat an Arbeitgeber: Fragen Sie gezielt danach!" },
        { s: "m", n: "Redner", t: "Wie lernt man am besten eine neue Sprache für den Beruf? Studien zeigen: regelmäßig und in kleinen Einheiten. Zwanzig Minuten täglich sind wirksamer als ein ganzer Samstag im Monat. Und: Wer die Sprache im Arbeitsalltag anwenden kann, lernt deutlich schneller." },
        { s: "m", n: "Redner", t: "Zum Schluss: Mehrsprachigkeit ist nicht nur ein Vorteil für die Karriere. Untersuchungen zeigen, dass Menschen, die mehrere Sprachen sprechen, flexibler denken. Vielen Dank für Ihre Aufmerksamkeit." }],
        items: [
          { n: 23, q: "Laut der Studie verlangen viele Unternehmen …", tr: ["Selon l'étude, beaucoup d'entreprises exigent…", "Araka ny fanadihadiana, orinasa maro no mitaky…"], opts: ["ausschließlich Englischkenntnisse.", "Kenntnisse in verschiedenen Sprachen.", "einen Sprachkurs vor Arbeitsbeginn."], otr: [["uniquement l'anglais", "anglisy ihany"], ["plusieurs langues", "fiteny samihafa"], ["un cours avant de commencer", "fampianarana alohan'ny hiasana"]], a: "b", exp: { mg: "« nicht nur Englisch ».", fr: "Pas seulement l'anglais." } },
          { n: 24, q: "Besonders auf mehrsprachige Mitarbeiter angewiesen sind …", tr: ["Ont particulièrement besoin d'employés multilingues…", "Tena mila mpiasa mahay fiteny maro…"], opts: ["internationale Konzerne.", "kleine und mittlere Exportfirmen.", "Übersetzungsbüros."], otr: [["les grands groupes", "orinasa lehibe iraisam-pirenena"], ["les PME exportatrices", "orinasa salantsalany manondrana entana"], ["les agences de traduction", "biraon'ny fandikan-teny"]], a: "b", exp: { mg: "« Das Gegenteil ist der Fall: Gerade kleine und mittlere Betriebe ».", fr: "Les PME exportatrices." } },
          { n: 25, q: "Französisch ist gefragt, unter anderem wegen …", tr: ["Le français est demandé notamment à cause…", "Ilaina ny frantsay noho ny…"], opts: ["des Tourismus.", "der Beziehungen zu afrikanischen Ländern.", "der Nähe zu Frankreich."], otr: [["du tourisme", "fizahan-tany"], ["des relations avec l'Afrique", "fifandraisana amin'i Afrika"], ["de la proximité avec la France", "fanakaikezana an'i Frantsa"]], a: "b", exp: { mg: "« wegen der wachsenden Wirtschaftsbeziehungen zu Afrika ».", fr: "Relations économiques avec l'Afrique." } },
          { n: 26, q: "Um beruflich von einer Sprache zu profitieren, …", tr: ["Pour profiter d'une langue au travail…", "Mba hahazoana tombony amin'ny fiteny…"], opts: ["muss man sie fließend sprechen.", "reichen oft schon Grundkenntnisse.", "braucht man ein Zertifikat."], otr: [["il faut la parler couramment", "tsy maintsy mahay tsara"], ["des bases suffisent souvent", "ampy matetika ny fototra"], ["il faut un certificat", "mila taratasy fanamarinana"]], a: "b", exp: { mg: "« nicht perfekt beherrschen … Oft reicht es ».", fr: "Pas besoin de perfection." } },
          { n: 27, q: "Viele Zugewanderte …", tr: ["Beaucoup d'immigrés…", "Mpifindra monina maro…"], opts: ["nennen ihre Sprachkenntnisse nicht im Lebenslauf.", "sprechen nur ihre Muttersprache.", "wollen ihre Sprache nicht benutzen."], otr: [["ne mentionnent pas leurs langues dans le CV", "tsy manoratra ny fiteniny ao amin'ny CV"], ["ne parlent que leur langue maternelle", "ny fitenin-drazany ihany no ampiasainy"], ["ne veulent pas utiliser leur langue", "tsy te hampiasa ny fiteniny"]], a: "a", exp: { mg: "« erwähnt das oft nicht einmal im Lebenslauf ».", fr: "Ils ne le mentionnent pas dans le CV." } },
          { n: 28, q: "Der Redner rät Arbeitgebern, …", tr: ["L'orateur conseille aux employeurs…", "Manoro ny mpampiasa ilay mpandahateny…"], opts: ["gezielt nach Sprachkenntnissen zu fragen.", "Sprachkurse zu bezahlen.", "nur mehrsprachige Bewerber einzustellen."], otr: [["de demander précisément les langues", "hanontany manokana momba ny fiteny"], ["de payer des cours", "handoa fampianarana"], ["de n'embaucher que des multilingues", "handray mahay fiteny maro ihany"]], a: "a", exp: { mg: "« Fragen Sie gezielt danach! ».", fr: "Demandez-le précisément." } },
          { n: 29, q: "Am effektivsten lernt man eine Sprache, wenn man …", tr: ["On apprend le plus efficacement si…", "Mianatra tsara indrindra raha…"], opts: ["einmal im Monat intensiv lernt.", "täglich kurz übt.", "nur am Arbeitsplatz lernt."], otr: [["une fois par mois intensivement", "indray mandeha isam-bolana"], ["s'exerce brièvement chaque jour", "manazatra kely isan'andro"], ["apprend seulement au travail", "any am-piasana ihany"]], a: "b", exp: { mg: "« Zwanzig Minuten täglich sind wirksamer ».", fr: "20 min par jour." } },
          { n: 30, q: "Zum Schluss sagt der Redner, dass Mehrsprachigkeit …", tr: ["En conclusion, l'orateur dit que le plurilinguisme…", "Amin'ny famaranana dia lazainy fa ny fiteny maro…"], opts: ["vor allem die Karriere fördert.", "auch das Denken beeinflusst.", "schwer zu messen ist."], otr: [["favorise surtout la carrière", "manampy ny asa indrindra"], ["influence aussi la pensée", "misy fiantraikany amin'ny fisainana koa"], ["est difficile à mesurer", "sarotra refesina"]], a: "b", exp: { mg: "« nicht nur … Karriere … flexibler denken ».", fr: "Pensée plus flexible." } }
        ] }] }
  ] },

  schreiben: { temps: 75, aufgaben: [
    { id: "S1", nom: "Teil 1", temps: 50, mots: 150, points: 50, type: "Forumsbeitrag",
      consigne: `<p>Sie schreiben einen Forumsbeitrag zum Thema „Fast Fashion – billige Mode um jeden Preis?“.</p><ul><li>Äußern Sie Ihre Meinung zum Kauf billiger Kleidung.</li><li>Nennen Sie Gründe, warum billige Mode so beliebt ist.</li><li>Nennen Sie andere Möglichkeiten, sich günstig zu kleiden.</li><li>Nennen Sie Vorteile dieser Möglichkeiten.</li></ul><p class="small">Denken Sie an eine Einleitung und einen Schluss. Schreiben Sie mindestens 150 Wörter.</p>`,
      ctr: ["Contribution de forum sur la mode bon marché : votre avis, les raisons de son succès, d'autres possibilités, leurs avantages. Intro + conclusion, au moins 150 mots.", "Hevitra amin'ny forum momba ny akanjo mora: hevitrao, antony, safidy hafa, tombony. Fampidirana + famaranana, 150 teny farafahakeliny."],
      checklist: ["Einleitung (fampidirana)", "Teboka 1: hevitrao", "Teboka 2: antony mahatonga azy ho tian'ny olona", "Teboka 3: safidy hafa (second-hand, fanamboarana…)", "Teboka 4: tombon'ireo safidy ireo", "Schluss (famaranana)", "Connecteurs: außerdem, jedoch, deshalb, zum einen … zum anderen", "≥150 teny"],
      redemittel: ["In letzter Zeit wird viel darüber diskutiert, ob …", "Meiner Ansicht nach …", "Ein Grund dafür ist, dass …", "Hinzu kommt, dass …", "Eine Alternative wäre …", "Der große Vorteil besteht darin, dass …", "Zusammenfassend lässt sich sagen, dass …"],
      modele: `In letzter Zeit wird viel darüber diskutiert, ob man billige Kleidung überhaupt noch kaufen sollte. Ich möchte dazu meine Meinung äußern.

Meiner Ansicht nach ist Fast Fashion problematisch. Ein T-Shirt für fünf Euro kann nur so billig sein, weil Menschen in anderen Ländern unter schlechten Bedingungen arbeiten. Außerdem landen viele Kleidungsstücke nach kurzer Zeit im Müll.

Trotzdem verstehe ich, warum billige Mode so beliebt ist. Zum einen haben viele Menschen wenig Geld, zum anderen wechseln die Trends sehr schnell, und niemand möchte unmodern aussehen.

Es gibt jedoch Alternativen. Man kann zum Beispiel in Second-Hand-Läden einkaufen, Kleidung mit Freunden tauschen oder alte Sachen reparieren lassen. In Madagaskar ist es ganz normal, gebrauchte Kleidung auf dem Markt zu kaufen.

Der große Vorteil besteht darin, dass man Geld spart und gleichzeitig die Umwelt schont. Oft findet man sogar Stücke, die besser verarbeitet sind als neue Billigware.

Zusammenfassend lässt sich sagen, dass man sich auch ohne Fast Fashion günstig und schön kleiden kann.` },
    { id: "S2", nom: "Teil 2", temps: 25, mots: 100, points: 25, type: "Nachricht (formell)",
      consigne: `<p>Sie arbeiten in einer deutschen Firma. Ihr Team soll nächste Woche an einer zweitägigen Fortbildung teilnehmen, aber genau in dieser Zeit müssen Sie ein wichtiges Projekt abschließen. Schreiben Sie eine Nachricht an Ihre Vorgesetzte, Frau Dr. Wagner.</p><ul><li>Bitten Sie um Verständnis für Ihre Situation.</li><li>Beschreiben Sie, woran Sie gerade arbeiten.</li><li>Machen Sie einen Vorschlag für eine Lösung.</li><li>Zeigen Sie Verständnis für die Planung der Firma.</li></ul><p class="small">Überlegen Sie sich eine passende Reihenfolge. Vergessen Sie nicht Anrede und Gruß. Schreiben Sie mindestens 100 Wörter.</p>`,
      ctr: ["Message formel à votre supérieure : demandez de la compréhension, décrivez votre projet, proposez une solution, montrez que vous comprenez l'entreprise. ≥100 mots.", "Hafatra ofisialy ho an'ny lehibenao: angataho ny fahatakarany, lazao ny asanao, manolora vahaolana, asehoy fa mahatakatra ianao. ≥100 teny."],
      checklist: ["Sehr geehrte Frau Dr. Wagner,", "Fangatahana fahatakarana", "Ny asa ataonao ankehitriny", "Soso-kevitra vahaolana", "Fahatakarana ny drafitry ny orinasa", "Mit freundlichen Grüßen", "Konjunktiv II (Wäre es möglich …?)", "≥100 teny"],
      redemittel: ["ich wende mich heute mit einer Bitte an Sie.", "Ich hoffe auf Ihr Verständnis, wenn …", "Zurzeit arbeite ich an …", "Wäre es möglich, dass …?", "Ich könnte die Inhalte der Fortbildung nachholen, indem …", "Mir ist bewusst, dass …", "Mit freundlichen Grüßen"],
      modele: `Sehr geehrte Frau Dr. Wagner,

ich wende mich heute mit einer Bitte an Sie. Ich weiß, dass die Fortbildung nächste Woche für das ganze Team wichtig ist, und ich hoffe auf Ihr Verständnis für meine Situation.

Zurzeit arbeite ich am Abschlussbericht für das Projekt mit unserem Kunden in Lyon. Der Bericht muss am Donnerstag fertig sein, und ich bin die einzige Person, die alle Daten kennt.

Wäre es möglich, dass ich nur am zweiten Tag der Fortbildung teilnehme? Die Inhalte des ersten Tages könnte ich mit Hilfe der Unterlagen und eines Gesprächs mit meinen Kollegen nachholen.

Mir ist bewusst, dass solche Termine lange im Voraus geplant werden und Änderungen schwierig sind. Für eine kurze Rückmeldung wäre ich Ihnen sehr dankbar.

Mit freundlichen Grüßen
Tiana Razafindrakoto` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Teboka rehetra voavaly sy voazava · Tous les points développés" },
    { nom: "Kohärenz", desc: "Drafitra sy connecteurs · Structure et connecteurs" },
    { nom: "Wortschatz", desc: "Voambolana B2, maro samihafa · Vocabulaire varié niveau B2" },
    { nom: "Strukturen", desc: "Grammaire complexe : subordonnées, Konjunktiv II, passif" }
  ] },

  sprechen: { preparation: 15, teile: [
    { id: "P1", nom: "Teil 1 – Vortrag halten", mg: "Kabary fohy", duree: 4, mode: "present", em: "🎤",
      consigne: `<p>Sie nehmen an einem Seminar teil und sollen dort einen kurzen Vortrag halten. Wählen Sie ein Thema (Thema 1 oder 2) aus. Ihre Gesprächspartner hören zu und stellen Ihnen anschließend Fragen. Strukturieren Sie Ihren Vortrag mit einer Einleitung, einem Hauptteil und einem Schluss. Sprechen Sie circa 4 Minuten.</p>`,
      ctr: ["Exposé de ~4 minutes sur un thème : introduction, partie principale (3 points), conclusion.", "Kabary ~4 minitra: fampidirana, ampahany lehibe (teboka 3), famaranana."],
      ptLabel: "PUNKT",
      themes: [
        { titre: "Thema 1 · Ehrenamt", points: [
          { de: "Einleitung: Thema vorstellen und Aufbau nennen", mg: "Fampidirana: lohahevitra sy drafitra", fr: "Introduction : thème et plan" },
          { de: "Beschreiben Sie mehrere Formen von ehrenamtlicher Arbeit.", mg: "Lazao ny karazana asa an-tsitrapo maro.", fr: "Décrivez plusieurs formes de bénévolat." },
          { de: "Beschreiben Sie eine Form genauer.", mg: "Hazavao amin'ny antsipiriany ny iray.", fr: "Décrivez-en une plus précisément." },
          { de: "Nennen Sie Vor- und Nachteile und bewerten Sie diese.", mg: "Tombony sy fatiantoka + tombana.", fr: "Avantages, inconvénients, évaluation." },
          { de: "Schluss: Zusammenfassung und eigene Meinung", mg: "Famaranana: famintinana sy hevitrao", fr: "Conclusion : résumé et opinion" } ],
          modele: `Ich möchte heute über das Thema „Ehrenamt“ sprechen. Zuerst stelle ich verschiedene Formen vor, dann gehe ich auf eine davon genauer ein, und schließlich bewerte ich Vor- und Nachteile.

Ehrenamtliche Arbeit hat viele Gesichter: Manche engagieren sich im Sportverein als Trainer, andere helfen bei der Tafel, wo Lebensmittel an Bedürftige verteilt werden. Wieder andere unterstützen Geflüchtete beim Deutschlernen oder arbeiten in Umweltprojekten.

Genauer möchte ich auf die Hausaufgabenhilfe eingehen. In Antananarivo habe ich zwei Jahre lang Kindern aus meinem Viertel geholfen. Viele Eltern konnten ihre Kinder nicht unterstützen, weil sie den ganzen Tag arbeiten mussten. Für die Kinder war diese Hilfe oft entscheidend.

Ein großer Vorteil des Ehrenamts ist, dass die Gesellschaft davon profitiert und die Helfenden selbst viel lernen – zum Beispiel Verantwortung zu übernehmen. Ein Nachteil ist, dass der Staat sich manchmal zu sehr auf Freiwillige verlässt, statt bezahlte Stellen zu schaffen. Außerdem kann es zu einer Überforderung kommen.

Zusammenfassend finde ich, dass Ehrenamt sehr wertvoll ist, aber kein Ersatz für staatliche Verantwortung sein darf. Vielen Dank für Ihre Aufmerksamkeit. Gibt es Fragen?` },
        { titre: "Thema 2 · Digitales Lernen", points: [
          { de: "Einleitung: Thema vorstellen und Aufbau nennen", mg: "Fampidirana", fr: "Introduction" },
          { de: "Beschreiben Sie mehrere Möglichkeiten des digitalen Lernens.", mg: "Fomba maro hianarana amin'ny nomerika.", fr: "Plusieurs possibilités d'apprentissage numérique." },
          { de: "Beschreiben Sie eine Möglichkeit genauer.", mg: "Hazavao ny iray.", fr: "Décrivez-en une plus précisément." },
          { de: "Nennen Sie Vor- und Nachteile und bewerten Sie diese.", mg: "Tombony, fatiantoka, tombana.", fr: "Avantages, inconvénients, évaluation." },
          { de: "Schluss: Zusammenfassung und eigene Meinung", mg: "Famaranana", fr: "Conclusion" } ],
          modele: `In meinem Vortrag geht es um digitales Lernen. Ich nenne zunächst einige Möglichkeiten, beschreibe dann eine genauer und bewerte am Ende Vor- und Nachteile.

Heute kann man auf viele Arten digital lernen: mit Sprach-Apps, Online-Kursen von Universitäten, Lernvideos auf Plattformen oder in virtuellen Klassenzimmern mit Lehrkraft.

Besonders interessant finde ich Online-Kurse mit Live-Unterricht. Ich selbst lerne so Deutsch: Zweimal pro Woche treffe ich meine Lehrerin und andere Teilnehmende per Video. Dazwischen mache ich Übungen auf einer Lernplattform, die mir sofort Rückmeldung gibt.

Der Vorteil liegt auf der Hand: Man ist zeitlich und räumlich flexibel, und gerade für Menschen in Madagaskar öffnet das den Zugang zu Kursen, die es vor Ort nicht gibt. Allerdings braucht man eine stabile Internetverbindung, und die ist leider nicht überall vorhanden. Außerdem fehlt manchmal der persönliche Kontakt, was die Motivation senken kann.

Insgesamt halte ich digitales Lernen für eine große Chance, vor allem in Kombination mit Präsenzunterricht. Vielen Dank fürs Zuhören.` } ],
      redemittel: [
        ["Einleitung · Fampidirana", ["In meinem Vortrag geht es um …", "Zunächst …, anschließend …, zum Schluss …"]],
        ["Hauptteil · Ampahany lehibe", ["Ein Beispiel dafür ist …", "Genauer möchte ich auf … eingehen.", "Aus eigener Erfahrung kann ich sagen, dass …"]],
        ["Bewertung · Tombana", ["Der Vorteil liegt auf der Hand: …", "Allerdings darf man nicht vergessen, dass …", "Meiner Einschätzung nach überwiegen …"]],
        ["Schluss · Famaranana", ["Zusammenfassend lässt sich sagen, dass …", "Vielen Dank für Ihre Aufmerksamkeit. Gibt es Fragen?"]]
      ] },
    { id: "P2", nom: "Teil 2 – Diskussion führen", mg: "Adihevitra", duree: 5, mode: "dialog", em: "⚖️",
      consigne: `<p>Sie sind Teilnehmende eines Debattierclubs und diskutieren über die Frage:</p><div class="plan"><b>Sollte die Arbeitswoche auf vier Tage verkürzt werden?</b><ul><li>Tauschen Sie Ihren Standpunkt und Ihre Argumente aus.</li><li>Reagieren Sie auf die Argumente Ihres Gesprächspartners.</li><li>Fassen Sie am Ende zusammen: Sind Sie dafür oder dagegen?</li></ul>Stichpunkte: Produktivität? · Gesundheit? · Kosten für Firmen? · Kunden und Service? · …</div>`,
      ctr: ["Débat : faut-il passer à la semaine de 4 jours ? Donnez votre position, réagissez, résumez.", "Adihevitra: tokony ho andro 4 ve ny herinandro fiasana? Lazao ny hevitrao, mamalia, famintinana."],
      partenaire: [
        { id: "gb2m1-p2-1", t: "Also, ich bin klar für die Vier-Tage-Woche. Die Menschen wären ausgeruhter und dadurch produktiver. Wie siehst du das?", aide: ["Da muss ich dir teilweise widersprechen, denn …", "Ich sehe das ähnlich, allerdings …"] },
        { id: "gb2m1-p2-2", t: "Aber denk an die Gesundheit! Viele Menschen haben Burn-out. Ein zusätzlicher freier Tag würde da helfen.", aide: ["Das ist ein wichtiger Punkt, aber …", "Man könnte das Problem auch anders lösen, zum Beispiel …"] },
        { id: "gb2m1-p2-3", t: "Okay, für Firmen mit Kundenservice ist es schwieriger, das gebe ich zu. Aber man könnte ja in Schichten arbeiten, oder?", aide: ["Das wäre eine Möglichkeit, allerdings …", "Für kleine Betriebe ist das kaum umsetzbar, weil …"] },
        { id: "gb2m1-p2-4", t: "Gut, wir kommen langsam zum Ende. Kannst du zusammenfassen, wie du jetzt dazu stehst?", aide: ["Zusammenfassend bin ich (eher) dafür / dagegen, weil …", "Wir sind uns einig, dass …, aber …"] }
      ],
      redemittel: [
        ["Standpunkt · Hevitra", ["Ich bin der Ansicht, dass …", "Meiner Meinung nach spricht vieles dafür / dagegen, …"]],
        ["Widersprechen · Manohitra", ["Da muss ich dir widersprechen.", "Das sehe ich anders, denn …", "Das mag stimmen, aber …"]],
        ["Zustimmen · Manaiky", ["Da hast du völlig recht.", "Das ist ein überzeugendes Argument."]],
        ["Zusammenfassen · Mamintina", ["Zusammenfassend lässt sich sagen …", "Wir sind uns zwar nicht ganz einig, aber …"]]
      ],
      modele: `A: Ich bin klar für die Vier-Tage-Woche. Die Menschen wären ausgeruhter und produktiver.
B: Da muss ich dir teilweise widersprechen. Viele Aufgaben lassen sich nicht einfach in vier Tagen erledigen. Dann werden die Arbeitstage länger und anstrengender.
A: Aber denk an die Gesundheit: Burn-out ist ein riesiges Problem.
B: Das ist ein wichtiger Punkt. Allerdings könnte man das auch mit flexibleren Arbeitszeiten lösen.
A: Für Firmen mit Kundenservice ist es schwieriger, das gebe ich zu. Man könnte aber in Schichten arbeiten.
B: Für große Unternehmen vielleicht. Kleine Betriebe mit drei Mitarbeitern können das kaum umsetzen.
A: Zusammenfassend bin ich weiter dafür, aber nicht für alle Branchen gleichzeitig.
B: Und ich bin eher dagegen, kann mir aber Pilotprojekte gut vorstellen. In diesem Punkt sind wir uns einig.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Teboka rehetra · Tous les points" },
    { nom: "Kohärenz", desc: "Drafitra mazava · Structure claire" },
    { nom: "Interaktion", desc: "Mamaly ny namanao (Teil 2) · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana B2" },
    { nom: "Strukturen", desc: "Grammaire B2" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "die Versicherung", fr: "l'assurance", mg: "fiantohana", ex: "Versicherung und Parkplatz sind teuer." },
    { de: "das Statussymbol", fr: "le symbole de statut", mg: "mariky ny laharana ara-tsosialy", ex: "Ein Auto ist für ihn kein Statussymbol." },
    { de: "unterm Strich", fr: "au bout du compte", mg: "raha atambatra", ex: "Unterm Strich spare ich Geld." },
    { de: "erreichbar", fr: "accessible", mg: "azo tongavana", ex: "Alles ist zu Fuß erreichbar." },
    { de: "zugeben", fr: "admettre", mg: "manaiky (fa marina)", ex: "Ich brauche das Auto, das gebe ich zu." },
    { de: "die Legende", fr: "la légende", mg: "angano", ex: "Einer Legende nach …" },
    { de: "sich verbreiten", fr: "se répandre", mg: "miely", ex: "Der Kaffee verbreitete sich in der Welt." },
    { de: "bezahlbar", fr: "abordable", mg: "azo vidiana", ex: "Kaffee wurde bezahlbar." },
    { de: "der faire Handel", fr: "le commerce équitable", mg: "varotra ara-drariny", ex: "Fairer Handel garantiert Mindestpreise." },
    { de: "verbannen", fr: "bannir", mg: "manesotra", ex: "Das Handy aus dem Schlafzimmer verbannen." },
    { de: "verpassen", fr: "rater", mg: "tsy tratra", ex: "Angst, etwas zu verpassen." },
    { de: "verteufeln", fr: "diaboliser", mg: "manaratsy tanteraka", ex: "Man sollte Smartphones nicht verteufeln." },
    { de: "unterbrechen", fr: "interrompre", mg: "manapaka (resaka)", ex: "Im Büro wurde ich ständig unterbrochen." },
    { de: "sich einarbeiten", fr: "se familiariser avec un poste", mg: "mianatra ny asa vaovao", ex: "Neue Mitarbeiter brauchen Zeit, um sich einzuarbeiten." },
    { de: "die Gewerkschaft", fr: "le syndicat", mg: "sendika", ex: "Gewerkschaften befürchten Jobverluste." },
    { de: "die Korallenbleiche", fr: "le blanchiment des coraux", mg: "fahafotsian'ny haran-dranomasina", ex: "Warmes Wasser führt zur Korallenbleiche." },
    { de: "die Überfischung", fr: "la surpêche", mg: "fanjonoana mihoa-pampana", ex: "Überfischung belastet die Riffe." },
    { de: "scheitern", fr: "échouer", mg: "tsy mahomby", ex: "Viele Projekte scheitern an der Organisation." },
    { de: "angewiesen sein auf", fr: "dépendre de", mg: "miankina amin'ny", ex: "Kleine Firmen sind auf Sprachkenntnisse angewiesen." },
    { de: "der Lebenslauf", fr: "le CV", mg: "CV", ex: "Er erwähnt seine Sprachen nicht im Lebenslauf." },
    { de: "die Fortbildung", fr: "la formation continue", mg: "fanohizana fiofanana", ex: "Das Team nimmt an einer Fortbildung teil." },
    { de: "nachholen", fr: "rattraper", mg: "manonitra", ex: "Ich könnte die Inhalte nachholen." }
  ]
});
})();
