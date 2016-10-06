angular
  .module('app', ['ui.router', 'templates' ]) 
  .config(function($stateProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home_controller_template.html',
        controller: 'HomeController'
      });
  });
