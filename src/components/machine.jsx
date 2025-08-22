import React from 'react';
//  NavLink component is imported to be used in the About page
import { NavLink } from "react-router-dom";
// Slider component is imported to be used in the About page
import Slider from '../components/slider.jsx';


const Machine = () => {
    return (
        <div>
                            <div className="container my-5 ">
                    <div className="machine_rock">
                        <div className="row d-flex justify-content-center ">
                            <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start align-items-center order-2 order-lg-1 mt-5 mt-lg-0 px-lg-5">
                                <div className="machine_rock_text" data-aos="fade-up" data-aos-duration="1000">
                                    <h3 className='title-about-machine d-flex align-items-center' ><div className="marker mx-2"></div> معدات ROCK GYM </h3>
                                    <p>
                                        نحن نوفر لك مجموعة واسعة من الأجهزة الرياضية المتطورة التي تناسب جميع احتياجاتك.
                                        <br />
                                        سواء كنت تسعى لتمارين القوة، الكارديو، أو حتى إعادة التأهيل، ستجد لدينا كل ما يساعدك على الوصول إلى هدفك بسرعة وكفاءة.
                                    </p>
                                    <ul className="mx-4">
                                        <li>أجهزة كارديو حديثة</li>
                                        <li>معدات تمارين القوة</li>
                                        <li>مساحات واسعة للتمرين</li>
                                        <li>بيئة رياضية مريحة</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2 ">
                                <div className="machine_rock_image">
                                    <Slider />
                                </div>
                            </div>
                        </div>
                        <div className="back_blur" />
                    </div>
                    <div className="machine_rock my-5">
                        <div className="row d-flex justify-content-center ">
                            <div className="col-lg-6 col-md-12 col-sm-12 ">
                                <div className="machine_rock_image">
                                    <img src="../../image/photo_logo.webp" className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start align-items-center order-2 order-lg-1 mt-5 mt-lg-0 px-lg-5">
                                <div className="machine_rock_text" data-aos="fade-up" data-aos-duration="1000">
                                    <h3 className='title-about-machine d-flex align-items-center' ><div className="marker mx-2"></div> مدربين ROCK GYM </h3>
                                    <p >
                                        فريقنا من الخبراء معك في كل خطوة من رحلتك!
                                        <br />
                                        نحن نقدم برامج تدريبية مخصصة تم تصميمها خصيصًا لتناسب أهدافك واحتياجاتك الفردية.
                                        <br />
                                        سواء كنت تسعى لبناء لياقة بدنية قوية، تحسين أدائك الرياضي، أو الحفاظ على نمط حياة صحي، نحن هنا لدعمك.
                                        <br />
                                    </p>
                                    <ul className="mx-4">
                                        <li>تدريب شخصي مخصص</li>
                                        <li>برامج تدريبية متنوعة</li>
                                        <li>استشارات غذائية</li>
                                        <li>دعم مستمر</li>

                                    </ul>
                                    <div className="btn_ben text-center mt-4 d-flex flex-column justify-content-start align-items-start ">
                                        <NavLink to="/coaches" className="btn1 text-decoration-none">
                                            <span className="btn-text-one">تواصل مع المدربين</span>
                                            <span className="btn-text-two">تواصل مع المدربين</span>
                                        </NavLink>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="back_blur" />

                    </div>
                </div>

        </div>
    );
}

export default Machine;
