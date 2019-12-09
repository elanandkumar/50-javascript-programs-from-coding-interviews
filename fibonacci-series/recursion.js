console.log("=============================================")
console.log("//             Using Recursion             //");
console.log("=============================================")


// Using recursion
const fibonacciSeriesRecursion = (number) => {
	if(number === 1) {
		return [0, 1];
	}

	const fibonacci = fibonacciSeriesRecursion(number - 1);
	const len = fibonacci.length;

	fibonacci.push(fibonacci[len - 1] + fibonacci[len - 2])

	return  fibonacci;		
	
}


module.exports = {
	getFibonacci: (input) => {
		console.log(`Fibonacci series upto ${input} numbers:`);
		const output = input > 0 ? fibonacciSeriesRecursion(input) : [0];
		console.log(output.join(' '));
	}
}
