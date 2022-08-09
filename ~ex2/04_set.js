let mySet = new Set();
console.log(toString.call(mySet));

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

mySet.forEach(function (v) {
  console.log(v);
});
