import React, { useEffect, useState } from "react";
import { AreaInput, InputBar } from "../../../Tools/Input/Input";
import "./AddVideo.css";
import { ImFolderUpload } from 'react-icons/im';
import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';

function AddVideo(props) {

    const [subHeadingCount1, setSubHeadingCount1] = useState(1);
    const [subHeadingCount2, setSubHeadingCount2] = useState(1);
    const [subHeadingCount3, setSubHeadingCount3] = useState(1);
    const [subHeadingCount4, setSubHeadingCount4] = useState(1);
    const [sections, setSections] = useState([
        { id: 1, value: '' }
    ]);
    const [sections2, setSections2] = useState([
        { id: 1, value: '' }
    ]);
    const [sections3, setSections3] = useState([
        { id: 1, value: '' }
    ]);
    const [sections4, setSections4] = useState([
        { id: 1, value: '' }
    ]);

    const [courseVideoCategory, setVideoCategory] = useState("");
    const [courseVideoTitle, setVideoTitle] = useState("");
    const [courseVideoDuration, setVideoDuration] = useState("");
    const [courseVideoPreview, setVideoPreview] = useState([]);
    const [courseVideo, setCourseVideo] = useState([]);
    const [courseVideoThumbnail, setVideoThumbnail] = useState([])
    const [courseVideoWhatYouWillGet, setCourseVideoWhatYouWillGet] = useState(['']);
    const [courseVideoRequirements, setVideoRequirements] = useState([]);
    const [courseVideoWhoIsThisFor, setCourseVideoWhoIsThisFor] = useState([]);
    const [courseVideoDescription, setCourseVideoDescription] = useState("");
    const [courseVideoAboutThisCourse, setCourseVideoAboutThisCourse] = useState([]);
    const [courseVideoInstructorName, setCourseVideoInstructorName] = useState("")
    const [courseVideoInstructorImage, setCourseVideoInstructorImage] = useState([]);

    function handleVideoThumbnail(event) {
        const video = Array.from(event.target.files);
        setVideoPreview(video);
    }

    function handleFullVideo(event) {
        const video = Array.from(event.target.files);
        setCourseVideo(video);
    }

    function handleInstructorImage(event) {
        const image = Array.from(event.target.files);
        setCourseVideoInstructorImage(image)
    }

    const handleSectionInput = (event, sectionId) => {
        const updatedSections = sections.map(section =>
            section.id === sectionId ? { ...section, value: event.target.value } : section
        );
        setSections(updatedSections);
    };

    const handleRemoveSection = (sectionId) => {
        if (sections.length > 1) {
            const updatedSections = sections.filter(section => section.id !== sectionId);
            setSections(updatedSections);
        }
    };

    const handleAddSection = () => {
        const newSectionId = subHeadingCount1 + 1;
        setSubHeadingCount1(newSectionId);

        const newSection = { id: newSectionId, value: '' };
        setSections([...sections, newSection]);
    };


    function handleSubmit() {

        const WhatYouWillGet = sections.map((item) => item.value);
        const Requirements = sections2.map((item) => item.value);
        const WhoIsThisFor = sections3.map((item) => item.value);
        const AboutThisCourse = sections4.map((item) => item.value);

        const sendData = {
            courseVideoLevel: 'Level1',
            courseVideoCategory: { courseVideoCategory },
            courseVideoTitle: { courseVideoTitle },
            courseVideoDuration: { courseVideoDuration },
            courseVideoPreview: { courseVideoPreview },
            courseVideo: { courseVideo },
            courseVideoWhatYouWillGet: { WhatYouWillGet },
            courseVideoRequirements: { Requirements },
            courseVideoWhoIsThisFor: { WhoIsThisFor },
            courseVideoDescription: { courseVideoDescription },
            courseVideoAboutThisCourse: { AboutThisCourse },
            courseVideoInstructorName: { courseVideoInstructorName },
            courseVideoInstructorImage: { courseVideoInstructorImage }
        }

        console.log(sendData);
    }

    return (
        <div className="addVideo-back" style={props.showAV ? { display: "block" } : { display: "none" }}>
            <div className="addVideo-container">
                <button className="addvideo-close-btn" onClick={() => props.setShowAV(false)}><AiOutlineCloseCircle /></button>
                <div className="addVideo-content">
                    <div className="addvideo-inputarea">
                        <label>Category</label>
                        <InputBar
                            type="text"
                            name="courseVideoCategory"
                            value={courseVideoCategory}
                            handleInput={(event) => setVideoCategory(event.target.value)}
                        />
                    </div>
                    <div className="addvideo-inputarea">
                        <label>Title</label>
                        <InputBar
                            type="text"
                            name="courseVideoTitle"
                            value={courseVideoTitle}
                            handleInput={(event) => setVideoTitle(event.target.value)}
                        />
                    </div>
                    <div className="addvideo-inputarea">
                        <label>Duration</label>
                        <InputBar
                            type="text"
                            name="courseVideoDuration"
                            value={courseVideoDuration}
                            handleInput={(event) => setVideoDuration(event.target.value)}
                        />
                    </div>
                    <div className="thumbnail-section">
                        <label>Preview and Thumbnail Video</label>
                        <div className="video-input">
                            <div className="video-left">
                                <div className="left-title">Upload Thumbnail Video</div>
                                <div className="video-border">
                                    <label>
                                        <input
                                            type="file"
                                            className="custom-input"
                                            accept=".mp4,.mpeg,.mpg"
                                            onChange={handleVideoThumbnail}
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
                        <div className="small-text-addvideo"><label >More Details</label></div>
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
                                            onChange={handleFullVideo}
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
                    {/* <div className="addvideo-inputarea addvideo-addother">
                        <label>What You Will Get?</label>
                        {subHeadingSections1.map((sectionIndex) => (
                            <div id={`section${sectionIndex}`} key={sectionIndex}>
                                <div className="remove-section">
                                    {subHeadingSections1.length > 1 && (
                                        <button
                                            onClick={() => {
                                                const updatedSections = subHeadingSections1.filter((item) => item !== sectionIndex);
                                                setSubHeadingSections1(updatedSections);

                                                setTimeout(() => {
                                                    const updatedInputs = courseVideoWhatYouWillGet.filter((_value, index) => index !== sectionIndex);
                                                    setCourseVideoWhatYouWillGet(updatedInputs);
                                                }, 0);
                                            }}
                                        ><AiOutlineClose /></button>
                                    )}
                                </div>
                                <InputBar
                                    type="text"
                                    name={`courseVideoWhatYouWillGet${sectionIndex}`}
                                    value={courseVideoWhatYouWillGet[sectionIndex] || ''}
                                    handleInput={(event) => {
                                        const updatedInputs = [...courseVideoWhatYouWillGet];
                                        updatedInputs[sectionIndex] = event.target.value;
                                        setCourseVideoWhatYouWillGet(updatedInputs);
                                    }}
                                />
                            </div>
                        ))}
                        <div >
                            <div>
                                {subHeadingSections1.length < 3 && (
                                    <button className="addvideo-addotherBtn" onClick={() => {
                                        const newSectionIndex = subHeadingCount1 + 1;
                                        setSubHeadingCount1(newSectionIndex);
                                        setSubHeadingSections1([...subHeadingSections1, newSectionIndex]);
                                        setCourseVideoWhatYouWillGet([...courseVideoWhatYouWillGet, ''])
                                    }}>Add Other</button>
                                )}

                            </div>
                        </div>
                    </div> */}


                    <div className="addvideo-inputarea addvideo-addother">
                        <label>What You Will Get?</label>
                        {sections.map((section) => (
                            <div id={`section${section.id}`} key={section.id}>
                                <div className="remove-section">
                                    {sections.length > 1 && (
                                        <button onClick={() => handleRemoveSection(section.id)}>
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <InputBar
                                    type="text"
                                    name={`courseVideoWhatYouWillGet${section.id}`}
                                    value={section.value}
                                    handleInput={(event) => handleSectionInput(event, section.id)}
                                />
                            </div>
                        ))}
                        <div>
                            <div>
                                {sections.length < 3 && (
                                    <button className="addvideo-addotherBtn" onClick={handleAddSection}>
                                        Add Other
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="addvideo-inputarea addvideo-addother">
                        <label>Requirements</label>
                        {sections2.map((section) => (
                            <div id={`section${section.id}`} key={section.id}>
                                <div className="remove-section">
                                    {sections2.length > 1 && (
                                        <button
                                            onClick={() => {
                                                if (sections2.length > 1) {
                                                    const updatedSections = sections2.filter(sec => sec.id !== section.id);
                                                    setSections2(updatedSections);
                                                }
                                            }}
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <InputBar
                                    type="text"
                                    name={`courseVideoWhatYouWillGet${section.id}`}
                                    value={section.value}
                                    handleInput={(event) => {
                                        const updatedSections = sections2.map(sec =>
                                            sec.id === section.id ? { ...sec, value: event.target.value } : sec
                                        );
                                        setSections2(updatedSections);
                                    }}
                                />
                            </div>
                        ))}
                        <div>
                            <div>
                                {sections2.length < 3 && (
                                    <button className="addvideo-addotherBtn" onClick={() => {
                                        const newSectionId = subHeadingCount2 + 1;
                                        setSubHeadingCount2(newSectionId);

                                        const newSection = { id: newSectionId, value: '' };
                                        setSections2([...sections2, newSection]);
                                    }}
                                    >
                                        Add Other
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="addvideo-inputarea addvideo-addother">
                        <label>Who Is This For?</label>
                        {sections3.map((section) => (
                            <div id={`section${section.id}`} key={section.id}>
                                <div className="remove-section">
                                    {sections3.length > 1 && (
                                        <button
                                            onClick={() => {
                                                if (sections3.length > 1) {
                                                    const updatedSections = sections3.filter(sec => sec.id !== section.id);
                                                    setSections3(updatedSections);
                                                }
                                            }}
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <InputBar
                                    type="text"
                                    name={`courseVideoWhatYouWillGet${section.id}`}
                                    value={section.value}
                                    handleInput={(event) => {
                                        const updatedSections = sections3.map(sec =>
                                            sec.id === section.id ? { ...sec, value: event.target.value } : sec
                                        );
                                        setSections3(updatedSections);
                                    }}
                                />
                            </div>
                        ))}
                        <div>
                            <div>
                                {sections3.length < 3 && (
                                    <button className="addvideo-addotherBtn" onClick={() => {
                                        const newSectionId = subHeadingCount3 + 1;
                                        setSubHeadingCount3(newSectionId);

                                        const newSection = { id: newSectionId, value: '' };
                                        setSections3([...sections3, newSection]);
                                    }}
                                    >
                                        Add Other
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="addvideo-descriptionBox">
                        <label>Description</label>
                        <AreaInput
                            name="courseVideoDescription"
                            value={courseVideoDescription}
                            handleInput={(event) => setCourseVideoDescription(event.target.value)}
                        />
                    </div>
                    <div className="full-line"></div>


                    <div className="addvideo-inputarea addvideo-addother">
                        <label>About This Course</label>
                        {sections4.map((section) => (
                            <div id={`section${section.id}`} key={section.id}>
                                <div className="remove-section">
                                    {sections4.length > 1 && (
                                        <button
                                            onClick={() => {
                                                if (sections4.length > 1) {
                                                    const updatedSections = sections4.filter(sec => sec.id !== section.id);
                                                    setSections4(updatedSections);
                                                }
                                            }}
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <InputBar
                                    type="text"
                                    name={`courseVideoWhatYouWillGet${section.id}`}
                                    value={section.value}
                                    handleInput={(event) => {
                                        const updatedSections = sections4.map(sec =>
                                            sec.id === section.id ? { ...sec, value: event.target.value } : sec
                                        );
                                        setSections4(updatedSections);
                                    }}
                                />
                            </div>
                        ))}
                        <div>
                            <div>
                                {sections4.length < 3 && (
                                    <button className="addvideo-addotherBtn" onClick={() => {
                                        const newSectionId = subHeadingCount4 + 1;
                                        setSubHeadingCount4(newSectionId);

                                        const newSection = { id: newSectionId, value: '' };
                                        setSections4([...sections4, newSection]);
                                    }}
                                    >
                                        Add Other
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="full-line"></div>
                    <div className="addvideo-inputarea">
                        <label>Instructor Name</label>
                        <InputBar
                            type="text"
                            name="courseVideoInstructorName"
                            value={courseVideoInstructorName}
                            handleInput={(event) => setCourseVideoInstructorName(event.target.value)}
                        />
                    </div>
                    <div className="video-input">
                        <div className="video-left">
                            <div className="left-title">Upload Instructor Image</div>
                            <div className="video-border">
                                <label>
                                    <input
                                        type="file"
                                        className="custom-input"
                                        accept=".jpg,.jpeg"
                                        onChange={handleInstructorImage}
                                    />
                                </label>
                                <ImFolderUpload />
                                <span className="input-text">Drag & drop files here</span>
                                <span className="input-text">File Supported: jpg, jpeg.</span>
                                <span className="input-btn">Browse Files</span>
                                <span className="input-text">Maximum size: 500mb</span>
                            </div>
                        </div>
                        <div className="input-right">

                        </div>
                    </div>
                    <div className="addvideo-buttons">
                        <button className="addvideo-saveBtn" onClick={handleSubmit}>Save</button>
                        <button className="addvideo-cancelBtn">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddVideo;