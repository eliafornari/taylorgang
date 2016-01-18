

/* Services */
var Service = angular.module('myApp.Services', ['ngResource']);



//
Service.factory('artistService', function($resource, $routeParams, $q, $cacheFactory){
//
// // var canceler = $q.defer();

return $resource('/data/artist/:artist.json', {artist: '@artist'}, {get:{method:'GET', isArray:false}})

// return $resource('/data/:category/:name.json',{},{get:{method:'GET'}})
  // canceler.resolve();  // Aborts the $http request if it isn't finished.

});





Service.factory('getService', function($http, $q, $timeout){

    return {
              get: function(url) {


              // var dfd = $q.defer();
              // $timeout(function(){

                  // the $http API is based on the deferred/promise APIs exposed by the $q service
                  // so it returns a promise for us by default
                  return $http.get('/data/'+url+'.json')
                      .then(function(response) {


                          if (typeof response.data === 'object') {
                              return response.data;
                          } else {
                              // invalid response
                              console.log('rejected');
                              return $q.reject(response.data);
                          }

                          // dfd.resolve(response);

                      }, function(response) {
                          // something went wrong
                          return $q.reject(response.data);
                      });



                    // },2000);
                    // return dfd.promise;



              }
          };

    // return $resource('/data/'+url+'.json',{},{get:{method:'GET'}})


});




Service.factory('homeService', function($http, $q){

    return {
              get: function() {
                  // the $http API is based on the deferred/promise APIs exposed by the $q service
                  // so it returns a promise for us by default
                  return $http.get('/data/home.json')
                      .then(function(response) {



                          if (typeof response.data === 'object') {
                              return response.data;
                          } else {
                              // invalid response
                              console.log('rejected');
                              return $q.reject(response.data);
                          }

                      }, function(response) {
                          // something went wrong
                          return $q.reject(response.data);
                      });
              }
          };


});







//.................................................google SEO


Service.service('PageTitle', function() {
      var title = 'Angel Sanchez';
      return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
      };
    });



Service.service('MetaInformation', function() {
      var metaDescription = '';
      var metaKeywords = '';
      return {
        metaDescription: function() { return metaDescription; },
        metaKeywords: function() { return metaKeywords; },
        reset: function() {
          metaDescription = '';
          metaKeywords = '';
        },
        setMetaDescription: function(newMetaDescription) {
          metaDescription = newMetaDescription;
        },
        appendMetaKeywords: function(newKeywords) {
          for (var key in newKeywords) {
            if (metaKeywords === '') {
              metaKeywords += newKeywords[key].name;
            } else {
              metaKeywords += ', ' + newKeywords[key].name;
            }
          }
        }
      };
    });

'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    'myApp.Routes',
    'myApp.Services'
]);

App.controller("appCtrl", ['$http','$scope','$templateCache','$location','$rootScope','$window','getService','$q', function($http, $scope, $templateCache, $location, $rootScope,$window, getService, $q){


$rootScope.general, $rootScope.pageLoading;
$rootScope.pageLoading = true;

  // This service's function returns a promise, but we'll deal with that shortly

  getService.get('general')
  // then() called when son gets back
  .then(function(data) {

      $rootScope.general = data;

  }, function(error) {
      // promise rejected, could log the error with: console.log('error', error);

      alert("an error occurred please reload the page.");

  }).then(function(){

    // setTimeout(function(){
    //   $rootScope.viewLoaded = true;
    //   $rootScope.pageLoading = false;
    //   $scope.$apply();
    // }, 2000);

    // $scope.$apply();

  });



//API KEY youtube
// AIzaSyC_ArqRandYQu5VgJiL9flmr27ApQU5ZqA




//ELIA
// YouTube User ID: 7JKIgvB-X3BggJkxVlOXjQ
// YouTube Channel ID: UC7JKIgvB-X3BggJkxVlOXjQ

// var channelName = 'taylorgangent'
// // UC7JKIgvB-X3BggJkxVlOXjQ
//
  // $.get(
  //   "https://www.googleapis.com/youtube/v3/channels",{
  //     part: 'id',
  //     forUsername: 'chriscarter1218',
  //     key: 'AIzaSyC_ArqRandYQu5VgJiL9flmr27ApQU5ZqA'
  //   },
  //     function(data){
  //       // console.log(data);
  //       $.each(data.items, function(i, item){
  //         console.log(item);
  //
  //         // var pid = item.contentDetails.relatedPlaylists.uploads;
  //         // getVids(pid);
  //       })
  //     }
  // );
//
//
// function getVids(pid){
//   $.get(
//     "https://www.googleapis.com/youtube/v3/playlistItems",{
//       part: 'snippet',
//       maxResults: 10,
//       playlistId: pid,
//       key: 'AIzaSyC_ArqRandYQu5VgJiL9flmr27ApQU5ZqA'
//     },
//       function(data){
//         var output;
//         // console.log(data);
//         $.each(data.items, function(i, item){
//           console.log(item);
//           var videoTitle = item.snippet.title;
//           output = videoTitle;
//           console.log(output);
//         })
//       }
//   );
//
// }



      // .then(function(response) {
      //
      //     console.log(response);
      //     // if (typeof response.data === 'object') {
      //     //     return response.data;
      //     // } else {
      //     //     // invalid response
      //     //     console.log('rejected');
      //     //     return $q.reject(response.data);
      //     // }
      //
      //     // dfd.resolve(response);
      //
      // }, function(response) {
      //     // something went wrong
      //     return $q.reject(response.data);
      // });


// https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCVp3nfGRxmMadNDuVbJSk8A&maxResults=20&key={YOUR_API_KEY}


  // $.get(
  //   "https://www.googleapis.com/youtube/v3/playlists",{
  //     part: 'snippet,contentDetails',
  //     maxResults: 20,
  //     channelId: 'UC2rdCWnU8fmFxdgeYXkbbIw',
  //     key: 'AIzaSyC_ArqRandYQu5VgJiL9flmr27ApQU5ZqA'
  //   },
  //     function(data){
  //       var output;
  //       // console.log(data);
  //       $.each(data.items, function(i, item){
  //         var videoTitle = item.snippet.title;
  //         output = videoTitle;
  //       })
  //     }
  // );





//removing POP in the splash page
$rootScope.hidePop = true;
$scope.$on('$routeChangeSuccess', function(){
  if($location.path() == '/'){
    $rootScope.hidePop = true;
  }else{
    $rootScope.hidePop = false;
  }
});





}])

.directive('googleAnalytics', function(){
    return{
        restrict: 'A',
        link: function(){

        }
    }
});

/*
  Configure routes used with ngRoute. We chose not to use $locationProvider.html5Mode(true);
  because using HTML5 pushstate requires that server routes are setup to mirror the routes
  in this file. Since this isn't a node course we're going to skip it. For all intensive
  purposes, html5 mode and url hash mode perform the same when within an angular app.
*/
angular.module('myApp.Routes', ['ngRoute', 'ngAnimate', 'ngResource'])

.config(['$routeProvider', '$locationProvider' , function($routeProvider, $locationProvider) {


  // use the HTML5 History API
  $locationProvider.html5Mode(true);

  $routeProvider
  // $locationChangeStart

  .when('/taylorgang', {
    templateUrl: 'taylor/taylor.html',
    controller: 'taylorCtrl'
  })


  .when('/shop', {
    templateUrl: 'shop/shop.html',
    controller: 'shopCtrl'
  })

  .when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'contactCtrl'
  })

    .when('/:artist', {
      templateUrl: 'artist/artist.html',
      controller: 'artistCtrl'
    })





    /*............................. Take-all routing ........................*/


    .when('/', {
      // redirectTo: 'matthew30matthew30matthew'
      templateUrl: 'splash/splash.html',
      controller: 'splashCtrl'
      // resolve: {
      //        function($q, $timeout) {
      //           var deferred = $q.defer();
      //           $timeout(function(){
      //               return deferred.resolve();
      //           }, 200);
      //           return deferred.promise;
      //       }
      //   }

    })


    // put your least specific route at the bottom
    .otherwise({redirectTo: '/'})






}])

