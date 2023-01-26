if (1 === 1) {
    console.log("it's true");

}

// example 2
//performence reivew
// 3 - superstar
// 2- meets expectations
// 1 - needs improvement

let raiting = 3
if (raiting === 3) {
    let result = ('you are a superstar');
    console.log(result)

}
else if (raiting === 2) {
    let result = ('meets expectations')
    console.log(result)
}
else if (raiting === 1) {
    let result = ('needs improvement')
    console.log(result)
}
else {
    console.log('invalid response')
}
//example 3
let num = 37;

if (num % 2 !== 0) {
    console.log('odd number');
}

//Example 3

let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`)
}

else {
    console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore} `)
}

// NESTING
// Example 4
let password = 'hello kitty'

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Valid Password')
    } else {
        console.log('password is long enough but cannot contain spaces')
    }
}
else {
    console.log("Password must be longer!")
}

// Example 5
let mystery = 9;
if (mystery) {
    console.log('TRUTHY')
}
else {
    console.log('FALSY')
}

//Example 6
let loggedInUSer = null;
if (loggedInUSer) {
    console.log('YOU ARE LOGGED IN!');
}
else {
    console.log(' PLEASE LOG IN!');
}

//Logical AND/OR/NOT
// Example 7
let password1 = 'taco tuesday'
if (password1.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid Password!");
}
else {
    console.log('INVALID PASSWORD!')
}

// Example 8
let password2 = "chickenGal"
if (password2.length >= 8 && password2.indexOf(' ') === -1) {
    console.log("WOW! you finally got the password right!");
}
else {
    console.log('you got the password wrong again.')

}

//Example 9

let num1 = 5;
if (num1 >= 1 && num1 <= 10) {
    console.log('Number is between 1 and 10');
}
else {
    console.log('please guess a number between 1 and 10')
}

// Logical OR
// only 1 side needs to be true

//Example 9
let age = 10;
if (age < 6 || age >= 65) {
    console.log('Yay! You get in for free!')
}
else {
    console.log('You have to pay $10 for entry.')
}

//Example 10
//checking for shade of purple
let color = 'purple';
if (color === 'purple' || color === 'lilac' || color === 'violet') {
    console.log('Great Choice!');
}
else {
    console.log('The only color to matter is a shade of purple!')
}
// Not Operator
// Returns true if something is false
// Example 11
// if there isnt a logged in user do something
let loggedInUser1;
if (!loggedInUser1) {
    console.log('GET OUT OF HERE!');
}

// Example 12
let flavor = 'apple'

if (flavor !== 'grape' && flavor !== 'cherry') {
    console.log('WE DONT HAVE THAT FLAVOR!');
}

if (!(flavor === 'grape' || flavor === 'cherry')) {
    console.log('We only have grape and cherry!')
}

// The Switch Statement
// Example 13

let day = 1;

// if (day === 1) {
//     console.log ('MONDAY');
// }
// else if (day === 2) {
//     console.log('Tuesday');
// }
// else if (day === 3) {
//     console.log('Wednesday');
// }
// else if (day === 4) {
//     console.log('Thursday');
// }
// else if (day === 5) {
//     console.log('Friday');
// }
// else if (day === 6) {
//     console.log('Saturday');
// }
// else if (day === 7) {
//     console.log('Sunday');
// }
// else {
//     console.log('INVALID DAY')
// }

switch (day) {
    case 1:
        console.log('MONDAY');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('incorrect input')

}

let emoji = 'lips'

switch (emoji) {
    case 'sad face':
    case 'happy face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'lips':
    case 'heart':
        console.log('red');
        break;
    // deafult is needed for incorrect input
}

//Ternary Operator
// condition ? expIfTrue: expIfFalse
//Example 14

let num2 = 7;
if (num2 === 7) {
    console.log('lucky!')
}
else {
    console.log('Unlucky!')
}

num2 === 7 ? console.log('lucky!') : console.log('Unlucky!')

//Example 15

let status = 'offline';
let status1 = 'offline';
let color1;
if (status === 'offline') {
    color1 = 'red'
} else {
    color1 = 'green'
}

let color2 = status1 === 'offline' ? 'red' : 'green'; {
    console.log(color2)
}

//Arrays

//to make an array the [] is like a nempty pill box
let students = [];

let shoppingList = ['cheese', 'cereal', 'ice']
console.log(shoppingList)

let lotto = [45, 12, 23, 25, 34];
console.log(lotto)

let myCollection = [12, 'dog', true, null, NaN]
console.log(myCollection)

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// How to access information within the Array 1. colors.length; colors[1]; or colors[colors.length-1]

