export function renderNav(){
  let burgerBtn = document.getElementById('burger');
  let menu = document.getElementById('nav-menu');
  let burgerDesc = document.getElementById('burger-desc');
  let desktopNav = document.getElementById('desktop-nav');
  let burgerMenu = document.getElementById('top-bar');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    menu.classList.toggle('closed-menu');
  })

  burgerDesc.addEventListener('click', () => {
    burgerDesc.classList.toggle('open');
  })

  window.addEventListener('scroll', () => {
    console.log(scrollY)
    if(window.scrollY > 100){
      burgerDesc.style.display = 'block';
    } else{
      burgerDesc.style.display = 'none';
    }
  });
}