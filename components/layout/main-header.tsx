import Image from "next/image";
import Link from "next/link";
import { AddUser, AddUser01, Search01, Logo, logo, Search } from "@/assets";
import RegistrationModal from "../RegistrationModal";
import EarlyAccessForm from "../EarlyAccessForm";
import { useState } from "react";
import HamburgerMenu from "./harmburger";

//import AnchorLink from "react-anchor-link-smooth-scroll";

function MainHeader() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <header className="flex items-center justify-between mr-20 ">
      <Image
        src={logo}
        alt="LogoImage"
        width={200}
        height={200}
        className="hidden md:flex"
      />

      {/*Navigation Links  */}

      <nav>
        <ul className=" flex-row gap-8 text-xl font-urbanist font-medium  hidden md:flex  ">
          <li className="text-colBlue01">
            <Link href="/">Home</Link>
          </li>
          <li className="text-colGray02">
            <Link href="/howitworks">How It Works</Link>
          </li>
          <li className="text-colGray02">
            <Link href="/featured">Featured</Link>
          </li>
          {/* <li className="text-colGray02">
            <Link href="/testimony">Testimony</Link>
          </li> */}
        </ul>

        {/* Mobile Screen */}

        <div className=" ">
          <div className="flex flex-row md:hidden justify-between relative ">
            <div className="flex flex-col ">
              <Image src={logo} alt="LogoImage" width={150} height={150} />

              <button
                onClick={() => setShowModal(true)}
                className="text-white font-dmsans font-  bg-colBlue02 px-4 py-2 rounded-lg  ml-10 "
              >
                Get early access
              </button>
            </div>

            {/* <div className=" h-full w-[250px]   flex md:hidden justify-end  ">
              <HamburgerMenu />
            </div> */}

            <div className=" fixed bottom-0 right-0 z-40 h-full w-[250px]  drop-shadow-xl flex md:hidden justify-end  ">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* ICONS */}

      {/* <div className="gap-6 flex flex-row text-colBlue01 ">
        <Image src={Search01} alt="searchIcon" width={25}></Image>

        <Image src={AddUser01} alt="addUserIcon" width={25}></Image>
      </div> */}

      <button
        onClick={() => setShowModal(true)}
        className="text-white font-dmsans font-medium bg-colBlue02 px-4 py-2 rounded-lg hidden md:flex "
      >
        Get early access
      </button>

      <RegistrationModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      >
        <EarlyAccessForm />
      </RegistrationModal>
    </header>
  );
}

export default MainHeader;
