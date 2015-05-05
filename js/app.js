var app = angular.module("dayPlanner", ["ngRoute", 'firebase']);

	app.constant('fb', {
	url: 'https://vivid-heat-9025.firebaseio.com/'
})
	.config(function($routeProvider) {
	$routeProvider

	.when('/login', {
		templateUrl: 'js/login/login.html',
		controller: 'loginCtrl'//,
		//resolve: ''

	})
	.when('/plan', {
		templateUrl: 'js/plan/plan.html',
		controller: 'planCtrl'
	})
	.otherwise({
		redirectTo: '/login'
	})
})