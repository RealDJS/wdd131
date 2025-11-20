import recipes from "./recipes.mjs";

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
function randomEntry(list) {
   // get length of list
   const length = list.length;

   // get random number based on list length
   const entry = list[randomNum(length)];
   // return list entry
   return entry.author;
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
	<img src="${recipe.image}" alt="image of recipe" />
	<figcaption>
		<ul class="recipe__tags">
			<li>Dessert</li>
			<li>Fruit</li>
		</ul>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__ratings">
			<span
				class="rating"
				role="img"
				aria-label="Rating: 3 out of 5 stars"
			>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star-empty">☆</span>
			</span>
		</p>
		<p class="recipe__description">
			${recipe.description}
		</p>
</figcaption>
</figure>`;
}

/*****************************
 * TAGS TEMPLATE
 * @param {*} tags
 * @returns
 ****************************/
function tagsTemplate(tags) {
   // loop through the tags list and transform the strings to HTML

   return html;
}

/*****************************
 * RATING TEMPLATE
 * @param {*} rating
 * @returns
 ****************************/
function ratingTemplate(rating) {
   // begin building an html string using the ratings HTML written earlier as a model.
   let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`;
   // our ratings are always out of 5, so create a for loop from 1 to 5

   // check to see if the current index of the loop is less than our rating
   // if so then output a filled star

   // else output an empty star

   // after the loop, add the closing tag to our string
   html += `</span>`;
   // return the html string
   return html;
}

// test
console.log(randomEntry(recipes));
