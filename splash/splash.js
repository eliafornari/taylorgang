angular.module('myApp')

.controller('splashCtrl',['$scope','$location','$rootScope','getService','$sce','$routeParams', function($scope, $location, $rootScope, getService, $sce, $routeParams) {


$rootScope.pageLoading = true;

  setTimeout(function(){
    $rootScope.viewLoaded = true;
    $rootScope.pageLoading = false;
    $scope.$apply();
  }, 1000);

// var video_splash = document.getElementById('splash-video');
// video_splash.volume = 0;
// video_splash.play();


}])



.directive('youtube', function($window) {
  return {
    restrict: "E",
    scope: {
      height:   "@",
      width:    "@",
      videoid:  "@"
    },

    template: '<div class="splash-video"></div>',

    link: function(scope, element) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;

      $window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player(element.children()[0], {

          playerVars: {
            autoplay: 1,
            html5: 1,
            theme: "light",
            modesbranding: 1,
            color: "white",
            iv_load_policy: 3,
            showinfo: 1,
            controls: 1,
          },

          height: scope.height,
          width: scope.width,
          videoId: scope.videoid,
          events: {
              'onReady': onPlayerReady
          }
        });



      };



      function onPlayerReady(event) {
          player.mute();
          player.playVideo();
      }





    },
  }
});
