const box = document.querySelectorAll('.box')
const rest = document.querySelector('#reset')
const msg = document.querySelector('.msg')



let turnOn = true
const winPattern = [
  [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],
  [2,5,8],[0,4,8],[2,4,6]
]
box.forEach((boxes)=>{
  
  boxes.addEventListener('click',()=>{
    console.log('click');
    if(turnOn){
      boxes.innerHTML = "0"
      turnOn = false
    }else{
      boxes.innerHTML = "x"
      turnOn = true
    }
    boxes.disabled = true

    checkWinner()
    
  })
  
  
})



const disableBox= ()=>{
      for(let boxs of box){
        boxs.disabled = true
      }
  }
  const enableBox =()=>{
    for(let boxs of box){
      boxs.disabled = false;
      boxs.innerText = ''
    }
  }
  const checkWinner=()=>{
    for(let pattern of winPattern){
      // console.log(box[pattern[0]].innerText,box[pattern[1]].innerText,box[pattern[2]].innerText);
      let pos1 = box[pattern[0]].innerText;
      
      let pos2 = box[pattern[1]].innerText;
      
      let pos3 = box[pattern[2]].innerText;
   
      if(pos1 !='' && pos2 !='' & pos3 !=''){
        if(pos1===pos2 && pos2===pos3){
          console.log('winner');
          msg.innerText = `congratulations, winner is ${pos1}`
          msg.classList.remove('hide')
          disableBox() 
        }else{
          msg.innerText = `match is draw play again `
        }
      }
     
    }
  }
  rest.addEventListener('click', ()=>{
turnOn = true
enableBox()
msg.classList.add('hide')
})