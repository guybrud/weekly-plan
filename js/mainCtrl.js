var app = angular.module('dayPlanner');

	app.controller('mainCtrl', function($scope, mainService, $firebaseObject) {
    	$scope.test = 'working'
    	//data binding
    	var ref = mainService.url
    	var syncObject = $firebaseObject(ref);
    	syncObject.$bindTo($scope, 'days').then(function(){
    		console.log($scope.days)
    	})
    	//end data binding
    	$scope.reset = mainService.reset;
	})