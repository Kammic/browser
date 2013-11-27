HeaderController = ["$scope", "$rootScope", "server", "$location", function($scope, $rootScope, server, $location) {
  $scope.updateUser = function(){
    server.getUser().then(function(user){
      $scope.login     = user.login;
      $scope.image_url = user.image_url;
    });
  };

  $scope.currentSection = function(){
    var currentPath = $location.path();
    if(currentPath.indexOf('/books') == 0)
      return 'books';
    else if(currentPath.indexOf('/builds') == 0)
      return 'builds';
    else if(currentPath.indexOf('/repos') == 0)
      return 'repos';

    return currentPath;
  };

  $scope.updateUser();
}];
