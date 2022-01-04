const Player = (name, option) => {
    playerName = name;
    playerOption = option;

    return { playerName, playerOption };
};

const player1 = Player("dimitris", "X");
const player2 = Player("marlena", "O");

const gameBoard = (() => {
    const boxesArray = document.querySelectorAll(".block");

    return {boxesArray};
})();

const displayController = (() => {
    let playerTurn;

    function round ( ) {
        for (let i = 0; i < gameBoard.boxesArray.length; i++) {
            gameBoard.boxesArray[i].addEventListener("click", function () {
                if (gameBoard.boxesArray[i].textContent === "") {
                    if (!playerTurn) {
                        gameBoard.boxesArray[i].textContent = player1.playerOption;
                    } else {
                        gameBoard.boxesArray[i].textContent = player2.playerOption;
                    }
                    gameBoard.boxesArray[i].classList.add("selected");
                }
                swapTurns();
            })
        }
    }

    function swapTurns() {
        playerTurn = !playerTurn;
    }

    round();

    return {};
})();