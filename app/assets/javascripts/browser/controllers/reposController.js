ReposController = ["$scope", "server", function($scope, server) {

  $scope.follow = function(id) {
    server.follow(id);
    $scope.updateRepos();
  };

  $scope.updateRepos = function() {
    server.getRepos().then(function(repos){
      $scope.repos = repos;
    });
  };

  $scope.updateRepos();
}];
