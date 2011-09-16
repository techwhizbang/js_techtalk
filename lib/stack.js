Stack = function(capacity) {
    this.capacity = 10;
    this.total = 0;
    this.storage = [];
    if(capacity != null) {
        this.capacity = capacity;
    }

}

Stack.prototype.push = function(item) {
    this.storage[this.size()] = item;
    this.total++;
}

Stack.prototype.size = function() {
    return this.total;
}