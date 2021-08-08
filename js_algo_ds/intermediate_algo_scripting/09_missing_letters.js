function fearNotLetter(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let start = 0;
  if (str.length === 26) {
    return undefined;
  }

  for (let i = 0; i < alpha.length; i++) {
    if (str[0] === alpha[i]) {
      start = i;
      for (let j = 0; j < str.length; j++) {
        if (str[j] !== alpha[start]) {
          return alpha[start];
        }
        start++;
      }
    }
  }

}

fearNotLetter("bcdf");
