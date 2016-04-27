var App = angular.module('App', []);

App.controller('profileController', function($scope, $http) {
  $http.get('./data/profile.json').then(function(res){
          $scope.profile = res.data[0];                
        });
});