// .run(function () {
//   $rootScope.tag = document.createElement('script');
//   $rootScope.tag.src = "http://www.youtube.com/iframe_api";
//   $rootScope.firstScriptTag = document.getElementsByTagName('script')[0];
//   $rootScope.firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// })


.controller('routeController', function($scope, $location, $rootScope, $routeParams, $timeout){

  $rootScope.location = $location.path();


  $rootScope.$on('$routeChangeStart', function() {
    $rootScope.location = $location.path();
    $rootScope.hash = $location.hash();
    $rootScope.artist = $routeParams.artist;

  });//routeChangeStart









  $scope.navShown = false;

  $rootScope.showNav = function(){
    $scope.navShown = !$scope.navShown;
  }




  $rootScope.closeNav = function(){
    $scope.navShown = false;
  }











//..............................................................................mobile


//....this is the function that checks the header of the browser and sees what device it is

$rootScope.checkDevice = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return ($rootScope.checkDevice.Android() || $rootScope.checkDevice.BlackBerry() || $rootScope.checkDevice.iOS() || $rootScope.checkDevice.Opera() || $rootScope.checkDevice.Windows());
      }
  };

//........checks the width
  $scope.mobileQuery=window.matchMedia( "(max-width: 767px)" );
  $rootScope.isMobile=$scope.mobileQuery.matches;


//.........returning true if device
  if ($scope.checkDevice.any()){
    $rootScope.isDevice= true;

  }else{
      $rootScope.isDevice=false;
  }

  if (($rootScope.isDevice==true)&&($scope.isMobile==true)){
    $rootScope.isMobileDevice= true;
  }else{
      $rootScope.isMobileDevice=false;
  }




    if ($rootScope.isDevice){

        $rootScope.mobileLocation = function(url){
          $location.path(url).search();
        }

        $rootScope.mobileExternalLocation = function(url){
          $window.open(url, '_blank');
        }


    } else if (!$rootScope.isDevice){


        $rootScope.mobileLocation = function(url){
          return false;
        }

        $rootScope.mobileExternalLocation = function(url){
          return false;
        }
    }








})//......end of the route controller


.directive('pageLoadingSpinner', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'A',
    // templateUrl: 'components/loader.html',
    replace: true,
    link: function(scope, elem, attrs) {

// $rootScope.pageLoading = true;
//
//       $rootScope.$on('$routeChangeStart', function() {
//
//           $rootScope.pageLoading = true;
//           scope.logoHide = true;
//
//       });
//
//
//       $rootScope.$on('$routeChangeSuccess', function() {
//
//         // // $timeout(function () {
//         //   scope.logoHide = false;
//         //   $rootScope.pageLoading = false;
//         // // }, 1000);
//       });

    }
  };
});

angular.module('myApp')

.controller('navCtrl',['$scope','$location','$rootScope','getService','$sce','$routeParams', function($scope, $location, $rootScope, getService, $sce, $routeParams) {








}])

.directive('navDirective', function() {
	return {
		restrict: 'E',
    replace: true,
		templateUrl: 'nav/nav.html'
	}
});

angular.module('myApp')

.controller('artistCtrl',['$scope','$location','$rootScope','getService','$sce','$routeParams','artistService', function($scope, $location, $rootScope, getService, $sce, $routeParams, artistService) {

$scope.artist = $routeParams.artist;
$rootScope.artist_data;
$rootScope.channel_data = [];
$scope.main_video, $scope.main_title;

$rootScope.pageLoading = true;





artistService.get({artist: $routeParams.artist}, function(data){

  $rootScope.artist_data = data;

}).$promise.then(function (data) {


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

                    // setTimeout(function(){
                      $rootScope.viewLoaded = true;
                      $rootScope.pageLoading = false;
                      $scope.$apply();
                    // }, 1500);







                    // for (i in $rootScope.channel_data){
                    //
                    //
                    //   var html = $rootScope.channel_data[i].snippet.title
                    //
                    //   console.log(html);
                    //
                    //
                    //    var newHtml='';
                    //
                    //    for (var n=0;n<html.length;n++) {
                    //        newHtml=newHtml+html[n];
                    //        if ((n+1)%15==0) {newHtml=newHtml+"\n";}
                    //    }
                    //
                    //    $rootScope.channel_data[i].snippet.title = newHtml;
                    //
                    //    $scope.$apply();
                    //
                    //      console.log(newHtml);
                    // }

                  }
              );






});


$scope.thisVideo = function(id, index){

  $scope.baseUrl = 'https://www.youtube.com/embed/'+id+'?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
  $scope.main_video = $sce.trustAsResourceUrl($scope.baseUrl);
  $scope.main_title = $rootScope.channel_data[index].title;

}









}]);


