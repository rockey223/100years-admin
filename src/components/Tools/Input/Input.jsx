import React from "react";
import "./Input.css";
import { FiSearch } from "react-icons/fi";

const InputBar = ({ type, placeholder, name, value, height, width, handleInput }) => {
    return (
        <>
            <div className="input-bar">
                <input
                    type={type}
                    placeholder={placeholder}
                    style={{ height: height, width: width }}
                    name={name}
                    value={value}
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

const AreaInput = ({ height, width, handleInput, value }) => {
    return (
        <>
            <div className="text-area">
                <textarea
                    style={{ height, width }}
                    value={value}
                    onChange={handleInput}
                />
            </div>
        </>
    )
}

export { InputBar, SearchInput, AreaInput };