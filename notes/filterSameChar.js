console.log('========================');

console.log('filter array element having same char');


const months = ['march','april', 'May', 'june', 'july'];


const filterMonth = months.filter((month)=>{
  return month.toLocaleLowerCase().includes('m')
})

const filterIndex = months.filter((month,index)=> index>2)

console.log(filterMonth);
console.log(filterIndex);

console.log('============');
console.log('filter name by age');

const students = [
  {
    name: 'najam',
    age: 25
  },
  {
    name: 'ali',
    age: 12
  },
  {
    name: 'wasem',
    age: 15
  },
  {
    name: 'sajib',
    age: 28
  },
  {
    name: 'saqib',
    age: 29
  },
  {
    name: 'sai,',
    age: 17
  },
]

const filter = students.filter((student)=>{
  return student.age>18
}).map((student)=>student.name)

console.log(filter);