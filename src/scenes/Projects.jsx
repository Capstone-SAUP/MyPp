import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";
import MediaCard from "../cards/projectsaup";

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-full mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-red">PRO</span>JECTS
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-1/3" />
        </div>
        <p className="mt-10 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet
          placeat error voluptatem harum, obcaecati delectus, dolor amet
          exercitationem tempore officiis quam suscipit quis quod sed! Doloribus
          possimus officiis nulla?
        </p>

        {/* PROJECTS */}
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div class="swiper">
            <div class="portfolio_container container swiper-container">
              <div class="swiper-wrapper">
                <SwiperSlide>
                <MediaCard/>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="relative inline-block">
                    <img src={project2} alt=""/>
                    <div className="absolute inset-0 z-10 bg-deep-red text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                      <span className="text-white text-lg font-bold">Tite</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div class="portfolio_content grid swiper-slide">
                    <img src={project3} alt="" class="portfolio_img" />

                    <div class="portfolio_data">
                      <h3 class="portfolio_title">LDM Pharmacy</h3>
                      <p class="portfolio_description">
                        Prototype website used for buying medicines online, a
                        community drugstore.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div class="portfolio_content grid swiper-slide">
                    <img src={project4} alt="" class="portfolio_img" />

                    <div class="portfolio_data">
                      <h3 class="portfolio_title">C.E.A</h3>
                      <p class="portfolio_description">
                        Online shopping clothing store that we developed as a
                        final requirement for a subject.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </div>
          </div>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Projects;
