import React, { useEffect, useState } from "react";
import "./AddCategory.css";
import { InputBar } from "../../Tools/Input/Input";
import { IoCloseSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function EditCategory(props) {
  const [loading, setLoading] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const API = `${process.env.REACT_APP_API}/api`;

  useEffect(() => {
    if (props.editId) {
      axios
        .get(`${API}/getOneCompanyBlogCategory/${props.editId}`, {
          withCredentials: true,
        })
        .then((res) => {
          setCategoryName(res.data.data.companyBlogCategoryName);
        })
        .catch((err) => console.log(err));
    }
  }, [props.editPop]);

  function handleCategorySubmit() {
    setLoading(true);
    if (!categoryName) {
      toast.error("Please fill in all required fields");
      setLoading(false);
      return;
    }

    axios
      .patch(
        `${API}/updateCompanyBlogCategory/${props.editId}`,
        { companyBlogCategoryName: categoryName },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Blog Category Updated");
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
    props.setEdit(false);
    setLoading(false);
    setCategoryName("");
  }

  return (
    <div
      className="addcategory-background"
      style={props.editPop ? { display: "block" } : { display: "none" }}
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

export default EditCategory;
