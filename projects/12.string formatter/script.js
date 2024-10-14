const input = document.querySelector('input')
const upperCase = document.querySelector('.upperCase')
const lowerCase = document.querySelector('.lowerCase')
const camelCase = document.querySelector('.camelCase')
const pascalCase = document.querySelector('.pascalCase')
const snakeCase = document.querySelector('.snakeCase')
const kebabCase = document.querySelector('.kebabCase')
const trim = document.querySelector('.trim')

function toCapitalize(word){
  if(!word) return word
  return word[0].toUpperCase() + word.slice(1, word.length)
}

function camelCaseF(str){
    const lowerCase = str.toLowerCase()
    const wordArray = lowerCase.split(' ')
    const finalArray = wordArray.map((word,i)=>{
      if(i==0) return word
      return toCapitalize(word)
    })
    return finalArray.join('')
}

function pascalCaseF(str){
  const lowerCase = str.toLowerCase()
  const wordArray = lowerCase.split(' ')
  const finalArray = wordArray.map((word,i)=>{
    return toCapitalize(word)
  })
  return finalArray.join('')
}

function snakeCaseF(str){
  return str.replaceAll(' ', ("_"))
}
function kebabCaseF(str){
  return str.replaceAll(' ', ("-"))
}
function trimF(str){
  return str.replaceAll(' ', (''))
}


function updateScreen(){
  upperCase.innerText = input.value.trim().toUpperCase()
  lowerCase.innerText = input.value.trim().toLowerCase()
  camelCase.innerText = camelCaseF(input.value.trim())
  pascalCase.innerText = pascalCaseF(input.value.trim())
  snakeCase.innerText = snakeCaseF(input.value.trim())
  kebabCase.innerText = kebabCaseF(input.value.trim())
  trim.innerText = trimF(input.value.trim())
}
updateScreen()
input.addEventListener('input', updateScreen)