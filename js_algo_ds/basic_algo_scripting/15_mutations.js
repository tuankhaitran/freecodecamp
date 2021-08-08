function mutation(arr) {
  var text = arr[0].toLowerCase();
  var check = arr[1].toLowerCase().split('');
  for (var i = 0; i < check.length; i++) {
      if (text.indexOf(check[i]) === -1) {
        return false;
      }
  }
  return true;
}

mutation(["hello", "hey"]);
