function NotesDirective(){
  return {
    templateUrl: 'templates/notes/notes_directive.html',
    controller: 'NotesController as ctrl',
    restrict: 'EA'
  };

}

angular
  .module('app')
  .directive('notesDirective', NotesDirective);