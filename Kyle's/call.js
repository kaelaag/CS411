const apiAddress = 'https://api.spoonacular.com/recipes/findByIngredients';
const buttonElement = document.getElementById('search');

// Add a handler for the 'click' event by providing a callback function.
// Whenever the element is clicked, a pop-up with "Element clicked!" will
// appear.
buttonElement.addEventListener('click', function (event) {
   //alert('Element clicked through function!');
   let x = document.getElementById("searchText").value;
   alert('great');
   //const apiKey = '53af852e7fec48008d78fca38997fbbb';
   jQuery.get('https://api.spoonacular.com/recipes/random?apiKey=53af852e7fec48008d78fca38997fbbb') 
});
/*
function searchCall() {
  let x = document.getElementById("searchText").placeholder;
  alert(searchText.value);
  //jQuery.get apiAddress; 

}
*/
