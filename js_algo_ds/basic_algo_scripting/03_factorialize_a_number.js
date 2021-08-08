function factorialize(num) {
  var count = num;
  var total = 1;
  while (count >= 1)
    {
      total *= count;
      count--;
    }
  return total;
}

factorialize(5);
