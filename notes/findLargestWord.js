/////////////////////////////////////////////
//Q.1
//write a function that return the largest word
//if empty or whitespace return false
//should ignore loading and trailing whitespace when determining largest word/

console.log('sorting and find largest word');
//find by sort method
function findLargestWord(str){
  if(str.trim().length===0){
   return false;
  }
   //sort() --> sort by unicode -- 
    let words = str.split(' ')
    //accending order
   //  words.sort((a,b)=>a.length-b.length) 
   //  console.log(words);
   //  return words.at(-1) 
    //console.log(words[words.length-1]);
 
    //desecending order
     words.sort((a,b)=>b.length-a.length)
    // console.log(words);
      return words[0]
 }
 
//find by reduced method
function findLargestWordByReduce(str){
  if(str.trim().length===0){
   return false
  }
  let words = str.split(' ')
  return words.reduce((accum,currWord)=> (currWord.length>accum.length? currWord: accum), '')
}
console.log(
findLargestWord('Match thapa najam saqib Watch java Javascript') 
)
console.log(findLargestWordByReduce('Match thapa najam saqib Watch java Javascript typescriptss'));
