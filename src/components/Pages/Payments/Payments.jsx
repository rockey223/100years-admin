import React from "react";
import Top from "../../Useful/Top/Top";
import Table from "../../Table/BasicTable";
import DATA from "../../../dummy/paymentdummydata";

function Payments() {

    const COLUMNS = [
        {
            Header: "SN",
            accessor: "id"
        },
        {
            Header: "Amount",
            accessor: "amount"
        },
        {
            Header: "Status",
            accessor: "status"
        },
        {
            Header: "Description",
            accessor: "description"
        },
        {
            Header: "Accounts",
            accessor: "accounts"
        },
        {
            Header: "Date",
            accessor: "date"
        }
    ]

    return (
        <>
            <div className="payments-container">
                <Top
                    title="Payments"
                />
                <Table
                    COLUMNS={COLUMNS}
                    DATA={DATA}
                    dotPanel={true}
                    payment={true}
                />
            </div>
        </>
    );
}

export default Payments;