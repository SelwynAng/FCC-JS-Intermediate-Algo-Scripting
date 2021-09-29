function pairElement(str) {
  const oriArr = str.split("");
  let unpairedArr = oriArr.map(x => [x]);
  for (let i = 0; i < unpairedArr.length; i ++) {
    if (unpairedArr[i].includes('G') === true) {
      unpairedArr[i].push('C');
    } else if (unpairedArr[i].includes('C') === true) {
      unpairedArr[i].push('G');
    } else if (unpairedArr[i].includes('A') === true) {
      unpairedArr[i].push('T');
    } else if (unpairedArr[i].includes('T') === true) {
      unpairedArr[i].push('A');
    }
  }
  return unpairedArr;
}

console.log(pairElement("GCG"));