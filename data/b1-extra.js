/* B1 — compléments : traductions FR/MG des questions, consignes, exemples réussis Sprechen, vocabulaire officiel
   Format TR : n: [fr, mg, [[opt a fr, mg], [b], [c]]]  — X = contextes */
window.TR = window.TR || {};
const _B1 = window.POOLS.B1;
_B1.ctr = {
  L1: ["Lisez le texte et les questions 1 à 6. Les affirmations sont-elles vraies (Richtig) ou fausses (Falsch) ?", "Vakio ny lahatsoratra sy ny fanontaniana 1–6. Marina (Richtig) sa diso (Falsch)?"],
  L2: ["Lisez les articles de presse et les questions 7 à 12. Choisissez a, b ou c.", "Vakio ny lahatsoratra gazety sy ny fanontaniana 7–12. Safidio a, b na c."],
  L3: ["Lisez les situations 13 à 19 et les annonces a à j. Chaque annonce une seule fois. Une situation n'a pas d'annonce : choisissez 0.", "Vakio ny toe-javatra 13–19 sy ny filazana a–j. Indray mandeha ihany ny filazana tsirairay. Misy iray tsy misy filazana: safidio 0."],
  L4: ["Lisez les textes 20 à 26. La personne est-elle pour une interdiction ?", "Vakio ny lahatsoratra 20–26. Manohana ny fandrarana ve ilay olona?"],
  L5: ["Lisez les questions 27 à 30 et le texte. Choisissez a, b ou c.", "Vakio ny fanontaniana 27–30 sy ny lahatsoratra. Safidio a, b na c."],
  H1: ["Cinq textes courts, chacun entendu deux fois. Deux questions par texte.", "Lahatsoratra fohy 5, henoina indroa avy. Fanontaniana 2 isaky ny lahatsoratra."],
  H2: ["Un texte entendu une seule fois. Cinq questions (a, b ou c). 60 secondes pour lire avant.", "Henoina indray mandeha ihany. Fanontaniana 5 (a, b na c). 60 segondra hamakiana aloha."],
  H3: ["Une conversation entendue une seule fois. Sept affirmations : vrai ou faux ?", "Resaka henoina indray mandeha. Fehezanteny 7: marina sa diso?"],
  H4: ["Une discussion entendue deux fois. Qui dit quoi ? (a, b ou c)", "Adihevitra henoina indroa. Iza no niteny inona? (a, b na c)"],
  P1: ["Planifiez quelque chose ensemble : proposez, réagissez, décidez ensemble.", "Mikasà zavatra miaraka: manolora hevitra, mamalia, manapaha hevitra miaraka."],
  P2: ["Choisissez un thème (1 ou 2) et présentez-le avec les 5 diapositives (Folien).", "Misafidiana lohahevitra iray ary ataovy kabary amin'ny Folie 5."],
  P3: ["Donnez un retour sur la présentation du partenaire et posez une question ; répondez ensuite à la question sur votre présentation.", "Omeo valin-kafatra ny kabarin'ny namanao ary mametraha fanontaniana; avy eo valio ny fanontaniana momba ny kabarinao."]
};

