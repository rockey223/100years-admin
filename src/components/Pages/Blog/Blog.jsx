import React, { useState } from "react";
import Top from "../../Useful/Top/Top";
import Table from "../../Table/BasicTable";

import DATA from "../../../dummy/blogdummydata";
import AddBlog from "./AddBlog";

function Blog() {

    const [addPop, setAddPop] = useState(false);

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
            Header: "Created Date",
            accessor: "createdDate"
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