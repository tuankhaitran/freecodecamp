function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.concat(arr2);
  newArr = newArr.sort();    // will also sort by datatypes
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i+1]) {
      delete newArr[i];
      delete newArr[i + 1];
    }
  }
  // Same, same; but different.
  return newArr.filter(val => {return val != false;})
  ;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
