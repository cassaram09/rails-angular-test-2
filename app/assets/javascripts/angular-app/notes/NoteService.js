function NoteService($http){
  return {
    getNotes: getNotes,
  }

  function getNotes() {
    return $http.get('/notes')
      .then(handleResponse)
      .catch(handleError);
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
