import { useGame } from "../context/GameContext";
// import holePng from "../public/hole.png";
// import molePng from "../public/mole.png";

export default function Hole({ index }) {
  const { moleIndex, whackMole } = useGame();
  const hasMole = moleIndex === index;

  return (
    <div className="hole" onClick={hasMole ? whackMole : null}>
      <img src="/hole.png" className="hole-img" />

      {hasMole && <img src="/mole.png" className="mole-img" />}
    </div>
  );
}
