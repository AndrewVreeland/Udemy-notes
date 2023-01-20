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

let num2 =7;
if(num2 === 7){
    console.log('lucky!')
}
else {
    console.log('Unlucky!')
}

num2 === 7 ? console.log('lucky!') : console.log ('Unlucky!')

//Example 15

let status = 'offline';
let status1 = 'offline';
let color1;
if(status === 'offline') {
    color1 = 'red'
} else {
    color1 ='green'
}

let color2 = status1 === 'offline' ? 'red' : 'green'; {
    console.log (color2)
}


 