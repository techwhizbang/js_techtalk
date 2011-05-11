BaseSoup = function() {
  name = "simple soup";
  price = "$7.00";
  ingredients = ["water", "salt", "mirepoix"];
};

BaseSoup.prototype.menuDisplay = function() {
  return name.concat(" ").concat(price);
};

CrabBisque = function() {
  BaseSoup.call(this);
  name = "Crab Bisque";
  ingredients = ["salt", "mirepoix", "heavy cream", "crab", "butter", "leeks", "pepper", "tomato paste"];
  price = "$8.00";
};

CrabBisque.prototype = new BaseSoup;
CrabBisque.prototype.constructor = CrabBisque;
CrabBisque.prototype.parent = BaseSoup.prototype;

CrabBisque.prototype.description = function() {
  return "Delicious crab in a rich cream broth";
};

// The properties here are intentionally made visible to the public
Jambalaya = function() {
  this.name = "Jambalaya";
  this.price = "$7.50";
  this.ingredients = ["salt", "tomatoes", "shrimp", "andouile sausage", "rice", "cumin", "cayenne pepper"];
}

Jambalaya.prototype = new BaseSoup;
Jambalaya.prototype.constructor = Jambalaya;
Jambalaya.prototype.parent = BaseSoup.prototype;

// Must override because the properties are different than the super object BaseSoup
Jambalaya.prototype.menuDisplay = function() {
  return this.name.concat(" ").concat(this.price);
};


Mulligatawny = function() {
  name = "Mulligatawny";
  price = "$7.50";
  ingredients = ["salt", "garlic", "cumin", "tumeric", "cinnamon", "curry", "lentils"];
};
Mulligatawny.prototype = new BaseSoup;
Mulligatawny.prototype.constructor = Mulligatawny;
Mulligatawny.prototype.parent = BaseSoup.prototype;

LimaBean = function() {
  name = "Lima Bean";
  price = "$7.50";
  ingredients = ["salt", "lima beans", "water"];
};
LimaBean.prototype = new BaseSoup;
LimaBean.prototype.constructor = LimaBean;
LimaBean.prototype.parent = BaseSoup.prototype;

SoupFactory = (function() {
  return {
    serve: function(person) {
      switch (person.name()) {
        case "Newman":
          return new Jambalaya();
        case "George":
          return new CrabBisque();
        case "Elaine":
          return new Mulligatawny();
        default:
          return new LimaBean();
      }
    }
  }

})();