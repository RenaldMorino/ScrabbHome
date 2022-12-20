import React from "react";
import { makeStyles } from "@mui/styles";
import letters from "../../data/letters";
import LetterTile from "../LetterTile/LetterTile";

const useStyles = makeStyles((theme) => ({
  rack: {
    display: "flex",
    padding: "5px",
    background: "#fff",
    width: "378px",
    margin: "auto",
    border: "2px solid black",
    borderRadius: "7px",

    position: "absolute",
    left: "calc(50% - 196px)",
    top: "calc(80vh)",

    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    KhtmlUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },
}));
export default function UserLetterRack() {
  const classes = useStyles();
  return (
    <div className={classes.rack}>
      {[...Array(7)].map((val, i) => {
        return (
          <LetterTile
            letter={letters[i].Character}
            value={letters[i].Value}
            key={"rackLetter " + i}
          />
        );
      })}
    </div>
  );
}
