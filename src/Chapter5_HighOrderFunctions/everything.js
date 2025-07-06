const everyLoop = (array, test) => {
  for (let index = 0; index < array.length; index++) {
    if (test(array[index]) == false) {
      return false
    } 
  }
  return true
}

const everySome = (array, test) => {
  return !array.some(element => !test(element))
}

console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everySome([1, 3, 5], n => n < 10));