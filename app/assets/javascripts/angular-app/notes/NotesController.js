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

  function updateNote(note) {
    return NoteService.updateNote(note)
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
