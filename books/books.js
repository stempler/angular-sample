angular.module('books', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('books').config(function($stateProvider) {

    $stateProvider.state('bookList', {
        url: '/books',
        templateUrl: 'books/partial/bookList/bookList.html'
    });
    $stateProvider.state('bookDetail', {
        url: '/books/:isbn',
        templateUrl: 'books/partial/bookDetail/bookDetail.html',
        controller: function($scope, $stateParams) {
            $scope.isbn = $stateParams.isbn;
        }
    });
    /* Add New States Above */

});

