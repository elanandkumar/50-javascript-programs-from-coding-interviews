const readline = require('readline');

const readlineProcess = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const question1 = () => {
	return new Promise((resolve, reject) => {
		readlineProcess.question('Enter number for which you want Fibonacci series: ', (answer1) => {
			const input = answer1.trim();
			if(input){
				console.log(`Fibonacci series asked for ${input}`);
				resolve(Number(input));	
			}

			reject("Please provide a valid input (Number only)");
		});
	});
	
}

const question2 = (input) => {
	return new Promise((resolve, reject) => {
		readlineProcess.question('Do you want output using recursion or Loop/Interation? (Y/N) ', (answer2) => {
			let isRecursion  = answer2.trim();

			if(isRecursion && (isRecursion === 'y' || isRecursion === 'Y')) {
				isRecursion = true;
				console.log('You opted to get fibonacci series using recursion');
			} else {
				console.log('You opted to get fibonacci series using loop/interation');
				isRecursion = false;
			}

			resolve(isRecursion);
		});	
	})
	
}

const calculateFibonacciSeries = (input, isRecursion) => {
	let fibonacciModule;
	// require and load the module as per user input
	if (isRecursion) {
		fibonacciModule = require('./recursion');
	} else {
		fibonacciModule = require('./loop-iteration');
	}
	return fibonacciModule.getFibonacciSeries(input);
}

const main = async () => {
	try {
		const input = await question1();
		const isRecursion = await question2(input);
		const fibSeries = calculateFibonacciSeries(input, isRecursion);
		console.log(`Fibonacci series upto ${input} numbers: `, fibSeries);
		// close the process
		readlineProcess.close();	
	} catch (err) {
		console.log(err);
		// close the process
		readlineProcess.close();
	};
}

main();