function HomeController() {
  vm = this;

  vm.name = "I'm in the public folder! We're in the home directive";

}

angular
  .module('app')
  .controller('HomeController', HomeController);