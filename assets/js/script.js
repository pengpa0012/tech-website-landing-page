

const navBurger = document.querySelector('.nav-burger')
const navContent = document.querySelector('.nav-content')

navBurger.addEventListener('click', ()=>{
	navContent.classList.toggle('active')
})