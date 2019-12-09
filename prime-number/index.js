/**
 * A prime number is a natural number greater than 1 that
 * cannot be formed by multiplying two smaller natural numbers.
 * A natural number greater than 1 that is not prime is called a composite number.
 * All whole numbers above 1 are either composite or prime.
 */
const readline = require('readline');

const readlineProcess = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const question1 = () => {
	return new Promise((resolve, reject) => {
		readlineProcess.question('Enter number for which you want check if it is Prime Number: ', (answer1) => {
			const input = answer1.trim();
			if(input){
				console.log(`Number to be validate for Prime is ${input}`);
				const tempInput = Number(input);
				if(input <= 0 ) {
					reject("Please provide a valid input (Number only & greather than 0)");					
				}
				resolve(Number(input));	
			}

			reject("Please provide a valid input (Number only)");
		});
	});
	
}

const isPrimeNumber = (input) => {
	if (input === 1) {
		return false;
	}

	// check from 2 to n-1 (input - 1)
	for(let i = 2; i < input; i++) {
		if(input % i === 0){
			return false;
		}
	}
	return true;
}

const getAllPrimeNumbers = (input) => {
	const primeNumbers = [];
	for(let n = 1; n <= input; n++){
		const isPrime = isPrimeNumber(n);
		if (isPrime) {
			primeNumbers.push(n);
		}
	}

	return primeNumbers;
}

const main = async () => {
	try {
		const input = await question1();
		const isPrime = isPrimeNumber(input);
		if(isPrime) {
			console.log('\x1b[33m%s\x1b[0m', `Number ${input} is a prime number`);
		} else {
			console.log('\x1b[31m%s\x1b[0m', `Number ${input} is not a prime number`);
		}
		
		console.log(`And here is all prime numbers less than or equal to ${input}`);
		console.log(getAllPrimeNumbers(input));
		// close the process
		readlineProcess.close();	
	} catch (err) {
		console.log(err);
		// close the process
		readlineProcess.close();
	};
}

main();