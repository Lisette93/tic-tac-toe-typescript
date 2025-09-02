import "./Controls.css";

type ControlProps = {
  isRunning: boolean;
  onStart: () => void;
  onRestart: () => void;
};

export default function Controls({
  isRunning,
  onStart,
  onRestart,
}: ControlProps) {
  return (
    <div className="controls">
      {!isRunning ? (
        <button className="start" onClick={onStart}>
          Start
        </button>
      ) : (
        <button className="restart" onClick={onRestart}>
          Restart
        </button>
      )}
    </div>
  );
}
