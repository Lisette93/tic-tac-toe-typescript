import { useState } from "react";
import type { Board as BoardType, Player } from "../types";
import { calculateWinner, isDraw } from "../utils";
import Board from "./Board";
import Controls from "./Controls";

type GameState = {
  board: BoardType;
  nextPlayer: Player; //'X' starts
  isRunning: boolean;
  winner: Player | null;
};

const initialState: GameState = {
  board: Array(9).fill(null),
  nextPlayer: "X",
  isRunning: false,
  winner: null,
};

export default function Game() {
  const [game, setGame] = useState<GameState>(initialState);

  function handleStart() {
    setGame({ ...initialState, isRunning: true });
  }

  function handleRestart() {
    setGame({ ...initialState, isRunning: true });
  }

  function handleSquareClick(index: number) {
    if (!game.isRunning) return;
    if (game.board[index] !== null) return;

    const newBoard = [...game.board];
    newBoard[index] = game.nextPlayer;

    const winner = calculateWinner(newBoard);
    const draw = !winner && isDraw(newBoard);

    if (winner || draw) {
      setGame((s) => ({
        ...s,
        board: newBoard,
        winner,
        isRunning: false,
      }));
      return;
    }

    setGame((s) => ({
      ...s,
      board: newBoard,
      nextPlayer: s.nextPlayer === "X" ? "O" : "X",
    }));
  }

  const winnerNow = calculateWinner(game.board);

  const status = winnerNow
    ? `${winnerNow} Won!`
    : !game.isRunning && isDraw(game.board)
    ? "Draw!"
    : !game.isRunning
    ? "Click Start to play"
    : `Next player ${game.nextPlayer}`;

  return (
    <div>
      <h2 className="status">{status}</h2>
      <Board board={game.board} onSquareClick={handleSquareClick} />
      <Controls
        isRunning={game.isRunning}
        onStart={handleStart}
        onRestart={handleRestart}
      />
    </div>
  );
}
