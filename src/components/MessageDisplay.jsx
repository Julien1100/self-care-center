import React from "react";

const MessageDisplay = ({ currentData, meditateImage }) => {
  return (
    <div>
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
