import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoMdAdd } from "react-icons/io";
import { AreaInput, InputBar } from "../../../Tools/Input/Input";
import { ImFolderUpload } from "react-icons/im";
import { RxCrossCircled } from "react-icons/rx"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useMainContext } from "../../../Useful/MainContext";


function EditVideo() {

    const { videoId1 } = useMainContext();

    const [categoryData, setCategoryData] = useState([]);
    const [category, setCategory] = useState("");
    const [videoTitle, setVideoTitle] = useState("");
    const [videoThumbnail, setVideoThumbnail] = useState([]);
    const [videoThumbnailURL, setVideoThumbnailURL] = useState("");
    const [previewVideo, setPreviewVideo] = useState([]);
    const [previewVideoURL, setPreviewVideoURL] = useState("");
    const [fullVideo, setFullVideo] = useState([]);
    const [fullVideoURL, setFullVideoURL] = useState("");
    const [whatGet, setWhatGet] = useState([{ id: 1, value: "" }])
    const [reqSec, setReqSec] = useState([{ id: 1, value: "" }])
    const [whoFor, setWhoFor] = useState([{ id: 1, value: "" }])
    const [videoDescription, setVideoDescription] = useState("");
    const [aboutCourse, setAboutCourse] = useState([{ id: 1, value: "" }])
    const [instructorName, setInstructorName] = useState("")
    const [instructorImage, setInstructorImage] = useState([]);
    const [instructorImageURL, setInstructorImageURL] = useState("");

    const API = `${process.env.REACT_APP_API}/api`;
    const imageApi = `${process.env.REACT_APP_API}/mediaUploads`;
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${API}/getAllCompanyBlogCategory`, { withCredentials: true })
            .then((res) => setCategoryData(res.data.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (videoId1) {
            axios
                .get(`${API}/getOneCourseVideo/${videoId1}`, { withCredentials: true })
                .then(res => {
                    const videoData = res.data.data;

                    let catId = videoData.courseVideoCategory;
                    const categoryNow = categoryData
                        .filter((item) => item._id === catId)
                        .map((item) => item.companyBlogCategoryName);

                    console.log(categoryData);

                    setCategory(categoryNow);
                    setVideoTitle(videoData.courseVideoTitle);
                    setVideoThumbnail(videoData.courseVideoThumbnail);
                    setVideoThumbnailURL(`${imageApi}/${videoData.courseVideoThumbnail}`)
                    setPreviewVideo(videoData.courseVideoPreview);
                    setPreviewVideoURL(`${imageApi}/${videoData.courseVideoPreview}`)
                    setFullVideo(videoData.courseVideo);
                    setFullVideoURL(`${imageApi}/${videoData.courseVideo}`);
                    setWhatGet(videoData.courseVideoWhatYouWillGet.map((item, index) => ({ id: index + 1, value: item })));
                    setReqSec(videoData.courseVideoRequirements.map((item, index) => ({ id: index + 1, value: item })));
                    setWhoFor(videoData.courseVideoWhoIsThisFor.map((item, index) => ({ id: index + 1, value: item })));
                    setVideoDescription(videoData.courseVideoDescription);
                    setAboutCourse(videoData.courseVideoAboutThisCourse.map((item, index) => ({ id: index + 1, value: item })));
                    setInstructorName(videoData.courseVideoInstructorName);
                    setInstructorImage(videoData.courseVideoInstructorImage);
                    setInstructorImageURL(`${imageApi}/${videoData.courseVideoInstructorImage}`);
                })
                .catch(err => console.log(err));
        }
    }, [videoId1, categoryData])

    function handleWhatGetInputChange(id, value) {
        const updatedInputBars = whatGet.map((inputBar) =>
            inputBar.id === id ? { ...inputBar, value } : inputBar
        );
        setWhatGet(updatedInputBars);
    }

    function handleReqSecInputChange(id, value) {
        const updatedInputBars = reqSec.map((inputBar) =>
            inputBar.id === id ? { ...inputBar, value } : inputBar
        );
        setReqSec(updatedInputBars);
    }

    function handleWhoForInputChange(id, value) {
        const updatedInputBars = whoFor.map((inputBar) =>
            inputBar.id === id ? { ...inputBar, value } : inputBar
        );
        setWhoFor(updatedInputBars);
    }

    function handleAboutCourseInputChange(id, value) {
        const updatedInputBars = aboutCourse.map((inputBar) =>
            inputBar.id === id ? { ...inputBar, value } : inputBar
        );
        setAboutCourse(updatedInputBars);
    }

    function handleThumbnail(event) {
        const image = Array.from(event.target.files);
        setVideoThumbnail(image);

        const url = URL.createObjectURL(image[0]);
        setVideoThumbnailURL(url);
    }

    function handlePreview(event) {
        const video = Array.from(event.target.files);
        setPreviewVideo(video);
        console.log(video)

        const url = URL.createObjectURL(video[0]);
        setPreviewVideoURL(url);
    }


    function handleFullVideo(event) {
        const video = Array.from(event.target.files);
        setFullVideo(video);

        const url = URL.createObjectURL(video[0]);
        setFullVideoURL(url);
    }

    function handleInstructorImage(event) {
        const image = Array.from(event.target.files);
        setInstructorImage(image);

        const url = URL.createObjectURL(image[0]);
        setInstructorImageURL(url);
    }

    function handleSubmit() {

        const what = whatGet.map(item => { return item.value })
        const req = reqSec.map(item => { return item.value })
        const who = whoFor.map(item => { return item.value })
        const about = aboutCourse.map(item => { return item.value })

        if (!category || !videoTitle || !videoDescription || !instructorName || videoThumbnail.length === 0 ||
            previewVideo.length === 0 || fullVideo.length === 0 || !what || !req || !who || !about) {
            toast.error(`Please fill in all required fields`);
            return;
        }

        const categoryId = categoryData
            .filter((item) => item.companyBlogCategoryName === category)
            .map((item) => item._id)
            .join(',');

        axios
            .post(`${API}/postCourseVideo`, {
                courseVideoLevel: 'level1',
                courseVideoCategory: categoryId,
                courseVideoTitle: videoTitle,
                courseVideoPreview: previewVideo[0],
                courseVideoDuration: '20minutes',
                courseVideo: fullVideo[0],
                courseVideoThumbnail: videoThumbnail[0],
                courseVideoWhatYouWillGet: what,
                courseVideoRequirements: req,
                courseVideoWhoIsThisFor: who,
                courseVideoDescription: videoDescription,
                courseVideoAboutThisCourse: about,
                courseVideoInstructorName: instructorName,
                courseVideoInstructorImage: instructorImage[0]
            },
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    withCredentials: true,
                })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    function ClearData() {
        navigate(`/admin/level1`);
    }

    return (
        <div className="add-video-container">
            <div className="title-top">Edit Video Level 1</div>
            {/* <div className="back-button" onClick={ClearData}>
                <IoIosArrowBack /> <span>Back</span>
            </div> */}
            <Link to={'/admin/level1'} ><div className="back-button" onClick={ClearData}>
                <IoIosArrowBack /> <span>Back</span>
            </div></Link>

            <div className="add-video-form">
                <div className="input-area">
                    <label>
                        Category<span style={{ color: "red" }}>*</span>
                    </label>
                    <select
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    >
                        <option>Select Category</option>
                        {categoryData.map((item) => {
                            return (
                                <>
                                    <option key={item._id}>{item.companyBlogCategoryName}</option>
                                </>
                            );
                        })}
                    </select>
                </div>
                <div className="input-area">
                    <label>
                        Video Title<span style={{ color: "red" }}>*</span>
                    </label>
                    <InputBar
                        placeholder=""
                        height={"60px"}
                        value={videoTitle}
                        handleInput={(event) => setVideoTitle(event.target.value)}
                    />
                </div>
                <div className="blog-upload-image">
                    <label>
                        Upload Thumbnail Image & Preview Video
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="image-input">
                        <div className="image-left">
                            <div className="left-title">Upload Thumbnail Image</div>
                            {videoThumbnail.length === 0 ? (
                                <div className="image-border">
                                    <label>
                                        <input
                                            type="file"
                                            className="custom-input"
                                            accept=".png,.jpg,.jpeg"
                                            onChange={handleThumbnail}
                                        />
                                    </label>
                                    <ImFolderUpload />
                                    <span className="input-text">Drag & drop files here</span>
                                    <span className="input-text">
                                        File Supported: png, jpg, jpeg.
                                    </span>
                                    <span className="image-input-btn">Browse Files</span>
                                    <span className="input-text">Maximum size: 500mb</span>
                                </div>
                            ) : (
                                <div className="image-uploaded">
                                    <button
                                        onClick={() => {
                                            setVideoThumbnail([]);
                                            setVideoThumbnailURL("");
                                        }}
                                    >
                                        Remove
                                    </button>
                                    <img
                                        src={videoThumbnailURL}
                                        height={"195px"}
                                        width={"300px"}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="image-right">
                            <div className="left-title">Upload Preview Video</div>
                            {previewVideo.length === 0 ? (
                                <div className="image-border">
                                    <label>
                                        <input
                                            type="file"
                                            className="custom-input"
                                            accept=".mp4"
                                            onChange={handlePreview}
                                        />
                                    </label>
                                    <ImFolderUpload />
                                    <span className="input-text">Drag & drop files here</span>
                                    <span className="input-text">
                                        File Supported: mp4.
                                    </span>
                                    <span className="image-input-btn">Browse Files</span>
                                    <span className="input-text">Maximum size: 500mb</span>
                                </div>
                            ) : (
                                <div className="image-uploaded">
                                    <button
                                        onClick={() => {
                                            setPreviewVideo([]);
                                            setPreviewVideoURL("");
                                        }}
                                    >
                                        Remove
                                    </button>
                                    <video width="300px" height="195px">
                                        <source src={previewVideoURL} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="divide-line"></div>
                <div className="blog-upload-image">
                    <label>
                        Upload Full Video
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="image-input">
                        <div className="image-left">
                            <div className="left-title">Upload Full Video</div>
                            {fullVideo.length === 0 ? (
                                <div className="image-border">
                                    <label>
                                        <input
                                            type="file"
                                            className="custom-input"
                                            accept=".mp4"
                                            onChange={handleFullVideo}
                                        />
                                    </label>
                                    <ImFolderUpload />
                                    <span className="input-text">Drag & drop files here</span>
                                    <span className="input-text">
                                        File Supported: mp4.
                                    </span>
                                    <span className="image-input-btn">Browse Files</span>
                                    <span className="input-text">Maximum size: 500mb</span>
                                </div>
                            ) : (
                                <div className="image-uploaded">
                                    <button
                                        onClick={() => {
                                            setFullVideo([]);
                                            setFullVideoURL("");
                                        }}
                                    >
                                        Remove
                                    </button>
                                    <video width="300px" height="195px">
                                        <source src={fullVideoURL} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="input-area">
                    <label>
                        What You Will Get?<span style={{ color: "red" }}>*</span>
                    </label>
                    {whatGet.map((inputBar) => (
                        <div className="input-rel" key={inputBar.id}>
                            <InputBar
                                placeholder=""
                                height={"60px"}
                                value={inputBar.value}
                                handleInput={(event) => { handleWhatGetInputChange(inputBar.id, event.target.value) }
                                }
                            />
                            {whatGet.length > 1 && (<button
                                className="remove-section-button"
                                onClick={() => {
                                    setWhatGet(whatGet.filter((inputB) => inputB.id !== inputBar.id));
                                }}
                            >
                                <RxCrossCircled />
                            </button>)}

                        </div>
                    ))}
                    {whatGet.length < 3 && (<button
                        className="add-section-button"
                        onClick={() => {
                            setWhatGet([...whatGet, { id: Date.now(), value: "" }]);
                        }}
                    >
                        <IoMdAdd />
                        Add
                    </button>)}
                </div>
                <div className="input-area">
                    <label>
                        Requirements<span style={{ color: "red" }}>*</span>
                    </label>
                    {reqSec.map((inputBar) => (
                        <div className="input-rel" key={inputBar.id}>
                            <InputBar
                                placeholder=""
                                height={"60px"}
                                value={inputBar.value}
                                handleInput={(event) => { handleReqSecInputChange(inputBar.id, event.target.value) }
                                }
                            />
                            {reqSec.length > 1 && (<button
                                className="remove-section-button"
                                onClick={() => {
                                    setReqSec(reqSec.filter((inputB) => inputB.id !== inputBar.id));
                                }}
                            >
                                <RxCrossCircled />
                            </button>)}

                        </div>
                    ))}
                    {reqSec.length < 3 && (<button
                        className="add-section-button"
                        onClick={() => {
                            setReqSec([...reqSec, { id: Date.now(), value: "" }]);
                        }}
                    >
                        <IoMdAdd />
                        Add
                    </button>)}
                </div>
                <div className="input-area">
                    <label>
                        Who is this For?<span style={{ color: "red" }}>*</span>
                    </label>
                    {whoFor.map((inputBar) => (
                        <div className="input-rel" key={inputBar.id}>
                            <InputBar
                                placeholder=""
                                height={"60px"}
                                value={inputBar.value}
                                handleInput={(event) => { handleWhoForInputChange(inputBar.id, event.target.value) }
                                }
                            />
                            {whoFor.length > 1 && (<button
                                className="remove-section-button"
                                onClick={() => {
                                    setWhoFor(whoFor.filter((inputB) => inputB.id !== inputBar.id));
                                }}
                            >
                                <RxCrossCircled />
                            </button>)}

                        </div>
                    ))}
                    {whoFor.length < 3 && (<button
                        className="add-section-button"
                        onClick={() => {
                            setWhoFor([...whoFor, { id: Date.now(), value: "" }]);
                        }}
                    >
                        <IoMdAdd />
                        Add
                    </button>)}

                </div>
                <div className="input-area">
                    <label>
                        Description<span style={{ color: "red" }}>*</span>
                    </label>
                    <AreaInput
                        height={"200px"}
                        width={"89.5%"}
                        value={videoDescription}
                        handleInput={(event) => setVideoDescription(event.target.value)}
                    />
                </div>
                <div className="divide-line"></div>
                <div className="input-area">
                    <label>
                        About this Course<span style={{ color: "red" }}>*</span>
                    </label>
                    {aboutCourse.map((inputBar) => (
                        <div className="input-rel" key={inputBar.id}>
                            <InputBar
                                placeholder=""
                                height={"60px"}
                                value={inputBar.value}
                                handleInput={(event) => { handleAboutCourseInputChange(inputBar.id, event.target.value) }
                                }
                            />
                            {aboutCourse.length > 1 && (<button
                                className="remove-section-button"
                                onClick={() => {
                                    setAboutCourse(aboutCourse.filter((inputB) => inputB.id !== inputBar.id));
                                }}
                            >
                                <RxCrossCircled />
                            </button>)}

                        </div>
                    ))}
                    {aboutCourse.length < 3 && (<button
                        className="add-section-button"
                        onClick={() => {
                            setAboutCourse([...aboutCourse, { id: Date.now(), value: "" }]);
                        }}
                    >
                        <IoMdAdd />
                        Add
                    </button>)}
                </div>
                <div className="divide-line"></div>
                <div className="input-area">
                    <label>
                        Instructor Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <InputBar
                        placeholder=""
                        height={"60px"}
                        value={instructorName}
                        handleInput={(event) => setInstructorName(event.target.value)}
                    />
                </div>
                <div className="blog-upload-image">
                    <label>
                        Upload Instructor Image
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="image-input">
                        <div className="image-left">
                            <div className="left-title">Upload Instructor Image</div>
                            {instructorImage.length === 0 ? (
                                <div className="image-border">
                                    <label>
                                        <input
                                            type="file"
                                            className="custom-input"
                                            accept=".jpg, .jpeg, .png"
                                            onChange={handleInstructorImage}
                                        />
                                    </label>
                                    <ImFolderUpload />
                                    <span className="input-text">Drag & drop files here</span>
                                    <span className="input-text">
                                        File Supported: jpg, jpeg, png.
                                    </span>
                                    <span className="image-input-btn">Browse Files</span>
                                    <span className="input-text">Maximum size: 500mb</span>
                                </div>
                            ) : (
                                <div className="image-uploaded">
                                    <button
                                        onClick={() => {
                                            setInstructorImage([]);
                                            setInstructorImageURL("");
                                        }}
                                    >
                                        Remove
                                    </button>
                                    <img
                                        src={instructorImageURL}
                                        height={"195px"}
                                        width={"300px"}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="bottom-buttons for-video-bottom">
                    <div className="save-button" onClick={handleSubmit}>
                        Save
                    </div>
                    <div className="cancel-button" onClick={ClearData}>
                        Cancel
                    </div>
                </div>
            </div>

        </div>
    );
}

export default EditVideo;