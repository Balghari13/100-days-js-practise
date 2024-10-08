const count = document.querySelector('.count')
const inc = document.querySelector('.inc')
const dec = document.querySelector('.dec')
const reset = document.querySelector('.reset')
const input = document.querySelector('input')

console.log(input);


inc.addEventListener('click',()=>{
  const inputVal = parseInt(input.value)
  const counts = parseInt(count.innerText)
  count.innerText = inputVal + counts
})

dec.addEventListener('click',()=>{
  const inputVal = parseInt(input.value)
  const counts = parseInt(count.innerText)
  count.innerText = counts-inputVal
})

reset.addEventListener('click',()=>{
  count.innerText = 0
  input.value = 1
})