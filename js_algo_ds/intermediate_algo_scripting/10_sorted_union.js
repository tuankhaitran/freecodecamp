function uniteUnique() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr = arr.concat(arguments[i]);
  }
  arr = Array.from(new Set(arr));
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
