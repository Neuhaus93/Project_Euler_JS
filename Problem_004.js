/*

A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

let result = -1;

for(let i = 100; i < 1000; i++) {
	for(let j = 100; j < 1000; j++) {
			if(i*j > result) {
				let resultString = String(i*j);
				result = (resultString == resultString.split("").reverse().join("")) ? i*j : result;
			}
	}
}

console.log("Project Euler \nProblem 004 \nReult: " + result);

