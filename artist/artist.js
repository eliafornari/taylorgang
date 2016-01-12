angular.module('myApp')

.controller('artistCtrl',['$scope','$location','$rootScope','getService','$sce','$routeParams','artistService', function($scope, $location, $rootScope, getService, $sce, $routeParams, artistService) {

$scope.artist = $routeParams.artist;
$rootScope.artist_data;


artistService.get({artist: $routeParams.artist}, function(data){

  console.log(data);
  console.log($routeParams.artist);
  $rootScope.artist_data = data;


}).$promise.then(function () {
  console.log($rootScope.artist_data.videos[0].id);


  $scope.baseUrl = 'https://www.youtube.com/embed/'+$rootScope.artist_data.videos[0].id+'?rel=0&amp;&autoplay=0&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
  $scope.main_video = $sce.trustAsResourceUrl($scope.baseUrl);

  $scope.main_title = $rootScope.artist_data.videos[0].title;
});


$scope.thisVideo = function(id, index){

  $scope.baseUrl = 'https://www.youtube.com/embed/'+id+'?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
  $scope.main_video = $sce.trustAsResourceUrl($scope.baseUrl);

    $scope.main_title = $rootScope.artist_data.videos[index].title;

}

  // getArtist.get($scope.artist)
  // // then() called when son gets back
  // .then(function(data) {
  //
  //     $rootScope.artist_data = data;
  //
  // }, function(error) {
  //     // promise rejected, could log the error with: console.log('error', error);
  //
  //     alert("an error occurred please reload the page.");
  //
  // }).then(function(){
  //
  //   setTimeout(function(){
  //     $rootScope.viewLoaded = true;
  //   }, 600);
  //   $rootScope.pageLoading = false;
  //   // $scope.$apply();
  //
  // });



}]);
