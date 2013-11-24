ReposController = ["$scope", "$rootScope", "server", function($scope, $rootScope, server) {
  $scope.page = 1;

  $scope.getRepos  = function(page){
    clearInterval($scope.interval);
    if(page < 1)
      page = 1;
    else if(page > $scope.total_pages)
      page = $scope.total_pages;

    $scope.page = page;
    $scope.updateRepos();
  };

  $scope.pageRange = function(){
    if(typeof $scope.total_pages !== 'undefined' && $scope.total_pages > 1)
      return new Array($scope.total_pages);
    return  [];
  };

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
    server.getRepos($scope.page).then(function(response){
      $scope.total_pages = response.total_pages;
      $scope.loading     = response.loading;
      $scope.repos       = response.repos;
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
