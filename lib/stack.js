Stack = function(capacity) {
  DEFAULT_CAPACITY = 10;

  if (capacity != null) {
    this.availableCapacity = capacity;
  } else {
    this.availableCapacity = DEFAULT_CAPACITY;
  }

  this.position = this.availableCapacity - 1;
  this.storage = new Array(this.availableCapacity);

  //private functions
  this.grow = function() {
    var doubleStorage = new Array(this.storage.length * 2);
    var counter = doubleStorage.length - 1;
    for(var i = 0; i < this.storage.length; i++) {
      doubleStorage[counter] = this.storage[i];
      counter--;
    }
    var previousSize = this.size();
    this.storage = doubleStorage;
    this.availableCapacity = this.storage.length - previousSize;
    this.position = counter;
  };
};

Stack.prototype.capacity = function() {
  return this.availableCapacity;
};

Stack.prototype.push = function(obj) {
  if(this.availableCapacity == 0) {
    this.grow();
  }
  this.storage[this.position] = obj;
  this.position--;
  this.availableCapacity--;
};

Stack.prototype.pop = function() {
  var popIt = this.storage[this.position + 1];
  this.position++;
  this.availableCapacity++;
  return popIt;
};

Stack.prototype.size = function() {
  return this.storage.length - this.availableCapacity;
}