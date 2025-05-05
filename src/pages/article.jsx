import React from 'react';
import Nav from '../components/nav.jsx';
import Footer from "../components/footer.jsx";
import "../css/article.css"
import { useEffect } from "react";


const Article = () => {
    useEffect(() => {
        const filterButtons = document.querySelectorAll(".filter-btn-article");
        const articleCards = document.querySelectorAll(".article-card");

        const handleClick = (button) => () => {
            const filterValue = button.dataset.filter;

            articleCards.forEach((card) => {
                if (filterValue === "all" || card.dataset.category === filterValue) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });

            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
        };

        filterButtons.forEach((button) =>
            button.addEventListener("click", handleClick(button))
        );

        return () => {
            filterButtons.forEach((button) =>
                button.removeEventListener("click", handleClick(button))
            );
        };
    }, []);

    return (
        <div>
            <Nav />
            <section className="article">
                <div className="text_article">
                    <div className="text-center d-flex justify-content-center align-items-center" data-aos="fade-up">
                        <div className="marker mx-2" />
                        <h5 className="text-center">مقالات</h5>
                    </div>
                    <h5 className="d-flex justify-content-center align-items-center mt-2" data-aos="fade-up" data-aos-duration="2000">
                        مقالات عن فوائد الرياضة و الصحه و التغذيه.
                    </h5>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-10 d-flex justify-content-center align-items-center mx-auto my-3">
                    <div className="filter-article my-3 text-center">
                        <button className="btn filter-btn-article active m-2" data-filter="all">
                            الكل
                        </button>
                        <button className="btn filter-btn-article m-2" data-filter="sport">
                            الرياضه
                        </button>
                        <button className="btn filter-btn-article m-2" data-filter="health">
                            الصحه
                        </button>
                        <button className="btn filter-btn-article m-2" data-filter="nutrition">
                            التغذيه
                        </button>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-lg-4 col-md-6 col-sm-10 article-card  my-4" data-category="sport">
                        <div className="card_main_article_container">
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
                    <div className="col-lg-4 col-md-6 col-sm-10 article-card my-4" data-category="nutrition">
                        <div className="card_main_article_container">
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
                                        <h4 className="mx-2 mb-0">التغذية بشكل عام</h4>
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
                                            التغذية
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
                    <div className="col-lg-4 col-md-6 col-sm-10 article-card my-4" data-category="health">
                        <div className="card_main_article_container">
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
                    <div className="col-lg-4 col-md-6 col-sm-10 article-card my-4" data-category="nutrition">
                        <div className="card_main_article_container">
                            <div className="card" style={{ width: "100%" }}>
                                <img
                                    src="image/food.jpg"
                                    className="card-img-top "
                                    alt="..."
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <div className="text_marker d-flex align-items-center mb-2">
                                        <div className="marker" />
                                        <h4 className="mx-2 mb-0">تعريف التغذية السليمة</h4>
                                    </div>
                                    <p className="card-text">
                                        التغذية السليمة تُعد حجر الأساس لصحة الجسم والعقل.
                                        ويجب أن تكون الوجبات اليومية متوازنة
                                    </p>
                                    <button
                                        type="button"
                                        className="btn2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#articleModal1nutrition1"
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
                            id="articleModal1nutrition1"
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
                                                src="image/food.jpg"
                                                className="w-100 img-fluid"
                                                alt=""
                                            />
                                        </p>

                                        <div className="d-flex flex-column ">

                                            <p>🥗 - <strong>التغذية:</strong></p>

                                            <p>من أهم وأقوى الوسائل اللي ممكن تساعدك توصل لهدفك بسرعة، وبرضه ممكن تبقى أكبر حاجز يقف قدامك لو مش مظبوطة.</p>

                                            <p>🍀 - الأكل الصحي هو كل ما هو طبيعي، زي:</p>
                                            <ul className="mx-3">
                                                <li>الخضروات الطازجة</li>
                                                <li>اللحوم البيضاء والحمراء</li>
                                                <li>الحبوب الكاملة</li>
                                            </ul>

                                            <p>💪 - في أصناف بناخد منها بروتين، وأصناف بناخد منها كارب، وأصناف بناخد منها دهون صحية.
                                                وده هنشرحه باستفاضة في مقال تاني 😉.</p>

                                            <p>🚫 - الأكل المصنع:</p>
                                            <p>زي اللانشون، الشيبسي، البيبسي، وكل ما يحتوي على مواد حافظة. الأكل ده غير صحي بالمرة.</p>

                                            <p>🍳 - طريقة التسوية أو الطبخ:</p>
                                            <p>ممكن الأكل يكون طبيعي وصحي، لكن طريقة الطبخ تكون غلط.</p>
                                            <p>مبدئيًا، تسبيكة، طشة، والأكل الحادق بزيادة.. تنساهم خالص لو عايز نتيجة محترمة.</p>
                                            <p>هنتجه للمسلوق والمشوي. ومحدش يقولي دا أكل عيانين، علشان ثقافتنا هي اللي غلط 😒.</p>

                                            <p>🧂 - السكر والملح:</p>
                                            <p>هنعمل لهم بلوك من حياتنا، وخصوصًا الأبيض منهم.</p>
                                            <p>هنستبدلهم بمنتجات صحية هنتكلم عنها قدام إن شاء الله 😁.</p>

                                            <p>نبدأ نقلل نسبة السكر والملح تدريجيًا لحد ما نوصل لمعلقة واحدة في اليوم.</p>

                                            <p>🔥 - التعليمات الذهبية:</p>
                                            <ul className="mx-3">
                                                <li>نبعد عن الأكل المسبك والمحمر</li>
                                                <li>نبدأ نتعامل مع المسلوق والمشوي</li>
                                                <li>نستخدم التوابل لأنها مفيدة جدًا خصوصًا في عملية الحرق</li>
                                            </ul>

                                            <p>🚀 خليك معايا خطوة بخطوة، واعرف إن اللي مستعجل مش ناوي يكمل.</p>

                                        </div>

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
                    <div className="col-lg-4 col-md-6 col-sm-10 article-card  my-4" data-category="sport">
                        <div className="card_main_article_container">
                            <div className="card" style={{ width: "100%" }}>
                                <img
                                    src="image/sport2.png"
                                    className="card-img-top"
                                    alt="..."
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <div className="text_marker d-flex align-items-center mb-2">
                                        <div className="marker" />
                                        <h4 className="mx-2 mb-0">أنظمة تمرين رفع الأثقال</h4>
                                    </div>
                                    <p className="card-text">
                                    تمارين رفع الأثقال مش بس لبناء العضلات، كمان بتقوي العظام، المفاصل، وبتحسن التمثيل الغذائي.                                      </p>
                                    <button
                                        type="button"
                                        className="btn2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#articleModalhealth1"
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
                            id="articleModalhealth1"
                            tabIndex={-1}
                            aria-labelledby="articleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content text-dark">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="articleModalLabel">
                                            {" "}
                                            أنظمة تمرين رفع الأثقال
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <img
                                            src="image/sport2.png"
                                            className="img-fluid mb-3"
                                            alt=""
                                        />
                                        <div className="d-flex flex-column ">

                                            <p>🏋️‍♂️ - <strong>أنظمة تمرين رفع الأثقال:</strong></p>

                                            <p>تمارين رفع الأثقال مش بس لبناء العضلات، كمان بتقوي العظام، المفاصل، وبتحسن التمثيل الغذائي.
                                                اختيار النظام المناسب يعتمد على هدفك (قوة – تضخيم – تحمّل) ووقتك المتاح.</p>

                                            <p>📚 - أشهر أنظمة التمرين:</p>
                                            <ul className="list-unstyled">
                                                <li>1️⃣ <strong>النظام الشامل (Full Body):</strong>
                                                <br />
                                                    تمرين جميع مجموعات العضلات في كل حصة، 3 أيام أسبوعياً.
                                                    • مجموعات: 3–4 لكل تمرين | تكرارات: 8–12 | راحة: 60–90 ث</li>
                                                <li className='my-2'>2️⃣ <strong>نظام الجزء العلوي/السفلي (Upper/Lower Split):</strong>
                                                    <br />
                                                    4 أيام أسبوعياً (يومان علوي، يومان سفلي).
                                                    • مجموعات: 4–5 | تكرارات: 6–10 | راحة: 90–120 ث</li>
                                                <li>3️⃣ <strong>نظام الدفع/السحب/الأرجل (Push/Pull/Legs):</strong>
                                                <br />
                                                    6 أيام أسبوعياً (كل مجموعة مرتين).
                                                    • مجموعات: 3–4 | تكرارات: 8–15 | راحة: 60–90 ث</li>
                                                    
                                                <li className='my-2'>4️⃣ <strong>نظام تقسيم الجسم حسب العضلة (Body Part Split):</strong>
                                                <br />
                                                    5–6 أيام أسبوعياً، كل يوم مجموعة عضلية واحدة.
                                                    • مجموعات: 4–6 | تكرارات: 8–12 | راحة: 60–120 ث</li>
                                            </ul>

                                            <p>🔹 <strong>Full Body:</strong> مناسب للمبتدئين وقلة التفرغ، يحفز هرمون النمو بشكل كبير ويوزع الإجهاد على جميع العضلات.</p>

                                            <p>🔹 <strong>Upper/Lower Split:</strong> يوازن بين حجم التدريب والراحة، يعطي وقت كافي للتعافي لكل جزء.</p>

                                            <p>🔹 <strong>Push/Pull/Legs:</strong> تقسيم منطقي حسب نمط الحركة، مناسب للمتوسطين والمتقدمين.</p>

                                            <p>🔹 <strong>Body Part Split:</strong> أفضل للتضخيم والتركيز العميق على كل عضلة، يحتاج وقت والتزام عالي.</p>

                                            <p>💡 - نصائح عامة للنجاح:</p>
                                            <ul className="list-unstyled">
                                                <li>✔️ الإحماء الديناميكي قبل كل جلسة</li>
                                                <li>✔️ التركيز على التقنية السليمة أولاً</li>
                                                <li>✔️ زيادة الأحمال تدريجيًا (Progressive Overload)</li>
                                                <li>✔️ فترة راحة كافية (48–72 ساعة للعضلة الواحدة)</li>
                                                <li>✔️ تغذية متوازنة (بروتين + كارب + دهون صحية)</li>
                                                <li>✔️ نوم كافي (7–9 ساعات يومياً)</li>
                                            </ul>

                                            <p>🚀 اختر النظام اللي يناسب جدولك وهدفك، وخليك ملتزم لمدة 8–12 أسبوع علشان تشوف نتائج واضحة!</p>

                                        </div>

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
                    <div className="col-lg-4 col-md-6 col-sm-10 article-card my-4" data-category="nutrition">
                        <div className="card_main_article_container">
                            <div className="card" style={{ width: "100%" }}>
                                <img
                                    src="image/food3.jpg"
                                    className="card-img-top "
                                    alt="..."
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <div className="text_marker d-flex align-items-center mb-2">
                                        <div className="marker" />
                                        <h4 className="mx-2 mb-0">البروتين</h4>
                                    </div>
                                    <p className="card-text">
                                        عنصر البناء الأساسي لجميع خلايا الجسم.
                                        زي الشعر والاظافر وخصوصا الألياف العضلية.                                                </p>
                                    <button
                                        type="button"
                                        className="btn2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#articleModal1nutrition2"
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
                            id="articleModal1nutrition2"
                            tabIndex={-1}
                            aria-labelledby="articleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content text-dark">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="articleModalLabel">
                                            البروتين
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            <img
                                                src="image/food3.jpg"
                                                className="w-100 img-fluid"
                                                alt=""
                                            />
                                        </p>

                                        <div className="space-y-4">
                                            <p>💪 - البروتين: عنصر البناء الأساسي لجميع خلايا الجسم زي الشعر والأظافر وخصوصاً الألياف العضلية.</p>

                                            <p>عندنا مصدرين ناخد منهم البروتين: مصدر أساسي ومصدر مكمل.</p>

                                            <p>🔹 <strong>الأساسي</strong>: اللحوم، الألبان، الأسماك، الدواجن، والبيض، لاحتوائهم على الأحماض الأمينية الأساسية.</p>

                                            <p>🔹 <strong>المكمل</strong>: زي البقول والحبوب.</p>

                                            <p>🤔 - طيب أعرف ازاي جسمي بيحتاج كام جرام بروتين؟</p>

                                            <p>الجسم بيحتاج من 1.5 إلى 2 جرام لكل كيلو جرام من كتلة الجسم.</p>
                                            <p>يعني لو وزنك 70ك، هتحتاج من 105 إلى 140 جرام بروتين يومياً.</p>

                                            <p>🔹 <strong>مصادر البروتين الأساسية:</strong></p>
                                            <ul className="mx-3">
                                                <li>100 جم صدور فراخ = 30 جم بروتين</li>
                                                <li>100 جم تونة معلبة = 25 جم بروتين</li>
                                                <li>100 جم سردين معلب = 23 جم بروتين</li>
                                                <li>100 جم لحم أحمر = 25 جم بروتين</li>
                                                <li>100 جم كبدة فراخ = 16 جم بروتين</li>
                                                <li>100 جم جبنة قريش = 15 جم بروتين</li>
                                                <li>بيضة واحدة = 6 جم بروتين</li>
                                                <li>زبادي خالي الدسم = 6 جم بروتين</li>
                                                <li>زبادي كامل الدسم = 3 جم بروتين</li>
                                            </ul>

                                            <p>🔹 <strong>مصادر البروتين المكملة:</strong></p>
                                            <ul className="mx-3">
                                                <li>100 جم بذور الكتان = 18 جم بروتين (42 جم دهون)</li>
                                                <li>100 جم بذور سمسم = 17 جم بروتين (49 جم دهون)</li>
                                                <li>100 جم لوز = 21 جم بروتين (49 جم دهون)</li>
                                                <li>100 جم كاجو = 18 جم بروتين (43 جم دهون)</li>
                                                <li>100 جم جوز أبيض = 12 جم بروتين (64 جم دهون)</li>
                                                <li>100 جم فستق نيء = 20 جم بروتين (45 جم دهون)</li>
                                                <li>100 جم لب دوار الشمس = 20 جم بروتين (51 جم دهون)</li>
                                            </ul>

                                            <p>💡 ملحوظة: الدهون دي دهون صحية ومفيدة للجسم، بس لازم استخدامها بعقل عشان متعملش نتيجة عكسية.</p>

                                            <p>😂 وأنا بضحي النهارده وأقول معلومة زيادة: نسبة الدهون المسموح بيها يومياً من 25٪ إلى 30٪ من السعرات المطلوبة، وهنشرحها في مقال منفصل إن شاء الله.</p>
                                        </div>

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
                    <div className="col-lg-4 col-md-6 col-sm-10 article-card my-4" data-category="nutrition">
                        <div className="card_main_article_container">
                            <div className="card" style={{ width: "100%" }}>
                                <img
                                    src="image/food4.jpg"
                                    className="card-img-top "
                                    alt="..."
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <div className="text_marker d-flex align-items-center mb-2">
                                        <div className="marker" />
                                        <h4 className="mx-2 mb-0">الدهون</h4>
                                    </div>
                                    <p className="card-text">
                                        الدهون هي إسترات مكونة من بعض الأحماض الدهنية مع الجلسرين، وتعرف باسم الجليسريدات

                                    </p>
                                    <button
                                        type="button"
                                        className="btn2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#articleModal1nutrition3"
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
                            id="articleModal1nutrition3"
                            tabIndex={-1}
                            aria-labelledby="articleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content text-dark">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="articleModalLabel">
                                        الدهون
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            <img
                                                src="image/food4.jpg"
                                                className="w-100 img-fluid"
                                                alt=""
                                            />
                                        </p>

                                        <div className="d-flex flex-column ">

                                            <p>😲 - <strong>الدهون:</strong></p>

                                            <p>الدهون هي إسترات مكونة من بعض الأحماض الدهنية مع الجلسرين، وتعرف باسم الجليسريدات.

                                                هذه الأحماض قد تكون مشبعة أو غير مشبعة.</p>

                                            <p>بعض الدهون صحية ويحتاجها الجسم، وبعضها الآخر ضار بالجسم.</p>

                                            <p>أنواع الدهون ثلاثة:</p>

                                            <ul className="list-unstyled">
                                                <li>1️⃣ دهون مشبعة</li>
                                                <li>2️⃣ دهون متحولة</li>
                                                <li>3️⃣ دهون غير مشبعة</li>
                                            </ul>

                                            <p>🔹 <strong>أولاً: الدهون المشبعة:</strong></p>

                                            <p>ضارة جداً بالجسم ولا ينصح بتناول أكثر من:</p>
                                            <ul className="list-unstyled">
                                                <li>30 جم للرجال</li>
                                                <li>20 جم للسيدات</li>
                                            </ul>
                                            <p>كمية يومية كحد أقصى 👌</p>

                                            <p>توجد في اللحوم ومنتجاتها، الألبان ومشتقاتها، وبعض أنواع المعجنات.</p>

                                            <p>🔹 <strong>ثانياً: الدهون المتحولة:</strong></p>

                                            <p>ضارة مثل الدهون المشبعة، وتتسبب في ارتفاع نسبة الكوليسترول في الدم.
                                                ولا ينصح بزيادة الحصة اليومية عن 5 جم للشخص البالغ.</p>

                                            <p>تنقسم إلى نوعين:</p>
                                            <ul className="list-unstyled">
                                                <li>🔸 دهون متحولة طبيعية: موجودة في اللحوم والألبان.</li>
                                                <li>🔸 دهون متحولة مصنعة: موجودة في الزيوت النباتية المهدرجة.</li>
                                            </ul>

                                            <p>🔹 <strong>ثالثاً: الدهون غير المشبعة:</strong></p>

                                            <p>مفيدة جداً للجسم خاصة في عملية البناء والتخلص من الدهون الضارة.
                                                تساعد على خفض نسبة الكوليسترول الضار (LDL) ورفع نسبة الكوليسترول المفيد (HDL).</p>

                                            <p>من مصادر الدهون غير المشبعة:</p>
                                            <ul className="list-unstyled">
                                                <li>🐟 الأوميجا 3 (موجودة بكثرة في السمك)</li>
                                                <li>🫒 زيت الزيتون</li>
                                                <li>🌱 زيت الكتان</li>
                                                <li>🥜 المكسرات بأنواعها</li>
                                                <li>🥑 بعض أنواع الخضار والفواكه</li>
                                            </ul>

                                            <p>📊 - النسبة الطبيعية لتخزين الدهون في الجسم:</p>
                                            <ul className="list-unstyled">
                                                <li>للرجال: من 8٪ إلى 12٪ من كتلة الجسم.</li>
                                                <li>للنساء: من 18٪ إلى 22٪ من كتلة الجسم.</li>
                                            </ul>

                                            <p>✅ الدهون مفيدة وأساسية للعمليات الحيوية اللي بيقوم بها الجسم.</p>

                                            <p>🎯 دلوقتي عرفنا أنواع الدهون، نبدأ نقلل من المصادر الضارة ونتجه للمصادر المفيدة علشان نوصل لجسم مشدود خالي من الترهلات 🧜‍♂️.</p>

                                            <p>🚀 وبكدا نكون وصلنا لنهاية المقال.</p>

                                        </div>

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
                    <div className="col-lg-4 col-md-6 col-sm-10 article-card  my-4" data-category="sport">
                        <div className="card_main_article_container">
                            <div className="card" style={{ width: "100%" }}>
                                <img
                                    src="image/sport1.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <div className="text_marker d-flex align-items-center mb-2">
                                        <div className="marker" />
                                        <h4 className="mx-2 mb-0">الكارديو وأهميته</h4>
                                    </div>
                                    <p className="card-text">
                                    الكارديو هو تمارين قلبية تنفسية تعمل على رفع معدل ضربات القلب وتحسين كفاءة الجهاز القلبي الرئوي
                                 </p>
                                    <button
                                        type="button"
                                        className="btn2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#articleModalhealth3"
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
                            id="articleModalhealth3"
                            tabIndex={-1}
                            aria-labelledby="articleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content text-dark">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="articleModalLabel">
                                            {" "}
                                            الكارديو وأهميته
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <img
                                            src="image/sport1.jpg"
                                            className="img-fluid mb-3"
                                            alt=""
                                        />
                                   <div className="d-flex flex-column ">

<p>🏃‍♂️ - <strong>الكارديو وأهميته:</strong></p>
<p>الكارديو هو تمارين قلبية تنفسية تعمل على رفع معدل ضربات القلب وتحسين كفاءة الجهاز القلبي الرئوي.</p>
<p>ممارسة الكارديو بانتظام بتحافظ على صحة القلب والشرايين، بتساعد في حرق الدهون، وبتعزز القدرة على التحمل. 💓🔥</p>

<p>📚 - أنواع تمارين الكارديو:</p>
<ul className="list-unstyled">
  <li>1️⃣ الجري (Running): سهل تبدأ فيه سواء خارجي أو على جهاز المشي.</li>
  <li>2️⃣ ركوب الدراجة (Cycling): ممتاز للمفاصل وبيدرّب الساقين بشكل قوي.</li>
  <li>3️⃣ السباحة (Swimming): تمرين شامل لكل عضلات الجسم وقليل التأثير على المفاصل.</li>
  <li>4️⃣ التجديف (Rowing): يركز على الجزء العلوي والسفلي من الجسم معاً.</li>
  <li>5️⃣ تمارين HIIT (High-Intensity Interval Training): فترات عالية الشدة متبوعة بفترات راحة قصيرة.</li>
</ul>

<p>⏱️ - المدة الموصى بها أسبوعياً:</p>
<ul className="list-unstyled">
  <li>🔹 150 دقيقة من الكارديو المتوسط الشدة (مثل الجري البطيء أو المشي السريع).</li>
  <li>🔹 أو 75 دقيقة من الكارديو عالي الشدة (مثل الجري السريع أو HIIT).</li>
  <li>🔹 يفضل توزيعها على 3–5 جلسات أسبوعياً.</li>
</ul>

<p>🎯 - فوائد الكارديو:</p>
<ul className="list-unstyled">
  <li>✔️ تحسين صحة القلب وتقليل مخاطر أمراض القلب.</li>
  <li>✔️ حرق السعرات الحرارية وخسارة الدهون. 🏋️‍♂️</li>
  <li>✔️ رفع مستوى الطاقة وزيادة القدرة على التحمل.</li>
  <li>✔️ تحسين الحالة المزاجية وتقليل التوتر بفضل إفراز الإندورفين.</li>
  <li>✔️ تحسين جودة النوم وتنظيم ضربات القلب أثناء الراحة.</li>
</ul>

<p>💡 - نصائح لتمارين كارديو فعّالة:</p>
<ul className="list-unstyled">
  <li>1️⃣ ابدأ بإحماء خفيف 5–10 دقائق (مشٍ بطيء أو تمارين شاملة).</li>
  <li>2️⃣ حافظ على وضعية جسم مستقيمة وتنفس بعمق من البطن.</li>
  <li>3️⃣ زد الشدة تدريجياً (السرعة أو الميل أو المقاومة).</li>
  <li>4️⃣ اختتم التمرين بتهدئة وتمارين تمدد لتفادي الشد العضلي.</li>
  <li>5️⃣ استخدم سماعات أو موسيقى تحفيزية للحفاظ على الحماس.</li>
</ul>

<p>🚀 خليك منتظم وحاول تمزج بين أنواع الكارديو المختلفة لنتائج أفضل.  
ابدأ بخطة بسيطة ورفع مستوى التحدي تدريجياً، وهتشوف تحسن كبير في صحتك ولياقتك!</p>

</div>

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
                    <div className="col-lg-4 col-md-6 col-sm-10 article-card my-4" data-category="nutrition">
                        <div className="card_main_article_container">
                            <div className="card" style={{ width: "100%" }}>
                                <img
                                    src="image/food5.jpg"
                                    className="card-img-top "
                                    alt="..."
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <div className="text_marker d-flex align-items-center mb-2">
                                        <div className="marker" />
                                        <h4 className="mx-2 mb-0">الكربوهيدرات</h4>
                                    </div>
                                    <p className="card-text">
                                        تعتبر المصدر الأساسي للطاقه المطلوبه للجسم.
                                        وهي عباره عن جزيئات سكريه  متسلسله.
                                    </p>
                                    <button
                                        type="button"
                                        className="btn2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#articleModal1nutrition4"
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
                            id="articleModal1nutrition4"
                            tabIndex={-1}
                            aria-labelledby="articleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content text-dark">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="articleModalLabel">
                                        الكربوهيدرات
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            <img
                                                src="image/food5.jpg"
                                                className="w-100 img-fluid"
                                                alt=""
                                            />
                                        </p>

                                        <div className="d-flex flex-column ">

                                            <p>🌽🥔 - <strong>الكربوهيدرات:</strong></p>

                                            <p>تعتبر المصدر الأساسي للطاقة المطلوبة للجسم.</p>

                                            <p>وهي عبارة عن جزيئات سكرية متسلسلة، يتم تفكيكها عند دخولها الجسم وتحويلها إلى جلوكوز.</p>

                                            <p>الجلوكوز هو مصدر الطاقة الأساسي لجميع أعضاء الجسم.</p>

                                            <p>📚 - أنواع الكربوهيدرات:</p>

                                            <ul className="list-unstyled">
                                                <li>1️⃣ كربوهيدرات بسيطة</li>
                                                <li>2️⃣ كربوهيدرات معقدة</li>
                                            </ul>

                                            <p>🔹 <strong>الكربوهيدرات البسيطة:</strong></p>

                                            <p>سهلة الهضم وترفع مستوى السكر في الدم بسرعة.</p>

                                            <p>من أنواعها:</p>
                                            <ul className="list-unstyled">
                                                <li>🍬 السكر الأبيض</li>
                                                <li>🍰 الكعك</li>
                                                <li>🥐 المخبوزات السريعة</li>
                                                <li>🍞 الدقيق الأبيض</li>
                                            </ul>

                                            <p>🔹 <strong>الكربوهيدرات المعقدة:</strong></p>

                                            <p>تحتوي على نسبة عالية من المعادن والألياف والفيتامينات مما يجعل هضمها بطيئاً.</p>

                                            <p>من أنواعها:</p>
                                            <ul className="list-unstyled">
                                                <li>🥦 الخضروات</li>
                                                <li>🍎 الفواكه</li>
                                                <li>🥔 الخضروات النشوية مثل البطاطا، البطاطس، الجزر، البازلاء</li>
                                                <li>🌾 الحبوب الكاملة مثل الشوفان</li>
                                                <li> البقوليات</li>
                                            </ul>

                                            <p>💡 البقوليات تعتبر مصدر مكمل للبروتين كما ذكرنا سابقاً، وأيضاً غنية بالكربوهيدرات المعقدة المفيدة.</p>

                                            <p>📈 فوائد الكربوهيدرات المعقدة:</p>
                                            <ul className="list-unstyled">
                                                <li>✅ تساعد في الإحساس الأطول بالشبع</li>
                                                <li>✅ تسيطر على مستوى السكر في الدم</li>
                                                <li>✅ تساعد في خسارة الوزن 🧜‍♂️</li>
                                                <li>✅ تعزز صحة القلب والأوردة 💙</li>
                                            </ul>

                                        </div>


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
                    <div className="col-lg-4 col-md-6 col-sm-10 article-card my-4" data-category="nutrition">
                        <div className="card_main_article_container">
                            <div className="card" style={{ width: "100%" }}>
                                <img
                                    src="image/food66.jpg"
                                    className="card-img-top "
                                    alt="..."
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <div className="text_marker d-flex align-items-center mb-2">
                                        <div className="marker" />
                                        <h4 className="mx-2 mb-0">السعرات الحرارية</h4>
                                    </div>
                                    <p className="card-text">
                                        تعتبر المصدر الأساسي للطاقه المطلوبه للجسم.
                                        وهي عباره عن جزيئات سكريه  متسلسله.
                                    </p>
                                    <button
                                        type="button"
                                        className="btn2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#articleModal1nutrition5"
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
                            id="articleModal1nutrition5"
                            tabIndex={-1}
                            aria-labelledby="articleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content text-dark">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="articleModalLabel">
                                            السعرات الحرارية
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            <img
                                                src="image/food66.jpg"
                                                className="w-100 img-fluid"
                                                alt=""
                                            />
                                        </p>

                                        <div className="d-flex flex-column ">

                                            <p>🔥 - <strong>السعرات الحرارية:</strong></p>

                                            <p>قبل ما نتكلم عنها، خليك عارف إن:</p>
                                            <ul className="list-unstyled">
                                                <li>1️⃣ - 1 جم بروتين = 4 سعرات حرارية</li>
                                                <li>2️⃣ - 1 جم كاربوهيدرات = 4 سعرات حرارية</li>
                                                <li>3️⃣ - 1 جم دهون = 9 سعرات حرارية</li>
                                            </ul>

                                            <p>✅ السعرات دي هي مقياس الوقود اللازم للجسم يومياً.</p>

                                            <p>💡 - طيب إزاي أحسب احتياجي من السعرات؟</p>

                                            <p>هتحتاج تعرف وزنك وطولك وسنك. مثلا:</p>
                                            <ul className="list-unstyled">
                                                <li>⚖️ الوزن: 80 كجم</li>
                                                <li>📏 الطول: 170 سم</li>
                                                <li>🎂 السن: 25 سنة</li>
                                            </ul>

                                            <p>✏️ - معادلة الحساب:</p>

                                            <p><code>66 + (الوزن × 13.7) + (الطول × 5) - (السن × 6.8) = PMR</code></p>

                                            <p>تطبيق المعادلة:</p>
                                            <p><strong>PMR = 1842</strong> سعر حراري</p>

                                            <p>🏃‍♂️ - نحسب المجهود:</p>
                                            <ul className="list-unstyled">
                                                <li>🔹 شخص قليل النشاط (1-2 يوم رياضة/أسبوع): PMR × 1.2</li>
                                                <li>🔹 شخص متوسط النشاط (2-3 أيام حديد/أسبوع): PMR × 1.5</li>
                                                <li>🔹 شخص عالي النشاط (5-7 أيام رياضة/أسبوع): PMR × 1.7</li>
                                            </ul>

                                            <p>مثلاً: <code>1842 × 1.5 = 2763</code> سعر حراري يومياً.</p>

                                            <p>📈 - تقسيم السعرات على المغذيات:</p>

                                            <ul className="list-unstyled">
                                                <li>🔹 البروتين: 80 × 1.5 = 120 جم بروتين</li>
                                                <li>🔹 120 جم × 4 = 480 سعر حراري من البروتين</li>
                                                <li>🔹 باقي السعرات: 2763 - 480 = 2283 سعر حراري</li>
                                                <li>🔹 الدهون: 2283 × 25٪ = 570.75 سعر حراري ÷ 9 = 63.4 جم دهون</li>
                                                <li>🔹 الكاربوهيدرات: المتبقي = 428 جم كارب</li>
                                            </ul>

                                            <p>📊 النتيجة النهائية لاحتياجك اليومي:</p>
                                            <ul className="list-unstyled">
                                                <li>🍗 120 جم بروتين</li>
                                                <li>🥑 63.4 جم دهون</li>
                                                <li>🌽 428 جم كاربوهيدرات</li>
                                            </ul>

                                            <p>✅ لو هدفك زيادة وزن: تزود من 500 إلى 1000 كالوري.</p>
                                            <p>✅ لو هدفك خسارة وزن: تقلل تدريجياً من 300 إلى 500 كالوري.</p>

                                            <p>❗ أهم حاجة ماتنزلش أبداً تحت الـ PMR علشان تحافظ على صحتك. 🏋️‍♂️</p>

                                        </div>


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
                    <div className="col-lg-4 col-md-6 col-sm-10 article-card my-4" data-category="health">
                        <div className="card_main_article_container">
                            <div className="card" style={{ width: "100%" }}>
                                <img
                                    src="image/health1.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <div className="text_marker d-flex align-items-center mb-2">
                                        <div className="marker" />
                                        <h4 className="mx-2 mb-0">النوم وتأثيره على الصحة</h4>
                                    </div>
                                    <p className="card-text">
                                        النوم الكافي ضروري جداً للحفاظ على صحة الجسم والعقل.
                                        قلة النوم بتؤدي إلى ضعف المناعة وزيادة الوزن  .
                                    </p>
                                    <button
                                        type="button"
                                        className="btn2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#articleModalLabehealth1"
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
                            id="articleModalLabehealth1"
                            tabIndex={-1}
                            aria-labelledby="articleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content text-dark">
                                    <div className="modal-header ">
                                        <h5 className="modal-title" id="articleModalLabel">
                                            {" "}
                                            النوم وتأثيره على الصحة
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <img
                                            src="image/health1.jpg"
                                            className="w-100 mb-3 "
                                            alt=""
                                        />
                                        <div className="d-flex flex-column ">

                                            <p>🧠 - <strong>النوم وتأثيره على الصحة:</strong></p>
                                            <p>النوم الكافي ضروري جداً للحفاظ على صحة الجسم والعقل.</p>
                                            <p>قلة النوم بتؤدي إلى ضعف المناعة وزيادة الوزن ومشاكل نفسية. 👎</p>
                                            <p>معدل النوم المثالي:</p>
                                            <ul className="list-unstyled">
                                                <li>🔹 البالغين: 7-9 ساعات يومياً</li>
                                                <li>🔹 المراهقين: 8-10 ساعات يومياً</li>
                                                <li>🔹 الأطفال: أكثر من 10 ساعات يومياً</li>
                                            </ul>
                                            <p>💡 نصيحة: حاول تبعد عن الشاشات قبل النوم بساعة، وحافظ على بيئة نوم مظلمة وهادئة.</p>

                                            <p>🥗 - <strong>التغذية السليمة وأهميتها:</strong></p>
                                            <p>التغذية الصحية بتساعد في تعزيز المناعة، تحسين الهضم، وزيادة الطاقة اليومية. 💪</p>
                                            <ul className="list-unstyled">
                                                <li>✔️ تناول خضروات وفواكه يومياً</li>
                                                <li>✔️ اشرب مياه بانتظام (على الأقل 2 لتر يومياً)</li>
                                                <li>✔️ قلل من السكريات والدهون المشبعة</li>
                                            </ul>



                                        </div>

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
                    <div className="col-lg-4 col-md-6 col-sm-10 article-card my-4" data-category="health">
                        <div className="card_main_article_container">
                            <div className="card" style={{ width: "100%" }}>
                                <img
                                    src="image/health2.jpg"
                                    className="card-img-top"
                                    alt="..."
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <div className="text_marker d-flex align-items-center mb-2">
                                        <div className="marker" />
                                        <h4 className="mx-2 mb-0">أهمية شرب المياه لصحتك</h4>
                                    </div>
                                    <p className="card-text">
                                        المياه عنصر أساسي في كل وظائف الجسم! من تنظيم درجة الحرارة، للهضم، لطرد السموم.                                    </p>
                                    <button
                                        type="button"
                                        className="btn2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#articleModalLabehealth2"
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
                            id="articleModalLabehealth2"
                            tabIndex={-1}
                            aria-labelledby="articleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content text-dark">
                                    <div className="modal-header ">
                                        <h5 className="modal-title" id="articleModalLabel">
                                            {" "}
                                            أهمية شرب المياه لصحتك
                                        </h5>
                                    </div>
                                    <div className="modal-body">
                                        <img
                                            src="image/health2.jpg"
                                            className="w-100 mb-3 "
                                            alt=""
                                        />
                                        <div className="d-flex flex-column ">

                                            <p>💧 - <strong>أهمية شرب المياه لصحتك:</strong></p>
                                            <p>المياه عنصر أساسي في كل وظائف الجسم! من تنظيم درجة الحرارة، للهضم، لطرد السموم. 🚰</p>
                                            <p>قلة شرب المياه ممكن تسبب:</p>
                                            <ul className="list-unstyled">
                                                <li>✔️ جفاف وإرهاق عام</li>
                                                <li>✔️ صداع مستمر</li>
                                                <li>✔️ ضعف تركيز وقلة نشاط</li>
                                            </ul>
                                            <p>معدل استهلاك المياه الموصى به:</p>
                                            <ul className="list-unstyled">
                                                <li>🔹 الرجال: حوالي 3.7 لتر يومياً</li>
                                                <li>🔹 النساء: حوالي 2.7 لتر يومياً</li>
                                            </ul>
                                            <p>💡 نصيحة: خلي معاك دايمًا ازازة مياه واشرب منها طول اليوم حتى لو مش عطشان. 😉</p>


                                        </div>

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
            </section>
            <Footer/>
        </div>
    );
};

export default Article;


