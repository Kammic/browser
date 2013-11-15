describe('controller: ReposController', function() {

  beforeEach(function() {
    module('Browser');
    $("body").append("<div id='preview'></div>");
  });

  beforeEach(inject(function($rootScope, $controller, server) {
    this.scope  = $rootScope.$new();
    this.server = server;
    this.ctrl   = $controller('ReposController', {
      $scope: this.scope,
    });
  }));

  it('$scope.follow calls server.follow with correct id', function(){
    spy_and_return(this.server, 'follow', true);
    this.scope.follow(99);
    expect(this.server.follow).toHaveBeenCalledWith(99);
  });

  it('$scope.unfollow calls server.follow with correct id', function(){
    spy_and_return(this.server, 'unfollow', true);
    this.scope.unfollow(98);
    expect(this.server.unfollow).toHaveBeenCalledWith(98);
  });

  it('$scope.updateRepos calls server.getRepos', function(){
    spy_and_return(this.server, 'getRepos', true);
    this.scope.updateRepos();
    expect(this.server.getRepos).toHaveBeenCalled();
  });

  it('$scope.updateRepos sets $scope.repos', function(){
    spy_and_return(this.server, 'getRepos', ['stuff']);
    this.scope.updateRepos();
    expect(this.scope.repos).toEqual(['stuff']);

  });



});

