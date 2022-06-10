function calculateRectangleArea(length, width){
  let Rectangle = "";
  if (length >=0 && width >= 0){
  Rectangle = length * width;
  return Rectangle;
  }else {undefined}
}

function calculateTriangleArea(base, height){
  let triangle = "";
  if (base >=0 && height>=0) {
    triangle = base * height / 2;
    return triangle;
  } else {undefined}
}

function calculateCircleArea(radius){
  if (radius >=0){
  let circle = Math.PI * radius * radius;
  return circle; 
  }else {undefined}
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined