function binaryAgent(str) {
  let binaryArr = [];
  let decimal = 0;
  binaryArr = str.split(" ");
  for (let i = 0; i < binaryArr.length; i++) {
    for (let j = 0; j <= binaryArr[i].length; j++) {
      if (binaryArr[i][j] === "1") {
        decimal += Math.pow(2, 7 - j);
      }
    }
    binaryArr[i] = decimal;
    binaryArr[i] = String.fromCharCode(binaryArr[i]);
    decimal = 0;
  }

  binaryArr = binaryArr.join("");
  return binaryArr;
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
