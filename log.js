function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(BigInt(factorial(100)));

function factorial2(n) {
  let i,
    result = BigInt(1);
  for (i = BigInt(2); i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial2(100));
