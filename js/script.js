const qs = el => document.querySelector(el);

let btnOpenMenu = qs('.menu-mobile');
let menuMobile = qs('.menu-mobile-open');
let larguraTela = window.innerWidth;
let btnCloseMenu = qs('.sair-list-mob');
let barMobile = qs('.bar-mobile');

barMobile.style.background = "#000";

window.addEventListener('resize', atualizarLargura);
btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', openMenu);


function openMenu() {
    if(menuMobile.style.display == 'none' && larguraTela < 890) {
        menuMobile.style.display = 'flex';
        barMobile.style.background = "#fff";
    } else if (menuMobile.style.display == 'flex'){
        menuMobile.style.display = 'none';
        barMobile.style.background = "#000";
    }
}
 
function atualizarLargura() {
    larguraTela = window.innerWidth;
    if(larguraTela >= 890) {
        menuMobile.style.display = 'none';
    }
}
