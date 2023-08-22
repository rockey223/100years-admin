import React from "react";
import { SearchInput } from "../../Tools/Input/Input";
import "./Top.css";

import { BiFilter, BiCloudUpload, BiPlus } from "react-icons/bi";

function Top(props) {
    return (
        <>
            <div className="top-conatiner">
                <div className="title-top">
                    {props.title}
                </div>
                <div className="search-filter-export">
                    <div className="search-filter">
                        <div className="search-container">
                            <SearchInput placeholder={"Search"} />
                        </div>
                        <div className="filter-conatiner">
                            <div className="filter-button">
                                <BiFilter />
                                Filters
                            </div>
                        </div>
                    </div>
                    <div className="export-add">
                        <div className="export-button" style={{ marginRight: props.add ? "12px" : "" }}>
                            <BiCloudUpload />
                            Export
                        </div>
                        {props.add ?
                            <div className="add-button" onClick={() => props.setAdd(true)}>
                                <BiPlus />
                                Add
                            </div>
                            : ""
                        }
                    </div>
                </div>
                {props.group ?
                    <div className="filter-group">
                        {props.filters.map((names) => {
                            return (
                                <div className="group-button">
                                    {names}
                                </div>
                            );
                        })}
                    </div>
                    : ""
                }
            </div>
        </>
    );
}

export default Top;