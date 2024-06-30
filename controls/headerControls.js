'use strict';

///////////////////////////////////////////////////////////
// change header styles on scroll
export function headerControl() {
  window.addEventListener('scroll', () => {
    document
      .querySelector('.header')
      .classList.toggle('window-scroll', window.scrollY > 0);
  });
}

///////////////////////////////////////////////////////////
//  make  mobile navigation work
export function menuControl() {
  const menu = document.querySelector('.nav-div');
  const hambugerBtn = document.querySelector('.hambuger-menu');
  const closeBtn = document.querySelector('.cross');

  hambugerBtn.addEventListener('click', () => {
    menu.classList.add('visible')
    closeBtn.style.display = 'block';
    hambugerBtn.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('visible')
    closeBtn.style.display = 'none';
    hambugerBtn.style.display = 'block';
  });
}




