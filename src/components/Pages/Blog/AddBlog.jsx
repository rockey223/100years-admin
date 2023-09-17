import React, { useEffect, useRef, useState } from "react";
import { AreaInput, InputBar } from "../../Tools/Input/Input";
import "./AddBlog.css";
import { ImFolderUpload } from 'react-icons/im';
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";

function AddBlog(props) {

    const fileInputRef = useRef(null);
    const imageInputRef = useRef(null);

    const categories = ["Meditation", "Mental Health"];

    function closeAddBlog() {
        props.setAdd(false)
    }

    return (
        <div className="addblog-background" style={props.addPop ? { display: "block" } : { display: "none" }}>
            <button className="close-btn" onClick={() => closeAddBlog()}><IoCloseSharp /></button>
            <div className="addblog-container">
                {/* <button className="close-btn" onClick={() => closeAddBlog()}><AiOutlineCloseCircle /></button> */}
                <div className="addblog-content">
                    <div className="blog-heading-section">
                        <label>Category</label>
                        <select

                        >
                            <option value="">Select a category</option>
                            {categories.map((category) => {
                                return (
                                    <>
                                        <option key={category._id} value={category}>{category}</option>
                                    </>
                                );
                            })}
                        </select>

                        <label>Blog Title</label>
                        <InputBar
                            type={"text"}
                            placeholder={"example: Social and Mental Health"}
                            height="20px"
                            width="638px"
                        // value={heading}
                        // handleInput={(event) => setHeading(event.target.value)}
                        />
                        <label>Upload Thumbnail & Content</label>
                    </div>

                    <div className="file-input">

                        <div className="input-left">
                            <div className="left-title">Upload Thumbnail Image</div>
                            <div className="input-border">
                                <label>
                                    <input
                                        type="file"
                                        className="custom-input"
                                        accept=".jpg, .jpeg"
                                        ref={imageInputRef}
                                    // onChange={handleBlogFile}
                                    />
                                </label>
                                <ImFolderUpload />
                                <span className="input-text">Drag & drop files here</span>
                                <span className="input-text-small">File Supported: jpg, jpeg, etc.</span>
                                <span className="input-btn" onClick={() => { imageInputRef.current.click(); }}>Browse Files</span>
                                <span className="input-text-bottom">Maximum size: 250mb</span>
                            </div>
                        </div>

                        <div className="blog-input-right">
                            <div className="left-title">Upload Blog</div>
                            <div className="input-border">
                                <label>
                                    <input
                                        type="file"
                                        className="custom-input"
                                        accept=".pdf"
                                        ref={fileInputRef}
                                    // onChange={handleBlogFile}
                                    />
                                </label>
                                <ImFolderUpload />
                                <span className="input-text">Drag & drop files here</span>
                                <span className="input-text-small">File Supported: .pdf</span>
                                <span className="input-btn" onClick={() => { fileInputRef.current.click(); }}>Browse Files</span>
                                <span className="input-text-bottom">Maximum size: 250mb</span>
                            </div>
                        </div>
                    </div>

                    <div className="addblog-buttons">
                        <button className="save-button">Save</button>
                        <button className="cancel-button" onClick={closeAddBlog}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBlog;