import React, { useEffect, useState } from "react";
import "./Navigation.css";
import logo from "../../../Images/logo.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { BiSolidDashboard, BiLogoBlogger, BiBookAlt } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { RiAccountBoxLine } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
// import { MdPayment } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import axios from "axios";

function Navigation() {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(true);
    const [showCourse, setShowCourse] = useState(false);

    function showCourses() {
        setShowCourse((prev) => !prev);
    }

    useEffect(() => {
        console.log(toggle);
    }, [toggle])

    function handleLogout() {
        axios
            .get(`http://localhost:4000/api/adminLogout`, { withCredentials: true })
            .then(res => {
                console.log(res);
                navigate(`/`);
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className={toggle ? "nav-container" : "small-nav"}>
                <div className="top-mid-nav">
                    <div className={toggle ? "top-nav" : "top-nav-small"}>
                        <div className="nav-logo">
                            <img src={logo} alt="100Years Logo" className={toggle ? "" : "small-logo"}></img>
                        </div>
                        <div className="hamburger">
                            <button onClick={() => setToggle((prev) => !prev)}>
                                <GiHamburgerMenu className="hamburger-icon" />
                            </button>
                        </div>
                    </div>
                    <div className={toggle ? "mid-nav" : "mid-nav-small"}>
                        <div className="nav-link" onClick={() => setShowCourse(false)}><NavLink to="dashboard">
                            <BiSolidDashboard />
                            {toggle && (<span>Dashboard</span>)}
                        </NavLink></div>
                        <div className="nav-link" onClick={() => setShowCourse(false)}><NavLink to={"users"}>
                            <HiUsers />
                            {toggle && (<span>Users</span>)}
                        </NavLink></div>
                        <div className="nav-link" onClick={() => setShowCourse(false)}><NavLink to={"accounts"}>
                            <RiAccountBoxLine />
                            {toggle && (<span>Accounts</span>)}
                        </NavLink></div>
                        <div className="nav-link nav-course " onClick={showCourses}>
                            <NavLink to={"level1"}>
                                <div className="course-left">
                                    <SiCoursera />
                                    {toggle && (<span>Course</span>)}
                                </div>
                                {toggle && (<div className="course-right"><BsChevronDown /></div>)}
                            </NavLink>
                        </div>
                        {showCourse ? (
                            <>
                                <div className="nav-link">
                                    <NavLink to={"level1"}>
                                        <BiBookAlt />
                                        {toggle && (<span>Level 1</span>)}
                                    </NavLink>
                                </div>
                                <div className="nav-link">
                                    <NavLink to={"level2"}>
                                        <BiBookAlt />
                                        {toggle && (<span>Level 2</span>)}
                                    </NavLink>
                                </div>
                            </>
                        )
                            : ""}
                        {/* <div className="nav-link"><NavLink to={"payments"}>
                            <MdPayment />
                            {toggle && (<span>Payments</span>)}
                        </NavLink></div> */}
                        <div className="nav-link" onClick={() => setShowCourse(false)}><NavLink to={"feedback"}>
                            <VscFeedback />
                            {toggle && (<span>Feedback</span>)}
                        </NavLink></div>
                        <div className="nav-link" onClick={() => setShowCourse(false)}><NavLink to={"blog"}>
                            <BiLogoBlogger />
                            {toggle && (<span>Blog</span>)}
                        </NavLink></div>
                    </div>
                </div>
                <div className={toggle ? "bot-nav" : "bot-nav-small"}>
                    <div className="settings">
                        <button>
                            <IoSettingsOutline className="settings-icon" />
                            {toggle && (<span>Settings</span>)}
                        </button>
                    </div>
                    <div className="log-out">
                        <button onClick={handleLogout}>
                            <RiLogoutCircleRLine className="logout-icon" />
                            {toggle && (<span>Log Out</span>)}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation;