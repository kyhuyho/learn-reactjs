import React from "react";
import { calculatorWinner } from "../../helper";
import Cell from "./Cell";

const Board = (props) => {
  // console.log(props);
  // const cells = [null, null, null, "X", "X", "X", null, null, null];
  // console.log(calculatorWinner(cells));
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
