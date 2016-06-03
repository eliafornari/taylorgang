

var Artist = angular.module('myApp');




Artist.controller('artistCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory, anchorSmoothScroll, $window){






//................................................................................................................................................//
//................................................................................................................................................//
//................................................................DETAIL..........................................................................//
//................................................................................................................................................//
//................................................................................................................................................//

$rootScope.artist_data;
$rootScope.channel_data = [];
$rootScope.main_video, $scope.main_title;
$rootScope.main_video_show =false;
$rootScope.baseUrl = '';
$rootScope.mainArtist;
// https://www.youtube.com/embed/8d0cm_hcQes
$rootScope.main_video = $rootScope.baseUrl;
$scope.artistInstagram=[];

$rootScope.thisArtist = function(thisArtist){


    for (a in $rootScope.Artist){

      if($rootScope.Artist[a].uid==thisArtist){
        $rootScope.mainArtist = $rootScope.Artist[a];
        $rootScope.bandsInTown($rootScope.Artist[a].data['artist.name'].value[0].text);
        $scope.getYoutubeChannel($rootScope.Artist[a].data['artist.youtubeChannelID'].value);
      }
    }
    $scope.instagram_a();
};


$scope.getYoutubeChannel = function(channelid){

              $.get(
                "https://www.googleapis.com/youtube/v3/search",{
                  part: 'snippet',
                  maxResults: 50,
                  channelId: channelid,
                  key: 'AIzaSyC_ArqRandYQu5VgJiL9flmr27ApQU5ZqA'
                },
                  function(data){

                    $rootScope.channel_data = data.items;
                    // $.each(data.items, function(i, item){
                    //   // var videoTitle = item.snippet.title;
                    // })


                    $rootScope.baseUrl = 'https://www.youtube.com/embed/'+$rootScope.channel_data[0].id.videoId+'?rel=0&amp;&autoplay=0&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
                    $rootScope.main_video = $rootScope.baseUrl;
                    $rootScope.main_title = $rootScope.channel_data[0].title;

                    $rootScope.$apply();

                    setTimeout(function(){
                      $rootScope.viewLoaded = true;
                      $rootScope.pageLoading = false;
                      $rootScope.$apply();
                      $rootScope.main_video_show =true;
                    }, 2000);

                  });

}




$scope.thisVideo = function(id, index){

  $rootScope.baseUrl = 'https://www.youtube.com/embed/'+id+'?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
  $rootScope.main_video = $scope.baseUrl;
  $rootScope.main_title = $rootScope.channel_data[index].title;

}









  //BANDSINTOWN

$rootScope.bandsInTown = function(artistname){


        if($rootScope.isMobile){
          // $scope.showTour = function(){
            new BIT.Widget({
              "artist": artistname,
              "div_id":"tour-dates",
              "text_color": "#000000",
              "share_links":false,
              "bg_color": "#FFFFFF",
              "force_narrow_layout": false,

              "separator_color": "#FFFFFF",
              "link_color": "#000000"
              // "force_narrow_layout":"true"
            }).insert_events();
          // }

        }else if(!$rootScope.isMobile){
          // $scope.showTour = function(){
            new BIT.Widget({
              "artist": artistname,
              "div_id":"tour-dates",
              "text_color": "#000000",
              "share_links":false,
              "bg_color": "#FFFFFF",
              // "force_narrow_layout": false,
              "separator_color": "#FFFFFF",
              "link_color": "#000000"
              // "force_narrow_layout":"true"
            }).insert_events();
          // }
        }
}//end of bandsintown








//DETAIL CHECK

if ($location.path() == '/artists/'+$routeParams.id){

var artistParam = $routeParams.id;


  $rootScope.$watch('artistReady' ,function(){
    setTimeout(function(){
        $rootScope.thisArtist(artistParam);

    }, 900);
  });

}





$scope.instagram_a = function(){
  instaFactory.pullimages($rootScope.mainArtist.data['artist.instagramId'].value, 2).then( function(data) {
        $scope.artistInstagram = $rootScope.instaTotal;
      }, function(error) {
    });
}











//..................................................changing anchor link on click
$scope.gotoAnchor = function(x) {
  anchorSmoothScroll.scrollTo(x);
};


$rootScope.scroll;
$scope.hideBacktotop = true;
$scope.windowHeight = $window.innerHeight;

  angular.element($window).bind("scroll", function() {


      var scroll = this.pageYOffset;

      $rootScope.scroll = scroll;
      if(scroll<($scope.windowHeight*3)){
        $scope.hideBacktotop = true;
        // angular.element($window).unbind("scroll");
      }else if (scroll>=($scope.windowHeight*3)){
        $scope.hideBacktotop = false;

      }

      $scope.$apply();
  });









$scope.showArtistLinks = false;

$scope.a_mobileLinks = function(){
  $scope.showArtistLinks = !$scope.showArtistLinks
}





});//end of the controller.... .... ...... ..... ....






















Artist.directive('instagramDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {

    }
  };
});
