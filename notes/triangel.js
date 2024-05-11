console.log('=======================');

console.log('check given angle are which triangle');


function checkTriangle(a,b,c){
  if(a===b && b===c) return 'Is a equilateral as all have same angle';
  if(a===b || b===c || c===a) return 'Is a isosceles triangle as two have at least same'
  return 'scalene as no angle match'
}


console.log(checkTriangle(22,22,22));
console.log(checkTriangle(22,2,22));
console.log(checkTriangle(221,2,122));