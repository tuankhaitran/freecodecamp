function reverseString(str) {
  var array = str.split("");
  var reversedArray = array.reverse();
  var joinedArray = reversedArray.join("");
  str = joinedArray;
  return str;
}

reverseString("hello");
