import { useState } from "react";
import meditate from "./assets/meditate.svg";

function App() {
  return (
    <>
      <h1>✨ Self Care Center ✨</h1>
      <h3>Which type of message?</h3>

      <div className="message-selector">
        <form className="type-selector">
          <input type="radio" name="message" id="affirmation" selected />
          <label htmlFor="affirmation">affirmation</label>

          <input type="radio" name="message" id="mantra" />
          <label htmlFor="mantra">mantra</label>
        </form>
        <button>Recieve Message</button>

        <div className="message-output">
          <img src={meditate} />
        </div>
      </div>
    </>
  );
}

export default App;
