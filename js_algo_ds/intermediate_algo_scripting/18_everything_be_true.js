function truthCheck(collection, pre) {
  // Is everyone being true?
  for (let i = 0; i < collection.length; i++) {
    if(collection[i].hasOwnProperty(pre) && collection[i][pre]) {
    } else {
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
