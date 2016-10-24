(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categoriesList', {
    url: '/categories',
    templateUrl: 'src/templates/categories.page.html',
	controller : "CategoriesController as $ctrl",
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return  MenuDataService.getAllCategories ();
      }]
    }
  })
  
  .state('itemsList', {
    url: '/items/{catId}',
    templateUrl: 'src/templates/items.page.html',
	controller : "ItemsController as $ctrl",
    resolve: {
      items: ['MenuDataService','$stateParams', function (MenuDataService , $stateParams) {
        return  MenuDataService.getItemsForCategory ($stateParams.catId) ;
      }],
	  cat : [ '$stateParams', function ($stateParams) {
        return  $stateParams.catId;
      }] 
    }
  })
  
  
  ;
}

})();
