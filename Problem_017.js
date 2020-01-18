/*

If the numbers 1 to 5 are written out in words: 
	one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, 
	how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 
	342 (three hundred and forty-two) contains 23 letters 
	and 115 (one hundred and fifteen) contains 20 letters. 
	The use of "and" when writing out numbers is in compliance with British usage.

*/

const units = {
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine'
}

const tens = {
	10:	'ten',
	11:	'eleven',
	12:	'twelve',
	13:	'thirteen',
	14:	'fourteen',
	15:	'fifteen',
	16:	'sixteen',
	17:	'seventeen',
	18:	'eighteen',
	19:	'nineteen'
}


const decimals = {
	20: 'twenty',
	30: 'thirty',
	40: 'forty',
	50: 'fifty',
	60: 'sixty',
	70: 'seventy',
	80: 'eighty',
	90:  'ninety'
}

let result = 0;
const limit = 1000;

function numToString(num) {
	if (num === 1000) return 'onethousand'.length;
	if (num >= 10 && num < 20) return tens[num].length;

	let value = '';
	const hundred = Math.floor(num / 100);
	const decimal = Math.floor((num - hundred * 100) / 10);
	const unit =  (num - hundred * 100) - (decimal * 10);
	// console.log(hundred, decimal, unit);

	if (decimal === 1) {
		value += units[hundred] + ' hundred and ';
		value += tens[(10 + unit)];
	} else {
		if (hundred > 0) value += units[hundred] + ' hundred';
		
		if (decimal > 0 && hundred > 0) {
			value += ' and ' + decimals[decimal*10];
		}

		if (decimal > 0 && hundred === 0) value += decimals[decimal*10];
		
		if (hundred !== 0 && decimal === 0) {
			value += ' and '
		}

		if (unit !== 0) value += '-' + units[unit];

		if (decimal === 0 && unit === 0) {
			value = value.match(/.*hundred/g)[0];
		}
	}
	
	// console.log(value);
	value = value.replace(/( |-)/g, '');
	value = value.length; 
	return value;
}

for(let i = 1; i <= limit; i++) {
	result += numToString(i);
}

console.log("Project Euler \nProblem 017 \nResult: " + result);