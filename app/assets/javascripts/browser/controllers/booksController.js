BooksController = ["$scope", "server", function($scope, server) {

  $scope.updateBooks = function(){
    server.getBooks().then(function(books){
      $scope.books = books;
    });
  };

  $scope.deleteBook = function(bookId){
    server.deleteBook(bookId).then(function(result) {
      $scope.updateBooks();
    });
  };


  $scope.updateBooks();
}];
