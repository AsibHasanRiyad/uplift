
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function SwiperSlider() {

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper  "
      >
        <SwiperSlide className="">
          <img
            className=" rounded-2xl w-full h-full"
            src="https://i.ibb.co/QNC74jW/MSF163911-High-0.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-2xl w-full h-full"
            src="https://i.ibb.co/N1LD1TT/larm-rmah-AEa-TUnvneik-unsplash.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-2xl w-full h-full"
            src="https://i.ibb.co/6g7CPCb/mario-heller-h-XLk-Fpv-KRys-unsplash.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-2xl w-full h-full"
            src="https://i.ibb.co/svKLcFX/ev-IWJH-l-vb4k-unsplash.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-2xl w-full h-full"
            src="https://i.ibb.co/kcpTh2Q/water.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-2xl w-full h-full"
            src="https://i.ibb.co/8YHbfRn/christian-bowen-I0-It-Pt-Is-VEE-unsplash.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-2xl w-full h-full"
            src="https://i.ibb.co/hCKvkJ8/139042694-15889910670181n.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-2xl w-full h-full"
            src="https://i.ibb.co/vV9KGKB/Digital-Education-in-India.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-2xl w-full h-full"
            src="https://i.ibb.co/tC0tQdX/luca-zanon-eea-B8t85x-DU-unsplash.jpg"
          />
        </SwiperSlide>

        {/* <SwiperSlide>
          {
            data.map(each => <div key={each.slogan}>
              {each.slogan}
            </div> )
          }
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
