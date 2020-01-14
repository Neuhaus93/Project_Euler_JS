/*

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

let result = -1;

let limit = 998;
let a, b, c = -1;

let isAnswer = false;

for (a = 1; a < limit - 1; a++) {
	for (b = a + 1; b < limit; b++) {
		let temp = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
		if (Math.floor(temp) === temp) {
			c = temp;
			// console.log(a, b, c);
		}
		if (a + b + c === 1000 && Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2)) {
			console.log("The final variables are: " + a, b, c);
			isAnswer = true;
			break;
		}
	}
	if(isAnswer) break;
}

result = a*b*c;

console.log("Project Euler \nProblem 009 \nResult: " + result);