_B1.vocabOfficiel = [
  { de: "die Kinderkrippe", fr: "la crèche", mg: "akanin-jaza kely" },
  { de: "die Brieftasche", fr: "le portefeuille", mg: "poketra" },
  { de: "die Arbeitszeit", fr: "le temps de travail", mg: "ora fiasana" },
  { de: "das Verbot", fr: "l'interdiction", mg: "fandrarana" },
  { de: "die Gewalt", fr: "la violence", mg: "herisetra" },
  { de: "der/die Jugendliche", fr: "l'adolescent(e)", mg: "tanora" },
  { de: "der Strom", fr: "l'électricité", mg: "herinaratra" },
  { de: "erneuerbare Energien", fr: "les énergies renouvelables", mg: "angovo azo havaozina" },
  { de: "die Anlage", fr: "l'installation", mg: "fitaovana napetraka" },
  { de: "zur Verfügung stehen", fr: "être à disposition", mg: "azo ampiasaina" },
  { de: "das Sekretariat", fr: "le secrétariat", mg: "sekretera" },
  { de: "der Tourismus", fr: "le tourisme", mg: "fizahan-tany" },
  { de: "das Krankenhaus", fr: "l'hôpital", mg: "hopitaly" },
  { de: "die Unterrichtszeit", fr: "les heures de cours", mg: "ora fianarana" },
  { de: "die Präsentation", fr: "la présentation", mg: "kabary / fanolorana" },
  { de: "die Folie", fr: "la diapositive", mg: "pejy (slide)" },
  { de: "der Zuhörer", fr: "l'auditeur", mg: "mpihaino" },
  { de: "die Rückmeldung", fr: "le retour (feedback)", mg: "valin-kafatra" },
  { de: "die Aufmerksamkeit", fr: "l'attention", mg: "fihainoana tsara" },
  { de: "das Heimatland", fr: "le pays d'origine", mg: "tanindrazana" },
  { de: "der Vorteil", fr: "l'avantage", mg: "tombony" },
  { de: "der Nachteil", fr: "l'inconvénient", mg: "fatiantoka" },
  { de: "die Meinung", fr: "l'opinion", mg: "hevitra" },
  { de: "die Erfahrung", fr: "l'expérience", mg: "traikefa" },
  { de: "das Erlebnis", fr: "le vécu / l'aventure", mg: "zavatra niainana" },
  { de: "berichten", fr: "raconter / rapporter", mg: "mitantara" },
  { de: "sich bedanken", fr: "remercier", mg: "misaotra" },
  { de: "der Vorschlag", fr: "la proposition", mg: "soso-kevitra" },
  { de: "einverstanden sein", fr: "être d'accord", mg: "manaiky" },
  { de: "sich verabreden", fr: "prendre rendez-vous (entre amis)", mg: "mifampiantso hihaona" },
  { de: "die Einladung", fr: "l'invitation", mg: "fanasana" },
  { de: "absagen", fr: "annuler / décliner", mg: "manafoana" },
  { de: "die Abschlussfeier", fr: "la fête de fin", mg: "fety famaranana" },
  { de: "das Geschenk", fr: "le cadeau", mg: "fanomezana" },
  { de: "der Ausflug", fr: "l'excursion", mg: "dia fitsangatsanganana" },
  { de: "die Kursleiterin", fr: "la formatrice", mg: "mpampianatra (vehivavy)" },
  { de: "der Inhalt", fr: "le contenu", mg: "votoaty" },
  { de: "die Aussage", fr: "l'affirmation", mg: "fanambarana" },
  { de: "die Durchsage", fr: "l'annonce (haut-parleur)", mg: "fanambarana" },
  { de: "die Verspätung", fr: "le retard", mg: "fahatarana" },
  { de: "der Anrufbeantworter", fr: "le répondeur", mg: "milina mandray hafatra" },
  { de: "die Gästebuch", fr: "le livre d'or (forum)", mg: "boky fanoratana hevitra" }
];
_B1.vocabOfficiel[_B1.vocabOfficiel.length-1].de = "das Gästebuch";

