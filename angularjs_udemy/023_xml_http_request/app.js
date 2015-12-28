var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    // This won't work, no API or database
    var rulesrequest = new XMLHTTPRequest();
    rulesrequest.onreadystatechange = function() {
        
        $scope.$apply(function() {
            if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
                $scope.rules = JSON.parse(rulesrequest.responseText);
            }
        });
        
    }
    
    rulesrequest.open("GET", "http://localhost:54765/api", true);
    $scope.rules = JSON.parse(rulesrequest.responseText);
    
    console.log($scope.rules);
    
}]);
