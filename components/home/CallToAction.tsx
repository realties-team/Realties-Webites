import { AppStoreIcon, PlayStoreIcon, threePhones } from "@/assets";
import Image from "next/image";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <>
      <div
        className="mt-64 relative flex-col
        "
      >
        {/* Content Container */}
        <div className="flex flex-row bg-colBlue02 mx-auto items-center w-5/6 rounded-2xl">
          <div className="my-8 mx-20">
            <h2 className="font-urbanist font-bold text-[48px] text-white leading-tight  ">
              Get your property <br /> very easily
            </h2>

            <p className="font-urbanist text-base font-medium text-white mt-4">
              You can download app in playstore or appstore. After <br /> that
              you can create an account in the application
            </p>

            <div className="flex flex-row gap-8 mt-8 ">
              <button className="flex flex-row  gap-4 bg-white rounded-lg py-2 px-4">
                <Image
                  src={PlayStoreIcon}
                  alt="GooglePlayStoreIcon"
                  width={50}
                />

                <div className="flex flex-col">
                  <p className="text-colBlue02 font-dmsans font-normal">
                    Coming Soon{" "}
                  </p>
                  <h2 className="font-urbanist font-bold text-colBlue02 text-xl">
                    Google Play
                  </h2>
                </div>
              </button>

              <button className="flex flex-row gap-4 bg-white rounded-lg py-2 px-4">
                <Image
                  src={AppStoreIcon}
                  alt="GooglePlayStoreIcon"
                  width={50}
                />

                <div className="flex flex-col">
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
        </div>

        {/* CTA Image  */}
        <Image
          src={threePhones}
          alt="threePhonesIcon"
          width={720}
          className="-mt-36 absolute top-0 right-14"
        />
      </div>
      ;
    </>
  );
};

export default CallToAction;