/* ============ Modellsatz 1 ============ */
window.TR.b1m1 = {
  L: {
    1: ["Lena devait apporter quelque chose à manger pour la fête.", "Tokony hitondra sakafo ho an'ny fety i Lena."],
    2: ["Le train de Lena avait deux heures de retard.", "Tara adiny roa ny lamasinin'i Lena."],
    3: ["La dame âgée voulait aussi aller à Hambourg.", "Te ho any Hamburg koa ilay vehivavy antitra."],
    4: ["Lena et le conducteur ont parlé de musique pendant le trajet.", "Niresaka momba ny mozika i Lena sy ilay mpamily."],
    5: ["Lena est arrivée à l'heure à la fête.", "Tonga ara-potoana tamin'ny fety i Lena."],
    6: ["Le jeune homme a joué avec son groupe au mariage.", "Nitendry tamin'ny fanambadiana niaraka tamin'ny tariny ilay tovolahy."],
    7: ["Le premier texte parle de…", "Ny lahatsoratra voalohany dia momba…", [["un lieu où l'on répare des objets ensemble", "toerana iarahana manamboatra zavatra"], ["un nouveau magasin d'appareils d'occasion", "fivarotana vaovao fitaovana efa niasa"], ["un cours pour électriciennes", "fampianarana ho an'ny mpiasa herinaratra"]]],
    8: ["Les visiteurs…", "Ny mpitsidika…", [["doivent payer la réparation", "tsy maintsy mandoa ny fanamboarana"], ["reçoivent gratuitement des appareils neufs", "mahazo fitaovana vaovao maimaim-poana"], ["peuvent donner de l'argent volontairement", "afaka manome vola an-tsitrapo"]]],
    9: ["Martina Vogt trouve le café important aussi parce que…", "Manan-danja ho an'i Martina Vogt ny kafe satria…", [["les voisins y font connaissance", "mifankahalala any ny mpifanolo-bodirindrina"], ["on peut y réparer tous les appareils", "azo amboarina avokoa ny fitaovana"], ["elle y trouve de nouveaux employés", "mahita mpiasa vaovao any izy"]]],
    10: ["Le deuxième texte dit que…", "Ny lahatsoratra faharoa dia milaza fa…", [["des enfants apprennent dans des fermes", "mianatra any amin'ny toeram-pambolena ny ankizy"], ["des agriculteurs enseignent à l'école", "mampianatra any an-tsekoly ny tantsaha"], ["des écoles reçoivent leur propre jardin", "mahazo zaridaina ny sekoly"]]],
    11: ["Les coûts du projet…", "Ny saran'ny tetikasa…", [["sont payés par les agriculteurs", "aloan'ny tantsaha"], ["sont pris en charge surtout par la région", "ny faritra no miantoka ny ankabeazany"], ["sont payés entièrement par les parents", "aloan'ny ray aman-dreny avokoa"]]],
    12: ["Après la visite…", "Aorian'ny fitsidihana…", [["beaucoup d'enfants veulent devenir agriculteurs", "ankizy maro te ho tantsaha"], ["beaucoup d'enfants mangent plus sainement", "ankizy maro mihinana sakafo mahasalama kokoa"], ["les familles visitent la ferme le week-end", "mitsidika ny toeram-pambolena ny fianakaviana"]]],
    13: ["Amira veut faire du sport avec son chien.", "Te hanao fanatanjahan-tena miaraka amin'ny alikany i Amira."],
    14: ["Jonas cherche des meubles d'occasion bon marché.", "Mitady fanaka efa niasa mora i Jonas."],
    15: ["Fatima veut pratiquer l'anglais en groupe sans dépenser beaucoup.", "Te hanazatra teny anglisy anaty vondrona tsy mandany vola be i Fatima."],
    16: ["Ben veut apprendre un instrument le soir.", "Te hianatra zavamaneno hariva i Ben."],
    17: ["Lisa cherche un petit boulot le week-end.", "Mitady asa fanampiny amin'ny faran'ny herinandro i Lisa."],
    18: ["Dimitri veut apprendre à cuisiner sainement.", "Te hianatra mahandro sakafo mahasalama i Dimitri."],
    19: ["Sofia veut aider d'autres personnes bénévolement.", "Te hanampy olona an-tsitrapo i Sofia."],
    27: ["Une carte de bibliothèque…", "Karatra tranomboky…", [["les étudiants la reçoivent gratuitement", "azon'ny mpianatra maimaim-poana"], ["seuls les adultes peuvent l'obtenir", "olon-dehibe ihany no mahazo"], ["il faut la demander en ligne", "angatahina an-tserasera"]]],
    28: ["Un DVD…", "DVD iray…", [["on peut le garder quatre semaines", "azo tazonina 4 herinandro"], ["on ne peut pas le prolonger", "tsy azo halavaina"], ["il faut le rendre ou le prolonger après une semaine", "averina na halavaina aorian'ny herinandro"]]],
    29: ["Si un livre est abîmé…", "Raha simba ny boky…", [["il faut le réparer soi-même", "amboarinao irery"], ["il faut le signaler à l'accueil", "lazaina amin'ny Information"], ["on paie 0,50 € par semaine", "mandoa 0,50 € isan-kerinandro"]]],
    30: ["Dans la bibliothèque…", "Ao amin'ny tranomboky…", [["on peut boire dans les salles de lecture", "azo atao ny misotro ao amin'ny efitrano famakiana"], ["on peut téléphoner partout", "azo atao ny miantso na aiza na aiza"], ["on peut manger à sa place", "azo atao ny misakafo eo amin'ny toeranao"]]]
  },
  H: {
    1: ["Le rendez-vous de Mme Rakoto a lieu demain comme prévu.", "Hatao rahampitso araka ny voalaza ny fotoanan'i Rtoa Rakoto."],
    2: ["Mme Rakoto doit…", "Tokony… i Rtoa Rakoto", [["passer jeudi sans appeler", "mandalo alakamisy tsy miantso"], ["rappeler le cabinet", "miantso indray ny toeram-pitsaboana"], ["commander une nouvelle carte d'assurance", "manafatra karatra fiantohana vaovao"]]],
    3: ["Vous entendez des informations sur la circulation.", "Vaovao momba ny fifamoivoizana no henonao."],
    4: ["Sur l'autoroute…", "Eny amin'ny lalambe…", [["il y a des travaux", "misy asa fanamboarana"], ["il y a eu un accident", "nisy lozam-pifamoivoizana"], ["toutes les voies sont fermées", "mihidy avokoa ny lalana"]]],
    5: ["Le magasin est ouvert plus longtemps que d'habitude.", "Misokatra ela kokoa noho ny mahazatra ny magazay."],
    6: ["Qu'est-ce qui est moins cher aujourd'hui ?", "Inona no mora kokoa anio?", [["les chaussures de course", "kiraro hihazakazahana"], ["tous les articles de sport", "entana fanatanjahantena rehetra"], ["le déjeuner", "sakafo atoandro"]]],
    7: ["Jonas propose une autre heure pour le cinéma.", "Manolotra ora hafa ho an'ny sinema i Jonas."],
    8: ["Où Mira et Jonas se retrouvent-ils ?", "Aiza no hihaona izy roa?", [["chez Mira", "ao an-tranon'i Mira"], ["devant le cinéma", "eo anoloan'ny sinema"], ["au restaurant de la place du marché", "ao amin'ny trano fisakafoanana eo amin'ny tsena"]]],
    9: ["Dans le nord, il pleut demain.", "Avy ny orana any avaratra rahampitso."],
    10: ["Dans le sud…", "Any atsimo…", [["il peut y avoir des orages en montagne le soir", "mety hisy oram-baratra any an-tendrombohitra hariva"], ["il pleut toute la journée", "avy ny orana tontolo andro"], ["il fait seulement 12 degrés", "12 degre fotsiny"]]],
    11: ["Aujourd'hui, dans le jardin, il y a…", "Anio ao amin'ny zaridaina dia misy…", [["beaucoup de visiteurs", "mpitsidika maro"], ["peu de visiteurs", "mpitsidika vitsy"], ["seulement des classes", "kilasy ihany"]]],
    12: ["Les vestes, on peut…", "Ny palitao dia azo…", [["les accrocher dans la serre", "ahantona ao amin'ny trano tropikaly"], ["les déposer à l'entrée", "apetraka eo am-bavahady"], ["les laisser au café", "avela ao amin'ny kafe"]]],
    13: ["Dans la serre tropicale…", "Ao amin'ny trano tropikaly…", [["on peut toucher les plantes", "azo kasihina ny zavamaniry"], ["il y a des plantes de Madagascar", "misy zavamaniry avy any Madagasikara"], ["il fait frais", "mangatsiatsiaka"]]],
    14: ["Pour prendre des photos…", "Raha maka sary…", [["le flash est interdit", "voarara ny flash"], ["il faut demander avant", "manontany aloha"], ["seulement dans le jardin d'herbes", "ao amin'ny zaridainan'anana ihany"]]],
    15: ["La guide recommande…", "Manoro… ilay mpitarika", [["la boutique à la sortie", "ny fivarotana eo am-pivoahana"], ["un gâteau fait maison", "mofo mamy nataony"], ["une deuxième visite", "fitsidihana faharoa"]]],
    16: ["Julia était en vacances avec son copain.", "Niaraka tamin'ny sakaizany i Julia nandritra ny fialan-tsasatra."],
    17: ["Julia et sa sœur ont logé à l'hôtel.", "Nipetraka tao amin'ny hotely i Julia sy ny rahavaviny."],
    18: ["Depuis l'appartement, on voyait la mer.", "Hita avy tao amin'ny trano ny ranomasina."],
    19: ["La 2e semaine, elles ne pouvaient pas souvent nager.", "Tamin'ny herinandro faharoa dia tsy afaka nilomano matetika izy ireo."],
    20: ["Depuis le tram, Julia a beaucoup vu de Lisbonne.", "Nahita zavatra betsaka tao Lisbonne avy tao anaty tram i Julia."],
    21: ["Markus est déjà allé à Lisbonne.", "Efa tany Lisbonne i Markus."],
    22: ["Markus part en Espagne en octobre.", "Hankany Espaina i Markus amin'ny Oktobra."],
    23: ["Au début, la langue était le plus grand problème.", "Tamin'ny voalohany, ny fiteny no olana lehibe indrindra."],
    24: ["Avant de partir, il faut bien s'informer sur le pays.", "Alohan'ny handehanana, mianara tsara momba ny firenena."],
    25: ["Les premiers mois dans un nouveau pays sont souvent très durs.", "Sarotra matetika ny volana voalohany any amin'ny firenena vaovao."],
    26: ["Beaucoup d'entreprises cherchent d'urgence des travailleurs qualifiés étrangers.", "Orinasa maro mitady maika mpiasa manam-pahaizana avy any ivelany."],
    27: ["C'est dur de laisser sa famille.", "Sarotra ny mandao ny fianakaviana."],
    28: ["L'expérience à l'étranger aide plus tard au travail.", "Manampy amin'ny asa any aoriana ny traikefa any ivelany."],
    29: ["La reconnaissance des diplômes dure souvent trop longtemps.", "Maharitra ela loatra ny fankatoavana ny diplaoma."],
    30: ["L'argent ne devrait pas être la seule raison de partir.", "Tsy tokony ho ny vola ihany no antony handehanana."]
  },
  X: {
    L3: ["Des connaissances arrivées en ville cherchent des offres pour leurs loisirs.", "Olona fantatrao vao tonga mitady tolotra ho an'ny fialam-boly."],
    L4: ["Commentaires d'un magazine sur une interdiction du portable à l'école.", "Hevitry ny mpamaky momba ny fandrarana finday any an-tsekoly."],
    L5: ["Vous êtes inscrit à la bibliothèque municipale et lisez le règlement.", "Nisoratra tao amin'ny tranomboky ianao ary mamaky ny fitsipika."],
    H2: ["Visite guidée d'un jardin botanique.", "Fitsidihana zaridaina botanika misy mpitarika."],
    H3: ["Dans le tram, deux collègues parlent de leurs vacances.", "Ao anaty tram, mpiara-miasa roa miresaka momba ny fialan-tsasatra."],
    H4: ["Radio : « Travailler à l'étranger – chance ou risque ? »", "Radio: « Miasa any ivelany – vintana sa loza? »"]
  },
  sprechen: {
    P2: { themes: [
      { titre: "Haustiere in der Stadt – ja oder nein?", modele:
`Ich möchte euch heute das Thema „Haustiere in der Stadt – ja oder nein?“ vorstellen. Zuerst erzähle ich von meiner Erfahrung, dann von der Situation in Madagaskar, danach spreche ich über Vor- und Nachteile, und am Ende sage ich meine Meinung.

Ich selbst hatte in Antananarivo einen kleinen Hund. Er hieß Bobby und lebte bei uns im Hof.

In Madagaskar haben viele Familien einen Hund, aber meistens nicht in der Wohnung, sondern draußen, weil er das Haus bewacht.

Ein Vorteil von Haustieren ist, dass man nie allein ist – besonders für ältere Menschen. Ein Nachteil ist, dass Tiere in einer kleinen Stadtwohnung wenig Platz haben. Außerdem braucht man im Urlaub jemanden, der sich um das Tier kümmert. Meiner Meinung nach sind Katzen in der Stadt okay, aber für große Hunde ist die Stadt nicht ideal.

Damit bin ich am Ende meiner Präsentation. Vielen Dank für eure Aufmerksamkeit!` },
      { titre: "Lernen mit dem Internet", modele:
`Heute möchte ich über das Thema „Lernen mit dem Internet“ sprechen. Ich erzähle zuerst von meiner Erfahrung, dann von der Situation in Madagaskar, danach nenne ich Vor- und Nachteile und meine Meinung.

Ich lerne selbst Deutsch mit dem Internet: Ich schaue Videos, mache Übungen auf dem Handy und höre Podcasts im Bus.

In Madagaskar benutzen immer mehr junge Leute das Internet zum Lernen. Aber auf dem Land ist die Verbindung oft schlecht und das Internet ist teuer.

Ein großer Vorteil ist, dass man lernen kann, wann und wo man will. Außerdem gibt es viele kostenlose Angebote. Ein Nachteil ist, dass man allein lernt und niemand die Fehler korrigiert. Meiner Meinung nach ist das Internet eine gute Ergänzung, aber ein Lehrer ist trotzdem wichtig.

Das war meine Präsentation. Danke fürs Zuhören! Habt ihr Fragen?` } ] },
    P3: { modele:
`➊ RÜCKMELDUNG + FRAGE (nach der Präsentation des Partners):
Vielen Dank für deine Präsentation, sie hat mir sehr gut gefallen. Besonders interessant fand ich, dass du jeden Tag mit dem Fahrrad zur Arbeit fährst. Ich habe eine Frage: Was machst du im Winter, wenn es sehr kalt ist oder schneit?

➋ ANTWORT (auf die Frage zu deiner Präsentation):
Danke für die Frage. Ich würde ihm raten, langsam anzufangen, zum Beispiel mit einer Katze, weil sie weniger Arbeit macht als ein Hund. Außerdem sollte man vorher mit der Familie sprechen, denn alle müssen mithelfen.` }
  }
};

