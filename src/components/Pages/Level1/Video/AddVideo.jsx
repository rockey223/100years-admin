import React, { useState } from "react";
import { IoIosArrowBack, IoMdAdd } from "react-icons/io";
import { AreaInput, InputBar } from "../../../Tools/Input/Input";
import { ImFolderUpload } from "react-icons/im";
import { RxCrossCircled } from "react-icons/rx"

function AddVideo() {

    const [videoThumbnail, setVideoThumbnail] = useState([]);
    const [whatGet, setWhatGet] = useState([{ id: 1, value: "" }])
    const [reqSec, setReqSec] = useState([{ id: 1, value: "" }])
    const [whoFor, setWhoFor] = useState([{ id: 1, value: "" }])
    const [aboutCourse, setAboutCourse] = useState([{ id: 1, value: "" }])

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
    }

    return (
        <div className="add-video-container">
            <div className="title-top">Add Video Level 1</div>
            <div className="back-button">
                <IoIosArrowBack /> <span>Back</span>
            </div>
            <div className="add-video-form">
                <div className="input-area">
                    <label>
                        Category<span style={{ color: "red" }}>*</span>
                    </label>
                    <select
                    // value={blogCategory}
                    // onChange={(event) => setBlogCategory(event.target.value)}
                    >
                        <option>Select Category</option>
                        {/* {category.map((item) => {
                            return (
                                <>
                                    <option key={item._id}>{item.companyBlogCategoryName}</option>
                                </>
                            );
                        })} */}
                    </select>
                </div>
                <div className="input-area">
                    <label>
                        Video Title<span style={{ color: "red" }}>*</span>
                    </label>
                    <InputBar
                        placeholder=""
                        height={"60px"}
                    // value={blogTitle}
                    // handleInput={(event) => setBlogTitle(event.target.value)}
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
                                        }}
                                    >
                                        Remove
                                    </button>
                                    <img
                                        src={URL.createObjectURL(videoThumbnail[0])}
                                        height={"195px"}
                                        width={"300px"}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="image-right">
                            <div className="left-title">Upload Preview Video</div>
                            {/* {blogBanner.length === 0 ? ( */}
                            <div className="image-border">
                                <label>
                                    <input
                                        type="file"
                                        className="custom-input"
                                        accept=".mp4"
                                    // onChange={handleBanner}
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
                            {/* ) : (
                                <div className="image-uploaded">
                                    <button
                                        onClick={() => {
                                            setBlogBanner([]);
                                        }}
                                    >
                                        Remove
                                    </button>
                                    <img
                                        src={URL.createObjectURL(blogBanner[0])}
                                        height={"195px"}
                                        width={"300px"}
                                    />
                                </div>
                            )} */}
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
                            {/* {blogThumbnail.length === 0 ? ( */}
                            <div className="image-border">
                                <label>
                                    <input
                                        type="file"
                                        className="custom-input"
                                        accept=".mp4"
                                    // onChange={handleThumbnail}
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
                            {/* ) : ( */}
                            {/* <div className="image-uploaded">
                                    <button
                                        onClick={() => {
                                            setBlogThumbnail([]);
                                        }}
                                    >
                                        Remove
                                    </button>
                                    <img
                                        src={URL.createObjectURL(blogThumbnail[0])}
                                        height={"195px"}
                                        width={"300px"}
                                    />
                                </div>
                            )} */}
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
                    // value={blogDescription}
                    // handleInput={(event) => setBlogDescription(event.target.value)}
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
                    // value={blogTitle}
                    // handleInput={(event) => setBlogTitle(event.target.value)}
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
                            {/* {blogThumbnail.length === 0 ? ( */}
                            <div className="image-border">
                                <label>
                                    <input
                                        type="file"
                                        className="custom-input"
                                        accept=".jpg, .jpeg, .png"
                                    // onChange={handleThumbnail}
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
                            {/* ) : ( */}
                            {/* <div className="image-uploaded">
                                    <button
                                        onClick={() => {
                                            setBlogThumbnail([]);
                                        }}
                                    >
                                        Remove
                                    </button>
                                    <img
                                        src={URL.createObjectURL(blogThumbnail[0])}
                                        height={"195px"}
                                        width={"300px"}
                                    />
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
                <div className="bottom-buttons for-video-bottom">
                    <div className="save-button">
                        Save
                    </div>
                    <div className="cancel-button">
                        Cancel
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AddVideo;