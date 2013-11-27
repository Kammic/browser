describe('controller: HeaderController', function() {

  beforeEach(function() {
    module('Browser');
    $("body").append("<div id='preview'></div>");
  });

  beforeEach(inject(function($rootScope, $controller, $location, server) {
    this.scope    = $rootScope.$new();
    this.server   = server;
    this.location = $location;
    this.ctrl     = $controller('HeaderController', {
      $scope: this.scope,
    });
  }));

  it('$scope.updateUser calls server.getUser to get the users info', function(){
    spy_and_return(this.server, 'getUser', true);
    this.scope.updateUser();
    expect(this.server.getUser).toHaveBeenCalled();
  });

  it('$scope.updateUser sets the user information', function(){
    spy_and_return(this.server, 'getUser', {login: 'ortuna', image_url: 'image'});
    this.scope.updateUser();
    expect(this.scope.login).toEqual('ortuna');
    expect(this.scope.image_url).toEqual('image');
  });

  it('$scope.currentSection() returns book', function(){
    spyOn(this.location, 'path').andCallFake(function(){ return '/books/1/2';});
    expect(this.scope.currentSection()).toEqual('books');
  });

  it('$scope.currentSection() returns builds', function(){
    spyOn(this.location, 'path').andCallFake(function(){ return '/builds/1/2';});
    expect(this.scope.currentSection()).toEqual('builds');
  });

  it('$scope.currentSection() returns repos', function(){
    spyOn(this.location, 'path').andCallFake(function(){ return '/repos/1/2';});
    expect(this.scope.currentSection()).toEqual('repos');
  });
});

