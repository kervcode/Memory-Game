const cards = Array.from(document.getElementsByClassName('card'));//Create a list that holds all of your cards
const deck = document.querySelector('.deck');





 //Display the cards on the page

 

//shuffle the list of cards using the provided "shuffle" method below
function shuffleCard () {
  for(card of cards) {
    shuffle(cards)
  }
}

/*   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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

clickEvent();

//set up the event listener for a card. If a card is clicked
function clickEvent () {
    deck.addEventListener('click', event => {
      const targetedCard = event.target;
      if(targetedCard.classList.contains('card')){
        toggleCard(targetedCard);
      }
    });
  };


//toggle card
function toggleCard(targetedCard) {
  targetedCard.classList.toggle('open');//open the card
  targetedCard.classList.toggle('show');//display the card's symbol
}


let moves = document.querySelector('.moves');
//counter
function counter () {
    
    
    // for(moves = 0; toggleCard % 2 === 0; moves++){
    //     console.log(moves);
    // }
}; 

{
/*  - display the card's symbol (put this functionality in another function that you call from this one)
*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
*  - if the list already has another card, check to see if the two cards match
*    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
*    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
*    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
*    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
*/
}