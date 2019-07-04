
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winCount = 0;
var lossCount = 0;
var guessLeft = 9;
var guessedLetters = [];


// Computer randomly chooses a letter
var randomLetter = Math.floor(Math.random () * letters.length); 
var computerChoice = letters[randomLetter];
console.log(computerChoice);


// Guesses left
var updateGuessLeft = function() {
    document.querySelector(".guessesLeft").innerHTML = guessLeft;
}

var guessesSoFar = function() {
    document.querySelector(".yourGuesses").innerHTML = guessedLetters;
}

//reset the game everytime player wins or loses
var reset = function() {
    guessLeft = 9;
    guessedLetters = [];
    updateRandowLetter;
    updateGuessLeft;
    guessesSoFar;
}

// function to capture player's keyboard input
document.onkeyup = function (event) {
    var userChoice = event.key;
    console.log(userChoice);
    
    guessLeft--;
    updateGuessLeft();

    guessedLetters.push(userChoice); //add to previous guessed letters
    guessesSoFar();

    if (userChoice == computerChoice) {
        winCount++;
        document.querySelector(".winNumbers").innerHTML = winCount;
        reset ();
    } else if (guessLeft == 0){
        lossCount++;
        document.querySelector(".lossNumbers").innerHTML = lossCount;
        reset ();
    }
}

