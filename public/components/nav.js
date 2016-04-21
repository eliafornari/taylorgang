
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
