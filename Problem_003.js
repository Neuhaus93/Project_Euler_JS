/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/


var originalTarget = 600851475143;
var target = originalTarget;
var i = 2;
while(i<target) {
	while(target%i === 0) {
        if(target === i) break;
		(function(newtarget) {
			// console.log(target + " can be divided by " + i + " which gives us " + newtarget);
			target = newtarget;
		})(target / i)
	}
	i++;
}
console.log("Project Euler \nProblem 003 \nReult: " + target);