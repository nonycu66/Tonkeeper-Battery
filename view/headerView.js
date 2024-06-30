'use strict';

export const headerHTML = function () {
  // Get the container where you want to append the dynamically generated content
  const container = document.getElementById('headerContainer');

  // Create the header element
  const header = document.createElement('header');
  header.className = 'header';
  container.appendChild(header);

  // Create the nav element
  const nav = document.createElement('nav');
  nav.className = 'nav-container';
  header.appendChild(nav);

  // Create the div element with the class of row
  const divRow = document.createElement('div');
  divRow.className = 'row';
  nav.appendChild(divRow);

  // Create the div element with the class of menu-wrap
  const divMenuWrap = document.createElement('div');
  divMenuWrap.className = 'menu-wrap';
  divRow.appendChild(divMenuWrap);

  // Create the div element with the class of logo
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logo';
  divMenuWrap.appendChild(logoDiv);

  // render the innerhtml for the logo
  logoDiv.innerHTML = `   
         
         <a href="https://www.tonkeeper.org/">
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
         `;

  // create the divElem with the class of nav-div
  const navContainer = document.createElement('div');
  navContainer.className = 'nav-div';
  divMenuWrap.appendChild(navContainer);

  //  Create the ul element with the class of  nav-menu
  const ulElement = document.createElement('ul');
  ulElement.className = 'nav-menu';
  navContainer.appendChild(ulElement);

  ulElement.innerHTML = `
            <li><a href="#">Key Features</a></li>
            <li><a href="#">Benefits</a></li>
            <li><a href="#">Visualizations</a></li>
            <li><a href="#">Explore</a></li>
            `;

  // Create the div element with the class of mobile-nav-toggler
  const menuDiv = document.createElement('div');
  menuDiv.className = 'mobile-nav-toggler';
  divMenuWrap.appendChild(menuDiv);

  // render the innerhtml
  menuDiv.innerHTML = `
         
      <?xml version="1.0" encoding="UTF-8"?>
      <!-- Generator: Adobe Illustrator 25.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
        width="22"
        height="22"
        class="hambuger-menu"
      >
        <g>
          <path
            d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z"
          />
          <path
            d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z"
          />
          <path
            d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z"
          />
        </g>
      </svg>
      
  <?xml version="1.0" encoding="UTF-8"?>
<!-- Generator: Adobe Illustrator 25.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021" style="enable-background:new 0 0 512.021 512.021;" xml:space="preserve" width="22" height="22" class="cross">
<g>
	<path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
</g>
</svg>

    `;
};
