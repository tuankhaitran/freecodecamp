function repeatStringNumTimes(str, num) {
  // repeat after me
  var arr = [];
  if (num < 0)
    return str = "";
  for (var i = 1; i <= num; i++) {
    arr += str;
  }
  return arr;
}

repeatStringNumTimes("abc", 3);
