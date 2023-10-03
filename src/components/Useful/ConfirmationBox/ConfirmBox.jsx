import React from "react";
import "./ConfirmBox.css";

function ConfirmBox(props) {
  return (
    <div
      className="confirm-container"
      style={props.showC ? { display: "block" } : { display: "none" }}
    >
      <div className="confirm-box">
        <div className="message-area">
          {props.message}{" "}
          {/* {!props.notex ? <span style={{ color: "red" }}>!</span> : ""} */}
        </div>
        <div className="confirm-buttons">
          <div className="confirm-cancel">
            <button onClick={() => props.setShowC(false)}>Cancel</button>
          </div>
          <div className="confirm-yes">
            <button onClick={props.buttonAction}>{props.buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBox;
