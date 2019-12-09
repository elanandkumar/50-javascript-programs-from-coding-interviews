// Using loops/Interations
const getFibonacciSeries = (number) => {
	if (number <= 0) {
		return 0;
	}

	if (number  === 1 || number === 2) {
		return 1;
	}

	let fib1 = 1;
	let fib2 = 1;
	let fibonacci = 1;

	// Fibonacci number is sum of previous two Fibonacci number
	for(let n = 3; n <= number; n++) {
		fibonacci = fib1 + fib2;
		fib1 = fib2;
		fib2 = fibonacci;
	}

	return fibonacci;
};

module.exports = {
	getFibonacci: (input) => {
		console.log("=============================================")
		console.log("//          Using Loops/Interations        //");
		console.log("=============================================")

		console.log(`Fibonacci series upto ${input} numbers:`);
		let output = '0';
		for(let n = 1; n <= input; n++) {
			const fibNumber = getFibonacciSeries(n);
			output += ` ${String(fibNumber)}`;
		}
		console.log(output);
	}
}