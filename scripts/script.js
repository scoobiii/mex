// Seleciona o menu
const nav = document.getElementById('main-nav');

// Função para adicionar a classe 'fixed' ao menu quando a página for rolada
window.onscroll = function() {
    if (window.pageYOffset > 0) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
};
