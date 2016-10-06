function NotesDirective(){
  return {
    templateUrl: 'templates/notes_directive.html',
    controller: 'NotesController as ctrl',
    restrict: 'EA'
  };

}

angular
  .module('app')
  .directive('notesDirective', NotesDirective);