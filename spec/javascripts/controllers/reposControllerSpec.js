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

  describe('$scope.getRepos', function(){
    beforeEach(function(){
      spyOn(this.scope, 'updateRepos');
    });

    it('updates $scope.page', function(){
      this.scope.page = 9;
      this.scope.getRepos(1);
      expect(this.scope.page).toEqual(1);
    });

    it('calls updateRepos', function(){
      this.scope.getRepos(1);
      expect(this.scope.updateRepos).toHaveBeenCalled();
    });

    it('doesnt go beyond the bounds', function(){
      this.scope.total_pages = 10;
      this.scope.getRepos(50);
      expect(this.scope.page).toEqual(10);

      this.scope.getRepos(0);
      expect(this.scope.page).toEqual(1);

      this.scope.getRepos(-1);
      expect(this.scope.page).toEqual(1);
    });
  });

  it('$scope.refreshReposFromGithub calls server.refreshRepos', function(){
    spy_and_return(this.server, 'refreshReposFromGithub', true);
    this.scope.refreshReposFromGithub();
    expect(this.server.refreshReposFromGithub).toHaveBeenCalled();
  });

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
    var response = {
      repos: ['stuff']
    };
    spy_and_return(this.server, 'getRepos', response);
    this.scope.updateRepos();
    expect(this.scope.repos).toEqual(['stuff']);
  });

  it('$scope.updateRepos sets $scope.loading', function(){
    var response = {
      loading: false,
      repos: ['stuff']
    };
    spy_and_return(this.server, 'getRepos', response);
    this.scope.updateRepos();
    expect(this.scope.loading).toEqual(false);
  });

});

