import React, { useState } from "react";
import { AreaInput, InputBar } from "../../../Tools/Input/Input";
import "./AddVideo.css";
import { ImFolderUpload } from 'react-icons/im';
import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';

function AddVideo(props) {

    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(1);
    const [count4, setCount4] = useState(1);

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
                        {Array.from({ length: count1 }).map((_) => (
                            <>
                                <div className="remove-section">
                                    {count1 > 1 && (
                                        <button onClick={() => { if (count1 > 1) { setCount1(prev => prev - 1) } }}><AiOutlineClose /></button>
                                    )}
                                </div>
                                <InputBar
                                    type="text"
                                />
                            </>
                        ))}
                        <div >
                            <div>
                                <button className="addvideo-addotherBtn" onClick={() => {
                                    if (count1 < 3) {
                                        setCount1(prev => prev + 1)
                                    }
                                }}>Add Other</button>
                            </div>
                        </div>
                    </div>
                    <div className="addvideo-inputarea addvideo-addother">
                        <label>What You Will Get?</label>
                        {Array.from({ length: count2 }).map((_) => (
                            <>
                                <div className="remove-section">
                                    {count2 > 1 && (
                                        <button onClick={() => { if (count2 > 1) { setCount2(prev => prev - 1) } }}><AiOutlineClose /></button>
                                    )}
                                </div>
                                <InputBar
                                    type="text"
                                />
                            </>
                        ))}
                        <div >
                            <div>
                                <button className="addvideo-addotherBtn" onClick={() => {
                                    if (count2 < 1) {
                                        setCount2(prev => prev + 1)
                                    }
                                }}>Add Other</button>
                            </div>
                        </div>
                    </div>
                    <div className="addvideo-inputarea addvideo-addother">
                        <label>What You Will Get?</label>
                        {Array.from({ length: count3 }).map((_) => (
                            <>
                                <div className="remove-section">
                                    {count3 > 1 && (
                                        <button onClick={() => { if (count3 > 1) { setCount3(prev => prev - 1) } }}><AiOutlineClose /></button>
                                    )}
                                </div>
                                <InputBar
                                    type="text"
                                />
                            </>
                        ))}
                        <div >
                            <div>
                                <button className="addvideo-addotherBtn" onClick={() => {
                                    if (count3 < 3) {
                                        setCount3(prev => prev + 1)
                                    }
                                }}>Add Other</button>
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
                        <label>About this Course?</label>
                        {Array.from({ length: count4 }).map((_) => (
                            <>
                                <div className="remove-section">
                                    {count4 > 1 && (
                                        <button onClick={() => { if (count4 > 1) { setCount4(prev => prev - 1) } }}><AiOutlineClose /></button>
                                    )}
                                </div>
                                <InputBar
                                    type="text"
                                />
                            </>
                        ))}
                        <div>
                            <button className="addvideo-addotherBtn" onClick={() => {
                                if (count4 < 3) {
                                    setCount4(prev => prev + 1)
                                }
                            }}>Add Other</button>
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