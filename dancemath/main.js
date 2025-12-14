import rhythms from "./rhythms.mjs";

/**************************************************************************
 *************************** TEMPLATES ************************************
 *************************************************************************/

/**************************************
 * RHYTHM TEMPLATE
 * @param {*} rhythm
 * @returns rhythm template
 *************************************/
function rhythmTemplate(rhythm) {
   return ` <div class="rhythm-btn" 
               <img src="${rhythm.img}" alt="${rhythm.name}" />
            </div>`;
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

function rhythmSelectTemplate(rhythms) {}
