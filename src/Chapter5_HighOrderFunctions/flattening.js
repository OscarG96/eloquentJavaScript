const flatten = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    // logic here
    return accumulator.concat(currentValue)
  }, []);
}

console.log(flatten([[1, 2, 3], [4, 5], [6]])); // [1, 2, 3, 4, 5, 6, 7]