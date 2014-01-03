describe('test', function() {
  var $httpBackend, provide;

  beforeEach(module('jigijigi.angular.storage'));
  
  /** Basic unit test **/

  it('should do this', inject(function(LocalStorage) {
    expect(LocalStorage).not.toBe(null);
  }));

});
