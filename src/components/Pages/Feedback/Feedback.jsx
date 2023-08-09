import React, { useState } from "react";
import Top from "../../Useful/Top/Top";
import Table from "../../Table/BasicTable";
import DATA from "../../../dummy/feedbackdummydata";
import AddFeedback from "./AddFeedback";

function Feedback() {

    const [addPop, setAddPop] = useState(false);

    const COLUMNS = [
        {
            Header: "Name",
            accessor: "name"
        },
        {
            Header: "Email",
            accessor: "email"
        },
        {
            Header: "Contact",
            accessor: "contact"
        },
        {
            Header: "Message",
            accessor: "message"
        },
        {
            Header: "Received Date",
            accessor: "receivedDate"
        }
    ]

    return (
        <>
            <AddFeedback
                addPop={addPop}
                setAdd={setAddPop}
            />
            <div className="feedback-container">
                <Top
                    title="Feedback"
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

export default Feedback;