import React from 'react';
import '../css/footer.css';
import { Link, NavLink } from "react-router";

const Footer = () => {
    return (
        <div className="footer">
            <footer className="text-center text-lg-start text-white">
            
                {/* Section: Links  */}
                <section className="pt-4">
                    <div className="container_fluid px-3 text-center text-md-start ">
                        {/* Grid row */}
                        <div className="row">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold text-center">
                                    <Link className="navbar-brand fw-bold me-auto " to="/">
                                        {" "}
                                        ROCK GYM <img src="image/logo.png" alt="" />
                                    </Link>
                                </h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block  "
                                    style={{
                                        width: "100%",

                                        height: 2,
                                    }}
                                />
                                <p className="text-center">
                                    تجربة تدريبية مميزة تجمع بين الأداء الرياضي العالي والراحة
                                    في بيئة محفزة.
                                </p>
                                <div className="d-flex justify-content-center align-items-center social_media">
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100068888802339"
                                        className="text-white  text-decoration-none"
                                    >
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/mohmed.fouda9358?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                        className="text-white me-4 text-decoration-none"
                                    >
                                        <i className="fab fa-instagram" />
                                    </a>
                                    <a
                                        href="https://wa.me/+201090319905"
                                        className="text-white me-4 text-decoration-none"
                                    >
                                        <i className="fab fa-whatsapp" />
                                    </a>
                                    <a
                                        href="mailto:mohamedfouda1701@gmail.com"
                                        className="text-white me-4 text-decoration-none"
                                    >
                                        <i className="fa-solid fa-envelope" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-center">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold link_important_footer">اللينكات المهمة</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{
                                        width: 60,
                                        backgroundColor: "#7fffd1",
                                        height: 2,
                                    }}
                                />
                                <p>
                                    <NavLink to="/contact" className="link_footer text-decoration-none">
                                        تواصل معنا
                                    </NavLink>
                                </p>
                                <p>
                                    <NavLink to="/about" className="link_footer text-decoration-none">
                                        من نحن
                                    </NavLink>
                                </p>
                                <p>
                                    <NavLink to="/programing" className="link_footer text-decoration-none">
                                        برامج التدريب
                                    </NavLink>
                                </p>
                                <p>
                                    <NavLink to="/article" className="link_footer text-decoration-none">
                                        المقالات
                                    </NavLink>
                                </p>
                                <p>
                                    <NavLink to="/coaches" className="link_footer text-decoration-none">
                                        المدربين
                                    </NavLink>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold link_important_footer">اتصل بنا</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{
                                        width: 60,
                                        backgroundColor: "#7fffd1",
                                        height: 2,
                                    }}
                                />
                                <p>
                                    {" "}
                                    الدقهلية/السنبلاوين/كفرالروك{" "}
                                    <i className="fas fa-home mx-2" />
                                </p>
                                <p>
                                    {" "}
                                    mohamedfouda1701@gmail.com{" "}
                                    <i className="fas fa-envelope mx-2" />{" "}
                                </p>
                                <p>
                                    01090319905 <i className="fas fa-phone mx-2" />
                                </p>
                                <p>
                                    {" "}
                                    01020937691 <i className="fas fa-print mx-2" />
                                </p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}
                {/* Copyright */}
                <div
                    className="d-flex justify-content-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    <div className="mx-3">
                        {" "}
                        © 2025 Copyright:
                        <a className="text-white">RockGym</a>
                    </div>
                    <div className="mx-3">
                        <p>
                            Built by{" "}
                            <a href="https://www.facebook.com/youssef.mohammed.52831666/">
                                Youssef_Mohamed
                            </a>
                        </p>
                    </div>
                </div>
                {/* Copyright */}
            </footer>

        </div>
    );
}

export default Footer;
