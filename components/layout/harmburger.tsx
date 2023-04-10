import Link from "next/link";
import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      {/* Hamburger button */}
      <div className="mt-10 ml-16 flex ">
        {/* Hint: Hamburger is a custom class defined in the input.css file */}
        <div className="bg-colBlue04 rounded py-2 relative mr-14 -mt-4">
          <div
            id="menu-btn"
            className={` top-1 left-4  mr-10   z-40 flex hamburger md:hidden focus:outline-none ${
              isOpen ? "open" : ""
            }`}
            onClick={toggleMenu}
          >
            <span className="hamburger-top  "></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Hint: We are using JS to put the Open class on the Hamburger when it is clicked and then change it from display:hidden to display: flex */}
      <div
        id="menu"
        className={`absolute top-0 bottom left-0 ${
          isOpen ? "flex" : "hidden"
        } flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-colBlue04`}
      >
        <Link
          href="/"
          className="hover:text-bg_Color3"
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          href="/howitworks"
          className="hover:text-bg_Color3"
          onClick={handleLinkClick}
        >
          How It works
        </Link>
        <Link
          href="/featured"
          className="hover:text-bg_Color3"
          onClick={handleLinkClick}
        >
          Featured
        </Link>
        {/* <Link
          href="/contact-us"
          className="hover:text-bg_Color3"
          onClick={handleLinkClick}
        >
          Contact
        </Link> */}
      </div>

      {/* <button
        onClick={() => setShowModal(true)}
        className="text-white font-dmsans font-medium bg-colBlue02 px-4 py-2 rounded-lg   "
      >
        Get early access
      </button> */}
    </nav>
  );
};

export default HamburgerMenu;
