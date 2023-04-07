import Image, { StaticImageData } from "next/image";

type Props = {
  images: StaticImageData;
  heading: string;
  title: string;
  locationIcon: StaticImageData;
  location: string;
  price: string;
  detail: string;
  rating: StaticImageData;
  smallDetail: StaticImageData;
  index: number;
};

const PropertyCart = ({
  images,
  heading,
  title,
  locationIcon,
  location,
  price,
  detail,
  rating,
  smallDetail,
  index,
}: Props) => {
  const formattedPrice = price.startsWith("$") ? price : `₦${price}`;

  return (
    <>
      <div className="">
        <div className="mt-10 pl-2 pr-2 ">
          <div className="relative">
            <Image src={images} alt="propertyImages" width={450} height={450} />
            <Image
              src={rating}
              alt="ratings-Image"
              width={80}
              height={80}
              className="absolute top-3 left-3"
            />
          </div>

          <div className=" mt-4">
            <h2 className=" ml-2 text-colBlue05 font-urbanist font-medium text-xl">
              {heading}
            </h2>

            <h3 className="ml-2 text-colBlue01 font-urbanist font-bold text-xl">
              {title}
            </h3>

            <div className="flex flex-row mt-3">
              <Image
                src={locationIcon}
                alt="location-Icon"
                width={30}
                height={30}
                className="ml-1"
              />

              <p className="ml-2 text-colGray01 font-urbanist font-semibold mt-1">
                {location}
              </p>
            </div>

            <div className="flex flex-row mt-3 gap-2">
              <Image
                src={smallDetail}
                alt="small-detail image"
                width={250}
                className="ml-2"
              />

              <p className="ml-2 text-colBlue02 font-urbanist font-bold text-xl   ">
                {formattedPrice}
              </p>
            </div>

            <div className=" mt-4">
              <p
                className={`${
                  index === 0
                    ? "bg-colBlue03 text-white"
                    : "border-colGray03 border-2 text-colGray01"
                }   ml-2 text-center py-2 rounded-lg  font-urbanist font-bold  `}
              >
                {detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyCart;
