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
    .factory('instaFactory', function($rootScope, $http) {/* stuff here */

      return {
                pullimages: function(userId, loops) {

                  $rootScope.instaGlobal = [];
                  $rootScope.instaTotal =[];
                  $rootScope.instapics = [];
                  $rootScope.instapics1= [];
                  $rootScope.urlFound = [];
                  $rootScope.totalDisplayed;

                        // var p1 = new Promise(function(resolve, reject) {
                                //..............................................................................loading new pictures
                                $rootScope.noMore = false;
                                $rootScope.globalLoadMore = function(i){
                                    if ($rootScope.totalDisplayed > 0){

                                    }else {
                                      //the controller
                                      $rootScope.totalDisplayed = i;
                                    }

                                    $rootScope.loadMore = function () {
                                      $rootScope.totalDisplayed += i;
                                    };

                                }

                                //.......different loaded pictures for every device
                                  if ($rootScope.isDevice){
                                    $rootScope.globalLoadMore(14);
                                  } else if (!$rootScope.isDevice) {
                                    $rootScope.globalLoadMore(30);
                                  }


                                $rootScope.hideLoadMore = true;
                                setTimeout(function(){
                                  $rootScope.hideLoadMore = false;
                                }, 2000);


                                // $rootScope.filterRemovesLoadMore = function(){
                                //   $rootScope.hideLoadMore = true;
                                // }
                                //
                                // $rootScope.filterAllLoadMore = function(){
                                //   $rootScope.hideLoadMore = false;
                                // }



                              // ACCESS TOKEN =    235523787.f8f64ba.2c7aa7c5b3d64499aab9b53573f0be89

                          var n=0;
                          var maxID;
                          var theData;

                          console.log("userId: "+userId);





                          $rootScope.instaAccessToken = "20694160.2e1aeb5.45751ad675a143b083a008ed7b9775da";

                          var endpoint = "https://api.instagram.com/v1/users/"+"20694160"+"/media/recent?access_token="+$rootScope.instaAccessToken+"&callback=JSON_CALLBACK";

                          return $http({url: endpoint, method: 'JSONP', cache: true, isArray: true}).success(function(response){
                                $rootScope.instaTotal = response.data;
                                theData = response.data;
                                console.log("theData");
                                console.log(response);
                                // maxID = response.pagination.next_max_id;

                                // while (n <= loops) {
                                // n++;
                                // var thisEndpoint = "https://api.instagram.com/v1/users/"+userId+"/media/recent?access_token="+$rootScope.instaAccessToken+"&max_id=" + maxID + "&callback=JSON_CALLBACK";
                                //
                                //         // $http({url: thisEndpoint, method: 'JSONP', cache: true, isArray: true}).success(function(response1){
                                //         //
                                //         //       $rootScope.instapics1 = response1.data;
                                //         //       theData = theData.concat(response1.data);
                                //         //       $rootScope.instaTotal = $rootScope.instaTotal.concat(response1.data);
                                //         //       maxID = ""
                                //         //       maxID = response.pagination.next_max_id;
                                //         //       console.log(response);
                                //         //       console.log(maxID);
                                //         //
                                //         //       //secondm is loaded so the load more can now be shown
                                //         //       $rootScope.hideLoadMore = false;
                                //         //     });
                                //
                                //       // if (n==8){
                                //       //   //  $rootScope.instaTotal;
                                //       //   console.log(n);
                                //       //
                                //       //   console.log(theData);
                                //       //    resolve(theData);
                                //       // }
                                //
                                // }




                            }).then(function(response) {

                              var thisData = theData
                              // if (typeof response.data === 'object') {
                                      return thisData;
                              //     } else {
                              //         // invalid response
                              //         console.log('rejected');
                              //         return $q.reject(response.data);
                              //     }
                              //
                              // }, function(response) {
                              //     // something went wrong
                              //     return $q.reject(response.data);
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





            }

    }

    })

// 5. define another module component
    .directive('directiveName', function() {/* stuff here */


    })
;// and so on
