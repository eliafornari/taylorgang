

var Producer = angular.module('myApp');

Producer.controller('producerCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory, anchorSmoothScroll, $window){






//................................................................................................................................................//
//................................................................................................................................................//
//................................................................DETAIL..........................................................................//
//................................................................................................................................................//
//................................................................................................................................................//

$rootScope.producer_data;
$rootScope.channel_data_p = [];
$rootScope.main_video_p, $scope.main_title_p;
$rootScope.main_video_show_p =false;
$rootScope.baseUrl = '';
$rootScope.mainProducer;
// https://www.youtube.com/embed/8d0cm_hcQes
$rootScope.main_video_p = $rootScope.baseUrl;
$scope.producerInstagram=[];

$rootScope.thisProducer = function(thisProducer){

    for (a in $rootScope.Producer){
      if($rootScope.Producer[a].uid==thisProducer){
        $rootScope.mainProducer = $rootScope.Producer[a];
        $rootScope.bandsInTown_p($rootScope.Producer[a].data['producer.name'].value[0].text);
        if($rootScope.Producer[a].data['producer.youtubeChannelID']){
          $scope.getYoutubeChannel_p($rootScope.Producer[a].data['producer.youtubeChannelID'].value);
        }
      }
    }
    $scope.instagram_p();
};


$scope.getYoutubeChannel_p = function(channelid){

              $.get(
                "https://www.googleapis.com/youtube/v3/search",{
                  part: 'snippet',
                  maxResults: 50,
                  channelId: channelid,
                  key: 'AIzaSyC_ArqRandYQu5VgJiL9flmr27ApQU5ZqA'
                },
                  function(data){

                    $rootScope.channel_data_p = data.items;

                    $rootScope.baseUrl_p = 'https://www.youtube.com/embed/'+$rootScope.channel_data_p[0].id.videoId+'?rel=0&amp;&autoplay=0&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
                    $rootScope.main_video_p = $rootScope.baseUrl_p;
                    $rootScope.main_title_p = $rootScope.channel_data_p[0].title;

                    $rootScope.$apply();

                    setTimeout(function(){
                      $rootScope.viewLoaded = true;
                      $rootScope.pageLoading = false;
                      $rootScope.$apply();
                      $rootScope.main_video_show_p =true;
                    }, 2000);

                  });

}




$scope.thisVideo = function(id, index){

  $rootScope.baseUrl_p = 'https://www.youtube.com/embed/'+id+'?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
  $rootScope.main_video_p = $scope.baseUrl;
  $rootScope.main_title_p = $rootScope.channel_data_p[index].title;

}









  //BANDSINTOWN

$rootScope.bandsInTown_p = function(producername){


        if($rootScope.isMobile){
          // $scope.showTour = function(){
            new BIT.Widget({
              "producer": producername,
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
              "producer": producername,
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

if ($location.path() == '/producers/'+$routeParams.producer){

var producerParam = $routeParams.producer;
  $rootScope.$watch('producerReady' ,function(){
    setTimeout(function(){
      $rootScope.thisProducer(producerParam);


    }, 900);
  });

}

$scope.instagram_p = function(){
  instaFactory.pullimages($rootScope.mainProducer.data['producer.instagramId'].value, 2).then( function(data) {
        $scope.producerInstagram = $rootScope.instaTotal;
      }, function(error) {
    });
}


//..............................................................................loading new pictures
$rootScope.noMore_p = false;
$rootScope.totalDisplayed_p,$rootScope.loadMoreNumber_p, $rootScope.loadMoreImage_p
$rootScope.globalLoadMore_p = function(i){
  $rootScope.loadMoreNumber_p = i;
    if ($rootScope.totalDisplayed_p > 0){

    }else {
      //the controller
      $rootScope.totalDisplayed_p= i;
      setTimeout(function(){
        $rootScope.loadMoreImage_p = $rootScope.instaTotal[$rootScope.totalDisplayed_p].images.standard_resolution.url;
      }, 1000);
    }
}





$rootScope.loadMore_p = function () {
  $rootScope.totalDisplayed_p += $rootScope.loadMoreNumber_p;
  $rootScope.loadMoreImage_p = $rootScope.instaTotal[$rootScope.totalDisplayed_p].images.standard_resolution.url;
  if ($rootScope.totalDisplayed_p >= ((loops)*20)){
    $rootScope.filterRemovesLoadMore();
  }
};




//.......different loaded pictures for every device
  if ($rootScope.isDevice){
    $rootScope.globalLoadMore_p(14);
  } else if (!$rootScope.isDevice) {
    $rootScope.globalLoadMore_p(20);
  }



$rootScope.hideLoadMore_p = true;
setTimeout(function(){
  $rootScope.hideLoadMore_p = false;
}, 2000);


$rootScope.filterRemovesLoadMore_p = function(){
  $rootScope.hideLoadMore_p = true;
}

$rootScope.filterAllLoadMore_p = function(){
  $rootScope.hideLoadMore_p = false;
}















//..................................................changing anchor link on click
$scope.gotoAnchor = function(x) {
  // call $anchorScroll()
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



$scope.showProducerLinks =false;

  $scope.p_mobileLinks = function(){
    $scope.showProducerLinks = !$scope.showProducerLinks
  }











});//end of the controller.... .... ...... ..... ....






















Producer.directive('instagramDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {

    }
  };
});