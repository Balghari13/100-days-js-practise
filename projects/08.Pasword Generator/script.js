const words = ['hello', 'najam', 'saqib'];

function get(){
  const chars = '123456789!@#$%&';
  const clenght = chars.length;
  let password = '';

  while(password.length<20){
    password = password.concat(randomWord(chars.length));
    console.log(password);
    password = password.concat(chars[randomNumber(clenght)])
   // console.log(password);
  }
  password = password.substring(0,16)
  document.getElementById('password').value = password
}
function randomNumber(l){
  let s = Math.floor(Math.random()*l)
 // console.log(s)
  return Math.floor(Math.random()*l)
}
function randomWord(){
  const number = randomNumber(words.length)
 // console.log(words[number]);
  return words[number]
}