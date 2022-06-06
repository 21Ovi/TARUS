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
 *
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
 
 // it is hard but it is meant to be!!, so that you guys become tuffer, you guys owe this challenge to yourself
 
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
     
     */

////////////////////////////// Template Literals /////////////////////////////////////
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

//////////////////////////////// Type Conversion abd Coercion ////////////////////////////////
/**
 * 
 // 1. Conversion
 
 // String to Number
 
 const year = "1999";
 console.log(year);
 console.log(Number(year));
 const num = Number(year);
 console.log(num + 10);
 
 // Just for check trying to convert String character to number
 console.log(Number("Panda"));
 console.log(typeof NaN);
 
 // Number to String
 console.log(String(21));
 
 // Type Coersion
 console.log("I am " + 23 + " years old");
 console.log("20" + "10");
 console.log("20" - "10");
 console.log("20" / "10");
 console.log("20" * "10");
 console.log("20" < "10");
 
 let i = "1" + 1;
 i = i - 1;
 console.log(i);
 
 */

//////////////////////////////////////// Truthy and Falsy Values ////////////////////////////////////////

/**
 * 
 console.log(Boolean(0)); // false
 console.log(Boolean(undefined)); //false
 console.log(Boolean("Panda")); // true
 console.log(Boolean({})); // true
 console.log(Boolean("")); // false
 
 // small exersice
 const money = 0;
 
 if (money) {
   console.log("Do not spend it all");
  } else {
    console.log("You should get some money first");
  }
  
  let height;
  
  if (height) {
    console.log("YAY! height is defined");
  } else {
    console.log("Height is not defined");
  }
  */

//////////////////////////////////////// Equality Operators. == Vs ===  ////////////////////////////////////////

/**
 * 
 // if there is one = then it means you are defining
 // if there is two == then it means you are Comparing
 // if there is three === then it means you are Strongly Comparing
 
 const age = "18";
 if (age === 18) {
   console.log("You are adult");
  } else {
    console.log("😁");
  }
  
  console.log(age === 18);
  
  const panda = "Monal Shah";
  const monal = "Monal Shah";
  console.log(panda === monal);
  */

/**
 *Type Conversion and Coercion\

    1. Predict the result of these 5 operations without executing them:
    '9' - '5'; 
    '19' - '13' + '17';
    '19' - '13' + 17;
    '123' < 57;
    5 + 6 + '4' + 9 - 4 - 2;

    2. Execute the operations to check if you were right

    Equality Operators: == vs. ===
    
      1. Declare a variable 'numNeighbours' based on a prompt input like this:
      prompt('How many neighbour countries does your country
      have?');

      2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
      == for now)

      3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
      is greater than 1

      4. Use an else block to log 'No borders' (this block will be executed when
      'numNeighbours' is 0 or any other value)

      5. Test the code with different values of 'numNeighbours', including 1 and 0.

      6. Change == to ===, and test the code again, with the same values of
      'numNeighbours'. Notice what happens when there is exactly 1 border! Why
      is this happening?

      7. Finally, convert 'numNeighbours' to a number, and watch what happens now
      when you input 1

      8. Reflect on why we should use the === operator and type conversion in this
      situation
      // const numNeighbours = Number(
        //   prompt("How many neighbour countries does your country have?")
        // );
        
        //////////////////////////////////////////// Boolean Logic ////////////////////////////////////////
        
        const panda1 = 65;
        const panda2 = 60;
        const panda3 = 45;
        
        if (panda1 > 40 && panda1 < 60) {
          console.log("okay");
        } else if (panda1 > 60) {
          console.log("not okay");
        }
        
        // AND && : if one is false then it will return false
        // OR || : if one is true it will return true
        // NOT ! : it will return opposite
        
        const license = true;
        const vision = false;
        
        console.log(license && vision);
        console.log(license || vision);
        console.log(!vision);
        
        const isTired = true;
        console.log(license && !vision && isTired);
        
        if (license && !vision && isTired) {
          console.log("Good to drive");
        } else {
          console.log("Someone else should drive");
        }
        */
/**
 * 
 ////////////////////////////////////// Switch Statement /////////////////////////////////////////////////
 
 

const day = prompt("Please enter the day");

switch (day) {
  case "Sunday":
    alert("Today is Sunday");
    break;
  case "Monday":
    alert("Today is Monday");
    break;
  case "Tuesday":
    alert("Today is Tuesday");
    break;
  case "Wednesday":
    alert("Today is Wednesday");
    break;
  case "Thursday":
    alert("Today is Thursday");
    break;
  case "Friday":
    alert("Today is Friday");
    break;
  case "Saturday":
    alert("Today is Saturday");
    break;
  default:
    alert("please enter a valid day");
    break;
}
*/
//////////////////////////////////////// Ternary Operator ///////////////////////////////////////////
/**
 const age = Number(prompt("enter Enter your age: "));
 
 if (age >= 18) {
   alert("You are elidgible for a License");
  } else {
    alert(" You are not");
  }
  
  age >= 18 ? alert("You are elidgible for a License") : alert("You are not ");
  
  */
/**
 * The switch Statement
  1. Use a switch statement to log the following string for the given 'language':
    chinese or mandarin: 'MOST number of native speakers!'
    spanish: '2nd place in number of native speakers'
    english: '3rd place'
    hindi: 'Number 4'
    arabic: '5th most spoken language'
    for all other simply log 'Great language too :D'

The Conditional (Ternary) Operator

  1. If your country's population is greater than 33 million, use the ternary operator
  to log a string like this to the console: 'Portugal's population is above average'.
  Otherwise, simply log 'Portugal's population is below average'. Notice how only
  one word changes between these two sentences!
  
  2. After checking the result, change the population temporarily to 13 and then to
  130. See the different results, and set the population back to original
*/

/**
  * Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:

§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
  * 
  */

// DRY
// Don't Repeat Yourself
