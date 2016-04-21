

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
// https://www.youtube.com/embed/8d0cm_hcQes
$rootScope.main_video = $rootScope.baseUrl;
$scope.artistInstagram=[];

$rootScope.thisArtist = function(thisArtist, thisNumber){


    for (a in $rootScope.Artist){
      if($rootScope.Artist[a].uid==thisArtist){
        $rootScope.mainArtist = $rootScope.Artist[a];
        $rootScope.bandsInTown($rootScope.Artist[a].data['artist.name'].value[0].text);
        $scope.getYoutubeChannel($rootScope.Artist[a].data['artist.youtubeChannelID'].value);
      }
    }
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
                    // console.log(data);
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

if ($location.path() == '/artist/'+$routeParams.id){
  console.log("detail");



          instaFactory.pullimages($rootScope.mainArtist.data['artist.instagramId'].value, 10).then( function(data) {

                $scope.artistInstagram = $rootScope.instaTotal;
                console.log("data");

                console.log(data);



              }, function(error) {
                // promise rejected, could log the error with: console.log('error', error);

            });


}

















//..................................................changing anchor link on click
$scope.gotoAnchor = function(x) {
  // call $anchorScroll()
  anchorSmoothScroll.scrollTo(x);
};


$rootScope.scroll;
$scope.hideBacktotop = true;
$scope.windowHeight = $window.innerHeight;
console.log($scope.windowHeight);


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







});//end of the controller.... .... ...... ..... ....






















Artist.directive('instagramDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {

    }
  };
});
