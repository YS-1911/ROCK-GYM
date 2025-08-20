import React from 'react';
import { NavLink } from "react-router";

const UpgradeWithUs = () => {
    return (
        <div>
            <section className="upgrade">
                <div className="upgrade_your_fitness m-lg-5 m-md-5 m-sm-3">
                    <div className="container d-flex flex-column justify-content-center align-items-center"
                        data-aos="fade-up" data-aos-duration="1000">
                        <div className="text_upgrade ">
                            {/* <h2 className="text-center">ابدا الآن بتحسين صحتك</h2> */}
                            <p className="text-center my-3">
                                تواصل مع مدربينا واحصل علي برنامج تدريبي و غذائي يناسبك
                            </p>
                        </div>
                        <div className="btn_ben text-center mt-4 ">
                            <NavLink
                                to="/coaches"
                                className="btn1 text-decoration-none d-flex justify-content-center align-items-center"
                            >
                                <span className="btn-text-one">تواصل معهم الآن</span>
                                <span className="btn-text-two">تواصل معهم الآن</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="back_blur" />
                </div>

            </section>

        </div>
    );
}

export default UpgradeWithUs;
