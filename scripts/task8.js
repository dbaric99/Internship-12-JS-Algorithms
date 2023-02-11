const firstHundred = [...Array(101).keys()].slice(1);
const sum = firstHundred.reduce((acc, current) => acc + current, 0);

console.log("Gauss conjecture - sum of first 100 numbers: ", sum);