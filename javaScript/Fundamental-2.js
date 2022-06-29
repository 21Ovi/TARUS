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

// 1 - 100 : 1+2+3+...+99+100

// const sumUp = function (number) {
//   let box = 0;
//   for (i = 1; i <= number; i++) {
//     box = box + i;
//   }
//   return box;
// };
// console.log(sumUp(100));

// function sumEvenUp(number) {
//   let box = 0;

//   for (i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//       box = box + i;
//     }
//   }
//   return box;
// }

// console.log(sumEvenUp(1000));

// DSA => Data Structure & Algorithm

// Data Structures:
// 1) Array
// 2) Dictionary & Object (JSON => JavaScript Object Notation)
// 3) set
//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
//
// // sum up all the element of an array
//
// let sum = 0;
// for (i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// //console.log(sum);
//
// // sum up both arrays with same index number
//
// const arr3 = [];
//
// for (i = 0; i < arr.length; i++) {
//   arr3.push(arr[i] - arr2[i]);
// }
//
// console.log(arr3);

const array = [];

for (i = 0; i <= 100; i++) {
  array.push(i);
}

// console.log(array);

let sum = 0;
for (i = 0; i < array.length; i++) {
  sum = sum + array[i];
}

// console.log(sum);

// function findDuplication(array) {
//   let object = {};
//   const result = [];

//   array.forEach(function (item) {
//     if (!object[item]) {
//       object[item] = 0;
//     }
//     object[item] += 1;
//   });

//   for (var prop in object) {
//     if (object[prop] >= 2) {
//       result.push(prop);
//     }
//   }

//   return result;
// }

// console.log(findDuplication([1, 2, 3, 4, 5, 6, 4, 8, 9, 9, 8]));

// Task : subtract elements from 2 arrays

// Factorial

// 5! = 5 * 4 * 3 * 2 * 1
// 5! = 1 * 2 * 3 * 4 * 5

function factorail(f) {
  let fact = 1;
  for (let i = 1; i <= f; i++) {
    fact = fact * i;
    //i   f
    //1 * 1
    //2 * 2
    //3 * 6
    //4 * 24
    //5 * 120
  }
  return fact;
}

// console.log(factorail(5));
// console.log(factorail(20));

// ArmStrong Number Converter
// Armstong of 21 =  21^10
// Armstong of 2 =  2^10

// function ArmstrongConverterExpression(number) {
//   return number ** 10;
// }

// const ArmstrongConverterDeclaration = function (number) {
//   return number ** 10;
// };

// const ArmstrongConverterArrow = (number) => number ** 10;

// console.log(ArmstrongConverterExpression(10));
// console.log(ArmstrongConverterDeclaration(10));
// console.log(ArmstrongConverterArrow(10));

// Prime Number

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }

//   for (i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(41));

// Approch 2
// wrong
// function isPrime(num) {
//   for (i = 2; i * i <= num; i++) {
//     if (num % 2 === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(isPrime(9));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function squareUp(array) {
//   for (i = 0; i < array.length; i++) {
//     array[i] = array[i] * array[i];
//   }
//   console.log(array);
// }

// squareUp(arr);

// Find highest value in array

// const arr = [45, 56, 12, 87, 12, 78, 96, 24, 47, 100, 78, 52];
// const arr2 = [45, 56, 12, 87, 12, 78, 96, 24, 47];

// const fetchHighestElement = (arr) => {
//   let max = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log(fetchHighestElement(arr));
// console.log(fetchHighestElement(arr2));
