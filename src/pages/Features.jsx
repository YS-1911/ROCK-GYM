import React from 'react';
import Nav from '../components/nav.jsx';
import Footer from "../components/footer.jsx";



const Features = () => {
    return (
        <div>
            <Nav />
             {/* ? Benefits */}
            <section className="benefits my-5 bt-5">
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
                        </div>
                        
                    </div>
                </section>
            {/* < Footer /> */}
        </div>
    );
}

export default Features;
