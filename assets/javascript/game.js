// Letters computer can pick from

let computerPicks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Counters for wins, losses, guesses left, and guesses so far - starting at zero
let wins = 0;
let losses = 0;
let guessLeft = 10;
let guessSoFar = [];
let computerLetter = "";



function startGame() {
    computerLetter = computerPicks[Math.floor(Math.random() * computerPicks.length)]
    wins = 0;
    losses = 0;
    guessLeft = 10;
    guessSoFar = [];
};
function updateDOM() {   
    document.getElementById("win").innerHTML= wins;
    document.getElementById("lose").innerHTML= losses;
    document.getElementById("guess").innerHTML= guessLeft;
    document.getElementById("sofar").innerHTML= guessSoFar;
    
}


// keyUp event for userGuess
document.onkeyup = function (event) {
    console.log(event)
    let keyPressed = event.key
    guessSoFar.push(keyPressed)
    console.log(guessSoFar)
    guessLeft--;
    if(keyPressed === computerLetter){
        wins++;
    }
    // else{
    //     losses++;
    // }
    if(guessLeft===0){
        losses++;
    }
    if(guessLeft===0){
        losses++;
        location.reload();
        
    }
    

    //this is where checkGame status is going to be called
    updateDOM()


}


// if statement if userGuess is correct




// else/if statement if userGuess is incorrect

//reset game 

//inner html of wins, losses, guesses left in updateDOM function

//write function to check the game status - if keypressed = computerLetter

//if statesment for guesses left 


startGame()
console.log(computerLetter);




