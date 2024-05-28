console.log('---Fruit shop----');
//Fruit: apple, pear, banana, orange, kiwi.

const fruits =[
    {name: 'apple', price: 3.50},
    {name: 'pear', price: 2.80},
    {name: 'banana', price: 1.90},
    {name: 'orange', price: 3.99},
    {name: 'kiwi', price: 4.50},
];

fruits.sort((a,b) => a.price - b.price);

console.log(fruits);

console.log('The lowest price: ', fruits[0].price);
console.log('The cheapest fruit: ', fruits[0].name);
console.log('The highest price: ', fruits.at(-1).price);
console.log('The most expensive fruit: ', fruits.at(-1).name);

console.log('-------');
// console.log(fruits);

function listByName(a, b) {
    if (a.name < b.name) {
    return -1;
    } else if (a.name === b.name) {
    return 0;
    } else if (a.name > b.name) {
    return 1;
    }
}

fruits.sort(listByName);
console.log(fruits);