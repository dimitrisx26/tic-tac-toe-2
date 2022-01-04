const gameBoard = (() => {
    const boxesArray = [
        "X","","O",
        "","X","O",
        "O","","X"
    ];

    const blocks = document.querySelectorAll(".block");

    for (let i = 0; i < boxesArray.length; i++) {
        blocks[i].textContent = boxesArray[i];
        if (boxesArray[i] !== "") {
            blocks[i].classList.add("selected");
        }
    }

    return {};
})();

const displayController = (() => {


    return {};
})();

const Player = (name, option) => {
    playerName = name;
    playerOption = option;

    return {};
};