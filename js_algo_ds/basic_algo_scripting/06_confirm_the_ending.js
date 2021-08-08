function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
    var newArr = [];
    newArr = str;
    var targetLen = target.length;
    if (newArr.substring(newArr.length - targetLen) == target) {
      return true;
    }
    else {

      return false;
    }
}

confirmEnding("Bastian", "n");
