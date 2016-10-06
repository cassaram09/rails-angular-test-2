function HomeDirective(){
  return {
    templateUrl: 'templates/home/home_directive.html',
    controller: 'HomeController as ctrl',
    restrict: 'EA'
  };

}

angular
  .module('app')
  .directive('homeDirective', HomeDirective);