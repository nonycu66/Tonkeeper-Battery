'use strict';

export const frequentlyControl = function () {
  // get all elements with the class of accordion-card 
  const faqsAccordions = document.querySelectorAll('.accordion-card');

  faqsAccordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
      // toggle the css class
      accordion.classList.toggle('open');
    });
  });
};
