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

    setTimeout(function(){
      $rootScope.viewLoaded = true;
      $rootScope.pageLoading = false;
      $scope.$apply();
    }, 2000);

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
