/* Goethe Start Deutsch 1 — Modellsatz 5 — textes originaux H Conseil & Formation */
(function(){
window.POOLS.GA1.sets.push({
  id: "ga1m5", titre: "Modellsatz 5", theme: "Tanàna, fitaterana, fahasalamana",
  hoeren: { temps: 20, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 2, type: "mc",
      consigne: "Was ist richtig? Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.",
      clips: [
        { id: "ga1m5-h1-1", titre: "Nummer 1", script: [{ s: "m", n: "Mann", t: "Entschuldigung, wie komme ich zur Post?" }, { s: "f", n: "Frau", t: "Gehen Sie hier geradeaus und dann die zweite Straße links. Die Post ist neben der Bank." }],
          items: [{ n: 1, q: "Wo ist die Post?", tr: ["Où est la poste ?", "Aiza ny paositra?"], opts: ["Neben der Bank.", "Neben dem Bahnhof.", "Gegenüber der Kirche."], a: "a", exp: { mg: "« neben der Bank » = akaikin'ny banky.", fr: "À côté de la banque." } }] },
        { id: "ga1m5-h1-2", titre: "Nummer 2", script: [{ s: "f", n: "Apothekerin", t: "Nehmen Sie die Tabletten dreimal am Tag, nach dem Essen." }, { s: "m", n: "Mann", t: "Dreimal, nach dem Essen. Danke." }],
          items: [{ n: 2, q: "Wie oft soll der Mann die Tabletten nehmen?", tr: ["Combien de fois l'homme doit-il prendre les comprimés ?", "Impiry no tokony hihinanan'ilay lehilahy fanafody?"], opts: ["Einmal am Tag.", "Zweimal am Tag.", "Dreimal am Tag."], a: "c", exp: { mg: "« dreimal am Tag » = in-telo isan'andro.", fr: "Trois fois par jour." } }] },
        { id: "ga1m5-h1-3", titre: "Nummer 3", script: [{ s: "m", n: "Mann", t: "Mit welchem Bus fahre ich zum Krankenhaus?" }, { s: "f", n: "Frau", t: "Nicht mit der Sechs, die fährt zum Zentrum. Nehmen Sie die Linie sechzehn." }],
          items: [{ n: 3, q: "Welcher Bus fährt zum Krankenhaus?", tr: ["Quel bus va à l'hôpital ?", "Iza no bus mankany amin'ny hopitaly?"], opts: ["Linie 6.", "Linie 16.", "Linie 60."], a: "b", exp: { mg: "« sechzehn » = 16. Ny 6 mankany afovoan-tanàna.", fr: "Ligne 16 ; la 6 va au centre." } }] },
        { id: "ga1m5-h1-4", titre: "Nummer 4", script: [{ s: "f", n: "Frau", t: "Wo hast du dein Auto geparkt?" }, { s: "m", n: "Mann", t: "Vor dem Kino war kein Platz. Es steht jetzt im Parkhaus am Marktplatz." }],
          items: [{ n: 4, q: "Wo ist das Auto?", tr: ["Où est la voiture ?", "Aiza ny fiara?"], opts: ["Vor dem Kino.", "Im Parkhaus.", "Vor dem Haus."], a: "b", exp: { mg: "Tsy nisy toerana teo anoloan'ny sinema → Parkhaus.", fr: "Au parking couvert." } }] },
        { id: "ga1m5-h1-5", titre: "Nummer 5", script: [{ s: "m", n: "Arzt", t: "Sie haben eine Grippe. Bleiben Sie bis Freitag im Bett. Am Montag können Sie wieder arbeiten." }],
          items: [{ n: 5, q: "Wann kann die Person wieder arbeiten?", tr: ["Quand la personne peut-elle retravailler ?", "Rahoviana no afaka miasa indray?"], opts: ["Am Freitag.", "Am Samstag.", "Am Montag."], a: "c", exp: { mg: "Mandry hatramin'ny zoma, miasa indray alatsinainy.", fr: "Repos jusqu'à vendredi, travail lundi." } }] },
        { id: "ga1m5-h1-6", titre: "Nummer 6", script: [{ s: "f", n: "Frau", t: "Wie kommst du zur Uni?" }, { s: "m", n: "Mann", t: "Im Sommer fahre ich Fahrrad. Aber jetzt ist Winter, da nehme ich die Straßenbahn." }],
          items: [{ n: 6, q: "Wie fährt der Mann jetzt zur Uni?", tr: ["Comment l'homme va-t-il à l'université maintenant ?", "Ahoana no andehanan'ilay lehilahy any amin'ny oniversite izao?"], opts: ["Mit dem Fahrrad.", "Mit der Straßenbahn.", "Zu Fuß."], a: "b", exp: { mg: "« jetzt ist Winter … Straßenbahn ».", fr: "En hiver, le tram." } }] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 1, type: "rf",
      consigne: "Kreuzen Sie an: Richtig oder Falsch. Sie hören jeden Text einmal.",
      clips: [
        { id: "ga1m5-h2-7", titre: "Nummer 7", script: [{ s: "m", n: "Durchsage", t: "Nächster Halt: Goetheplatz. Hier können Sie in die U-Bahn-Linie drei umsteigen." }],
          items: [{ n: 7, q: "Am Goetheplatz kann man in die U3 umsteigen.", tr: ["À Goetheplatz, on peut changer pour le U3.", "Afaka miova ho U3 eo amin'ny Goetheplatz."], a: "r", exp: { mg: "« umsteigen » = miova fiara.", fr: "Correspondance U3." } }] },
        { id: "ga1m5-h2-8", titre: "Nummer 8", script: [{ s: "f", n: "Durchsage", t: "Liebe Patienten, die Praxis ist heute Nachmittag geschlossen. Morgen sind wir ab acht Uhr wieder da." }],
          items: [{ n: 8, q: "Die Praxis ist heute Nachmittag geöffnet.", tr: ["Le cabinet est ouvert cet après-midi.", "Misokatra ny toeram-pitsaboana anio tolakandro."], a: "f", exp: { mg: "« heute Nachmittag geschlossen ».", fr: "Fermé cet après-midi." } }] },
        { id: "ga1m5-h2-9", titre: "Nummer 9", script: [{ s: "m", n: "Durchsage", t: "Achtung: Der Bus Linie zwölf fährt heute nicht über den Marktplatz. Bitte benutzen Sie die Haltestelle Kirchstraße." }],
          items: [{ n: 9, q: "Der Bus hält heute an der Kirchstraße.", tr: ["Le bus s'arrête aujourd'hui à la Kirchstraße.", "Mijanona eo amin'ny Kirchstraße ny bus anio."], a: "r", exp: { mg: "« benutzen Sie die Haltestelle Kirchstraße ».", fr: "Arrêt Kirchstraße." } }] },
        { id: "ga1m5-h2-10", titre: "Nummer 10", script: [{ s: "f", n: "Durchsage", t: "Liebe Kunden, heute bekommen Sie in unserer Apotheke alle Vitamine zwei für eins." }],
          items: [{ n: 10, q: "Die Vitamine sind heute teurer.", tr: ["Les vitamines sont plus chères aujourd'hui.", "Lafo kokoa ny vitamina anio."], a: "f", exp: { mg: "« zwei für eins » = roa amin'ny vidin'ny iray → mora kokoa.", fr: "Deux pour un → moins cher." } }] }
      ] },
    { id: "H3", nom: "Teil 3", ecoutes: 2, type: "mc",
      consigne: "Was ist richtig? Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.",
      clips: [
        { id: "ga1m5-h3-11", titre: "Nummer 11", script: [{ s: "f", n: "Praxis", t: "Guten Tag, hier ist die Praxis Doktor Schmid. Bitte bringen Sie morgen Ihre Versichertenkarte mit. Der Termin ist um Viertel nach neun." }],
          items: [{ n: 11, q: "Wann ist der Termin?", tr: ["À quelle heure est le rendez-vous ?", "Amin'ny firy ny fotoana?"], opts: ["Um 8.45 Uhr.", "Um 9.15 Uhr.", "Um 9.45 Uhr."], a: "b", exp: { mg: "« Viertel nach neun » = 9 ora sy fahefany = 9.15.", fr: "9 h 15." } }] },
        { id: "ga1m5-h3-12", titre: "Nummer 12", script: [{ s: "m", n: "Lukas", t: "Hallo Eva, hier ist Lukas. Ich stehe im Stau. Ich bin erst in einer halben Stunde da. Fangt bitte ohne mich an." }],
          items: [{ n: 12, q: "Warum kommt Lukas später?", tr: ["Pourquoi Lukas arrive-t-il plus tard ?", "Nahoana no tara i Lukas?"], opts: ["Er ist krank.", "Er steht im Stau.", "Er hat den Bus verpasst."], a: "b", exp: { mg: "« im Stau » = fitohanana fiara.", fr: "Embouteillage." } }] },
        { id: "ga1m5-h3-13", titre: "Nummer 13", script: [{ s: "f", n: "Fundbüro", t: "Hier ist das Fundbüro der Stadt. Wir haben Ihre Tasche gefunden. Sie war in der Straßenbahn. Sie können sie bis siebzehn Uhr abholen." }],
          items: [{ n: 13, q: "Wo war die Tasche?", tr: ["Où était le sac ?", "Taiza ilay kitapo?"], opts: ["Im Bus.", "In der Straßenbahn.", "Im Taxi."], a: "b", exp: { mg: "« Sie war in der Straßenbahn ».", fr: "Dans le tram." } }] },
        { id: "ga1m5-h3-14", titre: "Nummer 14", script: [{ s: "m", n: "Kollege", t: "Hallo Frau Ranaivo, hier ist Herr Klein. Ich bin heute krank. Können Sie bitte meinen Kunden um zehn Uhr übernehmen? Danke!" }],
          items: [{ n: 14, q: "Was soll Frau Ranaivo machen?", tr: ["Que doit faire Mme Ranaivo ?", "Inona no tokony hataon-dRtoa Ranaivo?"], opts: ["Zum Arzt gehen.", "Einen Kunden übernehmen.", "Herrn Klein besuchen."], a: "b", exp: { mg: "« meinen Kunden … übernehmen » = handray ny mpanjifany.", fr: "Prendre en charge son client." } }] },
        { id: "ga1m5-h3-15", titre: "Nummer 15", script: [{ s: "f", n: "Taxizentrale", t: "Guten Abend, Taxi-Zentrale. Ihr Taxi kommt in zehn Minuten. Es ist ein weißer Mercedes." }],
          items: [{ n: 15, q: "Wann kommt das Taxi?", tr: ["Quand arrive le taxi ?", "Rahoviana no ho tonga ny taxi?"], opts: ["In fünf Minuten.", "In zehn Minuten.", "In zwanzig Minuten."], a: "b", exp: { mg: "« in zehn Minuten ».", fr: "Dans dix minutes." } }] }
      ] }
  ] },

  lesen: { temps: 25, teile: [
    { id: "L1", nom: "Teil 1", type: "rf", temps: 8,
      consigne: "Lesen Sie die beiden Texte und die Aufgaben 1 bis 5. Kreuzen Sie an: Richtig oder Falsch.",
      texte: `<div class="blog"><p><b>Text 1</b></p><p>Hallo Mialy,<br>ich kann morgen leider nicht mit dir ins Schwimmbad gehen. Ich war heute beim Arzt, ich habe eine Erkältung. Ich muss drei Tage zu Hause bleiben. Gehen wir nächsten Mittwoch? Du kannst mich anrufen, ich bin den ganzen Tag zu Hause.<br>Liebe Grüße<br>Niry</p><hr><p><b>Text 2</b></p><p>Sehr geehrte Mieter,<br>vom 10. bis 12. Mai gibt es im Haus kein warmes Wasser. Wir reparieren die Heizung. Wir danken für Ihr Verständnis.<br>Ihre Hausverwaltung</p></div>`,
      exemple: { q: "Niry schreibt an Mialy.", a: "Richtig" },
      items: [
        { n: 1, q: "Niry geht morgen schwimmen.", tr: ["Niry va nager demain.", "Handeha hilomano rahampitso i Niry."], a: "f", exp: { mg: "« kann morgen leider nicht ».", fr: "Elle ne peut pas demain." } },
        { n: 2, q: "Niry ist krank.", tr: ["Niry est malade.", "Marary i Niry."], a: "r", exp: { mg: "« Erkältung » = sery.", fr: "Elle a un rhume." } },
        { n: 3, q: "Mialy kann Niry anrufen.", tr: ["Mialy peut appeler Niry.", "Afaka miantso an'i Niry i Mialy."], a: "r", exp: { mg: "« Du kannst mich anrufen ».", fr: "Oui." } },
        { n: 4, q: "Im Mai gibt es drei Tage kein warmes Wasser.", tr: ["En mai, il n'y a pas d'eau chaude pendant trois jours.", "Tsy misy rano mafana mandritra ny 3 andro amin'ny Mey."], a: "r", exp: { mg: "10, 11, 12 Mai = andro 3.", fr: "Du 10 au 12 = 3 jours." } },
        { n: 5, q: "Die Hausverwaltung repariert das Wasser.", tr: ["La gérance répare l'eau.", "Ny rano no amboarin'ny mpitantana."], a: "f", exp: { mg: "« Wir reparieren die Heizung » = fanafanana.", fr: "On répare le chauffage." } }
      ] },
    { id: "L2", nom: "Teil 2", type: "mc", temps: 9,
      consigne: "Lesen Sie die Texte und die Aufgaben 6 bis 10. Wo finden Sie Informationen? Kreuzen Sie an: a oder b.",
      items: [
        { n: 6, q: "Sie haben am Sonntag Zahnschmerzen.", tr: ["Vous avez mal aux dents dimanche.", "Marary nify ianao amin'ny alahady."], opts: ["Zahnärztlicher Notdienst — Wochenende und Feiertage", "Zahnarztpraxis Huber — Mo–Fr 8–18 Uhr"], otr: [["Urgences dentaires le week-end", "Vonjy maika nify faran'ny herinandro"], ["Cabinet en semaine", "Herinandro ihany"]], a: "a", exp: { mg: "Alahady → Notdienst Wochenende.", fr: "Dimanche → urgences." } },
        { n: 7, q: "Sie möchten mit dem Bus zum Flughafen.", tr: ["Vous voulez aller à l'aéroport en bus.", "Te handeha bus ho any amin'ny seranam-piaramanidina ianao."], opts: ["Taxi Express — Flughafen 45 €", "Flughafenbus X1 — alle 20 Minuten ab Hauptbahnhof"], otr: [["Taxi", "Taxi"], ["Bus aéroport", "Bus mankany amin'ny seranana"]], a: "b", exp: { mg: "Bus → X1.", fr: "Bus → b." } },
        { n: 8, q: "Sie möchten Sport machen, aber nicht viel bezahlen.", tr: ["Vous voulez faire du sport sans payer beaucoup.", "Te hanao fanatanjahantena tsy mandoa be ianao."], opts: ["Lauftreff im Park — jeden Dienstag, kostenlos", "Golfclub Grün — Mitgliedschaft 1.200 € pro Jahr"], otr: [["Course gratuite au parc", "Fihazakazahana maimaim-poana"], ["Golf 1 200 €/an", "Golf lafo"]], a: "a", exp: { mg: "« kostenlos » = maimaim-poana.", fr: "Gratuit → a." } },
        { n: 9, q: "Sie brauchen in der Nacht ein Medikament.", tr: ["Vous avez besoin d'un médicament la nuit.", "Mila fanafody amin'ny alina ianao."], opts: ["Stadt-Apotheke — Mo–Sa 8–20 Uhr", "Notdienst-Apotheken — 24 Stunden: www.apotheken.de"], otr: [["Pharmacie 8 h–20 h", "Fivarotam-panafody 8–20 ora"], ["Pharmacies de garde 24 h/24", "Mandritra ny 24 ora"]], a: "b", exp: { mg: "Alina → 24 Stunden.", fr: "La nuit → b." } },
        { n: 10, q: "Sie möchten Ihr Auto waschen lassen.", tr: ["Vous voulez faire laver votre voiture.", "Te hampanasa ny fiaranao ianao."], opts: ["Autowaschanlage Blitz — Waschen ab 8 €", "Autovermietung Mobil — Autos ab 30 € pro Tag"], otr: [["Lavage auto", "Fanasana fiara"], ["Location de voitures", "Fanofana fiara"]], a: "a", exp: { mg: "« waschen » → Waschanlage.", fr: "Laver → a." } }
      ] },
    { id: "L3", nom: "Teil 3", type: "rf", temps: 8,
      consigne: "Lesen Sie die Texte und die Aufgaben 11 bis 15. Kreuzen Sie an: Richtig oder Falsch.",
      texte: `<div class="ads">
<div class="ad"><span class="l">0</span><b>Im Krankenhaus</b><br>Besuchszeit: 14–19 Uhr.</div>
<div class="ad"><span class="l">11</span><b>Am Fahrkartenautomaten</b><br>Nur Münzen und Karten – keine Geldscheine!</div>
<div class="ad"><span class="l">12</span><b>In der U-Bahn</b><br>Hunde fahren kostenlos.</div>
<div class="ad"><span class="l">13</span><b>An der Arztpraxis</b><br>Bitte melden Sie sich zuerst an der Anmeldung.</div>
<div class="ad"><span class="l">14</span><b>Auf der Straße</b><br>Ab Montag: Baustelle. Die Straße ist für Autos gesperrt.</div>
<div class="ad"><span class="l">15</span><b>Im Bahnhof</b><br>Schließfächer: 24 Stunden für 4 Euro.</div></div>`,
      exemple: { q: "Man kann am Abend um 18 Uhr Patienten besuchen.", a: "Richtig" },
      items: [
        { n: 11, q: "Am Automaten kann man mit einem 10-Euro-Schein bezahlen.", tr: ["On peut payer avec un billet de 10 € au distributeur.", "Azo aloa amin'ny vola taratasy 10 € ny milina."], a: "f", exp: { mg: "« keine Geldscheine » = tsy misy vola taratasy.", fr: "Pas de billets." } },
        { n: 12, q: "Für Hunde muss man keine Fahrkarte kaufen.", tr: ["Il ne faut pas de billet pour les chiens.", "Tsy mila tapakila ho an'ny alika."], a: "r", exp: { mg: "« kostenlos » = maimaim-poana.", fr: "Gratuit pour les chiens." } },
        { n: 13, q: "Man soll direkt ins Wartezimmer gehen.", tr: ["On doit aller directement en salle d'attente.", "Tokony hiditra mivantana ao amin'ny efitrano fiandrasana."], a: "f", exp: { mg: "« zuerst an der Anmeldung » = aloha any amin'ny fandraisana.", fr: "D'abord à l'accueil." } },
        { n: 14, q: "Ab Montag dürfen hier keine Autos fahren.", tr: ["À partir de lundi, les voitures ne peuvent pas passer.", "Manomboka alatsinainy dia tsy azo aleha fiara eto."], a: "r", exp: { mg: "« für Autos gesperrt ».", fr: "Fermée aux voitures." } },
        { n: 15, q: "Ein Schließfach kostet 4 Euro pro Stunde.", tr: ["Une consigne coûte 4 € par heure.", "4 € isan'ora ny toerana fametrahana entana."], a: "f", exp: { mg: "4 € ho an'ny ora 24.", fr: "4 € pour 24 heures." } }
      ] }
  ] },

  schreiben: { temps: 20, aufgaben: [
    { id: "S1", nom: "Teil 1", temps: 8, points: 5, type: "Formular",
      ctr: ["Lisez la situation et écrivez les 5 informations manquantes dans le formulaire.", "Vakio ny tantara ary soraty ao amin'ny taratasy ireo vaovao 5 tsy ao."],
      consigne: `<p>Ihre Freundin Holy Andrianasolo ist neu in Leipzig und möchte sich in der Bibliothek anmelden. Sie ist am 22. Oktober 2001 geboren und kommt aus Madagaskar. Sie studiert Medizin an der Universität Leipzig. Sie möchte den Newsletter per E-Mail bekommen.</p><p>Im Formular fehlen fünf Informationen. Helfen Sie Ihrer Freundin.</p>`,
      form: { titre: "Leseausweis – Stadtbibliothek Leipzig", champs: [
        { label: "Name", v: "Andrianasolo" },
        { n: 1, label: "Vorname", a: ["Holy"] },
        { n: 2, label: "Geburtsdatum", a: ["22.10.2001", "22. Oktober 2001", "22.10.01", "22/10/2001"] },
        { n: 3, label: "Herkunftsland", a: ["Madagaskar"] },
        { n: 4, label: "Beruf", choix: ["Schüler/in", "Student/in", "Angestellte/r"], a: ["Student/in"] },
        { n: 5, label: "Newsletter", choix: ["per Post", "per E-Mail", "nein"], a: ["per E-Mail"] }
      ] },
      exp: { mg: "Mianatra fitsaboana izy → Student/in. Newsletter amin'ny mailaka.", fr: "Elle étudie → Student/in ; newsletter par e-mail." } },
    { id: "S2", nom: "Teil 2", temps: 12, mots: 30, points: 10, type: "Kurze Mitteilung",
      consigne: `<p>Sie sind krank und können morgen nicht zum Deutschkurs kommen. Schreiben Sie eine E-Mail an Ihre Lehrerin, Frau Meyer:</p><ul><li>Warum schreiben Sie?</li><li>Wann kommen Sie wieder?</li><li>Bitten Sie um die Hausaufgaben.</li></ul><p class="small">Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter). Schreiben Sie auch eine Anrede und einen Gruß.</p>`,
      ctr: ["E-mail à la professeure : vous êtes malade, quand vous revenez, demandez les devoirs. ~30 mots.", "Mailaka ho an'ny mpampianatra: marary ianao, rahoviana no hiverina, angataho ny lesona hatao an-trano. ~30 teny."],
      checklist: ["Liebe Frau Meyer,", "Antony (Ich bin krank …)", "Rahoviana no hiverina", "Fangatahana Hausaufgaben", "Gruß + anarana", "~30 teny"],
      redemittel: ["Liebe Frau Meyer,", "leider bin ich krank und kann morgen nicht zum Kurs kommen.", "Ich komme am … wieder.", "Können Sie mir bitte die Hausaufgaben schicken?", "Vielen Dank!", "Viele Grüße"],
      modele: `Liebe Frau Meyer,

leider bin ich krank. Ich habe Fieber und kann morgen nicht zum Kurs kommen. Ich komme am Montag wieder. Können Sie mir bitte die Hausaufgaben per E-Mail schicken?

Vielen Dank!
Viele Grüße
Rivo` }
  ], criteres: [
    { nom: "Aufgabenerfüllung", desc: "Teboka 3 voavaly avokoa? · Les 3 points sont traités ?" },
    { nom: "Kommunikative Gestaltung", desc: "Anrede sy Gruß mety · Formules d'appel et de salutation" }
  ] },

  sprechen: { preparation: 0, teile: [
    { id: "P1", nom: "Teil 1 – Sich vorstellen", mg: "Mampahafantatra ny tena", duree: 1, mode: "present", em: "🙋",
      consigne: `<p>Stellen Sie sich vor. Sprechen Sie zu den Stichwörtern.</p><div class="plan"><b>Name? · Alter? · Land? · Wohnort? · Sprachen? · Beruf? · Hobby?</b></div><p class="small">Danach: Buchstabieren Sie Ihren Namen und nennen Sie Ihre Handynummer.</p>`,
      ctr: ["Présentez-vous, puis épelez votre nom et dites votre numéro de portable.", "Ampahafantaro ny tenanao, tononina tsirairay ny litera amin'ny anaranao ary lazao ny laharan'ny findainao."],
      themes: [{ titre: "Sich vorstellen", points: [
        { de: "Name? Alter?", mg: "Anarana? Taona?", fr: "Nom ? Âge ?" }, { de: "Land? Wohnort?", mg: "Firenena? Toerana?", fr: "Pays ? Ville ?" },
        { de: "Sprachen?", mg: "Fiteny?", fr: "Langues ?" }, { de: "Beruf? Hobby?", mg: "Asa? Fialam-boly?", fr: "Métier ? Loisirs ?" },
        { de: "Namen buchstabieren + Handynummer", mg: "Anarana litera tsirairay + laharan'ny finday", fr: "Épeler le nom + numéro de portable" } ],
        modele: `Ich heiße Zo Rakotonirina. Ich bin 22 Jahre alt.
Ich komme aus Madagaskar und wohne in Antananarivo, im Viertel Analakely.
Ich spreche Malagasy, Französisch und jetzt auch ein bisschen Deutsch.
Ich bin Studentin, ich studiere Informatik. Ich höre gern Musik und spiele Gitarre.

Z – O. Meine Handynummer ist 032 45 678 90.` }],
      redemittel: [["Mampahafantatra · Se présenter", ["Ich heiße …", "Ich wohne in …", "Ich bin Student / Studentin. Ich studiere …", "Meine Handynummer ist …"]]] },
    { id: "P2", nom: "Teil 2 – Um Informationen bitten", mg: "Manontany sy mamaly", duree: 3, mode: "dialog", em: "🃏",
      consigne: `<p><b>Thema: Stadt und Verkehr.</b> Sie bekommen Karten mit Wörtern. Fragen Sie Ihren Partner / Ihre Partnerin und antworten Sie.</p><div class="plan">Karten: <b>Bus · Arbeit · Stadt · Auto · Park · Arzt</b></div>`,
      ctr: ["Thème : ville et transports. Questions avec les cartes, puis réponses.", "Lohahevitra: tanàna sy fitaterana. Manontania sy mamalia."],
      partenaire: [
        { id: "ga1m5-p2-1", t: "Wie kommst du zur Arbeit?", cue: "Valio. · Réponds.", aide: ["Ich fahre mit dem Bus.", "Ich gehe zu Fuß."] },
        { id: "ga1m5-p2-2", t: "Ah ja. Deine Karte ist „Stadt“. Frag mich!", cue: "Manontania momba ny « Stadt ». · Pose une question.", aide: ["In welcher Stadt wohnst du?", "Ist deine Stadt groß?"] },
        { id: "ga1m5-p2-3", t: "Ich wohne in Köln, das ist eine große Stadt. Meine Frage: Hast du ein Auto?", cue: "Valio. · Réponds.", aide: ["Nein, ich habe kein Auto.", "Ja, ich habe ein kleines Auto."] },
        { id: "ga1m5-p2-4", t: "Okay. Deine nächste Karte ist „Park“.", cue: "Manontania momba ny « Park ». · Question sur « parc ».", aide: ["Gehst du oft in den Park?", "Gibt es einen Park in deiner Nähe?"] },
        { id: "ga1m5-p2-5", t: "Ja, am Sonntag. Letzte Frage: Wie oft gehst du zum Arzt?", cue: "Valio. · Réponds.", aide: ["Nicht oft, einmal im Jahr.", "Nur wenn ich krank bin."] }
      ],
      redemittel: [["Manontany · Demander", ["Wie kommst du …?", "In welcher …?", "Hast du …?", "Wie oft …?"]], ["Mamaly · Répondre", ["Ich fahre mit dem / der …", "Ich gehe zu Fuß.", "Einmal im Jahr / jeden Tag."]]],
      modele: `A: Wie kommst du zur Arbeit?
B: Ich fahre mit dem Bus.
B: In welcher Stadt wohnst du?
A: In Köln.
A: Hast du ein Auto?
B: Nein, ich habe kein Auto.
B: Gehst du oft in den Park?
A: Ja, jeden Sonntag.` },
    { id: "P3", nom: "Teil 3 – Bitten formulieren", mg: "Mangataka zavatra", duree: 3, mode: "dialog", em: "🙏",
      consigne: `<p>Sie bekommen Karten mit Bildern. Formulieren Sie eine Bitte und reagieren Sie auf die Bitte von Ihrem Partner / Ihrer Partnerin.</p>`,
      partenaire: [
        { id: "ga1m5-p3-1", t: "Können Sie mir bitte den Weg zum Bahnhof zeigen?", cue: "Valio. · Réagis.", aide: ["Ja, gern. Gehen Sie geradeaus.", "Tut mir leid, ich bin auch nicht von hier."] },
        { id: "ga1m5-p3-2", t: "Danke! Ihre Karte zeigt ein Taxi.", cue: "Mangataha hiantso taxi. · Demande d'appeler un taxi.", aide: ["Können Sie mir bitte ein Taxi rufen?", "Rufen Sie bitte ein Taxi!"] },
        { id: "ga1m5-p3-3", t: "Natürlich. Meine Karte: eine Tablette. Haben Sie eine Tablette gegen Kopfschmerzen?", cue: "Valio. · Réagis.", aide: ["Ja, hier bitte.", "Nein, leider nicht. Die Apotheke ist dort."] },
        { id: "ga1m5-p3-4", t: "Danke. Ihre letzte Karte zeigt einen Stuhl.", cue: "Mangataha hipetraka. · Demande à t'asseoir.", aide: ["Darf ich mich hier setzen?", "Ist der Platz noch frei?"] }
      ],
      redemittel: [["Mangataka · Demander", ["Können Sie bitte …?", "Haben Sie … für mich?", "Darf ich …?", "Ist hier noch frei?"]], ["Mamaly · Réagir", ["Ja, gern.", "Natürlich.", "Leider nicht.", "Bitte sehr."]]],
      modele: `A: Können Sie mir bitte den Weg zum Bahnhof zeigen?
B: Ja, gern. Gehen Sie geradeaus.
B: Können Sie mir bitte ein Taxi rufen?
A: Natürlich.
A: Haben Sie eine Tablette gegen Kopfschmerzen?
B: Leider nicht. Die Apotheke ist dort.
B: Darf ich mich hier setzen?
A: Ja, bitte.` }
  ], criteres: [
    { nom: "Aufgabenerfüllung", desc: "Nanao ny asa nangatahina ve? · Tâche réalisée ?" },
    { nom: "Sprachliche Realisierung", desc: "Fehezanteny azo henoina · Phrases compréhensibles" }
  ] },

  vocab: [
    { de: "geradeaus", fr: "tout droit", mg: "mahitsy", ex: "Gehen Sie geradeaus." },
    { de: "links / rechts", fr: "à gauche / à droite", mg: "havia / havanana", ex: "Die zweite Straße links." },
    { de: "die Tablette", fr: "le comprimé", mg: "pilina fanafody", ex: "Nehmen Sie die Tabletten dreimal am Tag." },
    { de: "das Krankenhaus", fr: "l'hôpital", mg: "hopitaly", ex: "Der Bus fährt zum Krankenhaus." },
    { de: "das Parkhaus", fr: "le parking couvert", mg: "toeram-pijanonan'ny fiara", ex: "Das Auto steht im Parkhaus." },
    { de: "die Grippe", fr: "la grippe", mg: "gripa", ex: "Sie haben eine Grippe." },
    { de: "umsteigen", fr: "changer (de ligne)", mg: "miova fiara", ex: "Hier können Sie umsteigen." },
    { de: "die Praxis", fr: "le cabinet médical", mg: "toeram-pitsaboana", ex: "Die Praxis ist geschlossen." },
    { de: "die Versichertenkarte", fr: "la carte d'assurance maladie", mg: "karatra fiantohana fahasalamana", ex: "Bringen Sie Ihre Versichertenkarte mit." },
    { de: "der Stau", fr: "l'embouteillage", mg: "fitohanan'ny fiara", ex: "Ich stehe im Stau." },
    { de: "das Fundbüro", fr: "le bureau des objets trouvés", mg: "birao fandraisana entana very", ex: "Das Fundbüro hat die Tasche." },
    { de: "die Erkältung", fr: "le rhume", mg: "sery", ex: "Ich habe eine Erkältung." },
    { de: "der Notdienst", fr: "le service de garde / d'urgence", mg: "vonjy maika", ex: "Am Sonntag gibt es einen Notdienst." },
    { de: "kostenlos", fr: "gratuit", mg: "maimaim-poana", ex: "Der Lauftreff ist kostenlos." },
    { de: "das Medikament", fr: "le médicament", mg: "fanafody", ex: "Ich brauche ein Medikament." },
    { de: "die Münze", fr: "la pièce de monnaie", mg: "vola madinika", ex: "Nur Münzen und Karten." },
    { de: "die Baustelle", fr: "le chantier", mg: "toeram-panorenana", ex: "Ab Montag gibt es eine Baustelle." },
    { de: "das Schließfach", fr: "la consigne", mg: "toerana fametrahana entana", ex: "Ein Schließfach kostet 4 Euro." },
    { de: "die Hausaufgaben", fr: "les devoirs", mg: "lesona hatao an-trano", ex: "Können Sie mir die Hausaufgaben schicken?" },
    { de: "zu Fuß", fr: "à pied", mg: "an-tongotra", ex: "Ich gehe zu Fuß zur Arbeit." }
  ]
});
})();
