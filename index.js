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
