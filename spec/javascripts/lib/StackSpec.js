describe("Stack", function() {

    describe('#constructor', function() {

        it('should make the capacity 10 by default', function() {
            var stack = new Stack();
            expect(stack.capacity).toEqual(10);
        });

        it('should optionally take capacity as an argument', function() {
            var stack = new Stack(20);
            expect(stack.capacity).toEqual(20);
        });

    });

    describe('#instance methods', function() {

        var stack

        beforeEach(function() {
            stack = new Stack();
        });

        describe("when pushing an object", function() {

            it('should add the object to the next available position', function() {
               stack.push("hello");
               expect(stack.size()).toEqual(1);
            });

            describe("and the capacity is exceeded", function() {


                beforeEach(function() {
                });

                it('should call the grow method')

                it('should automatically grow the stack by doubling the capacity')

            });

        });

        describe("when popping an object", function() {

            beforeEach(function() {
            });

            it('should return the object off the top of the stack')

            it('should remove the object off the top of the stack')

        });

        it('should return the number of items on the stack')

    });


});
