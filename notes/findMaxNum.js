console.log('======================');
console.log('find Max number');

// function findMaxNum(number){
//   number.sort((a,b)=>b-a)
//   return number[0]

// }

function findMaxNum(number){
  console.log(...number);
  return Math.max(...number)
}

console.log(findMaxNum([1,2,5,6,3,8,4]));
console.log(findMaxNum([-10,-5, -3, -9,-1,-8]));
console.log(findMaxNum([5]));
console.log(findMaxNum([-3,-5,0,10,3,9,-19]));