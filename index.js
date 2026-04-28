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

// Create a varible that stores a child name, parent names and then use them as a sentence in the console to perform an expression.

let parentNames = 'Mary and Joseph';
let childName = 'Emmanuel';

console.log(`${parentNames} are the earthly parent's of ${childName}`);

// Create another varibble that store a student final score that cannot change after example has been submitted.

const studentScore = 50;

console.log(`Your final score is ${studentScore}`);

// Strings Data Types

const email = 'jamesdoe@gmail.com';
const password = 'jayjayokocha';

// Checking the length of a character
console.log(email.length);

// Changing cases or checking cases
const childPet = 'CAT';

console.log(email.toUpperCase());
console.log(childPet.toLowerCase());

// create a varible of a string that stores a value in lowercase, check the lenght of the value and also convert the value to uppercase and print to the console.

// 5min max

const askOut = 'Will you be my girlfriend';

console.log(askOut.length);
console.log(askOut.toUpperCase());

// Trim Method
const userEmail = ' jinadu@yahoo.com    ';

console.log(userEmail.trim());

// Slice Method
const love = 'I love you';
const foodChoice = 'I will get bange rice';

console.log(love.slice(2, 10));
console.log(`${foodChoice.slice(0, 10)}...`);

// Include Methods

const newEmail = 'james11@gmail.co';

console.log(newEmail.includes('@'));
console.log(newEmail.includes('.com'));

// Split words

const dec = 'I love JavaScript';

const breakWords = dec.split(' ');

console.log(breakWords[1]);

// Getting a user first name out of a full name string

const userFullName = 'Musa Yaradua Tinubu';

const singularNames = userFullName.split(' ');

const firstName = singularNames[0];

console.log(`Welcome Back, ${firstName}`);

// create a variable of a string that has an empty weird spaces across the starting and the ending, clean it up, print it out on console, also only show some part of the words in a console as well without all, check if the words contains some other words from your original and lastly create a variable that receives full name then welcome the user only by it first name.

const loanMsg =
    '    Come and borrow 2million naira loan for 7 days and pay back 4million naira... oops     ';

// Clean it up
const message = loanMsg.trim();
console.log(message);

// Show some part
console.log(`${message.slice(0, 22)}...`);

// Check if it contains
console.log(message.includes('loan'));

// Welcome user

const platformUserName = 'Daniel Ayo';

// Get only the first name
const platformUserFirstName = platformUserName.split(' ');

console.log(`Welcome Back, ${platformUserFirstName[0]}`);

// Replace data

const studentCourse = 'Microbiology';

const changeCourse = studentCourse.replace('Microbiology', 'Fine Arts');

console.log(changeCourse);

// StartsWith and EndsWithMethod

const fileName = 'resume.docx';
const portfolioUrl = 'https://dannykinz.com';

console.log(portfolioUrl.startsWith('https'));
console.log(fileName.endsWith('pdf'));

// Picking the first character using charat

const userName = 'Danny';

console.log(userName[2]);
console.log(userName.charAt(4));

// Create a variable that has a a phrase of your best food and after a while, replace the best food with a new found food.... create another variable that receives user portfolio and cv file then confirms if they are typing the right url and uploading the right pdf cv file and create a variable of username and then pick the first letter of the username as you show it on the console.

// Replace user best food with a new one

const bestFood = 'Garri';

console.log(bestFood);

const newBestFood = bestFood.replace('Garri', 'Garri, Salt and Banana');

console.log(newBestFood);

// Confirms if a user data is true

const userPortfolio = 'https://dannykinz.com';
const userResume = 'resume26.pdf';

console.log(userPortfolio.startsWith('https'));
console.log(userResume.endsWith('pdf'));

// Pick a user first name letter for DP

const platformUser = 'Danny';

console.log(platformUser[0]);
console.log(platformUser.charAt(0));

// Numbers in Javascript

const userAge = 19;

const itemPrice = 4.99;

console.log(userAge);
console.log(itemPrice);

// Connverting number data type to string

console.log(typeof userAge.toString());

console.log(userAge + 10);

// Fixed number to a certain value

const tinubuCoin = 0.9900009967789999999999;

console.log(tinubuCoin.toFixed(2));

// Converting string of number to number

const ajoAmount = '1000';
const previousBal = 9000;

console.log(parseInt(ajoAmount) + previousBal);

const priceOfFuelInBuhariTime = '174.99';
const productionPrice = 20;

