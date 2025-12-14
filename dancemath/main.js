import { rhythms } from "./rhythms.mjs";

const startSequence = [
   rhythms[0],
   rhythms[1],
   rhythms[2],
   rhythms[0],
   rhythms[0],
   rhythms[1],
   rhythms[2],
   rhythms[0],
];

let currentSequence = [
   rhythms[0],
   rhythms[1],
   rhythms[2],
   rhythms[0],
   rhythms[0],
   rhythms[1],
   rhythms[2],
   rhythms[0],
];

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
   let html = `<h2 class = "rhythmHeader">Name           </h2>
                  <h2 class = "rhythmHeader">Rhythm Notation</h2>
                  <h2 class = "rhythmHeader">Description    </h2>`;

   // Generate current rhythm html
   const rhythmRows = rhythms.map((rhythmUnit) => {
      return (
         `<h3>${rhythmUnit.name}</h3>` +
         rhythmImageTemplate(rhythmUnit) +
         `<p>${rhythmUnit.description}</p>`
      );
   });
   return html + rhythmRows.join("");
}

/**************************************************************************
 *************************** CREATE TEMPLATES *****************************
 **************************************************************************/

/**************************************
 * ROW TEMPLATE
 * @param {*} rhythms
 * @returns row template with up to 4 items
 *************************************/
function rowTemplate(rowUnits) {
   const rowItems = rowUnits.map((unit) => {
      return `<div class = "seq-item"> ` + rhythmImageTemplate(unit) + `</div>`;
   });

   return `<div class="seq-row">${rowItems.join("")}</div>`;
}

/**************************************
 * SEQUENCE-GRID TEMPLATE
 * @param {*} rhythms
 * @returns sequence-grid template
 *************************************/
function sequenceGridTemplate(selectRhythms) {
   let html = ``;

   for (let i = 0; i < selectRhythms.length; i += 4) {
      const rowChunk = selectRhythms.slice(i, i + 4);
      html += rowTemplate(rowChunk);
   }
   return html;
}

/**************************************
 * RHYTHM-SELECT TEMPLATE
 * @param {*} rhythm
 * @returns rhythm-select template
 *************************************/
function rhythmSelectTemplate() {
   let html = `   <h1>Select</h1>
                  <div class="selector-grid">`;

   // Add all rhythm objects
   const rhythmSelect = rhythms.map((rhythmUnit) => {
      return (
         ` <div class="rhythm-btn" > ` +
         rhythmImageTemplate(rhythmUnit) + // image
         `</div>`
      );
   });

   return html + rhythmSelect.join("") + `</div>`;
}

/******************************
 * ADD UNIT
 *
 ******************************/
function addUnit(rhythm) {}

/******************************
 * RENDER SEQUENCE
 * Finds the #sequence-grid and fills it with the default sequence
 ******************************/
function renderSequence() {
   const container = document.getElementById("sequence-grid");

   // Insert the generated HTML into the container
   if (container) {
      container.innerHTML = sequenceGridTemplate(currentSequence);
   }
}

/******************************
 * RENDER SEQUENCE MAKER
 *
 ******************************/
function renderSequenceMaker() {
   const container = document.getElementById("rhythm-select");

   container.innerHTML = rhythmSelectTemplate();
}

/******************************
 * RENDER RHYTHM INFO
 ******************************/
function renderRhythmInfo() {
   const container = document.getElementById("rhythms-container");
   container.innerHTML = rhythmInfoTemplate();
}

/**************************************
 * INITIALIZE
 *************************************/
function init() {
   // Check if we are on the home page which contains the 'rhythms-grid' element
   if (document.getElementById("rhythms-container")) {
      renderRhythmInfo();
   }
   // Add any other initializations for 'create.html' or other pages here later
   if (document.getElementById("rhythm-select")) {
      renderSequenceMaker();
      renderSequence();
   }
}

init();
