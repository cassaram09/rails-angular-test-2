function NoteService($http){
  return {
    getNotes: getNotes,
    createNote: createNote,
    updateNote: updateNote
  }

  function getNotes() {
    return $http.get('/notes')
      .then(handleResponse)
      .catch(handleError);
  }

  function createNote(note){
    var req = {
      method: 'POST',
      url: '/notes',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        note: note
      }
    };
    return $http(req).catch(handleError);
  }

  function updateNote(note){
     var req = {
      method: 'POST',
      url: '/notes/' + note.id,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        note: note
      }
    };
    return $http(req).catch(handleError);

  }

  function handleResponse(response){
    console.log(response);
    return response.data;
  }

  function handleError(error){
    console.log(error);
  }
}

angular
  .module('app')
  .service('NoteService', NoteService);
