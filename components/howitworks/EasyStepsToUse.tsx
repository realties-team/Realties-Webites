import { laptopImage, frame01, frame02, frame03, frame04 } from "@/assets";
import Image from "next/image";
import React from "react";

type Props = {};

const EasyStepsToUse = (props: Props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row  mt-32 ">
        {/* DESKTOP  */}
        <div className="w-1/2 hidden md:flex   ">
          <Image src={laptopImage} alt="bodyImage" width={1000} height={800} />
        </div>

        <div className="w-1/2 ml-10 hidden md:flex  flex-col  ">
          <h2 className="font-urbanist text-colBlue01 font-semibold text-[48px]  leading-none ">
            Easy steps to use our <br /> real estate service
          </h2>

          {/* 01 */}
          <div className="flex flex-row  mt-10 gap-4">
            <div>
              <Image src={frame01} alt="frame" height={55} width={55} />
            </div>
            <div>
              <h3 className="text-colBlue01 font-urbanist font-bold text-xl">
                Download and Register
              </h3>
              <p className="text-colGray01 font-urbanist font-medium text-lg mt-2">
                Download our app from{" "}
                <span className="text-colBlue01">playstore</span> or{" "}
                <span className="text-colBlue01">applestore.</span>
                After <br /> that you can create an account in the application
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="flex flex-row mt-5 gap-4">
            <div>
              <Image src={frame02} alt="frame" height={55} width={55} />
            </div>
            <div>
              <h3 className="text-colBlue01 font-urbanist font-bold text-xl">
                Choose your property
              </h3>
              <p className="text-colGray01 font-urbanist font-medium text-lg mt-2">
                Choose your best property, make sure you are suitable <br /> on
                the property etc.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="flex flex-row mt-4 gap-4">
            <div>
              <Image src={frame03} alt="frame" height={55} width={55} />
            </div>
            <div>
              <h3 className="text-colBlue01 font-urbanist font-bold text-xl">
                Book your choices
              </h3>
              <p className="text-colGray01 font-urbanist font-medium text-lg mt-2">
                Third, you should book your property, after you click <br />{" "}
                booking button we will direct you to payment page,
              </p>
            </div>
          </div>

          {/* 04 */}
          <div className="flex flex-row mt-4 gap-4">
            <div>
              <Image src={frame04} alt="frame" height={55} width={55} />
            </div>
            <div>
              <h3 className="text-colBlue01 font-urbanist font-bold text-xl">
                Payment in app
              </h3>
              <p className="text-colGray01 font-urbanist font-medium text-lg mt-2">
                Finally, you can make payments on the application to <br /> book
                the property of your choice
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE  */}

        <div className=" md:hidden flex mr-4  ">
          <Image src={laptopImage} alt="bodyImage" width={1000} height={800} />
        </div>

        <div className=" flex md:hidden  flex-col mx-12 mt-12  ">
          <h2 className="font-urbanist text-colBlue01 font-semibold text-[35px]  leading-none text-center">
            Easy steps to <br /> use our real <br /> estate service
          </h2>

          {/* 01 */}
          <div className="flex flex-row  mt-10 gap-4">
            <div>
              <Image src={frame01} alt="frame" height={55} width={55} />
            </div>
            <div>
              <h3 className="text-colBlue01 font-urbanist font-bold text-xl">
                Download and Register
              </h3>
              <p className="text-colGray01 font-urbanist font-medium text-lg mt-2">
                Download our app from{" "}
                <span className="text-colBlue01">playstore</span> or{" "}
                <span className="text-colBlue01">applestore.</span>
                After <br /> that you can create an account in the application
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="flex flex-row mt-5 gap-4">
            <div>
              <Image src={frame02} alt="frame" height={55} width={55} />
            </div>
            <div>
              <h3 className="text-colBlue01 font-urbanist font-bold text-xl">
                Choose your property
              </h3>
              <p className="text-colGray01 font-urbanist font-medium text-lg mt-2">
                Choose your best property, make sure you are suitable <br /> on
                the property etc.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="flex flex-row mt-4 gap-4">
            <div>
              <Image src={frame03} alt="frame" height={55} width={55} />
            </div>
            <div>
              <h3 className="text-colBlue01 font-urbanist font-bold text-xl">
                Book your choices
              </h3>
              <p className="text-colGray01 font-urbanist font-medium text-lg mt-2">
                Third, you should book your property, after you click <br />{" "}
                booking button we will direct you to payment page,
              </p>
            </div>
          </div>

          {/* 04 */}
          <div className="flex flex-row mt-4 gap-4">
            <div>
              <Image src={frame04} alt="frame" height={55} width={55} />
            </div>
            <div>
              <h3 className="text-colBlue01 font-urbanist font-bold text-xl">
                Payment in app
              </h3>
              <p className="text-colGray01 font-urbanist font-medium text-lg mt-2">
                Finally, you can make payments on the application to <br /> book
                the property of your choice
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EasyStepsToUse;
