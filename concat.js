
function concat (array1, array2) {
  let resultArray = [];
  for (let i = 0; i < array1.length; i++) {
    resultArray.push[array1[i]];
    for (let j=0; j < array1.length; j++){
      resultArray.push(array2[j]);
    }
  }
  return resultArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]))