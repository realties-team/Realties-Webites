import { Africa1, Africa2, Africa3 } from "@/assets";
import Image from "next/image";

type Props = {};

const AfricaMost = (props: Props) => {
  return (
    <div className="flex flex-col mt-32">
      <div className="text-center font-urbanist font-bold text-3xl text-colBlue01">
        <h3>
          Africa`s most trusted community of <br /> properties, clients and
          owner
        </h3>
      </div>

      <div className="  text-colGray05 font-urbanist text-lg flex flex-col md:flex-row items-center  mx-auto  gap-16 md:gap-48 mt-16 ">
        {/* 1 */}
        <div className="  text-colGray05 font-urbanist text-lg  flex flex-col items-center">
          <Image src={Africa1} alt="AfricaImage" width={80} className="" />
          <p
            className="mt-4
          "
          >
            Get registered
          </p>
        </div>

        {/* 2 */}

        <div className="flex flex-col items-center ">
          <Image src={Africa2} alt="AfricaImage" width={80} />
          <p className="mt-4">Initiate launch</p>
        </div>

        {/* 3 */}
        <div className="flex flex-col items-center ">
          <Image src={Africa3} alt="AfricaImage" width={80} />
          <p className="mt-4">Search and get the property of your dreams</p>
        </div>
      </div>
    </div>
  );
};

export default AfricaMost;
