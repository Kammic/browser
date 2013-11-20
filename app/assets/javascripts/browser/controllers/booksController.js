BooksController = ["$scope", "$rootScope", "$location", "server", function($scope, $rootScope, $location, server) {

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

  $scope.build = function(bookId){
    if($scope.bookHasActiveBuilds(bookId)) {
      $rootScope.$broadcast('alert', 'danger', 'Build already in progres');
      return;
    }
    server.build(bookId).then(function(result) {
      $location.path('/builds');
    });
  };

  $scope.bookHasActiveBuilds = function(bookId) {
    if(!$scope.books || $scope.books.length <= 0) {
      return false;
    }

    var book = null;
    for(var i = 0; i < $scope.books.length; i++) {
      if($scope.books[i].id == bookId){
        book = $scope.books[i];
        break;
      }
    }

    if(book.active_builds && book.active_builds.length > 0)
      return true;
    else
      return false;

  };

  $scope.updateBooks();
}];
