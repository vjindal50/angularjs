
(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);




//  controler
CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
	var ctrl = this ;
	 ctrl.categories = categories ;
	 console.log (ctrl.categories) ;

	 } 
/////end  function 

})();