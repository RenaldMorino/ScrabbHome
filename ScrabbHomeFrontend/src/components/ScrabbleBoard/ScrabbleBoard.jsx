import "./ScrabbleBoard.css";
import React from "react";
import letters from "../../data/letters";
import LetterTile from "../LetterTile/LetterTile";
import ShadowLetterTile from "../ShadowLetterTile/ShadowLetterTile";
import SpecialTile from "../SpecialTile/SpecialTile";

const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
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
      return <SpecialTile isCenter />;
    case "tripleWord":
      return <SpecialTile type={"tripleWord"} />;
    case "tripleLetter":
      return <SpecialTile type={"tripleLetter"} />;
    case "doubleWord":
      return <SpecialTile type={"doubleWord"} />;
    case "doubleLetter":
      return <SpecialTile type={"doubleLetter"} />;
    default:
      return <LetterTile letter={""} value={""} key={"empty " + row + " " + col} />;
  }
}

export default function ScrabbleBoard() {
  return (
    <div className="board">
      {rows.map((row) => {
        return (
          <div className="row">
            {columns.map((col) => {
              return getTileType(row, col);
            })}
          </div>
        );
      })}
    </div>
  );
}
