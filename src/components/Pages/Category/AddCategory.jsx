import React, { useState } from "react";
import "./AddCategory.css";
import { InputBar } from "../../Tools/Input/Input";
import { IoCloseSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function AddCategory(props) {
  const [loading, setLoading] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const API = `${process.env.REACT_APP_API}/api`;

  function handleCategorySubmit() {
    setLoading(true);
    if (!categoryName) {
      setLoading(false);
      toast.error("Please fill in all required fields");
      return;
    }
    axios
      .post(
        `${API}/postCompanyBlogCategory`,
        { companyBlogCategoryName: categoryName },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Blog Category Added");
        setLoading(false);
        closeAddCategory();
        props.refresh((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  function closeAddCategory() {
    props.setAdd(false);
    setLoading(false);
    setCategoryName("");
  }

  return (
    <div
      className="addcategory-background"
      style={props.addPop ? { display: "block" } : { display: "none" }}
    >
      <ToastContainer />
      <div className="addcategory-container">
        <button
          className="close-btn-categoty"
          onClick={() => closeAddCategory()}
        >
          <IoCloseSharp />
        </button>
        <div className="addcategory-title">Add Category</div>
        <div className="addcategory-midtext">Category Name</div>
        <InputBar
          width="350px"
          height="60px"
          placeholder={"100 Years Lifestyle Essentials"}
          value={categoryName}
          handleInput={(event) => setCategoryName(event.target.value)}
        />
        <div className="save-category-btn">
          <button
            onClick={handleCategorySubmit}
            disabled={loading}
            style={
              loading
                ? { backgroundColor: "gray" }
                : { backgroundColor: "#2daa50" }
            }
          >
            {loading ? "Loading..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
