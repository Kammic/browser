var Browser = angular.module('Browser',  ['ngRoute']);

Browser.config(['$routeProvider',
               function($routeProvider) {
                 $routeProvider
                 .when('/books', {
                   templateUrl: '/books/index.html',
                   controller: 'BooksController'
                 })
                 .when('/books/:bookId', {
                   templateUrl: '/books/show.html',
                   controller: 'BookController'
                 })
                 .when('/repos', {
                   templateUrl: '/repos/index.html',
                   controller: 'ReposController'
                 })
                 .when('/builds', {
                   templateUrl: '/builds/index.html',
                   controller: 'BuildsController'
                 })
                 .when('/build/:buildId', {
                   templateUrl: '/builds/show.html',
                   controller: 'BuildController'
                 })
                 .otherwise({
                   redirectTo: '/books'
                 });
               }]);

Browser.config(["$httpProvider", function($httpProvider) {
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);
