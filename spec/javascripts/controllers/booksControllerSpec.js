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

});

