function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  // sorting by Unicode, use a compare function
  arr = arr.sort(function(a, b) {
    return a - b;
  });
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
     if (num > arr[i]) {
      index = i + 1;
    }
  }
  return index;
}

getIndexToIns([5, 3, 20, 3], 5);
