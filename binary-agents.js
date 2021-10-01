function binaryAgent(str) {
  let binArr = str.split(" ");
  let decArr = [];
  for (let i = 0; i < binArr.length; i ++) {
    decArr.push(parseInt(binArr[i], 2));
  }
  let asciiArr = [];
  for (let i = 0; i < decArr.length; i++) {
    asciiArr.push(String.fromCharCode(decArr[i]));
  }
  return asciiArr.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));