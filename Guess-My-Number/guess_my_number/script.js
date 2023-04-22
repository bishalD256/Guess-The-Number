'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//To dislay the message
const displayMesage = function (message) {
  document.querySelector('.message').textContent = message;
};

//To set the score
const setScore = function (value) {
  document.querySelector('.score').textContent = value;
};

//Functionality for check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (guess <= 0 || guess >= 21) {
    displayMesage('⛔ Please put value between 1 and 20!');

    //When player wins
  } else if (guess == secretNumber) {
    displayMesage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
    }

    document.querySelector('.highscore').textContent = highScore;

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMesage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      displayMesage('You lost the game!');
      setScore(0);
    }
  }
});

//Functionality for again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMesage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  setScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
