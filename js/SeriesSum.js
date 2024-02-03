function SeriesSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + 3 * i);
  }
  return sum.toFixed(2);
}

SeriesSum(5);
console.log(SeriesSum(5));
// Path: js/SumOfTheFirstNthTermOfSeries.js

function seriesSum(n) {
  if (n === 0) {
    return "0.00";
  } else {
    let sum = 0.0;
    for (let i = 0; i < n; i++) {
      sum += 1.0 / (1 + i * 3);
    }
    return sum.toFixed(2);
  }
}

console.log(seriesSum(1));  // "1.00"
console.log(seriesSum(2));  // "1.25"
console.log(seriesSum(5));  // "1.57"