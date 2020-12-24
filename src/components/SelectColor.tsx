import React, { FC } from "react";

import { Board, colors } from "../values";

import styles from "./SelectColor.module.scss";

type Props = {
  colorValue: number;
  colorSetter: (value: number) => void;
  teamCount: number;
  board: Board;
};

const SelectColor: FC<Props> = ({ colorValue, colorSetter, teamCount, board }) => {
  const name = "select-color";

  return (
    <div>
      <h3>カラーセレクト</h3>
      <div>
        {colors.slice(0, teamCount).map((color, index) => (
          <label key={index}>
            <input
              name={name}
              type="radio"
              value={color}
              checked={colorValue === index}
              onChange={() => colorSetter(index)}
            />
            <div style={{ backgroundColor: color }} className={styles.colorSquare} />
            <span>:{board.flat().filter((color) => color === index).length}枚</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SelectColor;
