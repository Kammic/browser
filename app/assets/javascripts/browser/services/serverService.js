Browser.service('server', ['$q', '$http', function($q, $http){

  var server = {};

  server.getUser  = function(){
    return $http.get('/user').then(function(response){
      return response.data;
    });
  };

  server.getBooks = function(){
    return $http.get('/books').then(function(response){
      return response.data;
    });
  };

  server.getBuilds = function(){
    return $http.get('/builds').then(function(response){
      return response.data;
    });
  };

  server.getBook = function(bookId){
    return $http.get('/books/' + bookId).then(function(response){
      return response.data;
    });
  };


  return server;

}]);
