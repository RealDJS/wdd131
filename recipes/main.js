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
 *************************** SEARCHING ************************************
 *************************************************************************/

/********************************************************************
 * FILTER LIST
 * @param {*} recipes list of recipes
 * @param {*} query   what the user is searching for
 * @returns   collection with matches in tags, name, or ingredients
 *******************************************************************/
function filterList(query) {
   return recipes.filter((recipe) => {
      const nameFound = recipe.name.toLowerCase().includes(query);
      const tagFound = recipe.tags.find((tag) =>
         tag.toLowerCase().includes(query)
      );
      const ingredientFound = recipe.recipeIngredient.find((ingredient) =>
         ingredient.toLowerCase().includes(query)
      );

      return nameFound || tagFound || ingredientFound;
   });
}

/****************************************
 * SORT LIST
 * @param {*} a 1st list item we are comparing
 * @param {*} b 2nd list item we are comparing
 * @returns comparison result
 ***************************************/
function sortList(a, b) {
   const nameA = a.name.toLowerCase();
   const nameB = b.name.toLowerCase();
   if (nameA < nameB) {
      return -1;
   } else if (nameA > nameB) {
      return 1;
   } else {
      return 0;
   }
}

/****************************************
 * FILTER
 * @param {*} query
 * @returns filtered list in alphabetical order
 ***************************************/
function filter(query) {
   // find user query matches
   const filtered = filterList(query);

   // sort by name
   const sorted = filtered.sort(sortList);
   return sorted;
}

/***********************************
 * SEARCH HANDLER
 * @param {*} event
 **********************************/
function searchHandler(event) {
   // prevent page reload
   event.preventDefault();

   // get search text
   const query = document.querySelector("#searchText").value.toLowerCase();

   // filter the recipes
   const matches = filter(query);

   // render the filtered list
   renderRecipes(matches);
}

/**************************************************************************
 *************************** RENDERING ************************************
 *************************************************************************/

/**************************
 * RENDER RECIPES
 * @param {*} recipeList
 *************************/
function renderRecipes(recipeList) {
   // get the element we will output the recipes into
   const recipes = document.querySelector("main");

   // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
   const html = recipeList.map(recipeTemplate).join("");

   // Set the HTML strings as the innerHTML of our output element.
   recipes.innerHTML = html;
}

/********************
 * INITIALIZE
 *******************/
function init() {
   // get a random recipe
   const recipe = getRandomEntry(recipes);

   // render the recipe with renderRecipes.
   renderRecipes([recipe]);
}

// Listen for user clicking the searchBar
document
   .querySelector("#searchButton")
   .addEventListener("click", searchHandler);

init();
