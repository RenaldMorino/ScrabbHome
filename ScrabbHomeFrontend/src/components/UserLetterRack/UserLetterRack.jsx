import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import letters from "../../data/letters";
import LetterTile from "../LetterTile/LetterTile";
import classNames from "classnames";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import Draggable from "react-draggable";

// function moveDiv(e) {
//   const editableArea = document.querySelector(".dragableRack");
//   window.addEventListener("mousemove", mouseMove);
//   window.addEventListener("mouseup", mouseRelease);
//   let prevX = e.clientX;
//   let prevY = e.clientY;

//   function mouseMove(e) {
//     let newX = prevX - e.clientX;
//     let newY = prevY - e.clientY;

//     if (editableArea) {
//       editableArea.style.left = prevX - newX + "px";
//       editableArea.style.top = prevY - newY + "px";
//     }
//   }

//   function mouseRelease() {
//     window.removeEventListener("mousemove", mouseMove);
//     window.removeEventListener("mouseup", mouseRelease);

//     prevX = e.clientX;
//     prevY = e.clientY;
//   }
// }

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
  moveButton: {
    width: "24px",
    height: "24px",
    position: "absolute",
    top: "-15px",
    left: "-15px",
    background: "#D972FF",
    border: "2px solid black",
    borderRadius: "8px",
    cursor: "grab",
  },
  pickedUp: {
    cursor: "grabbing",
  },
}));

export default function UserLetterRack() {
  const classes = useStyles();
  const [isDragging, setIsDragging] = useState(false);

  const startDrag = () => {
    setIsDragging(true);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  return (
    <Draggable handle=".handleDrag" onStart={startDrag} onStop={stopDrag}>
      <div className={classes.rack}>
        <div className={classNames(classes.moveButton, "handleDrag", isDragging && classes.pickedUp)}>
          <OpenWithIcon />
        </div>
        {[...Array(7)].map((val, i) => {
          return <LetterTile letter={letters[i].Character} value={letters[i].Value} key={"rackLetter " + i} />;
        })}
      </div>
    </Draggable>
  );
}
