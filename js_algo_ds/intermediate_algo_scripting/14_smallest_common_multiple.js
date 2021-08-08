function smallestCommons(arr) {
  let newArr = [];
  arr.sort(function(a,b){return a-b;})

  for (arr[0]; arr[0] <= arr[1]; arr[0]++) {
    newArr.push(arr[0]);
  }
  newArr.sort(function(a,b){return b-a;})

  function gcd(a, b) {return !b ? a: gcd(b,a %b);}

  function lcm(a,b) {return (a * b) /gcd(a, b);}

  var multiple = newArr[0];
  newArr.forEach(function(n) {
    multiple = lcm(multiple, n);
  });
  return multiple;
}
smallestCommons([1,13]);
