var Tour = angular.module('myApp');

Tour.controller('tourCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, getService){


  $rootScope.pageLoading = false;
    setTimeout(function(){
      $rootScope.viewLoaded = true;
      $rootScope.pageLoading = false;
      $scope.$apply();
    }, 500);

    $rootScope.tour=[];
    $rootScope.meta= {
      "title":"taylorgang | tour",
      "url": "tour",
      "description": "tour"
    }


$rootScope.bandsintownJSONP = function(artist){
  var url =''
  var url = 'http://api.bandsintown.com/artists/'+artist+'/events.json?api_version=2.0&app_id=TAYLORGANG&callback=JSON_CALLBACK';
    $http.jsonp(url).
        success(function(data, status, headers, config) {

          var thisData = [];
          var thisData = data;


          $rootScope.tour = $rootScope.tour.concat(data);

            //what do I do here?
        }).
        error(function(data, status, headers, config) {
            $scope.error = true;
        });

}


$scope.$watch('artistReady' ,function(){
  setTimeout(function(){
      $scope.tourLoop();
  }, 900);
});

$scope.tourLoop = function(){
  for (i in $rootScope.Artist){
    $rootScope.bandsintownJSONP($rootScope.Artist[i].data['artist.name'].value[0].text);
  }
}



});
