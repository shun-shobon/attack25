import React, { ChangeEvent, FC, FormEvent, useState } from "react";

import { colors, initBoardSize, initTeamCount } from "../values";

type Props = {
  teamCountSetter: (value: number) => void;
  boardSizeSetter: (value: number) => void;
};

const SetteingForm: FC<Props> = ({ teamCountSetter, boardSizeSetter }) => {
  const [teamCount, setTeamCount] = useState<number>(initTeamCount);
  const [boardSize, setBoardSize] = useState<number>(initBoardSize);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = window.confirm(`チーム数: ${teamCount}、大きさ: ${boardSize}で設定しますか？`);
    if (!res) return;
    teamCountSetter(teamCount);
    boardSizeSetter(boardSize);
  };

  const handleTeamCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    if (value < 1 || colors.length - 1 < value) return;
    setTeamCount(value);
  };

  const handleBoardSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    if (value < 1) return;
    setBoardSize(value);
  };

  return (
    <div>
      <h3>設定</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>チーム数:</span>
          <input type="number" value={teamCount} onChange={handleTeamCountChange} />
        </label>
        <label>
          <span>大きさ:</span>
          <input type="number" value={boardSize} onChange={handleBoardSizeChange} />
        </label>
        <input type="submit" value="更新" />
      </form>
      <div>※注意: 設定を変更すると、ボードの状態がリセットされます。</div>
    </div>
  );
};

export default SetteingForm;
