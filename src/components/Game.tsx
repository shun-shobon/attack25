import React, { FC, useState, useEffect } from "react";

import range from "../utils/range";
import { Board as BoardType, Color, Position } from "../values";

import Board from "./Board";
import SelectColor from "./SelectColor";

const findReversible = (
  board: BoardType,
  [row, col]: Position,
  color: Color,
  [dirRow, dirCol]: Position,
): Position[] => {
  if (dirRow === 0 && dirCol === 0) return [];
  const reversible: Position[] = [];
  let depth = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    depth += 1;

    const targetRow = row + dirRow * depth;
    const targetCol = col + dirCol * depth;

    if (targetRow < 0 || board.length - 1 < targetRow) break;
    if (targetCol < 0 || board.length - 1 < targetCol) break;
    const targetColor = board[targetRow][targetCol];
    if (targetColor < 0) break;
    if (targetColor === color) return reversible;
    reversible.push([targetRow, targetCol]);
  }
  return [];
};

const findReversibleAll = (board: BoardType, position: Position, color: Color): Position[] => {
  const direction = [-1, 0, 1];
  return direction.flatMap((dirRow) =>
    direction.flatMap((dirCol) => findReversible(board, position, color, [dirRow, dirCol])),
  );
};

type Props = {
  size: number;
  teamCount: number;
};

const Game: FC<Props> = ({ size, teamCount }) => {
  const [board, setBoard] = useState<BoardType>([]);
  useEffect(() => {
    const initBoard = range(size).map(() => range(size).map(() => -1));
    setBoard(initBoard);
  }, [size]);
  const [color, setColor] = useState<Color>(0);

  const handleClick = (position: Position) => {
    const reversible = findReversibleAll(board, position, color);
    const boardTmp = [...board];
    boardTmp[position[0]][position[1]] = color;
    reversible.forEach(([row, col]) => {
      boardTmp[row][col] = color;
    });
    setBoard(boardTmp);
  };

  return (
    <div>
      <Board board={board} handleClick={handleClick} />
      <SelectColor colorValue={color} colorSetter={setColor} teamCount={teamCount} board={board} />
    </div>
  );
};

export default Game;
