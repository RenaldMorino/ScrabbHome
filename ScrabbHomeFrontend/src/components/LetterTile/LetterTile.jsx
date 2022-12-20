import "./LetterTile.css";
import "@fontsource/chivo";

function LetterTile({ letter, value }) {
  return (
    <div className="tile">
      <span className="letter">{letter}</span>
      <span className="value">{value}</span>
    </div>
  );
}

export default LetterTile;
