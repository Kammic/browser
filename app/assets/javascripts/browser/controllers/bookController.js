BookController = ["$scope", "$routeParams", "server", function($scope, $routeParams, server) {
  server.getBook($routeParams.bookId).then(function(book){
    $scope.book = book;
  });
}];
