// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards


let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let message = "";


function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        console.log("Player has blackjack: " + hasBlackJack);
        isAlive = !isAlive;
        console.log("Player is alive: " + isAlive);
    } else if (sum === 21) {
        message = "You have got blackjack! Congratulations!";
        hasBlackJack = !hasBlackJack;
        isAlive = !isAlive;
        console.log("Player has blackjack: " + hasBlackJack);
        console.log("Player is alive: " + isAlive);
    } else {
        message = "You have lost.";
        console.log("Player has blackjack: " + hasBlackJack);
        console.log("Player is alive: " + isAlive);
    }

    console.log(message);
}

