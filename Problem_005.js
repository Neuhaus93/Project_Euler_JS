/*

2520 is the smallest number that can be divided by each 
	of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible
	 by all of the numbers from 1 to 20?

*/

let result = -1;

let count = 12;
let isAnswer = false;
let limit = 20;

while (!isAnswer) {
	for(let i = 3; i <= limit; i++) {
		if(count % i !== 0){
			count +=2;
			break;
		}
		if(count % i === 0 && i === limit){
			result = count;
			isAnswer = true;
		} 
	}
}


console.log("Project Euler \nProblem 005 \nReult: " + result);

