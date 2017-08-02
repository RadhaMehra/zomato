//$(document).ready(function () {
//  var email = $('#user-email').val();
//  var message = 'welcome back,' + email;
  //$('.welcome-message').text(message);
//  console.log($('#user-email').val());

//});   11
//});

var FoodApp = angular.module('foodieApp',['ngRoute']);     //module
FoodApp.config(function ($routeProvider) {								//router
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',								//login url
		controller: 'loginController'

	})
	.when('/home',{																//homeurl
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {								//restauranturl
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
	.when('/online',{																//orderurl
		templateUrl: 'pages/online.html',
		controller: 'onlineController'
	})
	.when('/trending',{												//trendingfoodurl
		templateUrl: 'pages/trending.html',
		controller: 'trendingController'
	})
	.when('/featured',{										//featuredfoodurl
		templateUrl: 'pages/featured.html',
		controller: 'trendingController'
	})
	.when('/newly',{								//newlyfoodurl
		templateUrl: 'pages/newly.html',
		controller: 'trendingController'
	})
	.when('/buffet',{					//buffetfoodurl
		templateUrl: 'pages/buffet.html',
		controller: 'trendingController'
	})

})



FoodApp.controller('mainController', function($scope,$location){				//mainController
//  $scope.restaurants = ['Pirates of Grill','Dastaan','OvenFresh,'KhoKha'];
      $scope.goToOnline = function() {						//orderfunction
           console.log('Go to Online');
          $location.url('online');
        }
				$scope.goTotrending = function() {					//trendingfunction
					 console.log('Go to home page');
					$location.url('trending');
				}
				$scope.goTofeatured = function() {					//featuredfunction
					 console.log('Go to featured page');
					$location.url('featured');
}

$scope.goTobuffet = function() {							//buffet-function
	 console.log('Go to buffet page')
	$location.url('buffet');
}
$scope.goTonewly = function() {						//newlyfunction
	 console.log('Go to new page')
	$location.url('newly');
}
  $scope.restaurants = [{										//array of restaurant
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
		id:'1',
  	image: 'images/restaurant1.jpg'

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
		id:'2',
    image: 'images/restaurant1.jpg'


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
		id:'3',
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
		id:'4',
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
		id:'5',
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
		id:'6',
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
		id:'7',
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
		id:'8',
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
		id:'9',
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
		id:'10',
    image: 'https://static.wixstatic.com/media/593f77_c738bcee99e0465d977937275ca59a7c.jpg'

  }]
});

FoodApp.controller('loginController',function($scope,$location) {						//loginController
	$scope.goToHome = function() {
		 console.log('Go to home page')
		$location.url('home');
	}
})
FoodApp.controller('trendingController',function($scope,$location) {						//trendingController

	$scope.goToOnline = function() {
			 console.log('Go to Online');
			$location.url('online');
		}
	   $scope.restaurants = [{                    //array of restaurant
			 name: 'Upstaires Club',
			 address: 'sector 5 panchkula',
			 location: 'Chandigarh',
			 category: 'Casual Dining',
			 rating: '4.3',
			 cuisines: 'Italian, North Indian, Continental',
			 cost: '1200 ',
			 hours: ' 11 AM to 4 PM, 6:30 PM to 11 PM (Mon-Sun)',
			 vote:'141 votes',
			 review:'110 reviews',
			 id:'1',
			 image: 'images/restaurant1.jpg'

		 },
		 {
			 name: 'Late Night Munchies',
			 address: 'Chakki Site, 1 Sector 24 D, Sector 24, Chandigarh',
			 location: 'Chandigarh',
			 category: 'Casual Dining',
			 rating: '4.0',
			 cuisines: 'North Indian, Chinese, Fast Food',
			 cost: '1000',
			 hours: '11 AM to 11 PM (Mon-Sun)',
			 vote:'401 votes',
			 review:'310 reviews',
			 id:'2',
			 image: 'images/restaurant2.jpg'

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
	      id:'4',
	      image: 'images/restaurant3.jpg'

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
	      id:'5',
	      image: 'images/restaurant4.jpg'

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
	      id:'6',
	      image: 'images/restaurant5.jpg'

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
	      id:'7',
	      image: 'images/restaurant6.jpg'

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
	      id:'8',
	      image: 'images/restaurant7.jpg'

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
	      id:'9',
	      image: 'images/restaurant8.jpg'

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
	      id:'10',
	      image:'images/restaurant9.jpg'
	    }]
})
FoodApp.controller('featuredController',function($scope,$location) {						//featuredController
	$scope.goToOnline = function() {
			 console.log('Go to Online');
			$location.url('online');
		}

		   $scope.restaurants = [{                    //array of restaurant
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
		      id:'1',
		      image: 'images/restaurant1.jpg'

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
		      id:'2',
		      image: 'images/restaurant2.jpg'

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
		      id:'3',
		      image: 'images/restaurant3.jpg'

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
		      id:'4',
		      image: 'images/restaurant4.jpg'
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
		      id:'5',
		      image: 'images/restaurant5.jpg'

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
		      id:'6',
		      image: 'images/restaurant6.jpg'

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
		      id:'7',
		      image: 'images/restaurant7.jpg'

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
		      id:'8',
		      image: 'images/restaurant8.jpg'

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
		      id:'9',
		      image: 'images/restaurant9.jpg'

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
		      id:'10',
		      image:'images/restaurant10.jpg'

		    }]

})
FoodApp.controller('newlyController',function($scope,$location) {						//newlyController

	$scope.goToOnline = function() {
			 console.log('Go to Online');
			$location.url('online');
		}
	   $scope.restaurants = [{                    //array of restaurant
	      name: 'Upstaires Club',
	      address: 'sector 5 panchkula',
	      location: 'Chandigarh',
	      category: 'Casual Dining',
	      rating: '4.3',
	      cuisines: 'Italian, North Indian, Continental',
	      cost: '1200 ',
	      hours: ' 11 AM to 4 PM, 6:30 PM to 11 PM (Mon-Sun)',
	      vote:'141 votes',
	      review:'110 reviews',
	      id:'1',
	      image:'images/restaurant1.jpg'

	    },
	    {
	      name: 'Late Night Munchies',
	      address: 'Chakki Site, 1 Sector 24 D, Sector 24, Chandigarh',
	      location: 'Chandigarh',
	      category: 'Casual Dining',
	      rating: '4.0',
	      cuisines: 'North Indian, Chinese, Fast Food',
	      cost: '1000',
	      hours: '11 AM to 11 PM (Mon-Sun)',
	      vote:'401 votes',
	      review:'310 reviews',
	      id:'2',
	      image: 'images/restaurant2.jpg'

	    },
	    {
	      name: 'Burgrill',
	      address: 'SECTOR 9, PANCHKULA',
	      location: 'Chandigarh',
	      category: ' Cafe, Bakery',
	      rating: '4.0',
	      cuisines: 'Burger, Fast Food, Beverages',
	      cost: '650 ',
	      hours: '10 AM to 12 Midnight (Mon-Sun)',
	      vote:'450 votes',
	      review:'200 reviews',
	      id:'3',
	      image: 'images/restaurant3.jpg'
	    },
	    {
	      name: 'Roll Xpress',
	      address: 'SECTOR 15, CHANDIGARH',
	      location: 'Chandigarh',
	      category: 'Fast Food',
	      rating: '4.6',
	      cuisines: 'Rolls',
	      cost: '1300',
	      hours: '12 Noon to 1 AM (Mon-Sun)',
	      vote:'800 votes',
	      review:'650 reviews',
	      id:'4',
	      image: 'images/restaurant4.jpg'
	    },
	    {
	      name: 'Faraabi Cafe',
	      address: 'SECTOR 10, CHANDIGARH',
	      location: 'Chandigarh',
	      category:'Kiosk',
	      rating: '4.2',
	      cuisines: 'Mughlai, North Indian',
	      cost: '100 ',
	      hours: ' 9 AM to 7:30 PM (Mon-Sun)',
	      vote:'170 votes',
	      review:'140 reviews',
	      id:'5',
	      image: 'images/restaurant5.jpg'

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
	      id:'6',
	      image: 'images/restaurant6.jpg'
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
	      id:'7',
	      image: 'images/restaurant7.jpg'

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
	      id:'8',
	      image: 'images/restaurant8.jpg'

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
	      id:'10',
	      image: 'images/restaurant10.jpg'
	    }]
})
FoodApp.controller('buffetController',function($scope,$location) {						//buffetController
	$scope.goToOnline = function() {
			 console.log('Go to Online');
			$location.url('online');
		}

	   $scope.restaurants = [{                    //array of restaurant
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
	      id:'1',
	      image: 'images/restaurant1.jpg'

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
	      id:'2',
	      image: 'images/restaurant10.jpg'
	    },
	    {
	      name: 'Cafe 17 - Taj Chandigarh',
	      address: 'TAJ CHANDIGARH, SECTOR 17, CHANDIGARH',
	      location: 'Chandigarh',
	      category: 'Casual Dining, Bar',
	      rating: '4.1',
	      cuisines: 'North Indian, Italian, Continental',
	      cost: '650 ',
	      hours: '10 AM to 12 Midnight (Mon-Sun)',
	      vote:'450 votes',
	      review:'200 reviews',
	      id:'3',
	      image: 'images/restaurant2.jpg'
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
	      id:'4',
	      image: 'images/restaurant3.jpg'

	    },
	    {
	      name: 'Kelong',
	      address: 'ELANTE MALL, CHANDIGARH INDUSTRIAL AREA, CHANDIGARH',
	      location: 'Chandigarh',
	      category:'Casual Dining, Bar',
	      rating: '4.2',
	      cuisines: 'North Indian, Italian, Continental, Mexican, Chinese',
	      cost: '100 ',
	      hours: ' 9 AM to 7:30 PM (Mon-Sun)',
	      vote:'170 votes',
	      review:'140 reviews',
	      id:'5',
	      image: 'images/restaurant4.jpg'

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
	      id:'6',
	      image: 'images/restaurant5.jpg'

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
	      id:'7',
	      image: 'images/restaurant6.jpg'

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
			 id:'8',
			 image: 'images/restaurant8.jpg'

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
	      id:'10',
	      image: 'images/restaurant9.jpg'

	    }]
})


FoodApp.controller('onlineController',function($scope,$location) {						//orderonlineController
	$scope.goToOnline = function() {
			 console.log('Go to Online');
			$location.url('online');
		}


   $scope.restaurants = [{                    //array of restaurant
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
      id:'1',
      image: 'images/restaurant1.jpg'

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
      id:'2',
      image: 'images/restaurant4.jpg'

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
      id:'3',
      image: 'images/restaurant2.jpg'

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
      id:'4',
      image: 'images/restaurant3.jpg'

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
      id:'5',
      image:'images/restaurant01.jpg'
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
      id:'6',
      image: 'images/restaurant6.jpg'
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
      id:'7',
      image: 'images/restaurant7.jpg'
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
      id:'8',
      image: 'images/restaurant8.jpg'
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
      id:'9',
      image: 'images/restaurant5.jpg'

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
      id:'10',
      image:'images/restaurant9.jpg'

    }]



})
FoodApp.controller('restaurantController',function($scope,$routeParams,$http,$location) {				//restaurantController
	$scope.goToOnline = function() {
			 console.log('Go to Online');
			$location.url('online');
		}

	$scope.restaurantId = $routeParams.id;
	var diabetic_ingredients = ['sweet', 'chocolate', 'brownie', 'rice', 'french fries', 'pasta', 'cookies', 'chicken', 'nachos', 'pie',				//array of diabetic causing ingredients
	 'yogurt', 'smoothie', 'mayonnaise', 'hamburger','cake', 'pizza']
	$scope.ingredients = [];
	var restaurants = [{
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
  	image: 'images/restaurant1.jpg',
		bestDish: {
	name: 'Healthy lunch',
	image: 'http://img.taste.com.au/uCOzsMob/w720-h480-cfill-q80/taste/2016/11/barley-and-raw-veg-power-salad-100674-1.jpeg'
},
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
    image: 'images/restaurant2.jpg',
		bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},
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
    image: 'images/restaurant10.jpg',
		bestDish: {
	name: 'Asian Mandarin Salad',
	image: 'http://dolerecipe.dolesunshine.com/RecipeImages/300/Asian%20Mandarin%20Salad%201000x383.jpg'
},
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
    image: 'images/restaurant3.jpg',
		bestDish: {
	name: ' Special Burger',
	image: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Junk-Food-HD-Background.jpg'
  },
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
    image: 'images/restaurant5.jpg',
		bestDish: {
	name: ' Pizza',
	image: 'http://myinfocart.com/wp-content/uploads/2015/08/pizza-1260x840.jpg'
},
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
    image: 'images/restaurant6.jpg',
		bestDish: {
	name: 'Sweets',
	image: 'http://images.indianexpress.com/2016/10/sweets759.jpg'
},
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
    image: 'images/restaurant7.jpg',
		bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},
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
    image: 'images/restaurant8.jpg',
		bestDish: {
	name: 'Pasta',
	image: 'https://miami.eat24hours.com/files/cuisines/v4/pasta.jpg'
},
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
    image: 'images/restaurant9.jpg',
		bestDish: {
	name: 'Lunch',
	image: 'http://72424590.r.cdnsun.net/wp-content/uploads/2015/10/healthy-lunch-2-cobb.jpg?e430d6'
},
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
    image: 'images/restaurant10.jpg',
		bestDish: {
	name: 'Buscar Con',
	image: 'https://s-media-cache-ak0.pinimg.com/originals/c9/83/7a/c9837a956910f8653d269ad8b2bd53e8.jpg'
},
  }];
	$scope.restaurant = restaurants[$routeParams.id - 1];

	$scope.getIngredients = function(url) {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({																																					//api call
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key d7a5cd67d77b4b478f7d8a870b45e266',				//api key
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {										//diabetic-helper code
								var ingredients = response.data.outputs[0].data.concepts;
					  			$scope.ingredient = [];
									//  var cboxArray = [];
									for (var i =0;i < ingredients.length;i++) {
										if(ingredients[i].value>0.75)
										{
										$scope.ingredients.push(ingredients[i].name);
									}
  			}
				for(var j=0; j<diabetic_ingredients.length; j++)
				{
					var d = $scope.ingredients.indexOf(diabetic_ingredients[j]);
					if(d>=0)
					{
						$scope.text="This food is not healthy for diabetic patient";
						console.log($scope.text);
						break;
					}
					else{
												$scope.text = "This food is healthy for diabetic patients ";
												console.log($scope.text);
					}
				}
    		// $('.ingredients').html(list);
    		console.log(d);
        }, function (xhr) {
        	console.log(xhr);
        })

// success: function (response) {
// 	var ingredients = response.outputs[0].data.concepts;
// 			var list = '';
// 			for (var i =0;i<ingredients.length;i++) {="" list="" +="<div class="ingredient">" ingredients[i].name="" '<="" div="">'
// 			}
//   		$('.ingredients').html(list);
//       },
//       error: function (xhr) {
//       	console.log(xhr);
//       }</ingredients.length;i++)>

}
})
