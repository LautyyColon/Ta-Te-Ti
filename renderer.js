const board = document.getElementById('board');
const resetBtn = document.getElementById('reset');

let cells = [];
let turn = 'X';

function checkWinner() {
  const combos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let combo of combos) {
    const [a,b,c] = combo;
    if (cells[a].textContent && 
        cells[a].textContent === cells[b].textContent &&
        cells[a].textContent === cells[c].textContent) {
      alert(`${cells[a].textContent} gana!`);
      return true;
    }
  }

  if (cells.every(cell => cell.textContent)) {
    alert("Empate!");
    return true;
  }

  return false;
}

function createBoard() {
  board.innerHTML = '';
  cells = [];
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => {
      if (!cell.textContent) {
        cell.textContent = turn;
        if (!checkWinner()) {
          turn = turn === 'X' ? 'O' : 'X';
        }
      }
    });
    board.appendChild(cell);
    cells.push(cell);
  }
}

resetBtn.addEventListener('click', () => {
  turn = 'X';
  createBoard();
});

createBoard();
