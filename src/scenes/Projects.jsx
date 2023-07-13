import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/project-1.jpeg";

<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>


const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
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
      </motion.div>
      {/* PROJECTS */}
      <motion.div
        className="sm:grid sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <section class="portfolio section" id="portfolio">
                <h2 class="section_title">Portfolio</h2>
                <span class="section_subtitle">Recent Works</span>

                <div class="portfolio_container container swiper-container">
                    <div class="swiper-wrapper">
                        <div class="portfolio_content grid swiper-slide">
                            <img src="assets/img/img1.png" alt="" class="portfolio_img"/> 

                            <div class="portfolio_data">
                                <h3 class="portfolio_title">HAU Website Redesign</h3>
                                <p class="portfolio_description">A concept of how Holy Angel University website would look 
                                    like under revision.</p>  
                            </div>
                        </div>

                        <div class="portfolio_content grid swiper-slide">
                            <img src="assets/img/img2.png" alt="" class="portfolio_img"/> 

                            <div class="portfolio_data">
                                <h3 class="portfolio_title">Project Database</h3>
                                <p class="portfolio_description">A project used for searching, deleting, creating and editing books in HAU Library.
                                </p>  
                            </div>
                        </div>

                        <div class="portfolio_content grid swiper-slide">
                            <img src="assets/img/img3.png" alt="" class="portfolio_img"/> 

                            <div class="portfolio_data">
                                <h3 class="portfolio_title">LDM Pharmacy</h3>
                                <p class="portfolio_description">Prototype website used for buying medicines online, a community drugstore.
                                </p>  
                            </div>
                        </div>

                        <div class="portfolio_content grid swiper-slide">
                            <img src="assets/img/img4.png" alt="" class="portfolio_img"/> 

                            <div class="portfolio_data">
                                <h3 class="portfolio_title">C.E.A</h3>
                                <p class="portfolio_description">Online shopping clothing store that we developed as a final requirement for a subject.
                                </p>  
                            </div>
                        </div>

                        <div class="portfolio_content grid swiper-slide">
                            <img src="assets/img/img5.png" alt="" class="portfolio_img"/> 

                            <div class="portfolio_data">
                                <h3 class="portfolio_title">Art Haven</h3>
                                <p class="portfolio_description">Art promotion website for local and international artists all around the globe.
                                </p>  
                            </div>
                        </div>

                        <div class="portfolio_content grid swiper-slide">
                            <img src="assets/img/img6.png" alt="" class="portfolio_img"/> 

                            <div class="portfolio_data">
                                <h3 class="portfolio_title">Old portfolio</h3>
                                <p class="portfolio_description">A portfolio that i developed for our second semester.
                                </p>  
                            </div>
                        </div>

                    </div>
                </div>
            </section>   
        

      </motion.div>
    </section>
  );
};

export default Projects;
