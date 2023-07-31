import React, { useReducer } from "react";
import { calculatorWinner } from "../../helper";
import Board from "./Board";
import "./GameStyles.css";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
// immutable: ko thể chỉnh sửa
// deep copy JSON.parse(JSON.stringify(obj))
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      // console.log(state, action.payload);
      // const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || state.board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      // console.log(nextState);
      // nextState.board[index] = xIsNext ? "X" : "O";
      // nextState.xIsNext = !xIsNext;
      state.board[index] = state.xIsNext ? "X" : "O";
      state.xIsNext = !state.xIsNext;
      return nextState;
      // break;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      // nextState.board = Array(9).fill(null);
      // nextState.xIsNext = true;
      state.board = Array(9).fill(null);
      state.xIsNext = true;
      return nextState;
      // break;
    }
    default:
      console.log("Error");
      break;
  }
  return state;
};
const GameUseReducer = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const winner = calculatorWinner(state.board);
  const handleClick = (index) => {
    dispatch({ type: "CLICK", payload: { index, winner } });
  };
  const handleResetGame = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default GameUseReducer;
