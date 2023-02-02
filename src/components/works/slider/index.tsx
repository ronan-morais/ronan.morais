"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const WorksSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
      loop={false}
      pagination={{
        clickable: true,
        el: "#pagination",
      }}
      className="w-full h-full pb-5"
    >
      <SwiperSlide>
        <div className="flex flex-col lg:flex-row h-full">
          <Swiper
            modules={[Pagination]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            loop={false}
            pagination={{
              clickable: true,
            }}
            direction="horizontal"
            className="w-full h-full"
          >
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/ticketpraja/ticket1-min.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/ticketpraja/ticket2-min.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/ticketpraja/ticket3-min.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/ticketpraja/ticket4-min.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/ticketpraja/ticket5-min.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/ticketpraja/ticket6-min.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-300 w-full lg:w-4/4 bg-[url(/images/works/ticketpraja/ticket7-min.jpg)] flex bg-cover bg-center h-full">
                &nbsp;
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="w-full lg:w-3/4 xl:w-3/6 p-10 lg:p-20 text-gray-600 text-sm lg:text-lg font-montserrat">
            <div className="mb-5">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-dmserif text-gray-600 mix-blend-multiply">
                Ticket pra Já
              </h4>
              <h5 className="font-bold text-xs sm:text-sm pt-1 mb-1 lg:border-b-4 lg:pb-6 lg:mb-4">
                Ticket Sales Management
              </h5>
            </div>
            <div>
              <ul className="list-disc ml-4 lg:leading-10 text-sm">
                <li>
                  <div className="lg:leading-5">
                    <b>Branding</b> (design and management of visual identity)
                  </div>
                </li>
                <li>
                  <div className="lg:leading-5">
                    <b>UX/UI</b> (Planning, validating and prototyping on Figma)
                  </div>
                </li>
                <li>
                  <div className="lg:leading-5">
                    <b>Front-end development</b> (React / NextJS coding, public interface and internal dashboard)
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col lg:flex-row h-full">
          <Swiper
            modules={[Pagination]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            loop={false}
            pagination={{
              clickable: true,
            }}
            direction="horizontal"
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
              <h5 className="font-bold text-xs sm:text-sm pt-1 mb-1 lg:border-b-4 lg:pb-6 lg:mb-4">
                Personal Financial Credit
              </h5>
            </div>
            <div>
              <ul className="list-disc ml-4 lg:leading-10 text-sm">
                <li>
                  <div className="lg:leading-5">
                    <b>Branding</b> (design and management of visual identity)
                  </div>
                </li>
                <li>
                  <div className="lg:leading-5">
                    <b>Social media</b> (design and management)
                  </div>
                </li>
                <li>
                  <div className="lg:leading-5">
                    <b>Printed arts</b> (stationary and posters)
                  </div>
                </li>
                <li>
                  <div className="lg:leading-5">
                    <b>Website</b> (prototype in Figma)
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default WorksSlider;
