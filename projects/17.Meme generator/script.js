const memeBtn = document.querySelector('.memeBtn')
const titles= document.querySelector('.title')
const authors= document.querySelector('.author')
const apiImg= document.querySelector('.apiImg')


const memeUrl = 'https://meme-api.com/gimme/wholesomememes';

function generateMeme(){
  fetch(memeUrl)
  .then((res)=>res.json())
  .then((data)=>{
   const {title,url,author} = data;
   titles.innerText = title;
   apiImg.src = url;
   authors.innerText = `Made by: ${author}`;
  })
   
}
generateMeme()
memeBtn.addEventListener('click',()=>{
  generateMeme()
 
})