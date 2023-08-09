import React from "react";
import "./Input.css";
import { FiSearch } from "react-icons/fi";

const InputBar = ({ type, placeholder, name, height, width, handleInput }) => {
    return (
        <>
            <div className="input-bar">
                <input
                    type={type}
                    placeholder={placeholder}
                    style={{ height: height, width: width }}
                    name={name}
                    onChange={handleInput}
                />
            </div>
        </>
    );
}

const SearchInput = ({ placeholder, height, width }) => {
    return (
        <>
            <div className="search-bar">
                <FiSearch />
                <input
                    type="text"
                    placeholder={placeholder}
                    style={{ height: { height }, width: { width } }}
                />
            </div>
        </>
    );
}

const AreaInput = ({ height, width }) => {
    return (
        <>
            <div className="text-area">
                <textarea
                    style={{ height, width }}
                />
            </div>
        </>
    )
}

export { InputBar, SearchInput, AreaInput };