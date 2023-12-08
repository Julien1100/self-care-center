import React from "react";

const MessageSelector = ({
  currentType,
  handleTypeChange,
  getRandomData,
  setCurrentData,
}) => {
  return (
    <div className="message-selector">
      <h3>Which type of message?</h3>
      <form className="type-selector">
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
      </form>
      <button onClick={() => setCurrentData(getRandomData(currentType))}>
        Receive Message
      </button>
    </div>
  );
};

export default MessageSelector;
