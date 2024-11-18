const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


let count = 0;

slides.forEach((slide,index)=>{
  slide.style.left = `${index*100}%`
})

// const slideImg = ()=>{
//   slides.forEach((slide)=>{
//     slide.style.transform = `translateX(-${count*100}%)`
//   })
// }

const slideImg =()=>{
  slides.forEach((slide)=>{
    slide.style.transform = `translateX(-${count*100}%)`
  })
}

next.addEventListener('click',()=>{
  if(count>=slides.length-1){
  count = 0;
    slideImg()
    
  }
  else{
    count++;
    slideImg()
  }
 
})

prev.addEventListener('click',()=>{
  if(count<=0){
    
    count= slides.length-1
    slideImg()
  }else{
    count--;
    slideImg()
  }
 
})