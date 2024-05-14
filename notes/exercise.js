console.log('=======================================');
console.log('=======================================');
console.log('=======================================');
console.log('check two arrays are equal or not');


function arrayAreEqual(ar1, ar2){

    if(ar1.length != ar2.length){
      return false
    } 
    return ar1.every((curVal,index)=>curVal===ar2[index])
  
}

console.log(arrayAreEqual([1,2,3],[1,2,3]));
console.log(arrayAreEqual([1,2,3],[1,2,4]));
console.log(arrayAreEqual([],[]));
console.log(arrayAreEqual(['a','b'],['b','a']));

