//Tasks 3, 6 and 7
class Fruit {
    constructor(name, color, isForSale) {
        this.name = name;
        this.color = color;
        this.isForSale = isForSale;
    }
}

const fruitBasket = [
    new Fruit('banana', 'yellow', false),
    new Fruit('apple', 'green', true),
    new Fruit('orange', 'orange', false),
    new Fruit('persimmon', 'red', false),
    new Fruit('dragon fruit', 'pink', true),
    new Fruit('jackfruit', 'yellow', true),
    new Fruit('horned melon', 'orange', false),
    new Fruit('lychee', 'red', true),
    new Fruit('custard apple', 'green', true),
    new Fruit('passion fruit', 'purple', false),
    new Fruit('plantain', 'green', true),
    new Fruit('blueberry', 'blue', false),
    new Fruit('blackberry', 'black', true)
];

/* Task 3 */
let colorFilteredFruitBasket = fruitBasket.filter((fruit) => fruit.name.includes(fruit.color));
/* Task 6 */
let fruitsToSteal = fruitBasket.reduce((acc, fruit, index) => {
    if(!fruit.isForSale) acc.push(index);
    return acc;
}, []);
let availableFruits = fruitBasket.filter((fruit, index) => !fruitsToSteal.includes(index));
/* Task 7 */
let sortedFruitBasketByName = fruitBasket.sort((a, b) => (a.name > b.name) ? 1 : -1);

console.log("Fruits whose names are same-ish as their color:", colorFilteredFruitBasket)
console.log("Entire fruit basket contents:", fruitBasket);
console.log("Indices of fruits not ready for sale:", fruitsToSteal);
console.log("Fruits that are available at the moment:", availableFruits);
console.log("Fruit basket sorted by fruit names:", sortedFruitBasketByName);


/* >>>>>>>> FRUITS WITH MULTIPLE COLORS <<<<<<<< */
const multicoloredFruit = [
    new Fruit('banana', ['yellow'], false),
    new Fruit('apple', ['green', 'yellow', 'red', 'pink'], false),
    new Fruit('orange', ['orange'], false),
    new Fruit('kiwi', ['brown', 'green'], false),
    new Fruit('watermelon', ['green', 'red'], false),
    new Fruit('plantain', ['green', 'yellow', 'brown'], false),
    new Fruit('durian', ['yellow', 'green'], false),
    new Fruit('dragonfruit', ['pink', 'red'], false),
    new Fruit('starfruit', ['yellow', 'green'], false),
    new Fruit('jackfruit', ['green', 'yellow'], false),
    new Fruit('longan', ['brown', 'red'], false),
    new Fruit('rambutan', ['red', 'green'], false),
    new Fruit('acerola', ['red', 'pink'], false),
    new Fruit('maracuya', ['yellow'], false)
];
   
