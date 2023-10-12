import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import Table from "../../../Table/BasicTable";
import axios from "axios";
import AddFeatured from "./AddFeatured";
import { toast } from "react-toastify";
import ConfirmBox from "../../../Useful/ConfirmationBox/ConfirmBox";

function Featured() {

    const [featuredData, setFeaturedData] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    const [showConfirmBox, setShowConfirmBox] = useState(false);
    const [deleteId, setDeleteId] = useState("");
    const [refresh, setRefresh] = useState(false);

    const API = `${process.env.REACT_APP_API}/api`;

    useEffect(() => {
        axios
            .get(`${API}/getAllFeaturedCourseVideo`, { withCredentials: true })
            .then(res => {
                const Level1Video = res.data.data.filter((item) => item.courseVideoLevel === "level1");
                const Videodata = Level1Video.map((item, index) => ({ ...item, sn: index + 1 }));

                const finalDate = Videodata.map((item) => {
                    const dateStr = item.createAt;
                    const date = new Date(dateStr);
                    const options = {
                        timeZone: "Europe/London",
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                    };
                    const nepalTime = date.toLocaleString("en-US", options);
                    const onlyDate = nepalTime.split(",")[0].trim();

                    return {
                        ...item,
                        createdDate: onlyDate,
                    };
                });


                setFeaturedData(finalDate);
            })
            .catch(err => console.log(err));

    }, [refresh])

    const COLUMNS = [
        {
            Header: "SN",
            accessor: "sn"
        },
        {
            Header: "Title",
            accessor: "courseVideoTitle"
        },
        {
            Header: "Category",
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
            Header: "Created Date",
            accessor: "createdDate"
        }
    ]

    function handleDelete() {
        axios
            .patch(`${API}/removeFeaturedCourseVideo/${deleteId}`, {
                withCredentials: true,
            })
            .then((res) => {
                toast.error(`Blog Category Deleted`);
                setShowConfirmBox(false);
                setRefresh((prev) => !prev);
            })
            .catch((err) => console.log(err));
    }


    return (
        <>
            <ConfirmBox
                showC={showConfirmBox}
                setShowC={setShowConfirmBox}
                message={"Are you sure you want to delete?"}
                buttonText="Delete"
                buttonAction={handleDelete}
            />
            <AddFeatured Show={showAdd} Dont={setShowAdd} refresh={setRefresh} />
            <div className="featured-container">
                <div className="featured-top">
                    <div className="featured-title">Featured Content</div>
                    <div className="add-button" onClick={() => setShowAdd(true)}>
                        <BiPlus />
                        Add
                    </div>
                </div>
                <Table
                    COLUMNS={COLUMNS}
                    DATA={featuredData}
                    ActionBtn={true}
                    deleteId={setDeleteId}
                    setShowC={setShowConfirmBox}
                    noedit={true}
                />
            </div>
        </>
    );

}

export default Featured