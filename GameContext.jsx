import { createContext, useContext, useState } from "react";
const GameContext = createContext();

export function GameProvider({ children }) {
  const HOLES = 9;
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState(Math.floor(Math.random() * HOLES));

  function startGame() {
    setScore(0);
    setGameStarted(true);
    setMoleIndex(Math.floor(Math.random() * HOLES));
  }

  function restartGame() {
    setGameStarted(false);
  }

  function whackMole() {
    setScore((prev) => prev + 1);
    setMoleIndex(Math.floor(Math.random() * HOLES));
  }

  return (
    <GameContext.Provider
      value={{
        gameStarted,
        score,
        moleIndex,
        startGame,
        restartGame,
        whackMole,
        HOLES,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used inside GameProvider");
  }

  return context;
}
