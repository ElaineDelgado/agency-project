const btnMenu = document.querySelector(".fa-bars")
const mobileMenu = document.querySelector(".nav-bar")


function handleClick(event) {
  event.preventDefault()
  mobileMenu.classList.toggle('active')
}
btnMenu.addEventListener('click', handleClick)
  