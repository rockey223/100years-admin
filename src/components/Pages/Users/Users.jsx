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
        }
    ]


    return (
        <>
            <div className="users-container">
                <Top
                    title="Category"
                />
                <Table
                    COLUMNS={COLUMNS}
                    DATA={DATA}
                    // dotPanel={true}
                    ActionBtn={true}
                />
            </div>
        </>
    );
}

export default Users;