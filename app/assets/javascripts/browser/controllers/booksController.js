BooksController = ["$scope", "server", function($scope, server) {

  $scope.updateBooks = function(){
    server.getBooks().then(function(books){
      $scope.books = books;
    });
  };

  $scope.unfollow = function(bookId){
    server.unfollow(bookId).then(function(result) {
      $scope.updateBooks();
    });
  };


  $scope.updateBooks();
}];
