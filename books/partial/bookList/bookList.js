angular.module('books').controller('BooklistCtrl', function($scope) {

    $scope.books = [{
        title: 'To bee or not to bee',
        author: 'Maja Beesworth',
        numPages: 111,
        isbn: '101-110-111',
        img: '/resources/101-110-111.jpg',
        summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        rating: 5,
        published: '2015-07-01'
    }, {
        title: 'Angular 3',
        author: 'Inde Future',
        numPages: 328,
        isbn: '424-935-104',
        img: '/resources/424-935-104.jpg',
        summary: 'Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht?Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen?',
        rating: 5,
        published: '2015-06-22'
    }, {
        title: 'Talking with Monsters',
        author: 'Lotte Say',
        numPages: 943,
        isbn: '294-872-990',
        img: '/resources/294-872-990.jpg',
        summary: 'Bavaria ipsum dolor sit amet hoam Schaung kost nix wea ko, dea ko heid gfoids ma sagrisch guad Hemad gschmeidig, Watschnbaam ned heid gfoids ma sagrisch guad? Maderln nia need is boarischer nix Gwiass woass ma ned Namidog, nia. Sog i Spezi wea ko, dea ko a Maß und no a Maß mim Radl foahn, a so a Schmarn: I moan oiwei gwihss hogg di hera Biazelt liberalitas Bavariae wolln, da, hog di hi. Fias Schneid Broadwurschtbudn, i mechad dee Schwoanshaxn nia g’hupft wia gsprunga do Spuiratz dei Servas.',
        rating: 5,
        published: '2015-07-15'
    }, {
        "title": "Reliant release",
        "author": "Lindsey Craft",
        "numPages": 1162,
        "isbn": "f5465a92-13cb-433f-9041-3be4030ce107",
        "rating": 2,
        "summary": "Nostrafermentum consectetur nisl suscipit lorem aliquet sociis mattis, elit congue montes velit.  Conubiaetiam velit ultricies tempor, sociis auctor euismod primis vestibulum pharetra hendrerit ultricies.  Ligulaporttitor fusce bibendum, primis ridiculus porta, cubilia sociis elementum et ornare porttitor dui felis, molestie habitant ultrices nibh etiam.",
        "published": "2007-01-31",
        "img": "/resources/gen/f5465a92-13cb-433f-9041-3be4030ce107.png"
    }, {
        "title": "About smackings and spouters",
        "author": "Cheyenne Ruiz",
        "numPages": 115,
        "isbn": "89953870-2cbc-4691-a2bd-24860fc43240",
        "rating": 4,
        "summary": "Blanditdictumst tempus posuere amet.  Conubiacurabitur magna mus enim blandit himenaeos habitasse pulvinar.  Ullamcorperquis proin tempus sem volutpat, velit primis sagittis nullam vitae torquent tellus porttitor diam inceptos.  Fringilladapibus pellentesque turpis fringilla pharetra pretium lectus ridiculus natoque.",
        "published": "1970-07-20",
        "img": "/resources/gen/89953870-2cbc-4691-a2bd-24860fc43240.png"
    }, {
        "title": "Socioeconomic walk-in",
        "author": "Erika Smith",
        "numPages": 1259,
        "isbn": "d5f8d614-bb23-43fe-814e-8d37f0ad1f33",
        "rating": 1,
        "summary": "Feugiatfermentum metus ultrices mi natoque ultrices conubia ad porttitor penatibus ridiculus, eu interdum torquent facilisi enim tincidunt, potenti tincidunt turpis natoque fermentum, aenean litora parturient sociosqu primis lorem habitasse urna scelerisque fermentum platea sagittis.  Dolorquisque aptent turpis elementum lacus non fermentum nec libero.  Rhoncusgravida aenean ipsum conubia praesent elementum enim pellentesque, euismod nunc duis luctus non feugiat, metus facilisis malesuada dictumst iaculis proin, nisi cum risus conubia taciti auctor augue.  Nisleu gravida convallis volutpat, litora leo aliquam nullam quam, vehicula morbi vel, urna himenaeos sagittis sapien cubilia.\n\nQuisqueduis dui ac lectus, eros hac nibh suspendisse parturient ad sagittis eleifend tristique conubia odio fusce.  Tristiqueconubia primis ante sodales rhoncus porta purus.",
        "published": "1970-09-21",
        "img": "/resources/gen/d5f8d614-bb23-43fe-814e-8d37f0ad1f33.png"
    }, {
        "title": "Freeborn genus coturnix",
        "author": "Jill Byrd",
        "numPages": 756,
        "isbn": "48789de6-2fc5-4ea2-865e-6aa17b7abd6f",
        "rating": 2,
        "summary": "Purusviverra consequat vivamus.  Estnibh odio donec dignissim nunc condimentum montes pellentesque fusce sociis non tempor.  Nislsem platea ridiculus fringilla adipiscing mattis sagittis adipiscing, duis pharetra volutpat consequat mauris eleifend, eros gravida accumsan non vivamus sociis eleifend vivamus.  Facilisisnetus pellentesque facilisis mus fames euismod curabitur nostra natoque.",
        "published": "1991-04-28",
        "img": "/resources/gen/48789de6-2fc5-4ea2-865e-6aa17b7abd6f.png"
    }, {
        "title": "Ramshackle in Dixie",
        "author": "Mariah Holcomb",
        "numPages": 552,
        "isbn": "c81f264f-ab5a-47ad-bf9c-7faddc34d936",
        "rating": 4,
        "summary": "Famesinteger fringilla ultrices mattis at ante sociis etiam faucibus, faucibus convallis iaculis taciti sociis dignissim sem magnis dis rhoncus vehicula, ultrices nibh erat, tempus elementum mus ultricies vel dictumst lorem vitae malesuada malesuada praesent vitae.  Velitadipiscing eros eget aliquam condimentum morbi, praesent gravida tincidunt vitae nunc mollis euismod, porta proin at sit sem suscipit velit.\n\nFeugiatduis commodo orci platea adipiscing mus neque.  Fusceconvallis penatibus tristique sit vehicula felis curae sem bibendum enim ultricies.  Tinciduntneque sollicitudin at elit massa quisque gravida aliquet pellentesque aliquam.  Duisaenean odio semper phasellus dignissim neque dictumst sem, ipsum pharetra proin sociis id.",
        "published": "1963-12-21",
        "img": "/resources/gen/c81f264f-ab5a-47ad-bf9c-7faddc34d936.png"
    }, {
        "title": "About yaoundes and frequency-response curves",
        "author": "Chasity Conway",
        "numPages": 988,
        "isbn": "8d254533-883f-4915-9138-aaafbb4f4642",
        "rating": 4,
        "summary": "Semsociosqu non cras varius suscipit at aliquet posuere luctus, imperdiet mauris sem, taciti blandit pellentesque pellentesque magna ullamcorper, elementum condimentum mi magna ligula sit.  Lacustincidunt sollicitudin commodo auctor justo penatibus, curabitur fringilla nostra per per mi duis scelerisque pulvinar vivamus, ut tortor eros egestas cubilia nulla, nunc ut nullam aliquam.  Molliscurae hendrerit consequat scelerisque aliquet sociosqu litora.",
        "published": "1986-03-18",
        "img": "/resources/gen/8d254533-883f-4915-9138-aaafbb4f4642.png"
    }, {
        "title": "Bicipital in Gibson",
        "author": "Kendra Allen",
        "numPages": 744,
        "isbn": "597a6cfa-c8d2-404f-96ef-aadfe7ca87a2",
        "rating": 3,
        "summary": "Lacinianascetur sem quisque posuere molestie volutpat suscipit eleifend cursus risus quis justo, netus suspendisse aptent erat lacus nunc purus.  Famesvehicula dolor justo.\n\nNibheu hac cras sagittis vehicula.  Porttitordonec class egestas dictumst lorem lobortis torquent sem commodo nullam.  Quisfacilisi sagittis morbi egestas sociosqu purus nulla nascetur eleifend nisl taciti in.  Enimmi felis eleifend.",
        "published": "1956-11-27",
        "img": "/resources/gen/597a6cfa-c8d2-404f-96ef-aadfe7ca87a2.png"
    }, {
        "title": "Bigeminal aphis fabae",
        "author": "Antonio Garner",
        "numPages": 688,
        "isbn": "e7c0aa9d-ea85-4d56-93a8-f78e6298e138",
        "rating": 1,
        "summary": "Integerenim conubia cursus ac massa.  Natoquemontes habitasse hendrerit odio, consequat risus hendrerit aenean himenaeos, iaculis accumsan volutpat porta dictumst convallis sodales a a, interdum ligula dictum purus.\n\nHacimperdiet cum risus feugiat primis maecenas fames, mus commodo tristique platea nisi ultricies, purus convallis fames sem, velit donec fringilla habitasse luctus consectetur pellentesque.  Odiopraesent lectus commodo et vivamus blandit phasellus.  Aptentrisus facilisis augue rhoncus cras sit phasellus eleifend metus taciti sociis rhoncus, urna habitant consequat sed at lacinia tellus non maecenas curabitur.  Molestienon praesent sollicitudin.",
        "published": "1998-12-10",
        "img": "/resources/gen/e7c0aa9d-ea85-4d56-93a8-f78e6298e138.png"
    }, {
        "title": "Club-shaped in Ellijay",
        "author": "Annette Jarvis",
        "numPages": 189,
        "isbn": "a1b7b489-7fdc-4cf3-b7d2-2dfddb309943",
        "rating": 1,
        "summary": "Duiturpis arcu tincidunt maecenas cursus inceptos proin massa volutpat sociis.  Nonhimenaeos fringilla proin habitant ipsum enim, fermentum libero malesuada semper blandit parturient porta lobortis, fringilla consequat adipiscing dui aliquet.\n\nEtac sit himenaeos ad dictumst ad natoque habitasse congue molestie sodales proin, aliquet ut neque curae, lobortis mauris cubilia ultricies pretium ultricies rutrum proin.  Egestasdignissim eleifend nullam bibendum auctor varius, augue pretium at scelerisque condimentum elementum sit rhoncus nostra suspendisse aliquet.  Tempuspenatibus est imperdiet eu litora massa cubilia nullam accumsan.",
        "published": "1988-10-06",
        "img": "/resources/gen/a1b7b489-7fdc-4cf3-b7d2-2dfddb309943.png"
    }, {
        "title": "Unmodifiable genus calluna",
        "author": "Steven Marshall",
        "numPages": 694,
        "isbn": "a478ad2b-ef1d-49be-a8ad-7df74eb68710",
        "rating": 2,
        "summary": "Porttitormolestie urna scelerisque condimentum neque elit convallis curae class hac, lorem porttitor consequat litora erat natoque blandit adipiscing quisque, integer odio nullam rutrum netus, mus porta vel erat leo.  Ligulasociosqu netus aenean euismod ante pretium semper vitae aliquam litora sociis at.  Leodui neque ut ridiculus elit amet nec nam tempor dis.  Nuncfelis tellus pulvinar massa pharetra montes himenaeos felis molestie ullamcorper.",
        "published": "2006-08-22",
        "img": "/resources/gen/a478ad2b-ef1d-49be-a8ad-7df74eb68710.png"
    }, {
        "title": "Unsaddled us mint",
        "author": "Judy Burks",
        "numPages": 1008,
        "isbn": "046bf49c-99b0-47a8-89e7-6becb8576da0",
        "rating": 4,
        "summary": "Egestasenim congue fermentum natoque, primis quisque ornare sagittis leo dictumst massa viverra per facilisi duis, est elit sociosqu iaculis scelerisque montes tellus.  Velitpretium cubilia pulvinar.",
        "published": "1977-10-28",
        "img": "/resources/gen/046bf49c-99b0-47a8-89e7-6becb8576da0.png"
    }, {
        "title": "Antediluvial pound sign",
        "author": "Kaitlyn Wilder",
        "numPages": 556,
        "isbn": "4796126b-b5c9-46f3-92f4-86e43705ddc4",
        "rating": 3,
        "summary": "Diamest ullamcorper est dictumst urna platea montes curabitur adipiscing, gravida sed himenaeos porta aenean orci lacinia viverra, nibh maecenas taciti dolor nulla condimentum phasellus.  Sagittisproin praesent lectus lobortis justo, augue metus neque metus pulvinar adipiscing tempor at nec ipsum praesent litora.  Venenatisfelis diam amet accumsan, ridiculus parturient erat lacinia pulvinar auctor, eleifend fringilla risus scelerisque praesent eget vehicula porta, volutpat cubilia phasellus fusce mus pellentesque litora pellentesque lectus.  Dictumlaoreet duis sociosqu, nascetur suscipit ac, gravida placerat vestibulum penatibus ullamcorper dis id ligula eu condimentum elit tellus.",
        "published": "1970-04-12",
        "img": "/resources/gen/4796126b-b5c9-46f3-92f4-86e43705ddc4.png"
    }, {
        "title": "Ephesian air corps",
        "author": "Laura Dudley",
        "numPages": 663,
        "isbn": "467d63e3-ba8d-4ed3-83c1-38fe1052469f",
        "rating": 3,
        "summary": "Musnon quisque vestibulum nullam imperdiet tortor conubia mus, hendrerit nostra condimentum massa maecenas, lacus suspendisse purus consequat ullamcorper vivamus interdum aliquam elementum.  Pulvinartincidunt pellentesque nisl integer consequat ad.  Eleifendsollicitudin fermentum aenean mattis nostra montes.  Posuerepraesent duis et donec id varius.",
        "published": "1991-09-27",
        "img": "/resources/gen/467d63e3-ba8d-4ed3-83c1-38fe1052469f.png"
    }, {
        "title": "Kitty-corner in Thunderbolt",
        "author": "Leslie Reilly",
        "numPages": 1422,
        "isbn": "976dc3ef-fa5b-4dba-a257-616a9373ed78",
        "rating": 4,
        "summary": "Consecteturviverra montes dolor libero commodo facilisis iaculis arcu cras nibh, aliquet vivamus curae duis suscipit at conubia molestie, molestie tempor per tempor tempus.  Volutpatfames vestibulum vel conubia vestibulum nam ut justo volutpat.  Commodoporttitor inceptos euismod volutpat interdum risus nunc sociosqu sem pulvinar feugiat rhoncus.",
        "published": "1996-03-06",
        "img": "/resources/gen/976dc3ef-fa5b-4dba-a257-616a9373ed78.png"
    }, {
        "title": "High-grade in Baden",
        "author": "Donna Fields",
        "numPages": 126,
        "isbn": "d07fbb97-369f-4997-b6c7-0b984289b90d",
        "rating": 1,
        "summary": "Acsit posuere sit eleifend turpis sem, nascetur massa dapibus odio non etiam, lacus placerat justo vehicula, iaculis phasellus molestie euismod libero.  Primisconvallis congue natoque sociis malesuada nunc conubia penatibus erat malesuada augue.  Conubiaornare taciti pulvinar magnis pharetra tempor nunc cras nostra.",
        "published": "1977-01-30",
        "img": "/resources/gen/d07fbb97-369f-4997-b6c7-0b984289b90d.png"
    }, {
        "title": "Vertical union with love",
        "author": "Mickey Cruz",
        "numPages": 642,
        "isbn": "5a94c7b1-d128-4609-b9a1-4dd320e664f7",
        "rating": 4,
        "summary": "Tempusvolutpat et augue posuere tempor tristique netus auctor quis mus fusce.  Dissit nibh lorem in aptent penatibus tristique feugiat quis, quis curabitur ultrices, accumsan amet praesent venenatis nec accumsan.  Imperdietgravida dis erat lacus eleifend sem egestas hac, interdum tortor donec sociis placerat semper ligula litora, nullam maecenas vel lorem habitant natoque dictum consequat dapibus a quam, integer in per hendrerit primis class platea himenaeos curae non.\n\nFacilisiipsum tempor ligula, ultrices scelerisque platea pharetra egestas et vestibulum per consectetur, volutpat eleifend congue volutpat dapibus posuere tortor integer in, sit cum tristique posuere scelerisque euismod.  Pretiumsem ultricies eros dui nec turpis tempor.  Nasceturlibero torquent lobortis nunc per ipsum.",
        "published": "1998-07-20",
        "img": "/resources/gen/5a94c7b1-d128-4609-b9a1-4dd320e664f7.png"
    }, {
        "title": "Surrounding in Pridgen",
        "author": "Sierra Schneider",
        "numPages": 1333,
        "isbn": "94113885-19e0-4de4-848b-49d17ef09e1d",
        "rating": 2,
        "summary": "Proinligula accumsan malesuada adipiscing velit eget dolor neque a, ullamcorper semper class aenean dignissim orci curae habitasse, accumsan laoreet montes leo varius natoque tincidunt.  Torquentornare potenti in vitae eleifend sociis tincidunt scelerisque.  Utetiam amet conubia dui nunc himenaeos cubilia risus aenean viverra himenaeos.",
        "published": "1973-04-02",
        "img": "/resources/gen/94113885-19e0-4de4-848b-49d17ef09e1d.png"
    }, {
        "title": "Bustling apache dance",
        "author": "Dana Whitley",
        "numPages": 680,
        "isbn": "c9b293a8-5397-43ae-a1e3-e7c19cffaffe",
        "rating": 1,
        "summary": "Ipsumnascetur dui elementum taciti suscipit pretium mus aliquet dis fusce.  Feugiataptent sem pretium tempor iaculis adipiscing risus iaculis velit mi quam maecenas.  Rhoncushac gravida porta iaculis diam cum fames proin auctor, ullamcorper habitant eros tortor senectus curae congue, cras commodo blandit ullamcorper nisl malesuada cum, nibh sociis eros.  Muspraesent posuere egestas inceptos ligula nunc mauris.\n\nAliquamin nisl vitae diam elementum phasellus porttitor vitae aenean enim lobortis magnis.  Natoqueorci pharetra rutrum eleifend ut et commodo torquent, commodo vehicula mollis consectetur pharetra volutpat ultricies fusce neque semper, sodales magna inceptos ante integer et vel nunc, fermentum justo pretium et eleifend tempor purus netus lorem cum mollis elit.  Eterat eget ante senectus tellus mus lacus turpis.  Vehiculanascetur praesent auctor condimentum magnis habitant, nullam velit mauris a ridiculus nulla.",
        "published": "1952-08-02",
        "img": "/resources/gen/c9b293a8-5397-43ae-a1e3-e7c19cffaffe.png"
    }, {
        "title": "Candid in Ochlocknee",
        "author": "Michelle Decker",
        "numPages": 778,
        "isbn": "e6c3e68a-d264-4780-844c-e3c6027625a5",
        "rating": 4,
        "summary": "Asit facilisi amet purus a platea rhoncus.  Morbitempor facilisi blandit montes sagittis turpis iaculis suscipit.",
        "published": "1981-11-24",
        "img": "/resources/gen/e6c3e68a-d264-4780-844c-e3c6027625a5.png"
    }, {
        "title": "Beta radiation with love",
        "author": "Helen Richmond",
        "numPages": 529,
        "isbn": "8147f76e-5fff-41df-af00-1438a5a50a66",
        "rating": 2,
        "summary": "Curabiturneque facilisi et mi integer ante aenean enim venenatis praesent, tincidunt litora nisi placerat, platea quisque cras litora mi nullam proin varius enim, volutpat habitant mi vehicula lacinia aliquet tellus iaculis tempor ridiculus libero.  Habitantparturient fringilla habitant himenaeos mattis aliquet libero fusce placerat maecenas fusce nascetur.  Convallisvelit scelerisque convallis primis dictumst fermentum pellentesque non mollis ridiculus.  Commodorutrum platea porta nulla erat iaculis, vestibulum penatibus montes.\n\nPharetranullam nisi montes praesent luctus consectetur natoque elementum praesent tortor sapien fames, felis hac diam.  Asociosqu sollicitudin diam viverra, lacinia nam cum sociis himenaeos habitant porttitor nam.  Vivamusjusto parturient amet odio morbi fermentum.",
        "published": "1953-02-13",
        "img": "/resources/gen/8147f76e-5fff-41df-af00-1438a5a50a66.png"
    }, {
        "title": "Constraining vindictiveness",
        "author": "Dusty Rowe",
        "numPages": 931,
        "isbn": "45ca964b-f17b-4707-94f9-9e92dba5e790",
        "rating": 2,
        "summary": "Crasplacerat maecenas lacinia felis ligula urna cursus parturient litora maecenas id sit.  Eutaciti quam nascetur nisl.",
        "published": "1965-01-10",
        "img": "/resources/gen/45ca964b-f17b-4707-94f9-9e92dba5e790.png"
    }, {
        "title": "Drill-like in Thomaston",
        "author": "Steven Patterson",
        "numPages": 1444,
        "isbn": "920b131c-b4f0-4867-8cbe-531b9914f390",
        "rating": 1,
        "summary": "Massamassa maecenas class duis nulla est consequat luctus nisi.  Himenaeostincidunt vestibulum facilisi phasellus rhoncus neque sociis torquent volutpat mollis erat eget.\n\nIaculismaecenas placerat porttitor.  Morbipellentesque velit fusce porttitor tempus libero integer potenti ante proin erat.  Habitantgravida aliquam volutpat integer sollicitudin massa vel curae proin donec dapibus, tempor mattis conubia habitant litora lorem sit litora posuere malesuada, fringilla mi condimentum elit elit tristique commodo.",
        "published": "1993-10-20",
        "img": "/resources/gen/920b131c-b4f0-4867-8cbe-531b9914f390.png"
    }, {
        "title": "Spic-and-span in Nelson",
        "author": "Jody Blackwell",
        "numPages": 983,
        "isbn": "6723a7dd-fb03-4e69-8607-9f463e06a3a6",
        "rating": 4,
        "summary": "Inceptosligula a aliquet dictumst, tristique integer platea volutpat phasellus mollis eget, parturient dolor per diam nullam lobortis eros eros nibh erat penatibus, odio sociosqu dui dis commodo congue.  Eleifendad sem praesent varius suscipit donec sociosqu leo.\n\nArcunascetur aliquet habitasse faucibus nulla dolor, elementum tempus urna diam ultrices scelerisque egestas, sit odio penatibus maecenas ultricies iaculis, dui arcu ligula.  Risusquisque fermentum maecenas semper gravida consectetur pulvinar nulla molestie primis, id hac porttitor porttitor libero elit quam nisl eleifend.",
        "published": "1960-11-05",
        "img": "/resources/gen/6723a7dd-fb03-4e69-8607-9f463e06a3a6.png"
    }, {
        "title": "Anomic bar-room plant",
        "author": "Donnie Nunez",
        "numPages": 488,
        "isbn": "36ed5095-9dd9-44cc-8c3a-7ed3ae75f25d",
        "rating": 1,
        "summary": "Dolorviverra integer tempus eu phasellus scelerisque justo litora dictumst ad sem, fames quam ad.  Vehiculamagna arcu rhoncus, nam vehicula porta volutpat nunc ullamcorper.  Himenaeosenim euismod mollis lorem donec orci rutrum eleifend.  Ultricesdictum integer aptent pretium interdum.\n\nNunccras accumsan rhoncus justo egestas pretium accumsan augue facilisi sed, tempor lacus lorem fames ante tellus.  Egestasornare aliquam montes convallis nulla non tristique tempus a nisl maecenas.  Curabiturvarius sit natoque.  Parturientinteger inceptos euismod torquent nisi enim torquent, nulla elementum fermentum venenatis ornare scelerisque feugiat elit, ullamcorper ante mollis phasellus vivamus purus lacus odio.",
        "published": "2006-12-28",
        "img": "/resources/gen/36ed5095-9dd9-44cc-8c3a-7ed3ae75f25d.png"
    }, {
        "title": "Anticlimactical duck-billed dinosaur",
        "author": "Jan Stein",
        "numPages": 1304,
        "isbn": "c080d7fd-0f5e-468b-9ebc-76f9163d8909",
        "rating": 2,
        "summary": "Sagittiseros habitasse scelerisque purus turpis enim velit rutrum, sociis gravida maecenas interdum, sed nisi magna placerat commodo cum aliquet scelerisque erat, vehicula tempus iaculis fringilla id lacinia.  Risusdignissim ante netus per vitae cras commodo mus volutpat fames sollicitudin.  Magnislacinia ac tortor sit curae primis sed vestibulum ornare, tempus adipiscing platea fermentum dignissim felis in vestibulum interdum, curae volutpat metus, molestie arcu sociosqu id eros.  Temporquam fringilla turpis habitant nascetur ipsum fusce eu blandit primis torquent, purus eleifend quis natoque suspendisse mauris duis cubilia quisque porttitor netus commodo.",
        "published": "1962-02-04",
        "img": "/resources/gen/c080d7fd-0f5e-468b-9ebc-76f9163d8909.png"
    }, {
        "title": "Time constant with love",
        "author": "Carrie McDowell",
        "numPages": 624,
        "isbn": "9fa5ffbb-d322-459f-a398-ded56695ba96",
        "rating": 3,
        "summary": "Habitassequisque nec fames porta sem, sociis nibh turpis, netus class amet senectus conubia dignissim cum nascetur hac.  Commodoridiculus ad ligula eu augue vestibulum sem dolor consectetur nisl potenti ultricies.",
        "published": "1973-04-13",
        "img": "/resources/gen/9fa5ffbb-d322-459f-a398-ded56695ba96.png"
    }, {
        "title": "About saddle block anesthesias and physicalnesss",
        "author": "Juanita Brewer",
        "numPages": 1296,
        "isbn": "70c94575-3528-4b9a-b31c-ddf1c8a72483",
        "rating": 4,
        "summary": "Magnisplatea netus purus sapien velit, suscipit eleifend curabitur amet, ligula malesuada adipiscing vel mollis sodales malesuada ligula, semper leo mauris mollis tempor conubia facilisi congue quisque.  Nonligula tortor eros libero neque erat posuere volutpat.  Turpissuspendisse class netus praesent augue senectus consequat.\n\nMustaciti aliquam lectus ornare cubilia ipsum bibendum dui, massa nullam nibh quisque nulla nullam parturient malesuada.  Puruselementum pharetra inceptos adipiscing nascetur nibh cum vivamus.",
        "published": "2008-05-15",
        "img": "/resources/gen/70c94575-3528-4b9a-b31c-ddf1c8a72483.png"
    }, {
        "title": "Cancroid melter",
        "author": "Sandra Love",
        "numPages": 1081,
        "isbn": "1a6b9a81-ece9-453a-aa6c-28c316df89f1",
        "rating": 3,
        "summary": "Pellentesqueurna potenti mi praesent auctor leo eget fusce tortor ultrices, pellentesque quisque fermentum at hac ipsum facilisis ornare nostra, dis habitant curabitur dictumst quis aenean convallis dis, accumsan sociis purus dapibus cum vestibulum sollicitudin nec felis.  Montessed rutrum bibendum aptent phasellus sit.  Elementumnunc cras sodales viverra scelerisque conubia auctor platea tempor dignissim, ornare lobortis sociosqu nam tortor.\n\nBibendumlobortis conubia habitasse suscipit facilisis nibh, purus fusce purus auctor.  Malesuadatempus orci dictumst nisl elementum dictum facilisis mauris primis cum ridiculus.  Atorci blandit hac nulla dapibus eu.",
        "published": "2004-12-31",
        "img": "/resources/gen/1a6b9a81-ece9-453a-aa6c-28c316df89f1.png"
    }, {
        "title": "Imputable in Hoboken",
        "author": "Vernon Lloyd",
        "numPages": 243,
        "isbn": "67498000-683e-49b4-bc84-ceb63849c7d0",
        "rating": 1,
        "summary": "Aeneaniaculis nisi suspendisse.  Gravidaut molestie fringilla gravida primis quis hac, urna odio nunc fermentum lacus egestas volutpat non, donec primis aenean gravida, per eget sit vel facilisis sociosqu suspendisse scelerisque taciti.  Lacustaciti gravida phasellus primis felis etiam magnis pulvinar convallis non, lorem diam egestas orci, nec eleifend purus ac fusce, ante varius ad mauris hac mi quisque class consectetur litora a parturient.  Eususcipit mus natoque id euismod rhoncus ipsum est fames, diam hendrerit urna varius ullamcorper bibendum habitasse convallis sociosqu molestie dictumst fermentum, morbi eu dictum duis, auctor odio mus praesent potenti interdum fermentum facilisis adipiscing dis diam tincidunt.\n\nMetusvarius arcu viverra porttitor eleifend habitasse eget montes duis dictum.  Malesuadalacinia primis leo pulvinar primis, mi eu sed etiam nostra at iaculis aenean dolor nostra.  Malesuadain rutrum natoque mus amet consectetur inceptos justo, neque litora ornare iaculis proin phasellus sodales nisl odio.  Vivamussenectus aliquet posuere sit cursus lacus sollicitudin sit integer convallis iaculis class.",
        "published": "1990-07-24",
        "img": "/resources/gen/67498000-683e-49b4-bc84-ceb63849c7d0.png"
    }, {
        "title": "Indefatigable in Lumber City",
        "author": "Brad Mays",
        "numPages": 1347,
        "isbn": "780e49c8-a17f-4389-9909-8d18d6a8cbad",
        "rating": 1,
        "summary": "Magnainceptos accumsan curabitur sociis sodales mus dictum pretium scelerisque a, lectus morbi curabitur sodales est rhoncus penatibus suspendisse, litora diam et quam nulla quis bibendum mi morbi consectetur netus.  Miid hendrerit netus a consequat duis maecenas quam porttitor lorem, fames purus bibendum ipsum ad suscipit, vehicula eleifend phasellus posuere.  Idconsequat semper phasellus mattis vitae odio, semper libero dignissim magna, pulvinar himenaeos lectus a congue accumsan leo eleifend montes.",
        "published": "2010-03-22",
        "img": "/resources/gen/780e49c8-a17f-4389-9909-8d18d6a8cbad.png"
    }, {
        "title": "Unfilled pastorship",
        "author": "Doris Snider",
        "numPages": 339,
        "isbn": "c46f5f5d-cd7d-4293-800a-f58690130894",
        "rating": 4,
        "summary": "Sollicitudinaliquam nulla venenatis dolor pharetra taciti et diam orci etiam erat dictumst.  Nonest condimentum magna condimentum, euismod taciti eget potenti rutrum pulvinar natoque varius facilisis magnis.\n\nUllamcorpermolestie platea elementum turpis et curae dapibus, natoque elementum augue aliquam id.  Erosblandit augue quisque donec lorem parturient senectus bibendum eget, facilisis non enim egestas, elit dis per eu praesent venenatis, netus aliquam facilisis varius cras egestas et platea cras velit felis.  Penatibuscursus habitasse nam mauris enim platea torquent tristique eu vehicula, malesuada pulvinar justo maecenas libero eros, congue amet pulvinar a.",
        "published": "1969-09-15",
        "img": "/resources/gen/c46f5f5d-cd7d-4293-800a-f58690130894.png"
    }, {
        "title": "Dolichocephalic in Hartwell",
        "author": "Tristan Curry",
        "numPages": 1149,
        "isbn": "710cd665-2ce5-4b16-a0db-c5870c4f069d",
        "rating": 4,
        "summary": "Namgravida condimentum curae, elementum volutpat dolor nisi fermentum odio ultrices sollicitudin sollicitudin natoque.  Natoqueneque fermentum ad tempor cum a.  Lacusnam blandit montes convallis velit ridiculus ligula tellus sit aptent dolor taciti, facilisi parturient vel nam quis, odio parturient ad, justo et cum montes interdum sit pretium dignissim sodales torquent nullam.  Odioerat adipiscing nibh facilisis erat, sem potenti facilisis pretium ipsum metus enim urna.",
        "published": "1990-03-24",
        "img": "/resources/gen/710cd665-2ce5-4b16-a0db-c5870c4f069d.png"
    }, {
        "title": "78 hippeastrum",
        "author": "Juanita Short",
        "numPages": 243,
        "isbn": "a4f9cb20-55cf-4f91-9120-a375c77cf7c1",
        "rating": 4,
        "summary": "Nisiduis hendrerit pulvinar lorem tincidunt molestie placerat ligula.  Eunetus orci fames eros accumsan tellus commodo turpis neque laoreet ad, hendrerit lacus posuere, convallis egestas integer habitant luctus adipiscing turpis tellus.  Anteconsectetur donec risus suspendisse erat justo massa elit senectus in pretium, cubilia dui taciti sociis mi nisi posuere nostra enim sociis pulvinar velit, venenatis erat morbi nascetur rhoncus morbi tincidunt orci parturient, nulla molestie in convallis tristique.  Risussuscipit molestie purus lacinia dictumst.\n\nNasceturelit in per porttitor natoque feugiat justo ante vehicula.  Habitassedapibus malesuada sollicitudin posuere aenean purus suscipit.",
        "published": "2013-05-07",
        "img": "/resources/gen/a4f9cb20-55cf-4f91-9120-a375c77cf7c1.png"
    }, {
        "title": "Two-toed in Walthourville",
        "author": "Barb Maddox",
        "numPages": 616,
        "isbn": "8105371f-09c6-4056-92a4-6da0cb1f2e75",
        "rating": 2,
        "summary": "Donecmi malesuada mauris auctor non metus a, metus hendrerit mauris.  Malesuadalibero natoque mauris a vestibulum, mauris suspendisse maecenas ligula mauris sed inceptos velit suspendisse lacinia, egestas mus proin ipsum ante vitae magnis metus bibendum quam, hac purus vehicula egestas bibendum morbi proin lacinia.\n\nFacilisissed consequat id netus commodo mi proin.  Dictumstfringilla faucibus scelerisque tristique.  Pretiumornare malesuada fames sed parturient potenti congue, porta quam tempus fames metus placerat gravida, at sapien etiam at egestas facilisis ante, tristique sit neque in tempus pulvinar risus est.",
        "published": "1972-08-22",
        "img": "/resources/gen/8105371f-09c6-4056-92a4-6da0cb1f2e75.png"
    }, {
        "title": "Maimed in Toomsboro",
        "author": "Katrina Sherman",
        "numPages": 769,
        "isbn": "a477ed4d-58f9-4a9e-9ffd-f1e29f357912",
        "rating": 2,
        "summary": "Nibhlaoreet sem mauris, nulla magna est tempus laoreet ligula, faucibus vitae netus adipiscing imperdiet libero, dapibus ultrices ad sed taciti erat lectus nisi varius primis mauris.  Convallismagnis ante mauris lacinia quisque duis.  Sitmattis elementum felis scelerisque platea consequat platea velit sollicitudin sociosqu luctus dui.",
        "published": "1967-01-24",
        "img": "/resources/gen/a477ed4d-58f9-4a9e-9ffd-f1e29f357912.png"
    }, {
        "title": "Machinelike in Queensland",
        "author": "Nancy Merritt",
        "numPages": 141,
        "isbn": "b61a12fc-3267-431c-a2bd-6cb108659292",
        "rating": 4,
        "summary": "Dolorpharetra sollicitudin aliquam, sed mus potenti in porta penatibus auctor facilisis consectetur.  Aeneandignissim sociosqu sapien quis taciti quisque suscipit egestas dictumst ante vivamus, vehicula cursus a hendrerit praesent, morbi leo ullamcorper ornare justo.",
        "published": "2008-06-28",
        "img": "/resources/gen/b61a12fc-3267-431c-a2bd-6cb108659292.png"
    }, {
        "title": "Prakritic onion butter",
        "author": "Kyle Booker",
        "numPages": 705,
        "isbn": "a2cb37af-394d-47e2-bd84-91d76be0d663",
        "rating": 3,
        "summary": "Dictumstconvallis luctus libero magnis volutpat sagittis mattis conubia parturient lectus, senectus pellentesque feugiat leo aliquet litora cubilia tincidunt phasellus, lobortis nulla praesent commodo consequat vehicula convallis luctus massa cras himenaeos tincidunt, pretium erat ante cubilia luctus sapien potenti cum libero condimentum hendrerit.  Litoraturpis himenaeos erat leo congue lacus tempor libero sodales phasellus ultrices porta, iaculis parturient vestibulum rhoncus arcu torquent congue nec, vehicula augue orci et est est bibendum eros, integer massa id ultrices faucibus etiam rutrum torquent libero magnis neque condimentum.  Orcilorem sed pretium auctor ultricies non.  Duisdui ipsum purus ante erat aptent, facilisis a taciti donec, maecenas blandit imperdiet a aptent litora.\n\nFermentumgravida lorem placerat ridiculus urna.  Porttitorsemper tincidunt diam interdum iaculis, per dui et nullam litora justo accumsan, ipsum velit nisl, tempus metus suspendisse integer porttitor quam suscipit orci quisque phasellus.",
        "published": "2009-06-13",
        "img": "/resources/gen/a2cb37af-394d-47e2-bd84-91d76be0d663.png"
    }];

});
