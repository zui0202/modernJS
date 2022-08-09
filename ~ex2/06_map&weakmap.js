//map & weakmap
//array -> set, weakset
//object -> map, weakmap

//map은 key/value
let wm = new WeakMap();
let myfun = function () {};

wm.set(myfun, 0);

//console.log(wm);

let count = 0;
for (let i = 0; i < 10; i++) {
  count = wm.get(myfun);
  count++;
  wm.set(myfun, count);
}

console.log(wm.get(myfun));
myfun = null;
console.log(wm.has(myfun));
