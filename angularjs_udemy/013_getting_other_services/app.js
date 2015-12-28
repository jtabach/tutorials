var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    
  $log.log("Heloo");
  $log.info("This is some information");
  $log.warn("Warning!");
  $log.debug("Some debug info while writing code");
  $log.error("This was an error");
  
  $scope.name = 'John';
  $scope.formattedname = $filter('uppercase')($scope.name);
  
  $log.info($scope.name);
  $log.info($scope.formattedname);
  
  console.log($resource);
    
});