console.log(parseFloat(priceOfFuelInBuhariTime) + productionPrice);

const newTibunuPriceOfFuel = '25';

console.log(newTibunuPriceOfFuel + productionPrice);

// Create a number of age, prices, and currency of multiple value, convert the number to string and an addition calculation to get the weird wrong calculation, round the currency to a number of 6, and convert the string number of prices to number then calulate to get the actual real addition value.

const realAge = 99;
const prices = '10.99';
const newNaira = 15.890001223344;

console.log(realAge.toString() + 1);
console.log(newNaira.toFixed(6));
console.log(parseFloat(prices) + 10);

// Math Operations

// Random number in JS

const randomNum = Math.random();

console.log(randomNum);

// Round down a number

const downNum = Math.floor(4.99);

console.log(downNum);

// Round up a number

const upNum = Math.ceil(2.1);

console.log(upNum);

// Round a number to the nearest

const autoNum = Math.round(1.5);

console.log(autoNum);

// Getting the highest number/value

const maxNum1 = Math.max(35, 10, 3, 8);
const maxNum2 = Math.max(-55, -1, -110);

console.log(maxNum1);
console.log(maxNum2);

// Get a random number between one to 6....

const diceNum = Math.floor(Math.random() * 6 + 1);

console.log(diceNum);

// Boolean data types
const isLoggedIn = false;
const hasMoney = true;
const hasPassword = true;
const hasEmail = true;
const acctBal = undefined;

if (acctBal) {
    console.log(`Yes, you can login`);
} else {
    console.log(`Please put in your email and password`);
}

let userBestFood = null;

const collectBestFood = 'Beans';

userBestFood = collectBestFood;

console.log(userBestFood);

// Arrays

const foods = ['Rice', 'Beans', 'Garri', 'Yam', 'Soup'];
const ages = [40, 30, 11, 50, 22];

console.log(foods);
console.log(ages);

// Accessing item in an array using the square bracket notation

console.log(foods[4]);
console.log(ages[0]);

const fishes = ['Tilapia', 'Dry fish', 'River fish', 'Sabida Fish', 'Sandine Fish', 'Skubian Fish'];

console.log(fishes);

const grains = ['Rice', 'Garri', 'Oats', 'Poundo', 'Beans'];

console.log(grains);

// Desctrucring

const [fish1, fish2] = fishes;

console.log(fish2);
console.log(fish1);

// Spread operator

// Copy array

const bestFishes = [...fishes];

console.log(bestFishes);

// Combine an array

const localFoods = [...fishes, ...grains];

console.log(localFoods);

// Array Methods

// Map method

fishes.map(fish => console.log(fish));

// Filter method

const finalFish = fishes.filter(fish => fish.includes('T'));

console.log(finalFish);

// Find method

const findDry = fishes.find(fish => fish === 'Tilapia');

console.log(findDry);

const dayTime = ['Morning', 'Afternoon', 'Evening'];

const notifyMealTime = dayTime.find(period => period === 'Afternoon');

console.log(`It's ${notifyMealTime}, time for lunch!`);

// Create an array of single products for shoes, clothes and then group them into a single varaible of products using the spread.... and also destructure them in a seperate variable, it doesn;t have to be all. Also using the map method to shoe all items in the products as a list in the console.

// Includes method in an array

const naijaFoods = [
    'Banga soup',
    'Rice and beans',
    'Owo and yam',
    'Afang soup',
    'Ewedu and Amala',
    'Ofaku soup',
];

console.log(naijaFoods.includes('Ogbono Soup'));
console.log(naijaFoods.includes('Banga soup'));

// Add to the end of an array
naijaFoods.push('Vegetable soup and pounded yam');

// Sorting items alphabetically in an array
naijaFoods.sort();

// ForEach array loop method

naijaFoods.forEach(food => {
    console.log(`We currently have ${food}`);
});

// Create an array of students with different names, check if one of them is in attendance to get the return of true or false and also use a sentence of all the student is in attendance with their respective names in front of them without repeating yourself multiple times..... and also sort each item to show aphabetically while also adding a new user that is not on the list initially.

// Storing one user info

const customer1Name = 'John Doe';
const customer1Age = 30;
const customer1Status = 'Single';
const customer1HasMoney = true;
const customer1HasKids = false;
const customer1Education = 'BSC';

// Store data using Object data type

const customer1 = {
    name: 'John Doe',
    age: 30,
    status: 'Single',
    hasMoney: true,
    hasKids: false,
    education: 'MSC',
    hobbies: ['Singing', 'Cooking', 'Coding', 'Raping'],
};

