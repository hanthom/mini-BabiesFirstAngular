angular.module('friendsList').controller('mainCtrl', function($scope) {

	$scope.myFriends = ["Corey Dickinson", "Quin Tinling", "Sam Baker", "Stevo Davis", "Jim Klein", "Evita Montes", "Georgina Solis", "Sydney Thomas", "Sualeh Hafeez", "Kevin Milne", "Bailey Murphy"];

	$scope.addFriend = function(newFriend) {
		$scope.myFriends.push(newFriend);
		$scope.newFriendInput = '';
	}

});

	