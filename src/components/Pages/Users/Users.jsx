import React from "react";
import Top from "../../Useful/Top/Top";
import Table from "../../Table/BasicTable";
import "./Users.css";
import DATA from "../../../dummy/userdummydata";

function Users() {

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
            Header: "Status",
            accessor: "status"
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
            <div className="users-container">
                <Top
                    title="User Details"
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

export default Users;