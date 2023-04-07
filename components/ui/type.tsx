import { StaticImageData } from "next/image";

export interface ServiceType {
  icon: StaticImageData;
  id: number;
  title: string;
  description: string;
}

export interface PropertyType {
  id: number;
  images: StaticImageData;
  locationIcon: StaticImageData;
  heading: string;
  title: string;
  location: string;
  price: string;
  detail: string;
  rating: StaticImageData;
  smallDetail: StaticImageData;
}