console.log(customer1);

// Acccesing individual data in an object....

console.log(`Welcome Back, ${customer1.name}`);
console.log(`It appears you are still ${customer1.status}`);
console.log(`This customer has ${customer1['education']} degree`);

// Create an object of user that stores the user name, age, email, best foods, married, has family or even if the person is healthy then use a sentence with any of the data by accessing them individually.

const user = {
    name: 'Rebecca',
    age: 1024,
    email: 'rebecca@gmail.com',
    married: false,
    hasFamily: 'Mikaelson',
    healthy: false,
    bestFoods: ['Blood', 'Human Flesh', 'Human Heart'],
};

// Updating object data
user.name = 'Klaus';
user.age = 1102;
user.healthy = true;

// Add new data to the object
user.money = 10000;

console.log(
    `${user.name} is a ${user['age']} years old vampires, from the ${user.hasFamily} family, and ${user.married}, she is not married, and one out of her best food is ${user.bestFoods[0]}.... oops and he has ${user.money}`
);

// Desctucring object properties

const carModel = {
    carName: 'Ford',
    year: 2018,
    type: 'Vesper L1',
    speed: 220,
    velocity: 90,
    useElectricity: false,
};

// get the name

console.log(carModel.carName);
console.log(carModel.year);

// Desctucture to a variable

const { carName, year, speed, velocity } = carModel;

console.log(carName);
console.log(year);
console.log(speed);
console.log(velocity);

// Spread operator

const schoolInfo = { name: 'Uniben', founded: 1901, totalStudents: 88000 };
const studentInfo = { studentName: 'James Doe', email: 'jamesdoeben@gmail.com' };

// Merge both data
const studentDetails = { ...schoolInfo, ...studentInfo };

console.log(studentDetails);

// Copying
const newInfo = { ...studentInfo };

console.log(newInfo);

// Copying and adding new data
const studentID = { ...studentInfo, age: 26 };

console.log(studentID);

// Copying and updating data

const newStudent = { ...studentInfo, studentName: 'Rebeccah Jones' };

console.log(newStudent);

// Objects keys method

console.log(Object.keys(studentDetails));

// Create an update of product details for a shoe brand that contains name, year, type, size, price and color pairs, but the catch is to only create 3 value initially, copy to a new final variable and update the rest, add and change name and also, desctruring few of the data to a varible and then check in console.

const products = {
    nameS: 'Nike',
    yearS: 2025,
    type: 'Casual Sneakers',
};

const fullDetails = {
    ...products,
    size: [38, 40, 42, 44, 46, 50],
    priceN: 50000,
    colors: ['blue', 'white', 'Black'],
};

const { nameS, yearS, type, colors, size, priceN } = fullDetails;

console.log(
    `I want ${nameS} ${type} size ${size[2]} and color ${colors[1]} for the price of $${priceN}`
);

// Operators

// Arithmetics

const num1 = 40;
let num2 = 30;

num2 /= 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// Adding item to cart

let shoppingItems = [];

shoppingItems += 'Shoe ';

shoppingItems += 'Bag ';

shoppingItems += 'Towel';

console.log(shoppingItems);

// Create a bank balance, add new money to the total balance, also add new money whenever you sell a product to the main balance, also remove and keep the balance intact after spending and show the final solution on the console.

let bankBal = 40000;

// Borrow

let loanBal = (bankBal += 360000);

// Buying of products

let itemBought = (bankBal -= 120000);

// Sells price

let salesPrice = (bankBal += 38000);
let newProductSales = (bankBal += 38000);

console.log(bankBal);

// Comparison operator

const price1 = 10;
const price2 = 120;

// if they are the same thing

console.log(price1 === price2);

// Not equal operator

console.log(price1 !== price2);

// Greater than and greater equal

console.log(price1 > price2);
console.log(price1 >= price2);

// Less than and less equal
console.log(price1 < price2);
console.log(price1 <= price2);

// Control Flow

// if/else statement

if (0) {
    console.log('First control flow resulted to True');
} else {
    console.log('Nay! The first control flow resulted to False.');
}

// Allowing access if conditions are met.

const ageOfUser = 18;
const hasFunds = false;

if (ageOfUser >= 18 && hasFunds) {
    console.log('Congrats!!! You can enter the club');
} else {
    console.log('Sorry, you are a minor and you are not welcomed in the club');
}

