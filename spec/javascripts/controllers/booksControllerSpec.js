describe('controller: BooksController', function() {

  beforeEach(function() {
    module('Browser');
    $("body").append("<div id='preview'></div>");
  });

  beforeEach(inject(function($rootScope, $controller, server) {
    this.scope  = $rootScope.$new();
    this.server = server;
    this.ctrl   = $controller('BooksController', {
      $scope: this.scope,
    });
  }));

  it('$scope.unfollow calls server.unfollow', function(){
    spy_and_return(this.server, 'unfollow', true);
    this.scope.unfollow(1);
    expect(this.server.unfollow).toHaveBeenCalledWith(1);
  });

  it('$scope.updateBooks calls server.getBooks', function(){
    spy_and_return(this.server, 'getBooks', true);
    this.scope.updateBooks();
    expect(this.server.getBooks).toHaveBeenCalled();
  });

  it('$scope.updateBooks updates $scope.books', function(){
    spy_and_return(this.server, 'getBooks', ['books']);
    this.scope.updateBooks();
    expect(this.scope.books).toEqual(['books']);
  });

  it('$scope.build calls server.build', function(){
    spy_and_return(this.server, 'build', true);
    this.scope.build(1);
    expect(this.server.build).toHaveBeenCalledWith(1);
  });

  describe('active builds', function(){

    beforeEach(function() {
      this.scope.books = [
        {id: 21},
        {id: 1, active_builds: [{id: 54}]},
        {id: 2, active_builds: []}
      ];
    });

    it('$scope.builds doesn\'t build when there are active builds', function(){
      spy_and_return(this.server, 'build', true);
      this.scope.build(1);
      expect(this.server.build).not.toHaveBeenCalled();
    });

    it('$scope.builds alerts the user that there are active builds', function(){
      var alerted = false;
      this.scope.$on('alert', function(event, type, message) {
        alerted = true;
      });

      this.scope.build(1);
      waitsFor(function(){ return alerted; }, 250);
    });

    it('$scope.bookHasActiveBuilds returns books build status', function(){
      expect(this.scope.bookHasActiveBuilds(21)).toEqual(false);
      expect(this.scope.bookHasActiveBuilds(2)).toEqual(false);
      expect(this.scope.bookHasActiveBuilds(1)).toEqual(true);
    });

  });

});

