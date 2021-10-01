/*Using the concept of recursion (function calls upon itself)*/


function steamrollArray(arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === false) {
      flatArr.push(arr[i]);
    } else if (Array.isArray(arr[i]) === true) {
      flatArr = flatArr.concat(steamrollArray(arr[i]));
    }
  }   
  return flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));