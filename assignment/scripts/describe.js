// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we make a variable called name and set it to Dane as a string.
// Then we see if name is set to Mary.  
// It is not so the console.log output is 'How do you do'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret.
// We make a second variable called code and set it to the number 123.
// We see if code is equal to the number 123.  It is, so we set secret to 'super'.
//We then set code to 123 muptiplied by 2, which is 256. We see if code is now greater than 250. It is, so we set
//secret to 'duper'.  The console.log output is duper.  

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// We make a variable called isStudent and set it as true.
// We make a second variable called age and set it to the number 34.
// we make a third variable called zip and set it to the number 55407.
// First we consider if isStudent is true and zip is greater than 80000.  isStudent is true, but zip is less than 80000,
//so we consider if isStudent is false or the age is less than 30.  Neither are true, so we consider if just isStudent is true.  It is.
//The console.log output is "Welcome to Prime!" Since we have a condition thats accurate we stop there without going to the else condition.
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/* 
set colorOne to 'red' and colorTwo to blue; //FIX - colorOne is set to 'red' but the instructions say it is set to 'blue',
// colorTwo is set to 'blue' but the instrucions say set to 'red'  so change colorOne to 'blue' and colorTwo to Red
let mix = true;
let colorOne = 'red'; 
let colorTwo = 'blue'
if (mix === true) {
  colorOne = 'purple'; // FIX - The instructions say that both colorOne and colorTwo should be set to purple if mix is equal to true.  
// The code only has colorOne changing to purple so we should change colorTwo to purple as well.  

}
*/
// The instructions say that both colorOne and colorTwo should be set to purple if mix is equal to true.  
// The code only has colorOne changing to purple so we should change colorTwo to purple as well.  

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) //FIX - || means or, and the direcitons say and.  We should change || to && which is the way to write and.
{ 
  console.log('throw away the food!');
}
*/

//FIX - 

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age)// FIX -  The instrucions say if age is greater than or equal to minAge, but our code says minAge is less than or
equal to age.  It should be written (age >= minAge)
{
  console.log('no entry'); //FIX - our instructions say that if age is greater than or euqal to minAge we should log 'enter'.  Our code 
  says the opposite.  So our first outcome should log 'enter'
} else {
  console.log('enter'); //FIX - it doesn't say anything in the directions about what the outcome should be if age is less than minAge, but 
  assuming the else is the other outcome we should change the second log to 'no entry'.
}
*/

