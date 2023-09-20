import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import "./BasicTable.css";

import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";

function BasicTable(props) {
  const tableInstance = useTable({
    columns: useMemo(() => props.COLUMNS, []),
    data: useMemo(() => props.DATA, [props.DATA]),
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  function handleEditClick(id) {
    props.editId(id);
    props.setShowEV(true);
  }

  function handleDeleteClick(id) {
    props.deleteId(id);
    props.setShowC(true);
  }

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              style={{ backgroundColor: "#F9FAFB" }}
            >
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              {props.dotPanel ? <th style={{ width: "30px" }}></th> : ""}
              {props.ActionBtn ? <th style={{ width: "75px" }}>Action</th> : ""}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, columnIndex) => {
                  {
                    /* const isSecondColumn = columnIndex === 1; */
                  }
                  const cellValue = cell.value;
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={
                        cellValue === "Paid"
                          ? "statusPaid"
                          : cellValue === "Unpaid"
                          ? "statusUnpaid"
                          : ""
                      }
                    >
                      <span>{cell.render("Cell")}</span>
                    </td>
                  );
                })}
                {props.dotPanel ? (
                  <td className="dot-menu" style={{ padding: "0" }}>
                    {/* <BiDotsVerticalRounded /> */}
                    <div className="dotbtn update-btnpanel">Update</div>
                    <div className="panel-line"></div>
                    <div className="dotbtn delete-btnpanel">Delete</div>
                  </td>
                ) : (
                  ""
                )}
                {props.ActionBtn ? (
                  <td className="action-btn">
                    <button
                      className="delete-button"
                      onClick={() => {
                        handleDeleteClick(row.original._id);
                      }}
                    >
                      <RiDeleteBinLine className="del-can" />
                    </button>
                    {props.editFunction ? (
                      <button
                        className="edit-button"
                        onClick={() => {
                          props.editFunction();
                          const eId = row.original._id;
                          props.editId(eId);
                        }}
                      >
                        <RiEditLine className="edit-pen" />
                      </button>
                    ) : (
                      <button
                        className="edit-button"
                        onClick={() => handleEditClick(row.original._id)}
                      >
                        <RiEditLine className="edit-pen" />
                      </button>
                    )}
                  </td>
                ) : (
                  ""
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default BasicTable;
