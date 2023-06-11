import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

// banner images
import banner1 from "../../../assets/home/banner1.jpg";
import banner2 from "../../../assets/home/banner2.jpg";
import banner3 from "../../../assets/home/banner3.jpg";
import banner4 from "../../../assets/home/banner4.jpg";
import banner5 from "../../../assets/home/banner5.jpg";
import banner6 from "../../../assets/home/banner6.jpg";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <Swiper
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-[380px] sm:h-[480px] md:h-[560px] lg:h-[780px] xl:h-[900px] 2xl:h-[1100px]"
      >
        <SwiperSlide className="relative">
          <div className="relative">
            <img
              className="w-full h-full object-cover"
              src={banner4}
              alt="banner"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 md:mb-5 font-bold text-white w-3/5">
              Discover the Flavors of Summer at{" "}
              <span className="title-text">Escoffier</span>
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-5 text-white font-semibold md:w-4/5">
              Discover Affordable Culinary Arts Education for All Skill Levels
            </h3>
            <button className="btn-primary">
              <span className="flex items-center gap-1">
                Enroll in Our Latest Program <FaArrowRight />
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="relative">
            <img
              className="w-full h-full object-cover"
              src={banner3}
              alt="banner"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 md:mb-5 font-bold text-white w-3/5">
              Discover the Flavors of Summer at{" "}
              <span className="title-text">Escoffier</span>
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-5 text-white font-semibold md:w-4/5">
              Discover Affordable Culinary Arts Education for All Skill Levels
            </h3>
            <button className="btn-primary">
              <span className="flex items-center gap-1">
                Enroll in Our Latest Program <FaArrowRight />
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="relative">
            <img
              className="w-full h-full object-cover"
              src={banner1}
              alt="banner"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 md:mb-5 font-bold text-white w-3/5">
              Discover the Flavors of Summer at{" "}
              <span className="title-text">Escoffier</span>
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-5 text-white font-semibold md:w-4/5">
              Discover Affordable Culinary Arts Education for All Skill Levels
            </h3>
            <button className="btn-primary">
              <span className="flex items-center gap-1">
                Enroll in Our Latest Program <FaArrowRight />
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="relative">
            <img
              className="w-full h-full object-cover"
              src={banner2}
              alt="banner"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 md:mb-5 font-bold text-white w-3/5">
              Discover the Flavors of Summer at{" "}
              <span className="title-text">Escoffier</span>
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-5 text-white font-semibold md:w-4/5">
              Discover Affordable Culinary Arts Education for All Skill Levels
            </h3>
            <button className="btn-primary">
              <span className="flex items-center gap-1">
                Enroll in Our Latest Program <FaArrowRight />
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="relative">
            <img
              className="w-full h-full object-cover"
              src={banner5}
              alt="banner"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 md:mb-5 font-bold text-white w-3/5">
              Discover the Flavors of Summer at{" "}
              <span className="title-text">Escoffier</span>
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-5 text-white font-semibold md:w-4/5">
              Discover Affordable Culinary Arts Education for All Skill Levels
            </h3>
            <button className="btn-primary">
              <span className="flex items-center gap-1">
                Enroll in Our Latest Program <FaArrowRight />
              </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="relative">
            <img
              className="w-full h-full object-cover"
              src={banner6}
              alt="banner"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 md:mb-5 font-bold text-white w-3/5">
              Discover the Flavors of Summer at{" "}
              <span className="title-text">Escoffier</span>
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-5 text-white font-semibold md:w-4/5">
              Discover Affordable Culinary Arts Education for All Skill Levels
            </h3>
            <button className="btn-primary">
              <span className="flex items-center gap-1">
                Enroll in Our Latest Program <FaArrowRight />
              </span>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
