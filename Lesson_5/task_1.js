function makeBoard() {
    const board = document.querySelector('#board');
    board.style.width = '450px';
    board.style.height = '450px';
    board.style.backgroundColor = '#f3d593';
    board.style.marginTop = '50px';
    board.style.marginLeft = '50px';
    board.style.paddingTop = '23px';
    board.style.display = 'flex';
    board.style.flexWrap = 'wrap';
    board.style.boxSizing = 'border-box';

    // Создаем блок с цифрами слева
    const numbers = document.createElement('div');
    numbers.style.width = '23px';
    numbers.style.height = '400px';
    numbers.style.display = 'flex';
    numbers.style.flexDirection = 'column';
    numbers.style.textAlign = 'center';
    for (let i = 8;i >= 1; i--) {
        let numBox = document.createElement('div');
        numBox.style.height = '50px';
        numBox.insertAdjacentHTML('afterbegin', '<p>' + i + '</p>');
        numbers.appendChild(numBox);
    }
    
    // Создаем сам блок с клетками
    const contur = document.createElement('div');
    contur.style.width = '400px';
    contur.style.height = '400px';
    contur.style.border = '1px solid black';
    contur.style.display = 'flex';
    contur.style.flexWrap = 'wrap';
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            let box = document.createElement('div');
            box.style.width = '48px';
            box.style.height = '48px';
            box.style.border = '1px solid black';
            if (((i % 2 != 0) && (j % 2 === 0)) || ((i % 2 === 0) && (j % 2 != 0))) {
                box.style.backgroundColor = 'black';
            }
            contur.appendChild(box);
        }
    }

    // Содаем блок с буквами снизу
    const letters = document.createElement('div');
    letters.style.width = '400px';
    letters.style.height = '23px';
    letters.style.marginLeft = '23px';
    letters.style.display = 'flex';
    let lettersList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let i in lettersList) {
        let letBox = document.createElement('div');
        letBox.style.width = '50px';
        letBox.style.paddingTop = '2px';
        letBox.textContent = lettersList[i];
        letBox.style.textAlign = 'center';
        letters.appendChild(letBox);
    }



    board.appendChild(numbers);
    board.appendChild(contur);
    board.appendChild(letters);
}

makeBoard();