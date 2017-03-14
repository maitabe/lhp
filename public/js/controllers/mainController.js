app.controller('mainCtrl', ['$scope', 'contactList','$http', function($scope, contactList, $http) {

	//get the array of contacts
	contactList.getAll().then(function(data) {
	  	$scope.contacts = data.data;
	});

}]);