let colors1 = ['red', 'orange', 'green', 'yellow'];
colors[0] = 'red';
colors[2] = 'yellow';
colors[3] = 'green';
colors[4]; //undefined
colors[4] = 'blue';

// the above works but not when you don't know how many items there are. like if a user wanted to add another color from the web page.
colors1[colors1.length] = 'Purple'; // this adds to the end of the array
console.log(colors1);

///////////////////////// ARAY METHODS ////////////////////////////

let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
];

topSongs.push('Fortunate Son') //add something to the end
topSongs.pop() // removes the last item in the array and returns it

let dishesToDo = ['big platter'];
dishesToDo.unshift('large plate'); // add to start
dishesToDo.unshift('small plate');
dishesToDo.unshift('cereal bowl');
dishesToDo.unshift('mug');
dishesToDo.unshift('spoon');
console.log(dishesToDo);
dishesToDo.shift(); // Removes from start 
dishesToDo.unshift('fork', 'knife'); // adds this entire chunk not each item indvidually 
console.log(dishesToDo);

let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];
console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

let allFood = fruits.concat(veggies, meats, fruits)
console.log(allFood)

let ingredients = [
    'water',
    'sugar',
    'shrimp',
    'flour',
    'cheese'
]

// includes = true or false is the item in the array dirrect match
console.log(ingredients.includes('chocolate'));

if (ingredients.includes('flour')) {
    console.log("I don't eat flour!");
}

// .indexof retunrs the first index of said value
console.log(ingredients.indexOf('sugar'));

// reverse reverses the current array

console.log(ingredients.reverse())

// join combines the contents of an array to a single string 
console.log(ingredients.reverse().join(','));

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizrd', 'tortoise'];
let swimmers = animals.slice(0, 3);
let mammals = animals.slice(2, 4);
let reptiles = animals.slice(4, 6);
console.log(swimmers)
console.log(mammals)
console.log(reptiles)

let quadruped = animals.slice(-3);
console.log(quadruped)

// creates a copy of an array
let copy = animals.slice

// to insert something after shark first argument to start removing or inserting. second how many should you delete and third how many should you add

animals.splice(1, 0, 'octopus');
console.log(animals);

animals.splice(3, 2);
console.log(animals);

animals.splice(3, 0, 'snake', 'frog');
console.log(animals);

animals.splice(0, 2, 'SHARK', 'OCTOPUS');
console.log(animals);

let people = ['Mrs. Robinson', 'Angie', 'Jolene',]
console.log(people.sort());
let nums = [34, 100000, 99, 56];
console.log(nums.sort())

let fruit = 'orange';
let color3 = fruit;

//Value type variable
let nums1 = [5, 6, 7, 8]
let otherNums = nums1
nums1.pop()
nums1.pop()
console.log(nums1)

const myEggs = ['brown', 'brown'];
myEggs.push('purple');
myEggs[0] = 'green';
console.log(myEggs)

const foods = ['milk'];
foods.push('chocolate');
foods.unshift('tortillas');
console.log(foods)
foods.pop()
foods.pop()
foods.pop()
console.log(foods)
// NESTED ARRAYS
const animalPairs = [
    ['doe', ['buck', 'stag']],
    ['ewe', 'ram'],
    ['peahen', 'peacock']
];

//To access 'ewe'
console.log(animalPairs[1][0]);

//To access 'buck'
console.log(animalPairs[0][1][0]);

//Updating a sub-array:
console.log(animalPairs[0][1].push('hart'));
//apparently some people call male deer 'harts'.  idk.

console.log(animalPairs[0][2] = 'stag')

/////////////////////// OBJECTS ///////////////////////////

const fitbitData = [
    308756,
    1814,
    211
]
const lucyFitbitData = [
    12344,
    1814,
    211
]

// totalSteps  -> 308727,
// totalMiles  -> 211.7,
// avgCalorieBurn -> 5755,
// workoutsThisWeek -> '5 of 7',
// avgGoodSleep   -> '2:13's

const fitBitData1 = {
    totalSteps: 308727, // total steps is a key, 
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
};

let data = {
    a: 1,
    b: 2,
    c: 3
};

// Use [] when the key name is an invalid variable name ex. 76trombones
const numbers4 = {
    100 : 'one hundred',
    16 : 'sixteen',
    '76 trombones' : 'Great song'
};
const palette = {
    red : '#eb4d4b',
    yellow : '#f9ca24',
    blue : '#30336b'
};

let mysteryColor = 'yellow';

const userReviews = {};
userReviews['queenBee49'] = 4.5;
userReviews.mrSmith78 = 3.5;
userReviews['colt'] = 5

