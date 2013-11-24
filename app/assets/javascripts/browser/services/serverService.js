Browser.service('server', ['$q', '$http', function($q, $http){

  var server = {};
  var queryData = function(location) {
    return $http.get(location).then(function(response){
      return response.data;
    });
  };

  server.getUser   = function(){ return queryData('/user'); };
  server.getBooks  = function(){ return queryData('/books'); };
  server.getBuilds = function(page){ 
    var url = '/builds';
    if(typeof page !== 'undefined')
      url += '?page=' + page;
    return queryData(url); 
  };
  server.getRepos  = function(page){
    var url = '/repos';
    if(typeof page !== 'undefined')
      url += '?page=' + page;
    return queryData(url); 
  };

  server.getBook = function(bookId){
    return $http.get('/books/' + bookId).then(function(response){
      return response.data;
    });
  };

  server.getBuild = function(buildId){
    return $http.get('/builds/' + buildId).then(function(response){
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

  server.build = function(bookId){
    return $http.get('/books/' + bookId + '/build').then(function(response){
      return true;
    }, function(){ return false });
  };

  server.refreshReposFromGithub = function(){
    return $http.get('/repos/refresh').then(function(response){
      return true;
    }, function(){ return false });
  };

  return server;

}]);
