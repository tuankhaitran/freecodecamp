function addTogether() {
  let sum = 0;

  let isNum = function (num) {
     if (Number.isInteger(num)) {
       return num;
     } else {
       return undefined;
     }
  }

  if (arguments.length === 2) {
    for (let i = 0; i < arguments.length; i++) {
      if (isNum(arguments[i])) {
        sum += isNum(arguments[i]);
      } else {
        return undefined;
      }
    }
    return sum;
  }

  if (arguments.length === 1) {
    var a = arguments[0];
    if (!isNum(a)) {
      return undefined;
    } else {
      return function (b) {
        if (!isNum(b)) {
          return undefined;
        } else {
          return a + b;
        }
      }
    }
  }
}

addTogether(2, 3);
