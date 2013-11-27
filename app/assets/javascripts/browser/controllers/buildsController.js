BuildsController = ["$scope", "server", function($scope, server) {
  $scope.page = 1;
  $scope.total_pages = 1;

  $scope.getBuilds = function(page){
    clearInterval($scope.interval);
    if(page < 1)
      page = 1;
    else if(page > $scope.total_pages)
      page = $scope.total_pages;

    $scope.page = page;
    $scope.updateBuilds();
  };

  $scope.pageRange = function(){
    if(typeof $scope.total_pages !== 'undefined' && $scope.total_pages > 1)
      return new Array($scope.total_pages);
    return  [];
  };

  $scope.updateBuilds = function() {
    server.getBuilds($scope.page).then(function(response){
      $scope.total_pages = response.total_pages;
      $scope.builds      = response.builds;
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
