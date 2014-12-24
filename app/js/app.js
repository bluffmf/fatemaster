'use strict';


var molfarApp = angular.module('molfarApp', [

    'navigationControllers',
    'mainControllers',
    'productControllers'

]);





molfarApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/main.html', controller: MainCtrl});
    $routeProvider.when('/products', {templateUrl: 'partials/partial2.html', controller: ProdCtrl});
    $routeProvider.when('/gallery', {templateUrl: 'partials/partial2.html', controller: ProdCtrl});
    $routeProvider.when('/media', {templateUrl: 'partials/partial2.html', controller: ProdCtrl});
    $routeProvider.when('/video', {templateUrl: 'partials/partial2.html', controller: ProdCtrl});
    $routeProvider.when('/contacts', {templateUrl: 'partials/partial2.html', controller: ProdCtrl});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
