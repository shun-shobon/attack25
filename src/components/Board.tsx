import React, { FC } from "react";

import range from "../utils/range";

import Cell from "./Cell";

import styles from "./Board.module.scss";

type Props = {
  board: number[][];
  handleClick: (position: [number, number]) => unknown;
};

const Board: FC<Props> = ({ board, handleClick }) => {
  return (
    <table className={styles.board}>
      <thead>
        <tr>
          {range(board.length + 1).map((index) =>
            index === 0 ? <th key={index} /> : <th key={index}>{index}</th>,
          )}
        </tr>
      </thead>
      <tbody>
        {board.map((rowArray, row) => (
          <tr key={row}>
            <td>{row + 1}</td>
            {rowArray.map((_, col) => (
              <td key={col}>
                <Cell onClick={() => handleClick([row, col])} color={board[row][col]} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
