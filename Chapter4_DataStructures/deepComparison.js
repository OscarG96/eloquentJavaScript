const deepComparison = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object") return false;
  let keys1 = Object.keys(obj1), keys2 = Object.keys(obj2)
  if (keys1.length != keys2.length) return false;
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepComparison(obj1[key], obj2[key])) return false;
  }
  return true;
}

console.log(deepComparison(
  {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}, 
  {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}))
console.log(deepComparison({value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}, {value: 1, rest: {value: 2, rest: {value: 3, rest: {value: 4, rest: null}}}}))