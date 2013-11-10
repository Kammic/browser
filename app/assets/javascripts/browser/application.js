var Browser = angular.module('Browser',  ['ngRoute']);

Browser.config(['$routeProvider',
               function($routeProvider) {
                 $routeProvider.
                   when('/books', {
                   templateUrl: '/books/index.html',
                   controller: 'BooksController'
                 }).
                   when('/books/:bookId', {
                   templateUrl: '/books/show.html',
                   controller: 'BookController'
                 }).
                   when('/repos', {
                   templateUrl: '/repos/index.html',
                   controller: 'ReposController'
                 }).
                   when('/builds', {
                   templateUrl: '/builds/index.html',
                   controller: 'BuildsController'
                 }).
                   otherwise({
                   redirectTo: '/books'
                 });
               }]);


