import {
  footerLogo,
  youtube,
  appleStore,
  googlePlayStore,
  Facebook,
  Twitter,
  linkedin,
  insta,
} from "@/assets";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-colBlue04  mt-32">
        <div className=" mt-24  mb-24 flex flex-col md:flex-row justify-between mx-10  md:mx-20  ">
          {/*Left Container  */}
          <div className="flex flex-col ml-5 md:ml-20">
            <Image
              src={footerLogo}
              alt="logoImage"
              width={200}
              className="-ml-10"
            />
            {/* 
            <h2
              className="text-white
             font-urbanist font-bold  text-2xl    "
            >
              Subscribe to our <br /> news letter
            </h2>

            newsletter container
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
            </div> */}

            <p className="text-white">
              At Realties, we are committed to putting your interest first.{" "}
              <br /> Join our leading clients already using Realties to find{" "}
              their <br /> dream properties while enjoying automated
              transactional benefits
            </p>
          </div>

          {/* Right Container */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mr-24 mt-10 ml-5 md:ml-10">
            {/* 1 */}
            <div className=" flex flex-col text-white ">
              <h2 className="font-urbanist font-bold text-lg">How It Works</h2>
              <div className="space-y-1 md:space-y-2 mt-2 md:mt-6 font-urbanist font-medium text-lg flex flex-col ">
                <Link href="/">About </Link>

                <Link href="/">How Realties works</Link>
                <p> </p>

                <Link href="/">Testimonies</Link>

                <Link href="/">collaborations</Link>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col text-white ">
              <h2 className="font-urbanist font-bold text-lg">Contact Us</h2>
              <div className="space-y-1 md:space-y-2 mt-2 md:mt-6 font-urbanist font-medium text-lg flex flex-col  ">
                <Link href="/">News letter</Link>

                <Link href="/">Send us a message</Link>
              </div>
            </div>

            {/* 3 */}
            <div className="flex flex-col text-white">
              <h2 className="font-urbanist font-bold text-lg">Others</h2>

              <div className=" flex flex-col space-y-1  md:space-y-2 mt-2 md:mt-6 font-urbanist font-medium text-lg  ">
                <Link href="/">Our FAQ</Link>
                <Link href="/">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Socials */}

        <div className="border-white border-b-2 py-2  w-4/5 ml-14 md:ml-40  ">
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 ">
            {/* socialLogos */}
            <div className="flex flex-row  gap-4 ml-2 ">
              <Link href="https://www.linkedin.com/company/realtiestech/">
                <Image src={linkedin} alt="linkedinLogo" width={40} />
              </Link>

              <Link href="https://twitter.com/realtiestech">
                <Image src={Twitter} alt="TwitterLogo" width={40} />
              </Link>

              <Link href="https://www.facebook.com/realtiestech">
                <Image src={Facebook} alt="FacebookLogo" width={40} />
              </Link>

              <Link href="https://instagram.com/realtiestech?igshid=YmMyMTA2M2Y=">
                <Image src={insta} alt="InstaLogo" width={40} />
              </Link>

              <Link href="https://youtube.com/@realtiestech">
                <Image src={youtube} alt="YoutubeLogo" width={40} />
              </Link>
            </div>

            {/* PlayStore, AppStore */}

            <div className="flex flex-col md:flex-row gap-4 mt-8 mr-1 ">
              <Link href="#getNotified">
                <Image
                  src={googlePlayStore}
                  alt="googlePlayStore"
                  width={150}
                />
              </Link>

              <Link href="#getNotified">
                <Image src={appleStore} alt="appleStore" width={165} />
              </Link>
            </div>
          </div>
        </div>

        <h4 className="text-white mt-4 ml-16 md:ml-40">
          © {currentYear} Realties Tech. All rights reserved
        </h4>

        <div className=" justify-between flex flex-row  ">
          <div className=" flex flex-col md:flex-row   text-white gap-6 border-white ml-4 mx-0 md:mx-20 px-4 py-8 font-urbanist font-medium md:w-full w-96"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
