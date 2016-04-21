
var Home = angular.module('myApp');

Home.filter('youtubeEmbed', function ($sce) {
    return function(url) {
      if (url){
        var riskyVideo = "https://www.youtube.com/embed/"+url+"?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque";
        console.log(riskyVideo);
        return $sce.trustAsResourceUrl(riskyVideo);
        $scope.$apply();
      }
    };
  })

Home.controller('homeCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce){

$scope.mainRelease;
$rootScope.Filter, $rootScope.Release, $rootScope.Artist;



//..........................................................GET


  $rootScope.firstLoading = false;

$rootScope.getContentType = function(type, orderField){

      Prismic.Api('https://taylorgang.cdn.prismic.io/api', function (err, Api) {
          Api.form('everything')
              .ref(Api.master())

              .query(Prismic.Predicates.at("document.type", type))
              .orderings('['+orderField+']')
              .submit(function (err, response) {

                  var Data = response;

                  setTimeout(function(){

                    $rootScope.pageLoading = false;
                    $scope.$apply();
                  }, 1000);


                  if (type =='artist'){
                    $rootScope.Artist = response.results;
                  }else if(type=='release'){
                    $rootScope.Release = response.results;
                    $scope.$broadcast('releaseDone');
                  }else if(type =='filter'){
                    $rootScope.Filter = response.results;
                  }

                  // The documents object contains a Response object with all documents of type "product".
                  var page = response.page; // The current page number, the first one being 1
                  var results = response.results; // An array containing the results of the current page;
                  console.log(results);
                  // you may need to retrieve more pages to get all results
                  var prev_page = response.prev_page; // the URL of the previous page (may be null)
                  var next_page = response.next_page; // the URL of the next page (may be null)
                  var results_per_page = response.results_per_page; // max number of results per page
                  var results_size = response.results_size; // the size of the current page
                  var total_pages = response.total_pages; // the number of pages
                  var total_results_size = response.total_results_size; // the total size of results across all pages
                    return results;
              });
        });
};

if ($rootScope.firstLoading == false){
  $rootScope.getContentType('filter', 'my.filter.index');
  $rootScope.getContentType('release', 'my.release.date desc');
  $rootScope.getContentType('artist', 'my.artist.index');

}















$scope.windowWidth= window.innerWidth;

  $scope.$watch(function(){
     $scope.windowWidth = window.innerWidth;
  }, function(value) {
     console.log(value);
  });



$scope.selectedIndex =0;
$scope.moveBox=3;
$scope.mainReleaseYoutube="";
$rootScope.mainRelease={};

$rootScope.thisRelease=function(uid){
    var index = this.$index;

    $scope.selectedIndex=index;
    // $rootScope.mainRelease = $rootScope.Release[index];

}






$rootScope.releaseDetail=function(){
  var uid = $routeParams.name;
    console.log("uid: "+uid)

  if($location.path() == '/release/'+$routeParams.name){
    for (i in $rootScope.Release){
      if ($rootScope.Release[i].uid == uid){
        $rootScope.mainRelease = $rootScope.Release[i];
          console.log($rootScope.mainRelease);
          console.log("uid: "+uid);

      }
    }
  }
}







$scope.$on('$routeChangeSuccess', function(next, current) {

  $scope.$on('releaseDone', function(){
       $rootScope.releaseDetail();
  })


});







$scope.selectedFilter = '';
$scope.setFilter = function(group) {
    $scope.selectedFilter = group;
}




});//controller


// Home.filter('startsWithLetter', function () {
//   return function (items, click, input) {
//     var filtered = [];
//     // var letterMatch = new RegExp(letter, 'i');
//
//
//     console.log('click: '+click);
//     console.log('input: '+input);
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


          if (item.uid == filter ){

            filtered.push(item);
            specificItem = item;

          }

          if((item.data['release.artistlink']) && (specificItem)){


                if (specificItem.uid != item.uid){
                  if(item.data['release.artistlink'].value.document.uid == filter){
                    console.log(item.data['release.artistlink'].value.document.uid);
                    filtered.push(item);
                  }
                }


          }else if(!specificItem){
            console.log(item.data['release.artistlink'].value.document.uid);
            filtered.push(item);
          }

        }
        return filtered;
  }
})
