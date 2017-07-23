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
  	name: 'Pirates of Grill',
  	address: '313, Third Floor, Elante Mall, Phase 1, Chandigarh Industrial Area, Chandigarh',
  	location: 'Chandigarh',
  	category: 'Casual Dining',
  	rating: '4.0',
  	cuisines: 'North Indian, Continental, Asian',
  	cost: '1200 ',
  	hours: ' 11 AM to 4 PM, 6:30 PM to 11 PM (Mon-Sun)',
    vote:'141 votes',
    review:'110 reviews',
  	image: 'https://i1.wp.com/urbanescapades.in/wp-content/uploads/2016/05/DSC_0584-tile.jpg'
  },
  {
    name: 'Dastaan',
    address: 'SCO 43, Backside, Madhya Marg, Sector 7, Chandigarh',
    location: 'Chandigarh',
    category: 'Casual Dining',
    rating: '4.0',
    cuisines: 'North Indian',
    cost: '1000',
    hours: '11 AM to 11 PM (Mon-Sun)',
    vote:'401 votes',
    review:'310 reviews',
    image: 'https://media-cdn.tripadvisor.com/media/photo-o/0d/e6/42/29/dastaan-limited.jpg'
  },
  {
    name: 'OvenFresh',
    address: 'SCO 437 & 438, Sector 35 C, Sector 35, Chandigarh',
    location: 'Chandigarh',
    category: ' Cafe, Bakery',
    rating: '4.1',
    cuisines: 'Cafe, Bakery',
    cost: '650 ',
    hours: '10 AM to 12 Midnight (Mon-Sun)',
    vote:'450 votes',
    review:'200 reviews',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/1c/3f/8e/1c3f8ec546d060e696d305cbfe714afc.jpg'
  },
  {
    name: 'Barbeque Nation',
    address: 'SCO 39, Madhya Marg, Sector 26, Chandigarh',
    location: 'Chandigarh',
    category: 'Casual Dining, Bar',
    rating: '4.6',
    cuisines: 'North Indian, Chinese',
    cost: '1300',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    vote:'800 votes',
    review:'650 reviews',
    image: 'http://blog.the3hungrymen.com/wp-content/uploads/2015/08/bbqnation-13.jpg'
  },
  {
    name: 'KhoKha',
    address: 'Booth 123, Sector 9C, Sector 9, Chandigarh',
    location: 'Chandigarh',
    category:'Kiosk',
    rating: '4.2',
    cuisines: 'Fast Food, Tea',
    cost: '100 ',
    hours: ' 9 AM to 7:30 PM (Mon-Sun)',
    vote:'170 votes',
    review:'140 reviews',
    image: 'http://www.myhealthylivingcoach.com/wp-content/uploads/2015/01/Do-Fast-Food-Companies-Have-to-Take-Responsibility-for-the-Obesity-Epidemic.jpg'
  },
  {
    name: 'Balaram Mullick Sweets',
    address: '2, Paddapukur Road, Bhawanipur, Kolkata',
    location: 'Bhawanipur',
    category: 'Sweet Shop',
    rating: '4.6',
    cuisines: 'Mithai',
    cost: '300',
    hours: ' 7 AM to 11 PM (Mon-Sun)',
    vote:'600 votes',
    review:'540 reviews',
    image: 'http://bestgiftstokolkata.com/wp-content/uploads/2015/05/Rajbhog.jpg'
  },
  {
    name: 'Shree Thaker Bhojanalay',
    address: '31, Dadisheth Agyari Lane, Off Kalbadevi Road, Kalbadevi, Mumbai',
    location: 'Mumbai',
    category: 'Casual Dining',
    rating: '4.7',
    cuisines: 'Gujarati',
    cost: '1000',
    hours: ' 11:30 AM to 3:30 PM, 7 PM to 10:30 PM (Mon-Sun)',
    vote:'420 votes',
    review:'300 reviews',
    image: 'http://img01.ibnlive.in/ibnkhabar/uploads/459x306/jpg/2015/09/p18_food-copy.jpg'
  },
  {
    name: 'Family Tree',
    address: 'Shop 4, Ravi Industries, Panch Pakhadi, Thane West',
    location: 'Mumbai',
    category: 'Casual Dining',
    rating: '4.5',
    cuisines: 'Italian, Mexican, North Indian, Chinese',
    cost: '800 ',
    hours: ' 11:30 AM to 3:30 PM, 6:30 PM to 11:30 PM (Mon-Sun)',
    vote:'250 votes',
    review:'240 reviews',
    image: 'https://i2.wp.com/files.hungryforever.com/wp-content/uploads/2015/10/16192325/Food-Festival.jpg?w=1269&strip=all&quality=80'
  },
  {
    name: 'Farzi Cafe',
    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    location: 'Connaught Place',
    category: 'Casual Dining, Bar',
    rating: '4.2',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    vote:'200 votes',
    review:'150 reviews',
    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
    name: 'Hauz Khas Social',
    address: '23, 1st Floor, Odeon Building, Radial 5, D Block, Connaught Place, New Delhi',
    location: 'Connaught Place',
    category: ' Lounge, Casual Dining',
    rating: '4.1',
    cuisines: 'Continental, American, Asian, North Indian',
    cost: '1,600',
    hours: ' 10 AM to 12:30 AM (Mon-Sun)',
    vote:'150 votes',
    review:'120 reviews',
    image: 'https://static.wixstatic.com/media/593f77_c738bcee99e0465d977937275ca59a7c.jpg'
  }]
})
