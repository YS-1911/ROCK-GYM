import React from 'react';

const Customers = () => {
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="customers_text customers">
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <div className="marker marker_customers " />
                        <h4 className="mx-2">انضم الي مئات المشتركين السعداء!</h4>
                    </div>
                    <div
                        id="carouselExampleInterval"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <div className="carousel-inner">
                            <div
                                className="carousel-item active"
                                data-bs-interval={10000}
                            >
                                <h3 className="text-center">
                                    سواء لسه بتبدأ أو عايز ترفع مستواك، Rock Gym هو المكان
                                    اللي هتلاقي فيه الدعم، التحفيز، وأحدث الأنظمة اللي هتوصلك
                                    لهدفك أسرع.
                                </h3>
                                <div className="image_cus d-flex justify-content-center align-items-center mt-3">
                                    <img
                                        src="image/jooo.webp"
                                        alt=""
                                        loading="lazy"
                                        className="img-fluid mx-2"
                                    />
                                    <div className="text_img_cus">
                                        <h4 className="mb-1">ك/ يوسف محمد</h4>
                                        <h4>مشترك</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval={2000}>
                                <h3 className="text-center">
                                    "أيًا كان هدفك، سواء عايز تخس أو تعضّل أو تزود لياقتك، فـ
                                    Rock Gym هو المكان اللي هيوصلك! أنا شخصيًا بدأت من الصفر،
                                    وشوفت فرق رهيب{" "}
                                </h3>
                                <div className="image_cus d-flex justify-content-center align-items-center mt-3">
                                    <img
                                        src="image/mohamedislam.webp"
                                        alt=""
                                        loading="lazy"
                                        className="img-fluid mx-2"
                                    />
                                    <div className="text_img_cus">
                                        <h4 className="mb-1">ك/ محمد اسلام</h4>
                                        <h4>مشترك</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/*  */}
                    <div className="back_blur" />
                </div>
            </div>

        </div>
    );
}

export default Customers;
