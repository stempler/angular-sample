describe('BooklistCtrl', function() {

	beforeEach(module('books'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('BooklistCtrl', {$scope: scope});
    }));

	it('should hold a list of books', inject(function() {

		expect(scope.books).toBeDefined();

        expect(angular.isArray(scope.books)).toBe(true);

        scope.books.forEach(function(book) {
            expect(isValidBook(book)).toBe(true);
        });

	}));

    function isValidBook(book) {
        return angular.isObject(book) && angular.isString(book.title) && angular.isString(book.isbn);
    }

});
