function sumFibs(num) {
  let fibArr = [1, 1];
  let start = 1;
  for (let i = 0; i < num; i++) {
    if (start === (fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2])) {
      fibArr.push(start);
    }
    start++;
  }

  function checkOdd(arr) {
    return arr.filter(x => x % 2 === 1);
  }
  
  let filtered = checkOdd(fibArr);
  let sum = 0;
  for (let i = 0; i < filtered.length; i++) {
    sum += filtered[i];
  }
  return sum;
}

console.log(sumFibs(4));