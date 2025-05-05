import React, { useState } from "react";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import "../css/Coaches.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Lightbox imports
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Coaches = () => {
    // Lightbox state for Coach Fouda
    const [openFouda, setOpenFouda] = useState(false);
    const [indexFouda, setIndexFouda] = useState(0);
    const certificateImages = [
        '../../image/certi-mohamed-2.jpg',
        '../../image/certi-mohamed-1.jpg',
        '../../image/certi-mohamed-3.jpg',

    ];

    // Lightbox state for Coach Mariam
    const [openMariam, setOpenMariam] = useState(false);
    const [indexMariam, setIndexMariam] = useState(0);
    const certificateImages2 = [
        '../../image/certi-mariam-1.jpg',
        '../../image/certi-mariam-2.jpg',
        '../../image/certi-mariam-3.jpg',
        '../../image/certi-mariam-4.jpg',
        '../../image/certi-mariam-5.jpg',
    ];

    return (
        <div>
            <Nav />
            <section className="coaches">
                <div className="container_fluid">
                    <div className="text_coaches d-flex flex-column align-items-center justify-content-center">
                        <div
                            className="text-center d-flex justify-content-center align-items-center"
                            data-aos="fade-up"
                        >
                            <div className="marker mx-2" />
                            <h5 className="text-center">المدربين</h5>
                        </div>
                        <h2
                            className="d-flex justify-content-center align-items-center mt-4 text-center"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            نقدّم لك أفضل المدربين المتخصصين في مجالي التدريب والتغذية
                        </h2>
                    </div>
                    <div className="feater_headerd d-flex flex-wrap justify-content-center">
                        <p className="mx-4">
                            <img
                                src="image/67b1cbba559397ad54aa9876_icon-trend-line.svg"
                                alt=""
                                loading="lazy"
                            />
                            زيادة في الأداء بنسبة <span>85%</span>
                        </p>
                        <p className="mx-4">
                            <img
                                src="image/67b1f4817fe8153789c21174_icon-stopwatch.svg"
                                alt=""
                                loading="lazy"
                            />
                            نتائج أسرع <span>3x</span>
                        </p>
                        <p className="mx-4">
                            <img
                                src="image/67b1f48196f0dbcc96836e93_icon-sparkle.svg"
                                alt=""
                                loading="lazy"
                            />
                            تمارين رياضية مُحسّنة <span>100%</span>
                        </p>
                    </div>
                    {/* Coach Fouda Card */}
                    <section className="coaches_container container">
                        <div className="card_coaches_container mx-lg-4 mx-md-3 mx-2">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-start align-items-start order-2 order-lg-1 order-md-1  p-md-3 p-2">
                                    <div className="text_card_coaches d-flex flex-column justify-content-center align-items-start w-100">
                                        <div className="my-3" data-aos="fade-right" data-aos-duration="1000">
                                            <div className="text-center d-flex justify-content-start align-items-center ">
                                                <div className="marker ms-2" />
                                                <h5 className="text-center mb-1">ك / محمد أحمد فوده</h5>
                                            </div>
                                        </div>
                                        <div className="w-100 mt-2" data-aos="fade-left" data-aos-duration="1000">
                                            <h6 className="fw-bold">الخبرات:</h6>
                                            <ul className="list-styled">
                                                <li className="mt-1 mx-2">مدرب كمال أجسام محترف</li>
                                                <li className="mt-1 mx-2">خبرة اكثر من 10 سنوات في مجال التدريب

                                                </li>
                                                <li className="mt-1 mx-2">حاصل على العديد من الشهادات في مجال التدريب والتغذية</li>
                                                <li className="mt-1 mx-2">لديه خبرة واسعة في تصميم برامج تدريبية مخصصة</li>
                                            </ul>
                                        </div>
                                        <div className="w-100 mt-3">
                                            <h6 className="fw-bold mb-2">الشهادات:</h6>
                                            <Swiper
                                                modules={[Autoplay]}
                                                spaceBetween={15}
                                                slidesPerView={'auto'}
                                                autoplay={{ delay: 1000, disableOnInteraction: false }}
                                                loop={true}
                                                className="certificates-swiper"
                                            >
                                                {certificateImages.map((src, idx) => (
                                                    <SwiperSlide key={idx} className="certificate-slide">
                                                        <div
                                                            className="certificate-card"
                                                            onClick={() => { setIndexFouda(idx); setOpenFouda(true); }}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <img src={src} alt={`شهادة ${idx + 1}`} />
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            <Lightbox
                                                open={openFouda}
                                                close={() => setOpenFouda(false)}
                                                index={indexFouda}
                                                slides={certificateImages.map(src => ({ src }))}
                                            />
                                        </div>
                                        {/* وسائل التواصل */}
                                        <div className="social_coaches mt-5"   >
                                            <h6 className="fw-bold my-3">تواصل معي:</h6>
                                            <div className="d-flex social_media ">
                                                <a
                                                    href="https://www.facebook.com/profile.php?id=100003725517561"
                                                    className="text-white text-decoration-none"
                                                >
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a
                                                    href="https://www.instagram.com/mohmed.fouda9358"
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
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center order-1 order-lg-2 order-md-2">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img
                                            src="../../image/coache-mohamed.jpg"
                                            alt="Coach Mohamed Ahmed Foda portrait"
                                            className="img-fluid img_coaches"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="back_blur" />
                        </div>
                    </section>
                    {/* Coach Mariam Card */}
                    <section className="coaches_container container">
                        <div className="card_coaches_container mx-lg-4 mx-md-3 mx-2">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center ">
                                    <div className="d-flex justify-content-center align-items-center ms-lg-auto">
                                        <img
                                            src="../../image/d-mariam.jpg"
                                            alt="Coach Mariam Atef portrait"
                                            className="img-fluid img_coaches"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-start align-items-start  p-lg-5 p-md-3 p-2">
                                    <div className="text_card_coaches d-flex flex-column justify-content-center align-items-start w-100">
                                        <div className="my-3" data-aos="fade-right" data-aos-duration="1000">
                                            <div className="text-center d-flex justify-content-start align-items-center ">
                                                <div className="marker ms-2" />
                                                <h5 className="text-center mb-1">د / مريم عاطف</h5>
                                            </div>
                                        </div>
                                        <div className="w-100 mt-2" data-aos="fade-left" data-aos-duration="1000">
                                            <h6 className="fw-bold">الخبرات:</h6>
                                            <ul className="list-styled">
                                                <li className="mt-1 mx-2">دكتورة صيدلانية اخصائية التغذية العلاجية والسمنة والنحافة</li>
                                                <li className="mt-1 mx-2"> مدرب شخصي معتمد </li>
                                                <li className="mt-1 mx-2">حاصله على العديد من الشهادات في مجال التدريب والتغذية</li>
                                                <li className="mt-1 mx-2">لديها خبرة واسعة في تصميم برامج تدريبية مخصصة</li>
                                            </ul>
                                        </div>
                                        <div className="w-100 mt-3">
                                            <h6 className="fw-bold mb-2">الشهادات:</h6>
                                            <Swiper
                                                modules={[Autoplay]}
                                                spaceBetween={15}
                                                slidesPerView={'auto'}
                                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                                loop={true}
                                                className="certificates-swiper"
                                            >
                                                {certificateImages2.map((src, idx) => (
                                                    <SwiperSlide key={idx} className="certificate-slide">
                                                        <div
                                                            className="certificate-card"
                                                            onClick={() => { setIndexMariam(idx); setOpenMariam(true); }}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <img src={src} alt={`شهادة ${idx + 1}`} />
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            <Lightbox
                                                open={openMariam}
                                                close={() => setOpenMariam(false)}
                                                index={indexMariam}
                                                slides={certificateImages2.map(src => ({ src }))}
                                            />
                                        </div>
                                        {/* وسائل التواصل */}
                                        <div className="social_coaches mt-5"  >
                                            <h6 className="fw-bold mb-3">تواصل معي:</h6>
                                            <div className="d-flex social_media">
                                                <a
                                                    href="https://www.facebook.com/share/12HWjH8AdE8/"
                                                    className="text-white text-decoration-none"
                                                >
                                                    <i className="fab fa-facebook-f" />
                                                </a>

                                                <a
                                                    href="https://wa.me/message/2RJPQSUBXWX3M1"
                                                    className="text-white me-4 text-decoration-none"
                                                >
                                                    <i className="fab fa-whatsapp" />
                                                </a>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="back_blur" />
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Coaches;
