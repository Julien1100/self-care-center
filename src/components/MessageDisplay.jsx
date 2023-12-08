import React from "react";
import "../css/MessageDisplay.css";

const MessageDisplay = ({ currentData, meditateImage }) => {
  return (
    <div className="message-display">
      {currentData ? (
        <div>
          <p>{currentData.text}</p>
        </div>
      ) : (
        <div>
          <img src={meditateImage} alt="Affirmation/Mantra" />
        </div>
      )}
    </div>
  );
};

export default MessageDisplay;
