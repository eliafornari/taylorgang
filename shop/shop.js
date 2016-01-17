angular.module('myApp')

.controller('shopCtrl',['$scope','$location','$rootScope','getService','$sce','$routeParams', function($scope, $location, $rootScope, getService, $sce, $routeParams) {

  $rootScope.pageLoading = false;

    // setTimeout(function(){
      $rootScope.viewLoaded = true;
      $rootScope.pageLoading = false;
      $scope.$apply();
    // }, 1500);


}]);
