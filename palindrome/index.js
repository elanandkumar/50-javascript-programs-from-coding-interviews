const isPalindromeWithoutApi = (string) => {
	// 1. loop through each character
	// 2. compare first one with last one and so on
	// 3. If fails at any point, stop...else continue
}

const isPalindrome = (string) => {
	const input = string.trim().toLowerCase();
	return input.split('').reverse().join('') === input;
}

console.log(isPalindrome('Ana'));