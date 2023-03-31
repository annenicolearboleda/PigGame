'use strict';

//Variables for
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let totalScore, score, activePlayer, playing;

const init = function () {
  totalScore = [0, 0];
  score = 0;
  activePlayer = 0;
  playing = true;

  //Starting conditions
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  score = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Resetting the game
btnNew.addEventListener('click', init);

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate random number from 1-6
    let dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check if rolled number is 1. If true, switch to next player without adding to the score
    if (dice !== 1) {
      //add score
      score += dice;
      document.getElementById(`current--${activePlayer}`).textContent = score;
    } else {
      //switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //Add score to global score
    totalScore[activePlayer] += score;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    //Is score below 100?
    if (totalScore[activePlayer] >= 100) {
      //If yes, Game ends, current player wins
      diceEl.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //If no, switch to other player
      switchPlayer();
    }
  }
});

var x = 1;
const y = 2;
let z = 3;
