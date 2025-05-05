const grid = document.getElementById("tileMap");
const playBtn = document.getElementById("play");
const restartBtn = document.getElementById("restart");

const size = 5;
let board = [];

function createGrid() {
  grid.innerHTML = '';
  board = [];

  for (let i = 0; i < size; i++) {
    board[i] = [];
    for (let j = 0; j < size; j++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.dataset.row = i;
      tile.dataset.col = j;
      tile.addEventListener("click", handleToggle);
      grid.appendChild(tile);
      board[i][j] = tile;
    }
  }
}

function handleToggle(e) {
  const row = parseInt(e.target.dataset.row);
  const col = parseInt(e.target.dataset.col);
  toggleTile(row, col);
  toggleTile(row - 1, col);
  toggleTile(row + 1, col);
  toggleTile(row, col - 1);
  toggleTile(row, col + 1);
}

function toggleTile(row, col) {
  if (row >= 0 && row < size && col >= 0 && col < size) {
    board[row][col].classList.toggle("activated");
  }
}

function randomizeGrid() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (Math.random() > 0.5) {
        toggleTile(i, j);
      }
    }
  }
}

function resetGrid() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      board[i][j].classList.remove("activated");
    }
  }
}

playBtn.addEventListener("click", randomizeGrid);
restartBtn.addEventListener("click", resetGrid);

createGrid();
