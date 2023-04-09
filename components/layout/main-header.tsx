import Image from "next/image";
import Link from "next/link";
import { AddUser, AddUser01, Search01, Logo, logo, Search } from "@/assets";
import RegistrationModal from "../RegistrationModal";
import EarlyAccessForm from "../EarlyAccessForm";
import { useState } from "react";

//import AnchorLink from "react-anchor-link-smooth-scroll";

function MainHeader() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <header className="flex items-center justify-between mr-20 ">
      <Image src={logo} alt="LogoImage" width={200} height={200} />

      {/*Navigation Links  */}

      <nav>
        <ul className="flex flex-row gap-8 text-xl font-urbanist font-medium">
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
      </nav>

      {/* ICONS */}

      {/* <div className="gap-6 flex flex-row text-colBlue01 ">
        <Image src={Search01} alt="searchIcon" width={25}></Image>

        <Image src={AddUser01} alt="addUserIcon" width={25}></Image>
      </div> */}

      <button
        onClick={() => setShowModal(true)}
        className="text-white font-dmsans font-medium bg-colBlue02 px-4 py-2 rounded-lg   "
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
