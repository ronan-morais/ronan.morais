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
      speed={800}
    >
      <SwiperSlide className="w-full h-full">
        <Image
          src="/images/about/1-min.jpg"
          fill
          style={{ objectFit: "cover", filter: "grayscale(100%)" }}
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide className="w-full h-full">
        <Image
          src="/images/about/2-min.jpg"
          fill
          style={{ objectFit: "cover", filter: "grayscale(100%)" }}
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide className="w-full h-full">
        <Image
          src="/images/about/3-min.jpg"
          fill
          style={{ objectFit: "cover", filter: "grayscale(100%)" }}
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide className="w-full h-full">
        <Image
          src="/images/about/4-min.jpg"
          fill
          style={{ objectFit: "cover", filter: "grayscale(100%)" }}
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide className="w-full h-full">
        <Image
          src="/images/about/5-min.jpg"
          fill
          style={{ objectFit: "cover", filter: "grayscale(100%)" }}
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default AboutSlider;
