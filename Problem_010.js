/*

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/

let result = 0;
let limit = 2000000;

function isPrime(num) {
	for (let i = 2; i < (Math.floor(Math.sqrt(num))+1); i++) {
		if (num % i === 0) return false;
	}
	return true;
}

for (let i = 2; i < limit; i++) {
	if (isPrime(i)) result += i;
}

console.log("Project Euler \nProblem 010 \nResult: " + result);