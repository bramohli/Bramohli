// ==UserScript==
// @name         Lexmark Form Filler
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Fill out Lexmark Label Request
// @match        https://lexmarktoner.bgmailing.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bgmailing.com
// @updateURL    https://raw.githubusercontent.com/bramohli/Bramohli/main/lexmark-form-filler-0.2.user.js
// @downloadURL  https://raw.githubusercontent.com/bramohli/Bramohli/main/lexmark-form-filler-0.2.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a button and add it to the page
    const button = document.createElement('button');
    button.textContent = 'Fill Form';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.left = '10px';
    button.style.zIndex = '9999';
    document.body.appendChild(button);

    // Function to fill the form
    function fillForm() {
        const email = 'bramohli@amazon.com';

        // Fill out all form fields
        document.querySelector('input[id="first_name"]').value = 'Brandon';
        document.querySelector('input[id="last_name"]').value = 'Mohl';
        document.querySelector('input[id="company"]').value = 'Amazon Pharmacy';
        document.querySelector('input[id="email"]').value = 'bramohli@amazon.com';
        document.querySelector('input[id="confirm_email"]').value = 'bramohli@amazon.com';
        document.querySelector('select[id="cmdLabels"]').value = '5';
        document.querySelector('input[id="madd1"]').value = '4500 S Pleasant Valley Road';
        document.querySelector('input[id="madd2"]').value = 'Suite 201';
        document.querySelector('input[id="city"]').value = 'Austin';
        document.querySelector('select[id="cmbState"]').value = 'TX';
        document.querySelector('input[id="zip"]').value = '78744';

        
    }

    // Add click event listener to the button
    button.addEventListener('click', fillForm);
})();
