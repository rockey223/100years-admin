import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Users from "../Pages/Users/Users";
import Payments from "../Pages/Payments/Payments";
import Accounts from "../Pages/Accounts/Accounts";
import Feedback from "../Pages/Feedback/Feedback";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Level1 from "../Pages/Level1/Level1";
import Level2 from "../Pages/Level2/Level2";
import Category from "../Pages/Category/Category";
import AddBlog from "../Pages/Blog/AddBlog";
import EditBlog from "../Pages/Blog/EditBlog";
import AddVideo from "../Pages/Level1/Video/AddVideo";
import EditVideo from "../Pages/Level1/Video/EditVideo";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { useProfileContext } from "../Useful/ProfileContext";

function GeneralRoutes() {
  const navigate = useNavigate();
  const { session } = useProfileContext();

  useEffect(() => {
    if (!session) {
      navigate("/"); // Redirect to login if not logged in
    }
  }, [session, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          session ? (
            <Navigate to="/admin/dashboard" replace={true} />
          ) : (
            <Login />
          )
        }
      />
      <Route
        path="/admin"
        element={session ? <Home /> : <Navigate to="/" replace={true} />}
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="category" element={<Category />} />
        <Route path="users" element={<Users />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="level1" element={<Level1 />} />
        <Route path="level2" element={<Level2 />} />
        <Route path="payments" element={<Payments />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/addblog" element={<AddBlog />} />
        <Route path="blog/editblog" element={<EditBlog />} />
        <Route path="level1/addvideo" element={<AddVideo />} />
        <Route path="level1/editvideo" element={<EditVideo />} />
      </Route>
    </Routes>
  );
}

export default GeneralRoutes;
