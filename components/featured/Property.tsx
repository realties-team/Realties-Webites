import {
  property01,
  property02,
  property03,
  property04,
  property05,
  property06,
  userLocation,
  Rating01,
  Rating02,
  Rating03,
  Rating04,
  Rating05,
  Rating06,
  smallDetail01,
  smallDetail02,
  smallDetail03,
  smallDetail04,
  smallDetail05,
  smallDetail06,
} from "@/assets";
import { PropertyType } from "../ui/type";
import PropertyCart from "./PropertyCart";

type Props = {};

const propertiesCart: Array<PropertyType> = [
  {
    id: 1,
    images: property01,
    heading: "HOUSE",
    title: "Modern Town House",
    locationIcon: userLocation,
    location: "Jl Letda Nasir 45 RT 001/02",
    price: "$80",
    detail: "View Detail",
    rating: Rating01,
    smallDetail: smallDetail01,
  },
  {
    id: 2,
    images: property02,
    heading: "HOTEL",
    title: "Sriwijaya Hotel",
    locationIcon: userLocation,
    location: "Rumuigbo, Port Harcourt, Rivers",
    price: "75,000",
    detail: "View Detail",
    rating: Rating02,
    smallDetail: smallDetail02,
  },

  {
    id: 3,
    images: property03,
    heading: "HOTEL & APARTMENT",
    title: "Ngayogyakarta In House",
    locationIcon: userLocation,
    location: "Rumuigbo, Port Harcourt, Rivers",
    price: "75,000",
    detail: "View Detail",
    rating: Rating03,
    smallDetail: smallDetail03,
  },

  {
    id: 4,
    images: property04,
    heading: "APARTMENT",
    title: "Metropolitan Hotel & Club",
    locationIcon: userLocation,
    location: "Bandung, 10281, Indonesia",
    price: "$35",
    detail: "View Detail",
    rating: Rating04,
    smallDetail: smallDetail04,
  },

  {
    id: 5,
    images: property05,
    heading: "LAND",
    title: "Ngayogyakarta In House",
    locationIcon: userLocation,
    location: "Rumuigbo, Port Harcourt, Rivers",
    price: "75,000",
    detail: "View Detail",
    rating: Rating05,
    smallDetail: smallDetail05,
  },

  {
    id: 6,
    images: property06,
    heading: "APARTMENT",
    title: "Ngayogyakarta In House",
    locationIcon: userLocation,
    location: "Rumuigbo, Port Harcourt, Rivers",
    price: "75,000",
    detail: "View Detail",
    rating: Rating06,
    smallDetail: smallDetail06,
  },
];

const Property = (props: Props) => {
  return (
    <>
      <div
        className="mx-20 grid grid-col-1 md:grid-cols-3 gap-6 mt-10 
         "
      >
        {propertiesCart.map((propertyCart: PropertyType, index: number) => (
          <PropertyCart
            key={propertyCart.id}
            images={propertyCart.images}
            heading={propertyCart.heading}
            title={propertyCart.title}
            locationIcon={propertyCart.locationIcon}
            location={propertyCart.location}
            price={propertyCart.price}
            detail={propertyCart.detail}
            rating={propertyCart.rating}
            smallDetail={propertyCart.smallDetail}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Property;
