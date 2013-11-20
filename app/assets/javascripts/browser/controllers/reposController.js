ReposController = ["$scope", "$rootScope", "server", function($scope, $rootScope, server) {

  $scope.refreshReposFromGithub = function(){
    server.refreshReposFromGithub();
  };

  $scope.follow = function(id) {
    server.follow(id).then(function(){
      $scope.updateRepos();
    });
  };

  $scope.unfollow = function(id) {
    server.unfollow(id).then(function(){
      $scope.updateRepos();
    });
  };

  $scope.updateRepos = function() {
    server.getRepos().then(function(response){
      $scope.loading = response.loading;
      $scope.repos   = response.repos;
    });
  };

  $scope.updateRepos();

  $scope.interval = setInterval(function(){
    $scope.updateRepos();
  }, 3000);

  $scope.$on('$destroy', function(){
    clearInterval($scope.interval);
  });

}];
