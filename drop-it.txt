function dropElements(arr, func) {
  let copy = arr.map(x => x);
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === false) {
      copy.splice(i, 1, null);
    } else {
      break;
    }
  }
  let filtered = copy.filter(x => x !== null);
  return filtered;
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))