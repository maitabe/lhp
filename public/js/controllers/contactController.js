app.controller('contactCtrl', ['$scope', 'contactList','$state', function($scope, contactList, $state) {

	 // add a new contact
	$scope.addContact = function() {

		//unbind the object
		var contactObj = angular.copy($scope.newContact);
		console.log(contactObj);

		//send it to the service
		contactList.addContact(contactObj).then(function() {
			//redirect to contacts page
			$state.go('contacts');
		});


		//reset form
		$scope.myForm.name.$setViewValue(undefined);
		$scope.myForm.email.$setViewValue(undefined);

		$scope.myForm.$setPristine();
    	$scope.myForm.$setUntouched();

    	$scope.newContact.name = '';
		$scope.newContact.email = '';

	};

}]);