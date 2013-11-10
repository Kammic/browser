BooksController = ["$scope", "server", function($scope, server) {
  server.getBooks().then(function(books){
    $scope.books = books;
  });

}];
