import React, { useState } from "react";
import Top from "../../Useful/Top/Top";
import Table from "../../Table/BasicTable";
import DATA from "../../../dummy/level1dummydata";
import AddVideo from "./Video/AddVideo";
import AddArticle from "./Article/AddArticle";
import AddPodcast from "./Podcast/AddPodcast";

function Level1() {

    const [showAddVid, setShowAddVid] = useState(false)
    const [activeCourse, setActiveCourse] = useState('Video');

    const COLUMNS = [
        {
            Header: "SN",
            accessor: "id"
        },
        {
            Header: "File",
            accessor: "file"
        },
        {
            Header: "About",
            accessor: "about"
        },
        {
            Header: "Duration",
            accessor: "duration"
        },
        {
            Header: "Instructor",
            accessor: "instructor"
        },
        {
            Header: "Description",
            accessor: "description"
        },
        {
            Header: "Created Date",
            accessor: "created_date"
        }
    ]



    return (
        <div className="level1-container">
            {activeCourse === 'Video' ?
                <AddVideo
                    showAV={showAddVid}
                    setShowAV={setShowAddVid}
                />
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
            <Table
                COLUMNS={COLUMNS}
                ActionBtn={true}
                DATA={DATA}
            />
        </div>
    );
}

export default Level1;