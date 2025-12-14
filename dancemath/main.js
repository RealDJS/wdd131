import { rhythms } from "./rhythms.mjs";

/**************************************************************************
 *************************** HOME TEMPLATES *****************************
 *************************************************************************/

/**************************************
 * RHYTHM IMAGE TEMPLATE
 * @param {object} rhythm - The rhythm unit object
 * @returns {string} The HTML image string
 *************************************/
function rhythmImageTemplate(rhythm) {
   return `<img class="rhythm-img"
            src="${rhythm.img}" 
            alt="${rhythm.name} rhythm unit in UUS notation" />
            `;
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
 *************************************************************************/

/**************************************
 * RHYTHM TEMPLATE
 * @param {*} rhythm
 * @returns rhythm template
 *************************************/
function rhythmSelectTemplate(rhythm) {
   return (
      ` <div class="rhythm-btn" ` +
      rhythmImageTemplate(rhythm) +
      `              
            </div>`
   );
}

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
 * SELECT TEMPLATE
 * @param {*} rhythms
 * @returns rhythm select template
 *************************************/

//function rhythmSelectTemplate(rhythms) {}

function initialize() {
   // Check if we are on the home page which contains the 'rhythms-grid' element
   if (document.getElementById("rhythms-container")) {
      rhythmInfoTemplate();
   }
   // Add any other initializations for 'create.html' or other pages here later
}

initialize();
