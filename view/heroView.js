'use strict';
import { heroData } from '../model/heroModel.js';

export const heroHTML = function () {
  // Get the container where you want to append the dynamically generated content
  const container = document.getElementById('heroContainer');

  // Create the aside element with the class of hero
  const asideElement = document.createElement('aside');
  asideElement.className = 'hero';
  container.appendChild(asideElement);

  // Loop through the heroData array
  heroData.forEach((item) => {
    if (item.type === 'title-container') {
      // create the div element with the class of title-container
      const titleDiv = document.createElement('div');
      titleDiv.classList.add(item.type);
      asideElement.appendChild(titleDiv);

      titleDiv.innerHTML = `
          
           <h1 class="title">${item.title}</h1>
          <div class="title-2">${item.title2}</div>
          <div class="function-container">
            <p class="function">
              ${item.useCase}
            </p>
          </div>
          <div class="title-3">${item.title3}</div>
  
          `;
    } else if (item.type === 'text-container') {
      // create the div element with the class of text-container
      const textDiv = document.createElement('div');
      textDiv.className = item.type;
      asideElement.appendChild(textDiv);

      textDiv.innerHTML = `
      
      <p class="text">
         ${item.description}
    </p>
    <div class="hero-cta-btn-container">
      <a href="#cta" id="cta-btn" class="cta-btn">${item.button}</a>
    </div>
      `;
    }
  });
};
