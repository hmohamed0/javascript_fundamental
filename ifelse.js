// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
function greaterNum(number1, number2) {
 	if (number1 > number2) {
 		console.log(number1 + " is greater than " + number2)
 	}
 	else if (number2 > number1) {
 		console.log(number2 + " is greater than " + number1)
 	}
 }
 
 greaterNum(200, 110)
 greaterNum(21, 24)
 
  

// EXERCISE: The World Translator
function helloWorld(lang){
	if (lang === 'es'){
	   console.log('Hola, cómo estás?');
	}else if (lang === 'de') {
	   console.log('hallo hoe gaat het');
	
	}else {console.log('Hello, World');}

	}

	helloWorld('es');
	helloWorld('de');
	helloWorld();
// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.
function assignGrade(score) {
    if (score > 100) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log('You got a ' + assignGrade(85));
console.log('You got a ' + assignGrade(55));
// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
function pluralize(noun,number){
  if (number ===1) {
     console.log(number +" "+ noun);
   } else {
     console.log(number + " " + noun + "s");
   }
 }
 pluralize("tiger",10);
 pluralize("pitbull",4);
 



