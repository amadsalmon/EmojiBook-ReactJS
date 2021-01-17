import React, { useState } from "react";
import Emoji from "./Emoji";
import "./App.css";

let emojis = [];

function listAllEmojis() {
  for (let hexCode = 0x1f601; hexCode <= 0x1f64f; hexCode++) {
    emojis.push(hexCode);
  }
}
function App() {
  listAllEmojis();
  return (
    <div className="app">
      <h1>Emoji Book</h1>
      <div className="emojis-list">
        {emojis.map((emoji) => (
          <Emoji hexCode={emoji} />
        ))}
      </div>
    </div>
  );
}

export default App;
