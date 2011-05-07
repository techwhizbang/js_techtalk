/**
 * To stub a constructor in your tests
 * pass in a 'string-ified' version of the class
 * and the expected instance of the class you're stubbing.
 * Example:
 * var expectedCart = new Cart();
 * stubConstructor("Cart", expectedCart);
 */
function stubConstructor(klass, expectedInstance) {
  spyOn(window, klass).andReturn(expectedInstance);
}