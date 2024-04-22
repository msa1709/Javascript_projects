let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too high ! Try Again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too low! Try Again!";
        gameResult.style.backgroundColor = "#1e217c";

    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations you got it";
        gameResult.style.backgroundColor = "Green";
    } else {
        gameResult.textContent = "Provide a valid user Input";
        gameResult.style.backgroundColor = "#ie217c";
    }


}