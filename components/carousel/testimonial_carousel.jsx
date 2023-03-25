import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { testimonial_data } from "../../data/testimonial_data";
import { useRouter } from "next/router";
import pathChecking from "../../utils/pathChecking";

const Testimonial_carousel = () => {
  const route = useRouter();

  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          240: {
            slidesPerView: 1,
          },
          565: {
            slidesPerView: 2,
          },
        }}
        pagination={{ clickable: true }}
        className=" card-slider-4-columns !py-5 !overflow-visible"
      >
        {testimonial_data.map((item) => {
          const { id, img, title, desc, name } = item;
          return (
            <SwiperSlide className="text-white" key={id}>
              <div
                className={`testimonial-item flex items-start justify-start flex-wrap gap-5 rounded-2.5xl bg-white p-12 dark:bg-jacarta-700   ${
                  pathChecking(route.asPath, "/home/home_10")
                    ? "border dark:border-0 border-jacarta-100"
                    : ""
                }`}
              >
                <img
                  src={img}
                  alt={title}
                  className="testimonial-img w-24 h-24 self-start rounded-2.5xl lg:w-auto"
                />
                <div>
                  
                </div>
                <div className="-ml-14 -mt-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-accent dark:border-jacarta-700 md:mb-0 md:w-16">
                  <img src="/images/testimonials/quote.png" alt="quote" />
                </div>
                  <p className="testimonial-desc text-sm leading-normal text-jacarta-700 dark:text-white">
                    {desc}
                  </p>
                  <span className="testimonial-title text-md font-medium tracking-tight text-jacarta-400 justify-self-start">
                    {title}
                  </span>
                  <span className="testimonial-name mt-0.5 font-display text-sm font-medium text-jacarta-700 dark:text-white">
                    {name}
                  </span>
                </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Testimonial_carousel;
