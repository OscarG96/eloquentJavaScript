const arrayToList = (array) => {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list}
  }
  return list
}

const listToArray = (list) => {
  let array = []
  for (let node = list; node; node = node.rest) {
    array.push(node.value)
  }
  return array
}

const prepend = (value, list) => {
  return {value, rest: list}
}

const nth = (list, n) => {
  if (!list) return undefined
  else if (n === 0) return list.value
  else return nth(list.rest, n - 1)
}

const mylist = arrayToList([1,2,3])
console.log(mylist)
console.log(listToArray(mylist))
console.log(prepend(0, mylist))
console.log(nth(mylist, 1))