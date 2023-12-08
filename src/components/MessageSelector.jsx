import React from "react";
import "../css/MessageSelector.css";

const MessageSelector = ({
  currentType,
  handleTypeChange,
  getRandomData,
  setCurrentData,
}) => {
  return (
    <div className="message-selector">
      <h3>Which type of message?</h3>
      <div className="type-wrapper">
        <div className="type-selector">
          <input
            type="radio"
            name="message"
            id="affirmation"
            value="Affirmation"
            checked={currentType === "Affirmation"}
            onChange={() => handleTypeChange("Affirmation")}
          />
          <label htmlFor="affirmation">affirmation</label>

          <input
            type="radio"
            name="message"
            value="Mantra"
            id="mantra"
            checked={currentType === "Mantra"}
            onChange={() => handleTypeChange("Mantra")}
          />
          <label htmlFor="mantra">mantra</label>
        </div>
        <button onClick={() => setCurrentData(getRandomData(currentType))}>
          Receive Message
        </button>
      </div>
    </div>
  );
};

export default MessageSelector;
