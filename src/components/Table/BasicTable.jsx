import React, { useEffect, useMemo } from "react";
import { useTable } from "react-table";
import "./BasicTable.css";

// import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";

function BasicTable(props) {

    const tableInstance = useTable({
        columns: useMemo(() => props.COLUMNS, []),
        data: useMemo(() => props.DATA, []),
    })

    useEffect(() => {
        // console.log();
    }, [tableInstance])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance

    return (
        <div className="table-container">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                            {props.dotPanel ?
                                <th style={{ width: "30px" }}></th>
                                : ""}
                            {props.ActionBtn ?
                                <th style={{ width: "75px" }}>Action</th>
                                : ""}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell, columnIndex) => {

                                    {/* const isSecondColumn = columnIndex === 1; */ }
                                    const cellValue = cell.value;
                                    return (<td
                                        {...cell.getCellProps()}
                                        className={cellValue === "Paid" ? "statusPaid" : cellValue === "Unpaid" ? "statusUnpaid" : ""}
                                    >
                                        <span>
                                            {cell.render('Cell')}
                                        </span>
                                    </td>
                                    )
                                })}
                                {props.dotPanel ?
                                    <td className="dot-menu" style={{ padding: "0" }}>
                                        {/* <BiDotsVerticalRounded /> */}
                                        <div className="dotbtn update-btnpanel">Update</div>
                                        <div className="panel-line"></div>
                                        <div className="dotbtn delete-btnpanel">Delete</div>
                                    </td>
                                    : ""}
                                {props.ActionBtn ?
                                    <td className="action-btn">
                                        <button className="edit-button"><RiDeleteBinLine className="del-can" /></button>
                                        <button className="delete-button"><RiEditLine className="edit-pen" /></button>
                                    </td>
                                    : ""}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default BasicTable;