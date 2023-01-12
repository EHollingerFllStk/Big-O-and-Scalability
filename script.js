//Linear Time - O(n) - good

//const nemo = ['nemo'];
// const everyone = ['dory', 'nemo', 'bruce', 'marlin', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank',];
// //const large = new Array(100).fill('nemo');

// function findNemo(array) {

//   for (let i = 0; i < array.length; i++) {
//     console.log('running')
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!');
//       break;
//     }
//   }

// }

//findNemo(everyone);  // 0(n) --> Linear Time

// Constant Time O(1) - excellent

// const boxes = [0, 1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]);  //O(1)
//   console.log(boxes[1]);  //0(2)
// }

// logFirstTwoBoxes(boxes)

//Exercise 1
// What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//   let a = 10; //O(1)
//   a = 50 + 3; //O(1)

//   for (let i = 0; i < input.length; i++) {  // O(n)
//     anotherFunction();  //O(n)
//     let stranger = true; //O(n)
//     a++; // O(n)
//   }
//   return a;  // O(1)
// }

// Answer: Big O(3 + 4n) - linear time

//Exercise 2
// What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//   let a = 5;  // O(1)
//   let b = 10; // O(1)
//   let c = 50; // O(1)
//   for (let i = 0; i < input; i++) {
//     let x = i + 1  //O(n)
//     let y = i + 2; //O(n)
//     let z = i + 3; //O(n)

//   }
//   for (let j = 0; j < input; j++) {
//     let p = j * 2;  //O(n)
//     let q = j * 2;   //O(n)
//   }
//   let whoAmI = "I don't know"; //O(1)
// }

//Linear O(n)  Big O(4+5n)

//Big O Rule 1 - Always Worst Case - always default to the worst case scenario in terms of scalability

//Big O Rule 2 - Drop the Constants

// function PrintFirstItemThenFirstHalfThenSayHi100Times(items) {
//   console.log(items[0]);

//   var middleIndex = Math.floor(items.length / 2);
//   var index = 0;

//   while (index < middleIndex) {
//     console.log(items[index]);
//     index++;
//   }

//   for (var i = 0; i < 100; i++) {
//     console.log('hi');
//   }
// }

//Big O (1 + n/2 + 100) --> O(n + 1) --> O(n) drop the constants

//Big O Rule 3 - Different Terms for Inputs(different inputs should have different variables)

// function compressBoxesTwice(boxes, boxes2) {
//   boxes.forEach(function(boxes) {
//     console.log(boxes);
//   });

//   boxes2.forEach(function(boxes) {
//     console.log(boxes);
//   });
// }

//O(2n) --> drop the constants --> O(n), but diff terms for inputs so that O(a+b) not O(2n)

///////  O(n^2)  ////////
//Ex interview Question     *********************
//Log all pairs of array
// const boxes = ['a', 'b', 'c', 'd', 'e'];

// function logAllPairsOfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j])
//     }
//   }
// }

// logAllPairsOfArray(boxes)

///  O(n*n) --> O(n^2) - Quadratic Time - not effecient (Horrible!) 
//If its nested its O(n^2)
// Interview question make O(n^2) more efficient 

//Rule 3 - Part 2
// function compressBoxesTwice(boxes, boxes2) {
//   boxes.forEach(function(boxes) {
//     console.log(boxes);
//   });

//   boxes2.forEach(function(boxes) {
//     console.log(boxes);
//   });
// }

//O(2n)-- > drop the constants-- > O(n) , but diff terms for inputs so that O(a+b) because 2 different arrays.
//Any step in the same indentation you add --> is O(a+b)
//If O(a*b) then loops are nested and O(n^2)
//Any step that is nested you multiply

//Big O - Rule 4- Drop NonDominants - Worry most about the dominant Term as you scale

// function printAllNumbersThenAllPairSums(numbers) {
//   console.log('these are the numbers:');
//   numbers.forEach(function(number) {
//     console.log(number);
//   });

