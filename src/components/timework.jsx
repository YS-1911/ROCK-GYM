import React from 'react';
import { NavLink } from "react-router";

const TimeWork = () => {
    return (
        <div>
            <section className="benefits my-5 bt-5">
                <div className="container">
                    <div className="title_benefits text-center" data-aos="fade-up">
                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <div className="marker" />
                            <h4 className="mx-2">مواعيد العمل</h4>
                        </div>
                        <h3>جدول فترات الدخول للرجال والنساء</h3>
                    </div>
                    <div className="row mt-4 d-flex justify-content-center align-items-center">
                        {/* فترة الرجال */}
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-3">
                            <div className="benefits_item_work  px-5 py-4 d-flex flex-column justify-content-center align-items-center">
                                <div className="icon_benefits">
                                    <img
                                        src="../../image/gender-male.svg"
                                        alt="رجال"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="title_benefits_item">
                                    <h4 className="text-center my-3">فترة الرجال</h4>
                                    <p className="text-center">
                                        يوميًا من <strong>5:00 عصرا</strong> حتى <strong>12:30 مساءً</strong><br />
                                        استمتع بتجهيزات حديثة وأجواء محفزة للتمرين. <br />
                                        مع مساحات واسعة ومعدات متطورة<br />
                                        بيئة رياضية مريحة وممتعه مخصصة للرجال فقط.
                                    </p>
                                </div>
                                <div className="back_blur" />
                            </div>
                        </div>
                        {/* فترة النساء */}
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-3">
                            <div className="benefits_item_work  px-5 py-4 d-flex flex-column justify-content-center align-items-center">
                                <div className="icon_benefits">
                                    <img
                                        src="image/gender-female.svg"
                                        alt="نساء"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="title_benefits_item">
                                    <h4 className="text-center my-3">فترة النساء</h4>
                                    <p className="text-center">
                                        يوميًا من <strong>1:00 ظهرا</strong> حتى <strong>4:00 عصرا</strong><br />
                                        اضافه  الي السبت والاثنين و الاربعاء من <br />
                                        <strong>10:00 صباحا</strong> حتى <strong>12:00 ظهرا</strong><br />
                                        بيئة رياضية مريحة وآمنة، مخصصة للسيدات فقط.
                                    </p>
                                </div>
                                <div className="back_blur" />
                            </div>
                        </div>
                    </div>
                    <div className="btn_ben text-center mt-4 d-flex justify-content-center">
                        <NavLink to="/about" className="btn1 text-decoration-none">
                            <span className="btn-text-one">مزيد من التفاصيل</span>
                            <span className="btn-text-two">مزيد من التفاصيل</span>
                        </NavLink>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default TimeWork;
