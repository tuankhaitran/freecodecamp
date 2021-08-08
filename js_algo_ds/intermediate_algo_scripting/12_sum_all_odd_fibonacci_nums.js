function sumFibs(num) {
  let sumOdd = 2; // includes first two Fibs
  let firstFib = 1;
  let secondFib = 1;
    for (let sumFibon = 0; sumFibon <= num;) {
      sumFibon = firstFib + secondFib;
      firstFib = secondFib;
      secondFib = sumFibon;
      if (sumFibon % 2 == 1) {
        if (sumFibon <= num) {
          sumOdd += sumFibon;
          console.log(sumOdd);
          }
      }
    }
    return sumOdd;
}
sumFibs(1000);