const student = {
	firstName : 'David',
	lastName  : 'Jones',
	strengths : [ 'Music', 'Art' ],
	exams     : {
		midterm : 92,
		final   : 88
	}
};

const avg = (student.exams.midterm + student.exams.final) / 2;

const shoppingCart = [
	{
		product  : 'Jenga Classic',
		price    : 6.88,
		quantity : 1
	},
	{
		product  : 'Echo Dot',
		price    : 29.99,
		quantity : 3
	},
	{
		product  : 'Fire Stick',
		price    : 39.99,
		quantity : 2
	}
];

const game = {
	player1 : {
		username  : 'Blue',
		playingAs : 'X'
	},
	player2 : {
		username  : 'Muffins',
		playingAs : 'O'
	},
	board   : [ [ 'O', null, 'X' ], 
                [ 'X', 'O', 'X' ], 
                [ null, 'O', 'X' ] ]
};

const palette1 = {
	red    : '#eb4d4b',
	yellow : '#f9ca24',
	blue   : '#30336b'
};
//Objects & Arrays are reference types
const palette2 = palette1;
//If we change one value...
palette2.green = '#ebf876';

//Both variables reflect that change...
palette.green; //"#ebf876"
palette2.green; //"#ebf876"

let nums2 = [1,2,3];
let mystery1 = [1,2,3];
let moreNums = nums2

//They 'look' the same, but refer to different arrays
nums2 === mystery1; // false

//These two arrays reference the exact same array, so we get true:
nums2 === moreNums; //true

const user = {
	username      : 'CherryGarcia8',
	email         : 'garcia@gmail.com',
	notifications : [ 'message', 'alert' ]
};

// //THIS WILL NOT WORK!
// if (user.notifications === []) {
// 	console.log('NO NEW NOTIFICATIONS!');
// }
// THIS VERSION DOES WORK!
if (!user.notifications.length) {
	console.log('NO NEW NOTIFICATIONS!');
}
[1,2,3] 

// LOOPS 

// 3 pieces to a for loop:
// 1 - Variable declaration
// 2 - The condition
// 3 - Update the loop variable

// STEP 1: 'let i = 1' - start i at 1
// STEP 2: 'i <= 10' - run the loop as long as i <= 10
// STEP 3: 'i++' - add 1 to i each time through
for (let i = 1; i <= 10; i++) {
	console.log('HELLO:', i);
}

// Counting by 3's:
for (let i = 1; i <= 10; i += 3) {
	console.log('HELLO:', i);
}

// Printing first 20 perfect squares:
for (let num = 1; num <= 20; num++) {
	console.log(`${num}x${num} = ${num * num}`);
}

// Counting DOWN from 200 by intervals of 25:
for (let i = 200; i >= 0; i -= 25) {
	console.log(i);
}
console.log('AFTER THE LOOP!');

// 10 total Times

// 50 inital value
// 60  when to run the loop
// +1 how to change value each time

//////////////////// INFINITE LOOPS ////////////////

// DON'T RUN THIS!
// for (let i = 1; i !== 20; i += 2) {
// 	console.log(i);
// }

// THE ABOVE LOOP NEVER ENDS
// i starts at 1, and we add 2 each time
// 1,3,5,7,9,11,13,15,17,19,21,etc.
// i never hits 20, so the loop condition is always true

// Instead, write it this way:
for (let i = 1; i <= 20; i += 2) {
	console.log(i);
}
for (let i=100; i>=0;i--){
    console.log(i)
}

////////////// FOR LOOPS + ARRAYS ///////////////

// ======= EXAMPLE 1 ==========
// Printing each element in an array
const examScores = [ 98, 77, 84, 91, 57, 66 ];

for (let i = 0; i < examScores.length; i++) {
	console.log(i, examScores[i]);
}

// ======= EXAMPLE 2 ==========
// Same idea, but with a more complex array
const myStudents = [
	{
		firstName : 'Zeus',
		grade     : 86
	},
	{
		firstName : 'Artemis',
		grade     : 97
	},
	{
		firstName : 'Hera',
		grade     : 72
	},
	{
		firstName : 'Apollo',
		grade     : 90
	}
];

for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	console.log(`${student.firstName} scored ${student.grade}`);
}

// ======= EXAMPLE 3 ==========
// Averaging all grades in myStudents array
let total = 0; //total will hold the sum of all grades

for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	total += student.grade; //add each grade to total
}
console.log(total / myStudents.length); //divide by number of students

// ======= EXAMPLE 4 ==========
// Reversing a string
const word = 'stressed';

let reversedWord = ''; //will hold reversed string

