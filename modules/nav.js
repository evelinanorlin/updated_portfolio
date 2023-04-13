export function renderNav(){
  let burgerBtn = document.getElementById('burger');
  let menu = document.getElementById('nav-menu')

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open')
    menu.classList.toggle('closed-menu')
  })
}