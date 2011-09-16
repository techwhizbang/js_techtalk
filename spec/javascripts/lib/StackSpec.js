describe("Stack", function() {

  describe('#constructor', function() {

    it('should make the capacity 10 by default')

    it('should optionally take capacity as an argument')

  });

  describe('#instance methods', function() {

    var myStack;

    beforeEach(function() {
      myStack = new Stack();
    });

    describe("when pushing an object", function() {

      it('should add the object to the next available position')

      describe("and the capacity is exceeded", function() {

        var smallStack;

        beforeEach(function() {
          smallStack = new Stack(2);
          smallStack.push("1");
          smallStack.push("2");
        });

        it('should call the grow method')

        it('should automatically grow the stack by doubling the capacity')

      });

    });

    describe("when popping an object", function() {

      var myStack;

      beforeEach(function() {
        myStack = new Stack();
        myStack.push('thing 1');
        myStack.push('thing 2');
        myStack.push('thing 3');
      });

      it('should return the object off the top of the stack')

      it('should remove the object off the top of the stack')

    });

    it('should return the number of items on the stack')

  });


});