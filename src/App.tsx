import React, { useState } from "react";
import "./App.css";
import { RenderBoard } from "./components/RenderBoard";
import { GenerateBoard } from "./Generator/Generator";

function App() {
  const [board, setBoard] = useState(GenerateBoard(false));

  return (
    <body>
      <div>
        <div className="headline">
          <h1>Catan Board Generator</h1>
          <input
            type="button"
            value={"Shuffle"}
            onClick={() => setBoard(GenerateBoard(false))}
          />
        </div>
        <div className="inputs">
          Rules:
          <div className="checkbox-group">
            <input type="checkbox" />
            Resources can have the same numbers
          </div>
          <div className="checkbox-group">
            <input type="checkbox" />
            Same resources can touch each other
          </div>
        </div>
        <RenderBoard board={board} />
      </div>
    </body>
  );
}

export default App;
