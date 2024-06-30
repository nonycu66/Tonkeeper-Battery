'use strict';
import { keyfeaturesData } from '../model/keyFeaturesMode.js';

export const keyfeaturesHTML = () => {
  // Get the container where you want to append the dynamically generated content
  const container = document.getElementById('keyfeaturesContainer');

  // Create the section element with the class of key-features
  const sectionElem = document.createElement('section');
  sectionElem.classList.add('key-features');
  container.appendChild(sectionElem);

  // Loop through the keyfeaturesData array
  keyfeaturesData.forEach((item) => {
    if (item.type === 'article') {
      // create the article element with the class of article
      const articleElem = document.createElement('article');
      articleElem.className = item.type;
      sectionElem.appendChild(articleElem);

      // render the innerhtml
      articleElem.innerHTML = `
      
      <div class="key-features-header-container">
      <h2 class="key-features-header">${item.header}</h2>
    </div>

    <p>${item.paragraph1}</p>

    <ul class="unordered-list">
      <li>${item.unOrderedList1[0].first}</li>
      <li>${item.unOrderedList1[0].second}</li>
    </ul>

    <p>${item.paragraph2}</p>
    <ul class="unordered-list">
      <li>${item.unOrderedList2[0].first}</li>
    </ul>

    <p>${item.paragraph3}</p>
    <ul class="unordered-list">
      <li>
         ${item.unOrderedList3[0].first}
      </li>
    </ul>
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
