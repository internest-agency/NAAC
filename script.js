const mainMenu = document.querySelectorAll('.main-menu');
mainMenu.forEach(item => {
  item.addEventListener('click', ()=>{
    const menuList =  item.parentElement.querySelector('.menu-list');
    menuList.classList.toggle('active');
  });
});