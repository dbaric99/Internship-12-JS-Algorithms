const people = [];

/* USER INPUT */
alert("Task 1");
do {
    people.push({name: prompt("Name"), lastname: prompt("Lastname"), height: +prompt("Height")});
} while(!confirm("End?"))

/* TEST DATA */
// people.push({name: "Meredith", lastname: "Grey", height: 170});
// people.push({name: "Amelia", lastname: "Shepard", height: 160});
// people.push({name: "Christina", lastname: "Yang", height: 165});
// people.push({name: "Miranda", lastname: "Bailey", height: 158});
// people.push({name: "Callie", lastname: "Torres", height: 210});
// people.push({name: "Jo", lastname: "Wilson", height: 165});
// people.push({name: "Arizona", lastname: "Robinson", height: 163});
// people.push({name: "Maggie", lastname: "Pierce", height: 168});
// people.push({name: "April", lastname: "Kepner", height: 170});
// people.push({name: "Carina", lastname: "Deluca", height: 180});

const calculateAvgHeight = () => {
    return people.reduce((sum, person) => sum+person.height, 0)/people.length;
}

const findOutlier = (avgHeight) => {
    const difference = (person) => Math.abs(person.height - avgHeight);
    return people.sort((x, y) => difference(y) - difference(x))[0];
}

console.log("Average height:", calculateAvgHeight());
console.log("Outlier:", findOutlier(calculateAvgHeight));



