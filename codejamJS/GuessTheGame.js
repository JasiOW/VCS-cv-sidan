
const randomNumber = Math.floor(Math.random()* 100) + 1
console.log("Random Number", randomNumber);

function checkGuess() {
    let myGuess = guess.value;
    if (myGuess === randomNumber) {
        feedback.textContent = "You guess it right!";
    } else if (myGuess > randomNumber) {
        feedback.textContent = "Your guess was " + myGuess + "Too high. Try again!";
    } else if (myGuess < randomNumber) {
        feedback.textContent = "Your guess was " + myGuess + "Too low. Try again!";
    }
}
submitGuess.addEventListener("click", checkGuess );