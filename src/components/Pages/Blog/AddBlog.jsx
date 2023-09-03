import React, { useState } from "react";
import { AreaInput, InputBar } from "../../Tools/Input/Input";
import "./AddBlog.css";

import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import { ImFolderUpload } from 'react-icons/im';

function AddBlog(props) {

    const [subHeadingCount, setSubHeadingCount] = useState(1);
    const [subHeadingSections, setSubHeadingSections] = useState([1]);

    const [heading , setHeading] = useState("");
    const [description , setDescription] = useState("");

    function AddSubHeadingCount() {
        setSubHeadingCount(subHeadingCount + 1);
        setSubHeadingSections([...subHeadingSections, subHeadingCount + 1]);
    }

    function DelSubHeadingCount(index) {
        const updatedSections = subHeadingSections.filter((item, i) => item !== index);
        setSubHeadingSections(updatedSections);
        console.log(index);
        console.log(subHeadingSections);
    }

    function handleInput(event){
        
    }

    return (
        <div className="addblog-background" style={props.addPop ? { display: "block" } : { display: "none" }}>
            <div className="addblog-container">
                <button className="close-btn" onClick={() => props.setAdd(false)}><AiOutlineCloseCircle /></button>
                <div className="addblog-content">
                    <div className="blog-heading-section">
                        <label>Heading</label>
                        <InputBar
                            type={"text"}
                            // placeholder={"example: Meditation"}
                            height="25px"
                            width="638px"
                            handleInput= {handleInput}
                        />
                        <label>Description</label>
                        <AreaInput
                            height="187px"
                            width="545px"
                        />
                    </div>                 {/* {Array.from({ length: subHeadingCount }).map((_, index) => ( */}
                    {subHeadingSections.map((sectionIndex) => (
                        <div className="blog-subheading-section" id={`section${sectionIndex}`} key={sectionIndex}>

                            <div className="subheading-label">
                                <label>Sub-Heading</label>
                                {subHeadingSections.length > 1 && (
                                    <button onClick={() => DelSubHeadingCount(sectionIndex)}><AiOutlineClose /></button>
                                )}
                            </div>
                            <InputBar
                                type={"text"}
                                height="25px"
                                width="638px"
                            />
                            <label>Sub-Heading Description</label>
                            <AreaInput
                                height="187px"
                                width="545px"
                            />
                        </div>
                    ))}
                    <div className="subheading-add">
                        {subHeadingSections.length < 3 && (
                            <button onClick={AddSubHeadingCount}>Add Other</button>
                        )}
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
                    <div className="addblog-buttons">
                        <button className="save-button">Save</button>
                        <button className="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBlog;