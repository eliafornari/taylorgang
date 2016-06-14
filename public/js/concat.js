(function(){var requirejs,require,define,__inflate;(function(e){function a(e,t){var n=t&&t.split("/"),i=r.map,s=i&&i["*"]||{},o,u,a,f,l,c,h;if(e&&e.charAt(0)==="."&&t){n=n.slice(0,n.length-1),e=n.concat(e.split("/"));for(l=0;h=e[l];l++)if(h===".")e.splice(l,1),l-=1;else if(h===".."){if(l===1&&(e[2]===".."||e[0]===".."))return!0;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}if((n||s)&&i){o=e.split("/");for(l=o.length;l>0;l-=1){u=o.slice(0,l).join("/");if(n)for(c=n.length;c>0;c-=1){a=i[n.slice(0,c).join("/")];if(a){a=a[u];if(a){f=a;break}}}f=f||s[u];if(f){o.splice(0,l,f),e=o.join("/");break}}}return e}function f(t,n){return function(){return u.apply(e,s.call(arguments,0).concat([t,n]))}}function l(e){return function(t){return a(t,e)}}function c(e){return function(n){t[e]=n}}function h(r){if(n.hasOwnProperty(r)){var s=n[r];delete n[r],i[r]=!0,o.apply(e,s)}if(!t.hasOwnProperty(r))throw new Error("No "+r);return t[r]}function p(e,t){var n,r,i=e.indexOf("!");return i!==-1?(n=a(e.slice(0,i),t),e=e.slice(i+1),r=h(n),r&&r.normalize?e=r.normalize(e,l(t)):e=a(e,t)):e=a(e,t),{f:n?n+"!"+e:e,n:e,p:r}}function d(e){return function(){return r&&r.config&&r.config[e]||{}}}var t={},n={},r={},i={},s=[].slice,o,u;o=function(r,s,o,u){var a=[],l,v,m,g,y,b;u=u||r,typeof o=="string"&&(o=__inflate(r,o));if(typeof o=="function"){s=!s.length&&o.length?["require","exports","module"]:s;for(b=0;b<s.length;b++){y=p(s[b],u),m=y.f;if(m==="require")a[b]=f(r);else if(m==="exports")a[b]=t[r]={},l=!0;else if(m==="module")v=a[b]={id:r,uri:"",exports:t[r],config:d(r)};else if(t.hasOwnProperty(m)||n.hasOwnProperty(m))a[b]=h(m);else if(y.p)y.p.load(y.n,f(u,!0),c(m),{}),a[b]=t[m];else if(!i[m])throw new Error(r+" missing "+m)}g=o.apply(t[r],a);if(r)if(v&&v.exports!==e&&v.exports!==t[r])t[r]=v.exports;else if(g!==e||!l)t[r]=g}else r&&(t[r]=o)},requirejs=require=u=function(t,n,i,s){return typeof t=="string"?h(p(t,n).f):(t.splice||(r=t,n.splice?(t=n,n=i,i=null):t=e),n=n||function(){},s?o(e,t,n,i):setTimeout(function(){o(e,t,n,i)},15),u)},u.config=function(e){return r=e,u},define=function(e,t,r){t.splice||(r=t,t=[]),n[e]=[e,t,r]},define.amd={jQuery:!0}})(),__inflate=function(name,src){var r;return eval(["r = function(a,b,c){","\n};\n//@ sourceURL="+name+"\n"].join(src)),r},define("lib/api/events",["require","exports","module"],function(e,t,n){t.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},t.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}}),define("lib/api/getters",["require","exports","module"],function(e,t,n){n.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}}),define("lib/api/setters",["require","exports","module"],function(e,t,n){n.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}),define("lib/api/api",["require","exports","module","lib/api/events","lib/api/getters","lib/api/setters"],function(e,t,n){function m(e){return!!(e===""||e&&e.charCodeAt&&e.substr)}function g(e){return!!(e&&e.constructor&&e.call&&e.apply)}function y(e){return!!e&&e.nodeType===1&&e.nodeName.toUpperCase()==="IFRAME"}function b(e){var t=!1,n;for(n in i)if(i.hasOwnProperty(n)&&i[n]===e){t=!0;break}return t}function w(e){var t,n,r;for(t=0,n=f.length;t<n;t++){r=e(f[t]);if(r===!1)break}}function E(e){var t="",n,r,i;e.substr(0,2)==="//"&&(e=window.location.protocol+e),i=e.split("/");for(n=0,r=i.length;n<r;n++){if(!(n<3))break;t+=i[n],n<2&&(t+="/")}return t}function S(e){return e.contentWindow?e.contentWindow:e.contentDocument&&"parentWindow"in e.contentDocument?e.contentDocument.parentWindow:null}function x(e){var t=[],n;for(n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t}function T(e,t,n){n.callbacks[e]=n.callbacks[e]||[],n.callbacks[e].push(t)}function N(e,t){var n=!0,r;return t.callbacks[e]=[],w(function(t){r=t.callbacks[e]||[];if(r.length)return n=!1,!1}),n}function C(e,t,n){var r=S(n),i,s;if(!r.postMessage)return!1;i=n.getAttribute("src").split("?")[0],s=JSON.stringify({method:e,value:t}),i.substr(0,2)==="//"&&(i=window.location.protocol+i),i=i.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),r.postMessage(s,i)}function k(e){var t;return w(function(n){if(n.instance===e)return t=n,!1}),t}function L(e){var t;return w(function(n){if(S(n.element)===e)return t=n,!1}),t}function A(e,t){return function(n){var r=g(n),i=k(this),s=!r&&t?n:null,o=r&&!t?n:null;return o&&T(e,o,i),C(e,s,i.element),this}}function O(e,t,n){var r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r],e[s]=A(s,n)}function M(e,t,n){return e+"?url="+t+"&"+_(n)}function _(e){var t,n,r=[];for(t in e)e.hasOwnProperty(t)&&(n=e[t],r.push(t+"="+(t==="start_track"?parseInt(n,10):n?"true":"false")));return r.join("&")}function D(e,t,n){var r=e.callbacks[t]||[],i,s;for(i=0,s=r.length;i<s;i++)r[i].apply(e.instance,n);if(b(t)||t===o.READY)e.callbacks[t]=[]}function P(e){var t,n,r,i,s;try{n=JSON.parse(e.data)}catch(u){return!1}t=L(e.source),r=n.method,i=n.value;if(t&&H(e.origin)!==H(t.domain))return!1;if(!t)return r===o.READY&&a.push(e.source),!1;r===o.READY&&(t.isReady=!0,D(t,l),N(l,t)),r===o.PLAY&&!t.playEventFired&&(t.playEventFired=!0),r===o.PLAY_PROGRESS&&!t.playEventFired&&(t.playEventFired=!0,D(t,o.PLAY,[i])),s=[],i!==undefined&&s.push(i),D(t,r,s)}function H(e){return e.replace(h,"")}var r=e("lib/api/events"),i=e("lib/api/getters"),s=e("lib/api/setters"),o=r.api,u=r.bridge,a=[],f=[],l="__LATE_BINDING__",c="http://wt.soundcloud.dev:9200/",h=/^http(?:s?)/,p,d,v;window.addEventListener?window.addEventListener("message",P,!1):window.attachEvent("onmessage",P),n.exports=v=function(e,t,n){m(e)&&(e=document.getElementById(e));if(!y(e))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");t&&(n=n||{},e.src=M(c,t,n));var r=L(S(e)),i,s;return r&&r.instance?r.instance:(i=a.indexOf(S(e))>-1,s=new p(e),f.push(new d(s,e,i)),s)},v.Events=o,window.SC=window.SC||{},window.SC.Widget=v,d=function(e,t,n){this.instance=e,this.element=t,this.domain=E(t.getAttribute("src")),this.isReady=!!n,this.callbacks={}},p=function(){},p.prototype={constructor:p,load:function(e,t){if(!e)return;t=t||{};var n=this,r=k(this),i=r.element,s=i.src,a=s.substr(0,s.indexOf("?"));r.isReady=!1,r.playEventFired=!1,i.onload=function(){n.bind(o.READY,function(){var e,n=r.callbacks;for(e in n)n.hasOwnProperty(e)&&e!==o.READY&&C(u.ADD_LISTENER,e,r.element);t.callback&&t.callback()})},i.src=M(a,e,t)},bind:function(e,t){var n=this,r=k(this);return r&&r.element&&(e===o.READY&&r.isReady?setTimeout(t,1):r.isReady?(T(e,t,r),C(u.ADD_LISTENER,e,r.element)):T(l,function(){n.bind(e,t)},r)),this},unbind:function(e){var t=k(this),n;t&&t.element&&(n=N(e,t),e!==o.READY&&n&&C(u.REMOVE_LISTENER,e,t.element))}},O(p.prototype,x(i)),O(p.prototype,x(s),!0)}),window.SC=window.SC||{},window.SC.Widget=require("lib/api/api")})()

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

/**
 * angular-mailchimp
 * http://github.com/keithio/angular-mailchimp
 * License: MIT
 */

'use strict';

angular.module('mailchimp', ['ng', 'ngResource', 'ngSanitize'])

  /**
   * Form controller for a new Mailchimp subscription.
   */
  .controller('MailchimpSubscriptionCtrl', ['$log', '$resource', '$scope', '$rootScope',
              function ($log, $resource, $scope, $rootScope) {
    // Handle clicks on the form submission.
    $scope.addSubscription = function (mailchimp) {
      var actions,
          MailChimpSubscription,
          params = {},
          url;

      // Create a resource for interacting with the MailChimp API
      url = '//' + mailchimp.username + '.' + mailchimp.dc +
            '.list-manage.com/subscribe/post-json';

      var fields = Object.keys(mailchimp);

      for(var i = 0; i < fields.length; i++) {
        params[fields[i]] = mailchimp[fields[i]];
      }

      params.c = 'JSON_CALLBACK';

      actions = {
        'save': {
          method: 'jsonp'
        }
      };
      MailChimpSubscription = $resource(url, params, actions);

      // Send subscriber data to MailChimp
      MailChimpSubscription.save(
        // Successfully sent data to MailChimp.
        function (response) {
          // Define message containers.
          mailchimp.errorMessage = '';
          mailchimp.successMessage = '';

          // Store the result from MailChimp
          mailchimp.result = response.result;

          // Mailchimp returned an error.
          if (response.result === 'error') {
            if (response.msg) {
              // Remove error numbers, if any.
              var errorMessageParts = response.msg.split(' - ');
              if (errorMessageParts.length > 1)
                errorMessageParts.shift(); // Remove the error number
              mailchimp.errorMessage = errorMessageParts.join(' ');
            } else {
              mailchimp.errorMessage = 'Sorry! An unknown error occured.';
            }
          }
          // MailChimp returns a success.
          else if (response.result === 'success') {
            mailchimp.successMessage = response.msg;
          }

          //Broadcast the result for global msgs
          $rootScope.$broadcast('mailchimp-response', response.result, response.msg);
        },

        // Error sending data to MailChimp
        function (error) {
          $log.error('MailChimp Error: %o', error);
        }
      );
    };
  }]);
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'ngSanitize',
  'myApp.routes',
  'myapp.Service',
  'eliasInstagramModule',
  'mailchimp',
  'infinite-scroll'
])

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
angular.module('myApp.routes', ['ngRoute', 'ngAnimate', 'ngResource'])

