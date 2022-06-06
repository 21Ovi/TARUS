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
 */
