'use strict';
console.log('Howdy!');

// Ask the User their name through a prompt
// Display that name back to the user through a custom greeting welcoming them to your site.

var username = prompt('Hello! What\'s your name?');
alert('Lorem 0 ' + username + ' Ipsum 0');


// Prompt the user a total of exactly five yes or no questions.
// The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity


var questionOne = prompt('Question 1?').toUpperCase();

if (questionOne === 'YES' || questionOne === 'Y') {
  // console.log('Very Good.');
  alert('Very Good.');
} else if (questionOne === 'NO' || questionOne === 'N') {
  // console.log('Hmm...');
  alert('Hmm...');
} else {
  // console.log('That\'s too bad');
  alert('That\'s too bad...');
}


// alert('Lorem 1 ' + questionOne + ' Ipsum 1');

// var questionTwo = prompt('Question 2?').toUpperCase;
// alert('Lorem 2 ' + questionTwo + ' Ipsum 2');

// var questionThree = prompt('Question 3?').toUpperCase;
// alert('Lorem 3 ' + questionThree + ' Ipsum 3');

// var questionFour = prompt('Question 4?').toUpperCase;
// alert('Lorem 4 ' + questionFour + ' Ipsum 4');

// var questionFive = prompt('Question 5?').toUpperCase;
// alert('Lorem 4 ' + questionFive + ' Ipsum 4');


// if(questionOne === 'yes' || questionOne === 'y') {
//   // console.log('you are correct');
//   alert('Nice.');
// }

// Display the user’s name back to them in your final message to the user.

