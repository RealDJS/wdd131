import { rhythms } from "./rhythms.mjs";

/**************************************************************************
 *************************** HOME TEMPLATES *******************************
 **************************************************************************/

/**************************************
 * RHYTHM IMAGE TEMPLATE
 * @param {object} rhythm - The rhythm unit object
 * @returns {string} The HTML image string
 *************************************/
function rhythmImageTemplate(rhythm) {
   return `<img src="${rhythm.img}" 
            alt="${rhythm.name} rhythm unit in UUS notation" /> `;
}

/**************************************
 * RHYTHM INFO TEMPLATE
 * @returns {string} The rhythm-info html string
 *************************************/
function rhythmInfoTemplate() {
   // 1. Get the container where the rhythms will go
   const container = document.getElementById("rhythms-container");

   // 2. Add content to existing container
   if (container) {
      let html = `<h2 class = "rhythmHeader">Name           </h2>
                  <h2 class = "rhythmHeader">Rhythm Notation</h2>
                  <h2 class = "rhythmHeader">Description    </h2>`;

      // 3. Add all rhythm objects
      for (let i = 0; i < rhythms.length; i++) {
         const rhythmUnit = rhythms[i];

         // 4. Generate current rhythm html
         html +=
            `<h3>${rhythmUnit.name}</h3>` + // name
            rhythmImageTemplate(rhythmUnit) + // image
            `<p>${rhythmUnit.description}</p>`; // description
      }

      // 5. Insert HTML into container
      container.innerHTML = html;
   }
}

/**************************************************************************
 *************************** CREATE TEMPLATES *****************************
 **************************************************************************/

/**************************************
 * UNIT TEMPLATE
 * @param {*} RHYTHM
 * @returns rhythm unit
 *************************************/

/**************************************
 * ROW TEMPLATE
 * @param {*} rhythms
 * @returns row template
 *************************************/
function rowTemplate(rhythms) {}

/**************************************
 * GRID TEMPLATE
 * @param {*} rhythms
 * @returns grid template
 *************************************/
function gridTemplate(rhythms) {}

/**************************************
 * RHYTHM-SELECT TEMPLATE
 * @param {*} rhythm
 * @returns rhythm-select template
 *************************************/
function rhythmSelectTemplate() {
   const container = document.getElementById("rhythm-select");

   if (container) {
      let html = `   <h1>Select</h1>
                     <div class="selector-grid">`;
      // 3. Add all rhythm objects
      for (let i = 0; i < rhythms.length; i++) {
         const rhythmUnit = rhythms[i];
         html +=
            ` <div class="rhythm-btn" > ` +
            rhythmImageTemplate(rhythmUnit) +
            `</div>`; // image
      }
      html += `</div>`;
      container.innerHTML = html;
   }
}

function initialize() {
   // Check if we are on the home page which contains the 'rhythms-grid' element
   if (document.getElementById("rhythms-container")) {
      rhythmInfoTemplate();
   }
   // Add any other initializations for 'create.html' or other pages here later
   if (document.getElementById("rhythm-select")) {
      rhythmSelectTemplate();
   }
}

initialize();
