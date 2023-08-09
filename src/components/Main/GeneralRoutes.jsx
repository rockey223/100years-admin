import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Users from "../Pages/Users/Users";
import Payments from "../Pages/Payments/Payments";
import Accounts from "../Pages/Accounts/Accounts";
import Feedback from "../Pages/Feedback/Feedback";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";

function GeneralRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Home />} >
                <Route path="dashboard" element={<h1>Dashboard</h1>} />
                <Route path="users" element={<Users />} />
                <Route path="accounts" element={<Accounts />} />
                <Route path="course" element={<h1>Course</h1>} />
                <Route path="level1" element={<h1>Level 1</h1>} />
                <Route path="level2" element={<h1>Level 2</h1>} />
                <Route path="payments" element={<Payments />} />
                <Route path="feedback" element={<Feedback />} />
                <Route path="blog" element={<Blog />} />
            </Route>
        </Routes>
    );
}

export default GeneralRoutes;