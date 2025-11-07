// track participants
let participantCount = 1;

/**
 * PARTICIPANT TEMPLATE
 * create an HTML string for a new participant section.
 * @param {number} count - current number of participants shown
 * @returns {string}     - HTML for new participant
 */
function participantTemplate(count) {
   return `
   <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
            <label for="fname${count}"> First Name<span>*</span></label>
            <input
               id="fname${count}"
               type="text"
               name="fname"
               value=""
               required
            />
         </div>
         <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity" />
         </div>
         <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee" />
         </div>
         <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date" />
         </div>
         <div class="item">
            <p>Grade</p>
            <select>
               <option selected value="" disabled selected></option>
               <option value="1">1st</option>
               <option value="2">2nd</option>
               <option value="3">3rd</option>
               <option value="4">4th</option>
               <option value="5">5th</option>
               <option value="6">6th</option>
               <option value="7">7th</option>
               <option value="8">8th</option>
               <option value="9">9th</option>
               <option value="10">10th</option>
               <option value="11">11th</option>
               <option value="12">12th</option>
         </select>
      </div>
   </section>
   `;
}

/**
 * ADD PARTICIPANT
 * add participant HTML to document
 */
function addParticipant() {
   // update the count
   participantCount++;

   // get the button
   const addButton = document.getElementById("add");

   // insert new html
   addButton.insertAdjacentHTML(
      "beforebegin",
      participantTemplate(participantCount)
   );
}

/**
 * SUBMIT FORM
 * submit form filled out by the user
 * @param {*} event -
 */
function submitForm(event) {
   event.preventDefault();
   // do the rest of the stuff

   // calc total fees
   const total = totalFees();

   // get adult name
   const adultName = document.getElementById("adult_name").value;

   // hide form
   const form = event.target;
   form.style.display = "none";

   // get summary element
   const summaryElement = document.getElementById("summary");

   // insert summary
   const summaryInfo = {
      adultName: adultName,
      numParticipants: participantCount,
      feeTotal: total,
   };
   summaryElement.innerHTML = successTemplate(summaryInfo);

   // make summary visible
   summaryElement.style.display = "block";
}

/**
 * TOTAL FEES
 */
function totalFees() {
   // the selector below lets us grab any element that has an id that begins with "fee"
   let feeElements = document.querySelectorAll("[id^=fee]");
   console.log(feeElements);
   // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
   // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
   // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
   feeElements = [...feeElements];
   // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
   // Remember that the text that was entered into the input element will be found in the .value of the element.
   const total = feeElements.reduce((sum, element) => {
      const fee = parseFloat(element.value) || 0;
      return sum + fee;
   }, 0);
   // once you have your total make sure to return it!
   return total;
}

/**
 * SUCCESS TEMPLATE
 * @param {*} info - submisison info
 * @returns        - HTML for form submission
 */
function successTemplate(info) {
   return `
   <p> Thank you ${info.adultName} for registering.</p>
   <p> You have registered ${
      info.numParticipants
   } participants and owe $${info.feeTotal.toFixed(2)}</p>
`;
}

// event listeners
document.getElementById("add").addEventListener("click", addParticipant); // add button
document.querySelector("form").addEventListener("submit", submitForm); // submit form
