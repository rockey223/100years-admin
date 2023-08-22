import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AreaInput, InputBar } from "../../../Tools/Input/Input";
import "./AddArticle.css";
import { ImFolderUpload } from "react-icons/im";

function AddArticle(props) {
    return (
        <div className="addArticle-back" style={props.showAV ? { display: "block" } : { display: "none" }}>
            <div className="addArticle-container">
                <button className="close-btn" onClick={() => props.setShowAV(false)}><AiOutlineCloseCircle /></button>
                <div className="addArticle-content">
                    <div className="addarticle-about-input">
                        <label>About</label>
                        <InputBar
                            type="text"
                        />
                    </div>
                    <div className="addarticle-description">
                        <label>Short Description</label>
                        <AreaInput />
                    </div>
                    <div className="article-input">
                        <div className="article-left">
                            <div className="left-title">Upload Video</div>
                            <div className="article-border">
                                <label>
                                    <input
                                        type="file"
                                        className="custom-input"
                                        accept=".mp4,.mpeg,.mpg"
                                    />
                                </label>
                                <ImFolderUpload />
                                <span className="input-text">Drag & drop files here</span>
                                <span className="input-text">File Supported: mp4, mpg, mpeg.</span>
                                <span className="input-btn">Browse Files</span>
                                <span className="input-text">Maximum size: 500mb</span>
                            </div>
                        </div>
                        <div className="input-right">

                        </div>
                    </div>
                    <div className="addarticle-buttons">
                        <button className="addarticle-save">Save</button>
                        <button className="addarticle-cancel">Cancel</button>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default AddArticle;