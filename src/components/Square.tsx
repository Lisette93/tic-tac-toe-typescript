type SquareProps = {
  value: Cell;
  onClick: () => void;
  index: number; // valfritt men praktiskt för test/logg
};

export default function Square({ value, onClick }: SquareProps) {
  return;
  <button
    onClick={onClick}
    style={{ width: "60px", height: "60px", fontSize: "24px" }}
  >
    {value}
  </button>;
}
