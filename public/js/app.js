var app = angular.module('lhpApp', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'material.svgAssetsCache']);

app.config(['$stateProvider','$urlRouterProvider', '$qProvider', function($stateProvider, $urlRouterProvider, $qProvider) {

	$qProvider.errorOnUnhandledRejections(false);

  $stateProvider
    .state('contacts', {
      url: '/contacts',
      controller:'mainCtrl',
      templateUrl: '/templates/contacts.html'
    })
    .state('addContact', {
      url: '/addContact',
      controller: 'contactCtrl',
      templateUrl: '/templates/addContact.html'
    });

  $urlRouterProvider.otherwise('contacts');
}]);


