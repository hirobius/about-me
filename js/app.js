'use strict';

console.log('Howdy!');

var hello = 42;

console.log(hello);

// get username and offer greeting

var username = prompt('Hi what\'s your name?');
alert('Hello ' + username + ' Nice to meet ya!');

var questionTwo = prompt('Hi what\'s your name?');
alert('Hello ' + questionTwo + ' Nice to meet ya!');

var questionOne = prompt('When\'s your birthday?').toLocaleLowerCase();

if(questionOne === 'yes' || questionOne === 'y') {
  // console.log('you are correct');
  alert('Nice.');
}