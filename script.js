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

//Big O Rule 2 - Drop the Constants

function PrintFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log('hi');
  }

}

//Big O (1 + n/2 + 100) --> O(n + 1) --> O(n) drop the constants