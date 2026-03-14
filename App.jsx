import { GameProvider, useGame } from "./context/GameContext";
import WelcomeScreen from "./components/WelcomeScreen";
import GameScreen from "./components/GameScreen";

function Game() {
  const { gameStarted } = useGame();

  return gameStarted ? <GameScreen /> : <WelcomeScreen />;
}

export default function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}
