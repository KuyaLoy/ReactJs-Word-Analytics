import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
<<<<<<< HEAD
=======
  const [showWarning, setShowWarning] = useState(false);
>>>>>>> ac1053b68a1841df975c26a5f1522b5380407dc3
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarningText("No script tag allowed!");
<<<<<<< HEAD
=======
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
>>>>>>> ac1053b68a1841df975c26a5f1522b5380407dc3
    }
    if (newText.includes("@")) {
      newText = newText.replace("@", "");
      setWarningText("No @ symbol allowed!");
<<<<<<< HEAD
=======
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
>>>>>>> ac1053b68a1841df975c26a5f1522b5380407dc3
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
<<<<<<< HEAD
      <Warning warningText={warningText} />
=======
      {showWarning && <Warning warningText={warningText} />}
>>>>>>> ac1053b68a1841df975c26a5f1522b5380407dc3
    </div>
  );
}
