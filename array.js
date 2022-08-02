function print() {
  let list = document.querySelectorAll("li");
  let listArr = Array.from(list);
  let eArr = listArr.filter(function (v) {
    return v.innerText.includes("e");
  });
  return eArr;
}

console.log(print());
