inputItem = document.querySelector('#item')
todoBox = document.querySelector('.todo-box')

inputItem.addEventListener('keyup',function(event){
 
if(event.key=='Enter'){
  console.log(this.value);
  addTodo(this.value)
  this.value =''
}
 








})
 
function addTodo(lists){
 const list = document.createElement("li"); 
 list.innerHTML = `
 ${lists}
 <i class="fa-solid fa-xmark close"></i>
 `
  list.querySelector('.close').addEventListener('click',()=>{
  list.remove()
 })

 list.addEventListener('click',function(){
  this.classList.toggle('done')
 })

 todoBox.appendChild(list)

}