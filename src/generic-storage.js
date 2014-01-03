/**
 * @module jigijigi.angular.storage.GenericLocalStorage
 */

angular.module('jigijigi.angular.storage.GenericLocalStorage', [])

.constant('ERROR', {
  ITEM_NOT_FOUND: 'Item not found'
})

.factory('GenericLocalStorage', [
  '$window', 
  '$q', 
  'ERROR', 
function($window, $q, ERROR) {
  var _localStorage = $window.localStorage;
  return {
    get: function(/* String|Array|Object */ keys) {
      var deferred = $q.defer();

      if(typeof keys === 'string') {
        (function() {
          var item = _localStorage.getItem(keys);
          if(!item) {
            deferred.reject(ERROR.ITEM_NOT_FOUND);
          } else {
            // TODO: deserialize item
            deferred.resolve({keys: item});
          }
        })();
      } else if(keys.hasOwnProperty('length')) {
        (function() {
          var items = {};

          for(var i=0, len=keys.length; i<len; i++) {
            var item = _localStorage.getItem(keys[i]);
            // TODO: deserialize
            items[keys[i]] = item;
          }

          deferred.resolve(items);
        })();
          
      } else if(typeof keys === 'object') {
        (function() {
          var _keys = Object.keys(keys);
          var items = {};

          for(var i=0, len=_keys.length; i<len; i++) {
            var item = _localStorage.getItem(_keys[i]);
            // TODO: deserialize
            items[_keys[i]] = item;
          }

          deferred.resolve(angular.extend(keys, items));
        })();
          
      } else {
        deferred.resolve({});
      }

      return deferred.promise();
    },

    set: function(/* Object */ items) {

    },

    remove: function(/* String|Array */ keys) {

    },

    clear: function() {
      var deferred = $q.defer();
      try {
        _localStorage.clear();
        deferred.resolve();
      } catch(e) {
        deferred.reject(e);
      }

      return deferred.promise;
    }
  };
}]);