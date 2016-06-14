
var Home = angular.module('myApp');

Home.filter('youtubeEmbed', function ($sce) {
    return function(url) {
      if (url){
        var riskyVideo = "https://www.youtube.com/embed/"+url+"?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque";
        return $sce.trustAsResourceUrl(riskyVideo);
        $scope.$apply();
      }
    };
  })

Home.controller('homeCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, $document, anchorSmoothScroll){

$rootScope.firstLoading = false;

$rootScope.meta= {
  "title":"taylorgang | home",
  "url":"",
  "description": "home"
}







$scope.windowWidth= window.innerWidth;

  $scope.$watch(function(){
     $scope.windowWidth = window.innerWidth;
  }, function(value) {
  });



$scope.selectedIndex =0;
$scope.moveBox=3;
$scope.mainReleaseYoutube="";
$rootScope.mainRelease={};

$rootScope.thisRelease=function(uid){

    console.log(uid);

    $scope.thisIndex = angular.element(document.getElementById(uid)).scope();
    var polishedIndex;
    for (i in $scope.thisIndex){
     polishedIndex = $scope.thisIndex['$index'];
    }

    $scope.selectedIndex=polishedIndex;
    $rootScope.mainRelease = $rootScope.Release[polishedIndex];

    console.log($rootScope.mainRelease);


    setTimeout(function(){

      // if ($location.path() == '/' || $location.path()=='home/'+$routeParams.name || $location.path() =='/'+$routeParams.name ) {
        anchorSmoothScroll.scrollTo(uid);
      // }

    }, 900);



}






$rootScope.releaseDetail=function(){
  var uid = $routeParams.name;

    for (i in $rootScope.Release){

      if ($rootScope.Release[i].uid === $routeParams.name){


          $rootScope.mainRelease = $rootScope.Release[i];
          console.log($rootScope.mainRelease.uid);

      }
    }

}







//DETAIL CHECK
$scope.$on("$routeChangeSuccess", function(){
  if ($location.path() == '/release/'+$routeParams.name){

    $scope.$watch('Release', function(){
      if($rootScope.Release){
        console.log("releaseDone for real");
        console.log($rootScope.Release);
        setTimeout(function(){
          $rootScope.releaseDetail();
          $scope.$apply();
        }, 0);
      }else{
        console.log("release gone");
      }
    });
  }
})








$scope.selectedFilter = '';
$scope.setFilter = function(group, index) {
    $scope.selectedFilter = group;

    jQuery('.home-filters-predefined-li-a').removeClass('filterClicked');
    jQuery('#filter-'+index).addClass('filterClicked');

    jQuery('#filter-clear').removeClass('filterClicked');

    // if(index=='clear'){
    //   jQuery('#filter-clear').addClass('filterClicked');
    // }
}















$scope.goToHash = function(){

  if ($location.path() == "/" || $location.path() == "/home/"+$routeParams.name || $location.path() == "/"+$routeParams.name){

  $scope.$watch('releaseDone', function(){
    console.log("hash?");
    setTimeout(function(){
      var thisHash = $location.path();
      thisHash = thisHash.substring(1, thisHash.length);
      console.log(thisHash);
      if (thisHash){
        $rootScope.thisRelease(thisHash);
        $scope.$apply();
      }
    }, 900);
  })
  }

}

if ($location.path() == "/" || $location.path() == "/home/"+$routeParams.name || $location.path() == "/"+$routeParams.name){


  $scope.goToHash();


}



$scope.page = 1;


$scope.showHomeLinks=false;
$scope.mobileLinks = function(){
  $scope.showHomeLinks = !$scope.showHomeLinks;
}

$scope.totalShown = [1,2,3,4,5,6,7,8,9];

$rootScope.pagingHome = function(){
  $scope.page = $scope.page +1;

  if($scope.page <= $rootScope.totalReleasePages){
    $rootScope.getContentType('release', 'my.release.date desc', $scope.page);
  }else{
    return false
  }

  var last = $scope.totalShown[$scope.totalShown.length - 1];
  for(var i = 1; i <= 9; i++) {
    $scope.totalShown.push(last + i);
  }
}



});//controller


// Home.filter('startsWithLetter', function () {
//   return function (items, click, input) {
//     var filtered = [];
//     // var letterMatch = new RegExp(letter, 'i');
//
//
//
//     for (i in items) {
//       var item = items[i];
//
//
//       // if (item.uid == click ){
//       //   filtered.push(item);
//       //
//       //   this.specificItem = item;
//       //
//       //   // data['artistLink'].value.document.uid
//       // }
//
//       // if(item.data['release.artistlink']){
//       //         console.log(item.data['release.artistlink'].value.document.uid);
//       //
//       //         if (this.specificItem.uid != item.uid){
//       //
//       //           if(item.data['release.artistlink'].value.document.uid == 'wizkhalifa'){
//       //             filtered.push(item);
//       //           }
//       //
//       //         }
//       //
//       //
//       // }
//
//
//
//       // if (item.data['artistLink'].value.document.uid && (item.data['artistLink'].value.document.uid == 'wizkhalifa')){
//       //   filtered.push(item);
//       //   console.log(item.data['artistLink'].value.document.uid);
//       //
//       // }
//       // if (letterMatch.test(item.name.substring(0, 1))) {
//       //   filtered.push(item);
//       // }
//     }
//     return filtered;
//   };
// });


Home.filter('isArtGroup', function(){
  return function(items, filter) {
    var filtered = [];
    var specificItem={};

    if(!filter) {
      // initially don't filter
      return items;
    }


        for (i in items) {
          var item = items[i];

          if (item.uid == filter){
            filtered.push(item);
            specificItem = item;
          }

          if((item.data['release.artistlink']) && (specificItem)){

                if (specificItem.uid != item.uid){
                  if(item.data['release.artistlink'].value.document.uid == filter){
                    filtered.push(item);
                  }
                }


          }else if(!specificItem){
            filtered.push(item);
          }

        }
        return filtered;
  }
})