//Loop backwards over the string
for (let i = word.length - 1; i >= 0; i--) {
	reversedWord += word[i]; //add each char to reversedWord
}

console.log(reversedWord);


// ================ Example 5 ====================
const animals1 = ['lions', 'tigers', 'bears'];
for (let animalpos = 0; animalpos < animals1.length; animalpos++){
    console.log(animalpos, animals1[animalpos]);
}


// =============== NESTED LOOP =================

for (let i = 1; i <= 10; i++) {
	console.log('OUTER LOOP:', i);
	for (let j = 10; j >= 0; j -= 2) {
		console.log('  INNER LOOP', j);
	}
}

// EXAMPLE 2
// Sum all elements in our 2048 board
const gameBoard = [
	[ 4, 32, 8, 4 ],
	[ 64, 8, 32, 2 ],
	[ 8, 32, 16, 4 ],
	[ 2, 8, 4, 2 ]
];

let totalScore = 0
for (let i = 0; i < gameBoard.length; i++){
    let row = gameBoard[i]
    console.log(row)
    for (j = 0; j < row.length; j++){
        console.log(row[j]);
        totalScore += row[j];
    }
}
console.log("Total Score is " + (totalScore))


// =============== WHILE LOOPS ========================

for (let i = 0; i <= 5; i++) {
	console.log(i);
}

//Recreating the above for loop w/ a while loop:
let j1 = 0;
while (j1 <= 5) {
	console.log(j1);
	j1++;
}

// ===== // Pick a target number we are trying to guess =====
// const target = Math.floor(Math.random() * 10);
// // ==== Make initial guess ====
// let guess = Math.floor(Math.random() * 10);

// // Continue looping while guess is not the target num
// while (guess !== target) {
// 	console.log(`Target: ${target} Guess: ${guess}`);
// 	// ====IMPORTANT!!====
// 	// ====Update the value of guess each time through the loop====
// 	guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`CONGRATS YOU WIN!!`);

