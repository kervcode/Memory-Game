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
const restart = document.querySelector('.restart');
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
  //add card to a list of open cards
  openCards.push(clickedCard);
  // console.log(openCards);
  //check if open cards are matched
  if(openCards.length === 2) {
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
    previousCard.classList.add('open', 'disable');
    currentCard.classList.add('open', 'disable');
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
   let moves = document.querySelector('.moves');
  count++;
  moves.textContent = count;
 };
//  StarGrader();
};

// function StarGrader() {  
//   if(count > 1 && count % 4 === 0){
//     // for (let i = listOfStars.length; i > 1; i--) {
//     for (star of listOfStars) {
//       stars.removeChild(star);
//     }
//   };
// };


/*
*    + 
*    + 
*    + 
*    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
*/
function finalScore() {
  if (matched.length === 16 && cardsList.length === 16) {
    matched.forEach(function (element){
      element.classList.add('match', 'disable');
    });
    alert('you win the game');
  };
};

//Reset Game
function resetGame() {
  openCards = [];
  matched = [];
  clickedCard = [];
  previousCard = [];
  currentCard = [];
  count = 0;
  displayCards();

};

restart.addEventListener('click', function() {
  resetGame();
  console.log('game has restarted');
});


