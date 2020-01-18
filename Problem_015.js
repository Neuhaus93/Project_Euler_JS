/*

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
	there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?

*/

let result = -1;

const size = 20;
const numOfMoves = size * 2;

const numerador = function(){
	let temp = numOfMoves;
	let mult = (temp-1);
	while(true) {
		temp *= mult;
		if (mult === 1) break;
		mult--;
	}
	return temp;
}

const denominador = function(){
	let temp = numOfMoves/2;
	let mult = (temp-1);
	if(mult < 1) return temp;
	while(true) {
		temp *= mult;
		if (mult === 1) break;
		mult--;
	}
	return temp;
}
result = (numerador()) / (denominador() * denominador());
result = Math.round(result);

console.log("Project Euler \nProblem 015 \nResult: " + result);