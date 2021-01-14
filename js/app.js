'use strict';
console.log('Howdy!');

// Ask the User their name through a prompt
// Display that name back to the user through a custom greeting welcoming them to your site.

var username = prompt('Hello. What\'s your name?');
alert('Welcome, ' + username + ', to a snippet of my life.');

// Prompt the user a total of exactly five yes or no questions.
// The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity


var questionOne = prompt('Do I like dogs?').toUpperCase();

if (questionOne === 'YES' || questionOne === 'Y') {
  // console.log('Very Good.');
  alert('Well done.');
} else if (questionOne === 'NO' || questionOne === 'N') {
  // console.log('Hmm...');
  alert('Incorrect.');
} else {
  // console.log('That\'s too bad');
  alert('Ok, that doesn\'t make sense.');
}


var questionTwo = prompt('Do I like piña coladas?').toUpperCase();

if (questionTwo === 'YES' || questionTwo === 'Y') {
  // console.log('I feel it...');
  alert('Not really');
} else if (questionTwo === 'NO' || questionTwo === 'N') {
  alert('Correct.');
} else {
  alert('Umm...');
}


var questionThree = prompt('Do I prefer electric razors?').toUpperCase();

if (questionThree === 'YES' || questionThree === 'Y') {
  // console.log('I feel it...');
  alert('Totally, if I watch a good review beforehand.');
} else if (questionThree === 'NO' || questionThree === 'N') {
  alert('I actually do, but with other things I\'m more on the analog side of life.');
} else {
  alert('I mean...');
}


var questionFour = prompt('Am I a gamer?').toUpperCase();

if (questionFour === 'YES' || questionFour === 'Y') {
  // console.log('I feel it...');
  alert('+10,000 EXP');
} else if (questionFour === 'NO' || questionFour === 'N') {
  alert('Dude. Get with it.');
} else {
  alert('Moving on..');
}


var questionFive = prompt('Am I into politics?').toUpperCase();

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