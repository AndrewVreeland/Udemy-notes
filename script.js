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
if (mystery){
    console.log('TRUTHY')
}
else {
    console.log('FALSY')
}

//Example 6
let loggedInUSer = null;
if(loggedInUSer) {
    console.log('YOU ARE LOGGED IN!');
}
else {
    console.log(' PLEASE LOG IN!');
}