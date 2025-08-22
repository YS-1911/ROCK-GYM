import React from "react";
import { useEffect } from "react";
import Customers from '../components/customers.jsx';
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import "../css/programing.css";
import { NavLink, Link } from "react-router";


const Programing = () => {

    useEffect(() => {
        const filterButtons = document.querySelectorAll(".filter-btn");
        const projectCards = document.querySelectorAll(".project-card");

        const handleClick = (button) => () => {
            const filterValue = button.dataset.filter;
            projectCards.forEach((card) => {
                if (card.dataset.category === filterValue) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
        };

        // ربط الأحداث
        filterButtons.forEach((button) =>
            button.addEventListener("click", handleClick(button))
        );

        // التنظيف عند unmount
        return () => {
            filterButtons.forEach((button) =>
                button.removeEventListener("click", handleClick(button))
            );
        };
    }, []);

    return (
        <div>
            <Nav />
            <>
                <section className="programing">
                    <div className="container">
                        <div className="text_programing d-flex justify-content-center align-items-center flex-column">
                            <div className="text-center d-flex justify-content-center align-items-center" data-aos="fade-up">
                                <div className="marker mx-2" />
                                <h5 className="text-center">برامج التدريب</h5>
                            </div>
                            <h2 className="text-center mt-2" data-aos="fade-up" data-aos-duration="2000">أسعار برامج تدريب ROCK GYM</h2>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10 d-flex justify-content-center align-items-center mx-auto my-3">
                            <div className="filter-section my-3 text-center">
                                <a className="btn filter-btn  active m-2" data-filter="fitness">
                                    برامج الفتنس
                                </a>
                                <a className="btn filter-btn  m-2" data-filter="slimming">
                                    برامج التخسيس
                                </a>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center align-items-stretch">
                            <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-stretch mb-4 mb-lg-0 mb-md-0">
                                <div
                                    className="project-card project-card-1"
                                    data-category="fitness"
                                >
                                    <div className="d-flex flex-column h-100">
                                        <div className="Starter mb-4 d-flex justify-content-center align-items-center">
                                            Starter
                                        </div>
                                        <div className="pricing">
                                            <h2 className="my-3 price-h2 ">
                                                {" "}
                                                200 <span>EGP</span>
                                            </h2>
                                        </div>
                                        <p>اشتراك فتنس لمده شهر يوم و يوم باجمالي 13 حصه </p>
                                        <div className="line my-4" />
                                        <div className="include ">
                                            <h5>يشمل:</h5>
                                            <ul className="list-unstyled">
                                                <li >
                                                    <img src="../../image/check-solid-full.svg" alt="" loading="lazy"/>13 حصه
                                                </li>
                                                <li>
                                                    <img src="../../image/check-solid-full.svg" alt="" loading="lazy"/> 3 حصص في الاسبوع
                                                </li>
                                                <li>
                                                    <img src="../../image/check-solid-full.svg" alt="" loading="lazy"/> 1 حصه في اليوم
                                                </li>
                                                <li>
                                                    <img src="../../image/check-solid-full.svg" alt="" loading="lazy"/>
                                                    نظام تمرين تحت اشراف المدرب
                                                </li>
                                            </ul>
                                        </div>
                                        <Link
                                            to="/contact"
                                            className="btn1 text-decoration-none mt-5  d-flex justify-content-center align-items-center text-center"
                                        >
                                            <span className="btn-text-one">تواصل معنا الان</span>
                                            <span className="btn-text-two"> تواصل معنا الان</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-stretch">
                                <div
                                    className="project-card project-card-2"
                                    data-category="fitness"
                                >
                                    <div className="Starter mb-4 d-flex justify-content-center align-items-center">
                                        Professional
                                    </div>
                                    <div className="pricing">
                                        <h2 className="my-3 price-h2 ">
                                            {" "}
                                            250 <span>EGP</span>
                                        </h2>
                                    </div>
                                    <p>اشتراك فتنس لمده شهر كل يوم باجمالي 26 حصه </p>
                                    <div className="line my-4" />
                                    <div className="include">
                                        <h5>يشمل:</h5>
                                        <ul className="list-unstyled">
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt="" loading="lazy"/> 26 حصه
                                            </li>
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt=""loading="lazy" /> 6 حصص في الاسبوع
                                            </li>
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt="" loading="lazy"/> 1 حصه في اليوم
                                            </li>
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt="" loading="lazy"/>
                                                نظام تمرين تحت اشراف المدرب
                                            </li>
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt=""loading="lazy" />
                                                تطور اسرع{" "}
                                            </li>
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt=""loading="lazy" />
                                                نتائج افضل
                                            </li>
                                        </ul>
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="btn1 text-decoration-none mt-5  d-flex justify-content-center align-items-center text-center"
                                    >
                                        <span className="btn-text-one">تواصل معنا الان</span>
                                        <span className="btn-text-two"> تواصل معنا الان</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row  d-flex justify-content-center align-items-stretch">
                            <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-stretch mb-4 mb-lg-0 mb-md-0">
                                <div
                                    className="project-card project-card-1 hidden"
                                    data-category="slimming"
                                >
                                    <div className="d-flex flex-column h-100">
                                        <div className="Starter mb-4 d-flex justify-content-center align-items-center">
                                            Starter
                                        </div>
                                        <div className="pricing">
                                            <h2 className="my-3 price-h2 ">
                                                300 <span>EGP</span>
                                            </h2>
                                        </div>
                                        <p>اشتراك تخسيس لمده شهر يوم و يوم باجمالي 13 حصه </p>
                                        <div className="line my-4" />
                                        <div className="include ">
                                            <h5>يشمل:</h5>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <img src="../../image/check-solid-full.svg" alt=""loading="lazy" /> 13 حصه
                                                </li>
                                                <li>
                                                    <img src="../../image/check-solid-full.svg" alt="" loading="lazy"/> 3 حصص في الاسبوع
                                                </li>
                                                <li>
                                                    <img src="../../image/check-solid-full.svg" alt="" loading="lazy"/> 1 حصه في اليوم
                                                </li>
                                                <li>
                                                    <img src="../../image/check-solid-full.svg" alt="" loading="lazy"/>حساب BMI
                                                </li>
                                                <li>
                                                    <img src="../../image/check-solid-full.svg" alt="" loading="lazy"/> نظام غذائي
                                                </li>
                                                <li>
                                                    <img src="../../image/check-solid-full.svg" alt="" loading="lazy" /> متابعة نزول الوزن كل 15 يوم
                                                </li>
                                                <li>
                                                    <img src="../../image/check-solid-full.svg" alt=""  loading="lazy"/>
                                                    نظام تمرين تحت اشراف المدرب
                                                </li>
                                            </ul>
                                        </div>
                                        <Link
                                            to="/contact"
                                            className="btn1 text-decoration-none mt-5  d-flex justify-content-center align-items-center text-center"
                                        >
                                            <span className="btn-text-one">تواصل معنا الان</span>
                                            <span className="btn-text-two"> تواصل معنا الان</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-stretch">
                                <div
                                    className="project-card project-card-2 hidden"
                                    data-category="slimming"
                                >
                                    <div className="Starter mb-4 d-flex justify-content-center align-items-center">
                                        Professional
                                    </div>
                                    <div className="pricing">
                                        <h2 className="my-3 price-h2 ">
                                            {" "}
                                            500 <span>EGP</span>
                                        </h2>
                                    </div>
                                    <p>اشتراك تخسيس لمده شهر كل يوم باجمالي 26 حصه </p>
                                    <div className="line my-4" />
                                    <div className="include">
                                        <h5>يشمل:</h5>
                                        <ul className="list-unstyled">
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt=""  loading="lazy"/> 26 حصه
                                            </li>
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt=""  loading="lazy"/> 6 حصص في الاسبوع
                                            </li>
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt=""  loading="lazy"/> 1 حصه في اليوم
                                            </li>
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt=""  loading="lazy"/>حساب BMI
                                            </li>
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt=""  loading="lazy"/> نظام غذائي
                                            </li>
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt=""  loading="lazy"/> متابعة نزول الوزن كل 15 يوم
                                            </li>
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt=""  loading="lazy"/>
                                                نظام تمرين تحت اشراف المدرب
                                            </li>
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt=""  loading="lazy"/>
                                                تطور اسرع{" "}
                                            </li>
                                            <li>
                                                <img src="../../image/check-solid-full.svg" alt=""  loading="lazy"/>
                                                نتائج افضل
                                            </li>
                                        </ul>
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="btn1 text-decoration-none mt-5  d-flex justify-content-center align-items-center text-center"
                                    >
                                        <span className="btn-text-one">تواصل معنا الان</span>
                                        <span className="btn-text-two"> تواصل معنا الان</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ? customers  */}
                <Customers />
            </>

            <Footer />
        </div>
    );
};
export default Programing;
