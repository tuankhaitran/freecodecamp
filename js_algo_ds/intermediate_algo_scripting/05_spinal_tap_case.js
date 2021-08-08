function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  function isUpperCase(letter) {
    return (letter >= 'A' && letter <= 'Z');
  }

  // i = 1 ignore first capital letter
  for (let i = 1; i < str.length; i++) {
    if (isUpperCase(str[i])) {
      if (str[i-1] == " ") {
        continue;
      } else {
        str = str.slice(0,i) + "-" + str.slice(i,str.length);
        i++;  // to count for "-"
      }
    }
  }
  str = str.toLowerCase();
  return str.replace(/[\W_]+/g, "-");
}

spinalCase('thisIsSpinalTap');