.run(['$anchorScroll', '$route', '$rootScope', '$location', '$routeParams','$templateCache', function($anchorScroll, $route, $rootScope, $location, $routeParams, $templateCache) {

$rootScope.pageLoading = true;

  $rootScope.showTime=false;
  $rootScope.time="";
  var date = new Date();
  var n = date.toTimeString();
  $rootScope.time = n;





//a change of path should not reload the page


    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
            });
        }
        else if (reload === true){

          var currentPageTemplate = $route.current.templateUrl;
            $templateCache.remove(currentPageTemplate);

        var un = $rootScope.$on('$locationChangeSuccess', function () {
              $route.current = 'worldoftheblonds/'+$routeParams.category+'/'+$routeParams.event;
              un();
              $route.reload();
          });
        }
        return original.apply($location, [path]);
    };


  }])



  .filter('trustUrl', function ($sce) {
      return function(url) {
        // if (url){
          var trusted = $sce.trustAsResourceUrl(url);
          return trusted;
        // }
      };
    })


// .filter('date', )




.config(['$routeProvider', '$locationProvider' ,'$sceProvider', function($routeProvider, $locationProvider, $sceProvider) {

$sceProvider.enabled(false);

  // use the HTML5 History API
  $locationProvider.html5Mode(true);

  $routeProvider


  // $locationChangeStart


    // .when('/home/:id', {
    //   templateUrl: 'home/home.html',
    //   controller: 'homeCtrl',
    //   })



    .when('/artists/:id', {
      templateUrl: 'artist/artist-detail.html',
      controller: 'artistCtrl'
      })

    .when('/artists', {
      templateUrl: 'artist/artist.html',
      controller: 'artistCtrl'
      })

    .when('/producers/:producer', {
      templateUrl: 'producer/producer-detail.html',
      controller: 'producerCtrl'
      })

    .when('/producers', {
      templateUrl: 'producer/producer.html',
      controller: 'producerCtrl'
      })

    .when('/tour', {
      templateUrl: 'tour/tour.html',
      controller: 'tourCtrl'
      })

    .when('/gang', {
      templateUrl: 'about/about.html',
      controller: 'aboutCtrl'
      })

      .when('/subscribe', {
        templateUrl: 'subscribe/subscribe.html',
        controller: 'subscribeCtrl'
      })

    .when('/privacy', {
      templateUrl: 'privacy/privacy.html',
      controller: 'privacyCtrl'
    })

    .when('/release/:name', {
      templateUrl: 'home/release.html',
      controller: 'homeCtrl'
    })

    .when('/:name', {
      templateUrl: 'home/home.html',
      controller: 'homeCtrl',
      })




    /*............................. Take-all routing ........................*/


    .when('/', {
      // redirectTo: 'matthew30matthew30matthew'
      templateUrl: 'home/home.html',
      controller: 'homeCtrl',
      resolve: {
             function($q, $timeout) {
                var deferred = $q.defer();
                $timeout(function(){
                    return deferred.resolve();
                }, 200);
                return deferred.promise;
            }
        }

    })


    // put your least specific route at the bottom
    .otherwise({redirectTo: '/'})






}])

