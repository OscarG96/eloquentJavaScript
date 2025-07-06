const chessBoard = (n) => {
  let board = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if ((j + i) % 2 == 0) {
        board += " "
      } else {
        board += "#"
      }
    }
    board += "\n";
  }
  console.log(board)
}

chessBoard(8)