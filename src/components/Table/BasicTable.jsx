import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import "./BasicTable.css";
import { useMainContext } from "../Useful/MainContext";

import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function BasicTable(props) {
  const { setVideoId1 } = useMainContext();
  const navigate = useNavigate();

  const tableInstance = useTable({
    columns: useMemo(() => props.COLUMNS, []),
    data: useMemo(() => props.DATA, [props.DATA]),
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  function handleEditClick(id) {
    if (props.activeCourse === "Video") {
      setVideoId1(id);
      navigate(`/admin/level1/editvideo`);
    } else {
      props.editId(id);
      props.setShowEV(true);
    }
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
                    {props.noedit ? null : (
                      <button
                        className="edit-button"
                        onClick={() => {
                          if (props.editFunction) {
                            props.editFunction();
                            const eId = row.original._id;
                            props.editId(eId);
                          } else {
                            handleEditClick(row.original._id);
                          }
                        }}
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
