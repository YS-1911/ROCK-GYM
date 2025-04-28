import React from 'react';
import Nav from '../components/nav.jsx';
import Footer from "../components/footer.jsx";
import "../css/contact.css";



const Contact = () => {
    return (
        <div>
            <Nav />
            <>
                {/* contact */}
                <section className="contact">
                    <div className="container">
                        <div className="text_contact ">
                            <div className="text-center d-flex justify-content-center align-items-center" data-aos="fade-up">
                                <div className="marker mx-2" />
                                <h5 className="text-center">تواصل معنا</h5>
                            </div>
                            <h3 className="d-flex justify-content-center align-items-center mt-2" data-aos="fade-up" data-aos-duration="2000">جاهز تبدأ رحلتك الرياضية !</h3>
                        </div>
                        <div
                            className="row g-4 align-items-stretch my-lg-5 my-md-5 my-3"
                            style={{ minHeight: "100%" }}
                        >
                            <div className="col-12 col-md-6 d-flex">
                                <div className="social_contact flex-grow-1 d-flex flex-column w-100">
                                    <h2>تواصل معنا</h2>
                                    <div className="line my-4" />
                                    <div className="contact-info_subhead">الهاتف</div>
                                    <a
                                        href="https://wa.me/+201090319905"
                                        className="text-decoration-none"
                                    >
                                        01090319905
                                    </a>
                                    <div className="line my-4" />
                                    <div className="contact-info_subhead">البريد الالكتروني</div>
                                    <a
                                        href="mailto:mohamedfouda1701@gmail.com"
                                        className="text-decoration-none"
                                    >
                                        mohamedfouda1701@gmail.com
                                    </a>
                                    <div className="line my-4" />
                                    <div className="contact-info_subhead">العنوان</div>
                                    <a
                                        href="https://maps.app.goo.gl/zabssWiU2Y9KSdqR9"
                                        className="text-decoration-none"
                                    >
                                    الدقهليه / السنبلاوين / كفرالروك
                                        <br />
                                        ارض السوق / امام معرض الغزالي للادوات المنزليه
                                        <br />
                                        أسفل مسجد الدكتور خيري محمد سعد
                                    </a>
                                    <div className="line my-4" />
                                    <div className="d-flex social_media mt-auto">
                                        <a
                                            href="https://www.facebook.com/profile.php?id=100068888802339"
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
                            <div className="col-12 col-md-6 d-flex">
                                <div className="map flex-grow-1 w-100">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d714.8747454019212!2d31.403805600000002!3d30.829388899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQ5JzQ1LjgiTiAzMcKwMjQnMTMuNyJF!5e1!3m2!1sar!2seg!4v1745358024359!5m2!1sar!2seg"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            <Footer />
        </div>
    );
}

export default Contact;
