// JavaScript Document
(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)

MenuDataService.$inject = ['$http',  '$q']
function MenuDataService($http ,  $q) {
	  var service = this;

 service.getAllCategories = function () {
	 var deferred = $q.defer(); // to return result as promise
	
	  var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });  /// returns  a promise with menu with the menu itels
	
	response.then(function (result) {
	//   console.log(result.data);
	   deferred.resolve(result.data);
	           })
  .catch(function (error) {
	  deferred.reject(error.statusText); 
    });
  return deferred.promise;
  }; // end of getAllCategories function
 
service.getItemsForCategory = function (categoryShortName) {
	 var deferred = $q.defer(); // to return result as promise
	
	  var response = $http({
      method: "GET",
      url: ( "https://davids-restaurant.herokuapp.com/menu_items.json?category="+ categoryShortName )
    });  /// returns  a promise with menu with the menu itels
	
	response.then(function (result) {
	  // console.log(result.data);
	   deferred.resolve(result.data.menu_items);
	           })
  .catch(function (error) {
	  deferred.reject(error.statusText); 
    });
  return deferred.promise;
  }; // end of getAllCategories function

}

})();
