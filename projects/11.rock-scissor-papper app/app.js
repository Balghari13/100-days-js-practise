let userScore = 0
let compScore = 0

const choice = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')
const msgs = document.querySelector('.msg')
const userScores = document.querySelector('#user-score')
const compScores = document.querySelector('#comp-score')
choice.forEach((choices)=>{
  choices.addEventListener('click', ()=>{
    const userChoice = choices.getAttribute('id')
    playGame(userChoice)
  })
})

function getCompChoice(){
  const options = ['rock','scissors','paper']
  const randomIndex = Math.floor(Math.random()*3)
  return options[randomIndex]
}

function playGame(userChoice){
  const compChoice = getCompChoice()

  if(userChoice===compChoice){
    drawMatch()
  }else{
    let userWin = true;
    if(userChoice==='rock'){
       //scissors, paper
      userWin = compChoice==='paper'?false:true
    }else if(userChoice==='paper'){
      //rock, scissors
      userWin = compChoice==='scissors'?false:true
    }else{
       //rock, paper
      userWin = compChoice==='rock'?false:true
    }
    showWinner(userChoice, compChoice,userWin)
  }
}

function drawMatch(){
msg.innerText = `Match draw. Play again`
msgs.style.backgroundColor = "#081b31"
}

function showWinner(userChoice, compChoice,userWin){
if(userWin){
  userScore++
  userScores.innerText = userScore
 msg.innerText = `You Win ! Your ${userChoice} beats computer ${compChoice}`
  msgs.style.backgroundColor = 'green'
}else{
  compScore++
  compScores.innerText = compScore
  msg.innerText = `You lost ! Computer ${compChoice} beats your ${userChoice}`
  msgs.style.backgroundColor = 'red'
}
}