const SETTING = {
  name: "Lucky Lotto!",
  count: 6,
  maxNumber: 45,
};

function getSingleNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
}

function getLottoNum() {
  let numSet = new Set();
  let { count, maxNumber } = SETTING;

  while (numSet.size !== count) {
    let num = getSingleNum(1, maxNumber);
    if (!numSet.has(num)) numSet.add(num);
  }

  return [...Array.from(numSet).sort((a, b) => a - b)];
}

console.log(getLottoNum());
