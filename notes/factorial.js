console.log('=======================');

console.log('find factorials');

function factorials(num){
  let fact = 1;
  for(let i=1; i<=num; i++){
    fact = fact*i;
  }
  return fact;
}


console.log(factorials(6));
console.log(factorials(5));
console.log(factorials(0));
console.log(factorials(3));
console.log(factorials(8));