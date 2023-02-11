const userInput = prompt("Enter values separated by whitespace");
const csvFormat = userInput.split(" ").join(", ");

console.log("CSV Format:", csvFormat);