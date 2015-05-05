var app = angular.module('dayPlanner');

	app.controller('loginCtrl', function($scope, $location) {
    	$scope.test = 'working'
    	$scope.logIn = function() {
    		console.log($scope.username)
    		$location.path(/plan/)
    	}

	})