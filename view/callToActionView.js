'use strict';
import { callToActionData } from '../model/callToActionModel.js';


export const callToActionHTML = () => {
  // Get the container where you want to append the dynamically generated content
  const container = document.getElementById('callToActionContainer');

  // Create the section element with the class of key-features
  const sectionElem = document.createElement('section');
  sectionElem.classList.add('call-to-action');
  sectionElem.id = 'cta'
  container.appendChild(sectionElem);



  // Loop through the keyfeaturesData array
  callToActionData.forEach((item) => {
    if (item.type === 'article') {
      // create the article element with the class of article
      const articleElem = document.createElement('article');
      articleElem.className = item.type;
      sectionElem.appendChild(articleElem);

      // render the innerhtml
      articleElem.innerHTML = `
      
      <div class="cta-header-container">
      <h2 class="call-to-action-header">
          ${item.header}
      </h2>
    </div>

    <div class="description-container">
      <p class="description">
           ${item.description}
      </p>
    </div>

    <div class="description-cta-btn-container">
      <a href="#" class="description-cta-btn">
          ${item.button}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          class="angle-right-icon"
        >
          <!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
          />
        </svg>
      </a>
    </div>

      `;
    } else if (item.type === 'img-container') {
      // create the div element with the class of img-container
      const imgDiv = document.createElement('div');
      imgDiv.className = item.type;
      sectionElem.appendChild(imgDiv);

      imgDiv.innerHTML = `
          
          <div class="img-container">
          <img src="${item.imgSrc}" alt="${item.altText}">
          </div>
          `;
    }
  });
};
