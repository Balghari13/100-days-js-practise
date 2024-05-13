console.log('============================');
console.log('sort ascending order');

function sortAscending(number){
    return number.sort((a,b)=>a-b)
}

console.log(sortAscending([2,10,15,3,6,2,0,1,9]));
 