angular.module('myApp')

.controller('taylorgangCtrl',['$scope','$location','$rootScope','getService','$sce','$routeParams', function($scope, $location, $rootScope, getService, $sce, $routeParams) {

$rootScope.pageLoading = true;

  // setTimeout(function(){
    $rootScope.viewLoaded = true;
    $rootScope.pageLoading = false;
    $scope.$apply();
  // }, 1500);

}]);

angular.module('myApp')

.controller('contactCtrl',['$scope','$location','$rootScope','getService','$sce','$routeParams', function($scope, $location, $rootScope, getService, $sce, $routeParams) {

  $rootScope.pageLoading = true;

  setTimeout(function(){
    $rootScope.viewLoaded = true;
    $rootScope.pageLoading = false;
    $scope.$apply();
  }, 500);



    //setting an animation class for this specific page
    $scope.pageClass = 'page-contact';



    $scope.success = false;
    $scope.error = false;


    // create a blank object to hold our form information
    // $scope will allow this to pass between controller and view
  $scope.contactMobileOutsideLink = function(){
    $window.open('http://www.taylorgng.com/', '_blank');
  }


  $scope.formData = {};


    // process the form
    $scope.processForm = function() {

      // $scope.contactForm.$invalid = true;
      $scope.formData.mandrill_subject = $scope.formData.subject.toUpperCase() + " REQUEST FROM TAYLORGANG.COM"



       var mandrill = {
            "key": "kgS1hoQnJBhbLYF0v9jYXQ",
            "message": {
                "html": $scope.formData.body,
                "text": $scope.formData.body,
                "subject": $scope.formData.mandrill_subject,
                "from_email": $scope.formData.email,
                "from_name": $scope.formData.name,
                "to": [
                    {
                        "email": "contact@taylorgang.com",
                        "name": "TAYLORGANG.COM",
                        "type": "to"
                    }
                ],
                "headers": {
                    "Reply-To": $scope.formData.email
                }

            }
        }




      $http({
        method  : 'POST',
        dataType: 'JSON',
        url     : 'https://mandrillapp.com/api/1.0/messages/send.json',
        data    : mandrill  // pass in data as strings
       })


      .success(function (data) {

          	$scope.success = true;
          	$scope.formdata = {};
            $scope.hideContact = true;
            // $scope.formData.name ={};
            // $scope.formData.email ={};
            // $scope.formData.subject ={};
            // $scope.formData.body ={};

      })
      .error(function (data) {
        	$scope.error = true;
          $scope.hideContact = true;
      });
    };


      // jQuery(".form-control-dropdown").select2({
      //   minimumResultsForSearch: Infinity,
      //   placeholder: "SUBJECT"
      // });
      $rootScope.pageLoading = false;






  //....mobile
  $scope.contactMobileOutsideBackLink = function(){

    $window.location.reload();
  }






}]);

angular.module('myApp')

.controller('shopCtrl',['$scope','$location','$rootScope','getService','$sce','$routeParams', function($scope, $location, $rootScope, getService, $sce, $routeParams) {

  $rootScope.pageLoading = false;

    // setTimeout(function(){
      $rootScope.viewLoaded = true;
      $rootScope.pageLoading = false;
      $scope.$apply();
    // }, 1500);


}]);

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
