function destroyer(arr) {
  // Remove all the values
  /* basic code
  var args = arr.slice.call(arguments);
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j <args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}
*/
  /* intermediate solution
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return arr;
  });
  */
  function isValid(val) {
    if (this == val) {
      return false;
    }
    else {
      return true;
    }
  }
  for (var i = 0; i < arguments.length; i++) {
      arr = arr.filter(isValid, arguments[i]);
    }
  return arr;

  /* test
    var target = arr.slice.call(arguments[0]);
  var check = Array.from(arguments).slice(1);
  var filtered = [];
  */
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
