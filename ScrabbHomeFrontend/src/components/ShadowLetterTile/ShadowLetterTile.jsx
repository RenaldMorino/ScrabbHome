import "@fontsource/chivo";
import { makeStyles } from "@mui/styles";
import palette from "../../data/palette";

const useStyles = makeStyles((theme) => ({
  shadowTile: {
    boxSizing: "border-box",
    position: "relative",
    width: "50px",
    height: "50px",
    margin: "2px",
    background: palette.shadowTiles.background,
    border: "2px dashed",
    borderColor: palette.shadowTiles.borderColor,
    borderRadius: "7px",
    fontFamily: '"Chivo"',
    fontStyle: "normal",
    fontWeight: 400,
    color: palette.shadowTiles.textColor,
    lineHeight: "36px",
  },
  shadowLetter: {
    position: "absolute",
    width: "24px",
    height: "25px",
    top: "8px",
    left: "5px",
    fontSize: "36px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  shadowValue: {
    position: "absolute",
    width: "16px",
    height: "11px",
    top: "34px",
    left: "29px",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    justifyContent: "right",
  },
}));
function ShadowLetterTile({ letter, value }) {
  const classes = useStyles();
  return (
    <div className={classes.shadowTile}>
      <span className={classes.shadowLetter}>{letter}</span>
      <span className={classes.shadowValue}>{value}</span>
    </div>
  );
}

export default ShadowLetterTile;
