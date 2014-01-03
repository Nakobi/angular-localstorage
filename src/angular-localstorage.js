/**
 * @module jigijigi.angular.localstorage
 */

angular.module('jigijigi.angular.localstorage', [])

.factory('LocalStorage', [
  '$window', 
  '$q', 
  'GenericLocalStorage', 
  'ChromeLocalStorage',
function($window, $q, GenericLocalStorage, ChromeLocalStorage) {
  var storage = null;
  if($window.localStorage || $window.sessionStorage) {
    storage = GenericLocalStorage;
  } else {
    storage = ChromeLocalStorage;
  }

  return {

  };
}])

.factory('GenericLocalStorage', ['$window', '$q', function($window, $q) {

  return {
    
  };
}])

.factory('ChromeLocalStorage', ['$window', '$q', function($window, $q) {
  return {

  };
}])

;