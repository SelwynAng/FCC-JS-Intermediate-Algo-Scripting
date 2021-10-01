var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
let fullName = firstAndLast;
this.getFirstName = function() {
  return fullName.split(" ")[0];
}
this.getLastName = function () {
  return fullName.split(" ")[1];
}
this.getFullName = function() {
  return fullName;
}
this.setFirstName = function(first) {
  return fullName = first + " " + fullName.split(" ")[1];
}
this.setLastName = function(last) {
  return fullName = fullName.split(" ")[0] + " " + last;
}
this.setFullName = function(firstAndLast) {
  return fullName = firstAndLast;
}
};

var bob = new Person('Bob Ross');
console.log(bob.setFirstName("China"));
console.log(bob.getLastName());