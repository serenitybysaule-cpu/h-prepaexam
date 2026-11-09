/* ÖSD ZERTIFIKAT B2 (ZB2) — textes originaux H Conseil & Formation */
(function(){
const P = window.POOLS.OB2;
P.info = {
  modules: [
    { m: "Lesen", mg: "Famakiana", t: "90 min", parts: "4 Aufgaben · 20 isa" },
    { m: "Hören", mg: "Fihainoana", t: "~30 min", parts: "2 Aufgaben · 20 isa" },
    { m: "Schreiben", mg: "Fanoratana", t: "90 min", parts: "Beschwerde + Stellungnahme (~120 teny tsirairay)" },
    { m: "Sprechen", mg: "Fitenenana", t: "~15 min + 15 min préparation", parts: "3 Aufgaben · 30 isa" }
  ],
  reussite: { mg: "Mila <b>60 %</b> isaky ny module (Lesen, Hören, Schreiben, Sprechen). Azo atao tsirairay.", fr: "60 % par module ; certification modulaire." },
  institut: { osd: { mg: "ÖSD: teny aostriana (Jänner, Matura, Erdäpfel…). Aufgabe 3 sy 4 amin'ny Lesen dia mameno banga — tandremo ny tsipelina!", fr: "Mots autrichiens ; Lesen A3/A4 = compléter : attention à l'orthographe !" } },
  strategie: [
    { mg: "Lesen 90 min ho an'ny Aufgabe 4: ~20 min isaky ny Aufgabe.", fr: "Environ 20 min par tâche en Lesen." },
    { mg: "Aufgabe 3: litera 1–3 ihany no tsy hita. Vakio mafy ny fehezanteny iray manontolo.", fr: "A3 : 1 à 3 lettres manquantes, lis la phrase entière." },
    { mg: "Aufgabe 4: teny IRAY isaky ny banga (préposition, article, connecteur, verbe).", fr: "A4 : UN mot par trou." }
  ],
  guides: {
    lesen: [
      { t: "Aufgabe 1 · Text + 5 a/b/c", tips: [ { mg: "Araka ny filaharan'ny lahatsoratra ny fanontaniana.", fr: "Questions dans l'ordre du texte." } ] },
      { t: "Aufgabe 2 · 10 Überschriften ↔ 5 Texte", tips: [ { mg: "Lohateny 5 tafahoatra. Jereo ny hevi-dehibe fa tsy teny iray fotsiny.", fr: "5 titres en trop ; idée principale, pas un mot isolé." } ] },
      { t: "Aufgabe 3 · Texte coupé à droite", tips: [ { mg: "Fenoy ny litera tsy ampy (1–3). Tsipelina tsara ihany no marina.", fr: "Complète les lettres manquantes ; orthographe exacte." } ] },
      { t: "Aufgabe 4 · Lückentext (10 mots)", tips: [ { mg: "Diniho ny fitsipi-pitenenana: Kasus, temps, préposition.", fr: "Analyse la grammaire : cas, temps, préposition." } ] }
    ],
    hoeren: [
      { t: "Aufgabe 1 · Radio · R/F · 2 écoutes", tips: [ { mg: "90 segondra hamakiana. Henoina indroa.", fr: "90 s de lecture, deux écoutes." } ] },
      { t: "Aufgabe 2 · Conversation · tableau · 1 écoute", tips: [ { mg: "Indray mandeha ihany! Soraty haingana ny teny fototra.", fr: "Une seule écoute : note vite les mots-clés." } ] }
    ],
    schreiben: [
      { t: "Aufgabe 1 · Beschwerde ~120 teny", tips: [ { mg: "Ampiasao avokoa ny naoty rehetra. Fitenenana ofisialy, fitarainana mazava + fangatahana.", fr: "Utilise toutes les notes ; plainte claire + demande." } ] },
      { t: "Aufgabe 2 · A na B · Meinung ~120 teny", tips: [ { mg: "Safidio ny lohahevitra iray. Valio ny teboka 4.", fr: "Choisis A ou B ; traite les 4 points." } ] }
    ],
    sprechen: [
      { t: "Aufgabe 1 · Kontakt + Rat geben", tips: [ { mg: "Fifampiresahana voajanahary: manontania, manoro hevitra.", fr: "Conversation naturelle : questionner, conseiller." } ] },
      { t: "Aufgabe 2 · Bildbeschreibung", tips: [ { mg: "Inona no hita? → Inona no dikany? → Hevitrao.", fr: "Décrire → interpréter → opinion." } ] },
      { t: "Aufgabe 3 · Meinungsaustausch", tips: [ { mg: "Arovy ny hevitra omena anao, na dia tsy hevitrao aza.", fr: "Défends la position imposée." } ] }
    ]
  }
};
P.vocabOfficiel = [
  { de: "die Beschwerde", fr: "la réclamation", mg: "fitarainana" }, { de: "sich beschweren über", fr: "se plaindre de", mg: "mitaraina momba" },
  { de: "die Rückerstattung", fr: "le remboursement", mg: "famerenana vola" }, { de: "der Mangel", fr: "le défaut", mg: "tsy fahatanterahana" },
  { de: "die Stellungnahme", fr: "la prise de position", mg: "fanehoan-kevitra" }, { de: "der Konsum", fr: "la consommation", mg: "fanjifana" },
  { de: "das Einkaufszentrum", fr: "le centre commercial", mg: "toeram-pivarotana lehibe" }, { de: "der Onlinehandel", fr: "le commerce en ligne", mg: "varotra an-tserasera" },
  { de: "die Vereinsamung", fr: "l'isolement", mg: "fitokana-monina" }, { de: "die Gesundheitsvorsorge", fr: "la prévention santé", mg: "fisorohana aretina" },
  { de: "der Ausdauersport", fr: "le sport d'endurance", mg: "fanatanjahantena maharitra" }, { de: "sich überwinden", fr: "se surmonter", mg: "mandresy ny tenany" },
  { de: "die Matura", fr: "le bac (Autriche)", mg: "bakalorea (Aotrisy)" }, { de: "der Jänner", fr: "janvier (Autriche)", mg: "janoary (Aotrisy)" },
  { de: "die Erdäpfel", fr: "les pommes de terre (AT)", mg: "ovy (Aotrisy)" }, { de: "das Spital", fr: "l'hôpital (AT/CH)", mg: "hopitaly" },
  { de: "die Wohnungsnot", fr: "la pénurie de logements", mg: "tsy fahampian'ny trano" }, { de: "der Mieter", fr: "le locataire", mg: "mpanofa" },
  { de: "die Hausverwaltung", fr: "la gérance", mg: "mpitantana trano" }, { de: "die Frist", fr: "le délai", mg: "fe-potoana" },
  { de: "ausgebucht", fr: "complet", mg: "feno (tsy misy toerana)" }, { de: "die Gebühr", fr: "les frais", mg: "sarany" },
  { de: "einräumen", fr: "concéder", mg: "manaiky" }, { de: "überzeugen", fr: "convaincre", mg: "mandresy lahatra" },
  { de: "die Lebensqualität", fr: "la qualité de vie", mg: "kalitaon'ny fiainana" }, { de: "nachhaltig", fr: "durable", mg: "maharitra" },
  { de: "die Bildbeschreibung", fr: "la description d'image", mg: "famaritana sary" }, { de: "im Vordergrund", fr: "au premier plan", mg: "eo aloha" },
  { de: "im Hintergrund", fr: "à l'arrière-plan", mg: "ao ambadika" }, { de: "die Meinungsverschiedenheit", fr: "le désaccord", mg: "tsy fitovian-kevitra" }
];

P.sets.push({
  id: "ob2m1", titre: "Modellsatz 1", theme: "Fanodinana fako · Fitsangatsanganana · Trano",
  lesen: { temps: 90, teile: [
    { id: "L1", nom: "Aufgabe 1", type: "mc", points: 5,
      consigne: "Lesen Sie den Text und die Aufgaben 1–5. Welche Lösung (a, b oder c) ist richtig?",
      ctr: ["Lisez le texte. Quelle réponse (a, b ou c) est correcte ?", "Vakio ny lahatsoratra. Iza no valiny marina (a, b, c)?"],
            texte: `<div class="press"><h3>Reparieren statt wegwerfen</h3>
<p>Jeden ersten Samstag im Monat verwandelt sich der Pfarrsaal im Grazer Bezirk Lend in eine Werkstatt. An langen Tischen sitzen pensionierte Elektriker, Schneiderinnen und Fahrradmechaniker und warten auf Kundschaft. Die kommt mit kaputten Toastern, zerrissenen Jacken oder Lampen, die nicht mehr leuchten. Das sogenannte Repair-Café gibt es seit fünf Jahren, gegründet hat es die ehemalige Lehrerin Gertrude Haider.</p>
<p>„Mich hat geärgert, dass Geräte oft nur wegen einer Kleinigkeit im Müll landen“, erzählt sie. „Ein Kabel, eine Sicherung – das kostet ein paar Cent.“ Bezahlen müssen die Besucherinnen und Besucher nichts, eine Spende in die Kaffeekasse ist aber willkommen. Wichtig ist Haider ein Prinzip: Repariert wird gemeinsam. Wer ein Gerät bringt, soll zusehen und mithelfen. „So lernen die Leute, dass Technik kein Geheimnis ist.“</p>
<p>Nicht alles lässt sich retten. Bei manchen modernen Geräten sind die Teile verklebt statt verschraubt, Ersatzteile gibt es oft nur beim Hersteller – und zu Preisen, bei denen sich eine Reparatur kaum lohnt. Haider begrüßt deshalb den österreichischen Reparaturbonus, mit dem der Staat einen Teil der Kosten in Fachbetrieben übernimmt. „Das ist ein guter Anfang. Aber eigentlich müssten die Hersteller verpflichtet werden, langlebiger zu produzieren.“</p>
<p>Für viele Stammgäste ist das Repair-Café längst mehr als eine Werkstatt. „Ich komme auch, wenn nichts kaputt ist“, sagt eine 78-jährige Besucherin. „Hier treffe ich Menschen, mit denen ich sonst nie ins Gespräch käme.“</p></div>`,
      items: [
        { n: 1, q: "Im Repair-Café helfen vor allem …", tr: ["Au Repair-Café aident surtout…", "Ao amin'ny Repair-Café dia manampy indrindra…"], opts: ["Studierende der Technik.", "Menschen im Ruhestand mit Fachwissen.", "Angestellte von Elektrogeschäften."], otr: [["des étudiants en technique", "mpianatra teknika"], ["des retraités qualifiés", "olona efa misotro ronono manana fahaizana"], ["des employés de magasins", "mpiasan'ny fivarotana"]], a: "b", exp: { mg: "« pensionierte Elektriker, Schneiderinnen … » = efa misotro ronono.", fr: "Des retraités spécialistes." } },
        { n: 2, q: "Gertrude Haider hat das Repair-Café gegründet, weil …", tr: ["G. Haider a fondé le Repair-Café parce que…", "Nanorina ny Repair-Café i G. Haider satria…"], opts: ["sie als Lehrerin Technik unterrichtet hat.", "Dinge wegen kleiner Defekte weggeworfen werden.", "Reparaturen in Geschäften zu lange dauern."], otr: [["elle enseignait la technique", "nampianatra teknika izy"], ["on jette des objets pour de petits défauts", "ariana noho ny simba kely"], ["les réparations en magasin sont trop longues", "ela loatra ny fanamboarana any am-pivarotana"]], a: "b", exp: { mg: "« nur wegen einer Kleinigkeit im Müll ».", fr: "Jetés pour une broutille." } },
        { n: 3, q: "Was ist Frau Haider besonders wichtig?", tr: ["Qu'est-ce qui est particulièrement important pour Mme Haider ?", "Inona no tena zava-dehibe aminy?"], opts: ["Dass die Besucher bei der Reparatur mitmachen.", "Dass jeder eine Spende gibt.", "Dass nur einfache Geräte repariert werden."], otr: [["que les visiteurs participent", "handray anjara ny mpitsidika"], ["que chacun fasse un don", "hanome fanomezana ny tsirairay"], ["qu'on ne répare que des appareils simples", "fitaovana tsotra ihany"]], a: "a", exp: { mg: "« Repariert wird gemeinsam … zusehen und mithelfen ». Tsy voatery ny fanomezana.", fr: "Réparer ensemble ; le don est facultatif." } },
        { n: 4, q: "Über den Reparaturbonus sagt sie, dass er …", tr: ["Sur le bonus réparation, elle dit qu'il…", "Momba ny « Reparaturbonus » dia lazainy fa…"], opts: ["das Problem vollständig löst.", "ein Schritt in die richtige Richtung ist.", "nur den Herstellern hilft."], otr: [["règle tout le problème", "mamaha tanteraka"], ["est un pas dans la bonne direction", "dingana tsara"], ["n'aide que les fabricants", "ny mpanamboatra ihany no ampiana"]], a: "b", exp: { mg: "« ein guter Anfang. Aber eigentlich müssten die Hersteller … ».", fr: "Un bon début, mais insuffisant." } },
        { n: 5, q: "Für manche Stammgäste ist das Repair-Café vor allem …", tr: ["Pour certains habitués, le Repair-Café est surtout…", "Ho an'ny sasany, ny Repair-Café dia indrindra…"], opts: ["ein Ort der Begegnung.", "eine günstige Einkaufsmöglichkeit.", "ein Ort, um einen Beruf zu lernen."], otr: [["un lieu de rencontre", "toerana fihaonana"], ["un lieu d'achat bon marché", "toerana fividianana mora"], ["un lieu pour apprendre un métier", "toerana hianarana asa"]], a: "a", exp: { mg: "« Hier treffe ich Menschen … ».", fr: "Pour rencontrer des gens." } }
      ] },
    { id: "L2", nom: "Aufgabe 2", type: "match", points: 5, zero: false, layout: "choixFirst",
      consigne: "Lesen Sie die Überschriften A–J und die Texte 6–10. Welche Überschrift passt zu welchem Text? Fünf Überschriften bleiben übrig.",
      ctr: ["Quel titre (A–J) correspond à chaque texte (6–10) ? Cinq titres restent.", "Iza no lohateny (A–J) mifanaraka amin'ny lahatsoratra tsirairay? Lohateny 5 tafahoatra."],
      choixTitre: "Überschriften",
      choix: { A: "Zug statt Flugzeug: Nachtzüge erleben ein Comeback", B: "Neue Regeln für Kurzzeitvermietung in Wien", C: "Wandern wird bei Jugendlichen immer beliebter", D: "Teurer Urlaub: Preise für Hotels steigen stark", E: "Kostenlos durch das ganze Land mit dem Klimaticket", F: "Alpenvereine warnen vor Leichtsinn am Berg", G: "Immer mehr Österreicher verbringen den Urlaub zu Hause", H: "Radweg an der Donau wird verlängert", I: "Flughafen Wien meldet Passagierrekord", J: "Ein Jahr für 1.095 Euro: das Klimaticket feiert Geburtstag" },
      texte: `<div class="ads">
<div class="ad"><span class="l">6</span>Seit dem Fahrplanwechsel verbinden die ÖBB Wien wieder direkt mit Paris, Brüssel und Amsterdam – über Nacht. Die Liegewagen sind an Wochenenden oft Wochen im Voraus ausgebucht. Vor allem junge Reisende sehen darin eine umweltfreundliche Alternative zum Billigflug.</div>
<div class="ad"><span class="l">7</span>Wer seine Wohnung in Wien über Online-Plattformen an Touristen vermietet, muss sich künftig an strengere Vorschriften halten. In Wohngebieten ist die Vermietung nur noch an maximal 90 Tagen im Jahr erlaubt. Die Stadt will damit verhindern, dass Wohnraum für die Bevölkerung verloren geht.</div>
<div class="ad"><span class="l">8</span>Die Bergrettung musste im vergangenen Sommer so oft ausrücken wie nie zuvor. Viele Verunglückte waren mit Turnschuhen unterwegs, hatten kein Wasser dabei oder unterschätzten das Wetter. Die Alpenvereine fordern daher mehr Information für Gäste.</div>
<div class="ad"><span class="l">9</span>Mehr als die Hälfte der Österreicherinnen und Österreicher hat heuer keine Reise ins Ausland geplant. Statt nach Italien oder Kroatien fährt man an den Neusiedler See oder ins Salzkammergut. Neben den Kosten nennen viele auch den Wunsch nach kurzen Anreisewegen.</div>
<div class="ad"><span class="l">10</span>Vor genau einem Jahr wurde das Ticket eingeführt, mit dem man alle öffentlichen Verkehrsmittel des Landes benutzen kann. Inzwischen haben es über 250.000 Menschen gekauft. Das Ministerium spricht von einem großen Erfolg, Kritiker bemängeln aber die schlechten Verbindungen im ländlichen Raum.</div></div>`,
      items: [
        { n: 6, q: "Text 6", a: "A", exp: { mg: "Nachtzüge mankany Paris, Brüssel → « Comeback ».", fr: "Trains de nuit." } },
        { n: 7, q: "Text 7", a: "B", exp: { mg: "Fanofana fohy (90 andro) ao Vienne.", fr: "Location courte durée à Vienne." } },
        { n: 8, q: "Text 8", a: "F", exp: { mg: "Bergrettung, Turnschuhe → fampitandremana momba ny « Leichtsinn ».", fr: "Imprudence en montagne." } },
        { n: 9, q: "Text 9", a: "G", exp: { mg: "Tsy mandeha any ivelany fa mijanona ao Aotrisy.", fr: "Vacances en Autriche." } },
        { n: 10, q: "Text 10", a: "J", exp: { mg: "« Vor genau einem Jahr » → Geburtstag. Fandrika E: tsy maimaim-poana ilay ticket.", fr: "Anniversaire ; piège E : il n'est pas gratuit." } }
      ] },
    { id: "L3", nom: "Aufgabe 3", type: "fill", points: 5,
      consigne: "Im folgenden Text fehlen am Ende einiger Wörter 1–3 Buchstaben. Ergänzen Sie die fehlenden Buchstaben (11–20).",
      ctr: ["Il manque 1 à 3 lettres à la fin de certains mots. Complétez (11–20).", "Litera 1–3 no tsy ampy amin'ny faran'ny teny sasany. Fenoy."],
      texte: `<div class="paper"><h3>Wohnen auf kleinem Raum</h3><p>In vielen Städten werden Wohnungen immer teur<b>(11)</b>___. Deshalb entscheiden sich manche Mensch<b>(12)</b>___ bewusst für ein sogenanntes Tiny House. Diese klein<b>(13)</b>___ Häuser haben meist nur 20 bis 40 Quadratmeter. Trotzdem gibt es all<b>(14)</b>___, was man zum Leben braucht: eine Küche, ein Bad und ein Bett, oft unter d<b>(15)</b>___ Dach. Die Bewohner betonen, dass si<b>(16)</b>___ weniger besitzen, aber mehr Freiheit haben. Kritik<b>(17)</b>___ weisen jedoch darauf hin, dass Tiny Houses viel Fläche verbrauch<b>(18)</b>___, wenn sie einzeln auf dem Land stehen. Eine Lösung könnten klein<b>(19)</b>___ Siedlungen sein, in denen mehrere Häuser ein<b>(20)</b>___ gemeinsamen Garten teilen.</p></div>`,
      items: [
        { n: 11, q: "teur___", a: ["er"], ph: "…", exp: { mg: "Comparatif: teuer → teurer.", fr: "Comparatif : teurer." } },
        { n: 12, q: "Mensch___", a: ["en"], exp: { mg: "Pluriel n-Deklination: Menschen.", fr: "Pluriel : Menschen." } },
        { n: 13, q: "klein___", a: ["en"], exp: { mg: "« Diese kleinen Häuser » (adjectif après Demonstrativ, pluriel).", fr: "Déclinaison faible pluriel." } },
        { n: 14, q: "all___", a: ["es"], exp: { mg: "« alles, was … ».", fr: "alles, was…" } },
        { n: 15, q: "d___", a: ["em"], exp: { mg: "« unter dem Dach » (Dativ, toerana).", fr: "Datif : unter dem Dach." } },
        { n: 16, q: "si___", a: ["e"], exp: { mg: "« dass sie » (izy ireo).", fr: "sie (ils)." } },
        { n: 17, q: "Kritik___", a: ["er"], exp: { mg: "« Kritiker » = mpitsikera (olona).", fr: "Kritiker = les critiques (personnes)." } },
        { n: 18, q: "verbrauch___", a: ["en"], exp: { mg: "Verbe pluriel: sie verbrauchen.", fr: "Verbe au pluriel." } },
        { n: 19, q: "klein___", a: ["e"], exp: { mg: "Tsy misy article → « kleine Siedlungen » (déclinaison forte).", fr: "Sans article : kleine." } },
        { n: 20, q: "ein___", a: ["en"], exp: { mg: "Akkusativ masculin: « einen gemeinsamen Garten ».", fr: "Accusatif masculin : einen." } }
      ] },
    { id: "L4", nom: "Aufgabe 4", type: "fill", points: 5,
      consigne: "Lesen Sie den Brief. In jede Lücke (21–30) passt genau ein Wort. Schreiben Sie das fehlende Wort.",
      ctr: ["Dans chaque trou (21–30), il manque exactement un mot.", "Teny iray monja no tsy ampy isaky ny banga."],
      texte: `<div class="paper"><p>Liebe Sandra,</p><p>vielen Dank <b>(21)</b>___ deine lange Mail! Ich freue mich, dass es dir in Linz so gut gefällt. Bei mir gibt es auch Neuigkeiten: Seit Jänner arbeite ich in <b>(22)</b>___ Reisebüro in der Innenstadt. Die Arbeit macht mir viel Spaß, <b>(23)</b>___ ich jeden Tag mit Menschen aus der ganzen Welt zu tun habe. Am Anfang war ich ziemlich nervös, <b>(24)</b>___ meine Kolleginnen haben mir sehr geholfen.</p><p>Nächsten Monat möchte ich <b>(25)</b>___ einen Kurs für Tourismusmanagement anmelden. Er findet jeden Samstag statt, <b>(26)</b>___ ich unter der Woche arbeite. Weißt du, <b>(27)</b>___ man so einen Kurs auch von der Firma bezahlt bekommen kann?</p><p>Übrigens: Hast du im Sommer Lust, mich zu besuchen? Wir <b>(28)</b>___ zusammen an den Wörthersee fahren. Schreib mir bald, <b>(29)</b>___ du Zeit hast!</p><p>Viele liebe Grüße <b>(30)</b>___ Wien<br>deine Lalaina</p></div>`,
      items: [
        { n: 21, q: "(21)", a: ["für"], exp: { mg: "« Danke für … ».", fr: "danken für." } },
        { n: 22, q: "(22)", a: ["einem"], exp: { mg: "« in einem Reisebüro » (Dativ, neutre).", fr: "Datif neutre." } },
        { n: 23, q: "(23)", a: ["weil", "da"], exp: { mg: "Antony + verbe any amin'ny farany: weil.", fr: "Cause + verbe final : weil/da." } },
        { n: 24, q: "(24)", a: ["aber", "doch"], exp: { mg: "Fanoherana: aber.", fr: "Opposition : aber." } },
        { n: 25, q: "(25)", a: ["mich"], exp: { mg: "« sich anmelden » → ich melde mich an.", fr: "Verbe pronominal : mich." } },
        { n: 26, q: "(26)", a: ["weil", "da"], exp: { mg: "Antony: miasa amin'ny herinandro izy.", fr: "Cause." } },
        { n: 27, q: "(27)", a: ["ob"], exp: { mg: "Fanontaniana ankolaka eny/tsia: « ob ».", fr: "Question indirecte : ob." } },
        { n: 28, q: "(28)", a: ["könnten", "können"], exp: { mg: "Soso-kevitra: « Wir könnten … fahren ».", fr: "Proposition : könnten." } },
        { n: 29, q: "(29)", a: ["wann", "ob"], exp: { mg: "« wann du Zeit hast » (oviana).", fr: "wann / ob." } },
        { n: 30, q: "(30)", a: ["aus"], exp: { mg: "« Grüße aus Wien ».", fr: "Grüße aus …" } }
      ] }
  ] },

  hoeren: { temps: 30, teile: [
    { id: "H1", nom: "Aufgabe 1", ecoutes: 2, type: "rf", lecture: 90, points: 10,
      consigne: "Sie hören einen Radiobeitrag. Sie hören den Text zweimal. Entscheiden Sie beim Hören, ob die Aussagen 1–10 richtig oder falsch sind. Sie haben jetzt 90 Sekunden Zeit, um die Aussagen zu lesen.",
      ctr: ["Reportage radio, deux écoutes. Vrai ou faux (1–10) ?", "Tatitra amin'ny radio, henoina indroa. Marina sa diso?"],
      clips: [{ id: "ob2m1-h1", titre: "Radiobeitrag", script: [
        { s: "f", n: "Moderatorin", t: "Willkommen bei ‚Gesund leben‘. Heute geht es um ein Thema, das immer mehr Menschen betrifft: Einsamkeit. Laut einer Studie der Universität Wien fühlt sich jede vierte Person in Österreich regelmäßig einsam – und zwar nicht nur ältere Menschen. Besonders betroffen sind überraschenderweise junge Erwachsene zwischen 18 und 29." },
        { s: "m", n: "Dr. Huber", t: "Viele junge Leute ziehen für das Studium oder den ersten Job in eine neue Stadt. Sie verlieren ihre alten Freunde aus den Augen und haben noch keine neuen gefunden. Soziale Medien helfen da wenig. Man hat zwar hunderte Kontakte, aber niemanden, den man um zwei Uhr nachts anrufen kann." },
        { s: "f", n: "Moderatorin", t: "Herr Dr. Huber, warum ist Einsamkeit eigentlich ein Gesundheitsthema?" },
        { s: "m", n: "Dr. Huber", t: "Weil sie krank machen kann. Einsame Menschen schlafen schlechter, haben häufiger Bluthochdruck und ein höheres Risiko für Depressionen. Manche Fachleute vergleichen die Folgen sogar mit denen des Rauchens." },
        { s: "f", n: "Moderatorin", t: "Was kann man dagegen tun?" },
        { s: "m", n: "Dr. Huber", t: "Das Wichtigste ist, das Thema nicht zu verschweigen. Viele schämen sich. In Großbritannien gibt es seit einigen Jahren sogar ein eigenes Ministerium für Einsamkeit. In Österreich setzen wir eher auf Projekte in den Gemeinden: Nachbarschaftscafés, gemeinsames Kochen, Patenschaften zwischen Jung und Alt." },
        { s: "f", n: "Moderatorin", t: "Und was raten Sie jemandem, der sich gerade einsam fühlt?" },
        { s: "m", n: "Dr. Huber", t: "Klein anfangen. Nicht gleich den großen Freundeskreis erwarten. Ein Verein, ein Chor, ein Ehrenamt – Orte, an denen man regelmäßig dieselben Menschen trifft. Freundschaften entstehen durch Wiederholung. Und wer merkt, dass er allein nicht mehr weiterkommt, sollte sich nicht scheuen, professionelle Hilfe zu suchen." }],
        items: [
          { n: 1, q: "Laut der Studie fühlen sich 25 % der Menschen in Österreich regelmäßig einsam.", tr: ["Selon l'étude, 25 % se sentent régulièrement seuls.", "25 % no mahatsapa ho irery matetika."], a: "r", exp: { mg: "« jede vierte Person » = 25 %.", fr: "Une personne sur quatre." } },
          { n: 2, q: "Vor allem ältere Menschen sind von Einsamkeit betroffen.", tr: ["Ce sont surtout les personnes âgées qui sont touchées.", "Ny zokiolona indrindra no voakasika."], a: "f", exp: { mg: "« Besonders betroffen sind … junge Erwachsene ».", fr: "Surtout les jeunes adultes." } },
          { n: 3, q: "Ein Grund ist der Umzug in eine neue Stadt.", tr: ["Une raison est le déménagement dans une nouvelle ville.", "Antony iray ny fifindrana tanàna."], a: "r", exp: { mg: "« ziehen … in eine neue Stadt ».", fr: "Déménagement." } },
          { n: 4, q: "Soziale Medien sind eine gute Lösung gegen Einsamkeit.", tr: ["Les réseaux sociaux sont une bonne solution.", "Vahaolana tsara ny tambajotra sosialy."], a: "f", exp: { mg: "« Soziale Medien helfen da wenig ».", fr: "Ils aident peu." } },
          { n: 5, q: "Einsamkeit kann zu körperlichen Problemen führen.", tr: ["La solitude peut causer des problèmes physiques.", "Mety hiteraka olana ara-batana."], a: "r", exp: { mg: "Bluthochdruck, torimaso ratsy.", fr: "Hypertension, mauvais sommeil." } },
          { n: 6, q: "Einsamkeit ist nach Ansicht aller Experten so schädlich wie Rauchen.", tr: ["Selon tous les experts, aussi nocif que fumer.", "Araka ny manam-pahaizana rehetra…"], a: "f", exp: { mg: "« Manche Fachleute » (sasany ihany), tsy « alle ».", fr: "Certains experts seulement." } },
          { n: 7, q: "Viele Betroffene sprechen nicht gern über ihre Einsamkeit.", tr: ["Beaucoup n'aiment pas en parler.", "Maro no tsy tia miresaka izany."], a: "r", exp: { mg: "« Viele schämen sich ».", fr: "Ils ont honte." } },
          { n: 8, q: "Österreich hat ein Ministerium für Einsamkeit.", tr: ["L'Autriche a un ministère de la solitude.", "Manana minisitera momba ny fahatokanana i Aotrisy."], a: "f", exp: { mg: "Grande-Bretagne no manana; Aotrisy: tetikasa eo an-toerana.", fr: "C'est la Grande-Bretagne." } },
          { n: 9, q: "Dr. Huber empfiehlt, sich regelmäßig mit denselben Menschen zu treffen.", tr: ["Il recommande de voir régulièrement les mêmes personnes.", "Atorony ny mihaona matetika amin'ny olona mitovy."], a: "r", exp: { mg: "« Freundschaften entstehen durch Wiederholung ».", fr: "L'amitié naît de la répétition." } },
          { n: 10, q: "Professionelle Hilfe hält er für unnötig.", tr: ["Il pense que l'aide professionnelle est inutile.", "Heveriny ho tsy ilaina ny fanampiana matihanina."], a: "f", exp: { mg: "« sollte sich nicht scheuen, professionelle Hilfe zu suchen ».", fr: "Il la recommande." } }
        ] }] },
    { id: "H2", nom: "Aufgabe 2", ecoutes: 1, type: "fill", lecture: 60, points: 10,
      consigne: "Sie hören ein Gespräch zwischen einer Mieterin und einem Mitarbeiter der Hausverwaltung. Sie hören das Gespräch einmal. Ergänzen Sie beim Hören die Notizen (11–20). Schreiben Sie nur Stichwörter.",
      ctr: ["Conversation entre une locataire et la gérance, une écoute. Complétez les notes (mots-clés).", "Resaka eo amin'ny mpanofa sy ny mpitantana trano, henoina indray mandeha. Fenoy ny naoty."],
      clips: [{ id: "ob2m1-h2", titre: "Telefongespräch", script: [
        { s: "m", n: "Hausverwaltung", t: "Hausverwaltung Gruber, Sie sprechen mit Herrn Moser, guten Tag." },
        { s: "f", n: "Mieterin", t: "Grüß Gott, Rasoanaivo ist mein Name, ich wohne in der Leopoldgasse 14, Tür 7. Ich rufe an, weil bei uns seit drei Tagen die Heizung nicht funktioniert." },
        { s: "m", n: "Hausverwaltung", t: "Oje, das tut mir leid. Betrifft das die ganze Wohnung?" },
        { s: "f", n: "Mieterin", t: "Nur das Schlafzimmer und das Bad. Im Wohnzimmer ist es warm. Ich habe schon zweimal eine E-Mail geschrieben, aber keine Antwort bekommen." },
        { s: "m", n: "Hausverwaltung", t: "Wir hatten leider Probleme mit unserem Mailprogramm. Ich schicke Ihnen einen Installateur. Würde Ihnen Donnerstag passen?" },
        { s: "f", n: "Mieterin", t: "Donnerstag arbeite ich bis 17 Uhr. Ginge es auch am Freitagvormittag?" },
        { s: "m", n: "Hausverwaltung", t: "Freitag zwischen 8 und 10 Uhr, das geht. Die Firma heißt Wimmer, der Techniker ruft Sie eine halbe Stunde vorher an. Ihre Telefonnummer?" },
        { s: "f", n: "Mieterin", t: "0664 382 91 57." },
        { s: "m", n: "Hausverwaltung", t: "Danke. Bis dahin bringe ich Ihnen gern heute Nachmittag ein elektrisches Heizgerät vorbei." },
        { s: "f", n: "Mieterin", t: "Das wäre sehr nett. Und noch eine Frage: Bekomme ich für die Tage ohne Heizung etwas von der Miete zurück?" },
        { s: "m", n: "Hausverwaltung", t: "Grundsätzlich ja, eine Mietminderung ist möglich. Dafür bräuchten wir aber einen schriftlichen Antrag. Am besten per Post, nicht per Mail – nach unseren Problemen ist das sicherer." },
        { s: "f", n: "Mieterin", t: "Gut, das mache ich. Vielen Dank, Herr Moser." }],
        items: [
          { n: 11, q: "Name der Mieterin", label: "Mieterin: Frau …", a: ["Rasoanaivo"], exp: { mg: "« Rasoanaivo ist mein Name ».", fr: "Rasoanaivo." } },
          { n: 12, q: "Adresse", label: "Leopoldgasse … , Tür 7", a: ["14", "vierzehn"], exp: { mg: "« Leopoldgasse 14 ».", fr: "14." } },
          { n: 13, q: "Problem", label: "Problem: … funktioniert nicht", a: ["Heizung", "die Heizung"], exp: { mg: "Heizung = fanafanana.", fr: "Le chauffage." } },
          { n: 14, q: "Seit wann?", label: "seit … Tagen", a: ["drei", "3"], exp: { mg: "« seit drei Tagen ».", fr: "Trois jours." } },
          { n: 15, q: "Betroffene Räume", label: "Räume: Schlafzimmer und …", a: ["Bad", "Badezimmer"], exp: { mg: "« Nur das Schlafzimmer und das Bad ».", fr: "Salle de bain." } },
          { n: 16, q: "Termin Installateur", label: "Termin: … , 8–10 Uhr", a: ["Freitag", "Freitagvormittag", "Freitag vormittag", "Fr"], exp: { mg: "Tsy Alakamisy fa Zoma maraina.", fr: "Vendredi matin (pas jeudi)." } },
          { n: 17, q: "Firma", label: "Firma: …", a: ["Wimmer"], exp: { mg: "« Die Firma heißt Wimmer ».", fr: "Wimmer." } },
          { n: 18, q: "Anruf vorher", label: "Techniker ruft … vorher an", a: ["eine halbe Stunde", "halbe Stunde", "30 Minuten", "30 min"], exp: { mg: "« eine halbe Stunde vorher ».", fr: "30 minutes avant." } },
          { n: 19, q: "Heute", label: "heute Nachmittag: elektrisches …", a: ["Heizgerät", "Heizgerat"], exp: { mg: "« ein elektrisches Heizgerät ».", fr: "Un radiateur électrique." } },
          { n: 20, q: "Mietminderung", label: "Antrag schicken per …", a: ["Post", "Brief"], exp: { mg: "« per Post, nicht per Mail ».", fr: "Par courrier, pas par mail." } }
        ] }] }
  ] },

  schreiben: { temps: 90, aufgaben: [
    { id: "S1", nom: "Aufgabe 1", temps: 45, mots: 120, points: 15, type: "Beschwerde-E-Mail",
      consigne: `<p>Sie haben bei einer Sprachschule in Salzburg einen zweiwöchigen Intensivkurs mit Unterkunft gebucht. Leider waren Sie nicht zufrieden. Hier sind Ihre Notizen:</p><div class="plan"><ul><li>Kurs: 12 statt 8 Teilnehmende wie im Prospekt</li><li>3 Lehrerwechsel in 2 Wochen</li><li>Zimmer: Gastfamilie 40 Minuten mit dem Bus entfernt (Prospekt: „Zentrum“)</li><li>Ausflug nach Hallstatt abgesagt – kein Geld zurück</li></ul></div><p>Schreiben Sie eine Beschwerde-E-Mail an die Sprachschule. Gehen Sie auf alle Notizen ein und sagen Sie, was Sie erwarten. Schreiben Sie ca. 120 Wörter.</p>`,
      ctr: ["E-mail de réclamation à une école de langues : traitez toutes les notes et dites ce que vous attendez. ~120 mots.", "Mailaka fitarainana amin'ny sekoly fiteny: valio ny naoty rehetra ary lazao izay andrasanao. ~120 teny."],
      checklist: ["Sehr geehrte Damen und Herren,", "Fampidirana: iza ianao, inona no novidinao", "Naoty 1: mpianatra 12 fa tsy 8", "Naoty 2: mpampianatra niova in-3", "Naoty 3: trano lavitra (40 min)", "Naoty 4: Ausflug nofoanana, tsy naverina ny vola", "Fangatahana: famerenana vola ampahany", "Mit freundlichen Grüßen", "~120 teny"],
      redemittel: ["Ich wende mich an Sie, weil ich mit … sehr unzufrieden war.", "Laut Ihrem Prospekt sollten … – tatsächlich waren es aber …", "Außerdem musste ich feststellen, dass …", "Es kann nicht sein, dass …", "Ich erwarte daher, dass Sie mir einen Teil der Kosten erstatten.", "Ich hoffe auf eine baldige Antwort."],
      modele: `Sehr geehrte Damen und Herren,

im August habe ich bei Ihnen einen zweiwöchigen Intensivkurs mit Unterkunft gebucht. Leider war ich mit Ihrem Angebot sehr unzufrieden.

Laut Ihrem Prospekt sollten maximal acht Personen in einer Gruppe sein – tatsächlich waren wir zwölf. Außerdem hatten wir in nur zwei Wochen drei verschiedene Lehrer, sodass kein richtiger Unterricht möglich war.

Auch die Unterkunft entsprach nicht der Beschreibung. Statt im Zentrum wohnte ich bei einer Gastfamilie, die vierzig Minuten mit dem Bus entfernt war. Schließlich wurde der Ausflug nach Hallstatt abgesagt, ohne dass ich mein Geld zurückbekommen habe.

Ich erwarte daher, dass Sie mir mindestens dreißig Prozent der Kursgebühr sowie die Kosten für den Ausflug erstatten.

Ich hoffe auf eine baldige Antwort.

Mit freundlichen Grüßen
Mamy Rakotomalala` },
    { id: "S2", nom: "Aufgabe 2", temps: 45, mots: 120, points: 15, type: "Stellungnahme (A oder B)",
      consigne: `<p>Wählen Sie <b>ein</b> Thema (A oder B) und schreiben Sie Ihre Meinung in einem Forumsbeitrag (ca. 120 Wörter). Gehen Sie auf alle Punkte ein.</p><div class="plan"><b>Thema A: Sollten Geschäfte auch am Sonntag geöffnet sein?</b><ul><li>Situation in Ihrem Heimatland</li><li>Vorteile für Kunden</li><li>Nachteile für Angestellte</li><li>Ihre Meinung</li></ul></div><div class="plan"><b>Thema B: Smartphones in der Schule verbieten?</b><ul><li>Situation in Ihrem Heimatland</li><li>Gründe für ein Verbot</li><li>Gründe dagegen</li><li>Ihre Meinung</li></ul></div>`,
      ctr: ["Choisissez A (ouverture le dimanche) ou B (interdiction du smartphone à l'école). ~120 mots, tous les points.", "Safidio A (fivarotana misokatra Alahady) na B (fandrarana finday any an-tsekoly). ~120 teny."],
      checklist: ["Lohahevitra iray ihany (A na B)", "Toe-javatra any Madagasikara", "Tombony / antony ho", "Fatiantoka / antony manohitra", "Hevitrao miaraka amin'ny antony", "Connecteurs: einerseits … andererseits, zwar … aber", "~120 teny"],
      redemittel: ["In meinem Heimatland ist es üblich, dass …", "Einerseits …, andererseits …", "Ein wichtiges Argument dafür ist …", "Dagegen spricht, dass …", "Ich persönlich bin der Meinung, dass …", "Alles in allem …"],
      modele: `Thema A

In Madagaskar sind viele Geschäfte und Märkte auch am Sonntag geöffnet, vor allem am Vormittag. Für uns ist das ganz normal, während in Österreich fast alle Läden am Sonntag geschlossen sind.

Einerseits ist eine Öffnung am Sonntag für Kunden praktisch. Wer die ganze Woche arbeitet, hat am Wochenende endlich Zeit, in Ruhe einzukaufen. Außerdem könnten Touristen mehr Geld ausgeben.

Andererseits müssen dann die Angestellten am Sonntag arbeiten. Sie haben weniger Zeit für ihre Familie und ihre Freunde, und das gemeinsame freie Wochenende geht verloren.

Ich persönlich bin der Meinung, dass ein ruhiger Tag pro Woche wichtig für die Gesellschaft ist. Eine Ausnahme könnte man für Bäckereien und Geschäfte an Bahnhöfen machen. Alles in allem bin ich also gegen eine allgemeine Sonntagsöffnung.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Naoty / teboka rehetra · Toutes les notes/points traités" },
    { nom: "Kohärenz", desc: "Drafitra sy connecteurs · Structure, connecteurs" },
    { nom: "Wortschatz", desc: "Voambolana B2 · Vocabulaire B2 varié" },
    { nom: "Strukturen", desc: "Grammaire B2 : subordonnées, Konjunktiv II" },
    { nom: "Register", desc: "Fitenenana mifanaraka (formel / informel) · Registre adapté" }
  ] },

  sprechen: { preparation: 15, teile: [
    { id: "P1", nom: "Aufgabe 1 – Kontakt aufnehmen & Rat geben", mg: "Mifandray sy manoro hevitra", duree: 4, mode: "dialog", em: "🚆",
      consigne: `<p>Sie sitzen im Zug von Wien nach Innsbruck. Neben Ihnen sitzt eine Person (Ihr Prüfer / Ihre Prüferin), die gerade eine Sportzeitschrift liest. Beginnen Sie ein Gespräch.</p><div class="plan">Thema: <b>Sport und Bewegung</b><ul><li>Kommen Sie ins Gespräch.</li><li>Ihr Gegenüber möchte mehr Sport machen, schafft es aber nicht. Geben Sie Ratschläge.</li><li>Erzählen Sie von eigenen Erfahrungen.</li></ul></div>`,
      ctr: ["Dans le train, engagez la conversation avec votre voisin(e) sur le sport et donnez-lui des conseils.", "Ao anaty lamasinina, manomboha resaka amin'ny mpiara-dia aminao momba ny fanatanjahantena ary omeo torohevitra izy."],
      partenaire: [
        { id: "ob2m1-p1-1", s: "f", t: "Oh, Entschuldigung, habe ich Sie mit meiner Zeitschrift gestört? Nein? Fahren Sie auch bis Innsbruck?", cue: "Manomboha resaka · Engage la conversation", aide: ["Nein, gar nicht! Ja, ich fahre auch bis Innsbruck. Und Sie?", "Ich sehe, Sie lesen eine Sportzeitschrift. Treiben Sie viel Sport?"] },
        { id: "ob2m1-p1-2", s: "f", t: "Ach, ehrlich gesagt lese ich mehr über Sport, als ich selbst mache. Ich nehme mir jedes Jahr vor, regelmäßig zu laufen, aber nach zwei Wochen höre ich wieder auf.", cue: "Manontania antony · Demande pourquoi", aide: ["Woran liegt das denn Ihrer Meinung nach?", "Das kenne ich! Was hält Sie davon ab?"] },
        { id: "ob2m1-p1-3", s: "f", t: "Na ja, nach der Arbeit bin ich müde, und allein macht es mir einfach keinen Spaß. Was würden Sie mir raten?", cue: "Omeo torohevitra · Donne des conseils", aide: ["An Ihrer Stelle würde ich …", "Haben Sie schon mal überlegt, einem Lauftreff beizutreten?", "Es hilft, wenn man sich feste Termine einträgt."] },
        { id: "ob2m1-p1-4", s: "f", t: "Das ist eine gute Idee. Und wie ist das bei Ihnen? Wie schaffen Sie es, sich zu motivieren?", cue: "Tantarao ny traikefanao · Raconte ton expérience", aide: ["Bei mir ist es so, dass …", "Ich habe die Erfahrung gemacht, dass …"] },
        { id: "ob2m1-p1-5", s: "f", t: "Vielen Dank für die Tipps! Ich glaube, ich probiere das nächste Woche wirklich aus.", cue: "Famaranana · Conclus aimablement", aide: ["Das freut mich! Viel Erfolg!", "Erzählen Sie mir doch, wie es war – vielleicht sieht man sich mal wieder."] }
      ],
      redemittel: [
        ["Kontakt aufnehmen · Manomboka resaka", ["Entschuldigung, ist hier noch frei?", "Ich sehe, Sie lesen … Interessieren Sie sich für …?"]],
        ["Nachfragen · Manontany", ["Woran liegt das?", "Wie meinen Sie das genau?"]],
        ["Rat geben · Manoro hevitra", ["An Ihrer Stelle würde ich …", "Ich würde Ihnen empfehlen, …", "Wie wäre es, wenn Sie …?", "Es lohnt sich bestimmt, …"]],
        ["Erfahrung · Traikefa", ["Ich habe die Erfahrung gemacht, dass …", "Bei mir hat … sehr geholfen."]]
      ],
      modele: `P: Fahren Sie auch bis Innsbruck?
K: Ja, ich besuche dort eine Freundin. Ich sehe, Sie lesen eine Sportzeitschrift. Treiben Sie viel Sport?
P: Ehrlich gesagt lese ich mehr darüber, als ich selbst mache. Nach zwei Wochen höre ich immer auf.
K: Das kenne ich gut! Woran liegt das denn bei Ihnen?
P: Nach der Arbeit bin ich müde, und allein macht es keinen Spaß.
K: An Ihrer Stelle würde ich mir eine Gruppe suchen, zum Beispiel einen Lauftreff. Wenn andere auf einen warten, geht man eher hin. Außerdem würde ich lieber am Morgen laufen, bevor man müde ist.
P: Und wie motivieren Sie sich?
K: Ich habe die Erfahrung gemacht, dass kleine Ziele helfen. Ich habe mit zwanzig Minuten angefangen, zweimal pro Woche. Inzwischen laufe ich sogar Halbmarathons.
P: Toll! Ich probiere das nächste Woche aus.
K: Das freut mich. Viel Erfolg!` },
    { id: "P2", nom: "Aufgabe 2 – Bildbeschreibung", mg: "Famaritana sary", duree: 4, mode: "present", em: "🖼️",
      consigne: `<p>Beschreiben Sie das Bild. Was sehen Sie? Was könnte die Situation bedeuten? Was ist Ihre Meinung zum Thema? Ihr Prüfer / Ihre Prüferin stellt Ihnen danach Fragen.</p>`,
      ctr: ["Décrivez l'image, interprétez la situation et donnez votre avis.", "Faritano ny sary, hazavao ny dikany ary omeo ny hevitrao."],
      ptLabel: "SCHRITT",
      themes: [
        { titre: "Bild 1 · Homeoffice mit Kind", bild: { e: "👩‍💻👶", de: "Eine Frau sitzt am Küchentisch vor einem Laptop und telefoniert mit Headset. Neben ihr malt ein kleines Kind mit Buntstiften, im Hintergrund stapelt sich Geschirr in der Spüle.", tr: ["Une femme télétravaille à la table de cuisine ; à côté, un enfant dessine ; vaisselle sale au fond.", "Vehivavy miasa amin'ny solosaina eo amin'ny latabatra an-dakozia; zaza manao sary eo akaikiny; vilia maloto ao ambadika."] },
          points: [
            { de: "Was sehen Sie? (Personen, Ort, Vordergrund/Hintergrund)", mg: "Inona no hitanao? (olona, toerana, aloha/ambadika)", fr: "Que voyez-vous ?" },
            { de: "Was könnte die Situation bedeuten? Wie fühlt sich die Frau vielleicht?", mg: "Inona no dikan'ny toe-javatra? Ahoana ny fihetseham-pon'ilay vehivavy?", fr: "Interprétation : que ressent-elle ?" },
            { de: "Welches Thema zeigt das Bild? (Arbeit und Familie)", mg: "Inona no lohahevitra? (asa sy fianakaviana)", fr: "Quel thème ? (travail/famille)" },
            { de: "Ihre Meinung und Erfahrungen", mg: "Ny hevitrao sy ny traikefanao", fr: "Votre avis et expérience" } ],
          modele: `Auf dem Bild sieht man eine Frau, die am Küchentisch sitzt. Sie arbeitet offenbar am Laptop und telefoniert gerade mit einem Headset. Neben ihr sitzt ein kleines Kind, das mit Buntstiften malt. Im Hintergrund erkennt man eine Spüle voller Geschirr.

Ich vermute, dass die Frau im Homeoffice arbeitet und gleichzeitig auf ihr Kind aufpassen muss. Vielleicht ist der Kindergarten geschlossen. Sie wirkt konzentriert, aber wahrscheinlich auch ein bisschen gestresst, weil sie mehrere Dinge gleichzeitig erledigen muss.

Das Bild zeigt meiner Meinung nach das Thema „Vereinbarkeit von Familie und Beruf“. Homeoffice klingt zuerst ideal, weil man zu Hause bei den Kindern ist. In der Praxis ist es aber schwierig, sich zu konzentrieren.

In Madagaskar ist es üblich, dass Großeltern oder andere Verwandte bei der Kinderbetreuung helfen. Ich finde, Homeoffice kann eine Erleichterung sein, aber es ersetzt keine gute Kinderbetreuung.` } ],
      redemittel: [
        ["Beschreiben · Mamaritra", ["Auf dem Bild sieht man …", "Im Vordergrund / Im Hintergrund …", "Links / Rechts erkennt man …"]],
        ["Vermuten · Mihevitra", ["Ich vermute, dass …", "Es sieht so aus, als ob …", "Vielleicht / Wahrscheinlich …"]],
        ["Thema · Lohahevitra", ["Das Bild zeigt das Thema …", "Das erinnert mich an …"]],
        ["Meinung · Hevitra", ["Meiner Meinung nach …", "In meinem Heimatland ist es üblich, dass …"]]
      ] },
    { id: "P3", nom: "Aufgabe 3 – Meinungsaustausch", mg: "Fifanakalozan-kevitra", duree: 5, mode: "dialog", em: "🛍️",
      consigne: `<p>Sie diskutieren mit Ihrem Gesprächspartner über das Thema <b>„Einkaufen“</b>. Sie vertreten die Meinung von <b>Person 1</b>, Ihr Prüfer die Meinung von Person 2 – auch wenn es nicht Ihre eigene Meinung ist.</p><div class="plan"><b>Person 1 (Sie):</b> „Ich kaufe fast alles online. Das ist bequemer, billiger und spart Zeit.“<br><b>Person 2:</b> „Ich gehe lieber ins Geschäft. Da kann ich die Waren sehen und unterstütze die Händler in meiner Stadt.“</div>`,
      ctr: ["Débat sur les achats : vous défendez la Personne 1 (achats en ligne), même si ce n'est pas votre avis.", "Adihevitra momba ny fividianana: arovy ny hevitry ny Olona 1 (mividy an-tserasera), na dia tsy hevitrao aza."],
      partenaire: [
        { id: "ob2m1-p3-1", s: "m", t: "Ich verstehe nicht, warum so viele Leute alles im Internet bestellen. Im Geschäft sehe ich doch sofort, ob mir etwas gefällt.", cue: "Arovy ny Online · Défends l'achat en ligne", aide: ["Das stimmt schon, aber online kann ich in Ruhe Preise vergleichen.", "Für mich ist das vor allem eine Frage der Zeit."] },
        { id: "ob2m1-p3-2", s: "m", t: "Aber die vielen Pakete! Denk doch an die Umwelt und an den Verkehr durch die Lieferwagen.", cue: "Mamalia · Réponds à l'argument", aide: ["Da hast du nicht ganz unrecht. Allerdings fahren auch viele Leute mit dem Auto ins Einkaufszentrum.", "Man kann ja Bestellungen bündeln."] },
        { id: "ob2m1-p3-3", s: "m", t: "Und die kleinen Geschäfte in der Innenstadt? Wenn alle online kaufen, gibt es die bald nicht mehr.", cue: "Ekeo kely, aza mivadika · Concède sans changer d'avis", aide: ["Das ist ein wichtiger Punkt, das gebe ich zu. Trotzdem …", "Viele kleine Händler verkaufen inzwischen selbst online."] },
        { id: "ob2m1-p3-4", s: "m", t: "Hm. Also, ich bleibe dabei: Für mich gehört das Einkaufen in der Stadt einfach zur Lebensqualität. Wie lautet dein Fazit?", cue: "Famintinana · Résume ta position", aide: ["Ich bleibe bei meiner Meinung, weil …", "Wir sind uns zumindest einig, dass …"] }
      ],
      redemittel: [
        ["Meinung vertreten · Miaro hevitra", ["Für mich ist entscheidend, dass …", "Ich bin fest davon überzeugt, dass …"]],
        ["Einräumen · Manaiky ampahany", ["Das mag stimmen, trotzdem …", "Da hast du nicht ganz unrecht, aber …", "Das gebe ich zu, allerdings …"]],
        ["Widersprechen · Manohitra", ["Das sehe ich anders.", "Dem kann ich nicht zustimmen, weil …"]],
        ["Fazit · Famaranana", ["Ich bleibe bei meiner Meinung.", "Wir sind uns zumindest einig, dass …"]]
      ],
      modele: `P2: Im Geschäft sehe ich doch sofort, ob mir etwas gefällt.
K: Das stimmt schon, aber online kann ich in Ruhe Preise vergleichen und finde oft viel günstigere Angebote. Außerdem spare ich die Fahrt und die Wartezeit an der Kasse.
P2: Aber die vielen Pakete belasten die Umwelt.
K: Da hast du nicht ganz unrecht. Allerdings fahren auch viele Leute allein mit dem Auto ins Einkaufszentrum. Ein Lieferwagen bringt dagegen hundert Pakete auf einmal.
P2: Und die kleinen Geschäfte gehen kaputt.
K: Das ist ein wichtiger Punkt, das gebe ich zu. Trotzdem verkaufen viele kleine Händler inzwischen selbst online und erreichen so mehr Kunden.
P2: Ich bleibe dabei: Einkaufen in der Stadt ist Lebensqualität.
K: Ich bleibe bei meiner Meinung, dass Online-Shopping für Berufstätige praktischer ist. Aber wir sind uns zumindest einig, dass die Innenstädte lebendig bleiben sollten.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Teboka rehetra · Tâche accomplie" },
    { nom: "Interaktion", desc: "Mamaly, manontany · Interaction" },
    { nom: "Wortschatz", desc: "Voambolana B2" },
    { nom: "Strukturen", desc: "Grammaire B2" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "der Pfarrsaal", fr: "la salle paroissiale", mg: "efitrano fivoriana am-piangonana", ex: "Das Repair-Café findet im Pfarrsaal statt." },
    { de: "pensioniert", fr: "retraité", mg: "efa misotro ronono", ex: "Pensionierte Elektriker helfen mit." },
    { de: "die Sicherung", fr: "le fusible", mg: "fiarovana elektrika (fusible)", ex: "Oft ist nur eine Sicherung kaputt." },
    { de: "verklebt", fr: "collé", mg: "voafehy lakaoly", ex: "Die Teile sind verklebt statt verschraubt." },
    { de: "sich lohnen", fr: "valoir la peine", mg: "mendrika", ex: "Eine Reparatur lohnt sich kaum." },
    { de: "langlebig", fr: "durable (qui dure)", mg: "maharitra ela", ex: "Hersteller sollten langlebiger produzieren." },
    { de: "der Stammgast", fr: "l'habitué", mg: "mpanjifa mahazatra", ex: "Für Stammgäste ist es ein Treffpunkt." },
    { de: "der Liegewagen", fr: "la voiture-couchettes", mg: "vagona fatoriana", ex: "Die Liegewagen sind ausgebucht." },
    { de: "die Bergrettung", fr: "le secours en montagne", mg: "famonjena an-tendrombohitra", ex: "Die Bergrettung musste oft ausrücken." },
    { de: "heuer", fr: "cette année (AT)", mg: "amin'ity taona ity", ex: "Heuer fahren viele nicht ins Ausland." },
    { de: "bemängeln", fr: "critiquer, reprocher", mg: "manakiana", ex: "Kritiker bemängeln die Verbindungen." },
    { de: "die Siedlung", fr: "le lotissement", mg: "tanàna kely / vondron-trano", ex: "Kleine Siedlungen teilen einen Garten." },
    { de: "verschweigen", fr: "taire", mg: "manafina (tsy miteny)", ex: "Man sollte das Thema nicht verschweigen." },
    { de: "sich schämen", fr: "avoir honte", mg: "menatra", ex: "Viele schämen sich." },
    { de: "die Patenschaft", fr: "le parrainage", mg: "fiahiana / fanohanana", ex: "Patenschaften zwischen Jung und Alt." },
    { de: "der Installateur", fr: "le plombier-chauffagiste", mg: "mpanamboatra rano sy fanafanana", ex: "Ich schicke Ihnen einen Installateur." },
    { de: "die Mietminderung", fr: "la réduction de loyer", mg: "fihenan'ny hofan-trano", ex: "Eine Mietminderung ist möglich." },
    { de: "der Antrag", fr: "la demande (formelle)", mg: "fangatahana an-taratasy", ex: "Wir brauchen einen schriftlichen Antrag." },
    { de: "erstatten", fr: "rembourser", mg: "mamerina (vola)", ex: "Bitte erstatten Sie mir die Kosten." },
    { de: "die Vereinbarkeit", fr: "la conciliation", mg: "fampifanarahana", ex: "Vereinbarkeit von Familie und Beruf." },
    { de: "bündeln", fr: "regrouper", mg: "manangona", ex: "Man kann Bestellungen bündeln." },
    { de: "der Lauftreff", fr: "le groupe de course", mg: "vondrona mpihazakazaka", ex: "Treten Sie doch einem Lauftreff bei." }
  ]
});
})();
