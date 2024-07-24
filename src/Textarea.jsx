import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarningText("No script tag allowed!");
    }
    if (newText.includes("@")) {
      newText = newText.replace("@", "");
      setWarningText("No @ symbol allowed!");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      <Warning warningText={warningText} />
    </div>
  );
}
