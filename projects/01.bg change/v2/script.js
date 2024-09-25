
 const btn = document.querySelector('#btn')

btn.addEventListener('click',bgChange)

function bgChange(){
  const randomColor = Math.floor(Math.random()*16777215)
  const colorCode = "#"+ randomColor.toString(16)
  document.body.style.backgroundColor = colorCode
  document.getElementById('code').innerText= colorCode

  navigator.clipboard.writeText(colorCode)
}
bgChange()
