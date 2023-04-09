import { rocket } from "@/assets";
import Image from "next/image";

type Props = {};

const EarlyAccessForm = (props: Props) => {
  return (
    <form>
      {/* Main Container */}

      <div className="px-10">
        <div className="flex flex-col items-center justify-center mt-10 mb-20 px-8 ">
          <h3 className="font-urbanist font-bold text-2xl">
            Be the first to know when
          </h3>
          <h3 className="font-urbanist font-bold text-2xl">we launch...</h3>

          <Image
            src={rocket}
            alt="rocket-image"
            width={100}
            className="mt-6 "
          />

          {/* Form Input container */}

          <div className="flex flex-row  gap-8 mt-10 ">
            {/* Left side */}
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1 ">
                <label
                  htmlFor="name"
                  className="font-urbanist font-semibold   text-colGray05
                "
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="border-colGray04 border rounded outline-none py-1 px-2"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="font-urbanist font-semibold   text-colGray05
                "
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="border-colGray04 border rounded outline-none py-1 px-2"
                />
              </div>
            </div>

            {/* Right side */}

            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="address"
                  className="font-urbanist font-semibold   text-colGray05
                "
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  required
                  className="border-colGray04 border rounded outline-none py-1 px-2"
                />
              </div>

              <div className="flex flex-col space-y-1 ">
                <label
                  htmlFor="phoneNumber"
                  className="font-urbanist font-semibold   text-colGray05
                "
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  required
                  className="border-colGray04 border rounded outline-none py-1 px-2"
                />
              </div>
            </div>
          </div>

          <button className="bg-colBlue04 rounded-lg text-white px-8 py-3 gap-2 mt-14 flex flex-row font-urbanist font-bold text-lg ">
            Get early access
            <Image
              src={rocket}
              alt="rocketLaunchIcon"
              width={20}
              className="mt-1"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default EarlyAccessForm;
