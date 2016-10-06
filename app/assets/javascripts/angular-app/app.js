angular
  .module('app', ['ui.router', 'templates' ]) 
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home_controller_template.html',
        controller: 'HomeController'
      })
      .state('notes', {
        url: '/notes',
        templateUrl: 'templates/notes.html',
        controller: 'NotesController as vm'
      });
      $urlRouterProvider.otherwise('/');
  })
  .config(function($httpProvider) {
            // for CSRF errors
            $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
        });
