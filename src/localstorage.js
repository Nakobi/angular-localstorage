/**
 * @module jigijigi.angular.localstorage
 */

angular.module('jigijigi.angular.storage', [
  'jigijigi.angular.storage.GenericLocalStorage',
  'jigijigi.angular.storage.ChromeLocalStorage'
])

.constant('STORAGE', {
  'GENERIC': 'GenericLocalStorage',
  'CHROME': 'ChromeLocalStorage'
})

.factory('LocalStorage', [
  '$window', 
  '$q', 
  '$injector',
  'STORAGE',
function($window, $q, $injector, STORAGE) {
  var storage = null;
  
  if($window.chrome && $window.chrome.app.isInstalled) {
    storage = $injector.get(STORAGE.CHROME);
  } else {
    storage = $injector.get(STORAGE.GENERIC);
  }

  return storage;
}])

;