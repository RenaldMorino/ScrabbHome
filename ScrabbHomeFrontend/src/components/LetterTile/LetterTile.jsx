import "@fontsource/chivo";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  tile: {
    boxSizing: "border-box",
    position: "relative",
    width: "50px",
    height: "50px",
    top: "0px",
    left: "0px",
    margin: "2px",
    background: "#ffffff",
    border: "2px solid #000000",
    borderRadius: "7px",
    fontFamily: '"Chivo"',
    fontStyle: "normal",
    fontWeight: 400,
    color: "#000000",
    lineHeight: "36px",
    boxShadow: "0px 0px 0px #000000",
    transition: "box-shadow 0.1s, top 0.1s, left 0.1s",
  },
  letter: {
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
  value: {
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
  hoverable: {
    "&:hover": {
      top: "-4px",
      left: "-4px",
      boxShadow: "4px 4px 0px #000000",
      transition: "box-shadow 0.1s, top 0.1s, left 0.1s",
    },
  },
}));

function LetterTile({ letter, value, isPlaced }) {
  const classes = useStyles();
  return (
    <div className={classNames(classes.tile, !isPlaced && classes.hoverable)}>
      <span className={classes.letter}>{letter}</span>
      <span className={classes.value}>{value}</span>
    </div>
  );
}

export default LetterTile;
