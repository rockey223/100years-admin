import React, { useState } from "react";
import { AreaInput, InputBar } from "../../../Tools/Input/Input";
import "./AddVideo.css";
import { ImFolderUpload } from 'react-icons/im';
import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';

function AddVideo(props) {

    const [subHeadingCount1, setSubHeadingCount1] = useState(1);
    const [subHeadingSections1, setSubHeadingSections1] = useState([1]);
    const [subHeadingCount2, setSubHeadingCount2] = useState(1);
    const [subHeadingSections2, setSubHeadingSections2] = useState([1]);
    const [subHeadingCount3, setSubHeadingCount3] = useState(1);
    const [subHeadingSections3, setSubHeadingSections3] = useState([1]);
    const [subHeadingCount4, setSubHeadingCount4] = useState(1);
    const [subHeadingSections4, setSubHeadingSections4] = useState([1]);



    return (
        <div className="addVideo-back" style={props.showAV ? { display: "block" } : { display: "none" }}>
            <div className="addVideo-container">
                <button className="close-btn" onClick={() => props.setShowAV(false)}><AiOutlineCloseCircle /></button>
                <div className="addVideo-content">
                    <div className="addvideo-inputarea">
                        <label>Category</label>
                        <InputBar
                            type="text"
                        />
                    </div>
                    <div className="addvideo-inputarea">
                        <label>Title</label>
                        <InputBar
                            type="text"
                        />
                    </div>
                    <div className="addvideo-inputarea">
                        <label>Duration</label>
                        <InputBar
                            type="text"
                        />
                    </div>
                    <div className="thumbnail-section">
                        <label>Preview and Thumbnail Video</label>
                        <div className="video-input">
                            <div className="video-left">
                                <div className="left-title">Upload Video</div>
                                <div className="video-border">
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
                    </div>
                    <div className="full-line"></div>
                    <div className="add-video-section">
                        <div><label className="small-text-addvideo">More Details</label></div>
                        <div className="addvideo-midtext"><label>Add Full Video</label></div>
                        <div className="video-input">
                            <div className="video-left">
                                <div className="left-title">Upload Video</div>
                                <div className="video-border">
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
                    </div>
                    <div className="addvideo-inputarea addvideo-addother">
                        <label>What You Will Get?</label>
                        {subHeadingSections1.map((sectionIndex) => (
                            <div id={`section${sectionIndex}`} key={sectionIndex}>
                                <div className="remove-section">
                                    {subHeadingSections1.length > 1 && (
                                        <button onClick={() => {
                                            const updatedSections = subHeadingSections1.filter((item) => item !== sectionIndex);
                                            setSubHeadingSections1(updatedSections);
                                        }}><AiOutlineClose /></button>
                                    )}
                                </div>
                                <InputBar
                                    type="text"
                                />
                            </div>
                        ))}
                        <div >
                            <div>
                                {subHeadingSections1.length < 3 && (
                                    <button className="addvideo-addotherBtn" onClick={() => {
                                        setSubHeadingCount1(subHeadingCount1 + 1);
                                        setSubHeadingSections1([...subHeadingSections1, subHeadingCount1 + 1]);
                                    }}>Add Other</button>
                                )}

                            </div>
                        </div>
                    </div>

                    <div className="addvideo-inputarea addvideo-addother">
                        <label>Requirements</label>
                        {subHeadingSections2.map((sectionIndex) => (
                            <div id={`section${sectionIndex}`} key={sectionIndex}>
                                <div className="remove-section">
                                    {subHeadingSections2.length > 1 && (
                                        <button onClick={() => {
                                            const updatedSections = subHeadingSections2.filter((item) => item !== sectionIndex);
                                            setSubHeadingSections2(updatedSections);
                                        }}><AiOutlineClose /></button>
                                    )}
                                </div>
                                <InputBar
                                    type="text"
                                />
                            </div>
                        ))}
                        <div >
                            <div>
                                {subHeadingSections2.length < 3 && (
                                    <button className="addvideo-addotherBtn" onClick={() => {
                                        setSubHeadingCount2(subHeadingCount2 + 1);
                                        setSubHeadingSections2([...subHeadingSections2, subHeadingCount2 + 1]);
                                    }}>Add Other</button>
                                )}

                            </div>
                        </div>
                    </div>

                    <div className="addvideo-inputarea addvideo-addother">
                        <label>Who is this for?</label>
                        {subHeadingSections3.map((sectionIndex) => (
                            <div id={`section${sectionIndex}`} key={sectionIndex}>
                                <div className="remove-section">
                                    {subHeadingSections3.length > 1 && (
                                        <button onClick={() => {
                                            const updatedSections = subHeadingSections3.filter((item) => item !== sectionIndex);
                                            setSubHeadingSections3(updatedSections);
                                        }}><AiOutlineClose /></button>
                                    )}
                                </div>
                                <InputBar
                                    type="text"
                                />
                            </div>
                        ))}
                        <div >
                            <div>
                                {subHeadingSections3.length < 3 && (
                                    <button className="addvideo-addotherBtn" onClick={() => {
                                        setSubHeadingCount3(subHeadingCount3 + 1);
                                        setSubHeadingSections3([...subHeadingSections3, subHeadingCount3 + 1]);
                                    }}>Add Other</button>
                                )}

                            </div>
                        </div>
                    </div>
                    <div className="addvideo-descriptionBox">
                        <label>Description</label>
                        <AreaInput

                        />
                    </div>
                    <div className="full-line"></div>
                    <div className="addvideo-inputarea addvideo-addother">
                        <label>About this Course</label>
                        {subHeadingSections4.map((sectionIndex) => (
                            <div id={`section${sectionIndex}`} key={sectionIndex}>
                                <div className="remove-section">
                                    {subHeadingSections4.length > 1 && (
                                        <button onClick={() => {
                                            const updatedSections = subHeadingSections4.filter((item) => item !== sectionIndex);
                                            setSubHeadingSections4(updatedSections);
                                        }}><AiOutlineClose /></button>
                                    )}
                                </div>
                                <InputBar
                                    type="text"
                                />
                            </div>
                        ))}
                        <div >
                            <div>
                                {subHeadingSections4.length < 3 && (
                                    <button className="addvideo-addotherBtn" onClick={() => {
                                        setSubHeadingCount4(subHeadingCount3 + 1);
                                        setSubHeadingSections4([...subHeadingSections4, subHeadingCount4 + 1]);
                                    }}>Add Other</button>
                                )}

                            </div>
                        </div>
                    </div>
                    <div className="full-line"></div>
                    <div className="addvideo-inputarea">
                        <label>Instructor Name</label>
                        <InputBar
                            type="text"
                        />
                    </div>
                    <div className="video-input">
                        <div className="video-left">
                            <div className="left-title">Upload Video</div>
                            <div className="video-border">
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
                    <div className="addvideo-buttons">
                        <button className="addvideo-saveBtn">Save</button>
                        <button className="addvideo-cancelBtn">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddVideo;