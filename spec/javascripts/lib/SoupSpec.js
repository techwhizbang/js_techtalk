describe("All Things Soup", function() {

  describe("BaseSoup", function() {

    var baseSoup;

    beforeEach(function() {
      baseSoup = new BaseSoup();
    });

    describe('#properties', function() {

      it('should not expose name', function() {
        expect(baseSoup.name).toBeUndefined();
      });

      it('should not expose price', function() {
        expect(baseSoup.price).toBeUndefined();
      });

      it('should not expose ingredients', function() {
        expect(baseSoup.ingredients).toBeUndefined();
      });

    });

    describe('#methods', function() {

      it('should return the menu display', function() {
        expect(new BaseSoup().menuDisplay()).toEqual("simple soup $7.00");
      });

    });

  });

  describe("CrabBisque", function() {

    describe("upon instantiation", function() {

      it('should call the BaseSoup constructor', function() {
        spyOn(BaseSoup, 'call');
        new CrabBisque();
        expect(BaseSoup.call).toHaveBeenCalled();
      });

    });

    describe("#methods", function() {

      it('should return the menu display', function() {
        expect(new CrabBisque().menuDisplay()).toEqual("Crab Bisque $8.00");
      });

      it('should return the description', function() {
        expect(new CrabBisque().description()).toEqual("Delicious crab in a rich cream broth");
      });

    });

  });

  describe("Jambalaya", function() {
    describe('#properties', function() {

      var jambalaya;

      beforeEach(function() {
        jambalaya = new Jambalaya();
      });

      it('should expose name', function() {
        expect(jambalaya.name).toEqual("Jambalaya");
      });

      it('should expose price', function() {
        expect(jambalaya.price).toEqual("$7.50");
      });

      it('should expose ingredients', function() {
        expect(jambalaya.ingredients).toEqual(['salt', 'tomatoes', 'shrimp', 'andouile sausage', 'rice', 'cumin', 'cayenne pepper']);
      });

    });

    describe("#methods", function() {

      it('should return the menu display', function() {
        expect(new Jambalaya().menuDisplay()).toEqual("Jambalaya $7.50");
      });

    });
  });

  describe("Mulligatawny", function() {
    describe("#methods", function() {

      it('should return the menu display', function() {
        expect(new Mulligatawny().menuDisplay()).toEqual("Mulligatawny $7.50");
      });

    });
  });

  describe("LimaBean", function() {
     describe("#methods", function() {

      it('should return the menu display', function() {
        expect(new Mulligatawny().menuDisplay()).toEqual("Mulligatawny $7.50");
      });

    });
  });

  describe("SoupFactory", function() {
    describe("#methods", function() {

      it('should return Jambalaya for Newman', function() {
        expect(SoupFactory.serve({name: function() {return "Newman"}})).toEqual(new Jambalaya());
      });

      it('should return CrabBisque for George', function() {
        expect(SoupFactory.serve({name: function() {return "George"}})).toEqual(new CrabBisque());
      });

      it('should return Mulligatawny for Newman', function() {
        expect(SoupFactory.serve({name: function() {return "Elaine"}})).toEqual(new Mulligatawny());
      });

      it('should return LimaBean for Kramer', function() {
        expect(SoupFactory.serve({name: function() {return "Kramer"}})).toEqual(new LimaBean());
      });

    });
  });

});