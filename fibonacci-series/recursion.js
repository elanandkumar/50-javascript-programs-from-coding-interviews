console.log("=============================================")
console.log("//             Using Recursion             //");
console.log("=============================================")


// Using recursion
const getFibonacciSeries = (number) => {
	if(number === 1) {
		return [0, 1];
	}

	const fibonacci = getFibonacciSeries(number - 1);
	const len = fibonacci.length;

	fibonacci.push(fibonacci[len - 1] + fibonacci[len - 2])

	return  fibonacci;		
	
}


module.exports = {
	getFibonacciSeries: (input) => {
		const output = input > 0 ? getFibonacciSeries(input) : [0];
		// console.log(output.join(' '));
		return output;
	}
}
