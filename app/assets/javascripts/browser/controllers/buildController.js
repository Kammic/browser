BuildController = ["$scope", "$routeParams", "server", function($scope, $routeParams, server) {
  $scope.buildId = $routeParams.buildId;

  $scope.updateBuild = function() {
    server.getBuild($scope.buildId).then(function(build){
      $scope.build = build;
    });
  }

  $scope.updateBuild();
}];