.controller('routeController', function($scope, $location, $rootScope, $routeParams, $timeout, $interval, $window){

$rootScope.location = $location.path();
$rootScope.firstLoading = true;






$rootScope.Filter,
$rootScope.Release =[], $rootScope.Artist, $rootScope.Producer;



    //..........................................................GET

    $rootScope.getContentType = function(type, orderField, thisPage){

          Prismic.Api('https://taylorgang.cdn.prismic.io/api', function (err, Api) {
              Api.form('everything')
                  .ref(Api.master())
                  .query(Prismic.Predicates.at("document.type", type))
                  .orderings('['+orderField+']')
                  .pageSize(9)
                  .page(thisPage)
                  .submit(function (err, response) {

                      var Data = response;

                      setTimeout(function(){

                        $rootScope.pageLoading = false;
                        $scope.$apply();
                      }, 1200);

                      if(type =='release'){
                        $rootScope.Release = $rootScope.Release.concat(response.results);
                        $scope.$broadcast('releaseDone');
                        $rootScope.totalReleasePages = response.total_pages; // the number of pages

                      }
                      else if (type =='artist'){
                        $rootScope.Artist = response.results;
                        $rootScope.$broadcast('artistReady');
                      }else if(type=='producer'){
                        $rootScope.Producer = response.results;
                        $scope.$broadcast('producerReady');
                      }else if(type =='filter'){
                        $rootScope.Filter = response.results;
                      }

                      // The documents object contains a Response object with all documents of type "product".
                      var page = response.page; // The current page number, the first one being 1
                      var results = response.results; // An array containing the results of the current page;
                      // you may need to retrieve more pages to get all results
                      var prev_page = response.prev_page; // the URL of the previous page (may be null)
                      var next_page = response.next_page; // the URL of the next page (may be null)
                      var results_per_page = response.results_per_page; // max number of results per page
                      var results_size = response.results_size; // the size of the current page

                      var total_results_size = response.total_results_size; // the total size of results across all pages
                      return results;
                  });
            });
    };

      $rootScope.getContentType('release', 'my.release.date desc');
      $rootScope.getContentType('filter', 'my.filter.index');
      $rootScope.getContentType('artist', 'my.artist.index');
      $rootScope.getContentType('producer', 'my.producer.index');













    $rootScope.windowHeight = $window.innerHeight;

    jQuery($window).resize(function(){
      $rootScope.windowHeight = $window.innerHeight;
      // windowHeight = angular.element($window).height(); // Window Height
      $rootScope.checkSize();
      $scope.landscapeFunction();

        $scope.$apply();
    });

    //..............................................................................mobile


    //....this is the function that checks the header of the browser and sees what device it is

    $rootScope.isMobile, $rootScope.isDevice, $rootScope.isMobileDevice;
    $rootScope.checkSize = function(){


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

      }//checkSize


    $rootScope.checkSize();




     $rootScope.landscapeView = false;


     //function removing website if landscape

      $scope.landscapeFunction = function(){

        if ($rootScope.isMobile==true){
            if(window.innerHeight < window.innerWidth){
              $rootScope.landscapeView = true;
              $rootScope.pageLoading = true;
              jQuery(".landscape-view-wrapper").css({
                "width":"100vw",
                "height": "100vh",
                "display": "block"
            });

            }else{
              $rootScope.landscapeView = false;
              $rootScope.pageLoading = false;

            }
        }

      }

    $scope.landscapeFunction();



})//......end of the route controller

'use strict';

/* Services */
var Service = angular.module('myapp.Service', ['ngResource']);

Service.factory('resourceService', function($resource, $routeParams, $q, $cacheFactory){

// var canceler = $q.defer();

return $resource('/data/:collection/:season.json',{},{get:{method:'GET', isArray: true}})
  // canceler.resolve();  // Aborts the $http request if it isn't finished.

});
// , params:{collection:$routeParams.collection , season:$routeParams.season}

Service.factory("CacheService", function($cacheFactory) {

   return { data:{ scrollY: 0 } };

});


Service.factory('detailService', function($resource, $routeParams, $q){


return $resource('/data/:collection/:season.json',{},{get:{method:'GET'}})

});

