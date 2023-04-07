import { house, building } from "@/assets";
import Image from "next/image";
import React from "react";
import Property from "./Property";

Property;

type Props = {};

const Featured = (props: Props) => {
  return (
    <>
      <div className="mt-32 ">
        <h2 className="text-colBlue01 font-urbanist font-semibold text-2xl flex text-center justify-center">
          Featured Property
        </h2>

        {/* Buttons */}

        <div className="flex flex-row  items-center justify-center gap-4  mt-10  ">
          <button className="bg-colBlue02 rounded-lg text-white  flex flex-row  gap-4 px-6 py-3">
            <div>
              <Image src={house} alt="vectorImage" width={30} height={30} />
            </div>
            <div className="mt-2 font-urbanist font-semibold text-lg ">
              Buy a house
            </div>
          </button>

          <button className=" border-colGray03 border-2 rounded-lg text-white  flex flex-row  gap-4 px-6 py-3">
            <div>
              <Image src={building} alt="vectorImage" width={33} height={33} />
            </div>
            <div className="mt-1 font-urbanist font-semibold text-lg text-colGray01">
              Rent a house
            </div>
          </button>
        </div>

        {/* Input Select Container */}

        <div className="flex flex-col md:flex-row mt-14  gap-8 justify-center mx-10">
          {/* <select
            name=""
            id=""
            className="border-2 border-colGray03 px-10 py-2 rounded-lg h-12 text-colGray01 font-urbanist font-medium text-lg  text-left  w-48 bg-white outline-none "
          >
            <option value="">Select Type</option>
            <option value="">building</option>
          </select> */}

          <div className="border-2 border-colGray03 px-2  py-2 rounded-lg h-12  font-urbanist font-medium text-lg text-colGray01  ">
            <select
              name=""
              id=""
              className=" w-full md:w-48 bg-white outline-none"
            >
              <option value="">Select Type</option>
              <option value="">house</option>
              <option value="">building</option>
            </select>
          </div>

          <div className="border-2 border-colGray03 px-2  py-2 rounded-lg h-12  font-urbanist font-medium text-lg text-colGray01  ">
            <select
              name=""
              id=""
              className=" w-full md:w-48  bg-white outline-none"
            >
              <option value="">Select location </option>
              <option value="">house</option>
              <option value="">building</option>
            </select>
          </div>

          <div className="border-2 border-colGray03 px-2  py-2 rounded-lg h-12  font-urbanist font-medium text-lg text-colGray01  ">
            <select
              name=""
              id=""
              className=" w-full md:w-48 bg-white outline-none"
            >
              <option value="">Range Budget</option>
              <option value="">house</option>
              <option value="">building</option>
            </select>
          </div>

          <button className="border-2 bg-colGray03 border-colGray03 px-10  py-2 rounded-lg h-12 font-urbanist font-semibold text-colGray01 ">
            Search Now
          </button>
        </div>
      </div>

      <Property />
    </>
  );
};

export default Featured;
