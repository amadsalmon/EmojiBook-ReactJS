import React from "react";

function Emoji(props) {
  return (
    <div className="emoji-container">
      <p>{String.fromCodePoint(props.hexCode)}</p>
    </div>
  );
}
export default Emoji;
