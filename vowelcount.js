function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

console.log(`Result: ${getCount("gabriel")}`);
