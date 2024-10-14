const input = document.querySelector('input')

let first3Num = ''
let preNum = ''
input.addEventListener('input', (e)=>{
  const inputVal = e.target.value


  if(/\d+$/g.test(inputVal)){
    input.value = inputVal
  }else{
    input.value = inputVal.substring(0, inputVal[inputVal.length-1])
  }

   if(inputVal.length===4 && preNum.length<inputVal.length){
    first3Num = inputVal.substring(0,3)
    input.value = `+(${first3Num}) - ${inputVal[inputVal.length-1]}`
  }else if(inputVal.length===9 && preNum.length> inputVal.length){
    input.value = first3Num
  }
  preNum = inputVal
})