const longestConsec = (starr, k) => {
  let n = starr.length;
  let combinationsArray = [];

  if (n == 0 || k > n || k <= 0) return "";

  for (let i = 0; i < n - k + 1; i++) {
    let combination = "";
    for (let j = i; j < i + k; j++) {
      combination = combination + starr[j];
    }
    combinationsArray.push(combination);
  }

  let longestString = "";
  for (i = 0; i < combinationsArray.length; i++) {
    if (combinationsArray[i].length > longestString.length) {
      longestString = combinationsArray[i];
    }
  }
  return longestString;
};

let array = ["hello", "thomas", "gabriel", "remy", "eloise", "jeanne"];
console.log(longestConsec(array, 3));
