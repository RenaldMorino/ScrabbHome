import React from "react";
import letters from "../../data/letters";
import LetterTile from "../LetterTile/LetterTile";
import ShadowLetterTile from "../ShadowLetterTile/ShadowLetterTile";
import SpecialTile from "../SpecialTile/SpecialTile";
import { makeStyles } from "@mui/styles";
import EmptyTile from "../LetterTile/EmptyTile";

const tileTypes = [
  ["tripleWord", "", "", "doubleLetter", "", "", "", "tripleWord", "", "", "", "doubleLetter", "", "", "tripleWord"],
  ["", "doubleWord", "", "", "", "tripleLetter", "", "", "", "tripleLetter", "", "", "", "doubleWord", ""],
  ["", "", "doubleWord", "", "", "", "doubleLetter", "", "doubleLetter", "", "", "", "doubleWord", "", ""],
  ["doubleLetter", "", "", "doubleWord", "", "", "", "doubleLetter", "", "", "", "doubleWord", "", "", "doubleLetter"],
  ["", "", "", "", "doubleWord", "", "", "", "", "", "doubleWord", "", "", "", ""],
  ["", "tripleLetter", "", "", "", "tripleLetter", "", "", "", "tripleLetter", "", "", "", "tripleLetter", ""],
  ["", "", "doubleLetter", "", "", "", "doubleLetter", "", "doubleLetter", "", "", "", "doubleLetter", "", ""],
  ["tripleWord", "", "", "doubleLetter", "", "", "", "isCenter", "", "", "", "doubleLetter", "", "", "tripleWord"],
  ["", "", "doubleLetter", "", "", "", "doubleLetter", "", "doubleLetter", "", "", "", "doubleLetter", "", ""],
  ["", "tripleLetter", "", "", "", "tripleLetter", "", "", "", "tripleLetter", "", "", "", "tripleLetter", ""],
  ["", "", "", "", "doubleWord", "", "", "", "", "", "doubleWord", "", "", "", ""],
  ["doubleLetter", "", "", "doubleWord", "", "", "", "doubleLetter", "", "", "", "doubleWord", "", "", "doubleLetter"],
  ["", "", "doubleWord", "", "", "", "doubleLetter", "", "doubleLetter", "", "", "", "doubleWord", "", ""],
  ["", "doubleWord", "", "", "", "tripleLetter", "", "", "", "tripleLetter", "", "", "", "doubleWord", ""],
  ["tripleWord", "", "", "doubleLetter", "", "", "", "tripleWord", "", "", "", "doubleLetter", "", "", "tripleWord"],
];

function getTileType(row, col) {
  switch (tileTypes?.at(row).at(col)) {
    case "isCenter":
      return <SpecialTile isCenter key={"tile " + row + " " + col} />;
    case "tripleWord":
      return <SpecialTile type={"tripleWord"} key={"tile " + row + " " + col} />;
    case "tripleLetter":
      return <SpecialTile type={"tripleLetter"} key={"tile " + row + " " + col} />;
    case "doubleWord":
      return <SpecialTile type={"doubleWord"} key={"tile " + row + " " + col} />;
    case "doubleLetter":
      return <SpecialTile type={"doubleLetter"} key={"tile " + row + " " + col} />;
    default:
      return <EmptyTile key={"tile " + row + " " + col} />;
  }
}

const useStyles = makeStyles((theme) => ({
  board: {
    alignItems: "center",
    justifyContent: "left",
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    KhtmlUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },
  row: {
    display: "flex",
  },
}));

export default function ScrabbleBoard() {
  const classes = useStyles();
  return (
    <div className={classes.board} id={"board"}>
      {[...Array(15)].map((row, i) => {
        return (
          <div className={classes.row} key={"row " + i}>
            {[...Array(15)].map((col, j) => {
              return getTileType(i, j);
            })}
          </div>
        );
      })}
    </div>
  );
}
