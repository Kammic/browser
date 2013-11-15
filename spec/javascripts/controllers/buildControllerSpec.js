describe('controller: BuildController', function() {

  beforeEach(function() {
    module('Browser');
    $("body").append("<div id='preview'></div>");
  });

  beforeEach(inject(function($rootScope, $controller, $routeParams, server) {
    this.routeParams = $routeParams;
    this.scope       = $rootScope.$new();
    this.server      = server;
    this.ctrl        = $controller('BuildController', {
      $scope: this.scope,
      $routeParams: this.routeParams,
    });
  }));

 it('$scope.updateBuild to call server.getBuild', function(){
    this.scope.buildId = 1;
    spy_and_return(this.server, 'getBuild', true);
    this.scope.updateBuild();
    expect(this.server.getBuild).toHaveBeenCalledWith(1);
 });

 it('$scope.updateBuild updates $scope.build', function(){
    this.scope.buildId = 1;
    spy_and_return(this.server, 'getBuild', 'build');
    this.scope.updateBuild();
    expect(this.scope.build).toEqual('build');
  });
});

