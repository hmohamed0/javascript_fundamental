// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
var job = "Drug Lord";
var numkids = 2;
var partname = "Pablo Escobar";
var loc = "Brazil";
("You will be a "+ job+ " in "+ loc+ ", and married to "+ partname+ " with "+ numkids+ " kids.")

"You will be a Drug Lord in Brazil, and married to  Fidel Castro with 2 kids."


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!
var currYear = 2014;
var yearBorn = 1988;
var age1 = currYear - yearBorn;
var age2 = age1 - 1; 
("They are either " + age1 + " or " + age2 +" years old")

"They are either 26 or 25 years old"

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var maxAge = 90;
var perDay = 1;
var Age = 28;
var yearMax = 1 * 365;
var lifeTime = (maxAge - Age) * yearMax

("You will need a lifetime supply of "+ lifeTime+ " snacks to last you until the ripe old age of "+ maxAge)

"You will need a lifetime supply of 22630 snacks to last you until the ripe old age of 90"
// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
var radius = 6
var circumference = Math.PI * 2*radius;
var area = Math.PI * radius*radius;

("The circumference is " + circumference + " and the area is " + area);

"The circumference is 37.69911184307752 and the area is 113.09733552923255"

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
var celsius = 30;
var celsiusInF = (celsius*9)/5 + 32;
var fahrenheit = 20;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');


