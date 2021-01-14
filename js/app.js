'use strict';
console.log('Howdy!');

// Ask the User their name through a prompt
// Display that name back to the user through a custom greeting welcoming them to your site.

var username = prompt('Hello. What\'s your name?');
alert('Welcome, ' + username + ', to a snippet of my life.');

// Prompt the user a total of exactly five yes or no questions.
// The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity


var questionOne = prompt('Do you like dogs?').toUpperCase();

if (questionOne === 'YES' || questionOne === 'Y') {
  // console.log('Very Good.');
  alert('Awesome.');
} else if (questionOne === 'NO' || questionOne === 'N') {
  // console.log('Hmm...');
  alert('Noted.');
} else {
  // console.log('That\'s too bad');
  alert('Ok, that doesn\'t make sense.');
}


var questionTwo = prompt('Do you like piña coladas?').toUpperCase();

if (questionTwo === 'YES' || questionTwo === 'Y') {
  // console.log('I feel it...');
  alert('I feel it...');
} else if (questionTwo === 'NO' || questionTwo === 'N') {
  alert('I see, but no.');
} else {
  alert('Unfortunate.');
}


var questionThree = prompt('Do you use Q Tips?').toUpperCase();

if (questionThree === 'YES' || questionThree === 'Y') {
  // console.log('I feel it...');
  alert('K, just be careful.');
} else if (questionThree === 'NO' || questionThree === 'N') {
  alert('Smart.');
} else {
  alert('I mean...');
}


var questionFour = prompt('Are you a gamer?').toUpperCase();

if (questionFour === 'YES' || questionFour === 'Y') {
  // console.log('I feel it...');
  alert('I feel it...');
} else if (questionFour === 'NO' || questionFour === 'N') {
  alert('Dude. Get with it.');
} else {
  alert('Moving on..');
}


var questionFive = prompt('Are you into politics?').toUpperCase();

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