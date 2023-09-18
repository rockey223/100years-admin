import React from "react";
import { Route, Routes } from "react-router-dom";
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

function GeneralRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Home />} >
                <Route path="dashboard" element={<h1>Dashboard</h1>} />
                <Route path="category" element={<Category />} />
                <Route path="users" element={<Users />} />
                <Route path="accounts" element={<Accounts />} />
                <Route path="level1" element={<Level1 />} />
                <Route path="level2" element={<Level2 />} />
                <Route path="payments" element={<Payments />} />
                <Route path="feedback" element={<Feedback />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/addblog" element={<AddBlog />} />
            </Route>
        </Routes>
    );
}

export default GeneralRoutes;