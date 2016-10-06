function NotesController(NoteService) {
  var vm = this;

  vm.name = "We're using the notes controller";

  vm.createNote = createNote;

  vm.newNote;

  vm.editNote = {};

  vm.updateNote = updateNote;

  activate()

  function activate(){
    getNotes();
  }

  function getNotes(){
    return NoteService.getNotes().then(setNotes);
  }

  function createNote() {
    return NoteService.createNote(vm.newNote)
    .then(function(){
      vm.newNote = '';
      getNotes();
    });
  }

  function updateNote() {
    return NoteService.updateNote(vm.editNote)
    .then(function(){
      getNotes();
    });
  }


  function setNotes(data) {
    return vm.notes = data;
  }

}

angular
  .module('app')
  .controller('NotesController', NotesController);
