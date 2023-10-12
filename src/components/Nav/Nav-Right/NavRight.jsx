import React from "react";
import pp from "../../../Images/pp.jpg";
import "./NavRight.css";
import { useProfileContext } from "../../Useful/ProfileContext";

function NavRight() {
  const { profile } = useProfileContext();

  return (
    <>
      <div className="navright-container">
        {/* <div className="mail-nav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"><path stroke="#3F3F46" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="m3.323 8.333 8.104 5.48a2.03 2.03 0 0 0 2.278 0l8.104-5.48M5.377 19.792h14.378c1.134 0 2.054-.933 2.054-2.084V7.292c0-1.15-.92-2.084-2.054-2.084H5.377c-1.134 0-2.054.933-2.054 2.084v10.416c0 1.151.92 2.084 2.054 2.084Z" /></svg>
                </div>
                <div className="notification-nav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" fill="none"><path stroke="#3F3F46" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15.998 17.708h5.135l-1.442-1.463a2.132 2.132 0 0 1-.612-1.497v-3.29c0-2.721-1.714-5.036-4.107-5.894v-.356c0-1.15-.92-2.083-2.054-2.083-1.135 0-2.054.933-2.054 2.083v.356c-2.394.858-4.108 3.173-4.108 5.894v3.29c0 .562-.22 1.1-.612 1.497l-1.442 1.463h5.135m6.162 0v1.042c0 1.726-1.38 3.125-3.082 3.125-1.701 0-3.08-1.4-3.08-3.125v-1.042m6.162 0H9.837" /></svg>
                </div> */}
        <div className="user-nav">
          <div className="user-img">
            <img src={pp} alt="User" />
          </div>
          <div className="user-text">
            <div className="user-name">{profile}</div>
            <div className="user-role">Admin</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavRight;
