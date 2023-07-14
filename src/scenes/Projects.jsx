import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from "swiper";
import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";

<link rel="stylesheet" href="styles.css"/>

functiondisable() {
  document.body.classList.add("stop-scrolling");
}

var swiper = new Swiper(".portfolio_container", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

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



<section className="justify-center items-center text-center" class="portfolio section" id="portfolio">
  
              {/*SWIPER JS */}
              <div class="swiper">
                <div class="portfolio_container container swiper-container">
                    <div class="swiper-wrapper">
                        <div class="portfolio_content grid swiper-slide">
                            <img src={project1} alt="" class="portfolio_img"/> 

                            <div class="portfolio_data">
                                <h3 class="portfolio_title">HAU Website Redesign</h3>
                                <p class="portfolio_description">A concept of how Holy Angel University website would look 
                                    like under revision.</p>  
                            </div>
                        </div>

                        <div class="portfolio_content grid swiper-slide">
                            <img src={project2} alt="" class="portfolio_img"/> 

                            <div class="portfolio_data">
                                <h3 class="portfolio_title">Project Database</h3>
                                <p class="portfolio_description">A project used for searching, deleting, creating and editing books in HAU Library.
                                </p>  
                            </div>
                        </div>

                        <div class="portfolio_content grid swiper-slide">
                            <img src={project3} alt="" class="portfolio_img"/> 

                            <div class="portfolio_data">
                                <h3 class="portfolio_title">LDM Pharmacy</h3>
                                <p class="portfolio_description">Prototype website used for buying medicines online, a community drugstore.
                                </p>  
                            </div>
                        </div>

                        <div class="portfolio_content grid swiper-slide">
                            <img src={project4} alt="" class="portfolio_img"/> 

                            <div class="portfolio_data">
                                <h3 class="portfolio_title">C.E.A</h3>
                                <p class="portfolio_description">Online shopping clothing store that we developed as a final requirement for a subject.
                                </p>  
                            </div>
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
