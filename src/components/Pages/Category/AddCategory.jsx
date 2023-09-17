import React from "react";
import "./AddCategory.css";
import { InputBar } from "../../Tools/Input/Input";
import { IoCloseSharp } from "react-icons/io5";


function AddCategory(props) {

    function closeAddCategory() {
        props.setAdd(false);
    }

    return (
        <div className="addcategory-background" style={props.addPop ? { display: "block" } : { display: "none" }}>
            <div className="addcategory-container">
                <button className="close-btn-categoty" onClick={() => closeAddCategory()}><IoCloseSharp /></button>
                <div className="addcategory-title">Add Category</div>
                <div className="addcategory-midtext">Category Name</div>
                <InputBar
                    width="350px"
                    height="60px"
                />
                <div className="save-category-btn">
                    <button>Save</button>
                </div>
            </div>
        </div>
    );
}

export default AddCategory;