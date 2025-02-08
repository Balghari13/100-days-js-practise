console.log('===================================')

/*
write a Js program to check 2 number & return true if one of number is 100 or if sum of 2 number is 100
*/

function sumOf2(a,b){
if(a==100||b==100 || a+b===100){
 console.log('true');
 
}else{
  console.log('false');
  
}
}
sumOf2(95,5)
//arrow method
const sumOftwo = (a,b)=> a===100 || b===100 || (a+b)===100
console.log(sumOftwo(5,95));

//get filname extension
const getFileNameExtension = (str)=> str.slice(str.lastIndexOf('.'))
console.log(getFileNameExtension('pk.html'));

//replace char with next char
const moveCharForward = (str) => {
  return str.split('')
  .map((char)=>String.fromCharCode(char.charCodeAt(0)+1))
  .join('')
}
console.log(moveCharForward("abce"));

//current date
const currentDate = (date= new Date()) =>{
  const days = date.getDate() + 1;
  const months = date.getMonth() +1;
  const year = date.getFullYear();
  return `${days}/${months}/${year}`
}
console.log(currentDate());

//add new in given string if already exist than not
const addNew = (str) => str.indexOf('New!')===0 ? str : `New! ${str}`

console.log(addNew('New! offer'));
