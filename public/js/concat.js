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
  'mailchimp'
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
  console.log(date);
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

.config(['$routeProvider', '$locationProvider' ,'$sceProvider', function($routeProvider, $locationProvider, $sceProvider) {

$sceProvider.enabled(false);

  // use the HTML5 History API
  $locationProvider.html5Mode(true);

  $routeProvider


  // $locationChangeStart


    .when('/artist/:id', {
      templateUrl: 'artist/artist-detail.html',
      controller: 'artistCtrl'
      })

    .when('/artist', {
      templateUrl: 'artist/artist.html',
      controller: 'artistCtrl'
      })

    .when('/tour', {
      templateUrl: 'tour/tour.html',
      controller: 'tourCtrl'
      })

    .when('/about', {
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

.controller('routeController', function($scope, $location, $rootScope, $routeParams, $timeout, $interval){

  $rootScope.location = $location.path();

$rootScope.firstLoading = true;






















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


.directive('closeRightDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/close-right.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})
.directive('closeLeftDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'components/close-left.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('pageLoadingSpinner', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'A',
    // templateUrl: 'components/loader.html',
    replace: true,
    link: function(scope, elem, attrs) {

      //
      // $rootScope.$on('$routeChangeStart', function() {
      //
      //     $rootScope.pageLoading = true;
      //     scope.logoHide = true;
      //
      // });
      //
      //
      // $rootScope.$on('$routeChangeSuccess', function() {
      //
      //   // $timeout(function () {
      //     scope.logoHide = false;
      //     $rootScope.pageLoading = false;
      //   // }, 1000);
      //
      //
      // });

    }
  };
});

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



var Artist = angular.module('myApp');




Artist.controller('artistCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory, anchorSmoothScroll, $window){










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
// https://www.youtube.com/embed/8d0cm_hcQes
$rootScope.main_video = $rootScope.baseUrl;
$scope.artistInstagram=[];

$rootScope.thisArtist = function(thisArtist, thisNumber){


    for (a in $rootScope.Artist){
      if($rootScope.Artist[a].uid==thisArtist){
        $rootScope.mainArtist = $rootScope.Artist[a];
        $rootScope.bandsInTown($rootScope.Artist[a].data['artist.name'].value[0].text);
        $scope.getYoutubeChannel($rootScope.Artist[a].data['artist.youtubeChannelID'].value);
      }
    }
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
                    // console.log(data);
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
              // "force_narrow_layout": false,
              "separator_color": "#FFFFFF",
              "link_color": "#000000"
              // "force_narrow_layout":"true"
            }).insert_events();
          // }
        }
}//end of bandsintown








//DETAIL CHECK

if ($location.path() == '/artist/'+$routeParams.id){
  console.log("detail");



          instaFactory.pullimages($rootScope.mainArtist.data['artist.instagramId'].value, 10).then( function(data) {

                $scope.artistInstagram = $rootScope.instaTotal;
                console.log("data");

                console.log(data);



              }, function(error) {
                // promise rejected, could log the error with: console.log('error', error);

            });


}

















//..................................................changing anchor link on click
$scope.gotoAnchor = function(x) {
  // call $anchorScroll()
  anchorSmoothScroll.scrollTo(x);
};


$rootScope.scroll;
$scope.hideBacktotop = true;
$scope.windowHeight = $window.innerHeight;
console.log($scope.windowHeight);


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







});//end of the controller.... .... ...... ..... ....






















Artist.directive('instagramDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {

    }
  };
});

var Subscribe = angular.module('myApp');

Subscribe.controller('subscribeCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http){
$rootScope.pageLoading = false;
  setTimeout(function(){
    $rootScope.viewLoaded = true;
    $rootScope.pageLoading = false;
    $scope.$apply();
  }, 500);




























});



var About = angular.module('myApp');


About.controller('aboutCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http, $sce, instaFactory){





  //................................................................................................................................................//
  //................................................................................................................................................//
  //................................................................DETAIL..........................................................................//
  //................................................................................................................................................//
  //................................................................................................................................................//

  $rootScope.about_data;
  $rootScope.about_channel_data = [];
  $rootScope.about_main_video, $scope.about_main_title;
  $rootScope.about_main_video_show =false;
  $rootScope.about_baseUrl;
  // 'https://www.youtube.com/embed/8d0cm_hcQes'
  $rootScope.about_main_video;
  // = $scope.about_baseUrl;
  $scope.aboutInstagram=[];





  $scope.about_getYoutubeChannel = function(channelid){

                $.get(
                  "https://www.googleapis.com/youtube/v3/search",{
                    part: 'snippet',
                    maxResults: 50,
                    channelId: channelid,
                    key: 'AIzaSyC_ArqRandYQu5VgJiL9flmr27ApQU5ZqA'
                  },
                    function(data){

                      $rootScope.about_channel_data = data.items;
                      // console.log(data);
                      // $.each(data.items, function(i, item){
                      //   // var videoTitle = item.snippet.title;
                      // })


                      $rootScope.about_baseUrl = 'https://www.youtube.com/embed/'+$rootScope.about_channel_data[0].id.videoId+'?rel=0&amp;&autoplay=0&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white&wmode=opaque';
                      $rootScope.about_main_video = $scope.about_baseUrl;
                      $rootScope.about_main_title = $rootScope.channel_data[0].title;

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
    $rootScope.main_title = $rootScope.channel_data[index].title;

  }









    //BANDSINTOWN

  $rootScope.about_bandsInTown = function(artistname){


          if($rootScope.isMobile){
            // $scope.showTour = function(){
              new BIT.Widget({
                "artist": "artistname",
                "div_id":"tour-dates",
                "text_color": "#000000",
                "share_links":false,
                "bg_color": "#FFFFFF",
                "force_narrow_layout": true,

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
                // "force_narrow_layout": false,
                "separator_color": "#FFFFFF",
                "link_color": "#000000"
                // "force_narrow_layout":"true"
              }).insert_events();
            // }
          }
  }//end of bandsintown










  //DETAIL CHECK

  if ($location.path() == '/about'){
    console.log("detail");



    $rootScope.about_bandsInTown('taylorgang');
    $scope.about_getYoutubeChannel('UCceZc-Bn_geUR5sQRlCKQow');



            instaFactory.pullimages('taylorgang', 4).then( function(data) {

                  $scope.artistInstagram = $rootScope.instaTotal;

                  console.log(data);



                }, function(error) {
                  // promise rejected, could log the error with: console.log('error', error);

              });


  }








});

  // About.directive('instagramDirective', function($rootScope, $location, $window, $routeParams, $timeout) {
  //   return {
  //     restrict: 'A',
  //     link: function(scope, elem, attrs) {
  //
  //     }
  //   };
  // });

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

var Contact = angular.module('myApp');

Contact.controller('contactCtrl', function($scope, $location, $rootScope, $routeParams, $timeout,	$http){


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
