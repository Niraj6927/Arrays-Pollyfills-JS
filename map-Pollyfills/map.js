// ArrayConstructor.prototype
Array.prototype.myMap = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    const value = cb(this[i], i, this);
    result.push(value);
  }

  return result;
};

const arr = [1, 2, 3, 4, 5];

const res = arr.myMap((num) => {
  return num * 5;
});

console.log(res);
