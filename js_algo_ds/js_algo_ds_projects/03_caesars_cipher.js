function rot13(str) {
  var newArr = [];
  var newString;

  for (var i = 0; i < str.length; i++) {
    newArr[i] = str[i].charCodeAt();
    // range 65 - 90 for A-Z
    if (newArr[i] >= 65 && newArr[i] <= 90) {
        newArr[i] += 13;
        if (newArr[i] > 90) {
            newArr[i] = newArr[i] - 90 + 64;
        }
    }
    newArr[i] = String.fromCharCode(newArr[i]);
    newString = newArr.toString();
    newString = newString.replace(/,/g, "");
  }
  return newString;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
