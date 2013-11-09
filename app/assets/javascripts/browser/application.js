var Browser = angular.module('Browser',  ['ngRoute']);

Browser.config(['$routeProvider',
               function($routeProvider) {
                 $routeProvider.
                   when('/books', {
                   templateUrl: 'books/index.html',
                   controller: 'BooksController'
                 }).
                   when('/phones/:phoneId', {
                   templateUrl: 'partials/phone-detail.html',
                   controller: 'PhoneDetailCtrl'
                 }).
                   otherwise({
                   redirectTo: '/books'
                 });
               }]);