const target = Math.floor(Math.random() * 10);
let guess;
//ANOTHER APPROACH TO THE PREVIOUS GUESSING 'GAME'
while (true) {
	if (target === guess) break; //Break stops the loop in its tracks
	console.log(`Target: ${target} Guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);

// ================================= FOR OF LOOP ============================================= //
let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];
// With a standard for loop
for (let i = 0; i < subreddits.length; i++) {
	console.log(subreddits[i]);
}
//Much cleaner  with a for...of loop!
for (let sub of subreddits) {
	console.log(sub);
}
//Works with other iterables, like strings!
for (let char of 'cockadoodledoo') {
	console.log(char.toUpperCase());
}

const magicSquare = [ [ 2, 7, 6 ], 
                      [ 9, 5, 1 ], 
                      [ 4, 3, 8 ] ];

// Version using a for loop...
for (let i = 0; i < magicSquare.length; i++) {
	let row = magicSquare[i];
	let sum = 0;
	for (let j = 0; j < row.length; j++) {
		sum += row[j];
	}
	console.log(`${row} summed to ${sum}`);
}

// Much cleaner version using a for...of
for (let row of magicSquare) {
	let sum = 0;
	for (let num of row) {
		sum += num;
	}
	console.log(`${row} summed to ${sum}`);
}

// EXAMPLE 2
// If you need the indices, use a traditional for loop!
const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (let i = 0; i < words1.length; i++) {
	//Access index i of both arrays
	console.log(`${words1[i]}${words2[i]}`);
}

///// ======================== LOOPING OVER OBJECTS ============== //////

const movieReviews = {
	Arrival                : 9.5,
	Alien                  : 9,
	Amelie                 : 8,
	'In Bruges'            : 9,
	Amadeus                : 10,
	'Kill Bill'            : 8,
	'Little Miss Sunshine' : 8.5,
	Coraline               : 7.5
};

// THIS DOES NOT WORK!
// OBJECTS ARE NOT ITERABLE (can't use a for...of loop)
// for (let x of movieReviews) {
// 	console.log(x);
// }

// We CAN iterate over the keys of an object
for (let movie of Object.keys(movieReviews)) {
	console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

// We can also iterate over the values
// To calculate the average movie rating:
const ratings = Object.values(movieReviews);
let total1 = 0;
for (let r of ratings) {
	total1 += r;
}
let avg1 = total1 / ratings.length;
console.log('Average Rating: ', avg);

// ========================== FOR IN LOOPS ==============================

// for (variavle in object) {
//    statement
// }\

const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 5000000,
    battleOfTheDecades: 1000000
};

for (let prop in jeopardyWinnings){
    console.log(prop);
    console.log(jeopardyWinnings[prop]);
}
let total2 = 0;
for (let prop in jeopardyWinnings){
   total2 += jeopardyWinnings[prop];
}
console.log(`Ken Jennings Total Earnings: ${total2}`)
// looping over properties not their values. The key is a number
// Don't use below method  
for(let k in [88,99,77,66]){
    console.log(k);
}


/// ================================ FUNCTIONS =================================== ///

// STEP 1: Define the function:
function grumpus() {
	console.log('ugh...you again...');
	console.log('FOR THE LAST TIME...');
	console.log('LEAVE ME ALONE!!!');
}
// STEP 2: Call the function:
grumpus();
grumpus();
grumpus();

for (let i = 0; i < 1; i++) {
	grumpus();
}

// ====== DICE ROLL FUNCTION ======= // 

// Define our first function
function rollDie() {
	// Pick a random number from 1-6
	// - Math.random() gives us a decimal from 0-1
	// - We multiply by 6, so now we have a random number between 0 up to 6 (but not including 6).  Something likee 3.490823 or 5.991234
	// - Then we floor to remove the decimal,  leaving us with a whole number from 0-5
	//- Lastly we add one, to get a number between 1 and 6
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}

// We can call functions inside of other functions!
function throwDice() {
	for (i=0; i<=6; i++) {
        rollDie();
    }
}
//Call it!
throwDice();

//// ============ INTRO TO ARGUMETS ======================= ///

// function greet() {
// 	console.log('Hi');
// }

// greet now expects a single argument
function greet(nickname) {
	console.log(`Hi, ${nickname}!`);
}
greet('Sansa');
greet('Ramsay');

// EXAMPLE 2
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}
// We can now specify how many dice to roll!
function throwDice(numRolls) {
	for (let i = 0; i < numRolls; i++) {
		rollDie();
	}
}

throwDice(2);
throwDice(3);

// ================================= multiple arguments ===============================

function square(num) {
	console.log(num * num);
}

function sum(x, y) {
	console.log(x + y);
}

function divide(a, b) {
	console.log(a / b);
}


// ============================= RETURNING A VALUE =============================================

// No return!
function add(x, y) {
	console.log(x + y);
}
// you can only return one value
// This version returns the sum of x & y;
function add(x, y) {
	return x + y;
}

// We can capture the return value:
const total3 = add(4, 9); //13


function square(x) {
	return x * x;
	console.log('ALL DONE!'); //this NEVER runs;
}

// One way of writing this function
function isPurple(color) {
	if (color.toLowerCase() === 'purple') {
		return true;
	}
	else {
		return false;
	}
}

// We don't need the else!
function isPurple(color) {
	if (color.toLowerCase() === 'purple') {
		return true;
	}
	return false;
}

// An even shorter way!
function isPurple(color) {
	return color.toLowerCase() === 'purple';
}

function containsPurple(arr) {
	for (let color of arr) {
		if (color === 'purple' || color === 'magenta') {
			return true;
		}
	}
	return false;
}


//////// ================================ PRACTICE ==================================== //////

// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false


// Example 1 

// function isValidPassword(password, username){
//      if (password.length <= 8){
//     return false;
//      } 
//      if(password.indexOf(' ') !== -1){
//         return false
//      } 
//      if(password.indexOf(username) !== -1){

//      }
//      return true
// }

// Example 2
// function isValidPassword(password, username) {
//     const tooShort = password.length <8;
//     const hasSpace = password.indexOf(' ');
//     const tooSimilar = password.indexof(username) !== -1;
//     if (tooShort || hasSpace || tooSimilar) return false;
//     return true
// }

// Example 3 

function isValidPassword(password, username) {
    const tooShort = password.length <8;
    const hasSpace = password.indexOf(' ');
    const tooSimilar = password.indexof(username) !== -1;
    return !tooShort && !hasSpace && !tooSimilar

}

// EXAMPLE 4 

// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2


function avg2(arr) {
    let total = 0
    for (let num of arr) {
 total += num;
    }
    let res = total / arr.length;
    
}

// Example 5 
function isPangram(sentence){
    let lowerCased = sentence.toLowerCase();
for (let char of 'abcdefghijklmnopqrstuvwxyz'){
    if(!lowerCased.includes(char)){
        return false;
    }
}
return true;
}

// Example 6 
function pick(arr){
   const idx = Math.floor(Math.random() * arr.length)
    return arr[idx];
}

function getcard(){
    const values =[
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
    ];

   const suits = ['clubs', 'spades', 'hearts', 'diamonds']

   return { value: pick(values), suit: pick(suits)}
}
