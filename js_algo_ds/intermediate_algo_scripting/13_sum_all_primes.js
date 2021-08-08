function sumPrimes(num) {

  let isPrime = true;
  let sumPrime = 0;

  // Sum all the prime numbers up to and including the provided number
  for (num; num >= 2; num--)
    {
    if (num === 1)       // 1 is not prime number
    {
      isPrime = false;
    }
    else if (num === 2)   // 2 is prime number
    {
      sumPrime += num;
    } else
    { // check if prime number
      for(var x = 2; x < num; x++)
      {
        if(num % x === 0)
        {
          isPrime = false;
        }
      }
      if (isPrime === true) {
        sumPrime += num;
      }
      isPrime = true;   // reset bool value
    }
  }
  return sumPrime;
}

sumPrimes(10);
