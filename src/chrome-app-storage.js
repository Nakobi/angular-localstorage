/**
 * @module jigijigi.angular.storage.ChromeLocalStorage
 */

angular.module('jigijigi.angular.storage.ChromeLocalStorage', [])

.constant('ERROR', {
  ITEM_NOT_FOUND: 'Item not found'
})

.factory('ChromeLocalStorage', ['$window', '$q', function($window, $q) {
  var _localStorage = $window.chrome.storage.local;
  return {
    get: function(/* String|Array|Object */ keys) {
      var deferred = $q.defer();

      var items = _localStorage.get(keys, function(item) {
        if(!item || $window.chrome.runtime.lastError) {
          console.error($window.chrome.runtime.lastError);
          deferred.reject(ERROR.ITEM_NOT_FOUND);
        } else {
          // TODO: deserialize item
          deferred.resolve(items);
        }
      });

      return deferred.promise();
    },

    set: function(/* Object */ items) {

    },

    remove: function(/* String|Array */ keys) {

    },

    clear: function() {
      var deferred = $q.defer();
      _localStorage.clear(function() {
        if($window.chrome.runtime.lastError) {
          deferred.reject($window.chrome.runtime.lastError);
        } else {
          deferred.resolve();
        }
      });

      return deferred.promise;
    }
  };
}]);