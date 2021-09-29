function smallestCommons(arr) {
  let orderedArr = [];
  if (arr[0] <= arr[1]) {
    orderedArr.push(arr[0], arr[1]);
  } else {
    orderedArr.push(arr[1], arr[0]);
  }
  
  let range = [];
  for (let i = orderedArr[0]; i < orderedArr[1] + 1; i++) {
    range.push(i);
  }
  
function primeFactors(n) {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

  let allPFactors = [];
  for (let i = 0; i < range.length; i++) {
    allPFactors.push(primeFactors(range[i]));
  }

  const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

  let pFactorFreq = [];  
  for (let i = 2; i < orderedArr[1] + 1; i++) {
    pFactorFreq.push([[i]]);
    for (let j = 0; j < allPFactors.length; j++) {
      if (allPFactors[j].indexOf(i) !== -1) {
        pFactorFreq[pFactorFreq.length -1].push(countOccurrences(allPFactors[j], i));

      }
    } 
  }
  let filtered = pFactorFreq.filter(x => x.length > 1);
  let primeF = filtered.map(x => x[0]);
  let primeOcc = [];
  for (let i = 0; i < filtered.length; i++) {
    filtered[i].shift();
    primeOcc.push(Math.max(...filtered[i]));
  }
  let finalArr = [];
  for (let i = 0; i < primeF.length; i ++) {
    finalArr.push(Math.pow(primeF[i][0], primeOcc[i]));
  }
  let final = 1;
  for (let i = 0; i < finalArr.length; i++) {
    final *= finalArr[i];
  }
  return final;
}


console.log(smallestCommons([2, 10]));