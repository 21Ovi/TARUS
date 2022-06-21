"use strict";
// This must be on the first line, otherwise it won't work
// The strict mode will show errors on developers console mode
// Bugs will be visib;e
////////////////////////////////// FUNCTIONS //////////////////////////////////

/**
 * 
 // function creation
 function kevin() {
     console.log("Kevin is good");
    }
    
    
// Calling the Function
kevin();

function fruitProcessor(apples, oranges) {
  const app = apples;
  const ora = oranges;

  const juice = `Juice with ${app} apples and ${ora} oranges`;

  return juice;
}

const appleJuice = fruitProcessor(10, 80);
console.log(appleJuice);
*/

/////////////////////////////////////////////////////// Calling a funciton inside a Function ///////////////////////////////////////////////////////

// Function Declaration
/**
const cutPiece = function (fruit) {
  return fruit * 4;
};

// Arrow Function

const cutP = (fruit) => fruit * 4;


// Function Expression

function cutPieces(fruit) {
  return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces
  with total number of apples used are ${apples} and total number of oranges used are ${oranges}`;

  return juice;
};

// const apples = prompt("Enter Number of apples you want");
// const oranges = prompt("Enter Number of oranges you want");

// alert(fruitProcessor(apples, oranges));

function sumUp(x, y) {
  console.log(x + y);
}

//sumUp(10, 45, 78);

function minusDown(x, y) {
  console.log(x - y);
}

function Master(x, y) {
  minusDown(y, x);
  sumUp(x, y);
}

Master(10, 7);
Master(1, 7);
Master(10, 71);

*/
/**
 * 1) Create a Function which takes 2 parameters and multiply them and log the results
 *
 * 2) Create a Function which takes 2 Parameters and divide it
 *
 * 3) Create a Function which takes 2 Parameters and then add them using  sumUp function  (Call Function inside a Function)
 *
 * 4) Create a Function which takes 2 paramters and then log it with Addition, Subtraction, Multiplication, Divistion in one function,
 * Hint: You can call all funciton inside that master Funciton
 
 function code(monal, kevin, mansi) {
   const panda = kevin + mansi;
   const newPanda = monal + panda;
   return newPanda;
  }
  
  console.log(code("panda", 12, 23));
  */

///////////////////////////// ARRAY /////////////////////////////////////

// const ovi = 21;
// const kevin = 12;
// const monal = 3;
// const amit = 30;
// const panda = 31;

// const team = [21, 12, 3, 30, 31, "monal", "kevin"];

////////////////////////////// For Loop ////////////////////////////

// for loop takes 3 parameters
// 1: Initialization
// 2: condition
// 3: Incrementation
let i;
//i++ means i = i + 1 (Incrementation)
// for (i = 0; i <= 6; i++) {
//   console.log(team[i]);
// }

// for (i = 0; i <= 100; i++) {
//   console.log(i);
// }

// log the first 100 even numbers

// for (i = 0; i <= 100; i++) {
//   console.log(i % 2);
// }

// log table of any given number like this 2 * 1 = 2

// for (i = 1; i <= 10; i++) {
//   console.log(`2 * ${i} = ${2 * i}`);
// }

// function printTable(num) {
//   //num = Number(prompt("Enter the number of your wish 😊"));

//   for (i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
//   }
// }

// printTable(6);
// printTable(61);

// const monal = "panda";

// if (monal !== "panda") {
//   console.log("Monal is Panda🐼");
// } else {
//   console.log("Monal is Not a panda 😞");
// }

// Print the sum of 1 to given number (n)

// let sum = 0;

// for (i = 1; i <= 10; i++) {
//   sum = sum + i;
// }

// console.log(sum);
// //sum = 55
// // i = 10

// const sumUp = function (n) {
//   let sum = 0;
//   for (i = 1; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// };

// console.log(sumUp(50));

// Task: log sum of first 100 even number
// Task: log sum of first 100 odd number
// Task: create a function which takes a parameter and will return it's Factorial
// Factorail: 5! = 1 * 2 * 3 * 4 * 5
// Task: create a funciton which will take a parameter and return a boolean to check if the given number in a prime number or not..
