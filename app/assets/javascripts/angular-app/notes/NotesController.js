

  function NotesController(NoteService) {
    var vm = this;

    vm.name = "this is the notes controller";

    activate()

    function activate(){
      getNotes();
    }

    function getNotes(){
      return NoteService.getNotes().then(setNotes)
    }

    function setNotes(data) {
      return vm.notes = data;
    }

  }

  angular
    .module('app')
    .controller('NotesController', NotesController);
