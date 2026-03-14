import { useGame } from "../context/GameContext";
import Hole from "./Hole";

export default function GameScreen() {
  const { score, restartGame, HOLES } = useGame();
  const holesArray = Array.from({ length: HOLES });

  return (
    <div>
      <h2>Score: {score}</h2>
      <button onClick={restartGame}>Restart</button>
      <div className="board">
        {holesArray.map((_, index) => (
          <Hole key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
