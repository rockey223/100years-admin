import React, { useEffect, useState } from "react";
import "./AddFeatured.css"
import { AiOutlineClockCircle, AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function AddFeatured(props) {

    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState("");


    const API = `${process.env.REACT_APP_API}/api`;
    const imageApi = `${process.env.REACT_APP_API}/mediaUploads`;

    useEffect(() => {
        axios
            .get(`${API}/getAllCourseVideo`, { withCredentials: true })
            .then(res => {
                setVideos(res.data.data);
            })
            .catch(err => console.log(err));
    }, [])

    function handleSubmit() {
        setLoading(true);
        if (selectedVideo) {
            axios
                .patch(`${API}/addFeaturedCourseVideo/${selectedVideo}`, { withCredentials: true })
                .then(() => {
                    setLoading(false);
                    toast.success(`Featured Content Added`);
                    ClosePopUp();
                })
                .catch(err => console.log(err));
        }
        else {
            toast.error(`Please choose a video`);
            setLoading(false);
        }

    }

    function ClosePopUp() {
        setSelectedVideo("");
        setLoading(false);
        props.Dont(false);
        props.refresh(prev => !prev)
    }

    return (
        <div className="addfeature-background" style={props.Show ? { display: "block" } : { display: "none" }}>
            <div className="addfeature-container">
                <button className="addfeature-close" onClick={ClosePopUp}><AiOutlineCloseCircle /></button>
                <div className="addfeature-content">
                    <div className="addfeature-title">Select Video</div>
                    <div className="addfeature-video-container">
                        {videos.map((video, index) => {
                            return (
                                <div className={`video-card ${selectedVideo === video._id ? 'card-selected' : ''}`} key={index} onClick={() => { setSelectedVideo(video._id) }}>
                                    <div className="card-thumbnail">
                                        <img src={`${imageApi}/${video.courseVideoThumbnail}`} />
                                    </div>
                                    <div className="card-text">
                                        <div className="card-category">{video.courseVideoCategory}</div>
                                        <div className="card-title">{video.courseVideoTitle}</div>
                                        <div className="card-duration">
                                            <AiOutlineClockCircle />
                                            {video.courseVideoDuration}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="bottom-buttons for-video-bottom">
                        <button className="save-button" onClick={handleSubmit} disabled={loading}>
                            {loading ? `Saving...` : `Save`}
                        </button>
                        <div className="cancel-button" onClick={ClosePopUp}>
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddFeatured;