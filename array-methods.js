
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");
var ell = document.getElementById("sentence");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
planets.forEach(function(outputPlanets) {
  //el.innerHTML += outputPlanets + "<br>"; --> this will output vertical
});

// Use the map method to create a new array where the first letter of each planet is capitalized

var firstLetterCapitalized = planets.map(function(outputPlanets){
  return outputPlanets.charAt(0).toUpperCase() + outputPlanets.slice(1);
});

el.innerHTML += firstLetterCapitalized + "<br>";


// Use the filter method to create a new array that contains planets with the letter 'e'

var newArr = planets.filter(function(newLetter){
  var eOnly = newLetter;
  return eOnly.includes("e")
});

el.innerHTML += newArr + "<br>";


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

function addz(prev, curr){
  return prev + " " + curr;
}
var concats = words.reduce(addz);

ell.innerHTML += concats + "<br>";

