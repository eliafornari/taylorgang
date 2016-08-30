
var Home = angular.module('myApp');


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

//selecting a release
$rootScope.thisRelease=function(uid){
    $scope.thisIndex = angular.element(document.getElementById(uid)).scope();
    var polishedIndex;
    for (i in $scope.thisIndex){
     polishedIndex = $scope.thisIndex['$index'];
    }
    $scope.selectedIndex=polishedIndex;
    $rootScope.mainRelease = $rootScope.Release[polishedIndex];
    setTimeout(function(){
        anchorSmoothScroll.scrollTo(uid);
    }, 600);
}


//going to the detail of a release
$rootScope.releaseDetail=function(){
  var uid = $routeParams.name;
    for (i in $rootScope.Release){
      if ($rootScope.Release[i].uid === $routeParams.name){
          $rootScope.mainRelease = $rootScope.Release[i];
      }
    }
}


//DETAIL CHECK
$scope.$on("$routeChangeSuccess", function(){
  if ($location.path() == '/release/'+$routeParams.name){
    $rootScope.getEverything('release', 'my.release.date desc');

    $scope.$watch('Release', function(){
      if($rootScope.Release){
        setTimeout(function(){
          $rootScope.releaseDetail();
          $scope.$apply();
          console.log("coming");
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
}



$scope.goToHash = function(){
  if ($location.path() == "/" || $location.path() == "/home/"+$routeParams.name || $location.path() == "/"+$routeParams.name){
  var thisHash = $location.path();
  thisHash = thisHash.substring(1, thisHash.length);
  if (thisHash){
    $rootScope.getEverything('release', 'my.release.date desc');

      setTimeout(function(){
          $rootScope.thisRelease(thisHash);
          $scope.$apply();
      }, 1000);
    }// if
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
$scope.totalShown = 10;
$rootScope.pagingHome = function(){
  $scope.page = $scope.page +1;
  $scope.totalShown = $scope.page * 10;
  if($scope.page <= $rootScope.totalReleasePages){
    $rootScope.getContentType('release', 'my.release.date desc', $scope.page);
  }else{
    return false
  }
}

});//controller


//youtube id transformed to an embed url
Home.filter('youtube', function ($sce) {
  return function(url) {
    var riskyVideo = "https://www.youtube.com/embed/"+url+"?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque";
    var thisTrusted= $sce.trustAsResourceUrl(riskyVideo);
    return thisTrusted;
  };
})

Home.filter('trustUrl', function ($sce) {
  return function(url) {
    var trusted = $sce.trustAsResourceUrl(url);
    return trusted;
  };
})


Home.filter('isArtGroup', function(){
  return function(items, filter) {
    var filtered = [];
    var specificItem={};
    if(!filter) {
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
