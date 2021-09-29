function myReplace(str, before, after) {
  const arr = str.split(" ");
  let lowerBefore = function(ran) {
    return ran.toLowerCase();
  }
  let upperBefore = function(ran) {
    return ran.charAt(0).toUpperCase() + ran.slice(1);
  }
  
  let filArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === lowerBefore(before)) {
      filArr.push(arr[i]);
      filArr.push(i);
    } else if (arr[i] === upperBefore(before)) {
      filArr.push(arr[i]);
      filArr.push(i);
    }
  }

  function isUpper(str) {
    return /[A-Z]/.test(str);
  }
  if (isUpper(filArr[0]) === true) {
    let upperAfter = after.charAt(0).toUpperCase() + after.slice(1);
    arr.splice(filArr[1], 1, upperAfter);
    return arr.join(" ");
  } else {
    let loweredAfter = after.charAt(0).toLowerCase() + after.slice(1);
    arr.splice(filArr[1], 1, loweredAfter);
    return arr.join(" ");
  }
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));