function addMark() {
  let newArr = Array.from(arguments);

  let newData = newArr.map(function (value) {
    return value + "!";
  });

  console.log(newData);
}

addMark(1, 2, 3, 4, 5);
