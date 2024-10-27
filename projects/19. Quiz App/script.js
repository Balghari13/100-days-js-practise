// const quizData = [{
//   question: "Which of the following is a client site language?",
//   a: "Java",
//   b: "C",
//   c: "Python",
//   d: "JavaScript",
//   correct: "d",
// },
// {
//   question: "What does HTML stand for?",
//   a: "Hypertext Markup Language",
//   b: "Cascading Style Sheet",
//   c: "Jason Object Notation",
//   d: "Helicopters Terminals Motorboats Lamborginis",
//   correct: "a",
// },
// {
//   question: "What year was JavaScript launched?",
//   a: "1996",
//   b: "1995",
//   c: "1994",
//   d: "none of the above",
//   correct: "b",
// },
// {
//   question: "What does CSS stands for?",
//   a: "Hypertext Markup Language",
//   b: "Cascading Style Sheet",
//   c: "Jason Object Notation",
//   d: "Helicopters Terminals Motorboats Lamborginis",
//   correct: "b",
// }
// ];

// const questionBox = document.querySelector('#question')
// const options = document.querySelectorAll('.options')
// const submitBtn = document.querySelector('.submitBtn')
// let allInputs = document.querySelectorAll("input[type='radio']")


// let index = 0;
// let correct = 0;
//  let inCorrect = 0;
//    let total = quizData.length;
// function loadQuestion(){
//   if(total === index){
//     return quizEnd()
//   }
//   const data = quizData[index]
  
  
//   questionBox.innerText = `${index+1}) ${data.question}`
//   options[0].innerText = `${data.a}`
//   options[1].innerText = `${data.b}`
//   options[2].innerText = `${data.c}`
//   options[3].innerText = `${data.d}`
// }

// function getAns(){
//   let ans;
//   allInputs.forEach((inputElm)=>{
//     if(inputElm.checked){
//       ans = inputElm.value
//     }
//   })
//   return ans
// }

// function quizEnd(){
//   document.getElementsByClassName('container').innerHTML = `
//   <div class='col'>
//   <h3>Hii, you have scored ${correct}/${total}</h3>
//   </div>
//   `
// }

// submitBtn.addEventListener('click',()=>{
//   const data = quizData[index]
//   console.log(data.correct);
  
//   const ans = getAns()
//   if(ans === data.correct){
//     correct++
//   }else{
//     inCorrect++
//   }

//   index++
//   loadQuestion()
// })

// loadQuestion(index)


const quizData = [{
  question: "Which of the following is a client site language?",
  a: "Java",
  b: "C",
  c: "Python",
  d: "JavaScript",
  correct: "d",
},
{
  question: "What does HTML stand for?",
  a: "Hypertext Markup Language",
  b: "Cascading Style Sheet",
  c: "Jason Object Notation",
  d: "Helicopters Terminals Motorboats Lamborginis",
  correct: "a",
},
{
  question: "What year was JavaScript launched?",
  a: "1996",
  b: "1995",
  c: "1994",
  d: "none of the above",
  correct: "b",
},
{
  question: "What does CSS stands for?",
  a: "Hypertext Markup Language",
  b: "Cascading Style Sheet",
  c: "Jason Object Notation",
  d: "Helicopters Terminals Motorboats Lamborginis",
  correct: "b",
}
];

let questionBox = document.getElementById("question");
let allInputs = document.querySelectorAll("input[type='radio']")
const options = document.querySelectorAll('.options')
const submitBtn= document.querySelector('.submitBtn');

let index = 0;
let correct =0;
let inCorrect = 0;
let total = quizData.length


function loadQuestion(){
  if (total === index) {
    return quizEnd()
}
reset()
  const data = quizData[index]
  questionBox.innerText =`${index+1}) ${data.question}`
  options[0].innerText = data.a
  options[1].innerText = data.b
  options[2].innerText = data.c
  options[3].innerText = data.d
}

function checkAnswer(){
  let ans;

 allInputs.forEach((inputEl)=>{
    if(inputEl.checked){
      ans = inputEl.value
    }
  })

  
  return ans
  
}
const quizEnd = () => {
  // console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("container")[0].innerHTML = `
      <div class="col">
          <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
      </div>
  `
}

function reset(){
  allInputs.forEach((inputEL)=>{
    inputEL.checked = false
  })
}
submitBtn.addEventListener('click',()=>{

  const data = quizData[index]
  const answer = checkAnswer() 
   
  if(answer===data.correct){
    correct++
    console.log(correct);
    
  }else{
    inCorrect++
  }
  index++
  loadQuestion()
 
})

loadQuestion()