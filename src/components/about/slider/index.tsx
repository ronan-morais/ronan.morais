"use client";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/swiper.min.css";
import "swiper/css/autoplay";

const AboutSlider = () => {
  return (
    <Swiper
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{ delay: 2000 }}
      loop={true}
    >
      <SwiperSlide
        className="bg-[url(/images/about/1-min.jpg)] bg-cover w-full h-full bg-right"
        style={{ filter: "grayscale(100%)" }}
      >
        &nbsp;
      </SwiperSlide>
      <SwiperSlide
        className="bg-[url(/images/about/2-min.jpg)] bg-cover w-full h-full bg-right"
        style={{ filter: "grayscale(100%)" }}
      >
        &nbsp;
      </SwiperSlide>
      <SwiperSlide
        className="bg-[url(/images/about/3-min.jpg)] bg-cover w-full h-full bg-left"
        style={{ filter: "grayscale(100%)" }}
      >
        &nbsp;
      </SwiperSlide>
      <SwiperSlide
        className="bg-[url(/images/about/4-min.jpg)] bg-cover w-full h-full bg-left"
        style={{ filter: "grayscale(100%)" }}
      >
        &nbsp;
      </SwiperSlide>
      <SwiperSlide
        className="bg-[url(/images/about/5-min.jpg)] bg-cover w-full h-full bg-center"
        style={{ filter: "grayscale(100%)" }}
      >
        &nbsp;
      </SwiperSlide>
    </Swiper>
  );
};

export default AboutSlider;
