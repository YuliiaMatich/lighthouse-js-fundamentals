function range(start, end, step) {
  if (start === undefined|| end === undefined || step === undefined) {
    return [];
  }
  if (start > end || step <= 0) {
    return [];
  }
let array = [];
for (let i = start; i <= end; i = i + step){
  array.push(i);
}
return array;
}

console.log(range(0, 10, 2));
// [ 0, 2, 4, 6, 8, 10 ]
console.log(range(10, 30, 5));
// [ 10, 15, 20, 25, 30 ]
console.log(range(-5, 2, 3));
// [ -5, -2, 1 ]
console.log(range(10,1,2))