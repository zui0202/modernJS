var data = [1, 2, undefined, NaN, null, ""];

Array.prototype.getIndex = function () {};

for (let val of data) {
  console.log(val);
}

var str = "hello world!";
for (let val of str) {
  console.log(val);
}
