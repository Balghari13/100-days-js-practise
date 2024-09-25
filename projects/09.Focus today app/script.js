const checkBoxList = document.querySelectorAll('.custom-checkbox')

const inputs = document.querySelectorAll('.goal-input')

const progressBar = document.querySelector('.progress-bar')


const barValue = document.querySelectorAll('.custom-checkbox')

const input = document.querySelector('.goal-container')

const progressValue = document.querySelector('.progress-value')



const allGoals =  JSON.parse(localStorage.getItem('allGoals')) ||{}

let goalCount = Object.values(allGoals).filter((goal)=>goal.completed).length

console.log(goalCount);
progressValue.style.width = `${goalCount/3 *100}%`



checkBoxList.forEach((checked)=>{ 
  checked.addEventListener('click',()=>{
    const fields = [...inputs].every((input)=> input.value)
    if(fields){
      checked.parentElement.classList.toggle('completed')
    
      const inputId = checked.nextElementSibling.id
      allGoals[inputId].completed = !allGoals[inputId].completed
      
      goalCount = Object.values(allGoals).filter((goal)=>goal.completed).length
      progressValue.style.width = `${goalCount/3 *100}%`
      console.log(goalCount);
      localStorage.setItem('allGoals', JSON.stringify(allGoals))
      
    }else{
      progressBar.classList.add('show-error')
    }
    
  })
})

inputs.forEach((input)=>{

    input.value = allGoals[input.id ].name
  if(allGoals[input.id].completed){
    input.parentElement.classList.add('completed')
  }
  input.addEventListener('focus',()=>{
    progressBar.classList.remove('show-error')
    
  })
 
  input.addEventListener('input',()=>{
    //console.log(input.id);
    
    allGoals[input.id] = {
      name: input.value,
      completed: false,
    }
  
    localStorage.setItem('allGoals', JSON.stringify(allGoals))
    
  })
  
})


