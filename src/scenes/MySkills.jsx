import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* Header and image section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex
            nulla corrupti illum optio odio aperiam doloribus amet explicabo,
            laborum eaque molestias deserunt facilis assumenda eligendi harum
            totam voluptates. Vel!
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
            {isAboveMediumScreens ? (
              <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
                        before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                        before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                     max-w-[400px] md:max-w-[600px]"
              src="../assets/zooo.png"
            />
          </div>
            )}
        </div>
      </div>
    </section>
  );
};
