const people = [];

class Person {
    constructor(name, lastname, height) {
        this.name = name;
        this.lastname = lastname;
        this.height = height;
    }
}

/* USER INPUT */
do {
    people.push(new Person(prompt("Name"), prompt("Lastname"), +prompt("Height")));
} while(!confirm("End?"))

/* TEST DATA */
// people.push(new Person("Emma", "Johnson", 170));
// people.push(new Person("Olivia", "Smith", 160));
// people.push(new Person("Ava", "Brown", 165));
// people.push(new Person("Isabella", "Davis", 158));
// people.push(new Person("Sophia", "Wilson", 170));
// people.push(new Person("Mia", "Taylor", 165));
// people.push(new Person("Charlotte", "Anderson", 163));
// people.push(new Person("Amelia", "Jackson", 168));
// people.push(new Person("Evelyn", "White", 170));
// people.push(new Person("Abigail", "Harris", 180));

const calculateAvgHeight = () => {
    return people.reduce((sum, person) => sum+person.height, 0)/people.length;
}

const findOutlier = (avgHeight) => {
    const difference = (person) => Math.abs(person.height - avgHeight);
    return people.sort((x, y) => difference(x) - difference(y))[0];
}

console.log("Average height:", calculateAvgHeight());
console.log("Outlier:", findOutlier(calculateAvgHeight));



