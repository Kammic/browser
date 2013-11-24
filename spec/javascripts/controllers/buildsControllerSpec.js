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

  describe('$scope.getBuilds', function(){
    beforeEach(function(){
      spyOn(this.scope, 'updateBuilds');
    });

    it('updates $scope.page', function(){
      this.scope.page = 9;
      this.scope.getBuilds(1);
      expect(this.scope.page).toEqual(1);
    });

    it('calls updateRepos', function(){
      this.scope.getBuilds(1);
      expect(this.scope.updateBuilds).toHaveBeenCalled();
    });

    it('doesnt go beyond the bounds', function(){
      this.scope.total_pages = 10;
      this.scope.getBuilds(50);
      expect(this.scope.page).toEqual(10);

      this.scope.getBuilds(0);
      expect(this.scope.page).toEqual(1);

      this.scope.getBuilds(-1);
      expect(this.scope.page).toEqual(1);
    });

    it('$scope.pageRange returns empty array when total_pages is 1', function(){
      this.scope.total_pages = 1;
      expect(this.scope.pageRange()).toEqual([]);

      this.scope.total_pages = 5;
      expect(this.scope.pageRange()).toEqual(new Array(5));
    });
  });


  it('$scope.updateBuilds calls server.getBuilds to get the builds', function(){
    spy_and_return(this.server, 'getBuilds', true);
    this.scope.updateBuilds();
    expect(this.server.getBuilds).toHaveBeenCalled();
  });

  it('$scope.updateBuilds sets $scope.builds', function(){
    spy_and_return(this.server, 'getBuilds', {builds: ['builds']});
    this.scope.updateBuilds();
    expect(this.scope.builds).toEqual(['builds']);
  });

});

