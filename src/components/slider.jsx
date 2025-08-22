
// Import React
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

import "../css/slide.css";

// import required modules
import { Pagination, Grid } from "swiper/modules";

const Slider = () => {
    return (
        <div>
            <Swiper
                breakpoints={{
                    // الموبايل (أقل من 640px) => 1
                    0: {
                        slidesPerView: 1,
                    },
                    // التابلت (>=640px) => 2
                    640: {
                        slidesPerView: 2,
                    },
                    // الديسكتوب (>=1024px) => 3
                    1024: {
                        slidesPerView: 2,
                    },
                }}
                spaceBetween={10}
                pagination={{ clickable: true }}
                modules={[Pagination, Grid]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="../../image/photo_glutes.webp" className="img-fluid" alt="Slide 4" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../image/photo_madad.webp" className="img-fluid" alt="Slide 3" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../image/dambles.webp" className="img-fluid" alt="Slide 1" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../image/photo_shoulder.webp" className="img-fluid" alt="Slide 2" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../image/t-bar.webp" className="img-fluid" alt="Slide 4" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../image/squate.webp" className="img-fluid" alt="Slide 4" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../image/push-bench.webp" className="img-fluid" alt="Slide 4" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../image/push-leg.webp" className="img-fluid" alt="Slide 4" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../image/buterfly.webp" className="img-fluid" alt="Slide 4" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../image/glutes2.webp" className="img-fluid" alt="Slide 4" loading="lazy" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;
