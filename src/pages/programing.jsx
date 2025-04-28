import React from "react";
import { useEffect } from "react";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import "../css/programing.css";
import { NavLink , Link } from "react-router";


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
                                                150 <span>EGP</span>
                                            </h2>
                                        </div>
                                        <p>اشتراك فتنس لمده شهر يوم و يوم باجمالي 13 حصه </p>
                                        <div className="line my-4" />
                                        <div className="include ">
                                            <h5>يشمل:</h5>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <i className="fa-solid fa-check" /> 13 حصه
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" /> 3 حصص في الاسبوع
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" /> 1 حصه في اليوم
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
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
                                            200 <span>EGP</span>
                                        </h2>
                                    </div>
                                    <p>اشتراك فتنس لمده شهر كل يوم باجمالي 26 حصه </p>
                                    <div className="line my-4" />
                                    <div className="include">
                                        <h5>يشمل:</h5>
                                        <ul className="list-unstyled">
                                            <li>
                                                <i className="fa-solid fa-check" /> 26 حصه
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" /> 6 حصص في الاسبوع
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" /> 1 حصه في اليوم
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                نظام تمرين تحت اشراف المدرب
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                تطور اسرع{" "}
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
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
                                                    <i className="fa-solid fa-check" /> 13 حصه
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" /> 3 حصص في الاسبوع
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" /> 1 حصه في اليوم
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />حساب BMI
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" /> نظام غذائي 
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" /> متابعة نزول الوزن كل 15 يوم
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
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
                                            400 <span>EGP</span>
                                        </h2>
                                    </div>
                                    <p>اشتراك تخسيس لمده شهر كل يوم باجمالي 26 حصه </p>
                                    <div className="line my-4" />
                                    <div className="include">
                                        <h5>يشمل:</h5>
                                        <ul className="list-unstyled">
                                        <li>
                                                    <i className="fa-solid fa-check" /> 26 حصه
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" /> 6 حصص في الاسبوع
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" /> 1 حصه في اليوم
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />حساب BMI
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" /> نظام غذائي 
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" /> متابعة نزول الوزن كل 15 يوم
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    نظام تمرين تحت اشراف المدرب
                                                </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                تطور اسرع{" "}
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
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
                <div className="container">
                    <div className="customers_text customers">
                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <div className="marker marker_customers " />
                            <h4 className="mx-2">انضم الي مئات المشتركين السعداء!</h4>
                        </div>
                        <div
                            id="carouselExampleInterval"
                            className="carousel slide"
                            data-bs-ride="carousel"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval={10000}>
                                    <h3 className="text-center">
                                        سواء لسه بتبدأ أو عايز ترفع مستواك، Rock Gym هو المكان اللي
                                        هتلاقي فيه الدعم، التحفيز، وأحدث الأنظمة اللي هتوصلك لهدفك
                                        أسرع.
                                    </h3>
                                    <div className="image_cus d-flex justify-content-center align-items-center mt-3">
                                        <img
                                            src="image/jooo.jpg"
                                            alt=""
                                            loading="lazy"
                                            className="img-fluid mx-2"
                                        />
                                        <div className="text_img_cus">
                                            <h4 className="mb-1">ك/ يوسف محمد</h4>
                                            <h4>مشترك</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval={2000}>
                                    <h3 className="text-center">
                                        "أيًا كان هدفك، سواء عايز تخس أو تعضّل أو تزود لياقتك، فـ
                                        Rock Gym هو المكان اللي هيوصلك! أنا شخصيًا بدأت من الصفر،
                                        وشوفت فرق رهيب{" "}
                                    </h3>
                                    <div className="image_cus d-flex justify-content-center align-items-center mt-3">
                                        <img
                                            src="image/mohamedislam.png"
                                            alt=""
                                            loading="lazy"
                                            className="img-fluid mx-2"
                                        />
                                        <div className="text_img_cus">
                                            <h4 className="mb-1">ك/ محمد اسلام</h4>
                                            <h4>مشترك</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleInterval"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleInterval"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        {/*  */}
                        <div className="back_blur" />
                    </div>
                </div>
            </>

            <Footer />
        </div>
    );
};
export default Programing;
