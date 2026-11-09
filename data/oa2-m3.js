/* ÖSD Zertifikat A2 — Modellsatz 3 — textes originaux H Conseil & Formation */
(function(){
window.POOLS.OA2.sets.push({
  id: "oa2m3", titre: "Modellsatz 3", theme: "Fitsangatsanganana, toetr'andro, fialam-boly",
  lesen: { temps: 30, teile: [
    { id: "L1", nom: "Aufgabe 1", type: "match", points: 15, zero: false, layout: "choixFirst",
      consigne: "Lesen Sie die 10 Überschriften und die 5 Texte. Suchen Sie dann zu jedem Text (1 – 5) die passende Überschrift (A – J). Pro Text gibt es nur eine richtige Lösung.",
      choixTitre: "Überschriften",
      choix: { A: "Skigebiet öffnet früher als geplant", B: "Wanderweg nach Unwetter gesperrt", C: "Mehr Touristen aus Asien", D: "Neues Museum für Kinder", E: "Zugfahrten am Wochenende billiger", F: "Hotel sucht Mitarbeiter für den Winter", G: "Badesee: Wasser wieder sauber", H: "Zu wenig Schnee in den Alpen", I: "Festival am See abgesagt", J: "Radfahren auf der Donauinsel verboten" },
      texte: `<div class="ads">
<div class="ad"><span class="l">1</span>Nach dem starken Regen letzte Woche ist der Weg zur Hohen Wand nicht sicher. Steine sind auf den Weg gefallen. Bitte benutzen Sie bis Ende Mai den Weg über das Dorf.</div>
<div class="ad"><span class="l">2</span>Gute Nachricht für Familien: Die Wasserqualität im Neufelder See ist wieder in Ordnung. Ab Samstag darf man wieder schwimmen.</div>
<div class="ad"><span class="l">3</span>Es hat schon im November viel geschneit. Deshalb starten die Lifte am Kreischberg bereits am 25. November – zwei Wochen früher als sonst.</div>
<div class="ad"><span class="l">4</span>Zum ersten Mal kommen mehr Gäste aus China, Japan und Korea als aus Deutschland nach Hallstatt. Die Gemeinde möchte jetzt mehr Infos auf Englisch anbieten.</div>
<div class="ad"><span class="l">5</span>Wer am Samstag oder Sonntag mit den ÖBB fährt, bezahlt ab Juni 30 Prozent weniger. Das Angebot gilt für alle Strecken in Österreich.</div></div>`,
      items: [
        { n: 1, q: "Text 1", a: "B", exp: { mg: "Lalana tsy azo aleha noho ny orana → B.", fr: "Chemin fermé après les intempéries → B." } },
        { n: 2, q: "Text 2", a: "G", exp: { mg: "« Wasserqualität … wieder in Ordnung ».", fr: "Eau propre → G." } },
        { n: 3, q: "Text 3", a: "A", exp: { mg: "« zwei Wochen früher » → A. Fandrika H: misy oram-panala be.", fr: "Ouverture plus tôt → A (pas H)." } },
        { n: 4, q: "Text 4", a: "C", exp: { mg: "Mpizahatany avy any Azia.", fr: "Touristes d'Asie → C." } },
        { n: 5, q: "Text 5", a: "E", exp: { mg: "« 30 Prozent weniger » amin'ny faran'ny herinandro.", fr: "Train moins cher le week-end → E." } }
      ] },
    { id: "L2", nom: "Aufgabe 2", type: "mc", points: 10,
      consigne: "Lesen Sie zuerst den Text und lösen Sie dann die 5 Aufgaben. Markieren Sie die richtige Antwort. Für jede Aufgabe gibt es nur eine richtige Lösung.",
      texte: `<div class="press"><h3>Urlaub auf der Alm</h3><p class="lead">Familie Rakoto aus Wien hat eine Woche auf einem Bauernhof in Tirol verbracht.</p>
<p>„Unsere Kinder kennen Kühe nur aus dem Fernsehen“, lacht Mamy Rakoto. Deshalb hat die Familie diesen Sommer keinen Urlaub am Meer gemacht, sondern ist auf eine Alm in Tirol gefahren. Die Fahrt mit dem Zug und dann mit dem Bus hat sechs Stunden gedauert.</p>
<p>Jeden Morgen um sieben haben die Kinder, Nirina (8) und Tahina (11), der Bäuerin geholfen: Sie haben die Hühner gefüttert und Eier gesammelt. Am Nachmittag ist die Familie gewandert. „Einmal hat es plötzlich geregnet und wir waren total nass. Aber die Kinder fanden das lustig.“</p>
<p>Das Beste war für alle das Essen: frisches Brot, Käse vom Hof und Kaiserschmarrn. Nächstes Jahr möchte die Familie wiederkommen – dann aber im Winter, zum Skifahren.</p></div>`,
      items: [
        { n: 6, q: "Die Familie ist auf eine Alm gefahren, weil …", tr: ["La famille est allée sur l'alpage parce que…", "Nankany an-tendrombohitra ny fianakaviana satria…"], opts: ["das Meer zu teuer war.", "die Kinder Tiere sehen sollten.", "die Großeltern dort wohnen."], otr: [["la mer était trop chère", "lafo loatra ny ranomasina"], ["les enfants devaient voir des animaux", "tokony hahita biby ny ankizy"], ["les grands-parents y habitent", "ao no mipetraka ny dadabe sy bebe"]], a: "b", exp: { mg: "« Kühe nur aus dem Fernsehen ».", fr: "Pour voir des animaux." } },
        { n: 7, q: "Die Familie ist …", tr: ["La famille a voyagé…", "Ny fianakaviana dia nandeha…"], opts: ["mit dem Auto gefahren.", "mit Zug und Bus gefahren.", "geflogen."], otr: [["en voiture", "fiara"], ["en train et en bus", "lamasinina sy bus"], ["en avion", "fiaramanidina"]], a: "b", exp: { mg: "« mit dem Zug und dann mit dem Bus ».", fr: "Train puis bus." } },
        { n: 8, q: "Am Morgen haben die Kinder …", tr: ["Le matin, les enfants…", "Ny maraina ny ankizy dia…"], opts: ["lange geschlafen.", "auf dem Hof geholfen.", "Ski gelernt."], otr: [["ont dormi longtemps", "natory ela"], ["ont aidé à la ferme", "nanampy tao amin'ny toeram-piompiana"], ["ont appris le ski", "nianatra ski"]], a: "b", exp: { mg: "Namahana akoho sy nanangona atody.", fr: "Poules et œufs." } },
        { n: 9, q: "Was ist beim Wandern passiert?", tr: ["Que s'est-il passé pendant la randonnée ?", "Inona no nitranga nandritra ny dia an-tongotra?"], opts: ["Sie sind nass geworden.", "Ein Kind war krank.", "Sie haben den Weg verloren."], otr: [["ils ont été mouillés", "lena izy ireo"], ["un enfant était malade", "narary ny zaza iray"], ["ils se sont perdus", "very lalana"]], a: "a", exp: { mg: "« plötzlich geregnet … total nass ».", fr: "Pluie soudaine, trempés." } },
        { n: 10, q: "Nächstes Jahr möchte die Familie …", tr: ["L'année prochaine, la famille veut…", "Amin'ny taona ho avy ny fianakaviana dia te…"], opts: ["ans Meer fahren.", "im Winter wiederkommen.", "in Wien bleiben."], otr: [["aller à la mer", "ho any amoron-dranomasina"], ["revenir en hiver", "hiverina amin'ny ririnina"], ["rester à Vienne", "hijanona ao Vienne"]], a: "b", exp: { mg: "« dann aber im Winter, zum Skifahren ».", fr: "Revenir en hiver." } }
      ] }
  ] },

  hoeren: { temps: 15, teile: [
    { id: "H1", nom: "Aufgabe 1", ecoutes: 1, type: "multi", points: 10, lecture: 30,
      consigne: "Sie hören zwei verschiedene Texte mit dem gleichen Inhalt. Hören Sie gut zu und markieren Sie die Antworten. Es gibt vier richtige Antworten. Sie hören die Texte ein Mal.",
      clips: [{ id: "oa2m3-h1", titre: "Stadtfest in Linz", script: [
        { s: "m", n: "Radio", t: "Am Wochenende feiert Linz sein großes Stadtfest. Es beginnt am Freitag um achtzehn Uhr am Hauptplatz. Es gibt Live-Musik und Essen aus vielen Ländern. Der Eintritt ist frei. Am Sonntag gibt es ein Feuerwerk an der Donau." },
        { s: "f", n: "Eva", t: "Gehst du zum Stadtfest?" },
        { s: "m2", n: "Karl", t: "Klar! Es fängt schon am Freitagabend an, am Hauptplatz. Und kostet nichts!" },
        { s: "f", n: "Eva", t: "Toll. Gibt es auch Musik?" },
        { s: "m2", n: "Karl", t: "Ja, Live-Musik. Und am Sonntag ein Feuerwerk an der Donau. Tanzen kann man aber nicht, dafür ist kein Platz." }],
        items: [{ n: 1, q: "Das Stadtfest:", tr: ["La fête de la ville :", "Ny fetin'ny tanàna:"], hint: "Mariho valiny 4 · Coche 4 réponses", opts: ["beginnt am Freitag", "beginnt am Samstag", "Eintritt 5 Euro", "Eintritt frei", "Live-Musik", "Tanzkurs", "Feuerwerk am Sonntag", "Feuerwerk am Freitag"], a: ["a", "d", "e", "g"], exp: { mg: "Zoma, maimaim-poana, mozika mivantana, afomanga alahady.", fr: "Vendredi, gratuit, musique live, feu d'artifice dimanche." } }] }] },
    { id: "H2", nom: "Aufgabe 2", ecoutes: 2, type: "fill", points: 10, lecture: 30,
      consigne: "Sie hören folgende Nachricht. Hören Sie gut zu und schreiben Sie die wichtigsten Informationen auf das Notizblatt. Sie hören den Text zwei Mal.",
      contexte: "Notizen · Hotelreservierung",
      xtr: ["Notes · Réservation d'hôtel", "Naoty · Famandrihana hotely"],
      clips: [{ id: "oa2m3-h2", titre: "Nachricht", script: [{ s: "f", n: "Hotel", t: "Guten Tag, hier ist das Hotel Seeblick am Wolfgangsee. Wir bestätigen Ihre Reservierung: ein Doppelzimmer mit Balkon, vom vierzehnten bis zum achtzehnten Juli, also vier Nächte. Der Preis ist neunzig Euro pro Nacht mit Frühstück. Bitte kommen Sie bis spätestens zwanzig Uhr, sonst ist die Rezeption geschlossen. Parkplätze gibt es direkt beim Hotel. Auf Wiederhören!" }],
        items: [
          { n: 2, label: "Zimmer:", ph: "Art", a: ["Doppelzimmer", "Doppelzimmer mit Balkon"], exp: { mg: "« ein Doppelzimmer mit Balkon ».", fr: "Chambre double." } },
          { n: 3, label: "Anreise:", ph: "Datum", a: ["14. Juli", "14 Juli", "14.7.", "14.07.", "vierzehnter Juli"], exp: { mg: "« vom vierzehnten ».", fr: "Le 14 juillet." } },
          { n: 4, label: "Nächte:", ph: "Zahl", a: ["4", "vier"], exp: { mg: "« vier Nächte ».", fr: "4 nuits." } },
          { n: 5, label: "Preis pro Nacht:", ph: "€", a: ["90", "90 €", "90 Euro", "neunzig"], exp: { mg: "« neunzig Euro ».", fr: "90 €." } },
          { n: 6, label: "Ankunft spätestens:", ph: "… Uhr", a: ["20", "20 Uhr", "20.00", "20:00", "zwanzig Uhr", "8 Uhr abends"], exp: { mg: "« bis spätestens zwanzig Uhr ».", fr: "Avant 20 h." } }
        ] }] },
    { id: "H3", nom: "Aufgabe 3", ecoutes: 1, type: "multi", points: 10, lecture: 30,
      consigne: "Sie hören ein Interview, bei dem fünf Personen befragt werden. Kreuzen Sie in der Liste die richtigen Antworten an. Pro Person sind mehrere Antworten möglich. Sie hören die Texte ein Mal.",
      contexte: "Frage: Was machen Sie gern im Urlaub?",
      xtr: ["Question : qu'aimez-vous faire en vacances ?", "Fanontaniana: inona no tianao atao amin'ny fialan-tsasatra?"],
      clips: [{ id: "oa2m3-h3", titre: "Interview", script: [
        { s: "f", n: "1. Sprecherin", t: "Ich liege am liebsten am Strand und lese. Mehr brauche ich nicht." },
        { s: "m", n: "2. Sprecher", t: "Ich besuche gern Museen und probiere das Essen in Restaurants." },
        { s: "f2", n: "3. Sprecherin", t: "Wandern in den Bergen! Und abends ein gutes Essen in der Hütte." },
        { s: "m2", n: "4. Sprecher", t: "Ich schwimme viel und ich mache Ausflüge mit dem Rad." },
        { s: "f", n: "5. Sprecherin", t: "Städte anschauen, Museen, Kirchen – und natürlich einkaufen gehen." }],
        items: [
          { n: 7, q: "1. Sprecherin", opts: ["Strand / Schwimmen", "Wandern / Sport", "Kultur / Museen", "gut essen", "lesen"], a: ["a", "e"], exp: { mg: "Tora-pasika + famakiana.", fr: "Plage + lecture." } },
          { n: 8, q: "2. Sprecher", opts: ["Strand / Schwimmen", "Wandern / Sport", "Kultur / Museen", "gut essen", "lesen"], a: ["c", "d"], exp: { mg: "Tranombakoka + trano fisakafoanana.", fr: "Musées + restaurants." } },
          { n: 9, q: "3. Sprecherin", opts: ["Strand / Schwimmen", "Wandern / Sport", "Kultur / Museen", "gut essen", "lesen"], a: ["b", "d"], exp: { mg: "Mandeha an-tendrombohitra + sakafo.", fr: "Randonnée + bon repas." } },
          { n: 10, q: "4. Sprecher", opts: ["Strand / Schwimmen", "Wandern / Sport", "Kultur / Museen", "gut essen", "lesen"], a: ["a", "b"], exp: { mg: "Milomano + bisikileta.", fr: "Natation + vélo." } },
          { n: 11, q: "5. Sprecherin", opts: ["Strand / Schwimmen", "Wandern / Sport", "Kultur / Museen", "gut essen", "lesen"], a: ["c"], exp: { mg: "Tanàna, tranombakoka, fiangonana (+ fiantsenana tsy ao amin'ny lisitra).", fr: "Culture (le shopping n'est pas dans la liste)." } }
        ] }] }
  ] },

  schreiben: { temps: 30, aufgaben: [
    { id: "S1", nom: "Schreibaufgabe", temps: 30, mots: 50, points: 15, type: "E-Mail (informell)",
      consigne: `<p>Sie bekommen von Ihrem Freund Florian folgendes E-Mail:</p><div class="guest"><div class="guest-h">Von: flo.w@mail.at · Betreff: Urlaub?</div><div class="guest-b">Hallo!<br>Wie war dein Urlaub? Wo warst du? Mit wem bist du gefahren? Was hast du dort gemacht? Und wie war das Wetter? Schick mir doch ein paar Fotos!<br>Liebe Grüße, Flo</div></div><p>Schreiben Sie Florian eine Antwort. Beantworten Sie alle Fragen. Schreiben Sie ca. 50 Wörter.</p>`,
      ctr: ["Répondez à Florian (~50 mots) : où, avec qui, ce que vous avez fait, la météo.", "Valio i Florian (~50 teny): taiza, niaraka tamin'iza, inona no natao, ny toetr'andro."],
      checklist: ["Lieber Flo,", "Taiza?", "Niaraka tamin'iza?", "Inona no natao? (Perfekt)", "Toetr'andro?", "Gruß + anarana", "~50 teny"],
      redemittel: ["Lieber Flo,", "danke für dein E-Mail!", "Ich war … in …", "Ich bin mit … gefahren.", "Wir haben … besucht / gemacht.", "Das Wetter war …", "Die Fotos schicke ich dir morgen.", "Liebe Grüße"],
      modele: `Lieber Flo,

danke für dein E-Mail! Mein Urlaub war super. Ich war eine Woche in Kärnten am Wörthersee. Ich bin mit meiner Schwester und ihrem Mann gefahren. Wir sind jeden Tag geschwommen und haben eine Bootsfahrt gemacht. Das Wetter war heiß und sonnig, nur einmal hat es geregnet. Die Fotos schicke ich dir morgen!

Liebe Grüße
Haja` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Voavaly avokoa ny fanontaniana? · Toutes les questions ?" },
    { nom: "Kohärenz", desc: "Fehezanteny mifandray · Enchaînement" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Fitsipi-pitenenana · Grammaire" }
  ] },

  sprechen: { preparation: 10, teile: [
    { id: "P1", nom: "Aufgabe 1 – Sich vorstellen", mg: "Mampahafantatra ny tena", duree: 3, mode: "present", em: "🙋",
      consigne: `<p>Ihre Gesprächspartnerin / Ihr Gesprächspartner möchte Sie gerne kennenlernen. Sie erhalten ein Blatt mit 6 Fragen. Wählen Sie 5 Themen aus und sprechen Sie darüber (zu jedem Thema ein paar Sätze).</p>`,
      themes: [{ titre: "Sich vorstellen", points: [
        { de: "Wie heißen Sie und woher kommen Sie?", mg: "Iza no anaranao ary avy aiza?", fr: "Nom et origine ?" },
        { de: "Wohin reisen Sie gern?", mg: "Aiza no tianao aleha?", fr: "Où aimez-vous voyager ?" },
        { de: "Wie ist das Wetter in Ihrem Land?", mg: "Ahoana ny toetr'andro any amin'ny taninao?", fr: "La météo dans votre pays ?" },
        { de: "Was machen Sie gern am Wochenende?", mg: "Inona no ataonao amin'ny faran'ny herinandro?", fr: "Le week-end ?" },
        { de: "Was war Ihre schönste Reise?", mg: "Inona no dia tsara indrindra nataonao?", fr: "Votre plus beau voyage ?" } ],
        modele: `Ich heiße Rado und komme aus Madagaskar, aus der Stadt Antsirabe.
Ich reise gern in die Natur, zum Beispiel in Nationalparks oder an Seen.
In Madagaskar gibt es eine Regenzeit von November bis April. Im Hochland ist es im Juli ziemlich kalt, nur zehn Grad am Morgen.
Am Wochenende spiele ich Fußball oder ich treffe Freunde im Café.
Meine schönste Reise war nach Isalo. Dort gibt es große Felsen und man kann in natürlichen Pools baden.` }],
      redemittel: [["Mampahafantatra · Se présenter", ["Ich heiße … und komme aus …", "Ich reise gern …", "In meinem Land ist es oft …", "Am Wochenende …", "Meine schönste Reise war nach …"]]] },
    { id: "P2", nom: "Aufgabe 2 – Gemeinsam eine Aufgabe lösen", mg: "Mikasa zavatra miaraka", duree: 4, mode: "dialog", em: "🤝",
      consigne: `<p>Sie und Ihre Gesprächspartnerin / Ihr Gesprächspartner möchten zusammen einen Tagesausflug machen. Besprechen Sie die Fragen.</p><div class="plan"><b>Tagesausflug</b><ul><li>Wohin? (Berge? See? Stadt?)</li><li>Wie fahren? (Zug? Auto? Bus?)</li><li>Wann? (Tag, Uhrzeit)</li><li>Was mitnehmen?</li></ul></div>`,
      ctr: ["Planifiez ensemble une excursion d'une journée : où, comment, quand, quoi emporter.", "Mikasà dia iray andro miaraka: aiza, inona no hitondra, rahoviana, inona no ho entina."],
      partenaire: [
        { id: "oa2m3-p2-1", s: "m", t: "Also, wohin fahren wir am Wochenende? In die Berge oder an einen See?", aide: ["Ich möchte gern an einen See, zum Schwimmen.", "Lieber in die Berge, ich wandere gern."] },
        { id: "oa2m3-p2-2", s: "m", t: "Okay, an den Attersee! Wie fahren wir? Ich habe kein Auto.", aide: ["Wir können den Zug nehmen.", "Mein Bruder leiht uns sein Auto."] },
        { id: "oa2m3-p2-3", s: "m", t: "Zug ist gut. Am Samstag oder am Sonntag? Am Samstag soll es regnen.", aide: ["Dann lieber am Sonntag.", "Sonntag passt mir. Um acht Uhr?"] },
        { id: "oa2m3-p2-4", s: "m", t: "Acht ist ein bisschen früh, aber okay. Was nehmen wir mit?", aide: ["Badesachen und Sonnencreme!", "Ich mache Sandwiches, du bringst Obst."] },
        { id: "oa2m3-p2-5", s: "m", t: "Perfekt. Kannst du noch einmal zusammenfassen?", aide: ["Also: Sonntag, acht Uhr, mit dem Zug an den Attersee.", "Ich bringe …, du bringst …"] }
      ],
      redemittel: [["Manolotra · Proposer", ["Ich möchte gern …", "Lieber …", "Wir können …"]], ["Mamaly · Réagir", ["Gute Idee!", "Das ist zu früh / teuer.", "Okay, einverstanden."]], ["Mamarana · Conclure", ["Also: Wir fahren am … um … mit … nach …", "Ich bringe …, du bringst …"]]],
      modele: `A: Wohin fahren wir? Berge oder See?
B: An einen See, ich möchte schwimmen.
A: An den Attersee! Aber ich habe kein Auto.
B: Wir nehmen den Zug.
A: Samstag oder Sonntag? Am Samstag soll es regnen.
B: Dann Sonntag, um acht Uhr.
A: Okay. Was nehmen wir mit?
B: Badesachen und Sonnencreme. Ich mache Sandwiches.
A: Und ich bringe Obst und Getränke.
B: Also: Sonntag, 8 Uhr, mit dem Zug an den Attersee.` }
  ], criteres: [
    { nom: "Erfüllung", desc: "Tontosa ny asa · Tâche réalisée" },
    { nom: "Interaktion", desc: "Mamaly · Réagir" },
    { nom: "Wortschatz", desc: "Voambolana · Vocabulaire" },
    { nom: "Strukturen", desc: "Grammaire" },
    { nom: "Aussprache", desc: "Fanononana · Prononciation" }
  ] },

  vocab: [
    { de: "das Unwetter", fr: "l'intempérie", mg: "rivo-doza / tafio-drivotra", ex: "Nach dem Unwetter ist der Weg gesperrt." },
    { de: "der Lift", fr: "la remontée mécanique", mg: "lift (ski)", ex: "Die Lifte starten früher." },
    { de: "die Wasserqualität", fr: "la qualité de l'eau", mg: "kalitaon'ny rano", ex: "Die Wasserqualität ist gut." },
    { de: "die Strecke", fr: "le trajet, la ligne", mg: "lalana", ex: "Das Angebot gilt für alle Strecken." },
    { de: "die Alm", fr: "l'alpage", mg: "tany fiandrasana biby an-tendrombohitra", ex: "Urlaub auf der Alm." },
    { de: "der Bauernhof", fr: "la ferme", mg: "toeram-piompiana", ex: "Wir wohnen auf einem Bauernhof." },
    { de: "füttern", fr: "nourrir", mg: "mamahana", ex: "Die Kinder füttern die Hühner." },
    { de: "nass", fr: "mouillé", mg: "lena", ex: "Wir waren total nass." },
    { de: "der Kaiserschmarrn", fr: "crêpe autrichienne", mg: "karazana mofo aotrisiana", ex: "Kaiserschmarrn ist typisch österreichisch." },
    { de: "das Feuerwerk", fr: "le feu d'artifice", mg: "afomanga", ex: "Am Sonntag gibt es ein Feuerwerk." },
    { de: "bestätigen", fr: "confirmer", mg: "manamafy", ex: "Wir bestätigen Ihre Reservierung." },
    { de: "spätestens", fr: "au plus tard", mg: "farafahatarany", ex: "Kommen Sie spätestens um 20 Uhr." },
    { de: "die Hütte", fr: "le refuge", mg: "trano kely an-tendrombohitra", ex: "Abends essen wir in der Hütte." },
    { de: "der Ausflug", fr: "l'excursion", mg: "fitsangatsanganana", ex: "Wir machen einen Ausflug." },
    { de: "die Regenzeit", fr: "la saison des pluies", mg: "fotoam-pahavaratra", ex: "Die Regenzeit ist von November bis April." },
    { de: "der Felsen", fr: "le rocher", mg: "vatolampy", ex: "In Isalo gibt es große Felsen." },
    { de: "die Badesachen", fr: "les affaires de bain", mg: "fitaovana filomanosana", ex: "Vergiss deine Badesachen nicht!" },
    { de: "leihen", fr: "prêter", mg: "mampindrana", ex: "Mein Bruder leiht uns sein Auto." },
    { de: "der Tagesausflug", fr: "l'excursion d'une journée", mg: "dia iray andro", ex: "Wir planen einen Tagesausflug." },
    { de: "zusammenfassen", fr: "résumer", mg: "mamintina", ex: "Kannst du zusammenfassen?" }
  ]
});
})();
