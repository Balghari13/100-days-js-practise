const APIURL = "https://api.github.com/users/";
const main = document.querySelector('#main')
const search = document.querySelector('.inputUser')

const getUser = async(username) =>{
  const response = await fetch(APIURL + username);
  const data = await response.json()
  console.log(data);
  
  const card = `
  <div class="card">
<div class="pic">
  <img src="${data.avatar_url}">
</div>
<div class="user-info">
  <h3>${data.name}</h3>
  <p>${data.bio}</p>
 <ul class="info">
  <li>###<strong>${data.followers} Followers</strong></li>
  <li>###<strong>${data.following} Followings</strong></li>
  <li>###<strong>${data.public_repos} Repos</strong></li>
  
</ul>
<div class="repos">

</div>

</div>
</div>
  `
main.innerHTML = card
getRepos(username)
}
getUser('balghari13')



const getRepos = async(username) =>{
  const repos = document.querySelector('.repos')
  const response = await fetch(APIURL+username+ '/repos')
  const data = await response.json();
  console.log(data);
  
  data.forEach((items)=>{
    const elem = document.createElement("a");
    elem.classList.add('repo');
    elem.href = items.html_url
    elem.innerText = items.name
    elem.target = '_blank';
    repos.appendChild(elem)
  })
  
}

const formSubmit = ()=>{
if(search.value !== ''){
  getUser(search.value)
}
  return false;
}

search.addEventListener('focusout', ()=>{
  getUser(search.value)
})