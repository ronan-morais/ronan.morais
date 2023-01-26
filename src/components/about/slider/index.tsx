"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import 'swiper/swiper.min.css';

const AboutSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
    >
      <SwiperSlide className="bg-[url(/images/about/1.jpg)] bg-cover w-full h-full bg-right" style={{filter: "grayscale(100%)"}}>&nbsp;</SwiperSlide>
      <SwiperSlide className="bg-[url(/images/about/2.jpg)] bg-cover w-full h-full bg-right" style={{filter: "grayscale(100%)"}}>&nbsp;</SwiperSlide>
      <SwiperSlide className="bg-[url(/images/about/3.jpg)] bg-cover w-full h-full bg-left" style={{filter: "grayscale(100%)"}}>&nbsp;</SwiperSlide>
      <SwiperSlide className="bg-[url(/images/about/4.jpg)] bg-cover w-full h-full bg-left" style={{filter: "grayscale(100%)"}}>&nbsp;</SwiperSlide>
      <SwiperSlide className="bg-[url(/images/about/5.jpg)] bg-cover w-full h-full bg-center" style={{filter: "grayscale(100%)"}}>&nbsp;</SwiperSlide>
    </Swiper>
  );
};

export default AboutSlider;
