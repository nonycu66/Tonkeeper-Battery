'use strict';





///////////////////////////////////////////////////////////
// set current year
export const footerControl = function () {
  // get the element with the class of year
  const yearElem = document.getElementById('year');

  const currentYear = new Date();
  const year = currentYear.getFullYear();
  yearElem.innerHTML = year;
};
