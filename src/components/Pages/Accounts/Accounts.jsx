import React from "react";
import Top from "../../Useful/Top/Top";
import Table from "../../Table/BasicTable";
import DATA from "../../../dummy/userdummydata";

function Accounts() {
    const COLUMNS = [
        {
            Header: "Id",
            accessor: "id"
        },
        {
            Header: "Name",
            accessor: "name"
        },
        {
            Header: "Bio",
            accessor: "bio"
        },
        {
            Header: "Occupation",
            accessor: "occupation"
        },
        {
            Header: "Links",
            accessor: "links"
        },
        {
            Header: "Email",
            accessor: "email"
        },
        {
            Header: "Created Date",
            accessor: "createdDate"
        },
    ]

    return (
        <>
            <div className="accounts-container">
                <Top
                    title="Accounts"
                    add={true}
                    group={true}
                />
                <Table
                    COLUMNS={COLUMNS}
                    DATA={DATA}
                    dotPanel={true}
                />
            </div>
        </>
    );
}

export default Accounts;