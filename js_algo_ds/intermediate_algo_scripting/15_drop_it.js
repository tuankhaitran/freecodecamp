function dropElements(arr, func) {
  // Drop them elements.
  let i = 0;
  while (!func(arr[i])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
