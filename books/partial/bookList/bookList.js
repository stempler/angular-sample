angular.module('books').controller('BooklistCtrl',function($scope){

    $scope.books = [{
        title: 'To bee or not to bee',
        author: 'Maja Beesworth',
        numPages: 111,
        isbn: '101-110-111',
        img: '/resources/101-110-111.jpg',
        summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    }, {
        title: 'Angular 3',
        author: 'Inde Future',
        numPages: 328,
        isbn: '424-935-104',
        img: '/resources/424-935-104.jpg',
        summary: 'Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht?Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen?'
    }, {
        title: 'Talking with Monsters',
        author: 'Lotte Say',
        numPages: 943,
        isbn: '294-872-990',
        img: '/resources/294-872-990.jpg',
        summary: 'Bavaria ipsum dolor sit amet hoam Schaung kost nix wea ko, dea ko heid gfoids ma sagrisch guad Hemad gschmeidig, Watschnbaam ned heid gfoids ma sagrisch guad? Maderln nia need is boarischer nix Gwiass woass ma ned Namidog, nia. Sog i Spezi wea ko, dea ko a Maß und no a Maß mim Radl foahn, a so a Schmarn: I moan oiwei gwihss hogg di hera Biazelt liberalitas Bavariae wolln, da, hog di hi. Fias Schneid Broadwurschtbudn, i mechad dee Schwoanshaxn nia g’hupft wia gsprunga do Spuiratz dei Servas.'
    }];

});
