function home() {
  const list = ["apple", "orange", "watermelon"];
  list.push("banana");
  console.log(list);
  // const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것 가능함
}

//immutable array
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list, list2);
console.log(list === list2);
