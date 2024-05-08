
console.log('Concatenate strings with # remove spaces and make first letter cappital');


const concateCapital = (str) =>{
  if(str.trim().length===0 || str.length>280){
    return false;
  }
  str = str.split(' ')
//first method
 // str = str.map((curElm)=> curElm.replace(curElm[0], curElm[0].toUpperCase()))

//Second method
str = str.map((curElm)=>curElm.charAt(0).toUpperCase() + curElm.slice(1))

  str = `#${str.join('')}`
return str
}





console.log(concateCapital('my name is najam my name is najam'));