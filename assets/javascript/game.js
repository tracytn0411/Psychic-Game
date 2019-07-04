
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winCount = 0;
var lossCount = 0;
var guessLeft = 9;
var guessedLetters = [];
var computerChoice;

reset();


// function to capture player's keyboard input
document.onkeyup = function (event) { //onkeyup event when user releases the key
    var userChoice = event.key; //return value is the pressed button
    console.log(userChoice);
    
    guessLeft--;
    updateGuessLeft(); //display number of guesses left (function below)

    guessedLetters.push(userChoice); //add to previous guessed letters
    guessesSoFar(); //display all guessed letters (function below)

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

// function to update and display number of guesses left
function updateGuessLeft() {
    document.querySelector(".guessesLeft").innerHTML = guessLeft;
}

// function to display guessed letters 
function guessesSoFar() {
    document.querySelector(".yourGuesses").innerHTML = guessedLetters;
}


//reset the game everytime player wins or loses so no need to reload the page
//win ar lose counts do not reset
//computer pick different letter at reset
function reset(){
    guessLeft = 9;
    guessedLetters = [];
    computerChoice = letters[Math.floor(Math.random () * letters.length)];
    console.log("computer pick: " + computerChoice);
    updateGuessLeft;
    guessesSoFar;
}


