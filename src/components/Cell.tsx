import React, { FC } from "react";

import { colors } from "../values";

import styles from "./Cell.module.scss";

type Props = {
  onClick: () => unknown;
  color: number;
};

const Cell: FC<Props> = ({ onClick, color }) => {
  return (
    <button className={styles.cell} style={{ backgroundColor: colors[color] }} onClick={onClick} />
  );
};

export default Cell;
