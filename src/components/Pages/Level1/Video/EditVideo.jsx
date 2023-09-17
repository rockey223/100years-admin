import React, { useDebugValue, useEffect, useState } from "react";
import { AreaInput, InputBar } from "../../../Tools/Input/Input";
import "./AddVideo.css";
import { ImFolderUpload } from 'react-icons/im';
import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function EditVideo(props) {

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
    const [courseVideoData, setCourseVideoData] = useState([]);
    const [courseVideoCategory, setVideoCategory] = useState("");
    const [courseVideoTitle, setVideoTitle] = useState("");
    const [courseVideoDuration, setVideoDuration] = useState("");
    const [courseVideoPreview, setVideoPreview] = useState([]);
    const [courseVideo, setCourseVideo] = useState([]);
    const [courseVideoThumbnail, setVideoThumbnail] = useState([])
    const [courseVideoDescription, setCourseVideoDescription] = useState("");
    const [courseVideoInstructorName, setCourseVideoInstructorName] = useState("")
    const [courseVideoInstructorImage, setCourseVideoInstructorImage] = useState([]);
    const [videoName, setVideoName] = useState("");
    const [thumbnailName, setThumbnailName] = useState("");
    const [previewName, setPreviewName] = useState("");
    const [instructorImageName, setInstructorImageName] = useState("");

    const API = `${process.env.REACT_APP_API}/api`;

    useEffect(() => {
        if (props.editId) {

            setSubHeadingCount1(1);
            setSubHeadingCount2(1);
            setSubHeadingCount3(1);
            setSubHeadingCount4(1);

            setSections([{ id: 1, value: '' }]);
            setSections2([{ id: 1, value: '' }]);
            setSections3([{ id: 1, value: '' }]);
            setSections4([{ id: 1, value: '' }]);

            setCourseVideoData([]);
            setVideoCategory("");
            setVideoTitle("");
            setVideoDuration("");
            setVideoPreview([]);
            setCourseVideo([]);
            setVideoThumbnail([]);
            setCourseVideoDescription("");
            setCourseVideoInstructorName("");
            setCourseVideoInstructorImage([]);
            setVideoName("");
            setThumbnailName("");
            setPreviewName("");
            setInstructorImageName("");

            axios
                .get(`${API}/getOneCourseVideo/${props.editId}`, { withCredentials: true })
                // .get(`http://localhost:4000/api/getOneCourseVideo/${props.editId}`, {withCredentials: true})
                .then(res => {
                    setCourseVideoData(res.data.data);
                    setVideoCategory(res.data.data.courseVideoCategory);
                    setVideoTitle(res.data.data.courseVideoTitle);
                    setVideoDuration(res.data.data.courseVideoDuration);
                    setVideoPreview(res.data.data.courseVideoPreview);
                    setCourseVideo(res.data.data.courseVideo);
                    setVideoThumbnail(res.data.data.courseVideoThumbnail);
                    setCourseVideoDescription(res.data.data.courseVideoDescription);
                    setCourseVideoInstructorName(res.data.data.courseVideoInstructorName);
                    setCourseVideoInstructorImage(res.data.data.courseVideoInstructorImage);
                    setPreviewName(res.data.data.courseVideoPreview.substring(0, 17));
                    setThumbnailName(res.data.data.courseVideoThumbnail.substring(0, 17));
                    setVideoName(res.data.data.courseVideo.substring(0, 17));
                    setInstructorImageName(res.data.data.courseVideoInstructorImage.substring(0, 17))

                    const whatData = res.data.data.courseVideoWhatYouWillGet;
                    const newSection = whatData.map((item) => {
                        const newSectionId = subHeadingCount1 + 1;
                        setSubHeadingCount1(newSectionId);
                        return { id: newSectionId, value: item };
                    })
                    setSections(newSection);

                    const ReqData = res.data.data.courseVideoRequirements;
                    const newSection2 = ReqData.map((item) => {
                        const newSectionId = subHeadingCount2 + 1;
                        setSubHeadingCount2(newSectionId);
                        return { id: newSectionId, value: item };
                    })
                    setSections2(newSection2);

                    const whoData = res.data.data.courseVideoWhoIsThisFor;
                    const newSection3 = whoData.map((item) => {
                        const newSectionId = subHeadingCount3 + 1;
                        setSubHeadingCount3(newSectionId);
                        return { id: newSectionId, value: item };
                    })
                    setSections3(newSection3);

                    const aboutData = res.data.data.courseVideoAboutThisCourse;
                    const newSection4 = aboutData.map((item) => {
                        const newSectionId = subHeadingCount4 + 1;
                        setSubHeadingCount4(newSectionId);
                        return { id: newSectionId, value: item };
                    })
                    setSections4(newSection4);

                })
                .catch(err => console.log(err));
        }
    }, [props.showAV])

    function handleVideoPreview(event) {
        const video = Array.from(event.target.files);
        setVideoPreview(video);
        setPreviewName(video[0].name.substring(0, 17));
    }

    function handleVideoThumbnail(event) {
        const image = Array.from(event.target.files);
        setVideoThumbnail(image);
        setThumbnailName(image[0].name.substring(0, 17));
    }

    function handleFullVideo(event) {
        const video = Array.from(event.target.files);
        setCourseVideo(video);
        setVideoName(video[0].name.substring(0, 17));
    }

    function handleInstructorImage(event) {
        const image = Array.from(event.target.files);
        setCourseVideoInstructorImage(image)
        setInstructorImageName(image[0].name.substring(0, 17));
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
            courseVideoLevel: 'level1',
            courseVideoCategory,
            courseVideoTitle,
            courseVideoDuration,
            courseVideoPreview,
            courseVideo,
            courseVideoThumbnail,
            WhatYouWillGet,
            Requirements,
            WhoIsThisFor,
            courseVideoDescription,
            AboutThisCourse,
            courseVideoInstructorName,
            courseVideoInstructorImage
        }

        // console.log(sendData);

        if (!courseVideoCategory || !courseVideoTitle || !courseVideoDuration || courseVideoPreview.length === 0 || courseVideo.length === 0 || courseVideoThumbnail.length === 0 || !courseVideoDescription || courseVideoInstructorImage.length === 0 || !courseVideoInstructorName) {
            toast.error("Please fill in all required fields! *");
            return;
        }

        axios
            .patch(
                `http://localhost:4000/api/updateCourseVideo/${props.editId}`,
                {
                    courseVideoLevel: sendData.courseVideoLevel,
                    courseVideoCategory: sendData.courseVideoCategory,
                    courseVideoTitle: sendData.courseVideoTitle,
                    courseVideoDuration: sendData.courseVideoDuration,
                    ...(courseVideoPreview !== courseVideoData.courseVideoPreview ?
                        { courseVideoPreview: sendData.courseVideoPreview[0] }
                        : {}
                    ),
                    ...(courseVideoThumbnail !== courseVideoData.courseVideoThumbnail ?
                        { courseVideoThumbnail: sendData.courseVideoThumbnail[0] }
                        : {}
                    ),
                    ...(courseVideo !== courseVideoData.courseVideo ?
                        { courseVideoThumbnail: sendData.courseVideoThumbnail[0] }
                        : {}
                    ),
                    ...(courseVideo !== courseVideoData.courseVideo ?
                        { courseVideo: sendData.courseVideo[0] }
                        : {}
                    ),
                    ...(courseVideoInstructorImage !== courseVideoData.courseVideoInstructorImage ?
                        { courseVideoInstructorImage: sendData.courseVideoInstructorImage[0] }
                        : {}
                    ),

                    courseVideoWhatYouWillGet: sendData.WhatYouWillGet,
                    courseVideoRequirements: sendData.Requirements,
                    courseVideoWhoIsThisFor: sendData.WhoIsThisFor,
                    courseVideoDescription: sendData.courseVideoDescription,
                    courseVideoAboutThisCourse: sendData.AboutThisCourse,
                    courseVideoInstructorName: sendData.courseVideoInstructorName,

                },
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    withCredentials: true
                }
            )
            .then(res => {
                // console.log(res);
                toast.success("Course Video Updated");
                CloseEditVideo();
            })
            .catch(err => {
                console.log(err);
            });
    }

    function CloseEditVideo() {
        setSubHeadingCount1(1);
        setSubHeadingCount2(1);
        setSubHeadingCount3(1);
        setSubHeadingCount4(1);

        setSections([{ id: 1, value: '' }]);
        setSections2([{ id: 1, value: '' }]);
        setSections3([{ id: 1, value: '' }]);
        setSections4([{ id: 1, value: '' }]);

        setCourseVideoData([]);
        setVideoCategory("");
        setVideoTitle("");
        setVideoDuration("");
        setVideoPreview([]);
        setCourseVideo([]);
        setVideoThumbnail([]);
        setCourseVideoDescription("");
        setCourseVideoInstructorName("");
        setCourseVideoInstructorImage([]);
        setVideoName("");
        setThumbnailName("");
        setPreviewName("");
        setInstructorImageName("");

        props.setRefresh(prev => !prev);
        props.setShowAV(false);
    }

    return (
        <div className="addVideo-back" style={props.showAV ? { display: "block" } : { display: "none" }}>
            <ToastContainer />
            <div className="addVideo-container">
                <button className="addvideo-close-btn" onClick={CloseEditVideo}><AiOutlineCloseCircle /></button>
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
                                            onChange={handleVideoPreview}
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
                                {courseVideoPreview.length > 0 ? (
                                    <>
                                        <div>File Name: {previewName} {instructorImageName.length > 17 ? (<span>...</span>) : (null)}</div>
                                        <button onClick={() => {
                                            setPreviewName("");
                                            setVideoPreview([]);
                                        }}>Remove</button>
                                    </>
                                ) : (
                                    <div className="NotUploaded">Upload a File</div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="thumbnail-section">
                        <label>Thumbnail Image</label>
                        <div className="video-input">
                            <div className="video-left">
                                <div className="left-title">Upload Thumbnail Image</div>
                                <div className="video-border">
                                    <label>
                                        <input
                                            type="file"
                                            className="custom-input"
                                            accept=".jpg,.jpeg"
                                            onChange={handleVideoThumbnail}
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
                                {courseVideoThumbnail.length > 0 ? (
                                    <>
                                        <div>File Name: {thumbnailName} {instructorImageName.length > 17 ? (<span>...</span>) : (null)}</div>
                                        <button onClick={() => {
                                            setThumbnailName("");
                                            setVideoThumbnail([]);
                                        }}>Remove</button>
                                    </>
                                ) : (
                                    <div className="NotUploaded">Upload a File</div>
                                )}
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
                                {courseVideo.length > 0 ? (
                                    <>
                                        <div>File Name: {videoName} {instructorImageName.length > 17 ? (<span>...</span>) : (null)}</div>
                                        <button onClick={() => {
                                            setVideoName("");
                                            setCourseVideo([]);
                                        }}>Remove</button>
                                    </>
                                ) : (
                                    <div className="NotUploaded">Upload a File</div>
                                )}
                            </div>
                        </div>
                    </div>

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
                            {courseVideoInstructorImage.length > 0 ? (
                                <>
                                    <div>File Name: {instructorImageName} {instructorImageName.length > 17 ? (<span>...</span>) : (null)}</div>
                                    <button onClick={() => {
                                        setInstructorImageName("");
                                        setCourseVideoInstructorImage([]);
                                    }}>Remove</button>
                                </>
                            ) : (
                                <div className="NotUploaded">Upload a File</div>
                            )}
                        </div>
                    </div>
                    <div className="addvideo-buttons">
                        <button className="addvideo-saveBtn" onClick={handleSubmit}>Save</button>
                        <button className="addvideo-cancelBtn" onClick={
                            CloseEditVideo
                        }>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditVideo;