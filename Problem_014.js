/*

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. 
	Although it has not been proved yet (Collatz Problem), 
	it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/

let result = -1;
let biggestSeq = -1;

const limit = 1000000;

function getTerms(num) {
	const term = num;
	let count = 1;
	let isAnswer = false;

	while(true) {

		// console.log(num);
	
		if(num % 2 === 0) {
			num = num / 2;
		} else {
			num = 3 * num + 1;
		}
	
		count++;
		if (num === 1) break;
	}

	if (count > biggestSeq) {
		biggestSeq = count;
		result = term;
		console.log(result, biggestSeq);
		isAnswer = true;
	}
}

for (let i = 1; i < limit; i++) {
	getTerms(i);
}

console.log("Project Euler \nProblem 014 \nResult: " + result);