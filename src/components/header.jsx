import React from 'react';
import { NavLink } from "react-router";
import Nav from "../components/nav.jsx";

const Header = () => {
    return (
        <div>
            <section className="header my-5 pt-5">
                <div className="container mt-3 pt-2">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div className="header_text text-center ">
                            <h1
                                className="mb-2"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                Rock Gym
                            </h1>
                            <h2
                                className="mb-4 my-2"
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                تجربة تدريبية مميزة تجمع بين الأداء الرياضي العالي والراحة في
                                بيئة محفزة.
                            </h2>
                            <div className="p_header ">
                                <p
                                    className="text-center"
                                    data-aos="fade-left"
                                    data-aos-duration="3000"
                                >
                                    اكتشف صالة جيم متكاملة تجمع بين أحدث الأجهزة الرياضية وأفضل
                                    التجهيزات لتجربة تمرين لا مثيل لها. مع مساحات واسعة ومعدات
                                    متطورة تناسب جميع مستويات اللياقة.
                                </p>
                            </div>
                            <div className="feater_headerd d-flex flex-wrap justify-content-center">
                                <p className="mx-4">
                                    {" "}
                                    زيادة في الأداء بنسبة <span>85%</span>{" "}
                                    <img
                                        src="image/67b1cbba559397ad54aa9876_icon-trend-line.svg"
                                        alt=""
                                        loading="lazy"
                                    />{" "}
                                </p>
                                <p className="mx-4">
                                    {" "}
                                    نتائج أسرع <span>3x</span>{" "}
                                    <img
                                        src="image/67b1f4817fe8153789c21174_icon-stopwatch.svg"
                                        alt=""
                                        loading="lazy"
                                    />{" "}
                                </p>
                                <p className="mx-4">
                                    {" "}
                                    تمارين رياضية مُحسّنة <span>100%</span>{" "}
                                    <img
                                        src="image/67b1f48196f0dbcc96836e93_icon-sparkle.svg"
                                        alt=""
                                        loading="lazy"
                                    />{" "}
                                </p>
                            </div>
                            <NavLink
                                to="/programing"
                                className="btn1 text-decoration-none mt-4"
                            >
                                <span className="btn-text-one">ابدأ الآن</span>
                                <span className="btn-text-two">ابدأ الآن</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="hero_image-wrap mx-lg-5 mx-md-2 mx-sm-2">
                    <div className="hero_imge_container">
                        <img
                            src="../../image/photo_rockgym.webp"
                            className="img-fluid u-cover-absolute"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <img
                        src="image/67b1cb39e3a3611ed628647b_hero-ui-3.svg"
                        className="home-hero_graphic is-bottom-right"
                        alt=""
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    />
                    <img
                        src="image/67b1cb39af3e8016ee2bcd5d_hero-ui-2.svg"
                        className="home-hero_graphic is-top-right"
                        alt=""
                        loading="lazy"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    />
                    <img
                        src="image/hero-ui-1.svg"
                        className="home-hero_graphic is-top-left"
                        alt=""
                        data-aos="fade-up"
                    />
                </div>
            </section>

        </div>
    );
}

export default Header;
