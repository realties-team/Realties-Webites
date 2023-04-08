import { footerLogo, twitter, ig, facebook } from "@/assets";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-colBlue04  mt-32">
        <div className=" mt-24  mb-24 flex flex-col md:flex-row justify-between  ">
          {/*Left Container  */}
          <div className="flex flex-col ml-10 md:ml-20">
            <Image src={footerLogo} alt="logoImage" width={200} />

            <h2
              className="text-white
             font-urbanist font-bold  text-2xl    "
            >
              Subscribe to our <br /> news letter
            </h2>

            {/* newsletter container */}
            <div className="bg-white rounded-lg  px-6 py-1 relative mt-4 w-80 ">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Type your email"
                className="outline-none py-2 px-4 rounded-lg "
              />

              <button className="bg-colBlue04 rounded-lg text-white px-4 py-1 absolute top-2 right-2 font-urbanist font-semibold text-xl mb-20 ">
                Send
              </button>
            </div>
          </div>

          {/* Right Container */}
          <div className="flex flex-col md:flex-row gap-12 mr-24 mt-10 ml-10">
            {/* 1 */}
            <div className=" flex flex-col text-white ">
              <h2 className="font-urbanist font-bold text-lg">How It Works</h2>
              <div className="space-y-2 mt-6 font-urbanist font-medium text-lg flex flex-col ">
                <Link href="/">Download App</Link>

                <Link href="/">Rent a House 🏡</Link>
                <p> </p>

                <Link href="/">Buy a House 🏡</Link>

                <Link href="/">Cell a Home</Link>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col text-white ">
              <h2 className="font-urbanist font-bold text-lg">Featured</h2>
              <div className="space-y-2 mt-6 font-urbanist font-medium text-lg flex flex-col  ">
                <Link href="/">
                  Estate <br /> Management
                </Link>

                <Link href="/">
                  Property <br /> Management
                </Link>
              </div>
            </div>

            {/* 3 */}
            <div className="flex flex-col text-white">
              <h2 className="font-urbanist font-bold text-lg">Help</h2>

              <div className=" flex flex-col space-y-2 mt-6 font-urbanist font-medium text-lg  ">
                <Link href="/">About</Link>
                <Link href="/">Contact Us</Link>
                <Link href="/">Testimony</Link>
                <Link href="/">FAQs</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Socials */}

        <div className=" justify-between flex flex-row">
          <div className=" flex flex-col md:flex-row  border-top border-t-2 text-white gap-6 border-white ml-4 mx-0 md:mx-20 px-4 py-8 font-urbanist font-medium md:w-full w-96  ">
            <h4
              className="text-white

          "
            >
              © {currentYear} Realties Tech. All rights reserved
            </h4>

            <Link href="/">Privacy Policy </Link>

            <Link href="/ ">Terms and Conditions</Link>

            {/* Social Media Logos */}
            <div className="   flex gap-4  md:ml-96">
              <Link href="https://www.linkedin.com/in/marcellus-ifeanyi/">
                <Image src={facebook} alt="facebook-logo" width={40} />

                {/* <FontAwesomeIcon icon={faFacebook} color="white" size="2xl" /> */}
              </Link>

              <Link href="https://www.linkedin.com/in/marcellus-ifeanyi/">
                <Image src={ig} alt="InstagramLogo" width={40} />

                {/* <FontAwesomeIcon icon={faInstagram} color="white" size="2xl" /> */}
              </Link>

              <Link href="https://twitter.com/Mars_Energy">
                <Image src={twitter} alt="twitterLogo" width={40} />

                {/* <FontAwesomeIcon icon={faTwitter} color="white" size="2xl" /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
