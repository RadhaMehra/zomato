//$(document).ready(function () {
//  var email = $('#user-email').val();
//  var message = 'welcome back,' + email;
  //$('.welcome-message').text(message);
//  console.log($('#user-email').val());

//});   11
//});
var FoodApp = angular.module('foodieapp', []);
FoodApp.controller('mainController', function($scope){

  $scope.restaurants = [{
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  }]
})
