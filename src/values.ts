export const initTeamCount = 4;
export const initBoardSize = 4;

export const colors = [
  "#ef5350",
  "#5c6bc0",
  "#9ccc65",
  "#ffee58",
  "#ffa726",
  "#26a69a",
  "#ab47bc",
  "#29b6f6",
  "#8d6e63",
];

export type Color = number;
export type Row = number;
export type Col = number;
export type Position = [Row, Col];
export type Board = Color[][];
