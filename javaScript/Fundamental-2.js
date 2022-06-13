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
 */


