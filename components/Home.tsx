import {
  AppStoreIcon,
  heroImage,
  heroImage2,
  PlayStoreIcon,
  rocket,
} from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import EarlyAccessForm from "./EarlyAccessForm";
import RegistrationModal from "./RegistrationModal";

type Props = {};

const Home = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col md:flex-row  mx-12  justify-between mt-20">
        {/* Right Container... Contents and Buttons */}

        <div className="flex flex-col  w-3/5">
          <h1 className="text-[70px] font-urbanist text-colBlue01 font-semibold leading-tight">
            Uniting all your real estate dreams in a single button
          </h1>

          <p className="mt-6 text-colGray01 font-urbanist font-normal text-lg  ">
            This application for the needs of buying, rent, and selling <br />
            property. Uniting all your real estate dreams in a single button
          </p>

          {/* Buttons Container */}

          {/* <div className="flex flex-col md:flex-row gap-4 mt-10 ">
            <button
              className="px-12 py-3 border-2 rounded-lg bg-colBlue04 border-colBlue04 text-white font-urbanist font-semibold"
              onClick={() => setShowModal(true)}
            >
              Coming soon <br /> ios & Playstore
            </button>

            <button
              className="px-12 py-3 border-2 rounded-lg bg-white border-colBlue04 text-colBlue01 font-urbanist font-semibold"
              onClick={() => setShowModal(true)}
            >
              Get Early Access
            </button>
          </div> */}

          <div className="flex flex-row gap-4 mt-8 ">
            <button className="flex flex-row h-16 gap-4 bg-white py-2 px-6 border-2 border-colBlue04 rounded-lg">
              <Image src={PlayStoreIcon} alt="GooglePlayStoreIcon" width={40} />

              <div className="flex flex-col leading-tight">
                <p className="text-colBlue02 font-dmsans font-normal">
                  Coming Soon{" "}
                </p>
                <h2 className="font-urbanist font-bold text-colBlue02 text-lg">
                  Google Play
                </h2>
              </div>
            </button>

            <button className="flex flex-row h-16 gap-4 bg-white py-2 px-6 border-2 border-colBlue04 rounded-lg ">
              <Image
                src={AppStoreIcon}
                alt="GooglePlayStoreIcon"
                width={40}
                onClick={() => setShowModal(true)}
              />

              <div className=" flex flex-col leading-tight ">
                <p className="text-colBlue02 font-dmsans font-normal">
                  Coming Soon{" "}
                </p>
                <h2 className="font-urbanist font-bold text-colBlue02 text-xl">
                  Apple Store
                </h2>
              </div>
            </button>
          </div>
        </div>

        {/* Left Container... Hero Image */}

        <Image src={heroImage2} alt="heroImage" width={600} height={600} />
      </div>

      <RegistrationModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      >
        <EarlyAccessForm />
      </RegistrationModal>
    </>
  );
};

export default Home;
