
const num = document.querySelector('.num')
const result = document.querySelector('.result')
const allGusses = document.querySelector('.allGusses')
const submit = document.querySelector('.submit')

const newGame = document.querySelector('.newGame')

const formData = document.querySelector('form')

let randomNum = Math.round(Math.random()*100)
let allGussesNum =[]

formData.addEventListener('submit',(e)=>{
  e.preventDefault()
  let userNum = num.value

  if(userNum>randomNum){
result.innerText = "Your guess is too high"
  }else if(randomNum>userNum){
    result.innerText = 'Your guess is too low'
  }else{
    result.innerText = 'You got it Congrats !'
  submit.disabled = true
  newGame.disabled = false
  }

  allGussesNum.push(userNum)
  allGusses.innerText = `Your all guesses : ${allGussesNum}`
  
  formData.reset()
//  num.value=''
})

newGame.addEventListener('click',()=>{
  result.innerText = ''
  allGusses.innerText= ''
  submit.disabled = false
  newGame.disabled = true
  randomNum = Math.round(Math.random()*100)
})
