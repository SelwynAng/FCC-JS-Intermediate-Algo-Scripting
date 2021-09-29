function uniteUnique(arr) {
  let combArr = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j< arguments[i].length; j++) {
      combArr.push(arguments[i][j]);
    }
  }

let finalArr = [];
  for (let k = 0; k < combArr.length; k++) {
    if (finalArr.indexOf(combArr[k]) === -1) {
      finalArr.push(combArr[k]);
    }
  }
  return finalArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));