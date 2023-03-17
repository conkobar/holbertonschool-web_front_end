let count = 0;
let prime = true;

function countPrimeNumbers() {
  for (let i = 2; i < 101; i++) {
    for (let j = 2; j < i; j++) {
      prime = true;
      if (i % j == 0) {
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
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
let end = performance.now();

console.log(
  `Execution time of printing countPrimeNumbers was ${
    end - start
  } milliseconds.`
);
