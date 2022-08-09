//weakset
//참조를 가지고 있는 객체만 저장 가능
//객체형태를 중복없이 저장하려고 할 때 유용함

let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let obj = { arr, arr2 };
let ws = new WeakSet();

ws.add(arr);
ws.add(arr2);
ws.add(obj);

arr = null;
arr2 = null;

console.log(ws);
console.log(ws.has(arr), ws.has(arr2));
