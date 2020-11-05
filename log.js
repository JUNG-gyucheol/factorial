// const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(60));

function factorial2(n) {
  let arr = [];
  let i, j, r, cnt;
  arr[0] = 1;
  r = 0;
  cnt = 1;
  for (i = 2; i <= n; i++) {
    j = 0;
    for (r = 0; j < cnt; j++) {
      console.log(cnt);
      console.log(arr[j] + "*" + i + "+" + r + "=" + (arr[j] * i + r));
      r += arr[j] * i;
      arr[j] = r % 10;
      r = parseInt(r / 10);
    }
    while (r) {
      arr[cnt++] = r % 10;
      r = parseInt(r / 10);
    }
  }
  console.log(arr.reverse().join(""));
}
factorial2(20);
