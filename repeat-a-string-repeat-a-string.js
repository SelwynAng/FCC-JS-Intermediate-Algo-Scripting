function repeatStringNumTimes(str, num) {
  let arr = [];
  if (num < 0) {
    return "";
  } else {
    for (let i = 0; i < num; i++) {
      arr.push(str);
    }
    let concen = arr.join("");
    return concen;
  }
}

console.log(repeatStringNumTimes("abc", 3));