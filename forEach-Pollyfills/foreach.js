// ArrayConstructor.prototype
Array.prototype.myforEach = function (cb) {
    console.log("this", this)
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

const arr = [1, 2, 3, 4, 5];
const res = arr.myforEach((elem) => {
  console.log(elem);
});
