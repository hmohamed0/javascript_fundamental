// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
function tellFortune(children,partner,location,job) {
var future = 'You will be a ' + job + ' in ' + location + ' and married to ' + partner +'  with ' + children +' kids.';
console.log(future);
}
tellFortune(10,'Brad Pit','somewhere in Africa','adopting oprhans');
tellFortune(2,'Will Smith','Los Angeles','Actress');
tellFortune(5,'Shaq','Miami','Basketball Coach');
// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!
// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
function calculateAge(birthYear, currentYear) {
    var age = currentYear - birthYear;
    console.log('You are either ' + age + ' or ' + (age - 1));
}
calculateAge(1988, 2012);
calculateAge(1987, 2012);
calculateAge(1986, 2012);
// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
function calculateSupply(age,perDay) {
  var maxAge = 100;
  var amount = (perDay * 365) * (maxAge - age);
  var supply = 'You will need ' + amount + ' cans of coke to last you until the ripe old age of ' + maxAge;
  console.log(supply);
}
calculateSupply(29, 4);
calculateSupply(28, 5);
calculateSupply(27, 20);
	
// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
function calcCircumference(radius) {
	var circum = 2 * Math.PI * radius;

	console.log("The circumference is " + circum)
}
	calcCircumference(3);


function calcArea(radius) {
	area = Math.PI * Math.pow(3,2)

	console.log("The area is " + area)
}
	calcArea(3)
// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function celsiusToFahrenheit(c){
	f = (c * 9/ 5) + 32;
	console.log(c + "°C is " + f + " °F ")
}


function fahrenheitToCelsius(f) {
  c = (f - 32) * 5 / 9;
  console.log(f + "°F is " + c + "°C");
}

celsiusToFahrenheit(20);
fahrenheitToCelsius(30);

