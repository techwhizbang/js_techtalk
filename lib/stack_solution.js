Stack = function(capacity) {
  DEFAULT_CAPACITY = 10;

  if (capacity != null) {
    availableCapacity = capacity;
  } else {
    availableCapacity = DEFAULT_CAPACITY;
  }

  position = availableCapacity - 1;
  storage = new Array(this.availableCapacity);

  //made public for easier testing
  this.grow = function() {
    var doubleStorage = new Array(storage.length * 2);
    var counter = doubleStorage.length - 1;
    for(var i = 0; i < storage.length; i++) {
      doubleStorage[counter] = storage[i];
      counter--;
    }
    var previousSize = this.size();
    storage = doubleStorage;
    availableCapacity = storage.length - previousSize;
    position = counter;
  };
};

Stack.prototype.capacity = function() {
  return availableCapacity;
};

Stack.prototype.push = function(obj) {
  if(availableCapacity == 0) {
    this.grow();
  }
  storage[position] = obj;
  position--;
  availableCapacity--;
};

Stack.prototype.pop = function() {
  var popIt = storage[position + 1];
  position++;
  availableCapacity++;
  return popIt;
};

Stack.prototype.size = function() {
  return storage.length - availableCapacity;
}