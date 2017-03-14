app.factory('contactList', ['$http', function($http) {

	var contactsService = {

      addContact: function(newContact) {
      //add new contact locally
      // newContact.id = this.contacts.length + 1;

      //add new contact to server
      return $http.post('/addContact', newContact).then(function(inputData){
        console.log('newContact succeed');
      },function(err){
        console.log('newContact failed', err);
      });
    },
  };

  contactsService.getAll = function() {
    return $http.get('/contacts');
  };

	return contactsService;

}]);