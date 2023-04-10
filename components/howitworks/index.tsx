import { bodyImage, icon01, icon02, icon03 } from "@/assets";
import React from "react";
import Services from "./Services";
import { ServiceType } from "../ui/type";
import StepsToUse from "./StepsToUse";

const services: Array<ServiceType> = [
  {
    id: 1,
    icon: icon01,
    title: "For Real Estate Managers",
    description: "We are available at all times for discussions ",
  },

  {
    id: 2,
    icon: icon02,
    title: "Private Agents",
    description: "We are available at all times for discussions ",
  },

  {
    id: 3,
    icon: icon03,
    title: "End Users",
    description: "We are available at all times for discussions ",
  },
];

type Props = {};

const HowItWorks = (props: Props) => {
  return (
    <>
      <div>
        <div className="flex flex-col mt-32 mx-20 ">
          {/* Mobile */}

          <div className=" flex justify-center items-center flex-col text-colBlack01 font-urbanist font-semibold text-2xl md:hidden ">
            <h2>We Are Providing</h2>
            <h2>Best Services</h2>
          </div>

          {/* Desktop */}
          <h2 className="  justify-center items-center hidden md:flex text-colBlack01 font-urbanist font-semibold text-2xl ">
            We Are Providing Best Services
          </h2>

          <div className="flex flex-col md:flex-row justify-around mt-10 mb-20">
            {services.map((service: ServiceType) => (
              <Services
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        <StepsToUse />
      </div>
    </>
  );
};

export default HowItWorks;
