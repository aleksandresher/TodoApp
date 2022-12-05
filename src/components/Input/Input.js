import "../Input/Input.css";
import darkCircle from "../../images/darkx.png";
import lightCircle from "../../images/comp.png";

function InputField({ value, changeHandler, addItem, daynight }) {
  return (
    <div className={daynight ? "darkUserInput" : "userInput"}>
      <img src={daynight ? darkCircle : lightCircle} className="img" />
      <input
        className={daynight ? "darkInputField" : "inputField"}
        type="text"
        value={value}
        onChange={changeHandler}
        onKeyDown={addItem}
        placeholder="Create a new todo..."
        spellCheck="false"
      />
    </div>
  );
}

export default InputField;
