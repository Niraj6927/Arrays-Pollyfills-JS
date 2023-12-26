// ArrayConstructor.prototype
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const arr = [1, 2, 3, 4, 5];

const res = arr.myReduce((acc, curr) => {
  return (acc += curr);
}, 0);

console.log(res);
