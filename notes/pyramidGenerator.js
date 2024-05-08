
// pyramid generator

console.log('pyramid generator');
const character = '#';
const count = 8;
const rows = [];

for(let i=1; i<=count; i++){
  rows.push(podRow(i, count))
}
//console.log(rows);
let results = '';

for(const row of rows){
  results = results+ '\n' +row 
}
console.log(results);

function podRow(rowNumber, rowCount){
  return ' '.repeat(rowCount-rowNumber) + character.repeat(2 *rowNumber-1) + ' '.repeat(rowCount-rowNumber)
}
