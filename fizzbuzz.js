function fizzbuzz(n) {
  let numbersArray = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbersArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      numbersArray.push("Fizz");
    } else if (i % 5 === 0) {
      numbersArray.push("Buzz");
    } else {
      numbersArray.push(i);
    }
  }

  return numbersArray;
}

console.log(fizzbuzz(30));
