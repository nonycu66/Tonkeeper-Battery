'use strict';
import { frequentlyData } from '../model/frequentlyModel.js';

export const frequentlyHTML = function () {
  // Get the container where you want to append the dynamically generated content
  const container = document.getElementById('frequentlyContainer');

  // Create the section element with the class of frequently-asked-question
  const sectionElem = document.createElement('section');
  sectionElem.classList.add('frequently-asked-question');
  container.appendChild(sectionElem);

  // create the div with the class of frequently-header-container
  const headerDiv = document.createElement('div');
  headerDiv.className = 'frequently-header-container';
  sectionElem.appendChild(headerDiv);

  // Create the h2 element with the class of frequently-header
  const headerElement = document.createElement('h2');
  headerElement.className = 'frequently-header';
  headerElement.textContent = 'frequently asked questions';
  headerDiv.appendChild(headerElement);

  // create the div with the class of frequently-title-container
  const titleDiv = document.createElement('div');
  titleDiv.className = 'frequently-title-container';
  sectionElem.appendChild(titleDiv);

  // Create the h2 element with the class of frequently-title
  const titleElement = document.createElement('h2');
  titleElement.className = 'frequently-title';
  titleElement.textContent = ' Popular qustions about Tonkeeper Battery';
  titleDiv.appendChild(titleElement);

  // Loop through the frequentlyData array
  frequentlyData.forEach((item) => {
    if (item.type === 'question-container') {
      // create the div element with the class of question-container
      const questionDiv = document.createElement('div');
      questionDiv.className = item.type;
      sectionElem.appendChild(questionDiv);

      // create the ul element
      const ulElement = document.createElement('ul');
      ulElement.className = 'accordion-container';
      questionDiv.appendChild(ulElement);

      // loop through the accordion array
      item.accordion.forEach((list, index) => {
        // create the li element with the class of faq-accordion
        const liElement = document.createElement('li');
        liElement.className = 'accordion-card';
        ulElement.appendChild(liElement);

        // render the liElement innerhtml
        if (index === 0) {
          liElement.innerHTML = `
               
          <div class="accordion-header">
          <button class="accordion-button">
              ${list.buttonHeader}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="angle-down"
            >
              <!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              />
            </svg>
          </button>
          <div class="accordion-body">
            <p class="faq-text">
              ${list.buttonBody}
            </p>
          </div>
        </div>
               `;
        } else if (index === 1) {
          liElement.innerHTML = `
          
          <div class="accordion-header">
          <button class="accordion-button">
              ${list.buttonHeader}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="angle-down"
            >
              <!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              />
            </svg>
          </button>
          <div class="accordion-body">
            <p class="faq-text">
              ${list.buttonBody}
            </p>
          </div>
        </div>
          
          `;
        } else if (index === 2) {
          liElement.innerHTML = `
              
              <div class="accordion-header">
              <button class="accordion-button">
                  ${list.buttonHeader}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="angle-down"
                >
                  <!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  />
                </svg>
              </button>
              <div class="accordion-body">
                <p class="faq-text">
                  ${list.buttonBody}
                </p>
              </div>
            </div>
              `;
        } else if (index === 3) {
          liElement.innerHTML = `
            
            <div class="accordion-header">
            <button class="accordion-button">
                 ${list.buttonHeader}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="angle-down"
              >
                <!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                />
              </svg>
            </button>
            <div class="accordion-body">
              <ul class="faq-text">
                 ${list.buttonBody[0].title}
                <li class="">${list.buttonBody[0].listItem[0]}</li>
                <li class="">${list.buttonBody[0].listItem[1]}</li>
              </ul>
            </div>
          </div>
            
            `;
        } else if (index === 4) {
          liElement.innerHTML = `
             
             <div class="accordion-header">
             <button class="accordion-button">
                ${list.buttonHeader}
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 448 512"
                 class="angle-down"
               >
                 <!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                 <path
                   d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                 />
               </svg>
             </button>
             <div class="accordion-body">
               <ul class="faq-text">
                 <li>${list.buttonBody[0]}</li>
                 <li>${list.buttonBody[1]}</li>
                 <li>${list.buttonBody[2]}</li>
                 <li>${list.buttonBody[3]}</li>
                 <li>${list.buttonBody[4]}</li>
               </ul>
             </div>
           </div>
             `;
        }
      });
    }
  });
};
