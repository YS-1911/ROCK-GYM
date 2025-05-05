import React from "react";
import "../css/style.css";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import { NavLink } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

// ..
AOS.init();
const Home = () => {
    return (
        <>
            <>
                <Nav />
                <section className="header my-5 pt-5">
                    <div className="container mt-3 pt-2">
                        <div className="d-flex justify-content-center align-items-center ">
                            <div className="header_text text-center ">
                                <h1
                                    className="mb-2"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                >
                                    Rock Gym
                                </h1>
                                <h2
                                    className="mb-4 my-2"
                                    data-aos="fade-left"
                                    data-aos-duration="2000"
                                >
                                    تجربة تدريبية مميزة تجمع بين الأداء الرياضي العالي والراحة في
                                    بيئة محفزة.
                                </h2>
                                <div className="p_header ">
                                    <p
                                        className="text-center"
                                        data-aos="fade-left"
                                        data-aos-duration="3000"
                                    >
                                        اكتشف صالة جيم متكاملة تجمع بين أحدث الأجهزة الرياضية وأفضل
                                        التجهيزات لتجربة تمرين لا مثيل لها. مع مساحات واسعة ومعدات
                                        متطورة تناسب جميع مستويات اللياقة.
                                    </p>
                                </div>
                                <div className="feater_headerd d-flex flex-wrap justify-content-center">
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
                                <NavLink
                                    to="/programing"
                                    className="btn1 text-decoration-none mt-4"
                                >
                                    <span className="btn-text-one">ابدأ الآن</span>
                                    <span className="btn-text-two">ابدأ الآن</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="hero_image-wrap mx-lg-5 mx-md-2 mx-sm-2">
                        <div className="hero_imge_container">
                            <img
                                src="image/hero-image.avif"
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
                            data-aos-duration="2000"
                        />
                        <img
                            src="image/hero-ui-1.svg"
                            className="home-hero_graphic is-top-left"
                            alt=""
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        />
                    </div>
                </section>
                {/* ? time work */}
                <section className="benefits my-5 bt-5">
    <div className="container">
        <div className="title_benefits text-center" data-aos="fade-up">
            <div className="d-flex justify-content-center align-items-center mb-3">
                <div className="marker" />
                <h4 className="mx-2">مواعيد العمل</h4>
            </div>
            <h3>جدول فترات الدخول للرجال والنساء</h3>
        </div>
        <div className="row mt-4 d-flex justify-content-center align-items-center">
            {/* فترة الرجال */}
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-3">
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
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-3">
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
        <div className="btn_ben text-center mt-4 d-flex justify-content-center">
            <NavLink to="/about" className="btn1 text-decoration-none">
                <span className="btn-text-one">مزيد من التفاصيل</span>
                <span className="btn-text-two">مزيد من التفاصيل</span>
            </NavLink>
        </div>
    </div>
</section> 

                {/* ? How it works */}
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
                                    <img
                                        src="image/logo-cut.jpeg"
                                        alt=""
                                        className="img-fluid"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ? Upgrade your fitness */}
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
                <>
                    {/* ? customers  */}
                    <div className="container">
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
                                                src="image/jooo.jpg"
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
                                                src="image/mohamedislam.png"
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
                    {/* ? articles */}
                    <section className="articles px-lg-5 px-md-3">
                        <div className="container_fluid ">
                            <div className="title_article">
                                <h2>أحدث المقالات</h2>
                                <NavLink
                                    to="/article"
                                    className="btn1 text-decoration-none mx-2 text-center my-3"
                                >
                                    <span className="btn-text-one">عرض جميع المقالات</span>
                                    <span className="btn-text-two">عرض جميع المقالات</span>
                                </NavLink>
                            </div>
                            <div className="row mt-4 d-flex justify-content-center align-items-center">
                                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-3">
                                    <div className="card_main_article">
                                        <div className="card" style={{ width: "100%" }}>
                                            <img
                                                src="image/67b1e5f7871bca51e8c59878_blog-5.avif.png"
                                                className="card-img-top"
                                                alt="..."
                                                loading="lazy"
                                            />
                                            <div className="card-body">
                                                <div className="text_marker d-flex align-items-center mb-2">
                                                    <div className="marker" />
                                                    <h4 className="mx-2 mb-0">الرياضة</h4>
                                                </div>
                                                <p className="card-text">
                                                    ممارسة الرياضة بانتظام تساعد على تحسين اللياقة البدنية
                                                    وتعزيز صحة القلب والرئتين
                                                </p>
                                                <button
                                                    type="button"
                                                    className="btn2"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#articleModal"
                                                >
                                                    <span className="btn-text-one">اقرأ المزيد</span>
                                                    <span className="btn-text-two">اقرأ المزيد</span>
                                                    {/* اقرأ المزيد */}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="back_blur_article" />
                                    </div>
                                    {/* Modal */}
                                    <div
                                        className="modal fade"
                                        id="articleModal"
                                        tabIndex={-1}
                                        aria-labelledby="articleModalLabel"
                                        aria-hidden="true"
                                    >
                                        <div className="modal-dialog modal-dialog-scrollable">
                                            <div className="modal-content text-dark">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="articleModalLabel">
                                                        {" "}
                                                        ممارسة الرياضة
                                                    </h5>
                                                </div>
                                                <div className="modal-body">
                                                    <img
                                                        src="image/67b1e5f7871bca51e8c59878_blog-5.avif.png"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                    <div className="d-flex align-items-center mt-3">
                                                        <div
                                                            className="marker "
                                                            style={{ marginLeft: 5 }}
                                                        />{" "}
                                                        تعريف الرياضة والنشاط البدني
                                                    </div>
                                                    النشاط البدني يشمل أي حركة جسدية تنتج عنها طاقة
                                                    يُستهلكها الجسم، بينما الرياضة هي أنشطة منظمة تتبع
                                                    قواعد محددة.
                                                    <div className="d-flex align-items-center mt-3">
                                                        <div
                                                            className="marker "
                                                            style={{ marginLeft: 5 }}
                                                        />{" "}
                                                        توصيات منظمة الصحة العالمية
                                                    </div>
                                                    توصي منظمة الصحة العالمية بممارسة 150 دقيقة أسبوعياً
                                                    من النشاط المعتدل الشدة أو 75 دقيقة من النشاط القوي
                                                    على الأقل للحفاظ على صحة القلب والوقاية من الأمراض
                                                    المزمنة
                                                    <br />
                                                    <a
                                                        href="https://www.who.int/ar/news-room/fact-sheets/detail/physical-activity"
                                                        className="text-decoration-none"
                                                    >
                                                        {" "}
                                                        World Health Organization (WHO)
                                                    </a>
                                                    .
                                                    <div className="d-flex align-items-center mt-3">
                                                        <div
                                                            className="marker "
                                                            style={{ marginLeft: 5 }}
                                                        />{" "}
                                                        إرشادات ACSM
                                                    </div>
                                                    ينصح كلّ البالغين الأصحاء بأداء 30 دقيقة من النشاط
                                                    الهوائي متوسط الشدة خمس مرات أسبوعياً، أو 20 دقيقة من
                                                    النشاط القوي ثلاث مرات أسبوعياً، بالإضافة إلى تمارين
                                                    تقوية العضلات مرتين على الأقل أسبوعياً
                                                    <br />
                                                    <a
                                                        href="https://www.who.int/ar/news-room/fact-sheets/detail/physical-activity"
                                                        className="text-decoration-none"
                                                    >
                                                        ACSM
                                                    </a>
                                                    .
                                                    <div className="d-flex align-items-center mt-3">
                                                        <div
                                                            className="marker "
                                                            style={{ marginLeft: 5 }}
                                                        />{" "}
                                                        فوائد التمارين
                                                    </div>
                                                    تحسين الحالة النفسية والنوم: تساعد التمارين على إفراز
                                                    الأندورفين وتقليل التوتر والاكتئاب، وتحسين جودة النوم
                                                    <br />
                                                    <a
                                                        href="https://www.health.harvard.edu/topics/exercise-and-fitness?utm_source"
                                                        className="text-decoration-none"
                                                    >
                                                        {" "}
                                                        Harvard Health
                                                    </a>
                                                    .
                                                    <div className="d-flex align-items-center mt-3">
                                                        <div
                                                            className="marker "
                                                            style={{ marginLeft: 5 }}
                                                        />
                                                        الوقاية من الأمراض:
                                                    </div>
                                                    تخفض ممارسة الرياضة بانتظام خطر الإصابة بأمراض القلب
                                                    والسكتة والسكري وبعض أنواع السرطان
                                                    <br />
                                                    <a
                                                        href="https://www.health.harvard.edu/topics/exercise-and-fitness?utm_source"
                                                        className="text-decoration-none"
                                                    >
                                                        {" "}
                                                        Harvard Health
                                                    </a>
                                                    .
                                                    <div className="d-flex align-items-center mt-3">
                                                        <div
                                                            className="marker "
                                                            style={{ marginLeft: 5 }}
                                                        />{" "}
                                                        تعزيز صحة القلب والأوعية
                                                    </div>
                                                    ترفع نسبة الكوليسترول الجيد (HDL) وتخفض الدهون
                                                    الثلاثية، مما يحسن تدفق الدم ويقلل مخاطر الأمراض
                                                    القلبية
                                                    <br />
                                                    <a
                                                        href="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389?"
                                                        className="text-decoration-none"
                                                    >
                                                        {" "}
                                                        Mayo Clinic
                                                    </a>
                                                    .
                                                    <div className="d-flex align-items-center mt-3">
                                                        <div
                                                            className="marker "
                                                            style={{ marginLeft: 5 }}
                                                        />{" "}
                                                        تمارين المقاومة
                                                    </div>
                                                    توصي ACSM بدمج تمارين المقاومة لتقوية العضلات والعظام،
                                                    مثل رفع الأثقال أو مقاومة الجسم، مرتين إلى ثلاث مرات
                                                    أسبوعياً لتحسين الكتلة العضلية وكثافة العظام
                                                    <br />
                                                    <a
                                                        href="https://acsm.org/resistance-exercise-health-infographic/"
                                                        className="text-decoration-none"
                                                    >
                                                        {" "}
                                                        ACSM
                                                    </a>
                                                    .
                                                    <p />
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        إغلاق
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-3" >
                                    <div className="card_main_article">
                                        <div className="card" style={{ width: "100%" }}>
                                            <img
                                                src="image/food2.jpg"
                                                className="card-img-top "
                                                alt="..."
                                                loading="lazy"
                                            />
                                            <div className="card-body">
                                                <div className="text_marker d-flex align-items-center mb-2">
                                                    <div className="marker" />
                                                    <h4 className="mx-2 mb-0">التغذية</h4>
                                                </div>
                                                <p className="card-text">
                                                    التغذية السليمة تُعد حجر الأساس لصحة الجسم والعقل.
                                                    ويجب أن تكون الوجبات اليومية متوازنة
                                                </p>
                                                <button
                                                    type="button"
                                                    className="btn2"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#articleModal1"
                                                >
                                                    <span className="btn-text-one">اقرأ المزيد</span>
                                                    <span className="btn-text-two">اقرأ المزيد</span>
                                                    {/* اقرا المزيد */}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="back_blur_article" />
                                    </div>
                                    {/* Modal */}
                                    <div
                                        className="modal fade"
                                        id="articleModal1"
                                        tabIndex={-1}
                                        aria-labelledby="articleModalLabel"
                                        aria-hidden="true"
                                    >
                                        <div className="modal-dialog modal-dialog-scrollable">
                                            <div className="modal-content text-dark">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="articleModalLabel">
                                                        التغذية السليمة
                                                    </h5>
                                                </div>
                                                <div className="modal-body">
                                                    <p>
                                                        <img
                                                            src="image/food2.jpg"
                                                            className="w-100 img-fluid"
                                                            alt=""
                                                        />
                                                    </p>

                                                    <div className="d-flex align-items-center mt-3">
                                                        <div className="marker" style={{ marginLeft: 5 }} />
                                                        <span>مبادئ النظام الغذائي الصحي</span>
                                                    </div>
                                                    <p>
                                                        تناول الفواكه والخضروات بوفرة للفيتامينات والمعادن
                                                        والألياف ومضادات الأكسدة .
                                                        <br />
                                                        تقليل الدهون المشبعة والسكريات المضافة للحد من مخاطر
                                                        السمنة والسكري وأمراض القلب
                                                        <br />
                                                        خفض تناول الملح للسيطرة على ضغط الدم والوقاية من
                                                        السكتات القلبية
                                                        <br />
                                                        <a
                                                            href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet"
                                                            className="text-decoration-none"
                                                        >
                                                            World Health Organization (WHO)
                                                        </a>
                                                    </p>

                                                    <div className="d-flex align-items-center mt-3">
                                                        <div className="marker" style={{ marginLeft: 5 }} />
                                                        <span>أطر الإرشادات الدولية والأمريكية</span>
                                                    </div>
                                                    <p>
                                                        الصحيفة الغذائية الصحية من هارفارد ترسم لوحاً
                                                        متوازنًا يشمل الحبوب الكاملة، البروتينات النباتية
                                                        والحيوانية الصحية، والخضروات والفواكه
                                                        <br />
                                                        <a
                                                            href="https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/"
                                                            className="text-decoration-none"
                                                        >
                                                            The Nutrition Source
                                                        </a>
                                                        . إرشادات CDC تقدم توصيات للمجتمعات والمدارس والفئات
                                                        الخاصة مثل الحوامل والمرضعات لتحسين جودة التغذية
                                                        العامّة
                                                        <br />
                                                        <a
                                                            href="https://www.cdc.gov/nutrition/php/guidelines-recommendations/index.html"
                                                            className="text-decoration-none"
                                                        >
                                                            CDC
                                                        </a>
                                                        .
                                                        <br />
                                                        ODS التابعة لوزارة الصحة الأمريكية توفر بيانات علمية
                                                        مفصلة عن المكملات الغذائية والفيتامينات والمعادن
                                                        <br />
                                                        <a
                                                            href="https://ods.od.nih.gov/"
                                                            className="text-decoration-none"
                                                        >
                                                            Office of Dietary Supplements (ODS)
                                                        </a>
                                                        .
                                                    </p>

                                                    <div className="d-flex align-items-center mt-3">
                                                        <div className="marker" style={{ marginLeft: 5 }} />
                                                        <span>استراتيجيات التخطيط والطبخ</span>
                                                    </div>
                                                    <p>
                                                        تعلم كيفية تخطيط الوجبات والتسوق الذكي وتقنيات الطبخ
                                                        الصحي يعززان الالتزام بنظام غذائي صحي على المدى
                                                        الطويل
                                                        <br />
                                                        <a
                                                            href="https://www.mayoclinic.org/ar/healthy-lifestyle/nutrition-and-healthy-eating/basics/nutrition-basics/hlv-20049477?fbclid=IwAR3d4tmHVwj9tXAdXatQF8lcIlKf4COt4GZQ_xJo5EVvm9xP8w7xzq27c7k"
                                                            className="text-decoration-none"
                                                        >
                                                            Mayo Clinic
                                                        </a>
                                                        .
                                                    </p>
                                                </div>

                                                <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        إغلاق
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-3">
                                    <div className="card_main_article">
                                        <div className="card" style={{ width: "100%" }}>
                                            <img
                                                src="image/1.png"
                                                className="card-img-top"
                                                alt="..."
                                                loading="lazy"
                                            />
                                            <div className="card-body">
                                                <div className="text_marker d-flex align-items-center mb-2">
                                                    <div className="marker" />
                                                    <h4 className="mx-2 mb-0">الصحة</h4>
                                                </div>
                                                <p className="card-text">
                                                    الصحة العامة تعني توفير الرعاية الصحية للجميع، وتعزيز
                                                    الوعي الصحي، والوقاية من الأمراض
                                                </p>
                                                <button
                                                    type="button"
                                                    className="btn2"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#articleModal2"
                                                >
                                                    <span className="btn-text-one">اقرأ المزيد</span>
                                                    <span className="btn-text-two">اقرأ المزيد</span>
                                                    {/* اقرا المزيد */}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="back_blur_article" />
                                    </div>
                                    {/* Modal */}
                                    <div
                                        className="modal fade"
                                        id="articleModal2"
                                        tabIndex={-1}
                                        aria-labelledby="articleModalLabel"
                                        aria-hidden="true"
                                    >
                                        <div className="modal-dialog modal-dialog-scrollable">
                                            <div className="modal-content text-dark">
                                                <div className="modal-header ">
                                                    <h5 className="modal-title" id="articleModalLabel">
                                                        {" "}
                                                        الصحة العامة
                                                    </h5>
                                                </div>
                                                <div className="modal-body">
                                                    <img
                                                        src="image/1.png"
                                                        className="w-100 mb-3 "
                                                        alt=""
                                                    />
                                                    <p></p>
                                                    <div className="d-flex align-items-center mt-3">
                                                        <div
                                                            className="marker "
                                                            style={{ marginLeft: 5 }}
                                                        />
                                                        تعريف الصحة
                                                    </div>
                                                    الصحة هي حالة من الرفاهية الكاملة الجسدية والنفسية
                                                    والاجتماعية، لا يقتصر تعريفها على غياب المرض أو العجز
                                                    فقط
                                                    <br />
                                                    <a
                                                        href="https://www.who.int/about/governance/constitution?utm_source"
                                                        className="text-decoration-none"
                                                    >
                                                        World Health Organization (WHO)
                                                    </a>
                                                    .
                                                    <div className="d-flex align-items-center mt-3">
                                                        <div
                                                            className="marker "
                                                            style={{ marginLeft: 5 }}
                                                        />
                                                        الصحة حق أساسي
                                                    </div>
                                                    تُعتبر التمتع بأعلى مستوى ممكن من الصحة من الحقوق
                                                    الأساسية لكل فرد بغض النظر عن العرق أو الدين أو الحالة
                                                    الاجتماعية
                                                    <br />
                                                    <a
                                                        href="https://www.who.int/about/governance/constitution?utm_source"
                                                        className="text-decoration-none"
                                                    >
                                                        World Health Organization (WHO)
                                                    </a>
                                                    .
                                                    <div className="d-flex align-items-center mt-3">
                                                        <div
                                                            className="marker "
                                                            style={{ marginLeft: 5 }}
                                                        />
                                                        الصحة العامة ودورها
                                                    </div>
                                                    الصحة العامة هي علم وفن الوقاية من الأمراض وإطالة
                                                    الحياة وتعزيز الصحة عبر الجهود المنظمة للأفراد
                                                    والمجتمعات والمنظمات الحكومية والخاصة
                                                    <br />
                                                    <a
                                                        href="https://www.cdc.gov/training-publichealth101/media/pdfs/introduction-to-public-health.pdf?utm_source"
                                                        className="text-decoration-none"
                                                    >
                                                        CDC
                                                    </a>
                                                    .
                                                    <div className="d-flex align-items-center mt-3">
                                                        <div
                                                            className="marker "
                                                            style={{ marginLeft: 5 }}
                                                        />
                                                        معلومات صحية موثوقة
                                                    </div>
                                                    تتوفر معلومات صحية موثوقة حول الأعراض والعلاجات
                                                    والأبحاث الطبية من المعاهد الوطنية للصحة NIH، وهي
                                                    المصدر الرئيسي للمعلومات العلمية في الولايات المتحدة
                                                    <br />
                                                    <a
                                                        href="https://www.cdc.gov/training-publichealth101/media/pdfs/introduction-to-public-health.pdf?utm_source"
                                                        className="text-decoration-none"
                                                    >
                                                        {" "}
                                                        National Institutes of Health (NIH)
                                                    </a>
                                                    .
                                                    <div className="d-flex align-items-center mt-3">
                                                        <div
                                                            className="marker "
                                                            style={{ marginLeft: 5 }}
                                                        />
                                                        العوامل المحددة للصحة
                                                    </div>
                                                    تشمل العوامل الاجتماعية والاقتصادية والبيئية مثل الدخل
                                                    والتعليم والعمل والإسكان والوصول إلى الخدمات الصحية
                                                    <br />
                                                    تؤثر هذه العوامل في مدى قدرة الأفراد والمجتمعات على
                                                    التمتع بصحة جيدة وتجنّب الأمراض المزمنة.
                                                    <a
                                                        href="https://www.who.int/health-topics/social-determinants-of-health?utm_source#tab=tab_1"
                                                        className="text-decoration-none"
                                                    >
                                                        {" "}
                                                        World Health Organization (WHO){" "}
                                                    </a>
                                                    .
                                                    <p />
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        إغلاق
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ? Upgrade your fitness */}
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
                    {/* footer */}
                    <Footer />
                </>
            </>
        </>
    );
};

export default Home;
