// GLOBAL VARIABLES
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// GENERATES A RANDOM NUMBER BETWEEN 2 - 11
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;

    /* If statement that uses operators (< and >) to 
    check if cards are less than or greater than 2 and 10 respectively */

    if (randomCard > 10) {
        return 10
    } else if (randomCard < 2) {
        return 11
    } else {
        return randomCard;
    }
}

// TRIGGER FOR GAME LOOP
function startGame() {
    renderGame()
}

// GAME LOOP
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

// DRAWS NEW CARD
function newCard() {
    let card = getRandomCard();
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}


console.log(getRandomCard())




/* FUNCTION CREATED JUST FOR FUN TO CHECK WHAT NUMBERS
   MY getRandomCard FUNCTION GENERATES :) */

let randomCardArray = []

function checkRandomCard() {
    for (let i = 0; i < 13; i++) {
        randomCardArray.push(getRandomCard())
    }
    console.log(randomCardArray);
}

checkRandomCard();