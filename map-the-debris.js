function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let numer = [];
  for (let i = 0; i < arr.length; i++) {
    numer.push(Math.pow(earthRadius + arr[i].avgAlt, 3));
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].orbitalPeriod = 2*Math.PI*Math.pow(numer[i] / GM, 0.5);
    arr[i].orbitalPeriod = Math.round(arr[i].orbitalPeriod);
  }
  for (let i = 0; i < arr.length; i++) {
    delete arr[i].avgAlt; 
  }
  return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));