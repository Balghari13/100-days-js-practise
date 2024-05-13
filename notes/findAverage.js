console.log('================================================');
console.log('find average');


function findAverage(num){
  let numL = num.length;
     num = num.reduce((accum,curElm)=> ((accum+curElm)))
    
    return num/numL;
}

console.log(findAverage([5,10,2,8]));