import React, { useEffect, useState } from "react";
import Top from "../../Useful/Top/Top";
import Table from "../../Table/BasicTable";
import ConfirmBox from "../../Useful/ConfirmationBox/ConfirmBox";

// import DATA from "../../../dummy/blogdummydata";
import axios from "axios";
import AddCategory from "./AddCategory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditCategory from "./EditCategory";

function Category() {
  const [addPop, setAddPop] = useState(false);
  const [editPop, setEditPop] = useState(false);
  const [DATA, setData] = useState([]);
  const [showConfirmBox, setShowConfirmBox] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [editId, setEditId] = useState("");
  const [refresh, setRefresh] = useState(false);

  const API = `${process.env.REACT_APP_API}/api`;

  useEffect(() => {
    axios
      .get(`${API}/getAllCompanyBlogCategory`, { withCredentials: true })
      .then((res) => {
        const Videodata = res.data.data.map((item, index) => ({
          ...item,
          sn: index + 1,
        }));
        setData(Videodata);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  function handleDelete() {
    axios
      .delete(`${API}/deleteCompanyBlogCategory/${deleteId}`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.error(`Blog Category Deleted`);
        setShowConfirmBox(false);
        setRefresh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  }

  const COLUMNS = [
    {
      Header: "SN",
      accessor: "sn",
    },
    {
      Header: "CategoryName",
      accessor: "companyBlogCategoryName",
    },
  ];

  return (
    <>
      <ConfirmBox
        showC={showConfirmBox}
        setShowC={setShowConfirmBox}
        message={"Are you sure you want to delete?"}
        buttonText="Delete"
        buttonAction={handleDelete}
      />
      <AddCategory addPop={addPop} setAdd={setAddPop} refresh={setRefresh} />
      <EditCategory
        editId={editId}
        editPop={editPop}
        setEdit={setEditPop}
        refresh={setRefresh}
      />
      <div className="users-container">
        <Top title="Category" add={true} setAdd={setAddPop} />
        <Table
          COLUMNS={COLUMNS}
          DATA={DATA}
          ActionBtn={true}
          deleteId={setDeleteId}
          editId={setEditId}
          setShowC={setShowConfirmBox}
          setShowEV={setEditPop}
        />
      </div>
    </>
  );
}

export default Category;
