BooksController = ["$scope", "$rootScope", "$http", function($scope, $rootScope, $http) {
  $http({method: 'GET', url: '/books'}).
    success(function(data, status, headers, config) {
      $scope.books = data;
    })
}];
