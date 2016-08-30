var Artist = angular.module('myApp');

Artist.controller('artistCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory, anchorSmoothScroll, $window){

  $rootScope.meta= {
    "title":"taylorgang | artists",
    "url": "artists",
    "description": "artists"
  }

//................................................................DETAIL..........................................................................//

$rootScope.artist_data;
$rootScope.channel_data = [];
$rootScope.main_video, $scope.main_title;
$rootScope.main_video_show =false;
$rootScope.baseUrl = '';
$rootScope.mainArtist;
$rootScope.main_video = $rootScope.baseUrl;
$scope.artistInstagram=[];

$rootScope.thisArtist = function(thisArtist){
  for (a in $rootScope.Artist){
    if($rootScope.Artist[a].uid==thisArtist){
      $rootScope.mainArtist = $rootScope.Artist[a];
      $rootScope.bandsInTown($rootScope.Artist[a].data['artist.name'].value[0].text);
      $scope.getYoutubeChannel($rootScope.Artist[a].data['artist.youtubeChannelID'].value);
      $scope.getArtistReleases($rootScope.Artist[a].id, 1);
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
        }else if(!$rootScope.isMobile){
          // $scope.showTour = function(){
            new BIT.Widget({
              "artist": artistname,
              "div_id":"tour-dates",
              "text_color": "#000000",
              "share_links":false,
              "bg_color": "#FFFFFF",
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
  $rootScope.meta= {
    "title":"taylorgang | "+artistParam,
    "url": "artists/"+$routeParams.id,
    "description": "artists | "+$routeParams.id
  }
  $rootScope.$watch('artistReady' ,function(){
    setTimeout(function(){
      $rootScope.thisArtist(artistParam);
    }, 900);
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
    $scope.showArtistLinks = !$scope.showArtistLinks;
  }

  $scope.$on("$destroy", function() {
    $rootScope.artistRelease=[];
    $rootScope.totalArtistReleasePages=1;
  });

  $rootScope.artistRelease;
  $rootScope.totalArtistReleasePages;

  //get artist releases from prismic
  $scope.getArtistReleases = function(id, thisPage){
    Prismic.Api('https://taylorgang.cdn.prismic.io/api', function (err, Api) {
        Api.form('everything')
            .ref(Api.master())
            .query(
              // Prismic.Predicates.at("document.type", "release"),
              Prismic.Predicates.at("my.release.artist.artistlink", id)
            )
            .pageSize(9)
            .page(thisPage)
            .orderings('[my.release.date]')
            .submit(function (err, response) {
                // The products are now ordered by price, highest first
                var results = response.results;
                setTimeout(function(){
                  $rootScope.pageLoading = false;
                  $scope.$apply();
                }, 600);

                if (thisPage >1 ) {
                  $rootScope.artistRelease = $rootScope.artistRelease.concat(response.results);
                  $scope.$broadcast('artistReleaseDone');
                  $rootScope.totalArtistReleasePages = response.total_pages; // the number of pages
                }else{
                  $rootScope.artistRelease= response.results;
                  $scope.$broadcast('artistReleaseDone');
                  $rootScope.totalArtistReleasePages = response.total_pages;
                }
            });
    });
  }



$scope.page_a =1;
$scope.pagingArtist=function(){
  $scope.page_a = $scope.page_a +1;
  if($scope.page_a <= $rootScope.totalArtistReleasePages){
    $scope.getArtistReleases($rootScope.mainArtist.id, $scope.page_a);
  }else{
    return false;
  }
}

});//end of the controller.... .... ...... ..... ....














Artist.filter('artistReleaseFilter', function(){
  return function(items, filter) {
    var filtered = [];
    var specificItem={};
    if(!filter) {
      // initially don't filter
      return items;
    }
      for (i in items) {
        var item = items[i];
        if(item.data['release.artist']){
            if(item.data['release.artist'].value[0].artistlink.value.document.uid == filter){
              filtered.push(item);
            }
      }
    }
    return filtered;
  }
})
