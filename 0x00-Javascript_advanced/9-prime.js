let prime = true;
let count = 0;

function countPrimeNumbers() {
  let num;

  for (let i = 2; i < 101; i++) {
    for (i = 2; i < num; i++) {
      if (num % i == 0) {
        prime = false;
        break;
      } else {
        count++;
      }
    }
  }

  return count;
}

let start = performance.now();
for (let i = 1; i <= 100; i++) {
  countPrimeNumbers();
}
let end = performance.now();

console.log(
  `Execution time of printing countPrimeNumbers was ${
    start - end
  } milliseconds.`
);
