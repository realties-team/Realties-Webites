import { thankYou } from "@/assets";
import Image from "next/image";

type Props = {};

const ThankYou = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 mb-20 px-8 ">
        <Image src={thankYou} alt="ThankYouSymbol" width={300} />

        <p className="mt-8 font-urbanist font-medium text-lg">
          You have successfully joined our waitlist and you’re one <br /> of the
          few that will enjoy early access when we go live
        </p>

        <button className="bg-colBlue04 px-12 py-2 font-urbanist font-bold text-white mt-8 rounded ">
          Done
        </button>
      </div>
    </>
  );
};

export default ThankYou;
