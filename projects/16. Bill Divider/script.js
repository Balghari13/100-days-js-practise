const amountInput = document.querySelector('.amountInput')
const peoplesInput = document.querySelector('.peoples')
const tipAmount = document.querySelector('.tip-amount span')
const billBtn = document.querySelector('.billBtn')
const totalAmount = document.querySelector('.total-amount span')
const eachAmount = document.querySelector('.each-amount span')
const customInput = document.querySelector('.customInput')
const tipContainer = document.querySelector('.tip-container')
const resetBtn = document.querySelector('.resetBtn')

let selectedTip = 0;

billBtn.addEventListener('click',()=>{
  const billAmount = parseInt(amountInput.value)
  const numberOfPerson = parseInt(peoplesInput.value)
  // const customTips = parseInt(customInput.value)

  const tipPrice = billAmount*(selectedTip/100)
  const totalBill = billAmount + tipPrice
  const eachPersonBill = totalBill/numberOfPerson;

  totalAmount.innerText= `Rs ${Math.ceil(totalBill)}`;
  eachAmount.innerText = `Rs ${Math.ceil(eachPersonBill)}`;
  tipAmount.innerText = `Rs ${Math.ceil(tipPrice)}`

  resetBtn.disabled = false;
  
})


tipContainer.addEventListener('click',(e)=>{
  if(e.target !== tipContainer){
    [...tipContainer.children].forEach((tip)=>tip.classList.remove('selected'))
    e.target.classList.add('selected')
    selectedTip = parseInt(e.target.innerText)
    customInput.value = ''
    if(peoplesInput.value && selectedTip){
      billBtn.disabled = false;
    }else{
      billBtn.disabled = true;
    }
  }
  
})

customInput.addEventListener('input',()=>{
  selectedTip = parseInt(customInput.value);
  [...tipContainer.children].forEach((tip)=>tip.classList.remove('selected'))
  if(peoplesInput.value && selectedTip){
    billBtn.disabled = false;
  }else{
    billBtn.disabled = true;
  }
})



resetBtn.addEventListener('click',()=>{
  totalAmount.innerText= '';
  eachAmount.innerText = '';
  tipAmount.innerText = '';
  amountInput.value ='';
  customInput.value = '';
  peoplesInput.value = '';
  selectedTip = 0;
  [...tipContainer.children].forEach((tip)=>tip.classList.remove('selected'))
  resetBtn.disabled = true
})

amountInput.addEventListener('input',()=>{
  if(amountInput.value){
    customInput.disabled = false;
    peoplesInput.disabled = false;
     
    tipContainer.classList.remove('disabled')
  }else{
    customInput.disabled = true;
    peoplesInput.disabled = true;
   
    tipContainer.classList.add('disabled')
  }
})

peoplesInput.addEventListener('input',()=>{
  if(peoplesInput.value && selectedTip){
    billBtn.disabled = false
  }else{
    billBtn.disabled = true
  }
})