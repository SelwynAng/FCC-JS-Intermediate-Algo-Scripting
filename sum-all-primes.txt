function sumPrimes(num) {
  let arr = [];
  let start = 1;
  for (let i = 0; i < num; i++) {
    arr.push(start);
    start++;
  }
  arr.shift();
  let comArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] % arr[j] === 0 && arr[i] !== arr[j]) {
        comArr.push(arr[i]);
      }
    }
  }

  function getUnique(array){
        let uniqueArray = [];
        for(let j = 0; j < array.length; j++){
            if(uniqueArray.indexOf(array[j]) === -1) {
                uniqueArray.push(array[j]);
            }
        }
        return uniqueArray;
    }
  let nonDupComArr = getUnique(comArr);
  
  let comSum = nonDupComArr.reduce(function(a, b){
        return a + b;
    }, 0);
  let totalSum = arr.reduce(function(a, b){
        return a + b;
    }, 0);
  return totalSum - comSum;
}

console.log(sumPrimes(17));