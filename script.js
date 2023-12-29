// GLOBAL VARIABLES
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let message = "";

// DOM VARIABLES
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    
}

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.innerText = "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.innerText = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        console.log("Player has blackjack: " + hasBlackJack);
        isAlive = !isAlive;
        console.log("Player is alive: " + isAlive);
    } else if (sum === 21) {
        message = "You have got blackjack!";
        hasBlackJack = !hasBlackJack;
        isAlive = !isAlive;
        console.log("Player has blackjack: " + hasBlackJack);
        console.log("Player is alive: " + isAlive);
    } else {
        message = "You have lost.";
        console.log("Player has blackjack: " + hasBlackJack);
        console.log("Player is alive: " + isAlive);
    }

    messageEl.innerText = message;
    console.log(message);
}

function newCard() {
    let newCard = getRandomCard();
    sum += newCard
    cards.push(newCard);
    console.log(cards);
    // Render the game after drawing a new card
    renderGame();
}



/* // PRACTICE 
let player1Time = Math.floor(Math.random() * 11);
let player2Time = Math.floor(Math.random() * 11);

function getFastestRaceTime() {
    if (player1Time > player2Time) {
        console.log("PLAYER 1 WON");
        return player1Time
    } else if (player1Time < player2Time) {
        console.log("PLAYER 2 WON");
        return player2Time
    } else {
        return console.log("ITS A TIE.")
    }
}
 
function totalRaceTime() {
    let raceTime = getFastestRaceTime();
    console.log("This was the fastest racetime: " + raceTime +"s");
    return player1Time + player2Time
}

totalRaceTime(); */