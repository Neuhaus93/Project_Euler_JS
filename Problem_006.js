/*

The sum of the squares of the first ten natural numbers is,

1^2+2^2+...+10^2=385
The square of the sum of the first ten natural numbers is,

(1+2+...+10)^2=55^2=3025
Hence the difference between the sum of the squares of the 
	first ten natural numbers and the square of the sum is 3025−385=2640.

Find the difference between the sum of the squares of the first one hundred 
	natural numbers and the square of the sum.

*/

let result = -1;

const limit = 100;

const sumOfSquares = function() {
	let temp = 0;
	for (let i = 1; i <= limit; i++) {
		temp += Math.pow(i, 2);
	}
	return temp;
}

const squareOfSums = function() {
	let temp = 0;
	for (let i = 1; i <= limit; i++) {
		temp += i;
	}
	return Math.pow(temp, 2);
}

result = squareOfSums() - sumOfSquares();

console.log("Project Euler \nProblem 006 \nReult: " + result);

