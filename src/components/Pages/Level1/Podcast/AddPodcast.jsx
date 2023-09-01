import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./AddPodcast.css";
import { InputBar } from "../../../Tools/Input/Input";
import { ImFolderUpload } from "react-icons/im";

function AddPodcast(props) {

    const [coursePodcastHeader, setCoursePodcastHeader] = useState("");
    const [coursePodcastAbout, setCoursePodcastAbout] = useState("");
    const [coursePodcastDuration, setCoursePodcastDuration] = useState("");
    const [coursePodcastVideo, setCoursePodcastVideo] = useState([]);



    return (
        <div className="addPodcast-back" style={props.showAV ? { display: "block" } : { display: "none" }}>
            <div className="addPodcast-container">
                <button className="close-btn" onClick={() => props.setShowAV(false)}><AiOutlineCloseCircle /></button>
                <div className="addPodcast-content">
                    <div className="addPodcast-input">
                        <label>Header</label>
                        <InputBar
                            type="text"
                            name="coursePodcastHeader"
                            value={coursePodcastHeader}
                            handleInput={(event) => setCoursePodcastHeader(event.target.value)}
                        />
                    </div>
                    <div className="addPodcast-input">
                        <label>About</label>
                        <InputBar
                            type="text"
                            name="coursePodcastAbout"
                            value={coursePodcastAbout}
                            handleInput={(event) => setCoursePodcastAbout(event.target.value)}
                        />
                    </div>
                    <div className="addPodcast-input">
                        <label>Duration</label>
                        <InputBar
                            type="text"
                            name="coursePodcastDuration"
                            value={coursePodcastDuration}
                            handleInput={(event) => setCoursePodcastDuration(event.target.value)}
                        />
                    </div>
                    <div className="podcast-input">
                        <div className="podcast-left">
                            <div className="left-title">Upload Video</div>
                            <div className="podcast-border">
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
                    <div className="addpodcast-btns">
                        <button className="addpodcast-saveBtn">Save</button>
                        <button className="addpodcast-cancelBtn">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPodcast;