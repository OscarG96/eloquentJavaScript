function countBs(string) {
  return countChar(string, 'B');
}

function countChar(string, char) {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === char) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC")); // → 2