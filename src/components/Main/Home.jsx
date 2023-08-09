import React from "react";
import "../../App.css";
import Navigation from "../Nav/Nav-Left/Navigation";
import NavRight from "../Nav/Nav-Right/NavRight";
import { Outlet } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="main-container">
                <div className="left-content">
                    <Navigation />
                </div>
                <div className="right-content">
                    <NavRight />
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Home;