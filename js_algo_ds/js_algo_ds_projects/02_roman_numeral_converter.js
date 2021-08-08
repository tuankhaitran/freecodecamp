function convertToRoman(num) {
  let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let romanReference = ["M","CM","D","CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let romanNum = "";
  for (let i = 0; i < decimalValue.length; i++) {
    while (num >= decimalValue[i]) {
      num -= decimalValue[i];
      romanNum += romanReference[i];
    }
  }
  return romanNum;
}

convertToRoman(36);
