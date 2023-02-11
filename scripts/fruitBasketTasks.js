/* CONSOLE STYLES */
let fruitBasketTitleStyle = "background: #b0413e; color: white; font-weight: bold; font-size: 20px;";
let multicoloredFruitTitleStyle = "background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red); color: white; font-weight: bold; font-size: 20px;";
let task3Style = "background: #202c59; color: #fff";
let task4Style = 'background: #820263; color: #fff';
let task5Style = "background: #fbaf00; color: #fff";
let task6Style = "background: #d95d39; color: #fff";
let task7Style = "background: #417b5a; color: #fff";

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

console.log("%c Fruit basket ", fruitBasketTitleStyle);

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

console.log("%c Fruits whose names are same-ish as their color: ", task3Style, colorFilteredFruitBasket);
console.log("%c Entire fruit basket contents: ", task6Style, fruitBasket);
console.log("%c Indices of fruits not ready for sale: ", task6Style, fruitsToSteal);
console.log("%c Fruits that are available at the moment: ", task6Style, availableFruits);
console.log("%c Fruit basket sorted by fruit names: ", task7Style, sortedFruitBasketByName);


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
   
console.log("%c Multicolored fruits ", multicoloredFruitTitleStyle);

/* Task 4 */
let ripenedFruit = multicoloredFruit.map((fruit) => {
    if(fruit.color.includes('yellow')) {
        let newColors;
        if(!fruit.color.includes('red')) {
            newColors = fruit.color.map(color => color === 'yellow' ? 'red' : color);
        } else {
            newColors = fruit.color.filter(color => color !== 'yellow');
        }
        return new Fruit(fruit.name, newColors, fruit.isForSale);
    }
    return fruit;
})
/* Task 5 */
let fruitThatCanBeYellow = multicoloredFruit.filter((fruit) => fruit.color.includes('yellow'));

console.log("%c Fruits before: ", task4Style, multicoloredFruit);
console.log("%c Ripened fruit: ", task4Style, ripenedFruit);
console.log("%c Yellow fruit: ", task5Style, fruitThatCanBeYellow);