// 'use strict';
// document.querySelector('.message').innerText = '✌ Correct Number!';

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 19;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hscore = 0;
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const elementScore = document.querySelector('.score');
let inputNo = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const highScore = document.querySelector('.highscore');
const gameRepeat = document.querySelector('.again');

checkBtn.addEventListener('click', function () {
  if (!inputNo.value) {
    message.textContent = '😢 No Number Entered';
  }
  if (inputNo.value > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too high!';
      --score;
      elementScore.textContent = score;
    } else {
      message.textContent = '😔 OH!NOOO YOU LOSE THE GAME';
      elementScore.textContent = 0;
    }
  } else if (inputNo.value < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too Low!';
      --score;
      elementScore.textContent = score;
    } else {
      message.textContent = '😔 OH!NOOO YOU LOSE THE GAME';
      elementScore.textContent = 0;
    }
  } else {
    message.textContent = 'YEEHH YOU GOT THIS!';
    highScore.textContent = score;
    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;

    if (score < hscore) {
      hscore = score;
      highScore.textContent = hscore;
    }
  }
});

gameRepeat.addEventListener('click', function () {
  score = 20;
  message.textContent = 'Start guessing...';
  elementScore.textContent = 20;
  document.body.style.backgroundColor = '#222222';
  number.style.width = '15rem';
  number.textContent = '?';
  inputNo.value = '';
});
