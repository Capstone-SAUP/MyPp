import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from "../assets/logo.png";
import glitch from "../assets/glitch.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Link = ({ page, selectedPage, setselectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-white" : ""
      } hover:text-rose-500 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setselectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setselectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img
          className="absolute z-10 h-16 w-16 hover:opacity-0 bg-deep-red"
          src={logo}
          alt="Logo"
        />
        <img className="h-[65px] w-[65px] " src={glitch} alt="Logo" />

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
            />
            <Link
              page="Contacts"
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}

        {/*MOBILE MENU POPUP*/}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-cyan-500 w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            {/* Menu Items */}
            <div className="flex flex-col gap-10 ml-[33%] text-deep-red">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setselectedPage={setselectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setselectedPage={setselectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setselectedPage={setselectedPage}
              />
              <Link
                page="Contacts"
                selectedPage={selectedPage}
                setselectedPage={setselectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
