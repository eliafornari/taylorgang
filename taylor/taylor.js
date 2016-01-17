
angular.module('myApp')

.controller('taylorgangCtrl',['$scope','$location','$rootScope','getService','$sce','$routeParams', function($scope, $location, $rootScope, getService, $sce, $routeParams) {

$rootScope.pageLoading = true;

  // setTimeout(function(){
    $rootScope.viewLoaded = true;
    $rootScope.pageLoading = false;
    $scope.$apply();
  // }, 1500);

}]);
