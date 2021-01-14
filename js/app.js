'use strict';
console.log('Howdy!');

// Ask the User their name through a prompt
// Display that name back to the user through a custom greeting welcoming them to your site.

var username = prompt('Hello. What\'s your name?');
alert('Welcome, ' + username + ', to a snippet of my life.');

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


var questionTwo = prompt('Question 2?').toUpperCase();

if (questionTwo === 'YES' || questionTwo === 'Y') {
  // console.log('I feel it...');
  alert('I feel it...');
} else if (questionTwo === 'NO' || questionTwo === 'N') {
  alert('I see, but no.');
} else {
  alert('Unfortunate.');
}


var questionThree = prompt('Question 2?').toUpperCase();

if (questionThree === 'YES' || questionThree === 'Y') {
  // console.log('I feel it...');
  alert('I feel it...');
} else if (questionThree === 'NO' || questionThree === 'N') {
  alert('I see, but no.');
} else {
  alert('Unfortunate.');
}


var questionFour = prompt('Question 2?').toUpperCase();

if (questionFour === 'YES' || questionFour === 'Y') {
  // console.log('I feel it...');
  alert('I feel it...');
} else if (questionFour === 'NO' || questionFour === 'N') {
  alert('I see, but no.');
} else {
  alert('Unfortunate.');
}


var questionFive = prompt('Question 2?').toUpperCase();

if (questionFive === 'YES' || questionFive === 'Y') {
  // console.log('Unfortunate, ' + username + '.');
  alert('Unfortunate, ' + username + '.');
} else if (questionFive === 'NO' || questionFive === 'N') {
  // console.log('Unfortunate, ' + username + '.');
  alert('Unfortunate, ' + username + '.');
} else {
  // console.log('Unfortunate, ' + username + '.');
  alert('Unfortunate, ' + username + '.');
}

// ^^^Display the user’s name back to them in your final message to the user.

