const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkSinglePlayerWinner(
  board: ("X" | "O" | null)[]
): ["X" | "O" | "draw" | null, number[] | null] {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return [board[a], combo];
    }
  }

  return isDraw(board) ? ["draw", null] : [null, null];
}

function isDraw(board: ("X" | "O" | null)[]): boolean {
  return !board.includes(null);
}

export const checkMultiPlayerWinner = (squares: ("X" | "O" | null)[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  if (squares.every((square) => square)) {
    return "draw";
  }

  return null;
};
