import React, { useEffect, useState } from "react";
import Top from "../../Useful/Top/Top";
import Table from "../../Table/BasicTable";
import ConfirmBox from "../../Useful/ConfirmationBox/ConfirmBox";
import AddBlog from "./AddBlog";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMainContext } from "../../Useful/MainContext";

function Blog() {
  const [DATA, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [showConfirmBox, setShowConfirmBox] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const { setEditId } = useMainContext();
  const API = `${process.env.REACT_APP_API}/api`;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/getAllCompanyBlog`, { withCredentials: true })
      .then((res) => {
        const Blogdata = res.data.data.map((item, index) => ({
          ...item,
          sn: index + 1,
        }));

        const finalDate = Blogdata.map((item) => {
          const dateStr = item.createDate;
          const date = new Date(dateStr);
          const options = {
            timeZone: "Europe/London",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          };
          const nepalTime = date.toLocaleString("en-US", options);
          const onlyDate = nepalTime.split(",")[0].trim();

          return {
            ...item,
            createdDate: onlyDate,
          };
        });

        setData(finalDate);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  function DeleteBlog() {
    axios
      .delete(`http://localhost:4000/api/deleteCompanyBlog/${deleteId}`, {
        withCredentials: true,
      })
      .then(
        toast.error(`Blog Deleted`),
        setShowConfirmBox(false),
        setRefresh((prev) => !prev)
      )
      .catch((err) => console.log(err));
  }

  function GotoAdd() {
    navigate("/admin/blog/addblog");
  }

  function GotoEdit() {
    navigate("/admin/blog/editblog");
  }

  function UpdateToast() {
    toast.success(`Blog Updated`);
  }

  const COLUMNS = [
    {
      Header: "SN",
      accessor: "sn",
    },
    {
      Header: "Title",
      accessor: "companyBlogTitle",
    },
    {
      Header: "Created Date",
      accessor: "createdDate",
    },
  ];

  return (
    <>
      <ToastContainer />
      <ConfirmBox
        showC={showConfirmBox}
        message="Are you sure"
        setShowC={setShowConfirmBox}
        buttonAction={DeleteBlog}
        buttonText="Delete"
      />
      <div className="users-container">
        <Top title="Blog" notPopup={true} addFunction={GotoAdd} />
        <Table
          COLUMNS={COLUMNS}
          DATA={DATA}
          ActionBtn={true}
          editFunction={GotoEdit}
          deleteId={setDeleteId}
          setShowC={setShowConfirmBox}
          refresh={setRefresh}
          editId={setEditId}
        />
      </div>
    </>
  );
}

export default Blog;
