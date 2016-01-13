angular.module('myApp')

.controller('artistCtrl',['$scope','$location','$rootScope','getService','$sce','$routeParams','artistService', function($scope, $location, $rootScope, getService, $sce, $routeParams, artistService) {

$scope.artist = $routeParams.artist;
$rootScope.artist_data;
$rootScope.channel_data = [];

$scope.main_video, $scope.main_title;


artistService.get({artist: $routeParams.artist}, function(data){

  $rootScope.artist_data = data;

}).$promise.then(function (data) {
  // console.log($rootScope.artist_data.videos[0].id);

  console.log(data);





              $.get(
                "https://www.googleapis.com/youtube/v3/search",{
                  part: 'snippet',
                  maxResults: 50,
                  channelId: data.channel_id,
                  key: 'AIzaSyC_ArqRandYQu5VgJiL9flmr27ApQU5ZqA'
                },
                  function(data){

                    $rootScope.channel_data = data.items;
                    console.log($rootScope.channel_data);
                    // console.log(data);
                    // $.each(data.items, function(i, item){
                    //   // var videoTitle = item.snippet.title;
                    // })


                    $scope.baseUrl = 'https://www.youtube.com/embed/'+$rootScope.channel_data[0].id.videoId+'?rel=0&amp;&autoplay=0&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
                    $scope.main_video = $sce.trustAsResourceUrl($scope.baseUrl);
                    $scope.main_title = $rootScope.channel_data[0].title;

                    $scope.$apply();

                    console.log("title: "+$scope.main_title);
                    console.log("main video:"+$scope.main_video);

                  }
              );






});


$scope.thisVideo = function(id, index){

  $scope.baseUrl = 'https://www.youtube.com/embed/'+id+'?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
  $scope.main_video = $sce.trustAsResourceUrl($scope.baseUrl);
  $scope.main_title = $rootScope.channel_data[index].title;

}





}]);
