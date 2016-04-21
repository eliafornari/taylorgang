

var About = angular.module('myApp');


About.controller('aboutCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory){





  //................................................................................................................................................//
  //................................................................................................................................................//
  //................................................................DETAIL..........................................................................//
  //................................................................................................................................................//
  //................................................................................................................................................//

  $rootScope.about_data;
  $rootScope.about_channel_data = [];
  $rootScope.about_main_video, $scope.about_main_title;
  $rootScope.about_main_video_show =false;
  $rootScope.about_baseUrl;
  // 'https://www.youtube.com/embed/8d0cm_hcQes'
  $rootScope.about_main_video;
  // = $scope.about_baseUrl;
  $scope.aboutInstagram=[];





  $scope.about_getYoutubeChannel = function(channelid){

                $.get(
                  "https://www.googleapis.com/youtube/v3/search",{
                    part: 'snippet',
                    maxResults: 50,
                    channelId: channelid,
                    key: 'AIzaSyC_ArqRandYQu5VgJiL9flmr27ApQU5ZqA'
                  },
                    function(data){

                      $rootScope.about_channel_data = data.items;
                      // console.log(data);
                      // $.each(data.items, function(i, item){
                      //   // var videoTitle = item.snippet.title;
                      // })


                      $rootScope.about_baseUrl = 'https://www.youtube.com/embed/'+$rootScope.about_channel_data[0].id.videoId+'?rel=0&amp;&autoplay=0&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
                      $rootScope.about_main_video = $scope.about_baseUrl;
                      $rootScope.about_main_title = $rootScope.channel_data[0].title;

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
    $rootScope.main_title = $rootScope.channel_data[index].title;

  }









    //BANDSINTOWN

  $rootScope.about_bandsInTown = function(artistname){


          if($rootScope.isMobile){
            // $scope.showTour = function(){
              new BIT.Widget({
                "artist": "artistname",
                "div_id":"tour-dates",
                "text_color": "#000000",
                "share_links":false,
                "bg_color": "#FFFFFF",
                "force_narrow_layout": true,

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

  if ($location.path() == '/about'){
    console.log("detail");



    $rootScope.about_bandsInTown('taylorgang');
    $scope.about_getYoutubeChannel('UCceZc-Bn_geUR5sQRlCKQow');



            instaFactory.pullimages('taylorgang', 4).then( function(data) {

                  $scope.artistInstagram = $rootScope.instaTotal;

                  console.log(data);



                }, function(error) {
                  // promise rejected, could log the error with: console.log('error', error);

              });


  }








});

  // About.directive('instagramDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  //   return {
  //     restrict: 'A',
  //     link: function(scope, elem, attrs) {
  //
  //     }
  //   };
  // });
