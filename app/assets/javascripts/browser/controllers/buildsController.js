BuildsController = ["$scope", "server", function($scope, server) {
  $scope.updateBuilds = function() {
    server.getBuilds().then(function(builds){
      $scope.builds = builds;
    });
  };

  $scope.updateBuilds();

  $scope.interval = setInterval(function(){
    $scope.updateBuilds();
  }, 3000);

  $scope.$on('$destroy', function(){
    clearInterval($scope.interval);
  });
}];
