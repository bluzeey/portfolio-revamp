import { useRouter } from "next/router";
import pathChecking from "../../utils/pathChecking";
import Testimonial_carousel from "../carousel/testimonial_carousel";

const Testimonial = () => {
  const route = useRouter();

  return (
    <div>
      {/* <!-- Testimonials --> */}
      <section className="testimonial-section bg-light-base py-24 dark:bg-jacarta-800">
        <div className="container relative overflow-hidden xl:left-[calc((100vw-1202px)/4)] xl:max-w-[calc(1202px+((100vw-1202px)/2))] xl:pr-[calc((100vw-1176px)/2)]">
          <div className="mx-auto mb-12 max-w-sm text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              What people say about me 
            </h2>
            <p className="text-lg dark:text-jacarta-300">
              Here are some of the recommendations 
            </p>
          </div>

          <Testimonial_carousel />
        </div>
      </section>
      {/* <!-- end testimonials --> */}
    </div>
  );
};

export default Testimonial;
