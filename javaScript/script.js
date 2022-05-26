// Note
//  Javascript is a high level object oriented, multi paradgim programming language

// Object oriented Programming Languages: Java, C++
// Functional Orianted Programming Languages: C, Python
//  Multi-Paradgim Programming Language: JavaScript

////////////////// Variables ///////////////////////////////
/**
 * Variable Declaration by using special characters (var, let, const)
 * assign values to declared variables
 
 var amit = 8522585;
 let kevin = "Dakoria";
 
 const monal = "shah";
 
 amit = "Chaudhary";
 kevin = "Mali";
 
 amit = "chaudhary";
 
 console.log(123);
 
 console.log(amit, kevin, "monal");
 
 const Test_value21 = 21;
 */

/**
 * Declare a variable called 'Country','continent' and 'population' and assign their values according to your favourite country
 * and log their values (HINT: console.log() )
 */

// whenever you get a big problem, never get scared instead try to divide 1 big problem into multiple small problems and you will see a way out!

// const country = "India";
// const continent = "Asia";
// const population = "7.8 Million";

// console.log(country);
// console.log(continent);
// console.log(population);

// console.log(
//   " I live in "+ country + "and it is in" +continent+ " and my country have population of" + population + "yes it is turuuu"
// );

//' I live in india and it is in asia and my country have population of 7.8 million'

////////////////////////////////// Data-Types ///////////////////////////////////////////////
/**
 * there are 7 primitives data types
 *
 * 1: Number: used for decimal and integer
 * Ex: let age = 23
 *
 * 2: String: Sequence of characters, used for decimal, integers, characters, words etc...
 * Ex: let name = 'Kevin', "Amit", `Monal`
 *
 * 3: Boolean: Logical type that can only be true or false (1 = true, 0 = false);
 * Ex: var elidgibleForDriving = true;
 *
 * 4: undefined: a value which is not defined
 * Ex: let numbers;
 *
 * 5: Null: a empty value
 * Ex: let kev = null;
 *
 * 6: Symbol (ES2015) : value that is unique and cannot be changed
 *
 * 7: BigInt (ES2020): an intiger which is larger than the number can hold
 *
 * Note: java script has dynamic typing: we do no have to manully define the datatype of the value;
 *
 *
 
 const program = "Javascript";
 const num = 123;
 const isIdiot = true;
 console.log(typeof program);
 console.log(typeof num);
 console.log(typeof isIdiot);
 
 const mobile = "+91 8511397395";
 console.log(typeof mobile);
 
 */

/////////////////////////// Basic Operators ///////////////////////////

//Maths operators

/**
let x = 10;
 * 
 
 console.log(x);
 
 x = x + 5; // x = 15 + 5
 console.log(x);
 
 //x = x + 5, can be shorten with this syntax:
 x += 10;
 console.log(x);
 
 console.log((x -= 10));
 x++;
 x++;
 x--;
 console.log(x);
 */

/**
 * Increment x = x + 1, x++
 * Decrement x = x - 1, x--
 
 // Comparision Operators
 
 let y = 10,
 z = 10;
 console.log(y > z);
 console.log(y < z);
 
 console.log(y <= z); // is less then or equal to
 console.log(y >= z); // is greater then or equal to
 
 // Equality Operators
 
 const x = 10;
 const x2 = 10;
 const x3 = 12;
 const x4 = "10";
 
 console.log(x == x2);
 console.log(x === x4);
 */

/**
 * //////////////////////-------------ASSIGMENT--------------///////////////////////////////
 * 1) If your favourite country split in half and each half would contain half the population, then how many people would live in each half.
 *
 * 2) Increase the population of your fav country by 1 and log the result
 *
 * 3) Finland has a population of 6 Million. Does your country have more then finland?
 *
 * 4) The average population of a country in this woulrd is 33 Million people. Does your country have less people then average country?
 *
 * 5) Based on the variables you created, create a new variable 'Description' which contains a string with this format.
 *  'Portugal is in Europe, and its has population of 11 Million. People speak portuguese
 *
 */

// it is hard but it is meant to be!!, so that you guys become tuffer, you guys owe this challenge to yourself

/**
const MyCountry = "India";
let population = 137;
const halfPopulation = population / 2;

console.log(
  "Total number of people lives iun first half is :" + halfPopulation
);

population++;
console.log(population);

const finland = 6;
const isMyCountryPopulationGreaterThanFinland = population > finland;
console.log(
  "is my country have population more then finland? " +
    isMyCountryPopulationGreaterThanFinland
);

/**
 * suppose, if we need to write a program of multiple lines we have 2 options
 * 1: Quotes '' or double quotes(results will be same)
 * 2: back ticks ``
 const myName = "Monal";
 const MyNewName = "Monal Shah";
 const myPetName = `Panda`;
 
 console.log(myName, MyNewName, myPetName);
 console.log("my name is " + myName + "\n I live in India");
 console.log(`my name is ${myName} 
 I live in India`);
 
 const str = `My Name is ${myPetName} 
 I live in India
 my age is ${2022 - 2002}`;
 console.log(str);
 
 ///////////////////////// IF ELSE /////////////////////////
 // Driving License Elidgibilty Testing Application
 
 const ElidgibleAge = 18;
 const myAge = Number(prompt("Enter Your Age"));
 
 if (myAge >= ElidgibleAge && myAge <= 70) {
   console.log(`You are Elidgibe for Driving License 🚗🏎️`);
  } else if (myAge > 70) {
    console.log("You are too old for a License, please take some rest grandpa🧓");
  } else {
    console.log(`Sorry, You are not Elidgible for a Driving Licecnse 😟`);
  }
  
  */

/**
  * 
  //Grading Application
  
  // const TotalMarks = Number(prompt("Enter your marks"));
  const TotalMarks = 67;
  if (TotalMarks < 30) {
    console.log("Fail");
  } else if (TotalMarks < 45) {
    console.log("C Grade");
  } else if (TotalMarks < 80) {
    console.log("B Grade");
  } else if (TotalMarks < 100) {
    console.log("A Grade");
  } else {
    console.log("Please enter valid grade");
  }
  
  */

/**
 * 1: Recreate the 'description' variable from the last assignment, this time using the template literal syntax
 *
 * 2: If your country's population is greater that 33 million, log a string like this to the
      console: 'Portugal's population is above average'. Otherwise, log a string like
      'Portugal's population is 22 million below average' (the 22 is the average of 33
       minus the country's population)

*  3: After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
 */

/** 
  Coding Challenge #2

  Use the BMI example from Challenge #1, and the code you already wrote, and
  improve it.

  Your tasks:
  1. Print a nice output to the console, saying who has the higher BMI. The message
  is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

  2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
  BMI (28.3) is higher than John's (23.9)!"
  
  Hint: Use an if/else statement 😉

      GOOD LUCK 😀
 */