/* ============ Modellsatz 2 ============ */
window.TR.b1m2 = {
  L: {
    1: ["Hery est arrivé en retard le premier jour.", "Tara i Hery tamin'ny andro voalohany."],
    2: ["Le premier jour, Hery a seulement préparé des légumes.", "Nanomana legioma fotsiny i Hery tamin'ny andro voalohany."],
    3: ["M. Albrecht donne volontiers sa recette de bouillon à tous.", "Omen'Andriamatoa Albrecht an'iza na iza ny fomba fanamboarany ron-kena."],
    4: ["Hery ne comprend pas encore tout en cuisine.", "Mbola tsy azon'i Hery avokoa ny zavatra ao an-dakozia."],
    5: ["Sabine étudie chaque soir avec Hery chez lui.", "Miara-mianatra amin'i Hery isa-kariva ao an-tranony i Sabine."],
    6: ["Hery a cuisiné un plat de son pays avec ses collègues.", "Nahandro sakafo avy any amin'ny fireneny niaraka tamin'ny mpiara-miasa i Hery."],
    7: ["Le premier texte parle de…", "Ny lahatsoratra voalohany dia momba…", [["un jardin sur un toit en ville", "zaridaina eo ambony tafo"], ["un nouveau parking à Cologne", "fiantsonana vaovao ao Köln"], ["un supermarché de légumes bio", "supermarché misy legioma bio"]]],
    8: ["Pour le projet…", "Ho an'ny tetikasa…", [["l'association paie un loyer à la ville", "mandoa hofa amin'ny tanàna ny fikambanana"], ["l'association paie l'eau", "ny fikambanana no mandoa ny rano"], ["l'association reçoit de l'argent du supermarché", "mahazo vola avy amin'ny supermarché"]]],
    9: ["L'association veut…", "Te… ny fikambanana", [["chercher de nouveaux membres", "hitady mpikambana vaovao"], ["acheter une protection contre le soleil", "hividy fiarovana amin'ny masoandro"], ["n'ouvrir que pour les familles", "hisokatra ho an'ny fianakaviana ihany"]]],
    10: ["Le deuxième texte dit que…", "Ny lahatsoratra faharoa dia milaza fa…", [["des seniors enseignent aux jeunes", "mampianatra ny tanora ny zokiolona"], ["des jeunes aident des seniors avec le smartphone", "manampy ny zokiolona amin'ny finday ny tanora"], ["une école achète des smartphones", "mividy finday ny sekoly"]]],
    11: ["Les cours…", "Ny fampianarana…", [["sont gratuits pour les seniors", "maimaim-poana ho an'ny zokiolona"], ["ont lieu à l'école", "atao any an-tsekoly"], ["sont seulement pour les élèves filles", "ho an'ny ankizivavy ihany"]]],
    12: ["Les jeunes…", "Ny tanora…", [["reçoivent de l'argent", "mahazo vola"], ["reçoivent un document pour leurs candidatures", "mahazo taratasy ho an'ny fangatahana asa"], ["gèrent une liste d'attente", "mitantana lisitry ny miandry"]]],
    13: ["La famille Kraus, avec deux petits enfants, cherche des vacances avec des animaux.", "Ny fianakaviana Kraus misy zaza kely roa dia mitady fialan-tsasatra misy biby."],
    14: ["Tom veut faire du vélo sans porter ses bagages.", "Te hitaingina bisikileta tsy mitondra entana i Tom."],
    15: ["Mme Öztürk est en fauteuil roulant et cherche un hôtel adapté.", "Amin'ny seza misy kodiarana Rtoa Öztürk ary mitady hotely mety."],
    16: ["Lukas est étudiant et a peu d'argent pour dormir.", "Mpianatra i Lukas ary vitsy ny volany hatoriana."],
    17: ["Ana veut améliorer son anglais en vacances.", "Te hanatsara ny teny anglisy mandritra ny fialan-tsasatra i Ana."],
    18: ["M. Vogel veut aller à l'hôtel wellness avec son fils de 8 ans.", "Te hankany amin'ny hotely wellness miaraka amin'ny zanany 8 taona Atoa Vogel."],
    19: ["Mia veut apprendre de nouvelles recettes en vacances.", "Te hianatra fomba fahandro vaovao i Mia."],
    27: ["Qui veut faire une fête…", "Izay te hanao fety…", [["doit l'annoncer avant au concierge", "milaza mialoha amin'ny mpiandraikitra"], ["peut faire la fête jusqu'à minuit", "afaka hatramin'ny misasakalina"], ["doit faire la fête le dimanche", "amin'ny alahady"]]],
    28: ["Les aliments sans nom dans le frigo…", "Ny sakafo tsy misy anarana ao anaty frigo…", [["tout le monde peut les manger", "azon'ny rehetra hanina"], ["sont jetés le vendredi", "ariana amin'ny zoma"], ["vont au bureau", "entina any amin'ny birao"]]],
    29: ["Les visiteurs…", "Ny vahiny…", [["ne peuvent pas dormir ici", "tsy afaka matory eto"], ["peuvent rester jusqu'à trois nuits", "afaka mijanona alina 3"], ["doivent s'inscrire au bureau", "misoratra ao amin'ny birao"]]],
    30: ["Son vélo…", "Ny bisikileta…", [["on peut le garer dans le couloir", "apetraka ao amin'ny lalantsara"], ["il faut le mettre à la cave", "entina any ambanin'ny tany"], ["on ne peut pas l'amener", "tsy azo entina"]]]
  },
  H: {
    1: ["Mme Rasoa est invitée à un entretien.", "Asaina amin'ny resadresaka momba ny asa i Rtoa Rasoa."],
    2: ["Si Mme Rasoa n'a pas le temps, elle doit…", "Raha tsy manana fotoana izy…", [["appeler", "miantso"], ["écrire un e-mail", "manoratra mailaka"], ["passer en personne", "mandalo ho azy"]]],
    3: ["Le S-Bahn ne va pas jusqu'à l'aéroport aujourd'hui.", "Tsy tonga any amin'ny seranam-piaramanidina ny S-Bahn anio."],
    4: ["Les passagers pour l'aéroport doivent…", "Ny mpandeha ho any amin'ny seranana…", [["prendre un taxi", "mandray taxi"], ["prendre le bus", "mandray bus"], ["attendre le prochain S-Bahn", "miandry ny S-Bahn manaraka"]]],
    5: ["Il faut payer l'entrée de la fête.", "Tsy maintsy mandoa fidirana."],
    6: ["Les visiteurs doivent…", "Ny mpitsidika…", [["venir en voiture", "tonga amin'ny fiara"], ["ne pas venir en voiture", "tsy tonga amin'ny fiara"], ["apporter à manger", "mitondra sakafo"]]],
    7: ["Le cours a lieu demain dans une autre salle.", "Ao amin'ny efitrano hafa ny fampianarana rahampitso."],
    8: ["Que doit apporter Paul ?", "Inona no ho entin'i Paul?", [["un livre pour le cours", "boky ho an'ny fampianarana"], ["le dictionnaire de Maria", "ny rakibolanan'i Maria"], ["ses devoirs", "ny devoarany"]]],
    9: ["Demain, il pleut toute la journée dans toute l'Autriche.", "Avy ny orana tontolo andro manerana an'i Aotrisy."],
    10: ["À l'est…", "Any atsinanana…", [["il y a un vent fort", "mafy ny rivotra"], ["il fait beau jusqu'au soir", "tsara ny andro hatramin'ny hariva"], ["il pleut l'après-midi", "orana amin'ny tolakandro"]]],
    11: ["Avec le badge, on peut…", "Amin'ny karatry ny mpiasa…", [["manger gratuitement", "misakafo maimaim-poana"], ["entrer dans le bâtiment", "miditra ao amin'ny trano"], ["noter ses heures", "manoratra ny ora fiasana"]]],
    12: ["Les chaussures de sécurité…", "Ny kiraro fiarovana…", [["il faut les acheter soi-même", "vidianao"], ["sont prêtes dans une salle", "efa vonona ao amin'ny efitrano"], ["ne servent qu'au bureau", "ao amin'ny birao ihany"]]],
    13: ["Le déjeuner aujourd'hui…", "Ny sakafo atoandro anio…", [["est payé par l'entreprise", "aloan'ny orinasa"], ["il faut l'apporter", "entinao"], ["n'est qu'à une heure", "amin'ny iray ora"]]],
    14: ["On parle des horaires…", "Ny ora fiasana dia resahina…", [["avec Mme Berg", "amin'i Rtoa Berg"], ["avec le chef d'équipe", "amin'ny lehiben'ny ekipa"], ["vendredi", "amin'ny zoma"]]],
    15: ["À la fête d'été…", "Amin'ny fetin'ny fahavaratra…", [["seuls les employés viennent", "mpiasa ihany"], ["on peut venir avec sa famille", "azo entina ny fianakaviana"], ["il faut s'inscrire", "misoratra anarana"]]],
    16: ["Dennis habite depuis trois mois dans le nouvel appartement.", "Telo volana izay no nipetrahan'i Dennis tao."],
    17: ["Le nouvel appartement est plus cher que l'ancien.", "Lafo kokoa noho ny taloha ny trano vaovao."],
    18: ["Dennis va maintenant au travail en voiture.", "Mandeha fiara mankany am-piasana i Dennis."],
    19: ["Une voisine a apporté quelque chose à Dennis.", "Nisy mpifanolo-bodirindrina nitondra zavatra ho an'i Dennis."],
    20: ["Dennis s'est déjà plaint de la musique forte.", "Efa nitaraina momba ny mozika mafy i Dennis."],
    21: ["La fête a lieu samedi prochain.", "Ny asabotsy ho avy ny fety."],
    22: ["Sandra doit apporter quelque chose à manger.", "Tokony hitondra sakafo i Sandra."],
    23: ["Qui apprend tôt à gérer l'argent a moins de dettes plus tard.", "Izay mianatra mitantana vola aloha dia tsy dia misy trosa."],
    24: ["Des montants différents d'argent de poche créent des problèmes en classe.", "Miteraka olana ao an-dakilasy ny vola am-paosy tsy mitovy."],
    25: ["Il existe des recommandations officielles sur le montant.", "Misy torolalana ofisialy momba ny habetsahany."],
    26: ["Les enfants doivent décider eux-mêmes de leurs dépenses.", "Ny ankizy no manapa-kevitra amin'ny volany."],
    27: ["Les enfants devraient savoir d'où vient l'argent.", "Tokony hahafantatra ny niavian'ny vola ny ankizy."],
    28: ["Beaucoup de parents paient leurs enfants pour les tâches ménagères.", "Ray aman-dreny maro no mandoa ny zanany noho ny asa an-trano."],
    29: ["On ne devrait pas payer pour l'aide à la maison.", "Tsy tokony handoa vola noho ny fanampiana an-trano."],
    30: ["Pour des tâches spéciales, les enfants peuvent gagner un peu.", "Afaka mahazo vola kely noho ny asa manokana ny ankizy."]
  },
  X: {
    L3: ["Vos collègues préparent leurs vacances et cherchent des offres.", "Manomana fialan-tsasatra ny mpiara-miasa aminao."],
    L4: ["Commentaires sur l'interdiction du fast-food dans les cantines.", "Hevitra momba ny fandrarana fast-food any amin'ny kantinina."],
    L5: ["Vous emménagez dans une résidence étudiante et lisez le règlement.", "Hifindra any amin'ny trano fonenan'ny mpianatra ianao."],
    H2: ["Premier jour au travail : accueil des nouveaux employés.", "Andro voalohany am-piasana: fandraisana ny mpiasa vaovao."],
    H3: ["Au supermarché, deux connaissances parlent d'un nouvel appartement.", "Olona roa miresaka momba ny trano vaovao."],
    H4: ["Radio : faut-il donner de l'argent de poche aux enfants ?", "Radio: tokony homena vola am-paosy ve ny ankizy?"]
  },
  sprechen: {
    P2: { themes: [
      { titre: "Mit dem Fahrrad zur Arbeit?", modele:
`Ich möchte euch heute das Thema „Mit dem Fahrrad zur Arbeit?“ vorstellen. Zuerst spreche ich über meine Erfahrung, dann über Madagaskar, danach über Vor- und Nachteile, und zum Schluss sage ich meine Meinung.

Ich fahre seit drei Monaten mit dem Fahrrad zum Deutschkurs. Das sind 15 Minuten, und ich komme immer pünktlich an, weil ich nicht im Stau stehe.

In Antananarivo fahren nicht so viele Leute mit dem Fahrrad zur Arbeit, weil die Straßen eng und hügelig sind und es viel Verkehr gibt. Viele nehmen das Taxi-be.

Ein Vorteil ist, dass man Geld spart und gesund bleibt. Außerdem ist es gut für die Umwelt. Ein Nachteil ist das Wetter: Bei Regen kommt man nass an. Ich finde, wer nicht zu weit wohnt, sollte das Fahrrad nehmen.

Damit bin ich am Ende. Vielen Dank fürs Zuhören!` },
      { titre: "Selbst kochen oder Essen bestellen?", modele:
`Heute spreche ich über das Thema „Selbst kochen oder Essen bestellen?“. Ich erzähle von mir, dann von der Situation in Madagaskar, dann nenne ich Vor- und Nachteile und meine Meinung.

Ich koche fast jeden Tag selbst, meistens Reis mit Gemüse. Nur am Wochenende bestelle ich manchmal eine Pizza.

In Madagaskar kochen die meisten Familien zu Hause. Essen zu bestellen ist noch nicht so üblich, aber in Tana gibt es immer mehr Lieferdienste.

Selbst kochen ist billiger und gesünder, weil man weiß, was im Essen ist. Ein Nachteil ist, dass es Zeit kostet. Essen bestellen ist bequem, aber teuer, und es gibt viel Verpackungsmüll. Meiner Meinung nach sollte man meistens selbst kochen und nur ab und zu bestellen.

Das war meine Präsentation. Danke für eure Aufmerksamkeit!` } ] },
    P3: { modele:
`➊ RÜCKMELDUNG + FRAGE:
Danke für deine Präsentation. Sie hat mir gut gefallen, weil du viele persönliche Beispiele gegeben hast. Neu war für mich, dass in Brasilien viele Hunde draußen im Garten leben. Ich habe eine Frage: Wer kümmert sich um deine Katze, wenn du im Urlaub bist?

➋ ANTWORT:
Danke für die Frage. Die wichtigste Erfahrung für mich war, dass ich mit dem Fahrrad viel entspannter beim Kurs ankomme. Früher war ich im Bus oft gestresst, weil er zu spät kam.` }
  }
};
