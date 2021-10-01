function addTogether() {
  if (Number.isInteger(arguments[0]) === true) {
    let first = arguments[0];
    if (Number.isInteger(arguments[1]) === true) {
      return arguments[0] + arguments[1];
    } else if (arguments.length === 1) {
      return function(x) {
        if (Number.isInteger(x) === true) {
          return x + first;
        }
        }
      }
    }
}


console.log(addTogether(2)(4));