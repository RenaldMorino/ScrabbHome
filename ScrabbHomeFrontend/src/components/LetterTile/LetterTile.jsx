import "@fontsource/chivo";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import Draggable from "react-draggable";
import React, { useState } from "react";

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
    cursor: "grab",
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
  pickedUp: {
    "&:hover": {
      top: "-4px",
      left: "-4px",
      boxShadow: "4px 4px 0px #000000",
      transition: "box-shadow 0.1s, top 0.1s, left 0.1s",
      cursor: "grabbing",
    },
  },
}));

function LetterTile({ letter, value, isPlaced }) {
  const classes = useStyles();
  const nodeRef = React.useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [currentlyPlaced, setCurrentlyPlaced] = useState(isPlaced);
  const board = document.getElementById("board");

  const startDrag = (event, data) => {
    setIsDragging(true);
  };

  const dragging = (event, data) => {
    setCurrentX(event.pageX);
    setCurrentY(event.pageY);
    console.log(event);
  };

  const stopDrag = (event, data) => {
    setIsDragging(false);

    let elementsOnThatPoint = document.elementsFromPoint(currentX, currentY);
    let emptyTile = elementsOnThatPoint.filter((e) => e.classList.contains("empty"));
    if (emptyTile?.length > 0) {
      let rect = emptyTile[0].getBoundingClientRect();
      console.log(data);
      data.node.style.position = "absolute";
      data.node.style.top = rect.top;
      data.node.style.left = rect.left;
    }
    // setCurrentPlaced(true);
  };

  return (
    <Draggable disabled={currentlyPlaced} onStart={startDrag} onDrag={dragging} onStop={stopDrag}>
      <div ref={nodeRef} className={classNames(classes.tile, isDragging && classes.pickedUp)}>
        <span className={classes.letter}>{letter}</span>
        <span className={classes.value}>{value}</span>
      </div>
    </Draggable>
  );
}

export default LetterTile;
