/*

By starting at the top of the triangle below and moving to adjacent numbers on the row below, 
	the maximum total from top to bottom is 23.

   3
  7 4
 2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

		      75
	         95 64
            17 47 82
           18 35 87 10
          20 04 82 47 65
         19 01 23 75 03 34
        88 02 77 73 07 63 67
       99 65 04 28 06 16 70 92
      41 41 26 56 83 40 80 70 33
     41 48 72 33 47 32 37 16 94 29
    53 71 44 65 25 43 91 52 97 51 14
   70 11 33 28 77 73 17 78 39 68 17 57
  91 71 52 38 17 14 91 43 58 50 27 29 48
 63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. 
	However, Problem 67, is the same challenge with a triangle containing one-hundred rows; 
	it cannot be solved by brute force, and requires a clever method! ;o)

*/

let result = -1;
const nums = [3, 7, 4, 2, 4, 6, 8, 5, 9, 3];
drawPyramid(nums);
// const nums = [0, 1, 2, 3, 4, 5]

// let nums = '75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34' +
// 			'88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33' + 
// 			'41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14' +
// 			'70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48' +
// 			'63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23';

// nums = nums.replace(/ /g, '');

// nums = nums.match(/.{1,2}/g);

// for(let i = 0; i < nums.length; i++) {
// 	nums[i] = Number(nums[i]);
// }

let mutableArr = nums;
let sum = [];
while (mutableArr.length > 1) {
	let save1 = 0;
	let save2 = 0;
	
	let counter = 0;
	for (let i = nums.length - numOfRows(nums.length); i < nums.length - 1; i++) {
		sum[counter] = nums[i] + nums[i+1];
		counter++;
		save1++;
		if (save1 > 50) break;
	}

	
	mutableArr = mutableArr.slice(nums.length - numOfRows(nums.length), nums.length);
	drawPyramid(mutableArr);
	save2++;
	if (save2 > 50) break;
}

console.log(sum);

// Find the number of rows for a pyramid given an array length
function numOfRows(num) {
	let numInRow = 0;
	let count = 0;

	while (count < num) {
		numInRow++;
		count +=numInRow;
	}

	if (count !== num) {
		return -1;
	} else {
		return numInRow;
	}
}

// Draw a pyramid in the console log
function drawPyramid(nums) {
	let rows = numOfRows(nums.length);
	if (rows === -1) {
		console.log('not a perfect pyramid');
		return -1;
	}
	let currentRow = 1;

	let temp = rows - 1;
	let index = 0;
	for (let i = 1; i <= rows; i++) {
		let str = '';
		for (let j = 1; j <= rows - currentRow; j++) {
			str += ' ';
		}
		for (let k = 1; k <= currentRow; k++) {
			str += nums[index] + ' ';
			index++;
		}		currentRow++;
		console.log(str);
	}
}


console.log("=============");
console.log("Project Euler \nProblem 018 \nResult: " + result);
console.log("=============");