// Student graded score

const schoolCutOffMark = 60;
const schoolRejectionMark = 32;
const studentFinalMark = 50;

if (studentFinalMark >= schoolCutOffMark) {
    console.log(`Congrats, you passed and your final score is ${studentFinalMark}`);
} else if (studentFinalMark > schoolRejectionMark) {
    console.log(
        `You tried!!! We have reconsidered your score, and you have ${studentFinalMark} in total`
    );
} else {
    console.log('You failed! Please do better next time.');
}

// Create a control flow that checks if it's true that the restaurant has banga soup and tell the user they have it in their menu, if they don't have that check if Ogbono soup is available and show the true condition, if not as well check if there's Egusi, if all of them is not true then tell the restaurant to close their shop.

const userRequest = 'Ogbono';

if (userRequest === 'Banga') {
    console.log(`Yes we currently have ${userRequest}`);
} else if (userRequest === 'Ogbono') {
    console.log(`Yes we currently have ${userRequest}`);
} else if (userRequest === 'Egusi') {
    console.log(`Yes we currently have ${userRequest}`);
} else {
    console.log('You guys have nothing, close your restaurant!');
}

// Create a simple bank logic that checks if the user has enough money to buy an item, if it's true show proceed and pay, check if the user bal actual worth the actual item price also and shown that yes their money can cover the item otherwise show the last result.

const userBankBal = 4000;
const itemSinglePrice = 5000;

if (userBankBal > itemSinglePrice) {
    console.log('Yes proceed and make payment');
} else if (userBankBal === itemSinglePrice) {
    console.log('Yes, your actual balance covers the item price');
} else {
    console.log('Sorry, you have insufficient funds...Oops!!!');
}

// Ternary Operator

const appUsername = 'James';

const welcomeUser = appUsername ? `Welcome Back, ${appUsername}` : `Please Login, Guest`;

console.log(welcomeUser);

// Create a ternary operator that checks if a user age is greater than 18 years old and show a response if the user can vote or can not to remove Tibunu as president of Nigeria.

const naijaUserAge = 18;

const canVote = naijaUserAge >= 18 ? 'Yes, Can Vote' : 'You are not of age to Vote';

console.log(canVote);

// Loops

// for loop

const localFoodLists = ['Banga', 'Egusi', 'Ogbono', 'Afang', 'Ofaku', 'Vegetable', 'Okro'];

for (let i = 0; i < localFoodLists.length; i++) {
    console.log(localFoodLists[i]);
}

// Create a for loop that loops through a number from 1 to 10 and show the number in the console.

for (let i = 1; i < 11; i++) {
    console.log(i);
}

// Create a for loop that loops through your name and show the name letters in the console.

let userMainName = 'James';

for (let i = 0; i < userMainName.length; i++) {
    console.log(userMainName[i]);
}

// Loop through and array with for of

const webStudents = ['Enoch', 'Alex', 'Biggie', 'Mary', 'James', 'Arthur'];

for (let student of webStudents) {
    console.log(student);
}

// Loop through an object using for in

const modelDetails = {
    up: 'Head',
    middle: 'Body',
    down: 'Legs',
    hands: 'Palm',
};

for (let item in modelDetails) {
    console.log(modelDetails[item]);
}

// Create an array of your hobbies and loop through them all at once in the console.

console.log('MY HOBBIES');

const hobbies = ['Cooking', 'Singing', 'Writing', 'Coding'];

for (let hoobie in hobbies) {
    console.log(hobbies[hoobie]);
}

// you use for...of to loop through an array

// Create an object of your informations from name to status and then loop through them and show only the values in the console.

console.log('USER INFORMATIONS');

const userInfo = {
    name: 'Danny',
    status: 'Single',
    age: 44,
    skill: 'Programming',
    job: 'Designer and Developer',
};

for (let item in userInfo) {
    console.log(item.toUpperCase() + ': ' + userInfo[item]);
}

// you use for...in to loop through an object

// Functions in Javascript

function greet() {
    console.log('Hello');
}

greet();

// Simple function that adds money to your account balance.

function addBal(add) {
    let userBal = 4000;

    console.log(userBal + add);
}

addBal(12000);

addBal(3000);

// Create a function that greets user by their name

function welcomeUsers(username) {
    console.log(`Welcome Back, ${username}`);
}

welcomeUsers('Nkechi');

welcomeUsers('Biggie');

welcomeUsers('James');

// Create an arrow function that welcomes users

