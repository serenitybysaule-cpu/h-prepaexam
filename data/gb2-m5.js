/* Goethe-Zertifikat B2 — Modellsatz 5 — textes originaux H Conseil & Formation */
(function(){
window.POOLS.GB2.sets.push({
  id: "gb2m5", titre: "Modellsatz 5", theme: "Fifindra-monina · Kafe malagasy · AI · Fanomezana",
  lesen: { temps: 65, teile: [
    { id: "L1", nom: "Teil 1", type: "who", temps: 18,
      consigne: "Sie lesen in einem Forum, wie Menschen über das Leben im Ausland denken. Auf welche der vier Personen treffen die einzelnen Aussagen zu? Die Personen können mehrmals gewählt werden.",
      ctr: ["Forum sur la vie à l'étranger : à quelle personne (a–d) correspond chaque affirmation ? Plusieurs fois possible.", "Forum momba ny fiainana any ivelany: iza amin'ireo olona 4 no mifanaraka? Azo averina."],
      personnes: { a: "Andry", b: "Sophie", c: "Kemal", d: "Lucia" },
      texte: `<div class="ads">
<div class="ad"><span class="l">a</span><b>Andry:</b> Ich bin vor vier Jahren für eine Ausbildung als Mechatroniker aus Antananarivo nach Stuttgart gekommen. Das erste Jahr war hart: die Sprache, das Wetter, die Einsamkeit. Was mir geholfen hat, war mein Fußballverein. Heute habe ich eine feste Stelle, aber meine Familie vermisse ich jeden Tag. Zweimal im Jahr telefonieren wir nicht nur per Video, sondern ich fliege nach Hause.</div>
<div class="ad"><span class="l">b</span><b>Sophie:</b> Ich habe drei Jahre in Kanada gearbeitet und bin dann zurückgekommen. Erstaunlicherweise war die Rückkehr schwerer als der Weggang. Meine Freunde hatten ihr eigenes Leben weitergeführt, und ich fühlte mich in meiner eigenen Stadt fremd.</div>
<div class="ad"><span class="l">c</span><b>Kemal:</b> Meine Eltern kamen aus der Türkei, ich bin in Duisburg geboren. Ich habe also nie „im Ausland“ gelebt – und trotzdem werde ich oft gefragt, woher ich „wirklich“ komme. Das nervt. Vor zwei Jahren bin ich für einen Job nach Istanbul gezogen, und dort bin ich plötzlich „der Deutsche“.</div>
<div class="ad"><span class="l">d</span><b>Lucia:</b> Ich bin Ärztin und wollte schon immer im Ausland arbeiten. Zurzeit bin ich mit einer Hilfsorganisation in Madagaskar, in einem kleinen Krankenhaus im Süden. Die Arbeit ist anstrengend, aber ich lerne jeden Tag etwas Neues. Malagasy spreche ich leider erst ein bisschen – zum Glück übersetzen die Kollegen.</div></div>`,
      exemple: { q: "Wer ist für eine Ausbildung nach Deutschland gekommen?", a: "a" },
      items: [
        { n: 1, q: "Wer hatte Probleme, sich nach der Rückkehr wieder einzuleben?", tr: ["Qui a eu du mal à se réadapter après le retour ?", "Iza no sahirana nifanaraka indray rehefa niverina?"], a: "b", exp: { mg: "Sophie: « die Rückkehr schwerer als der Weggang ».", fr: "Sophie." } },
        { n: 2, q: "Wer wird in zwei Ländern als Ausländer gesehen?", tr: ["Qui est vu comme étranger dans deux pays ?", "Iza no heverina ho vahiny any amin'ny firenena roa?"], a: "c", exp: { mg: "Kemal: Alemaina sy Torkia.", fr: "Kemal." } },
        { n: 3, q: "Wer arbeitet im Gesundheitsbereich?", tr: ["Qui travaille dans la santé ?", "Iza no miasa amin'ny sehatry ny fahasalamana?"], a: "d", exp: { mg: "Lucia: dokotera.", fr: "Lucia." } },
        { n: 4, q: "Wer fand Halt durch Sport?", tr: ["Qui a trouvé un soutien grâce au sport ?", "Iza no nahita fanohanana tamin'ny fanatanjahantena?"], a: "a", exp: { mg: "Andry: klioban'ny baolina kitra.", fr: "Andry." } },
        { n: 5, q: "Wer hat Schwierigkeiten mit der Landessprache?", tr: ["Qui a des difficultés avec la langue du pays ?", "Iza no sahirana amin'ny fitenin'ny firenena?"], a: "d", exp: { mg: "Lucia: « Malagasy spreche ich leider erst ein bisschen ».", fr: "Lucia." } },
        { n: 6, q: "Wer reist regelmäßig zu seiner Familie?", tr: ["Qui rend régulièrement visite à sa famille ?", "Iza no mamangy ny fianakaviany tsy tapaka?"], a: "a", exp: { mg: "Andry: indroa isan-taona.", fr: "Andry." } },
        { n: 7, q: "Wer ärgert sich über eine bestimmte Frage?", tr: ["Qui est agacé par une certaine question ?", "Iza no tezitra amin'ny fanontaniana iray?"], a: "c", exp: { mg: "Kemal: « woher ich wirklich komme … Das nervt ».", fr: "Kemal." } },
        { n: 8, q: "Wer hatte schon lange den Wunsch, im Ausland zu arbeiten?", tr: ["Qui souhaitait depuis longtemps travailler à l'étranger ?", "Iza no naniry hatry ny ela hiasa any ivelany?"], a: "d", exp: { mg: "Lucia: « wollte schon immer ».", fr: "Lucia." } },
        { n: 9, q: "Für wen hatten sich die Freundschaften verändert?", tr: ["Pour qui les amitiés avaient-elles changé ?", "Ho an'iza no niova ny fifandraisana amin'ny namana?"], a: "b", exp: { mg: "Sophie: « Meine Freunde hatten ihr eigenes Leben weitergeführt ».", fr: "Sophie." } }
      ] },
    { id: "L2", nom: "Teil 2", type: "match", temps: 12, zero: false, gap: true,
      consigne: "Sie lesen in einer Zeitschrift einen Artikel über das Schenken. Welche Sätze passen in die Lücken? Zwei Sätze passen nicht.",
      ctr: ["Article sur l'art d'offrir : quelle phrase (a–h) va dans chaque trou ? Deux en trop.", "Lahatsoratra momba ny fanomezana: iza no fehezanteny mifanaraka? Roa tafahoatra."],
      texte: `<h3>Warum wir schenken</h3>
<p>Geburtstag, Weihnachten, Hochzeit – kaum ein Fest kommt ohne Geschenke aus. <span class="gap">[0]</span> Doch warum machen wir das eigentlich?</p>
<p>Forscher erklären, dass Geschenke Beziehungen stärken. <span class="gap">[10]</span> Wer etwas bekommt, fühlt sich verpflichtet, später etwas zurückzugeben – so entsteht ein Netz gegenseitiger Verbindungen.</p>
<p>Interessant ist, dass Schenken glücklicher macht als Beschenktwerden. <span class="gap">[11]</span> Bei den Teilnehmenden, die das Geld für andere ausgaben, war die Zufriedenheit deutlich höher.</p>
<p>Trotzdem gibt es viele Missverständnisse. <span class="gap">[12]</span> Die Beschenkten freuen sich dagegen oft mehr über praktische Dinge, die sie wirklich brauchen.</p>
<p>Auch kulturelle Unterschiede spielen eine Rolle. <span class="gap">[13]</span> In Madagaskar dagegen bringt man bei einem Besuch oft Lebensmittel mit, zum Beispiel Reis oder Obst.</p>
<p>Ein besonderes Thema sind Geldgeschenke. <span class="gap">[14]</span> Bei Hochzeiten ist es heute jedoch in vielen Ländern üblich, Geld in einem Umschlag zu geben.</p>
<p>Und was ist mit Geschenken, die man nicht mag? <span class="gap">[15]</span> Einer Umfrage zufolge gibt jeder Dritte unerwünschte Geschenke weiter.</p>`,
      choixTitre: "Sätze",
      choix: {
        a: "Allein in Deutschland geben die Menschen dafür jedes Jahr Milliarden Euro aus.",
        b: "Schon in frühen Gesellschaften war der Austausch von Gaben ein Zeichen von Vertrauen.",
        c: "In einem Experiment bekamen Menschen Geld, das sie entweder für sich oder für andere ausgeben sollten.",
        d: "Schenkende wählen oft etwas Überraschendes oder Originelles aus.",
        e: "In Japan zum Beispiel ist die Verpackung fast genauso wichtig wie das Geschenk selbst.",
        f: "Viele empfinden sie als unpersönlich, weil man sich keine Gedanken machen muss.",
        g: "Kinder bekommen in Deutschland zu Weihnachten durchschnittlich fünf Geschenke.",
        h: "Weiterverschenken ist längst kein Tabu mehr."
      },
      exemple: { q: "Lücke 0", a: "a" },
      items: [
        { n: 10, q: "Lücke 10", a: "b", exp: { mg: "Fifandraisana → fiarahamonina taloha, fitokisana.", fr: "Relations → échange de dons, confiance." } },
        { n: 11, q: "Lücke 11", a: "c", exp: { mg: "« Bei den Teilnehmenden » → andrana (Experiment).", fr: "« Teilnehmende » → expérience." } },
        { n: 12, q: "Lücke 12", a: "d", exp: { mg: "« Die Beschenkten … dagegen » → ny manome mifidy zavatra mahagaga.", fr: "Opposition donneur / receveur." } },
        { n: 13, q: "Lücke 13", a: "e", exp: { mg: "« In Madagaskar dagegen » → Japon ohatra hafa.", fr: "Japon vs Madagascar." } },
        { n: 14, q: "Lücke 14", a: "f", exp: { mg: "« jedoch … Geld in einem Umschlag » → heverina ho tsy manokana.", fr: "Jugé impersonnel ; pourtant courant." } },
        { n: 15, q: "Lücke 15", a: "h", exp: { mg: "« weitergeben » → tsy fady intsony. Ny g no tafahoatra.", fr: "Re-offrir n'est plus tabou. g est en trop." } }
      ] },
    { id: "L3", nom: "Teil 3", type: "mc", temps: 12,
      consigne: "Sie lesen in einer Zeitung einen Artikel über künstliche Intelligenz in der Schule. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
      ctr: ["Article sur l'intelligence artificielle à l'école. Choisissez la bonne réponse.", "Lahatsoratra momba ny faharanitan-tsaina artifisialy any an-tsekoly. Safidio ny valiny marina."],
      texte: `<div class="press"><h3>Hausaufgaben vom Chatbot?</h3>
<p>Seit Chatbots in Sekunden ganze Aufsätze schreiben können, stehen Schulen vor einer neuen Frage: Verbieten oder nutzen? Eine Umfrage unter Lehrkräften zeigt, dass mehr als die Hälfte schon Texte bekommen hat, die vermutlich von einer KI stammen.</p>
<p>Ein Verbot hält der Bildungsforscher Dr. Jan Hofer für wenig sinnvoll. „Die Schüler nutzen die Programme sowieso – zu Hause, wo niemand sie kontrolliert.“ Er plädiert dafür, die KI offen im Unterricht einzusetzen und den Jugendlichen zu zeigen, wo ihre Grenzen liegen. Chatbots erfinden zum Beispiel manchmal Fakten oder Quellen, die es gar nicht gibt.</p>
<p>An einem Gymnasium in Freiburg wird das bereits ausprobiert. Die Schüler lassen sich von einem Chatbot einen Text schreiben und müssen anschließend alle Fehler finden. „Dabei lernen sie mehr als beim Abschreiben aus einem Buch“, sagt die Deutschlehrerin Anna Krüger.</p>
<p>Allerdings verändert sich auch die Art, wie Leistungen bewertet werden. Statt Hausaufsätzen schreiben die Schüler in Freiburg mehr Texte im Unterricht, und mündliche Prüfungen gewinnen an Bedeutung. Krüger gibt zu, dass das für die Lehrkräfte mehr Arbeit bedeutet.</p></div>`,
      items: [
        { n: 16, q: "Laut Umfrage haben viele Lehrkräfte …", tr: ["Selon le sondage, beaucoup d'enseignants…", "Araka ny fanadihadiana, mpampianatra maro no…"], opts: ["KI-Texte von Schülern bekommen.", "selbst Chatbots verboten.", "nie von Chatbots gehört."], otr: [["ont reçu des textes écrits par une IA", "nahazo lahatsoratra vitan'ny AI"], ["ont interdit les chatbots", "nandrara chatbot"], ["n'en ont jamais entendu parler", "tsy mbola nandre"]], a: "a", exp: { mg: "« Texte bekommen, die vermutlich von einer KI stammen ».", fr: "Textes probablement générés." } },
        { n: 17, q: "Dr. Hofer ist gegen ein Verbot, weil …", tr: ["Le Dr Hofer est contre une interdiction parce que…", "Manohitra ny fandrarana ny Dr. Hofer satria…"], opts: ["Schüler die KI trotzdem zu Hause nutzen.", "KI immer richtige Antworten gibt.", "Lehrer die KI brauchen."], otr: [["les élèves l'utilisent quand même chez eux", "mampiasa azy any an-trano ihany ny mpianatra"], ["l'IA répond toujours juste", "marina foana"], ["les profs en ont besoin", "ilain'ny mpampianatra"]], a: "a", exp: { mg: "« Die Schüler nutzen die Programme sowieso ».", fr: "Ils l'utilisent de toute façon." } },
        { n: 18, q: "Ein Problem von Chatbots ist, dass sie …", tr: ["Un problème des chatbots est qu'ils…", "Olana iray amin'ny chatbot dia…"], opts: ["zu langsam sind.", "manchmal Informationen erfinden.", "nur Englisch können."], otr: [["sont trop lents", "miadana loatra"], ["inventent parfois des informations", "mamorona vaovao indraindray"], ["ne parlent qu'anglais", "anglisy ihany"]], a: "b", exp: { mg: "« erfinden … Fakten oder Quellen ».", fr: "Ils inventent parfois." } },
        { n: 19, q: "In Freiburg müssen die Schüler …", tr: ["À Fribourg, les élèves doivent…", "Any Freiburg ny mpianatra dia tsy maintsy…"], opts: ["Fehler in KI-Texten finden.", "Texte aus Büchern abschreiben.", "Chatbots programmieren."], otr: [["trouver les erreurs dans les textes d'IA", "mitady hadisoana"], ["recopier des livres", "mandika boky"], ["programmer des chatbots", "manao programa"]], a: "a", exp: { mg: "« müssen … alle Fehler finden ».", fr: "Trouver les erreurs." } },
        { n: 20, q: "Wie verändern sich die Prüfungen?", tr: ["Comment les examens changent-ils ?", "Ahoana no fiovan'ny fanadinana?"], opts: ["Es gibt mehr Hausaufsätze.", "Mündliche Prüfungen werden wichtiger.", "Es gibt keine Noten mehr."], otr: [["plus de rédactions à la maison", "asa an-trano bebe kokoa"], ["l'oral devient plus important", "lasa zava-dehibe kokoa ny am-bava"], ["plus de notes", "tsy misy naoty intsony"]], a: "b", exp: { mg: "« mündliche Prüfungen gewinnen an Bedeutung ».", fr: "Plus d'oral." } },
        { n: 21, q: "Frau Krüger gibt zu, dass …", tr: ["Mme Krüger admet que…", "Ekena-dRtoa Krüger fa…"], opts: ["die Methode nicht funktioniert.", "Lehrkräfte mehr arbeiten müssen.", "Schüler weniger lernen."], otr: [["la méthode ne marche pas", "tsy mandeha"], ["les profs travaillent plus", "miasa bebe kokoa ny mpampianatra"], ["les élèves apprennent moins", "mianatra kely kokoa"]], a: "b", exp: { mg: "« mehr Arbeit bedeutet ».", fr: "Plus de travail." } }
      ] },
    { id: "L4", nom: "Teil 4", type: "match", temps: 12, zero: false, layout: "choixFirst",
      consigne: "Sie lesen in einer Zeitschrift Meinungsäußerungen zum Thema „Sollte Kaffee fair gehandelt werden?“. Welche Äußerung passt zu welcher Überschrift? Eine Äußerung passt nicht. Die Äußerung a ist das Beispiel und kann nicht noch einmal verwendet werden.",
      ctr: ["Opinions sur le café équitable : quelle opinion (b–h) pour chaque titre ? Une en trop ; a = exemple.", "Hevitra momba ny kafe varotra ara-drariny: iza no mifanaraka? Iray tafahoatra; a no ohatra."],
      choixTitre: "Äußerungen",
      choix: {
        a: "<b>Haja, Leipzig:</b> Meine Familie baut in Madagaskar Kaffee an. Seit sie in einer Fair-Trade-Kooperative ist, können meine Geschwister zur Schule gehen.",
        b: "<b>Monika, Kiel:</b> Ich würde gern fair kaufen, aber mit meiner kleinen Rente ist das einfach nicht drin.",
        c: "<b>Florian, Augsburg:</b> Es gibt so viele Siegel, dass niemand mehr durchblickt. Ich weiß nie, welchem ich trauen kann.",
        d: "<b>Sevgi, Bielefeld:</b> In unserer Firma gibt es nur noch fairen Kaffee. Das war die Idee der Mitarbeiter, und der Chef war sofort einverstanden.",
        e: "<b>Uli, Erfurt:</b> Ich habe gelesen, dass vom höheren Preis oft nur wenige Cent bei den Bauern ankommen. Der Rest bleibt beim Handel.",
        f: "<b>Karin, Trier:</b> Fair heißt für mich auch: weniger trinken, dafür besser. Ich trinke nur noch zwei Tassen am Tag – aber guten Kaffee.",
        g: "<b>Bernd, Dortmund:</b> Kaffee schmeckt mir am besten aus Brasilien. Woher genau er kommt, ist mir eigentlich egal.",
        h: "<b>Nadine, Wiesbaden:</b> Die Politik sollte Mindeststandards für alle Importe festlegen. Dann bräuchte man kein besonderes Siegel."
      },
      exemple: { q: "Bessere Chancen für Kinder in Anbauländern", a: "a" },
      items: [
        { n: 22, q: "Zu teuer für kleine Einkommen", tr: ["Trop cher pour les petits revenus", "Lafo loatra ho an'ny karama kely"], a: "b", exp: { mg: "Monika: fisotroan-dronono kely.", fr: "Monika." } },
        { n: 23, q: "Verwirrung durch zu viele Labels", tr: ["Confusion due aux nombreux labels", "Fifangaroan-tsaina noho ny marika be loatra"], a: "c", exp: { mg: "Florian: « so viele Siegel ».", fr: "Florian." } },
        { n: 24, q: "Ein Beispiel aus der Arbeitswelt", tr: ["Un exemple du monde du travail", "Ohatra avy amin'ny tontolon'ny asa"], a: "d", exp: { mg: "Sevgi: ao amin'ny orinasa.", fr: "Sevgi." } },
        { n: 25, q: "Zweifel, ob das Geld ankommt", tr: ["Doute sur l'arrivée de l'argent", "Ahiahy raha tonga ny vola"], a: "e", exp: { mg: "Uli: « nur wenige Cent bei den Bauern ».", fr: "Uli." } },
        { n: 26, q: "Qualität statt Menge", tr: ["Qualité plutôt que quantité", "Kalitao fa tsy habetsahana"], a: "f", exp: { mg: "Karin: « weniger trinken, dafür besser ».", fr: "Karin." } },
        { n: 27, q: "Gesetze statt freiwilliger Siegel", tr: ["Des lois plutôt que des labels volontaires", "Lalàna fa tsy marika an-tsitrapo"], a: "h", exp: { mg: "Nadine: « Mindeststandards ». Ny g no tafahoatra.", fr: "Nadine. g est en trop." } }
      ] },
    { id: "L5", nom: "Teil 5", type: "match", temps: 6, zero: false, layout: "choixFirst",
      consigne: "Sie möchten sich bei einem Fitnessstudio anmelden und lesen die Vertragsbedingungen. Welche Überschriften passen zu den Paragrafen? Vier Überschriften werden nicht gebraucht.",
      ctr: ["Conditions d'une salle de sport : quel titre (a–h) pour chaque paragraphe ? Quatre en trop.", "Fepetran'ny toerana fanatanjahantena: iza no lohateny mifanaraka? Efatra tafahoatra."],
      choixTitre: "Inhaltsverzeichnis",
      choix: { a: "Vertragsdauer", b: "Pausieren der Mitgliedschaft", c: "Öffnungszeiten", d: "Haftung für Wertsachen", e: "Probetraining", f: "Mitgliedsbeitrag", g: "Kurse", h: "Hygiene" },
      texte: `<div class="rules">
<p><b>§ 0</b> Der Vertrag läuft zunächst zwölf Monate. Danach verlängert er sich automatisch um jeweils einen Monat, wenn er nicht gekündigt wird.</p>
<p><b>§ 28</b> Bei Krankheit, Schwangerschaft oder einem längeren Auslandsaufenthalt kann die Mitgliedschaft bis zu drei Monate unterbrochen werden. Ein Nachweis ist erforderlich.</p>
<p><b>§ 29</b> Für Gegenstände, die in den Umkleiden oder auf der Trainingsfläche verloren gehen, übernimmt das Studio keine Verantwortung. Bitte nutzen Sie die Schließfächer.</p>
<p><b>§ 30</b> Bitte legen Sie beim Training immer ein Handtuch unter. Geräte sind nach der Benutzung mit dem bereitgestellten Spray zu reinigen.</p></div>`,
      exemple: { q: "§ 0", a: "a" },
      items: [
        { n: 28, q: "§ 28", a: "b", exp: { mg: "Afaka atsahatra vonjimaika ny maha-mpikambana.", fr: "Mise en pause." } },
        { n: 29, q: "§ 29", a: "d", exp: { mg: "Tsy tompon'andraikitra amin'ny entana very.", fr: "Objets de valeur." } },
        { n: 30, q: "§ 30", a: "h", exp: { mg: "Servieta, fanadiovana fitaovana.", fr: "Hygiène." } }
      ] }
  ] },

  hoeren: { temps: 40, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 1, type: "mixed",
      consigne: "Sie hören fünf Gespräche und Äußerungen. Sie hören jeden Text einmal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
      clips: [
        { id: "gb2m5-h1-1", titre: "Text 1", script: [{ s: "f", n: "Frau", t: "Wir haben unsere Hochzeit ganz klein gefeiert, nur mit zwanzig Gästen. Das Geld, das wir gespart haben, haben wir in eine Reise nach Madagaskar investiert. Für uns war das viel wertvoller als ein großes Fest mit Leuten, die wir kaum kennen." }],
          items: [
            { n: 1, type: "rf", q: "Die Frau spricht über eine Feier.", tr: ["La femme parle d'une fête.", "Miresaka momba ny fety ilay vehivavy."], a: "r", exp: { mg: "Ny mariaziny.", fr: "Son mariage." } },
            { n: 2, type: "mc", q: "Wofür hat das Paar das Geld verwendet?", tr: ["À quoi le couple a-t-il utilisé l'argent ?", "Inona no nampiasan'ny mpivady ny vola?"], opts: ["Für eine Reise.", "Für eine Wohnung.", "Für ein großes Fest."], otr: [["pour un voyage", "dia"], ["pour un appartement", "trano"], ["pour une grande fête", "fety lehibe"]], a: "a", exp: { mg: "« in eine Reise nach Madagaskar investiert ».", fr: "Un voyage." } }
          ] },
        { id: "gb2m5-h1-2", titre: "Text 2", script: [{ s: "m", n: "Radio", t: "Die Deutsche Bahn testet in Hamburg einen neuen Service: Fahrgäste können ihr Gepäck zu Hause abholen und direkt ins Hotel am Zielort bringen lassen. Der Service kostet pro Koffer fünfzehn Euro und muss drei Tage vorher gebucht werden." }],
          items: [
            { n: 3, type: "rf", q: "Der Gepäckservice ist kostenlos.", tr: ["Le service bagages est gratuit.", "Maimaim-poana ny fitaterana entana."], a: "f", exp: { mg: "15 € isaky ny valizy.", fr: "15 € par valise." } },
            { n: 4, type: "mc", q: "Was muss man beachten?", tr: ["À quoi faut-il faire attention ?", "Inona no tokony hotandremana?"], opts: ["Man muss früh genug buchen.", "Man darf nur einen Koffer mitnehmen.", "Der Service gilt nur in Hamburg."], otr: [["réserver assez tôt", "mamandrika mialoha"], ["une seule valise", "valizy iray ihany"], ["seulement à Hambourg", "Hamburg ihany"]], a: "a", exp: { mg: "« drei Tage vorher gebucht ».", fr: "Réserver 3 jours avant." } }
          ] },
        { id: "gb2m5-h1-3", titre: "Text 3", script: [{ s: "m", n: "Mann", t: "Hast du die Wohnung in der Südstadt genommen?" }, { s: "f", n: "Frau", t: "Nein. Sie war schön und hell, aber die Vermieterin wollte drei Monatsmieten Kaution und eine Bürgschaft von meinen Eltern. Das war mir zu viel." }, { s: "m", n: "Mann", t: "Verstehe. Und jetzt?" }, { s: "f", n: "Frau", t: "Ich ziehe erst mal in eine WG. Das ist billiger, und ich lerne schneller Leute kennen." }],
          items: [
            { n: 5, type: "rf", q: "Die Frau hat die Wohnung nicht genommen.", tr: ["La femme n'a pas pris l'appartement.", "Tsy noraisin'ilay vehivavy ny trano."], a: "r", exp: { mg: "« Nein … Das war mir zu viel ».", fr: "Oui, elle a refusé." } },
            { n: 6, type: "mc", q: "Warum hat sie sich gegen die Wohnung entschieden?", tr: ["Pourquoi a-t-elle refusé ?", "Nahoana izy no nandà?"], opts: ["Wegen der Bedingungen der Vermieterin.", "Weil die Wohnung zu dunkel war.", "Weil sie zu weit weg war."], otr: [["à cause des conditions de la propriétaire", "noho ny fepetran'ny tompon-trano"], ["trop sombre", "maizina loatra"], ["trop loin", "lavitra loatra"]], a: "a", exp: { mg: "Kaution be sy Bürgschaft.", fr: "Caution et garantie exigées." } }
          ] },
        { id: "gb2m5-h1-4", titre: "Text 4", script: [{ s: "f", n: "Frau", t: "Ich bin vor einem Jahr aus allen sozialen Netzwerken ausgestiegen. Am Anfang hatte ich Angst, Freunde zu verlieren. Aber die wichtigen Menschen melden sich trotzdem – per Telefon oder Nachricht. Ich habe jetzt viel mehr Zeit zum Lesen." }],
          items: [
            { n: 7, type: "rf", q: "Die Frau nutzt keine sozialen Netzwerke mehr.", tr: ["La femme n'utilise plus les réseaux sociaux.", "Tsy mampiasa tambajotra sosialy intsony ilay vehivavy."], a: "r", exp: { mg: "« aus allen sozialen Netzwerken ausgestiegen ».", fr: "Oui." } },
            { n: 8, type: "mc", q: "Was hat sie festgestellt?", tr: ["Qu'a-t-elle constaté ?", "Inona no hitany?"], opts: ["Wichtige Freunde bleiben in Kontakt.", "Sie hat viele Freunde verloren.", "Sie langweilt sich oft."], otr: [["les amis importants restent en contact", "mifandray foana ny namana manan-danja"], ["elle a perdu beaucoup d'amis", "very namana maro"], ["elle s'ennuie souvent", "leo matetika"]], a: "a", exp: { mg: "« die wichtigen Menschen melden sich trotzdem ».", fr: "Les proches restent." } }
          ] },
        { id: "gb2m5-h1-5", titre: "Text 5", script: [{ s: "m", n: "Radio", t: "Gute Nachricht für Studierende: Ab dem Wintersemester bekommen Erstsemester in unserer Stadt ein kostenloses Ticket für Bus und Bahn – allerdings nur, wenn sie hier ihren Hauptwohnsitz anmelden." }],
          items: [
            { n: 9, type: "rf", q: "Alle Studierenden bekommen ein Gratis-Ticket.", tr: ["Tous les étudiants reçoivent un billet gratuit.", "Mahazo tapakila maimaim-poana ny mpianatra rehetra."], a: "f", exp: { mg: "Erstsemester ihany (mpianatra taona voalohany).", fr: "Seulement les premières années." } },
            { n: 10, type: "mc", q: "Welche Bedingung gibt es?", tr: ["Quelle est la condition ?", "Inona no fepetra?"], opts: ["Man muss in der Stadt gemeldet sein.", "Man muss ein Auto haben.", "Man muss gute Noten haben."], otr: [["être domicilié dans la ville", "voasoratra ho mponina ao an-tanàna"], ["avoir une voiture", "manana fiara"], ["avoir de bonnes notes", "naoty tsara"]], a: "a", exp: { mg: "« Hauptwohnsitz anmelden ».", fr: "Résidence principale déclarée." } }
          ] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 2, type: "mc", lecture: 90,
      consigne: "Sie hören im Radio ein Interview mit einem Kaffeeröster. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie jetzt die Aufgaben 11 bis 16. Dazu haben Sie 90 Sekunden Zeit.",
      ctr: ["Interview radio avec un torréfacteur, deux écoutes. Questions 11 à 16.", "Resadresaka amin'ny mpanendy kafe, henoina indroa."],
      clips: [{ id: "gb2m5-h2", titre: "Interview", script: [
        { s: "f", n: "Moderatorin", t: "Herr Rakotonirina, Sie betreiben in Dresden eine kleine Kaffeerösterei und verkaufen ausschließlich Kaffee aus Madagaskar. Warum?" },
        { s: "m", n: "Herr Rakotonirina", t: "Madagassischer Kaffee ist in Europa kaum bekannt, obwohl er hervorragend ist. Ich bin im Hochland bei Ambositra aufgewachsen, mein Onkel hat Kaffee angebaut. Ich wollte zeigen, dass Madagaskar nicht nur Vanille hat." },
        { s: "m", n: "Herr Rakotonirina", t: "Allerdings war ich zuerst Ingenieur. Erst mit vierzig habe ich gekündigt und einen Kurs als Röster gemacht." },
        { s: "f", n: "Moderatorin", t: "Wie arbeiten Sie mit den Bauern zusammen?" },
        { s: "m", n: "Herr Rakotonirina", t: "Ich kaufe direkt bei drei Kooperativen, ohne Zwischenhändler. Ich zahle ungefähr doppelt so viel wie der Weltmarktpreis. Dafür erwarte ich hohe Qualität: Die Bohnen müssen von Hand gepflückt und sorgfältig sortiert werden." },
        { s: "f", n: "Moderatorin", t: "Ihre Kunden sind bereit, mehr zu bezahlen?" },
        { s: "m", n: "Herr Rakotonirina", t: "Viele schon. Sie wollen wissen, woher ihr Kaffee kommt. Ich lade deshalb regelmäßig zu Verkostungen ein und zeige Fotos und Videos von den Plantagen. Wenn die Menschen die Gesichter der Bauern sehen, verändert sich ihre Haltung." },
        { s: "f", n: "Moderatorin", t: "Was ist Ihre größte Sorge?" },
        { s: "m", n: "Herr Rakotonirina", t: "Der Klimawandel. Es regnet im Hochland unregelmäßiger, und die Ernte wird schwerer planbar. Wir unterstützen deshalb ein Projekt, bei dem zwischen den Kaffeepflanzen Schattenbäume gepflanzt werden." }],
        items: [
          { n: 11, q: "Herr Rakotonirina verkauft Kaffee aus Madagaskar, weil …", tr: ["Il vend du café de Madagascar parce que…", "Mivarotra kafe malagasy izy satria…"], opts: ["er bekannter machen möchte, wie gut dieser Kaffee ist.", "er billiger ist als anderer Kaffee.", "Vanille zu teuer geworden ist."], otr: [["il veut faire connaître sa qualité", "te hampahafantatra ny kalitaony"], ["il est moins cher", "mora kokoa"], ["la vanille est devenue trop chère", "lafo loatra ny lavanila"]], a: "a", exp: { mg: "« kaum bekannt, obwohl er hervorragend ist ».", fr: "Faire connaître sa qualité." } },
          { n: 12, q: "Vor seiner Arbeit als Röster war er …", tr: ["Avant d'être torréfacteur, il était…", "Talohan'ny nanendy kafe izy dia…"], opts: ["Kaffeebauer.", "Ingenieur.", "Koch."], otr: [["planteur de café", "mpamboly kafe"], ["ingénieur", "injeniera"], ["cuisinier", "mpahandro"]], a: "b", exp: { mg: "« zuerst Ingenieur ».", fr: "Ingénieur." } },
          { n: 13, q: "Bei den Kooperativen …", tr: ["Avec les coopératives…", "Amin'ny kaoperativa…"], opts: ["kauft er über Zwischenhändler.", "zahlt er etwa den doppelten Weltmarktpreis.", "kauft er nur einmal im Jahr."], otr: [["via des intermédiaires", "amin'ny mpanelanelana"], ["il paie environ le double du prix mondial", "avo roa heny ny vidiny"], ["une fois par an seulement", "indray mandeha isan-taona"]], a: "b", exp: { mg: "« doppelt so viel wie der Weltmarktpreis ».", fr: "Le double du prix mondial." } },
          { n: 14, q: "Von den Bauern erwartet er …", tr: ["Des agriculteurs, il attend…", "Andrasany amin'ny tantsaha…"], opts: ["große Mengen.", "sorgfältige Handarbeit.", "Bio-Zertifikate."], otr: [["de grandes quantités", "habetsahana"], ["un travail manuel soigné", "asa tanana voakarakara"], ["des certificats bio", "taratasy bio"]], a: "b", exp: { mg: "« von Hand gepflückt und sorgfältig sortiert ».", fr: "Cueillette et tri à la main." } },
          { n: 15, q: "Seine Kunden ändern ihre Einstellung, wenn sie …", tr: ["Ses clients changent d'attitude quand ils…", "Miova ny fihevitry ny mpanjifany rehefa…"], opts: ["die Bauern auf Bildern sehen.", "einen Rabatt bekommen.", "nach Madagaskar reisen."], otr: [["voient les agriculteurs en images", "mahita ny tantsaha amin'ny sary"], ["reçoivent une réduction", "mahazo fihenam-bidy"], ["voyagent à Madagascar", "mankany Madagasikara"]], a: "a", exp: { mg: "« die Gesichter der Bauern sehen ».", fr: "Voir les visages des producteurs." } },
          { n: 16, q: "Gegen die Folgen des Klimawandels …", tr: ["Contre les effets du changement climatique…", "Hiatrehana ny fiovan'ny toetr'andro…"], opts: ["werden Bäume gepflanzt.", "wird mehr bewässert.", "wird der Kaffee woanders angebaut."], otr: [["on plante des arbres", "mamboly hazo"], ["on irrigue plus", "manondraka bebe kokoa"], ["on cultive ailleurs", "mamboly any an-kafa"]], a: "a", exp: { mg: "« Schattenbäume gepflanzt ».", fr: "Arbres d'ombrage." } }
        ] }] },
    { id: "H3", nom: "Teil 3", ecoutes: 1, type: "who", lecture: 60,
      consigne: "Sie hören im Radio ein Gespräch mit mehreren Personen. Die Personen sprechen über ältere Arbeitnehmer. Sie hören den Text einmal. Wählen Sie bei jeder Aufgabe: Wer sagt das?",
      ctr: ["Discussion radio sur les travailleurs âgés, une écoute : qui dit quoi ?", "Adihevitra momba ny mpiasa efa zokiolona, henoina indray mandeha: iza no niteny?"],
      personnes: { a: "Moderator", b: "Frau Schreiber, Personalchefin", c: "Herr Hahn, 61, Ingenieur" },
      exemple: { q: "In Deutschland arbeiten immer mehr Menschen über 60.", a: "a" },
      clips: [{ id: "gb2m5-h3", titre: "Gespräch", script: [
        { s: "m", n: "Moderator", t: "In Deutschland arbeiten immer mehr Menschen über 60. Bei mir sind Frau Schreiber, Personalchefin eines Maschinenbauunternehmens, und Herr Hahn, 61, Ingenieur. Herr Hahn, wie erleben Sie Ihren Arbeitsalltag?" },
        { s: "m2", n: "Herr Hahn", t: "Ich arbeite gern, aber körperlich merke ich das Alter. Lange Dienstreisen strengen mich heute mehr an als früher. Dafür habe ich viel Erfahrung – ich sehe Probleme oft, bevor sie entstehen." },
        { s: "f", n: "Frau Schreiber", t: "Genau das schätzen wir. Ältere Mitarbeiter haben ein Wissen, das in keinem Handbuch steht. Wir lassen sie deshalb jüngere Kollegen als Mentoren begleiten." },
        { s: "m", n: "Moderator", t: "Gibt es auch Konflikte zwischen den Generationen?" },
        { s: "m2", n: "Herr Hahn", t: "Manchmal. Die Jungen wollen alles digital machen, wir sind oft vorsichtiger. Aber ehrlich gesagt habe ich von ihnen viel über neue Programme gelernt." },
        { s: "f", n: "Frau Schreiber", t: "Wir bieten flexible Modelle an, zum Beispiel weniger Stunden ab 60, ohne dass die Rente darunter leidet." },
        { s: "m", n: "Moderator", t: "Nutzen Sie das, Herr Hahn?" },
        { s: "m2", n: "Herr Hahn", t: "Ab nächstem Jahr arbeite ich nur noch vier Tage. Ganz aufhören möchte ich aber noch nicht – ohne Arbeit würde mir etwas fehlen." },
        { s: "f", n: "Frau Schreiber", t: "Und wir sind froh darüber. Der Fachkräftemangel ist bei uns ein echtes Problem." }],
        items: [
          { n: 17, q: "Reisen sind heute anstrengender als früher.", tr: ["Les voyages sont plus fatigants qu'avant.", "Mandreraka kokoa noho ny taloha ny dia."], a: "c", exp: { mg: "Hahn: « Dienstreisen strengen mich … mehr an ».", fr: "Herr Hahn." } },
          { n: 18, q: "Erfahrene Mitarbeiter geben ihr Wissen an Jüngere weiter.", tr: ["Les employés expérimentés transmettent leur savoir.", "Ampitain'ny mpiasa za-draharaha amin'ny tanora ny fahalalany."], a: "b", exp: { mg: "Schreiber: « als Mentoren ».", fr: "Frau Schreiber." } },
          { n: 19, q: "Auch Ältere lernen von Jüngeren.", tr: ["Les plus âgés apprennent aussi des jeunes.", "Mianatra amin'ny tanora koa ny zokiolona."], a: "c", exp: { mg: "Hahn: « viel über neue Programme gelernt ».", fr: "Herr Hahn." } },
          { n: 20, q: "Es gibt Angebote für eine reduzierte Arbeitszeit.", tr: ["Il existe des offres de temps de travail réduit.", "Misy tolotra fampihenana ora fiasana."], a: "b", exp: { mg: "Schreiber: « weniger Stunden ab 60 ».", fr: "Frau Schreiber." } },
          { n: 21, q: "Arbeit gehört zum Lebensinhalt.", tr: ["Le travail fait partie du sens de la vie.", "Ampahany amin'ny fiainana ny asa."], a: "c", exp: { mg: "Hahn: « ohne Arbeit würde mir etwas fehlen ».", fr: "Herr Hahn." } },
          { n: 22, q: "Es fehlen qualifizierte Arbeitskräfte.", tr: ["Il manque de main-d'œuvre qualifiée.", "Tsy ampy ny mpiasa mahay."], a: "b", exp: { mg: "Schreiber: « Fachkräftemangel ».", fr: "Frau Schreiber." } }
        ] }] },
    { id: "H4", nom: "Teil 4", ecoutes: 2, type: "mc", lecture: 90,
      consigne: "Sie hören einen kurzen Vortrag. Der Redner spricht über das Thema „Migration und Heimweh“. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie jetzt die Aufgaben 23 bis 30. Dazu haben Sie 90 Sekunden Zeit.",
      ctr: ["Court exposé sur la migration et le mal du pays, deux écoutes. Questions 23 à 30.", "Kabary fohy momba ny fifindra-monina sy ny fanirian-tanindrazana, henoina indroa."],
      clips: [{ id: "gb2m5-h4", titre: "Vortrag", script: [
        { s: "m", n: "Redner", t: "Guten Abend. Heimweh – fast jeder, der seine Heimat verlassen hat, kennt dieses Gefühl. Heute möchte ich erklären, was die Psychologie darüber weiß und was man dagegen tun kann." },
        { s: "m", n: "Redner", t: "Früher galt Heimweh als Krankheit. Im 17. Jahrhundert beschrieb ein Schweizer Arzt es bei Soldaten, die fern von ihren Bergen lebten. Heute sieht man es als normale Reaktion auf den Verlust von Vertrautem." },
        { s: "m", n: "Redner", t: "Interessant ist, dass Heimweh oft nicht sofort kommt. In den ersten Wochen sind viele Menschen neugierig und begeistert. Erst nach einigen Monaten, wenn der Alltag beginnt, wird das Gefühl stärker." },
        { s: "m", n: "Redner", t: "Besonders stark wird Heimweh durch Sinne ausgelöst: ein Geruch, ein Lied, ein bestimmtes Gericht. Viele Migrantinnen und Migranten kochen deshalb die Gerichte ihrer Kindheit – das hilft mehr, als man denkt." },
        { s: "m", n: "Redner", t: "Die modernen Kommunikationsmittel haben zwei Seiten. Einerseits können wir täglich mit der Familie sprechen. Andererseits zeigen Studien, dass zu häufiger Kontakt die Eingewöhnung verlangsamen kann, weil man gedanklich nie ganz ankommt." },
        { s: "m", n: "Redner", t: "Was hilft also? Am wichtigsten sind neue soziale Kontakte vor Ort – ein Verein, eine Gemeinde, Kollegen. Außerdem hilft es, kleine Rituale aus der Heimat beizubehalten und gleichzeitig neue zu entwickeln." },
        { s: "m", n: "Redner", t: "Und zum Schluss: Heimweh ist kein Zeichen von Schwäche, sondern zeigt, wie wichtig uns unsere Wurzeln sind. Vielen Dank." }],
        items: [
          { n: 23, q: "Im 17. Jahrhundert wurde Heimweh …", tr: ["Au XVIIe siècle, le mal du pays était…", "Tamin'ny taonjato faha-17 ny fanirian-tanindrazana dia…"], opts: ["als Krankheit beschrieben.", "nur bei Kindern beobachtet.", "nicht ernst genommen."], otr: [["décrit comme une maladie", "noheverina ho aretina"], ["observé chez les enfants seulement", "tamin'ny ankizy ihany"], ["pas pris au sérieux", "tsy noraisina ho zava-dehibe"]], a: "a", exp: { mg: "« Früher galt Heimweh als Krankheit ».", fr: "Une maladie." } },
          { n: 24, q: "Heute sieht man Heimweh als …", tr: ["Aujourd'hui, on voit le mal du pays comme…", "Ankehitriny dia heverina ho…"], opts: ["psychische Störung.", "normale Reaktion.", "Problem von Soldaten."], otr: [["un trouble psychique", "aretin-tsaina"], ["une réaction normale", "fihetsika ara-dalàna"], ["un problème de soldats", "olan'ny miaramila"]], a: "b", exp: { mg: "« normale Reaktion ».", fr: "Une réaction normale." } },
          { n: 25, q: "Heimweh wird oft stärker, wenn …", tr: ["Le mal du pays se renforce souvent quand…", "Mihamafy matetika rehefa…"], opts: ["man gerade angekommen ist.", "der Alltag beginnt.", "man Urlaub macht."], otr: [["on vient d'arriver", "vao tonga"], ["le quotidien commence", "manomboka ny fiainana andavanandro"], ["on part en vacances", "mialy sasatra"]], a: "b", exp: { mg: "« Erst nach einigen Monaten, wenn der Alltag beginnt ».", fr: "Quand le quotidien commence." } },
          { n: 26, q: "Heimweh wird besonders ausgelöst durch …", tr: ["Le mal du pays est surtout déclenché par…", "Miteraka fanirian-tanindrazana indrindra ny…"], opts: ["Sinneseindrücke wie Gerüche.", "Briefe.", "das Wetter."], otr: [["des impressions sensorielles", "fofona, hira…"], ["des lettres", "taratasy"], ["la météo", "toetr'andro"]], a: "a", exp: { mg: "« Geruch, Lied, Gericht ».", fr: "Odeur, chanson, plat." } },
          { n: 27, q: "Gerichte aus der Kindheit zu kochen …", tr: ["Cuisiner les plats de l'enfance…", "Mahandro ny sakafon'ny fahazazana…"], opts: ["verstärkt das Heimweh.", "hilft gegen Heimweh.", "ist im Ausland schwierig."], otr: [["renforce le mal du pays", "mampitombo"], ["aide contre le mal du pays", "manampy"], ["est difficile à l'étranger", "sarotra any ivelany"]], a: "b", exp: { mg: "« das hilft mehr, als man denkt ».", fr: "Ça aide." } },
          { n: 28, q: "Zu häufiger Kontakt mit der Familie kann …", tr: ["Un contact trop fréquent avec la famille peut…", "Ny fifandraisana matetika loatra amin'ny fianakaviana dia mety…"], opts: ["die Eingewöhnung verzögern.", "Heimweh sofort heilen.", "teuer sein."], otr: [["retarder l'adaptation", "manemotra ny fahazarana"], ["guérir tout de suite", "manasitrana avy hatrany"], ["coûter cher", "lafo"]], a: "a", exp: { mg: "« die Eingewöhnung verlangsamen ».", fr: "Ralentir l'adaptation." } },
          { n: 29, q: "Am wichtigsten gegen Heimweh sind …", tr: ["Le plus important contre le mal du pays, ce sont…", "Ny tena zava-dehibe hiadiana amin'izany dia…"], opts: ["regelmäßige Heimreisen.", "neue Kontakte vor Ort.", "Sprachkurse."], otr: [["des voyages réguliers au pays", "fiverenana matetika"], ["de nouveaux contacts sur place", "namana vaovao eo an-toerana"], ["des cours de langue", "fampianarana fiteny"]], a: "b", exp: { mg: "« neue soziale Kontakte vor Ort ».", fr: "Nouveaux contacts." } },
          { n: 30, q: "Zum Schluss sagt der Redner, dass Heimweh …", tr: ["En conclusion, l'orateur dit que le mal du pays…", "Amin'ny famaranana dia lazainy fa…"], opts: ["ein Zeichen von Schwäche ist.", "die Bedeutung der Wurzeln zeigt.", "nach einem Jahr verschwindet."], otr: [["est un signe de faiblesse", "famantarana fahalemena"], ["montre l'importance des racines", "maneho ny maha-zava-dehibe ny fototra"], ["disparaît après un an", "manjavona aorian'ny herintaona"]], a: "b", exp: { mg: "« wie wichtig uns unsere Wurzeln sind ».", fr: "L'importance des racines." } }
        ] }] }
  ] },

  schreiben: { temps: 75, aufgaben: [
    { id: "S1", nom: "Teil 1", temps: 50, mots: 150, points: 50, type: "Forumsbeitrag",
      consigne: `<p>Sie schreiben einen Forumsbeitrag zum Thema „Künstliche Intelligenz im Alltag“.</p><ul><li>Äußern Sie Ihre Meinung zur Nutzung von KI im Alltag.</li><li>Nennen Sie Beispiele, wofür Menschen KI nutzen.</li><li>Nennen Sie Risiken.</li><li>Nennen Sie Regeln, die für den Umgang mit KI wichtig wären.</li></ul><p class="small">Denken Sie an eine Einleitung und einen Schluss. Schreiben Sie mindestens 150 Wörter.</p>`,
      ctr: ["Forum : l'intelligence artificielle au quotidien. Votre avis, exemples, risques, règles. Intro + conclusion, ≥150 mots.", "Forum: AI amin'ny fiainana andavanandro. Hevitrao, ohatra, loza, fitsipika. ≥150 teny."],
      checklist: ["Einleitung", "Teboka 1: hevitrao", "Teboka 2: ohatra", "Teboka 3: loza", "Teboka 4: fitsipika", "Schluss", "Connecteurs", "≥150 teny"],
      redemittel: ["Künstliche Intelligenz ist aus unserem Alltag kaum noch wegzudenken.", "Ich sehe darin sowohl Chancen als auch Risiken.", "Viele nutzen KI, um …", "Problematisch finde ich, dass …", "Es wäre wichtig, klare Regeln einzuführen, zum Beispiel …", "Abschließend möchte ich sagen, dass …"],
      modele: `Künstliche Intelligenz ist aus unserem Alltag kaum noch wegzudenken. Ich möchte hier meine Meinung zu diesem Thema äußern.

Ich sehe in der KI sowohl große Chancen als auch Risiken. Richtig eingesetzt, kann sie uns viel Arbeit abnehmen.

Viele Menschen nutzen KI, um Texte zu übersetzen, E-Mails zu formulieren oder Informationen schnell zusammenzufassen. Ich selbst verwende sie beim Deutschlernen, um Grammatik erklärt zu bekommen. Auch in der Medizin hilft KI bereits, Krankheiten früher zu erkennen.

Problematisch finde ich, dass KI manchmal falsche Informationen liefert, die sehr überzeugend klingen. Außerdem wissen viele Nutzer nicht, was mit ihren Daten passiert. Und wenn Schüler alle Aufgaben von einer KI lösen lassen, lernen sie selbst nichts mehr.

Es wäre wichtig, klare Regeln einzuführen: Texte, die von einer KI stammen, sollten gekennzeichnet werden, und persönliche Daten dürfen nicht ohne Zustimmung gespeichert werden.

Abschließend möchte ich sagen, dass KI ein nützliches Werkzeug ist – aber eben nur ein Werkzeug, das unser eigenes Denken nicht ersetzen darf.` },
    { id: "S2", nom: "Teil 2", temps: 25, mots: 100, points: 25, type: "Nachricht (formell)",
      consigne: `<p>Sie haben an einem Wochenende ein Firmenfest organisiert. Leider gab es einige Probleme (das Essen kam zu spät, es gab zu wenig Plätze). Ihr Vorgesetzter, Herr Wagner, hat Sie um einen kurzen Bericht gebeten. Schreiben Sie ihm eine Nachricht.</p><ul><li>Bedanken Sie sich für das Vertrauen.</li><li>Beschreiben Sie, was gut lief.</li><li>Erklären Sie die Probleme.</li><li>Machen Sie Vorschläge für das nächste Fest.</li></ul><p class="small">Überlegen Sie sich eine passende Reihenfolge. Vergessen Sie nicht Anrede und Gruß. Schreiben Sie mindestens 100 Wörter.</p>`,
      ctr: ["Message à votre supérieur après la fête d'entreprise : remerciez, ce qui a bien marché, les problèmes, propositions pour la prochaine fois. ≥100 mots.", "Hafatra ho an'ny lehibenao aorian'ny fety: misaora, ny nandeha tsara, ny olana, soso-kevitra. ≥100 teny."],
      checklist: ["Sehr geehrter Herr Wagner,", "Fisaorana noho ny fahatokisana", "Ny nandeha tsara", "Ny olana + antony", "Soso-kevitra ho an'ny manaraka", "Mit freundlichen Grüßen", "≥100 teny"],
      redemittel: ["vielen Dank, dass Sie mir die Organisation anvertraut haben.", "Besonders gut kam … an.", "Leider gab es auch Probleme: …", "Das lag daran, dass …", "Für das nächste Fest würde ich vorschlagen, …", "Mit freundlichen Grüßen"],
      modele: `Sehr geehrter Herr Wagner,

vielen Dank, dass Sie mir die Organisation des Sommerfestes anvertraut haben. Gern gebe ich Ihnen eine kurze Rückmeldung.

Besonders gut kamen die Musik und das Kinderprogramm an. Viele Kolleginnen und Kollegen haben mir gesagt, dass sie die entspannte Atmosphäre sehr genossen haben.

Leider gab es auch zwei Probleme. Das Essen kam mit über einer Stunde Verspätung, weil der Lieferwagen des Caterers im Stau stand. Außerdem waren mehr Gäste als angemeldet gekommen, sodass nicht alle einen Sitzplatz hatten.

Für das nächste Fest würde ich vorschlagen, einen Caterer aus der Nähe zu wählen und eine verbindliche Anmeldung einzuführen. Zusätzlich könnten wir einige Stehtische mieten.

Mit freundlichen Grüßen
Nirina Rasolo` }
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
        { titre: "Thema 1 · Arbeiten im Ausland", points: [
          { de: "Einleitung: Thema vorstellen und Aufbau nennen", mg: "Fampidirana", fr: "Introduction" },
          { de: "Beschreiben Sie verschiedene Möglichkeiten, im Ausland zu arbeiten.", mg: "Fomba samihafa hiasana any ivelany.", fr: "Différentes possibilités." },
          { de: "Beschreiben Sie eine Möglichkeit genauer.", mg: "Hazavao ny iray.", fr: "Décrivez-en une." },
          { de: "Nennen Sie Vor- und Nachteile und bewerten Sie diese.", mg: "Tombony, fatiantoka.", fr: "Avantages, inconvénients." },
          { de: "Schluss: Zusammenfassung und eigene Meinung", mg: "Famaranana", fr: "Conclusion" } ],
          modele: `In meinem Vortrag geht es um das Arbeiten im Ausland. Zuerst stelle ich verschiedene Möglichkeiten vor, dann gehe ich auf eine genauer ein, und schließlich bewerte ich Vor- und Nachteile.

Man kann zum Beispiel als Au-pair arbeiten, ein Praktikum machen, eine Ausbildung beginnen oder als Fachkraft direkt eine Stelle annehmen. Manche Firmen schicken ihre Mitarbeiter auch für einige Jahre ins Ausland.

Genauer möchte ich auf die duale Ausbildung in Deutschland eingehen. Junge Menschen aus Ländern wie Madagaskar lernen drei Jahre lang einen Beruf, zum Beispiel in der Pflege oder im Handwerk. Sie arbeiten im Betrieb, gehen zur Berufsschule und bekommen von Anfang an ein Gehalt.

Der Vorteil liegt auf der Hand: Man erwirbt eine anerkannte Qualifikation und lernt eine neue Kultur kennen. Allerdings ist der Anfang oft schwer – die Sprache, das Klima, das Heimweh. Außerdem fehlen die Fachkräfte dann im Heimatland.

Zusammenfassend bin ich überzeugt, dass Arbeiten im Ausland eine große Chance ist, wenn man sich gut vorbereitet, vor allem sprachlich. Vielen Dank.` },
        { titre: "Thema 2 · Geschenke", points: [
          { de: "Einleitung: Thema vorstellen und Aufbau nennen", mg: "Fampidirana", fr: "Introduction" },
          { de: "Beschreiben Sie verschiedene Arten von Geschenken.", mg: "Karazana fanomezana.", fr: "Différents types de cadeaux." },
          { de: "Beschreiben Sie eine Art genauer.", mg: "Hazavao ny iray.", fr: "Décrivez-en un." },
          { de: "Nennen Sie Vor- und Nachteile und bewerten Sie diese.", mg: "Tombony, fatiantoka.", fr: "Avantages, inconvénients." },
          { de: "Schluss: Zusammenfassung und eigene Meinung", mg: "Famaranana", fr: "Conclusion" } ],
          modele: `Ich möchte heute über Geschenke sprechen. Zuerst nenne ich verschiedene Arten von Geschenken, dann beschreibe ich eine genauer, und am Ende bewerte ich Vor- und Nachteile.

Man kann Gegenstände schenken, zum Beispiel Bücher oder Kleidung, aber auch Erlebnisse wie einen Konzertbesuch. Andere schenken Geld oder Gutscheine, und manche machen selbst etwas, etwa einen Kuchen oder ein Fotoalbum.

Genauer möchte ich auf Erlebnisgeschenke eingehen. Statt eines Gegenstands schenkt man gemeinsame Zeit, zum Beispiel einen Kochkurs oder einen Ausflug. Studien zeigen, dass solche Geschenke länger in Erinnerung bleiben.

Ein großer Vorteil ist, dass man keine überflüssigen Dinge anhäuft. Außerdem verbringt man Zeit miteinander. Ein Nachteil kann sein, dass Erlebnisse oft teurer sind und man einen gemeinsamen Termin finden muss.

Insgesamt finde ich, dass das beste Geschenk eines ist, über das man nachgedacht hat – egal, ob es viel kostet. Vielen Dank.` } ],
      redemittel: [
        ["Einleitung · Fampidirana", ["In meinem Vortrag geht es um …", "Zuerst …, dann …, schließlich …"]],
        ["Hauptteil · Ampahany lehibe", ["Man kann zum Beispiel …", "Genauer möchte ich auf … eingehen.", "Studien zeigen, dass …"]],
        ["Bewertung · Tombana", ["Der Vorteil liegt auf der Hand: …", "Allerdings …", "Ein Nachteil kann sein, dass …"]],
        ["Schluss · Famaranana", ["Zusammenfassend bin ich überzeugt, dass …", "Insgesamt finde ich, dass …"]]
      ] },
    { id: "P2", nom: "Teil 2 – Diskussion führen", mg: "Adihevitra", duree: 5, mode: "dialog", em: "⚖️",
      consigne: `<p>Sie sind Teilnehmende eines Debattierclubs und diskutieren über die Frage:</p><div class="plan"><b>Sollten Hausaufgaben in der Schule abgeschafft werden?</b><ul><li>Tauschen Sie Ihren Standpunkt und Ihre Argumente aus.</li><li>Reagieren Sie auf die Argumente Ihres Gesprächspartners.</li><li>Fassen Sie am Ende zusammen: Sind Sie dafür oder dagegen?</li></ul>Stichpunkte: Üben? · Freizeit? · Chancengleichheit? · Rolle der Eltern? · …</div>`,
      ctr: ["Débat : faut-il supprimer les devoirs à la maison ? Position, réaction, résumé.", "Adihevitra: tokony hofoanana ve ny lesona hatao an-trano? Hevitra, valiny, famintinana."],
      partenaire: [
        { id: "gb2m5-p2-1", t: "Ich bin für die Abschaffung von Hausaufgaben. Kinder sind nach einem langen Schultag müde und brauchen Freizeit. Wie siehst du das?", aide: ["Da muss ich widersprechen: Ohne Übung vergisst man vieles.", "Teilweise hast du recht, allerdings …"] },
        { id: "gb2m5-p2-2", t: "Aber Hausaufgaben sind ungerecht. Nicht alle Kinder haben Eltern, die ihnen helfen können.", aide: ["Das ist ein wichtiger Punkt. Man könnte die Aufgaben in der Schule machen lassen.", "Dafür gibt es Hausaufgabenhilfe."] },
        { id: "gb2m5-p2-3", t: "Genau, Lernzeiten in der Schule mit Lehrern wären eine gute Alternative.", aide: ["Da stimme ich dir zu, aber das kostet Personal.", "Das funktioniert nur, wenn es genug Lehrkräfte gibt."] },
        { id: "gb2m5-p2-4", t: "Wir kommen zum Ende. Was ist dein Fazit?", aide: ["Ich bin gegen die Abschaffung, aber für weniger und bessere Hausaufgaben.", "Wir sind uns einig, dass Chancengleichheit wichtig ist."] }
      ],
      redemittel: [
        ["Standpunkt · Hevitra", ["Ich bin für / gegen …", "Aus meiner Sicht …"]],
        ["Widersprechen · Manohitra", ["Da muss ich widersprechen.", "Das überzeugt mich nicht, weil …"]],
        ["Zustimmen · Manaiky", ["Da stimme ich dir zu.", "Das ist ein wichtiger Punkt."]],
        ["Zusammenfassen · Mamintina", ["Mein Fazit: …", "Wir sind uns einig, dass …"]]
      ],
      modele: `A: Ich bin für die Abschaffung. Kinder sind nach der Schule müde.
B: Da muss ich widersprechen. Ohne Übung vergisst man vieles, besonders in Mathe oder bei Vokabeln.
A: Aber Hausaufgaben sind ungerecht – nicht alle Eltern können helfen.
B: Das ist ein wichtiger Punkt. Man könnte die Aufgaben in der Schule machen, in betreuten Lernzeiten.
A: Genau, das wäre eine gute Alternative.
B: Da stimme ich dir zu, aber dafür braucht man mehr Lehrkräfte.
A: Mein Fazit: Hausaufgaben abschaffen und durch Lernzeiten ersetzen.
B: Ich bin für weniger, aber sinnvolle Hausaufgaben. Einig sind wir uns bei der Chancengleichheit.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Teboka rehetra · Tous les points" },
    { nom: "Kohärenz", desc: "Drafitra mazava · Structure claire" },
    { nom: "Interaktion", desc: "Mamaly ny namanao (Teil 2) · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana B2" },
    { nom: "Strukturen", desc: "Grammaire B2" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "die Rückkehr", fr: "le retour", mg: "fiverenana", ex: "Die Rückkehr war schwerer als der Weggang." },
    { de: "sich fremd fühlen", fr: "se sentir étranger", mg: "mahatsapa ho vahiny", ex: "Ich fühlte mich in meiner Stadt fremd." },
    { de: "die Hilfsorganisation", fr: "l'organisation humanitaire", mg: "fikambanana mpanampy", ex: "Sie arbeitet für eine Hilfsorganisation." },
    { de: "die Gabe", fr: "le don", mg: "fanomezana", ex: "Der Austausch von Gaben." },
    { de: "der Umschlag", fr: "l'enveloppe", mg: "valopy", ex: "Geld in einem Umschlag." },
    { de: "unerwünscht", fr: "indésirable", mg: "tsy irina", ex: "Unerwünschte Geschenke weitergeben." },
    { de: "plädieren für", fr: "plaider pour", mg: "miaro hevitra", ex: "Er plädiert für den offenen Einsatz der KI." },
    { de: "die Leistung", fr: "la performance", mg: "zava-bita", ex: "Leistungen werden anders bewertet." },
    { de: "das Siegel", fr: "le label", mg: "marika", ex: "Es gibt zu viele Siegel." },
    { de: "durchblicken", fr: "s'y retrouver", mg: "mahatakatra", ex: "Niemand blickt mehr durch." },
    { de: "der Zwischenhändler", fr: "l'intermédiaire", mg: "mpanelanelana", ex: "Ohne Zwischenhändler kaufen." },
    { de: "die Verkostung", fr: "la dégustation", mg: "fanandramana tsiro", ex: "Er lädt zu Verkostungen ein." },
    { de: "die Haltung", fr: "l'attitude", mg: "fihetsika / fomba fijery", ex: "Ihre Haltung verändert sich." },
    { de: "die Bürgschaft", fr: "la caution (garant)", mg: "antoka (olona)", ex: "Die Vermieterin wollte eine Bürgschaft." },
    { de: "der Hauptwohnsitz", fr: "la résidence principale", mg: "toeram-ponenana voalohany", ex: "Den Hauptwohnsitz anmelden." },
    { de: "der Fachkräftemangel", fr: "la pénurie de main-d'œuvre qualifiée", mg: "tsy fahampian'ny mpiasa mahay", ex: "Der Fachkräftemangel ist ein Problem." },
    { de: "das Heimweh", fr: "le mal du pays", mg: "fanirian-tanindrazana", ex: "Fast jeder kennt Heimweh." },
    { de: "auslösen", fr: "déclencher", mg: "miteraka", ex: "Ein Geruch kann Heimweh auslösen." },
    { de: "die Eingewöhnung", fr: "l'adaptation", mg: "fahazarana", ex: "Die Eingewöhnung dauert." },
    { de: "die Wurzeln", fr: "les racines", mg: "fototra", ex: "Unsere Wurzeln sind uns wichtig." },
    { de: "anvertrauen", fr: "confier", mg: "manankina", ex: "Sie haben mir die Organisation anvertraut." },
    { de: "die Chancengleichheit", fr: "l'égalité des chances", mg: "fitovian'ny vintana", ex: "Hausaufgaben und Chancengleichheit." }
  ]
});
})();
