import React from 'react';
import { Link, NavLink } from "react-router";
import "../css/nav.css";

const Nav = () => {
    return (
        <div>
            {/* ? navbar */}
            <nav className="navbar navbar-expand-lg custom-navbar py-3 px-1 fixed-top">
                <div className="container-fluid ">
                    <NavLink className="navbar-brand fw-bold me-auto " to="/">
                        <img src="image/logo.png" alt="" /> Rock
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="تبديل التنقل"
                    >
                        <span className="">
                            <i className="fa-solid fa-bars" />
                        </span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-center "
                        id="navbarNav"
                    >
                        <ul className="navbar-nav mx-auto ">
                            <li className="nav-item d-flex justify-content-center">
                                <NavLink className="nav-link" to="/coaches">
                                    المدربين
                                </NavLink>
                            </li>
                            <li className="nav-item d-flex justify-content-center">
                                <NavLink className="nav-link" to="/article">
                                    المقالات
                                </NavLink>
                            </li>
                            <li className="nav-item d-flex justify-content-center">
                                <NavLink className="nav-link" to="/programing">
                                    برامج التدريب
                                </NavLink>
                            </li>
                            <li className="nav-item d-flex justify-content-center ">
                                <NavLink className="nav-link " to="/about">
                                    من نحن
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ">
                            <li className="nav-item ms-lg-auto m-md-auto m-sm-auto contact-btn">
                                <NavLink
                                    className="nav-link d-flex justify-content-center "
                                    to="/contact"
                                >
                                    تواصل معنا
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* ? header */}

        </div>
    );
}

export default Nav;
