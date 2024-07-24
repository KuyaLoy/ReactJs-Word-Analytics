import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
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
      {showWarning && <Warning />}
    </div>
  );
}
