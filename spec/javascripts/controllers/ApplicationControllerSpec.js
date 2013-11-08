describe('controller: ApplicationController', function() {

  beforeEach(function() {
    module('Browser');
    $("body").append("<div id='preview'></div>");
  });

  beforeEach(inject(function($rootScope, $controller) {
    this.scope = $rootScope.$new();
    this.ctrl  = $controller('ApplicationController', {
      $scope: this.scope,
    });
  }));

  it('should have stuff as the name', function(){
    expect(this.scope.name).toEqual('stuff');
  });
});

