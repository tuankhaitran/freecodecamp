function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = []; // store non-falsy values
  var j = 0;       // index for newArr
  // look at the whole array
  for (var i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) == false) {  // falsy values to ""
      arr[i] ="";
    }
    else {        // truthy values store into new array
      newArr[j] = arr[i];
      j++;
    }
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]) ;
