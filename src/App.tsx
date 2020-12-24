import React, { FC, useState } from "react";

import { initBoardSize, initTeamCount } from "./values";

import Game from "./components/Game";
import SetteingForm from "./components/SettingForm";
import Author from "./components/Author";

const App: FC = () => {
  const [teamCount, setTeamCount] = useState<number>(initTeamCount);
  const [boardSize, setBoardSize] = useState<number>(initBoardSize);

  return (
    <>
      <div>
        <Game size={boardSize} teamCount={teamCount} />
        <SetteingForm teamCountSetter={setTeamCount} boardSizeSetter={setBoardSize} />
      </div>
      <Author />
    </>
  );
};

export default App;