//   console.log('and these are thier sums:');
//   numbers.forEach(function(firstNumber) {
//     numbers.forEach(function(secondNumber) {
//       console.log(firstNumber + secondNumber);
//     })
//   })
// }

// printAllNumbersThenAllPairSums([1, 2, 3, 4, 5])

//O(n+ n^2) --> O(n^2) --> drop the n and keep the dominant term O(n^2)

//Scalable means we worry about very large inputs

//All array methods have a Big O cost associated with them:
//Ex .pop() is O(1) 
//    .unshift is O(n)

//Certain data structures cost less for ex why use an array vs an object. Array might be less bu object allows use of more efficient functions.

//Data Structures - ways to store data
//Algorithms - functions/ways to  use data structures to write programs

//Good Programmers: Choose good data structures + write good algorithms = efficient programs


// O(n!) - Factorial Time - most costly and steepest - adding a nested loop for every input that we have 
//Probablay never see it - very expensive!!!

//////  Exercise: Space Complexity //////
//What is the space complexity of this in Big O? 

// function boooooo(n) {
//   for (let i = 0; i < n.length; i++) {
//     console.log('booooo!')
//   }
// }

// boooooo([1,2,3,4,5])

// Answer: O(1)

//What is the space complexity of this in Big O? 

// function arrayOfHiNTimes(n) {
//   let hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = 'hi';
//   }
//   return hiArray;
// }

// arrayOfHiNTimes(6)  //O(n)

// Exercise Space Complexity //

// function booooo(n) {
//   for (let i = 0; i < n.length; i++) {
//     console.log('booooo!');
//   }
// }

// booooo([1, 2, 3, 4, 5])

//What is the Space Complexity of this?
// (don't include space taken by inputs)Don't really care  about how big input is (only have control within the function and how much space it takes)
//The only memory it uses is storing let i = 0 so it's only 1.

//Answer: Space Complexity is O(1)

// function arrayOfHiNTimes(n) {
//   let hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = 'hi';
//   }
//   console.log(hiArray);
// }

// arrayOfHiNTimes(6)

//What is the space complexity of this?
// 1) new Data structure - hiArray = []
// 2) let i 
// 3) each item of array is additional memory 
// ultimately O(8n) --> O(n) - b/c get rid of constants

/// Trade off b/t saving time and saving space - nn to decide what your optimizing for time or space.

//Twitter Exercise //
//Twitter wants to allow users to be able to grab thier last tweet and thier first tweet

// Find 1st, Find Nth

//const array = ['hi', 'my', 'teddy'];

// array[0]; //1st = O(1)
// array[array.length - 1]; // last or teddy = O(1)

//O(2) --> O(1) = constant Time

//Compare tweets with dates - What is the big O of this operation?

// const array = [{
//   tweet: 'hi',
//   date: 2012,
// },
// {
//   tweet: 'my',
//   date: 2 - 14
// },
// {
//   tweet: 'teddy',
//   date: 2018
// }];

// array[0]; //1st = O(1)
// array[array.length - 1]; // last or teddy = O(1)

//Because of the objects inside the array it will be nested loops to go through all the data. If person has a lot of tweets it will take alot of time.

//Answer:  O(n^2) 
//Tell boss to store in a different format so that it is not so costly

/// Interview Question ////

//What is the Big O of this:

//console.log('helwoshejhekhiuhudsh'.length)

// It depends on the language
//js .length is built in - it is a property of an object. // O(1) in JS

//JS Loops

const nemo = ['nemo'];
const everyone = ['dory', 'nemo', 'bruce', 'marlin', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank',];

const large = new Array(100).fill('nemo');

function findNemo(array) {

  for (let i = 0; i < array.length; i++) {
    console.log('running')
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }

}

findNemo(everyone);

const findNemo2 = array => {
  array.forEach(fish => {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
    }
  })
}

const findNemo3 = array => {
  for (let fish of array) {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo2(everyone)
findNemo3(everyone)

// 3 different way to write/read the code
// Is important when working with team-which code does team consider most readable?








































