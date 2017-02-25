angular.module('timeDirectiveApp').directive('showTime', function() {
  return {
    restrict: 'E',
    template: '<div> the time is {{ time }} </div>',
    link: function(scope, elem, attrs) {
      var currentTime = new Date();
      scope.time = currentTime.toString();
    }
  }
})
