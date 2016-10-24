
(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

//  controler
CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {
	var ctrl = this ;
	 ctrl.categories = [] ;
	 ctrl.items = [];


MenuDataService.getAllCategories ()
.then(function (result) {
		console.log ("categories") ;
		ctrl.categories = result ;
		console.log (ctrl.categories) ;


}).catch(function (error) {

      console.log(error);
	    }) ;

MenuDataService.getItemsForCategory ("L")
.then(function (result) {

		 ctrl.items = result ;
		 console.log ("items for l") ;
		 console.log (ctrl.items) ;

}).catch(function (error) {

      console.log(error);
	    }) ;


	 }
/////end narrow function 

})();
