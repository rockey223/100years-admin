import React from "react";
import { InputBar } from "../../Tools/Input/Input";
import "./EditProfile.css";

import { AiOutlineCloseCircle } from "react-icons/ai"

function EditProfile(props) {
    return (
        <div className="editProfile-back" style={props.showEP ? { display: "block" } : { display: "none" }}>
            <div className="editProfile-container">
                <button
                    className="epclose-btn"
                    onClick={() => props.setShowEP(false)}
                ><AiOutlineCloseCircle /></button>
                <div className="editProfile-content">
                    <form>
                        <div className="editprofile-label">
                            <label>Email</label>
                        </div>
                        <InputBar
                            type="email"
                            height="18px"
                            width="560px"
                        />
                        <div className="editprofile-label">
                            <label>UserName</label>
                        </div>
                        <InputBar
                            type="text"
                            height="18px"
                            width="560px"
                        />
                        <div className="editprofile-label">
                            <label>Password</label>
                        </div>
                        <InputBar
                            type="password"
                            height="18px"
                            width="560px"
                        />
                        <InputBar
                            type="password"
                            height="18px"
                            width="560px"
                        />
                        <InputBar
                            type="text"
                            height="18px"
                            width="560px"
                        />
                        <button className="editprofile-submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;