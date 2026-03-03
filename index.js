// Variables

//  Loose Variable that can change
let age = 31;
let name = 'James';

age++;

name = 'Rebeccah';

let NAME = 'Richard';

let fullName = 'James Doe';

console.log(`${fullName} is ${age} years old this year`);

// Building a mini cart calculator
let price = 6.99;
let items = 33;

let total = price * items;

console.log(
    `The total items you bought is ${items} and the price for them all is $${total} at the rate of $${price} each`
);

// Strict Variable that cannot change

const birthYear = 1904;

console.log(`Your birth year is ${birthYear}`);
