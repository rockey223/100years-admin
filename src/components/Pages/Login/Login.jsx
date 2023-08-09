import React, { useEffect, useState } from "react";
import "./Login.css"
import { InputBar } from "../../Tools/Input/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    const [login, setLogin] = useState({
        adminEmail: "",
        adminPassword: ""
    })



    function handleInput(event) {
        const { name, value } = event.target;

        setLogin(prevV => ({
            ...prevV,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(login);
        axios
            .post(`http://localhost:4000/api/adminLogin`, login, { withCredentials: true })
            .then(res => {
                if (res.data.success === true) {
                    // setIsLoggedIn(() => { return true; });
                    navigate(`/admin`);
                    setLogin({
                        adminEmail: "",
                        adminPassword: "",
                    })
                }
                console.log(res)
            })
            .catch(err => console.log(err));
    }


    return (
        <>
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content">
                        <div className="login-title">
                            <div className="title-1">Welcome</div>
                            <div className="title-2">Please login to Admin Dashboard</div>
                        </div>
                        <div className="form-content">
                            <form>
                                <div className="input-container">
                                    <InputBar
                                        type={"text"}
                                        placeholder={"User Name"}
                                        name={"adminEmail"}
                                        handleInput={handleInput}
                                    />
                                    <InputBar
                                        type={"password"}
                                        placeholder={"Password"}
                                        name={"adminPassword"}
                                        handleInput={handleInput}
                                    />
                                </div>
                                <div className="login-button">
                                    <input
                                        type="submit"
                                        value="Login"
                                        onClick={handleSubmit}

                                    />
                                </div>
                                <div className="form-bottom">
                                    <div className="forgot-password">Forgot Password?</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bottom-wave">
                    <svg width="100%" height="154" viewBox="0 0 1280 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0L53 5.78613C107 11.5723 213 23.1445 320 42.7283C427 62.7572 533 91.2428 640 97.0289C747 102.815 853 85.4566 960 80.1156C1067 74.3295 1173 80.1156 1227 82.7861L1280 85.4566V154H1227C1173 154 1067 154 960 154C853 154 747 154 640 154C533 154 427 154 320 154C213 154 107 154 53 154H0V0Z" fill="#20DF7F" fillOpacity="0.09" />
                    </svg>
                    <svg width="100%" height="154" viewBox="0 0 1280 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 61.6L42.6667 73.92C85.3333 86.24 170.667 110.88 256 104.72C341.333 98.56 426.667 61.6 512 36.96C597.333 12.32 682.667 0 768 0C853.333 0 938.667 12.32 1024 33.88C1109.33 55.44 1194.67 86.24 1237.33 101.64L1280 117.04V154H1237.33C1194.67 154 1109.33 154 1024 154C938.667 154 853.333 154 768 154C682.667 154 597.333 154 512 154C426.667 154 341.333 154 256 154C170.667 154 85.3333 154 42.6667 154H0V61.6Z" fill="#E5E5E5" fillOpacity="0.13" />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Login;