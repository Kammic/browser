Browser.service('server', ['$q', '$http', function($q, $http){

  var server = {};
  var queryData = function(location) {
    return $http.get(location).then(function(response){
      return response.data;
    });
  };

  server.getUser   = function(){ return queryData('/user'); };
  server.getBooks  = function(){ return queryData('/books'); };
  server.getBuilds = function(){ return queryData('/builds'); };
  server.getRepos  = function(){ return queryData('/repos'); };

  server.getBook = function(bookId){
    return $http.get('/books/' + bookId).then(function(response){
      return response.data;
    });
  };

  server.follow = function(id) {
    return $http.get('/repos/' + id + '/follow').then(function(response){
      return true;
    }, function(){ return false; } );
  }

  server.unfollow = function(bookId){
    return $http.delete('/books/' + bookId).then(function(response){
      return true;
    }, function(){ return false });
  };

  return server;

}]);
