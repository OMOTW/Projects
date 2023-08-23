document.addEventListener("DOMContentLoaded", function () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let numGuesses = 0;

    const submitButton = document.getElementById("submitGuess");
    const resultMessage = document.getElementById("result");

    submitButton.addEventListener("click", function () {
        const playerGuess = parseInt(document.getElementById("playerGuess").value);

        if (playerGuess < randomNumber) {
            resultMessage.textContent = "Higher";
        } else if (playerGuess > randomNumber) {
            resultMessage.textContent = "Lower";
        } else {
            resultMessage.textContent = `The number was ${randomNumber}! You guessed it in ${numGuesses + 1} guesses.`;
        }

        numGuesses++;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Part 1 code remains the same

    const startComputerButton = document.getElementById("startComputerGuess");

    startComputerButton.addEventListener("click", startCompGuess);

    function startCompGuess() {
        let lowerBound = 1;
        let upperBound = 100;
        let computerGuess;
        let numComputerGuesses = 0;

        function makeComputerGuess() {
            computerGuess = Math.floor((lowerBound + upperBound) / 2);
            return computerGuess;
        }

        function updateBounds(response) {
            if (response === "lower") {
                upperBound = computerGuess - 1;
            } else if (response === "higher") {
                lowerBound = computerGuess + 1;
            }
        }

        function computerWins() {
            resultMessage.textContent = `The computer guessed your number (${computerGuess}) in ${numComputerGuesses + 1} guesses.`;
        }

        function handleResponse(response) {
            numComputerGuesses++;
            updateBounds(response);
            computerGuess = makeComputerGuess();
            resultMessage.textContent = `Is your number ${computerGuess}?`;
        }

        computerGuess = makeComputerGuess();
        resultMessage.textContent = `Is your number ${computerGuess}?`;

        const resultMessage = document.getElementById("result");
        const lowerButton = document.createElement("button");
        lowerButton.textContent = "Lower";
        const correctButton = document.createElement("button");
        correctButton.textContent = "Correct";
        const higherButton = document.createElement("button");
        higherButton.textContent = "Higher";

        lowerButton.addEventListener("click", () => handleResponse("lower"));
        correctButton.addEventListener("click", computerWins);
        higherButton.addEventListener("click", () => handleResponse("higher"));

        resultMessage.appendChild(lowerButton);
        resultMessage.appendChild(correctButton);
        resultMessage.appendChild(higherButton);
    }
});
