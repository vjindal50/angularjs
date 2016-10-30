(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
	
	.state('public.signUp', {
      url: '/signUp',
      templateUrl: 'src/public/signup/signup.html',
	  controller: 'signupController',
      controllerAs: 'signCtrl'
	  
	    })
		
		.state('public.userinfo', {
      url: '/userinfo',
      templateUrl: 'src/public/signup/userinfo.html',
	   controller: 'userController',
      controllerAs: 'userCtrl',
	  resolve: {
        favItem: ['userInfoService', function (userInfoService) {
          return userInfoService.getCookie("fav_item");
        }]  ,
		user: ['userInfoService', function (userInfoService) {
          return userInfoService.getCookie("user");
        }] 
		
	 }
	  
	    })
	
	
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
     resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }] 
	 }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();
