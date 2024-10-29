const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/";

const inputBox = document.querySelector('.inputBox')
const range = document.querySelector('.range')
const lCheck = document.querySelector('.lCheck')
const sCheck = document.querySelector('.sCheck')
const nCheck = document.querySelector('.nCheck')
const uCheck = document.querySelector('.uCheck')
const gBtn = document.querySelector('.btn')


function getRandomData(dataSet){
  return dataSet[Math.floor(Math.random()*dataSet.length)]
}

function generatePassword(password=''){
  if(uCheck.checked){
    password += getRandomData(upperSet)
  }
  if(lCheck.checked){
    password += getRandomData(lowerSet)
  }
  if(sCheck.checked){
    password += getRandomData(symbolSet)
  }
  if(nCheck.checked){
    password += getRandomData(numberSet)
  }
  if(password.length < range.value){
    return generatePassword(password)
  }
  console.log(password);
  

  inputBox.innerText = trimString(password, range.value)
}

function trimString(str, num){
  if(str.length>num){
    let subStr = str.substring(0,num)
    return subStr
  }else{
    return str
  }
}

gBtn.addEventListener('click',()=>{
  generatePassword()
})
generatePassword()

// function getRandomData(dataSet){
//   return dataSet[Math.floor(Math.random()*dataSet.length)]
// }

// const generatePassword=(password= '')=>{
//     if(uCheck.checked){
//       password += getRandomData(upperSet)
        
//     }
//     if(lCheck.checked){
//       password += getRandomData(lowerSet)
//     }
//     if(sCheck.checked){
//       password += getRandomData(symbolSet)
//     }
//     if(nCheck.checked){
//       password += getRandomData(numberSet)
//     }
//     if(password.length<range.value){
//       return generatePassword(password)
//     }
   
//     // inputBox.innerText =  trumcateString(password, range.value);
  
//      inputBox.innerText = truncateString(password, range.value);
// }
// generatePassword()


// function truncateString(str, num){
//   if(str.length>num){
//     let subStr = str.substring(0, num);
//     return subStr
//   }else{
//     return str;
//   }
// }

// gBtn.addEventListener('click',()=>{
//   generatePassword()
// })

