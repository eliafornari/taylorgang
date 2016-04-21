var Tour = angular.module('myApp');

Tour.controller('tourCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, getService){


  $rootScope.pageLoading = true;
$rootScope.tour=[];
  setTimeout(function(){
    $rootScope.viewLoaded = true;
    $rootScope.pageLoading = false;
    $scope.$apply();
  }, 500);




$rootScope.bandsintownJSONP = function(artist){
  var url =''
  var url = 'http://api.bandsintown.com/artists/'+artist+'/events.json?api_version=2.0&app_id=TAYLORGANG&callback=JSON_CALLBACK';
    $http.jsonp(url).
        success(function(data, status, headers, config) {


          $rootScope.tour = $rootScope.tour.concat(data);
          console.log($rootScope.tour);

            //what do I do here?
        }).
        error(function(data, status, headers, config) {
            $scope.error = true;
        });

}


for (i in $rootScope.Artist){
  console.log($rootScope.Artist[i].data['artist.name'].value[0].text);
  $rootScope.bandsintownJSONP($rootScope.Artist[i].data['artist.name'].value[0].text);
}

// getService.get('http://api.bandsintown.com/artists/Skrillex.json?api_version=2.0&app_id=YOUR_APP_ID')
// .then(function(data) {
// console.log(data);
//
//   $scope.$broadcast("generalReady");
//
// }, function(error) {
//     // promise rejected, could log the error with: console.log('error', error);
//
// });
//
//


});
