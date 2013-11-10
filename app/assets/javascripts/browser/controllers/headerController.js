HeaderController = ["$scope", "$rootScope", "server", function($scope, $rootScope, server) {
  server.getUser().then(function(user){
    $scope.login     = user.login;
    $scope.image_url = user.image_url;
  });
}];
