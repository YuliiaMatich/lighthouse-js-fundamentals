function lastIndexOf (array, value) {
  if (array.length === 0 || !array.includes(value)) {
    return -1;
  }
  let arrInd = 0;
  for (let i = array.length-1; i >=0 ; i--) {
    if (array[i] === value) {
      return i;
      break
    }  else if (array[i] !== value) {
      return -1;
    }
  }
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);




function lastIndexOf (array, value) {
  if (array.length === 0) {
    return -1;
  }
  return array.lastIndexOf(value);
}