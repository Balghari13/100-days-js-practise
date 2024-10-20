
const span = document.querySelector('span')

const wordList = ['Developer','coder','teacher']
const word = 'Developer'

let characters = 0;
let reverseType = false;
let wordIndex = 0;
let skipUpdate = 0;

const intervalId = setInterval(()=>{
  if(skipUpdate){
    skipUpdate--
    return
  }
  if(!reverseType){
    skipUpdate= 2;
    span.innerText = span.innerText + wordList[wordIndex][characters]
    characters++
    
    // console.log(characters);
  }else{
    span.innerText = span.innerText.slice(0,span.innerText.length-1)
    characters--
  }
  if(characters === wordList[wordIndex].length){
    skipUpdate = 5
    reverseType= true
  }
if(span.innerText.length===0 && reverseType){
  // characters = 0
  reverseType= false
  wordIndex++
}

 

  if(wordIndex === wordList.length){
    wordIndex = 0
  }

  // if(characters === word.length){
  //   return clearInterval(intervalId)
  // }
 
},100)


