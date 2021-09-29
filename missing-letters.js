function fearNotLetter(str) {
  let arr = str.split("");
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let startingpt = alpha.indexOf(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alpha[startingpt + i]) {
      return alpha[startingpt + i];
    }
  }
  return undefined;
}

console.log(fearNotLetter("efgijk"));