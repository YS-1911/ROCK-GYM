import React from 'react';
import { NavLink } from "react-router";

const UpgradeYourFitness = () => {
    return (
        <div>
            <section className="upgrade ">
                <div className="upgrade_your_fitness m-lg-5 m-md-5 m-sm-3">
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center text_upgrade ">
                                <div className="">
                                    <h2 className="text-center">
                                        ارتقِ بلياقتك مع برنامج تدريب احترافي
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="btn_ben text-center mt-4 d-flex align-items-center justify-content-end">
                                    <NavLink to="/programing" className="btn1 text-decoration-none">
                                        <span className="btn-text-one">اختر برنامجك الآن</span>
                                        <span className="btn-text-two">اختر برنامجك الآن</span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="back_blur" />
                </div>
            </section>

        </div>
    );
}

export default UpgradeYourFitness;
