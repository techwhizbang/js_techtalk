describe("Stack", function() {

  describe('#constructor', function() {

    it('should make the capacity 10 by default', function() {
      expect(new Stack().capacity()).toEqual(10);
    });

    it('should optionally take capacity as an argument', function() {
      expect(new Stack(20).capacity()).toEqual(20);
    });

  });

  describe('#instance methods', function() {

    var myStack;

    beforeEach(function() {
      myStack = new Stack();
    });

    describe("when pushing an object", function() {

      it('should add the object to the next available position', function() {
        myStack.push("t-shirt");
        expect(myStack.capacity()).toEqual(9);
      });

      describe("and the capacity is exceeded", function() {

        var smallStack;

        beforeEach(function() {
          smallStack = new Stack(2);
          smallStack.push("1");
          smallStack.push("2");
        });

        it('should call the grow method', function() {
          spyOn(smallStack, 'grow');
          smallStack.push("3");
          expect(smallStack.grow).toHaveBeenCalled();
        });

        it('should automatically grow the stack by doubling the capacity', function() {
          smallStack.push("3");
          expect(smallStack.size()).toEqual(3);
          smallStack.push("4");
          smallStack.push("5");
          expect(smallStack.size()).toEqual(5);
        });

      });

    });

    describe("when popping an object", function() {

      var myStack;

      beforeEach(function() {
        myStack = new Stack();
        myStack.push('t-shirt');
        myStack.push('mug');
        myStack.push('canvas');
      });

      it('should return the object off the top of the stack', function() {
        expect(myStack.pop()).toEqual('canvas');
      });

      it('should remove the object off the top of the stack', function() {
        expect(myStack.pop()).toEqual('canvas');
        expect(myStack.capacity()).toEqual(8);
        expect(myStack.pop()).toEqual('mug');
        expect(myStack.capacity()).toEqual(9);
        expect(myStack.pop()).toEqual('t-shirt');
        expect(myStack.capacity()).toEqual(10);
      });

    });

    it('should return the number of items on the stack', function() {
      var myStack = new Stack();
      myStack.push('t-shirt');
      myStack.push('mug');
      myStack.push('canvas');
      myStack.push('sticker');
      expect(myStack.size()).toEqual(4);
    });

  });


});