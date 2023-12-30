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
    let randomCard = Math.floor(Math.random() * 11) + 2;
    return randomCard;
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