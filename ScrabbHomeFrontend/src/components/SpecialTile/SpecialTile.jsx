import "./SpecialTile.css";
import "@fontsource/chivo";

function SpecialTile({ isCenter, type }) {
  let text;
  if (type) {
    switch (type) {
      case "doubleLetter":
        text = "DL";
        break;
      case "doubleWord":
        text = "DW";
        break;
      case "tripleLetter":
        text = "TL";
        break;
      case "tripleWord":
        text = "TW";
        break;
    }
  }
  return isCenter ? (
    <div className="specialTile centerTile">
      <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 0L24.4903 13.8197H39.0211L27.2654 22.3607L31.7557 36.1803L20 27.6393L8.2443 36.1803L12.7346 22.3607L0.97887 13.8197H15.5097L20 0Z"
          fill="white"
        />
      </svg>
    </div>
  ) : (
    <div className={"specialTile " + type}>
      <span className="specialTileLetters">{text}</span>
    </div>
  );
}

export default SpecialTile;
