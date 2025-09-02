import "./Board.css";
import type { Board as BoardType } from "../types";

type BoardProps = {
  board: BoardType;
  onSquareClick: (index: number) => void;
  winningLine?: number[] | null;
};

export default function Board({
  board,
  onSquareClick,
  winningLine,
}: BoardProps) {
  return (
    <div className="board">
      {board.map((cell, idx) => {
        const isWin = winningLine?.includes(idx) ?? false;
        const playerClass = cell === "X" ? "x" : cell === "O" ? "o" : "";
        return (
          <button
            key={idx}
            className={`square ${playerClass}${isWin ? " win" : ""}`}
            onClick={() => onSquareClick(idx)}
          >
            {cell}
          </button>
        );
      })}
    </div>
  );
}
