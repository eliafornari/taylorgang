

var About = angular.module('myApp');


About.controller('aboutCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory){





  //................................................................................................................................................//
  //................................................................................................................................................//
  //................................................................DETAIL..........................................................................//
  //................................................................................................................................................//
  //................................................................................................................................................//

  $rootScope.about_data;
  $rootScope.about_playlist_data = [];
  $rootScope.about_main_video, $scope.about_main_title;
  $rootScope.about_main_video_show =false;
  $rootScope.about_baseUrl;
  // 'https://www.youtube.com/embed/8d0cm_hcQes'
  $rootScope.about_main_video;
  // = $scope.about_baseUrl;
  $scope.aboutInstagram=[];





  $scope.about_getYoutubePlaylist = function(playid){
// GET https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL9cwsTrgI6FFxBon4flET37aW2QJP7l9S&key={YOUR_API_KEY}
                $.get(
                  "https://www.googleapis.com/youtube/v3/playlistItems",{
                    part: 'snippet',
                    maxResults: 50,
                    playlistId: playid,
                    key: 'AIzaSyC_ArqRandYQu5VgJiL9flmr27ApQU5ZqA'
                  },
                    function(data){

                      $rootScope.about_playlist_data = data.items;
                      // console.log(data);
                      // $.each(data.items, function(i, item){
                      //   // var videoTitle = item.snippet.title;
                      // })


                      $rootScope.about_baseUrl = 'https://www.youtube.com/embed/'+$rootScope.about_playlist_data[0].snippet.resourceId.videoId+'?rel=0&amp;&autoplay=0&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
                      $rootScope.about_main_video = $scope.about_baseUrl;
                      $rootScope.about_main_title = $rootScope.about_playlist_data[0].title;

                      $rootScope.$apply();

                      setTimeout(function(){
                        $rootScope.viewLoaded = true;
                        $rootScope.pageLoading = false;
                        $rootScope.$apply();
                        $rootScope.about_main_video_show =true;
                      }, 2000);

                    });

  }




  $scope.thisVideo = function(id, index){

    $rootScope.baseUrl = 'https://www.youtube.com/embed/'+id+'?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
    $rootScope.main_video = $scope.baseUrl;
    $rootScope.main_title = $rootScope.about_playlist_data[index].title;

  }







  //DETAIL CHECK
    $scope.about_getYoutubePlaylist('PL9cwsTrgI6FFxBon4flET37aW2QJP7l9S');





    $rootScope.g_instaTotal  =[];
    $rootScope.g_instapics = [];

    $rootScope.g_totalDisplayed;
    $rootScope.g_loadMoreImage="";
    $rootScope.g_loadMoreNumber;


      //..............................................................................loading new pictures
      // $rootScope.noMore = false;
      // $rootScope.gang_globalLoadMore = function(i){
      //   $rootScope.loadMoreNumber = i;
      //     if ($rootScope.totalDisplayed > 0){
      //
      //     }else {
      //       //the controller
      //       $rootScope.totalDisplayed = i;
      //       setTimeout(function(){
      //         $rootScope.loadMoreImage = $rootScope.instaTotal[$rootScope.totalDisplayed].images.standard_resolution.url;
      //       }, 3000);
      //     }
      // }


      //
      //
      //
      // $rootScope.loadMore = function () {
      //   $rootScope.totalDisplayed += $rootScope.loadMoreNumber;
      //   $rootScope.loadMoreImage = $rootScope.instaTotal[$rootScope.totalDisplayed].images.standard_resolution.url;
      //   console.log("$rootScope.totalDisplayed : "+$rootScope.totalDisplayed +" "+$rootScope.loadMoreImage);
      //
      //
      //   if ($rootScope.totalDisplayed >= ((loops)*20)){
      //     $rootScope.filterRemovesLoadMore();
      //     console.log("removed");
      //   }
      // };







      //.......different loaded pictures for every device
        // if ($rootScope.isDevice){
        //   $rootScope.globalLoadMore(14);
        // } else if (!$rootScope.isDevice) {
        //   $rootScope.globalLoadMore(20);
        // }



      // $rootScope.hideLoadMore = true;
      // setTimeout(function(){
      //   $rootScope.hideLoadMore = false;
      // }, 2000);
      //
      //
      // $rootScope.filterRemovesLoadMore = function(){
      //   $rootScope.hideLoadMore = true;
      // }
      //
      // $rootScope.filterAllLoadMore = function(){
      //   $rootScope.hideLoadMore = false;
      // }



    // ACCESS TOKEN = 20694160.2e1aeb5.45751ad675a143b083a008ed7b9775da

var thisData;
var thisArtist;


//
$rootScope.g_instaAccessToken = "20694160.020b8c7.a5946235ad9346a8b824b050360c7584";



$scope.$watch('artistReady' ,function(){
  setTimeout(function(){
      $scope.aboutLoop();
  }, 900);
});


$scope.aboutLoop = function(){

  for ( i = 0; i < ($rootScope.Artist.length); i++ ){
    var id = "";
    id = $rootScope.Artist[i].data['artist.instagramId'].value;

    if (id != ""){

var config = {method: 'JSONP', cache: true, isArray: true};
    var g_endpoint = "";
    g_endpoint = "https://api.instagram.com/v1/users/"+id+"/media/recent?access_token="+$rootScope.g_instaAccessToken+"&callback=JSON_CALLBACK";

    $http.jsonp(g_endpoint, config)

    // $http({url: g_endpoint, method: 'JSONP', cache: true, isArray: true})

    .then(function(response){
          thisData = [];
          thisData = response.data.data;
          $rootScope.g_instaTotal = $rootScope.g_instaTotal.concat(thisData);

          // if(thisArtist != response.data[0].user.id){
          //
          //   console.log(thisArtist);
          // }else{
          //   console.log("same");
          //
          // }
          //
          // var done = true;
          //
          // thisArtist = response.data[0].user.id;

      })



    }
  }
}















$scope.showAboutLinks = false;

$scope.g_mobileLinks = function(){
  $scope.showAboutLinks = !$scope.showAboutLinks
}






});//end od controller
