describe('service: Server', function() {

  beforeEach(function() {
    module('Browser');
  });

  beforeEach(inject(function($httpBackend, server) {
    this.server = server;
    this.$httpBackend = $httpBackend;
  }));

  afterEach(function() {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });

  describe('getUser', function(){
    it('returns the current users information', function(){
      this.$httpBackend
          .when('GET', '/user')
          .respond({login: 'Ortuna', image_url: 'some_image'});

      var done = false;
      this.server.getUser().then(function(response){
        expect(response.login).toEqual('Ortuna');
        expect(response.image_url).toEqual('some_image');
        done = true;
      });

      this.$httpBackend.flush();
      waitsFor(250, function(){ return done});
    });
  });

  describe('getBooks', function(){
    it('gets a list of books from the server', function(){
      this.$httpBackend.when('GET', '/books').respond(
        [{id: 1}, {id: 2}, {id: 3}]);

      var done = false;
      this.server.getBooks().then(function(response){
        expect(response.length).toEqual(3);
        done = true;
      });

      this.$httpBackend.flush();
      waitsFor(250, function(){ return done});
    });
  });

  describe('getBook', function(){
    it('gets the data on the book', function(){
      this.$httpBackend.when('GET', '/books/1').respond({title: 'Some Book'});

        var done = false;
        this.server.getBook('1').then(function(response){
          expect(response.title).toEqual('Some Book');
          done = true;
        });

        this.$httpBackend.flush();
        waitsFor(250, function(){ return done});
    });
  });

});

