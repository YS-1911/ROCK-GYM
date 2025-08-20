import React from 'react';
import { NavLink } from "react-router";

const Articleshome = () => {
    return (
        <div>
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

        </div>
    );
}

export default Articleshome;
