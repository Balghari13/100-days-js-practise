const checkBoxList = document.querySelectorAll('.custom-checkbox')

const inputs = document.querySelectorAll('.goal-input')

const progressBar = document.querySelector('.progress-bar')
console.log(progressBar);

const barValue = document.querySelectorAll('.custom-checkbox')

const input = document.querySelector('.goal-container')
checkBoxList.forEach((checked)=>{
  checked.addEventListener('click',()=>{
    const fields = [...inputs].every((input)=> input.value)
    if(fields){
      checked.parentElement.classList.toggle('completed')
      
    }else{
      progressBar.classList.add('show-error')
    }
    
  })
})

inputs.forEach((focus)=>{
  focus.addEventListener('focus',()=>{
    progressBar.classList.remove('show-error')
  })
})


