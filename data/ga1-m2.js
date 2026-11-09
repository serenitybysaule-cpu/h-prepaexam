/* Goethe Start Deutsch 1 — Modellsatz 2 — textes originaux H Conseil & Formation */
(function(){
window.POOLS.GA1.sets.push({
  id: "ga1m2", titre: "Modellsatz 2", theme: "Fivarotana, dokotera, fitsangatsanganana",
  hoeren: { temps: 20, teile: [
    { id: "H1", nom: "Teil 1", ecoutes: 2, type: "mc",
      consigne: "Was ist richtig? Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.",
      clips: [
        { id: "ga1m2-h1-1", titre: "Nummer 1", script: [{ s: "m", n: "Kunde", t: "Entschuldigung, was kostet die Jacke hier?" }, { s: "f", n: "Verkäuferin", t: "Die blaue Jacke? Die kostet neunundvierzig Euro. Heute ist alles zwanzig Prozent billiger." }],
          items: [{ n: 1, q: "Wie viel kostet die Jacke ohne Rabatt?", tr: ["Combien coûte la veste sans réduction ?", "Ohatrinona ny palitao raha tsy misy fihenam-bidy?"], opts: ["49 Euro.", "94 Euro.", "20 Euro."], a: "a", exp: { mg: "« neunundvierzig » = 9 + 40 = 49. Ny 20 dia isan-jato (Prozent).", fr: "neun-und-vierzig = 49 ; 20 est le pourcentage." } }] },
        { id: "ga1m2-h1-2", titre: "Nummer 2", script: [{ s: "f", n: "Frau", t: "Wann fährt der nächste Bus zum Flughafen?" }, { s: "m", n: "Mann", t: "Der Bus um zehn nach drei ist schon weg. Der nächste kommt um fünf vor halb vier." }],
          items: [{ n: 2, q: "Wann fährt der nächste Bus?", tr: ["Quand part le prochain bus ?", "Amin'ny firy ny bus manaraka?"], opts: ["Um 15.10 Uhr.", "Um 15.25 Uhr.", "Um 15.35 Uhr."], a: "b", exp: { mg: "« fünf vor halb vier » = 5 minitra alohan'ny 3 sy sasany = 15.25.", fr: "« fünf vor halb vier » = 15 h 25." } }] },
        { id: "ga1m2-h1-3", titre: "Nummer 3", script: [{ s: "f", n: "Ärztin", t: "Was fehlt Ihnen denn?" }, { s: "m", n: "Patient", t: "Ich habe seit gestern Kopfschmerzen. Fieber habe ich nicht, aber ich bin sehr müde." }],
          items: [{ n: 3, q: "Was hat der Mann?", tr: ["Qu'a l'homme ?", "Inona no mahazo an'ilay lehilahy?"], opts: ["Fieber.", "Kopfschmerzen.", "Bauchschmerzen."], a: "b", exp: { mg: "« Kopfschmerzen » = aretin'andoha. « Fieber habe ich nicht ».", fr: "Mal de tête ; pas de fièvre." } }] },
        { id: "ga1m2-h1-4", titre: "Nummer 4", script: [{ s: "m", n: "Mann", t: "Wo ist mein Handy? Ich finde es nicht." }, { s: "f", n: "Frau", t: "Auf dem Tisch ist es nicht. Schau mal in deiner Tasche … Ach nein, da liegt es, im Regal neben den Büchern." }],
          items: [{ n: 4, q: "Wo ist das Handy?", tr: ["Où est le portable ?", "Aiza ny finday?"], opts: ["Auf dem Tisch.", "In der Tasche.", "Im Regal."], a: "c", exp: { mg: "« da liegt es, im Regal » = eo amin'ny talantalana.", fr: "Sur l'étagère, à côté des livres." } }] },
        { id: "ga1m2-h1-5", titre: "Nummer 5", script: [{ s: "f", n: "Frau", t: "Was machst du am Wochenende?" }, { s: "m", n: "Mann", t: "Am Samstag arbeite ich. Aber am Sonntag besuche ich meine Eltern in Hamburg." }],
          items: [{ n: 5, q: "Was macht der Mann am Sonntag?", tr: ["Que fait l'homme dimanche ?", "Inona no ataon'ilay lehilahy amin'ny alahady?"], opts: ["Er arbeitet.", "Er besucht seine Eltern.", "Er bleibt zu Hause."], a: "b", exp: { mg: "Asabotsy: miasa. Alahady: mamangy ny ray aman-dreniny.", fr: "Samedi travail, dimanche visite aux parents." } }] },
        { id: "ga1m2-h1-6", titre: "Nummer 6", script: [{ s: "m", n: "Kellner", t: "Was möchten Sie trinken?" }, { s: "f", n: "Frau", t: "Einen Tee, bitte. Ach nein, es ist so warm heute. Ich nehme lieber eine Cola." }],
          items: [{ n: 6, q: "Was trinkt die Frau?", tr: ["Que boit la femme ?", "Inona no sotroin'ilay vehivavy?"], opts: ["Tee.", "Kaffee.", "Cola."], a: "c", exp: { mg: "Nanova hevitra izy: « lieber eine Cola ».", fr: "Elle change d'avis : un cola." } }] }
      ] },
    { id: "H2", nom: "Teil 2", ecoutes: 1, type: "rf",
      consigne: "Kreuzen Sie an: Richtig oder Falsch. Sie hören jeden Text einmal.",
      clips: [
        { id: "ga1m2-h2-7", titre: "Nummer 7", script: [{ s: "f", n: "Durchsage", t: "Liebe Kundinnen und Kunden, unser Geschäft schließt in zehn Minuten. Bitte gehen Sie zur Kasse." }],
          items: [{ n: 7, q: "Das Geschäft schließt bald.", tr: ["Le magasin ferme bientôt.", "Efa hikatona ny magazay."], a: "r", exp: { mg: "« schließt in zehn Minuten ».", fr: "Dans 10 minutes." } }] },
        { id: "ga1m2-h2-8", titre: "Nummer 8", script: [{ s: "m", n: "Durchsage", t: "Information für die Fahrgäste nach Köln: Ihr Zug fährt heute nicht von Gleis sieben, sondern von Gleis neun." }],
          items: [{ n: 8, q: "Der Zug nach Köln fährt von Gleis 7.", tr: ["Le train pour Cologne part de la voie 7.", "Avy amin'ny lalana 7 ny lamasinina ho any Köln."], a: "f", exp: { mg: "« nicht von Gleis sieben, sondern von Gleis neun ».", fr: "Voie 9, pas 7." } }] },
        { id: "ga1m2-h2-9", titre: "Nummer 9", script: [{ s: "f", n: "Durchsage", t: "Die Passagiere des Fluges LH 412 nach Frankfurt: Bitte gehen Sie jetzt zum Ausgang B 14." }],
          items: [{ n: 9, q: "Die Passagiere sollen zum Ausgang B 14 gehen.", tr: ["Les passagers doivent aller à la porte B14.", "Tokony hankany amin'ny vavahady B 14 ny mpandeha."], a: "r", exp: { mg: "« zum Ausgang B 14 ».", fr: "Porte B14." } }] },
        { id: "ga1m2-h2-10", titre: "Nummer 10", script: [{ s: "m", n: "Durchsage", t: "Liebe Gäste, das Schwimmbad ist heute wegen Reparatur geschlossen. Morgen sind wir wieder für Sie da." }],
          items: [{ n: 10, q: "Man kann heute schwimmen gehen.", tr: ["On peut aller nager aujourd'hui.", "Afaka mandeha milomano anio."], a: "f", exp: { mg: "« heute … geschlossen » = mihidy anio.", fr: "Fermé aujourd'hui." } }] }
      ] },
    { id: "H3", nom: "Teil 3", ecoutes: 2, type: "mc",
      consigne: "Was ist richtig? Kreuzen Sie an: a, b oder c. Sie hören jeden Text zweimal.",
      clips: [
        { id: "ga1m2-h3-11", titre: "Nummer 11", script: [{ s: "f", n: "Frau Berger", t: "Guten Tag, hier ist Berger. Ich kann am Donnerstag leider nicht zum Kurs kommen. Ich komme wieder am Montag. Vielen Dank." }],
          items: [{ n: 11, q: "Wann kommt Frau Berger wieder zum Kurs?", tr: ["Quand Mme Berger revient-elle au cours ?", "Rahoviana no hiverina any amin'ny fampianarana i Rtoa Berger?"], opts: ["Am Donnerstag.", "Am Montag.", "Am Dienstag."], a: "b", exp: { mg: "Tsy ho tonga ny alakamisy, hiverina ny alatsinainy.", fr: "Absente jeudi, revient lundi." } }] },
        { id: "ga1m2-h3-12", titre: "Nummer 12", script: [{ s: "m", n: "Jonas", t: "Hi Mia, hier ist Jonas. Ich bin im Supermarkt. Brauchen wir noch Milch? Eier habe ich schon. Ruf mich bitte kurz an." }],
          items: [{ n: 12, q: "Was fragt Jonas?", tr: ["Que demande Jonas ?", "Inona no anontanian'i Jonas?"], opts: ["Ob sie Eier brauchen.", "Ob sie Milch brauchen.", "Wo der Supermarkt ist."], a: "b", exp: { mg: "« Brauchen wir noch Milch? ». Efa nividy atody izy.", fr: "Il demande pour le lait ; les œufs sont achetés." } }] },
        { id: "ga1m2-h3-13", titre: "Nummer 13", script: [{ s: "f", n: "Autowerkstatt", t: "Guten Tag, Autowerkstatt Fischer. Ihr Auto ist fertig. Sie können es heute bis achtzehn Uhr abholen. Es kostet zweihundertzehn Euro." }],
          items: [{ n: 13, q: "Bis wann kann man das Auto heute abholen?", tr: ["Jusqu'à quand peut-on récupérer la voiture ?", "Mandra-pahoviana no azo alaina ny fiara anio?"], opts: ["Bis 17 Uhr.", "Bis 18 Uhr.", "Bis 20 Uhr."], a: "b", exp: { mg: "« bis achtzehn Uhr » = 18 ora. Ny 210 dia vidiny.", fr: "18 h ; 210 est le prix." } }] },
        { id: "ga1m2-h3-14", titre: "Nummer 14", script: [{ s: "m", n: "Papa", t: "Hallo Sara, hier ist Papa. Ich hole dich heute nicht mit dem Auto ab. Nimm bitte die U-Bahn, Linie zwei. Bis später!" }],
          items: [{ n: 14, q: "Wie soll Sara nach Hause fahren?", tr: ["Comment Sara doit-elle rentrer ?", "Ahoana no tokony hodian'i Sara?"], opts: ["Mit dem Auto.", "Mit der U-Bahn.", "Mit dem Bus."], a: "b", exp: { mg: "« Nimm bitte die U-Bahn ».", fr: "Le métro." } }] },
        { id: "ga1m2-h3-15", titre: "Nummer 15", script: [{ s: "f", n: "Hotel", t: "Guten Tag, hier ist das Hotel Sonne. Sie haben Ihren Schlüssel und Ihre Brille im Zimmer vergessen. Ihre Jacke haben wir nicht gefunden." }],
          items: [{ n: 15, q: "Was hat der Gast nicht im Hotel vergessen?", tr: ["Qu'est-ce que le client n'a PAS oublié ?", "Inona no TSY hadinon'ilay vahiny tany amin'ny hotely?"], opts: ["Den Schlüssel.", "Die Brille.", "Die Jacke."], a: "c", exp: { mg: "Tsy hita ny palitao. Tandremo ny « nicht » ao amin'ny fanontaniana!", fr: "La veste n'a pas été trouvée. Attention au « nicht »." } }] }
      ] }
  ] },

  lesen: { temps: 25, teile: [
    { id: "L1", nom: "Teil 1", type: "rf", temps: 8,
      consigne: "Lesen Sie die beiden Texte und die Aufgaben 1 bis 5. Kreuzen Sie an: Richtig oder Falsch.",
      texte: `<div class="blog"><p><b>Text 1</b></p><p>Hallo Fara,<br>ich bin jetzt in Berlin! Die Wohnung ist klein, aber schön. Sie hat zwei Zimmer und einen Balkon. Leider ist sie im fünften Stock und es gibt keinen Aufzug. Am Montag beginnt meine neue Arbeit im Krankenhaus. Besuch mich doch im Mai!<br>Liebe Grüße<br>Nirina</p><hr><p><b>Text 2</b></p><p>Liebe Kolleginnen und Kollegen,<br>unser Team-Essen ist am Freitag um 12.30 Uhr im Restaurant „Adria“. Bitte schreibt mir bis Mittwoch, ob ihr kommt.<br>Danke!<br>Martin</p></div>`,
      exemple: { q: "Nirina wohnt jetzt in Berlin.", a: "Richtig" },
      items: [
        { n: 1, q: "Die Wohnung von Nirina ist groß.", tr: ["L'appartement de Nirina est grand.", "Lehibe ny tranon'i Nirina."], a: "f", exp: { mg: "« klein, aber schön ».", fr: "Petit mais joli." } },
        { n: 2, q: "Im Haus gibt es keinen Aufzug.", tr: ["Il n'y a pas d'ascenseur.", "Tsy misy ascenseur ao an-trano."], a: "r", exp: { mg: "« es gibt keinen Aufzug ».", fr: "Pas d'ascenseur." } },
        { n: 3, q: "Nirina arbeitet schon im Krankenhaus.", tr: ["Nirina travaille déjà à l'hôpital.", "Efa miasa any amin'ny hopitaly i Nirina."], a: "f", exp: { mg: "Mbola hanomboka ny alatsinainy (« Am Montag beginnt »).", fr: "Elle commence lundi." } },
        { n: 4, q: "Das Team-Essen ist am Mittag.", tr: ["Le repas d'équipe est à midi.", "Antoandro ny sakafo iarahana."], a: "r", exp: { mg: "12.30 = antoandro.", fr: "12 h 30 = midi." } },
        { n: 5, q: "Die Kollegen sollen bis Freitag antworten.", tr: ["Les collègues doivent répondre avant vendredi.", "Tokony hamaly alohan'ny zoma ny mpiara-miasa."], a: "f", exp: { mg: "« bis Mittwoch » = alarobia.", fr: "Avant mercredi." } }
      ] },
    { id: "L2", nom: "Teil 2", type: "mc", temps: 9,
      consigne: "Lesen Sie die Texte und die Aufgaben 6 bis 10. Wo finden Sie Informationen? Kreuzen Sie an: a oder b.",
      items: [
        { n: 6, q: "Sie möchten am Samstagabend tanzen gehen.", tr: ["Vous voulez aller danser samedi soir.", "Te handeha handihy ianao amin'ny asabotsy hariva."], opts: ["Tanzschule Fuchs — Kurse Mo–Fr, 17–19 Uhr", "Club Mondo — Party jeden Freitag und Samstag ab 22 Uhr"], otr: [["Cours en semaine", "Herinandro ihany"], ["Fête vendredi et samedi soir", "Fety zoma sy asabotsy alina"]], a: "b", exp: { mg: "Asabotsy hariva → « Samstag ab 22 Uhr ».", fr: "Samedi soir → b." } },
        { n: 7, q: "Sie möchten ein gebrauchtes Fahrrad kaufen.", tr: ["Vous voulez acheter un vélo d'occasion.", "Te hividy bisikileta efa niasa ianao."], opts: ["Flohmarkt am Rathausplatz — Fahrräder, Bücher, Kleidung", "Fahrrad-Werkstatt Klein — Reparatur in 24 Stunden"], otr: [["Marché aux puces : vélos, livres", "Tsena entana efa niasa"], ["Atelier de réparation", "Toeram-panamboarana"]], a: "a", exp: { mg: "« gebraucht » = efa niasa → Flohmarkt.", fr: "D'occasion → marché aux puces." } },
        { n: 8, q: "Sie brauchen einen Termin beim Zahnarzt.", tr: ["Vous avez besoin d'un rendez-vous chez le dentiste.", "Mila fotoana amin'ny dokotera nify ianao."], opts: ["Dr. Roth, Augenarzt — Termine online", "Zahnarztpraxis Lind — Termine: Tel. 089 / 22 33 44"], otr: [["Ophtalmologue", "Dokotera maso"], ["Cabinet dentaire", "Dokotera nify"]], a: "b", exp: { mg: "Zahnarzt = dokotera nify (Augenarzt = maso).", fr: "Dentiste → b." } },
        { n: 9, q: "Sie möchten mit Ihren Kindern Tiere sehen.", tr: ["Vous voulez voir des animaux avec vos enfants.", "Te hijery biby miaraka amin'ny zanakao ianao."], opts: ["Tierpark Hellabrunn — Kinder bis 4 Jahre frei", "Kunstmuseum — Führungen für Erwachsene"], otr: [["Parc animalier", "Zaridainam-biby"], ["Musée d'art", "Tranombakoka zavakanto"]], a: "a", exp: { mg: "Tiere → Tierpark.", fr: "Animaux → parc animalier." } },
        { n: 10, q: "Sie suchen eine Arbeit am Wochenende.", tr: ["Vous cherchez un travail le week-end.", "Mitady asa amin'ny faran'ny herinandro ianao."], opts: ["Bäckerei Huber sucht Verkäuferin, Mo–Fr, 6–12 Uhr", "Café Mond sucht Kellner für Samstag und Sonntag"], otr: [["Boulangerie, en semaine", "Herinandro"], ["Café, samedi et dimanche", "Asabotsy sy alahady"]], a: "b", exp: { mg: "Wochenende = Samstag und Sonntag → b.", fr: "Week-end → b." } }
      ] },
    { id: "L3", nom: "Teil 3", type: "rf", temps: 8,
      consigne: "Lesen Sie die Texte und die Aufgaben 11 bis 15. Kreuzen Sie an: Richtig oder Falsch.",
      texte: `<div class="ads">
<div class="ad"><span class="l">0</span><b>An der Apotheke</b><br>Mittagspause 13–14 Uhr.</div>
<div class="ad"><span class="l">11</span><b>Im Hotel, an der Rezeption</b><br>Frühstück im Restaurant, 1. Stock, von 6.30 bis 10 Uhr.</div>
<div class="ad"><span class="l">12</span><b>Am Kino</b><br>Montag: Kinotag! Alle Filme nur 6 Euro.</div>
<div class="ad"><span class="l">13</span><b>In der Bank</b><br>Geldautomat leider kaputt. Bitte gehen Sie zum Automaten am Bahnhof.</div>
<div class="ad"><span class="l">14</span><b>An der Tür eines Büros</b><br>Bitte nicht klopfen – einfach eintreten!</div>
<div class="ad"><span class="l">15</span><b>Im Zug</b><br>Wagen 5: Ruhebereich. Bitte nicht telefonieren.</div></div>`,
      exemple: { q: "Die Apotheke ist um 13.30 Uhr geschlossen.", a: "Richtig" },
      items: [
        { n: 11, q: "Das Frühstück ist im Erdgeschoss.", tr: ["Le petit-déjeuner est au rez-de-chaussée.", "Ao amin'ny rihana ambany ny sakafo maraina."], a: "f", exp: { mg: "« 1. Stock » = rihana voalohany.", fr: "Au 1er étage." } },
        { n: 12, q: "Am Montag ist das Kino billiger.", tr: ["Le lundi, le cinéma est moins cher.", "Mora kokoa ny sinema amin'ny alatsinainy."], a: "r", exp: { mg: "« Kinotag … nur 6 Euro ».", fr: "Journée cinéma à 6 €." } },
        { n: 13, q: "Sie können in der Bank Geld abheben.", tr: ["Vous pouvez retirer de l'argent à la banque.", "Afaka maka vola ao amin'ny banky ianao."], a: "f", exp: { mg: "Simba ny Geldautomat → any amin'ny gara.", fr: "Distributeur en panne." } },
        { n: 14, q: "Sie dürfen ohne Klopfen in das Büro gehen.", tr: ["Vous pouvez entrer sans frapper.", "Afaka miditra tsy mandondona ianao."], a: "r", exp: { mg: "« nicht klopfen – einfach eintreten ».", fr: "Entrez sans frapper." } },
        { n: 15, q: "Im Wagen 5 darf man telefonieren.", tr: ["Dans la voiture 5, on peut téléphoner.", "Azo atao ny miantso an-telefaona ao amin'ny vagona 5."], a: "f", exp: { mg: "« Ruhebereich … nicht telefonieren ».", fr: "Zone calme : pas de téléphone." } }
      ] }
  ] },

  schreiben: { temps: 20, aufgaben: [
    { id: "S1", nom: "Teil 1", temps: 8, points: 5, type: "Formular",
      ctr: ["Lisez la situation et écrivez les 5 informations manquantes dans le formulaire.", "Vakio ny tantara ary soraty ao amin'ny taratasy ireo vaovao 5 tsy ao."],
      consigne: `<p>Ihre Freundin Voahangy Ravelo möchte im Fitnessstudio „Aktiv“ Mitglied werden. Sie ist 29 Jahre alt, wohnt in der Lindenstraße 3 in 50667 Köln und ihre Handynummer ist 0176 554433. Sie möchte am Morgen trainieren und bezahlt jeden Monat.</p><p>Im Formular fehlen fünf Informationen. Helfen Sie Ihrer Freundin.</p>`,
      form: { titre: "Anmeldung – Fitnessstudio Aktiv", champs: [
        { label: "Name", v: "Ravelo" },
        { n: 1, label: "Vorname", a: ["Voahangy"] },
        { n: 2, label: "Alter", a: ["29", "29 Jahre", "neunundzwanzig"] },
        { label: "Straße", v: "Lindenstraße 3" },
        { n: 3, label: "PLZ / Ort", a: ["50667 Köln", "50667 Koeln"] },
        { n: 4, label: "Handy", a: ["0176 554433", "0176554433", "0176/554433", "0176 55 44 33"] },
        { n: 5, label: "Training", choix: ["morgens", "abends"], a: ["morgens"] },
        { label: "Bezahlung", v: "monatlich" }
      ] },
      exp: { mg: "Ao amin'ny tantara ny valiny rehetra. « am Morgen » = morgens.", fr: "Tout est dans le texte ; « am Morgen » = morgens." } },
    { id: "S2", nom: "Teil 2", temps: 12, mots: 30, points: 10, type: "Kurze Mitteilung",
      consigne: `<p>Ihr Kollege Herr Schulz hat am Samstag Geburtstag und lädt Sie zu einer Feier ein. Sie können nicht kommen. Schreiben Sie Herrn Schulz:</p><ul><li>Danken Sie für die Einladung.</li><li>Warum können Sie nicht kommen?</li><li>Machen Sie einen Vorschlag für ein Treffen.</li></ul><p class="small">Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter). Schreiben Sie auch eine Anrede und einen Gruß.</p>`,
      ctr: ["Remerciez pour l'invitation, expliquez pourquoi vous ne venez pas, proposez une rencontre. ~30 mots.", "Misaora ny fanasana, lazao ny antony tsy ahatongavanao, manolora fotoana hafa. ~30 teny."],
      checklist: ["Anrede: Lieber Herr Schulz,", "Fisaorana (Danke für …)", "Antony (Ich kann leider nicht kommen, weil … / denn …)", "Soso-kevitra (Können wir … ?)", "Gruß + anarana", "~30 teny"],
      redemittel: ["Lieber Herr Schulz,", "vielen Dank für die Einladung!", "Leider kann ich am Samstag nicht kommen.", "Ich muss … / Ich habe …", "Können wir am … zusammen einen Kaffee trinken?", "Viele Grüße"],
      modele: `Lieber Herr Schulz,

vielen Dank für die Einladung zu Ihrem Geburtstag! Leider kann ich am Samstag nicht kommen. Meine Schwester heiratet in Paris. Können wir am Montag zusammen einen Kaffee trinken?

Viele Grüße
Andry` }
  ], criteres: [
    { nom: "Aufgabenerfüllung", desc: "Teboka 3 voavaly avokoa? · Les 3 points sont traités ?" },
    { nom: "Kommunikative Gestaltung", desc: "Anrede sy Gruß mety · Formules d'appel et de salutation" }
  ] },

  sprechen: { preparation: 0, teile: [
    { id: "P1", nom: "Teil 1 – Sich vorstellen", mg: "Mampahafantatra ny tena", duree: 1, mode: "present", em: "🙋",
      consigne: `<p>Stellen Sie sich vor. Sprechen Sie zu den Stichwörtern.</p><div class="plan"><b>Name? · Alter? · Land? · Wohnort? · Sprachen? · Beruf? · Hobby?</b></div><p class="small">Danach: Buchstabieren Sie Ihren Wohnort und nennen Sie Ihre Hausnummer.</p>`,
      ctr: ["Présentez-vous avec les mots-clés, puis épelez votre ville et dites votre numéro de rue.", "Ampahafantaro ny tenanao, avy eo tononina tsirairay ny litera amin'ny tanànanao ary lazao ny laharan'ny tranonao."],
      themes: [{ titre: "Sich vorstellen", points: [
        { de: "Name? Alter?", mg: "Anarana? Taona?", fr: "Nom ? Âge ?" }, { de: "Land? Wohnort?", mg: "Firenena? Toerana honenana?", fr: "Pays ? Ville ?" },
        { de: "Sprachen?", mg: "Fiteny?", fr: "Langues ?" }, { de: "Beruf? Hobby?", mg: "Asa? Fialam-boly?", fr: "Métier ? Loisirs ?" },
        { de: "Wohnort buchstabieren + Hausnummer", mg: "Tononina tsirairay ny litera amin'ny tanànanao + laharan'ny trano", fr: "Épeler sa ville + numéro de rue" } ],
        modele: `Mein Name ist Andry Rakoto. Ich bin 31 Jahre alt.
Ich komme aus Madagaskar. Ich wohne in Toamasina, das ist eine Stadt am Meer.
Ich spreche Malagasy, Französisch und Englisch. Deutsch lerne ich seit sechs Monaten.
Ich bin Mechaniker von Beruf. In meiner Freizeit spiele ich Fußball.

Toamasina: T – O – A – M – A – S – I – N – A. Meine Hausnummer ist 27.` }],
      redemittel: [["Mampahafantatra · Se présenter", ["Mein Name ist …", "Ich bin … Jahre alt.", "Ich komme aus … und wohne in …", "Ich spreche …", "Ich bin … von Beruf.", "In meiner Freizeit … ich gern."]]] },
    { id: "P2", nom: "Teil 2 – Um Informationen bitten", mg: "Manontany sy mamaly", duree: 3, mode: "dialog", em: "🃏",
      consigne: `<p><b>Thema: Einkaufen.</b> Sie bekommen Karten mit Wörtern. Fragen Sie Ihren Partner / Ihre Partnerin und antworten Sie.</p><div class="plan">Karten: <b>Supermarkt · Kleidung · Geld · Markt · Geschenk · Samstag</b></div>`,
      ctr: ["Thème : faire les courses. Questions avec les cartes, puis réponses.", "Lohahevitra: fiantsenana. Manontania sy mamalia amin'ny karatra."],
      partenaire: [
        { id: "ga1m2-p2-1", t: "Wo kaufst du dein Essen? Im Supermarkt oder auf dem Markt?", cue: "Valio. · Réponds.", aide: ["Ich kaufe meistens im Supermarkt.", "Obst kaufe ich auf dem Markt."] },
        { id: "ga1m2-p2-2", t: "Okay. Deine Karte ist „Kleidung“. Frag mich bitte!", cue: "Manontania momba ny « Kleidung ». · Pose une question.", aide: ["Wo kaufst du Kleidung?", "Kaufst du gern Kleidung?"] },
        { id: "ga1m2-p2-3", t: "Ich kaufe Kleidung oft im Internet. Meine Frage: Was kaufst du am Samstag?", cue: "Valio. · Réponds.", aide: ["Am Samstag kaufe ich Obst und Gemüse.", "Am Samstag gehe ich in die Stadt."] },
        { id: "ga1m2-p2-4", t: "Schön! Deine nächste Karte ist „Geschenk“.", cue: "Manontania momba ny « Geschenk ». · Question sur « cadeau ».", aide: ["Was schenkst du deiner Mutter zum Geburtstag?", "Kaufst du gern Geschenke?"] },
        { id: "ga1m2-p2-5", t: "Meistens Blumen oder Schokolade. Letzte Frage: Bezahlst du lieber bar oder mit Karte?", cue: "Valio. · Réponds.", aide: ["Ich bezahle lieber bar.", "Meistens bezahle ich mit Karte."] }
      ],
      redemittel: [["Manontany · Demander", ["Wo kaufst du …?", "Was kaufst du …?", "Kaufst du gern …?", "Wie viel kostet …?"]], ["Mamaly · Répondre", ["Ich kaufe … im / auf dem …", "Meistens …", "Lieber …"]]],
      modele: `A: Wo kaufst du dein Essen?
B: Meistens im Supermarkt. Obst kaufe ich auf dem Markt.
B: Wo kaufst du Kleidung?
A: Oft im Internet.
A: Was kaufst du am Samstag?
B: Am Samstag kaufe ich Brot und Gemüse.
B: Was schenkst du deiner Mutter zum Geburtstag?
A: Meistens Blumen.` },
    { id: "P3", nom: "Teil 3 – Bitten formulieren", mg: "Mangataka zavatra", duree: 3, mode: "dialog", em: "🙏",
      consigne: `<p>Sie bekommen Karten mit Bildern. Formulieren Sie eine Bitte und reagieren Sie auf die Bitte von Ihrem Partner / Ihrer Partnerin.</p>`,
      partenaire: [
        { id: "ga1m2-p3-1", t: "Können Sie mir bitte Ihren Stift leihen?", cue: "Valio. · Réagis.", aide: ["Ja, gern. Hier, bitte.", "Tut mir leid, ich habe nur einen."] },
        { id: "ga1m2-p3-2", t: "Danke! Jetzt Sie: Ihre Karte zeigt ein Glas Wasser.", cue: "Mangataha rano. · Demande de l'eau.", aide: ["Kann ich bitte ein Glas Wasser haben?", "Geben Sie mir bitte ein Glas Wasser."] },
        { id: "ga1m2-p3-3", t: "Natürlich, hier bitte. Meine Karte: ein Telefon. Darf ich kurz Ihr Handy benutzen?", cue: "Valio. · Réagis.", aide: ["Ja, natürlich.", "Tut mir leid, mein Akku ist leer."] },
        { id: "ga1m2-p3-4", t: "Kein Problem. Ihre letzte Karte zeigt eine Tür.", cue: "Mangataha hanidy ny varavarana. · Demande de fermer la porte.", aide: ["Können Sie bitte die Tür zumachen?", "Machen Sie bitte die Tür zu!"] }
      ],
      redemittel: [["Mangataka · Demander", ["Können Sie bitte …?", "Darf ich …?", "Kann ich bitte … haben?"]], ["Mamaly · Réagir", ["Ja, gern!", "Natürlich.", "Tut mir leid, …"]]],
      modele: `A: Können Sie mir bitte Ihren Stift leihen?
B: Ja, gern. Hier, bitte.
B: Kann ich bitte ein Glas Wasser haben?
A: Natürlich, hier bitte.
A: Darf ich kurz Ihr Handy benutzen?
B: Tut mir leid, mein Akku ist leer.
B: Können Sie bitte die Tür zumachen?
A: Ja, sofort.` }
  ], criteres: [
    { nom: "Aufgabenerfüllung", desc: "Nanao ny asa nangatahina ve? · Tâche réalisée ?" },
    { nom: "Sprachliche Realisierung", desc: "Fehezanteny azo henoina · Phrases compréhensibles" }
  ] },

  vocab: [
    { de: "die Jacke", fr: "la veste", mg: "palitao", ex: "Die Jacke kostet 49 Euro." },
    { de: "billig", fr: "bon marché", mg: "mora", ex: "Heute ist alles billiger." },
    { de: "der Flughafen", fr: "l'aéroport", mg: "seranam-piaramanidina", ex: "Der Bus fährt zum Flughafen." },
    { de: "die Kopfschmerzen", fr: "le mal de tête", mg: "aretin'andoha", ex: "Ich habe Kopfschmerzen." },
    { de: "das Fieber", fr: "la fièvre", mg: "tazo", ex: "Fieber habe ich nicht." },
    { de: "müde", fr: "fatigué", mg: "vizana", ex: "Ich bin sehr müde." },
    { de: "das Regal", fr: "l'étagère", mg: "talantalana", ex: "Das Handy liegt im Regal." },
    { de: "die Eltern", fr: "les parents", mg: "ray aman-dreny", ex: "Ich besuche meine Eltern." },
    { de: "der Ausgang", fr: "la sortie / la porte", mg: "fivoahana", ex: "Gehen Sie zum Ausgang B 14." },
    { de: "abholen", fr: "aller chercher", mg: "maka", ex: "Sie können das Auto abholen." },
    { de: "vergessen", fr: "oublier", mg: "manadino", ex: "Sie haben Ihren Schlüssel vergessen." },
    { de: "der Schlüssel", fr: "la clé", mg: "fanalahidy", ex: "Wo ist mein Schlüssel?" },
    { de: "der Aufzug", fr: "l'ascenseur", mg: "ascenseur", ex: "Es gibt keinen Aufzug." },
    { de: "gebraucht", fr: "d'occasion", mg: "efa niasa", ex: "Ich kaufe ein gebrauchtes Fahrrad." },
    { de: "der Zahnarzt", fr: "le dentiste", mg: "dokotera nify", ex: "Ich brauche einen Termin beim Zahnarzt." },
    { de: "der Geldautomat", fr: "le distributeur", mg: "milina fakana vola", ex: "Der Geldautomat ist kaputt." },
    { de: "klopfen", fr: "frapper (à la porte)", mg: "mandondona", ex: "Bitte nicht klopfen." },
    { de: "die Einladung", fr: "l'invitation", mg: "fanasana", ex: "Vielen Dank für die Einladung!" },
    { de: "das Geschenk", fr: "le cadeau", mg: "fanomezana", ex: "Was kaufst du als Geschenk?" },
    { de: "leihen", fr: "prêter", mg: "mampindrana", ex: "Können Sie mir Ihren Stift leihen?" }
  ]
});
})();
