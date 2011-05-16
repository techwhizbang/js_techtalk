Stack = function(maxItems) {
data = new Array(maxItems ? maxItems : 10);
curIndex = -1;
this.capacity = function() {
return data.length - this.size();
}
this.push = function(item) {
if (curIndex >= data.length-1) {
this.grow();
}

data[++curIndex] = item;
}
this.pop = function() {
if (curIndex == -1) return undefined;
return data[curIndex--];
}
this.size = function() {
return curIndex + 1;
}
this.grow = function() {
doubled = new Array(data.length * 2);
for (var i=0; i < data.length; i++) {
doubled[i] = data[i];
}
data = doubled;
}
}
