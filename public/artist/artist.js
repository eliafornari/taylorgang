

var Artist = angular.module('myApp');


Artist.controller('artistCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http){


  $rootScope.mainArtist = [];

  $rootScope.thisArtist = function(thisArtist, thisNumber){

    for (a in $rootScope.Artist){
      if($rootScope.Artist[a].uid==thisArtist){
        $rootScope.mainArtist = $rootScope.Artist[a];
        console.log($rootScope.mainArtist.uid);
      }
    }

  }























  //BANDSINTOWN


if($rootScope.isMobile){
  // $scope.showTour = function(){
    new BIT.Widget({
      "artist":"HighlySuspect",
      "div_id":"tour-dates",
      "text_color": "#FFFFFF",
      "share_links":false,
      "bg_color": "#111111",
      "force_narrow_layout": false,

      "separator_color": "#000000",
      "link_color": "#FFFFFF"
      // "force_narrow_layout":"true"
    }).insert_events();
  // }

}else if(!$rootScope.isMobile){
  // $scope.showTour = function(){
    new BIT.Widget({
      "artist":"HighlySuspect",
      "div_id":"tour-dates",
      "text_color": "#FFFFFF",
      "share_links":false,
      "bg_color": "#111111",
      // "force_narrow_layout": false,
      "separator_color": "#000000",
      "link_color": "#FFFFFF"
      // "force_narrow_layout":"true"
    }).insert_events();
  // }
}




});
