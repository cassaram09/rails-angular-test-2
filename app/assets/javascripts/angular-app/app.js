angular
  .module('app', ['ui.router', 'templates' ]) 
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        template: '<home-directive>'
      })
      .state('notes', {
        url: '/notes',
        template: '<notes-directive>'
      });
      $urlRouterProvider.otherwise('/');
  })
  .config(function($httpProvider) {
      // for CSRF errors
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  });
