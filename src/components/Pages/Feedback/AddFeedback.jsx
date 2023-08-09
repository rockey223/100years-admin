import React from "react";
import "./AddFeedback.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AreaInput, InputBar } from "../../Tools/Input/Input";
import { ImFolderUpload } from "react-icons/im";

function AddFeedback(props) {
    return (
        <div className="addfeed-background" style={props.addPop ? { display: "block" } : { display: "none" }}>
            <div className="addfeed-container">
                <button className="close-btn" onClick={() => props.setAdd(false)}><AiOutlineCloseCircle /></button>
                <div className="addfeed-content">
                    <div className="name-input">
                        <label>Customer Name</label>
                        <InputBar
                            type={"text"}
                            height="25px"
                            width="600px"
                        />
                    </div>
                    <div className="profession-input">
                        <label>Customer Profession</label>
                        <InputBar
                            type={"text"}
                            height="25px"
                            width="600px"
                        />
                    </div>
                    <div className="file-input">
                        <div className="input-left">
                            <div className="left-title">Upload Image For Blog</div>
                            <div className="input-border">
                                <label>
                                    <input
                                        type="file"
                                        className="custom-input"
                                        accept=".doc,.docx,application/pdf"
                                    />
                                </label>
                                <ImFolderUpload />
                                <span className="input-text">Drag & drop files here</span>
                                <span className="input-text">File Supported: docx, pdf, etc.</span>
                                <span className="input-btn">Browse Files</span>
                                <span className="input-text">Maximum size: 250mb</span>
                            </div>
                        </div>
                        <div className="input-right">

                        </div>
                    </div>
                    <div className="message-section">
                        <label>Customer Message</label>
                        <AreaInput
                            height="150px"
                            width="508px"
                        />
                    </div>
                    <div className="addblog-buttons">
                        <button className="save-button">Save</button>
                        <button className="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFeedback;
