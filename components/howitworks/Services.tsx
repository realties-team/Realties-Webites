import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  icon: StaticImageData;
  title: string;
  description: string;
};

const Services = ({ icon, title, description }: Props) => {
  return (
    <>
      {/* <div className="flex flex-col mt-14 gap-0 "> */}
      {/* <h2 className="flex justify-center items-center ">
          We Are Providing Best Services
        </h2> */}

      <div className="   flex-row justify-around mt-4 md:mt-10 mb-5 md:mb-10">
        <div className="flex flex-col">
          {/* <div className="flex justify-center items-center h-screen"></div> */}
          <Image
            src={icon}
            alt="iconsImage"
            width={50}
            height={50}
            className=" flex items-center justify-center mx-auto "
          />
          <h3 className="text-center mt-4 text-colBlack01 font-dmsans  font-semibold">
            {title}{" "}
          </h3>
          <p className="mt-2 text-colGray01 font-dmsans font-normal">
            {description}{" "}
          </p>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default Services;
