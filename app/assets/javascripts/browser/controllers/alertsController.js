AlertsController = ["$scope", "$rootScope", function($scope, $rootScope) {
  $scope.alerts = [];

  $rootScope.$on('alert', function(event, type, message){
    $scope.alerts.push({type: type, msg: message});
  });

  $scope.closeAlert = function(index){
    $scope.alerts.splice(index, 1);
  };
}];
