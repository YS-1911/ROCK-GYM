import React from 'react';

const HowitWorks = () => {
    return (
        <div>
            <section className="how_it_works my-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 order-2 order-lg-1 order-md-1 py-5 d-flex justify-content-center flex-column"
                            data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="text_how_work mt-3">
                                <div className="text_marker d-flex align-items-center mb-2">
                                    <div className="marker" />
                                    <h4 className="mx-3 mb-0">كيف نساعدك</h4>
                                </div>
                                <h3 className="fw-bold">تدريب يتكيّف معك ومع أهدافك</h3>
                            </div>
                            <div className="mt-4">
                                <div className="d-flex align-items-start ">
                                    <div className="d-flex flex-column  align-items-center">
                                        <div className="dash" />
                                        <div className="img_how_work">
                                            <img
                                                src="image/67b1cb395b3e0e9c6392b697_icon-bolt.svg"
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="dash" />
                                    </div>
                                    <div className="me-3 mt-2">
                                        <h5 className="fw-semibold mb-1 ">حدد أهدافك</h5>
                                        <p className=" mb-0 ">
                                            أخبرنا بما تريد تحقيقه وسنضع لك خطة تدريبية مخصصة.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start  ">
                                    <div className="d-flex flex-column icon-with-border align-items-center">
                                        <div className="dash" />
                                        <div className="img_how_work">
                                            <img
                                                src="image/67b1cb392907bc5d8ca763fb_icon-flag.svg"
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="dash" />
                                    </div>
                                    <div className="me-3 mt-2">
                                        <h5 className="fw-semibold mb-1"> تدرّب بذكاء</h5>
                                        <p className=" m-0">
                                            نقدّم لك تغذية راجعة فورية لضمان تأدية التمارين بشكل
                                            صحيح.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start  ">
                                    <div className="d-flex flex-column icon-with-border align-items-center">
                                        <div className="dash" />
                                        <div className="img_how_work">
                                            <img
                                                src="image/67b1cb39252e20911351d103_icon-chart.svg"
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="dash" />
                                    </div>
                                    <div className="me-3 mt-2">
                                        <h5 className="fw-semibold mb-1">تابع وتطوّر</h5>
                                        <p className=" mb-0">
                                            إحصائيات مفصّلة تساعدك في قياس نموك وتحسين أدائك
                                            باستمرار.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center  order-1 order-lg-2 order-md-2"
                            data-aos="zoom-in"
                            data-aos-duration="1000">
                            <div className="image_how_works">
                                
                                <video
                                    src="../../image/video_rockgym.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    loading="lazy"
                                    preload="none"
                                    className=" img-fluid object-cover"
                                >
                                    متصفحك لا يدعم تشغيل الفيديو
                                </video>                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default HowitWorks;
