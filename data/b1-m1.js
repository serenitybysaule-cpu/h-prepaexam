/* =========================================================
   ZERTIFIKAT B1 (Goethe / ÖSD — examen commun)
   Modellsatz 1 — textes originaux H Conseil & Formation
   Format identique à l'examen : Lesen 5 Teile / 30 items,
   Hören 4 Teile / 30 items, Schreiben 3 Aufgaben,
   Sprechen 3 Teile.
   ========================================================= */
window.POOLS = window.POOLS || {};
window.POOLS.B1 = window.POOLS.B1 || { sets: [] };

window.POOLS.B1.sets.push({
  id: "b1m1",
  titre: "Modellsatz 1",
  theme: "Lena sy ny mofo mamy · Reparatur-Café · Handyverbot",

  /* ======================= LESEN ======================= */
  lesen: {
    temps: 65,
    teile: [
      {
        id: "L1", nom: "Teil 1", temps: 10, type: "rf",
        consigne: "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen Richtig oder Falsch?",
        texte: `<div class="blog"><div class="blog-head"><b>LenasReiseBlog.de</b><span>Reisen, Menschen, kleine Abenteuer …</span></div>
<p class="blog-date">Samstag, den 14. September</p>
<p>Heute möchte ich euch von einem Tag erzählen, den ich so schnell nicht vergessen werde. Eigentlich wollte ich nur mit dem Zug zu meiner Schwester nach Hamburg fahren. Sie hatte mich zu ihrer Hochzeitsfeier eingeladen, und ich hatte versprochen, den Kuchen mitzubringen. Morgens um sieben stand ich also mit einer riesigen Torte am Bahnhof. Dann kam die Durchsage: Mein Zug fällt wegen eines technischen Problems aus! Der nächste Zug sollte erst zwei Stunden später fahren – viel zu spät, denn die Feier begann um zwölf Uhr.</p>
<p>Ich war total verzweifelt. Da sprach mich eine ältere Dame an, die neben mir auf der Bank saß und selbst auf ihren Zug nach Bremen wartete. Sie erzählte mir, dass ihr Sohn sie gerade zum Bahnhof gebracht hatte und jetzt mit dem Auto weiter nach Hamburg fuhr – zu einem Termin. Sie rief ihn sofort an, und zehn Minuten später saß ich in seinem Auto, mit der Torte auf dem Schoß!</p>
<p>Die Fahrt war sehr lustig. Wir haben die ganze Zeit über Musik gesprochen, denn er spielt Gitarre in einer Band. Wegen eines Staus kurz vor Hamburg kamen wir zwar zwanzig Minuten zu spät an, aber die Torte war noch ganz. Meine Schwester war so froh, dass sie den jungen Mann gleich zur Feier eingeladen hat. Und jetzt kommt das Beste: Seine Band spielt im nächsten Monat auf dem Geburtstag meines Vaters!</p>
<p>Ich finde, man sollte öfter mit fremden Menschen sprechen. Man weiß nie, was daraus entsteht.</p>
<p>Liebe Grüße<br>eure Lena</p></div>`,
        exemple: { q: "Lena wollte mit dem Zug nach Hamburg fahren.", a: "Richtig" },
        items: [
          { n: 1, q: "Lena sollte für die Feier etwas zu essen mitbringen.", a: "r",
            exp: { mg: "« den Kuchen mitzubringen » → mofo mamy = sakafo. Marina izany.", fr: "« ich hatte versprochen, <b>den Kuchen mitzubringen</b> » → un gâteau = quelque chose à manger. <b>Richtig</b>." } },
          { n: 2, q: "Lenas Zug hatte zwei Stunden Verspätung.", a: "f",
            exp: { mg: "Fandrika! « fällt aus » = foana ny lamasinina, tsy hoe tara. Ilay lamasinina manaraka no miala 2 ora aty aoriana.", fr: "Piège classique ! Le train <b>fällt aus</b> (= est annulé). C'est le <i>train suivant</i> qui part 2 heures plus tard. Annulé ≠ en retard → <b>Falsch</b>." } },
          { n: 3, q: "Die ältere Dame wollte auch nach Hamburg fahren.", a: "f",
            exp: { mg: "Ilay vehivavy antitra dia niandry lamasinina ho any <b>Bremen</b>. Ny zanany no nankany Hamburg.", fr: "La dame attendait « ihren Zug <b>nach Bremen</b> ». C'est son <i>fils</i> qui allait à Hambourg → <b>Falsch</b>." } },
          { n: 4, q: "Lena und der Fahrer haben sich während der Fahrt über Musik unterhalten.", a: "r",
            exp: { mg: "« über Musik gesprochen » = niresaka momba ny mozika (mitovy hevitra amin'ny « sich unterhalten »).", fr: "« Wir haben die ganze Zeit <b>über Musik gesprochen</b> ». sprechen über = sich unterhalten über (synonyme) → <b>Richtig</b>." } },
          { n: 5, q: "Lena kam pünktlich zur Feier.", a: "f",
            exp: { mg: "« zwanzig Minuten zu spät » → tara 20 minitra izy, tsy ara-potoana.", fr: "« wir kamen <b>zwanzig Minuten zu spät</b> an » → pas à l'heure → <b>Falsch</b>." } },
          { n: 6, q: "Der junge Mann hat auf der Hochzeit mit seiner Band gespielt.", a: "f",
            exp: { mg: "Nasaina tamin'ny fety fotsiny ilay tovolahy. Ny tariny dia hitendry <b>amin'ny volana ho avy</b>, amin'ny tsingerintaona nahaterahan'ny dadany.", fr: "Il a été <i>invité</i> à la fête. Son groupe jouera <b>le mois prochain</b>, à l'anniversaire du <b>père</b> → <b>Falsch</b>." } }
        ]
      },
      {
        id: "L2", nom: "Teil 2", temps: 20, type: "mc",
        consigne: "Lesen Sie die Texte aus der Presse und die Aufgaben 7 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
        texte: `<div class="press"><h3>Kaputt? Nicht wegwerfen!</h3><p class="lead">In Leipzig reparieren Nachbarn gemeinsam, was andere in den Müll werfen würden.</p>
<p>Im Leipziger Stadtteil Plagwitz treffen sich jeden ersten Samstag im Monat Menschen, die nicht alles gleich wegwerfen wollen. Im „Reparatur-Café“ bringen Besucher kaputte Toaster, Lampen, Fahrräder oder Kleidung mit und reparieren sie gemeinsam mit ehrenamtlichen Helfern. „Wir machen die Arbeit nicht für die Leute, sondern mit ihnen“, erklärt die Gründerin Martina Vogt, die früher als Elektrikerin gearbeitet hat. „Wer einmal selbst einen Wasserkocher repariert hat, traut sich beim nächsten Mal mehr zu.“</p>
<p>Die Idee kommt ursprünglich aus den Niederlanden, inzwischen gibt es in Deutschland über tausend solcher Treffpunkte. Bezahlen muss man für die Hilfe nichts, viele Besucher lassen aber eine kleine Spende da. Davon kauft der Verein Werkzeug und Ersatzteile. Nicht jedes Gerät kann gerettet werden – etwa zwei Drittel der Sachen funktionieren danach aber wieder. Für Martina Vogt ist das nicht nur gut für die Umwelt: „Hier lernen sich Nachbarn kennen, die sich sonst nie getroffen hätten.“</p>
<p class="src">aus einer deutschen Zeitung</p></div>
<div class="press"><h3>Klassenzimmer im Kuhstall</h3><p class="lead">Tiroler Schulkinder lernen auf dem Bauernhof, woher ihr Essen kommt.</p>
<p>Kühe melken, Brot backen, Kartoffeln ernten: Was für viele Stadtkinder fremd ist, wird im Projekt „Schule am Bauernhof“ zum Unterricht. Seit drei Jahren besuchen Schulklassen aus Innsbruck regelmäßig Bauernhöfe in der Umgebung. Dort verbringen sie einen ganzen Schultag und helfen bei der Arbeit mit. „Viele Kinder wissen nicht, wie viel Arbeit in einem Liter Milch steckt“, sagt Bäuerin Anna Hofer, die seit Beginn des Projekts mitmacht.</p>
<p>Die Lehrerinnen und Lehrer bereiten den Besuch im Unterricht vor, zum Beispiel mit Themen wie Ernährung oder Tiere. Bezahlt wird das Projekt größtenteils vom Land Tirol, die Eltern übernehmen nur die Kosten für den Bus. Die Bilanz ist positiv: Laut einer Umfrage essen viele Kinder nach dem Besuch mehr Obst und Gemüse. Auch die Bauern profitieren, denn sie bekommen eine kleine Entschädigung und können zeigen, was sie täglich leisten. Ab dem nächsten Jahr sollen auch Schulen aus Salzburg teilnehmen.</p>
<p class="src">aus einer österreichischen Zeitung</p></div>`,
        exemple: { q: "Das Reparatur-Café …", opts: ["ist jeden Tag geöffnet.", "findet einmal im Monat statt.", "gehört einer Elektrofirma."], a: "b" },
        items: [
          { n: 7, q: "In dem ersten Text geht es um …", opts: ["einen Ort, an dem Menschen zusammen Dinge reparieren.", "ein neues Geschäft für gebrauchte Elektrogeräte.", "einen Kurs für Elektrikerinnen."], a: "a",
            exp: { mg: "Ny fanontaniana « es geht um » dia mikasika ny <b>lohahevitra ankapobeny</b>: vakio ny lohateny. Manamboatra zavatra <b>miaraka</b> ny olona.", fr: "La question « es geht um » = le <b>thème général</b>. Lis le titre et le chapeau : on répare <b>ensemble</b> (gemeinsam). → <b>a</b>." } },
          { n: 8, q: "Die Besucher …", opts: ["müssen für die Reparatur bezahlen.", "bekommen kostenlos neue Geräte.", "können freiwillig Geld geben."], a: "c",
            exp: { mg: "« eine kleine Spende » = fanomezana an-tsitrapo. Tsy voatery mandoa vola.", fr: "« Bezahlen muss man nichts, viele lassen aber <b>eine kleine Spende</b> da » → Spende = don volontaire → <b>c</b>." } },
          { n: 9, q: "Martina Vogt findet das Café auch wichtig, weil …", opts: ["Nachbarn dort Kontakt zueinander bekommen.", "dort alle Geräte repariert werden können.", "sie dort neue Mitarbeiter findet."], a: "a",
            exp: { mg: "« Hier lernen sich Nachbarn kennen » = mifankahalala ny mpifanolo-bodirindrina. Diso ny b: ny 2/3 ihany no mety amboarina.", fr: "« Hier <b>lernen sich Nachbarn kennen</b> ». b) est faux : seulement <b>zwei Drittel</b> (2/3) fonctionnent. → <b>a</b>." } },
          { n: 10, q: "In dem zweiten Text geht es darum, dass …", opts: ["Kinder auf Bauernhöfen lernen.", "Bauern in Schulen unterrichten.", "Schulen eigene Gärten bekommen."], a: "a",
            exp: { mg: "Ny ankizy no mankany amin'ny toeram-pambolena, tsy ny tantsaha no mankany an-tsekoly.", fr: "Ce sont les classes qui vont <b>à la ferme</b> (besuchen Bauernhöfe), pas les fermiers qui vont à l'école. → <b>a</b>." } },
          { n: 11, q: "Die Kosten für das Projekt …", opts: ["zahlen die Bauern.", "übernimmt größtenteils das Land.", "tragen die Eltern komplett."], a: "b",
            exp: { mg: "« größtenteils vom Land Tirol » = ny faritra no mandoa ny ankabeazany; ny bus ihany no aloan'ny ray aman-dreny.", fr: "« Bezahlt wird das Projekt <b>größtenteils vom Land Tirol</b>, die Eltern übernehmen <b>nur</b> den Bus » → <b>b</b>." } },
          { n: 12, q: "Nach dem Besuch …", opts: ["wollen viele Kinder Bauer werden.", "ernähren sich viele Kinder gesünder.", "besuchen die Familien den Hof am Wochenende."], a: "b",
            exp: { mg: "« mehr Obst und Gemüse » = mihinana voankazo sy legioma bebe kokoa = sakafo mahasalama kokoa.", fr: "« essen viele Kinder <b>mehr Obst und Gemüse</b> » = sich gesünder ernähren (reformulation !) → <b>b</b>." } }
        ]
      },
      {
        id: "L3", nom: "Teil 3", temps: 10, type: "match",
        consigne: "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall wählen Sie 0.",
        contexte: "Einige Bekannte von Ihnen sind neu in der Stadt und suchen passende Angebote für ihre Freizeit und ihren Alltag.",
        annonces: {
          a: "<b>Sprachcafé International</b><br>Jeden Donnerstag ab 19 Uhr im Café Mondo: Englisch, Französisch und Spanisch sprechen mit Muttersprachlern. Eintritt frei – Sie zahlen nur Ihre Getränke!",
          b: "<b>Lesepaten gesucht!</b><br>Die Stadtbibliothek sucht Freiwillige, die einmal pro Woche Kindern vorlesen. Keine Vorkenntnisse nötig. Info: www.bibliothek-lesepaten.de",
          c: "<b>Fit mit Fellnase</b><br>Lauf- und Fitnesstraining für Mensch und Hund im Stadtpark. Dienstag und Freitag, 18 Uhr. Anmeldung: www.fellnase-fit.de",
          d: "<b>Musikschule Allegro</b><br>Gitarre und Klavier für Kinder ab 6 Jahren und Erwachsene. Unterricht Montag bis Freitag, 9–13 Uhr.",
          e: "<b>Tanzschule Rhythmus</b><br>Salsa, Tango, Walzer – Anfängerkurse jeden Samstag und Sonntag. Auch ohne Partner!",
          f: "<b>Bäckerei Krüger</b> sucht Aushilfe für Samstag und Sonntag (6–12 Uhr). Gute Bezahlung, nettes Team. Bewerbung direkt im Laden.",
          g: "<b>Möbelhaus Wohnwelt</b><br>Neue Küchen und Sofas zu Tiefpreisen – jetzt 20 % Rabatt auf alle Neuwaren!",
          h: "<b>Sozialkaufhaus „Zweite Chance“</b><br>Gebrauchte Möbel, Kleidung und Haushaltswaren zu kleinen Preisen. Lieferung möglich.",
          i: "<b>Englisch für den Beruf</b><br>Intensivkurs mit Zertifikat, 12 Wochen, 890 €. Kleine Gruppen, erfahrene Lehrkräfte.",
          j: "<b>Volkshochschule: „Frisch & Leicht“</b><br>Kochkurs für gesunde Gerichte, schnell zubereitet. 5 Abende, 60 €."
        },
        exemple: { q: "Paul möchte am Wochenende tanzen lernen.", a: "e" },
        items: [
          { n: 13, q: "Amira möchte zusammen mit ihrem Hund Sport machen.", a: "c", exp: { mg: "« Mensch und Hund » → fanatanjahan-tena ho an'ny olona sy ny alika.", fr: "« Training für <b>Mensch und Hund</b> » → <b>c</b>." } },
          { n: 14, q: "Jonas sucht günstige gebrauchte Möbel für seine Wohnung.", a: "h", exp: { mg: "« gebraucht » = efa niasa. Fandrika ny g satria entana <b>vaovao</b> (Neuwaren).", fr: "<b>gebraucht</b> + günstig → h. Attention : g = meubles <b>neufs</b> (Neuwaren) → piège." } },
          { n: 15, q: "Fatima will ihr Englisch in einer Gruppe üben, ohne viel Geld auszugeben.", a: "a", exp: { mg: "« Eintritt frei » = maimaim-poana. Lafo loatra ny i (890 €).", fr: "« Eintritt frei » → a. Le cours i coûte <b>890 €</b> → trop cher, piège." } },
          { n: 16, q: "Ben möchte abends ein Musikinstrument lernen.", a: "0", exp: { mg: "Ny sekoly mozika (d) dia maraina ihany (9–13 ora). Tsy misy filazana ho an'ny hariva → 0.", fr: "La seule école de musique (d) donne cours de <b>9 à 13 h</b> (le matin). Pas d'annonce pour le soir → <b>0</b>." } },
          { n: 17, q: "Lisa sucht einen Nebenjob am Wochenende.", a: "f", exp: { mg: "Mpanampy amin'ny <b>Asabotsy sy Alahady</b> → asa fanampiny faran'ny herinandro.", fr: "Aushilfe <b>Samstag und Sonntag</b> → <b>f</b>." } },
          { n: 18, q: "Dimitri möchte lernen, wie man gesund kocht.", a: "j", exp: { mg: "Fampianarana mahandro sakafo <b>mahasalama</b> → j.", fr: "Kochkurs für <b>gesunde Gerichte</b> → <b>j</b>." } },
          { n: 19, q: "Sofia möchte anderen Menschen ehrenamtlich helfen.", a: "b", exp: { mg: "« Freiwillige » = an-tsitrapo (ehrenamtlich) → b.", fr: "<b>Freiwillige</b> = ehrenamtlich (bénévole) → <b>b</b>." } }
        ]
      },
      {
        id: "L4", nom: "Teil 4", temps: 15, type: "jn",
        consigne: "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für ein Verbot?",
        contexte: "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über ein Handyverbot an Schulen.",
        exemple: { nom: "Thomas, 45, Köln", texte: "Ich bin Lehrer und sehe jeden Tag, wie sehr die Handys stören. Die Schüler schauen in der Pause nur noch auf den Bildschirm, statt miteinander zu reden. Ein Verbot wäre für alle eine Erleichterung.", a: "Ja" },
        items: [
          { n: 20, nom: "Mia, 17, Wien", q: "Ich brauche mein Handy für die Schule: Wir machen Vokabelübungen mit Apps und recherchieren im Internet. Statt die Geräte zu verbieten, sollte man lernen, sie sinnvoll zu nutzen.", a: "n",
            exp: { mg: "« Statt die Geräte zu verbieten » = fa tsy handrara → manohitra ny fandrarana izy (Nein).", fr: "« <b>Statt</b> die Geräte zu verbieten » → elle propose autre chose qu'une interdiction → <b>Nein</b>." } },
          { n: 21, nom: "Karin, 52, Dresden", q: "Meine Tochter war früher eine gute Schülerin. Seit sie ein Smartphone hat, kann sie sich kaum noch konzentrieren. Ich bin froh über jede Stunde, in der sie es nicht benutzen darf – in der Schule sollte es deshalb ganz weg.", a: "j",
            exp: { mg: "« sollte es ganz weg » = tokony hesorina tanteraka → manohana ny fandrarana (Ja).", fr: "« in der Schule sollte es <b>ganz weg</b> » → <b>Ja</b>." } },
          { n: 22, nom: "Ali, 16, Hamburg", q: "Viele Eltern wollen ihre Kinder nach der Schule erreichen. Wenn das Handy verboten ist, geht das nicht. Klare Regeln im Unterricht reichen völlig.", a: "n",
            exp: { mg: "« Klare Regeln reichen » = ampy ny fitsipika mazava, tsy ilaina ny mandrara (Nein).", fr: "« Klare Regeln <b>reichen völlig</b> » = des règles suffisent, pas besoin d'interdire → <b>Nein</b>." } },
          { n: 23, nom: "Helga, 68, Zürich", q: "Zu meiner Zeit gab es keine Handys, und wir haben trotzdem viel gelernt. Ich glaube, die Kinder würden sich wieder mehr bewegen und miteinander spielen, wenn die Geräte in der Schule tabu wären.", a: "j",
            exp: { mg: "Mahita tombony izy raha « tabu » (voarara) ny finday → Ja.", fr: "Elle voit des avantages si les appareils étaient « <b>tabu</b> » (interdits) → <b>Ja</b>." } },
          { n: 24, nom: "Lukas, 34, Berlin", q: "Natürlich lenken Handys ab, das will ich nicht bestreiten. Aber ein Verbot löst das Problem nicht, die Kinder benutzen sie dann eben heimlich. Wichtiger wären Kurse, in denen sie lernen, gut mit Medien umzugehen.", a: "n",
            exp: { mg: "Fandrika: manaiky ny olana izy aloha, fa aorian'ny <b>aber</b>: « ein Verbot löst das Problem nicht » → Nein. Matetika aorian'ny « aber » no misy ny tena hevitra.", fr: "Piège : il commence par admettre le problème (« Natürlich … »), mais après le <b>Aber</b> : « ein Verbot löst das Problem <b>nicht</b> » → <b>Nein</b>. Astuce : l'opinion vient souvent APRÈS « aber »." } },
          { n: 25, nom: "Sandra, 41, Graz", q: "Am Anfang war ich skeptisch, als die Schule meines Sohnes das Handyverbot eingeführt hat. Inzwischen sehe ich, dass es funktioniert: weniger Streit in den Chats und mehr Ruhe im Unterricht. Andere Schulen sollten das auch machen.", a: "j",
            exp: { mg: "Nisalasala izy <b>tany am-boalohany</b>, fa <b>ankehitriny</b> (inzwischen) resy lahatra izy → Ja.", fr: "Piège inverse : sceptique <b>au début</b>, mais <b>inzwischen</b> (maintenant) convaincue : « Andere Schulen sollten das auch machen » → <b>Ja</b>." } },
          { n: 26, nom: "Peter, 29, Bern", q: "Ein Verbot klingt einfach, aber wer soll es kontrollieren? Die Lehrer haben schon genug zu tun. Außerdem gehört das Smartphone heute zum Leben – auch in der Schule.", a: "n",
            exp: { mg: "« gehört zum Leben – auch in der Schule » → manohitra ny fandrarana (Nein).", fr: "« gehört das Smartphone heute zum Leben – <b>auch in der Schule</b> » → contre l'interdiction → <b>Nein</b>." } }
        ]
      },
      {
        id: "L5", nom: "Teil 5", temps: 10, type: "mc",
        consigne: "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
        contexte: "Sie haben sich in der Stadtbibliothek Neustadt angemeldet und lesen die Benutzungsordnung.",
        texte: `<div class="rules"><h3>BENUTZUNGSORDNUNG</h3>
<p><b>Anmeldung:</b> Für die Ausleihe benötigen Sie einen Bibliotheksausweis. Diesen erhalten Sie an der Information gegen Vorlage eines gültigen Personalausweises. Kinder und Jugendliche unter 16 Jahren benötigen die Unterschrift eines Elternteils. Der Ausweis kostet für Erwachsene 15 Euro im Jahr, für Schüler und Studierende ist er kostenlos.</p>
<p><b>Ausleihe:</b> Bücher können vier Wochen ausgeliehen werden, DVDs und Spiele eine Woche. Die Leihfrist kann zweimal online oder telefonisch verlängert werden, sofern keine Vormerkung vorliegt.</p>
<p><b>Rückgabe:</b> Medien können während der Öffnungszeiten an der Theke oder rund um die Uhr am Rückgabeautomaten im Eingangsbereich zurückgegeben werden. Bei verspäteter Rückgabe wird eine Gebühr von 0,50 Euro pro Medium und Woche erhoben.</p>
<p><b>Verlust und Beschädigung:</b> Verlorene oder beschädigte Medien sind zu ersetzen. Bitte melden Sie Schäden sofort an der Information und versuchen Sie nicht, diese selbst zu reparieren.</p>
<p><b>Verhalten:</b> In den Lesesälen ist Ruhe zu halten. Telefonieren ist nur im Foyer gestattet. Getränke in verschlossenen Flaschen sind erlaubt, Speisen dürfen nur in der Cafeteria verzehrt werden.</p>
<p><b>Internet:</b> Die Computer im 1. Stock können mit dem Bibliotheksausweis bis zu zwei Stunden täglich kostenlos genutzt werden. WLAN steht allen Besucherinnen und Besuchern zur Verfügung.</p></div>`,
        items: [
          { n: 27, q: "Einen Bibliotheksausweis …", opts: ["bekommen Studierende gratis.", "können nur Erwachsene bekommen.", "muss man online beantragen."], a: "a",
            exp: { mg: "« für Studierende kostenlos » = maimaim-poana ho an'ny mpianatra eny amin'ny oniversite.", fr: "« für Schüler und Studierende ist er <b>kostenlos</b> » = gratis → <b>a</b>." } },
          { n: 28, q: "Eine DVD …", opts: ["darf man vier Wochen behalten.", "kann man nicht verlängern.", "muss man nach einer Woche zurückgeben oder verlängern."], a: "c",
            exp: { mg: "DVD: <b>herinandro iray</b>, azo halavaina indroa. Ny boky no 4 herinandro.", fr: "DVDs : <b>eine Woche</b>, et on peut prolonger 2 fois → <b>c</b>. a) concerne les <i>livres</i>." } },
          { n: 29, q: "Wenn ein Buch kaputt ist, …", opts: ["soll man es selbst reparieren.", "muss man das an der Information sagen.", "zahlt man 0,50 Euro pro Woche."], a: "b",
            exp: { mg: "« melden Sie Schäden » = lazao amin'ny Information ny fahasimbana. Aza amboarina irery.", fr: "« Bitte <b>melden</b> Sie Schäden sofort an der Information » (melden = signaler) → <b>b</b>. c) concerne le <i>retard</i>." } },
          { n: 30, q: "In der Bibliothek …", opts: ["darf man in den Lesesälen etwas trinken.", "kann man überall telefonieren.", "darf man am Platz essen."], a: "a",
            exp: { mg: "« Getränke … erlaubt » = azo atao ny misotro. Ny sakafo kosa ao amin'ny cafétéria ihany.", fr: "« Getränke in verschlossenen Flaschen sind <b>erlaubt</b> » → <b>a</b>. Manger : seulement à la cafétéria." } }
        ]
      }
    ]
  },

  /* ======================= HÖREN ======================= */
  hoeren: {
    temps: 40,
    teile: [
      {
        id: "H1", nom: "Teil 1", ecoutes: 2, type: "mixed",
        consigne: "Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
        clips: [
          { id: "b1m1-h1-t1", titre: "Text 1", script: [
              { s: "f", n: "Praxis", t: "Guten Tag, Frau Rakoto, hier ist die Zahnarztpraxis Doktor Weber. Sie haben morgen um zehn Uhr einen Termin bei uns. Leider ist Doktor Weber krank, deshalb müssen wir den Termin absagen. Wir können Ihnen einen neuen Termin am Donnerstag um fünfzehn Uhr anbieten. Bitte rufen Sie uns kurz zurück und sagen Sie uns, ob das für Sie passt. Und denken Sie bitte daran, Ihre Versichertenkarte mitzubringen. Unsere Nummer ist null drei vier eins, fünfundfünfzig, zweiundachtzig, neunzig. Vielen Dank und auf Wiederhören." }],
            items: [
              { n: 1, type: "rf", q: "Der Termin von Frau Rakoto findet wie geplant morgen statt.", a: "f",
                exp: { mg: "« den Termin absagen » = foanana ny fotoana → tsy rahampitso intsony.", fr: "« deshalb müssen wir den Termin <b>absagen</b> » (annuler) → <b>Falsch</b>." } },
              { n: 2, type: "mc", q: "Frau Rakoto soll …", opts: ["am Donnerstag vorbeikommen, ohne anzurufen.", "die Praxis zurückrufen.", "eine neue Versichertenkarte bestellen."], a: "b",
                exp: { mg: "« rufen Sie uns zurück » = miantsoa indray ny toeram-pitsaboana.", fr: "« Bitte <b>rufen Sie uns kurz zurück</b> » → <b>b</b>." } }
            ] },
          { id: "b1m1-h1-t2", titre: "Text 2", script: [
              { s: "m", n: "Radio", t: "Und nun die Verkehrsmeldungen. Auf der A neun zwischen Leipzig und Halle gibt es nach einem Unfall mit zwei Lastwagen einen Stau von acht Kilometern. Die rechte Spur ist gesperrt. Bitte fahren Sie vorsichtig. In der Leipziger Innenstadt ist die Karl-Liebknecht-Straße wegen Bauarbeiten noch bis Freitag gesperrt. Die Busse fahren eine Umleitung." }],
            items: [
              { n: 3, type: "rf", q: "Sie hören Informationen zum Straßenverkehr.", a: "r",
                exp: { mg: "« Verkehrsmeldungen » = vaovao momba ny fifamoivoizana.", fr: "« die <b>Verkehrsmeldungen</b> » → infos trafic → <b>Richtig</b>." } },
              { n: 4, type: "mc", q: "Auf der Autobahn …", opts: ["gibt es eine Baustelle.", "gab es einen Unfall.", "sind alle Spuren gesperrt."], a: "b",
                exp: { mg: "« nach einem Unfall » = nisy lozam-pifamoivoizana. Ny asa (Baustelle) dia ao an-tanàna fa tsy amin'ny lalambe.", fr: "« nach einem <b>Unfall</b> mit zwei Lastwagen ». La Baustelle (travaux) est <i>en ville</i>, pas sur l'autoroute → <b>b</b>." } }
            ] },
          { id: "b1m1-h1-t3", titre: "Text 3", script: [
              { s: "f", n: "Durchsage", t: "Liebe Kundinnen und Kunden, nur heute gibt es in unserer Sportabteilung im dritten Stock dreißig Prozent Rabatt auf alle Laufschuhe. Außerdem bieten wir Ihnen in unserem Restaurant im Erdgeschoss ab vierzehn Uhr Kaffee und Kuchen zum halben Preis. Bitte beachten Sie: Heute schließen wir wegen einer Betriebsfeier bereits um achtzehn Uhr. Wir wünschen Ihnen einen schönen Einkauf." }],
            items: [
              { n: 5, type: "rf", q: "Das Kaufhaus ist heute länger geöffnet als sonst.", a: "f",
                exp: { mg: "« bereits um 18 Uhr » = efa mihidy amin'ny 18 ora → aloha noho ny mahazatra.", fr: "« Heute schließen wir <b>bereits</b> um 18 Uhr » (bereits = déjà, plus tôt) → <b>Falsch</b>." } },
              { n: 6, type: "mc", q: "Was ist heute billiger?", opts: ["Laufschuhe", "alle Sportartikel", "das Mittagessen"], a: "a",
                exp: { mg: "Ny <b>Laufschuhe</b> (kiraro hihazakazahana) ihany no mihena vidy.", fr: "Réduction sur « alle <b>Laufschuhe</b> » seulement. Au restaurant : <i>Kaffee und Kuchen</i>, pas le déjeuner → <b>a</b>." } }
            ] },
          { id: "b1m1-h1-t4", titre: "Text 4", script: [
              { s: "m", n: "Jonas", t: "Hallo Mira, hier ist Jonas. Du, wegen Samstag: Der Film um acht ist leider schon ausverkauft. Ich habe aber Karten für die Vorstellung um halb sechs bekommen. Danach könnten wir noch zusammen essen gehen, vielleicht beim neuen Italiener am Marktplatz? Ich hole dich um fünf mit dem Auto ab … ach nein, warte, mein Auto ist ja in der Werkstatt. Lass uns lieber direkt vor dem Kino treffen, okay? Ruf mich an! Tschüss!" }],
            items: [
              { n: 7, type: "rf", q: "Jonas schlägt Mira eine andere Uhrzeit für das Kino vor.", a: "r",
                exp: { mg: "Feno ny 20 ora, nahazo tapakila ho an'ny 17h30 izy → ora hafa.", fr: "20 h est complet, il a des billets pour <b>halb sechs</b> (17h30) → <b>Richtig</b>." } },
              { n: 8, type: "mc", q: "Wo treffen sich Mira und Jonas?", opts: ["bei Mira zu Hause", "vor dem Kino", "im Restaurant am Marktplatz"], a: "b",
                exp: { mg: "Nanitsy ny teniny izy (« ach nein, warte ») → hihaona <b>eo anoloan'ny sinema</b>. Henoy tsara ny fanitsiana!", fr: "Il voulait passer la prendre… puis se corrige (« <b>ach nein, warte</b> ») : « direkt <b>vor dem Kino</b> » → <b>b</b>. Astuce : écoute bien les corrections !" } }
            ] },
          { id: "b1m1-h1-t5", titre: "Text 5", script: [
              { s: "f", n: "Wetter", t: "Und jetzt das Wetter für morgen, Sonntag. Im Norden bleibt es bewölkt, und es regnet immer wieder. Die Temperaturen liegen dort bei zwölf Grad. Im Süden dagegen scheint fast den ganzen Tag die Sonne, bei bis zu zweiundzwanzig Grad. Am Abend kann es in den Alpen einzelne Gewitter geben. Ab Montag wird es dann überall wärmer und trockener." }],
            items: [
              { n: 9, type: "rf", q: "Im Norden regnet es morgen.", a: "r",
                exp: { mg: "« Im Norden … es regnet » = avaratra: misy orana.", fr: "« Im Norden … <b>es regnet immer wieder</b> » → <b>Richtig</b>." } },
              { n: 10, type: "mc", q: "Im Süden …", opts: ["kann es am Abend in den Bergen Gewitter geben.", "regnet es den ganzen Tag.", "sind es nur zwölf Grad."], a: "a",
                exp: { mg: "« in den Alpen … Gewitter » = tendrombohitra: mety hisy oram-baratra. Ny 12 °C dia any avaratra.", fr: "« in den <b>Alpen</b> (= Berge) einzelne <b>Gewitter</b> » → <b>a</b>. 12 °C, c'est le Nord." } }
            ] }
        ]
      },
      {
        id: "H2", nom: "Teil 2", ecoutes: 1, type: "mc",
        consigne: "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
        contexte: "Sie nehmen an einer Führung durch einen Botanischen Garten teil.",
        lecture: 60,
        clips: [
          { id: "b1m1-h2", titre: "Führung", script: [
              { s: "f", n: "Führerin", t: "Herzlich willkommen im Botanischen Garten! Mein Name ist Claudia Brandt, und ich begleite Sie heute durch unseren Garten. Sie haben Glück: Normalerweise ist am Wochenende hier sehr viel los, aber heute ist es wegen des Regens angenehm ruhig. Unsere Führung dauert ungefähr eine Stunde." },
              { s: "f", n: "Führerin", t: "Zuerst gehen wir ins große Tropenhaus. Dort ist es feucht und warm, ungefähr achtundzwanzig Grad. Wer eine Jacke trägt, kann sie gern hier am Eingang an der Garderobe abgeben. Im Tropenhaus sehen Sie Pflanzen aus Südamerika, aus Afrika und – besonders interessant – aus Madagaskar. Wir haben zum Beispiel mehrere Arten von Baobab-Bäumen. Bitte fassen Sie die Pflanzen nicht an, einige sind giftig." },
              { s: "f", n: "Führerin", t: "Danach besuchen wir den Kräutergarten. Dort dürfen Sie gern an den Pflanzen riechen. Fotografieren ist übrigens überall erlaubt, nur das Blitzlicht benutzen Sie bitte nicht, das schadet den empfindlichen Pflanzen." },
              { s: "f", n: "Führerin", t: "Nach der Führung haben Sie Zeit für einen Besuch in unserem kleinen Café neben dem Teich. Ich empfehle Ihnen besonders den Apfelkuchen. Den backen wir selbst, mit Äpfeln aus unserem Garten. Und wer noch mehr wissen möchte: Am Ausgang gibt es einen kleinen Shop mit Büchern und Samen. So, jetzt geht's los. Bitte folgen Sie mir!" }],
            items: [
              { n: 11, type: "mc", q: "Heute sind im Garten …", opts: ["sehr viele Besucher.", "wenige Besucher.", "nur Schulklassen."], a: "b",
                exp: { mg: "« Normalerweise … aber heute ruhig » → vitsy ny mpitsidika anio. Ny « normalerweise » dia ny mahazatra fotsiny.", fr: "« <b>Normalerweise</b> ist viel los, <b>aber heute</b> ist es angenehm ruhig » → <b>b</b>. Piège : « normalerweise » décrit l'habitude, pas aujourd'hui." } },
              { n: 12, type: "mc", q: "Die Jacken kann man …", opts: ["im Tropenhaus aufhängen.", "am Eingang abgeben.", "im Café lassen."], a: "b",
                exp: { mg: "« am Eingang an der Garderobe » = eo am-bavahady.", fr: "« hier <b>am Eingang an der Garderobe</b> abgeben » → <b>b</b>." } },
              { n: 13, type: "mc", q: "Im Tropenhaus …", opts: ["darf man die Pflanzen berühren.", "gibt es Pflanzen aus Madagaskar.", "ist es kühl."], a: "b",
                exp: { mg: "« aus Madagaskar » → misy zavamaniry avy any Madagasikara!", fr: "« besonders interessant – aus <b>Madagaskar</b> » → <b>b</b>. Toucher est interdit, et il fait 28 °C." } },
              { n: 14, type: "mc", q: "Beim Fotografieren …", opts: ["darf man kein Blitzlicht benutzen.", "muss man vorher fragen.", "darf man nur im Kräutergarten fotografieren."], a: "a",
                exp: { mg: "« Blitzlicht … nicht » = voarara ny flash.", fr: "« nur das <b>Blitzlicht</b> benutzen Sie bitte <b>nicht</b> » → <b>a</b>." } },
              { n: 15, type: "mc", q: "Die Führerin empfiehlt …", opts: ["den Shop am Ausgang.", "einen selbst gebackenen Kuchen.", "eine zweite Führung."], a: "b",
                exp: { mg: "« Ich empfehle … den Apfelkuchen » = manoro mofo mamy nataony ihany izy.", fr: "« Ich <b>empfehle</b> Ihnen besonders den Apfelkuchen. Den backen wir selbst » → <b>b</b>. Le shop est juste mentionné." } }
            ] }
        ]
      },
      {
        id: "H3", nom: "Teil 3", ecoutes: 1, type: "rf",
        consigne: "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen Richtig oder Falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
        contexte: "Sie sind in der Straßenbahn und hören, wie sich zwei Kollegen über ihren Urlaub unterhalten.",
        lecture: 60,
        clips: [
          { id: "b1m1-h3", titre: "Gespräch", script: [
              { s: "m", n: "Markus", t: "Hallo Julia! Du bist ja ganz braun geworden. Warst du im Urlaub?" },
              { s: "f", n: "Julia", t: "Hallo Markus! Ja, ich bin erst seit Montag wieder da. Ich war zwei Wochen in Portugal, an der Algarve." },
              { s: "m", n: "Markus", t: "Toll! Mit deinem Freund?" },
              { s: "f", n: "Julia", t: "Nein, diesmal mit meiner Schwester. Mein Freund musste leider arbeiten. Aber das war auch schön, wir hatten schon lange keinen Urlaub mehr zusammen gemacht." },
              { s: "m", n: "Markus", t: "Und wie war's? Habt ihr in einem Hotel gewohnt?" },
              { s: "f", n: "Julia", t: "Nein, wir hatten eine kleine Ferienwohnung in einem Fischerdorf. Die war nicht sehr modern, aber vom Balkon konnte man das Meer sehen. Das war wirklich traumhaft." },
              { s: "m", n: "Markus", t: "Klingt super. Und das Wetter?" },
              { s: "f", n: "Julia", t: "Die erste Woche war perfekt, jeden Tag Sonne. In der zweiten Woche war es ziemlich windig, da konnten wir nicht so oft schwimmen. Wir haben dann ein Auto gemietet und Ausflüge gemacht, zum Beispiel nach Lissabon." },
              { s: "m", n: "Markus", t: "Lissabon finde ich toll! Ich war vor drei Jahren dort. Seid ihr mit der alten Straßenbahn gefahren?" },
              { s: "f", n: "Julia", t: "Ja, natürlich! Aber die war so voll, dass wir fast nichts von der Stadt gesehen haben. Das Essen war dafür fantastisch, vor allem der Fisch." },
              { s: "m", n: "Markus", t: "Ich esse ja leider keinen Fisch …" },
              { s: "f", n: "Julia", t: "Ach, es gibt auch viele andere Sachen, keine Sorge. Und du? Fährst du dieses Jahr noch weg?" },
              { s: "m", n: "Markus", t: "Ja, im Oktober. Ich wollte eigentlich nach Spanien, aber meine Frau möchte lieber in die Berge. Also fahren wir nach Österreich, zum Wandern." },
              { s: "f", n: "Julia", t: "Das ist doch auch schön. Oh, ich muss hier aussteigen. Bis morgen im Büro!" },
              { s: "m", n: "Markus", t: "Tschüss, Julia!" }],
            items: [
              { n: 16, q: "Julia war mit ihrem Freund im Urlaub.", a: "f", exp: { mg: "« diesmal mit meiner Schwester » = niaraka tamin'ny rahavaviny izy.", fr: "« Nein, diesmal mit meiner <b>Schwester</b> » → <b>Falsch</b>." } },
              { n: 17, q: "Julia und ihre Schwester haben in einem Hotel gewohnt.", a: "f", exp: { mg: "« Ferienwohnung » = trano fialan-tsasatra, tsy hotely.", fr: "« Nein, wir hatten eine kleine <b>Ferienwohnung</b> » → <b>Falsch</b>." } },
              { n: 18, q: "Von der Wohnung aus konnte man das Meer sehen.", a: "r", exp: { mg: "« vom Balkon … das Meer sehen » = hita avy eo amin'ny lavarangana ny ranomasina.", fr: "« vom Balkon konnte man <b>das Meer sehen</b> » → <b>Richtig</b>." } },
              { n: 19, q: "In der zweiten Woche konnten die beiden nicht oft schwimmen.", a: "r", exp: { mg: "« windig … nicht so oft schwimmen » = nisy rivotra, tsy afaka nilomano matetika.", fr: "« ziemlich windig, da konnten wir <b>nicht so oft schwimmen</b> » → <b>Richtig</b>." } },
              { n: 20, q: "Aus der Straßenbahn hat Julia viel von Lissabon gesehen.", a: "f", exp: { mg: "« so voll, dass wir fast nichts gesehen haben » = feno loatra ka saika tsy nahita na inona na inona.", fr: "« so voll, dass wir <b>fast nichts</b> gesehen haben » → <b>Falsch</b>." } },
              { n: 21, q: "Markus war schon einmal in Lissabon.", a: "r", exp: { mg: "« vor drei Jahren dort » = efa tany izy 3 taona lasa izay.", fr: "« Ich war <b>vor drei Jahren</b> dort » → <b>Richtig</b>." } },
              { n: 22, q: "Markus fährt im Oktober nach Spanien.", a: "f", exp: { mg: "« wollte eigentlich … aber » = nanova drafitra: <b>Aotrisy</b> no aleha.", fr: "Il <i>voulait</i> (wollte eigentlich) aller en Espagne, mais ils vont en <b>Autriche</b> → <b>Falsch</b>. Astuce : « eigentlich … aber » = changement de plan !" } }
            ] }
        ]
      },
      {
        id: "H4", nom: "Teil 4", ecoutes: 2, type: "who",
        consigne: "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
        contexte: "Der Moderator der Radiosendung „Thema am Abend“ diskutiert mit der Krankenpflegerin Amina Diallo und dem Personalberater Rolf Berger zum Thema „Arbeiten im Ausland – Chance oder Risiko?“.",
        lecture: 60,
        personnes: { a: "Moderator", b: "Amina Diallo", c: "Rolf Berger" },
        exemple: { q: "Immer mehr junge Menschen möchten im Ausland arbeiten.", a: "a" },
        clips: [
          { id: "b1m1-h4", titre: "Diskussion", script: [
              { s: "m", n: "Moderator", t: "Guten Abend und herzlich willkommen zu „Thema am Abend“. Immer mehr junge Menschen möchten im Ausland arbeiten, besonders in Deutschland, wo in vielen Berufen Fachkräfte fehlen. Ist das eine große Chance oder ein Risiko? Darüber spreche ich heute mit Amina Diallo. Sie kommt aus dem Senegal und arbeitet seit vier Jahren als Krankenpflegerin in Köln. Und mit Rolf Berger. Er berät Firmen, die Mitarbeiter aus dem Ausland einstellen. Viele sagen ja, die ersten Monate in einem neuen Land sind besonders schwer. Frau Diallo, wie war das bei Ihnen?" },
              { s: "f", n: "Amina Diallo", t: "Ja, das stimmt. Ich hatte zwar in Dakar zwei Jahre Deutsch gelernt und das B1-Zertifikat gemacht. Aber im Krankenhaus haben alle so schnell gesprochen, und dann noch Dialekt! Am Anfang war die Sprache wirklich mein größtes Problem. Ich war abends total müde." },
              { s: "m", n: "Moderator", t: "Herr Berger, erleben Sie das oft?" },
              { s: "m2", n: "Rolf Berger", t: "Sehr oft. Und deshalb sage ich immer: Man sollte sich vor der Ausreise gut über das Land informieren. Nicht nur über die Sprache, sondern auch über den Alltag, die Arbeitskultur, das Wetter. Wer gut vorbereitet ist, hat es viel leichter." },
              { s: "m", n: "Moderator", t: "Gibt es denn wirklich so viele Stellen?" },
              { s: "m2", n: "Rolf Berger", t: "Absolut. In der Pflege, im Handwerk, in der Gastronomie: Viele Firmen suchen dringend Fachkräfte aus dem Ausland. Manche Betriebe müssten ohne sie sogar schließen." },
              { s: "m", n: "Moderator", t: "Frau Diallo, was war für Sie persönlich am schwersten?" },
              { s: "f", n: "Amina Diallo", t: "Ehrlich gesagt: meine Familie. Meine Mutter, meine Geschwister, sie sind alle im Senegal geblieben. Es ist schwierig, Familie und Freunde zurückzulassen. Heute telefonieren wir jeden Tag per Video, das hilft." },
              { s: "m", n: "Moderator", t: "Herr Berger, lohnt sich so ein Schritt denn auch langfristig?" },
              { s: "m2", n: "Rolf Berger", t: "Auf jeden Fall. Ich sehe immer wieder: Wer im Ausland gearbeitet hat, hat später bessere Chancen im Beruf, egal, ob er bleibt oder zurückgeht. Man lernt, flexibel zu sein und Probleme selbst zu lösen." },
              { s: "m", n: "Moderator", t: "Kritiker sagen allerdings, dass die Anerkennung von ausländischen Abschlüssen in Deutschland oft zu lange dauert. Manche warten über ein Jahr." },
              { s: "f", n: "Amina Diallo", t: "Bei mir waren es acht Monate. Das war nicht leicht. Aber ich möchte noch etwas sagen: Man sollte nicht nur wegen des Geldes ins Ausland gehen. Natürlich verdiene ich hier mehr, aber das Leben ist auch teurer. Man braucht wirklich Interesse an dem Land und an den Menschen." },
              { s: "m", n: "Moderator", t: "Ein schönes Schlusswort. Frau Diallo, Herr Berger, vielen Dank für das Gespräch." }],
            items: [
              { n: 23, q: "Am Anfang war die Sprache das größte Problem.", a: "b", exp: { mg: "Amina: « die Sprache mein größtes Problem » → b.", fr: "Amina : « Am Anfang war die Sprache <b>mein größtes Problem</b> » → <b>b</b>." } },
              { n: 24, q: "Man sollte sich vor der Ausreise gut über das Land informieren.", a: "c", exp: { mg: "Berger: « vor der Ausreise gut informieren » → c.", fr: "Berger : « deshalb sage ich immer: Man sollte sich <b>vor der Ausreise</b> … » → <b>c</b>." } },
              { n: 25, q: "Die ersten Monate in einem neuen Land sind oft besonders schwer.", a: "a", exp: { mg: "Ny <b>mpitarika fandaharana</b> (Moderator) no niteny izany tamin'ny fanontaniany → a. Tandremo: ny Moderator koa misy fehezanteny!", fr: "C'est le <b>modérateur</b> qui le dit en posant sa question (« Viele sagen ja … ») → <b>a</b>. Attention : le modérateur dit aussi des phrases à attribuer !" } },
              { n: 26, q: "Viele Firmen suchen dringend Fachkräfte aus dem Ausland.", a: "c", exp: { mg: "Berger: « suchen dringend Fachkräfte » → c.", fr: "Berger : « Viele Firmen suchen <b>dringend</b> Fachkräfte » → <b>c</b>." } },
              { n: 27, q: "Es ist schwer, die Familie zurückzulassen.", a: "b", exp: { mg: "Amina: « Familie und Freunde zurückzulassen » → b.", fr: "Amina : « Es ist schwierig, <b>Familie und Freunde zurückzulassen</b> » → <b>b</b>." } },
              { n: 28, q: "Erfahrung im Ausland hilft später im Beruf.", a: "c", exp: { mg: "Berger: « bessere Chancen im Beruf » → c.", fr: "Berger : « hat später <b>bessere Chancen im Beruf</b> » → <b>c</b>." } },
              { n: 29, q: "Die Anerkennung von Abschlüssen dauert oft zu lange.", a: "a", exp: { mg: "Ny Moderator: « Kritiker sagen allerdings … » → a.", fr: "Le <b>modérateur</b> : « Kritiker sagen allerdings … » → <b>a</b>. Amina donne seulement son exemple (8 mois)." } },
              { n: 30, q: "Geld sollte nicht der einzige Grund sein, ins Ausland zu gehen.", a: "b", exp: { mg: "Amina: « nicht nur wegen des Geldes » → b.", fr: "Amina : « <b>nicht nur wegen des Geldes</b> ins Ausland gehen » → <b>b</b>." } }
            ] }
        ]
      }
    ]
  },

  /* ======================= SCHREIBEN ======================= */
  schreiben: {
    temps: 60,
    aufgaben: [
      {
        id: "S1", nom: "Aufgabe 1", temps: 20, mots: 80, type: "E-Mail (informell)",
        consigne: `<p>Sie sind vor zwei Wochen in eine neue Wohnung umgezogen. Ein Freund / Eine Freundin von Ihnen konnte Ihnen beim Umzug nicht helfen, weil er/sie im Urlaub war.</p>
<ul><li><b>Beschreiben Sie:</b> Wie ist die neue Wohnung?</li><li><b>Begründen Sie:</b> Was gefällt Ihnen in der neuen Umgebung besonders und warum?</li><li><b>Machen Sie einen Vorschlag</b> für einen Besuch.</li></ul>
<p class="small">Schreiben Sie eine E-Mail (circa 80 Wörter). Schreiben Sie etwas zu allen drei Punkten. Achten Sie auf den Textaufbau (Anrede, Einleitung, Reihenfolge der Inhaltspunkte, Schluss).</p>`,
        checklist: ["Anrede : Liebe … / Lieber …,", "Einleitung (Wie geht's? Wie war dein Urlaub?)", "Point 1 : décrire l'appartement", "Point 2 : ce qui me plaît + POURQUOI (weil / denn)", "Point 3 : proposition de visite (Hast du Lust …? Wie wäre es mit …?)", "Schluss + Gruß (Viele Grüße / Liebe Grüße + prénom)", "Environ 80 mots (70–100)"],
        redemittel: ["Ich hoffe, dir geht es gut und dein Urlaub war schön.", "Stell dir vor: Ich habe endlich eine neue Wohnung!", "Die Wohnung ist hell / gemütlich / ruhig und hat … Zimmer.", "Besonders gut gefällt mir …, weil …", "Hast du am … Zeit? Dann könntest du mich besuchen.", "Wie wäre es mit Samstagabend? Ich koche etwas für uns.", "Ich freue mich auf deine Antwort!"],
        modele: `Liebe Sara,

wie geht es dir? Ich hoffe, dein Urlaub in Spanien war schön! Stell dir vor: Seit zwei Wochen wohne ich in meiner neuen Wohnung. Sie hat drei Zimmer, einen kleinen Balkon und ist viel heller als die alte. Die Küche ist modern und groß genug für Gäste.

Besonders gut gefällt mir der Park direkt vor dem Haus, weil ich dort jeden Morgen joggen kann. Außerdem gibt es in der Nähe einen tollen Markt.

Hast du nächsten Samstag Zeit? Dann könntest du mich besuchen und ich koche etwas Leckeres für uns.

Liebe Grüße
Tiana`
      },
      {
        id: "S2", nom: "Aufgabe 2", temps: 25, mots: 80, type: "Diskussionsbeitrag (Meinung)",
        consigne: `<p>Sie haben im Fernsehen eine Diskussionssendung zum Thema „Sprachen lernen: online oder im Kursraum?“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung:</p>
<div class="guest"><div class="guest-h">www.diskussion-heute.de · Gästebuch</div><div class="guest-b"><b>Kevin</b> · 12.03. 18:40 Uhr<br>Ich lerne Sprachen nur noch online mit Apps und Videos. Das ist billiger, und ich kann lernen, wann ich will. Einen Kursraum mit Lehrer brauche ich nicht mehr!</div></div>
<p class="small">Schreiben Sie nun Ihre Meinung zum Thema (circa 80 Wörter).</p>`,
        checklist: ["Réagir à Kevin (Ich verstehe Kevin, aber … / Ich bin nicht ganz seiner Meinung)", "Donner MON avis clairement (Meiner Meinung nach …)", "Au moins 2 arguments avec justification (weil, denn, deshalb)", "Un exemple personnel (Ich zum Beispiel …)", "Conclusion (Deshalb finde ich … / Am besten ist …)", "PAS d'Anrede, PAS de Gruß : c'est un commentaire, pas une e-mail", "Environ 80 mots"],
        redemittel: ["Ich kann Kevin teilweise verstehen, aber …", "Meiner Meinung nach ist …", "Ein großer Vorteil ist, dass …", "Ein Nachteil ist aber, dass …", "Ich zum Beispiel habe die Erfahrung gemacht, dass …", "Außerdem / Dazu kommt, dass …", "Zusammenfassend finde ich, dass …"],
        modele: `Ich kann Kevin teilweise verstehen. Online-Lernen ist wirklich praktisch und oft billiger, weil man keine Kursgebühren bezahlen muss. Außerdem kann man lernen, wann man Zeit hat.

Meiner Meinung nach ist ein Kurs mit Lehrer aber trotzdem wichtig. Ein Lehrer korrigiert meine Fehler sofort, und im Kursraum kann ich mit anderen Teilnehmern sprechen. Ich zum Beispiel habe mit Apps viele Wörter gelernt, aber erst im Kurs habe ich mich getraut, frei zu sprechen.

Deshalb finde ich, dass eine Mischung aus beidem am besten ist.`
      },
      {
        id: "S3", nom: "Aufgabe 3", temps: 15, mots: 40, type: "E-Mail (formell)",
        consigne: `<p>Ihr Nachbar, Herr Schulz, hat Sie zu seinem 60. Geburtstag am Samstag eingeladen. Sie können aber nicht kommen.</p>
<p>Schreiben Sie an Herrn Schulz. Entschuldigen Sie sich höflich und berichten Sie, warum Sie nicht kommen können.</p>
<p class="small">Schreiben Sie eine E-Mail (circa 40 Wörter). Vergessen Sie nicht die Anrede und den Gruß am Schluss.</p>`,
        checklist: ["Anrede formelle : Sehr geehrter Herr Schulz, / Lieber Herr Schulz,", "Remercier pour l'invitation", "S'excuser poliment (Leider kann ich … / Es tut mir sehr leid)", "Donner la raison", "Utiliser « Sie / Ihnen / Ihr » (PAS du / dir)", "Gruß formel : Mit freundlichen Grüßen / Viele Grüße", "Environ 40 mots"],
        redemittel: ["Vielen Dank für Ihre freundliche Einladung.", "Leider kann ich am Samstag nicht kommen, weil …", "Es tut mir wirklich leid.", "Ich wünsche Ihnen schon jetzt alles Gute zum Geburtstag!", "Vielleicht können wir nächste Woche zusammen einen Kaffee trinken?", "Mit freundlichen Grüßen"],
        modele: `Lieber Herr Schulz,

vielen Dank für Ihre freundliche Einladung zu Ihrem 60. Geburtstag. Leider kann ich am Samstag nicht kommen, weil ich an diesem Tag meine Prüfung habe. Das tut mir sehr leid! Ich wünsche Ihnen eine schöne Feier und alles Gute.

Mit freundlichen Grüßen
Hery Rabe`
      }
    ],
    criteres: [
      { nom: "Erfüllung", desc: "Tous les points traités ? Bon type de texte (informel/formel) ? Longueur OK ?" },
      { nom: "Kohärenz", desc: "Texte bien structuré, connecteurs (weil, deshalb, außerdem, aber, dann…)" },
      { nom: "Wortschatz", desc: "Vocabulaire varié et adapté au thème" },
      { nom: "Strukturen", desc: "Grammaire : verbe en 2e position, verbe à la fin après weil/dass, conjugaison, cas" }
    ]
  },

  /* ======================= SPRECHEN ======================= */
  sprechen: {
    preparation: 15,
    teile: [
      {
        id: "P1", nom: "Teil 1 – Gemeinsam etwas planen", duree: 3,
        consigne: `<p>Eine Kollegin aus Ihrem Deutschkurs zieht nächsten Monat in eine andere Stadt. Sie möchten zusammen mit der ganzen Gruppe eine Abschiedsfeier für sie organisieren.</p>
<p>Sprechen Sie über die Punkte unten, machen Sie Vorschläge und reagieren Sie auf die Vorschläge Ihres Gesprächspartners / Ihrer Gesprächspartnerin. Planen und entscheiden Sie gemeinsam, was Sie tun möchten.</p>
<div class="plan"><b>Abschiedsfeier planen</b><ul><li>Wann feiern? (Tag, Uhrzeit?)</li><li>Wo feiern?</li><li>Essen und Getränke?</li><li>Welches Geschenk?</li><li>…</li></ul></div>`,
        partenaire: [
          { id: "b1m1-p1-1", t: "Hallo! Du, wir wollten doch die Abschiedsfeier für Laura planen. Wann sollen wir denn feiern? Ich hätte am Freitagabend Zeit. Was meinst du?" },
          { id: "b1m1-p1-2", t: "Okay, das ist eine gute Idee. Und wo sollen wir feiern? Vielleicht in einem Restaurant? Oder hast du eine andere Idee?" },
          { id: "b1m1-p1-3", t: "Gut, so machen wir das. Und was ist mit dem Essen und den Getränken? Wer bringt was mit?" },
          { id: "b1m1-p1-4", t: "Prima. Jetzt fehlt noch das Geschenk. Ich dachte an ein Buch über ihre neue Stadt. Was hältst du davon?" },
          { id: "b1m1-p1-5", t: "Super, dann haben wir alles. Ich schreibe heute Abend den anderen aus dem Kurs. Fassen wir noch mal kurz zusammen?" }
        ],
        redemittel: [
          ["Proposer", ["Ich schlage vor, dass wir …", "Wie wäre es mit …?", "Wir könnten doch …", "Was hältst du von …?"]],
          ["Accepter", ["Das ist eine gute Idee!", "Einverstanden.", "Ja, so machen wir das.", "Da hast du recht."]],
          ["Refuser poliment", ["Das finde ich nicht so gut, weil …", "Ich weiß nicht … Vielleicht lieber …?", "Am Freitag kann ich leider nicht. Geht auch …?"]],
          ["Conclure", ["Also, wir treffen uns am … um … in …", "Dann machen wir es so.", "Gut, dann haben wir alles geplant."]]
        ],
        modele: `A: Wann sollen wir feiern? Ich hätte am Freitagabend Zeit.
B: Freitag ist gut, aber viele arbeiten bis 18 Uhr. Wie wäre es mit 19 Uhr?
A: Einverstanden. Und wo? Vielleicht in einem Restaurant?
B: Ein Restaurant ist teuer. Ich schlage vor, dass wir im Kursraum feiern. Ich frage die Lehrerin.
A: Gute Idee! Und das Essen?
B: Jeder bringt etwas mit. Ich mache einen Salat, du könntest Getränke kaufen.
A: Okay. Als Geschenk dachte ich an ein Buch über ihre neue Stadt.
B: Schön! Und alle schreiben eine Karte dazu.
A: Also: Freitag, 19 Uhr, im Kursraum, jeder bringt Essen mit.`
      },
      {
        id: "P2", nom: "Teil 2 – Ein Thema präsentieren", duree: 3,
        consigne: `<p>Wählen Sie ein Thema (Thema 1 oder Thema 2) aus. Sie sollen Ihren Zuhörern ein aktuelles Thema präsentieren. Dazu finden Sie hier fünf Folien. Folgen Sie den Anweisungen und schreiben Sie Ihre Notizen und Ideen daneben.</p>`,
        themes: [
          { titre: "Haustiere in der Stadt – ja oder nein?",
            folien: ["Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.",
                     "Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.",
                     "Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.",
                     "Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.",
                     "Beenden Sie Ihre Präsentation und bedanken Sie sich bei den Zuhörern."] },
          { titre: "Lernen mit dem Internet",
            folien: ["Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.",
                     "Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.",
                     "Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.",
                     "Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.",
                     "Beenden Sie Ihre Präsentation und bedanken Sie sich bei den Zuhörern."] }
        ],
        redemittel: [
          ["Folie 1 – Einleitung", ["Ich möchte euch heute das Thema „…“ vorstellen.", "Zuerst erzähle ich von …, dann … und am Ende sage ich meine Meinung."]],
          ["Folie 2 – Meine Erfahrung", ["Ich persönlich habe …", "Vor zwei Jahren habe ich erlebt, dass …"]],
          ["Folie 3 – Mein Heimatland", ["In Madagaskar ist das so: …", "Bei uns ist es üblich, dass …", "Im Vergleich zu Deutschland …"]],
          ["Folie 4 – Vor- und Nachteile", ["Ein Vorteil ist, dass …", "Ein Nachteil ist aber …", "Meiner Meinung nach …"]],
          ["Folie 5 – Schluss", ["Damit bin ich am Ende meiner Präsentation.", "Vielen Dank für eure Aufmerksamkeit!", "Habt ihr noch Fragen?"]]
        ]
      },
      {
        id: "P3", nom: "Teil 3 – Über das Thema sprechen", duree: 2,
        consigne: `<p><b>Nach Ihrer Präsentation:</b> Reagieren Sie auf die Rückmeldung und Fragen der Prüfer/-innen und des Gesprächspartners / der Gesprächspartnerin.</p>
<p><b>Nach der Präsentation Ihres Partners / Ihrer Partnerin:</b> Geben Sie eine Rückmeldung zur Präsentation (z. B. wie Ihnen die Präsentation gefallen hat, was für Sie neu oder besonders interessant war usw.). Stellen Sie auch eine Frage zur Präsentation.</p>`,
        partenaire_presentation: { id: "b1m1-p3-partner", t: "Ich möchte euch heute das Thema „Sport im Alltag“ vorstellen. Zuerst erzähle ich von meiner Erfahrung, dann von der Situation in meinem Heimatland Polen, und am Ende sage ich meine Meinung. Ich selbst fahre jeden Tag mit dem Fahrrad zur Arbeit. Das sind zwanzig Minuten, und ich fühle mich danach viel wacher. In Polen machen viele Menschen am Wochenende Sport, aber in der Woche haben sie wenig Zeit. Ein Vorteil von Sport im Alltag ist, dass man gesünder lebt und Geld für das Fitnessstudio spart. Ein Nachteil ist, dass es bei Regen nicht so angenehm ist. Meiner Meinung nach sollte jeder ein bisschen Bewegung in seinen Alltag bringen. Vielen Dank für eure Aufmerksamkeit." },
        question_pour_toi: { id: "b1m1-p3-frage", t: "Danke für deine Präsentation, das war sehr interessant. Ich habe eine Frage: Was würdest du einer Person raten, die gerade erst mit diesem Thema anfängt?" },
        redemittel: [
          ["Feedback donner", ["Vielen Dank für deine Präsentation. Sie hat mir gut gefallen.", "Besonders interessant fand ich …", "Neu war für mich, dass …"]],
          ["Poser une question", ["Ich habe eine Frage: …", "Wie ist das bei dir, wenn …?", "Warum glaubst du, dass …?"]],
          ["Répondre à une question", ["Danke für die Frage.", "Das ist eine gute Frage. Ich denke, …", "Ich würde ihm/ihr raten, …"]]
        ]
      }
    ],
    criteres: [
      { nom: "Erfüllung", desc: "Tu traites tous les points, tu proposes ET tu réagis (Teil 1)" },
      { nom: "Interaktion", desc: "Tu réagis à ton partenaire, tu ne fais pas un monologue (Teil 1 et 3)" },
      { nom: "Wortschatz", desc: "Vocabulaire adapté et varié" },
      { nom: "Strukturen", desc: "Grammaire correcte, phrases avec weil / dass / wenn" },
      { nom: "Aussprache", desc: "Prononciation claire et compréhensible" }
    ]
  },

  /* ======================= WORTSCHATZ ======================= */
  vocab: [
    { de: "die Durchsage", fr: "l'annonce (haut-parleur)", mg: "fanambarana", ex: "Dann kam die Durchsage: Der Zug fällt aus." },
    { de: "ausfallen", fr: "être annulé", mg: "foanana", ex: "Mein Zug fällt heute aus." },
    { de: "die Verspätung", fr: "le retard", mg: "fahatarana", ex: "Der Bus hat zehn Minuten Verspätung." },
    { de: "verzweifelt", fr: "désespéré", mg: "kivy tanteraka", ex: "Ich war total verzweifelt." },
    { de: "der Stau", fr: "l'embouteillage", mg: "fitohanan'ny fiara", ex: "Wegen eines Staus kamen wir zu spät." },
    { de: "pünktlich", fr: "à l'heure", mg: "ara-potoana", ex: "Bitte seien Sie pünktlich." },
    { de: "reparieren", fr: "réparer", mg: "manamboatra", ex: "Wir reparieren den Toaster zusammen." },
    { de: "wegwerfen", fr: "jeter", mg: "manary", ex: "Man sollte nicht alles gleich wegwerfen." },
    { de: "die Spende", fr: "le don", mg: "fanomezana", ex: "Viele lassen eine kleine Spende da." },
    { de: "ehrenamtlich", fr: "bénévole", mg: "an-tsitrapo", ex: "Sie arbeitet ehrenamtlich in der Bibliothek." },
    { de: "das Werkzeug", fr: "l'outil", mg: "fitaovana", ex: "Der Verein kauft Werkzeug." },
    { de: "die Umwelt", fr: "l'environnement", mg: "tontolo iainana", ex: "Das ist gut für die Umwelt." },
    { de: "der Bauernhof", fr: "la ferme", mg: "toeram-pambolena sy fiompiana", ex: "Die Kinder besuchen einen Bauernhof." },
    { de: "ernten", fr: "récolter", mg: "mijinja", ex: "Im Herbst ernten wir Kartoffeln." },
    { de: "die Ernährung", fr: "l'alimentation", mg: "fomba fisakafoana", ex: "Gesunde Ernährung ist wichtig." },
    { de: "übernehmen (Kosten)", fr: "prendre en charge", mg: "miantoka (ny sarany)", ex: "Die Eltern übernehmen die Kosten für den Bus." },
    { de: "die Umfrage", fr: "le sondage", mg: "fanadihadiana", ex: "Laut einer Umfrage essen sie mehr Obst." },
    { de: "gebraucht", fr: "d'occasion", mg: "efa niasa / efa nampiasaina", ex: "Ich kaufe gebrauchte Möbel." },
    { de: "der Nebenjob", fr: "le petit boulot", mg: "asa fanampiny", ex: "Lisa sucht einen Nebenjob." },
    { de: "die Anmeldung", fr: "l'inscription", mg: "fisoratana anarana", ex: "Die Anmeldung ist online möglich." },
    { de: "das Verbot", fr: "l'interdiction", mg: "fandrarana", ex: "Ich bin gegen ein Handyverbot." },
    { de: "ablenken", fr: "distraire", mg: "manelingelina", ex: "Handys lenken im Unterricht ab." },
    { de: "sich konzentrieren", fr: "se concentrer", mg: "mifantoka", ex: "Sie kann sich kaum konzentrieren." },
    { de: "heimlich", fr: "en cachette", mg: "an-tsokosoko", ex: "Sie benutzen das Handy heimlich." },
    { de: "ausleihen", fr: "emprunter", mg: "mindrana", ex: "Bücher kann man vier Wochen ausleihen." },
    { de: "verlängern", fr: "prolonger", mg: "manitatra (ny fotoana)", ex: "Kann ich die Leihfrist verlängern?" },
    { de: "die Gebühr", fr: "les frais", mg: "sarany", ex: "Die Gebühr beträgt 0,50 Euro." },
    { de: "beschädigt", fr: "endommagé", mg: "simba", ex: "Beschädigte Bücher muss man ersetzen." },
    { de: "absagen", fr: "annuler (un rendez-vous)", mg: "manafoana", ex: "Wir müssen den Termin absagen." },
    { de: "zurückrufen", fr: "rappeler (au téléphone)", mg: "miantso indray", ex: "Bitte rufen Sie uns zurück." },
    { de: "gesperrt", fr: "fermé / bloqué", mg: "voasakana", ex: "Die Straße ist gesperrt." },
    { de: "die Umleitung", fr: "la déviation", mg: "lalana fihodinana", ex: "Die Busse fahren eine Umleitung." },
    { de: "der Rabatt", fr: "la réduction", mg: "fihenam-bidy", ex: "Heute gibt es 30 % Rabatt." },
    { de: "ausverkauft", fr: "complet / épuisé", mg: "lany", ex: "Der Film um acht ist ausverkauft." },
    { de: "bewölkt", fr: "nuageux", mg: "mandrahona", ex: "Im Norden bleibt es bewölkt." },
    { de: "das Gewitter", fr: "l'orage", mg: "oram-baratra", ex: "Am Abend gibt es Gewitter." },
    { de: "die Führung", fr: "la visite guidée", mg: "fitsidihana misy mpitari-dalana", ex: "Die Führung dauert eine Stunde." },
    { de: "giftig", fr: "toxique", mg: "misy poizina", ex: "Einige Pflanzen sind giftig." },
    { de: "die Fachkraft", fr: "le travailleur qualifié", mg: "mpiasa manam-pahaizana", ex: "Viele Firmen suchen Fachkräfte." },
    { de: "die Anerkennung", fr: "la reconnaissance (diplôme)", mg: "fankatoavana (diplaoma)", ex: "Die Anerkennung dauert oft lange." },
    { de: "der Umzug", fr: "le déménagement", mg: "famindrana trano", ex: "Kannst du mir beim Umzug helfen?" },
    { de: "sich entschuldigen", fr: "s'excuser", mg: "miala tsiny", ex: "Ich möchte mich entschuldigen." },
    { de: "der Vorschlag", fr: "la proposition", mg: "soso-kevitra", ex: "Ich habe einen Vorschlag." },
    { de: "einverstanden", fr: "d'accord", mg: "manaiky", ex: "Einverstanden, so machen wir das!" }
  ]
});

