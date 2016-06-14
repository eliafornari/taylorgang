// 1. define the module and the other module dependencies (if any)
angular.module('eliasInstagramModule', [])

// 2. set a constant
    .constant('MODULE_VERSION', '0.0.2')

// 3. maybe set some defaults
    .value('defaults', {
        foo: 'bar'
    })

    .filter('trustUrl', function ($sce) {
      return function(url) {
        if (url){
          return $sce.trustAsResourceUrl(url);
        }
      };
    })

// 4. define a module component
    .factory('instaFactory', function($rootScope, $http, $q) {/* stuff here */

      return {
                pullimages: function(userId, loops) {

                  $rootScope.instaGlobal = [];
                  $rootScope.instaTotal =[];
                  $rootScope.instapics = [];
                  $rootScope.instapics1= [];
                  $rootScope.urlFound = [];
                  $rootScope.totalDisplayed;
                  $rootScope.loadMoreImage="";
                  $rootScope.loadMoreNumber;
                  var deferred;


                                //..............................................................................loading new pictures
                                $rootScope.noMore = false;
                                $rootScope.globalLoadMore = function(i){
                                  $rootScope.loadMoreNumber = i;
                                    if ($rootScope.totalDisplayed > 0){

                                    }else {
                                      //the controller
                                      $rootScope.totalDisplayed = i;
                                      setTimeout(function(){
                                        $rootScope.loadMoreImage = $rootScope.instaTotal[$rootScope.totalDisplayed].images.standard_resolution.url;
                                      }, 1000);
                                    }
                                }





                                $rootScope.loadMore = function () {
                                  $rootScope.totalDisplayed += $rootScope.loadMoreNumber;
                                  $rootScope.loadMoreImage = $rootScope.instaTotal[$rootScope.totalDisplayed].images.standard_resolution.url;

                                  if ($rootScope.totalDisplayed >= ((loops)*20)){
                                    $rootScope.filterRemovesLoadMore();
                                  }
                                };







                                //.......different loaded pictures for every device
                                  if ($rootScope.isDevice){
                                    $rootScope.globalLoadMore(14);
                                  } else if (!$rootScope.isDevice) {
                                    $rootScope.globalLoadMore(20);
                                  }



                                $rootScope.hideLoadMore = true;
                                setTimeout(function(){
                                  $rootScope.hideLoadMore = false;
                                }, 2000);


                                $rootScope.filterRemovesLoadMore = function(){
                                  $rootScope.hideLoadMore = true;
                                }

                                $rootScope.filterAllLoadMore = function(){
                                  $rootScope.hideLoadMore = false;
                                }



                              // ACCESS TOKEN = 20694160.2e1aeb5.45751ad675a143b083a008ed7b9775da
                              // NEW ACCESS TOKEN = 676636769.2afa5bd.28c09a19bfb44d8f961987433f81d2f8

                          var n=0;
                          var maxID;
                          var theData;





                          $rootScope.instaAccessToken = "676636769.2afa5bd.28c09a19bfb44d8f961987433f81d2f8";

                          var endpoint = "https://api.instagram.com/v1/users/"+userId+"/media/recent?access_token="+$rootScope.instaAccessToken+"&callback=JSON_CALLBACK";

                          return $http({url: endpoint, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                            // deferred = $q.defer();
                                $rootScope.instaTotal = response.data;
                                theData = response.data;
                                console.log(response);
                                return theData;
                                // maxID = response.pagination.next_max_id;

                                // while (n <= loops) {
                                // n++;

                                // var thisEndpoint = "https://api.instagram.com/v1/users/"+userId+"/media/recent?access_token="+$rootScope.instaAccessToken+"&max_id=" + maxID + "&callback=JSON_CALLBACK";
                                //         $http({url: thisEndpoint, method: 'JSONP', cache: true, isArray: true}).success(function(response1){
                                //
                                //               $rootScope.instapics1 = response1.data;
                                //               theData = theData.concat(response1.data);
                                //               $rootScope.instaTotal = $rootScope.instaTotal.concat(response1.data);
                                //               maxID = response.pagination.next_max_id;
                                //
                                //
                                //
                                //               //secondm is loaded so the load more can now be shown
                                //               $rootScope.hideLoadMore = false;
                                //             });
                                //
                                //       if (n==loops){
                                //         //  $rootScope.instaTotal;
                                //
                                //         deferred.resolve('Hello, ' + name + '!');
                                //         // return $rootScope.instaTotal;
                                //         //  resolve(theData);
                                //       }
                                //
                                // }




                            }).then(function(response) {

                                var thisData = theData
                                return thisData;

                              });






                              $rootScope.journalMobileLocation = function(url){
                                $location.path(url).search();
                              }

                              $rootScope.journalMobileOutsideViewOnInstagram = function(){
                                $window.open($rootScope.instaTotal[$rootScope.realNumber].link, '_blank');
                              }

                              $rootScope.journalMobileOutsideReadFullStory = function(){
                                $window.open($rootScope.urlFound[$rootScope.realNumber][0], '_blank');
                              }





            }//pullimages



      }//return

    })

// 5. define another module component
    .directive('directiveName', function() {/* stuff here */


    });// and so on
