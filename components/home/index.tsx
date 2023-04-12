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
      <div className="flex flex-col xl:flex-row  mx-12  justify-between mt-32 md:mt-20">
        {/* Right Container... Contents and Buttons */}

        <div className="flex flex-col ">
          <h1 className="lg:text-[70px] text-[50px]  font-urbanist text-colBlue01 font-semibold leading-tight">
            Uniting all your real estate dreams in a single button
          </h1>

          {/* Mobile */}

          <div className="mt-6 text-colGray01 font-urbanist font-normal text-lg md:hidden flex flex-col ">
            <p>
              This application is suitable and convenient <br /> for the need of
              buying, selling and renting <br /> of properties. <br /> As well
              as saving up for paying of rent and accruing of properties. An
              inventiveness in <br /> real estate providing solutions for the
              aim <br /> of making your real estate dreams turning <br /> into
              reality.
            </p>

            <p>
              A platform enabling quick and convenient interactions in wrapped
              up your real <br /> estate deal.
            </p>

            <p>
              Owning a property is a huge investment <br /> and Realities is a
              fast and reliable platform <br /> in achieving that goal.
            </p>
            <p>
              Trusted to save up your rent there by <br /> building a healthy
              Tenant and landlord relationship
            </p>
          </div>

          {/* Desktop */}

          <div className="mt-6 text-colGray01 font-urbanist font-normal text-lg hidden md:flex flex-col">
            <p>
              This application is suitable and convenient for the need of
              buying, <br /> selling and renting of properties. As well as
              saving up for paying <br /> of rent and accruing of properties. An
              inventiveness in real estate <br />
              providing solutions for the aim of making your real estate dreams{" "}
              <br />
              turning into reality.
            </p>
            <p>
              A platform enabling quick and convenient interactions in wrapped
              <br /> up your real estate deal.
            </p>

            <p>
              Owning a property is a huge investment and Realities is a fast and{" "}
              <br />
              reliable platform in achieving that goal.
            </p>
            <p>
              Trusted to save up your rent there by building a healthy Tenants{" "}
              <br />
              and landlord relationship
            </p>
          </div>

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

          <div className="flex flex-col md:flex-row gap-4 mt-8 ">
            <button className="flex flex-row h-16  justify-center  items-center gap-4 bg-white py-2 px-6 border-2 border-colBlue04 rounded-lg">
              <Image
                src={PlayStoreIcon}
                alt="GooglePlayStoreIcon"
                width={40}
                className=" md:ml-0"
              />

              <div className="flex flex-col leading-tight">
                <p className="text-colBlue02 font-dmsans font-normal">
                  Coming Soon
                </p>
                <h2 className="font-urbanist font-bold text-colBlue02  md:text-lg">
                  Google Play
                </h2>
              </div>
            </button>

            <button className="flex flex-row h-16 gap-4 items-center justify-center bg-white py-2 px-6 border-2 border-colBlue04 rounded-lg ">
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

        <Image
          src={heroImage2}
          alt="heroImage"
          width={600}
          height={600}
          className="mt-20 md:mt-0"
        />
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
