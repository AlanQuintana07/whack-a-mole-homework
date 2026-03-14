import { useGame } from "../context/GameContext";

export default function WelcomeScreen() {
  const { startGame } = useGame();

  return (
    <div>
      <h1>Whack-A-Mole</h1>
      <p>Click on the mole to score points!</p>
      <button onClick={startGame}>Play</button>
    </div>
  );
}
