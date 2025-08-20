import React from 'react';
// Nav component is imported to be used in the About page
import Nav from '../components/nav.jsx';
// Footer component is imported to be used in the About page
import Footer from "../components/footer.jsx";
//  NavLink component is imported to be used in the About page
import { NavLink } from "react-router-dom";
// UpgradeWithUs component is imported to be used in the About page
import UpgradeWithUs from '../components/upgrade_with_us.jsx';
import UpgradeYourFitness from '../components/Upgrade_your_fitness.jsx';
// Slider component is imported to be used in the About page
import Slider from '../components/slider.jsx';
// Importing CSS styles for the About page
import '../css/about.css';


const About = () => {
    return (
        <div>
            <Nav />
            {/* about */}
            <section className="about my-5 pt-5">
                {/* text about */}
                <div className="text_article text-center my-4 ">
                    <div className="text-center d-flex justify-content-center align-items-center" data-aos="fade-up">
                        <div className="marker mx-2" />
                        <h5 className="text-center">من نحن</h5>
                    </div>
                    <h5 className="d-flex justify-content-center align-items-center mt-2 px-3" data-aos="fade-up" data-aos-duration="2000">
                        نحن  ROCK GYM صالة رياضية متكاملة تقدم لك كل ما تحتاجه لتحقيق أهدافك الصحية والرياضية.
                        <br />
                        من معدات حديثة إلى برامج تدريبية مخصصة، نحن هنا لدعمك في كل خطوة.
                    </h5>
                    <div className="feater_headerd d-flex flex-wrap justify-content-center my-4">
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

                </div>
                {/* image about */}
                <div className="hero_image-wrap mx-lg-5 mx-md-2 mx-sm-2 mt-5">
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
                {/* ? Benefits */}
                <section className="benefits ">
                    <div className="container">
                        <div className="title_benefits text-center" data-aos="fade-up">
                            <div className="d-flex justify-content-center align-items-center mb-3" >
                                <div className="marker" />
                                <h4 className="mx-2">المميزات</h4>
                            </div>
                            <h3>كل ما تحتاجه لتحقيق أهدافك</h3>
                        </div>
                        <div className="row mt-4 d-flex justify-content-center align-items-center">
                            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-3">
                                <div className="benefits_item px-5 py-4 d-flex flex-column justify-content-center align-items-center">
                                    <div className="icon_benefits">
                                        <img
                                            src="image/67b1cb393fcfacb48adec00f_icon-chat.svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="title_benefits_item">
                                        <h4 className="text-center my-3">ساعات عمل مرنة</h4>
                                        <p>
                                            صالة مفتوحة على مدار اليوم لتناسب جدولك الشخصي والمهني
                                        </p>
                                    </div>
                                    <div className="back_blur" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-3">
                                <div className="benefits_item px-5 py-4 d-flex flex-column justify-content-center align-items-center">
                                    <div className="icon_benefits">
                                        <img
                                            src="image/67b1cb397fe8153789a2b2b5_icon-barbell.svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="title_benefits_item">
                                        <h4 className="text-center my-3">معدات حديثة ومتطورة </h4>
                                        <p>أجهزة تمارين القوة والكارديو من أفضل الماركات .</p>
                                    </div>
                                    <div className="back_blur" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center  my-3">
                                <div className="benefits_item px-5 py-4 d-flex flex-column justify-content-center align-items-center">
                                    <div className="icon_benefits">
                                        <img
                                            src="image/67b1cb39056bd817f16a69a0_icon-link.svg"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="title_benefits_item">
                                        <h4 className="text-center my-3">تدريبات أذكى</h4>
                                        <p>
                                            صُممت برامجنا التدريبية بناءً على أحدث الأساليب العلمية
                                            لرفع كفاءتك
                                        </p>
                                    </div>
                                    <div className="back_blur" />
                                </div>
                            </div>
                            {/* فترة الرجال */}
                            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-3">
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
                                            يوميًا من <strong>5:00 عصرا</strong> حتى <strong>11:30 مساءً</strong><br />
                                            استمتع بتجهيزات حديثة وأجواء محفزة للتمرين. <br />
                                            مع مساحات واسعة ومعدات متطورة<br />
                                            بيئة رياضية مريحة وممتعه مخصصة للرجال فقط.
                                        </p>
                                    </div>
                                    <div className="back_blur" />
                                </div>
                            </div>
                            {/* فترة النساء */}
                            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-3">
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

                    </div>
                </section>
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
                                    <img src="../../image/photo_logo.jpg" className="img-fluid" alt="" />
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
                <UpgradeYourFitness />

            </section>
            <Footer />
        </div>
    );
}

export default About;
