import "./SpecialTile.css";
import "@fontsource/chivo";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import palette from "../../data/palette";

const useStyles = makeStyles((theme) => ({
  specialTile: {
    boxSizing: "border-box",
    position: "relative",
    width: "50px",
    height: "50px",
    margin: "2px",
    border: "2px solid #000000",
    borderRadius: "7px",
    fontFamily: '"Chivo"',
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  specialTileLetters: {
    fontSize: "15px",
  },
  doubleLetter: {
    background: palette.specialTiles.doubleLetter.background,
    color: palette.specialTiles.doubleLetter.textColor,
  },
  doubleWord: {
    background: palette.specialTiles.doubleWord.background,
    color: palette.specialTiles.doubleWord.textColor,
  },
  tripleLetter: {
    background: palette.specialTiles.tripleLetter.background,
    color: palette.specialTiles.tripleLetter.textColor,
  },
  tripleWord: {
    background: palette.specialTiles.tripleWord.background,
    color: palette.specialTiles.tripleWord.textColor,
  },
  centerTile: {
    background: palette.specialTiles.centerTile.background,
    color: palette.specialTiles.centerTile.textColor,
  },
}));
function SpecialTile({ isCenter, type }) {
  const classes = useStyles();
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
    <div className={classNames(classes.specialTile, classes.centerTile)}>
      <svg
        width="40"
        height="37"
        viewBox="0 0 40 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 0L24.4903 13.8197H39.0211L27.2654 22.3607L31.7557 36.1803L20 27.6393L8.2443 36.1803L12.7346 22.3607L0.97887 13.8197H15.5097L20 0Z"
          fill="white"
        />
      </svg>
    </div>
  ) : (
    <div className={classNames(classes.specialTile, classes[type])}>
      <span className={classes.specialTileLetters}>{text}</span>
    </div>
  );
}

export default SpecialTile;
