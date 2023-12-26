// ArrayConstructor.prototype
Array.prototype.myFilter = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const arr = [2, 3, 4, 5];
const data = arr.myFilter((num) => {
  return num > 2;
});
console.log("resultnumber", data);
