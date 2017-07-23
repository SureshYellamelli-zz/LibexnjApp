var app = angular.module('customersApp', ['ngRoute']);

app.controller('MyController' ,  function($scope) {
    $scope.navigations = ['Books','Authors',];  
}); 