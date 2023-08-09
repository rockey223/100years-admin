import React from "react";
import "./ConfirmBox.css";


function ConfirmBox(props) {
    return (
        <div className="confirm-container" style={props.showC ? { display: "block" } : { display: "none" }} onClick={() => props.setShowC(false)}>
            <div className="confirm-box">
                <div className="message-area">
                    {props.message}
                </div>
                <div className="confirm-buttons">
                    <div className="confirm-cancel">
                        <button>Cancel</button>
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