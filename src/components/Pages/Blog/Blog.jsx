import React, { useEffect, useState } from "react";
import Top from "../../Useful/Top/Top";
import Table from "../../Table/BasicTable";

// import DATA from "../../../dummy/blogdummydata";
import AddBlog from "./AddBlog";
import axios from "axios";

function Blog() {

    const [addPop, setAddPop] = useState(false);
    const [DATA, setData] = useState([]);
    const API = `${process.env.REACT_APP_API}/api`;

    useEffect(() => {
        axios
            .get(`${API}/getAllCompanyBlog`, { withCredentials: true })
            .then(res => {
                const Videodata = res.data.data.map((item, index) => ({ ...item, sn: index + 1 }));
                setData(Videodata);
            })
            .catch(err => console.log(err));
    })

    const COLUMNS = [
        {
            Header: "SN",
            accessor: "sn"
        },
        {
            Header: "File",
            accessor: "companyBlogImage"
        },
        {
            Header: "About",
            accessor: "companyBlogTitle"
        },
        {
            Header: "Created Date",
            accessor: "createdAt"
        }
    ]



    return (
        <>
            <AddBlog
                addPop={addPop}
                setAdd={setAddPop}
            />
            <div className="users-container">
                <Top
                    title="Blog"
                    add={true}
                    setAdd={setAddPop}
                />
                <Table
                    COLUMNS={COLUMNS}
                    DATA={DATA}
                    ActionBtn={true}
                />
            </div>
        </>
    );
}

export default Blog;