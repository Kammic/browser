describe('controller: BuildsController', function() {

  beforeEach(function() {
    module('Browser');
    $("body").append("<div id='preview'></div>");
  });

  beforeEach(inject(function($rootScope, $controller, server) {
    this.scope  = $rootScope.$new();
    this.server = server;
    this.ctrl   = $controller('BuildsController', {
      $scope: this.scope,
    });
  }));

  it('$scope.updateBuilds calls server.getBuilds to get the builds', function(){
    spy_and_return(this.server, 'getBuilds', true);
    this.scope.updateBuilds();
    expect(this.server.getBuilds).toHaveBeenCalled();
  });

  it('$scope.updateBuilds sets $scope.builds', function(){
    spy_and_return(this.server, 'getBuilds', ['builds']);
    this.scope.updateBuilds();
    expect(this.scope.builds).toEqual(['builds']);
  });

});

