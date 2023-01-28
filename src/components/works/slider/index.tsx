"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";

const WorksSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      speed={500}
      className="h-full"
    >
      <SwiperSlide>
        <div className="flex flex-col lg:flex-row h-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            loop={true}
            direction="vertical"
            pagination={{
              clickable: true,
            }}
            speed={500}
            className="w-full h-full"
          >
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/zebra.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/zebra.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/zebra.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/zebra.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="w-full lg:w-3/4 xl:w-3/6 p-10 lg:p-20 text-gray-600 text-sm lg:text-lg font-montserrat">
            <div className="mb-5">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-dmserif text-gray-600 mix-blend-multiply">
                Labnec
              </h4>
              <h5 className="font-bold text-sm pt-1">
                Laboratório de análises clínicas e citológicas
              </h5>
            </div>
            <span>
              <ul className="list-disc ml-4">
                <li>Branding (design and management of visual identity)</li>
                <li>Social media (design and management)</li>
              </ul>
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col lg:flex-row h-full">
          <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/zebra.jpg)] flex bg-cover bg-center h-full">
            &nbsp;
          </div>
          <div className="w-full lg:w-3/4 xl:w-3/6 p-10 lg:p-20 text-gray-600 text-sm lg:text-lg font-montserrat">
            <div className="mb-5">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-dmserif text-gray-600 mix-blend-multiply">
                Labnec
              </h4>
              <h5 className="font-bold text-sm pt-1">
                Laboratório de análises clínicas e citológicas
              </h5>
            </div>
            <span>
              <ul className="list-disc ml-4">
                <li>Branding (design and management of visual identity)</li>
                <li>Social media (design and management)</li>
              </ul>
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col lg:flex-row h-full">
          <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/zebra.jpg)] flex bg-cover bg-center h-full">
            &nbsp;
          </div>
          <div className="w-full lg:w-3/4 xl:w-3/6 p-10 lg:p-20 text-gray-600 text-sm lg:text-lg font-montserrat">
            <div className="mb-5">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-dmserif text-gray-600 mix-blend-multiply">
                Labnec
              </h4>
              <h5 className="font-bold text-sm pt-1">
                Laboratório de análises clínicas e citológicas
              </h5>
            </div>
            <span>
              <ul className="list-disc ml-4">
                <li>Branding (design and management of visual identity)</li>
                <li>Social media (design and management)</li>
              </ul>
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col lg:flex-row h-full">
          <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/zebra.jpg)] flex bg-cover bg-center h-full">
            &nbsp;
          </div>
          <div className="w-full lg:w-3/4 xl:w-3/6 p-10 lg:p-20 text-gray-600 text-sm lg:text-lg font-montserrat">
            <div className="mb-5">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-dmserif text-gray-600 mix-blend-multiply">
                Labnec
              </h4>
              <h5 className="font-bold text-sm pt-1">
                Laboratório de análises clínicas e citológicas
              </h5>
            </div>
            <span>
              <ul className="list-disc ml-4">
                <li>Branding (design and management of visual identity)</li>
                <li>Social media (design and management)</li>
              </ul>
            </span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default WorksSlider;