const greetUser = (username, age) => {
    console.log(`Hello, ${username}, you are ${age} years old today`);
};

greetUser('Biggie', 12);

// create a simple function that multiply the total items a user buys by the default item price.

const calcPrice = item => {
    let itemPrice = 10.99;

    return item * itemPrice;
};

console.log(calcPrice(44));

// a function that returns a loop item of array

const listItem = document.querySelector('#fruitLists');

const bestFruits = ['Apple', 'Banana', 'Avocado', 'PawPaw', 'Mango', 'Strawberry', 'Tangarine'];

const showItems = data => {
    for (let item of data) {
        listItem.innerHTML += `<li>${item}</li>`;
    }

    return;
};

showItems(bestFruits);

// Create a function that accepts student final score as a parameter and then return the response if the student pass by comparing with the school cut off mark, otherwise show failed... then run the fuction to show the answers in the console. Use arrow or the normal function

const schoolScoreMark = 70;

function schoolResult(studentScore) {
    if (studentScore >= schoolScoreMark) {
        console.log('You Pass');
    } else {
        console.log('You fail');
    }

    return;
}

schoolResult(65);

// Dom Manipulation

// Selecting elements

// By tag
const heading = document.querySelector('h2');

heading.textContent = 'Dom Manipulation in Action';

// By class
const textarea = document.querySelector('.text-area');

console.log(textarea);

// By Id
const box = document.querySelector('#boxx');

console.log(box);

// Create html elements with tag, class and ID, then pick all of them with javascript and show them in the console.

const textBox = document.getElementById('boxx');

console.log(textBox);

// Changing an html text content

const welcomeText = document.querySelector('h3');

welcomeText.textContent = 'Welcome, Biggie';

// Lets make it dynamic

const usersName = 'Rukky';

welcomeText.textContent = `Welcome, ${usersName}`;

// Create an html paragraph that shows Javascript is hard by default and then change with Javascript to Javascript is easy

const para = document.querySelector('.para');

para.textContent = 'Javascript is easy';

// add html element to a div container with the empty class.

const emptyDiv = document.querySelector('.empty');

emptyDiv.innerHTML = '<h2>New Element Added</h2>';

// add a para... of lorem 10 to it

emptyDiv.innerHTML +=
    '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>';

// add a button with the text get started

emptyDiv.innerHTML += '<button>Get Started</button>';

// Style the div with bg color, radius, border and padding
emptyDiv.style.backgroundColor = 'lightblue';
emptyDiv.style.borderRadius = '10px';
emptyDiv.style.border = '2px solid black';
emptyDiv.style.padding = '20px';
emptyDiv.style.marginTop = '90px';

// ClassList method with javascript
emptyDiv.classList.remove('empty');
emptyDiv.classList.add('new-div');

// Class Challenge: Create a div container with the class name of empty, then with javascript, add a new html element to it, also add a paragraph of lorem ipsum text to it, then add a button with the text get started, style the div container with background color, border radius, border and padding. Lastly use classList method to remove the empty class and add a new class name of new-div.

// Event Listeners

const btn = document.getElementById('btn');
const para1 = document.querySelector('.para1');

btn.addEventListener('click', () => {
    para1.classList.toggle('paraview');
});

// Counter logic

let count = 0;

const counterValue = document.querySelector('.counterValue');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

decreaseBtn.addEventListener('click', () => {
    count--;
    counterValue.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counterValue.textContent = count;
});

increaseBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
});

// Create element of div with h3 and paragraph of lorem 20

const newDiv = document.createElement('div');

newDiv.innerHTML = '<h3>New Div Element</h3>';
newDiv.innerHTML +=
    '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>';

// inject in the body
document.body.appendChild(newDiv);

// Form Validation in JS with the error p
const form = document.querySelector('#form');
const usernameN = document.getElementById('username');
const emailN = document.getElementById('email');
const passwordN = document.getElementById('password');
const errorP = document.querySelector('.error');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (username.value === '' || emailN.value === '' || passwordN.value === '') {
        errorP.textContent = 'Please fill in all fields';
        errorP.style.color = 'red';
    } else {
        errorP.textContent = 'Form submitted successfully';
        errorP.style.color = 'green';
    }
});

// Create a form that receives email, name, subject, and message, then validate the authencicity of the data filled in before submit.

// Understand what it means to pick an html element with JavaScript and then create a new form validation granting user access if the data is correct and show an error message if the data is not correct on submit trigger action.
