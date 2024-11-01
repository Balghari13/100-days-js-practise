 const addBtn = document.querySelector('.addBtn')
 const main = document.querySelector('.main')


 function saveNote(){
  const notes = document.querySelectorAll('.note textarea')
 
  
  const data = [];
  notes.forEach((note)=>data.push(note.value))
  console.log(data);
  if(notes.length===0){
    localStorage.removeItem('notes')
  }else{
    localStorage.setItem('notes',JSON.stringify(data))
  }
  
 }



 addBtn.addEventListener('click',()=>{
  addNote();
 })

 function addNote(text=''){
  const note = document.createElement('div')
  note.classList.add('note')
  note.innerHTML =
  `
  <div class='tool'>
   <i class="fa-solid fa-floppy-disk save"></i>
   <i class="fa-solid fa-trash delete"></i>
         
  </div>
  <textarea>${text}</textarea>
  `
  note.querySelector('.delete').addEventListener('click',()=>{
    console.log('click');
    note.remove()
    saveNote()
  })
 
note.querySelector('.save').addEventListener('click',()=>{
  saveNote()
})
note.querySelector('textarea').addEventListener('focusout', ()=>{
  saveNote()
})
  main.appendChild(note)
   saveNote()
 }








 (function(){
  const lsNotes = JSON.parse(localStorage.getItem('notes'))
  if(lsNotes===null){
    addNote()
  }else{
    lsNotes.forEach((lsNote)=>{
      addNote(lsNote)
    })
  }
 
  
}) ()

