import React, { useState } from "react";
import "./AddFeedback.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AreaInput, InputBar } from "../../Tools/Input/Input";
import { ImFolderUpload } from "react-icons/im";
import axios from "axios";

function AddFeedback(props) {

    const [customerName, setCustomerName] = useState("");
    const [customerProfession, setCustomerProfession] = useState("");
    const [customerMessage, setCustomerMessage] = useState("");
    const [customerImage, setCustomerImage] = useState([]);

    function handleImageUpload(event) {
        const image = event.target.files[0];

        if (image) {
            const reader = new FileReader();

            reader.onload = () => {
                setCustomerImage(reader.result);
            };

            reader.readAsDataURL(image);
        }
    }

    function handleSubmitTestimonial() {

        const sendData = {
            customerName,
            customerProfession,
            customerMessage,
            customerImage
        }
        console.log(sendData);
    }

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
                            value={customerName}
                            handleInput={(event) => setCustomerName(event.target.value)}
                        />
                    </div>
                    <div className="profession-input">
                        <label>Customer Profession</label>
                        <InputBar
                            type={"text"}
                            height="25px"
                            width="600px"
                            value={customerProfession}
                            handleInput={(event) => setCustomerProfession(event.target.value)}
                        />
                    </div>
                    <div className="file-input">
                        <div className="input-left">
                            <div className="left-title">Upload Customer's Image</div>
                            <div className="input-border">
                                <label>
                                    <input
                                        type="file"
                                        className="custom-input"
                                        accept=".jpg, .jpeg"
                                        onChange={handleImageUpload}
                                    />
                                </label>
                                <ImFolderUpload />
                                <span className="input-text">Drag & drop files here</span>
                                <span className="input-text">File Supported: jpg, jpeg, etc.</span>
                                <span className="input-btn">Browse Files</span>
                                <span className="input-text">Maximum size: 250mb</span>
                            </div>
                        </div>
                        <div className="input-right-testimonial">
                            <div className="right-title">Uploaded Image</div>
                            <div className="image-display">
                                {customerImage && (
                                    <img src={customerImage} height={"150x"} width={"175px"} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="message-section">
                        <label>Customer Message</label>
                        <AreaInput
                            height="150px"
                            width="508px"
                            value={customerMessage}
                            handleInput={(event) => setCustomerMessage(event.target.value)}
                        />
                    </div>
                    <div className="addblog-buttons">
                        <button className="save-button" onClick={handleSubmitTestimonial}>Save</button>
                        <button className="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFeedback;
