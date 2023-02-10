const peopleWithDetails = [];

/* USER INPUT */
alert("Task 2");
let numberOfPpl = +prompt("Number of people you want to input?");
for (let i = 0; i < numberOfPpl; i++) {
    peopleWithDetails.push({name: prompt("Name"), lastname: prompt("Lastname"), eyeColor: prompt("Eye color"), hairColor: prompt("Hair color"), height: +prompt("Height")})
}

/* TEST INPUT */
// peopleWithDetails.push({name: "Meredith", lastname: "Grey", eyeColor: "green", hairColor: "blonde", height: 170});
// peopleWithDetails.push({name: "Amelia", lastname: "Shepard", eyeColor: "blue", hairColor: "brown", height: 160});
// peopleWithDetails.push({name: "Christina", lastname: "Yang", eyeColor: "brown", hairColor: "black", height: 165});
// peopleWithDetails.push({name: "Miranda", lastname: "Bailey", eyeColor: "brown", hairColor: "brown", height: 158});
// peopleWithDetails.push({name: "Callie", lastname: "Torres", eyeColor: "brown", hairColor: "brown", height: 210});
// peopleWithDetails.push({name: "Jo", lastname: "Wilson", eyeColor: "hazel", hairColor: "brown", height: 165});
// peopleWithDetails.push({name: "Arizona", lastname: "Robinson", eyeColor: "blue", hairColor: "blonde", height: 163});
// peopleWithDetails.push({name: "Maggie", lastname: "Pierce", eyeColor: "brown", hairColor: "brown", height: 172});
// peopleWithDetails.push({name: "April", lastname: "Kepner", eyeColor: "green", hairColor: "red", height: 170});
// peopleWithDetails.push({name: "Carina", lastname: "Deluca", eyeColor: "brown", hairColor: "brown", height: 180});

const findPeople = () => {
    const sortedPpl = peopleWithDetails.sort((x,y) => x.height - y.height);
    const medianHeight = sortedPpl[Math.floor(sortedPpl.length/2)]['height'];
    return peopleWithDetails.filter(person => person.eyeColor === person.hairColor && person.height > medianHeight);
}

let targets = findPeople();
console.log("People whose eye and hair colors match and who are taller than the median:", targets.length === 0 ? "no matches" : targets);