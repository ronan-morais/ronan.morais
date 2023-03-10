"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const WorksSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
        el: "#pagination",
      }}
      speed={500}
      className="w-full h-full pb-5"
    >
      <SwiperSlide>
        <div className="flex flex-col lg:flex-row h-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            loop={false}
            pagination={{
              clickable: true,
            }}
            direction="vertical"
            speed={500}
            className="w-full h-full"
          >
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/vidalcred/vidalcred-1.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/vidalcred/vidalcred-2.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/vidalcred/vidalcred-3.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/vidalcred/vidalcred-4.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/vidalcred/vidalcred-5.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/vidalcred/vidalcred-6.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/vidalcred/vidalcred-7.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/vidalcred/vidalcred-8.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/vidalcred/vidalcred-9.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="w-full lg:w-3/4 xl:w-3/6 p-10 lg:p-20 text-gray-600 text-sm lg:text-lg font-montserrat">
            <div className="mb-5">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-dmserif text-gray-600 mix-blend-multiply">
                VidalCred
              </h4>
              <h5 className="font-bold text-xs sm:text-sm pt-1 pb-1">
                Personal financial credit
              </h5>
            </div>
            <span>
              <ul className="list-disc ml-4 lg:leading-10">
                <li className="lg:eading-7">
                  <b>Branding</b> (design and management of visual identity)
                </li>
                <li>
                  <b>Social media</b> (design and management)
                </li>
                <li>
                  <b>Printed arts</b> (stationary and posters)
                </li>
                <li>
                  <b>Website</b> (prototype in Figma)
                </li>
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
                Laborat??rio de an??lises cl??nicas e citol??gicas
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
