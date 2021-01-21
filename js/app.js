'use strict';

var score = 0;

// Ask the User their name through a prompt
// Display that name back to the user through a custom greeting welcoming them to your site.

var username = prompt('Hello. What\'s your name?');
alert('Welcome, ' + username + ', to my life.');

// Prompt the user a total of exactly five yes or no questions.
// The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity

function questionOne() {
  var quizOne = prompt('Do I like dogs?').toUpperCase();

  if (quizOne === 'YES' || quizOne === 'Y') {
    // console.log('Well done.');
    alert('Well done.');
    score++;
  } else if (quizOne === 'NO' || quizOne === 'N') {
    // console.log('Incorrect.');
    alert('Incorrect.');
  } else {
    // console.log('Ok, that doesn\'t make sense.');
    alert('Ok, that doesn\'t make sense.');
  }
}
questionOne();

function questionTwo() {
  var quizTwo = prompt('Do I like piña coladas?').toUpperCase();

  if (quizTwo === 'YES' || quizTwo === 'Y') {
    // console.log('Not really');
    alert('Not really');
    score++;
  } else if (quizTwo === 'NO' || quizTwo === 'N') {
    // console.log('Correct.');
    alert('Correct.');
  } else {
    // console.log('Umm...');
    alert('Umm...');
  }
}
questionTwo();

function questionThree() {
  var quizThree = prompt('Do I prefer electric razors?').toUpperCase();

  if (quizThree === 'YES' || quizThree === 'Y') {
    // console.log('Totally, if I watch a good review beforehand.');
    alert('Totally, if I watch a good review beforehand.');
    score++;
  } else if (quizThree === 'NO' || quizThree === 'N') {
    // console.log('I actually do, but with other things I\'m more on the analog side of life.');
    alert('I actually do, but with other things I\'m more on the analog side of life.');
  } else {
    // console.log('I mean...);
    alert('I mean...');
  }
}
questionThree();

function questionFour() {
  var quizFour = prompt('Am I a gamer?').toUpperCase();

  if (quizFour === 'YES' || quizFour === 'Y') {
    // console.log('I feel it...');
    alert('+10,000 EXP');
    score++;
  } else if (quizFour === 'NO' || quizFour === 'N') {
    // console.log('Dude. Get with it.');
    alert('Dude. Get with it.');
  } else {
    // console.log('Moving on..);
    alert('Moving on..');
  }
}
questionFour();

function questionFive() {
  var quizFive = prompt('Am I into politics?').toUpperCase();

  if (quizFive === 'YES' || quizFive === 'Y') {
    // console.log('Unfortunate, ' + username + '.');
    alert('Unfortunate, ' + username + '.');
    score++;
  } else if (quizFive === 'NO' || quizFive === 'N') {
    // console.log('Unfortunate, ' + username + '.');
    alert('Unfortunate, ' + username + '.');
  } else {
    // console.log('Unfortunate, ' + username + '.');
    alert('Unfortunate, ' + username + '.');
  }
}
questionFive();

// ^^^ Display the user’s name back to them in your final message



// The following is a 6th question that takes in a numeric input by prompting the user to guess a number
// The alert given back is an indicator on if the number is too high or too low
// There should be exactly 4 guesses allowed
// After all eamples have been exhausted, we must alert the user the correct answer, (Consider using an loop of some sort)

function questionSix() {
  for (var i = 0; i < 4; i++) {
    var fingers = 7;
    var guessCounter = 4;
    var fingerQuestion = 'How many fingers am I holding up?';
    var guessFingers = +prompt(fingerQuestion + ` You have ${guessCounter - i} guesses remaining.`);
    if (guessFingers === fingers) {
      alert('Excellent.');
      score++;
      break;
    } else if (i === 2) {
      alert('Last guess.');
    } else if (i < 3 && guessFingers < fingers) {
      alert('Higher...');
    } else if (i < 3 && guessFingers > fingers) {
      alert('Lower...');
    }
  }
}
questionSix();
alert('The correct answer was 7.');


// The last question, #7 will have multiple correct answers possible that are stored in an array
// There will be 6 guesses allowed
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
// At the very end, the user should be shown how many answers they got right out of 7. Keep track of them the whole time


var colors = ['WHITE', 'BLUE', 'BLACK', 'RED', 'GREEN', 'YELLOW', 'PURPLE'];
var guessCounter = 6;
var correctAnswer = false;
for (var i = 0; i < guessCounter; i++) {
  var guess = prompt(`Name one of my favorite colors. ${guessCounter - i} guesses remaining.`).toUpperCase();
  for (var j = 0; j < colors.length; j++) {
    if (guess === colors[j]) {
      alert('Good job!');
      score++;
      correctAnswer = true;
      break;
    }
  }
  if (correctAnswer) {
    break;
  } else {
    alert('Incorrect. Please try again.');
  }
}

alert('My favorite colors are WHITE, BLUE, BLACK, RED, GREEN, YELLOW and PURPLE.');
alert('Your final score is: ' + score + '/7.');

// alternate || solution:

// if (guess === colors[0] || guess === colors[1] || guess === colors[2] || guess === colors[3] || guess === colors[4] || guess === colors[5] || guess === colors[6]) {
//   alert('Good Job!');
//   score++;
//   break;
// } else {
//   alert('Sorry.');
// }