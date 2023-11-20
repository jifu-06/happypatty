

// ハンバーガーメニュー
const menu = document.querySelector('.header_menu');
const menus = document.querySelector('.header_menus');

menu.addEventListener('click', () =>{
    menu.classList.toggle('open');
    menus.classList.toggle('open');
});