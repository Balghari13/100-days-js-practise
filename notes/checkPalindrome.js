console.log('=========================');


function isPalindrome(str){
   str = str.toLowerCase().replace(/\W/g, '')
   let str_r = str.split('').reverse().join('')
    return str_r === str ? true : false;
}


console.log(isPalindrome('A man, a plan, a canal, Panama'));
console.log(isPalindrome('raceCaR'));
console.log(isPalindrome('hellO'));
console.log(isPalindrome('ama'));
console.log(isPalindrome('amaaka'));



