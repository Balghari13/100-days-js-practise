const bodyDark = document.querySelector('#container-dark')
const contentDark = document.querySelector('#content-dark')
const content= document.querySelector('.content')

const isBodyDark = JSON.parse(localStorage.getItem('bodyDark'))
const isContentDark = JSON.parse(localStorage.getItem('contentDark'))


if(isBodyDark){
  bodyDark.checked = true
}
if(isContentDark){
  contentDark.checked = true 
}
changeBodyDark()
changeContentMode()


function handleDark(checkbox,element,localStorageKey){
  if(checkbox.checked){
    element.classList.add('dark')
    localStorage.setItem(localStorageKey, true)
  }else{
    element.classList.remove('dark')
    localStorage.setItem(localStorageKey,false)
  }
}


function changeBodyDark(){
  handleDark(bodyDark, document.body, 'bodyDark')
  // if(bodyDark.checked){
  //   document.body.classList.add('dark')
  //   localStorage.setItem('bodyDark',true)
  //  }else{
  //    document.body.classList.remove('dark')
  //    localStorage.setItem('bodyDark', false)
  //  }
  //  contentDark.checked = bodyDark.checked
}

function changeContentMode(){
  handleDark(contentDark, content, 'contentDark')
  // if(contentDark.checked){
  //   content.classList.add('dark')
  //   localStorage.setItem('contentDark', true)
    
  // }else{
  //   content.classList.remove('dark')
  //   localStorage.setItem('contentDark', false)
  // }
}

bodyDark.addEventListener('change', ()=>{
  changeBodyDark()
 changeContentMode()
})

contentDark.addEventListener('change',changeContentMode
//   ()=>{
//   if(contentDark.checked){
//     content.classList.add('dark')
    
//   }else{
//     content.classList.remove('dark')
   
//   }
// }
)