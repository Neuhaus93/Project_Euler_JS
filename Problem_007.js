/*

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
	we can see that the 6th prime is 13.

What is the 10 001st prime number?

*/

let result = -1;

const limit = 10001;
let numOfPrimes = 0;
let count = 3;

// console.log("2 is a prime number!");

function isPrime(num) {
	for(let i = 2; i < Math.floor(Math.sqrt(num))+1; i++) {
		if (num % i === 0) return false;
	}
	// console.log(num + " is a prime number!");
	return true;
}

while (numOfPrimes < limit-1) {
	if (isPrime(count)){
		numOfPrimes++;
	} 
	count += 2;
}

result = count-2;

console.log("Project Euler \nProblem 007 \nReult: " + result);

