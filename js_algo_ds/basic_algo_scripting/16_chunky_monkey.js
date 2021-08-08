function chunkArrayInGroups(arr, size) {
  // Break it up.
  var containerArr = [];
  var j = 0;
  for (var i = 0; i < arr.length; i++ ) {
      if (i % size == 0)
         {
            containerArr.push(arr.slice(j, j +size));
         }
      j++;
  }
  return containerArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
