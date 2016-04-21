var Subscribe = angular.module('myApp');

Subscribe.controller('subscribeCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http){
$rootScope.pageLoading = false;
  setTimeout(function(){
    $rootScope.viewLoaded = true;
    $rootScope.pageLoading = false;
    $scope.$apply();
  }, 500);




























});
