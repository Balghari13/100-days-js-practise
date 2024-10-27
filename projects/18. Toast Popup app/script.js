const toastBtn = document.querySelector('.toastBtn')
const horizatal = document.querySelector('#horizatal')
const vertical = document.querySelector('#vertical')
const toastContainer = document.querySelector('.toast-container')
const toastType = document.querySelector('#toast-type')
const toastMessage = document.querySelector('#toast-message')
const rangeDuration = document.querySelector('#range')



toastBtn.addEventListener('click',()=>{
  if(horizatal.value ==='right'){
    toastContainer.classList.add('right')
  }else{
    toastContainer.classList.remove('right')
  }
  if(vertical.value === 'bottom'){
    toastContainer.classList.add('bottom')
  }else{
    toastContainer.classList.remove('bottom')
  }
  const newToast = document.createElement('div');
  newToast.classList.add('toast')
  newToast.classList.add(toastType.value)
  
  newToast.innerText = ` ${toastMessage.value} `

  const closeIcon = document.createElement('span');
  closeIcon.innerText = '✗'
  newToast.append(closeIcon)

  function removeToast(){
    if(toastContainer.classList.contains('right')){
      newToast.classList.add('toRight')
    }else{
      newToast.classList.add('toLeft')
    }
    // setTimeout(()=>{
    //   newToast.remove()
    // },100)
  }

  setTimeout(()=>{
    removeToast()
  },parseInt(rangeDuration.value)*1000)

  closeIcon.addEventListener('click',()=>{
    removeToast()
  })

  // if(toastType.value === 'success'){
  //   newToast.innerText = `✓ ${toastMessage.value} ✗`
  // }
toastContainer.append(newToast);

   
    
})