
(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);




//  controler
ItemsController.$inject = ['items' , 'cat'];
function ItemsController(items , cat) {
	 
 var ctrl = this ;
	 ctrl.items = items ;
	 ctrl.cat = cat ; /// short name for current category
	 console.log (ctrl.items) ;

	 } 
/////end  function 

})();