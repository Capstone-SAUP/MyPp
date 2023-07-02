import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/aenon-jorish-santiago-466492246/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/aenon-jorish-santiago-466492246/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/aenon-jorish-santiago-466492246/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
