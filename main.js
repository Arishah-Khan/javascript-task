// Task 1: If you have three same characters in your string find the index of middle one

// var greeting = "hello, how are you? I hope you are doing well.";
// var letterCount = 0;

// for (var i = 0; i < greeting.length; i++) {
//     if (greeting[i] === "h") {
//         letterCount++;
//         if (letterCount === 2) {
//             console.log("Index of the middle 'h':", i);
//             break;
//         }
//     }
// }



// // Task 2

// // Make a heads and tails game using random numbers

// Prompt for player names
// var userPlayer1 = prompt("Enter first player name?");
// var userPlayer2 = prompt("Enter second player name?");

// // Generate a random number (0 or 1)
// var result = Math.round(Math.random());

// // Define heads or tails based on the random result
// var resultText;
// if (result === 1) {
//     resultText = "Heads";
// } else {
//     resultText = "Tails";
// }

// // Display the result
// console.log("Result: " + resultText);

// // Determine and display the winner
// if (result === 1) {
//     console.log("Player 1 " + userPlayer1  + "has  won the toss");
// } else {
//     console.log("Player 2 " + userPlayer2 + " has won the toss");
// }


// // // Task 3

// // Generate a password of user-defined length that consists of a mixture of characters, numbers, and special characters

// var passwordLengthInput = prompt("Enter the length for generating the password");

// // Convert the input to a number
// var passwordLength = Number(passwordLengthInput);

// // Define the character set for password generation
// var characterSet = "TRYYUJFGIYURDTYRTYOUPYAASDCVMOasdsjhdfuiweorbnsfuij2347934jhdf4375fgert7248hasrafyu@#$%&^&^#89&*&^*2345@#%3678%^Y&%HJFU%&!8897^%7";

// // Array to store generated characters
// var result = [];

// // Generate random characters based on passwordLength
// for (var i = 0; i < passwordLength; i++) {
//     var randomIndex = Math.floor(Math.random() * characterSet.length);
//     result.push(characterSet[randomIndex]);
// }

// // Join the characters in the result array to form a string
// var generatedPassword = result.join("");

// // Display the generated password
// console.log("Generated password: " + generatedPassword);


// Task 4


// var currentDate = new Date();
// var tenthMuharramDate = new Date(2024, 6, 17);
// var difference = tenthMuharramDate - currentDate;

// var days = Math.floor(difference / (1000 * 60 * 60 * 24));
// var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((difference % (1000 * 60)) / 1000);

// document.write("Time remaining until 10th Muharram: " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds.");


// task 5

// var currentDate = new Date();

// var currentHours = currentDate.getHours();
// var currentMinutes = currentDate.getMinutes();
// var currentSeconds = currentDate.getSeconds();
 
// var period = "AM";
// var timeFormat = currentHours;

// if (currentHours >= 12) {
//     period = "PM";
//     if (currentHours > 12) {
//         timeFormat = currentHours - 12;
//     } else if (currentHours === 12) {
//         timeFormat = 12; // Noon case
//     }
// } else {
//     period = "AM";

//     if (currentHours === 0) {
//         timeFormat = 12; // Midnight case
//     }
// }

// document.write("Current time: " + timeFormat + ":" + currentMinutes + ":" + currentSeconds + " " + period);