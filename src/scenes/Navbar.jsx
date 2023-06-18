import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setselectedPage}) => {
    const lowerCasePage = page.toLowerCase()
    return(
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-white" : ""}
        hover:text-rose-500 transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setselectedPage(lowerCasePage)}
        >
         {page}
        </AnchorLink>
    )
}

const Navbar = ({ selectedPage, setselectedPage }) =>{
    const [isMenuToggled, setIsMenuToggled] = useState (false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return (
        <nav className={`z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">A.J</h4>

                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setselectedPage={setselectedPage}
                        />
                    </div>
                ): (<div></div>)} 
            </div>
        </nav>
    )
};

export default Navbar;