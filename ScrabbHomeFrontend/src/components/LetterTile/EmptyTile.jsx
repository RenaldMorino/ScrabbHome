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
  },
}));

function EmptyTile() {
  const classes = useStyles();
  return <div className={classNames(classes.tile, "empty")}></div>;
}

export default EmptyTile;
