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

  describe('build book', function(){
    it('returns true when build is successful', function(){
      this.$httpBackend
          .when('GET', '/books/1/build')
          .respond(200, '');

      var done = false;
      this.server.build(1).then(function(response){
        expect(response).toEqual(true);
        done = true;
      });

      this.$httpBackend.flush();
      waitsFor(250, function(){ return done});
    });

    it('returns false when build is not successful', function(){
      this.$httpBackend
          .when('GET', '/books/1/build')
          .respond(404, '');

      var done = false;
      this.server.build(1).then(function(response){
        expect(response).toEqual(false);
        done = true;
      });

      this.$httpBackend.flush();
      waitsFor(250, function(){ return done});
    });

  });


  describe('unfollow book', function(){
    it('returns true when delete is successful', function(){
      this.$httpBackend
          .when('DELETE', '/books/1')
          .respond(200, '');

      var done = false;
      this.server.unfollow(1).then(function(response){
        expect(response).toEqual(true);
        done = true;
      });

      this.$httpBackend.flush();
      waitsFor(250, function(){ return done});
    });

    it('returns false when delete is not successful', function(){
      this.$httpBackend
          .when('DELETE', '/books/1')
          .respond(404, '');

      var done = false;
      this.server.unfollow(1).then(function(response){
        expect(response).toEqual(false);
        done = true;
      });

      this.$httpBackend.flush();
      waitsFor(250, function(){ return done});
    });

  });

  describe('follow', function(){
    it('returns true when follow is successful', function(){
      this.$httpBackend
          .when('GET', '/repos/1/follow')
          .respond(200, '');

      var done = false;
      this.server.follow(1).then(function(response){
        expect(response).toEqual(true);
        done = true;
      });

      this.$httpBackend.flush();
      waitsFor(250, function(){ return done});
    });

    it('returns false when follow is not successful', function(){
      this.$httpBackend
          .when('GET', '/repos/2/follow')
          .respond(403, '');

      var done = false;
      this.server.follow(2).then(function(response){
        expect(response).toEqual(false);
        done = true;
      });

      this.$httpBackend.flush();
      waitsFor(250, function(){ return done});
    });
  });


  describe('getBuilds', function(){
    it('returns the current users builds', function(){
      this.$httpBackend
          .when('GET', '/builds')
          .respond([{},{},{}]);

      var done = false;
      this.server.getBuilds().then(function(response){
        expect(response.length).toEqual(3);
        done = true;
      });

      this.$httpBackend.flush();
      waitsFor(250, function(){ return done});
    });
  });

  describe('getRepos', function(){
    it('Sends the passed in page as a param', function(){
      this.$httpBackend
          .when('GET', '/repos?page=2')
          .respond([{},{},{}]);

      var done = false;
      this.server.getRepos(2).then(function(response){
        done = true;
      });

      this.$httpBackend.flush();
      waitsFor(250, function(){ return done});
    });

    it('returns the current users repos', function(){
      this.$httpBackend
          .when('GET', '/repos')
          .respond([{},{},{}]);

      var done = false;
      this.server.getRepos().then(function(response){
        expect(response.length).toEqual(3);
        done = true;
      });

      this.$httpBackend.flush();
      waitsFor(250, function(){ return done});
    });
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

  describe('getBuild', function(){
    it('gets the data on the build', function(){
      this.$httpBackend.when('GET', '/builds/1').respond({id: 1});

        var done = false;
        this.server.getBuild('1').then(function(response){
          expect(response.id).toEqual(1);
          done = true;
        });

        this.$httpBackend.flush();
        waitsFor(250, function(){ return done});
    });
  });

  describe('refreshReposFromGithub', function(){
    it('calls refrsh on repos', function(){
      this.$httpBackend.when('GET', '/repos/refresh').respond({});

        var done = false;
        this.server.refreshReposFromGithub().then(function(response){
          done = true;
        });

        this.$httpBackend.flush();
        waitsFor(250, function(){ return done});
    });
  });


});

