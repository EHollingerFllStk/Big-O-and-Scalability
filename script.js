//Linear Time - O(n) - good

// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const large = new Array(100).fill('nemo');

// function findNemo(array) {

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }

// }

// findNemo(large);  // 0(n) --> Linear Time

// Constant Time O(1) - excellent

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]);  //O(1)
  console.log(boxes[1]);  //0(2)
}

logFirstTwoBoxes(boxes)


