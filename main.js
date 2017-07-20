//$(document).ready(function () {
//  var email = $('#user-email').val();
//  var message = 'welcome back,' + email;
  //$('.welcome-message').text(message);
//  console.log($('#user-email').val());

//});   11
//});
var FoodApp = angular.module('foodieapp', []);
FoodApp.controller('mainController', function($scope){

$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];

})
