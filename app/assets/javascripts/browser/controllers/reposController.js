ReposController = ["$scope", "$rootScope", "server", function($scope, $rootScope, server) {

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
    server.getRepos().then(function(repos){
      $scope.repos = repos;
    });
  };

  $scope.updateRepos();

}];
