let deck = document.querySelector('.deck');
let openCards = [];
let matched = [];
let clickedCard;
let previousCard;
let currentCard;
let count = 0;
let listOfStars = document.querySelectorAll('.stars li');
let stars = document.querySelector('.stars');
let star = [];
let moves = document.querySelector('.moves');
const restart = document.querySelector('.restart');
const playAgain = document.querySelector('.playAgain');
const messageStatus = document.querySelector('.displayMessage');
const ExitGame = document.querySelector('.exitGame');
/*
 * Create a list that holds all of your cards
 */
const cardsList = Array.from(document.querySelectorAll('.deck .card'));

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
function displayCards() {
  deck.innerHTML = "";
  shuffle(cardsList);
  for (let card of cardsList) {
    deck.appendChild(card);
  }
};
displayCards();

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; 
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/*
* set up the event listener for a card. If a card is clicked:
*  - display the card's symbol (put this functionality in another function that you call from this one)
*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
*  - if the list already has another card, check to see if the two cards match
*/
deck.addEventListener('click', function (event) {
  clickedCard = event.target;
  showCards(); 
  counter();
});

function showCards() {
  clickedCard.classList.add('open', 'show', 'disable');
  matchedCards();
};

function matchedCards() { 
  openCards.push(clickedCard); //add card to a list of open cards
  if(openCards.length === 2) { //check if open cards are matched
    previousCard = openCards[0];
    currentCard = openCards[1];
    cardIsMatch();  
    CardDontMatch();  
  };
  // counter();
};

function cardIsMatch() {
  if (previousCard.firstElementChild.className === currentCard.firstElementChild.className) {
    //if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
    previousCard.classList.add('open','match','disable');
    currentCard.classList.add('open', 'match','disable');
    openCards = [];
    matched.push(previousCard,currentCard);
  };
  finalScore();
};

//if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
function CardDontMatch() {
 if (previousCard.firstElementChild.className !== currentCard.firstElementChild.className){
   setTimeout(function(){
    previousCard.classList.remove('open', 'show', 'disable');
    currentCard.classList.remove('open', 'show', 'disable');
   }, 600);      
    openCards = [];  
 };    
};

//increment the move counter and display it on the page (put this functionality in another function that you call from this one)
function counter()  {
 if (openCards.length % 2 === 0){
   
  count++;
  moves.textContent = count;
 };
//  StarGrader();
};

function StarGrader() {  
  if(count > 1 && count % 4 === 0){
    // for (let i = listOfStars.length; i > 1; i--) {
    for (star of listOfStars) {
      stars.removeChild(star);
    }
  };
};


/*
*    + 
*    + 
*    + 
*    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
*/
function finalScore() {

  /*
  *function scope variable
   */
  const gameTime = document.querySelector('.gameTime');
  const gameMoves = document.querySelector('.gameMoves');
  const gameStars = document.querySelector('.gameStars');
  

  if (matched.length === 16 && cardsList.length === 16) {
    matched.forEach(function (element){
      element.classList.add('match', 'disable');
    });
    gameTime.textContent = 'Time : ' + '2:00';
    gameMoves.textContent = 'Moves: ' + count;
    gameStars.textContent = 'Stars: ' + count;
    showMessage();
  };
};

function showMessage() {
  messageStatus.style.visibility = 'visible';
};

function hideMessage() {
  messageStatus.style.visibility = 'hidden';
}

function getOut() {
  close();
}

//Reset Game
function resetGame() {
  openCards = [];
  matched = [];
  clickedCard = [];
  previousCard = [];
  currentCard = [];
  displayCards();
  moves.textContent = 0;
  cardsList.forEach(function (element){
    element.classList.remove('open', 'show', 'match','disable');
  });
};
/*
*
*reset game event listener
*/
restart.addEventListener('click', function() {
  resetGame();
  console.log('game has restarted');
});

//responding to click on playAgain button
playAgain.addEventListener('click', function (){
  hideMessage();
  resetGame();
});

ExitGame.addEventListener('click', function (){
  getOut();
});

/*
*adding a timer
* source is from https://drive.google.com/file/d/1blJv3xK22ozh80RuUC2iA-9_SGQKsJ9E/edit
*
*https://matthewcranford.com/memory-game-walkthrough-part-6-the-clock/
*/
// const timerContainer = document.querySelector('.gameTimer');
// let liveTimer,
//     totalSeconds = 0;
// // let isFirstClick = false;

// //set default value to the timer's container
// timerContainer.innerHTML = totalSeconds;

// function startTimer() {
//   liveTimer = setInterval(function() {
//     totalSeconds++;
//     timerContainer.innerHTML = totalSeconds;
//   }, 1000);
// }

let clockOff = true;





