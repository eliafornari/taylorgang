angular.module('myApp')

.controller('navCtrl',['$scope','$location','$rootScope','getService','$sce','$routeParams', function($scope, $location, $rootScope, getService, $sce, $routeParams) {








}])

.directive('navDirective', function() {
	return {
		restrict: 'E',
    replace: true,
		templateUrl: 'nav/nav.html'
	}
});
