
const endDates = document.querySelector('.endDate')
const seconds = document.querySelector('.seconds')
const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')
const days = document.querySelector('.days')

const endDate = "25 September 2024 10:00 PM"


endDates.innerText = endDate

function clock(){
  const endDat = new Date(endDate)
  const now = new Date()
  const diff = (endDat-now)/1000
if(diff<0) return
  seconds.innerHTML = `
  <span class="value">
   ${Math.floor(diff%60)}
  </span>
  Seconds
 `
  minutes.innerHTML = `
   <span class="value hours">${Math.floor(diff/60)%60}</span>
      Minutes
  
  `
  hours.innerHTML = `
   <span class="value hours">${Math.floor(diff/3600)%24}</span>
        Hours
  `
  days.innerHTML = `
  <span class="value"> ${Math.floor(diff/3600/24)}</span>
        Days
 `
}

setInterval(()=>{
  clock()
},1000)
