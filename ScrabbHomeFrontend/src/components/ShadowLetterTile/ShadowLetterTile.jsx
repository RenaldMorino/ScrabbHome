import "./ShadowLetterTile.css";
import "@fontsource/chivo";

function ShadowLetterTile({ letter, value }) {
  return (
    <div className="shadowTile">
      <span className="shadowLetter">{letter}</span>
      <span className="shadowValue">{value}</span>
    </div>
  );
}

export default ShadowLetterTile;
