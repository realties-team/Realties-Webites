import { AppStoreIcon, PlayStoreIcon, rocket, threePhones } from "@/assets";
import Image from "next/image";

import GetNotifiedForm from "./GetNotifiedForm";

type Props = {};

const GetNotified = (props: Props) => {
  return (
    <>
      {/* Background */}
      <div className="flex flex-row bg-colBlue04 mx-auto w-5/6 rounded-2xl mt-32">
        {/* Main Container */}

        <div className="flex w-screen p-4 md:flex-row flex-col ">
          {/* Left*/}
          <div className="flex flex-col p-6 ml-10 mt-6">
            <h2
              className="font-urbanist font-bold text-white text-2xl
                      
            "
            >
              Get notified when <br /> we launch
            </h2>
            <Image
              src={rocket}
              alt="rocketLaunchImage"
              width={100}
              className="mt-6"
            />
          </div>

          {/* Right */}

          <GetNotifiedForm />
        </div>
      </div>
      ;
    </>
  );
};

export default GetNotified;
