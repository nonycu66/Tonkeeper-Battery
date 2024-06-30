'use strict';
import { footerData } from '../model/footerModel.js';

export function footerHTML() {
  // Get the container where you want to append the dynamically generated content
  const container = document.getElementById('footerContainer');

  // create the div element with the class of sign-up-container
  const footerContainer = document.createElement('footer');
  footerContainer.className = 'footer-container';
  container.appendChild(footerContainer);

  // create the div element with the class of logo section
  const logoSection = document.createElement('div');
  logoSection.classList.add('logo-section');
  footerContainer.appendChild(logoSection);

  // render the innerhtml for the logo section
  logoSection.innerHTML = `
     
        <div class="footer-logo-container">
        <a href="https://www.tonkeeper.org/" class="footer-logo">
        <svg
          width="63"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#logo_small_svg__clip0_225_523)">
            <path
              d="M12.0708 24C18.6982 24 24.0708 18.6274 24.0708 12C24.0708 5.37258 18.6982 0 12.0708 0C5.44338 0 0.0708008 5.37258 0.0708008 12C0.0708008 18.6274 5.44338 24 12.0708 24Z"
              fill="#0098EA"
            ></path>
            <path
              d="M16.1681 6.69763H7.97313C6.46635 6.69763 5.51133 8.32302 6.26937 9.63694L11.327 18.4033C11.6571 18.9757 12.4842 18.9757 12.8142 18.4033L17.8729 9.63694C18.6299 8.32508 17.6749 6.69763 16.1691 6.69763H16.1681ZM11.3229 15.7744L10.2214 13.6426L7.56369 8.88922C7.38836 8.58497 7.60494 8.19513 7.9721 8.19513H11.3219V15.7754L11.3229 15.7744ZM16.5755 8.88819L13.9188 13.6437L12.8173 15.7744V8.1941H16.1671C16.5342 8.1941 16.7508 8.58394 16.5755 8.88819Z"
              fill="white"
            ></path>
            <path
              d="M31.6353 18.6289H34.323V9.25552H38.0394V6.70219H27.9188V9.25552H31.6353V18.6289Z"
              fill="currentColor"
            ></path>
            <path
              d="M44.4989 18.8305C47.8921 18.8305 50.6638 16.0588 50.6638 12.6656C50.6638 9.27232 47.8921 6.50061 44.4989 6.50061C41.0888 6.50061 38.3339 9.27232 38.3339 12.6656C38.3339 16.0588 41.0888 18.8305 44.4989 18.8305ZM44.4989 16.2436C42.5503 16.2436 41.0216 14.5974 41.0216 12.6656C41.0216 10.7338 42.5503 9.08754 44.4989 9.08754C46.4306 9.08754 47.9593 10.7338 47.9593 12.6656C47.9593 14.5974 46.4306 16.2436 44.4989 16.2436Z"
              fill="currentColor"
            ></path>
            <path
              d="M62.9291 18.6289V6.70219H60.2414V14.0598L54.446 6.70219H52.1447V18.6289H54.8156V11.2545L60.6278 18.6289H62.9291Z"
              fill="currentColor"
            ></path>
          </g>
          <defs>
            <clipPath id="logo_small_svg__clip0_225_523">
              <rect width="63" height="24" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </a>
        </div>
     `;

  // Create the div element for the text
  const textDiv = document.createElement('div');
  textDiv.className = 'footer-text-div';
  logoSection.appendChild(textDiv);

  // create the p element
  const footerParaElem = document.createElement('p');
  footerParaElem.className = 'footer-text';
  footerParaElem.textContent =
    'Charge TonKeeper Battery with Notcoin for multiple uses like trade, swap and transfer Notcoins, USDT and other assets on TON without having to visit exchange services to buy Ton.';
  textDiv.appendChild(footerParaElem);

  // create the div element for the social links
  const socialDiv = document.createElement('div');
  socialDiv.className = 'socials';
  logoSection.appendChild(socialDiv);
  socialDiv.innerHTML = `

      <a href="" class="socials-anchor-links">
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="facebook-icon"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg> 
      </a>

      <a href="#" class="socials-anchor-links">
        
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="instagram-icon"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg> 
      </a>

      
       <a href="#" class="socials-anchor-links">
         
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="linkedin-icon"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
     </a>

      <a href="#" class="socials-anchor-links">
     
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="telegram-icon"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
      </a>

      <a href="#" class="socials-anchor-links">
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="github-icon"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
      </a>

      <a href="#" class="socials-anchor-links">
      <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" viewBox="0 0 16 16" fill="none" class="x-icon"><path d="M9.52219 6.77491L15.4786 0H14.0671L8.89518 5.88256L4.76438 0H0L6.24657 8.89547L0 16H1.41155L6.87322 9.78779L11.2356 16H16L9.52219 6.77491ZM7.58888 8.97384L6.95597 8.08805L1.92015 1.03974H4.08821L8.15218 6.72796L8.78508 7.61374L14.0677 15.0076H11.8997L7.58888 8.97384Z" fill="currentColor"></path></svg>
      </a>

       <a href="" class="socials-anchor-links">
   
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="envelope-icon"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
       </a>

      `;

         // create the div element with the class of sign-up section
    const signUpSection = document.createElement('div');
    signUpSection.className = 'sign-up-section';
    footerContainer.appendChild(signUpSection);

  // loop through signUpData array
  footerData.forEach((item) => {
 

    if (item.type === 'sign-up-section') {
      signUpSection.innerHTML = `
        
        
        <div class="sign-up-header">
        <h2>${item.header}</h2>
      </div>
      <div class="sign-up-text">
        <p>${item.title}</p>
      </div>

      <form action="submit">
        <div class="sign-up-input">
          <input type="text" placeholder="${item.placeHolder}" />
          <button type="submit" class="sign-up-btn">${item.buttonText}</button>
        </div>
      </form>
        `;
    } else if (item.type === 'copyright-div') {
      // create the copyright div
      const copyrightDiv = document.createElement('div');
      copyrightDiv.className = item.type;
      footerContainer.appendChild(copyrightDiv);

      // create the paragraph element with the class of copyright-text
      const paragrapElem = document.createElement('p');
      paragrapElem.className = 'copyright-text';
      copyrightDiv.appendChild(paragrapElem);

      paragrapElem.innerHTML = `
      
     &copy; <span id="year"></span>
        
       ${item.copyrightText}

     `;
    }
  });
}
