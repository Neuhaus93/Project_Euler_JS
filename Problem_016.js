/*

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

*/

let result = -1;

const power = 1000;

let elevNumber = BigInt(Math.pow(2, power));
elevNumber = String(elevNumber);

let temp = 0;
for (let i = 0; i < elevNumber.length; i++) {
	temp += Number(elevNumber.charAt(i));
}

result = temp;


console.log("Project Euler \nProblem 016 \nResult: " + result);