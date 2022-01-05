const startBtn = document.getElementById("startBtn");

const Player = (name) => {
    playerName = name;

    return { playerName };
};

let player1 = Player("Player 1");
let player2 = Player("Player 2");

startBtn.addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
    const name1 = document.getElementById("player1").value;
    if (name1 !== "") {
        player1 = Player(name1);
        gameBoard.announcement.textContent = `${player1.playerName}'s turn`;
    }
    const name2 = document.getElementById("player2").value;
    if (name2 !== "") {
        player2 = Player(name2);
    }
})

const gameBoard = (() => {
    
    const nodesArray = document.querySelectorAll(".block");
    const announcement = document.getElementById("announcement");
    const restartBtn = document.getElementById("restartGame");
    const boxesArray = [];
    for (let i = 0; i < nodesArray.length; i++) {
        boxesArray.push(nodesArray[i].textContent);
    }   

    const winningCompinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return { nodesArray, boxesArray, winningCompinations, announcement, restartBtn };
})();

const game = (() => {
    let turn;
    let playerTurn;
    gameBoard.announcement.textContent = `${player1.playerName}'s turn`;
    
    (function round() {
        for (let i = 0; i < gameBoard.nodesArray.length; i++) {
            gameBoard.nodesArray[i].addEventListener("click", function () {
                gameBoard.announcement.textContent = turn ? `${player1.playerName}'s turn` : `${player2.playerName}'s turn`;
                if (gameBoard.boxesArray[i] === "") {
                    if (!turn) {
                        gameBoard.nodesArray[i].textContent = "X"
                        gameBoard.boxesArray[i] = "X";
                    } else {
                        gameBoard.nodesArray[i].textContent = "O"
                        gameBoard.boxesArray[i] = "O"
                    }
                    gameBoard.nodesArray[i].classList.add("selected");
                }
                roundEnd();
            })
        }

        gameBoard.restartBtn.addEventListener("click", function () {
            restartRound();
        })
    })();

    function restartRound() {
        turn = false;
        gameBoard.announcement.textContent = turn ? `${player2.playerName}'s turn` : `${player1.playerName}'s turn`;
        for (let i = 0; i < gameBoard.nodesArray.length; i++) {
            gameBoard.nodesArray[i].textContent = ""
            gameBoard.boxesArray[i] = "";
            gameBoard.nodesArray[i].classList.remove("selected")
            gameBoard.nodesArray[i].classList.remove("unclickable");
        }
    }

    function roundEnd() {
        playerTurn = turn ? "O" : "X";
        if (checkWin(playerTurn)) {
            endGame(true);
        } else if (checkDraw()) {
            endGame(false);
        } else {
            swapTurns();
        }
    }

    function checkWin() {
        return gameBoard.winningCompinations.some(compination => {
            return compination.every(index => {
                return gameBoard.boxesArray[index] === playerTurn;
            })
        })
    }

    function checkDraw() {
        return gameBoard.boxesArray.every(box => {
            return box === "X" || box === "O";
        })
    }

    function swapTurns() {
        turn = !turn;
    }

    function endGame(result) {
        if (result) {
            gameBoard.nodesArray.forEach(node => {
                node.classList.add("unclickable");
            });
            gameBoard.announcement.textContent = `${turn ? player2.playerName : player1.playerName} wins`;
        } else {
            gameBoard.announcement.textContent = "Tie";
        }
    }

    return {};
})();