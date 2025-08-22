import React from 'react';
// Nav component is imported to be used in the About page
import Nav from '../components/nav.jsx';
// Footer component is imported to be used in the About page
import Footer from "../components/footer.jsx";
// UpgradeWithUs component is imported to be used in the About page
import UpgradeWithUs from '../components/upgrade_with_us.jsx';
import UpgradeYourFitness from '../components/Upgrade_your_fitness.jsx';
//  Machine component is imported to be used in the About page
import Machine from '../components/machine.jsx';
// Benefits component is imported to be used in the About page
import Benefits from '../components/Benefits.jsx';
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
                <Benefits />
                {/* UpgradeWithUs */}
                <UpgradeWithUs />
                {/* machine  */}
                <Machine />

                {/* UpgradeYourFitness */}
                <UpgradeYourFitness />

            </section>
            <Footer />
        </div>
    );
}

export default About;
