import type { Player } from "./types";

export function calculateWinner(board: (Player | null)[]): Player | null {
  const LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ] as const;

  for (const [a, b, c] of LINES) {
    const v = board[a];
    if (v && v === board[b] && v === board[c]) return v;
  }
  return null;
}

export function isDraw(board: (Player | null)[]): boolean {
  return board.every((cell) => cell !== null);
}
