import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😊": "Smiling",
  "😔": "Sad",
  "😳": "Disbelief",
  "😂": "Laughing",
  "😋": "Tasteful",
  "😒": "Unamused",
  "😣": "Suffering"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Check the Emotion's of Emoji</h1>

      <input onChange={emojiInputHandler}></input>

      <h2> {meaning} </h2>

      <h3>Emoji's we have</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
