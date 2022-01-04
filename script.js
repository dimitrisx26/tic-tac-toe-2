const blocks = document.querySelectorAll(".block");

const Player = (name, option) => {
    playerName = name;
    playerOption = option;

    return { playerName, playerOption };
};

const player1 = Player("dimitris", "X");
const player2 = Player("marlena", "O");

const gameBoard = (() => {
    const boxesArray = [
        "","","",
        "","","",
        "","",""
    ];

    return {boxesArray};
})();

const displayController = (() => {
    let playerTurn;

    function round ( ) {
        for (let i = 0; i < gameBoard.boxesArray.length; i++) {
            blocks[i].addEventListener("click", function () {
                if (gameBoard.boxesArray[i] == "") {
                    if (!playerTurn) {
                        blocks[i].textContent = player1.playerOption;
                    } else {
                        blocks[i].textContent = player2.playerOption;
                    }
                    blocks[i].classList.add("selected");
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