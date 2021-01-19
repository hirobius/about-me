'use strict';

var score = 0;

// Ask the User their name through a prompt
// Display that name back to the user through a custom greeting welcoming them to your site.

var username = prompt('Hello. What\'s your name?');
alert('Welcome, ' + username + ', to my life.');

// Prompt the user a total of exactly five yes or no questions.
// The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity


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


var quizFive = prompt('Am I into politics?').toUpperCase();

if (quizFive === 'YES' || quizFive === 'Y') {
  // console.log('Unfortunate, ' + username + '.');
  alert('Unfortunate, ' + username + '.');
  score++;
} else if (quizFive === 'NO' || quizFive === 'N') {
  // console.log('Unfortunate, ' + username + '.');
  alert('Unfortunate, ' + username + '.');
  score++;
} else {
  // console.log('Unfortunate, ' + username + '.');
  alert('Unfortunate, ' + username + '.');
  score++;
}

// ^^^ Display the user’s name back to them in your final message





// The following is a 6th question that takes in a numeric input by prompting the user to guess a number
// The alert given back is an indicator on if the number is too high or too low
// There should be exactly 4 guesses allowed
// After all eamples have been exhausted, we must alert the user the correct answer, (Consider using an loop of some sort)

for (var i = 4; i > 1; i--) {
  var guessFingers = +prompt('How many fingers am I holding up?' + i + 'guesses remaining...');
  var fingers = 7;
  if (guessFingers === fingers) {
    alert('Excellent.');
    score++;
    break;
  } else if (i < 3 && guessFingers < fingers) {
    alert('Higher...');
  } else if (i < 3 && guessFingers > fingers) {
    alert('Lower...');
  } else if (i === 3) {
    alert('Last guess.');
  }
}



// The last question, #7 will have multiple correct answers possible that are stored in an array
// There will be 6 guesses allowed
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
// At the very end, the user should be shown how many answers they got right out of 7. Keep track of them the whole time

var answerCorrectly = false;
var numberOfGuesses = 6;
var myFavoriteAnimals = ['Lorem 1', 'Lorem 2', 'Lorem 3', 'Lorem 4'];
//console.log(myFavoriteAnimals);
for (var j = 0; j < numberOfGuesses; j++) {
  var guessMyFavorites = prompt('What are my Favorite animals you have ${numberOfGuesses - j} guesses remaining').toUpperCase();
  for (var k = 0; k < myFavoriteAnimals.length; k++) {
    if (guessMyFavorites === myFavoriteAnimals[k]) {
      alert('Good Job!');
      answerCorrectly = true;
      score++;
      break;
    }

  }
  if (answerCorrectly) {
    break;
  }
}




//     // while loop conversion
//     var answerCorrectly = false;
//     var numberOfGuesses = 6;
//     var myFavoriteAnimals = ['Lorem 1', 'Lorem 2', 'Lorem 3', 'Lorem 4'];
//     //console.log(myFavoriteAnimals);
//     while (numberOfGuesses && !answerCorrectly) {
//       var guessMyFavorites = prompt('What are my Favorite animals you have ${numberOfGuesses - j} guesses remaining').toUpperCase();
//       for (var k = 0; k < myFavoriteAnimals.length; k++) {
//         if (guessMyFavorites === myFavoriteAnimals[k]) {
//           alert('Good Job!');
//           answerCorrectly = true;
//           score++;
//           break;
//         }

//       }
//       if (answerCorrectly) {
//         break;
//         numberOfGuesses--;
//       }

//       alert('My favorite animals are');
//       console.log(score);
//       alert('Good job' + username + 'you did it!' + 'You got ' + score + 'correct answers!');
//     }

// // Make sure to update the .readme file at the end of this lab
// // Update your Console Logs as well



// // // Stretch Goals : 
// // After completing all of the requirements listed above, you may optionally challenge yourself further by implementing some or all of the following into your application.

// // Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a ‘for’ loop will control the flow from question to question.
// // Make the number-guessing question use a random number as its correct answer