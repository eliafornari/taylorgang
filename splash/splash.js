angular.module('myApp')

.controller('splashCtrl',['$scope','$location','$rootScope','getService','$sce','$routeParams', function($scope, $location, $rootScope, getService, $sce, $routeParams) {


var video_splash = document.getElementById('splash-video');
video_splash.volume = 0;
video_splash.play();







}]);
