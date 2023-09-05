import React, { useEffect, useState } from "react";
import Top from "../../Useful/Top/Top";
import Table from "../../Table/BasicTable";
import AddVideo from "./Video/AddVideo";
import AddArticle from "./Article/AddArticle";
import AddPodcast from "./Podcast/AddPodcast";
import ConfirmBox from "../../Useful/ConfirmationBox/ConfirmBox";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditVideo from "./Video/EditVideo";

function Level1() {

    const [showAddVid, setShowAddVid] = useState(false);
    const [showEditVid, setShowEditVid] = useState(false);
    const [showConfirmBox, setShowConfirmBox] = useState(false);
    const [activeCourse, setActiveCourse] = useState('Video');
    const [courseVideoData, setCourseVideoData] = useState([]);
    const [isLoading, setIsLoding] = useState(true);
    const [editId, setEditId] = useState("");
    const [deleteId, setDeleteId] = useState("");
    const [refresh, setRefresh] = useState(true);

    const API = `${process.env.REACT_APP_API}/api`;

    useEffect(() => {
        axios
            .get(`${API}/getAllCourseVideo`, { withCredentials: true })
            // .get(`http://localhost:4000/api/getAllCourseVideo`, {withCredentials: true})
            .then(res => {
                const Level1Video = res.data.data.filter((item) => item.courseVideoLevel === "level1");
                const Videodata = Level1Video.map((item, index) => ({ ...item, sn: index + 1 }));
                const UpdatedData = Videodata.map((item) => {
                    const trimmedDescription = item.courseVideoDescription.substring(0, 20);
                    const descriptionWithEllipsis = item.courseVideoDescription.length > 20 ? trimmedDescription + "..." : trimmedDescription;
                    return {
                        ...item, shortDescription: descriptionWithEllipsis
                    }
                })
                console.log(UpdatedData)
                setCourseVideoData(UpdatedData);
                setIsLoding(false);
            })
            .catch(err => console.log(err));
    }, [refresh])

    function DeleteCourseData(id) {
        axios
            .delete(`http://localhost:4000/api/deleteCourseVideo/${deleteId}`, { withCredentials: true })
            .then(res => {
                toast.success(`Course Item Deleted`);
                setShowConfirmBox(false);
                setRefresh(prev => !prev);
            })
            .catch(err => console.log(err));
    }

    const COLUMNS = [
        {
            Header: "SN",
            accessor: "sn"
        },
        {
            Header: "File",
            accessor: "courseVideo"
        },
        {
            Header: "About",
            accessor: "courseVideoCategory"
        },
        {
            Header: "Duration",
            accessor: "courseVideoDuration"
        },
        {
            Header: "Instructor",
            accessor: "courseVideoInstructorName"
        },
        {
            Header: "Description",
            accessor: "shortDescription"
        },
        {
            Header: "Created Date",
            accessor: "createdAt"
        }
    ]



    return (
        <div className="level1-container">
            <ToastContainer />
            <ConfirmBox
                showC={showConfirmBox}
                message="Are you sure you want to delete?"
                setShowC={setShowConfirmBox}
                buttonAction={DeleteCourseData}
                buttonText="Delete"
            />
            {activeCourse === 'Video' ?
                <>
                    <AddVideo
                        showAV={showAddVid}
                        setShowAV={setShowAddVid}
                        refresh={setRefresh}
                    />
                    <EditVideo
                        showAV={showEditVid}
                        setShowAV={setShowEditVid}
                        editId={editId}
                        refresh={setRefresh}
                    />
                </>
                : ""}
            {activeCourse === 'Article' ?
                <AddArticle
                    showAV={showAddVid}
                    setShowAV={setShowAddVid}
                />
                : ""}
            {activeCourse === 'Podcast' ?
                <AddPodcast
                    showAV={showAddVid}
                    setShowAV={setShowAddVid}
                />
                : ""}
            <Top
                title="Campaign / Level 1"
                add={true}
                group={true}
                filters={["Video", "Article", "Podcast", "Blog"]}
                setAdd={setShowAddVid}
                activeCourse={activeCourse}
                setActiveC={setActiveCourse}
            />
            {isLoading ? (
                <div>Loading... </div>
            ) : (
                <Table
                    COLUMNS={COLUMNS}
                    ActionBtn={true}
                    DATA={courseVideoData}
                    editId={setEditId}
                    deleteId={setDeleteId}
                    setShowC={setShowConfirmBox}
                    setShowEV={setShowEditVid}
                />
            )}
        </div>
    );
}

export default Level1;