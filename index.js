let e1 = document.querySelector('.menu-mobile-icon')

e1.addEventListener('click', () => {
  
  let menuItens = document.querySelector('.menu-itens');
  if(menuItens.classList.contains('show')){
    menuItens.classList.add('hidde');
    menuItens.classList.remove('show');
  }else{
    menuItens.classList.add('show');
    menuItens.classList.remove('hidde');
  }
  
});
