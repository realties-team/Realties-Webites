import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import Harmburger from "./harmburger";
import { AddUser, AddUser01, Search01, Logo, logo, Search } from "@/assets";

//import AnchorLink from "react-anchor-link-smooth-scroll";

function MainHeader() {
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
          <li className="text-colGray02">
            <Link href="/testimony">Testimony</Link>
          </li>
        </ul>
      </nav>

      {/* ICONS */}

      <div className="gap-6 flex flex-row text-colBlue01 ">
        <Image src={Search01} alt="searchIcon" width={25}></Image>

        <Image src={AddUser01} alt="addUserIcon" width={25}></Image>
      </div>
    </header>
  );
}

export default MainHeader;
