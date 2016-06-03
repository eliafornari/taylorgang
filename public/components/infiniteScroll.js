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
