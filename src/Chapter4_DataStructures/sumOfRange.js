function range(start, end, step = 1) {
  let result = []

  //does not work 
  // if (start > end) {
  //   while (start >= end) {
  //     result.push(start)
  //     start -= step
  //   }
  //   return result
  // }
  
  while (start <= end) {
    result.push(start)
    start += step
  }

  return result
  
}

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result
}

console.log(range(5,2, -1))
// console.log(sum(range(1,10)))