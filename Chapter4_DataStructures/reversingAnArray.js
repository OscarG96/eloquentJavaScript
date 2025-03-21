function reverseArray(array) {
  let newArr = []

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArr.unshift(element)
  }

  return newArr
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray([1,2,3,4]))
console.log(reverseArrayInPlace([1,2,3,4]))