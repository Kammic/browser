BuildsController = ["$scope", "server", function($scope, server) {
  server.getBuilds().then(function(builds){
    $scope.builds = builds;
  });

}];
