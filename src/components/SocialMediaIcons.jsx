import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import linkdein from "../assets/linkedin.png";
import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png"

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center w-1/3 md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/aenon-jorish-santiago-466492246/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={fb} alt="fb"/>
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/aenon-jorish-santiago-466492246/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={ig} alt="ig"/>
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/aenon-jorish-santiago-466492246/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkdein} alt="linkedin"/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
