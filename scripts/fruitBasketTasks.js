//Tasks 3, 6 and 7
class Fruit {
    constructor(name, color, isForSale) {
        this.name = name;
        this.color = color;
        this.isForSale = isForSale;
    }
}

let fruitBasket = [
    new Fruit('banana', 'yellow', false),
    new Fruit('apple', 'green', false),
    new Fruit('orange', 'orange', false),
    new Fruit('persimmon', 'red', false),
    new Fruit('dragon fruit', 'pink', false),
    new Fruit('jackfruit', 'yellow', false),
    new Fruit('horned melon', 'orange', false),
    new Fruit('lychee', 'red', false),
    new Fruit('custard apple', 'green', false),
    new Fruit('passion fruit', 'purple', false),
    new Fruit('plantain', 'green', false),
    new Fruit('blueberry', 'blue', false),
    new Fruit('blackberry', 'black', false)
];

let colorFilteredFruits = fruitBasket.filter((fruit) => fruit.name.includes(fruit.color));
console.log("Fruits whose names are same-ish as their color:", colorFilteredFruits)
   
