import recipes from "./recipes.mjs";

/**************************************************************************
 *************************** HELPERS * ************************************
 *************************************************************************/

/**************************************
 * RANDOM NUM
 * @param {*} length
 * @returns random number between 0 and length - 1
 *************************************/
function randomNum(length) {
   return Math.floor(Math.random() * length);
}

/**************************************
 * RANDOM ENTRY
 * @param {*} list
 * @returns random list entry
 *************************************/
function getRandomEntry(list) {
   // get length of list
   const length = list.length;

   // get random number based on list length
   const entry = list[randomNum(length)];

   // return list entry
   return entry;
}

/**************************************************************************
 *************************** TEMPLATES ************************************
 *************************************************************************/

/**************************************
 * RECIPE TEMPLATE
 * @param {*} recipe
 * @returns recipe template
 *************************************/
function recipeTemplate(recipe) {
   return `<figure class="recipe">
	<img class ="recipeImg" src="${recipe.image}" alt="image of recipe" />
	<div class="recipeInfo">
   ${tagsTemplate(recipe.tags)}
		
   <h2 class= "recipeName">${recipe.name}</h2>
      ${ratingTemplate(parseInt(recipe.rating))}
		<p class="recipeDescription">
			${recipe.description}
		</p>
</div>
</figure>`;
}

/*****************************
 * TAGS TEMPLATE
 * @param {*} tags
 * @returns
 ****************************/
function tagsTemplate(tags) {
   let html = `
   <ul class="tags">`;
   // loop through the tags list and transform the strings to HTML
   for (let i = 0; i < tags.length; i++) {
      html += `
         <li>${tags[i]}</li>`;
   }
   html += `</ul>`;
   return html;
}

/*****************************
 * RATING TEMPLATE
 * @param {*} rating
 * @returns template based on the rating provided
 ****************************/
function ratingTemplate(rating) {
   // begin building an html string using the ratings HTML written earlier as a model.
   let html = `
   <span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`;
   // our ratings are always out of 5, so create a for loop from 1 to 5
   for (let i = 0; i < 5; i++) {
      // check to see if the current index of the loop is less than our rating
      let starRating = `
      <span aria-hidden="true"`;
      if (i < rating)
         // if so then output a filled star
         starRating += `class="icon-star">⭐</span>`;
      // else output an empty star
      else starRating += `class="icon-star-empty">☆</span>`;
      html += starRating;
   }

   // after the loop, add the closing tag to our string
   html += `
   </span>`;

   // return the html string
   return html;
}

/**************************************************************************
 *************************** RENDERING ************************************
 *************************************************************************/

function renderRecipes(recipeList) {
   // get the element we will output the recipes into
   const recipe = document.querySelector("main");
   // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
   const html = recipeTemplate(recipeList);
   // Set the HTML strings as the innerHTML of our output element.
   recipe.innerHTML = html;
}

function init() {
   // get a random recipe
   const recipe = getRandomEntry(recipes);
   // render the recipe with renderRecipes.
   renderRecipes(recipe);
}
init();

/**************************************************************************
 *************************** TESTING **************************************
 *************************************************************************/

// test
//console.log(getRandomEntry(recipes));
const recipe = getRandomEntry(recipes);
//console.log(recipeTemplate(recipe));
