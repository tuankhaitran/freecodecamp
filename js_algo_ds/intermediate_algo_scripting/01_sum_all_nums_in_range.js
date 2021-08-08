function sumAll(arr) {
  arr.sort(function(a,b) {
    return a - b;
  })
  let difference = arr[1] - arr[0];
  let sumBetween = 0;
  for (let i = 1; i < difference; i++) {
    sumBetween += arr[1] - i;
  }

  return sumBetween + arr[0] + arr[1];
}

sumAll([1, 4]);
