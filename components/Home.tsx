import { heroImage } from "@/assets";
import Image from "next/image";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col md:flex-row  mx-12  justify-between mt-10">
        {/* Right Container... Contents and Buttons */}

        <div className="flex flex-col  w-3/5">
          <h1 className="text-[70px] font-urbanist text-colBlue01 font-semibold leading-1">
            Find your best home with virtual tour
          </h1>

          <p className="mt-6 text-colGray01 font-urbanist font-normal text-lg  ">
            This application for the needs of buying, rent, and selling <br />
            property. Can see the details of the building you are <br /> looking
            for using the 3D virtual room feature.
          </p>

          {/* Buttons Container */}

          <div className="flex flex-col md:flex-row gap-4 mt-10 ">
            <button className="px-12 py-3 border-2 rounded-lg bg-colBlue04 border-colBlue04 text-white font-urbanist font-semibold ">
              Coming soon <br /> ios & Playstore
            </button>

            <button className="px-12 py-3 border-2 rounded-lg bg-white border-colBlue04 text-colBlue01 font-urbanist font-semibold ">
              Get Early Access
            </button>
          </div>
        </div>

        {/* Left Container... Hero Image */}

        <Image src={heroImage} alt="heroImage" width={600} height={600} />
      </div>
    </>
  );
};

export default Home;
