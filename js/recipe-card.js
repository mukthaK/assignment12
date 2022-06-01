// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publicly available method that when called, will log out the recipe within the console so that the recipe information looks like this:
// Guacamole Serves: 4 Ingredients: - 3 Avocados- 1 Lime- 1 Teaspoon Salt- 1/2 Cup Onion- 3 Tablespoons Cilantro- 2 Diced Tomatoes- 1 Teaspoon Garlic- 1 Pinch Ground Pepper
const recipe = {
    title: 'Guacamole',
    serving: 4,
    ingredients: ['3 Avocados', '1 Lime', '1 Teaspoon Salt', '1/2 Cup Onion', '3 Tablespoons Cilantro', '2 Diced Tomatoes', '1 Teaspoon Garlic', '1 Pinch Ground Pepper'],
    getRecipe: function() {
        console.log(`${this.title}\nServes: ${this.serving}\nIngredients:`);
        for(let item of this.ingredients){
            console.log(`- ${item}`);
        }
    }
}
recipe.getRecipe();