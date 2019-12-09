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
			let promptInput  = answer2.trim();

			if(promptInput && (promptInput === 'y' || promptInput === 'Y')) {
				promptInput = true;
				console.log('You opted to get fibonacci series using recursion');
			} else {
				console.log('You opted to get fibonacci series using loop/interation');
				promptInput = false;
			}

			
			if (promptInput) {
				const recursionFibonacci = require('./recursion');
				recursionFibonacci.getFibonacci(input);
			} else {
				const interationFibonacci = require('./loop-iteration');
				interationFibonacci.getFibonacci(input);
			}
			resolve();
		});	
	})
	
}

const main = async () => {
	try {
		const input = await question1();
		await question2(input);
		
		// close the process
		readlineProcess.close();	
	} catch (err) {
		console.log(err);
		// close the process
		readlineProcess.close();
	};
}

main();