Service.factory('getService', function($http, $q, $timeout){

    return {
              get: function(url) {


              // var dfd = $q.defer();
              // $timeout(function(){

                  // the $http API is based on the deferred/promise APIs exposed by the $q service
                  // so it returns a promise for us by default
                  return $http.get(url)
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




    Service.service('anchorSmoothScroll', function(){

         this.scrollTo = function(eID) {

             // This scrolling function
             // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

             var startY = currentYPosition();
             var stopY = elmYPosition(eID);
             var distance = stopY > startY ? stopY - startY : startY - stopY;
             if (distance < 100) {
                 scrollTo(0, stopY); return;
             }
             var speed = Math.round(distance / 100);
             if (speed >= 20) speed = 20;
             var step = Math.round(distance / 25);
             var leapY = stopY > startY ? startY + step : startY - step;
             var timer = 0;
             if (stopY > startY) {
                 for ( var i=startY; i<stopY; i+=step ) {
                     setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                     leapY += step; if (leapY > stopY) leapY = stopY; timer++;
                 } return;
             }
             for ( var i=startY; i>stopY; i-=step ) {
                 setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                 leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
             }

             function currentYPosition() {
                 // Firefox, Chrome, Opera, Safari
                 if (self.pageYOffset) return self.pageYOffset;
                 // Internet Explorer 6 - standards mode
                 if (document.documentElement && document.documentElement.scrollTop)
                     return document.documentElement.scrollTop;
                 // Internet Explorer 6, 7 and 8
                 if (document.body.scrollTop) return document.body.scrollTop;
                 return 0;
             }

             function elmYPosition(eID) {
                 var elm = document.getElementById(eID);
                 var y = elm.offsetTop;
                 var node = elm;
                 while (node.offsetParent && node.offsetParent != document.body) {
                     node = node.offsetParent;
                     y += node.offsetTop;
                 } return y;
             }

         };

     });

/* ng-infinite-scroll - v1.0.0 - 2013-02-23 */
var mod;

mod = angular.module('infinite-scroll', []);

mod.directive('infiniteScroll', [
  '$rootScope', '$window', '$timeout', function($rootScope, $window, $timeout) {
    return {
      link: function(scope, elem, attrs) {

        setTimeout(function(){

        var checkWhenEnabled, handler, scrollDistance, scrollEnabled;
        // window = angular.element($window);
        scrollDistance = 0;
        if (attrs.infiniteScrollDistance != null) {
          scope.$watch(attrs.infiniteScrollDistance, function(value) {
            return scrollDistance = parseInt(value, 10);
          });
        }
        scrollEnabled = true;
        checkWhenEnabled = false;
        if (attrs.infiniteScrollDisabled != null) {
          scope.$watch(attrs.infiniteScrollDisabled, function(value) {
            scrollEnabled = !value;
            if (scrollEnabled && checkWhenEnabled) {
              checkWhenEnabled = false;
              return handler();
            }
          });
        }
        handler = function() {


          var elementBottom, remaining, shouldScroll, windowBottom;
          windowBottom = $(window).height() + $(window).scrollTop();
          elementBottom = elem[0].offsetTop + elem[0].clientHeight;
          remaining = elementBottom - windowBottom;
          shouldScroll = remaining <= 0;
          // $(window).height() * scrollDistance;


          if (shouldScroll && scrollEnabled) {
            if ($rootScope.$$phase) {

              return scope.$eval(attrs.infiniteScroll);
            } else {
              return scope.$apply(attrs.infiniteScroll);
            }
          } else if (shouldScroll) {
            return checkWhenEnabled = true;
          }
        };
        $(window).bind('scroll.infiniteScroll', handler);

        scope.$on('$destroy', function() {
          return $(window).unbind('scroll.infiniteScroll', handler);
        });
        return $timeout((function() {
          if (attrs.infiniteScrollImmediateCheck) {
            if (scope.$eval(attrs.infiniteScrollImmediateCheck)) {
              return handler();
            }
          } else {
            return handler();
          }
        }), 0);
      }, 2600);
      }//link function

    };
  }
]);


angular.module('myApp')


.controller('navCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http){

$rootScope.isNavOpen = false;

  $scope.openNav = function(){
    $rootScope.isNavOpen = !$rootScope.isNavOpen;
  }

  $scope.closeNav = function(){
    $rootScope.isNavOpen = false;
  }




  $rootScope.navOpenArtist=function(){
    $rootScope.openArtists($rootScope.Artist[0].uid,0);
  }

  $rootScope.navOpenRelease=function(){
    $rootScope.openRelease($rootScope.Release[0].uid,0);
  }

  $rootScope.navOpenJournal=function(){
    $rootScope.openJournal($rootScope.Journal[0].uid,0);
  }



$rootScope.link = function(url, force){
  $location.path(url, force);
}

$rootScope.releaseLink = function(url, force){
  console.log('url: '+'release/'+url);
  $location.path('release/'+url, force);
}


})


.directive('logoDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/logo.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('logoBlackDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/logo-black.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('exDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/ex.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})


.directive('soundcloudIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/soundcloud-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})


.directive('itunesIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/itunes-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('spotifyIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/spotify-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('facebookIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/facebook-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('twitterIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/twitter-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})


.directive('instagramIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/instagram-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('tumblrIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/tumblr-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})


.directive('menuIconDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/icon/menu-icon.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})




.directive('navDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/nav.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
});


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



var Artist = angular.module('myApp');




Artist.controller('artistCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory, anchorSmoothScroll, $window){



  $rootScope.meta= {
    "title":"taylorgang | artists",
    "url": "artists",
    "description": "artists"
  }


//................................................................................................................................................//
//................................................................................................................................................//
//................................................................DETAIL..........................................................................//
//................................................................................................................................................//
//................................................................................................................................................//

$rootScope.artist_data;
$rootScope.channel_data = [];
$rootScope.main_video, $scope.main_title;
$rootScope.main_video_show =false;
$rootScope.baseUrl = '';
$rootScope.mainArtist;
// https://www.youtube.com/embed/8d0cm_hcQes
$rootScope.main_video = $rootScope.baseUrl;
$scope.artistInstagram=[];

$rootScope.thisArtist = function(thisArtist){
    for (a in $rootScope.Artist){

      if($rootScope.Artist[a].uid==thisArtist){
        $rootScope.mainArtist = $rootScope.Artist[a];
        $rootScope.bandsInTown($rootScope.Artist[a].data['artist.name'].value[0].text);
        $scope.getYoutubeChannel($rootScope.Artist[a].data['artist.youtubeChannelID'].value);
        $scope.getArtistReleases($rootScope.Artist[a].id, 1);

      }
    }
    // $scope.instagram_a();
};


$scope.getYoutubeChannel = function(channelid){

              $.get(
                "https://www.googleapis.com/youtube/v3/search",{
                  part: 'snippet',
                  maxResults: 50,
                  channelId: channelid,
                  key: 'AIzaSyC_ArqRandYQu5VgJiL9flmr27ApQU5ZqA'
                },
                  function(data){

                    $rootScope.channel_data = data.items;
                    // $.each(data.items, function(i, item){
                    //   // var videoTitle = item.snippet.title;
                    // })


                    $rootScope.baseUrl = 'https://www.youtube.com/embed/'+$rootScope.channel_data[0].id.videoId+'?rel=0&amp;&autoplay=0&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
                    $rootScope.main_video = $rootScope.baseUrl;
                    $rootScope.main_title = $rootScope.channel_data[0].title;

                    $rootScope.$apply();

                    setTimeout(function(){
                      $rootScope.viewLoaded = true;
                      $rootScope.pageLoading = false;
                      $rootScope.$apply();
                      $rootScope.main_video_show =true;
                    }, 2000);

                  });

}




$scope.thisVideo = function(id, index){

  $rootScope.baseUrl = 'https://www.youtube.com/embed/'+id+'?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
  $rootScope.main_video = $scope.baseUrl;
  $rootScope.main_title = $rootScope.channel_data[index].title;

}









  //BANDSINTOWN

$rootScope.bandsInTown = function(artistname){


        if($rootScope.isMobile){
          // $scope.showTour = function(){
            new BIT.Widget({
              "artist": artistname,
              "div_id":"tour-dates",
              "text_color": "#000000",
              "share_links":false,
              "bg_color": "#FFFFFF",
              "force_narrow_layout": false,
              "separator_color": "#FFFFFF",
              "link_color": "#000000"
              // "force_narrow_layout":"true"
            }).insert_events();
          // }

        }else if(!$rootScope.isMobile){
          // $scope.showTour = function(){
            new BIT.Widget({
              "artist": artistname,
              "div_id":"tour-dates",
              "text_color": "#000000",
              "share_links":false,
              "bg_color": "#FFFFFF",
              "separator_color": "#FFFFFF",
              "link_color": "#000000"
              // "force_narrow_layout":"true"
            }).insert_events();
          // }
        }
}//end of bandsintown








//DETAIL CHECK

if ($location.path() == '/artists/'+$routeParams.id){

var artistParam = $routeParams.id;

$rootScope.meta= {
  "title":"taylorgang | "+artistParam,
  "url": "artists/"+$routeParams.id,
  "description": "artists | "+$routeParams.id
}


  $rootScope.$watch('artistReady' ,function(){
    setTimeout(function(){
        $rootScope.thisArtist(artistParam);

    }, 900);
  });

}





// $scope.instagram_a = function(){
//   instaFactory.pullimages($rootScope.mainArtist.data['artist.instagramId'].value, 2).then( function(data) {
//         $scope.artistInstagram = $rootScope.instaTotal;
//       }, function(error) {
//     });
// }











//..................................................changing anchor link on click
$scope.gotoAnchor = function(x) {
  anchorSmoothScroll.scrollTo(x);
};


$rootScope.scroll;
$scope.hideBacktotop = true;
$scope.windowHeight = $window.innerHeight;

  angular.element($window).bind("scroll", function() {


      var scroll = this.pageYOffset;

      $rootScope.scroll = scroll;
      if(scroll<($scope.windowHeight*3)){
        $scope.hideBacktotop = true;
        // angular.element($window).unbind("scroll");
      }else if (scroll>=($scope.windowHeight*3)){
        $scope.hideBacktotop = false;

      }

      $scope.$apply();
  });









  $scope.showArtistLinks = false;

  $scope.a_mobileLinks = function(){
    $scope.showArtistLinks = !$scope.showArtistLinks
  }










  $scope.$on("$destroy", function() {
    $rootScope.artistRelease=[];
    $rootScope.totalArtistReleasePages=1;
  });


$rootScope.artistRelease;
$rootScope.totalArtistReleasePages;

$scope.getArtistReleases = function(id, thisPage){
  Prismic.Api('https://taylorgang.cdn.prismic.io/api', function (err, Api) {
      Api.form('everything')
          .ref(Api.master())
          .query(
            // Prismic.Predicates.at("document.type", "release"),
            Prismic.Predicates.at("my.release.artist.artistlink", id)
          )
          .pageSize(9)
          .page(thisPage)
          .orderings('[my.release.date]')
          .submit(function (err, response) {
              // The products are now ordered by price, highest first
              var results = response.results;

              setTimeout(function(){

                $rootScope.pageLoading = false;
                $scope.$apply();
              }, 600);


              if (thisPage >1 ) {
                $rootScope.artistRelease = $rootScope.artistRelease.concat(response.results);
                $scope.$broadcast('artistReleaseDone');
                $rootScope.totalArtistReleasePages = response.total_pages; // the number of pages
              }else{

                $rootScope.artistRelease= response.results;
                $scope.$broadcast('artistReleaseDone');
                $rootScope.totalArtistReleasePages = response.total_pages;

              }




          });
  });
}



$scope.page_a =1;

$scope.pagingArtist=function(){
  $scope.page_a = $scope.page_a +1;

  if($scope.page_a <= $rootScope.totalArtistReleasePages){
    $scope.getArtistReleases($rootScope.mainArtist.id, $scope.page_a);
  }else{
    return false
  }
}


});//end of the controller.... .... ...... ..... ....














Artist.filter('artistReleaseFilter', function(){
  return function(items, filter) {
    var filtered = [];
    var specificItem={};

    if(!filter) {
      // initially don't filter
      return items;
    }



        for (i in items) {
          var item = items[i];

          if(item.data['release.artist']){

              if(item.data['release.artist'].value[0].artistlink.value.document.uid == filter){
                filtered.push(item);
              }

        }
      }
        return filtered;
  }
})



var Producer = angular.module('myApp');

Producer.controller('producerCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory, anchorSmoothScroll, $window){



    $rootScope.meta= {
      "title":"taylorgang | producers",
      "url": "producers",
      "description": "producers"
    }




//................................................................................................................................................//
//................................................................................................................................................//
//................................................................DETAIL..........................................................................//
//................................................................................................................................................//
//................................................................................................................................................//

$rootScope.producer_data;
$rootScope.channel_data_p = [];
$rootScope.main_video_p, $scope.main_title_p;
$rootScope.main_video_show_p =false;
$rootScope.baseUrl = '';
$rootScope.mainProducer;
// https://www.youtube.com/embed/8d0cm_hcQes
$rootScope.main_video_p = $rootScope.baseUrl;
$scope.producerInstagram=[];

$rootScope.thisProducer = function(thisProducer){

    for (a in $rootScope.Producer){
      if($rootScope.Producer[a].uid==thisProducer){
        $rootScope.mainProducer = $rootScope.Producer[a];
        $rootScope.bandsInTown_p($rootScope.Producer[a].data['producer.name'].value[0].text);
        if($rootScope.Producer[a].data['producer.youtubeChannelID']){
          $scope.getYoutubeChannel_p($rootScope.Producer[a].data['producer.youtubeChannelID'].value);
        }
        $scope.getProducerReleases($rootScope.mainProducer.id , 1);
      }
    }
    // $scope.instagram_p();
};


$scope.getYoutubeChannel_p = function(channelid){

              $.get(
                "https://www.googleapis.com/youtube/v3/search",{
                  part: 'snippet',
                  maxResults: 50,
                  channelId: channelid,
                  key: 'AIzaSyC_ArqRandYQu5VgJiL9flmr27ApQU5ZqA'
                },
                  function(data){

                    $rootScope.channel_data_p = data.items;

                    $rootScope.baseUrl_p = 'https://www.youtube.com/embed/'+$rootScope.channel_data_p[0].id.videoId+'?rel=0&amp;&autoplay=0&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
                    $rootScope.main_video_p = $rootScope.baseUrl_p;
                    $rootScope.main_title_p = $rootScope.channel_data_p[0].title;

                    $rootScope.$apply();

                    setTimeout(function(){
                      $rootScope.viewLoaded = true;
                      $rootScope.pageLoading = false;
                      $rootScope.$apply();
                      $rootScope.main_video_show_p =true;
                    }, 2000);

                  });

}




$scope.thisVideo = function(id, index){

  $rootScope.baseUrl_p = 'https://www.youtube.com/embed/'+id+'?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
  $rootScope.main_video_p = $scope.baseUrl;
  $rootScope.main_title_p = $rootScope.channel_data_p[index].title;

}









  //BANDSINTOWN

$rootScope.bandsInTown_p = function(producername){


        if($rootScope.isMobile){
          // $scope.showTour = function(){
            new BIT.Widget({
              "producer": producername,
              "div_id":"tour-dates",
              "text_color": "#000000",
              "share_links":false,
              "bg_color": "#FFFFFF",
              "force_narrow_layout": false,

              "separator_color": "#FFFFFF",
              "link_color": "#000000"
              // "force_narrow_layout":"true"
            }).insert_events();
          // }

        }else if(!$rootScope.isMobile){
          // $scope.showTour = function(){
            new BIT.Widget({
              "producer": producername,
              "div_id":"tour-dates",
              "text_color": "#000000",
              "share_links":false,
              "bg_color": "#FFFFFF",
              // "force_narrow_layout": false,
              "separator_color": "#FFFFFF",
              "link_color": "#000000"
              // "force_narrow_layout":"true"
            }).insert_events();
          // }
        }
}//end of bandsintown






//DETAIL CHECK

if ($location.path() == '/producers/'+$routeParams.producer){

  var producerParam = $routeParams.producer;

  $rootScope.meta = {
    "title":"taylorgang | "+producerParam,
    "url": "producers/"+$routeParams.producer,
    "description": "producers | "+$routeParams.producer
  }



  $rootScope.$watch('producerReady' ,function(){
    setTimeout(function(){
      $rootScope.thisProducer(producerParam);


    }, 900);
  });

}
//
// $scope.instagram_p = function(){
//   instaFactory.pullimages($rootScope.mainProducer.data['producer.instagramId'].value, 2).then( function(data) {
//         $scope.producerInstagram = $rootScope.instaTotal;
//       }, function(error) {
//     });
// }
//
//
// //..............................................................................loading new pictures
// $rootScope.noMore_p = false;
// $rootScope.totalDisplayed_p,$rootScope.loadMoreNumber_p, $rootScope.loadMoreImage_p
// $rootScope.globalLoadMore_p = function(i){
//   $rootScope.loadMoreNumber_p = i;
//     if ($rootScope.totalDisplayed_p > 0){
//
//     }else {
//       //the controller
//       $rootScope.totalDisplayed_p= i;
//       setTimeout(function(){
//         $rootScope.loadMoreImage_p = $rootScope.instaTotal[$rootScope.totalDisplayed_p].images.standard_resolution.url;
//       }, 1000);
//     }
// }
//
//
//
//
//
// $rootScope.loadMore_p = function () {
//   $rootScope.totalDisplayed_p += $rootScope.loadMoreNumber_p;
//   $rootScope.loadMoreImage_p = $rootScope.instaTotal[$rootScope.totalDisplayed_p].images.standard_resolution.url;
//   if ($rootScope.totalDisplayed_p >= ((loops)*20)){
//     $rootScope.filterRemovesLoadMore();
//   }
// };
//
//
//
//
//
// //.......different loaded pictures for every device
//   if ($rootScope.isDevice){
//     $rootScope.globalLoadMore_p(14);
//   } else if (!$rootScope.isDevice) {
//     $rootScope.globalLoadMore_p(20);
//   }
//
//
//
// $rootScope.hideLoadMore_p = true;
// setTimeout(function(){
//   $rootScope.hideLoadMore_p = false;
// }, 2000);
//
//
// $rootScope.filterRemovesLoadMore_p = function(){
//   $rootScope.hideLoadMore_p = true;
// }
//
// $rootScope.filterAllLoadMore_p = function(){
//   $rootScope.hideLoadMore_p = false;
// }















//..................................................changing anchor link on click
$scope.gotoAnchor = function(x) {
  // call $anchorScroll()
  anchorSmoothScroll.scrollTo(x);
};


$rootScope.scroll;
$scope.hideBacktotop = true;
$scope.windowHeight = $window.innerHeight;

  angular.element($window).bind("scroll", function() {


      var scroll = this.pageYOffset;

      $rootScope.scroll = scroll;
      if(scroll<($scope.windowHeight*3)){
        $scope.hideBacktotop = true;
        // angular.element($window).unbind("scroll");
      }else if (scroll>=($scope.windowHeight*3)){
        $scope.hideBacktotop = false;

      }

      $scope.$apply();
  });



  $scope.showProducerLinks =false;

  $scope.p_mobileLinks = function(){
    $scope.showProducerLinks = !$scope.showProducerLinks
  }










  $scope.$on("$destroy", function() {
    $rootScope.producerRelease=[];
    $rootScope.totalProducerReleasePages=1;
  });




  $rootScope.producerRelease;
  $rootScope.totalProducerReleasePages;

  $scope.getProducerReleases = function(id, thisPage){
    Prismic.Api('https://taylorgang.cdn.prismic.io/api', function (err, Api) {
        Api.form('everything')
            .ref(Api.master())
            .query(
              // Prismic.Predicates.at("document.type", "release"),
              Prismic.Predicates.at("my.release.producer.producerlink", id)
            )
            .pageSize(9)
            .page(thisPage)
            .orderings('[my.release.date]')
            .submit(function (err, response) {
                // The products are now ordered by price, highest first
                var results = response.results;

                setTimeout(function(){

                  $rootScope.pageLoading = false;
                  $scope.$apply();
                }, 600);


                if (thisPage >1 ) {
                  $rootScope.producerRelease = $rootScope.producerRelease.concat(response.results);
                  $scope.$broadcast('artistReleaseDone');
                  $rootScope.totalProducerReleasePages = response.total_pages; // the number of pages
                }else{

                  $rootScope.artistRelease= response.results;
                  $scope.$broadcast('artistReleaseDone');
                  $rootScope.totalProducerReleasePages = response.total_pages;

                }




            });
    });
  };



  $scope.page_p =1;

  $scope.pagingProducer=function(){
    $scope.page_p = $scope.page_p +1;

    if($scope.page_p <= $rootScope.totalProducerReleasePages){
      $scope.getProducerReleases($rootScope.mainProducer.id, $scope.page_p);
    }else{
      return false
    }
  }









});//end of the controller.... .... ...... ..... ....










Producer.filter('producerReleaseFilter', function(){
  return function(items, filter) {
    var filtered = [];
    var specificItem={};

    if(!filter) {
      // initially don't filter
      return items;
    }



    console.log(filter);


        for (i in items) {
          var item = items[i];

          if(item.data['release.producer']){

              if(item.data['release.producer'].value[0].producerlink.value.document.uid == filter){
                filtered.push(item);
                console.log(item);
              }

        }
      }
        return filtered;
  }
})

var Subscribe = angular.module('myApp');

Subscribe.controller('subscribeCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http){
$rootScope.pageLoading = false;

$rootScope.meta= {
  "title":"taylorgang | subscribe",
  "url": "subscribe",
  "description": "subscribe"
}

  setTimeout(function(){
    $rootScope.viewLoaded = true;
    $rootScope.pageLoading = false;
    $scope.$apply();
  }, 500);




// username = taylorgangent
//
// dc = us3
//
// u = c61f8c03f7bf6006501203a45
//
// id = 3038d4cd68
//






  //
  //
  // <!-- Begin MailChimp Signup Form -->
  // <div id="mc_embed_signup">
  // <form action="//taylorgangent.us3.list-manage.com/subscribe/post?u=c61f8c03f7bf6006501203a45&amp;id=3038d4cd68" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
  //     <div id="mc_embed_signup_scroll">
  // 	<h2>Subscribe to our mailing list</h2>
  // <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
  // <div class="mc-field-group">
  // 	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
  // </label>
  // 	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
  // </div>
  // <div class="mc-field-group">
  // 	<label for="mce-FNAME">First Name </label>
  // 	<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
  // </div>
  // <div class="mc-field-group">
  // 	<label for="mce-LNAME">Last Name </label>
  // 	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
  // </div>
  // <div class="mc-field-group size1of2">
  // 	<label for="mce-LAST_ORDER-month">Last Order </label>
  // 	<div class="datefield">
  // 		<span class="subfield monthfield"><input class="datepart " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="LAST_ORDER[month]" id="mce-LAST_ORDER-month"></span> /
  // 		<span class="subfield dayfield"><input class="datepart " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="LAST_ORDER[day]" id="mce-LAST_ORDER-day"></span> /
  // 		<span class="subfield yearfield"><input class="datepart " type="text" pattern="[0-9]*" value="" placeholder="YYYY" size="4" maxlength="4" name="LAST_ORDER[year]" id="mce-LAST_ORDER-year"></span>
  //         <span class="small-meta nowrap">( mm / dd / yyyy )</span>
  // 	</div>
  // </div>
  // <div class="mc-field-group">
  // 	<label for="mce-COMPANY">Company </label>
  // 	<input type="text" value="" name="COMPANY" class="" id="mce-COMPANY">
  // </div>
  // <div class="mc-field-group size1of2">
  // 	<label for="mce-PHONE">Phone </label>
  // 	<input type="text" name="PHONE" class="" value="" id="mce-PHONE">
  // </div>
  // <div class="mc-address-group">
  // 	<div class="mc-field-group">
  // 	    <label for="mce-ADDRESS-addr1">Address </label>
  // 		<input type="text" value="" maxlength="70" name="ADDRESS[addr1]" id="mce-ADDRESS-addr1" class="">
  // 	</div>
  // 	<div class="mc-field-group">
  // 	    <label for="mce-ADDRESS-addr2">Address Line 2</label>
  // 		<input type="text" value="" maxlength="70" name="ADDRESS[addr2]" id="mce-ADDRESS-addr2">
  // 	</div>
  // 	<div class="mc-field-group size1of2">
  // 	    <label for="mce-ADDRESS-city">City</label>
  // 		<input type="text" value="" maxlength="40" name="ADDRESS[city]" id="mce-ADDRESS-city" class="">
  // 	</div>
  // 	<div class="mc-field-group size1of2">
  // 	    <label for="mce-ADDRESS-state">State/Province/Region</label>
  // 	<input type="text" value="" maxlength="20" name="ADDRESS[state]" id="mce-ADDRESS-state" class="">
  // 	</div>
  // 	<div class="mc-field-group size1of2">
  // 	    <label for="mce-ADDRESS-zip">Postal / Zip Code</label>
  // 		<input type="text" value="" maxlength="10" name="ADDRESS[zip]" id="mce-ADDRESS-zip" class="">
  // 	</div>
  // 	<div class="mc-field-group size1of2">
  // 	    <label for="mce-ADDRESS-country">Country</label>
  // 		<select name="ADDRESS[country]" id="mce-ADDRESS-country" class=""><option value="164" selected>USA</option><option value="286">Aaland Islands</option><option value="274">Afghanistan</option><option value="2">Albania</option><option value="3">Algeria</option><option value="178">American Samoa</option><option value="4">Andorra</option><option value="5">Angola</option><option value="176">Anguilla</option><option value="175">Antigua And Barbuda</option><option value="6">Argentina</option><option value="7">Armenia</option><option value="179">Aruba</option><option value="8">Australia</option><option value="9">Austria</option><option value="10">Azerbaijan</option><option value="11">Bahamas</option><option value="12">Bahrain</option><option value="13">Bangladesh</option><option value="14">Barbados</option><option value="15">Belarus</option><option value="16">Belgium</option><option value="17">Belize</option><option value="18">Benin</option><option value="19">Bermuda</option><option value="20">Bhutan</option><option value="21">Bolivia</option><option value="22">Bosnia and Herzegovina</option><option value="23">Botswana</option><option value="181">Bouvet Island</option><option value="24">Brazil</option><option value="180">Brunei Darussalam</option><option value="25">Bulgaria</option><option value="26">Burkina Faso</option><option value="27">Burundi</option><option value="28">Cambodia</option><option value="29">Cameroon</option><option value="30">Canada</option><option value="31">Cape Verde</option><option value="32">Cayman Islands</option><option value="33">Central African Republic</option><option value="34">Chad</option><option value="35">Chile</option><option value="36">China</option><option value="185">Christmas Island</option><option value="37">Colombia</option><option value="204">Comoros</option><option value="38">Congo</option><option value="183">Cook Islands</option><option value="268">Costa Rica</option><option value="275">Cote D'Ivoire</option><option value="40">Croatia</option><option value="276">Cuba</option><option value="298">Curacao</option><option value="41">Cyprus</option><option value="42">Czech Republic</option><option value="318">Democratic Republic of the Congo</option><option value="43">Denmark</option><option value="44">Djibouti</option><option value="186">Dominica</option><option value="289">Dominica</option><option value="187">Dominican Republic</option><option value="45">Ecuador</option><option value="46">Egypt</option><option value="47">El Salvador</option><option value="48">Equatorial Guinea</option><option value="49">Eritrea</option><option value="50">Estonia</option><option value="51">Ethiopia</option><option value="189">Falkland Islands</option><option value="191">Faroe Islands</option><option value="52">Fiji</option><option value="53">Finland</option><option value="54">France</option><option value="193">French Guiana</option><option value="277">French Polynesia</option><option value="56">Gabon</option><option value="57">Gambia</option><option value="58">Georgia</option><option value="59">Germany</option><option value="60">Ghana</option><option value="194">Gibraltar</option><option value="61">Greece</option><option value="195">Greenland</option><option value="192">Grenada</option><option value="196">Guadeloupe</option><option value="62">Guam</option><option value="198">Guatemala</option><option value="270">Guernsey</option><option value="63">Guinea</option><option value="65">Guyana</option><option value="200">Haiti</option><option value="66">Honduras</option><option value="67">Hong Kong</option><option value="68">Hungary</option><option value="69">Iceland</option><option value="70">India</option><option value="71">Indonesia</option><option value="278">Iran</option><option value="279">Iraq</option><option value="74">Ireland</option><option value="322">Isle of Man</option><option value="75">Israel</option><option value="76">Italy</option><option value="202">Jamaica</option><option value="78">Japan</option><option value="288">Jersey  (Channel Islands)</option><option value="79">Jordan</option><option value="80">Kazakhstan</option><option value="81">Kenya</option><option value="203">Kiribati</option><option value="82">Kuwait</option><option value="83">Kyrgyzstan</option><option value="84">Lao People's Democratic Republic</option><option value="85">Latvia</option><option value="86">Lebanon</option><option value="87">Lesotho</option><option value="88">Liberia</option><option value="281">Libya</option><option value="90">Liechtenstein</option><option value="91">Lithuania</option><option value="92">Luxembourg</option><option value="208">Macau</option><option value="93">Macedonia</option><option value="94">Madagascar</option><option value="95">Malawi</option><option value="96">Malaysia</option><option value="97">Maldives</option><option value="98">Mali</option><option value="99">Malta</option><option value="207">Marshall Islands</option><option value="210">Martinique</option><option value="100">Mauritania</option><option value="212">Mauritius</option><option value="241">Mayotte</option><option value="101">Mexico</option><option value="102">Moldova, Republic of</option><option value="103">Monaco</option><option value="104">Mongolia</option><option value="290">Montenegro</option><option value="294">Montserrat</option><option value="105">Morocco</option><option value="106">Mozambique</option><option value="242">Myanmar</option><option value="107">Namibia</option><option value="108">Nepal</option><option value="109">Netherlands</option><option value="110">Netherlands Antilles</option><option value="213">New Caledonia</option><option value="111">New Zealand</option><option value="112">Nicaragua</option><option value="113">Niger</option><option value="114">Nigeria</option><option value="217">Niue</option><option value="214">Norfolk Island</option><option value="272">North Korea</option><option value="116">Norway</option><option value="117">Oman</option><option value="118">Pakistan</option><option value="222">Palau</option><option value="282">Palestine</option><option value="119">Panama</option><option value="219">Papua New Guinea</option><option value="120">Paraguay</option><option value="121">Peru</option><option value="122">Philippines</option><option value="221">Pitcairn</option><option value="123">Poland</option><option value="124">Portugal</option><option value="253">Puerto Rico</option><option value="126">Qatar</option><option value="315">Republic of Kosovo</option><option value="127">Reunion</option><option value="128">Romania</option><option value="129">Russia</option><option value="130">Rwanda</option><option value="205">Saint Kitts and Nevis</option><option value="206">Saint Lucia</option><option value="237">Saint Vincent and the Grenadines</option><option value="132">Samoa (Independent)</option><option value="227">San Marino</option><option value="255">Sao Tome and Principe</option><option value="133">Saudi Arabia</option><option value="134">Senegal</option><option value="266">Serbia</option><option value="135">Seychelles</option><option value="136">Sierra Leone</option><option value="137">Singapore</option><option value="302">Sint Maarten</option><option value="138">Slovakia</option><option value="139">Slovenia</option><option value="223">Solomon Islands</option><option value="140">Somalia</option><option value="141">South Africa</option><option value="257">South Georgia and the South Sandwich Islands</option><option value="142">South Korea</option><option value="311">South Sudan</option><option value="143">Spain</option><option value="144">Sri Lanka</option><option value="293">Sudan</option><option value="146">Suriname</option><option value="225">Svalbard and Jan Mayen Islands</option><option value="147">Swaziland</option><option value="148">Sweden</option><option value="149">Switzerland</option><option value="285">Syria</option><option value="152">Taiwan</option><option value="260">Tajikistan</option><option value="153">Tanzania</option><option value="154">Thailand</option><option value="233">Timor-Leste</option><option value="155">Togo</option><option value="232">Tonga</option><option value="234">Trinidad and Tobago</option><option value="156">Tunisia</option><option value="157">Turkey</option><option value="158">Turkmenistan</option><option value="287">Turks &amp; Caicos Islands</option><option value="159">Uganda</option><option value="161">Ukraine</option><option value="162">United Arab Emirates</option><option value="262">United Kingdom</option><option value="163">Uruguay</option><option value="165">Uzbekistan</option><option value="239">Vanuatu</option><option value="166">Vatican City State (Holy See)</option><option value="167">Venezuela</option><option value="168">Vietnam</option><option value="169">Virgin Islands (British)</option><option value="238">Virgin Islands (U.S.)</option><option value="188">Western Sahara</option><option value="170">Yemen</option><option value="173">Zambia</option><option value="174">Zimbabwe</option></select>
  // 	</div>
  // </div>
  // <div class="mc-field-group">
  // 	<label for="mce-TAGS">Tags </label>
  // 	<input type="text" value="" name="TAGS" class="" id="mce-TAGS">
  // </div>
  // 	<div id="mce-responses" class="clear">
  // 		<div class="response" id="mce-error-response" style="display:none"></div>
  // 		<div class="response" id="mce-success-response" style="display:none"></div>
  // 	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
  //     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c61f8c03f7bf6006501203a45_3038d4cd68" tabindex="-1" value=""></div>
  //     <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
  //     </div>
  // </form>
  // </div>
  //
  // <!--End mc_embed_signup-->










});



var About = angular.module('myApp');


About.controller('aboutCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory){




  $rootScope.meta= {
    "title":"taylorgang | gang",
    "url": "gang",
    "description": "gang"
  }

  //................................................................................................................................................//
  //................................................................................................................................................//
  //................................................................DETAIL..........................................................................//
  //................................................................................................................................................//
  //................................................................................................................................................//

  $rootScope.about_data;
  $rootScope.about_playlist_data = [];
  $rootScope.about_main_video, $scope.about_main_title;
  $rootScope.about_main_video_show =false;
  $rootScope.about_baseUrl;
  // 'https://www.youtube.com/embed/8d0cm_hcQes'
  $rootScope.about_main_video;
  // = $scope.about_baseUrl;
  $scope.aboutInstagram=[];





  $scope.about_getYoutubePlaylist = function(playid){
// GET https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL9cwsTrgI6FFxBon4flET37aW2QJP7l9S&key={YOUR_API_KEY}
                $.get(
                  "https://www.googleapis.com/youtube/v3/playlistItems",{
                    part: 'snippet',
                    maxResults: 50,
                    playlistId: playid,
                    key: 'AIzaSyC_ArqRandYQu5VgJiL9flmr27ApQU5ZqA'
                  },
                    function(data){

                      $rootScope.about_playlist_data = data.items;
                      // console.log(data);
                      // $.each(data.items, function(i, item){
                      //   // var videoTitle = item.snippet.title;
                      // })


                      $rootScope.about_baseUrl = 'https://www.youtube.com/embed/'+$rootScope.about_playlist_data[0].snippet.resourceId.videoId+'?rel=0&amp;&autoplay=0&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
                      $rootScope.about_main_video = $scope.about_baseUrl;
                      $rootScope.about_main_title = $rootScope.about_playlist_data[0].title;

                      $rootScope.$apply();

                      setTimeout(function(){
                        $rootScope.viewLoaded = true;
                        $rootScope.pageLoading = false;
                        $rootScope.$apply();
                        $rootScope.about_main_video_show =true;
                      }, 2000);

                    });

  }




  $scope.thisVideo = function(id, index){

    $rootScope.baseUrl = 'https://www.youtube.com/embed/'+id+'?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
    $rootScope.main_video = $scope.baseUrl;
    $rootScope.main_title = $rootScope.about_playlist_data[index].title;

  }











  $scope.$on("$destroy", function() {
    $rootScope.gangRelease=[];
    $rootScope.totalGangReleasePages=1;
  });


  $rootScope.gangRelease;
  $rootScope.totalGangReleasePages;

  $scope.getGangReleases = function(thisPage){
    Prismic.Api('https://taylorgang.cdn.prismic.io/api', function (err, Api) {
        Api.form('everything')
            .ref(Api.master())
            .query(
              Prismic.Predicates.at("document.type", "release")
            )
            .pageSize(9)
            .page(thisPage)
            .orderings('[my.release.date desc]')
            .submit(function (err, response) {
                // The products are now ordered by price, highest first
                var results = response.results;

                setTimeout(function(){

                  $rootScope.pageLoading = false;
                  $scope.$apply();
                }, 600);


                if (thisPage >1 ) {
                  $rootScope.gangRelease = $rootScope.gangRelease.concat(response.results);
                  $scope.$broadcast('artistReleaseDone');
                  $rootScope.totalGangReleasePages = response.total_pages; // the number of pages
                }else{

                  $rootScope.gangRelease= response.results;
                  $scope.$broadcast('artistReleaseDone');
                  $rootScope.totalGangReleasePages = response.total_pages;

                }

            });
    });
  }
$scope.getGangReleases(1);


  $scope.page_g =1;

  $scope.pagingGang=function(){
    $scope.page_g = $scope.page_g +1;

    if($scope.page_g <= $rootScope.totalGangReleasePages){
      $scope.getGangReleases($scope.page_g);
    }else{
      return false
    }
  }


  //DETAIL CHECK
    $scope.about_getYoutubePlaylist('PL9cwsTrgI6FFxBon4flET37aW2QJP7l9S');










    // $rootScope.g_instaTotal  =[];
    // $rootScope.g_instapics = [];
    // $rootScope.g_totalDisplayed;
    // $rootScope.g_loadMoreImage="";
    // $rootScope.g_loadMoreNumber;



    // ACCESS TOKEN = 20694160.2e1aeb5.45751ad675a143b083a008ed7b9775da

// var thisData;
// var thisArtist;
//
// $rootScope.g_instaAccessToken = "20694160.020b8c7.a5946235ad9346a8b824b050360c7584";



// $scope.$watch('artistReady' ,function(){
//   setTimeout(function(){
//       $scope.aboutLoop();
//   }, 900);
// });
//
//
// $scope.aboutLoop = function(){
//
//   for ( i = 0; i < ($rootScope.Artist.length); i++ ){
//     var id = "";
//     id = $rootScope.Artist[i].data['artist.instagramId'].value;
//
//     if (id != ""){
//
// var config = {method: 'JSONP', cache: true, isArray: true};
//     var g_endpoint = "";
//     g_endpoint = "https://api.instagram.com/v1/users/"+id+"/media/recent?access_token="+$rootScope.g_instaAccessToken+"&callback=JSON_CALLBACK";
//
//     $http.jsonp(g_endpoint, config)
//
//     // $http({url: g_endpoint, method: 'JSONP', cache: true, isArray: true})
//
//     .then(function(response){
//           thisData = [];
//           thisData = response.data.data;
//           $rootScope.g_instaTotal = $rootScope.g_instaTotal.concat(thisData);
//
//           // if(thisArtist != response.data[0].user.id){
//           //
//           //   console.log(thisArtist);
//           // }else{
//           //   console.log("same");
//           //
//           // }
//           //
//           // var done = true;
//           //
//           // thisArtist = response.data[0].user.id;
//
//       })
//
//
//
//     }
//   }
// }
//
//













$scope.showAboutLinks = false;

$scope.g_mobileLinks = function(){
  $scope.showAboutLinks = !$scope.showAboutLinks
}






});//end od controller

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

var Contact = angular.module('myApp');

Contact.controller('contactCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http){


  $rootScope.pageLoading = true;

  $rootScope.meta= {
    "title":"taylorgang | contact",
    "url":"contact",
    "description": "contact"
  }

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
                        "email": "dev@eliafornari.com",
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
    $scope.hideContact = false;
    $window.location.reload();
  }




});
