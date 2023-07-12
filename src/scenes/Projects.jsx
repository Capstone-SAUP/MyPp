import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/project-1.jpeg";


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
        

      </motion.div>
    </section>
  );
};

export default Projects;
