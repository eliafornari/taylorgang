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
